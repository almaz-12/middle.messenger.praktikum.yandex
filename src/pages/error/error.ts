import Block from "../../utils/block";
import template from "./error.tmpl";
import "./error.scss";

type EPType = {
  errorCode: string;
  errorMessage: string;
  textLink: string;
}

export class ErrorPage extends Block {
  constructor(props: EPType, events?: { click: (event: Event) => void }) {
    super({...props, events});
  }

  render() {
    return template;
  }
}