import { TComponentContent } from './TComponentContent';
import { TMolitioId } from './TMolitioId';

export type TPageContent = {
    molitioId: TMolitioId;
    title: string;
    textContent?: string;
    dateCreated?: string;
    imagesUrl?: Map<string, string>;
    componentContent?: Map<string, TComponentContent>;
    expanded?: boolean;
};
