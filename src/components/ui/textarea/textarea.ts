import ElementCreator from '../elementCreactor/elementCreactor';

import './textarea.css';

interface TextareaProps {
  attributes: Partial<Record<string, string>>;
  onInput?: (event: Event) => void;
}

const Textarea = ({ attributes, onInput }: TextareaProps) => {
  const textareaElement = ElementCreator({
    tag: 'textarea',
    attributes: attributes,
  });

  if (onInput && textareaElement instanceof HTMLTextAreaElement) {
    textareaElement.addEventListener('input', onInput);
  }

  return textareaElement;
};

export default Textarea;
