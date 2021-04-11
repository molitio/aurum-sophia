import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NavigationSidePanel from './NavigationSidePanel';
import NavigationProps from './NavigationProps';
import TitleComponent from '../TitleComponent';
import { Button, FormControl, Icon, InputLabel, MenuItem, Select } from '@material-ui/core';
import siteIconService from '../../services/siteIconService';
import SiteThemeCollection from '../../common/SiteThemeCollection';

function Navigation({ themeCollection, setSelectedTheme }: NavigationProps): JSX.Element {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                zIndex: 100,
            },
            appBar: {
                color: theme.palette.text.primary,
                background: theme.palette.primary.main,
            },
            menuButton: {
                color: theme.palette.text.primary,
            },
            menuButtonContainer: {
                marginRight: 5,
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

    const [theme, setTheme] = useState('');

    const toggleSidePanel = (): void => {
        setnavigationState({ sidePanel: !navigationState.sidePanel });
    };

    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
        setTheme(event.target.value as string);
    };

    const themeButtons = (): JSX.Element => {
        return (
            <>
                <Button onClick={() => setSelectedTheme(themeCollection.cloudsSiteTheme)}>
                    <Icon>{siteIconService.cloudQueue.fontIcon}</Icon>
                </Button>
                <Button onClick={() => setSelectedTheme(themeCollection.waterSiteTheme)}>
                    <Icon>{siteIconService.water.fontIcon}</Icon>
                </Button>
                <Button onClick={() => setSelectedTheme(themeCollection.sunSiteTheme)}>
                    <Icon>{siteIconService.wbSunny.fontIcon}</Icon>
                </Button>
            </>
        );
    };

    return (
        <>
            <div className={componentStyle.root}>
                <AppBar className={componentStyle.appBar} position="static">
                    <Toolbar>
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

                        {/*             <FormControl variant="filled">
                            <InputLabel id="theme-select-label">{theme}</InputLabel>
                            <Select
                                labelId="theme-select-label"
                                id="theme-select"
                                value={theme}
                                onChange={(selectedTheme) => handleChange}
                            >
                                {Object.entries(themeCollection).map(([key, value]) => {
                                    <MenuItem key={key} value={key}>
                                        t<Icon>{value.themeIcon.fontIcon}</Icon>
                                    </MenuItem>;
                                })}
                            </Select>
                        </FormControl> */}
                    </Toolbar>
                    <NavigationSidePanel navigationState={navigationState} toggle={toggleSidePanel} />
                </AppBar>
            </div>
        </>
    );
}

export default Navigation;
