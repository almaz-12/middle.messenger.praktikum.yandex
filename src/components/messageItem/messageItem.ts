import Block from '../../utils/Block';
import template from './messageItem.tmpl';
import '../../styles/colors';
import './messageItem.scss';

type MIType = {
  image: string;
  text: string;
  time: string;
};

export class MessageItem extends Block {
  constructor(props: MIType, events?: { click: (event: Event) => void }) {
    super({...props,events});
  }

  render() {
    return template
  }
}