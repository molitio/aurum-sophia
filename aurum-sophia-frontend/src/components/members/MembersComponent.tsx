import React from 'react';
import { MemberCardComponent } from './MemberCardComponent';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { PageTagProps } from '../common/interface/PageTagProps';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { TPageContent } from '../common/type/TPageContent';
import { TComponentContent } from '../common/type/TComponentContent';
import { TMember } from '../common/type/TMember';

export const MembersComponent = ({ pageTag }: PageTagProps): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [membersContent, setMembersContent] = React.useState<TPageContent>(SiteDefaultPageContent);
    const [members, setMembers] = React.useState(new Map<string, TMember>());

    React.useEffect(() => {
        const content = context.contentCollection.get(pageTag) ?? SiteDefaultPageContent;
        setMembersContent(content);
    }, [context.contentCollection]);

    const componentStyle = createSiteStyle({
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
    });

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
};
