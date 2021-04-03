export default class SiteFeature {
    id: string;
    name: string;
    displayName: string;
    path: string;
    icon: string;
    isEnambled: boolean;
    constructor(id: string, { name = '', displayName = '', path = '', icon = '', isEnabled = false } = {}) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.path = path;
        this.icon = icon;
        this.isEnambled = isEnabled;
    }
}
