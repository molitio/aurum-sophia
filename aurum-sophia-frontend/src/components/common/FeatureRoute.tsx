import React from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from '../../services/siteDefaultsService';
import { IFeatureRouteProps } from './interface/IFeatureRouteProps';

export const FeatureRoute = ({ siteFeature, siteComponent }: IFeatureRouteProps): JSX.Element => {
    const context = React.useContext(AppContext);
    // context . user route enabled ?
    return (
        <Route key={siteFeature.id} exact path={siteFeature.path}>
            {siteComponent}
        </Route>
    );
};
