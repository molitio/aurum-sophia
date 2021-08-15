import React, { useEffect, createContext, useContext, useState, useMemo } from 'react';
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

const configureContext = async () => {
    const activeAppContext = useContext<ISiteContext>(AppContext);
    activeAppContext.featureCollection = await getSiteFeatureCollection();
    activeAppContext.componentCollection = await getSiteFeatureComponents();
    activeAppContext.errorCollection = await getSiteErrorCollection();
    activeAppContext.siteIconCollection = await getSiteIconCollection();
    activeAppContext.featureIconCollection = await getFeatureIconCollection();
    activeAppContext.contentCollection = await getSiteContentCollection();
    activeAppContext.themeCollection = await getSiteThemeCollection();
    activeAppContext.getPageContentByMolitioTag = (tag: string) => {
        return activeAppContext.contentCollection?.get({ molitioTag: tag }) || { title: tag };
    };
};
export const AppContextProvider = ({ children }: any): JSX.Element => {
    console.log('app context provider rendering');
    const defaultTheme = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

    activeAppContext.setSelectedTheme = setSelectedTheme;
    activeAppContext.activeTheme = selectedTheme;

    useEffect(() => {
        configureContext();
        // activeAppContext.setSelectedTheme(activeAppContext.themeCollection?.get('sunSiteTheme') || defaultTheme);
    }, [activeAppContext]);
    //console.log(JSON.stringify(activeAppContext));

    const mergedContext = useContext<ISiteContext>(activeAppContext);

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
