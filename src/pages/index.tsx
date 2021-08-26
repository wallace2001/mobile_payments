/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { COLORS, IconCards, SIZES } from '../../constants/theme';
import { MaskCard, MaskVal, VerifyCard } from '../utils/masks';
import { AppContext } from '../context/appContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { PortionInput } from '../components/PortionInput';

export const Payment = () => {
    const [numCard, setNumCard] = useState<string>('');
    const { settingsPayment, handleChangeSettingsPayments } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.header}>
                    <Text style={styles.textHeader}>299.00 R$</Text>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.white,
                        fontFamily: 'Ubuntu-Medium',
                    }}>Total</Text>
                </View>
                <ScrollView style={styles.content}>
                    <Input
                        title="Número do cartão"
                        value={settingsPayment.numCard}
                        placeholder="Digite o número do seu cartão"
                        keyboardType="numeric"
                        maxLength={19}
                        onChangeText={(text: string) => {
                            setNumCard(text);
                            handleChangeSettingsPayments({numCard: MaskCard(text)});
                        }}
                        icon={IconCards(VerifyCard(numCard))}
                    />
                    <Input
                        title="Nome completo"
                        value={settingsPayment.name}
                        placeholder="Digite seu nome"
                        keyboardType="default"
                        onChangeText={(text: string) => handleChangeSettingsPayments({name: text.toUpperCase()})}
                        nameIcon="user"
                    />
                    <View style={styles.boxFormTwoComponents}>
                        <Input
                            title="Validade"
                            value={settingsPayment.val}
                            maxLength={7}
                            placeholder="Validade"
                            keyboardType="numeric"
                            onChangeText={(text: string) => handleChangeSettingsPayments({val: MaskVal(text)})}
                            nameIcon="calendar-day"
                            stylesCustom={{
                                flex: 1,
                                marginRight: 10,
                            }}
                        />
                        <Input
                            title="CVV"
                            value={String(settingsPayment.cvv)}
                            keyboardType="numeric"
                            placeholder="CVV"
                            maxLength={3}
                            onChangeText={(text: string) => handleChangeSettingsPayments({cvv: text})}
                            nameIcon="key"
                            stylesCustom={{
                                flex: 1,
                                marginLeft: 10,
                            }}
                        />
                    </View>
                    <PortionInput
                        portion={settingsPayment.selectedPrice.portion}
                        handleChangeSettingsPayments={handleChangeSettingsPayments}
                    />
                    <Button
                        text="Pagar"
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        height: 250,
        padding: 20,
        paddingBottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.purple,
    },
    content: {
        height: '100%',
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        top: SIZES.height / 4,
        bottom: 0,
        left: 0,
        right: 0,
    },
    boxFormTwoComponents: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
    },
    textHeader: {
        fontSize: 28,
        color: COLORS.white,
        fontFamily: 'Ubuntu-Bold',
    },
});
