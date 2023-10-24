// 재시작하는 곳
import { $ } from './dom.js';
import BaseballGame from './index.mjs';

export default function Restart() {
  $('#result').innerHTML = '';
  $('#user-input').value = null;
  $('#submit').disabled = false;
  BaseballGame();
} // ㅇㅋ