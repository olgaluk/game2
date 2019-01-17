import './home.css';
import header123 from './images/header123.png';
import elf from './images/elf-story.png';
import createNavigation from '../../components/navigation/navigation';
import screen1 from './images/screen1.jpg';
import screen2 from './images/screen2.jpg';
import screen3 from './images/screen3.jpg';
import screen4 from './images/screen4.jpg';
import screen5 from './images/screen5.jpg';

function createLandingPage() {
  document.body.innerHTML = '';
  const htmlImport = document.querySelector('link[data="home"]');
  const htmlDoc = htmlImport.import;
  const htmlLandingPage = htmlDoc.querySelector('.home');
  document.body.appendChild(htmlLandingPage.cloneNode(true));
  const logoNameGame = document.createElement('img');
  logoNameGame.src = header123;
  logoNameGame.className = 'name-game';
  document.querySelector('.header').insertBefore(logoNameGame, document.querySelector('.play'));
  const elfPattern = document.createElement('img');
  elfPattern.src = elf;
  document.querySelector('.story').appendChild(elfPattern);
  createNavigation();
  const screenshots = [screen1, screen2, screen3, screen4, screen5];
  for (let i = 0; i < 5; i += 1) {
    const screenshot = document.createElement('img');
    screenshot.src = screenshots[i];
    document.querySelector('.screens').appendChild(screenshot);
  }
}

export default createLandingPage;
