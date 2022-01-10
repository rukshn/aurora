import { Element } from "../elements/element";
import { Extension } from "../elements/extension";
import { Meta } from "../elements/meta";

interface Resource {
  id: string;
  _id: Element;
  meta: Meta;
  implicitRules: string;
  _implicitRules: Element;
  language: string;
  _language: Element;
  extension: Array<Extension>;
  $: Map<string, any>;
}

class Resource {
  public $: Map<string, any> = new Map();

  constructor(parameters?) {
    let _ = new Map(Object.entries(parameters ?? {}));

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

        case "extension":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp: Extension = new Extension(v);
            this.extension.push(temp);
          });

        default:
          this.$.set(key, value);
          break;
      }
    });
  }

  getResourceType(name: string = "Resource"): string {
    return name;
  }

  toJSON(): object {
    let output: {} = {
      resourceType: this.getResourceType(),
      id: this.id,
      _id: this._id && this._id.toJSON(),
      meta: this.meta && this.meta.toJSON(),
      implicitRules: this.implicitRules,
      _implicitRules: this._implicitRules && this._implicitRules.toJSON(),
      language: this.language,
      _language: this._language && this._language.toJSON(),
    };
    return { ...output, ...Object.fromEntries(this.$) };
  }
}

export { Resource };
