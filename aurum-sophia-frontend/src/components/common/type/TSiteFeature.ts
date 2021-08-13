import { TSiteIcon } from './TSiteIcon';

export type TSiteFeature = {
    id: string;
    name: string;
    displayName: string;
    isEnabled: boolean;
    isNavOption: boolean;
    path: string;
    icon?: TSiteIcon;
    component?: JSX.Element;
};
