import ElementCreator from '../elementCreactor/elementCreactor';

import './title.css';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return ElementCreator({
    tag: 'h1',
    text: text,
    attributes: { class: 'title' },
  });
};

export default Title;
