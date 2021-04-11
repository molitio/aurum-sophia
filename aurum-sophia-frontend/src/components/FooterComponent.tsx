import React from 'react';
import { Typography } from '@material-ui/core';
import ThemePageBackground from './ThemePageBackground';

function FooterComponent(): JSX.Element {
    return (
        <>
            <ThemePageBackground />
            <Typography variant="body2">footer</Typography>
        </>
    );
}

export default FooterComponent;
