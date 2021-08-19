import { TMolitioId } from '../components/common/type/TMolitioId';
import { TPageContent } from '../components/common/type/TPageContent';
import * as siteContentDataMock from '../data/siteContentDataMock.json';

const getMockDataCollection = (): Map<string, TPageContent> => {
    const mockString = JSON.stringify(siteContentDataMock.contentCollection);
    const mockDataCollection = new Map<string, TPageContent>(JSON.parse(mockString));
    console.log(`getMockDataCollection -> [0].texContent: ${mockDataCollection.entries().next().value[1].textContent}`);

    return mockDataCollection;
};

export const sitePageContentCollection = async (): Promise<Map<string, TPageContent> | undefined> => {
    try {
        const content = getMockDataCollection();
        console.log(`sitePageContentCollection -> size: ${content.size}`);
        return content;
    } catch (error: any) {
        console.log(error.message);
    }
};
