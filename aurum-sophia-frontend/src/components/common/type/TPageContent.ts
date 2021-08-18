import { TMolitioId } from './TMolitioId';

export type TPageContent = {
    title: string;
    textContent?: string;
    dateCreated?: string;
    imagesUrl?: Map<TMolitioId, string>;
};
