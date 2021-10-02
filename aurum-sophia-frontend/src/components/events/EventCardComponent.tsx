import React from 'react';
import greenHand from '../../images/greenHand.jpg';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { TContentParagraph } from '../common/type/TContentParagraph';
import { ContentCardComponentProps } from '../common/interface/ContentCardComponentProps';
import { IonCard, IonCardContent, IonCardHeader, IonImg, IonText } from '@ionic/react';

export const EventCardComponent: React.FC<ContentCardComponentProps> = ({
    content,
    isExpanded,
    setIsExpanded,
    setExpandedContent,
}: ContentCardComponentProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        content: {
            [theme.breakpoints.between('lg', 'xl')]: {},
            [theme.breakpoints.between('md', 'lg')]: {},
            [theme.breakpoints.between('sm', 'md')]: {
                flex: isExpanded ? '1 1 80vw' : '1 1 30vw',
            },
            [theme.breakpoints.between('xs', 'sm')]: {
                flex: isExpanded ? '1 1 80vw' : '1 1 20vw',
            },
            color: theme.palette.text.primary,
            margin: '10px',
            border: 0,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            [theme.breakpoints.down('xs')]: {},
            backgroundColor: 'transparent',
            borderRadius: 20,
            /*...theme.themeGradient,*/
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        card: {
            borderRadius: 20,
            backgroundColor: 'transparent',
        },
        cardMedia: {
            flex: 3,
            margin: '5px',
            '& img': {
                border: 1,
                height: '15vh',
                borderRadius: '20px',
                borderStyle: 'solid',
                borderColor: theme.palette.primary.main,
            },
            '& img:hover': {
                boxShadow: `1px 1px ${theme.palette.primary.main}`,
            },
        },
        cardContent: {
            flex: 6,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        cardInfo: {
            color: theme.palette.text.secondary,
        },
        cardButton: {
            color: theme.palette.text.primary,
        },
        eventPresentationContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
        },
        eventTime: {
            flex: 2,
            textAlign: 'right',
        },
        eventSpeaker: {
            flex: 6,
        },
    });

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        setExpandedContent(content);
    };

    return (
        <div className={componentStyle.content}>
            <IonCard className={componentStyle.card}>
                <div className={componentStyle.contentContainer} onClick={() => handleExpand()}>
                    <IonCardHeader>
                        <div className={componentStyle.cardMedia}>
                            <IonImg alt="Event Image" src={greenHand} title="Event Image" />
                        </div>
                    </IonCardHeader>
                    <div className={componentStyle.cardContent}>
                        <IonCardContent>
                            <IonText>
                                <h5>
                                    <strong> {content[1].title} </strong>
                                </h5>
                            </IonText>
                            <IonText>
                                <h6>{content[1].eventTime}</h6>
                            </IonText>
                            <IonText>{content[1].eventSummary}</IonText>
                            <br />
                            {isExpanded &&
                                Array.from([
                                    ...(content[1].eventContentSections ?? new Map<string, TContentParagraph>()),
                                ]).map((content) => (
                                    <div key={content[0]}>
                                        <IonText className={componentStyle.cardInfo}>
                                            <p>{content[1].textSection}</p>
                                            <br />
                                        </IonText>
                                    </div>
                                ))}
                            {console.log(content[1])}
                            {isExpanded && content[1].presentations && (
                                <div>
                                    <IonText>
                                        <strong>Előadások:</strong>
                                    </IonText>
                                    {Array.from(content[1].presentations).map((presentation) => (
                                        <div
                                            key={presentation[0]}
                                            className={componentStyle.eventPresentationContainer}
                                        >
                                            <IonText className={componentStyle.eventSpeaker}>
                                                <span>
                                                    <strong>{presentation[1].presenter}:</strong>{' '}
                                                    {presentation[1].topic}
                                                </span>
                                            </IonText>
                                            <IonText className={componentStyle.eventTime}>
                                                <span>{presentation[1].timeTable}</span>
                                            </IonText>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </IonCardContent>
                    </div>
                </div>
            </IonCard>
        </div>
    );
};
