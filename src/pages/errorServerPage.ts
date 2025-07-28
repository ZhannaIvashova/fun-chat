import ErrorServer from '../components/errorServer/errorServer';

const ErrorServerPage = (root: HTMLElement) => {
  root.textContent = '';
  root.appendChild(ErrorServer());
};

export default ErrorServerPage;
