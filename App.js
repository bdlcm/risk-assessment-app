import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import React from 'react';
import { Navigation } from './src/infrastructure/navigation';
import { Provider } from 'react-native-paper';
import { LocationContextProvider } from './src/context/results.context';
import { GraphContextProvider } from './src/context/graph.context';
import TipProvider from 'react-native-tip';

// import { useFonts as useAbel, Abel_400Regular } from '@expo-google-fonts/abel';

export default function App() {
  // const [abelLoaded] = useAbel({
  //   Abel_400Regular,
  // });

  // if (!abelLoaded) {
  //   return null;
  // }
  return (
    <>
      <Provider>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <GraphContextProvider>
              <Navigation />
            </GraphContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </Provider>

      <TipProvider />
    </>
  );
}
