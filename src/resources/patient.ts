import { Element } from "../elements/element";
import { identifier } from "../elements/identifier";
import { DomainResource } from "./domainResource";

class Patient extends DomainResource {
  private $identifier: Array<identifier> = [];
  private $active: boolean;
  private $_active: Element;

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
}

export { Patient };
