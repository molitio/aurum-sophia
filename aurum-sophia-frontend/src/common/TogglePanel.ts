export interface Panel {
    sidePanel: boolean;
}

interface TogglePanel {
    navigationState: Panel;
    toggle: {
        (): void;
    };
}

export default TogglePanel;
