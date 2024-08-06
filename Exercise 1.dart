//Exercise 1
//Alexis Carreos

void main() {
  // Create an instance of the Person class
  var person = new Person("John Doe", 25);

  // Call the introduce method
  person.introduce("John Doe", 25);

  // Call the haveBirthday method
  person.haveBirthday(25);
}

class Person {
  String? name;
  int? age;

  Person(this.name, this.age);

  void introduce(String? name, int? age) {
    print("Hello $name, welcome!\nYou are $age years old");
  }

  void haveBirthday(int? age) {
    if (age != null) {
      age += 1;
      ;
      print("Your age on your next birthday is $age.");
    } else {
      print("Age is not provided.");
    }
  }
}
