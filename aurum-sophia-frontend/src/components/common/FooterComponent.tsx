import React from 'react';
import { createStyles, makeStyles, Typography, useTheme } from '@material-ui/core';
import ThemePageBackground from '../background/ThemePageBackground';

function FooterComponent(): JSX.Element {
    const theme = useTheme();
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

export default FooterComponent;
