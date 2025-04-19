import {WebElement, WebElementLayoutType} from "lkt-vue-kernel";

export const getLayoutCss = (webElement: WebElement, isPreview: boolean = false) => {
    if (!webElement.layout || isPreview) return '';
    let r = [];

    if (webElement.layout.type === WebElementLayoutType.FlexRow && (!webElement.layout.amountOfItems || webElement.layout.amountOfItems.length === 0)) {
        r.push('lkt-flex-row');

    } else if (webElement.layout.type === WebElementLayoutType.FlexRows && (!webElement.layout.amountOfItems || webElement.layout.amountOfItems.length === 0)) {
        r.push('lkt-flex-rows');

    } else if (webElement.layout.type === WebElementLayoutType.FlexColumn) {
        r.push('lkt-flex-column');
    }

    if (webElement.layout.amountOfItems && webElement.layout.amountOfItems.length > 0) {
        if (webElement.layout.type === WebElementLayoutType.FlexRow) {
            r.push(webElement.layout.amountOfItems.map(z => `lkt-flex-row-${z}`).join(' '));

        } else if (webElement.layout.type === WebElementLayoutType.FlexRows) {
            r.push(webElement.layout.amountOfItems.map(z => `lkt-flex-rows-${z}`).join(' '));

        } else {
            r.push(webElement.layout.amountOfItems.map(z => `lkt-grid-${z}`).join(' '));
        }
        // r.push(webElement.layout.amountOfItems.join(' '));
    }
    if (webElement.layout.alignItems && webElement.layout.alignItems.length > 0) r.push(webElement.layout.alignItems.join(' '));
    if (webElement.layout.justifyContent && webElement.layout.justifyContent.length > 0) r.push(webElement.layout.justifyContent.join(' '));

    if (r.length > 0) r.push('layout-mode');

    let response = r.join(' ');

    if (webElement.layout.type === WebElementLayoutType.FlexRows) {
        response = response.replace('flex-row-', 'flex-rows-');
    }
    return response;
}