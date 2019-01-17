import template from '../task.template';
import '../task.css';

const riddles = {
  1: 'У семерых братьев по одной сестре. Сколько всех сестер?',
  3: 'Полтора судака стоят полтора рубля. Сколько стоят три судака?',
  2: 'В комнате горело пять свечей. Две свечи потушили. Сколько осталось?',
};

function generateTask() {
  const keywords = Object.keys(riddles);
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  return [keyword, riddles[keyword]];
}

function createTaskLogic() {
  const content = document.querySelector('main');
  content.insertAdjacentHTML('beforeend', template);
  const wordsArray = generateTask();
  document.querySelector('.simple-header>h2').textContent = 'Реши задачу и ответ запиши цифрами:';
  document.querySelector('.simple-task>h3').style.fontSize = '14px';
  document.querySelector('.simple-task>h3').textContent = `${wordsArray[1]}`;
  return wordsArray[0];
}

export default createTaskLogic;
