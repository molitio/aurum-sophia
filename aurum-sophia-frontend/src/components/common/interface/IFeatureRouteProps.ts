import { TSiteFeature } from '../type/TSiteFeature';

export interface IFeatureRouteProps {
    siteFeature: TSiteFeature;
    siteComponent: () => JSX.Element;
}
