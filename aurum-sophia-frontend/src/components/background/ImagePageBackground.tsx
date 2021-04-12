import React from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';

function ImagePageBackground(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            pageBackground: {
                position: 'fixed',
                backgroundImage: `url(${theme.themeBackgroundImage.imageUrl})`,
                backgroundColor: 'transparent',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
                minWidth: '100vw',
                zIndex: -1,
                opacity: theme.themeBackgroundImage.opacity,
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

export default ImagePageBackground;
