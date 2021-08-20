import React from 'react';
import { EventsComponent } from '../components/events/EventsComponent';
import { AppContext } from '../services/siteDefaultsService';

export const EventsPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    return (
        <>
            <main>
                <EventsComponent />
            </main>
        </>
    );
};
