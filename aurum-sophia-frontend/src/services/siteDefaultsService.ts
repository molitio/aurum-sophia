import React from 'react';
import { createTheme, Theme } from '@material-ui/core';
import { createContext } from 'react';
import { TPageContent } from '../components/common/type/TPageContent';
import { TSiteError } from '../components/common/type/TSiteError';
import { TSiteFeature } from '../components/common/type/TSiteFeature';
import { TSiteIcon } from '../components/common/type/TSiteIcon';
import { ISiteContext } from '../components/context/interface/AppContext';
import { orange, amber, red, indigo, blue, green } from '@material-ui/core/colors';
import sunThemeBackground from '../images/sunThemeBackground.jpg';
import { getSiteIconCollection } from './siteIconService';

const siteIconCollection = getSiteIconCollection();

export const SiteMolitioId = { molitioTag: `app_aurum_shopia` };

export const SiteDefaultIcon: TSiteIcon = { fontIcon: 'report_problem' };

export const SiteDefaultTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: green[100],
            light: green[50],
        },
        error: {
            main: red[500],
            light: red[300],
        },
        text: {
            /* primary: '#333399', */
            primary: indigo[800],
            secondary: indigo[600],
        },
        background: {
            paper: amber[100],
            default: orange[200],
        },
    },
    hooverAction: {
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
    nonHovered: {
        boxShadow: 'none',
    },
    themeBackgroundImage: {
        imageUrl: sunThemeBackground,
        opacity: 0.5,
    },
    themeGradientBackground: {
        background: `linear-gradient(138deg, ${blue[50]} 10%, ${green[500]} 100%)`,
    },
    themeIcon: {
        fontIcon: siteIconCollection.get('wbSunny')?.fontIcon || SiteDefaultIcon.fontIcon,
    },
    devOutline: {
        border: '1px',
        borderStyle: 'solid',
        borderColor: red[900],
    },
});

export const SiteContextDefaults: ISiteContext = {
    molitioId: SiteMolitioId,
    featureCollection: new Map<string, TSiteFeature>(),
    componentCollection: new Map<string, (componentParameter: TPageContent) => JSX.Element>(),
    errorCollection: new Map<string, TSiteError>(),
    siteIconCollection: new Map<string, TSiteIcon>(),
    featureIconCollection: new Map<string, TSiteIcon>(),
    contentCollection: new Map<string, TPageContent>(),
    setSelectedTheme: () => {
        return SiteDefaultTheme;
    },
    selectedTheme: SiteDefaultTheme,
    themeCollection: new Map<string, Theme>(),
};

export const AppContext = createContext<ISiteContext>(SiteContextDefaults);
