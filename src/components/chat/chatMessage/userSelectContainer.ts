import ElementCreator from '../../ui/elementCreactor/elementCreactor';

import './chatMessage.css';

let userSelectName: HTMLElement | null = null;
let userSelectStatus: HTMLElement | null = null;
let userSelect: HTMLElement | null = null;

const UserSelectContainer = () => {
  userSelectName = ElementCreator({
    tag: 'span',
    text: '',
  });

  userSelectStatus = ElementCreator({
    tag: 'span',
    text: '',
    attributes: { class: '' },
  });

  userSelect = ElementCreator({
    tag: 'div',
    attributes: { class: 'select-user' },
    children: [userSelectName, userSelectStatus],
  });

  return userSelect;
};

export const updateUserSelect = (login: string, isLogined: boolean) => {
  if (!userSelectName || !userSelectStatus) return;
  userSelectName.textContent = login;
  userSelectStatus.textContent = isLogined ? 'online' : 'offline';
  userSelectStatus.setAttribute('class', isLogined ? 'user-online-text' : 'user-offline-text');
};

export default UserSelectContainer;
