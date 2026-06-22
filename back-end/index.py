
import requests

url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

dados = requests.get(url).json()

for estado in dados:
    print(estado["nome"])

import requests

codigo = "7891000100103"

url = f"https://world.openfoodfacts.org/api/v0/product/{codigo}.json"

produto = requests.get(url).json()

print(produto["product"]["product_name"])

import pandas as pd

df = pd.read_excel("TACO.xlsx")

print(df.head())
print(df.columns)