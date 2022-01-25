import { Element } from "./element";

class ValueSetComposeIncludeFilter extends Element {
  #property: string;
  public get property(): string {
    return this.#property;
  }
  public set property(v: string) {
    this.#property = v;
    this.$.set("property", v);
  }

  #_property: Element;
  public get _property(): Element {
    return this.#_property;
  }
  public set _property(v: Element) {
    this.#_property = v;
    this.$.set("_property", v.toJSON());
  }

  #op: string;
  public get op(): string {
    return this.#op;
  }
  public set op(v: string) {
    this.#op = v;
    this.$.set("op", v);
  }

  #_op: Element;
  public get _op(): Element {
    return this.#_op;
  }
  public set _op(v: Element) {
    this.#_op = v;
    this.$.set("_op", v.toJSON());
  }

  #value: string;
  public get value(): string {
    return this.#value;
  }
  public set value(v: string) {
    this.#value = v;
    this.$.set("value", v);
  }

  #_value: Element;
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
        case "property":
          this.property = value;
          break;
        case "_property":
          this._property = new Element(value);
          break;
        case "op":
          this.op = value;
          break;
        case "_op":
          this._op = new Element(value);
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

export { ValueSetComposeIncludeFilter };
