import template from '../task.template';
import '../task.css';

import appleSound from './mp3/apple.mp3';
import lemonSound from './mp3/lemon.mp3';
import plumSound from './mp3/plum.mp3';
import strawberrySound from './mp3/strawberry.mp3';
import cherrySound from './mp3/cherry.mp3';

const words = {
  apple: appleSound,
  lemon: lemonSound,
  plum: plumSound,
  strawberry: strawberrySound,
  cherry: cherrySound,
};

function createTaskAudition() {
  const content = document.querySelector('main');
  content.insertAdjacentHTML('beforeend', template);
  document.querySelector('.simple-header>h2').textContent = 'Прослушай и введи слово (на английском):';
  const sound = document.createElement('audio');
  sound.setAttribute('controls', 'controls');
  const englishWords = Object.keys(words);
  const englishWord = englishWords[Math.floor(Math.random() * englishWords.length)];
  sound.src = words[englishWord];
  document.querySelector('.simple-task>h3').appendChild(sound);
  return englishWord;
}

export default createTaskAudition;
