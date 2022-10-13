// eslint-disable-next-line no-undef
require("babel-core/register");
import './styles/style';
import { Block, renderDOM, registerComponent }  from './utils';
import { Button } from './components/button';
import { Input } from './components/input';
import { Link } from './components/link';
import { Auth } from './pages/auth';
import { OnboardingPage } from './pages/onboarding';

registerComponent(Button);
registerComponent(Input);
registerComponent(Link);
registerComponent(Auth);

const rootElem = '#app';


document.addEventListener("DOMContentLoaded", () => {
  renderDOM(rootElem, new OnboardingPage({
    content: 'ads'
  }));
});