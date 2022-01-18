import { Coding } from "./coding";
import { Element } from "./element";

class Meta extends Element {
  private $versionId: string;
  public get versionId(): string {
    return this.$versionId;
  }
  public set versionId(value: string) {
    this.$versionId = value;
    this.$.set("versionId", value);
  }

  private $_versionId: Element;
  public get _versionId(): Element {
    return this.$_versionId;
  }
  public set _versionId(value: Element) {
    this.$_versionId = value;
    this.$.set("_versionId", value.toJSON());
  }

  private $lastUpdated: string;
  public get lastUpdated(): string {
    return this.$lastUpdated;
  }
  public set lastUpdated(value: string) {
    this.$lastUpdated = value;
    this.$.set("lastUpdated", value);
  }

  private $_lastUpdated: Element;
  public get _lastUpdated(): Element {
    return this.$_lastUpdated;
  }
  public set _lastUpdated(value: Element) {
    this.$_lastUpdated = value;
    this.$.set("_lastUpdated", value.toJSON());
  }

  private $source: string;
  public get source(): string {
    return this.$source;
  }
  public set source(value: string) {
    this.$source = value;
    this.$.set("source", value);
  }

  private $_source: Element;
  public get _source(): Element {
    return this.$_source;
  }
  public set _source(value: Element) {
    this.$_source = value;
    this.$.set("_source", value.toJSON());
  }

  private $profile: Array<string>;
  public get profile(): Array<string> {
    return this.$profile;
  }
  public set profile(value: Array<string>) {
    this.$profile = value;
    this.$.set("profile", value);
  }

  private $_profile: Array<Element>;
  public get _profile(): Array<Element> {
    return this.$_profile;
  }
  public set _profile(value: Array<Element>) {
    this.$_profile = value;
    this.$.set(
      "_profile",
      value.map((v) => v.toJSON())
    );
  }

  private $security: Array<Coding>;
  public get security(): Array<Coding> {
    return this.$security;
  }
  public set security(value: Array<Coding>) {
    this.$security = value;
    this.$.set(
      "security",
      value.map((s) => s.toJSON())
    );
  }

  private $tag: Array<Coding>;
  public get tag(): Array<Coding> {
    return this.$tag;
  }
  public set tag(value: Array<Coding>) {
    this.$tag = value;
    this.$.set(
      "tag",
      value.map((v) => v.toJSON())
    );
  }

  constructor(parameters?) {
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));
    super(parameters);

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "versionId":
          this.versionId = value;
          break;

        case "_versionId":
          this._versionId = new Element(value);
          break;

        case "lastUpdated":
          this.lastUpdated = value;
          break;

        case "_lastUpdated":
          this._lastUpdated = new Element(value);
          break;

        case "source":
          this.source = value;
          break;

        case "_source":
          this._source = new Element(value);
          break;

        case "profile":
          this.$profile = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.profile = value;
          break;

        case "_profile":
          this.$_profile = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Element(v);
            this.$_profile.push(temp);
          });

          this.$.set(
            "_profile",
            this.$_profile.map((p) => p.toJSON())
          );

        case "security":
          this.$security = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Coding(v);
            this.$security.push(temp);
          });
          this.$.set(
            "security",
            this.$security.map((s) => s.toJSON())
          );
          break;
        case "tag":
          this.$tag = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Coding(v);
            this.$tag.push(temp);
          });
          this.$.set(
            "tag",
            this.$tag.map((t) => t.toJSON())
          );
          break;
        default:
          break;
      }
    });
  }
}

export { Meta };
