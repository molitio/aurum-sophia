import { TComponentContent } from './TComponentContent';
import { TEventPresentation } from './TEventPresentation';

export type TMember = TComponentContent & {
    memberName?: string;
    memberSummary?: string;
    memberTitle?: string;
    memberBio?: string;
};
