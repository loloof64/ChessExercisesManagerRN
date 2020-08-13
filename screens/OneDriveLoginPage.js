import React, {useContext, useEffect} from 'react';

import {ActivityIndicator, Text, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

function OneDriveLoginPage() {
  const navContext = useContext(NavigationContext);

  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navContext.reset({
      index: 0,
      routes: [{name: userToken ? 'AuthMain' : 'SignIn'}],
    });
  };

  useEffect(() => {
      bootstrapAsync();
  }, []);

  return (
    <View>
      <ActivityIndicator size="large" />
      <Text>Logging in ...</Text>
    </View>
  );
}

export default OneDriveLoginPage;
