import { convertHex } from './convert-hex';

describe('convert-hex', () => {
  it('converts a hex color string to raw rgb values', () => {
    const values = convertHex('#ffffff');
    expect(values).toEqual([255, 255, 255]);
  });
});
