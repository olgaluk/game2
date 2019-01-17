import './anime.css';
import './anime2.css';
import template from './anime.template';
import sound from './mp3/Sound1.mp3';
import sound2 from './mp3/Sound2.mp3';

function createAnime(boolean, numberSpells) {
  const content = document.querySelector('main');
  content.insertAdjacentHTML('beforeend', template);
  if (numberSpells % 2 !== 0) {
    if (boolean) {
      document.querySelector('#anime_simple').classList = 'anime-left';
    } else {
      document.querySelector('#anime_simple').classList = 'anime-right';
    }
    const soundAnimation = document.createElement('audio');
    soundAnimation.src = sound;
    document.querySelector('#math_anime').appendChild(soundAnimation);
    soundAnimation.play();
  }
  if (numberSpells % 2 === 0) {
    if (boolean) {
      document.querySelector('#anime_simple').classList = 'anime2-left';
    } else {
      document.querySelector('#anime_simple').classList = 'anime2-right';
    }
    const soundAnimation = document.createElement('audio');
    soundAnimation.src = sound2;
    document.querySelector('#math_anime').appendChild(soundAnimation);
    soundAnimation.play();
  }
}

export default createAnime;
