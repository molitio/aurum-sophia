import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import NavigationSidePanel from './NavigationSidePanel';

export interface Panel {
    sidePanel: boolean;
}

function Navigation(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                zIndex: 100,
            },
            menuButton: {
                marginRight: 2,
                color: theme.palette.secondary.main,
            },
            title: {
                flexGrow: 1,
                '& :link, :visited': {
                    textDecoration: 'none',
                    color: theme.palette.secondary.main,
                },
                '& :hover': {
                    textDecoration: 'none',
                    color: theme.palette.action.hover,
                },
            },
            drawer: {
                backgroundColor: theme.palette.background.default,
                height: '100vh',
            },
        }),
    );

    const componentStyle = useStyles();

    const [navigationState, setnavigationState] = useState({
        sidePanel: false,
    });

    const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            toggleSidePanel();
        }
    };

    const toggleSidePanel = (): void => {
        console.log(navigationState.sidePanel);
        setnavigationState({ sidePanel: !navigationState.sidePanel });
    };

    return (
        <>
            <div className={componentStyle.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={componentStyle.menuButton}
                            color="secondary"
                            aria-label="menu"
                            onClick={toggleSidePanel}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" className={componentStyle.title}>
                            <RouterLink to="/">Aurum Sophia</RouterLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
                {
                    <React.Fragment>
                        <Drawer anchor={'left'} open={navigationState.sidePanel} onClose={toggleDrawer()}>
                            <div
                                className={componentStyle.drawer}
                                role="presentation"
                                onClick={toggleSidePanel}
                                onKeyDown={toggleDrawer}
                            >
                                <NavigationSidePanel />
                            </div>
                        </Drawer>
                    </React.Fragment>
                }
            </div>
        </>
    );
}

export default Navigation;
