import { MolitioId } from '../MolitioId';
import { PageContent } from '../PageContent';

export interface SitePageContentCollection {
    contentCollection: Map<MolitioId, PageContent | undefined>;
    getIdByMolitioTag: (tag: string) => PageContent;
}
