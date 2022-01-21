import { CodeSystemConceptDesignation } from "./codeSystemConceptDesignation";
import { CodeSystemConceptProperty } from "./codeSystemConceptProperty";
import { Element } from "./element";

class Concept extends Element {
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

  #definition: string;
  public get definition(): string {
    return this.#definition;
  }
  public set definition(v: string) {
    this.#definition = v;
    this.$.set("definition", v);
  }

  #_defininition: Element;
  public get _definition(): Element {
    return this.#_defininition;
  }
  public set _definition(v: Element) {
    this.#_defininition = v;
    this.$.set("_definition", v.toJSON());
  }

  #designation: Array<CodeSystemConceptDesignation>;
  public get designation(): Array<CodeSystemConceptDesignation> {
    return this.#designation;
  }
  public set designation(v: Array<CodeSystemConceptDesignation>) {
    this.#designation = v;
    this.$.set(
      "designation",
      this.#designation.map((d) => d.toJSON())
    );
  }

  #property: Array<CodeSystemConceptProperty>;
  public get property(): Array<CodeSystemConceptProperty> {
    return this.#property;
  }
  public set property(v: Array<CodeSystemConceptProperty>) {
    this.#property = v;
    this.$.set(
      "property",
      v.map((v) => v.toJSON())
    );
  }

  #concept: Array<Concept>;
  public get concept(): Array<Concept> {
    return this.#concept;
  }
  public set concept(v: Array<Concept>) {
    this.#concept = v;
    this.$.set(
      "concept",
      this.#concept.map((c) => c.toJSON())
    );
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
        case "display":
          this.display = value;
          break;
        case "_display":
          this._display = new Element(value);
          break;
        case "definition":
          this.definition = value;
          break;
        case "_definition":
          this._definition = new Element(value);
          break;
        case "designation":
          this.#designation = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new CodeSystemConceptDesignation(v);
            this.#designation.push(temp);
          });
          this.designation = this.#designation;
          break;
        case "property":
          this.#property = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new CodeSystemConceptProperty(v);
            this.#property.push(temp);
          });
          this.property = this.#property;
          break;
        case "concept":
          this.#concept = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Concept(v);
            this.#concept.push(temp);
          });
          this.concept = this.#concept;
          break;
        default:
          break;
      }
    });
  }
}

export { Concept };
