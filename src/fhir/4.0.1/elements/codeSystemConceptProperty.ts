import { Concept } from "./codeSystemConcept";
import { Coding } from "./coding";
import { Element } from "./element";

class CodeSystemConceptProperty extends Element {
  #code: string;
  public get code(): string {
    return this.#code;
  }
  public set code(v: string) {
    this.code = v;
    this.$.set("code", v);
  }

  #_code: Element;
  public get _code(): Element {
    return this.#_code;
  }
  public set _code(v: Element) {
    this.#_code = v;
    this.$.set("_code", v.toJSON());
  }

  #valueCode: string;
  public get valueCode(): string {
    return this.#valueCode;
  }
  public set valueCode(v: string) {
    this.#valueCode = v;
    this.$.set("valueCode", v);
  }

  #_valueCode: Element;
  public get _valueCode(): Element {
    return this.#_valueCode;
  }
  public set _valueCode(v: Element) {
    this.#_valueCode = v;
    this.$.set("_valueCode", v.toJSON());
  }

  #valueCoding: Coding;
  public get valueCoding(): Coding {
    return this.#valueCoding;
  }
  public set valueCoding(v: Coding) {
    this.#valueCoding = v;
    this.$.set("valueCoding", v.toJSON());
  }

  #valueString: string;
  public get valueString(): string {
    return this.#valueString;
  }
  public set valueString(v: string) {
    this.#valueString = v;
    this.$.set("valueString", v);
  }

  #_valueString: Element;
  public get _valueString(): Element {
    return this.#_valueString;
  }
  public set _valueString(v: Element) {
    this.#_valueString = v;
    this.$.set("_valueString", v.toJSON());
  }

  #valueBoolean: boolean;
  public get valueBoolean(): boolean {
    return this.#valueBoolean;
  }
  public set valueBoolean(v: boolean) {
    this.#valueBoolean = v;
    this.$.set("valueBoolean", v);
  }

  #_valueBoolean: Element;
  public get _valueBoolean(): Element {
    return this.#_valueBoolean;
  }
  public set _valueBoolean(v: Element) {
    this.#_valueBoolean = v;
    this.$.set("_valueBoolean", v.toJSON());
  }

  #valueInteger: number;
  public get valueInteger(): number {
    return this.#valueInteger;
  }
  public set valueInteger(v: number) {
    this.#valueInteger = v;
    this.$.set("valueInteger", v);
  }

  #_valueInteger: Element;
  public get _valueInteger(): Element {
    return this.#_valueInteger;
  }
  public set _valueInteger(v: Element) {
    this.#_valueInteger = v;
    this.$.set("valueInteger", v.toJSON());
  }

  #valueDateTime: string;
  public get valueDateTime(): string {
    return this.#valueDateTime;
  }
  public set valueDateTime(v: string) {
    this.valueDateTime = v;
    this.$.set("valueDateTime", v);
  }

  #_valueDateTime: Element;
  public get _valueDateTime(): Element {
    return this.#_valueDateTime;
  }
  public set _valueDateTime(v: Element) {
    this.#_valueDateTime = v;
    this.$.set("_valueDateTime", v.toJSON());
  }

  #valueDecimal: number;
  public get valueDecimal(): number {
    return this.#valueDecimal;
  }
  public set valueDecimal(v: number) {
    this.#valueDecimal = v;
    this.$.set("valueDecimal", v);
  }

  #_valueDecimal: Element;
  public get _valueDecimal(): Element {
    return this.#_valueDecimal;
  }
  public set _valueDecimal(v: Element) {
    this.#_valueDecimal = v;
    this.$.set("valueDecimal", v.toJSON());
  }

  #concept: Array<Concept>;
  public get concept(): Array<Concept> {
    return this.#concept;
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
        case "valueCode":
          this.valueCode = value;
          break;
        case "_valueCode":
          this._valueCode = new Element(value);
          break;
        case "valueCoding":
          this.valueCoding = new Coding(value);
          break;
        case "valueString":
          this.valueString = value;
          break;
        case "_valueString":
          this._valueString = new Element(value);
          break;
        case "valueInteger":
          this.valueInteger = value;
          break;
        case "_valueInteger":
          this._valueInteger = new Element(value);
          break;
        case "valueBoolean":
          this.valueBoolean = value;
          break;
        case "_valueBoolean":
          this._valueBoolean = new Element(value);
          break;
        case "valueDecimal":
          this.valueDecimal = value;
          break;
        case "_valueDecimal":
          this._valueDecimal = new Element(value);
          break;
        case "valueDateTime":
          this.valueDateTime = value;
          break;
        case "_valueDateTime":
          this._valueDateTime = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export { CodeSystemConceptProperty };
