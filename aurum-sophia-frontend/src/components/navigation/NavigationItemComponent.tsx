import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItem, Button, Icon, createStyles, makeStyles, useTheme } from '@material-ui/core';
import { NavigationItemComponentProps } from './interface/NavigationItemComponentProps';
import { useSiteContextBuilder } from '../context/AppContextProvider';

export function NavigationItemComponent({ siteFeature, displayIcons }: NavigationItemComponentProps): JSX.Element {
    const theme = useTheme();

    const context = useSiteContextBuilder();

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
        }),
    );
    const componentStyle = useStyles();

    return (
        <>
            {siteFeature && (
                <ListItem button key={siteFeature.id} className={componentStyle.navListItem}>
                    <Button
                        className={componentStyle.navLinkButton}
                        component={RouterLink}
                        to={siteFeature.path}
                        startIcon={
                            displayIcons && (
                                <Icon>
                                    {context.featureIconCollection.get(siteFeature.name)?.fontIcon ||
                                        context.defaultIcon.fontIcon}
                                </Icon>
                            )
                        }
                    >
                        {siteFeature.displayName}
                    </Button>
                </ListItem>
            )}
        </>
    );
}
