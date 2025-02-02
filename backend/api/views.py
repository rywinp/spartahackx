from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, CreateAPIView, ListAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from .models import *
from .serializers import *

@api_view(['POST'])
def create_parent(request):
    clerk_user_id = request.data.get('clerk_user_id')
    parent, _ = ParentProfile.objects.get_or_create(clerk_user_id=clerk_user_id)
    return Response({"parent_id": parent.clerk_id}, status=status.HTTP_200_OK)

class GetQuests(ListAPIView):
    serializers = QuestSerializer
    
    def get_queryset(self):
        role = self.request.role
        if(role == User.Role.PARENT):
            clerk_user_id = self.request.clerk_user_id
            parent = ParentProfile.objects.get(clerk_user_id=clerk_user_id)
            return Quest.objects.filter(parent=parent)
        elif(role == User.Role.CHILD):
            username = self.request.username
            child = ChildProfile.objects.get(username=username)
            return child.quests.all()
        else:
            return Quest.objects.none()
        
get_quests = GetQuests.as_view()

@api_view(['POST'])
def create_quest(request):
    clerk_id = request.data.get('clerk_id')
    quest_name = request.data.get('quest_name')
    quest_description = request.data.get('quest_description')
    usernames = request.data.get('usernames', [])

    try:
        parent = ParentProfile.objects.get(clerk_id=clerk_id)
        children = ChildProfile.objects.filter(username__in=usernames, parent=parent)
        if len(children) != len(usernames):
            return Response({'error': 'Invalid child usernames'}, status=status.HTTP_400_BAD_REQUEST)

        quest = Quest.objects.create(quest_name=quest_name, quest_description=quest_description, parent=parent)
        quest.children.set(children)
        return Response({'id': quest.quest_name}, status=status.HTTP_201_CREATED)
    except ParentProfile.DoesNotExist:
        return Response({'error': 'Invalid clerk_id'}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def create_reward(request):
    clerk_id = request.data.get('clerk_id')
    reward_name = request.data.get('reward_name')
    reward_description = request.data.get('reward_description')
    usernames = request.data.get('usernames', [])

    try:
        parent = ParentProfile.objects.get(clerk_id=clerk_id)
        reward = Reward.objects.create(reward_name=reward_name, reward_description=reward_description, parent=parent)
        return Response({'id': reward.reward_name}, status=status.HTTP_201_CREATED)
    except ParentProfile.DoesNotExist:
        return Response({'error': 'Invalid clerk_id'}, status=status.HTTP_400_BAD_REQUEST)
