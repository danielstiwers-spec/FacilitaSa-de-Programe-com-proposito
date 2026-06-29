from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view, name='home'),
    path('login.html', views.login_view, name='login'),
    path('login/', views.login_view, name='login'),
    path('cadastro/', views.cadastro_usuario, name='cadastro'),
    path('logout/', views.logout_view, name='logout'),
    path('user-cadastrado/', views.user_cadastrado_view, name='user_cadastrado'),
    path('user-cadastrado.html', views.user_cadastrado_view),
    path('profile.html', views.profile_view),
    path('doubts.html', views.glossary_view, name='glossary'),
]
