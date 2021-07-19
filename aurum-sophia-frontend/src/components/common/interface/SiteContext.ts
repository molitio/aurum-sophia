import { ThemeCollection } from './collection/ThemeCollection';
import { FeatureCollection } from '../interface/collection/FeatureCollection';
import { ComponentCollection } from '../interface/collection/ComponentCollection';
import { IconCollection } from '../interface/collection/IconCollection';
import { ErrorCollection } from './collection/ErrorCollection';

export interface SiteContext {
    themeContext: ThemeCollection;
    featureContext: FeatureCollection;
    componentContext: ComponentCollection;
    iconContext: IconCollection;
    errorContext: ErrorCollection;
}
