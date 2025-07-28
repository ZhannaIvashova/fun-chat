let messageText = '';

const messageTextStateEvent = new EventTarget();
const emitMessageTextStateChange = () => messageTextStateEvent.dispatchEvent(new Event('change'));

export const setMessageText = (value: string) => {
  messageText = value;
  emitMessageTextStateChange();
};
export const onMessageTextStateChange = (callback: () => void) => {
  messageTextStateEvent.addEventListener('change', callback);
};

export const getMessageText = () => messageText;
