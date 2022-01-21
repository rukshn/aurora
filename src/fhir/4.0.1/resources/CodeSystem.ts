import { CodeableConcept } from "../elements/codeableConcept";
import { Concept } from "../elements/codeSystemConcept";
import { CodeSystemFilter } from "../elements/codeSystemFilter";
import { CodeSystemProperty } from "../elements/codeSystemProperty";
import { ContactDetail } from "../elements/contactDetail";
import { Element } from "../elements/element";
import { Identifier } from "../elements/identifier";
import { UseageContext } from "../elements/useageContext";
import { DomainResource } from "./domainResource";

class CodeSystem extends DomainResource {
  #url: string;
  public get url(): string {
    return this.#url;
  }
  public set url(v: string) {
    this.#url = v;
    this.$.set("url", v);
  }

  #_url: Element;
  public get _url(): Element {
    return this.#_url;
  }
  public set _url(v: Element) {
    this._url = v;
    this.$.set("_url", v.toJSON());
  }

  #identifier: Array<Identifier>;
  public get identifier(): Array<Identifier> {
    return this.#identifier;
  }
  public set identifier(v: Array<Identifier>) {
    this.#identifier = v;
    this.$.set(
      "identifier",
      v.map((v) => v.toJSON())
    );
  }

  #version: string;
  public get version(): string {
    return this.#version;
  }
  public set version(v: string) {
    this.#version = v;
    this.$.set("version", v);
  }

  #_version: Element;
  public get _version(): Element {
    return this.#_version;
  }
  public set _version(v: Element) {
    this.#_version = v;
    this.$.set("_version", v.toJSON());
  }

  #name: string;
  public get name(): string {
    return this.#name;
  }
  public set name(v: string) {
    this.#name = v;
    this.$.set("name", v);
  }

  #_name: Element;
  public get _name(): Element {
    return this.#_name;
  }
  public set _name(v: Element) {
    this.#_name = v;
    this.$.set("_name", v.toJSON());
  }

  #title: string;
  public get title(): string {
    return this.#title;
  }
  public set title(v: string) {
    this.#title = v;
    this.$.set("title", v);
  }

  #_title: Element;
  public get _title(): Element {
    return this.#_title;
  }

  public set _title(v: Element) {
    this.#_title = v;
    this.$.set("_title", v.toJSON());
  }

  #status: string;
  public get status(): string {
    return this.#status;
  }
  public set status(v: string) {
    this.#status = v;
    this.$.set("status", v);
  }

  #_status: Element;
  public get _status(): Element {
    return this.#_status;
  }
  public set _status(v: Element) {
    this.#_status = v;
    this.$.set("_status", v.toJSON());
  }

  #experimental: boolean;
  public get experimental(): boolean {
    return this.#experimental;
  }
  public set experimental(v: boolean) {
    this.#experimental = v;
    this.$.set("experimantal", v);
  }

  #_experimental: Element;
  public get _experimental(): Element {
    return this.#_experimental;
  }
  public set _experimental(v: Element) {
    this.#_experimental = v;
    this.$.set("_experimental", v.toJSON());
  }

  #date: string;
  public get date(): string {
    return this.#date;
  }
  public set date(v: string) {
    this.#date = v;
    this.$.set("date", v);
  }

  #_date: Element;
  public get _date(): Element {
    return this.#_date;
  }
  public set _date(v: Element) {
    this.#_date = v;
    this.$.set("_date", v.toJSON());
  }

  #publisher: string;
  public get publisher(): string {
    return this.#publisher;
  }
  public set publisher(v: string) {
    this.#publisher = v;
    this.$.set("publisher", v);
  }

  #_publisher: Element;
  public get _publisher(): Element {
    return this.#_publisher;
  }
  public set _publisher(v: Element) {
    this.#_publisher = v;
    this.$.set("_publisher", v.toJSON());
  }

  #contact: Array<ContactDetail>;
  public get contact(): Array<ContactDetail> {
    return this.#contact;
  }
  public set contact(v: Array<ContactDetail>) {
    this.#contact = v;
    this.$.set(
      "contact",
      v.map((v) => v.toJSON())
    );
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
    this.#_description = v;
    this.$.set("_description", v.toJSON());
  }

  #useContext: Array<UseageContext>;
  public get useContext(): Array<UseageContext> {
    return this.#useContext;
  }
  public set useContext(v: Array<UseageContext>) {
    this.#useContext = v;
    this.$.set(
      "useContext",
      v.map((v) => v.toJSON())
    );
  }

