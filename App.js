import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import React from 'react';
import { Navigation } from './src/infrastructure/navigation';
import { Provider } from 'react-native-paper';
import { LocationContextProvider } from './src/context/results.context';

export default function App() {
  return (
    <>
      <Provider>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <Navigation />
          </LocationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </Provider>
    </>
  );
}
