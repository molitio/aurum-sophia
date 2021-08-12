import { Theme } from '@material-ui/core';

export interface ThemeCollection {
    selectedTheme?: string;
    themes: Map<string, Theme>;
}
