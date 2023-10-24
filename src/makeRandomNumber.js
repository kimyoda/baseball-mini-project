// 난수 설정 
function makeRandomNumber_one() {
  return MissionUtils.Random.pickNumberInRange(1, 9);
}

function checkAlreadyContain(numArray, nowNum) {
  if (numArray.includes(nowNum)) {
    return false;
  } else {
    return true;
  }
}

export function MakeRandomNumber() {
  let numbers = [];
  while (numbers.length < 3) {
    let tempRandomNum = makeRandomNumber_one();
    if (checkAlreadyContain(numbers, tempRandomNum)) {
      numbers.push(tempRandomNum);
    }
  }
  return numbers.join('');
} // ㅇㅋ