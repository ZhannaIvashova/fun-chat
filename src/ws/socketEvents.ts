import { socketWrapper } from './socket';
import { navigate } from '../router/router';

import UserItem from '../components/chat/userItem';
import MessageItem from '../components/chat/chatMessage/messageItem';
import MessageWarning from '../components/chat/chatMessage/messageWarning';
import { getAuthDateStorage, clearAuthDateStorage } from '../utils/authStorage';
import { setUsersState, getUserSelect, clearUsersState, getUsersState, setIsWarning } from '../utils/userState';
import { loginRequest, requestActiveUsers, requestInActiveUsers, requestMessageHistoryFromUser } from './message';
import { setMessageToUserState, setMessageNumberState } from '../utils/stateMessage';
import { MessageProps } from '../types/types';
import { updateErrorElement } from '../components/login/errorAuth';
import { updateNumberMessagesElement } from '../components/chat/numberMessages';
import { clearUserListElement } from '../components/chat/userList';
import { generateId } from '../utils/generateId';
import { clearViewMessageElement, getViewMessageElement } from '../components/chat/chatMessage/viewMessage';
import { updateUserSelect } from '../components/chat/chatMessage/userSelectContainer';
import { attemptReconnect } from './attemptReconnect';

declare global {
  interface Window {
    __alreadyTriedToLogin?: boolean;
    __lastValidRoute?: string;
  }
}

export const socketListeners = (socket: WebSocket) => {
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);

    if (message.type === 'USER_LOGIN' && message.payload?.user?.isLogined) {
      navigate('/chat');
    }

    if (message.type === 'USER_LOGOUT' && !message.payload?.user?.isLogined) {
      clearAuthDateStorage();
      navigate('/login');
    }

    if (message.type === 'USER_ACTIVE' || message.type === 'USER_INACTIVE') {
      const updatedUsers = message.payload?.users || [];
      setUsersState(updatedUsers);
      UserItem();

      const selectUser = getUserSelect()?.login;
      const isLogined = getUsersState().find((user) => user.login === selectUser)?.isLogined;
      if (selectUser && typeof isLogined === 'boolean') {
        updateUserSelect(selectUser, isLogined);
      }
    }

    if (message.type === 'USER_EXTERNAL_LOGIN' || message.type === 'USER_EXTERNAL_LOGOUT') {
      clearUserListElement();
      clearUsersState();
      requestActiveUsers(generateId());
      requestInActiveUsers(generateId());
    }

    if (message.type === 'MSG_SEND') {
      const messageData = message.payload?.message;
      const currentUser = getAuthDateStorage().login;
      const isOwn = messageData.from === currentUser;
      const contact = isOwn ? messageData.to : messageData.from;
      const selectedUser = getUserSelect()?.login;

      setMessageToUserState({ isOwn, messageData });

      if (selectedUser === contact) {
        const container = getViewMessageElement();
        if (container) {
          const children = Array.from(container.children);
          children.forEach((child) => {
            const className = child.getAttribute('class');
            if (className === 'message-warning') {
              container.removeChild(child);
            }
          });
        }
        MessageItem({ isOwn, messageData });
      } else {
        setMessageNumberState(contact);
        updateNumberMessagesElement(contact);
      }
    }

    if (message.type === 'MSG_FROM_USER') {
      const messagesData = message.payload?.messages;
      const currentUser = getAuthDateStorage().login;

      clearViewMessageElement();
      setIsWarning(false);

      if (!messagesData || messagesData.length === 0) {
        const container = getViewMessageElement();
        if (container) container.appendChild(MessageWarning('No messages here yet...'));
        setIsWarning(true);
        return;
      }
      messagesData.forEach((message: MessageProps) => {
        const isOwn = message.from === currentUser;
        MessageItem({ isOwn, messageData: message });
      });
    }

    if (message.type === 'MSG_DELETE') {
      const messagesData = message.payload?.message;
      if (messagesData && messagesData.status.isDeleted) {
        const login = getUserSelect()?.login;
        if (login) {
          requestMessageHistoryFromUser(generateId(), login);
        }
      }
    }

    if (message.type === 'ERROR') {
      const errorText = message.payload?.error;
      updateErrorElement(errorText);
    }
  });

  socket.addEventListener('open', () => {
    const currentUser = getAuthDateStorage();
    if (currentUser && !window.__alreadyTriedToLogin) {
      window.__alreadyTriedToLogin = true;
      loginRequest(currentUser.id, currentUser.login, currentUser.password);
    } else if (!currentUser) {
      const fallbackRoute = window.__lastValidRoute || '#/login';
      console.log('open', fallbackRoute);
      if (window.location.hash === '#/error') {
        navigate(fallbackRoute);
      }
    }
  });

  socket.addEventListener('close', () => {
    window.__alreadyTriedToLogin = false;
    if (window.location.hash !== '#/error') {
      window.__lastValidRoute = window.location.hash;
    }
    console.log('close', window.__lastValidRoute);

    navigate('/error');
    attemptReconnect();
  });
};

socketListeners(socketWrapper.socket);
