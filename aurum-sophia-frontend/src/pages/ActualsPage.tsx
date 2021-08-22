import React from 'react';
import { EventsComponent } from '../components/events/EventsComponent';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle } from '../styles/siteStyleBuilder';
import { ActualsComponent } from '../components/actuals/ActualsComponent';

const ACTUALS_PAGE_TAG = 'aurum-sophia-actuals-page';
const EVENTS_PAGE_TAG = 'aurum-sophia-actuals-page-events';

export const ActualsPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const pageStyle = createSiteStyle({
        pageContent: {
            display: 'flex',
            flexDirection: 'column',
            color: theme.palette.text.primary,
            padding: '10px 0px',
            marginBottom: '10px',
            border: 0,
            borderStyle: 'solid',
            borderRadius: 10,
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            /* backgroundColor: 'transparent', */
            ...theme.themeGradientBackground,
        },
        memberContent: {
            flex: 1,
        },
    });

    return (
        <>
            <main className={pageStyle.pageContent}>
                <div className={pageStyle.actualsContent}>
                    <ActualsComponent pageTag={ACTUALS_PAGE_TAG} />
                </div>
                <div className={pageStyle.memberContent}>
                    <EventsComponent pageTag={EVENTS_PAGE_TAG} />
                </div>
            </main>
        </>
    );
};
