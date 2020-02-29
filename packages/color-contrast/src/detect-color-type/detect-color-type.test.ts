import { detectColorType } from './detect-color-type';

describe('detect-color', () => {
  it('detects rgb values', () => {
    const values = ['rgb(0,0,0)', 'rgb(0, 100, 255)'];

    values.forEach((value) => {
      const colorType = detectColorType(value);
      expect(colorType).toBe('rgb');
    });
  });
  it('detects hsl', () => {
    const value = 'hsl(0,0%,0%)';
    const colorType = detectColorType(value);
    expect(colorType).toBe('hsl');
  });
  it('detects hex', () => {
    const value = '#ffffff';
    const colorType = detectColorType(value);
    expect(colorType).toBe('hex');
  });
  it('detects keyword', () => {
    const value = 'blue';
    const colorType = detectColorType(value);
    expect(colorType).toBe('keyword');
  });
});
