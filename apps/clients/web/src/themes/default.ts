import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const colors = {
  primaryFontColor: {
    lightMode: baseTheme.colors.black,
    darkMode: baseTheme.colors.white,
  },
};

export const defaultTheme = extendTheme({
  colors,
});
