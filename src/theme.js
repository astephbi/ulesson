import { extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import '@fontsource/montserrat/700.css';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme(
  {
    colors: {
      primary: '#301345',
      secondary: '#EB051',
      lightColor: '#F2F2FB',
    },
    fonts: {
      heading: `'Montserrat',sans-serif `,
      body: `'Raleway', sans-serif`,
    },
  },
  config
);

export default theme;
