interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johanson",
  age: 20,
  location: "Washington"
};

const student2: Student = {
  firstName: "Sam",
  lastName: "Smith",
  age: 22,
  location: "New York"
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table: HTMLTableElement = document.createElement("table");
  table.border = "1";

  // Header row
  const header = table.insertRow();
  header.insertCell().textContent = "First Name";
  header.insertCell().textContent = "Location";

  // Data rows
  studentsList.forEach((student) => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
  });

  document.body.appendChild(table);
});
