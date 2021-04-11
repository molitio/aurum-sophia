import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

function ThemePageBackground(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            pageBackground: {
                position: 'fixed',
                background: `linear-gradient(138deg, ${theme.palette.primary.main} 10%, ${theme.palette.background.default} 100%)`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw',
                zIndex: -1,
                opacity: 0.3,
            },
        }),
    );

    const pageStyle = useStyles();

    return (
        <>
            <div className={pageStyle.pageBackground}></div>
        </>
    );
}

export default ThemePageBackground;
