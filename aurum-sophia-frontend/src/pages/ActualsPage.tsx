import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { EventsComponent } from '../components/events/EventsComponent';
import { TPageContent } from '../components/common/type/TPageContent';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle } from '../styles/siteStyleBuilder';

const PAGE_TAG = 'actuals01';

export const ActualsPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [actualsContent, setActualsContent] = useState<TPageContent>();

    useEffect(() => {
        console.log(`contextCollection: ${JSON.stringify(context.contentCollection)}`);
        const content = context.contentCollection.get(PAGE_TAG);
        console.log(`content: ${JSON.stringify(content)}`);
        setActualsContent(content);
    }, [context.contentCollection]);

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
        actualsContent: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'left',
        },
        actualsText: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        memberContent: {
            flex: 1,
        },
    });

    return (
        <>
            <main className={pageStyle.pageContent}>
                <div className={pageStyle.actualsContent}>
                    <div className={pageStyle.actualsText}>
                        <Typography variant="h4">
                            <b>{actualsContent && actualsContent.title}</b>
                        </Typography>
                        <br />
                        <Typography variant="body1" component="p">
                            {actualsContent && actualsContent.textContent}
                        </Typography>
                        <br />

                        {actualsContent?.componentContent &&
                            Array.from([...actualsContent.componentContent]).map((content) => (
                                <>
                                    <Typography variant="h6">
                                        <b>{content[1].title}</b>
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" component="p">
                                        {content[1].textContent}
                                    </Typography>

                                    <br />
                                </>
                            ))}
                    </div>
                </div>
                <div className={pageStyle.memberContent}>
                    <EventsComponent />
                </div>
            </main>
        </>
    );
};
