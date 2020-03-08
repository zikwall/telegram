import React from 'react';
import {
    View
} from 'react-native';

export default function UIView({ children, style }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', ...style }}>
            { children }
        </View>
    )
}
