import { TComponentContent } from './TComponentContent';
import { TContentParagraph } from './TContentParagraph';

export type TMember = TComponentContent & {
    memberName?: string;
    memberMotto?: string;
    memberSummary?: string;
    memberTitle?: string;
    memberBioSections?: Map<string, TContentParagraph>;
};
