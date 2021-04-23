import React from 'react';
import { useTheme, makeStyles, createStyles } from '@material-ui/core';
import { ImagePageBackground } from '../components/background/ImagePageBackground';

export function LandingPage(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                flex: 1,
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
                background: `linear-gradient(138deg, ${theme.palette.primary.light} 10%, ${theme.palette.background.default} 100%)`,
                [theme.breakpoints.up('sm')]: {
                    marginLeft: '15vw',
                    marginRight: '15vw',
                },
            },
            pageContent: {
                margin: '10px 0px',
                border: 1,
                borderStyle: 'solid',
                borderRadius: 10,
                height: '1000px',
                borderColor: theme.palette.secondary.main,
                boxShadow: theme.shadows[5],
            },
        }),
    );

    const pageStyle = useStyles();
    return (
        <>
            <ImagePageBackground />
            <div className={pageStyle.pageContent}>Landing page</div>
        </>
    );
}
