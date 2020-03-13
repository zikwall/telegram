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
import Icon from "react-native-vector-icons/Fontisto";
import { TouchableOpacity, View } from "react-native";

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
                            rightComponent={
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                                    <TouchableOpacity style={{ paddingHorizontal: 15 }}>
                                        <Icon name={'search'} size={15} color={'#000'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingHorizontal: 15 }}>
                                        <Icon name={'more-v-a'} size={15} color={'#000'} />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
