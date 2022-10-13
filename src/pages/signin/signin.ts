import Block from '../../utils/Block';
import template from './signin.tmpl';
import './auth.scss';

type SProps = {
  inputs: any;
  button: any;
}

export class Signin extends Block {
  constructor(props: SProps, events?: {
    click: () => void
  }) {
    super({...props, events});
  }
  
  render() {
    return template;
  }
}