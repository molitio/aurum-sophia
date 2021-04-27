import React from 'react';
import { makeStyles, createStyles, Typography, useTheme, Paper, Container } from '@material-ui/core';
import { ImagePageBackground } from '../components/background/ImagePageBackground';
import pexelsPixabay462030 from '../images/pexelsPixabay462030.jpg';

export function AboutPage(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                zIndex: 100,
            },
            pageContent: {
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'left',
                textAlign: 'left',
                color: theme.palette.text.primary,
                margin: '10px 0px',
                border: 1,
                borderStyle: 'solid',
                borderRadius: 10,
                height: '2000px',
                borderColor: theme.palette.secondary.main,
                boxShadow: theme.shadows[5],
                opacity: 0.9,
                /* backgroundColor: 'transparent', */
                ...theme.themeGradient,
                [theme.breakpoints.up('md')]: {
                    marginLeft: '15vw',
                    marginRight: '15vw',
                },
            },
            aboutText: {
                padding: '15px',
                opacity: 1,
                flexGrow: 5,
            },
            aboutImage: {
                marginTop: '15px',
                marginLeft: '20px',
                marginRight: '5px',
                height: '420px',
                width: '280px',
                borderWidth: 0,
                overflow: 'hiden',
                borderRadius: '10px',
                flexGrow: 1,
                [theme.breakpoints.down('xs')]: {
                    display: 'none',
                },
            },
            image: {
                border: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.secondary.main,
                borderRadius: '20px',
                opacity: 0.8,
            },
        }),
    );

    const pageStyle = useStyles();

    return (
        <>
            <ImagePageBackground />
            <main className={pageStyle.pageContent}>
                <div className={pageStyle.aboutText}>
                    <Typography variant="h5">
                        <b>Magunkról</b>
                    </Typography>
                    <Typography variant="h6">Aurum Sophia Alapítvány</Typography>
                    <Typography variant="body1">
                        <p>
                            <span>
                                Az Aurum Sophia Alapítvány 2021.02.21-én jött létre, Köves Dávid alapító
                                kezdeményezésére.
                            </span>
                        </p>
                        <p>
                            <span>
                                A névben az „Aurum” szó a Nap és arany férfias minőségekre utal, a „Sophia” pedig a
                                bölcsesség női oldalát képviseli. Az Aurum Sophia-ban tehát a női és férfi pólusok
                                egyesítve, egymás mellé rendelve jelennek meg. Az alapítványi tevékenységének elsődleges
                                céljaként azon dolgozunk, hogyaz Egyetemes Tudatfejlesztés szemléletét, alapelveit és
                                módszereitbárki számára elérhetővé tegyük. Így vállaljuk globális szintű küldetésünket
                                is: a tudatos, felszabadult, egészséges és boldog emberek együttműködő közösségének
                                létrehozását.
                            </span>
                        </p>
                        <p>
                            <span>
                                Egyéni és csoportos mentoring programjaink, műhelymunkáink,elvonulásaink és táboraink,
                                valamint konferenciáink során akapcsolódás és közös tapasztalás pótolhatatlan élményének
                                lehetőségeit teremtjük meg a résztvevők számára, hozzájárulva ezzel az egyéni
                                éskollektív tudati fejlődés folyamatához
                            </span>
                        </p>
                    </Typography>
                </div>
                <div className={pageStyle.aboutImage}>
                    <img className={pageStyle.image} src={pexelsPixabay462030} alt="Sun" />
                </div>
            </main>
        </>
    );
}
