num = input("Enter a number: ")
num2 = input("Enter a second number: ")
try:
    num = int(num)
    num2 = int(num2)
    total = num / num2
except ValueError:
    print("num or num2 was not a valid number")
except ZeroDivisionError:
    print("Number could not be divided")
except Exception as e:
    print(type(e))
    num = "Unknown"

print(num)