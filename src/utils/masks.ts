/* eslint-disable prettier/prettier */

interface PropsArrayPortion{
    index: number;
    price: string;
    value: number;
}

export const MaskCard = (value: string) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');

    return value;
};

export const MaskVal = (value: string) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{4})/, '$1/$2');

    return value;
};

export const Portion = (value: number) => {
    const arrayPortion: PropsArrayPortion[] = [];

    for (let i = 1; i < 13; i++) {
        const options = {
            index: i,
            price: `${i}x de R$ ${Number((value / i).toFixed(2))}`,
            value: Number(Math.ceil(value / i).toFixed(2)),
        };
        arrayPortion.push(options);
    }

    return arrayPortion;
};

export const VerifyCard = (value: number | string) => {

    console.log('Number: ', value);

    const cards: any = {
        visa      : /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard : /^5[1-5][0-9]{14}/,
        diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex      : /^3[47][0-9]{13}/,
        discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
        hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
        elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
        jcb        : /^(?:2131|1800|35\d{3})\d{11}/,
        aura      : /^(5078\d{2})(\d{2})(\d{11})$/,
    };

    for (const flag in cards) {
        if (cards[flag].test(value)) {
            return flag;
        }
    }

    return false;
};
