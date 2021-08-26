import React from 'react';
import { Typography } from '@material-ui/core';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TPageContent } from '../common/type/TPageContent';
import pexelsPixabay462030 from '../../images/pexelsPixabay462030.jpg';
import { TComponentContent } from '../common/type/TComponentContent';

export const AboutComponent = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [aboutContent, setAboutContent] = React.useState<TPageContent>(SiteDefaultPageContent);

    React.useEffect(() => {
        const content = context.contentCollection.get(pageTag) ?? SiteDefaultPageContent;
        setAboutContent(content);
    }, [context.contentCollection]);

    const componentStyle = createSiteStyle({
        contentContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        aboutText: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        aboutImageContainer: {
            marginTop: '15px',
            marginLeft: '20px',
            marginRight: '15px',
            flex: 1,
            borderWidth: 0,
            borderRadius: '10px',
            [theme.breakpoints.down('xs')]: {
                /* top: '33vh',
                    width: '64vw',
                    alignItem: 'centered',
                    opacity: 0.3, */
                display: 'none',
            },
        },
        aboutImage: {
            border: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            borderRadius: '20px',
            opacity: 0.7,
            [theme.breakpoints.down('sm')]: {
                top: '33vh',
                width: '24vw',
                alignItem: 'centered',
                /* display: 'none', */
            },
        },
    });

    return (
        <div className={componentStyle.contentContainer}>
            <div className={componentStyle.aboutText}>
                <Typography variant="h5">
                    <b>{aboutContent?.title}</b>
                </Typography>
                <br />
                <Typography variant="h6">{aboutContent?.textContent}</Typography>
                <br />
                {Array.from([...(aboutContent?.componentContent ?? new Map<string, TComponentContent>())]).map(
                    (content, i) => (
                        <div key={content[0]}>
                            <Typography variant="body1" component="p">
                                {content[1].textContent}
                            </Typography>
                            <br />
                        </div>
                    ),
                )}
            </div>
            <div className={componentStyle.aboutImageContainer}>
                <img className={componentStyle.aboutImage} src={pexelsPixabay462030} alt="Sun" />
            </div>
        </div>
    );
};
