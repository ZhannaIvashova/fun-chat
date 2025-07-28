import ElementCreator from '../ui/elementCreactor/elementCreactor';
import Input from '../ui/input/input';
import ErrorValidation from '../ui/errorValidation/errorValidation';
import { validationPassword } from '../../utils/validation';
import { setPasswordValidationErrorState, setPasswordValidationValueState } from '../../utils/state';

import './login.css';

const PasswordInputContainer = () => {
  const passwordName = ElementCreator({ tag: 'span', text: 'Password', attributes: { class: 'text' } });

  const errorElement = ErrorValidation({ text: '', attributes: { class: 'error-hidden' } });

  const passwordNameInput = Input({
    attributes: { class: 'input user-password-input', placeholder: 'Enter your password' },
    onInput: (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        const value = target.value;
        const error = validationPassword(value);
        const isValid = value.trim() !== '' && !error;
        setPasswordValidationErrorState(isValid);
        setPasswordValidationValueState(value);
        errorElement.textContent = error ?? '';
        errorElement.className = error ? 'error-message' : 'error-hidden';
      }
    },
  });

  const inputWrap = ElementCreator({
    tag: 'div',
    attributes: { class: 'input-wrap' },
    children: [passwordNameInput, errorElement],
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'input-container' },
    children: [passwordName, inputWrap],
  });
};

export default PasswordInputContainer;
