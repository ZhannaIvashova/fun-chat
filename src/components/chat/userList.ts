import ElementCreator from '../ui/elementCreactor/elementCreactor';

import './chat.css';

let userListElement: HTMLElement | null = null;

const UserList = () => {
  userListElement = ElementCreator({
    tag: 'ul',
    attributes: { class: 'user-list' },
  });

  return userListElement;
};

export const getUserListElement = () => userListElement;
export const clearUserListElement = () => {
  if (userListElement) {
    userListElement.textContent = '';
  }
};

export default UserList;
