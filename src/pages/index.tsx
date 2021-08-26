/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
    const navigation: any = useNavigation();

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

                    <View style={styles.product}>
                        <Image
                            style={styles.imageProduct}
                            source={{uri: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133833/9/133833989_1GG.png'}}
                        />
                        <View style={styles.left}>
                            <Text style={styles.productName}>Call of Duty</Text>
                            <Text style={styles.productPrice}>R$ 299,00</Text>
                        </View>
                    </View>

                    <Button
                        text="Pagar"
                        onPress={() => {
                            navigation.navigate('Payment');
                        }}
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
    textHeader: {
        fontSize: 28,
        color: COLORS.white,
        fontFamily: 'Ubuntu-Bold',
    },
    product: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.purple,
        marginTop: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        borderRadius: 10,
    },
    imageProduct: {
        width: 80,
        height: 80,
    },
    left: {},
    productName: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 17,
        color: COLORS.purple,
    },
    productPrice: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 15,
        color: COLORS.purple,
        marginTop: 10,
    },
});
