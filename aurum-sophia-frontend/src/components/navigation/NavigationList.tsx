import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, Button, Icon, createStyles, makeStyles, useTheme } from '@material-ui/core';
import TitleComponent from '../common/TitleComponent';
import { NavigationListProps } from './interface/NavigationListProps';
import { SiteFeature } from '../common/interface/SiteFeature';

export function NavigationList({ siteFeatures }: NavigationListProps): JSX.Element {
    const theme = useTheme();

    const useStyles = makeStyles(() =>
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
        }),
    );

    const [componentFeatures, setComponentFeatures] = useState<Map<string, SiteFeature>>(siteFeatures);

    const componentStyle = useStyles();
    return (
        <>
            <List className={componentStyle.navList}>
                <TitleComponent />
                {componentFeatures.forEach((feature, key) => {
                    console.log(feature.name);
                    <ListItem button key={feature.id} className={componentStyle.navListItem}>
                        <Button
                            className={componentStyle.navLinkButton}
                            component={RouterLink}
                            to={feature.path}
                            startIcon={<Icon>{feature.icon?.fontIcon}</Icon>}
                        >
                            {feature.displayName}
                        </Button>
                    </ListItem>;
                })}
            </List>
        </>
    );
}
