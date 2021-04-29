names = ['leo', 'dani', 'ygor', 'amanda', 'lucas']
for name in names:
    print(name)

nameSearch = input('what name are you search: ')

if nameSearch in names:
    print('this name is in the list')

elif nameSearch not in names: 
    print('this isnt in the list')

key = "age"

person = {
    "name":"leonidas",
    "age": 21
}

if key in person:
    print("estamos aqui")
