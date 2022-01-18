import { Element } from "../elements/element";
import { Extension } from "../elements/extension";
import { Meta } from "../elements/meta";
class Resource {
  public $: Map<string, any> = new Map();

  private $resourceType: string;
  public get resourceType(): string {
    return this.$resourceType;
  }
  public set resourceType(value: string) {
    this.$resourceType = value;
    this.$.set("resourceType", value);
  }

  private $id: string;
  public get id(): string {
    return this.$id;
  }
  public set id(value: string) {
    this.$id = value;
    this.$.set("id", value);
  }

  private $_id: Element;
  public get _id(): Element {
    return this.$_id;
  }
  public set _id(value: Element) {
    this.$_id = value;
    this.$.set("_id", value.toJSON());
  }

  private $meta: Meta;
  public get meta(): Meta {
    return this.$meta;
  }
  public set meta(value: Meta) {
    this.$meta = value;
    this.$.set("meta", value.toJSON());
  }

  private $implicitRules: string;
  public get implicitRules(): string {
    return this.$implicitRules;
  }
  public set implicitRules(value: string) {
    this.$implicitRules = value;
    this.$.set("implicitRules", value);
  }

  private $_implicitRules: Element;
  public get _implicitRules(): Element {
    return this.$_implicitRules;
  }
  public set _implicitRules(value: Element) {
    this.$_implicitRules = value;
    this.$.set("_implicitRules", value.toJSON());
  }

  private $language: string;
  public get language(): string {
    return this.$language;
  }
  public set language(value: string) {
    this.$language = value;
    this.$.set("language", value);
  }

  private $_language: Element;
  public get _language(): Element {
    return this.$_language;
  }
  public set _language(value: Element) {
    this.$_language = value;
    this.$.set("_language", value.toJSON());
  }

  private $extension: Array<Extension>;
  public get extension(): Array<Extension> {
    return this.$extension;
  }
  public set extension(value: Array<Extension>) {
    this.$extension = value;
    this.$.set(
      "extension",
      value.map((v) => v.toJSON())
    );
  }

  constructor(parameters?) {
    let _ = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "id":
          this.id = value;
          break;

        case "_id":
          this._id = value;
          break;

        case "meta":
          this.meta = new Meta(value);
          break;

        case "implicitRules":
          this.implicitRules = value;
          break;

        case "_implicitRules":
          this._implicitRules = new Element(value);
          break;

        case "language":
          this.language = value;
          break;

        case "_language":
          this._language = new Element(value);
          break;

        case "extension":
          this.$extension = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp: Extension = new Extension(v);
            this.$extension.push(temp);
          });
          this.$.set(
            "extension",
            this.$extension.map((e) => e.toJSON())
          );
          break;
        default:
          this.$.set(key, value);
          break;
      }
    });
  }

  toJSON(): object {
    return { ...Object.fromEntries(this.$) };
  }
}

export { Resource };
