import { Element } from "./element";

class Coding extends Element {
  private $system: string;
  public get system(): string {
    return this.$system;
  }
  public set system(value: string) {
    this.$system = value;
    this.$.set("system", value);
  }

  private $_system: Element;
  public get _system(): Element {
    return this.$_system;
  }
  public set _system(value: Element) {
    this.$_system = value;
    this.$.set("_system", this.$_system.toJSON());
  }

  private $version: string;
  public get version(): string {
    return this.$version;
  }
  public set version(value: string) {
    this.$version = value;
    this.$.set("verion", value);
  }

  private $_version: Element;
  public get _version(): Element {
    return this.$_version;
  }
  public set _version(value: Element) {
    this.$_version = value;
    this.$.set("_version", this.$_version.toJSON());
  }

  private $code: string;
  public get code(): string {
    return this.$code;
  }
  public set code(value: string) {
    this.$code = value;
    this.$.set("code", value);
  }

  private $_code: Element;
  public get _code(): Element {
    return this.$_code;
  }
  public set _code(value: Element) {
    this.$_code = value;
    this.$.set("_code", this.$_code.toJSON());
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
    return this._display;
  }
  public set _display(value: Element) {
    this._display = value;
    this.$.set("_display", this.$_display.toJSON());
  }

  private $userSelected: boolean;
  public get userSelected(): boolean {
    return this.$userSelected;
  }
  public set userSelected(value: boolean) {
    this.$userSelected = value;
    this.$.set("userSelected", value);
  }

  private $_userSelected: Element;
  public get _userSelected(): Element {
    return this.$_userSelected;
  }
  public set _userSelected(value: Element) {
    this.$_userSelected = value;
    this.$.set("userSelected", this.$_userSelected.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "system":
          this.system = value;
          break;
        case "_system":
          this._system = new Element(value);
          break;
        case "version":
          this.version = value;
          break;
        case "_version":
          this._version = new Element(value);
          break;
        case "code":
          this.code = value;
          break;
        case "_code":
          this._code = new Element(value);
          break;
        case "display":
          this.display = value;
          break;
        case "_display":
          this._display = new Element(value);
          break;
        case "userSelected":
          this.userSelected = value;
          break;
        case "_userSelected":
          this._userSelected = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export { Coding };
