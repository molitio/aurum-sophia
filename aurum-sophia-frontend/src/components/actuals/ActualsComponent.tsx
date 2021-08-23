import React from 'react';
import { Typography } from '@material-ui/core';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TPageContent } from '../common/type/TPageContent';

export const ActualsComponent = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [actualsContent, setActualsContent] = React.useState<TPageContent>();

    React.useEffect(() => {
        const content = context.contentCollection.get(pageTag);
        setActualsContent(content);
    }, [context.contentCollection]);

    const componentStyle = createSiteStyle({
        actualsContent: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'left',
        },
        actualsText: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
    });

    return (
        <div className={componentStyle.actualsText}>
            <Typography variant="h4">
                <b>{actualsContent && actualsContent.title}</b>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
                {actualsContent && actualsContent.textContent}
            </Typography>
            <br />

            {actualsContent?.componentContent &&
                Array.from([...actualsContent.componentContent]).map((content) => (
                    <div key={content[0]}>
                        <Typography variant="h6">
                            <b>{content[1].title}</b>
                        </Typography>
                        <br />
                        <Typography variant="body2" component="p">
                            {content[1].textContent}
                        </Typography>

                        <br />
                    </div>
                ))}
        </div>
    );
};
