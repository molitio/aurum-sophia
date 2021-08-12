import { FeatureCollection } from './collection/FeatureCollection';
import { ErrorCollection } from './collection/ErrorCollection';
import { MolitioId } from './MolitioId';
import { IconCollection } from './collection/IconCollection';
import { ThemeCollection } from './collection/ThemeCollection';
import { ComponentCollection } from './collection/ComponentCollection';
import { SitePageContentCollection } from './collection/SitePageContentCollection';

export interface AppContext {
    molitioId: MolitioId;
    featureContext: FeatureCollection;
    componentContext: ComponentCollection;
    errorContext: ErrorCollection;
    iconContext: IconCollection;
    themeContext: ThemeCollection;
    contentContext: SitePageContentCollection;
}
