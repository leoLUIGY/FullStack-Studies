class Animal:
    animal_type = "Unknown"

    def __init__(self,  fur_color):
        print(f"fur color if {fur_color}")
        self.fur_color = fur_color 
        pass

    def speak(self):
        raise NotImplementedError

    def get_fur_color(self):
        print(self.fur_color)

class HouseCat(Animal):
    def __init__(self, fur_color):
        super().__init__(fur_color)
        self.animal_type = "house cat"
        print(self.animal_type)

    def speak(self):
        print("Meeeeeowww")



cat = HouseCat("gray")
cat.speak()
cat.get_fur_color()
