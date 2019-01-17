import template from '../task.template';
import '../task.css';

const words = {
  кот: ['ВОЛК', 'ЛИСА', 'КОТ', 'МЕДВЕДЬ'],
  утро: ['ЛЕТО', 'УТРО', 'ЗИМА', 'ВЕСНА'],
  поезд: ['САМОЛЕТ', 'ПОЕЗД', 'ВЕРТОЛЕТ', 'ВОРОНА', 'ШМЕЛЬ'],
  килограмм: ['КИЛОМЕТР', 'МИЛЯ', 'МИЛЛИМЕТР', 'ДЮЙМ', 'КИЛОГРАММ'],
  слива: ['АРБУЗ', 'ЗЕМЛЯНИКА', 'ЧЕРНИКА', 'СЛИВА', 'МАЛИНА'],
};

function generateTask() {
  const keywords = Object.keys(words);
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  return [keyword, words[keyword]];
}

function createTaskSuperfluousWord() {
  const content = document.querySelector('main');
  content.insertAdjacentHTML('beforeend', template);
  const wordsArray = generateTask();
  document.querySelector('.simple-header>h2').textContent = 'Найди лишнее слово:';
  document.querySelector('.simple-task>h3').style.fontSize = '17px';
  document.querySelector('.simple-task>h3').textContent = `${wordsArray[1]}`;
  return wordsArray[0];
}

export default createTaskSuperfluousWord;
