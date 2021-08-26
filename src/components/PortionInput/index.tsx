/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Portion } from '../../utils/masks';
import { COLORS } from '../../../constants/theme';

interface PropsPortionInput {
    portion: number;
    handleChangeSettingsPayments: (option: any) => void;
}

export const PortionInput = ({ portion, handleChangeSettingsPayments }: PropsPortionInput) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Parcelas</Text>
            <View style={styles.cardInput}>
                <Picker
                    selectedValue={portion}
                    onValueChange={(itemValue) => {
                        const portionOption = {
                            portion: itemValue,
                            pricePerPortion: Number((299 / Number(itemValue)).toFixed(2)),
                            completeValue: `${itemValue}x de R$ ${Number((299 / Number(itemValue)).toFixed(2))}`,
                        };
                        handleChangeSettingsPayments({selectedPrice: portionOption});
                    }}
                    style={{
                        width: '100%',
                    }}
                >
                    {Portion(299).map((item, index: number) => {
                        return (
                            <Picker.Item key={index} label={item.price} value={item.index} />
                            );
                    })}
                </Picker>
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
});
