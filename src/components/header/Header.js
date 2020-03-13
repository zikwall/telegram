import React from 'react';
import { View } from 'react-native';

export default function Header({ leftComponent, titleComponent, rightComponent }) {
    return (
        <View style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
            }}>
                { leftComponent && leftComponent }
            </View>

            { titleComponent && titleComponent }

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                { rightComponent && rightComponent }
            </View>
        </View>
    )
}
