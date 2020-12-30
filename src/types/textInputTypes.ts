export interface ITextInputProps {
    name: string;
    label?: string;
    text: string;
    setText: any;
    type?: string;
    error?: string;
    placeholder?: string;
    stealFocus?: boolean;
}

export interface ItemsInterface {
    name: string;
    selected: boolean;
}

export interface IRadioGroupInputProps {
    label?: string;
    items: Array<ItemsInterface>;
    setItems?: any;
    setSelectedItem: any;
}

export interface IErrorsListProps {
    errors: Array<string>;
}


export interface IErrorSingleProps {
    error: string;
}

export interface ICheckboxInputProps {
    name: string;
    selected: boolean;
    setSelected: any;
}

export interface ItemsInterface {
    name: string;
    selected: boolean;
}

export interface ICheckboxListProps {
    label?: string;
    items: Array<ItemsInterface>;
    setItems: any;
}