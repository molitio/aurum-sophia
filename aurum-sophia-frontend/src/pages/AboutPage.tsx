import React from 'react';
import { useTheme, makeStyles, createStyles } from '@material-ui/core';
import ImagePageBackground from '../components/background/ImagePageBackground';
import ThemePageBackground from '../components/background/ThemePageBackground';

function AboutPage(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
            },
            container: {
                width: '100vw',
                height: '1000px',
            },
        }),
    );

    const style = useStyles();

    return (
        <>
            <ThemePageBackground />
            <div className={style.container}>about page</div>
        </>
    );
}

export default AboutPage;
