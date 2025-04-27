import { FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType } from "lkt-vue-kernel";
type __VLS_Props = {
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
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    canRenderActions: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
