class Animal:
    fur_color: "orange"

    def speak(self):
        raise NotImplementedError

    def eat(self):
        raise NotImplementedError

    def chase(self):
        pass

class HouseCat(Animal):
    def speak(self):
        print("Meeeeeowww")

    def eat(self):
        print("eat Fish")

cat = HouseCat()
cat.speak()
cat.eat()
