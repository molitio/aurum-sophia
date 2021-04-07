import SiteFeature from '../common/SiteFeature';
import AboutPage from '../components/pages/AboutPage';
import ActualsPage from '../components/pages/ActualsPage';
import ContactPage from '../components/pages/ContactPage';
import DonationPage from '../components/pages/DonationPage';
import EventsPage from '../components/pages/EventsPage';
import PageNotFound from '../components/pages/PageNotFound';

const getSiteFeatures = (): SiteFeature[] => {
    const siteEmabledFeatures: SiteFeature[] = [];
    const inactive: SiteFeature[] = [];

    /*     icon repository: https://fonts.google.com/icons?selected=Material+Icons */

    siteEmabledFeatures.push(
        new SiteFeature('null1', ActualsPage, {
            name: 'actual',
            displayName: 'Aktuális',
            path: '/actuals',
            icon: 'new_releases',
            isEnabled: true,
            isNavOpion: true,
        }),
        new SiteFeature('null2', AboutPage, {
            name: 'about',
            displayName: 'Bemutatkozás',
            path: '/about',
            icon: 'info',
            isEnabled: true,
            isNavOpion: true,
        }),
        new SiteFeature('null3', EventsPage, {
            name: 'events',
            displayName: 'Események',
            path: '/events',
            icon: 'events',
            isEnabled: true,
            isNavOpion: true,
        }),
        new SiteFeature('null4', DonationPage, {
            name: 'donation',
            displayName: 'Támogatás',
            path: '/donation',
            icon: 'payments',
            isEnabled: true,
            isNavOpion: true,
        }),
        new SiteFeature('null6', ContactPage, {
            name: 'contact',
            displayName: 'Kapcsolat',
            path: '/contact',
            icon: 'contact_support',
            isEnabled: true,
            isNavOpion: true,
        }),
    );

    inactive.push(
        new SiteFeature('null5', PageNotFound, {
            name: 'downloads',
            displayName: 'Letöltések',
            path: '/downloads',
            icon: 'downloads',
            isEnabled: false,
            isNavOpion: true,
        }),
        new SiteFeature('null7', PageNotFound, {
            name: 'media',
            displayName: 'Médiatár',
            path: '/media',
            icon: 'media',
            isEnabled: false,
            isNavOpion: true,
        }),
        new SiteFeature('null8', PageNotFound, {
            name: 'classes',
            displayName: 'Tanfolyamok',
            path: '/classes',
            icon: 'classes',
            isEnabled: false,
            isNavOpion: true,
        }),
        new SiteFeature('null9', PageNotFound, {
            name: 'publications',
            displayName: 'Kiadványok',
            path: '/publications',
            icon: 'publications',
            isEnabled: false,
            isNavOpion: true,
        }),
        new SiteFeature('null10', PageNotFound, {
            name: 'webshop',
            displayName: 'Webáruház',
            path: '/webshop',
            icon: 'webshop',
            isEnabled: false,
            isNavOpion: true,
        }),
    );

    return siteEmabledFeatures;
};

export default getSiteFeatures;
