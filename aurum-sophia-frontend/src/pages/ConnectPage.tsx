import React from 'react';
import { AppContext } from '../services/siteDefaultsService';

export const ConnectPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    return (
        <>
            <main>{context.molitioId} connect page</main>
        </>
    );
};
