class Animal:
    fur_color: "orange"

    def speak(self):
        print("Raaaawwwwwrrr")

    def eat(self):
        pass

    def chase(self):
        pass


class Tiger(Animal):
    pass


class HouseCat(Animal):
    fur_color = "Black"
    def speak(self):
        print("Meow")


tiger = Tiger()
tiger.speak()

cat = HouseCat()
cat.speak()

print(cat.fur_color)