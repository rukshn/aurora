import { Element } from "./element";
class Extension {
  constructor(parameters?) {
    let _: Map<string, any> = new Map();

    if (parameters) {
      _ = new Map(Object.entries(parameters));
    }

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "id":
          this.id = key;
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

        case "extension":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Extension(v);
            this.extension.push(temp);
          });
        default:
          break;
      }
    });
  }
  toJSON(): object {
    return {
      id: this.id,
      _id: this._id.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Extension };
