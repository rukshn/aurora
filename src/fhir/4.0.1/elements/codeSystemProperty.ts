import { Element } from "./element";

class CodeSystemProperty extends Element {
  #code: string;
  public get code(): string {
    return this.#code;
  }
  public set code(v: string) {
    this.code = v;
    this.$.set("code", v);
  }

  #_code: Element;
  public get _code(): Element {
    return this.#_code;
  }
  public set _code(v: Element) {
    this.#_code = v;
    this.$.set("_code", v.toJSON());
  }

  #uri: string;
  public get uri(): string {
    return this.#uri;
  }
  public set uri(v: string) {
    this.#uri = v;
    this.$.set("uri", v);
  }

  #_uri: Element;
  public get _uri(): Element {
    return this.#_uri;
  }
  public set _uri(v: Element) {
    this.#_uri = v;
    this.$.set("_uri", v.toJSON());
  }

  #description: string;
  public get description(): string {
    return this.#description;
  }
  public set description(v: string) {
    this.#description = v;
    this.$.set("description", v);
  }

  #_description: Element;
  public get _description(): Element {
    return this.#_description;
  }
  public set _description(v: Element) {
    this._description = v;
    this.$.set("_description", v.toJSON());
  }

  #type: string;
  public get type(): string {
    return this.#type;
  }
  public set type(v: string) {
    this.#type = v;
    this.$.set("type", v);
  }

  #_type: Element;
  public get _type(): Element {
    return this.#_type;
  }

  public set _type(v: Element) {
    this.#_type = v;
    this.$.set("_type", v.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "code":
          this.code = value;
          break;
        case "_code":
          this._code = new Element(value);
          break;
        case "uri":
          this.uri = value;
          break;
        case "_uri":
          this._uri = new Element(value);
          break;
        case "description":
          this.description = value;
          break;
        case "_description":
          this._description = new Element(value);
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

export { CodeSystemProperty };
