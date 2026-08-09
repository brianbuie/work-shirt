import Color from "color";

// Base Palette
export const red = Color("#d86e77");
export const yellow = Color("#b7b767");
export const orange = Color("#dfa465");
export const green = Color("#6ec979");
export const cyan = Color("#52bab6");
export const blue = Color("#5a9ed7");
export const purple = Color("#9872c3");
export const pink = Color("#de79b2");
export const black = Color("black");

// Common
export const bg = Color("#262a31");
export const white = Color("#ABB2BF").mix(pink, 0.1);
export const comment = bg.lighten(1.5).saturate(0.8);
export const primary = pink;
export const secondary = blue;
export const highlight = primary.fade(0.95);
export const none = bg.fade(1);
export const ansi = {
  normal: {
    black,
    red,
    green,
    yellow,
    blue,
    magenta: pink,
    cyan,
    white,
  },
  bright: {
    black: bg.darken(0.2),
    red: red.lighten(0.3),
    green: green.lighten(0.3),
    yellow: yellow.lighten(0.3),
    blue: blue.lighten(0.3),
    magenta: pink.lighten(0.3),
    cyan: cyan.lighten(0.3),
    white: white.lighten(0.3),
  },
};
