// eslint-disable-next-line no-undef
require("babel-core/register");
import './styles/style';
import { renderDOM }  from './utils';
import Signin from "./pages/signin";

const rootElem = '#app';

const signin = new Signin();

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(rootElem, signin);
});