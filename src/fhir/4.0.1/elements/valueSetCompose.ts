import { Element } from "./element";
import { ValueSetComposeInclude } from "./valueSetComposeInclude";

class ValueSetCompose extends Element {
  #lockedDate: string;
  public get lockedDate(): string {
    return this.#lockedDate;
  }
  public set lockedDate(v: string) {
    this.#lockedDate = v;
    this.$.set("lockedDate", v);
  }

  #_lockedDate: Element;
  public get _lockedDate(): Element {
    return this.#_lockedDate;
  }
  public set _lockedDate(v: Element) {
    this.#_lockedDate = v;
    this.$.set("_lockedDate", v.toJSON());
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
    this.$.set("_inactive", v);
  }

  #include: Array<ValueSetComposeInclude>;
  public get include(): Array<ValueSetComposeInclude> {
    return this.#include;
  }
  public set include(v: Array<ValueSetComposeInclude>) {
    this.#include = v;
    this.$.set(
      "include",
      v.map((v) => v.toJSON())
    );
  }

  #exclude: Array<ValueSetComposeInclude>;
  public get exclude(): Array<ValueSetComposeInclude> {
    return this.#exclude;
  }
  public set exclude(v: Array<ValueSetComposeInclude>) {
    this.#exclude = v;
    this.$.set(
      "exclude",
      v.map((v) => v.toJSON())
    );
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "lockedDate":
          this.lockedDate = value;
          break;
        case "_lockedDate":
          this._lockedDate = new Element(value);
          break;
        case "inactive":
          this.inactive = value;
          break;
        case "_inactive":
          this._inactive = new Element(value);
          break;
        case "include":
          this.#include = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ValueSetComposeInclude(v);
            this.#include.push(temp);
          });
          this.include = this.#include;
          break;
        case "exclude":
          this.#exclude = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ValueSetComposeInclude(v);
            this.#exclude.push(temp);
          });
          this.exclude = this.#exclude;
          break;
        default:
          break;
      }
    });
  }
}

export { ValueSetCompose };
