import { SiteIconCollection } from '../components/common/interface/SiteIconCollection';
import { FeatureIconCollection } from '../components/common/interface/FeatureIconCollection';
import { SiteIcon } from '../components/common/interface/SiteIcon';
/*     icon repository: https://fonts.google.com/icons?selected=Material+Icons */

export const siteIconCollection: SiteIconCollection = {
    reportProblem: {
        fontIcon: 'report_problem',
    },
    menu: {
        fontIcon: 'menu',
    },
    wbSunny: {
        fontIcon: 'wb_sunny',
    },
    water: {
        fontIcon: 'water',
    },
    cloudQueue: {
        fontIcon: 'cloud_queue',
    },
};

export const featureIconCollection: FeatureIconCollection = {
    icons: new Map<string, SiteIcon>([
        [
            'actuals',
            {
                fontIcon: 'new_releases',
            },
        ],

        [
            'about',
            {
                fontIcon: 'info',
            },
        ],
        [
            'events',
            {
                fontIcon: 'events',
            },
        ],
        [
            'donation',
            {
                fontIcon: 'payments',
            },
        ],
        [
            'contact',
            {
                fontIcon: 'contact_support',
            },
        ],
        [
            'downloads',
            {
                fontIcon: 'downloads',
            },
        ],
        [
            'media',
            {
                fontIcon: 'media',
            },
        ],
        [
            'classes',
            {
                fontIcon: 'classes',
            },
        ],
        [
            'publications',
            {
                fontIcon: 'publications',
            },
        ],
        [
            'webshop',
            {
                fontIcon: 'webshop',
            },
        ],
    ]),
};
