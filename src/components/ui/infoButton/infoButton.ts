import Button from '../button/button';
import { navigate } from '../../../router/router';

const InfoBtn = Button({ text: 'Info', attributes: { class: 'btn btn-info' } });

InfoBtn.addEventListener('click', () => {
  navigate('/about');
});

export default InfoBtn;
