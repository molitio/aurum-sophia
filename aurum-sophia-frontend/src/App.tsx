import React, { useEffect, useState } from 'react';
import { FooterComponent } from './components/common/FooterComponent';
import { NavigationTopComponent } from './components/navigation/NavigationTopComponent';
import { createStyles, makeStyles, Theme, ThemeProvider, useTheme } from '@material-ui/core';
import { siteThemeCollection } from './services/siteThemeService';
import { SiteRoutesComponent } from './components/common/SiteRoutesComponent';

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
        }),
    );

    /* var(--space) var(--space) 
    var(--space)
    content: '\00a0',
    */

    const pageStyle = useStyles();

    const [themeCollection, setThemeCollection] = useState<Theme[]>([]);

    const [selectedTheme, setSelctedTheme] = useState<Theme | undefined>(theme);

    useEffect(() => {
        const themes: Theme[] = [];
        for (const theme of siteThemeCollection.themes.values()) {
            themes.push(theme);
        }
        setThemeCollection(themes);
        setSelctedTheme(
            siteThemeCollection.themes.has('sunSiteTheme') ? siteThemeCollection.themes.get('sunSiteTheme') : theme,
        );
    }, [theme]);

    return (
        <>
            <ThemeProvider theme={selectedTheme ? selectedTheme : theme}>
                <div className={pageStyle.appContainer}>
                    <NavigationTopComponent themeCollection={themeCollection} setSelectedTheme={setSelctedTheme} />
                    <div className={pageStyle.appContent}>
                        <SiteRoutesComponent />
                    </div>
                    <FooterComponent />
                </div>
            </ThemeProvider>
        </>
    );
}
