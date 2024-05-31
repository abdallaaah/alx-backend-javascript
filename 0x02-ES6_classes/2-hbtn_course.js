export default class HolbertonCourse{
    constructor(name, length, students){
        this._name = name;
        this._length = length;
        this._students = students;
    }
    get _name(){
        return this.name;
    }
    set _name(namee){
        if(typeof namee === "string"){
            this.name = namee
        } else {
            throw new Error("Name must be a string")
        }
    }
    get _length(){
        return this.length
    }
    set _length(length){
        if (typeof length === "number"){
            this.length = length;
        } else {
            throw new Error("Length must be a number")
        }
    }
    get _students(){
        return this.students;
    }
    set _students(array){
        if (Array.isArray(array)){
            this.students = array;
        } else {
            throw new Error("Students must be a string")
        }
    }
}