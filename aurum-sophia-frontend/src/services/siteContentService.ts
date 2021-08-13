import { IContentCollection } from '../components/common/interface/collection/ISitePageContentCollection';
import { TMolitioId } from '../components/common/type/TMolitioId';
import { TPageContent } from '../components/common/type/TPageContent';
import * as siteContentDataMock from '../data/siteContentDataMock.json';

const mockString = JSON.stringify(siteContentDataMock.contentCollection);

const mockDataCollection: IContentCollection = {
    contentCollection: new Map<TMolitioId, TPageContent>(JSON.parse(mockString)),
    getPageContentByMolitioTag: getIdByMolitioTag,
};

const sitePageDataCollection: IContentCollection = {
    contentCollection: new Map<TMolitioId, TPageContent>(),
    getPageContentByMolitioTag: getIdByMolitioTag,
};

export const sitePageContentCollection = (): IContentCollection => {
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

function getIdByMolitioTag(tag: string): TPageContent {
    const content = sitePageDataCollection.contentCollection.get({ molitioTag: tag });
    return content ? content : { title: 'empty content' };
}
