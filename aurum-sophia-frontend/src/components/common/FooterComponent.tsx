import React from 'react';
import { createStyles, makeStyles, Typography, useTheme } from '@material-ui/core';

export function FooterComponent(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
            },
            footerContainer: {
                display: 'flex',
                alignItems: 'center',
                /* background: `linear-gradient(138deg, ${amber[50]} 10%, ${orange[500]} 100%)`, */
                /*TODO: should be: theme.themeGradient.gradient, */
                minHeight: 24,
                opacity: 0.6,
                color: theme.palette.text.primary,
                ...theme.themeGradient,
            },
            brand: {
                alignSelf: 'flex-end',
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <div className={componentStyle.footerContainer}>
            <div className={componentStyle.brand}>
                <Typography variant="body2">Aurum Sophia Alapítvány 2021</Typography>
            </div>
        </div>
    );
}
