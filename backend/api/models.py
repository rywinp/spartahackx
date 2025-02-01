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
    clerk_id = models.CharField()

class ChildProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="child_profile")
    username = models.CharField()
    password = models.CharField()
    first_name = models.CharField()
    last_name = models.CharField()
    coins = models.PositiveIntegerField()
    parent = models.ForeignKey(ParentProfile, on_delete=models.CASCADE)

class Quest(models.Model):
    task_name = models.CharField(max_length=30)
    task_description = models.TextField()
    children = models.ManyToManyField(ChildProfile, related_name='quests')

    class Meta:
        ordering = ["task_name"]

    def __str__(self):
        return self.task_name
    
    
class Reward(models.Model):
    reward_name = models.CharField(max_length=30)
    reward_description = models.TextField()
    children = models.ManyToManyField(ChildProfile, related_name='rewards')

    class Meta:
        ordering = ["reward_name"]

    def __str__(self):
        return self.reward_name
    
