import React, { useEffect, createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';
import { ISiteContext, SiteContextDefaults } from './interface/AppContext';
import { TSiteFeature } from '../common/type/TSiteFeature';
import { sitePageContentCollection as getSiteContentCollection } from '../../services/siteContentService';
import { getSiteFeatureCollection } from '../../services/siteFeaturesService';
import { getSiteFeatureComponents } from '../../services/siteComponentService';
import { getSiteErrorCollection } from '../../services/siteErrorsService';
import { getFeatureIconCollection, getSiteIconCollection } from '../../services/siteIconService';
import { getSiteThemeCollection } from '../../services/siteThemeService';
import { AppContext } from './interface/AppContext';
import { TPageContent } from '../common/type/TPageContent';
import { TMolitioId } from '../common/type/TMolitioId';

export const AppContextProvider = ({ children }: any): JSX.Element => {
    console.log('app context provider rendering');
    const defaultTheme = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(defaultTheme);
    const [contentCollection, setContentCollection] = useState<Map<TMolitioId, TPageContent>>(
        new Map<TMolitioId, TPageContent>(),
    );

    const [appContext, setAppContext] = useState(SiteContextDefaults);

    useEffect(() => {
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
            getPageContentByMolitioTag: (tag: string): TPageContent | undefined => {
                //console.log(`getPageContentByMolitioTag: ${JSON.stringify(contentCollection.entries().next().value)}`);
                const pageContent = contentCollection?.get({ molitioTag: tag });
                console.log(`pageContent: ${pageContent}`);
                return pageContent;
            },
            setSelectedTheme: setSelectedTheme,
            activeTheme: selectedTheme,
        };

        setAppContext(buildAppContext);
    }, [contentCollection]);

    const featureCollection = useMemo(() => {
        const features = getSiteFeatureCollection();
        return features;
    }, []);

    useEffect(() => {
        const getData = async () => {
            const data = await getSiteContentCollection();

            setContentCollection(data);
        };
        getData();
    }, []);

    return (
        <>
            <AppContext.Provider value={appContext}>
                <ThemeProvider theme={appContext.activeTheme ?? defaultTheme}>{children}</ThemeProvider>
            </AppContext.Provider>
        </>
    );
};
