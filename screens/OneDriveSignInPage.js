import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

import {NavigationContext} from '@react-navigation/native';


function OneDriveSignIn() {
    const navContext = useContext(NavigationContext);

    const signInAsync = async () => {
        navContext.reset({
            index: 0,
            routes: [ { name: 'AuthMain' } ]
        });
    }

    return (
        <View>
            <Button onPress={signInAsync}>Sign in</Button>
        </View>
    )
}

export default OneDriveSignIn;