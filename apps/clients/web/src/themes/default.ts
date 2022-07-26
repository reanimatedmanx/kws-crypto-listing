import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const colors = {
  primaryFontColor: {
    lightMode: baseTheme.colors.black,
    darkMode: baseTheme.colors.white,
  },
};

const styles = {
  global: () => ({
    body: {
      bg: 'black',
      overflowY: 'scroll',
      scrollbarWidth: 'scroll',
      '-ms-overflow-style': 'none',
    },
    'body::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
  }),
};

const fonts = {
  text: `'Raleway', sans-serif`,
  heading: `'Raleway', sans-serif`,
  subHeading: `'Raleway', sans-serif`,
  body: `'Raleway', sans-serif`,
};

export const defaultTheme = extendTheme({
  colors,
  styles,
  fonts,
});
