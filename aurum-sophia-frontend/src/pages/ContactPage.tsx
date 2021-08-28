import React from 'react';
import { ContactComponent } from '../components/contact/ContactComponent';
import { AppContext } from '../services/siteDefaultsService';

const CONTACT_PAGE_TAG = 'aurum-sophia-contact-page';

export const ContactPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    return (
        <>
            <main>
                <ContactComponent pageTag={CONTACT_PAGE_TAG} />
            </main>
        </>
    );
};
