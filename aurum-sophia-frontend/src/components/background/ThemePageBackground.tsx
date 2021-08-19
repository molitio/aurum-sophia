import React, { useContext } from 'react';
import { createStyles, makeStyles, useScrollTrigger } from '@material-ui/core';
import { AppContext } from '../../services/siteDefaultsService';

export function ThemePageBackground(): JSX.Element {
    const context = useContext(AppContext);
    const theme = context.selectedTheme;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });
    const useStyles = makeStyles(() =>
        createStyles({
            backgroundContainer: {
                position: 'fixed',
                zIndex: -90,
                top: trigger ? '48px' : '0px',
            },
            pageBackground: {
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
                minWidth: '100vw',
                opacity: 0.9,
                ...theme.themeGradientBackground,
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <div className={componentStyle.backgroundContainer}>
            <div className={componentStyle.pageBackground}></div>
        </div>
    );
}
