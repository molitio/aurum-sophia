import { AppContext } from '../components/common/interface/AppContext';
import { siteFeatureComponents } from './siteComponentService';
import { sitePageContentCollection } from './siteContentService';
import { siteErrorCollection } from './siteErrorsService';
import { siteEnabledFeaturesCollection } from './siteFeaturesService';
import { siteIconCollection } from './siteIconService';
import { siteThemeCollection } from './siteThemeService';

const buildContext = () => {
    const contentData = sitePageContentCollection();

    return {
        contextData: {
            molitioId: { molitioTag: `app_aurum_shopia` },
            features: siteEnabledFeaturesCollection,
            components: siteFeatureComponents,
            errors: siteErrorCollection,
            icons: siteIconCollection,
            themes: siteThemeCollection,
            content: contentData,
        },
    };
};

export const getContext = (): AppContext => {
    return buildContext();
};
