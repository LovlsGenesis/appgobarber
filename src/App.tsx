import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';
import Routes from './routes';

const Api: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312E38" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312E38' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default Api;
