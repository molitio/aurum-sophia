import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme, Theme, ThemeProvider, useTheme } from '@material-ui/core';
import { siteFeatureComponents } from '../../services/siteComponentService';
import { sitePageContentCollection } from '../../services/siteContentService';
import { siteErrorCollection } from '../../services/siteErrorsService';
import { getSiteFeatureCollection } from '../../services/siteFeaturesService';
import { siteIconCollection } from '../../services/siteIconService';
import { siteThemeCollection } from '../../services/siteThemeService';
import { TAppContext } from './interface/AppContext';

const ActiveAppContext: React.Context<TAppContext> = createContext({
    molitioId: { molitioTag: `app_aurum_shopia` },
    featureContext: getSiteFeatureCollection(),
    componentContext: siteFeatureComponents,
    errorContext: siteErrorCollection,
    iconContext: siteIconCollection,
    contentContext: sitePageContentCollection(),
    selectTheme: selectTheme,
    activeTheme: selectedTheme,
});

export function AppContextProvider({ children }: any): JSX.Element {
    const defaultTheme = useTheme();

    const AppContext: React.Context<TAppContext> = useContext(ActiveAppContext);

    return (
        <>
            <AppContext.Provider value={ActiveAppContext}>
                <ThemeProvider theme={AppContext.activeTheme ?? defaultTheme}>{children}</ThemeProvider>
            </AppContext.Provider>
        </>
    );
}

export const useAppContextProvider = () => {
    const defaultTheme = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

    const selectTheme = (themeName: string) => {
        setSelectedTheme(siteThemeCollection.get(themeName) ?? defaultTheme);
    };

    const contentData = sitePageContentCollection();

    const AppGlobalContext = createContext(contextData);

    return AppGlobalContext;
};
