import React from 'react';
import { Button, View } from 'react-native';

import {
    UIView
} from '../components';

export default function Settings({ navigation }) {
    return (
        <UIView style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Outside')}
                title="Go to Outside"
            />
        </UIView>
    );
}
