import { sendMessage } from './sendMessage';
import { MessageTypes } from '../types/enum';

export const loginRequest = (id: string, login: string, password: string) => {
  const message = {
    id,
    type: MessageTypes.USER_LOGIN,
    payload: {
      user: {
        login,
        password,
      },
    },
  };
  sendMessage(message);
};

export const logoutRequest = (id: string, login: string, password: string) => {
  const message = {
    id,
    type: MessageTypes.USER_LOGOUT,
    payload: {
      user: {
        login,
        password,
      },
    },
  };
  sendMessage(message);
};

export const requestActiveUsers = (id: string) => {
  const message = {
    id,
    type: MessageTypes.USER_ACTIVE,
    payload: null,
  };
  sendMessage(message);
};

export const requestInActiveUsers = (id: string) => {
  const message = {
    id,
    type: MessageTypes.USER_INACTIVE,
    payload: null,
  };
  sendMessage(message);
};

export const sendMessageToUser = (id: string, to: string, text: string) => {
  const message = {
    id,
    type: MessageTypes.MSG_SEND,
    payload: {
      message: {
        to,
        text,
      },
    },
  };
  sendMessage(message);
};

export const requestMessageHistoryFromUser = (id: string, login: string) => {
  const message = {
    id,
    type: MessageTypes.MSG_FROM_USER,
    payload: {
      user: {
        login,
      },
    },
  };
  sendMessage(message);
};

export const deleteMessage = (id: string, messageId: string) => {
  const message = {
    id,
    type: MessageTypes.MSG_DELETE,
    payload: {
      message: {
        id: messageId,
      },
    },
  };
  sendMessage(message);
};
