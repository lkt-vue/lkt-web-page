import { FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType } from 'lkt-vue-kernel';
type __VLS_Props = {
    modalName: string;
    modalKey: string;
    zIndex: number;
    parent: WebElement | WebPage;
    parentType?: WebParentType;
    fileBrowserConfig: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
    onUpdate?: Function;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    zIndex: number;
    modalName: string;
    modalKey: string;
    parentType: WebParentType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
