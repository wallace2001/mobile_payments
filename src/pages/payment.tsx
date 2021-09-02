/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import WebView from 'react-native-webview';
import { COLORS } from '../../constants/theme';

type RootStackParamList = {
    Home: undefined;
    Payment: undefined;

};

type Props = NativeStackScreenProps<RootStackParamList, 'Payment'>;

export class Payment extends Component<Props>{
    constructor(props: any){
        super(props);

        this.state = {
            description: '1x Call of Duty',
            urlPayments: `http://10.0.2.2:3000/payment/2/kol22@outlook.com/${'1x Call of Duty'}/299`,
        };
    }

    render(){

        const navigation = this.props.navigation;

        const stateChange = (state: any) => {

            const status = state.url.split('/')[4]?.split('&')[1]?.split('=')[1];

            switch (status) {
                case 'approved':
                    navigation.navigate('Home');
                    Alert.alert('Pagamento aprovado!', 'Recebemos seu pagamento de R$ 299,00');
                    break;
                case 'Error':
                    navigation.navigate('Home');
                    Alert.alert('Erro no pagamento!', 'Erro ao fazer a compra');
                    break;
                case 'in_process':
                    navigation.navigate('Home');
                    Alert.alert('Pagamento pendente!', 'Seu pagamento de R$ 299,00 está pendente de processamento, assim que for processado seguiremos com o pedido!');
                    break;
                case 'rejected':
                    navigation.navigate('Home');
                    Alert.alert('Pagamento não aprovado!', 'Verifique os dados e tente novamente');
                    break;
            }
        };
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={25} color={COLORS.white} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Ubuntu-Bold',
                        color: COLORS.white,
                    }}>Pagamento</Text>
                </View>
                <WebView
                    source={{uri: this.state.urlPayments}}
                    onNavigationStateChange={state => stateChange(state)}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        height: 60,
        backgroundColor: COLORS.purple,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
