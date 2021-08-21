import { TComponentContent } from './TComponentContent';
import { TEventPresentation } from './TEventPresentation';

export type TSiteEvent = TComponentContent & {
    eventTime?: string;
    eventSummary?: string;
    eventLocation?: string;
    eventTextContent?: string;
    presentations?: Map<string, TEventPresentation>;
};
