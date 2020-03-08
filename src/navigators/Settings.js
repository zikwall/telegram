import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Header,
    BackButton,
    Title
} from '../components';
import {
    Settings,
    // .etc
} from '../screens';

const Stack = createStackNavigator();

export default function SettingsNavigator({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    header: (props) => (
                        <Header
                            leftComponent={
                                <BackButton />
                            }
                            titleComponent={
                                <Title title={'Settings'} />
                            }
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
