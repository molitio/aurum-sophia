import { ComponentCollection } from '../components/common/interface/collection/ComponentCollection';
import { AboutPage } from '../pages/AboutPage';
import { ActualsPage } from '../pages/ActualsPage';
import { ContactPage } from '../pages/ContactPage';
import { DonationPage } from '../pages/DonationPage';
import { EventsPage } from '../pages/EventsPage';

export const siteFeatureComponents: ComponentCollection = {
    components: new Map<string, () => JSX.Element>([
        ['actuals', ActualsPage],
        ['about', AboutPage],
        ['events', EventsPage],
        ['donation', DonationPage],
        ['contact', ContactPage],
    ]),
};
