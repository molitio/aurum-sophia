import { ComponentCollection } from '../components/common/interface/ComponentCollection';
import { FeatureCollecion } from '../components/common/interface/FeatureCollection';
import { SiteFeature } from '../components/common/interface/SiteFeature';
import { SiteFeatureComponent } from '../components/common/interface/SiteFeatureComponent';
import AboutPage from '../pages/AboutPage';
import ActualsPage from '../pages/ActualsPage';
import ContactPage from '../pages/ContactPage';
import DonationPage from '../pages/DonationPage';
import EventsPage from '../pages/EventsPage';

export const getFeatureCollection: FeatureCollecion = (): => {
    const featureCollecion = {
        getSiteFeatureComponents: buildComponents(),
        getSiteFeatures: buildFeatures(),
    };
    return featureCollecion;
};

const buildFeatures = (): Map<string, SiteFeature> => {
    return new Map<string, SiteFeature>([
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
};

const buildComponents = (): Map<string, SiteFeatureComponent> => {
    const siteEnabledFeatures: Map<string, SiteFeature> = buildFeatures();
    const siteEnabledComponents: Map<string, SiteFeatureComponent> = new Map<string, SiteFeatureComponent>();

    siteEnabledFeatures.forEach((feature) => {
        const enabledFeature = new SiteFeatureComponent(
            feature.id,
            feature.name,
            feature.displayName,
            feature.isEnabled,
            feature.isNavOption,
            feature.path,
        );
        enabledFeature.component = feature.isEnabled ? getComponent(feature) : undefined;

        siteEnabledComponents.set(feature.name, enabledFeature);
    });
    return siteEnabledComponents;
};

const getComponent = (feature: SiteFeature): JSX.Element | undefined => {
    const componentCollection: Map<string, JSX.Element | undefined> = new Map<string, JSX.Element | undefined>();
    componentCollection.set('actuals', ActualsPage());
    componentCollection.set('about', AboutPage());
    componentCollection.set('events', EventsPage());
    componentCollection.set('donation', DonationPage());
    componentCollection.set('contact', ContactPage());

    return componentCollection.get(feature.name);
};
