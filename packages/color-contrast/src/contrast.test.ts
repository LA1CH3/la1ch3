import { colorContrast } from './contrast';

describe('color contrast', () => {
  it('works?', () => {
    const black = [0, 0, 0];
    const white = [255, 255, 255];
    const contrastRatio = colorContrast(white, black);
    expect(contrastRatio).toBe(21);
  });
});
