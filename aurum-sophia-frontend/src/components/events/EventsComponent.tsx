import React from 'react';
import { Typography } from '@material-ui/core';
import { EventCardComponent } from './EventCardComponent';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TSiteEvent } from '../common/type/TSiteEvent';

export const EventsComponent = ({ pageTag }: PageTagProps): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [events, setEvents] = React.useState(new Map<string, TSiteEvent>());

    React.useEffect(() => {
        const events = context.contentCollection?.get(pageTag)?.componentContent || new Map<string, TSiteEvent>();
        console.log(events);
        setEvents(events);
    }, []);

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
                {Array.from([...events]).map((event, i) =>
                    i % 2 === 0 ? (
                        <div className={componentStyle.column}>
                            <EventCardComponent key={i} event={event[1]} />
                        </div>
                    ) : (
                        <div className={componentStyle.column}>
                            <EventCardComponent key={i} event={event[1]} />
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};
