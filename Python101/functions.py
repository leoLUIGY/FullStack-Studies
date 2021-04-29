def somename(name=None, food = 'pizza'):
    if name is None:
        name = "turist"
    elif name.lower() == "leonidas":
        print(f'god {name}')
    print(f'hello {name}. Lets it dome {food}')

somename('leonidas')

def someFunction():
    return "a value"

thing = someFunction()
print(thing)