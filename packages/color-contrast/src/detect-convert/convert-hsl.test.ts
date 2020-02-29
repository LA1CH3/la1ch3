import { convertHsl } from './convert-hsl';

describe('convert-hsl', () => {
  it('converts an hsl string to raw rgb values', () => {
    const values = convertHsl('hsl(0,50%,75%)');
    expect(values).toEqual([223, 159, 159]);
  });
});
