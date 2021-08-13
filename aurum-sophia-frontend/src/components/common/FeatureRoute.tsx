import React from 'react';
import { Route } from 'react-router-dom';
import { IFeatureRouteProps } from './interface/IFeatureRouteProps';

export function FeatureRoute({ siteFeature, siteComponent }: IFeatureRouteProps): JSX.Element {
    return (
        <Route key={siteFeature.id} exact path={siteFeature.path}>
            {siteComponent}
        </Route>
    );
}
