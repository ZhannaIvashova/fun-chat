import ElementCreator from '../elementCreactor/elementCreactor';

import './button.css';

interface ButtonProps {
  text: string;
  attributes: Partial<Record<string, string>>;
}

const Button = ({ text, attributes }: ButtonProps) => {
  return ElementCreator({
    tag: 'button',
    text: text,
    attributes: attributes,
  });
};

export default Button;
