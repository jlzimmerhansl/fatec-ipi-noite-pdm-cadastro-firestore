import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

import InitialScreen from '../pages/InitialScreen';
import NewContactScreen from '../pages/NewContact';
import ContactsListScreen from '../pages/ContactsList';

export default function ContactsNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="InitialScreen" component={InitialScreen} />
        <Screen name="NewContactScreen" component={NewContactScreen} />
        <Screen name="ContactsListScreen" component={ContactsListScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
