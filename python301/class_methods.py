class Animal:
    this_is_a_property = {
        'key': 'value 1'
    }
    this_list = ['leonidas', 'ygor', 'lucas', 'kaique']

    def add_name(self, name):
        self.this_list.append(name)
        return self.this_list

    def this_is_a_method(self):
        print(self.this_list)

    @property
    def get_gully(self):
        return self.this_list[2]

the_animal = Animal()
# the_animal.this_is_a_method()
# gully = the_animal.get_gully
# print("the cutest gato of all time is", gully)
the_animal.add_name("Kemilly")
print(the_animal.this_list)