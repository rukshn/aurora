import { ContactPoint } from "../elements/contactPoint";
import { Element } from "../elements/element";
import { HumanName } from "../elements/humanName";
import { identifier } from "../elements/identifier";
import { DomainResource } from "./domainResource";

class Patient extends DomainResource {
  private $identifier: Array<identifier> = [];
  private $active: boolean;
  private $_active: Element;
  private $name: Array<HumanName>;
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

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "identifier":
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
        default:
          break;
      }
    });
  }

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

  public set active(v: boolean) {
    this.$active = v;
  }

  public get active(): boolean {
    return this.$active;
  }

  public set _active(v: Element) {
    this.$_active = v;
  }

  public get _active(): Element {
    return this.$_active;
  }

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
}

export { Patient };
