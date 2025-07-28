import { socketWrapper } from './socket';
import { socketListeners } from './socketEvents';

let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;

export const attemptReconnect = () => {
  reconnectTimeout = setTimeout(() => {
    const newSocket = new WebSocket('ws://localhost:4000');
    socketWrapper.socket = newSocket;
    socketListeners(newSocket);
  }, 4000);
};