  #jurisdiction: Array<CodeableConcept>;
  public get jurisdiction(): Array<CodeableConcept> {
    return this.#jurisdiction;
  }
  public set jurisdiction(v: Array<CodeableConcept>) {
    this.#jurisdiction = v;
    this.$.set(
      "jurisdiction",
      v.map((v) => v.toJSON())
    );
  }

  #purpose: string;
  public get purpose(): string {
    return this.#purpose;
  }
  public set purpose(v: string) {
    this.#purpose = v;
    this.$.set("purpose", v);
  }

  #_purpose: Element;
  public get _purpose(): Element {
    return this.#_purpose;
  }
  public set _purpose(v: Element) {
    this.#_purpose = v;
    this.$.set("_purpose", v.toJSON());
  }

  #copyright: string;
  public get copyright(): string {
    return this.#copyright;
  }
  public set copyright(v: string) {
    this.#copyright = v;
    this.$.set("copyright", v);
  }

  #_copyright: Element;
  public get _copyright(): Element {
    return this.#_copyright;
  }
  public set _copyright(v: Element) {
    this.#_copyright = v;
    this.$.set("_copyright", v.toJSON());
  }

  #caseSensitive: boolean;
  public get caseSensitive(): boolean {
    return this.#caseSensitive;
  }
  public set caseSensitive(v: boolean) {
    this.#caseSensitive = v;
    this.$.set("caseSensitive", v);
  }

  #_caseSensitive: Element;
  public get _caseSensitive(): Element {
    return this.#_caseSensitive;
  }
  public set _caseSensitive(v: Element) {
    this.#_caseSensitive = v;
    this.$.set("_caseSensitive", v.toJSON());
  }

  #valueSet: string;
  public get valueSet(): string {
    return this.#valueSet;
  }
  public set valueSet(v: string) {
    this.#valueSet = v;
    this.$.set("valueSet", v);
  }

  #_valueSet: Element;
  public get _valueSet(): Element {
    return this.#_valueSet;
  }
  public set _valueSet(v: Element) {
    this.#_valueSet = v;
    this.$.set("_valueSet", v.toJSON());
  }

  #hierarchyMeaning: string;
  public get hierarchyMeaning(): string {
    return this.#hierarchyMeaning;
  }
  public set hierarchyMeaning(v: string) {
    this.#hierarchyMeaning = v;
    this.$.set("hierarchyMeaning", v);
  }

  #_hierarchyMeaning: Element;
  public get _hierarchyMeaning(): Element {
    return this.#_hierarchyMeaning;
  }
  public set _hierarchyMeaning(v: Element) {
    this.#_hierarchyMeaning = v;
    this.$.set("_hierarchyMeaning", v.toJSON());
  }

  #compositional: boolean;
  public get compositional(): boolean {
    return this.#compositional;
  }
  public set compositional(v: boolean) {
    this.#compositional = v;
    this.$.set("compositional", v);
  }

  #_compositional: Element;
  public get _compositional(): Element {
    return this.#_compositional;
  }
  public set _compositional(v: Element) {
    this.#_compositional = v;
    this.$.set("_compositional", v.toJSON());
  }

  #versionNeeded: boolean;
  public get versionNeeded(): boolean {
    return this.#versionNeeded;
  }
  public set versionNeeded(v: boolean) {
    this.#versionNeeded = v;
    this.$.set("versionNeeded", v);
  }

  #_versionNeeded: Element;
  public get _versionNeeded(): Element {
    return this.#_versionNeeded;
  }
  public set _versionNeeded(v: Element) {
    this.#_versionNeeded = v;
    this.$.set("_versionNeeded", v.toJSON());
  }

  #content: string;
  public get content(): string {
    return this.#content;
  }
  public set content(v: string) {
    this.#content = v;
    this.$.set("content", v);
  }

  #_content: Element;
  public get _content(): Element {
    return this.#_content;
  }
  public set _content(v: Element) {
    this.#_content = v;
    this.$.set("_content", v.toJSON());
  }

  #supplements: string;
  public get supplements(): string {
    return this.#supplements;
  }
  public set supplements(v: string) {
    this.#supplements = v;
    this.$.set("supplements", v);
  }

  #_supplements: Element;
  public get _supplements(): Element {
    return this.#_supplements;
  }
  public set _supplements(v: Element) {
    this.#_supplements = v;
    this.$.set("_supplements", v.toJSON());
  }

  #count: number;
  public get count(): number {
    return this.#count;
  }
  public set count(v: number) {
    this.#count = v;
    this.$.set("count", v);
  }

