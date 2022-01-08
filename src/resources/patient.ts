import { ContactPoint } from "../elements/contactPoint";
import { Element } from "../elements/element";
import { HumanName } from "../elements/humanName";
import { identifier } from "../elements/identifier";
import { DomainResource } from "./domainResource";

class Patient extends DomainResource {
  private $identifier: Array<identifier>;
  public set identifier(v: Array<identifier>) {
    this.$identifier = v;
    this.$.set(
      "identifier",
      v.map((v) => v.toJSON())
    );
  }
  public get identifier(): Array<identifier> {
    return this.$identifier;
  }
  private $active: boolean;
  public set active(v: boolean) {
    this.$active = v;
  }
  public get active(): boolean {
    return this.$active;
  }

  private $_active: Element;
  public set _active(v: Element) {
    this.$_active = v;
  }
  public get _active(): Element {
    return this.$_active;
  }

  private $name: Array<HumanName>;
  public set name(v: Array<HumanName>) {
    this.$name = v;
    this.$.set(
      "name",
      v.map((v) => v.toJSON())
    );
  }
  public get name(): Array<HumanName> {
    return this.$name;
  }

  private $telecom: Array<ContactPoint>;
  public get telecom(): Array<ContactPoint> {
    return this.$telecom;
  }
  public set telecom(value: Array<ContactPoint>) {
    this.$telecom = value;
    this.$.set(
      "telecom",
      value.map((v) => v.toJSON())
    );
  }

  private $gender: string;
  public get gender(): string {
    return this.$gender;
  }
  public set gender(value: string) {
    this.$gender = value;
    this.$.set("gender", value);
  }

  private $_gender: Element;
  public get _gender(): Element {
    return this.$_gender;
  }
  public set _gender(value: Element) {
    this.$_gender = value;
    this.$.set("_gender", value.toJSON());
  }

  private $birthDate: string;
  public get birthDate(): string {
    return this.$birthDate;
  }
  public set birthDate(value: string) {
    this.$birthDate = value;
    this.$.set("birthDate", value);
  }

  private $_birthDate: Element;
  public get _birthDate(): Element {
    return this.$_birthDate;
  }
  public set _birthDate(value: Element) {
    this.$_birthDate = value;
    this.$.set("_birthDate", value.toJSON());
  }

  private $deceasedBoolean: boolean;
  public get deceasedBoolean(): boolean {
    return this.$deceasedBoolean;
  }
  public set deceasedBoolean(value: boolean) {
    this.$deceasedBoolean = value;
    this.$.set("deceasedBoolean", value);
  }
  private $_deceasedBoolean: Element;
  public get _deceasedBoolean(): Element {
    return this.$_deceasedBoolean;
  }
  public set _deceasedBoolean(value: Element) {
    this.$_deceasedBoolean = value;
    this.$.set("_deceasedBoolean", value.toJSON());
  }

  private $deceasedDateTime: string;
  public get deceasedDateTime(): string {
    return this.$deceasedDateTime;
  }
  public set deceasedDateTime(value: string) {
    this.$deceasedDateTime = value;
    this.$.set("deceasedDateTime", value);
  }
  private $_deceasedDateTime: Element;
  public get _deceasedDateTime(): Element {
    return this.$_deceasedDateTime;
  }
  public set _deceasedDateTime(value: Element) {
    this.$_deceasedDateTime = value;
    this.$.set("_deceasedDateTime", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "identifier":
          this.$identifier = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new identifier(v);
            this.$identifier.push(temp);
          });
          this.$.set(
            "identifier",
            this.$identifier && this.$identifier.map((i) => i.toJSON())
          );
          break;

        case "active":
          this.$active = value;
          this.$.set("active", value);
          break;

        case "_active":
          this.$_active = value;
          this.$.set("_active", new Element(value));
          break;

        case "name":
          this.$name = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new HumanName(v);
            this.$name.push(temp);
          });

          this.$.set(
            "name",
            this.$name.map((n) => n.toJSON())
          );
          break;

        case "telecom":
          this.$telecom = [];
          if (!Array.isArray(value)) {
            value = [value];
          }

          (value as Array<any>).map((v) => {
            let temp = new ContactPoint(v);
            this.$telecom.push(temp);
          });

          this.$.set(
            "telecom",
            this.$telecom.map((t) => t.toJSON())
          );
          break;

        case "gender":
          this.$gender = value;
          this.$.set("gender", value);
          break;

        case "_gender":
          this.$_gender = new Element(value);
          this.$.set("gender", this.$_gender.toJSON());
          break;

        case "brithDate":
          this.$birthDate = value;
          this.$.set("birthDate", value);
          break;

        case "_birthDate":
          this.$_birthDate = new Element(value);
          this.$.set("_birthDate", this.$_birthDate.toJSON());
          break;

        case "deceasedBoolean":
          this.$deceasedBoolean = value;
          this.$.set("deceasedBoolean", value);
          break;

        case "_deceasedBoolean":
          this.$_deceasedBoolean = new Element(value);
          this.$.set("_deceasedBoolean", this.$_deceasedBoolean.toJSON());
          break;

        case "deceasedDateTime":
          this.$deceasedDateTime = value;
          this.$.set("deceasedDateTime", value);
          break;

        case "_deceasedDateTime":
          this.$_deceasedDateTime = new Element(value);
          this.$.set("_deceasedDateTime", this.$_deceasedDateTime.toJSON());
          break;

        default:
          break;
      }
    });
  }
}

export { Patient };
