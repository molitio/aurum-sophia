import React, { useEffect, useState } from 'react';
import { List, ListItem, Button, Icon, Divider, createStyles, makeStyles, Theme, Drawer } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import SiteFeature from '../../common/SiteFeature';
import getSiteFeatures from '../../services/siteFeaturesService';
import NavigationSidePanelProps from './NavigationSidePanelProps';
import TitleComponent from '../TitleComponent';

function NavigationSidePanel({ navigationState, toggle }: NavigationSidePanelProps): JSX.Element {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const [selectedAnchor, setSelectedAnchor] = useState<Anchor>('left');

    const [siteFeatures, setSiteFeatures] = useState<SiteFeature[]>([]);

    useEffect(() => {
        setSiteFeatures(getSiteFeatures);
        setSelectedAnchor('left');
    }, []);

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                zIndex: 100,
            },
            navLinkButton: {
                color: theme.palette.text.primary,
                width: '100%',
                height: '100%',
                justifyContent: 'left',
                marginLeft: 5,
                marginRight: 5,
            },
            navListItem: {
                margin: 0,
                padding: 0,
                '& :hover': {
                    background: `linear-gradient(138deg, ${theme.palette.primary.main} 20%, ${theme.palette.background.default} 80%)`,
                    '& a, span': {
                        background: 'rgba(0,0,0,0)',
                    },
                },
            },
            navList: {
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                [theme.breakpoints.up('xs')]: {
                    /* width: '100vw', */
                },
            },
            drawer: {
                /*  [theme.breakpoints.up('xs')]: {
                    anchor: setSelectedAnchor('top'),
                }, */
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <>
            <div className={componentStyle.root}>
                <Drawer
                    className={componentStyle.drawer}
                    anchor={selectedAnchor}
                    open={navigationState.sidePanel}
                    onClose={toggle}
                >
                    <div role="presentation" onClick={toggle} onKeyDown={toggle}>
                        <List className={componentStyle.navList}>
                            <TitleComponent />
                            {siteFeatures
                                .filter(({ isNavOption }) => isNavOption)
                                .map((feature) => (
                                    <ListItem button key={feature.id} className={componentStyle.navListItem}>
                                        <Button
                                            className={componentStyle.navLinkButton}
                                            component={RouterLink}
                                            to={feature.path}
                                            startIcon={<Icon>{feature.icon}</Icon>}
                                        >
                                            {feature.displayName}
                                        </Button>
                                    </ListItem>
                                ))}
                        </List>
                        <Divider />
                    </div>
                </Drawer>
            </div>
        </>
    );
}

export default NavigationSidePanel;
