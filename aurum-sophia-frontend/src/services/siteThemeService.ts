import { createMuiTheme } from '@material-ui/core';
import { amber, blue, cyan, orange, red, yellow } from '@material-ui/core/colors';
import SiteThemeCollection from '../common/SiteThemeCollection';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        hooverAction: {
            padding: number;
            border: number;
            borderRadius: number;
            boxShadow: string;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        hooverAction?: {
            padding: number;
            border: number;
            borderRadius: number;
            boxShadow: string;
        };
    }
}

const siteThemeCollection: SiteThemeCollection = {
    defaultSiteTheme: createMuiTheme({
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
            background: {
                paper: amber[100],
                default: yellow[50],
            },
        },
        hooverAction: {
            padding: 5,
            border: 0,
            borderRadius: 5,
            boxShadow:
                '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
        },
    }),
    alternativeSiteTheme: createMuiTheme({
        palette: {
            primary: {
                main: cyan[900],
            },
            secondary: {
                main: blue[300],
            },
            error: {
                main: red[500],
                light: red[300],
            },
            background: {
                paper: blue[100],
                default: blue[50],
            },
        },
    }),
};

export default siteThemeCollection;
