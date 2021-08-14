import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { MemberCardComponent } from './MemberCardComponent';
import { useAppContext } from '../context/AppContextProvider';

export function MembersComponent(): JSX.Element {
    const context = useAppContext();
    const theme = context.activeTheme;
    const useStyles = makeStyles(() =>
        createStyles({
            members: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingLeft: '5vw',
                paddingRight: '5vw',
                [theme.breakpoints.down('md')]: {},
                [theme.breakpoints.down('xs')]: {
                    flexDirection: 'column',
                },
            },
            column: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <div className={componentStyle.members}>
            <div className={componentStyle.column}>
                {['foo', 'bar', 'baz', 'rba'].map((v, i) => (
                    <MemberCardComponent key={i} />
                ))}
            </div>
            <div className={componentStyle.column}>
                {['foo', 'bar', 'baz', 'rba'].map((v, i) => (
                    <MemberCardComponent key={i} />
                ))}
            </div>
        </div>
    );
}
