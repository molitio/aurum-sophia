import { TSiteError } from '../components/common/type/TSiteError';

export const getSiteErrorCollection = () =>
    new Map<string, TSiteError>([
        [
            '404',
            {
                code: 404,
                description: 'Navigációs hiba',
                message: 'A keresett oldal nem található...',
            },
        ],
        [
            '500',
            {
                code: 500,
                description: 'Belső hiba',
                message: 'Hiba lépett fel az alkalmazás működésében...',
            },
        ],
        [
            '401',
            {
                code: 401,
                description: 'Hiányzó jogosultság',
                message: 'Nincs jogosultság az oldal eléréséhez',
            },
        ],
    ]);
