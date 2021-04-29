animals = ["Gully", "rhubarb", "zephr", "henry"]
for index, animal in enumerate(animals):
    if(index %2 == 0):
        continue
    print(animal)