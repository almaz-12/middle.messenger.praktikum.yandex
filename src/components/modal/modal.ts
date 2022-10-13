import Block from "../../utils/block";
import template from "./modal.tmpl";
import "./modal.scss";

export type MType = {
    id: string;
    title: string;
    textLabel: string;
    inputId: string;
    required: boolean;
    inputType: string;
    error?: string;
    buttonText?: string;
    href?: string;
    textLink?: string;
    classInput?: string;
    classLabel?: string;
};

export class Modal extends Block {
    constructor(props: MType, events?: { click: (event: Event) => void }) {
        super({...props, events});
    }
}