import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import getSiteErrors from '../../services/siteErrorsService';
import SiteError from './interface/SiteError';
import { getSiteFeatureComponents } from '../../services/siteFeaturesService';
import ErrorPage from '../../pages/ErrorPage';
import LandingPage from '../../pages/LandingPage';
import { SiteFeatureComponent } from './interface/SiteFeatureComponent';

function SiteRoutesComponent(): JSX.Element {
    const [siteFeatures, setSiteFeatures] = useState<SiteFeatureComponent[]>([]);
    const [siteErrors, setSiteErrors] = useState<SiteError[]>([]);

    useEffect(() => {
        setSiteFeatures(getSiteFeatureComponents);
        setSiteErrors(getSiteErrors);
    }, []);

    return (
        <>
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
                {siteErrors.map((errorType, index) => (
                    <Route key={index} exact path={`/error/${errorType.errorData.code}`}>
                        <ErrorPage errorData={errorType.errorData} />
                    </Route>
                ))}
                <Redirect to="/error/404" />
            </Switch>
        </>
    );
}

export default SiteRoutesComponent;