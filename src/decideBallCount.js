// strike, ball을 count 하냐는 모듈
// 
export function decideBallCount(computerBall, userBall) {
  let strikeCount = 0;
  let ballCount = 0;
  for (let i = 0; i < userBall.length; i++) {
    if (computerBall[i] === userBall[i]) {
      strikeCount++;
    }
    else if (computerBall.includes(userBall[i])) {
      ballCount++;
    }
  }
  return [strikeCount, ballCount];
}