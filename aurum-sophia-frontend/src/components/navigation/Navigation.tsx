import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NavigationSidePanel from './NavigationSidePanel';
import { Icon } from '@material-ui/core';
import siteIconService from '../../services/siteIconService';

function Navigation(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                zIndex: 100,
            },
            menuButton: {
                color: theme.palette.secondary.main,
            },
            menuButtonContainer: {
                marginRight: 5,
                '& :hover': {
                    boxShadow: theme.shadows[10],
                    '& span': {
                        boxShadow: theme.shadows[0],
                    },
                },
            },
            title: {
                flexGrow: 1,
                '& a': {
                    padding: 5,
                },
                '& :link, :visited': {
                    textDecoration: 'none',
                    color: theme.palette.secondary.main,
                },
                '& :hover': {
                    ...theme.hooverAction,
                },
            },
        }),
    );

    const componentStyle = useStyles();

    const [navigationState, setnavigationState] = useState({
        sidePanel: false,
    });

    const toggleSidePanel = (): void => {
        console.log(navigationState.sidePanel);
        setnavigationState({ sidePanel: !navigationState.sidePanel });
    };

    return (
        <>
            <div className={componentStyle.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={componentStyle.menuButtonContainer}>
                            <IconButton
                                edge="start"
                                className={componentStyle.menuButton}
                                aria-label="menu"
                                onClick={toggleSidePanel}
                            >
                                <Icon>{siteIconService.menu.fontIcon}</Icon>
                            </IconButton>
                        </div>
                        <Typography variant="h5" className={componentStyle.title}>
                            <RouterLink to="/">Aurum Sophia</RouterLink>
                        </Typography>
                    </Toolbar>
                    <NavigationSidePanel navigationState={navigationState} toggle={toggleSidePanel} />
                </AppBar>
            </div>
        </>
    );
}

export default Navigation;
