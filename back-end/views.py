from django.shortcuts import render
from django.http import HttpResponse
from .models import Usuario
from django.contrib.auth.hashers import make_password

# Substitui o @app.route('/')
def index(request):
    return render(request, 'login.html')

# Substitui o @app.route('/enviar', methods=['POST'])
def enviar_dados(request):
    if request.method == 'POST':
        # request.POST.get substitui o request.form.get do Flask
        cpf_info = request.POST.get('cpf')
        rg_info = request.POST.get('rg')
        email_info = request.POST.get('email')
        senha_info = request.POST.get('senha')

        # Criptografa a senha antes de salvar (Segurança que faltava no Flask!)
        senha_criptografada = make_password(senha_info)

        # Salva no SQLite usando o ORM do Django (Sem códigos SQL manuais)
        novo_usuario = Usuario(
            cpf=cpf_info, 
            rg=rg_info, 
            email=email_info, 
            senha=senha_criptografada
        )
        novo_usuario.save()

        return HttpResponse("Dados cadastrados com sucesso no SQLite via Django!")
    
    return HttpResponse("Método não permitido.", status=405)
