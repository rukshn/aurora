import { Element } from "./element";
import { Period } from "./period";

class ContactPoint extends Element {
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
    return this.$_system;
  }
  public set _system(value: Element) {
    this.$_system = value;
    this.$.set("_system", value.toJSON());
  }

  private $value: string;
  public get value(): string {
    return this.$value;
  }
  public set value(value: string) {
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

  private $rank: number;
  public get rank(): number {
    return this.$rank;
  }
  public set rank(value: number) {
    this.$rank = value;
    this.$.set("rank", value);
  }

  private $_rank: Element;
  public get _rank(): Element {
    return this.$_rank;
  }
  public set _rank(value: Element) {
    this.$_rank = value;
    this.$.set("rank", value.toJSON());
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
        case "system":
          this.$system = value;
          this.$.set("system", value);
          break;

        case "_system":
          this.$_system = new Element(value);
          this.$.set("_system", this.$_system.toJSON());
          break;

        case "value":
          this.$value = value;
          this.$.set("value", value);
          break;

        case "_value":
          this.$_value = new Element(value);
          this.$.set("_value", this.$_value.toJSON());
          break;

        case "use":
          this.$use = value;
          this.$.set("use", value);
          break;

        case "_use":
          this.$_use = new Element(value);
          this.$.set("_use", this.$_use.toJSON());
          break;

        case "rank":
          this.$rank = value;
          this.$.set("rank", value);
          break;

        case "_rank":
          this.$_rank = new Element(value);
          this.$.set("_rank", this.$_rank.toJSON());
          break;

        case "period":
          this.$period = new Period(value);
          this.$.set("period", this.$period.toJSON());
          break;

        default:
          break;
      }
    });
  }
}

export { ContactPoint };
