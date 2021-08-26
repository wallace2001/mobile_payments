/* eslint-disable prettier/prettier */
import React, { createContext, ReactNode, useState } from 'react';

interface PropsContext{
    settingsPayment: PropsSettingsPayments;
    handleChangeSettingsPayments: (option: any) => void;
}

interface PropsProvider{
    children: ReactNode;
}

interface PropsSelectedPortion {
    portion: number;
    pricePerPortion: number;
    completeValue: string;
}

interface PropsSettingsPayments {
    numCard: string;
    name: string;
    val: string;
    cvv: number;
    selectedPrice: PropsSelectedPortion,
}

export const AppContext = createContext({} as PropsContext);

export const AppProvider = ({ children }: PropsProvider) => {

    const [settingsPayment, setSettingsPayment] = useState<PropsSettingsPayments>({
        numCard: '',
        name: '',
        val: '',
        cvv: 0,
        selectedPrice: {
            portion: 1,
            pricePerPortion: 0,
            completeValue: '',
        },
    });

    const handleChangeSettingsPayments = (option: any) => {
        setSettingsPayment({
            ...settingsPayment,
            ...option,
        });
    };

    return (
        <AppContext.Provider value={{
            settingsPayment,
            handleChangeSettingsPayments,
        }}>
            {children}
        </AppContext.Provider>
    );
};
