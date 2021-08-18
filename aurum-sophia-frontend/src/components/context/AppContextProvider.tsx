import React, { useEffect, createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';
import { ISiteContext } from './interface/AppContext';
import { TSiteFeature } from '../common/type/TSiteFeature';
import { sitePageContentCollection as getSiteContentCollection } from '../../services/siteContentService';
import { getSiteFeatureCollection } from '../../services/siteFeaturesService';
import { getSiteFeatureComponents } from '../../services/siteComponentService';
import { getSiteErrorCollection } from '../../services/siteErrorsService';
import { getFeatureIconCollection, getSiteIconCollection } from '../../services/siteIconService';
import { getSiteThemeCollection } from '../../services/siteThemeService';
import { AppContext } from './interface/AppContext';

export const AppContextProvider = ({ children }: any): JSX.Element => {
    console.log('app context provider rendering');
    const defaultTheme = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

    const featureCollection = useMemo(() => {
        const features = getSiteFeatureCollection();
        return features;
    }, []);

    const contentCollection = useMemo(() => {
        const content = getSiteContentCollection();
        return content;
    }, []);

    const buildAppContext: ISiteContext = {
        molitioId: { molitioTag: 'app_aurum_shopia' },
        defaultIcon: { fontIcon: 'report-problem' },
        featureCollection: featureCollection,
        componentCollection: getSiteFeatureComponents(),
        errorCollection: getSiteErrorCollection(),
        siteIconCollection: getSiteIconCollection(),
        featureIconCollection: getFeatureIconCollection(),
        contentCollection: contentCollection,
        themeCollection: getSiteThemeCollection(),
        getPageContentByMolitioTag: (tag: string) => {
            return contentCollection?.get({ molitioTag: tag }) || { title: tag };
        },
        setSelectedTheme: setSelectedTheme,
        activeTheme: selectedTheme,
    };

    return (
        <>
            <AppContext.Provider value={buildAppContext}>
                <ThemeProvider theme={buildAppContext.activeTheme ?? defaultTheme}>{children}</ThemeProvider>
            </AppContext.Provider>
        </>
    );
};
