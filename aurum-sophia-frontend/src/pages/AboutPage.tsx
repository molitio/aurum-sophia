import React from 'react';
import { makeStyles, createStyles, Typography, useTheme, Paper } from '@material-ui/core';
import { ImagePageBackground } from '../components/background/ImagePageBackground';

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
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: theme.palette.text.primary,
                margin: '10px 0px',
                border: 1,
                borderStyle: 'solid',
                borderRadius: 10,
                height: '2000px',
                borderColor: theme.palette.secondary.main,
                boxShadow: theme.shadows[5],
                [theme.breakpoints.up('sm')]: {
                    marginLeft: '15vw',
                    marginRight: '15vw',
                },
            },
        }),
    );

    const pageStyle = useStyles();

    return (
        <>
            <ImagePageBackground />
            <main className={pageStyle.pageContent}>
                <Typography variant="h4">Magunkról</Typography>
                <Typography variant="body1">Aurum Sophia Alapítvány</Typography>
                <Typography variant="body1">
                    <p>Az Aurum Sophia Alapítvány 2021.02.21-én jött létre, Köves Dávid alapító kezdeményezésére.</p>
                    <p>
                        A névben az „Aurum” szó a Nap és arany férfias minőségekre utal, a „Sophia” pedig a bölcsesség
                        női oldalát képviseli. Az Aurum Sophia-ban tehát a női és férfi pólusok egyesítve, egymás mellé
                        rendelve jelennek meg. Az alapítványi tevékenységének elsődleges céljaként azon dolgozunk,
                        hogyaz Egyetemes Tudatfejlesztés szemléletét, alapelveit és módszereitbárki számára elérhetővé
                        tegyük. Így vállaljuk globális szintű küldetésünket is: a tudatos, felszabadult, egészséges és
                        boldog emberek együttműködő közösségének létrehozását.
                    </p>
                    <p>
                        Egyéni és csoportos mentoring programjaink, műhelymunkáink,elvonulásaink és táboraink, valamint
                        konferenciáink során akapcsolódás és közös tapasztalás pótolhatatlan élményének lehetőségeit
                        teremtjük meg a résztvevők számára, hozzájárulva ezzel az egyéni éskollektív tudati fejlődés
                        folyamatához
                    </p>
                </Typography>
            </main>
        </>
    );
}
