import { Element } from "./element";

class identifier extends Element {
  private $use: string;
  private $_use: Element;
  private $type;
  private $system: string;
  private $_system: Element;
  private $value: string;
  private $_value;
  private $period;
  private $assigner;

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "use":
          this.$use = value;
          this.$.set("use", value);
          break;
        case "_use":
          this.$_use = new Element(value);
          this.$.set("_use", this.$_use.toJSON());
          break;
        case "type":
          break;
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
          this.$.set("_value", this.$_value);
          break;
        case "period":
          break;
        case "assigner":
          break;

        default:
          this.$.set(key, value);
          break;
      }
    });
  }

  public set use(v: string) {
    this.$use = v;
    this.$.set("use", v);
  }

  public get use(): string {
    return this.$use;
  }

  public set _use(v: Element) {
    this.$_use = v;
    this.$.set("_use", v);
  }

  public get _use(): Element {
    return this.$_use;
  }

  public set type(v: string) {
    this.$type = v;
    this.$.set("type", v);
  }

  public get type(): string {
    return this.$type;
  }

  public set system(v: string) {
    this.$system = v;
  }

  public get system(): string {
    return this.$system;
  }

  public set _system(v: Element) {
    this._system = v;
  }

  public get _system(): Element {
    return this.$_system;
  }

  public set value(v: string) {
    this.$value = v;
  }

  public get value(): string {
    return this.$value;
  }

  public set _value(v: Element) {
    this.$_value = v;
  }

  public get _value(): Element {
    return this.$_value;
  }

  public set period(v: string) {
    this.$period = v;
  }

  public get period(): string {
    return this.$period;
  }

  public set assigner(v: string) {
    this.assigner = v;
  }

  public get assigner(): string {
    return this.$assigner;
  }
}

export { identifier };
