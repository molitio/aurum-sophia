import React from 'react';
import FooterComponent from './components/FooterComponent';
import Navigation from './components/navigation/Navigation';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core';
import siteThemeCollection from './services/siteThemeService';
import SiteRoutes from './components/SiteRoutes';
import { useState } from 'react';
import { useEffect } from 'react';
import SiteThemeCollection from './common/SiteThemeCollection';

function App(): JSX.Element {
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

    const [themeCollection, setThemeCollection] = useState<SiteThemeCollection>(siteThemeCollection);

    const [selectedTheme, setSelctedTheme] = useState<Theme>(siteThemeCollection.sunSiteTheme);

    useEffect(() => {
        setSelctedTheme(themeCollection.sunSiteTheme);
    }, []);

    return (
        <>
            <ThemeProvider theme={selectedTheme}>
                <div className={pageStyle.appContainer}>
                    <Navigation themeCollection={themeCollection} setSelectedTheme={setSelctedTheme} />
                    <div className={pageStyle.appContent}>
                        <SiteRoutes />
                    </div>
                    <FooterComponent />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
