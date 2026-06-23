from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('enviar', views.enviar_dados, name='enviar_dados'),
]
