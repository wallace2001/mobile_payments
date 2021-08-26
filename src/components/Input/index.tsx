/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../../constants/theme';

interface PropsInput extends TextInputProps{
    title: string,
    nameIcon?: string;
    icon?: any;
    stylesCustom?: any;
}

export const Input = ({title, nameIcon, stylesCustom, icon: IconCard, ...rest}: PropsInput) => {

    return (
        <View style={stylesCustom ? {...stylesCustom} : styles.container}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.cardInput}>
                <TextInput
                    style={styles.inputCard}
                    {...rest}
                />
                {nameIcon ? (
                    <Icon
                        name={nameIcon}
                        size={stylesCustom ? 20 : 25}
                        color={COLORS.purple}
                        style={{
                            flex: stylesCustom ? 0.7 : 0.35,
                        }}
                    />
                ) : (
                    <Image source={IconCard} style={styles.imageCard} resizeMode="contain" />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxHeight: 50,
        marginTop: 30,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Ubuntu-Regular',
        marginBottom: 10,
        color: COLORS.purple,
    },
    cardInput: {
        borderWidth: 1,
        borderColor: COLORS.purple,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputCard: {
        flex: 4,
        width: '100%',
        height: '100%',
        color: COLORS.purple,
        fontFamily: 'Ubuntu-Medium',
        fontSize: 17,
    },
    imageCard: {
        width: 30,
        height: 30,
    },
});
