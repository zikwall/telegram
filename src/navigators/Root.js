import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import { Outside } from '../screens';

const Stack = createStackNavigator();

function ModalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

export default function RootNavigator({ navigation }) {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Home" component={Drawer} />

            {/*  other screens || stack navigators */}

            <Stack.Screen name="Outside" component={Outside} />
            <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Navigator>
    )
}
