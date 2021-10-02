import React, { useState } from 'react';
import { NavigationSideComponent } from './NavigationSideComponent';
import { TitleComponent } from '../common/TitleComponent';
import { NavigationListComponent } from './NavigationListComponent';
import { AppContext, SiteDefaultIcon } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { IonButton, IonIcon, IonToolbar } from '@ionic/react';

export const NavigationTopComponent: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    const trigger = false; /* useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });
 */
    const componentStyle = createSiteStyle({
        appBar: {
            position: 'relative',
            width: '100vw',
            color: theme.palette.text.primary,
            opacity: 0.9,
            ...theme.themeGradientBackground,
        },
        menuButton: {
            color: theme.palette.text.primary,
        },
        menuButtonContainer: {
            marginRight: 0,
            '& :hover': {
                ...theme.hooverActionOn,
                '& span': {
                    ...theme.hooverActionOff,
                },
            },
        },
        menuRow: {
            [theme.breakpoints.down('xs')]: { display: 'none' },
        },
        titleToolBar: {
            /*  top: 0,
            position: 'sticky', */
        },
        title: {
            //    marginLeft: trigger ? '0px' : '32px',
        },
    });

    const [navigationState, setnavigationState] = useState({
        sidePanel: false,
    });

    const toggleSidePanel = (): void => {
        setnavigationState({ sidePanel: !navigationState.sidePanel });
    };

    return (
        <div className={componentStyle.appBar}>
            <div>
                <NavigationSideComponent navigationState={navigationState} toggle={toggleSidePanel} />
            </div>
            <div className={componentStyle.titleToolBar}>
                {trigger && (
                    <div className={componentStyle.menuButtonContainer}>
                        <IonButton
                            slot="start"
                            className={componentStyle.menuButton}
                            aria-label="menu"
                            onClick={toggleSidePanel}
                        >
                            <IonIcon>
                                {context.siteIconCollection.get('menu')?.fontIcon || SiteDefaultIcon.fontIcon}
                            </IonIcon>
                        </IonButton>
                    </div>
                )}
                {!navigationState.sidePanel && (
                    <div className={componentStyle.title}>
                        <TitleComponent horizontal={true} />
                    </div>
                )}
            </div>

            {!trigger && (
                <IonToolbar>
                    <div className={componentStyle.menuButtonContainer}>
                        <IonButton
                            slot="start"
                            className={componentStyle.menuButton}
                            aria-label="menu"
                            onClick={toggleSidePanel}
                        >
                            <IonIcon>
                                {context.siteIconCollection.get('menu')?.fontIcon || SiteDefaultIcon.fontIcon}
                            </IonIcon>
                        </IonButton>
                    </div>
                    <div className={componentStyle.menuRow}>
                        {!navigationState.sidePanel && (
                            <NavigationListComponent horizontal={true} displayIcons={false} />
                        )}
                    </div>
                </IonToolbar>
            )}
        </div>
    );
};
