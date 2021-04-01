import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import AboutPage from './components/pages/AboutPage';
import LandingPage from './components/pages/LandingPage';
import PageNotFound from './components/pages/PageNotFound';

function App() {
    return (
        <>
            <Router>
                <Navigation />
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
            </Router>
        </>
    );
}

export default App;
