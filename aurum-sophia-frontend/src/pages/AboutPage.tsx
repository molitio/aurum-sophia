import React from 'react';
import { Typography } from '@material-ui/core';
import pexelsPixabay462030 from '../images/pexelsPixabay462030.jpg';
import { MembersComponent } from '../components/members/MembersComponent';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle } from '../styles/siteStyleBuilder';

export const AboutPage = (): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const pageStyle = createSiteStyle({
        pageContent: {
            display: 'flex',
            flexDirection: 'column',
            color: theme.palette.text.primary,
            padding: '10px 0px',
            marginBottom: '10px',
            border: 0,
            borderStyle: 'solid',
            borderRadius: 10,
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            /* backgroundColor: 'transparent', */
            ...theme.themeGradientBackground,
        },
        aboutContent: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'left',
        },
        aboutText: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        aboutImageContainer: {
            marginTop: '15px',
            marginLeft: '20px',
            marginRight: '15px',
            flex: 1,
            borderWidth: 0,
            borderRadius: '10px',
            [theme.breakpoints.down('xs')]: {
                /* top: '33vh',
                    width: '64vw',
                    alignItem: 'centered',
                    opacity: 0.3, */
                display: 'none',
            },
        },
        aboutImage: {
            border: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            borderRadius: '20px',
            opacity: 0.7,
            [theme.breakpoints.down('sm')]: {
                top: '33vh',
                width: '24vw',
                alignItem: 'centered',
                /* display: 'none', */
            },
        },
        memberContent: {
            flex: 1,
        },
    });

    return (
        <main className={pageStyle.pageContent}>
            <div className={pageStyle.aboutContent}>
                <div className={pageStyle.aboutText}>
                    <Typography variant="h5">
                        <b>Magunkról</b>
                    </Typography>
                    <br />
                    <Typography variant="h6">Aurum Sophia Alapítvány</Typography>
                    <br />
                    <Typography variant="body1" component="p">
                        Az Aurum Sophia Alapítvány 2021.02.21-én jött létre, Köves Dávid alapító kezdeményezésére.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p">
                        A névben az „Aurum” szó a Nap és arany férfias minőségekre utal, a „Sophia” pedig a bölcsesség
                        női oldalát képviseli. Az Aurum Sophia-ban tehát a női és férfi pólusok egyesítve, egymás mellé
                        rendelve jelennek meg. Az alapítvány tevékenységének elsődleges céljaként azon dolgozunk, hogy
                        az Egyetemes Tudatfejlesztés szemléletét, alapelveit és módszereit bárki számára elérhetővé
                        tegyük. Így vállaljuk globális szintű küldetésünket is: a tudatos, felszabadult, egészséges és
                        boldog emberek együttműködő közösségének létrehozását.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p">
                        Egyéni és csoportos mentoring programjaink, műhelymunkáink,elvonulásaink és táboraink, valamint
                        konferenciáink során a kapcsolódás és közös tapasztalás pótolhatatlan élményének lehetőségeit
                        teremtjük meg a résztvevők számára, hozzájárulva ezzel az egyéni és kollektív tudati fejlődés
                        folyamatához
                    </Typography>
                    <br />
                </div>
                <div className={pageStyle.aboutImageContainer}>
                    <img className={pageStyle.aboutImage} src={pexelsPixabay462030} alt="Sun" />
                </div>
            </div>
            <div className={pageStyle.memberContent}>
                <MembersComponent />
            </div>
        </main>
    );
};
