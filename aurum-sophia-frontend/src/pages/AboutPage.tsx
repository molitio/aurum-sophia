import { useTheme, makeStyles, createStyles } from '@material-ui/core';
import React from 'react';
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
            },
        }),
    );

    return (
        <>
            <ThemePageBackground />
            <div>about page</div>
        </>
    );
}

export default AboutPage;
