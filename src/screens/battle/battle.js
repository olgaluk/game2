import './battle.css';
import collectMonster from '../../components/monster/monster';

function createBattlePage(nameValue) {
  const playerName = nameValue;
  document.body.innerHTML = '';
  const htmlImport = document.querySelector('link[data="battle"]');
  const htmlDoc = htmlImport.import;
  const htmlBattlePage = htmlDoc.querySelector('main');
  document.body.appendChild(htmlBattlePage.cloneNode(true));
  document.getElementById('player_name').innerText = playerName;
  const monster = collectMonster();
  document.getElementById('monster_name').innerText = monster.nameMonster;
  const monsterHead = document.createElement('img');
  monsterHead.src = monster.headMonster;
  monsterHead.className = 'monster-head';
  document.querySelector('.monster-container').appendChild(monsterHead);
  const monsterBody = document.createElement('img');
  monsterBody.src = monster.bodyMonster;
  monsterBody.className = 'monster-body';
  document.querySelector('.monster-container').appendChild(monsterBody);
  const monsterRightHand = document.createElement('img');
  monsterRightHand.src = monster.rightHandMonster;
  monsterRightHand.className = 'monster-hand_right';
  document.querySelector('.monster-container').appendChild(monsterRightHand);
  const monsterLeftHand = document.createElement('img');
  monsterLeftHand.src = monster.leftHandMonster;
  monsterLeftHand.className = 'monster-hand_left';
  document.querySelector('.monster-container').appendChild(monsterLeftHand);
  const monsterWeapon = document.createElement('img');
  monsterWeapon.src = monster.weaponMonster;
  monsterWeapon.className = 'monster-weapon';
  document.querySelector('.monster-container').appendChild(monsterWeapon);
}

export default createBattlePage;
