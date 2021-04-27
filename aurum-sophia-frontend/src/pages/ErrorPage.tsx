import React from 'react';
import { createStyles, makeStyles, Paper, SvgIcon, useTheme, Typography } from '@material-ui/core';
import { SiteError } from '../components/common/interface/SiteError';
import { ThemePageBackground } from '../components/background/ThemePageBackground';

export function ErrorPage({ errorData: error }: SiteError): JSX.Element {
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
                margin: '0px 20px',
                border: 1,
                borderStyle: 'solid',
                borderRadius: 10,
                borderColor: theme.palette.secondary.main,
                boxShadow: theme.shadows[5],
            },
            errorInfo: {
                padding: '15px',
                borderRadius: 10,
                color: theme.palette.error.light,
                outline: theme.palette.error.light,
                background: `linear-gradient(138deg, ${theme.palette.background.default} 0%, ${theme.palette.secondary.main} 80%)`,
            },
        }),
    );

    const pageStyle = useStyles();

    return (
        <>
            <ThemePageBackground />
            <main className={pageStyle.root}>
                <Paper className={pageStyle.paper}>
                    <div className={pageStyle.pageContent}>
                        <Paper className={pageStyle.errorInfo}>
                            <SvgIcon fontSize="large">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                            </SvgIcon>
                            <Typography variant="subtitle1">
                                {error.code}
                                <br />
                                Ooops, {error.description}
                            </Typography>
                            <Typography variant="subtitle2">{error.message}</Typography>
                        </Paper>
                    </div>
                </Paper>
            </main>
        </>
    );
}
