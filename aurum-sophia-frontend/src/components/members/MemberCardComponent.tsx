import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import greenHand from '../../images/greenHand.jpg';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { MemberCardComponentProps } from './interface/MemberCardComponentProps';

export const MemberCardComponent = ({ member }: MemberCardComponentProps): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

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
            backgroundColor: 'transparent',
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
            flex: 3,
            margin: '5px',
            '& img': {
                borderRadius: '50%',
                border: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.primary.main,
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
    });

    return (
        <div className={componentStyle.root}>
            <Card className={componentStyle.card}>
                <CardActionArea>
                    <div className={componentStyle.contentContainer}>
                        <div className={componentStyle.cardMedia}>
                            <CardMedia
                                component="img"
                                alt="Member Image"
                                image={greenHand}
                                title="Contemplative Reptile"
                            />
                        </div>
                        <div className={componentStyle.cardContent}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h5">
                                    {member.memberName}
                                </Typography>
                                <Typography gutterBottom variant="body1" component="span">
                                    {member.memberTitle}
                                </Typography>
                                <Typography variant="body2" className={componentStyle.cardInfo}>
                                    {member.memberSummary}...
                                </Typography>
                            </CardContent>
                        </div>
                    </div>
                </CardActionArea>
                {/*    <CardActions>
                    <Button size="small" className={componentStyle.cardButton}>
                        Bövebben...
                    </Button>
                </CardActions> */}
            </Card>
        </div>
    );
};
