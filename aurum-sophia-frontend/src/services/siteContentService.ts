import { TMolitioId } from '../components/common/type/TMolitioId';
import { TPageContent } from '../components/common/type/TPageContent';
import * as siteContentDataMock from '../data/siteContentDataMock.json';

const mockString = JSON.stringify(siteContentDataMock.contentCollection);

const mockDataCollection = new Map<TMolitioId, TPageContent>(JSON.parse(mockString));

export const sitePageContentCollection = (): Map<TMolitioId, TPageContent> => {
    /*fetch('../data/pagesData.json')
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => {
            console.log(error);
        });
        */
    const sitePageDataCollection = mockDataCollection;
    console.log(sitePageDataCollection);
    return sitePageDataCollection;
};
