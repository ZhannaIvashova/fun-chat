export interface MessageProps {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: number;
  status: {
    isDelivered: boolean;
    isReaded: boolean;
    isEdited: boolean;
  };
}

export interface AuthDateStorageProps {
  id: string;
  login: string;
  password: string;
}

export interface UserProps {
  login: string;
  isLogined: boolean;
}

export interface OwnMessageProps {
  isOwn: boolean;
  messageData: MessageProps;
}
