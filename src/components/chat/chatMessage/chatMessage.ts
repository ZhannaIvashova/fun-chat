import ElementCreator from '../../ui/elementCreactor/elementCreactor';
import UserSelectContainer from './userSelectContainer';
import ViewMessage from './viewMessage';
import EnterMessage from './enterMessage';

import '../chat.css';

const ChatMessage = () => {
  return ElementCreator({
    tag: 'section',
    attributes: { class: 'chat-message' },
    children: [UserSelectContainer(), ViewMessage(), EnterMessage()],
  });
};

export default ChatMessage;
