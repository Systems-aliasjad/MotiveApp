import { FormGroup } from "@angular/forms";
import { IFormFieldConfig } from "./ITRCFormComponent";
import { Input, Component, Injectable } from "@angular/core";

@Injectable()
export abstract class BaseTRCFormComponent {    
    constructor() {}
    @Input() field:IFormFieldConfig;
    @Input() group:FormGroup;
}