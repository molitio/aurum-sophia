import React, { Props, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
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
import getSiteFeatures from '../services/featureToggle';
import SiteFeature from '../common/SiteFeature';

function Navigation(): JSX.Element {
    const theme = useTheme();

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                background: theme.palette.primary.main,
                flexGrow: 1,
            },
            menuButton: {
                marginRight: 2,
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
            drawer: {
                backgroundColor: theme.palette.primary.main,
                height: '100vh',
            },
        }),
    );

    const [siteFeatures, setSiteFeatures] = useState<SiteFeature[]>([]);

    useEffect(() => {
        setSiteFeatures(getSiteFeatures);
    }, []);

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
            className={classes.drawer}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {siteFeatures.map((feature) => (
                    <ListItem button key={feature.id} color="primary">
                        <Link color="primary" to={feature.path}>
                            <ListItemIcon>{feature.icon}</ListItemIcon>
                            <ListItemText primary={feature.displayName} />
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
                <AppBar position="static" color="primary">
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
