import { convertRgb } from './convert-rgb';

describe('convert-rgb', () => {
  it('returns raw rgb values from an rgb string', () => {
    const values = convertRgb('rgb(0,100,200)');
    expect(values).toEqual([0, 100, 200]);
  });
});
