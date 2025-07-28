import ElementCreator from '../elementCreactor/elementCreactor';

import './errorValidation.css';

interface ErrorValidationProps {
  text: string;
  attributes: Partial<Record<string, string>>;
}

const ErrorValidation = ({ text, attributes }: ErrorValidationProps) => {
  return ElementCreator({
    tag: 'span',
    text: text,
    attributes: attributes,
  });
};

export default ErrorValidation;
