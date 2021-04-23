import { createMuiTheme, Theme } from '@material-ui/core';
import { amber, blue, blueGrey, cyan, grey, orange, red } from '@material-ui/core/colors';
import { SiteThemeCollection } from '../components/common/interface/collection/SiteThemeCollection';
import { siteIconCollection } from './siteIconService';
import sunThemeBackground from '../images/sunThemeBackground.jpg';
import cloudsThemeBackground from '../images/cloudsThemeBackground.jpg';
import waterThemeBackground from '../images/waterThemeBackground.jpg';

declare module '@material-ui/core/' {
    interface Theme {
        hooverActionOn?: {
            boxShadow: string;
        };
        hooverActionOff?: {
            boxShadow: string;
        };
        themeBackgroundImage: {
            imageUrl: string;
            opacity: number;
        };
        themeIcon: {
            fontIcon: string;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        hooverAction?: {
            boxShadow: string;
        };
        nonHovered?: {
            boxShadow: string;
        };
        themeBackgroundImage: {
            imageUrl: string;
            opacity: number;
        };
        themeIcon: {
            fontIcon: string;
        };
    }
}

const hooverActionEffect =
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)';

export const siteThemeCollection: SiteThemeCollection = {
    themes: new Map<string, Theme>([
        [
            'sunSiteTheme',
            createMuiTheme({
                palette: {
                    primary: {
                        main: orange[500],
                    },
                    secondary: {
                        main: amber[100],
                    },
                    error: {
                        main: red[500],
                        light: red[300],
                    },
                    text: {
                        primary: grey[50],
                    },
                    background: {
                        paper: amber[100],
                        default: orange[200],
                    },
                },
                hooverAction: {
                    boxShadow: hooverActionEffect,
                },
                nonHovered: {
                    boxShadow: 'none',
                },
                themeBackgroundImage: {
                    imageUrl: sunThemeBackground,
                    opacity: 0.5,
                },
                themeIcon: {
                    fontIcon: siteIconCollection.icons.has('wbSunny')
                        ? siteIconCollection.icons.get('wbSunny')!.fontIcon
                        : '',
                },
            }),
        ],
        [
            'cloudsSiteTheme',
            createMuiTheme({
                palette: {
                    primary: {
                        main: cyan[300],
                    },
                    secondary: {
                        main: blue[50],
                    },
                    text: {
                        primary: blueGrey[50],
                    },
                    error: {
                        main: red[300],
                        light: red[200],
                    },
                    background: {
                        paper: blue[50],
                        default: cyan[200],
                    },
                },
                hooverAction: {
                    boxShadow: hooverActionEffect,
                },
                nonHovered: {
                    boxShadow: 'none',
                },
                themeBackgroundImage: {
                    imageUrl: cloudsThemeBackground,
                    opacity: 0.3,
                },
                themeIcon: {
                    fontIcon: siteIconCollection.icons.has('cloudQueue')
                        ? siteIconCollection.icons.get('cloudQueue')!.fontIcon
                        : '',
                },
            }),
        ],
        [
            'waterSiteTheme',
            createMuiTheme({
                palette: {
                    primary: {
                        main: cyan[600],
                    },
                    secondary: {
                        main: blue[100],
                    },
                    text: {
                        primary: blueGrey[700],
                    },
                    error: {
                        main: red[500],
                        light: red[300],
                    },
                    background: {
                        paper: blue[50],
                        default: cyan[300],
                    },
                },
                hooverAction: {
                    boxShadow: hooverActionEffect,
                },
                nonHovered: {
                    boxShadow: 'none',
                },
                themeBackgroundImage: {
                    imageUrl: waterThemeBackground,
                    opacity: 0.8,
                },
                themeIcon: {
                    fontIcon: siteIconCollection.icons.has('water')
                        ? siteIconCollection.icons.get('water')!.fontIcon
                        : '',
                },
            }),
        ],
    ]),
};
