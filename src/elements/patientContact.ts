import { CodeableConcept } from "./codeableConcept";
import { ContactPoint } from "./contactPoint";
import { Element } from "./element";
import { HumanName } from "./humanName";
import { Period } from "./period";
import { Reference } from "./reference";

class PatientContact extends Element{
    private $relationship: Array<CodeableConcept>;
    public get relationship(): Array<CodeableConcept> {
        return this.$relationship;
    }
    public set relationship(value: Array<CodeableConcept>) {
        this.$relationship = value;
        this.$.set('relationship', value.map((r) => r.toJSON()))
    }

    private $name: HumanName;
    public get name(): HumanName {
        return this.$name;
    }
    public set name(value: HumanName) {
        this.$name = value;
        this.$.set('name', value.toJSON())
    }

    private $telecom: Array<ContactPoint>;
    public get telecom(): Array<ContactPoint> {
        return this.$telecom;
    }
    public set telecom(value: Array<ContactPoint>) {
        this.$telecom = value;
        this.$.set('telecom', value.map(t => t.toJSON()))
    }
    private $address;
    public get address() {
        return this.$address;
    }
    public set address(value) {
       
    }
    private $gender: string; 
    public get gender(): string {
        return this.$gender;
    }
    public set gender(value: string) {
        this.$gender = value;
    }

    private $_gender: Element;
    public get _gender(): Element {
        return this.$_gender;
    }
    public set _gender(value: Element) {
        this.$_gender = value;
        this.$.set('address', value.toJSON())
    }
    private $organization: Reference;
    public get organization(): Reference {
        return this.$organization;
    }
    public set organization(value: Reference) {
        this.$organization = value;
        this.$.set('organization', value.toJSON())
    }
    private $period: Period; 
    public get period(): Period {
        return this.$period;
    }
    public set period(value: Period) {
        this.$period = value;
        this.$.set('period', value.toJSON())
    }

    constructor(parameters?) {
        super(parameters)
        let _:Map<string, any> = new Map(Object.entries(parameters || {}))

        _.forEach((value: any, key: string) => {
            switch (key) {
                case 'relationship':
                    if (!Array.isArray(value)) {
                        value = [value]
                    }
                    (value as Array<any>).map((v) => {
                        let temp = new CodeableConcept(v)
                        this.$relationship.push(temp)
                    })
                    this.$.set('relationship', this.$relationship.map((r) => r.toJSON()))
                    break;
                case 'name':
                    this.name = new HumanName(value)
                    break;
                case 'telecom':
                    if (!Array.isArray(value)) {
                        value = [value]
                    }
                    (value as Array<any>).map((v) => {
                        let temp = new ContactPoint(v)
                        this.$telecom.push(temp)
                    })

                    this.telecom = this.$telecom
                    break;
                case 'Address':
                    break;
                case 'gender':
                    this.gender = value 
                    break
                case '_gender':
                    this._gender = new Element(value)
                    break;
                case 'organization':
                    this.organization = new Reference(value)
                    break;
                case 'period':
                    this.period = new Period(value)
                    break;
                default:
                    break;
            }
        })
    }
}


export {PatientContact}