import { gugudan } from "./baseball.js";
import { insertGuGuDanElement } from "./test.js";

const gugudanBox = document.querySelector(".gugudan");

const init = () => {
  const value = gugudan(2, 3);
  insertGuGuDanElement(gugudanBox, value);
}

init();
