import { Coding } from "./coding";
import { Element } from "./element";

class CodeableConcept extends Element {
  private $coding: Array<Coding> = [];
  public get coding(): Array<Coding> {
    return this.$coding;
  }
  public set coding(value: Array<Coding>) {
    this.$coding = value;
    this.$.set(
      "coding",
      value.map((v) => v.toJSON())
    );
  }

  private $text: string;
  public get text(): string {
    return this.$text;
  }
  public set text(value: string) {
    this.$text = value;
    this.$.set("text", value);
  }

  private $_text: Element = new Element();
  public get _text(): Element {
    return this.$_text;
  }
  public set _text(value: Element) {
    this.$_text = value;
    this.$.set("_text", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "coding":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Coding(v);
            this.$coding.push(temp);
          });
          break;
        case "text":
          this.text = value;
          break;
        case "_text":
          this._text = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export { CodeableConcept };
