import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, object) {
        this._amount = amount;
        this._currency = object;
    }

    get _amount() {
        return this.amount;
    }

    set _amount(amount) {
        this.amount = amount;
    }
    
    get _currency() {
        return this.currency;
    }

    set _currency(currency) {
        if (currency instanceof Currency) {
            this.currency = currency;
        } else {
            throw new Error("Invalid currency");
        }
    }

    displayFullPrice() {
        return `${this.amount} ${this.currency.name} (${this.currency.code})`;
    }
}
