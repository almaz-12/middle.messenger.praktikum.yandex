import template from "./uploadAvatar.tmpl";
import Block from "../../utils/block";
import "./uploadAvatar.scss";

type UAType = {
    avatar: any;
    id: string,
    dataModal: string;
};

export class UploadAvatar extends Block {
    constructor(props: UAType, events?: { click: (event: Event) => void }) {
        super({...props, events});
    }
}