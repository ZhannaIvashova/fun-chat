import ElementCreator from '../ui/elementCreactor/elementCreactor';
import NumberMessages, { updateNumberMessagesElement } from './numberMessages';
import { getUserListElement } from './userList';
import { getUsersState, getUserSearchState, setUserSelect, getUserSelect } from '../../utils/userState';
import { getAuthDateStorage } from '../../utils/authStorage';
import { updateUserSelect } from './chatMessage/userSelectContainer';
import { getViewMessageElement } from './chatMessage/viewMessage';
import { requestMessageHistoryFromUser } from '../../ws/message';
import { generateId } from '../../utils/generateId';
import { getMessageNumberState, setNumberMessagesHtml, сlearMessageNumberState } from '../../utils/stateMessage';

import './chat.css';

const UserItem = () => {
  const listElement = getUserListElement();
  if (!listElement) return;

  listElement.textContent = '';

  const users = getUsersState();
  const currentUser = getAuthDateStorage();
  const userSearch = getUserSearchState();

  users
    .filter((user) => {
      const isNotSelf = user.login !== currentUser.login;
      const findUsers = user.login.toLowerCase().startsWith(userSearch);
      return isNotSelf && findUsers;
    })
    .forEach((user) => {
      const count = getMessageNumberState(user.login);
      const numberElement = NumberMessages(count);

      const userElement = ElementCreator({
        tag: 'li',
        attributes: { class: 'user-item' },
        children: [
          ElementCreator({
            tag: 'span',
            attributes: {
              class: user.isLogined ? 'marker user-online' : 'marker user-offline',
            },
          }),
          ElementCreator({
            tag: 'span',
            text: user.login,
          }),
          numberElement,
        ],
      });
      setNumberMessagesHtml(user.login, numberElement);

      userElement.addEventListener('click', () => {
        const selectedUser = getUserSelect();
        const isSameUser = selectedUser?.login === user.login;
        const viewMessage = getViewMessageElement();

        if (isSameUser) return;
        if (!isSameUser && viewMessage) {
          const children = Array.from(viewMessage.children);
          children.forEach((child) => {
            const className = child.getAttribute('class');
            if (className !== 'message-filler') {
              viewMessage.removeChild(child);
            }
          });
        }
        const id = generateId();

        setUserSelect({ login: user.login, isLogined: user.isLogined });
        updateUserSelect(user.login, user.isLogined);
        requestMessageHistoryFromUser(id, user.login);
        сlearMessageNumberState(user.login);
        updateNumberMessagesElement(user.login);
      });
      listElement.appendChild(userElement);
    });
};

export default UserItem;
