import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './styles/App.scss';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutPage from './components/pages/AboutPage';
import LandingPage from './components/pages/LandingPage';
import PageNotFound from './components/pages/PageNotFound';
import background from './images/background.jpg';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core';
import siteThemeCollection from './styles/siteThemeCollection';
import ActualsPage from './components/pages/ActualsPage';
import EventsPage from './components/pages/EventsPage';
import DonationPage from './components/pages/DonationPage';
import ContactPage from './components/pages/ContactPage';
import getSiteFeatures from './services/featureToggle';

const themeCollection = siteThemeCollection();

function App(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            appContainer: {
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                opacity: 1,
            },
        }),
    );

    const pageStyle = useStyles();

    const siteFeatures = getSiteFeatures();

    return (
        <>
            <ThemeProvider theme={themeCollection.defaultSiteTheme}>
                <div className={pageStyle.appContainer}>
                    <Router>
                        <div className="app-content">
                            <Switch>
                                {siteFeatures.map((feature) => (
                                    <div key={feature.id}>
                                        {feature.isEnabled && (
                                            <Route exact path={feature.path}>
                                                {feature.component}
                                            </Route>
                                        )}
                                    </div>
                                ))}
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                                <Route exact path="/events">
                                    <EventsPage />
                                </Route>
                                <Route exact path="/donation">
                                    <DonationPage />
                                </Route>
                                <Route exact path="/contact">
                                    <ContactPage />
                                </Route>
                                <Route exact path="/">
                                    <LandingPage />
                                </Route>
                                <Route path="/404">
                                    <PageNotFound />
                                </Route>
                                <Redirect to="/404" />
                            </Switch>
                        </div>
                        <Footer />
                    </Router>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
