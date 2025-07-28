import { AuthDateStorageProps } from '../types/types';

const STORAGE_KEY = 'fun-chat';

export const saveAuthDateStorage = (id: string, login: string, password: string) => {
  const data: AuthDateStorageProps = { id, login, password };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ authUser: data }));
};

export const getAuthDateStorage = () => {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  const objectUser = JSON.parse(raw);
  return objectUser.authUser;
};

export const clearAuthDateStorage = () => {
  sessionStorage.removeItem(STORAGE_KEY);
};
