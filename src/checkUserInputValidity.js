// 입력 1~9사이 숫자 입력값을 검증하는 모듈
function lengthValidity(userInput) { // 3자리 숫자 확인
  if (userInput.length !== 3) {
    return alert('3자리 숫자를 입력해주세요.');
  }
  return true;
}

// 숫자로만 구성되어 있는지
function typeValidity(userInput) { 
  if (isNaN(parseInt(userInput))) {
    return alert('숫자로만 입력해주세요.');
  }
  return true;
}
// 중복된 숫자가 있는지
function duplicationValidity(userInput) {
  const setUserInput = new Set(userInput);
  if (userInput.length !== setUserInput.size) {
    return alert('모두 다른 숫자로 입력해주세요.');
  }
  return true;
}
// 범위내의 숫자로 이루어져 있는지
function rangeValidity(userInput) {
  const range = [...Array(10).keys()].splice(1);
  for (let i = 0; i < userInput.length; i++){
    if (!range.includes(parseInt(userInput[i]))) {
      return alert('1~9사이의 숫자로 입력해주세요.');
    }
  }
  return true;
}

// 각 유효성 검사 함수를 호출 후 하나의 검사 중 false면 전체 false
export default function CheckUserInputValidity(userInput) {
  if (!lengthValidity(userInput)) {
    return false;
  }
  if (!typeValidity(userInput)) {
    return false;
  }
  if (!duplicationValidity(userInput)) {
    return false;
  }
  if (!rangeValidity(userInput)) {
    return false;
  }
  return true;
}