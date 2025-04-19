import { Component } from 'vue';
import { FileBrowserConfig, ItemCrudConfig, WebElement } from 'lkt-vue-kernel';
type __VLS_Props = {
    modalName: string;
    modalKey: string;
    zIndex: number;
    fileBrowserConfig: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
    element: WebElement;
    parent?: WebElement;
    parentChildren: WebElement[];
    indexInParentChildren: number;
    onUpdate: Function;
    parentLayoutComponent?: Component;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    zIndex: number;
    modalName: string;
    modalKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
