import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import React from 'react';
import { Navigator } from './src/infrastructure/navigation/app.navigator';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
