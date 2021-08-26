/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';
import Amex from '../assets/images/amex.png';
import Diners from '../assets/images/diners.png';
import Discover from '../assets/images/discover.png';
import Elo from '../assets/images/elo.png';
import Hipercard from '../assets/images/hipercard.png';
import Mastercard from '../assets/images/mastercard.png';
import Visa from '../assets/images/visa.png';
import CreditCard from '../assets/images/credit.png';

export const COLORS = {
    purple: '#24085e',
    blue: '#3a53e0',
    green: '#259c21',
    white: '#fff',
    black: '#000',
};

export const SIZES = {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
};

export const IconCards = (name: string | false) => {
    console.log(name);
    switch (name) {
        case 'amex':
            return Amex;
        case 'diners':
            return Diners;
        case 'discover':
            return Discover;
        case 'elo':
            return Elo;
        case 'hipercard':
            return Hipercard;
        case 'mastercard':
            return Mastercard;
        case 'visa':
            return Visa;

        default:
            return CreditCard;
    }
};
