export default class Currency{
    constructor(code, name){
        this._code = code;
        this._name = name;
    }
    get _name(){
        return this.name;
    }
    set _name(name){
        this.name = name;
    }
    get _code(){
        return this.code;
    }
    set _code(code){
        this.code = code
    }
    displayFullCurrency() {
        return `${this.name} (${this.code})`
    }

    
}