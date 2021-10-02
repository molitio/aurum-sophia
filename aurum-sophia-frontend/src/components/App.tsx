import React from 'react';
import { FooterComponent } from './common/FooterComponent';
import { NavigationTopComponent } from './navigation/NavigationTopComponent';
import { SiteRoutesComponent } from './common/SiteRoutesComponent';
import { ImagePageBackground } from './background/ImagePageBackground';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle as createSiteStyle } from '../styles/siteStyleBuilder';
import { ThemePageBackground } from './background/ThemePageBackground';

export const App: React.FC = () => {
    /*   const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
    }); */
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    const pageStyle = createSiteStyle({
        appRoot: {
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'space-between',
            alignItems: 'stretch',
            minHeight: '100vh',
        },
        navContainer: {
            flex: '1 1 auto',
            alignSelf: 'flex-start',
            height: '100%',
            position: 'sticky',
            top: 0,
            /*   display: 'flex',
            flexDirection: 'column',
            height: 'inherit', */
            /* alignItems: 'stretch',
            '& :after': {
                display: 'block',
                clear: 'both',
            }, */
            /*     zIndex: 100, */
        },
        appContainer: {
            /*  paddingTop: trigger ? '48px' : '164px', */
        },
        appContentContainer: {
            flex: '1 1 auto',
            marginTop: '5px',
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
            flex: '1 1 auto',
            alignSelf: 'flex-end',
            width: '100vw',
            maxHeight: 24,
            ...theme.themeGradientBackground,
        },
    });

    return (
        <>
            <div className={pageStyle.appRoot}>
                <div className={pageStyle.navContainer}>
                    <NavigationTopComponent />
                </div>
                <main className={pageStyle.appContentContainer}>
                    <SiteRoutesComponent />
                </main>
                <div className={pageStyle.footerContainer}>
                    <FooterComponent />
                </div>
            </div>
            {context.isImageBackgroundEnabled ? <ImagePageBackground /> : <ThemePageBackground />}
        </>
    );
};
