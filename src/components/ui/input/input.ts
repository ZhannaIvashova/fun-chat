import ElementCreator from '../elementCreactor/elementCreactor';

import './input.css';

interface InputProps {
  attributes: Partial<Record<string, string>>;
  onInput?: (event: Event) => void;
}

const Input = ({ attributes, onInput }: InputProps) => {
  const inputElement = ElementCreator({
    tag: 'input',
    attributes: attributes,
  });

  if (onInput && inputElement instanceof HTMLInputElement) {
    inputElement.addEventListener('input', onInput);
  }

  return inputElement;
};

export default Input;
