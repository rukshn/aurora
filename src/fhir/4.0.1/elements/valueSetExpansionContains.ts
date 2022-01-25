import { Element } from "./element";
import { ValueSetComposeIncludeConceptDesignation } from "./ValueSetComposeIncludeConceptDesignation";

class ValueSetExpansionContains extends Element {
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

  #abstract: boolean;
  public get abstract(): boolean {
    return this.#abstract;
  }
  public set abstract(v: boolean) {
    this.#abstract = v;
    this.$.set("abstract", v);
  }

  #_abstract: Element;
  public get _abstract(): Element {
    return this.#_abstract;
  }
  public set _abstract(v: Element) {
    this.#_abstract = v;
    this.$.set("_abstract", v.toJSON());
  }

  #inactive: boolean;
  public get inactive(): boolean {
    return this.#inactive;
  }
  public set inactive(v: boolean) {
    this.#inactive = v;
    this.$.set("inactive", v);
  }

  #_inactive: Element;
  public get _inactive(): Element {
    return this.#_inactive;
  }
  public set _inactive(v: Element) {
    this.#_inactive = v;
    this.$.set("inactive", v.toJSON());
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

  #code: string;
  public get code(): string {
    return this.#code;
  }
  public set code(v: string) {
    this.#code = v;
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

  #display: string;
  public get display(): string {
    return this.#display;
  }
  public set display(v: string) {
    this.#display = v;
    this.$.set("display", v);
  }

  #_display: Element;
  public get _display(): Element {
    return this.#_display;
  }
  public set _display(v: Element) {
    this.#_display = v;
    this.$.set("_display", v.toJSON());
  }

  #designation: Array<ValueSetComposeIncludeConceptDesignation>;
  public get designation(): Array<ValueSetComposeIncludeConceptDesignation> {
    return this.#designation;
  }
  public set designation(v: Array<ValueSetComposeIncludeConceptDesignation>) {
    this.#designation = v;
    this.$.set(
      "designation",
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
        case "system":
          this.system = value;
          break;
        case "_system":
          this._system = new Element(value);
          break;
        case "abstract":
          this.abstract = value;
          break;
        case "_abstract":
          this._abstract = new Element(value);
          break;
        case "inactive":
          this.inactive = value;
          break;
        case "_inactive":
          this._inactive = new Element(value);
          break;
        case "version":
          this.version = value;
          break;
        case "_version":
          this._version = new Element(value);
          break;
        case "code":
          this.code = value;
          break;
        case "_code":
          this._code = new Element(value);
          break;
        case "display":
          this.display = value;
          break;
        case "_display":
          this._display = new Element();
          break;
        case "designation":
          this.#designation = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ValueSetComposeIncludeConceptDesignation(v);
            this.#designation.push(temp);
          });
          this.designation = this.#designation;
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

export { ValueSetExpansionContains };
