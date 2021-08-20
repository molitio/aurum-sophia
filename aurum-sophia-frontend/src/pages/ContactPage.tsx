import React from 'react';
import { ContactComponent } from '../components/contact/ContactComponent';
import { AppContext } from '../services/siteDefaultsService';

export const ContactPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    return (
        <>
            <main>
                <ContactComponent />
            </main>
        </>
    );
};
