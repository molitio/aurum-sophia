import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { Context } from '../../App';
import { ActualsPage } from '../../pages/ActualsPage';

export function SiteRoutesComponent(): JSX.Element {
    const context = useContext(Context);

    return (
        <Switch>
            <Route exact path="/">
                <ActualsPage data={context.contextData.content.getIdByMolitioTag('actuals01').data} />
            </Route>
            {Array.from([...context.contextData.features.features]).map((route) => (
                <Route
                    key={route[0]}
                    exact
                    path={route[1].path}
                    component={context.contextData.components.components.get(route[0])}
                />
            ))}
            {Array.from([...context.contextData.errors.errors]).map((errorType) => (
                <Route key={errorType[0]} exact path={`/error/${errorType[1].errorData.code}`}>
                    <ErrorPage errorData={errorType[1].errorData} />
                </Route>
            ))}
            <Redirect to="/error/404" />
        </Switch>
    );
}
