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
                /* background: `linear-gradient(138deg, ${amber[50]} 10%, ${orange[500]} 100%)`, */
                /*TODO: should be: theme.themeGradient.gradient, */
                minHeight: 24,
                ...theme.themeGradient,
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <div className={componentStyle.footerContainer}>
            <Typography variant="body2">footer</Typography>
        </div>
    );
}
