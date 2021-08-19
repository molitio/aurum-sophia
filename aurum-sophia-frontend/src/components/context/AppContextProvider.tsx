import React, { useEffect, useState, useMemo } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { sitePageContentCollection as getSiteContentCollection } from '../../services/siteContentService';
import { getSiteFeatureCollection } from '../../services/siteFeaturesService';
import { getSiteFeatureComponents } from '../../services/siteComponentService';
import { getSiteErrorCollection } from '../../services/siteErrorsService';
import { getFeatureIconCollection, getSiteIconCollection } from '../../services/siteIconService';
import { getSiteThemeCollection } from '../../services/siteThemeService';
import { TMolitioId } from '../common/type/TMolitioId';
import { TPageContent } from '../common/type/TPageContent';
import { AppContextProviderProps } from './interface/AppContextProviderProps';
import { AppContext, SiteContextDefaults, SiteDefaultTheme, SiteMolitioId } from '../../services/siteDefaultsService';
import { TSiteFeature } from '../common/type/TSiteFeature';

export const AppContextProvider = ({ children }: AppContextProviderProps): JSX.Element => {
    console.log('app context provider rendering');
    const [selectedTheme, setSelectedTheme] = useState(SiteDefaultTheme);
    const [themeCollection, setThemeCollection] = useState(SiteContextDefaults.themeCollection);
    const [featureIconCollection, setFeatureIconCollection] = useState(SiteContextDefaults.featureIconCollection);
    const [siteIconCollection, setSiteIconCollection] = useState(SiteContextDefaults.siteIconCollection);
    const [errorCollection, setErrorCollection] = useState(SiteContextDefaults.errorCollection);
    const [componentCollection, setComponentCollection] = useState(SiteContextDefaults.componentCollection);
    const [featureCollection, setFeatureCollection] = useState(SiteContextDefaults.featureCollection);
    const [contentCollection, setContentCollection] = useState(new Map<string, TPageContent>());
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        loadData();
        async function loadData() {
            try {
                const themes = await getSiteThemeCollection();
                const content = await getSiteContentCollection();
                const siteIcons = await getSiteIconCollection();
                const featureIcons = await getFeatureIconCollection();
                const errors = await getSiteErrorCollection();
                const components = await getSiteFeatureComponents();
                const features = await getSiteFeatureCollection();

                setThemeCollection(themes);
                setSelectedTheme(themeCollection.get('sunSiteTheme') || SiteDefaultTheme);
                setFeatureIconCollection(featureIcons);
                setSiteIconCollection(siteIcons);
                setErrorCollection(errors);
                setComponentCollection(components);
                setFeatureCollection(features);
                setContentCollection(content ? content : new Map<string, TPageContent>());
                console.log(`******* reloaded data *******`);
                setIsContentLoaded(true);
            } catch (error: any) {
                console.log(error.message);
            }
        }
    }, [isContentLoaded]);

    return (
        <>
            <AppContext.Provider
                value={{
                    molitioId: SiteMolitioId,
                    selectedTheme,
                    themeCollection,
                    setSelectedTheme,
                    featureIconCollection,
                    siteIconCollection,
                    errorCollection,
                    componentCollection,
                    featureCollection,
                    contentCollection,
                }}
            >
                <ThemeProvider theme={selectedTheme ? selectedTheme : SiteDefaultTheme}>
                    {/* <ThemeProvider theme={SiteDefaultTheme}>*/}
                    {children}
                </ThemeProvider>
            </AppContext.Provider>
        </>
    );
};
