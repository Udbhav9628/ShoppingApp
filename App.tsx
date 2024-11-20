import * as React from 'react';
import index from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToCart from './src/screens/addToCart';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="addToCart" component={AddToCart} />
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
