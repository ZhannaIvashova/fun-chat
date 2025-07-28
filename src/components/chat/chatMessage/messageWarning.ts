import ElementCreator from '../../ui/elementCreactor/elementCreactor';

import './chatMessage.css';

const MessageWarning = (text?: string) => {
  return ElementCreator({
    tag: 'span',
    text: text ? text : 'Select contact to start conversation',
    attributes: { class: 'message-warning' },
  });
};

export default MessageWarning;
