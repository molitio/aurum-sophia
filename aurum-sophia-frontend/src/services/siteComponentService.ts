import { AboutPage } from '../pages/AboutPage';
import { ActualsPage } from '../pages/ActualsPage';
import { ContactPage } from '../pages/ContactPage';
import { ConnectPage } from '../pages/ConnectPage';
import { EventsPage } from '../pages/EventsPage';
import { TPageContent } from '../components/common/type/TPageContent';

// consider dynamic module loading from library

export const getSiteFeatureComponents = () =>
    new Map<string, (componentParameter: TPageContent) => JSX.Element>([
        ['actuals', ActualsPage],
        ['about', AboutPage],
        ['events', EventsPage],
        ['connect', ConnectPage],
        ['contact', ContactPage],
    ]);
