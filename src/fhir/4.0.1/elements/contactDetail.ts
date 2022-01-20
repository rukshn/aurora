import { Element } from "./element";
import { ContactPoint } from './contactPoint'

class ContactDetail extends Element {
    private $name: string;
    public get name(): string {
        return this.$name;
    }
    public set name(value: string) {
        this.$name = value;
        this.$.set('name', value)
    }

    private $_name: Element;
    public get _name(): Element {
        return this.$_name;
    }
    public set _name(value: Element) {
        this.$_name = value;
        this.$.set('_name', value.toJSON())
    }

    private $telecom: Array<ContactPoint>;
    public get telecom(): Array<ContactPoint> {
        return this.$telecom;
    }
    public set telecom(value: Array<ContactPoint>) {
        this.$telecom = value;
        this.$.set('telecom', value.map((v) => v.toJSON()))
    }

    constructor(parameters?) {
        super(parameters)
        let _:Map<string, any> = new Map(Object.entries(parameters || {}))

        _.forEach((value: any, key: string) => {
            switch (key) {
                case 'name':
                    this.name = value
                    break;
                case '_name':
                    this._name = new Element(value)
                    break;
                case 'telecom':
                    this.$telecom = []
                    if (!Array.isArray(value)) {
                        value = [value]
                    }
                    (value as Array<any>).map((v) => {
                        let temp = new ContactPoint(v)
                        this.$telecom.push(temp)
                    })
                    this.$.set('telecom', this.$telecom.map((t) => t.toJSON()))
                    break;
                default:
                    break;
            }
        })
    }
}

export {ContactDetail}