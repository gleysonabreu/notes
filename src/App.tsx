import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import MainRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <MainRoutes />
      </>
    </ThemeProvider>
  );
}

export default App;
