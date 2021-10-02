import { IonText } from '@ionic/react';
import React from 'react';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const FooterComponent: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        footer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            minHeight: 24,
            opacity: 0.6,
            color: theme.palette.text.primary,
            ...theme.themeGradientBackground,
        },
        brand: {
            justifySelf: 'flex-end',
        },
    });

    return (
        <div className={componentStyle.footer}>
            <div className={componentStyle.brand}>
                <IonText>
                    <span>Aurum Sophia Alapítvány 2021</span>
                </IonText>
            </div>
        </div>
    );
};
