import { Element } from "./element";

class Narrative extends Element {
  private $status: string;
  public get status(): string {
    return this.$status;
  }
  public set status(value: string) {
    this.$status = value;
    this.$.set("status", value);
  }

  private $_status: Element = new Element();
  public get _status(): Element {
    return this.$_status;
  }
  public set _status(value: Element) {
    this.$_status = value;
    this.$.set("_status", value.toJSON());
  }

  private $div: string;
  public get div(): string {
    return this.$div;
  }
  public set div(value: string) {
    this.$div = value;
    this.$.set("div", value);
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "status":
          this.status = value;
          break;
        case "_status":
          this._status = new Element(value);
          break;
        case "div":
          this.div = value;
          break;
        default:
          break;
      }
    });
  }
}

export { Narrative };
