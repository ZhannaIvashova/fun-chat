import { initRouter, addRoute } from '../router/router';
import ElementCreator from '../components/ui/elementCreactor/elementCreactor';
import LoginPage from '../pages/loginPage';
import ChatPage from '../pages/chatPage';
import AboutPage from '../pages/aboutPage';
import ErrorServerPage from '../pages/errorServerPage';

const App = () => {
  const rootElement = ElementCreator({
    tag: 'div',
    attributes: { id: 'root' },
  });

  document.body.appendChild(rootElement);

  addRoute('/login', () => LoginPage(rootElement));
  addRoute('/chat', () => ChatPage(rootElement));
  addRoute('/about', () => AboutPage(rootElement));
  addRoute('/error', () => ErrorServerPage(rootElement));

  initRouter();
};

export default App;
