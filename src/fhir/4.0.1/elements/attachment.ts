import { Element } from "./element";

class Attachment extends Element {
    private $contentType: string;
    public get contentType(): string {
        return this.$contentType;
    }
    public set contentType(value: string) {
        this.$contentType = value;
        this.$.set('contentType', value)
    }
    private $_contentType: Element;
    public get _contentType(): Element {
        return this.$_contentType;
    }
    public set _contentType(value: Element) {
        this.$_contentType = value;
        this.$.set('_contentType', value.toJSON())
    }

    private $language: string;
    public get language(): string {
        return this.$language;
    }
    public set language(value: string) {
        this.$language = value;
        this.$.set('language', value)
    }

    private $_language: Element;
    public get _language(): Element {
        return this.$_language;
    }
    public set _language(value: Element) {
        this.$_language = value;
        this.$.set('_language', value.toJSON())
    }

    private $data: string; 
    public get data(): string {
        return this.$data;
    }
    public set data(value: string) {
        this.$data = value;
        this.$.set('data', value)
    }

    private $_data: Element;
    public get _data(): Element {
        return this.$_data;
    }
    public set _data(value: Element) {
        this.$_data = value;
        this.$.set('data', value)
    }

    private $url: string; 
    public get url(): string {
        return this.$url;
    }
    public set url(value: string) {
        this.$url = value;
        this.$.set('url', value)
    }

    private $_url: Element;
    public get _url(): Element {
        return this.$_url;
    }
    public set _url(value: Element) {
        this.$_url = value;
        this.$.set('_url', value.toJSON())
    }

    private $size: number;
    public get size(): number {
        return this.$size;
    }
    public set size(value: number) {
        this.$size = value;
        this.$.set('size', value)
    }
    
    private $_size: Element;
    public get _size(): Element {
        return this.$_size;
    }
    public set _size(value: Element) {
        this.$_size = value;
        this.$.set('_size', value.toJSON())
    }
    
    private $hash: string; 
    public get hash(): string {
        return this.$hash;
    }
    public set hash(value: string) {
        this.$hash = value;
        this.$.set('hash', value)
    }
    
    private $_hash: Element;
    public get _hash(): Element {
        return this.$_hash;
    }
    public set _hash(value: Element) {
        this.$_hash = value;
        this.$.set('_hash', value.toJSON())
    }

    private $title: string; 
    public get title(): string {
        return this.$title;
    }
    public set title(value: string) {
        this.$title = value;
        this.$.set('title', value)
    }
    
    private $_title: Element; 
    public get _title(): Element {
        return this.$_title;
    }
    public set _title(value: Element) {
        this.$_title = value;
        this.$.set('_title', value.toJSON())
    }

    private $creation: string; 
    public get creation(): string {
        return this.$creation;
    }
    public set creation(value: string) {
        this.$creation = value;
        this.$.set('creation', value)
    }

    private $_creation: Element;
    public get _creation(): Element {
        return this.$_creation;
    }
    public set _creation(value: Element) {
        this.$_creation = value;
        this.$.set('creation', value.toJSON())
    }

    constructor(parameters?) {
        super(parameters)
        let _:Map<string, any> = new Map(Object.entries(parameters || {}))

        _.forEach((value: any, key: string) => {
            switch (key) {
                case 'contentType':
                    this.contentType = value
                    break;
                case '_contentType':
                    this._contentType = new Element(value)
                    break;
                case 'language':
                    this.language = value
                    break;
                case '_language':
                    this._language = new Element(value)
                    break;
                case 'data':
                    this.data = value
                    break
                case '_data':
                    this._data = new Element(value)
                    break
                case 'url':
                    this.url = value 
                    break 
                case '_url':
                    this._url = new Element(value)
                    break
                case 'size':
                    this.size = value 
                    break;
                case '_size':
                    this._size = new Element(value) 
                    break;
                case 'hash':
                    this.hash = value 
                    break;
                case '_hash':
                    this._hash = new Element(value)
                    break
                case 'title':
                    this.title = value
                    break 
                case '_title':
                    this._title = new Element(value)
                    break 
                case 'creation':
                    this.creation = value 
                    break;
                case '_creation':
                    this._creation = new Element(value)
                    break;
                default:
                    break;
            }
        })
    }
}

export {Attachment}