from django.db import models
from django.contrib.auth.models import AbstractUser

# AbstractUser default fields:
# id
# password
# last_login
# is_superuser
# username (Special, Unique Constraint)
# first_name
# last_name
# email (Special)
# is_staff
# is_active
# date_joined
from django.contrib.auth.models import AbstractUser
from django.db import models

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
    points = models.PositiveIntegerField()
    parent = models.ForeignKey(ParentProfile, on_delete=models.CASCADE)

class Quest(models.Model):
    quest_name = models.CharField(max_length=30)
    quest_description = models.TextField()
    children = models.ManyToManyField(ChildProfile, related_name='quests')
    parent = models.ForeignKey(ParentProfile, on_delete=models.CASCADE)
    points = models.PositiveIntegerField()

    class Meta:
        ordering = ["quest_name"]

    def __str__(self):
        return self.quest_name
    
    
class Reward(models.Model):
    reward_name = models.CharField(max_length=30)
    reward_description = models.TextField()
    children = models.ManyToManyField(ChildProfile, related_name='rewards')
    parent = models.ForeignKey(ParentProfile, on_delete=models.CASCADE)
    points = models.PositiveIntegerField()

    class Meta:
        ordering = ["reward_name"]

    def __str__(self):
        return self.reward_name
    
