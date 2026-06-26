from django.db import models

class Usuario(models.Model):
    # O Django cria o campo 'id' automaticamente
    cpf = models.CharField(max_length=14)
    rg = models.CharField(max_length=12)
    email = models.EmailField()
    senha = models.CharField(max_length=128)  # Guardará a senha com segurança

    def __str__(self):
        return self.email


class GlossaryEntry(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    symptoms = models.TextField(blank=True)
    source = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['title']
        verbose_name = 'Entrada de Glossário'
        verbose_name_plural = 'Entradas de Glossário'

    def __str__(self):
        return self.title
