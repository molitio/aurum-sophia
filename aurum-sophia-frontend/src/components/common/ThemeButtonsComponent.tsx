import React from 'react';
import { useTheme, Button, Icon, createStyles, makeStyles } from '@material-ui/core';
import { siteIconCollection } from '../../services/siteIconService';
import { useAppContext } from '../context/AppContextBuilder';

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

    const context = useAppContext();

    return (
        <>
            <div className={componentStyle.themeIcons}>
                <Button
                    onClick={() => {
                        console.log(`clicked: ${context.selectedTheme}`);
                        context.selectedTheme = 'cloudsSiteTheme';
                        console.log(`after click: ${context.selectedTheme}`);
                    }}
                >
                    <Icon>
                        {siteIconCollection.icons.get('cloudQueue')?.fontIcon ||
                            siteIconCollection.defaultIcon.fontIcon}
                    </Icon>
                </Button>
                <Button onClick={() => (context.selectedTheme = 'waterSiteTheme')}>
                    <Icon>
                        {siteIconCollection.icons.get('water')?.fontIcon || siteIconCollection.defaultIcon.fontIcon}
                    </Icon>
                </Button>
                <Button onClick={() => (context.selectedTheme = 'sunSiteTheme')}>
                    <Icon>
                        {siteIconCollection.icons.get('wbSunny')?.fontIcon || siteIconCollection.defaultIcon.fontIcon}
                    </Icon>
                </Button>
            </div>
        </>
    );
}
