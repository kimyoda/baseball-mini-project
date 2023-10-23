import { $ } from './dom.js';
import CheckUserInputValidity from './checkUserInputValidity.js';
import { MakeRandomNumber } from './makeRandomNumber.js';
import { PrintResultWords } from './printResultWords.js';

function start() {  
  $('#result').innerHTML = '';
  $('#submit').type = 'button';
}
export default function BaseballGame() {
  start();
  const computerNumber = MakeRandomNumber();
  $('#submit').addEventListener('click', () => {
    const userInput = $('#user-input').value;
    if (CheckUserInputValidity(userInput)) {
      PrintResultWords(computerNumber, userInput);
    }
  });
}
BaseballGame();