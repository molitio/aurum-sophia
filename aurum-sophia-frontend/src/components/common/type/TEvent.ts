import { TComponentContent } from './TComponentContent';
import { TEventPresentation } from './TEventPresentation';

export type TEvent = TComponentContent & {
    eventTime?: string;
    eventSummary?: string;
    eventLocation?: string;
    eventTextContent?: string;
    presentations?: Map<string, TEventPresentation>;
};
