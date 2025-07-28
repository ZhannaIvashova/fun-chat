import ElementCreator from '../ui/elementCreactor/elementCreactor';
import FooterLinkGit from './footerLinkGit';
import FooterLinkRs from './footerLinkRs';

import './footer.css';

const Footer = () => {
  const year = ElementCreator({ tag: 'span', text: '2025' });

  return ElementCreator({
    tag: 'footer',
    attributes: { class: 'footer' },
    children: [FooterLinkRs(), FooterLinkGit(), year],
  });
};

export default Footer;
