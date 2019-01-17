import template from '../task.template';
import '../task.css';
import words from './words.json';

function generateTaskEnglish() {
  const englishWords = Object.keys(words);
  const englishWord = englishWords[Math.floor(Math.random() * englishWords.length)];
  return [englishWord, words[englishWord]];
}

function createTaskEnglish() {
  const content = document.querySelector('main');
  content.insertAdjacentHTML('beforeend', template);
  const wordsArray = generateTaskEnglish();
  document.querySelector('.simple-header>h2').textContent = 'Переведи слово на русский язык:';
  document.querySelector('.simple-task>h3').textContent = `${wordsArray[0]}`;
  return wordsArray[1];
}

export default createTaskEnglish;
