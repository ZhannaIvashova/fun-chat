import ElementCreator from '../ui/elementCreactor/elementCreactor';
import Input from '../ui/input/input';
import ErrorValidation from '../ui/errorValidation/errorValidation';
import { validationName } from '../../utils/validation';
import { setNameValidationErrorState, setNameValidationValueState } from '../../utils/state';

import './login.css';

const NameInputContainer = () => {
  const userName = ElementCreator({ tag: 'span', text: 'Name', attributes: { class: 'text' } });

  const errorElement = ErrorValidation({ text: '', attributes: { class: 'error-hidden' } });

  const userNameInput = Input({
    attributes: { type: 'text', class: 'input user-name-input', placeholder: 'Enter your name' },
    onInput: (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        const value = target.value;
        const error = validationName(value);
        const isValid = value.trim() !== '' && !error;
        setNameValidationErrorState(isValid);
        setNameValidationValueState(value);
        errorElement.textContent = error ?? '';
        errorElement.className = error ? 'error-message' : 'error-hidden';
      }
    },
  });

  const inputWrap = ElementCreator({
    tag: 'div',
    attributes: { class: 'input-wrap' },
    children: [userNameInput, errorElement],
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'input-container' },
    children: [userName, inputWrap],
  });
};

export default NameInputContainer;
