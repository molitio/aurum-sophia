import { TPageContent } from '../components/common/type/TPageContent';
import * as siteContentDataMock from '../data/siteContentDataMock.json';

const getMockDataCollection = (): Map<string, TPageContent> => {
    const mockContentString = JSON.stringify(siteContentDataMock.pageContentCollection);
    const mockEventsString = JSON.stringify(siteContentDataMock.pageEventsCollection);
    const mockContentDataCollection = new Map<string, TPageContent>(JSON.parse(mockContentString));
    const mockEventsDataCollection = new Map<string, TPageContent>(JSON.parse(mockEventsString));
    return new Map([...mockContentDataCollection, ...mockEventsDataCollection]);
};

export const sitePageContentCollection = async (): Promise<Map<string, TPageContent> | undefined> => {
    try {
        const content = getMockDataCollection();
        return content;
    } catch (error: any) {
        console.log(error.message);
    }
};
