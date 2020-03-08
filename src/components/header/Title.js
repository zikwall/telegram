import React from 'react';
import { Text } from 'react-native';
import { human } from "react-native-typography";

const NavigationHeaderTitle = ({ title }) => {

    return (
        <Text style={[ human.callout, { color: '#000' } ]}>
            { title }
        </Text>
    )
};

export default NavigationHeaderTitle;
