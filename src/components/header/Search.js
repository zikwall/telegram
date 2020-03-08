import React from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function Search() {
    return (
        <TouchableOpacity onPress={() => alert('OK!')}>
            <View style={{ paddingHorizontal: 15 }}>
                <Icon name="search" size={20} color={'#000'} />
            </View>
        </TouchableOpacity>
    )
}
