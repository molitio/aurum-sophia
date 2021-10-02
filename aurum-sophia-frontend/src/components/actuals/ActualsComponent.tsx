import { IonText } from '@ionic/react';
import React from 'react';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TPageContent } from '../common/type/TPageContent';

export const ActualsComponent: React.FC<PageTagProps> = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [actualsContent, setActualsContent] = React.useState<TPageContent>(SiteDefaultPageContent);

    React.useEffect(() => {
        const content = context.contentCollection.get(pageTag) ?? SiteDefaultPageContent;
        setActualsContent(content);
    }, [context.contentCollection, pageTag]);

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
            <IonText>
                <h4>
                    <b>{actualsContent && actualsContent.title}</b>
                </h4>
            </IonText>
            <br />
            <IonText>
                <p>{actualsContent && actualsContent.textContent}</p>
            </IonText>
            <br />

            {actualsContent?.componentContent &&
                Array.from([...actualsContent.componentContent]).map((content) => (
                    <div key={content[0]}>
                        <IonText>
                            <h6>
                                {' '}
                                <b>{content[1].title}</b>
                            </h6>
                        </IonText>
                        <br />
                        <IonText>
                            <p>{content[1].textContent}</p>
                        </IonText>
                        <br />
                    </div>
                ))}
        </div>
    );
};
