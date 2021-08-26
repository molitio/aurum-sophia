import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import greenHand from '../../images/greenHand.jpg';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { EventCardComponentProps } from './interface/EventCardComponentProps';

export const EventCardComponent = ({ event }: EventCardComponentProps): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    console.log(`eventComponent: ${event}`);
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
                borderStyle: 'solid',
                borderRadius: '10px',
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
                            <CardMedia component="img" alt="Event Image" image={greenHand} title="Event Image" />
                        </div>
                        <div className={componentStyle.cardContent}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {event.title}
                                </Typography>
                                <Typography variant="body2" className={componentStyle.cardInfo}>
                                    {event.eventTextContent}
                                </Typography>
                            </CardContent>
                        </div>
                    </div>
                </CardActionArea>
                {/*     <CardActions>
                    <Button size="small" className={componentStyle.cardButton}>
                        Bövebben...
                    </Button>
                </CardActions> */}
            </Card>
        </div>
    );
};
