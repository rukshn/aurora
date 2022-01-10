import { Element } from "./element";
import { Identifier } from "./identifier";

class Reference extends Element {
  private $reference: string;
  public get reference(): string {
    return this.$reference;
  }
  public set reference(value: string) {
    this.$reference = value;
    this.$.set("reference", value);
  }

  private $_reference: Element;
  public get _reference(): Element {
    return this.$_reference;
  }
  public set _reference(value: Element) {
    this.$_reference = value;
    this.$.set("_reference", value.toJSON());
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

  private $identifier: Identifier;
  public get identifier(): Identifier {
    return this.$identifier;
  }
  public set identifier(value: Identifier) {
    this.$identifier = value;
    this.$.set("identifier", value.toJSON());
  }

  private $display: string;
  public get display(): string {
    return this.$display;
  }
  public set display(value: string) {
    this.$display = value;
    this.$.set("display", value);
  }

  private $_display: Element;
  public get _display(): Element {
    return this.$_display;
  }
  public set _display(value: Element) {
    this.$_display = value;
    this.$.set("_display", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: any) => {
      switch (key) {
        case "reference":
          this.reference = value;
          break;
        case "_reference":
          this._reference = new Element(value);
          break;
        case "type":
          this.type = value;
          break;
        case "_type":
          this._type = new Element(value);
          break;
        case "identifier":
          this.identifier = new Identifier(value);
          break;
        case "display":
          this.display = value;
          break;
        case "_display":
          this._display = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export {Reference}