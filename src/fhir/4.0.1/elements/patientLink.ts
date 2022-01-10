import { Element } from "./element";
import { Reference } from "./reference";

class PatientLink extends Element {
  private $other: Reference;
  public get other(): Reference {
    return this.$other;
  }
  public set other(value: Reference) {
    this.$other = value;
    this.$.set("other", value.toJSON());
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
    return this._type;
  }
  public set _type(value: Element) {
    this._type = value;
    this.$.set("type", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "other":
          this.other = new Reference(value);
          break;
        case "type":
          this.type = value;
          break;
        case "_type":
          this._type = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export { PatientLink };
