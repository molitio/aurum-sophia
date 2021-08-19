import { createStyles, makeStyles } from '@material-ui/core';

export const createSiteStyle = (styleObject: any) => {
    const buildStyle = makeStyles(() => createStyles({ ...styleObject }));
    const style = buildStyle();
    return style;
};
