import { gugudan } from './baseball'

describe('baseball', () => {
  it('gugudan 함수는 두 인자의 곱을 반환합니다.', () => {
    expect(gugudan(2, 3)).toBe(6);
  })
});

