import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import { Auth0ProviderWrapper } from './auth0Config'; // Import Auth0ProviderWrapper

const Stack = createStackNavigator();

export default function App() {
  return (
    <Auth0ProviderWrapper> {/* Wrap th NavigationContainer with Auth0ProviderWrapper */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0ProviderWrapper>
  );
}
