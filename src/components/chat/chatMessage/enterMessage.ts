import ElementCreator from '../../ui/elementCreactor/elementCreactor';
import UserMessage from './userMessage';
import Button from '../../ui/button/button';
import { onMessageTextStateChange, getMessageText, setMessageText } from '../../../utils/stateMessageInput';
import { generateId } from '../../../utils/generateId';
import { sendMessageToUser } from '../../../ws/message';
import { getUserSelect } from '../../../utils/userState';

import './chatMessage.css';

const EnterMessage = () => {
  const baseClassName = 'btn btn-send';
  const disabledClassName = 'disabled';
  const sendBtn = Button({ text: 'Send', attributes: { class: `${baseClassName} ${disabledClassName}` } });

  const updateSendBtnState = () => {
    const textMessage = getMessageText().trim();
    textMessage.length > 0
      ? sendBtn.setAttribute('class', baseClassName)
      : sendBtn.setAttribute('class', `${baseClassName} ${disabledClassName}`);
  };

  onMessageTextStateChange(updateSendBtnState);

  const handleSend = () => {
    const textMessage = getMessageText().trim();
    setMessageText('');
    sendBtn.setAttribute('class', `${baseClassName} ${disabledClassName}`);

    const id = generateId();
    const selectUser = getUserSelect();
    if (selectUser) sendMessageToUser(id, selectUser.login, textMessage);
  };

  sendBtn.addEventListener('click', handleSend);
  document.addEventListener('keydown', (event) => {
    const textMessage = getMessageText().trim();
    if (event.key === 'Enter' && textMessage.length > 0) {
      handleSend();
    }
  });
  document.removeEventListener('keydown', handleSend);

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'enter-message' },
    children: [UserMessage(), sendBtn],
  });
};

export default EnterMessage;
