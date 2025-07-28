import ElementCreator from '../../ui/elementCreactor/elementCreactor';
import MessageWarning from './messageWarning';

import './chatMessage.css';

let viewMessageElement: HTMLElement | null = null;

const ViewMessage = () => {
  viewMessageElement = ElementCreator({
    tag: 'div',
    attributes: { class: 'view-message' },
  });

  const filler = ElementCreator({
    tag: 'div',
    attributes: { class: 'message-filler' },
  });

  viewMessageElement.appendChild(filler);
  viewMessageElement.appendChild(MessageWarning());

  return viewMessageElement;
};

export const getViewMessageElement = () => viewMessageElement;
export const clearViewMessageElement = () => {
  if (viewMessageElement) {
    const children = Array.from(viewMessageElement.children);
    children.forEach((child) => {
      const className = child.getAttribute('class');
      if (className !== 'message-filler') {
        viewMessageElement?.removeChild(child);
      }
    });
  }
};

export default ViewMessage;
