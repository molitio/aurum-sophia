import { PageContent } from '../PageContent';

export interface ComponentCollection {
    components: Map<string, (componentParameter: PageContent) => JSX.Element>;
}
