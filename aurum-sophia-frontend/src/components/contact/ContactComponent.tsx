import React from 'react';
import {
    useTheme,
    makeStyles,
    createStyles,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@material-ui/core';
import treeShape from '../../images/treeShape.svg';

export function ContactComponent(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
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
        }),
    );

    const componentStyle = useStyles();

    return (
        <div className={componentStyle.root}>
            <Card className={componentStyle.card}>
                <CardActionArea>
                    <div className={componentStyle.contentContainer}>
                        <div className={componentStyle.cardMedia}>
                            <CardMedia
                                component="img"
                                alt="Member Image"
                                image={treeShape}
                                title="Contemplative Reptile"
                            />
                        </div>
                        <div className={componentStyle.cardContent}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Member
                                </Typography>
                                <Typography variant="body2" className={componentStyle.cardInfo}>
                                    Proin non bibendum ipsum. Sed vitae tristique metus, vel placerat turpis. Cras
                                    gravida odio sit amet erat volutpat, nec vestibulum massa mollis.
                                </Typography>
                            </CardContent>
                        </div>
                    </div>
                </CardActionArea>
                <CardActions>
                    <Button size="small" className={componentStyle.cardButton}>
                        Bövebben...
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
