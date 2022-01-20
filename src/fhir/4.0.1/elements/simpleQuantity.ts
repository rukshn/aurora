import { Quantity } from "./quantity";

class SimpleQuantity extends Quantity{
    constructor(parameters?) {
        super(parameters)
        delete this.comparator
        delete this._comparator
    }
}

export {SimpleQuantity}