from django.urls import path
from .views import *

urlpatterns = [
    path('create-parent/', create_parent, name='create-parent'),
    path('create-child/', create_child, name='create-child'),
    path('create-quest/', create_quest, name='create-quest'),
    path('create-reward/', create_reward, name='create-reward'),
    path('get-quests/', get_quests, name='get-quests'),
    path('get-rewards/', get_rewards, name='get-rewards'),
]