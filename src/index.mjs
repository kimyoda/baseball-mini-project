import  { Baseball }  from './baseball.js';

const init = () => {
  const BaseballGame = new Baseball();
  const result = BaseballGame.play([2, 3], [4, 5]);
  console.log(result);
};

init();
// 없음.