  #_count: Element;
  public get _count(): Element {
    return this.#_count;
  }
  public set _count(v: Element) {
    this.#_count = v;
    this.$.set("_count", v.toJSON());
  }

  #filter: Array<CodeSystemFilter>;
  public get filter(): Array<CodeSystemFilter> {
    return this.#filter;
  }
  public set filter(v: Array<CodeSystemFilter>) {
    this.#filter = v;
    this.$.set(
      "filter",
      v.map((v) => v.toJSON())
    );
  }

  #property: Array<CodeSystemProperty>;
  public get property(): Array<CodeSystemProperty> {
    return this.#property;
  }
  public set property(v: Array<CodeSystemProperty>) {
    this.#property = v;
    this.$.set(
      "property",
      v.map((v) => v.toJSON())
    );
  }

  #concept: Array<Concept>;
  public get concept(): Array<Concept> {
    return this.#concept;
  }
  public set concept(v: Array<Concept>) {
    this.#concept = v;
    this.$.set(
      "concept",
      v.map((v) => v.toJSON())
    );
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));

    _.forEach((value: any, key: string) => {
      switch (key) {
        case "url":
          this.url = value;
          break;
        case "_url":
          this._url = new Element(value);
          break;
        case "identifier":
          this.#identifier = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Identifier(v);
            this.#identifier.push(temp);
          });
          this.identifier = this.#identifier;
          break;
        case "version":
          this.version = value;
          break;
        case "_version":
          this._version = new Element(value);
          break;
        case "name":
          this.name = value;
          break;
        case "_name":
          this._name = new Element(value);
          break;
        case "title":
          this.title = value;
          break;
        case "_title":
          this._title = new Element(value);
          break;
        case "status":
          this.status = value;
          break;
        case "_status":
          this._status = new Element(value);
          break;
        case "experimental":
          this.experimental = value;
          break;
        case "_experimental":
          this._experimental = new Element(value);
          break;
        case "date":
          this.date = value;
          break;
        case "_date":
          this._date = new Element(value);
          break;
        case "publisher":
          this.publisher = value;
          break;
        case "_publisher":
          this._publisher = new Element(value);
          break;
        case "contact":
          this.#contact = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new ContactDetail(v);
            this.#contact.push(temp);
          });
          this.contact = this.#contact;
          break;
        case "description":
          this.description = value;
          break;
        case "_description":
          this._description = new Element(value);
          break;
        case "useContext":
          this.#useContext = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new UseageContext(v);
            this.#useContext.push(temp);
          });
          this.useContext = this.#useContext;
          break;
        case "jurisdiction":
          this.#jurisdiction = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new CodeableConcept(v);
            this.#jurisdiction.push(temp);
          });
          this.jurisdiction = this.#jurisdiction;
          break;
        case "purpose":
          this.purpose = value;
          break;
        case "_purpose":
          this._purpose = new Element(value);
          break;
        case "copyright":
          this.copyright = value;
          break;
        case "_copyright":
          this._copyright = new Element(value);
          break;
        case "caseSensitive":
          this.caseSensitive = value;
          break;
        case "_caseSensitive":
          this._caseSensitive = new Element(value);
          break;
        case "valueSet":
          this.valueSet = value;
          break;
        case "_valueSet":
          this._valueSet = new Element(value);
          break;
        case "hierarchyMeaning":
          this.hierarchyMeaning = value;
          break;
        case "_hierarchyMeaning":
          this._hierarchyMeaning = new Element(value);
          break;
        case "compositional":
          this.compositional = value;
          break;
        case "_compositional":
          this._compositional = new Element(value);
          break;
        case "versionNeeded":
          this.versionNeeded = value;
          break;
        case "_versionNeeded":
          this._versionNeeded = new Element(value);
          break;
        case "content":
          this.content = value;
          break;
        case "_content":
          this._content = new Element(value);
          break;
        case "supplements":
          this.supplements = value;
          break;
        case "_supplements":
          this._supplements = new Element(value);
          break;
        case "count":
          this.count = value;
          break;
        case "_count":
          this._count = new Element(value);
          break;
        case "filter":
          this.#filter = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new CodeSystemFilter(v);
            this.#filter.push(temp);
          });
          this.filter = this.#filter;
          break;
        case "property":
          this.#property = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new CodeSystemProperty(v);
            this.#property.push(temp);
          });
          this.property = this.#property;
          break;
        case "concept":
          this.#concept = [];
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Concept(v);
          });
          this.concept = this.#concept;
          break;
        default:
          break;
      }
    });
  }
}

export { CodeSystem };
