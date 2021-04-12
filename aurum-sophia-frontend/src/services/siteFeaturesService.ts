import SiteFeature from '../components/common/interface/SiteFeature';
import AboutPage from '../pages/AboutPage';
import ActualsPage from '../pages/ActualsPage';
import ContactPage from '../pages/ContactPage';
import DonationPage from '../pages/DonationPage';
import EventsPage from '../pages/EventsPage';

const getSiteFeatures = (): SiteFeature[] => {
    const siteEnabledFeatures: SiteFeature[] = [];

    /*     icon repository: https://fonts.google.com/icons?selected=Material+Icons */

    siteEnabledFeatures.push(
        {
            id: 'null1',
            component: ActualsPage(),
            name: 'actual',
            displayName: 'Aktuális',
            path: '/actuals',
            icon: 'new_releases',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null2',
            component: AboutPage(),
            name: 'about',
            displayName: 'Bemutatkozás',
            path: '/about',
            icon: 'info',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null3',
            component: EventsPage(),
            name: 'events',
            displayName: 'Események',
            path: '/events',
            icon: 'events',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null4',
            component: DonationPage(),
            name: 'donation',
            displayName: 'Támogatás',
            path: '/donation',
            icon: 'payments',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null6',
            component: ContactPage(),
            name: 'contact',
            displayName: 'Kapcsolat',
            path: '/contact',
            icon: 'contact_support',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null5',
            name: 'downloads',
            displayName: 'Letöltések',
            path: '/downloads',
            icon: 'downloads',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null7',
            name: 'media',
            displayName: 'Médiatár',
            path: '/media',
            icon: 'media',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null8',
            name: 'classes',
            displayName: 'Tanfolyamok',
            path: '/classes',
            icon: 'classes',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null9',
            name: 'publications',
            displayName: 'Kiadványok',
            path: '/publications',
            icon: 'publications',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null10',
            name: 'webshop',
            displayName: 'Webáruház',
            path: '/webshop',
            icon: 'webshop',
            isEnabled: false,
            isNavOption: false,
        },
    );

    return siteEnabledFeatures;
};

export default getSiteFeatures;
