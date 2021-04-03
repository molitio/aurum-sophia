import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './styles/App.scss';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutPage from './components/pages/AboutPage';
import LandingPage from './components/pages/LandingPage';
import PageNotFound from './components/pages/PageNotFound';
import background from './images/background.jpg';

function App(): JSX.Element {
    return (
        <>
            <div
                className="app-container"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <Router>
                    <div className="app-content">
                        <div className="app-header">
                            <Navigation />
                        </div>
                        <Switch>
                            <Route exact path="/about">
                                <AboutPage />
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
        </>
    );
}

export default App;
