import React, { useState } from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { NavigationSideComponent } from './NavigationSideComponent';
import { NavigationTopComponentProps } from './interface/NavigationTopComponentProps';
import { TitleComponent } from '../common/TitleComponent';
import { Button, Icon, Slide } from '@material-ui/core';
import { siteIconCollection } from '../../services/siteIconService';
import { useScrollTrigger } from '@material-ui/core';
import { siteThemeCollection } from '../../services/siteThemeService';

export function NavigationTopComponent({ setSelectedTheme }: NavigationTopComponentProps): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
                position: 'sticky',
                top: 0,
            },
            appBar: {
                color: theme.palette.text.primary,
                background: theme.palette.primary.main,
            },
            themeIcons: {
                '& span': {
                    color: theme.palette.text.primary,
                },
            },
            menuButton: {
                color: theme.palette.text.primary,
            },
            menuButtonContainer: {
                marginRight: 0,
                '& :hover': {
                    ...theme.hooverActionOn,
                    '& span': {
                        ...theme.hooverActionOff,
                    },
                },
            },
        }),
    );

    const componentStyle = useStyles();

    const [navigationState, setnavigationState] = useState({
        sidePanel: false,
    });

    const toggleSidePanel = (): void => {
        setnavigationState({ sidePanel: !navigationState.sidePanel });
    };

    const trigger = useScrollTrigger();

    const themeButtons = (): JSX.Element => {
        return (
            <div className={componentStyle.themeIcons}>
                <Button
                    onClick={() =>
                        setSelectedTheme(
                            siteThemeCollection.themes.has('cloudsSiteTheme')
                                ? siteThemeCollection.themes.get('cloudsSiteTheme')!
                                : theme,
                        )
                    }
                >
                    <Icon>
                        {siteIconCollection.icons.has('cloudQueue') &&
                            siteIconCollection.icons.get('cloudQueue')!.fontIcon}
                    </Icon>
                </Button>
                <Button
                    onClick={() =>
                        setSelectedTheme(
                            siteThemeCollection.themes.has('waterSiteTheme')
                                ? siteThemeCollection.themes.get('waterSiteTheme')!
                                : theme,
                        )
                    }
                >
                    <Icon>
                        {siteIconCollection.icons.has('water') && siteIconCollection.icons.get('water')!.fontIcon}
                    </Icon>
                </Button>
                <Button
                    onClick={() =>
                        setSelectedTheme(
                            siteThemeCollection.themes.has('sunSiteTheme')
                                ? siteThemeCollection.themes.get('sunSiteTheme')!
                                : theme,
                        )
                    }
                >
                    <Icon>
                        {siteIconCollection.icons.has('wbSunny') && siteIconCollection.icons.get('wbSunny')!.fontIcon}
                    </Icon>
                </Button>
            </div>
        );
    };

    return (
        <>
            <Slide appear={true} direction="down" in={!trigger}>
                <div className={componentStyle.root}>
                    <AppBar className={componentStyle.appBar} position="static">
                        <Toolbar variant="dense">
                            <div className={componentStyle.menuButtonContainer}>
                                <IconButton
                                    edge="start"
                                    className={componentStyle.menuButton}
                                    aria-label="menu"
                                    onClick={toggleSidePanel}
                                >
                                    <Icon>
                                        {siteIconCollection.icons.has('menu')
                                            ? siteIconCollection.icons.get('menu')!.fontIcon
                                            : ''}
                                    </Icon>
                                </IconButton>
                            </div>
                            {!navigationState.sidePanel && <TitleComponent />}
                            {!navigationState.sidePanel && themeButtons()}
                        </Toolbar>
                        <NavigationSideComponent navigationState={navigationState} toggle={toggleSidePanel} />
                    </AppBar>
                </div>
            </Slide>
        </>
    );
}
