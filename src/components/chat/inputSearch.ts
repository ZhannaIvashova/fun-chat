import Input from '../ui/input/input';
import UserItem from './userItem';
import { setUserSearchState } from '../../utils/userState';

const InputSearch = () => {
  return Input({
    attributes: { type: 'text', class: 'input input-search', placeholder: 'Search...' },
    onInput: (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        setUserSearchState(target.value);
        UserItem();
      }
    },
  });
};

export default InputSearch;
