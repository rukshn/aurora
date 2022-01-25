import { Element } from "./element";
import { ValueSetExpansionContains } from "./valueSetExpansionContains";
import { ValueSetExpansionParameter } from "./valueSetExpansionParameter";

class ValueSetExpansion extends Element {
  #identifier: string;
  public get identifier(): string {
    return this.#identifier;
  }
  public set identifier(v: string) {
    this.#identifier = v;
    this.$.set("identifier", v);
  }

  #_identifier: Element;
  public get _identifier(): Element {
    return this.#_identifier;
  }
  public set _identifier(v: Element) {
    this.#_identifier = v;
    this.$.set("identifier", v.toJSON());
  }

  #timestamp: string;
  public get timestamp(): string {
    return this.#timestamp;
  }
  public set timestamp(v: string) {
    this.#timestamp = v;
    this.$.set("timestamp", v);
  }

  #_timestamp: Element;
  public get _timestamp(): Element {
    return this.#_timestamp;
  }
  public set _timestamp(v: Element) {
    this.#_timestamp = v;
    this.$.set("_timestamp", v.toJSON());
  }

  #total: number;
  public get total(): number {
    return this.#total;
  }
  public set total(v: number) {
    this.#total = v;
    this.$.set("total", v);
  }

  #_total: Element;
  public get _total(): Element {
    return this.#_total;
  }
  public set _total(v: Element) {
    this.#_total = v;
    this.$.set("_total", v.toJSON());
  }

  #offset: number;
  public get offset(): number {
    return this.#offset;
  }
  public set offset(v: number) {
    this.#offset = v;
    this.$.set("offset", v);
  }

  #_offset: Element;
  public get _offset(): Element {
    return this.#_offset;
  }
  public set _offset(v: Element) {
    this.#_offset = v;
    this.$.set("_offset", v.toJSON());
  }

  #parameter: Array<ValueSetExpansionParameter>;
  public get parameter(): Array<ValueSetExpansionParameter> {
    return this.#parameter;
  }
  public set parameter(v: Array<ValueSetExpansionParameter>) {
    this.#parameter = v;
    this.$.set(
      "parameter",
      v.map((v) => v.toJSON())
    );
  }

  #contains: Array<ValueSetExpansionContains>;
  public get contains(): Array<ValueSetExpansionContains> {
    return this.#contains;
  }
  public set contains(v: Array<ValueSetExpansionContains>) {
    this.#contains = v;
    this.$.set(
      "contains",
      v.map((v) => v.toJSON())
    );
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "identifier":
          this.identifier = value;
          break;
        case "_identifier":
          this._identifier = new Element(value);
          break;
        case "timestamp":
          this.timestamp = value;
          break;
        case "_timestamp":
          this._timestamp = new Element(value);
          break;
        case "total":
          this.total = value;
          break;
        case "_total":
          this._total = new Element(value);
          break;
        case "offset":
          this.offset = value;
          break;
        case "_offset":
          this._offset = new Element(value);
          break;
        case "parameter":
          this.#parameter = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ValueSetExpansionParameter(v);
            this.#parameter.push(temp);
          });
          this.parameter = this.#parameter;
          break;
        case "contains":
          this.#contains = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ValueSetExpansionContains(v);
            this.#contains.push(temp);
          });
          this.contains = this.#contains;
          break;
        default:
          break;
      }
    });
  }
}

export { ValueSetExpansion };
