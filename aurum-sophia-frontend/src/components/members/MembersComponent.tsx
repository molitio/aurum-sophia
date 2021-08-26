import React from 'react';
import { MemberCardComponent } from './MemberCardComponent';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { PageTagProps } from '../common/interface/PageTagProps';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { TPageContent } from '../common/type/TPageContent';
import { TMember } from '../common/type/TMember';

export const MembersComponent = ({ pageTag }: PageTagProps): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [membersContent, setMembersContent] = React.useState<TPageContent>(SiteDefaultPageContent);
    const [members, setMembers] = React.useState(new Map<string, TMember>());

    React.useEffect(() => {
        const content = context.contentCollection.get(pageTag) ?? SiteDefaultPageContent;
        setMembersContent(content);
        setMembers(content.componentContent ?? new Map<string, TMember>());
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
            {Array.from([...members]).map((member, i) =>
                i % 2 === 0 ? (
                    <div key={member[0]} className={componentStyle.column}>
                        <MemberCardComponent member={member[1]} />
                    </div>
                ) : (
                    <div key={member[0]} className={componentStyle.column}>
                        <MemberCardComponent member={member[1]} />
                    </div>
                ),
            )}
        </div>
    );
};
