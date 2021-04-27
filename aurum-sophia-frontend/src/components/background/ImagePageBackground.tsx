import React from 'react';
import { createStyles, makeStyles, useScrollTrigger, useTheme } from '@material-ui/core';

export function ImagePageBackground(): JSX.Element {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            pageBackground: {
                position: 'fixed',
                top: trigger ? '48px' : '0px',
                backgroundImage: `url(${theme.themeBackgroundImage ? theme.themeBackgroundImage.imageUrl : ''})`,
                backgroundColor: 'transparent',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
                minWidth: '100vw',
                zIndex: -1,
                opacity: theme.themeBackgroundImage ? theme.themeBackgroundImage.opacity : 1,
            },
        }),
    );

    const pageStyle = useStyles();

    return (
        <>
            <div className={pageStyle.pageBackground}></div>
            {/* <Slide appear={true} direction="down" in={!trigger}>
            </Slide> */}
        </>
    );
}
