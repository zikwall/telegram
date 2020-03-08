import React from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function Menu() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={{ paddingHorizontal: 15 }}>
                <Icon name="nav-icon-a" size={15} color={'#000'} />
            </View>
        </TouchableOpacity>
    )
}
