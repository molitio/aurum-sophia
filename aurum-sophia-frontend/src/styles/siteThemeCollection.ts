import { createMuiTheme } from '@material-ui/core';
import { amber, red, yellow } from '@material-ui/core/colors';
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
            },
            background: {
                paper: yellow[50],
                default: yellow[50],
            },
        },
    }),
    createMuiTheme({
        palette: {
            primary: {
                main: '#6699ff',
            },
        },
    }),
);

export default siteThemeCollection;
