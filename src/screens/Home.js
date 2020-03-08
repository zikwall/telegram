import React from 'react';
import { Button } from 'react-native';
import { UIView } from '../components';

export default function Home({ navigation }) {
    return (
        <UIView>
            <Button title={'Go to Exanple Chat'} onPress={() => navigation.navigate('Chat')} />
        </UIView>
    );
}
