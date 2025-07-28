import { UserProps } from '../types/types';

const users = new Map<string, UserProps>();
let userSearch = '';
let userSelect: UserProps | null = null;
let isWarning = true;

const userSelectStateEvent = new EventTarget();

export const setUsersState = (newUsers: UserProps[]) => {
  newUsers.forEach((user) => users.set(user.login, user));
};
export const getUsersState = () => [...users.values()];
export const clearUsersState = () => users.clear();

export const setUserSearchState = (value: string) => {
  userSearch = value.trim().toLowerCase();
};
export const getUserSearchState = () => userSearch;

export const setUserSelect = (selectUser: UserProps) => {
  userSelect = selectUser;
  userSelectStateEvent.dispatchEvent(new Event('change'));
};
export const getUserSelect = () => userSelect;

export const onUserSelectStateChange = (callback: () => void) => {
  userSelectStateEvent.addEventListener('change', callback);
};

export const setIsWarning = (flag: boolean) => (isWarning = flag);
export const getIsWarning = () => isWarning;
