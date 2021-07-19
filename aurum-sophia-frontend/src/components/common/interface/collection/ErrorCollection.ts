import { SiteError } from '../SiteError';

export interface ErrorCollection {
    errors: Map<string, SiteError>;
}
