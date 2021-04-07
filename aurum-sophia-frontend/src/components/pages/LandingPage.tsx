import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import background from '../../images/background.jpg';

function LandingPage(): JSX.Element {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            pageBackground: {
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
                opacity: 0.8,
            },
            pageContent: {
                opacity: 1,
            },
        }),
    );

    const pageStyle = useStyles();

    return (
        <>
            <div className={pageStyle.pageBackground}>
                <div className={pageStyle.pageContent}>Landing page</div>
            </div>
        </>
    );
}

export default LandingPage;
