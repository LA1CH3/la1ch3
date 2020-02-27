import { hslToRgb } from './hsl-to-rgb';

describe('hslToRgb', () => {
  it('converts an hsl string to rgb numbers', () => {
    const [r, g, b] = hslToRgb('hsl(240,100%,50%)');

    expect(r).toBe(0);
    expect(g).toBe(0);
    expect(b).toBe(255);
  });
});
