import Block from '../../utils/Block';
import template from './button.tmpl';
import './button.scss';

type BProps = {
  label: string;
  class: string;
}

export class Button extends Block {
  constructor(props: BProps, events: {click: (e: Event) => void}) {
    super({...props, events});
  }

  render() {
    return template;
  }
}