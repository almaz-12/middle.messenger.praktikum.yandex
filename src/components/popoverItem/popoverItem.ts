import Block from "../../utils/block";
import template from "./popoverItem.tmpl";
import "./popoverItem.scss";

type PIType = {
    imgSrc: string;
    imgAlt: string;
    text: string;
    id: string;    
    class?: string;
    dataModal?: string;
};

export class PopoverItem extends Block {
    constructor(props: PIType, events?: { click: (event: Event) => void }) {
        super({...props, events});
    }

    render() {
      return template;
    }
}