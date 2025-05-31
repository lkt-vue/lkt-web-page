import { FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType } from "lkt-vue-kernel";
export interface WebElementsProps {
    modelValue: WebElement[];
    parent: WebElement | WebPage;
    parentType?: WebParentType;
    layoutSelector?: string;
    defaultAppearance?: string;
    lang: string;
    isChild?: boolean;
    isPreview?: boolean;
    isSubElement?: boolean;
    fileBrowserConfig: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
    disabled?: boolean;
    editing?: boolean;
    events?: {
        onSubElementUpdate?: Function;
    };
}
