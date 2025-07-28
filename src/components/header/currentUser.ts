import ElementCreator from '../ui/elementCreactor/elementCreactor';
import { getAuthDateStorage } from '../../utils/authStorage';

import './header.css';

const CurrentUser = () => {
  const currentUser = getAuthDateStorage();
  const userTitle = ElementCreator({
    tag: 'span',
    text: `User: ${currentUser.login}`,
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'current-user' },
    children: [userTitle],
  });
};

export default CurrentUser;
