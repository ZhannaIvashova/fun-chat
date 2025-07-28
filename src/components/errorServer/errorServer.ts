import ElementCreator from '../ui/elementCreactor/elementCreactor';

import './errorServer.css';

const ErrorServer = () => {
  return ElementCreator({
    tag: 'div',
    text: 'Server connection lost. Reconnecting...',
    attributes: { class: 'error-server' },
  });
};

export default ErrorServer;
