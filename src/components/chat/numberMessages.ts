import ElementCreator from '../ui/elementCreactor/elementCreactor';
import { getNumberMessagesHtml, getMessageNumberState } from '../../utils/stateMessage';

import './chat.css';

let numberMessagesElement: HTMLElement | null = null;

const NumberMessages = (count: number) => {
  numberMessagesElement = ElementCreator({
    tag: 'div',
    text: count > 0 ? `${count}` : '',
    attributes: { class: 'number-messages' },
  });

  return numberMessagesElement;
};

export const updateNumberMessagesElement = (login: string) => {
  const element = getNumberMessagesHtml(login);
  if (!element) return;
  const count = getMessageNumberState(login);
  element.textContent = count > 0 ? `${count}` : '';
};

export default NumberMessages;
