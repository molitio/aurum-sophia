import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

function TitleComponent(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                zIndex: 100,
            },
            titleContainer: {
                display: 'flex',
                padding: 5,
                '& :hover': {
                    ...theme.hooverActionOn,
                    '& h5, a': {
                        ...theme.hooverActionOff,
                    },
                },
                '& h5': {
                    padding: 5,
                },
            },
            title: {
                flexGrow: 1,
                border: 0,
                borderRadius: 5,
                '& a': {
                    color: theme.palette.text.primary,
                    padding: 5,
                },
                '& :link, :visited': {
                    textDecoration: 'none',
                },
            },
        }),
    );

    const componentStyle = useStyles();
    return (
        <div className={componentStyle.titleContainer}>
            <Typography variant="h5" className={componentStyle.title}>
                <RouterLink to="/">Aurum Sophia</RouterLink>
            </Typography>
        </div>
    );
}

export default TitleComponent;
