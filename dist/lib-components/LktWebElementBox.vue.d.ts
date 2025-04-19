import { FileBrowserConfig, ItemCrudConfig, WebElement } from 'lkt-vue-kernel';
import { Component } from 'vue';
type __VLS_Props = {
    modelValue: WebElement;
    parent?: WebElement;
    parentChildren: WebElement[];
    index?: number;
    lang?: string;
    isPreview?: boolean;
    canRenderActions?: boolean;
    fileBrowserConfig?: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
    parentLayoutComponent?: Component;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    index: number;
    isPreview: boolean;
    canRenderActions: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
