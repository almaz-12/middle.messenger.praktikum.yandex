import Block from '../../utils/Block';
import template from './signin.tmpl';
import './auth.scss';

type BProps = {
  events?: {
    click: () => void
  }
}

export class Signin extends Block {
  constructor(props: BProps) {
    super(props);
  }
  
  render() {
    return template;
  }
}