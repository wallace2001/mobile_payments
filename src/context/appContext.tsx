/* eslint-disable prettier/prettier */
import React, { createContext, ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';

interface PropsContext{
    control: any;
    handleSubmit: any;
    errors: any,
    onSubmit: any,
    showCheckout: boolean;
    handleShowCheckout: () => void;
}

interface PropsProvider{
    children: ReactNode;
}

interface PropsFormData{
    numCard: string;
    name: string;
    val: string;
    cvv: string;
    portion: string;
}

export const AppContext = createContext({} as PropsContext);

export const AppProvider = ({ children }: PropsProvider) => {

    const [showCheckout, setShowCheckout] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors } } = useForm<PropsFormData>();
    const onSubmit = async() => {};

    const handleShowCheckout = () => {
        setShowCheckout(prevState => !prevState);
    };

    return (
        <AppContext.Provider value={{
            control,
            errors,
            showCheckout,
            handleSubmit,
            onSubmit,
            handleShowCheckout,
        }}>
            {children}
        </AppContext.Provider>
    );
};
