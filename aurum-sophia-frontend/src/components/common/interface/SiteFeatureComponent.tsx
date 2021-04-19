import { SiteIcon } from './SiteIcon';
import { SiteFeature } from './SiteFeature';

export interface SiteFeatureComponent extends SiteFeature {
    id: string;
    name: string;
    displayName: string;
    isEnabled: boolean;
    isNavOption: boolean;
    path: string;
    component: () => JSX.Element;
    icon: SiteIcon | undefined;
}
