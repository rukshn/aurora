import { Coding } from "./coding";
import { Element } from "./element";

class CodeSystemConceptDesignation extends Element {
  #language: string;
  public get language(): string {
    return this.#language;
  }
  public set language(v: string) {
    this.#language = v;
    this.$.set("language", v);
  }

  #_language: Element;
  public get _language(): Element {
    return this.#_language;
  }
  public set _language(v: Element) {
    this.#_language = v;
    this.$.set("_language", v.toJSON());
  }

  #use: Coding;
  public get use(): Coding {
    return this.#use;
  }
  public set use(v: Coding) {
    this.#use = v;
    this.$.set("use", v.toJSON());
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

    _.forEach((value: any, key: any) => {
      switch (key) {
        case "language":
          this.language = value;
          break;
        case "_language":
          this._language = new Element(value);
          break;
        case "use":
          this.use = new Coding(value);
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

export { CodeSystemConceptDesignation };
