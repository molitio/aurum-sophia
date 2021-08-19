import { Dispatch, SetStateAction } from 'react';
import { TMolitioId } from '../../common/type/TMolitioId';
import { Theme } from '@material-ui/core';
import { TSiteFeature } from '../../common/type/TSiteFeature';
import { TPageContent } from '../../common/type/TPageContent';
import { TSiteError } from '../../common/type/TSiteError';
import { TSiteIcon } from '../../common/type/TSiteIcon';

export type TAppContext = {
    contentCollection: Map<string, TPageContent>;
    featureCollection: Map<string, TSiteFeature>;
    componentCollection: Map<string, (componentParameter: TPageContent) => JSX.Element>;
    errorCollection: Map<string, TSiteError>;
    siteIconCollection: Map<string, TSiteIcon>;
    featureIconCollection: Map<string, TSiteIcon>;
    themeCollection: Map<string, Theme>;
};

export interface IThemeContext {
    selectedTheme: Theme;
    setSelectedTheme: Dispatch<SetStateAction<Theme>>;
}

export interface ISiteContext extends TAppContext, IThemeContext {
    molitioId: TMolitioId;
}
