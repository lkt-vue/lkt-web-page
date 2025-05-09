import { FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType } from 'lkt-vue-kernel';
type __VLS_Props = {
    modalName: string;
    modalKey: string;
    zIndex: number;
    fileBrowserConfig: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
    element: WebElement;
    parent: WebElement | WebPage;
    parentType: WebParentType;
    afterElement?: number;
    beforeElement?: number;
    onUpdate?: Function;
    defaultAppearance?: string;
    isSubElement?: boolean;
    beforeClose?: undefined;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    zIndex: number;
    modalName: string;
    modalKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
