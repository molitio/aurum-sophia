import React, { createContext, useEffect, useState } from 'react';
import { FooterComponent } from './components/common/FooterComponent';
import { NavigationTopComponent } from './components/navigation/NavigationTopComponent';
import {
    createStyles,
    makeStyles,
    Collapse,
    Theme,
    ThemeProvider,
    useScrollTrigger,
    useTheme,
} from '@material-ui/core';
import { siteThemeCollection } from './services/siteThemeService';
import { SiteRoutesComponent } from './components/common/SiteRoutesComponent';
import { SiteContext } from './components/common/interface/SiteContext';
import { siteFeatureComponents } from './services/siteComponentService';
import { siteErrorCollection } from './services/siteErrorsService';
import { siteEnabledFeaturesCollection } from './services/siteFeaturesService';
import { siteIconCollection } from './services/siteIconService';
import { amber, orange } from '@material-ui/core/colors';

export const Context = createContext<SiteContext>({
    themeContext: siteThemeCollection,
    featureContext: siteEnabledFeaturesCollection,
    componentContext: siteFeatureComponents,
    iconContext: siteIconCollection,
    errorContext: siteErrorCollection,
});

export function App(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {},
            appContainer: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                minHeight: '100vh',
                width: '100vw',
            },
            appContent: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
            },
            footerContainer: {
                /* background: `linear-gradient(138deg, ${amber[50]} 10%, ${orange[500]} 100%)`, */
                /*TODO: should be: theme.themeGradient.gradient, */
                minHeight: 24,
                ...theme.themeGradient,
            },
        }),
    );

    /* var(--space) var(--space) 
    var(--space)
    content: '\00a0',
    */

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

    const trigger = useScrollTrigger();

    return (
        <>
            <Context.Provider
                value={{
                    themeContext: {
                        themes: siteThemeCollection.themes,
                        selectedTheme: selectedTheme,
                        setSelectedTheme: setSelctedTheme,
                    },
                    featureContext: siteEnabledFeaturesCollection,
                    componentContext: siteFeatureComponents,
                    iconContext: siteIconCollection,
                    errorContext: siteErrorCollection,
                }}
            >
                <ThemeProvider theme={selectedTheme ? selectedTheme : theme}>
                    <div className={pageStyle.appContainer}>
                        <NavigationTopComponent />
                        <div className={pageStyle.appContent}>
                            <SiteRoutesComponent />
                        </div>
                    </div>
                    <div className={pageStyle.footerContainer}>
                        <FooterComponent />
                    </div>
                </ThemeProvider>
            </Context.Provider>
        </>
    );
}
