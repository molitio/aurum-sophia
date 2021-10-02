import { IonText } from '@ionic/react';
import React from 'react';
import { MemberContactCardComponentProps } from './interface/MemberContactCardComponentProps';

export const MemberContactCardComponent: React.FC<MemberContactCardComponentProps> = ({
    memberContact,
}: MemberContactCardComponentProps) => {
    return (
        <>
            <IonText>Telefonszám: {memberContact?.phoneNumber}</IonText>
            <IonText>Email cím: {memberContact?.emailAddress}</IonText>
            <IonText>Weboldal: {memberContact?.webUrl}</IonText>
        </>
    );
};
