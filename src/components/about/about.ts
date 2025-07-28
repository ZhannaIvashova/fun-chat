import ElementCreator from '../ui/elementCreactor/elementCreactor';
import Button from '../ui/button/button';
import Title from '../ui/title/title';
import { getUserSelect } from '../../utils/userState';
import { generateId } from '../../utils/generateId';
import { requestMessageHistoryFromUser } from '../../ws/message';

import './about.css';

const About = () => {
  const text =
    'The application is a client for a WebSocket-based chat service. It allows users to send messages and view chat history. Please note that a separate local server is required for full functionality. This application is currently under development.';

  const aboutText = ElementCreator({ tag: 'span', text: text, attributes: { class: 'about-text' } });

  const githubLink = ElementCreator({
    tag: 'a',
    text: 'Автор ZhannaIvashova',
    attributes: {
      href: 'https://github.com/ZhannaIvashova',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'about-link',
    },
  });

  const btnBack = Button({ text: 'GO BACK', attributes: { class: 'btn btn-back' } });

  const handleBack = () => {
    window.history.back();
    const selectUser = getUserSelect();
    if (selectUser?.login) requestMessageHistoryFromUser(generateId(), selectUser.login);
  };
  btnBack.addEventListener('click', handleBack);
  document.addEventListener('keydown', (event) => {
    event.key === 'Enter' && handleBack();
  });
  document.removeEventListener('keydown', handleBack);

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'about' },
    children: [Title({ text: 'Fun Chat' }), aboutText, githubLink, btnBack],
  });
};

export default About;
