import React from 'react';
import { ErrorPageProps } from './interface/ErrorPageProps';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle } from '../styles/siteStyleBuilder';
import { IonIcon, IonText } from '@ionic/react';

export const ErrorPage: React.FC<ErrorPageProps> = ({ error }: ErrorPageProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const pageStyle = createSiteStyle({
        siteError: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
        errorInfoContainer: {
            flex: 1,
            margin: '0px 20px',
            border: 1,
            borderStyle: 'solid',
            borderRadius: 10,
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
        },
        errorInfo: {
            padding: '15px',
            borderRadius: 10,
            color: theme.palette.error.light,
            outline: theme.palette.error.light,
            ...theme.themeGradientBackground,
        },
    });

    return (
        <>
            <section className={pageStyle.siteError}>
                <div className={pageStyle.errorInfoContainer}>
                    <div className={pageStyle.errorInfo}>
                        <IonIcon>
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                        </IonIcon>
                        <IonText>
                            {error.code}
                            <br />
                            Ooops, {error.description}
                        </IonText>
                        <IonText>{error.message}</IonText>
                    </div>
                </div>
            </section>
        </>
    );
};
