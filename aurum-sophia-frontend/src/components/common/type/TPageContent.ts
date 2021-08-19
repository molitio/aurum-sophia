import { TMolitioId } from './TMolitioId';

export type TPageContent = {
    molitioId: TMolitioId;
    title: string;
    textContent?: string;
    dateCreated?: string;
    imagesUrl?: Map<TMolitioId, string>;
};
