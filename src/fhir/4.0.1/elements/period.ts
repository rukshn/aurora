import { Element } from "./element";

class Period extends Element {
  private $start: string;
  private $_start: Element;
  private $end: string;
  private $_end: Element;

  constructor(parameters?) {
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));
    super(parameters);

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "start":
          this.$start = value;
          this.$.set("start", value);
          break;

        case "_start":
          this.$_start = new Element(value);
          this.$.set("_start", this.$_start.toJSON());
          break;

        case "end":
          this.$end = value;
          this.$.set("end", value);
          break;

        case "_end":
          this.$_end = value;
          this.$.set("_end", this.$_end.toJSON());
          break;
        default:
          this.$.set(key, value);
          break;
      }
    });
  }

  public set start(v: string) {
    this.$start = v;
    this.$.set("start", v);
  }

  public get start(): string {
    return this.$start;
  }

  public set _start(v: Element) {
    this.$_start = v;
    this.$.set("_start", v.toJSON());
  }

  public get _start(): Element {
    return this.$_start;
  }

  public set end(v: string) {
    this.$end = v;
    this.$.set("end", v);
  }

  public get end(): string {
    return this.$end;
  }

  public set _end(v: Element) {
    this.$_end = v;
    this.$.set("_end", v.toJSON());
  }

  public get _end(): Element {
    return this.$_end;
  }
}

export { Period };
