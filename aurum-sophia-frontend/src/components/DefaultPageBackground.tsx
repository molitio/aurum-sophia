import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import background from '../images/background.jpg';

function DefaultPageBackground(): JSX.Element {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            pageBackground: {
                position: 'fixed',
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
                minWidth: '100vw',
                zIndex: -1,
                opacity: 0.5,
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

export default DefaultPageBackground;
