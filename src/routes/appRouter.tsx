/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages';
import { Payment } from '../pages/payment';

const { Screen, Navigator } = createNativeStackNavigator();

export const AppRouter = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Payment"
                component={Payment}
            />
        </Navigator>
    );
};
