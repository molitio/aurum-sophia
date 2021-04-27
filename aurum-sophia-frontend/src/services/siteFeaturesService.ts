import { SiteFeature } from '../components/common/interface/SiteFeature';
import { FeatureCollection } from '../components/common/interface/collection/FeatureCollection';

export const deafultSiteFeature = {
    id: '',
    name: '',
    displayName: '',
    isEnabled: false,
    isNavOption: false,
    path: '',
    icon: { fontIcon: '' },
};

export const siteEnabledFeaturesCollection: FeatureCollection = {
    features: new Map<string, SiteFeature>([
        [
            'actuals',
            {
                id: 'null1',
                name: 'actuals',
                displayName: 'Aktuális',
                path: '/actuals',
                isEnabled: true,
                isNavOption: true,
            },
        ],
        [
            'about',
            {
                id: 'null2',
                name: 'about',
                displayName: 'Magunkról',
                path: '/about',
                isEnabled: true,
                isNavOption: true,
            },
        ],
        [
            'connect',
            {
                id: 'null4',
                name: 'connect',
                displayName: 'Csatlakozás',
                path: '/connect',
                isEnabled: true,
                isNavOption: true,
            },
        ],
        [
            'events',
            {
                id: 'null3',
                name: 'events',
                displayName: 'Események',
                path: '/events',
                isEnabled: true,
                isNavOption: true,
            },
        ],
        [
            'contact',
            {
                id: 'null6',
                name: 'contact',
                displayName: 'Kapcsolat',
                path: '/contact',
                isEnabled: true,
                isNavOption: true,
            },
        ],
        [
            'downloads',
            {
                id: 'null5',
                name: 'downloads',
                displayName: 'Letöltések',
                path: '/downloads',
                isEnabled: false,
                isNavOption: false,
            },
        ],
        [
            'media',
            {
                id: 'null7',
                name: 'media',
                displayName: 'Médiatár',
                path: '/media',
                isEnabled: false,
                isNavOption: false,
            },
        ],
        [
            'classes',
            {
                id: 'null8',
                name: 'classes',
                displayName: 'Tanfolyamok',
                path: '/classes',
                isEnabled: false,
                isNavOption: false,
            },
        ],
        [
            'publications',
            {
                id: 'null9',
                name: 'publications',
                displayName: 'Kiadványok',
                path: '/publications',
                isEnabled: false,
                isNavOption: false,
            },
        ],
        [
            'webshop',
            {
                id: 'null10',
                name: 'webshop',
                displayName: 'Webáruház',
                path: '/webshop',
                isEnabled: false,
                isNavOption: false,
            },
        ],
    ]),
};
