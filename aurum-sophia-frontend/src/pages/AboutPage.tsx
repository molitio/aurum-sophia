import React from 'react';
import { MembersComponent } from '../components/members/MembersComponent';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle } from '../styles/siteStyleBuilder';
import { AboutComponent } from '../components/about/AboutComponent';

const ABOUT_PAGE_TAG = 'aurum-sophia-about-page';
const ABOUT_MEMBERS_TAG = 'aurum-sophia-about-members-page';

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
        memberContent: {
            flex: 1,
        },
    });

    return (
        <main className={pageStyle.pageContent}>
            <AboutComponent pageTag={ABOUT_PAGE_TAG} />
            <div className={pageStyle.aboutContent}></div>
            <div className={pageStyle.memberContent}>
                <MembersComponent pageTag={ABOUT_MEMBERS_TAG} />
            </div>
        </main>
    );
};
