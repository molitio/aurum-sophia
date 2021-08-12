import { createContext } from 'react';
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
        molitioId: { molitioTag: `app_aurum_shopia` },
        featureContext: siteEnabledFeaturesCollection,
        componentContext: siteFeatureComponents,
        errorContext: siteErrorCollection,
        iconContext: siteIconCollection,
        themeContext: siteThemeCollection,
        contentContext: contentData,
    };
};

export const getContext = (): AppContext => {
    return buildContext();
};

export const SiteContext = createContext<AppContext>(getContext());
