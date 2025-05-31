import { FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType } from "lkt-vue-kernel";
export interface WebElementActionsButtonProps {
    webElement: WebElement;
    canRenderActions?: boolean;
    appendingItems?: boolean;
    isSubElement?: boolean;
    onUpdate?: Function;
    parent: WebElement | WebPage;
    parentType: WebParentType;
    fileBrowserConfig: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
    defaultAppearance?: string;
}
