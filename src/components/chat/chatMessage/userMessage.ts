import Textarea from '../../ui/textarea/textarea';
import { setMessageText, getMessageText, onMessageTextStateChange } from '../../../utils/stateMessageInput';
import { onUserSelectStateChange } from '../../../utils/userState';

const UserMessage = () => {
  const textareaElement = Textarea({
    attributes: { class: 'textarea disabled', placeholder: 'Enter message...' },
    onInput: (e) => {
      const target = e.target;
      if (target instanceof HTMLTextAreaElement) {
        setMessageText(target.value);
      }
    },
  });

  onUserSelectStateChange(() => textareaElement.setAttribute('class', 'textarea'));
  onMessageTextStateChange(() => {
    const text = getMessageText();
    textareaElement.value = text;
  });

  return textareaElement;
};

export default UserMessage;
