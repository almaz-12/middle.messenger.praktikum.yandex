import Block from '../../utils/Block';
import template from './input.tmpl';
import './input.scss';

type IProps = {
  type: string;
  label: string;
  name: string;
  error: string;
}

export class Input extends Block {
  constructor(props: IProps, events?: { blur: (event: Event) => void }) {
    super(props);
  }

  protected render() {
    return template;
  }
}