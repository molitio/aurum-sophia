import { TMolitioId } from '../components/common/type/TMolitioId';
import { TPageContent } from '../components/common/type/TPageContent';
import * as siteContentDataMock from '../data/siteContentDataMock.json';

const getMockDataCollection = async (): Promise<Map<TMolitioId, TPageContent>> => {
    const mockString = JSON.stringify(siteContentDataMock.contentCollection);
    const mockDataCollection = new Map<TMolitioId, TPageContent>(JSON.parse(mockString));
    return mockDataCollection;
};

export const sitePageContentCollection = async (): Promise<Map<TMolitioId, TPageContent>> => {
    /*fetch('../data/pagesData.json')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
        console.log(error);
    });
    */

    const sitePageDataCollection = await getMockDataCollection();
    console.log(sitePageDataCollection);
    return sitePageDataCollection;
};
