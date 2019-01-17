import './score.css';
import createTemplateScore from './score.template';

function createScore() {
  document.querySelector('main').innerHTML = '';
  const content = document.querySelector('main');
  content.insertAdjacentHTML('beforeend', createTemplateScore);
}

export default createScore;
