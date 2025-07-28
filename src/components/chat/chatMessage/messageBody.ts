import ElementCreator from '../../ui/elementCreactor/elementCreactor';
import { OwnMessageProps } from '../../../types/types';

import './chatMessage.css';

const MessageBody = (newMessage: OwnMessageProps) => {
  return ElementCreator({
    tag: 'div',
    text: newMessage.messageData.text,
    attributes: { class: 'message-body' },
  });
};

export default MessageBody;
