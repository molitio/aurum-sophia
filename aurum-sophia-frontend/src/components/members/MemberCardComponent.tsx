import React from 'react';
import greenHand from '../../images/greenHand.jpg';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { TContentParagraph } from '../common/type/TContentParagraph';
import { ContentCardComponentProps } from '../common/interface/ContentCardComponentProps';
import { MemberContactCardComponent } from './MemberContactCardComponent';
import { IonCard, IonCardContent, IonImg, IonText } from '@ionic/react';

export const MemberCardComponent: React.FC<ContentCardComponentProps> = ({
    content,
    isExpanded,
    setIsExpanded,
    setExpandedContent,
}: ContentCardComponentProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        card: {
            color: theme.palette.text.primary,
            [theme.breakpoints.up('md')]: {},
            [theme.breakpoints.down('md')]: {},
            margin: '10px',
            border: 0,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            backgroundColor: 'transparent',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'stretch',
            /*...theme.themeGradient,*/
        },
        contentContainer: {
            display: 'flex',
            flexDirection: isExpanded ? 'row' : 'column',
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
            '& img:hover': {
                boxShadow: `1px 1px ${theme.palette.primary.main}`,
            },
        },
        cardContent: {
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        cardInfo: {
            color: theme.palette.text.secondary,
        },
        cardButton: {
            color: theme.palette.text.primary,
        },
    });

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        setExpandedContent(content);
    };

    return (
        <IonCard className={componentStyle.card}>
            <div className={componentStyle.contentContainer} onClick={() => handleExpand()}>
                <div className={componentStyle.cardMedia}>
                    <IonImg alt="Member Image" src={greenHand} title={content[1].memberName} />
                </div>
                <div className={componentStyle.cardContent}>
                    <IonCardContent>
                        <IonText>
                            <h6>{content[1].memberName}</h6>
                        </IonText>
                        <IonText>{content[1].memberTitle}</IonText>
                        {content[1].memberMotto && (
                            <IonText>
                                {`"`}
                                {content[1].memberMotto}
                                {`"`}
                            </IonText>
                        )}
                        {/*    <Typography variant="body2" className={componentStyle.cardInfo}>
                                {content.memberSummary}...
                            </Typography> */}
                        {isExpanded &&
                            Array.from([...(content[1].memberBioSections ?? new Map<string, TContentParagraph>())]).map(
                                (paragrah, i) => (
                                    <IonText key={paragrah[0]} className={componentStyle.cardContent}>
                                        {paragrah[1].textSection}
                                        <br />
                                        <br />
                                    </IonText>
                                ),
                            )}
                        {isExpanded && <MemberContactCardComponent memberContact={content[1].memberContact} />}
                    </IonCardContent>
                </div>
            </div>
        </IonCard>
    );
};
