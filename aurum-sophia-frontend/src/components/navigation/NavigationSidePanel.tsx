import React, { useEffect, useState } from 'react';
import { List, ListItem, Button, Icon, Divider, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import SiteFeature from '../../common/SiteFeature';
import getSiteFeatures from '../../services/siteFeaturesService';

function NavigationSidePanel(): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                zIndex: 100,
            },
            navLinkButton: {
                color: theme.palette.secondary.main,
                width: '100%',
                height: '100%',
                justifyContent: 'left',
                marginLeft: 5,
            },
            navListItem: {
                margin: 0,
                padding: 0,
            },
        }),
    );

    const componentStyle = useStyles();

    const [siteFeatures, setSiteFeatures] = useState<SiteFeature[]>([]);

    useEffect(() => {
        setSiteFeatures(getSiteFeatures);
    }, []);

    return (
        <>
            <div className={componentStyle.root}>
                <List>
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
        </>
    );
}

export default NavigationSidePanel;
