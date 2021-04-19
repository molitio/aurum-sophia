import { ComponentCollection } from '../components/common/interface/ComponentCollection';
import { FeatureCollecion } from '../components/common/interface/FeatureCollection';
import { SiteFeature } from '../components/common/interface/SiteFeature';
import { SiteFeatureComponent } from '../components/common/interface/SiteFeatureComponent';
import AboutPage from '../pages/AboutPage';
import ActualsPage from '../pages/ActualsPage';
import ContactPage from '../pages/ContactPage';
import DonationPage from '../pages/DonationPage';
import EventsPage from '../pages/EventsPage';
import { featureIconCollection } from './siteIconService';

const siteEnabledFeatures: Map<string, SiteFeature> = new Map<string, SiteFeature>([
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
            displayName: 'Bemutatkozás',
            path: '/about',
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
        'donation',
        {
            id: 'null4',
            name: 'donation',
            displayName: 'Támogatás',
            path: '/donation',
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
]);

const buildComponents = (): Map<string, SiteFeatureComponent> => {
    const siteEnabledComponents: Map<string, SiteFeatureComponent> = new Map<string, SiteFeatureComponent>();

    siteEnabledFeatures.forEach((feature) => {
        const enabledFeature: SiteFeatureComponent = {
            id: feature.id,
            name: feature.name,
            displayName: feature.displayName,
            isEnabled: feature.isEnabled,
            isNavOption: feature.isNavOption,
            path: feature.path,
            component: getComponent(feature)!,

            icon: Object.values(featureIconCollection).find(([key, value]) => {
                return key === feature.name ? value : undefined;
            }),
        };

        siteEnabledComponents.set(feature.name, enabledFeature);
    });
    return siteEnabledComponents;
};

const getComponent = (feature: SiteFeature): (() => JSX.Element) => {
    const componentCollection: Map<string, () => JSX.Element> = new Map<string, () => JSX.Element>();
    componentCollection.set('actuals', ActualsPage);
    componentCollection.set('about', AboutPage);
    componentCollection.set('events', EventsPage);
    componentCollection.set('donation', DonationPage);
    componentCollection.set('contact', ContactPage);
    return componentCollection.get(feature.name)!;
};

export const getFeatureCollection: FeatureCollecion = {
    getSiteFeatureComponents: buildComponents(),
    getSiteFeatures: siteEnabledFeatures,
};
