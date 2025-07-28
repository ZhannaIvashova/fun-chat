import ElementCreator from '../ui/elementCreactor/elementCreactor';
import Button from '../ui/button/button';
import InfoBtn from '../ui/infoButton/infoButton';
import { getAuthDateStorage } from '../../utils/authStorage';
import { logoutRequest } from '../../ws/message';

import './header.css';

const HeaderConrol = () => {
  const logoutBtn = Button({ text: 'Logout', attributes: { class: 'btn btn-logout' } });

  logoutBtn.addEventListener('click', () => {
    const currentUser = getAuthDateStorage();
    logoutRequest(currentUser.id, currentUser.login, currentUser.password);
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'header-control' },
    children: [InfoBtn, logoutBtn],
  });
};

export default HeaderConrol;
