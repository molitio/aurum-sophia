import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { ImagePageBackground } from '../components/background/ImagePageBackground';

export function ActualsPage(): JSX.Element {
    /*     const useStyles = makeStyles(() =>
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

    const pageStyle = useStyles(); */
    return (
        <>
            <ImagePageBackground />
            <div>actuals page</div>
        </>
    );
}
