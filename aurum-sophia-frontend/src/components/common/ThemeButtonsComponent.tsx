import React from 'react';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { ThemeButton } from './ThemeButton';

export const ThemeButtonsComponent = (): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        themeIcons: {
            display: 'flex',
            '& span': {
                color: theme.palette.text.primary,
            },
        },
    });

    return (
        <>
            <div className={componentStyle.themeIcons}>
                {Array.from([...context.themeCollection.keys()]).map((theme) => (
                    <ThemeButton key={theme} themeName={theme} />
                ))}
            </div>
        </>
    );
};
