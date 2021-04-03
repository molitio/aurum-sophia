import SiteFeature from '../common/SiteFeature';

const getSiteFeatures = (): SiteFeature[] => {
    const siteEmabledFeatures: SiteFeature[] = [];
    const inactive: SiteFeature[] = [];

    siteEmabledFeatures.push(
        new SiteFeature('null1', {
            name: 'actual',
            displayName: 'Aktuális',
            path: '/actual',
            icon: 'actual',
            isEnabled: true,
        }),
        new SiteFeature('null2', {
            name: 'about',
            displayName: 'Bemutatkozás',
            path: '/about',
            icon: 'about',
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
            name: 'support',
            displayName: 'Támogatás',
            path: '/support',
            icon: 'support',
            isEnabled: true,
        }),
        new SiteFeature('null5', {
            name: 'downloads',
            displayName: 'Letöltések',
            path: '/downloads',
            icon: 'downloads',
            isEnabled: true,
        }),
        new SiteFeature('null6', {
            name: 'contact',
            displayName: 'Kapcsolat',
            path: '/contact',
            icon: 'contact',
            isEnabled: true,
        }),
    );

    inactive.push(
        new SiteFeature('null', {
            name: 'media',
            displayName: 'Médiatár',
            path: '/media',
            icon: 'media',
            isEnabled: false,
        }),
        new SiteFeature('null', {
            name: 'classes',
            displayName: 'Rólunk',
            path: '/about',
            icon: 'about',
            isEnabled: false,
        }),
        new SiteFeature('null', {
            name: 'publications',
            displayName: 'Rólunk',
            path: '/about',
            icon: 'about',
            isEnabled: false,
        }),
        new SiteFeature('null', {
            name: 'webshop',
            displayName: 'Rólunk',
            path: '/about',
            icon: 'about',
            isEnabled: false,
        }),
    );

    return siteEmabledFeatures;
};

export default getSiteFeatures;
