import { Coding } from "./coding";
import { Element } from "./element";
import { CodeableConcept } from "./codeableConcept";
import { Reference } from "./reference";
import { Quantity } from "./quantity";
import { Range } from "./range";

class UseageContext extends Element {
  #code: Coding;
  public get code(): Coding {
    return this.#code;
  }
  public set code(value: Coding) {
    this.#code = value;
    this.$.set("code", value.toJSON());
  }

  #valueCodeableConcept: CodeableConcept;
  public get valueCodeableConcept(): CodeableConcept {
    return this.#valueCodeableConcept;
  }
  public set valueCodeableConcept(value: CodeableConcept) {
    this.#valueCodeableConcept = value;
    this.$.set("valueCodeableConcept", value.toJSON());
  }

  #valueReference: Reference;
  public get valueReference(): Reference {
    return this.#valueReference;
  }
  public set valueReference(value: Reference) {
    this.#valueReference = value;
    this.$.set("valueReference", value.toJSON());
  }

  #valueQuantity: Quantity;
  public get valueQuantity(): Quantity {
    return this.#valueQuantity;
  }
  public set valueQuantity(value: Quantity) {
    this.valueQuantity = value;
    this.$.set("valueQuantity", value.toJSON());
  }

  #valueRange: Range;
  public get valueRange(): Range {
    return this.#valueRange;
  }
  public set valueRange(value: Range) {
    this.#valueRange = value;
    this.$.set("valueRange", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "code":
          this.code = new Coding(value);
          break;
        case "valueCodeableConcept":
          this.valueCodeableConcept = new CodeableConcept(value);
          break;
        case "valueReference":
          this.valueReference = new Reference(value);
          break;
        case "valueQuantity":
          this.valueQuantity = new Quantity(value);
          break;
        case "valueRange":
          this.valueRange = new Range(value);
          break;

        default:
          break;
      }
    });
  }
}

export { UseageContext };
