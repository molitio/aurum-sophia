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

/* export const getSiteFeatureByTag = (tag: string): JSX.Element => {
    const element = siteFeatureComponents.components.get(tag);
    return element
        ? element
        : ErrorPage({
              errorData: {
                  code: 404,
                  description: 'Component not found.',
                  message: 'Reference to a non existent component',
              },
          });
}; */
