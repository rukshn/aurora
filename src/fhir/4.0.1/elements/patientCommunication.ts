import { CodeableConcept } from "./codeableConcept";
import { Element } from "./element";

class PatientCommunication extends Element {
  private $language: CodeableConcept;
  public get language(): CodeableConcept {
    return this.$language;
  }
  public set language(value: CodeableConcept) {
    this.$language = value;
    this.$.set("language", value.toJSON());
  }

  private $preffered: boolean;
  public get preffered(): boolean {
    return this.$preffered;
  }
  public set preffered(value: boolean) {
    this.$preffered = value;
    this.$.set("preffered", value);
  }

  private $_preffered: Element;
  public get _preffered(): Element {
    return this.$_preffered;
  }
  public set _preffered(value: Element) {
    this.$_preffered = value;
    this.$.set("_preffered", value.toJSON());
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "language":
          this.language = new CodeableConcept(value);
          break;
        case "preffered":
          this.preffered = value;
          break;
        case "_prefferred":
          this._preffered = new Element(value);
          break;
        default:
          break;
      }
    });
  }
}

export { PatientCommunication };
