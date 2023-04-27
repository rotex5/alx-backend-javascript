interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

function createEmployee(salary: number | string): Director | Teacher {
  if (Number(salary) < 500) return new Teacher();
  else return new Director(); 
}

/*
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
*/

const isDirector = (employee: Director | Teacher): boolean => employee instanceof Director;

function executeWork(employee: Director | Teacher): void {
  const output = employee instanceof Director? employee.workDirectorTasks() : employee.workTeacherTasks();
  console.log(output);
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
