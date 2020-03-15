import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native';

const ChatMore = () => {
    return (
        <TouchableOpacity onPress={() => {}} style={{ paddingRight: 25, alignItems: 'center' }}>
            <Icon name={'more-v-a'} size={20} color={'#000'} />
        </TouchableOpacity>
    )
};

export default ChatMore;
