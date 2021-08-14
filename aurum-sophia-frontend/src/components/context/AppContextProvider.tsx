import React, { useCallback, useEffect, useMemo } from 'react';
import { createContext, useContext, useState } from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';
import { ISiteContext, SiteContextDefaults } from './interface/AppContext';
import { sitePageContentCollection as getSiteContentCollection } from '../../services/siteContentService';
import { getSiteFeatureCollection } from '../../services/siteFeaturesService';
import { getSiteFeatureComponents } from '../../services/siteComponentService';
import { getSiteErrorCollection } from '../../services/siteErrorsService';
import { getFeatureIconCollection, getSiteIconCollection } from '../../services/siteIconService';
import { getSiteThemeCollection } from '../../services/siteThemeService';

const AppContext = createContext<ISiteContext>(SiteContextDefaults);

export const AppContextProvider = ({ children }: any): JSX.Element => {
    const defaultTheme = useTheme();
    const activeAppContext = useSiteContextBuilder();
    activeAppContext.setSelectedTheme ? activeAppContext.themeCollection?.get('sunSiteTheme') : undefined;

    return (
        <>
            <AppContext.Provider value={activeAppContext}>
                <ThemeProvider theme={activeAppContext.activeTheme ?? defaultTheme}>{children}</ThemeProvider>
            </AppContext.Provider>
        </>
    );
};

export const useSiteContextBuilder = (): ISiteContext => {
    const activeAppContext = useContext(AppContext);
    const defaultTheme = useTheme();

    const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

    useEffect(() => {
        activeAppContext.activeTheme = selectedTheme;
    }, [selectedTheme, activeAppContext]);

    const contentCollection = getSiteContentCollection();

    activeAppContext.featureCollection = useMemo(getSiteFeatureCollection, []);
    activeAppContext.componentCollection = useMemo(getSiteFeatureComponents, []);
    activeAppContext.errorCollection = useMemo(getSiteErrorCollection, []);
    activeAppContext.siteIconCollection = useMemo(getSiteIconCollection, []);
    activeAppContext.featureIconCollection = useMemo(getFeatureIconCollection, []);
    activeAppContext.contentCollection = useMemo(() => getSiteContentCollection(), [contentCollection]);
    activeAppContext.themeCollection = useMemo(getSiteThemeCollection, []);
    activeAppContext.getPageContentByMolitioTag = useCallback((tag: string) => {
        return activeAppContext.contentCollection?.get({ molitioTag: tag }) || { title: tag };
    }, []);
    activeAppContext.setSelectedTheme = setSelectedTheme;

    /*
    
    */

    return activeAppContext;
};
