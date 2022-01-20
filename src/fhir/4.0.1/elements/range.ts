import { Element } from "./element";
import { SimpleQuantity } from "./simpleQuantity";

class Range extends Element{
    private $low: SimpleQuantity;
    public get low(): SimpleQuantity {
        return this.$low;
    }
    public set low(value: SimpleQuantity) {
        this.$low = value;
        this.$.set('low', value.toJSON())
    }

    private $high: SimpleQuantity;
    public get high(): SimpleQuantity {
        return this.$high;
    }
    public set high(value: SimpleQuantity) {
        this.$high = value;
        this.$.set('high', value.toJSON())
    }

    constructor(parameters?) {
        super(parameters)
        let _:Map<string, any> = new Map(Object.entries(parameters || {}))

        _.forEach((value: any, key: string) => {
            switch (key) {
                case 'low':
                    this.low = new SimpleQuantity(value)
                    break;
                case 'high':
                    this.high = new SimpleQuantity(value)
                    break;
                default:
                    break;
            }
        })
    }
}

export {Range}