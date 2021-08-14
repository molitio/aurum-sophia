import React from 'react';
import { createStyles, makeStyles, Typography, useTheme } from '@material-ui/core';
import { useAppContext } from '../context/AppContextProvider';

export function FooterComponent(): JSX.Element {
    const context = useAppContext();
    const theme = context.activeTheme;
    const useStyles = makeStyles(() =>
        createStyles({
            footer: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                minHeight: 24,
                opacity: 0.6,
                color: theme.palette.text.primary,
                ...theme.themeGradientBackground,
            },
            brand: {
                justifySelf: 'flex-end',
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <div className={componentStyle.footer}>
            <div className={componentStyle.brand}>
                <Typography variant="body2">Aurum Sophia Alapítvány 2021</Typography>
            </div>
        </div>
    );
}
