import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function Navigation(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                flexGrow: 1,
            },
            list: {
                width: 250,
            },
            fullList: {
                width: 'auto',
            },
        }),
    );

    const [navigationOptions, setnavigationOptions] = useState([
        {
            option: 'Home',
            enabled: true,
            path: '/',
            icon: <InboxIcon />,
        },
        {
            option: 'Mission Board',
            enabled: true,
            path: '/mb',
            icon: <MailIcon />,
        },
        {
            option: 'About',
            enabled: true,
            path: '/about',
            icon: <MailIcon />,
        },
    ]);

    const classes = useStyles();

    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor: 'left', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const navigationList = (anchor: 'left') => (
        <div
            className=""
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {navigationOptions.map((option) => (
                    <ListItem button key={option.option}>
                        <Link to={option.path}>
                            <ListItemIcon>{option.icon}</ListItemIcon>
                            <ListItemText primary={option.option} />
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer('left', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Aurum Sophia
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                {
                    <React.Fragment>
                        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                            {navigationList('left')}
                        </Drawer>
                    </React.Fragment>
                }
            </div>
        </>
    );
}

export default Navigation;
/* 
<button mat-button [matMenuTriggerFor]="menu">
<mat-icon aria-hidden="false" aria-label="menu">
    menu
</mat-icon>
</button>
<mat-menu #menu="matMenu">
<button mat-menu-item>
    <a routerLink="/mission-board">mission board</a>
</button>
<button mat-menu-item>
    <a routerLink="/about">about</a>
</button>
<button mat-menu-item>
    <a routerLink="/community-hub">community hub</a>
</button>
<button mat-menu-item>
    <a routerLink="/resource-management">resource management</a>
</button>
</mat-menu> */
