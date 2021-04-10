import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import background from '../images/background.jpg';

function ThemePageBackground(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            pageBackground: {
                position: 'fixed',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 10%, ${theme.palette.background.default} 100%)`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw',
                zIndex: -1,
                opacity: 0.4,
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
