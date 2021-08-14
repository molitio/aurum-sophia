import React from 'react';
import { useTheme, Button, Icon, createStyles, makeStyles } from '@material-ui/core';
import { useSiteContextBuilder } from '../context/AppContextProvider';

export function ThemeButtonsComponent(): JSX.Element {
    const theme = useTheme();
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

    const context = useSiteContextBuilder();

    return (
        <>
            <div className={componentStyle.themeIcons}>
                <Button
                    onClick={() => {
                        console.log(`clicked: ${context.activeTheme}`);
                        context.setSelectedTheme ? context.themeCollection?.get('cloudsSiteTheme') : undefined;
                        console.log(`after click: ${context.activeTheme}`);
                    }}
                >
                    <Icon>{context.siteIconCollection.get('cloudQueue')?.fontIcon || context.defaultIcon}</Icon>
                </Button>
                <Button
                    onClick={() =>
                        context.setSelectedTheme ? context.themeCollection?.get('waterSiteTheme') : undefined
                    }
                >
                    <Icon>{context.siteIconCollection.get('water')?.fontIcon || context.defaultIcon}</Icon>
                </Button>
                <Button
                    onClick={() =>
                        context.setSelectedTheme ? context.themeCollection?.get('sunSiteTheme') : undefined
                    }
                >
                    <Icon>{context.siteIconCollection.get('wbSunny')?.fontIcon || context.defaultIcon}</Icon>
                </Button>
            </div>
        </>
    );
}
