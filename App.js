import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function tabScreenOptions({ route }) {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'LocalFiles') {
        iconName = 'folder';
      } else if (route.name === 'CloudFiles') {
        iconName = 'cloud';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  }
}

import OneDriveLoginPage from './screens/OneDriveLoginPage';
import OneDriveSignInPage from './screens/OneDriveSignInPage';
import OneDriveFilesPage from './screens/OneDriveFilesPage';
import LocalFilesPage from './screens/LocalFilesPage';

function AuthStackComponent({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <AuthStack.Navigator
      initialRouteName="AuthLoading"
      options={{ headerShown: false }}>
      <AuthStack.Screen name="AuthLoading" component={OneDriveLoginPage} options={{ title: 'Logging to OneDrive' }} />
      <AuthStack.Screen name="SignIn" component={OneDriveSignInPage} options={{ title: 'Logging to OneDrive' }} />
      <AuthStack.Screen name="AuthMain" component={OneDriveFilesPage} options={{ title: 'OneDrive files' }} />
    </AuthStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="LocalFiles" screenOptions={tabScreenOptions}
        tabBarOptions={{
          activeBackgroundColor: 'lightgreen',
          inactiveBackgroundColor: 'darkred',
          activeTintColor: 'tomato',
          inactiveTintColor: 'blue'
        }}
      >
        <Tab.Screen
          name="LocalFiles"
          component={LocalFilesPage}
          options={{ title: 'Local files' }}
        />
        <Tab.Screen
          name="CloudFiles"
          component={AuthStackComponent}
          options={{ title: 'Cloud files' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainZone: {
    fontSize: 26,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
