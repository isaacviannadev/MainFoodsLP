import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: 'white',

      primary: 'hsl(332,42%,35%)',
      secondary: 'hsl(160,21%,46%)',

      grayMain: 'hsl(225,2%,45%)',
      graySecondary: 'hsl(0,0%,77%)',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
  },

  'html,body,#root,#__next': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontSize: '100%',
  },

  body: {
    background: '$background',
  },

  'h1,h2,h3,h4,h5,h6': {
    lineHeight: 1.2,
    fontFamily: 'Encode Sans Semi Condensed, sans-serif',
    color: '$primary',
  },

  section: {
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
  },
});
