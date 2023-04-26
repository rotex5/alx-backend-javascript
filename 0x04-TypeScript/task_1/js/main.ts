// interface representing a Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/*
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);
*/

interface Directors extends Teacher {
  numberOfReports: number,
}

/*
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
*/

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// console.log(printTeacher('Felix', 'Allan'));

// StudentClass interface
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework (): string {
    return 'Currently working';
  }

  displayName (): string {
    return this.firstName;
  }

}

/*
const student = new StudentClass('Luffy', 'Monkey .D');
console.log(student.displayName())
console.log(student.workOnHomework())
*/
