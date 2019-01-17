import 'bootstrap/dist/css/bootstrap.min.css';
import 'regenerator-runtime/runtime';
import './index.css';

import createLandingPage from './screens/home/home';
import createRegistrationPage from './screens/login/login';
import createBattlePage from './screens/battle/battle';
import createTaskSimpleMath from './components/tasks/simpleMath/simpleMath';
import createAnime from './components/anime/anime';
import getModalDialog from './components/modal-dialog/modal-dialog';
import createScore from './screens/score/score';
import createTaskEnglish from './components/tasks/english/english';
import createTaskAudition from './components/tasks/audition/audition';
import createTaskSuperfluousWord from './components/tasks/superfluousWord/superfluousWord';
import createTaskLogic from './components/tasks/logical/logical';

const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

let countPlayerHealthPoints = 4;
let countMonsterHealthPoints = 4;
let countKillMonsters = 0;
let namePlayerValue = '';
const leaderTable = [];
let numberSpell = 0;
let responseRight = 0;
let callTask = 0;

function evil(fn) {
  return new Function(`return ${fn}`)();
}

function getRandomTask() {
  const taskArray = [
    createTaskSimpleMath,
    createTaskEnglish,
    createTaskAudition,
    createTaskSuperfluousWord,
    createTaskLogic,
  ];
  return taskArray[Math.floor(Math.random() * taskArray.length)];
}

function compareAnswers(responseValue, nameFunction, response) {
  let responseCompare = true;
  if (nameFunction === createTaskSimpleMath) {
    responseCompare = +responseValue === evil(document.querySelector('.simple-task>h3').textContent);
  }
  if (nameFunction === createTaskEnglish) {
    responseCompare = response.some(currentValue => currentValue.toLowerCase() === responseValue.toLowerCase());
  }
  if (nameFunction === createTaskAudition) {
    responseCompare = `${responseValue}`.toLowerCase() === response;
  }
  if (nameFunction === createTaskSuperfluousWord) {
    responseCompare = `${responseValue}`.toLowerCase() === response;
  }
  if (nameFunction === createTaskLogic) {
    responseCompare = `${responseValue}` === response;
  }
  return responseCompare;
}

async function moveToNextTask() {
  const responseValue = document.getElementById('player_response').value;
  if (responseValue !== '') {
    const responseCheck = compareAnswers(responseValue, callTask, responseRight);
    if (responseCheck) {
      document.getElementById('task').innerHTML = '<p class="response-total">Верно!!!</p>';
    } else {
      document.getElementById('task').innerHTML = '<p class="response-total">Неверно!!!</p>';
    }
    const playersLife = getHealthPoints(responseCheck);
    await pause(0);
    createAnime(responseCheck, numberSpell);
    await pause(2000);
    document.getElementById('task').style.display = 'none';
    if (playersLife) {
      showModalDialog();
    } else if (!countPlayerHealthPoints) {
      createScore();
      createScoreTable();
      document.getElementById('score_button').addEventListener('click', loadTheGame);
      countKillMonsters = 0;
    } else {
      countKillMonsters += 1;
      loadnextBattle(namePlayerValue);
    }
  }
}

function getTask() {
  numberSpell = +(document.getElementById('src').innerText).match(/\d/)[0];
  document.querySelector('main').removeChild(document.getElementById('notifications'));
  callTask = getRandomTask();
  responseRight = callTask();
  document.getElementById('response').addEventListener('click', moveToNextTask);
}

function createScoreTable() {
  const leaderResult = {
    playerName: `${namePlayerValue}`,
    result: countKillMonsters,
  };
  leaderTable.push(leaderResult);
  const leaderTableJSON = JSON.stringify(leaderTable);
  localStorage.setItem('leaderTable', leaderTableJSON);
  const totalScore = JSON.parse(localStorage.getItem('leaderTable'));
  if (totalScore.length !== 0) {
    totalScore.sort((playerA, playerB) => playerA.result - playerB.result);
    if (totalScore.length > 5) { totalScore.length = 5; }
    let tableScoreBody = '<tbody>';
    for (let i = 0; i < totalScore.length; i += 1) {
      tableScoreBody += '<tr>';
      tableScoreBody += `<td>${totalScore[i].playerName}</td>`;
      tableScoreBody += `<td>${totalScore[i].result}</td>`;
      tableScoreBody += '</tr>';
    }
    tableScoreBody += '</tbody>';
    document.getElementById('tableData').innerHTML = tableScoreBody;
  }
}

