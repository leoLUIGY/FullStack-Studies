class Animal:
    fur_color: "orange"

    def speak(self):
        raise NotImplementedError

    def eat(self):
        print("i am eating yum yum")

    def chase(self, animal="gazela"):
        print("i am chasing ", animal)

class HouseCat(Animal):
    def speak(self):
        print("Meeeeeowww")

    def eat(self):
        super().eat()
        print("i am eating salmon")

    def chase(self, animal):
        super().chase(animal)
        print(animal, "was caught")


cat = HouseCat()
cat.speak()
cat.eat()
cat.chase("mouse")
