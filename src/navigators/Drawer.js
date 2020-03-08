import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Fontisto';

import Main from './Main';
import Settings from './Settings';
import {
    DrawerHeader,
} from '../components';

const Drawer = createDrawerNavigator();

const DrawerIconWrap = ({ icon }) => (
    <View style={{ width: 25 }}>
        <Icon name={icon} size={20} />
    </View>
);

const DrawerItemExtend = ({ label, icon }) => (
    <DrawerItem
        label={() => <Text>{ label }</Text>}
        labelStyle={{ color: '#000' }}
        onPress={() => alert('OK!')}
        icon={({focused: boolean, color: string, size: number }) =>
            <DrawerIconWrap icon={icon} />
        }
    />
);

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
            <DrawerHeader
                backgroundImage={{ uri: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                image={{ uri: 'https://avatars2.githubusercontent.com/u/23422968?s=460&v=4'}}
                name={'Andrey Kapitonov'}
                phone={'+7 (953) 014-77-77'}
            />

            {
                /**
                 * Так же добавляются кастомные пункты меню
                 */
            }
            <DrawerItemExtend label={'New Group'} icon={'persons'} />
            <DrawerItemExtend label={'New Secret Chat'} icon={'user-secret'} />
            <DrawerItemExtend label={'New Channel'} icon={'mic'} />
            <DrawerItemExtend label={'Contacts'} icon={'person'} />
            <DrawerItemExtend label={'Calls'} icon={'phone'} />
            <DrawerItemExtend label={'Saved Messages'} icon={'bookmark-alt'} />

            {
                /**
                 *  Можно закоментировать, если не хочется видеть скрины в меню
                 */
            }
            <DrawerItemList {...props} />

            <DrawerItemExtend label={'Invite Friends'} icon={'plus-a'} />
            <DrawerItem
                label="Help!"
                onPress={() => alert('OK!')}
            />
        </DrawerContentScrollView>
    );
}

export default function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={Main}
                options={{
                    drawerLabel: ({ focused: boolean, color: string }) => <Text>Chats</Text>,
                    drawerIcon: ({ focused: boolean, color: string, size: number }) => <DrawerIconWrap icon={'paper-plane'} />
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
                    drawerLabel: ({ focused: boolean, color: string }) => <Text>Settings</Text>,
                    drawerIcon: ({ focused: boolean, color: string, size: number }) => <DrawerIconWrap icon={'player-settings'} />,
                }}
            />
        </Drawer.Navigator>
    )
}
