import { greet } from '../../src/index';

describe('greet', () => {
  it('says hello', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
