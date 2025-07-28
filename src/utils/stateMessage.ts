import { OwnMessageProps, MessageProps } from '../types/types';

const messageToUser = new Map<string, MessageProps[]>();
const messageNumber = new Map<string, number>();
const numberMessagesHtml = new Map<string, HTMLElement>();

export const setMessageToUserState = (newMessage: OwnMessageProps) => {
  const contact = newMessage.isOwn ? newMessage.messageData.to : newMessage.messageData.from;

  if (!messageToUser.has(contact)) {
    messageToUser.set(contact, []);
  }
  messageToUser.get(contact)?.push(newMessage.messageData);
};

export const setMessageNumberState = (messageFrom: string) => {
  const current = messageNumber.get(messageFrom) || 0;
  messageNumber.set(messageFrom, current + 1);
  console.log(messageNumber);
};
export const getMessageNumberState = (login: string) => messageNumber.get(login) || 0;
export const сlearMessageNumberState = (login: string) => messageNumber.set(login, 0);

export const setNumberMessagesHtml = (login: string, numberElement: HTMLElement) => {
  numberMessagesHtml.set(login, numberElement);
};
export const getNumberMessagesHtml = (login: string) => numberMessagesHtml.get(login);
