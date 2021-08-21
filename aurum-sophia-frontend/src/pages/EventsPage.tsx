import React from 'react';
import { EventsComponent } from '../components/events/EventsComponent';
import { AppContext } from '../services/siteDefaultsService';

const PAGE_TAG = 'aurum-sophia-events-page';

export const EventsPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    return (
        <>
            <main>
                <EventsComponent pageTag={PAGE_TAG} />
            </main>
        </>
    );
};
