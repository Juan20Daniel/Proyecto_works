export interface SimpleForm {
    values:Record<string, InputValue>;
    errors:Record<string, InputError>;
}

export interface InputValue {
    value:string;
    isFocus:boolean;
}

export interface InputError {
    status: InputStatusError;
    valid: boolean;
}

export type InputStatusError = null|'empty'|'valid'|'invalid';