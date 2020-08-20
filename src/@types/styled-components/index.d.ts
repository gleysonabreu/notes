import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: {
        backgroundBlue: string;
        backgroundGray: string;
        backgroundNotes: string;
      },
      colorTitle: string;
      colorBackgroundHover: string;
      colorNotes: {
        colorNote1: string;
        colorNote2: string;
        colorNote3: string;
      },
    },
  }
}
