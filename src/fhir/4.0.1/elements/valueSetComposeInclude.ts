import { Element } from "./element";
import { ValueSetComposeIncludeConcept } from "./valueSetComposeIncludeConcept";
import { ValueSetComposeIncludeFilter } from "./valueSetComposeIncludeFilter";

class ValueSetComposeInclude extends Element {
  #system: string;
  public get system(): string {
    return this.#system;
  }
  public set system(v: string) {
    this.#system = v;
    this.$.set("system", v);
  }

  #_system: Element;
  public get _system(): Element {
    return this.#_system;
  }
  public set _system(v: Element) {
    this.#_system = v;
    this.$.set("_system", v.toJSON());
  }

  #version: string;
  public get version(): string {
    return this.#version;
  }
  public set version(v: string) {
    this.#version = v;
    this.$.set("version", v);
  }

  #_version: Element;
  public get _version(): Element {
    return this.#_version;
  }
  public set _version(v: Element) {
    this.#_version = v;
    this.$.set("_version", v.toJSON());
  }

  #concept: Array<ValueSetComposeIncludeConcept>;
  public get concept(): Array<ValueSetComposeIncludeConcept> {
    return this.#concept;
  }
  public set concept(v: Array<ValueSetComposeIncludeConcept>) {
    this.#concept = v;
    this.$.set(
      "concept",
      v.map((v) => v.toJSON())
    );
  }

  #filter: Array<ValueSetComposeIncludeFilter>;
  public get filter(): Array<ValueSetComposeIncludeFilter> {
    return this.#filter;
  }
  public set filter(v: Array<ValueSetComposeIncludeFilter>) {
    this.#filter = v;
    this.$.set(
      "filter",
      v.map((v) => v.toJSON())
    );
  }

  #valueSet: string;
  public get valueSet(): string {
    return this.#valueSet;
  }
  public set valueSet(v: string) {
    this.#valueSet = v;
  }

  #_valueSet: Element;
  public get _valueSet(): Element {
    return this.#_valueSet;
  }
  public set _valueSet(v: Element) {
    this.#_valueSet = v;
    this.$.set("valueSet", v.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "system":
          this.system = value;
          break;
        case "_system":
          this._system = new Element(value);
          break;
        case "version":
          this.version = value;
          break;
        case "_version":
          this._version = new Element(value);
          break;
        case "concept":
          this.#concept = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ValueSetComposeIncludeConcept(v);
            this.#concept.push(temp);
          });
          this.concept = this.#concept;
          break;
        case "filter":
          this.#filter = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ValueSetComposeIncludeFilter(v);
            this.#filter.push(temp);
          });
          this.filter = this.#filter;
          break;
        case "valueSet":
          this.valueSet = value;
          break;
        case "_valueSet":
          this._valueSet = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export { ValueSetComposeInclude };
