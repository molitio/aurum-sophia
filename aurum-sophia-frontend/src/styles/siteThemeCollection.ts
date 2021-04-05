import { createMuiTheme } from '@material-ui/core';
import { amber, orange, red, yellow } from '@material-ui/core/colors';

const siteThemeCollection = () => {
    return {
        defaultSiteTheme: createMuiTheme({
            palette: {
                primary: {
                    main: amber[200],
                },
                secondary: {
                    main: amber[800],
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
        alternativetSiteTheme: createMuiTheme({
            palette: {
                primary: {
                    main: '#6699ff',
                },
            },
        }),
    };
};

export default siteThemeCollection;