function getHealthPoints(boolean) {
  if (boolean) {
    const healthPointsPart = document.querySelectorAll('.health-points')[0];
    healthPointsPart.getElementsByTagName('div')[countMonsterHealthPoints - 1].classList.add('lose-health');
    countMonsterHealthPoints -= 1;
  } else {
    const healthPointsPart = document.querySelectorAll('.health-points')[1];
    healthPointsPart.getElementsByTagName('div')[countPlayerHealthPoints - 1].classList.add('lose-health');
    countPlayerHealthPoints -= 1;
  }
  return (countMonsterHealthPoints && countPlayerHealthPoints);
}

function showModalDialog() {
  numberSpell = 0;
  while (document.querySelector('main').children.length > 1) {
    document.querySelector('main').removeChild(document.querySelector('main').lastChild);
  }
  getModalDialog();
  document.getElementById('close').addEventListener('click', loadTheGame);
  document.getElementById('modal_button').addEventListener('click', getTask);
}

function loadBattle(nameValue) {
  namePlayerValue = nameValue;
  countPlayerHealthPoints = 4;
  countMonsterHealthPoints = 4;
  createBattlePage(namePlayerValue);
  showModalDialog();
}

function loadnextBattle(nameValue) {
  let pointcount = 4;
  countMonsterHealthPoints = 4;
  namePlayerValue = nameValue;
  createBattlePage(namePlayerValue);
  const healthPointsPart = document.querySelectorAll('.health-points')[1];
  while (countPlayerHealthPoints !== pointcount) {
    healthPointsPart.getElementsByTagName('div')[pointcount - 1].classList.add('lose-health');
    pointcount -= 1;
  }
  showModalDialog();
}

function loadTheGame() {
  createLandingPage();
  document.querySelector('input.play').addEventListener('click', () => {
    createRegistrationPage();
    document.querySelectorAll('input.form-button')[1].addEventListener('click', loadTheGame);
    document.querySelectorAll('input.form-button')[0].addEventListener('click', () => {
      const nameValue = document.getElementById('name_input').value;
      if (nameValue !== '') { loadBattle(nameValue); }
    });
  });
}

function getKeyboard(event) {
  let eventNow = event;
  if (document.querySelector('.home') && (eventNow.key === 'Enter')) {
    createRegistrationPage();
    document.querySelectorAll('input.form-button')[1].addEventListener('click', loadTheGame);
    document.querySelectorAll('input.form-button')[0].addEventListener('click', () => {
      const nameValue = document.getElementById('name_input').value;
      if (nameValue !== '') { loadBattle(nameValue); }
    });
    eventNow = 0;
  }
  if (document.querySelector('.container-login') && (eventNow.key === 'Enter')) {
    const nameValue = document.getElementById('name_input').value;
    if (nameValue !== '') { loadBattle(nameValue); }
    eventNow = 0;
  }
  if (document.querySelector('.container-login') && (eventNow.key === 'Escape')) {
    loadTheGame();
    eventNow = 0;
  }
  if (document.querySelector('.notifications') && (eventNow.key === 'Escape')) {
    loadTheGame();
    eventNow = 0;
  }
  if (document.querySelector('.container-score') && (eventNow.key === 'Enter')) {
    loadTheGame();
    eventNow = 0;
  }
  if (document.querySelector('.notifications') && (eventNow.key === 'Enter')) {
    getTask();
    eventNow = 0;
  }
  if (document.querySelector('.task') && (eventNow.key === 'Enter')) {
    const nameValue = document.getElementById('player_response').value;
    if (nameValue !== '') { moveToNextTask(); }
    eventNow = 0;
  }
}

window.addEventListener('keydown', getKeyboard);
loadTheGame();
