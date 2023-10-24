import { $ } from './dom.js';
import  CheckUserInputValidity  from './checkUserInputValidity.js';
import { MakeRandomNumber } from './makeRandomNumber.js';
import { PrintResultWords } from './printResultWords.js';

function start() {  
  $('#result').innerHTML = '';
  $('#submit').type = 'button';
}
export default function BaseballGame() {
  start();
  const computerNumber = MakeRandomNumber();

  // 폼 제출 이벤트에 리스너 추가

  $('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = $('#user-input').value;
    if (CheckUserInputValidity(userInput)) {
      PrintResultWords(computerNumber, userInput);
    }
  });
}
BaseballGame(); // 있음