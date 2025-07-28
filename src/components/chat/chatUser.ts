import ElementCreator from '../ui/elementCreactor/elementCreactor';
import InputSearch from './inputSearch';
import UserList from './userList';

import './chat.css';

const ChatUser = () => {
  return ElementCreator({
    tag: 'section',
    attributes: { class: 'chat-user' },
    children: [InputSearch(), UserList()],
  });
};

export default ChatUser;
