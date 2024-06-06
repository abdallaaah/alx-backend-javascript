interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [PropName: string]: any,
}


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);


  interface Directors extends Teacher {
    numberOfReports: number,
  }

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

  const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`
  
  class StudentClass {

    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework = () : string => 'Currently working';
    displayName = (): string => `${this.firstName}`

  } 
  
  const test = new StudentClass('may', 'tarek')
  console.log(test.displayName())
  console.log(test.workOnHomework())