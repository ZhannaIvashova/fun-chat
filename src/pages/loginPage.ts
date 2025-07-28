import LoginContainer from '../components/login/loginContainer';
import { navigate } from '../router/router';
import { getAuthDateStorage } from '../utils/authStorage';

const LoginPage = (root: HTMLElement) => {
  const currentUser = getAuthDateStorage();
  if (currentUser) {
    navigate('/chat');
    return;
  }

  root.textContent = '';
  root.appendChild(LoginContainer());
};

export default LoginPage;
