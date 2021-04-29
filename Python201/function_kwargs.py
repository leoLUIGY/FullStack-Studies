def person(**kwargs ):
    print(kwargs)
    print(type(kwargs))

    if 'age' in kwargs:
        print("Your age is ", kwargs.get("age"))

person(name="leo", age=37, brain="huge")

def order_pizza(name, address, **toppings):
    print(f"order is for {name}")
    print(f"ship is for {address}")
    price = 18.00
    for key, value in toppings.items():
        price = price + 2.00
    
    print(f"the total price is {price}")
    return price

total_price = order_pizza("leo","brazil", jalapenos=True, extra_cheese=True, ham=True)