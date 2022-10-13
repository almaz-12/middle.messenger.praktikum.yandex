import Block from '../../utils/Block';
import template from './auth.tmpl';
// import { Signin } from "../signin";
// import { Signup } from "./signup";
import './auth.scss';

type AProps = {
  route: string,
}

export class Auth extends Block {
  constructor(props: AProps) {
    super(props);
  }
  
  render() {
    const context = {
      title: "Вход",
    };
    
    return template;
  }
}