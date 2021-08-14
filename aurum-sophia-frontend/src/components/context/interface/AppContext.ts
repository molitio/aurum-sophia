import { TMolitioId } from '../../common/type/TMolitioId';
import { createTheme, Theme } from '@material-ui/core';
import { TSiteFeature } from '../../common/type/TSiteFeature';
import { TPageContent } from '../../common/type/TPageContent';
import { TSiteError } from '../../common/type/TSiteError';
import { TSiteIcon } from '../../common/type/TSiteIcon';
import { Dispatch, SetStateAction } from 'react';

export const SiteContextDefaults: ISiteContext = {
    molitioId: { molitioTag: `app_aurum_shopia` },
    featureCollection: new Map<string, TSiteFeature>(),
    componentCollection: new Map<string, (componentParameter: TPageContent) => JSX.Element>(),
    errorCollection: new Map<string, TSiteError>(),
    siteIconCollection: new Map<string, TSiteIcon>(),
    featureIconCollection: new Map<string, TSiteIcon>(),
    defaultIcon: { fontIcon: 'report_problem' },
    contentCollection: new Map<TMolitioId, TPageContent>(),
    getPageContentByMolitioTag: (tag: string): TPageContent => {
        return { title: tag };
    },
    setSelectedTheme: undefined,
    activeTheme: createTheme(),
    themeCollection: new Map<string, Theme>(),
};

export interface ISiteContext extends TAppContext, IThemeContext, IContentCollection {
    molitioId: TMolitioId;
    defaultIcon: TSiteIcon;
}

export type TAppContext = {
    featureCollection: Map<string, TSiteFeature>;
    componentCollection: Map<string, (componentParameter: TPageContent) => JSX.Element>;
    errorCollection: Map<string, TSiteError>;
    siteIconCollection: Map<string, TSiteIcon>;
    featureIconCollection: Map<string, TSiteIcon>;
};

export interface IThemeContext {
    setSelectedTheme: Dispatch<SetStateAction<Theme>> | undefined;
    activeTheme: Theme;
    themeCollection: Map<string, Theme>;
}

export interface IContentCollection {
    contentCollection: Map<TMolitioId, TPageContent>;
    getPageContentByMolitioTag: (tag: string) => TPageContent;
}
