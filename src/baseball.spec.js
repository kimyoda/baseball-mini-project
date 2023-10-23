import { baseball2 } from './baseball.js';

describe('baseball2', () => {
  it('baseball 함수는 두 인자의 곱을 반환합니다.', () => {
    expect(baseball2(2, 3)).toBe(6);
  });
});
