import React, { useEffect, useState } from 'react';
import { Divider, createStyles, makeStyles, Drawer, useTheme, Button, Icon, List, ListItem } from '@material-ui/core';
import NavigationSidePanelProps from './interface/NavigationSidePanelProps';
import { NavigationItemComponent } from './NavigationItemComponent';
import { TitleComponent } from '../common/TitleComponent';
import { siteEnabledFeaturesCollection } from '../../services/siteFeaturesService';
import { SiteFeature } from '../common/interface/SiteFeature';

export function NavigationSideComponent({ navigationState, toggle }: NavigationSidePanelProps): JSX.Element {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const [selectedAnchor, setSelectedAnchor] = useState<Anchor>('left');

    useEffect(() => {
        setSelectedAnchor('left');
    }, []);

    const [featureCollection, setFeatureCollection] = useState<SiteFeature[]>([]);

    useEffect(() => {
        const features: SiteFeature[] = [];
        for (const feature of siteEnabledFeaturesCollection.features.values()) {
            features.push(feature);
        }

        setFeatureCollection(features);
    }, []);

    const theme = useTheme();

    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
            },
            drawer: {
                /*  [theme.breakpoints.up('xs')]: {
                    anchor: setSelectedAnchor('top'),
                }, */
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
                            {featureCollection
                                .filter((isNavOption) => isNavOption.isNavOption)
                                .map((feature) => (
                                    <NavigationItemComponent key={feature.id} siteFeature={feature} />
                                ))}
                        </List>
                        <Divider />
                    </div>
                </Drawer>
            </div>
        </>
    );
}
