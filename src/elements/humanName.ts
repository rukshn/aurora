import { Element } from "./element";
import { Period } from "./period";

class HumanName extends Element {
  private $use: string;
  private $_use: Element;
  private $text: string;
  private $_text: Element;
  private $family: string;
  private $_family: Element;
  private $given: Array<string>;
  private $_given: Array<Element>;
  private $prefix: Array<string>;
  private $_prefix: Array<Element>;
  private $sufix: Array<string>;
  private $_sufix: Array<Element>;
  private $period: Period;

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

        case "text":
          this.$text = value;
          this.$.set("text", value);
          break;

        case "_text":
          this.$_text = new Element(value);
          this.$.set("_text", this.$_text.toJSON());
          break;

        case "family":
          this.$family = value;
          this.$.set("family", value);
          break;

        case "_family":
          this.$_family = new Element(value);
          this.$.set("_family", this.$_family.toJSON());
          break;

        case "given":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$given = value;
          this.$.set("given", value);
          break;

        case "_given":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$_given = [];

          (value as Array<any>).map((v) => {
            let temp: Element = new Element(v);
            this.$_given.push(temp);
          });

          this.$.set(
            "_given",
            this.$_given.map((g) => g.toJSON())
          );
          break;

        case "prefix":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$prefix = value;
          this.$.set("prefix", value);
          break;

        case "_prefix":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$_prefix = [];
          (value as Array<any>).map((v) => {
            let temp: Element = new Element(v);
            this.$_prefix.push(temp);
          });
          this.$.set(
            "_prefix",
            this.$_prefix.map((p) => p.toJSON())
          );
          break;

        case "sufix":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$sufix = value;
          this.$.set("sufix", value);
          break;

        case "_sufix":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$_sufix = [];
          (value as Array<any>).map((v) => {
            let temp: Element = new Element(v);
            this.$_sufix.push(v);
          });

          this.$.set(
            "sufix",
            this.$_sufix.map((s) => s.toJSON())
          );
          break;

        case "period":
          this.$period = new Period(value);
          this.$.set("period", this.$period.toJSON());
          break;

        default:
          this.$.set(key, value);
          break;
      }
    });
  }
  getResourceType(): string {
    return "HumanName";
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
    this.$.set("_use", v.toJSON());
  }

  public get _use(): Element {
    return this.$_use;
  }

  public set text(v: string) {
    this.$text = v;
    this.$.set("text", v);
  }

  public get text(): string {
    return this.$text;
  }

  public set _text(v: Element) {
    this.$_text = v;
    this.$.set("_text", v);
  }

  public get _text(): Element {
    return this.$_text;
  }

  public set family(v: string) {
    this.$family = v;
    this.$.set("family", v);
  }

  public get family(): string {
    return this.$family;
  }

  public set _family(v: Element) {
    this.$_family = v;
    this.$.set("_family", v.toJSON());
  }

  public get _family(): Element {
    return this.$_family;
  }

  public set given(v: Array<string>) {
    this.$given = v;
    this.$.set("given", v);
  }

  public get given(): Array<string> {
    return this.$given;
  }

  public set _given(v: Array<Element>) {
    this.$_given = v;
    this.$.set(
      "_given",
      v.map((v) => v.toJSON())
    );
  }

  public get _given(): Array<Element> {
    return this.$_given;
  }

  public set prefix(v: Array<string>) {
    this.$prefix = v;
    this.$.set("prefix", v);
  }

  public get prefix(): Array<string> {
    return this.$prefix;
  }

  public set _prefix(v: Array<Element>) {
    this.$_prefix = v;
    this.$.set(
      "_prefix",
      v.map((v) => v.toJSON())
    );
  }

  public get _prefix(): Array<Element> {
    return this.$_prefix;
  }

  public set sufix(v: Array<string>) {
    this.$sufix = v;
    this.$.set("sufix", v);
  }

  public get sufix(): Array<string> {
    return this.$sufix;
  }

  public set _sufix(v: Array<Element>) {
    this.$_sufix = v;
    this.$.set(
      "_sufix",
      v.map((v) => v.toJSON())
    );
  }

  public get _sufix(): Array<Element> {
    return this.$_sufix;
  }
}
