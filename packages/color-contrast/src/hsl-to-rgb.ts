// stolen from https://css-tricks.com/converting-color-spaces-in-javascript/

export const hslToRgb = (hsl: string): number[] | string => {
  const ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
  if (ex.test(hsl)) {
    const sep = hsl.indexOf(',') > -1 ? ',' : ' ';
    const hslVals = hsl
      .substr(4)
      .split(')')[0]
      .split(sep);

    let h: number | string = hslVals[0];

    const s = Number(hslVals[1].substr(0, hslVals[1].length - 1)) / 100,
      l = Number(hslVals[2].substr(0, hslVals[2].length - 1)) / 100;

    // strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1) h = h.substr(0, h.length - 3);
    else if (h.indexOf('rad') > -1)
      h = Math.round((Number(h.substr(0, h.length - 3)) / (2 * Math.PI)) * 360);
    else if (h.indexOf('turn') > -1)
      h = Math.round(Number(h.substr(0, h.length - 4)) * 360);
    // keep hue fraction of 360 if ending up over
    if (h >= 360) h = Number(h) % 360;

    const c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((Number(h) / 60) % 2) - 1)),
      m = l - c / 2;

    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
  } else {
    return 'Invalid input color';
  }
};
