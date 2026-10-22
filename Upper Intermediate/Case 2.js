
const students = [
  { name: "Alex", major: "Informatics" },
  { name: "Sarah", major: "Management" },
  { name: "John", major: "Informatics" },
  { name: "Maria", major: "Accounting" }
];

function groupStudentsByMajor(students) {
  const groups = {};

  for (const student of students) {
    const major = student.major;

    if (!groups[major]) {
      groups[major] = [];
    }

    groups[major].push(student);
  }

  return groups;
}

const result = groupStudentsByMajor(students);

console.log(JSON.stringify(result, null, 2));
