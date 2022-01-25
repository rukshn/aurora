import { Element } from "./element";

class ValueSetExpansionParameter extends Element {
  #name: string;
  public get name(): string {
    return this.#name;
  }
  public set name(v: string) {
    this.#name = v;
    this.$.set("name", v);
  }

  #_name: Element;
  public get _name(): Element {
    return this.#_name;
  }
  public set _name(v: Element) {
    this.#_name = v;
    this.$.set("_name", v.toJSON());
  }

  #valueString: string;
  public get valueString(): string {
    return this.#valueString;
  }
  public set valueString(v: string) {
    this.#valueString = v;
    this.$.set("valueString", v);
  }

  #valueBoolean: boolean;
  public get valueBoolean(): boolean {
    return this.#valueBoolean;
  }
  public set valueBoolean(v: boolean) {
    this.#valueBoolean = v;
    this.$.set("valueBoolean", v);
  }

  #valueDateTime: string;
  public get valueDateTime(): string {
    return this.#valueDateTime;
  }
  public set valueDateTime(v: string) {
    this.#valueDateTime = v;
    this.$.set("valueDateTime", v);
  }

  #valueInteger: number;
  public get valueInteger(): number {
    return this.#valueInteger;
  }
  public set valueInteger(v: number) {
    this.#valueInteger = v;
    this.$.set("valueInteger", v);
  }

  #valueDecimal: number;
  public get valueDecimal(): number {
    return this.#valueDecimal;
  }
  public set valueDecimal(v: number) {
    this.#valueDecimal = v;
    this.$.set("valueDecimal", v);
  }

  #valueUri: string;
  public get valueUri(): string {
    return this.#valueUri;
  }
  public set valueUri(v: string) {
    this.#valueUri = v;
    this.$.set("valueUri", v);
  }

  #valueCode: string;
  public get valueCode(): string {
    return this.#valueCode;
  }
  public set valueCode(v: string) {
    this.#valueCode = v;
    this.$.set("valueCode", v);
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "name":
          this.name = value;
          break;
        case "_name":
          this._name = new Element(value);
          break;
        case "valueString":
          this.valueString = value;
          break;
        case "valueInteger":
          this.valueInteger = value;
          break;
        case "valueDecimal":
          this.valueDecimal = value;
          break;
        case "valueBoolean":
          this.valueBoolean = value;
          break;
        case "valueDateTime":
          this.valueDateTime = value;
          break;
        case "valueUri":
          this.valueUri = value;
          break;
        case "valueCode":
          this.valueCode = value;
          break;
        default:
          break;
      }
    });
  }
}

export { ValueSetExpansionParameter };
