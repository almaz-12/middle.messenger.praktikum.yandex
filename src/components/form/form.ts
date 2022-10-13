import Block from '../../utils/Block';
import template from './form.tmpl';
import './form.scss';

type FProps = {
  label: string;
  class: string;
}

export class Form extends Block {
  constructor(props: FProps, events: {click: (e: Event) => void}) {
    super({...props, events});
  }

  render() {
    return template;
  }
}