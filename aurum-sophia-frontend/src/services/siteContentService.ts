import { SitePageContentCollection } from '../components/common/interface/collection/SitePageContentCollection';
import { MolitioId } from '../components/common/interface/MolitioId';
import { PageContent } from '../components/common/interface/PageContent';
import * as siteContentDataMock from '../data/siteContentDataMock.json';

const mockString = JSON.stringify(siteContentDataMock.contentCollection);

const mockDataCollection: SitePageContentCollection = {
    contentCollection: new Map<MolitioId, PageContent>(JSON.parse(mockString)),
    getIdByMolitioTag: getIdByMolitioTag,
};

const sitePageDataCollection: SitePageContentCollection = {
    contentCollection: new Map<MolitioId, PageContent>(),
    getIdByMolitioTag: getIdByMolitioTag,
};

export const sitePageContentCollection = (): SitePageContentCollection => {
    /*fetch('../data/pagesData.json')
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => {
            console.log(error);
        });
        */
    sitePageDataCollection.contentCollection = new Map([...Array.from(mockDataCollection.contentCollection)]);
    console.log(sitePageDataCollection.contentCollection);
    return sitePageDataCollection;
};

function getIdByMolitioTag(tag: string): PageContent {
    const content = sitePageDataCollection.contentCollection.get({ molitioTag: tag });
    return content ? content : { data: { title: 'empty content' } };
}
