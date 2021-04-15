import { ComponentCollection } from '../components/common/interface/ComponentCollection';
import SiteFeature from '../components/common/interface/SiteFeature';
import { SiteFeatureComponent } from '../components/common/interface/SiteFeatureComponent';
import AboutPage from '../pages/AboutPage';
import ActualsPage from '../pages/ActualsPage';
import ContactPage from '../pages/ContactPage';
import DonationPage from '../pages/DonationPage';
import EventsPage from '../pages/EventsPage';

const siteEnabledFeatureComponents: SiteFeatureComponent[] = [];
const siteEnabledFeatures: SiteFeature[] = [];
const componentCollection = new Map<string, JSX.Element | undefined>();

export const getSiteFeatureComponents = (): SiteFeatureComponent[] => {
    buildComponents();
    return siteEnabledFeatureComponents;
};

export const getSiteFeatures = (): SiteFeature[] => {
    buildFeatures();
    return siteEnabledFeatures;
};

const buildFeatures = (): void => {
    siteEnabledFeatures.push(
        {
            id: 'null1',
            name: 'actuals',
            displayName: 'Aktuális',
            path: '/actuals',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null2',
            name: 'about',
            displayName: 'Bemutatkozás',
            path: '/about',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null3',
            name: 'events',
            displayName: 'Események',
            path: '/events',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null4',
            name: 'donation',
            displayName: 'Támogatás',
            path: '/donation',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null6',
            name: 'contact',
            displayName: 'Kapcsolat',
            path: '/contact',
            isEnabled: true,
            isNavOption: true,
        },
        {
            id: 'null5',
            name: 'downloads',
            displayName: 'Letöltések',
            path: '/downloads',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null7',
            name: 'media',
            displayName: 'Médiatár',
            path: '/media',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null8',
            name: 'classes',
            displayName: 'Tanfolyamok',
            path: '/classes',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null9',
            name: 'publications',
            displayName: 'Kiadványok',
            path: '/publications',
            isEnabled: false,
            isNavOption: false,
        },
        {
            id: 'null10',
            name: 'webshop',
            displayName: 'Webáruház',
            path: '/webshop',
            isEnabled: false,
            isNavOption: false,
        },
    );
};
const buildComponents = (): void => {
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

        siteEnabledFeatureComponents.push(enabledFeature);
    });
};

const getComponent = (feature: SiteFeature): JSX.Element | undefined => {
    componentCollection.set('actuals', ActualsPage());
    componentCollection.set('about', AboutPage());
    componentCollection.set('events', EventsPage());
    componentCollection.set('donation', DonationPage());
    componentCollection.set('contact', ContactPage());

    return componentCollection.get(feature.name);
};
