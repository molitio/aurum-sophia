import { createMuiTheme } from '@material-ui/core';
import { amber, blue, cyan, red, yellow } from '@material-ui/core/colors';
import SiteThemeCollection from '../common/SiteThemeCollection';

const siteThemeCollection: SiteThemeCollection = new SiteThemeCollection(
    createMuiTheme({
        palette: {
            primary: {
                main: amber[200],
            },
            secondary: {
                main: amber[900],
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
    }),
    createMuiTheme({
        palette: {
            primary: {
                main: blue[300],
            },
            secondary: {
                main: cyan[900],
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
);

export default siteThemeCollection;
