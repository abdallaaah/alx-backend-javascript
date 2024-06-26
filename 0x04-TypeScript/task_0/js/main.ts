interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}
const ali: Student = {
    firstName: 'ali',
    lastName: 'mohamed',
    age: 5,
    location: 'new york'
}

const hassan: Student = {
    firstName: 'hassan',
    lastName: 'mohamed',
    age: 55,
    location: 'giza',

}

const studentsList: Array<Student> = [ali, hassan]
console.log(studentsList)

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';



thead.append(th1);
thead.append(th2);

table.append(thead);


studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.lastName;

  column1.style.border = '1px solid gray';
  column2.style.border = '1px solid gray';
  column1.style.padding = '.5rem';
  column2.style.padding = '.5rem';

  row.append(column1);
  row.append(column2)

  table.append(row);
});
