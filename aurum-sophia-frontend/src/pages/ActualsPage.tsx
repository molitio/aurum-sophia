import React, { useContext } from 'react';
import { makeStyles, createStyles, Typography, useTheme } from '@material-ui/core';
import { EventsComponent } from '../components/events/EventsComponent';
import { SiteContext } from '../services/appContextService';

export function ActualsPage(): JSX.Element {
    console.log(`this is the actuals page`);
    const context = useContext(SiteContext);

    const actualsContent = context.contentContext.getIdByMolitioTag('actuals01');
    //console.log(data);
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
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
        }),
    );

    const pageStyle = useStyles();
    return (
        <>
            <main className={pageStyle.pageContent}>
                <div className={pageStyle.actualsContent}>
                    <div className={pageStyle.actualsText}>
                        <Typography variant="h5">
                            <b>Aktuális hírek</b>
                        </Typography>
                        <br />
                        <Typography variant="body1" component="p">
                            {actualsContent?.data?.textContent}
                        </Typography>
                        <br />
                    </div>
                </div>
                <div className={pageStyle.memberContent}>
                    <EventsComponent />
                </div>
            </main>
        </>
    );
}
