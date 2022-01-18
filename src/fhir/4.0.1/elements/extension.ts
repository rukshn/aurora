import { Element } from "./element";
class Extension {
  private $: Map<string, any> = new Map();

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

  private $url: string;
  public get url(): string {
    return this.$url;
  }
  public set url(value: string) {
    this.$url = value;
    this.$.set("url", value);
  }

  private $_url: Element;
  public get _url(): Element {
    return this.$_url;
  }
  public set _url(value: Element) {
    this.$_url = value;
    this.$.set("url", value.toJSON());
  }

  private $value: object;
  public get value(): object {
    return this.$value;
  }
  public set value(value: object) {
    this.$value = value;
    this.$.set("value", value);
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
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "id":
          this.id = value;
          break;

        case "_id":
          this._id = new Element(value);
          break;

        case "url":
          this.url = value;
          break;

        case "_url":
          this._url = new Element(value);
          break;

        case "value":
          this.value = value;
          break;

        case "extension":
          this.$extension = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Extension(v);
            this.$extension.push(temp);
          });
        default:
          break;
      }
    });
  }
  toJSON(): object {
    return Object.fromEntries(this.$);
  }
}

export { Extension };
