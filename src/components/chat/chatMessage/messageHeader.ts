import ElementCreator from '../../ui/elementCreactor/elementCreactor';
import { OwnMessageProps } from '../../../types/types';

import './chatMessage.css';

const MessageHeader = (newMessage: OwnMessageProps) => {
  const messageHeaderName = ElementCreator({
    tag: 'span',
    text: newMessage.isOwn ? 'You' : newMessage.messageData.from,
  });

  const messageHeaderDate = ElementCreator({
    tag: 'span',
    text: new Date(newMessage.messageData.datetime).toLocaleString('ru-RU'),
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'message-header' },
    children: [messageHeaderName, messageHeaderDate],
  });
};

export default MessageHeader;
