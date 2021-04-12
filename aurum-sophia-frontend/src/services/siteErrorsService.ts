import SiteError from '../components/common/interface/SiteError';

const getSiteErrors = (): SiteError[] => {
    const errors: SiteError[] = [];

    errors.push(
        {
            errorData: {
                code: 404,
                description: 'Navigációs hiba',
                message: 'A keresett oldal nem található...',
            },
        },
        {
            errorData: {
                code: 500,
                description: 'Belső hiba',
                message: 'Hiba lépett fel az alkalmazás működésében...',
            },
        },
        {
            errorData: {
                code: 401,
                description: 'Hiányzó jogosultság',
                message: 'Nincs jogosultság az oldal eléréséhez',
            },
        },
    );

    return errors;
};

export default getSiteErrors;
