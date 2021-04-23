import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { siteErrorCollection } from '../../services/siteErrorsService';
import { SiteError } from './interface/SiteError';
import { siteEnabledFeaturesCollection } from '../../services/siteFeaturesService';
import { ErrorPage } from '../../pages/ErrorPage';
import { LandingPage } from '../../pages/LandingPage';
import { SiteFeature } from './interface/SiteFeature';
import { siteFeatureComponents } from '../../services/siteComponentService';

export function SiteRoutesComponent(): JSX.Element {
    const [siteFeatures, setSiteFeatures] = useState<Map<string, SiteFeature>>(siteEnabledFeaturesCollection.features);
    const [siteErrors, setSiteErrors] = useState<SiteError[]>([]);

    useEffect(() => {
        const errors: SiteError[] = [];
        for (const error of siteErrorCollection.errors.values()) {
            errors.push(error);
        }

        setSiteErrors(errors);
    }, []);

    const featureRoutes: () => JSX.Element = (): JSX.Element => {
        const routes: [string, SiteFeature][] = Array.from([...siteFeatures]);

        return (
            <>
                {routes.map((route) => {
                    <Route key={route[0]} exact path={route[1].path}>
                        {siteFeatureComponents.components.has(route[1].name) &&
                            siteFeatureComponents.components.get(route[1].name)!()}
                    </Route>;
                })}
            </>
        );
    };

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                {featureRoutes()}
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
