from rest_framework import serializers
from .models import *

class ParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentProfile
        fields = '__all__'    

class ChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildProfile
        fields = '__all__'    

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = ['quest_name', 'quest_description', 'points']

class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = ['reward_name', 'reward_description', 'points']

  