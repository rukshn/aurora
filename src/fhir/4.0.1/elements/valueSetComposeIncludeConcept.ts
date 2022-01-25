import { Element } from "./element";
import { ValueSetComposeIncludeConceptDesignation } from "./ValueSetComposeIncludeConceptDesignation";

class ValueSetComposeIncludeConcept extends Element {
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
        case "desingation":
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
        default:
          break;
      }
    });
  }
}

export { ValueSetComposeIncludeConcept };
