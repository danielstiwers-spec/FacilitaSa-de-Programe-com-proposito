from django import forms
from .models import Usuario

class UsuarioForm(forms.ModelForm):
    senha = forms.CharField(
        widget=forms.PasswordInput,
        label='Senha'
    )
    
    class Meta:
        model = Usuario
        fields = ['cpf', 'rg', 'email', 'senha']
        labels = {
            'cpf': 'CPF',
            'rg': 'RG',
            'email': 'Email',
            'senha': 'Senha'
        }
        widgets = {
            'cpf': forms.TextInput(attrs={'placeholder': '000.000.000-00', 'maxlength': '14'}),
            'rg': forms.TextInput(attrs={'placeholder': '00.000.000-0', 'maxlength': '12'}),
            'email': forms.EmailInput(attrs={'placeholder': 'nome@exemplo.com'}),
        }
