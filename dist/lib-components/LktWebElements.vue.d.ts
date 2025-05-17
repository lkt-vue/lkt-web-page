import { FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType } from 'lkt-vue-kernel';
type __VLS_Props = {
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
};
declare var __VLS_12: {};
type __VLS_Slots = {} & {
    'web-element-actions'?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "crud-update": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onCrud-update"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    editing: boolean;
    parentType: WebParentType;
    isPreview: boolean;
    layoutSelector: string;
    isChild: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
