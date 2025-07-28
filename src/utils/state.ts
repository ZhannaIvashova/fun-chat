let nameValidationValueState = '';
let passwordValidationValueState = '';

let nameValidationErrorState = false;
let passwordValidationErrorState = false;

export const setNameValidationValueState = (value: string) => (nameValidationValueState = value);
export const getNameValidationValueState = () => nameValidationValueState;

export const setPasswordValidationValueState = (value: string) => (passwordValidationValueState = value);
export const getPasswordValidationValueState = () => passwordValidationValueState;

const nameErrorStateEvent = new EventTarget();
const passwordErrorStateEvent = new EventTarget();

const emitNameErrorStateChange = () => nameErrorStateEvent.dispatchEvent(new Event('change'));

const emitPasswordErrorStateChange = () => passwordErrorStateEvent.dispatchEvent(new Event('change'));

export const onNameErrorStateChange = (callback: () => void) => {
  nameErrorStateEvent.addEventListener('change', callback);
};

export const onPasswordErrorStateChange = (callback: () => void) => {
  passwordErrorStateEvent.addEventListener('change', callback);
};

export const setNameValidationErrorState = (isError: boolean) => {
  nameValidationErrorState = isError;
  emitNameErrorStateChange();
};
export const getNameValidationErrorState = () => nameValidationErrorState;

export const setPasswordValidationErrorState = (isError: boolean) => {
  passwordValidationErrorState = isError;
  emitPasswordErrorStateChange();
};
export const getPasswordValidationErrorState = () => passwordValidationErrorState;
