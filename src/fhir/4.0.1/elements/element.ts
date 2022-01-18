import { Extension } from "./extension";

interface Element {
  id: string;
  _id: Element;
  extension: Array<Extension>;
  $: Map<string, any>;
}

class Element {
  public $: Map<string, any> = new Map();
  constructor(parameters?) {
    let _ = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "id":
          this.id = value;
          break;
        case "_id":
          this._id = new Element(value);
          break;
        case "extension":
          this.extension = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Extension(v);
            this.extension.push(temp);
          });
        default:
          this.$.set(key, value);
          break;
      }
    });
  }

  getResourceType(): string {
    return "Element";
  }

  toJSON() {
    return {
      id: this.id,
      _id: this._id && this._id.toJSON(),
      extension: this.extension && this.extension.map((e) => e),
      ...Object.fromEntries(this.$),
    };
  }
}

export { Element };
