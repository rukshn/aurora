import { OperationOutcomeIssue } from "../elements/operationOutcomeIssue";
import { DomainResource } from "./domainResource";

class OperationOutcome extends DomainResource {
    private $issue: Array<OperationOutcomeIssue>;
    public get issue(): Array<OperationOutcomeIssue> {
        return this.$issue;
    }
    public set issue(value: Array<OperationOutcomeIssue>) {
        this.$issue = value;
        this.$.set('issue', value.map((v) => v.toJSON()))
    }

    constructor(parameters?) {
        super(parameters)
        let _:Map<string, any> = new Map(Object.entries(parameters || {}))
        
        _.forEach((value: any, key: string) => {
            switch (key) {
                case 'issue':
                    if (!Array.isArray(value)) {
                        value = [value]
                    }
                    (value as Array<any>).map((v) => {
                        let temp = new OperationOutcomeIssue(v)
                        this.$issue.push(temp)
                    })
                    this.$.set('issue', this.$issue.map((i) => i.toJSON()))
                    break;
            
                default:
                    break;
            }
        })
    }
}

export {OperationOutcome}