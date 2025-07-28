import ElementCreator from '../ui/elementCreactor/elementCreactor';
import ChatUser from './chatUser';
import ChatMessage from './chatMessage/chatMessage';

import './chat.css';

const ChatContainer = () => {
  return ElementCreator({
    tag: 'main',
    attributes: { class: 'chat-container' },
    children: [ChatUser(), ChatMessage()],
  });
};

export default ChatContainer;
