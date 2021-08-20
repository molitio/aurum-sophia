import React from 'react';
import { Typography } from '@material-ui/core';
import { EventCardComponent } from './EventCardComponent';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const EventsComponent = (): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        events: {},
        eventsContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingLeft: '5vw',
            paddingRight: '5vw',
            [theme.breakpoints.down('md')]: {},
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            },
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
        },
        componentTitle: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
    });

    return (
        <div className={componentStyle.events}>
            <div className={componentStyle.componentTitle}>
                <Typography variant="h5">
                    <b>Események</b>
                </Typography>
            </div>
            <br />
            <div className={componentStyle.eventsContainer}>
                <div className={componentStyle.column}>
                    {['foo', 'bar', 'baz', 'rba'].map((v, i) => (
                        <EventCardComponent key={i} />
                    ))}
                </div>
                <div className={componentStyle.column}>
                    {['foo', 'bar', 'baz', 'rba'].map((v, i) => (
                        <EventCardComponent key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};
