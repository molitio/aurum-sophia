import React from 'react';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import { ThemePageBackground } from '../background/ThemePageBackground';

export function FooterComponent(): JSX.Element {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
            },
            footerContainer: {},
        }),
    );

    const componentStyle = useStyles();

    return (
        <div className={componentStyle.footerContainer}>
            <ThemePageBackground />
            <Typography variant="body2">footer</Typography>
        </div>
    );
}
