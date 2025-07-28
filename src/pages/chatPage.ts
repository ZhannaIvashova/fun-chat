import Header from '../components/header/header';
import ChatContainer from '../components/chat/chatContainer';
import Footer from '../components/footer/footer';
import { generateId } from '../utils/generateId';
import { requestActiveUsers, requestInActiveUsers } from '../ws/message';
import { getAuthDateStorage } from '../utils/authStorage';
import { navigate } from '../router/router';

const ChatPage = (root: HTMLElement) => {
  const currentUser = getAuthDateStorage();
  if (!currentUser) {
    navigate('/login');
    return;
  }

  root.textContent = '';

  root.appendChild(Header());
  root.appendChild(ChatContainer());
  root.appendChild(Footer());

  const id = generateId();
  requestActiveUsers(id);
  requestInActiveUsers(id);
};

export default ChatPage;
