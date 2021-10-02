import { IonCard, IonCardContent, IonCardHeader, IonImg, IonRouterLink, IonText } from '@ionic/react';
import React from 'react';
import treeShape from '../../images/treeShape.svg';
import { AppContext, SiteDefaultContactPageContent } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TContactInfo } from '../common/type/TContactInfo';
import { PhoneContactComponent } from './PhoneContactComponent';

export const ContactComponent: React.FC<PageTagProps> = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [contactContent, setContactContent] = React.useState(SiteDefaultContactPageContent);

    React.useEffect(() => {
        const content = context.contentCollection?.get(pageTag) ?? SiteDefaultContactPageContent;
        setContactContent(content);
    }, [context.contentCollection, pageTag]);

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    const componentStyle = createSiteStyle({
        root: {
            color: theme.palette.text.primary,
            margin: '10px',
            border: 0,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            [theme.breakpoints.down('xs')]: {},
            borderRadius: 20,
            /*...theme.themeGradient,*/
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        card: {
            borderRadius: 20,
            backgroundColor: 'transparent',
        },
        cardMedia: {
            flex: 1,
            margin: '5px',
            '& img': {
                borderRadius: '50%',
                border: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.primary.main,
            },
        },
        cardContent: {
            flex: 4,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        cardInfo: {
            color: theme.palette.text.primary,
        },
        cardButton: {
            color: theme.palette.text.primary,
        },
    });

    return (
        <div className={componentStyle.root}>
            <IonCard className={componentStyle.card}>
                <div className={componentStyle.contentContainer}>
                    <div className={componentStyle.cardMedia}>
                        <IonCardHeader>
                            <IonImg alt={contactContent.title} src={treeShape} title={contactContent.title}></IonImg>
                        </IonCardHeader>
                    </div>
                    <div className={componentStyle.cardContent}>
                        <IonCardContent>
                            <IonText>
                                <h6>{contactContent.title}</h6>
                            </IonText>
                            <IonText>
                                <h6>{`Telefonos elérhetőségeink:`}</h6>
                            </IonText>
                            {Array.from([...(contactContent.contacts ?? new Map<string, TContactInfo>())]).map(
                                (contact) => (
                                    <div key={contact[0]}>
                                        <PhoneContactComponent key={contact[0]} contact={contact[1]} />
                                        <br />
                                    </div>
                                ),
                            )}
                            <IonText className={componentStyle.cardInfo}>
                                <h6>{`Email címünk: `}</h6>
                                <IonRouterLink
                                    href={`mailto:${contactContent.recruitFormUrl}`}
                                    onClick={preventDefault}
                                >
                                    {`${contactContent.siteContact?.emailAddress}`}
                                </IonRouterLink>
                            </IonText>

                            <IonText className={componentStyle.cardInfo}>
                                <IonRouterLink href={contactContent.recruitFormUrl} onClick={preventDefault}>
                                    {`Csatlakozás az alapítványhoz`}
                                </IonRouterLink>
                            </IonText>
                            <IonText className={componentStyle.cardInfo}>
                                {`Székhely és levelezési cím: ${contactContent.siteContact?.address}`}
                            </IonText>
                        </IonCardContent>
                    </div>
                </div>
            </IonCard>
        </div>
    );
};
