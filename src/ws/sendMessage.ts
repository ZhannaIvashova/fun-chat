import { socketWrapper } from './socket';

export const sendMessage = (message: object) => {
  const socket = socketWrapper.socket;
  const json = JSON.stringify(message);

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(json);
  } else {
    socket.addEventListener(
      'open',
      () => {
        socket.send(json);
      },
      { once: true }
    );
  }
};
