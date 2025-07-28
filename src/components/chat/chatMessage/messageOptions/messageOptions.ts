import ElementCreator from '../../../ui/elementCreactor/elementCreactor';
import Button from '../../../ui/button/button';
import { OwnMessageProps } from '../../../../types/types';
import { deleteMessage } from '../../../../ws/message';
import { generateId } from '../../../../utils/generateId';

import './messageOptions.css';

const MessageOptions = (newMessage: OwnMessageProps) => {
  const editBtn = Button({ text: 'Edit', attributes: { class: 'btn btn-edit' } });
  const deleteBtn = Button({ text: 'Delete', attributes: { class: 'btn btn-delete' } });

  deleteBtn.addEventListener('click', () => {
    const messageId = newMessage.messageData.id;
    const id = generateId();
    deleteMessage(id, messageId);
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'message-option hidden' },
    children: [editBtn, deleteBtn],
  });
};

export default MessageOptions;
