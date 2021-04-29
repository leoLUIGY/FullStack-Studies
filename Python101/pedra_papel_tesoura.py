import random

print("Pedra,papel, tesoura")

win = False

while win == False:
    player  = input("pedra, papel ou tesoura: ")
    enemy = random.choice(["pedra", "papel", "tesoura"])
    if(player.lower() == enemy):
        print("empatou")
        print(enemy)
        continue
    elif((player.lower() == "pedra" and enemy == "tesoura") or 
    (player.lower() == "papel" and enemy == "pedra") or
    (player.lower() == "tesoura" and enemy == "papel")):
        print("vc venceu")
        print(enemy)
        win = True
        break
    else:
        print ("vc perdeu")
        print(enemy)
        continue
