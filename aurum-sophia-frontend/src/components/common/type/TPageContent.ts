import { TMolitioId } from './TMolitioId';

export type TPageContent = {
    title: string;
    textContent?: string;
    imagesUrl?: Map<TMolitioId, string>;
};
