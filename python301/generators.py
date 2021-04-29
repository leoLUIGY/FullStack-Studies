def mygenerator():
    for num in range(14):
        yield num**num

my_var_gen = mygenerator()

all_numbers = list(my_var_gen)
print(all_numbers)


for big_num in mygenerator():
     print(big_num)