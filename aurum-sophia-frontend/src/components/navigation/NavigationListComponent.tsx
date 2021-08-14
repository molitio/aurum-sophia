import React from 'react';
import { List, Divider, createStyles, makeStyles, useTheme } from '@material-ui/core';
import { ThemeButtonsComponent } from '../common/ThemeButtonsComponent';
import { TitleComponent } from '../common/TitleComponent';
import { NavigationItemComponent } from './NavigationItemComponent';
import { NavigationListComponentProps } from './interface/NavigationListComponentProps';
import { useSiteContextBuilder } from '../context/AppContextProvider';

export function NavigationListComponent({ horizontal, displayIcons }: NavigationListComponentProps): JSX.Element {
    const context = useSiteContextBuilder();
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            navList: {
                display: 'flex',
                flexDirection: horizontal ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'center',
                [theme.breakpoints.up('xs')]: {
                    /* width: '100vw', */
                },
            },
            title: {},
        }),
    );

    const componentStyle = useStyles();

    return (
        <>
            {!horizontal && <TitleComponent horizontal={horizontal} />}
            <List className={componentStyle.navList}>
                {Array.from(context.featureCollection.values())
                    .filter((isNavOption) => isNavOption.isNavOption)
                    .map((feature) => (
                        <NavigationItemComponent key={feature.id} siteFeature={feature} displayIcons={displayIcons} />
                    ))}
                {!horizontal && <ThemeButtonsComponent />}
            </List>
            <Divider />
        </>
    );
}
