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
      primaryLight: 'hsl(332,42%,42%)',
      primaryDark: 'hsl(332,42%,28%)',
      secondary: 'hsl(160,21%,46%)',
      secondaryLight: 'hsl(160,21%,54%)',
      secondaryDark: 'hsl(160,21%,38%)',

      grayMain: 'hsl(225,2%,45%)',
      graySecondary: 'hsl(0,0%,77%)',

      yellow: 'hsl(36,100%,50%)',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',
    },
  },
  media: {
    bp1: '(max-width: 600px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    openDrawer: (value: string) =>
      value === 'closed'
        ? { transform: 'translateX(0)' }
        : { transform: 'translateX(100%)' },
    bg: (value: string) => ({ background: value }),
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
    overflowYw: 'scroll',
    scrollBehavior: 'smooth',
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
    width: '100%',
  },

  a: {
    textDecoration: 'none',
  },
});

globalStyles();
