import { Theme } from '@material-ui/core';

class SiteThemeCollection {
    defaultSiteTheme: Theme;
    alternativeSiteTheme: Theme;

    constructor(defaultSiteTheme: Theme, alternativeSiteTheme: Theme) {
        this.defaultSiteTheme = defaultSiteTheme;
        this.alternativeSiteTheme = alternativeSiteTheme;
    }
}

export default SiteThemeCollection;
