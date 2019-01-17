import head1 from './images/monster1/Head1.png';
import body1 from './images/monster1/Body1.png';
import rightHand1 from './images/monster1/RightHand1.png';
import leftHand1 from './images/monster1/LeftHand1.png';
import weapon1 from './images/monster1/Sword1.png';

import head2 from './images/monster2/Head2.png';
import body2 from './images/monster2/Body2.png';
import rightHand2 from './images/monster2/RightHand2.png';
import leftHand2 from './images/monster2/LeftHand2.png';
import weapon2 from './images/monster2/Sword2.png';

import head3 from './images/monster3/Head3.png';
import body3 from './images/monster3/Body3.png';
import rightHand3 from './images/monster3/RightHand3.png';
import leftHand3 from './images/monster3/LeftHand3.png';
import weapon3 from './images/monster3/Sword3.png';

const nameFirstPart = ['Ужасный', 'Злобный', 'Сопливый'];
const nameSecondPart = ['Огр', 'Тролль', 'Гоблин'];
const nameThirdPart = ['Том', 'Макс', 'Джек'];

const monsterHead = [head1, head2, head3];
const monsterBody = [body1, body2, body3];
const monsterRightHand = [rightHand1, rightHand2, rightHand3];
const monsterLeftHand = [leftHand1, leftHand2, leftHand3];
const monsterWeapon = [weapon1, weapon2, weapon3];

function getRandomName(arr1, arr2, arr3) {
  return Array.of(arr1, arr2, arr3).map(item => item[Math.floor(Math.random() * item.length)]).join(' ');
}

function getRandomMonster(head, body, rightHand, leftHand, weapon) {
  const monsterParts = Array
    .of(head, body, rightHand, leftHand, weapon)
    .map(item => item[Math.floor(Math.random() * item.length)]);
  const monsterObj = {
    headMonster: monsterParts[0],
    bodyMonster: monsterParts[1],
    rightHandMonster: monsterParts[2],
    leftHandMonster: monsterParts[3],
    weaponMonster: monsterParts[4],
  };
  return monsterObj;
}

function collectMonster() {
  const monsterNames = getRandomName(nameFirstPart, nameSecondPart, nameThirdPart);
  const monsterAppearance = getRandomMonster(
    monsterHead, monsterBody, monsterRightHand, monsterLeftHand, monsterWeapon,
  );
  monsterAppearance.nameMonster = monsterNames;
  return monsterAppearance;
}

export default collectMonster;
