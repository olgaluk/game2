import './modal-dialog.css';
import template from './modal-dialog.template';

const CLOSED_SLIDE = 'lightgray';
const OPENED_SLIDE = 'blue';
const notificationList = [
  'Вермикулюс #1',
  'Воющие чары #2',
  'Глациус #3',
  'Диссендиум  #4',
  'Круциатус #5',
  'Левикорпус #6',
];
let numberMessage = 0;

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

function showTextNotification(arg) {
  document.getElementById('src').innerText = notificationList[arg];
  document.getElementById(`slide${+arg}`).style.backgroundColor = OPENED_SLIDE;
}

function showNotifications() {
  document.getElementById('notifications').style.display = 'flex';
}

function changeSlideRight() {
  if (numberMessage !== (notificationList.length - 1)) {
    numberMessage += 1;
    showTextNotification(numberMessage);
    document.getElementById(`slide${numberMessage - 1}`).style.backgroundColor = CLOSED_SLIDE;
  } else {
    numberMessage = 0;
    showTextNotification(numberMessage);
    document.getElementById(`slide${notificationList.length - 1}`).style.backgroundColor = CLOSED_SLIDE;
  }
}

function changeSlideLeft() {
  if (numberMessage !== 0) {
    numberMessage -= 1;
    showTextNotification(numberMessage);
    document.getElementById(`slide${numberMessage + 1}`).style.backgroundColor = CLOSED_SLIDE;
  } else {
    numberMessage = notificationList.length - 1;
    showTextNotification(numberMessage);
    document.getElementById(`slide${0}`).style.backgroundColor = CLOSED_SLIDE;
  }
}

function connectKeyboard(event) {
  if (event.key === 'ArrowLeft') {
    changeSlideLeft();
  }
  if (event.key === 'ArrowRight') {
    changeSlideRight();
  }
}

function makeSlider() {
  for (let i = 0; i < notificationList.length; i += 1) {
    const newSlide = document.createElement('div');
    newSlide.className = 'modal-slide';
    newSlide.id = `slide${i}`;
    document.getElementById('slide').insertBefore(newSlide, document.getElementById('right'));
  }
}

function getModalDialog() {
  const getWindow = resolveAfter2Seconds(showNotifications);
  getWindow.then(showNotifications);
  const contentEl = document.querySelector('main');
  contentEl.insertAdjacentHTML('beforeend', template);
  makeSlider();
  showTextNotification(numberMessage);
  document.getElementsByClassName('modal-left')[0].addEventListener('click', changeSlideLeft);
  document.getElementsByClassName('modal-right')[0].addEventListener('click', changeSlideRight);
  window.addEventListener('keydown', connectKeyboard);
}

export default getModalDialog;
