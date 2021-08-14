import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { ActualsPage } from '../../pages/ActualsPage';
import { useAppContext } from '../context/AppContextProvider';

export const SiteRoutesComponent = (): JSX.Element => {
    const context = useAppContext();

    return (
        <Switch>
            <Route exact path="/">
                <ActualsPage />
            </Route>
            {Array.from([...context.featureCollection]).map((route) => (
                <Route
                    key={route[0]}
                    exact
                    path={route[1].path}
                    component={context.componentCollection.get(route[0])}
                />
            ))}
            {Array.from([...context.errorCollection]).map((errorData) => (
                <Route key={errorData[0]} exact path={`/error/${errorData[0]}`}>
                    <ErrorPage error={{ ...errorData[1] }} />
                </Route>
            ))}
            <Redirect to="/error/404" />
        </Switch>
    );
};
