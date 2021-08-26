/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { COLORS } from '../../../constants/theme';

interface PropsTouchable extends TouchableOpacityProps{
    text: string;
}

export const Button = ({ text, ...rest }: PropsTouchable) => {
    return (
        <TouchableOpacity
            {...rest}
            style={styles.container}
        >
            <Text style={{
                fontFamily: 'Ubuntu-Regular',
                color: COLORS.white,
                fontSize: 18,
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.purple,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
