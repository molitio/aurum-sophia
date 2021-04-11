import { Theme } from '@material-ui/core';
import SiteThemeCollection from '../../common/SiteThemeCollection';

interface NavigationProps {
    themeCollection: SiteThemeCollection;
    setSelectedTheme: { (theme: Theme): void };
}

export default NavigationProps;
