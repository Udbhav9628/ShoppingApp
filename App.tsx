import * as React from 'react';
import index from './src/screens';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import shoppingCart from './src/screens/shoppingCart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="addToCart" component={shoppingCart} />
      </Stack.Navigator>
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
