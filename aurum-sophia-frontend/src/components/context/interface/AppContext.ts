import { TMolitioId } from '../../common/type/TMolitioId';
import { Theme } from '@material-ui/core';
import { TSiteFeature } from '../../common/type/TSiteFeature';
import { TPageContent } from '../../common/type/TPageContent';
import { TSiteError } from '../../common/type/TSiteError';
import { TSiteIcon } from '../../common/type/TSiteIcon';

export interface IAppContext extends TAppContext, IThemeContext, IContentCollection {
    molitioId: TMolitioId;
    themeContext: IThemeContext;
}

export type TAppContext = {
    featureCollection: Map<string, TSiteFeature>;
    componentCollection: Map<string, (componentParameter: TPageContent) => JSX.Element>;
    errorCollection: Map<string, TSiteError>;
    siteIconContext: Map<string, TSiteIcon>;
    featureIconCollection: Map<string, TSiteIcon>;
    contentCollection: Map<TMolitioId, TPageContent>;
};

export interface IThemeContext {
    selectTheme: (themeName: string) => void;
    activeTheme: Theme;
    themeCollection: Map<string, Theme>;
}

export interface IContentCollection {
    getPageContentByMolitioTag: (tag: string) => TPageContent;
}
