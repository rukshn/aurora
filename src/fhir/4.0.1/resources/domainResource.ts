import { Extension } from "../elements/extension";
import { Narrative } from "../elements/narrative";
import { Resource } from "./resource";

class DomainResource extends Resource {
  private $contained: Array<Resource> = [];
  public set contained(v: Array<Resource>) {
    this.$contained = v;
    this.$.set("contained", v && v.map((v) => v.toJSON()));
  }
  public get contained(): Array<Resource> {
    return this.$contained;
  }

  private $modifierExtension: Array<Extension> = [];
  public set modifierExtension(v: Array<Extension>) {
    this.$modifierExtension = v;
    this.$.set("modifierExtension", v && v.map((v) => v.toJSON()));
  }
  public get modifierExtension(): Array<Extension> {
    return this.$modifierExtension;
  }

  private $text: Narrative = new Narrative();
  public get text(): Narrative {
    return this.$text;
  }
  public set text(value: Narrative) {
    this.$text = value;
    this.$.set("text", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "contained":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Resource(v);
            this.$contained.push(temp);
          });
          this.$.set(
            key,
            this.$contained && this.$contained.map((c) => c.toJSON())
          );
          break;
        case "modifierExtension":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp: Extension = new Extension(v);
            this.$modifierExtension.push(temp);
          });
          this.$.set(
            key,
            this.$modifierExtension &&
              this.$modifierExtension.map((m) => m.toJSON())
          );
          break;
        case "text":
          this.text = new Narrative(value);
          break;
        default:
          break;
      }
    });
  }
}

export { DomainResource };
