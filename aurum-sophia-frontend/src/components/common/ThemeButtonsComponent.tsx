import React from 'react';
import { useTheme, Button, Icon, createStyles, makeStyles } from '@material-ui/core';
import { useAppContext } from '../context/AppContextProvider';

export function ThemeButtonsComponent(): JSX.Element {
    const context = useAppContext();
    const theme = context.activeTheme;
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
                    <Icon>{context.siteIconCollection.get('cloudQueue')?.fontIcon || context.defaultIcon}</Icon>
                </Button>
                <Button
                    onClick={() => context.setSelectedTheme(context.themeCollection?.get('waterSiteTheme') || theme)}
                >
                    <Icon>{context.siteIconCollection.get('water')?.fontIcon || context.defaultIcon}</Icon>
                </Button>
                <Button onClick={() => context.setSelectedTheme(context.themeCollection?.get('sunSiteTheme') || theme)}>
                    <Icon>{context.siteIconCollection.get('wbSunny')?.fontIcon || context.defaultIcon}</Icon>
                </Button>
            </div>
        </>
    );
}
