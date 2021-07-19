import { FeatureCollection } from './collection/FeatureCollection';
import { ErrorCollection } from './collection/ErrorCollection';
import { MolitioId } from './MolitioId';
import { IconCollection } from './collection/IconCollection';
import { ThemeCollection } from './collection/ThemeCollection';

export interface AppContext {
    contextData: {
        molitioId: MolitioId;
        features: FeatureCollection;
        errors: ErrorCollection;
        icons: IconCollection;
        themes: ThemeCollection;
    };
}
