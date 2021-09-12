/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import StackNavigation from './src/navigation/StackNavigation';
import { Reducers } from './src/reducer';


const App = () => {

  return (
    <SafeAreaProvider>
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};


export default App;
