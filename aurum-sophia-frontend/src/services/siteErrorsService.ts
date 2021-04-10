import SiteError from '../common/SiteError';

const getSiteErrors = (): SiteError[] => {
    const errors: SiteError[] = [];

    errors.push(
        {
            error: {
                code: 404,
                description: 'Navigációs hiba',
                message: 'A keresett oldal nem található...',
            },
        },
        {
            error: {
                code: 500,
                description: 'Belső hiba',
                message: 'Hiba lépett fel az alkalmazás működésében...',
            },
        },
        {
            error: {
                code: 401,
                description: 'Hiányzó jogosultság',
                message: 'Nincs jogosultság az oldal eléréséhez',
            },
        },
    );

    return errors;
};

export default getSiteErrors;
