let students = [
  { name: "Alex", lessons: ["Math", "Science"], grades: [80, 90] },
  { name: "John", lessons: ["Math", "Science"], grades: [70, 80] },
  { name: "Jerry", lessons: ["Math", "Science"], grades: [40, 50] },
  { name: "Tom", lessons: ["Math", "Science"], grades: [50, 90] },
];

const averages = students.map((student) => {
  let total = 0;
  for (let i = 0; i < student.grades.length; i++) {
    total += student.grades[i];
  }
  let avg = total / student.grades.length;
  return {
    Name: student.name,
    Average: avg,
    // Result: avg < 50 ? "Kaldı" : "Geçti",
  };
});

console.log(averages);

const passedStudent = (averages) => {
  return averages.map((student) => {
    let result = "";

    if (student.Average < 50) {
      result = "Kaldı";
    } else {
      result = "Geçti";
    }

    return {
      Name: student.Name,
      Result: result,
    };
  });
};

const results = passedStudent(averages);
console.log(results);
