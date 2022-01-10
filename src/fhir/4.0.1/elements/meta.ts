import { Element } from "./element";

class Meta extends Element {
  private $versionId: string;
  private $_versionId: Element;
  private $lastUpdated: string;
  private $_lastUpdated: Element;
  private $source: string;
  private $_source: Element;
  private $profile: Array<string>;
  private $_profile: Array<Element>;
  private $security;
  private $tag;

  constructor(parameters?) {
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));
    super(parameters);

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "versionId":
          this.$versionId = value;
          this.$.set("versionId", value);
          break;

        case "_versionId":
          this.$_versionId = new Element(value);
          this.$.set("_versionId", this.$_versionId.toJSON());
          break;

        case "lastUpdated":
          this.$lastUpdated = value;
          this.$.set("lastUpdated", value);
          break;

        case "_lastUpdated":
          this.$_lastUpdated = new Element(value);
          this.$.set("_lastUpdated", this.$_lastUpdated.toJSON());
          break;

        case "source":
          this.$source = value;
          this.$.set("source", value);
          break;

        case "_source":
          this.$_source = new Element(value);
          this.$.set("source", this.$_source.toJSON());
          break;

        case "profile":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$profile = [];
          this.$profile = value as Array<string>;
          this.$.set("profile", value);
          break;

        case "_profile":
          if (!Array.isArray(value)) {
            value = [value];
          }
          this.$_profile = [];
          (value as Array<any>).map((v) => {
            let temp = new Element(v);
            this.$_profile.push(temp);
          });

          this.$.set(
            "_profile",
            this.$_profile.map((p) => p.toJSON())
          );

        case "security":
          break;
        case "tag":
          break;
        default:
          this.$.set(key, value);
          break;
      }
    });
  }

  public set versionId(v: string) {
    this.$versionId = v;
    this.$.set("versionId", v);
  }

  public get versionId(): string {
    return this.$versionId;
  }

  public set _versionId(v: Element) {
    this.$_versionId = v;
    this.$.set("_versionId", v.toJSON());
  }

  public get _versionId(): Element {
    return this.$_versionId;
  }

  public set lastUpdated(v: string) {
    this.$lastUpdated = v;
    this.$.set("lastUpdated", v);
  }

  public get lastUpdated(): string {
    return this.$lastUpdated;
  }

  public set _lastUpdated(v: Element) {
    this.$_lastUpdated = v;
    this.$.set("_lastUpdated", v.toJSON());
  }

  public get _lastUpdated(): Element {
    return this.$_lastUpdated;
  }

  public set source(v: string) {
    this.$source = v;
    this.$.set("source", v);
  }

  public get source(): string {
    return this.$source;
  }

  public set _source(v: Element) {
    this.$_source = v;
    this.$.set("_source", v.toJSON());
  }

  public get _source(): Element {
    return this.$_source;
  }

  public set profile(v: Array<string>) {
    this.$profile = v;
    if (!Array.isArray(v)) {
      v = [v];
    }
    this.$.set("profile", v);
  }

  public get profile(): Array<string> {
    return this.$profile;
  }

  public set _profile(v: Array<Element>) {
    this._profile = v;
    this.$.set(
      "_profile",
      v.map((v) => v.toJSON())
    );
  }

  public get _profile(): Array<Element> {
    return this.$_profile;
  }

  public set security(v: string) {
    this.security = v;
  }

  public get security(): string {
    return this.$security;
  }

  public set tag(v: string) {
    this.$tag = v;
  }

  public get tag(): string {
    return this.$tag;
  }
}

export { Meta };
