let students = [
  { name: "Ali", lessons: ["Math", "Science"], grades: [80, 90] },
  { name: "Emre", lessons: ["Math", "Science"], grades: [70, 80] },
  { name: "Hasan", lessons: ["Math", "Science"], grades: [40, 50] },
  { name: "Selma", lessons: ["Math", "Science"], grades: [50, 90] },
];

const averages = students.map((student) => {
  let total = 0;
  for (let i = 0; i < student.grades.length; i++) {
    total += student.grades[i];
  }
  let avg = total / student.grades.length;
  return { name: student.name, average: avg };  // bu sekilde name i de return ederek ortalamayla birlikte görebiliriz
});

console.log(averages);
