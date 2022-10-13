import Block from '../../utils/block';
import template from './popoverButton.tmpl';

type PBtype = {
  classButton: string;
  id: string;    
  classSpan?: string;
};

export class PopoverButton extends Block {
  constructor(props: PBtype, events?: { click: (event: Event) => void }) {
    super({...props, events});
  }

  render() {
    return template;
  }
}