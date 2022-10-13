import Block from '../../utils/Block';
import template from './chatItem.tmpl';
import './chatItem.scss';

type CIType = {
  name: string;
  message: string;
  time: string;
  isActive: boolean;  
  avatar?: string;
};

export class ChatItem extends Block {
  constructor(props: CIType, events?: { click: (event: Event) => void }) {
    super({...props,events});
  }

  render() {
    return template
  }
}