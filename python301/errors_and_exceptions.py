# try:
#     print("Trying 1 / 0")
#     total = 1/0

#     print("Trying")
# except Exception:
#     print("Exception")
#     total =0

# print(total)

num = input("what is a number? ")
try:
    num = int(num)
except Exception:
    num = "Unknown"
print(num)