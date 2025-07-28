import ElementCreator from '../ui/elementCreactor/elementCreactor';
import NameInputContainer from './nameInputContainer';
import PasswordInputContainer from './passwordInputContainer';

import './login.css';

const LoginInput = () => {
  return ElementCreator({
    tag: 'div',
    attributes: { class: 'login-input' },
    children: [NameInputContainer(), PasswordInputContainer()],
  });
};

export default LoginInput;
