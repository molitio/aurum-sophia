import { IonText } from '@ionic/react';
import React from 'react';
import { PhoneContactComponentProps } from './interface/PhoneContactComponentProps';

export const PhoneContactComponent: React.FC<PhoneContactComponentProps> = ({
    contact,
}: PhoneContactComponentProps) => {
    return (
        <>
            <IonText>{contact.name}</IonText>
            <IonText>{contact.role}</IonText>
            <IonText>{contact.phoneNumber}</IonText>
        </>
    );
};
