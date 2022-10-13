import Block from "../../utils/Block";
import template from "./link.tmpl";

type LProps = {
  class: string;
  href: string;
  label: string;
}

export class Link extends Block {
  constructor(props: LProps) {
    const onClick = (e: MouseEvent) => e.preventDefault();
    super({...props, events: { click: onClick }});
  }

  render() {
    return template;
  }
}