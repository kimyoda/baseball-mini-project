import { baseball } from './baseball'

describe('baseball', () => {
  it('baseball 함수는 두 인자의 곱을 반환합니다.', () => {
    expect(baseball(2, 3)).toBe(6);
  })
});

