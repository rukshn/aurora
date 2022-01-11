import { Element } from "./element";
import { Period } from "./period";

class Address extends Element {
  private $use: string;
  public get use(): string {
    return this.$use;
  }
  public set use(value: string) {
    this.$use = value;
    this.$.set("use", value);
  }

  private $_use: Element;
  public get _use(): Element {
    return this.$_use;
  }
  public set _use(value: Element) {
    this.$_use = value;
    this.$.set("_use", value.toJSON());
  }

  private $type: string;
  public get type(): string {
    return this.$type;
  }
  public set type(value: string) {
    this.$type = value;
    this.$.set("type", value);
  }

  private $_type: Element;
  public get _type(): Element {
    return this.$_type;
  }
  public set _type(value: Element) {
    this.$_type = value;
    this.$.set("_type", value.toJSON());
  }

  private $text: string;
  public get text(): string {
    return this.$text;
  }
  public set text(value: string) {
    this.$text = value;
    this.$.set("text", value);
  }

  private $_text: Element;
  public get _text(): Element {
    return this.$_text;
  }
  public set _text(value: Element) {
    this.$_text = value;
    this.$.set("_text", value.toJSON());
  }

  private $line: Array<string>;
  public get line(): Array<string> {
    return this.$line;
  }
  public set line(value: Array<string>) {
    this.$line = value;
    this.$.set("line", value);
  }

  private $_line: Array<Element>;
  public get _line(): Array<Element> {
    return this.$_line;
  }
  public set _line(value: Array<Element>) {
    this.$_line = value;
    this.$.set(
      "_line",
      value.map((v) => v.toJSON())
    );
  }

  private $city: string;
  public get city(): string {
    return this.$city;
  }
  public set city(value: string) {
    this.$city = value;
    this.$.set("city", value);
  }

  private $_city: Element;
  public get _city(): Element {
    return this.$_city;
  }
  public set _city(value: Element) {
    this.$_city = value;
    this.$.set("_city", value.toJSON());
  }

  private $disctrict: string;
  public get disctrict(): string {
    return this.$disctrict;
  }
  public set disctrict(value: string) {
    this.$disctrict = value;
    this.$.set("district", value);
  }

  private $_district: Element;
  public get _district(): Element {
    return this.$_district;
  }
  public set _district(value: Element) {
    this.$_district = value;
    this.$.set("_district", value.toJSON());
  }

  private $state: string;
  public get state(): string {
    return this.$state;
  }
  public set state(value: string) {
    this.$state = value;
    this.$.set("state", value);
  }

  private $_state: Element;
  public get _state(): Element {
    return this.$_state;
  }
  public set _state(value: Element) {
    this.$_state = value;
    this.$.set("_state", value.toJSON());
  }

  private $postalCode: string;
  public get postalCode(): string {
    return this.$postalCode;
  }
  public set postalCode(value: string) {
    this.$postalCode = value;
    this.$.set("postalCode", value);
  }

  private $_postalCode: Element;
  public get _postalCode(): Element {
    return this.$_postalCode;
  }
  public set _postalCode(value: Element) {
    this.$_postalCode = value;
    this.$.set("_postalCode", value.toJSON());
  }

  private $country: string;
  public get country(): string {
    return this.$country;
  }
  public set country(value: string) {
    this.$country = value;
    this.$.set("country", value);
  }

  private $_country: Element;
  public get _country(): Element {
    return this.$_country;
  }
  public set _country(value: Element) {
    this.$_country = value;
    this.$.set("_country", value.toJSON());
  }

  private $period: Period;
  public get period(): Period {
    return this.$period;
  }
  public set period(value: Period) {
    this.$period = value;
    this.$.set("period", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "use":
          this.use = value;
          break;

        case "_use":
          this._use = new Element(value);
          break;

        case "type":
          this.type = value;
          break;

        case "_type":
          this._type = new Element(value);
          break;

        case "text":
          this.text = value;
          break;

        case "_text":
          this._text = new Element(value);
          break;

        case "line":
          if (!Array.isArray(value)) {
            value = [value];
          }

          this.line = value as Array<string>;
          break;

        case "_line":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Element(v);
            this.$_line.push(temp);
          });
          this.$.set(
            "_line",
            this.$_line.map((l) => l.toJSON())
          );
          break;

        case "city":
          this.city = value;
          break;

        case "_city":
          this._city = new Element(value);
          break;

        case "district":
          this.disctrict = value;
          break;

        case "_district":
          this._district = new Element(value);
          break;

        case "state":
          this.state = value;
          break;

        case "_state":
          this._state = new Element(value);
          break;

        case "postalCode":
          this.postalCode = value;
          break;

        case "_postalCode":
          this._postalCode = new Element(value);
          break;

        case "country":
          this.country = value;
          break;

        case "_country":
          this._country = new Element(value);
          break;

        case "period":
          this.period = new Period(value);
          break;
        default:
          break;
      }
    });
  }
}

export { Address };
