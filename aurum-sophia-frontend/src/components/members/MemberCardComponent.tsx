import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import greenHand from '../../images/greenHand.jpg';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { TContentParagraph } from '../common/type/TContentParagraph';
import { MemberCardComponentProps } from './interface/MemberCardComponentProps';
import { MemberContactCardComponent } from './MemberContactCardComponent';

export const MemberCardComponent = ({ member, expanded }: MemberCardComponentProps): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [isExpanded, setIsExpanded] = React.useState(expanded);

    const componentStyle = createSiteStyle({
        card: {
            color: theme.palette.text.primary,
            [theme.breakpoints.up('md')]: {
                flex: isExpanded ? '1 1 80vw' : '1 1 20vw',
            },
            [theme.breakpoints.down('md')]: {
                flex: isExpanded ? '1 1 80vw' : '1 1 30vw',
            },
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

    return (
        <Card className={componentStyle.card}>
            <CardActionArea>
                <div className={componentStyle.contentContainer} onClick={() => setIsExpanded(!isExpanded)}>
                    <div className={componentStyle.cardMedia}>
                        <CardMedia component="img" alt="Member Image" image={greenHand} title={member.memberName} />
                    </div>
                    <div className={componentStyle.cardContent}>
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                {member.memberName}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {member.memberTitle}
                            </Typography>
                            {member.memberMotto && (
                                <Typography variant="body2">
                                    {`"`}
                                    {member.memberMotto}
                                    {`"`}
                                </Typography>
                            )}
                            {/*    <Typography variant="body2" className={componentStyle.cardInfo}>
                                {member.memberSummary}...
                            </Typography> */}
                            {isExpanded &&
                                Array.from([...(member.memberBioSections ?? new Map<string, TContentParagraph>())]).map(
                                    (paragrah, i) => (
                                        <Typography
                                            key={paragrah[0]}
                                            variant="body2"
                                            className={componentStyle.cardContent}
                                        >
                                            {paragrah[1].textSection}
                                            <br />
                                            <br />
                                        </Typography>
                                    ),
                                )}
                            {isExpanded && <MemberContactCardComponent memberContact={member.memberContact} />}
                        </CardContent>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
};
