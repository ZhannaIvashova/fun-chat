import ElementCreator from '../ui/elementCreactor/elementCreactor';
import Title from '../ui/title/title';
import LoginInput from './loginInput';
import LoginConrol from './loginControl';
import ErrorAuth from './errorAuth';

import './login.css';

const LoginContainer = () => {
  return ElementCreator({
    tag: 'div',
    attributes: { class: 'login-container' },
    children: [Title({ text: 'Authorization' }), LoginInput(), ErrorAuth(), LoginConrol()],
  });
};

export default LoginContainer;
