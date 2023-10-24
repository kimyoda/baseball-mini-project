// 추가 스트라이크, 볼 값
import { DecideBallCount } from './decideBallCount.js';
import CheckCorrectness from './checkUserInputValidity.js';
export function CheckCorrectness(computerBall, userBall) {
  const decision = DecideBallCount(computerBall, userBall);
  return (decision[0] === 3 && decision[1] === 0) ? true : false;
}

// 스트라이크가 3개일때, 볼이 0개일 때 true 반환, 아니면 false를 반환
// computerBall, userBall을 비교