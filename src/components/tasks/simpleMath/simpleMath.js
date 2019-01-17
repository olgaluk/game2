import '../task.css';
import template from '../task.template';

function generateTaskSimpleMath() {
  const operandFirst = (Math.floor(Math.random() * 81 + 10)).toString();
  const operandSecond = (Math.floor(Math.random() * 11)).toString();
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * 3)];
  return operandFirst + operation + operandSecond;
}

function createTaskSimpleMath() {
  const content = document.querySelector('main');
  content.insertAdjacentHTML('beforeend', template);
  document.querySelector('.simple-header>h2').textContent = 'Введи ответ:';
  document.querySelector('.simple-task>h3').textContent = generateTaskSimpleMath();
}

export default createTaskSimpleMath;
