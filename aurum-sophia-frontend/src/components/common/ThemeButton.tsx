import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { AppContext, SiteDefaultIcon } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { ThemeButtonProps } from './interface/ThemeButtonProps';

export const ThemeButton = ({ themeName }: ThemeButtonProps): JSX.Element => {
    const context = React.useContext(AppContext);

    const theme = context.selectedTheme;

    const correspondingTheme = context.themeCollection?.get(themeName);

    const componentStyle = createSiteStyle({
        themeButton: {
            /* ...theme.devOutline, */
        },
    });
    console.log(`themeName: ${themeName}`);

    return (
        <>
            <Button
                className={componentStyle.themeButton}
                onClick={() => {
                    context.setSelectedTheme(correspondingTheme || theme);
                }}
            >
                <Icon>{correspondingTheme?.themeIcon.fontIcon || SiteDefaultIcon.fontIcon}</Icon>
            </Button>
        </>
    );
};
