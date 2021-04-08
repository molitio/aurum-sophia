import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import LandingPage from './components/pages/LandingPage';
import PageNotFound from './components/pages/PageNotFound';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import siteThemeCollection from './styles/siteThemeCollection';
import getSiteFeatures from './services/featureToggle';
import SiteFeature from './common/SiteFeature';

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

    const [siteFeatures, setSiteFeatures] = useState<SiteFeature[]>([]);

    useEffect(() => {
        setSiteFeatures(getSiteFeatures);
    }, []);

    return (
        <>
            <ThemeProvider theme={themeCollection.defaultSiteTheme}>
                <div className={pageStyle.appContainer}>
                    <Navigation />
                    <div className={pageStyle.appContent}>
                        <Switch>
                            <Route exact path="/">
                                <LandingPage />
                            </Route>
                            {siteFeatures
                                .filter(({ isEnabled }) => isEnabled)
                                .map((feature) => (
                                    <Route key={feature.id} path={feature.path}>
                                        {feature.component}
                                    </Route>
                                ))}
                            <Route path="/404">
                                <PageNotFound />
                            </Route>
                            <Redirect to="/404" />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
