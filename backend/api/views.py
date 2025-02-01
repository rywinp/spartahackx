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


class Create