from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime
from django.core.exceptions import ValidationError

class User(models.Model):
    class Role(models.TextChoices):
        PARENT = "Parent", "Parent"
        CHILD = "Child", "Child"

    role = models.CharField(max_length=6, choices=Role.choices)

class ParentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="parent_profile")
    clerk_id = models.CharField(max_length=256)

class ChildProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="child_profile")
    username = models.CharField(max_length=256)
    password = models.CharField(max_length=256)
    first_name = models.CharField(max_length=256)
    last_name = models.CharField(max_length=256)
    points = models.PositiveIntegerField(default=0)
    parent = models.ForeignKey(ParentProfile, on_delete=models.CASCADE)

    def complete_quest(self, quest):
        child_quest, created = ChildQuest.objects.get_or_create(
            child=self,
            quest=quest
        )
        if not child_quest.completed:
            child_quest.completed = True
            child_quest.date_completed = datetime.now()
            child_quest.save()
            self.points += quest.points
            self.save()
            PointTransaction.objects.create(
                child=self,
                amount=quest.points,
                description=f"Completed quest: {quest.quest_name}"
            )

    def redeem_reward(self, reward):
        if self.points < reward.points:
            raise ValidationError("Insufficient points for this reward")
            
        child_reward, created = ChildReward.objects.get_or_create(
            child=self,
            reward=reward
        )
        if not child_reward.redeemed:
            child_reward.redeemed = True
            child_reward.date_redeemed = datetime.now()
            child_reward.save()
            self.points -= reward.points
            self.save()
            PointTransaction.objects.create(
                child=self,
                amount=-reward.points,
                description=f"Redeemed reward: {reward.reward_name}"
            )
    
class ChildQuest(models.Model):
    child = models.ForeignKey(
        'ChildProfile', 
        on_delete=models.CASCADE,
        related_name='quest_attempts'
    )
    quest = models.ForeignKey('Quest', on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    date_completed = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        unique_together = [('child', 'quest')]

class ChildReward(models.Model):
    child = models.ForeignKey(
        'ChildProfile', 
        on_delete=models.CASCADE,
        related_name='reward_claims'
    )
    reward = models.ForeignKey('Reward', on_delete=models.CASCADE)
    redeemed = models.BooleanField(default=False)
    date_redeemed = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        unique_together = [('child', 'reward')]

class PointTransaction(models.Model):
    child = models.ForeignKey(
        'ChildProfile',
        on_delete=models.CASCADE,
        related_name='transactions'
    )
    amount = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=255)

class Quest(models.Model):
    quest_name = models.CharField(max_length=30)
    quest_description = models.TextField()
    children = models.ManyToManyField(
        ChildProfile,
        through=ChildReward,
        related_name='available_rewards'
    )
    parent = models.ForeignKey(ParentProfile, on_delete=models.CASCADE)
    points = models.PositiveIntegerField()

    class Meta:
        ordering = ["quest_name"]

    def __str__(self):
        return self.quest_name

class Reward(models.Model):
    reward_name = models.CharField(max_length=30)
    reward_description = models.TextField()
    children = models.ManyToManyField(
        ChildProfile,
        through=ChildReward,
        related_name='available_rewards'
    )
    parent = models.ForeignKey(ParentProfile, on_delete=models.CASCADE)
    points = models.PositiveIntegerField()

    class Meta:
        ordering = ["reward_name"]

    def __str__(self):
        return self.reward_name