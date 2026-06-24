from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
from .forms import UsuarioForm

def cadastro_usuario(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)
        
        if form.is_valid():
            # Cria o objeto mas não salva ainda para podermos criptografar a senha
            usuario = form.save(commit=False)
            usuario.senha = make_password(form.cleaned_data['senha'])
            usuario.save()  # Salva no banco de dados

            # Redireciona para home ou página de sucesso
            return HttpResponse("✅ Cadastro realizado com sucesso! Bem-vindo ao FacilitaSaúde.")

    else:
        form = UsuarioForm()

    return render(request, 'login.html', {'form': form})
