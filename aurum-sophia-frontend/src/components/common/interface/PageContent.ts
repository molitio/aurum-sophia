import { MolitioId } from './MolitioId';

export interface PageContent {
    data: {
        title: string;
        textContent?: string;
        imagesUrl?: Map<MolitioId, string>;
    };
}
