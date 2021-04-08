import React from 'react';
import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';

function PageNotFound(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flex: 1,
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                flexDirection: 'column',
            },
            paper: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: theme.palette.background.paper,

                [theme.breakpoints.up('sm')]: {
                    marginLeft: '15vw',
                    marginRight: '15vw',
                    marginBottom: '10vh',
                },
            },
            pageContent: {
                color: theme.palette.error.light,
            },
        }),
    );

    const pageStyle = useStyles();
    return (
        <>
            <div className={pageStyle.root}>
                <Paper className={pageStyle.paper}>
                    <div className={pageStyle.pageContent}>
                        <Typography variant="h5">Ooops, navigációs hiba...</Typography>
                        <Typography variant="h1">404</Typography>
                        <Typography variant="h4">Az oldal nem található</Typography>
                    </div>
                </Paper>
            </div>
        </>
    );
}
export default PageNotFound;
