import React, { useContext } from 'react';
import { Button, Icon, createStyles, makeStyles } from '@material-ui/core';
import { AppContext, SiteDefaultIcon } from '../../services/siteDefaultsService';

export function ThemeButtonsComponent(): JSX.Element {
    const context = useContext(AppContext);
    const theme = context.selectedTheme;
    const useStyles = makeStyles(() =>
        createStyles({
            themeIcons: {
                display: 'flex',
                '& span': {
                    color: theme.palette.text.primary,
                },
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <>
            <div className={componentStyle.themeIcons}>
                <Button
                    onClick={() => {
                        console.log(`clicked: ${theme.themeIcon.fontIcon}`);
                        context.setSelectedTheme(context.themeCollection?.get('cloudsSiteTheme') || theme);
                        console.log(`after click: ${theme.themeIcon.fontIcon}`);
                    }}
                >
                    <Icon>{context.siteIconCollection.get('cloudQueue')?.fontIcon || SiteDefaultIcon.fontIcon}</Icon>
                </Button>
                <Button
                    onClick={() => context.setSelectedTheme(context.themeCollection?.get('waterSiteTheme') || theme)}
                >
                    <Icon>{context.siteIconCollection.get('water')?.fontIcon || SiteDefaultIcon.fontIcon}</Icon>
                </Button>
                <Button onClick={() => context.setSelectedTheme(context.themeCollection?.get('sunSiteTheme') || theme)}>
                    <Icon>{context.siteIconCollection.get('wbSunny')?.fontIcon || SiteDefaultIcon.fontIcon}</Icon>
                </Button>
            </div>
        </>
    );
}
