import React, { useState } from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NavigationSidePanel from './NavigationSidePanel';
import NavigationProps from './interface/NavigationProps';
import TitleComponent from '../common/TitleComponent';
import { Button, Icon } from '@material-ui/core';
import siteIconService from '../../services/siteIconService';

function NavigationComponent({ themeCollection, setSelectedTheme }: NavigationProps): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
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

    const themeButtons = (): JSX.Element => {
        return (
            <div className={componentStyle.themeIcons}>
                <Button onClick={() => setSelectedTheme(themeCollection.cloudsSiteTheme)}>
                    <Icon>{siteIconService.cloudQueue.fontIcon}</Icon>
                </Button>
                <Button onClick={() => setSelectedTheme(themeCollection.waterSiteTheme)}>
                    <Icon>{siteIconService.water.fontIcon}</Icon>
                </Button>
                <Button onClick={() => setSelectedTheme(themeCollection.sunSiteTheme)}>
                    <Icon>{siteIconService.wbSunny.fontIcon}</Icon>
                </Button>
            </div>
        );
    };

    return (
        <>
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
                                <Icon>{siteIconService.menu.fontIcon}</Icon>
                            </IconButton>
                        </div>
                        {!navigationState.sidePanel && <TitleComponent />}
                        {!navigationState.sidePanel && themeButtons()}
                    </Toolbar>
                    <NavigationSidePanel navigationState={navigationState} toggle={toggleSidePanel} />
                </AppBar>
            </div>
        </>
    );
}

export default NavigationComponent;
