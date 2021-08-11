import React, { createContext, useEffect, useState } from 'react';
import { FooterComponent } from './components/common/FooterComponent';
import { NavigationTopComponent } from './components/navigation/NavigationTopComponent';
import { createStyles, makeStyles, Theme, ThemeProvider, useScrollTrigger, useTheme } from '@material-ui/core';
import { siteThemeCollection } from './services/siteThemeService';
import { SiteRoutesComponent } from './components/common/SiteRoutesComponent';
import { ImagePageBackground } from './components/background/ImagePageBackground';
import { AppContext } from './components/common/interface/AppContext';
import { getContext } from './services/appContextService';

//import { ThemePageBackground } from './components/background/ThemePageBackground';

export const Context = createContext<AppContext>(getContext());

export function App(): JSX.Element {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });
    const useStyles = makeStyles(() =>
        createStyles({
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
        }),
    );

    const pageStyle = useStyles();

    const [selectedTheme, setSelctedTheme] = useState<Theme | undefined>(theme);

    useEffect(() => {
        const themes: Theme[] = [];
        for (const theme of siteThemeCollection.themes.values()) {
            themes.push(theme);
        }
        setSelctedTheme(
            siteThemeCollection.themes.has('sunSiteTheme') ? siteThemeCollection.themes.get('sunSiteTheme') : theme,
        );
    }, [theme]);

    return (
        <div className={pageStyle.appRoot}>
            <Context.Provider value={getContext()}>
                <ThemeProvider theme={selectedTheme ? selectedTheme : theme}>
                    <div className={pageStyle.navContainer}>
                        <NavigationTopComponent />
                    </div>
                    <div className={pageStyle.appContainer}>
                        <div className={pageStyle.appContentContainer}>
                            <SiteRoutesComponent />
                        </div>
                        <div className={pageStyle.footerContainer}>
                            <FooterComponent />
                        </div>
                    </div>
                    {/* //TODO: logic */}
                    {/*    <ThemePageBackground /> */}
                    <ImagePageBackground />
                </ThemeProvider>
            </Context.Provider>
        </div>
    );
}
