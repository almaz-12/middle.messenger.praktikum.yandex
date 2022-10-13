import Block from "../../utils/block";
import template from "./avatar.tmpl";
import "./avatar.scss";

type AType = {
  src: string;
}

export class Avatar extends Block {
  constructor(props: AType, events?: { click: (event: Event) => void }) {
    super({...props, events});
  }

  render() {
    return template;
  }
}