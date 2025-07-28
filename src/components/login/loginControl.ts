import ElementCreator from '../ui/elementCreactor/elementCreactor';
import Button from '../ui/button/button';
import InfoBtn from '../ui/infoButton/infoButton';
import {
  onNameErrorStateChange,
  onPasswordErrorStateChange,
  getNameValidationErrorState,
  getPasswordValidationErrorState,
  getNameValidationValueState,
  getPasswordValidationValueState,
} from '../../utils/state';
import { generateId } from '../../utils/generateId';
import { saveAuthDateStorage } from '../../utils/authStorage';
import { loginRequest } from '../../ws/message';

import './login.css';

const LoginConrol = () => {
  const baseClassName = 'btn btn-login';
  const disabledClassName = 'disabled';
  const loginBtn = Button({ text: 'Login', attributes: { class: `${baseClassName} ${disabledClassName}` } });

  const updateLoginBtnState = () => {
    const isValid = getNameValidationErrorState() && getPasswordValidationErrorState();
    isValid
      ? loginBtn.setAttribute('class', baseClassName)
      : loginBtn.setAttribute('class', `${baseClassName} ${disabledClassName}`);
  };

  onNameErrorStateChange(updateLoginBtnState);
  onPasswordErrorStateChange(updateLoginBtnState);

  const handleLogin = () => {
    const login = getNameValidationValueState();
    const password = getPasswordValidationValueState();
    const id = generateId();

    saveAuthDateStorage(id, login, password);
    loginRequest(id, login, password);
  };

  loginBtn.addEventListener('click', handleLogin);
  document.addEventListener('keydown', (event) => {
    const isValid = getNameValidationErrorState() && getPasswordValidationErrorState();
    if (event.key === 'Enter' && isValid) {
      handleLogin();
    }
  });
  document.removeEventListener('keydown', handleLogin);

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'login-control' },
    children: [loginBtn, InfoBtn],
  });
};

export const handleLogin = () => {
  const login = getNameValidationValueState();
  const password = getPasswordValidationValueState();
  const id = generateId();

  saveAuthDateStorage(id, login, password);
  loginRequest(id, login, password);
};

export default LoginConrol;
