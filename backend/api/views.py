from django.shortcuts import render
from django.contrib.auth.hashers import make_password
from rest_framework.generics import ListCreateAPIView, CreateAPIView, ListAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from .models import *
from .serializers import *

@api_view(['POST'])
def create_parent(request):
    user = User.objects.create(
        role=User.Role.PARENT
    )
    clerk_user_id = request.data.get('clerk_user_id')
    parent, _ = ParentProfile.objects.get_or_create(user=user, clerk_user_id=clerk_user_id)
    return Response({"parent_id": parent.clerk_id}, status=status.HTTP_200_OK)

@api_view(['POST'])
def create_child(request):
    role = request.role
    if(role != User.Role.PARENT):
        Response({'error': 'Must be a parent to send request'}, status=status.HTTP_401_UNAUTHORIZED)
    clerk_id = request.data.get('clerk_id')

    try:
        parent = ParentProfile.objects.get(clerk_id=clerk_id)
        username = request.data.get('username')
        password = request.data.get('password')
        password = make_password(password)
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        user = User.objects.create(
            role=User.Role.CHILD  # <-- Role set here
        )
        child = ChildProfile.objects.create(
            user=user,
            username=username,
            password=password,
            parent=parent,
            first_name=first_name,
            last_name=last_name,
            coins=0,
        )
        return Response({'id': child.username}, status=status.HTTP_201_CREATED)
    except ParentProfile.DoesNotExist:
        return Response({'error': 'Invalid clerk_id'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_quest(request):
    role = request.role
    if(role != User.Role.PARENT):
        Response({'error': 'Must be a parent to send request'}, status=status.HTTP_401_UNAUTHORIZED)
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
    role = request.role
    if(role != User.Role.PARENT):
        Response({'error': 'Must be a parent to send request'}, status=status.HTTP_401_UNAUTHORIZED)
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