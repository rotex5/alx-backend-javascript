interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Naruto',
  lastName: 'Uzumaki',
  age: 35,
  location: 'Hidden leaf',
};

const student2: Student = {
  firstName: 'Gaara',
  lastName: 'Rasa',
  age: 34,
  location: 'Sunagakure',
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const tRow = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const lastNameCell = document.createElement('td');
  // const ageCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  lastNameCell.textContent = student.lastName;
  // ageCell.textContent = toString(student.age);
  locationCell.textContent = student.location;

  tRow.appendChild(firstNameCell);
  tRow.appendChild(lastNameCell);
  // tRow.appendChild(ageCell);
  tRow.appendChild(locationCell);

  tBody.appendChild(tRow);

});

table.appendChild(tBody);
document.body.appendChild(table);
