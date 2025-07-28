import ElementCreator from '../ui/elementCreactor/elementCreactor';

import './footer.css';

const FooterLinkGit = () => {
  const githubIcon = ElementCreator({
    tag: 'img',
    attributes: {
      src: 'assets/gitLogo.png',
      alt: 'GitHub Icon',
      class: 'github-icon',
    },
  });
  const githubLink = ElementCreator({
    tag: 'a',
    text: 'ZhannaIvashova',
    attributes: {
      href: 'https://github.com/ZhannaIvashova',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'about-link',
    },
  });

  return ElementCreator({
    tag: 'div',
    attributes: { class: 'footer-link-git' },
    children: [githubIcon, githubLink],
  });
};

export default FooterLinkGit;
