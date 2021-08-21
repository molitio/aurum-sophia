import { TSiteIcon } from '../components/common/type/TSiteIcon';
/*     icon repository: https://fonts.google.com/icons?selected=Material+Icons */

export const getSiteIconCollection = (): Map<string, TSiteIcon> =>
    new Map<string, TSiteIcon>([
        [
            'report_Problem',
            {
                fontIcon: 'report_problem',
            },
        ],
        [
            'menu',
            {
                fontIcon: 'menu',
            },
        ],
        [
            'wbSunny',
            {
                fontIcon: 'wb_sunny',
            },
        ],
        [
            'water',
            {
                fontIcon: 'water',
            },
        ],
        [
            'cloudQueue',
            {
                fontIcon: 'cloud_queue',
            },
        ],
    ]);

export const getFeatureIconCollection = (): Map<string, TSiteIcon> =>
    new Map<string, TSiteIcon>([
        [
            'actuals',
            {
                fontIcon: 'event_note',
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
            'connect',
            {
                fontIcon: 'share',
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
    ]);
