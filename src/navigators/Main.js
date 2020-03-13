import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Header,
    BackButton,
    Menu,
    Title,
    Search,
    UIAvatar
} from '../components';
import {
    Home,
    Chat
} from '../screens';
import { Fake } from '../utils';
import { human } from "react-native-typography";

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
                                <View style={{ flexDirection: 'row' }}>
                                    <UIAvatar src={Fake.USERS[0].avatar} />
                                    <View style={{ paddingLeft: 10 }}>
                                        <Text style={human.footnote}>
                                            { Fake.USERS[0].name }
                                        </Text>
                                        <Text style={[ human.caption1, { paddingTop: 5, color: '#767676' } ]}>
                                            last seen recently
                                        </Text>
                                    </View>
                                </View>
                            }
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
