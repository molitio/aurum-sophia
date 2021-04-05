import SiteFeature from '../common/SiteFeature';

const getSiteFeatures = (): SiteFeature[] => {
    const siteEmabledFeatures: SiteFeature[] = [];
    const inactive: SiteFeature[] = [];

    /*     icon repository: https://fonts.google.com/icons?selected=Material+Icons */

    siteEmabledFeatures.push(
        new SiteFeature('null1', {
            name: 'actual',
            displayName: 'Aktuális',
            path: '/actuals',
            icon: 'new_releases',
            isEnabled: true,
        }),
        new SiteFeature('null2', {
            name: 'about',
            displayName: 'Bemutatkozás',
            path: '/about',
            icon: 'info',
            isEnabled: true,
        }),
        new SiteFeature('null3', {
            name: 'events',
            displayName: 'Események',
            path: '/events',
            icon: 'events',
            isEnabled: true,
        }),
        new SiteFeature('null4', {
            name: 'donation',
            displayName: 'Támogatás',
            path: '/donation',
            icon: 'payments',
            isEnabled: true,
        }),
        new SiteFeature('null6', {
            name: 'contact',
            displayName: 'Kapcsolat',
            path: '/contact',
            icon: 'contact_support',
            isEnabled: true,
        }),
    );

    inactive.push(
        new SiteFeature('null5', {
            name: 'downloads',
            displayName: 'Letöltések',
            path: '/downloads',
            icon: 'downloads',
            isEnabled: true,
        }),
        new SiteFeature('null', {
            name: 'media',
            displayName: 'Médiatár',
            path: '/media',
            icon: 'media',
            isEnabled: false,
        }),
        new SiteFeature('null', {
            name: 'classes',
            displayName: 'Tanfolyamok',
            path: '/classes',
            icon: 'classes',
            isEnabled: false,
        }),
        new SiteFeature('null', {
            name: 'publications',
            displayName: 'Kiadványok',
            path: '/publications',
            icon: 'publications',
            isEnabled: false,
        }),
        new SiteFeature('null', {
            name: 'webshop',
            displayName: 'Webáruház',
            path: '/webshop',
            icon: 'webshop',
            isEnabled: false,
        }),
    );

    return siteEmabledFeatures;
};

export default getSiteFeatures;
