var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) { return firstName.charAt(0) + ". " + lastName; };
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        var _this = this;
        this.workOnHomework = function () { return 'Currently working'; };
        this.displayName = function () { return "" + _this.firstName; };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return StudentClass;
}());
var test = new StudentClass('may', 'tarek');
console.log(test.displayName());
console.log(test.workOnHomework());
