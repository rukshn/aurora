import { Element } from "./element";

class CodeSystemFilter extends Element {
  #code: string;
  public get code(): string {
    return this.#code;
  }
  public set code(value: string) {
    this.#code = value;
    this.$.set("code", value);
  }

  #_code: Element;
  public get _code(): Element {
    return this.#_code;
  }
  public set _code(v: Element) {
    this.#_code = v;
    this.$.set("_code", v.toJSON());
  }

  #description: string;
  public get description(): string {
    return this.#description;
  }
  public set description(v: string) {
    this.#description = v;
  }

  #_description: Element;
  public get _description(): Element {
    return this.#_description;
  }

  public set _description(v: Element) {
    this.#_description = v;
    this.$.set("_description", v.toJSON());
  }

  #operator: Array<string>;
  public get operator(): Array<string> {
    return this.#operator;
  }
  public set operator(v: Array<string>) {
    this.#operator = v;
    this.$.set("operator", v);
  }

  #_operator: Array<Element>;
  public get _operator(): Array<Element> {
    return this.#_operator;
  }
  public set _operator(v: Array<Element>) {
    this.#_operator = v;
    this.$.set(
      "_operator",
      v.map((v) => v.toJSON())
    );
  }

  #value: string;
  public get value(): string {
    return this.#value;
  }
  public set value(v: string) {
    this.#value = v;
    this.$.set("value", v);
  }

  #_value;
  public get _value(): Element {
    return this.#_value;
  }
  public set _value(v: Element) {
    this.#_value = v;
    this.$.set("_value", v.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "code":
          this.code = value;
          break;
        case "_code":
          this._code = new Element(value);
          break;
        case "description":
          this.description = value;
          break;
        case "_description":
          this._description = new Element(value);
          break;
        case "operator":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.operator = value;
          break;
        case "_operator":
          this.#_operator = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Element(v);
            this.#_operator.push(temp);
          });
          break;
        case "value":
          this.value = value;
          break;
        case "_value":
          this._value = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export { CodeSystemFilter };
