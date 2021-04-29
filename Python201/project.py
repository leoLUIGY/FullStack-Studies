import requests

name = input("what pokemon you want to know? ")
req = requests.get(f"https://pokeapi.co/api/v2/pokemon/{name}")
if req.status_code == 200:
    pokemon = req.json()

    for pok in pokemon['abilities']:
        print(pok['ability']['name'])
else:
    print("pokemon not found")