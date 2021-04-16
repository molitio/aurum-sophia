import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import getSiteErrors from '../../services/siteErrorsService';
import SiteError from './interface/SiteError';
import { getFeatureCollection } from '../../services/siteFeaturesService';
import ErrorPage from '../../pages/ErrorPage';
import LandingPage from '../../pages/LandingPage';
import { SiteFeatureComponent } from './interface/SiteFeatureComponent';

function SiteRoutesComponent(): JSX.Element {
    const [siteFeatures, setSiteFeatures] = useState<Map<string, SiteFeatureComponent>>(
        new Map<string, SiteFeatureComponent>(),
    );
    const [siteErrors, setSiteErrors] = useState<SiteError[]>([]);

    useEffect(() => {
        setSiteFeatures(getFeatureCollection().getSiteFeatureComponents);
        setSiteErrors(getSiteErrors);
    }, []);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                {siteFeatures.forEach((feature, key) => (
                    <Route key={feature.id} path={feature.path}>
                        {feature.isEnabled && feature.component}
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
