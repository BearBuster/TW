import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavContainer from './src/navigations'
import GlobalProvide from './src/context/Provide';
import colors from './src/assets/thems/colors';

const App = () => {
  return (
    <GlobalProvide>
      <AppNavContainer />
    </GlobalProvide>
  )
}

export default App;