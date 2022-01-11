import { Address } from "../elements/address";
import { Attachment } from "../elements/attachment";
import { CodeableConcept } from "../elements/codeableConcept";
import { ContactPoint } from "../elements/contactPoint";
import { Element } from "../elements/element";
import { HumanName } from "../elements/humanName";
import { Identifier } from "../elements/identifier";
import { PatientCommunication } from "../elements/patientCommunication";
import { PatientContact } from "../elements/patientContact";
import { PatientLink } from "../elements/patientLink";
import { Reference } from "../elements/reference";
import { DomainResource } from "./domainResource";

class Patient extends DomainResource {
  private $identifier: Array<Identifier>;
  public set identifier(v: Array<Identifier>) {
    this.$identifier = v;
    this.$.set(
      "identifier",
      v.map((v) => v.toJSON())
    );
  }
  public get identifier(): Array<Identifier> {
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

  private $address: Array<Address>;
  public get address(): Array<Address> {
    return this.$address;
  }
  public set address(value: Array<Address>) {
    this.$address = value;
    this.$.set(
      "address",
      value.map((v) => v.toJSON())
    );
  }

  private $maritalStatus: CodeableConcept;
  public get maritalStatus(): CodeableConcept {
    return this.$maritalStatus;
  }
  public set maritalStatus(value: CodeableConcept) {
    this.$maritalStatus = value;
    this.$.set("maritalStatus", value.toJSON());
  }

  private $multipleBirthBoolean: boolean;
  public get multipleBirthBoolean(): boolean {
    return this.$multipleBirthBoolean;
  }
  public set multipleBirthBoolean(value: boolean) {
    this.$multipleBirthBoolean = value;
    this.$.set("multipleBirthBoolean", value);
  }

  private $_multipleBirthBoolean: Element;
  public get _multipleBirthBoolean(): Element {
    return this.$_multipleBirthBoolean;
  }
  public set _multipleBirthBoolean(value: Element) {
    this.$_multipleBirthBoolean = value;
    this.$.set("_multipleBirthBoolean", value.toJSON());
  }

  private $multipleBirthInteger: number;
  public get multipleBirthInteger(): number {
    return this.$multipleBirthInteger;
  }
  public set multipleBirthInteger(value: number) {
    this.$multipleBirthInteger = value;
    this.$.set("multipleBirthInteger", value);
  }

  private $_multipleBirthInteger: Element;
  public get _multipleBirthInteger(): Element {
    return this.$_multipleBirthInteger;
  }
  public set _multipleBirthInteger(value: Element) {
    this.$_multipleBirthInteger = value;
    this.$.set("_multipleBirthInteger", value.toJSON());
  }

  private $photo: Array<Attachment>;
  public get photo(): Array<Attachment> {
    return this.$photo;
  }
  public set photo(value: Array<Attachment>) {
    this.$photo = value;
    this.$.set(
      "photo",
      value.map((p) => p.toJSON())
    );
  }

  private $contact: Array<PatientContact>;
  public get contact(): Array<PatientContact> {
    return this.$contact;
  }
  public set contact(value: Array<PatientContact>) {
    this.$contact = value;
    this.$.set(
      "contact",
      value.map((c) => c.toJSON())
    );
  }

  private $communication: Array<PatientCommunication>;
  public get communication(): Array<PatientCommunication> {
    return this.$communication;
  }
  public set communication(value: Array<PatientCommunication>) {
    this.$communication = value;
    this.$.set(
      "communication",
      value.map((v) => v.toJSON())
    );
  }

  private $generalPractitioner: Array<Reference>;
  public get generalPractitioner(): Array<Reference> {
    return this.$generalPractitioner;
  }
  public set generalPractitioner(value: Array<Reference>) {
    this.$generalPractitioner = value;
    this.$.set(
      "generalPractitioner",
      value.map((v) => v.toJSON())
    );
  }

  private $managingOrganization: Reference;
  public get managingOrganization(): Reference {
    return this.$managingOrganization;
  }
  public set managingOrganization(value: Reference) {
    this.$managingOrganization = value;
    this.$.set("managingOrganization", value.toJSON());
  }

  private $link: Array<PatientLink>;
  public get link(): Array<PatientLink> {
    return this.$link;
  }
  public set link(value: Array<PatientLink>) {
    this.$link = value;
    this.$.set(
      "link",
      value.map((v) => v.toJSON())
    );
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
            let temp = new Identifier(v);
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

        case "address":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Address(v);
            this.$address.push(temp);
          });
          this.$.set(
            "address",
            this.$address.map((a) => a.toJSON())
          );
          break;

        case "maritalStatus":
          this.maritalStatus = new CodeableConcept(value);
          break;

        case "multipleBirthBoolean":
          this.multipleBirthBoolean = value;
          break;

        case "_multipleBirthBoolean":
          this._multipleBirthBoolean = new Element(value);
          break;

        case "multipleBirthInteger":
          this.multipleBirthInteger = value;
          break;

        case "_multipleBirthInteger":
          this._multipleBirthInteger = new Element(value);
          break;

        case "photo":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Attachment(v);
            this.$photo.push(temp);
          });
          this.$.set(
            "photo",
            this.$photo.map((p) => p.toJSON())
          );
          break;

        case "contact":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new PatientContact(v);
            this.$contact.push(temp);
          });

          this.$.set(
            "contact",
            this.$contact.map((c) => c.toJSON())
          );
          break;

        case "communication":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new PatientCommunication(v);
            this.$communication.push(temp);
          });
          break;

        case "generalPractitioner":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new Reference(value);
            this.$generalPractitioner.push(temp);
          });

          this.$.set(
            "generalPractitioner",
            this.$generalPractitioner.map((g) => g.toJSON())
          );
          break;

        case "managingOrganization":
          this.managingOrganization = new Reference(value);
          break;
        case "link":
          if (!Array.isArray(value)) {
            value = [value];
          }
          (value as Array<any>).map((v) => {
            let temp = new PatientLink(v);
            this.$link.push(temp);
          });
          this.$.set(
            "link",
            this.$link.map((l) => l.toJSON())
          );
        default:
          break;
      }
    });
  }
}

export { Patient };
