import { CodeableConcept } from "./codeableConcept";
import { Element } from "./element";

class OperationOutcomeIssue extends Element {
  private $severity: string;
  public get severity(): string {
    return this.$severity;
  }
  public set severity(value: string) {
    this.$severity = value;
    this.$.set("severity", value);
  }

  private $_severity: Element;
  public get _severity(): Element {
    return this.$_severity;
  }
  public set _severity(value: Element) {
    this.$_severity = value;
    this.$.set("_severity", value.toJSON());
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
    return this._code;
  }
  public set _code(value: Element) {
    this._code = value;
    this.$.set("_code", value.toJSON());
  }

  private $details: CodeableConcept;
  public get details(): CodeableConcept {
    return this.$details;
  }
  public set details(value: CodeableConcept) {
    this.$details = value;
    this.$.set("details", value.toJSON());
  }

  private $diagnostics: string;
  public get diagnostics(): string {
    return this.$diagnostics;
  }
  public set diagnostics(value: string) {
    this.$diagnostics = value;
    this.$.set("diagnostics", value);
  }

  private $_diagnostics: Element;
  public get _diagnostics(): Element {
    return this.$_diagnostics;
  }
  public set _diagnostics(value: Element) {
    this.$_diagnostics = value;
    this.$.set("_diagnostics", value.toJSON());
  }

  private $location: Array<string>;
  public get location(): Array<string> {
    return this.$location;
  }
  public set location(value: Array<string>) {
    this.$location = value;
    this.$.set("location", value);
  }

  private $_location: Array<Element>;
  public get _location(): Array<Element> {
    return this.$_location;
  }
  public set _location(value: Array<Element>) {
    this.$_location = value;
    this.$.set(
      "_location",
      value.map((v) => v.toJSON())
    );
  }

  private $expression: Array<string>;
  public get expression(): Array<string> {
    return this.$expression;
  }
  public set expression(value: Array<string>) {
    this.$expression = value;
    this.$.set("expression", value);
  }

  private $_expression: Array<Element>;
  public get _expression(): Array<Element> {
    return this.$_expression;
  }
  public set _expression(value: Array<Element>) {
    this.$_expression = value;
    this.$.set(
      "_expression",
      value.map((v) => v.toJSON())
    );
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
        switch (key) {
            case 'severity':
                this.severity = value
                break;
            case '_severity':
                this._severity = new Element(value)
                break;
            case 'code':
                this.code = value
                break;
            case '_code':
                this._code = new Element(value)
                break;
            case 'details': 
                this.details = new CodeableConcept(value)
                break;
            case 'diagnostics':
                this.diagnostics = value
                break;
            case '_diagnostics':
                this._diagnostics = new Element(value)
                break;
            case 'location':
                if (!Array.isArray(value)) {
                    value = [value]
                }
                this.location = value 
                break;
            case '_location':
                if (!Array.isArray(value)) {
                    value = [value]
                }
                (value as Array<any>).map((v) => {
                    let temp = new Element(v)
                    this.$_location.push(temp)
                })
                this.$.set('_location', this.$_location.map((l) => l.toJSON()))
                break;
            case 'expression':
                if (!Array.isArray(value)) {
                    value = [value]
                }
                this.expression = value
                break;
            case '_expression': 
                if (!Array.isArray(value)) {
                    value = [value]
                }
                (value as Array<any>).map((v) => {
                    let temp = new Element(v)
                    this.$_expression.push(temp)
                })
                this.$.set('_expression', this.$_expression.map((e) => e.toJSON()))
                break;
            default:
                break;
        }
    } )
  }
}

export {OperationOutcomeIssue}