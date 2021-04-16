import { SiteFeature } from "./SiteFeature";
import { SiteFeatureComponent } from "./SiteFeatureComponent";

export interface FeatureCollecion{
    getSiteFeatureComponents: Map<string, SiteFeatureComponent>;
    getSiteFeatures: Map<string, SiteFeature>;
}