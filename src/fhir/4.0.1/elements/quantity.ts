import { Element } from "./element";

class Quantity extends Element {
  private $value: number;
  public get value(): number {
    return this.$value;
  }
  public set value(value: number) {
    this.$value = value;
    this.$.set("value", value);
  }

  private $_value: Element;
  public get _value(): Element {
    return this.$_value;
  }
  public set _value(value: Element) {
    this.$_value = value;
    this.$.set("_value", value.toJSON());
  }

  private $comparator: string;
  public get comparator(): string {
    return this.$comparator;
  }
  public set comparator(value: string) {
    this.$comparator = value;
    this.$.set("comparator", value);
  }
  private $_comparator: Element;
  public get _comparator(): Element {
    return this.$_comparator;
  }
  public set _comparator(value: Element) {
    this.$_comparator = value;
    this.$.set("_comparator", value.toJSON());
  }

  private $unit: string;
  public get unit(): string {
    return this.$unit;
  }
  public set unit(value: string) {
    this.$unit = value;
    this.$.set("unit", value);
  }

  private $_unit: Element;
  public get _unit(): Element {
    return this.$_unit;
  }
  public set _unit(value: Element) {
    this.$_unit = value;
    this.$.set("_unit", value.toJSON());
  }

  private $system: string;
  public get system(): string {
    return this.$system;
  }
  public set system(value: string) {
    this.$system = value;
    this.$.set("system", value);
  }

  private $_system: Element;
  public get _system(): Element {
    return this._system;
  }
  public set _system(value: Element) {
    this.$_system = value;
    this.$.set("_system", value.toJSON());
  }

  private $code: string;
  public get code(): string {
    return this.$code;
  }
  public set code(value: string) {
    this.$code = value;
    this.$.set("code", value);
  }

  private $_code: Element;
  public get _code(): Element {
    return this.$_code;
  }
  public set _code(value: Element) {
    this.$_code = value;
    this.$.set("_code", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "value":
          this.value = value;
          break;
        case "_value":
          this._value = new Element(value);
          break;
        case "comparator":
          this.comparator = value;
          break;
        case "_comparator":
          this._comparator = new Element(value);
          break;
        case "unit":
          this.unit = value;
          break;
        case "_unit":
          this._unit = new Element(value);
          break;
        case "system":
          this.system = value;
          break;
        case "_system":
          this._system = new Element(value);
          break;
        case "code":
          this.code = value;
          break;
        case "_code":
          this._code = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export {Quantity}