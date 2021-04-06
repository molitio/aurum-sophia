import React, { useEffect, useState } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
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
import getSiteFeatures from '../services/featureToggle';
import SiteFeature from '../common/SiteFeature';
import Icon from '@material-ui/core/Icon';

function Navigation(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
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
            list: {
                width: 250,
            },
            fullList: {
                width: 'auto',
            },
            drawer: {
                backgroundColor: theme.palette.background.default,
                height: '100vh',
            },
        }),
    );

    const pageStyle = useStyles();

    const [siteFeatures, setSiteFeatures] = useState<SiteFeature[]>([]);

    useEffect(() => {
        setSiteFeatures(getSiteFeatures);
    }, []);

    const [state, setState] = useState({
        left: false,
    });

    const navigationList = (anchor: 'left') => (
        <div
            className={pageStyle.drawer}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {siteFeatures.map((feature) => (
                    <div key={feature.id}>
                        {feature.isNavOption && (
                            <ListItem button key={feature.id}>
                                <Button
                                    className={pageStyle.menuButton}
                                    component={RouterLink}
                                    to={feature.path}
                                    startIcon={<Icon>{feature.icon}</Icon>}
                                >
                                    {feature.displayName}
                                </Button>
                            </ListItem>
                        )}
                    </div>
                ))}
            </List>
            <Divider />
        </div>
    );

    const toggleDrawer = (anchor: 'left', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <>
            <div className={pageStyle.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={pageStyle.menuButton}
                            color="secondary"
                            aria-label="menu"
                            onClick={toggleDrawer('left', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" className={pageStyle.title}>
                            <RouterLink to="/">Aurum Sophia</RouterLink>
                        </Typography>
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
