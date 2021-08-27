import { Typography } from '@material-ui/core';
import React from 'react';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TEvent } from '../common/type/TEvent';
import { EventCardComponent } from './EventCardComponent';

export const EventsComponent = ({ pageTag }: PageTagProps): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [eventsContent, setEventsContent] = React.useState(SiteDefaultPageContent);
    const [events, setEvents] = React.useState(new Map<string, TEvent>());

    React.useEffect(() => {
        const content = context.contentCollection?.get(pageTag) ?? SiteDefaultPageContent;
        setEventsContent(content);
        const events = content?.componentContent ?? new Map<string, TEvent>();
        console.log(events);
        setEvents(events);
    }, []);

    const componentStyle = createSiteStyle({
        events: {},
        componentTitle: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        eventsContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            paddingLeft: '5vw',
            paddingRight: '5vw',
            [theme.breakpoints.down('md')]: {},
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            },
        },
        column: {
            flex: 1,
            flexBasis: '40vw',
        },
    });

    return (
        <div className={componentStyle.events}>
            <div className={componentStyle.componentTitle}>
                <Typography variant="h5">
                    <b>{eventsContent.title}</b>
                </Typography>
            </div>
            <br />
            <div className={componentStyle.eventsContainer}>
                {Array.from([...events]).map((event, i) => (
                    <div key={event[0]} className={componentStyle.column}>
                        <EventCardComponent event={event[1]} />
                    </div>
                ))}
            </div>
        </div>
    );
};
