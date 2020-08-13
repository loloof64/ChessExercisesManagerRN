import React from 'react';
import {Text} from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


function LocalFilesComponent() {
  return <Text>Local files</Text>;
}

function LocalFilesPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LocalFilesComponent}
        options={{
          title: 'Welcome',
        }}
      />
    </Stack.Navigator>
  );
}

export default LocalFilesPage;
