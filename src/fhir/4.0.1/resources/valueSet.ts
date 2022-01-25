import { Element } from "../elements/element";
import { DomainResource } from "./domainResource";
import { Identifier } from "../elements/identifier";
import { ContactDetail } from "../elements/contactDetail";
import { CodeableConcept } from "../elements/codeableConcept";
import { ValueSetCompose } from "../elements/valueSetCompose";

class ValueSet extends DomainResource {
  #url: string;
  public get url(): string {
    return this.url;
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
    this.#_url = v;
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
    this.$.set("experimental", v);
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

  #immutable: boolean;
  public get immutable(): boolean {
    return this.#immutable;
  }
  public set immutable(v: boolean) {
    this.#immutable = v;
    this.$.set("immutable", v);
  }

  #_immutable: Element;
  public get _immutable(): Element {
    return this.#_immutable;
  }
  public set _immutable(v: Element) {
    this.#_immutable = v;
    this.$.set("_immutable", v.toJSON());
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

  #compose: Array<ValueSetCompose>;
  public get compose(): Array<ValueSetCompose> {
    return this.#compose;
  }
  public set compose(v: Array<ValueSetCompose>) {
    this.#compose = v;
    this.$.set(
      "compose",
      v.map((v) => v.toJSON())
    );
  }

  constructor(parameters?) {
    super(parameters);
    let _: Map<string, any> = new Map(Object.entries(parameters || {}));
  }
}

export { ValueSet };
