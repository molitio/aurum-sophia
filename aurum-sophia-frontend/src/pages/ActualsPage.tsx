import React from 'react';
import { makeStyles, createStyles, Typography, useTheme } from '@material-ui/core';
import { MembersComponent } from '../components/members/MembersComponent';

export function ActualsPage(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
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
            actualsContent: {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'left',
            },
            actualsText: {
                textAlign: 'center',
                padding: '15px',
                opacity: 1,
                flex: 3,
                textShadow: `1px 1px ${theme.palette.secondary.main}`,
            },
            memberContent: {
                flex: 1,
            },
        }),
    );

    const pageStyle = useStyles();
    return (
        <>
            <main className={pageStyle.pageContent}>
                <div className={pageStyle.actualsContent}>
                    <div className={pageStyle.actualsText}>
                        <Typography variant="h5">
                            <b>Aktuális hírek</b>
                        </Typography>
                        <br />
                        <Typography variant="body1" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices dolor nisi,
                            et molestie elit viverra in. Aliquam pharetra arcu ut malesuada laoreet. In nisl odio,
                            gravida et sagittis molestie, consectetur et est. In hac habitasse platea dictumst.
                            Phasellus risus mauris, scelerisque hendrerit hendrerit eu, porttitor et nibh. Pellentesque
                            volutpat, nibh a aliquam luctus, ante nunc porttitor dolor, ut facilisis neque sapien in
                            velit. Aliquam dapibus ornare ex ut aliquet. Donec mollis tellus metus, eget aliquet est
                            congue id. Ut sagittis arcu est, et molestie eros mollis nec. Sed auctor ullamcorper lacus,
                            a posuere nunc maximus at. Nunc ultrices pellentesque nulla quis sollicitudin. Fusce sit
                            amet egestas mauris. Sed eu elementum libero. Quisque vel ultrices turpis. Nulla molestie
                            neque nec erat accumsan posuere. Aenean euismod porta leo, quis sagittis mi sodales
                            porttitor. Integer nulla odio, facilisis eget scelerisque sed, laoreet aliquet orci.
                            Vestibulum dictum eros et leo efficitur, id pulvinar tellus lobortis. Etiam ut interdum est,
                            non elementum ante. Nam imperdiet felis quam, id faucibus arcu commodo id. Mauris vel quam
                            nisi.
                        </Typography>
                        <br />
                    </div>
                </div>
                <div className={pageStyle.memberContent}>
                    <div className={pageStyle.actualsText}>
                        <Typography variant="h5">
                            <b>Események</b>
                        </Typography>
                    </div>
                    <br />
                    <MembersComponent />
                </div>
            </main>
        </>
    );
}
