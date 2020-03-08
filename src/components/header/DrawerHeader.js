import React, { useState, useRef } from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import UIAvatar from '../ui/UIAvatar';
import UICollapsible from '../ui/UICollapsible';
import { human } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Fontisto';

const AddAccount = () => {
    return (
        <TouchableOpacity onPress={() => alert('OK!')}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 10
            }}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                    <Icon name={'plus-a'} size={15} color={'#ccc'} />
                </View>
                <View style={{ flex: 1, paddingLeft: 16, paddingVertical: 5 }}>
                    <Text style={[ human.footnote, { color: '#000' } ]}>
                        Add Account
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const AccountItem = ({ image, name, messages }) => {
    return (
        <TouchableOpacity onPress={() => alert('OK!!')}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 10
            }}>
                <UIAvatar src={image} size={40} />
                <View style={{ paddingLeft: 10, flex: 1 }}>
                    <Text style={human.callout}>
                        {name}
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#f0f1f4',
                    borderRadius: 15,
                    paddingVertical: 5,
                    paddingHorizontal: 10
                }}>
                    <Text>
                        {messages}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default function DrawerHeader({ backgroundImage, image, name, phone }) {
    const [ isOpenedAccounts, setIsOpenedAccounts ] = useState(false);

    const onOpenAccounts = () => {
        setIsOpenedAccounts(!isOpenedAccounts);
    };

    return (
        <View>
            <ImageBackground
                source={backgroundImage}
                style={{ width: '100%', height: 150}}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba( 0, 0, 0, 0.3);',
                    padding: 10,
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <UIAvatar size={60} src={image} />

                        <TouchableOpacity style={{ padding: 15 }}>
                            <Icon name={'lightbulb'} color={'#fff'} size={20} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[ human.callout, { color: '#fff' } ]}>
                                {name}
                            </Text>
                            <Text style={[ human.footnote, { color: '#ccc' } ]}>
                                {phone}
                            </Text>
                        </View>
                        <TouchableOpacity style={{ padding: 15 }} onPress={onOpenAccounts}>
                            <Icon name={'angle-down'} color={'#fff'} size={15} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <UICollapsible collapsed={isOpenedAccounts}>
                <View style={{ paddingHorizontal: 10 }}>
                    <AccountItem name={'Andrey Kapitonov'} messages={90201} image={{ uri: 'https://avatars2.githubusercontent.com/u/23422968?s=460&v=4' }}/>
                    <AccountItem name={'Another Account'} messages={305} />
                    <AddAccount />
                </View>
            </UICollapsible>

            <View style={{ paddingBottom: 10 }} />
        </View>
    )
}
