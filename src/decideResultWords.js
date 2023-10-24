// 입력된 숫자가 볼인지, 스트라이크인지 낫싱인지 만들어주는 모듈
import { decideBallCount } from './decideBallCount.js';
export function DecideResultWords(computerBall, userBall) {
  const ballCount = decideBallCount(computerBall, userBall);  //[strike,ball]순서로 return
  
  switch (true) {
    case ballCount[0] === 0 && ballCount[1] === 0:
      result = '낫싱';
      break;
    case ballCount[0] === 0 && ballCount[1] > 0:
      result = `${ballCount[1]}볼`;
      break;
    case ballCount[0] > 0 && ballCount[1] === 0:
      result = `${ballCount[0]}스트라이크`;
      break;
    default:
      result = `${ballCount[1]}볼 ${ballCount[0]}스트라이크`;
      break;
  }
  return result; //있음
}