import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/navigation/Navigation';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import siteThemeCollection from './services/siteThemeService';
import SiteRoutes from './components/SiteRoutes';

const themeCollection = siteThemeCollection;

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

    return (
        <>
            <ThemeProvider theme={themeCollection.defaultSiteTheme}>
                <div className={pageStyle.appContainer}>
                    <Navigation />
                    <div className={pageStyle.appContent}>
                        <SiteRoutes />
                    </div>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
