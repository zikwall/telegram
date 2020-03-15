import React, { useEffect, useState } from 'react';

import { enableScreens } from 'react-native-screens';
enableScreens();

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import { Root } from './src/navigators';
import { UIView } from './src/components';

const App = () => {
    StatusBar.setHidden(true);

    const [ isConfiguringApp, setIsConfiguringApp ] = useState(false);

    useEffect(() => {
        let interval = setTimeout(() => {
            setIsConfiguringApp(true);
        }, 2000);

        return () => {
            clearTimeout(interval);
        };
    }, []);

    if (!isConfiguringApp) {
        return (
            <UIView>
                <LottieView source={require('./src/animations/8mart')} autoPlay loop />
            </UIView>
        )
    }

    return (
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    );
};

export default App;
