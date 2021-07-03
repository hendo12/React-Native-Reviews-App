import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fonstLoadeed, setFontsLoaded] = useState(false);

  if (fonstLoadeed) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}