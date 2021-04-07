import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './styles/App.scss';
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
            root: {
                flexGrow: 1,
            },
            appContainer: {
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                opacity: 1,
            },
        }),
    );

    const pageStyle = useStyles();

    const [siteFeatures, setSiteFeatures] = useState<SiteFeature[]>([]);

    useEffect(() => {
        setSiteFeatures(getSiteFeatures);
    }, []);

    return (
        <>
            <ThemeProvider theme={themeCollection.defaultSiteTheme}>
                <div className={pageStyle.appContainer}>
                    <div className="app-content">
                        <Navigation />
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
