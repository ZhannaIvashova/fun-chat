import ElementCreator from '../ui/elementCreactor/elementCreactor';

import './footer.css';

const FooterLinkRs = () => {
  const rsIcon = ElementCreator({
    tag: 'img',
    attributes: {
      src: 'assets/rsLogo.png',
      alt: 'RS Icon',
      class: 'rs-icon',
    },
  });

  const rsText = ElementCreator({
    tag: 'span',
    text: 'RS School',
  });

  const rsLink = ElementCreator({
    tag: 'a',
    attributes: {
      href: 'https://rs.school/',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'rs-link',
    },
    children: [rsIcon, rsText],
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'footer-link-git' },
    children: [rsLink],
  });
};

export default FooterLinkRs;
