import ElementCreator from '../../ui/elementCreactor/elementCreactor';
import { OwnMessageProps } from '../../../types/types';

import './chatMessage.css';

const MessageFooter = (newMessage: OwnMessageProps) => {
  const text = newMessage.isOwn ? (newMessage.messageData.status.isDelivered ? 'delivered' : 'sent') : '';
  return ElementCreator({
    tag: 'div',
    text: text,
    attributes: { class: 'message-footer' },
  });
};

export default MessageFooter;
