import Block from '../../utils/block';
import template from './popover.tmpl';
import "./popover.scss";

export type PType = {  
  class: string;
  items?: undefined[];
};

export class Popover extends Block {
  constructor(props: PType, events?: { click: (event: Event) => void }) {
    super({...props, events});
  }

  render() {
    return template;
  }
}