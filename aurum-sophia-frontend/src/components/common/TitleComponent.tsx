import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Typography, useTheme } from '@material-ui/core';
import siteLogo from '../../images/drawing.svg';
import SiteLogoComponent from './SiteLogoComponent';

function TitleComponent(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
            },
            titleContainer: {
                display: 'flex',
                padding: 5,
                '& :hover': {
                    ...theme.hooverActionOn,
                    '& h5, a': {
                        ...theme.hooverActionOff,
                    },
                },
                '& h5': {
                    padding: 5,
                },
            },
            title: {
                flexGrow: 1,
                border: 0,
                borderRadius: 5,
                '& a': {
                    color: theme.palette.text.primary,
                    padding: 5,
                },
                '& :link, :visited': {
                    textDecoration: 'none',
                },
            },
            logoContainer: {
                height: '42px',
                width: '42px',
            },
        }),
    );

    const componentStyle = useStyles();
    return (
        <div className={componentStyle.titleContainer}>
            <div className={componentStyle.logoContainer}>
                <SiteLogoComponent />
            </div>
            <Typography variant="h5" className={componentStyle.title}>
                <RouterLink to="/">Aurum Sophia</RouterLink>
            </Typography>
        </div>
    );
}

export default TitleComponent;
