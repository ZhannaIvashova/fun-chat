import About from '../components/about/about';
import { navigate } from '../router/router';

const AboutPage = (root: HTMLElement) => {
  root.textContent = '';
  root.appendChild(About());
};

export default AboutPage;
