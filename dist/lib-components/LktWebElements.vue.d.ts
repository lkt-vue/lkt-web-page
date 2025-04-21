import { FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType } from 'lkt-vue-kernel';
type __VLS_Props = {
    modelValue: WebElement[];
    parent: WebElement | WebPage;
    parentType?: WebParentType;
    layoutSelector?: string;
    lang: string;
    isChild?: boolean;
    isPreview?: boolean;
    fileBrowserConfig: FileBrowserConfig;
    modalCrudConfig: ItemCrudConfig;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "crud-update": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onCrud-update"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    parentType: WebParentType;
    isPreview: boolean;
    layoutSelector: string;
    isChild: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
