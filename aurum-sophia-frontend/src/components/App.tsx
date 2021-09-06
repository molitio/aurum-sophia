import React from 'react';
import { useScrollTrigger } from '@material-ui/core';
import { FooterComponent } from './common/FooterComponent';
import { NavigationTopComponent } from './navigation/NavigationTopComponent';
import { SiteRoutesComponent } from './common/SiteRoutesComponent';
import { ImagePageBackground } from './background/ImagePageBackground';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle as createSiteStyle } from '../styles/siteStyleBuilder';
import { ThemePageBackground } from './background/ThemePageBackground';

export const App: React.FC = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
    });
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    const pageStyle = createSiteStyle({
        appRoot: {},
        navContainer: {
            position: 'sticky',
            top: 0,
            zIndex: 100,
            width: '100vw',
        },
        appContainer: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: trigger ? '48px' : '164px',
        },
        appContentContainer: {
            alignSelf: 'center',
            flexGrow: 1,
            [theme.breakpoints.up('sm')]: {
                paddingLeft: '5vw',
                paddingRight: '5vw',
            },
            [theme.breakpoints.up('lg')]: {
                paddingLeft: '15vw',
                paddingRight: '15vw',
            },
        },
        footerContainer: {
            alignSelf: 'flex-end',
            width: '100vw',
            minHeight: 24,
            ...theme.themeGradientBackground,
        },
    });

    return (
        <div className={pageStyle.appRoot}>
            <div className={pageStyle.navContainer}>
                <NavigationTopComponent />
            </div>
            <div className={pageStyle.appContainer}>
                <main className={pageStyle.appContentContainer}>
                    <SiteRoutesComponent />
                </main>
                <div className={pageStyle.footerContainer}>
                    <FooterComponent />
                </div>
            </div>
            {context.isImageBackgroundEnabled ? <ImagePageBackground /> : <ThemePageBackground />}
        </div>
    );
};
