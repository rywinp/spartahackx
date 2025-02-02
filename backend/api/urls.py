from django.urls import path
from .views import *

urlpatterns = [
    path('quests/', get_quests),
    path('')
]