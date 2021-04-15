import { siteIconCollection, featureIconCollection } from '../../../services/siteIconService';
import { SiteIcon } from './SiteIcon';
import SiteFeature from './SiteFeature';

export class SiteFeatureComponent implements SiteFeature {
    id: string;
    name: string;
    displayName: string;
    isEnabled: boolean;
    isNavOption: boolean;
    path: string;

    constructor(id: string, name: string, displayName: string, isEnabled: boolean, isNavOption: boolean, path: string) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.isEnabled = isEnabled;
        this.isNavOption = isNavOption;
        this.path = path;
    }

    icon: SiteIcon | undefined = Object.values(featureIconCollection).find(([key, value]) => {
        return key === this.name ? value : undefined;
    });

    component: JSX.Element | undefined;
}
