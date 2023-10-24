// 난수버튼, 스트라이크, 볼 판정해주는 모듈, 입력모듈에서 입력모듈이 안읽
// 히는 이유, 
// 정답을 맞출 떄 뜨는 화면
import { $ } from './dom.js';
import CheckUserInputValidity from './checkUserInputValidity.js';
import { DecideResultWords } from './decideResultWords.js';
import { PrintRestartButton } from './printRestartButton.js';
export function PrintResultWords(computerBall, userBall) {
  const correctness = CheckCorrectness(computerBall, userBall);
  if (correctness) {
    $('#submit').disabled = true;
    $('#result').innerHTML = '🎉정답을 맞추셨습니다.🎉';
    PrintRestartButton();
  }
  else {
    $('#result').innerHTML = DecideResultWords(computerBall, userBall);
  }
} //ㅇㅋ