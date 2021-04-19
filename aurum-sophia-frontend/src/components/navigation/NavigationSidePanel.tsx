import React, { useEffect, useState } from 'react';
import { List, ListItem, Button, Icon, Divider, createStyles, makeStyles, Drawer, useTheme } from '@material-ui/core';

import { SiteFeature } from '../common/interface/SiteFeature';
import { getFeatureCollection } from '../../services/siteFeaturesService';
import NavigationSidePanelProps from './interface/NavigationSidePanelProps';
import TitleComponent from '../common/TitleComponent';
import { SiteFeatureComponent } from '../common/interface/SiteFeatureComponent';
import { NavigationList } from './NavigationList';

export function NavigationSidePanel({ navigationState, toggle }: NavigationSidePanelProps): JSX.Element {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const [selectedAnchor, setSelectedAnchor] = useState<Anchor>('left');

    const [siteFeatures, setSiteFeatures] = useState<Map<string, SiteFeature>>(getFeatureCollection.getSiteFeatures);

    useEffect(() => {
        setSelectedAnchor('left');
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
                    <NavigationList siteFeatures={siteFeatures} />
                    <div role="presentation" onClick={toggle} onKeyDown={toggle}>
                        <Divider />
                    </div>
                </Drawer>
            </div>
        </>
    );
}
