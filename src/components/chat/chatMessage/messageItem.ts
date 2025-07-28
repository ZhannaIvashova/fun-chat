import ElementCreator from '../../ui/elementCreactor/elementCreactor';
import MessageHeader from './messageHeader';
import MessageBody from './messageBody';
import MessageFooter from './messageFooter';
import MessageOptions from './messageOptions/messageOptions';
import { OwnMessageProps } from '../../../types/types';
import { getViewMessageElement } from './viewMessage';

import './chatMessage.css';

let activeMessageOption: HTMLElement | null = null;

const MessageItem = (newMessage: OwnMessageProps) => {
  const messageOption = MessageOptions(newMessage);
  const children: HTMLElement[] = [MessageHeader(newMessage), MessageBody(newMessage), MessageFooter(newMessage)];

  if (newMessage.isOwn) children.push(messageOption);

  const messageItem = ElementCreator({
    tag: 'div',
    attributes: {
      class: newMessage.isOwn ? 'message-item message-own' : 'message-item message-foreign',
    },
    children,
  });

  if (newMessage.isOwn) {
    messageItem.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeMessageOption && activeMessageOption !== messageOption) {
        activeMessageOption.setAttribute('class', 'message-option hidden');
      }
      messageOption.setAttribute('class', 'message-option');
      activeMessageOption = messageOption;
    });
  }

  document.addEventListener('click', () => {
    messageOption.setAttribute('class', 'message-option hidden');
  });

  const container = getViewMessageElement();
  if (container) {
    container.appendChild(messageItem);
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }
};

export default MessageItem;
