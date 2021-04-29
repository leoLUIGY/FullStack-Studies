
def my_decorator(func):
    def wrapper():
        print("Do something here")
        func()
        print("Original fuction is finished")
    return wrapper

@my_decorator
def myfunc():
    print("My name is Leo")

myfunc()