items = ['one', 'two', 'three', 'four', 'five']

for item in items:
    if item == 'two' or item=='four':
        continue
    print(item)


for item in items:
    if item == 'four':
        break
    print(item)

num = 0
while num <= 20:
    num = num + 1
    if num %2 == 0:
        continue
    print(num)



 