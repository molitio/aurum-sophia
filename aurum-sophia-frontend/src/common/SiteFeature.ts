export default class SiteFeature {
    id: string;
    name: string;
    displayName: string;
    path: string;
    icon: string;
    isEnabled: boolean;
    isNavOption: boolean;
    component: () => JSX.Element | undefined;
    constructor(
        id: string,
        compononet: () => JSX.Element | undefined,
        { name = '', displayName = '', path = '', icon = '', isEnabled = false, isNavOpion = false } = {},
    ) {
        this.id = id;
        this.component = compononet;
        this.name = name;
        this.displayName = displayName;
        this.path = path;
        this.icon = icon;
        this.isEnabled = isEnabled;
        this.isNavOption = isNavOpion;
    }
}
