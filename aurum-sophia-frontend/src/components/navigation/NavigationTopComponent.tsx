import React, { useState } from 'react';
import { Collapse, createStyles, Fade, makeStyles, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { NavigationSideComponent } from './NavigationSideComponent';
import { TitleComponent } from '../common/TitleComponent';
import { Icon } from '@material-ui/core';
import { siteIconCollection } from '../../services/siteIconService';
import { useScrollTrigger } from '@material-ui/core';
import { NavigationListComponent } from './NavigationListComponent';

export function NavigationTopComponent(): JSX.Element {
    const theme = useTheme();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });

    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
                position: 'sticky',
                top: 0,
            },
            appBar: {
                color: theme.palette.text.primary,
                opacity: 0.8,
                ...theme.themeGradient,
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
            titleToolBar: {
                top: 0,
                position: 'sticky',
            },
            title: {
                marginLeft: trigger ? '0px' : '32px',
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

    return (
        <>
            <div className={componentStyle.root}>
                <AppBar className={componentStyle.appBar} position="static">
                    <div>
                        <NavigationSideComponent navigationState={navigationState} toggle={toggleSidePanel} />
                        <Collapse appear={true} in={!trigger} mountOnEnter unmountOnExit>
                            <Toolbar variant="dense"></Toolbar>
                        </Collapse>
                    </div>
                    <div className={componentStyle.titleToolBar}>
                        <Toolbar variant="dense">
                            {trigger && (
                                <div className={componentStyle.menuButtonContainer}>
                                    <IconButton
                                        edge="start"
                                        className={componentStyle.menuButton}
                                        aria-label="menu"
                                        onClick={toggleSidePanel}
                                    >
                                        <Icon>
                                            {siteIconCollection.icons.get('menu')?.fontIcon ||
                                                siteIconCollection.defaultIcon.fontIcon}
                                        </Icon>
                                    </IconButton>
                                </div>
                            )}
                            {!navigationState.sidePanel && (
                                <div className={componentStyle.title}>
                                    <TitleComponent horizontal={true} />
                                </div>
                            )}
                        </Toolbar>
                    </div>

                    {!trigger && (
                        <Toolbar variant="dense">
                            <div className={componentStyle.menuButtonContainer}>
                                <IconButton
                                    edge="start"
                                    className={componentStyle.menuButton}
                                    aria-label="menu"
                                    onClick={toggleSidePanel}
                                >
                                    <Icon>
                                        {siteIconCollection.icons.get('menu')?.fontIcon ||
                                            siteIconCollection.defaultIcon.fontIcon}
                                    </Icon>
                                </IconButton>
                            </div>
                            {!navigationState.sidePanel && (
                                <NavigationListComponent horizontal={true} displayIcons={false} />
                            )}
                        </Toolbar>
                    )}
                </AppBar>
            </div>
        </>
    );
}
