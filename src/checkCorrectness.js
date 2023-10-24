import { DecideBallCount } from './decideBallCount.js';
import CheckCorrectness from './checkUserInputValidity.js';
export function CheckCorrectness(computerBall, userBall) {
  const decision = DecideBallCount(computerBall, userBall);
  return (decision[0] === 3 && decision[1] === 0) ? true : false;
}