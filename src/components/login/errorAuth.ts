import ErrorValidation from '../ui/errorValidation/errorValidation';

let errorElement: HTMLElement | null = null;

const ErrorAuth = () => {
  errorElement = ErrorValidation({
    text: '',
    attributes: { class: 'error-hidden' },
  });

  return errorElement;
};

export const updateErrorElement = (text: string) => {
  if (errorElement) {
    errorElement.textContent = text;
    errorElement.setAttribute('class', 'error-message');
  }
};

export default ErrorAuth;
