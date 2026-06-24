"""
URL configuration for FacilitaSaúde project.
"""
from django.urls import path, include

urlpatterns = [
    path('', include('back_end.urls')),
]
