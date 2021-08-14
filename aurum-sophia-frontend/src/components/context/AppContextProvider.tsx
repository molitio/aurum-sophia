import React, { useEffect, createContext, useContext, useState } from 'react';
import {} from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';
import { ISiteContext, SiteContextDefaults, TAppContext } from './interface/AppContext';
import { sitePageContentCollection as getSiteContentCollection } from '../../services/siteContentService';
import { getSiteFeatureCollection } from '../../services/siteFeaturesService';
import { getSiteFeatureComponents } from '../../services/siteComponentService';
import { getSiteErrorCollection } from '../../services/siteErrorsService';
import { getFeatureIconCollection, getSiteIconCollection } from '../../services/siteIconService';
import { getSiteThemeCollection } from '../../services/siteThemeService';

const AppContext = createContext<ISiteContext>(SiteContextDefaults);

const SiteContextStaticValues: TAppContext = {
    featureCollection: getSiteFeatureCollection(),
    componentCollection: getSiteFeatureComponents(),
    errorCollection: getSiteErrorCollection(),
    siteIconCollection: getSiteIconCollection(),
    featureIconCollection: getFeatureIconCollection(),
    contentCollection: getSiteContentCollection(),
    themeCollection: getSiteThemeCollection(),
};

export const AppContextProvider = ({ children }: any): JSX.Element => {
    const defaultTheme = useTheme();
    const activeAppContext = useContext(AppContext);

    const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

    useEffect(() => {
        setSelectedTheme(activeAppContext.themeCollection?.get('sunSiteTheme') || defaultTheme);
        activeAppContext.activeTheme = selectedTheme;
    }, [selectedTheme, defaultTheme, activeAppContext]);

    activeAppContext.setSelectedTheme = setSelectedTheme;

    Object.assign(activeAppContext, SiteContextStaticValues);

    activeAppContext.getPageContentByMolitioTag = (tag: string) => {
        return activeAppContext.contentCollection?.get({ molitioTag: tag }) || { title: tag };
    };

    return (
        <>
            <AppContext.Provider value={activeAppContext}>
                <ThemeProvider theme={activeAppContext.activeTheme ?? defaultTheme}>{children}</ThemeProvider>
            </AppContext.Provider>
        </>
    );
};

export const useAppContext = (): ISiteContext => {
    return useContext(AppContext);
};
