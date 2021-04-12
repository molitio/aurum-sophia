interface SiteFeature {
    id: string;
    name: string;
    displayName: string;
    isEnabled: boolean;
    isNavOption: boolean;
    path: string;
    icon?: string;
    component?: JSX.Element;
}

export default SiteFeature;
