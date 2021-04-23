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
    const [siteFeatures, setSiteFeatures] = useState<SiteFeature[]>([]);
    const [siteErrors, setSiteErrors] = useState<SiteError[]>([]);

    useEffect(() => {
        /*    const features: SiteFeature[] = [];
        for (const feature of siteEnabledFeaturesCollection.features.values()) {
            features.push(feature);
        }
        setSiteFeatures(features);
        */

        const errors: SiteError[] = [];
        for (const error of siteErrorCollection.errors.values()) {
            errors.push(error);
        }

        setSiteErrors(errors);
    }, []);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                {siteFeatures.map((feature) => (
                    <Route key={feature.name} exact path={feature.path}>
                        {siteFeatureComponents.components.has(feature.name) &&
                            siteFeatureComponents.components.get(feature.name)}
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
