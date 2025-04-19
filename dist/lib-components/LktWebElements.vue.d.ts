import { FileBrowserConfig, ItemCrudConfig, WebElement } from 'lkt-vue-kernel';
type __VLS_Props = {
    modelValue: WebElement[];
    parent: WebElement;
    layoutSelector?: string;
    lang: string;
    isChild?: boolean;
    isPreview?: boolean;
    fileBrowserConfig: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    isPreview: boolean;
    layoutSelector: string;
    isChild: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
