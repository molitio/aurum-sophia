import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Typography, useTheme } from '@material-ui/core';
import { SiteLogoComponent } from './SiteLogoComponent';
import { TitleComponentProps } from './interface/TitleComponentProps';

export function TitleComponent({ horizontal }: TitleComponentProps): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
            },
            titleContainer: {
                display: 'flex',
                padding: 0,
                '& :hover': {
                    ...theme.hooverActionOn,
                    '& h5, a': {
                        ...theme.hooverActionOff,
                    },
                },
                '& h5': {
                    padding: 0,
                    minHeight: '42px',
                },
            },
            title: {
                border: 0,
                borderRadius: 5,
                '& a': {
                    color: theme.palette.text.primary,
                    padding: 0,
                },
                '& :link, :visited': {
                    textDecoration: 'none',
                },
            },
            titleText: {
                display: 'flex',
                position: 'relative',
                top: '8px',
                flexDirection: horizontal ? 'row' : 'column',
            },
            logoContainer: {
                bottom: '5px',
                height: '42px',
                width: '42px',
            },
        }),
    );

    const componentStyle = useStyles();
    return (
        <div className={componentStyle.titleContainer}>
            <div className={componentStyle.logoContainer}>
                <SiteLogoComponent />
            </div>
            <div className={componentStyle.title}>
                <Typography variant="h5">
                    <RouterLink to="/">
                        <div className={componentStyle.titleText}>
                            <span>
                                {' '}
                                Aurum Sophia
                                {!horizontal && (
                                    <span>
                                        <br />{' '}
                                    </span>
                                )}{' '}
                                Alapítvány
                            </span>
                        </div>
                    </RouterLink>
                </Typography>
            </div>
        </div>
    );
}
