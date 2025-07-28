import ElementCreator from '../ui/elementCreactor/elementCreactor';
import CurrentUser from './currentUser';
import Title from '../ui/title/title';
import HeaderConrol from './headerControl';

import './header.css';

const Header = () => {
  return ElementCreator({
    tag: 'header',
    attributes: { class: 'header-chat' },
    children: [CurrentUser(), Title({ text: 'Fun Chat' }), HeaderConrol()],
  });
};

export default Header;
