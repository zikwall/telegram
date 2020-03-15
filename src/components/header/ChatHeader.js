import React from 'react';
import UIAvatar from '../ui/UIAvatar';
import { Fake } from '../../utils';
import { Text, View } from 'react-native';
import { human} from 'react-native-typography';

const ChatHeader = () => {
    return (
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
    )
};

export default ChatHeader;
