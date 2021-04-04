import { createMuiTheme } from '@material-ui/core';

const siteThemeCollection = () => {
    return {
        defaultSiteTheme: createMuiTheme({
            palette: {
                primary: {
                    main: '#ffff99',
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
