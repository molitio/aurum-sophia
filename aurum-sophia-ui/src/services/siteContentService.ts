import { TPageContent } from '../components/common/type/TPageContent';
import * as siteContentDataMock from '../data/siteContentDataMock.json';

const getMockDataCollection = (): Map<string, TPageContent> => {
    const mockContentString = JSON.stringify(siteContentDataMock.pageContentCollection);
    const mockContentDataCollection = new Map<string, TPageContent>(JSON.parse(mockContentString));
    return new Map([...mockContentDataCollection]);
};

export const sitePageContentCollection = async (): Promise<Map<string, TPageContent> | undefined> => {
    try {
        const content = getMockDataCollection();
        return content;
    } catch (error) {
        //TODO: log error
    }
};
