import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Header,
    BackButton,
    Menu,
    Title,
    Search
} from '../components';
import {
    Home,
    Chat
} from '../screens';

const Stack = createStackNavigator();

/**
 - Root
 -- Drawer
 --- Main
 --- Home
 --- Another
 --- Messages
 --- Dialog
 --- Another
 - Outside
 */

export default function MainNavigator({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: (props) => (
                        <Header
                            leftComponent={
                                <Menu />
                            }
                            titleComponent={
                                <Title title={'Telegram'} />
                            }
                            rightComponent={
                                <Search />
                            }
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{
                    header: (props) => (
                        <Header
                            leftComponent={
                                <BackButton />
                            }
                            titleComponent={
                                <Title title={'Chat (example)'} />
                            }
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
