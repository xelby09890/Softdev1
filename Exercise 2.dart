/*
Exercise 2: Working with Collections and Control Flow

Objective: Practice using Dart collections (lists and maps), and control flow structures (loops and conditionals).
Instructions:
1.	Review the code lab steps:
o	Define a map where the keys are student names and the values are their grades.
o	Write a function gradeSummary that:
	Takes the map as input.
	Calculates the average grade.
	Prints the name of each student along with their grade.
	Prints a summary indicating if the average grade is above or below a threshold (e.g., 75).
2.	Write a main function to:
o	Create a list of integers and a map of students and their grades.
o	Call the average function and print the result.
o	Call the gradeSummary function.
*/

void main() {
  Map<String, double> Grade = {
    'Bruno': 75.0,
    'Avril': 72.0,
    'Taylor': 78.0,
    'Oprah': 85.0,
    'Sam': 55.0
  };
  gradeSummary(Grade);

  List<int> l1 = [10, 20, 30, 25, 15];
  int sum1 = 0;

  for (int j = 0; j < l1.length; j++) {
    sum1 = sum1 + l1[j];
  }
  print(sum1 / l1.length);
}

void gradeSummary(Map<String, double> Grade) {
  const double limitGrade = 75.0;
  double sum = 0;
  int count = Grade.length;

  for (var grade1 in Grade.entries) {
    String name = grade1.key;
    double grade = grade1.value;
    sum += grade;
    print("$name: $grade");
  }
  double average = sum / count;
  print("The average grade is $average");

  if (average >= limitGrade) {
    print("The average grade is above the limit.");
    return;
  } else {
    print("The average grade is below the limit.");
    return;
  }
}
