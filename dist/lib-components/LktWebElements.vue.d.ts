import { FileBrowserConfig, ItemCrudConfig, TableConfig, WebElement, WebPage, WebParentType } from 'lkt-vue-kernel';
import LktWebElementBox from "./LktWebElementBox.vue";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
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
declare const items: import("vue").Ref<{
    id?: number | string | undefined | undefined;
    type: import("lkt-vue-kernel").WebElementType;
    component?: string | undefined;
    props: {
        [x: string]: any;
        [x: number]: any;
        class?: string | undefined;
        icon?: string | undefined;
        header?: {
            en?: string | undefined;
            es?: string | undefined;
            de?: string | undefined;
            it?: string | undefined;
            fr?: string | undefined;
            pt?: string | undefined;
            ch?: string | undefined;
            jp?: string | undefined;
            nl?: string | undefined;
        } | undefined;
        subHeader?: {
            en?: string | undefined;
            es?: string | undefined;
            de?: string | undefined;
            it?: string | undefined;
            fr?: string | undefined;
            pt?: string | undefined;
            ch?: string | undefined;
            jp?: string | undefined;
            nl?: string | undefined;
        } | undefined;
        text?: {
            en?: string | undefined;
            es?: string | undefined;
            de?: string | undefined;
            it?: string | undefined;
            fr?: string | undefined;
            pt?: string | undefined;
            ch?: string | undefined;
            jp?: string | undefined;
            nl?: string | undefined;
        } | undefined;
    };
    children: /*elided*/ any[];
    subElements: /*elided*/ any[];
    layout: {
        type?: import("lkt-vue-kernel").WebElementLayoutType | undefined;
        amountOfItems?: [] | undefined;
        alignItems?: [] | undefined;
        justifyContent?: [] | undefined;
        columns: [];
        alignSelf: [];
        justifySelf: [];
    };
    config: {
        hasHeader?: boolean | undefined;
        hasSubHeader?: boolean | undefined;
        hasIcon?: boolean | undefined;
        amountOfCallToActions?: number | undefined;
        callToActions?: /*elided*/ any[] | undefined;
    };
    keyMoment: string;
    uid: string;
    updateKeyMoment: () => void;
    addChild: (child: WebElement, index?: number | undefined) => WebElement;
    getClone: () => WebElement;
    addSubElement: () => WebElement;
    isCustom: () => boolean;
    getCustomSettings: () => import("lkt-vue-kernel").WebElementSettings | undefined;
    feed: (data?: import("lkt-vue-kernel").LktObject, target?: WebElement | undefined) => void;
    assignProp: (key: string, value: any) => void;
}[], WebElement[] | {
    id?: number | string | undefined | undefined;
    type: import("lkt-vue-kernel").WebElementType;
    component?: string | undefined;
    props: {
        [x: string]: any;
        [x: number]: any;
        class?: string | undefined;
        icon?: string | undefined;
        header?: {
            en?: string | undefined;
            es?: string | undefined;
            de?: string | undefined;
            it?: string | undefined;
            fr?: string | undefined;
            pt?: string | undefined;
            ch?: string | undefined;
            jp?: string | undefined;
            nl?: string | undefined;
        } | undefined;
        subHeader?: {
            en?: string | undefined;
            es?: string | undefined;
            de?: string | undefined;
            it?: string | undefined;
            fr?: string | undefined;
            pt?: string | undefined;
            ch?: string | undefined;
            jp?: string | undefined;
            nl?: string | undefined;
        } | undefined;
        text?: {
            en?: string | undefined;
            es?: string | undefined;
            de?: string | undefined;
            it?: string | undefined;
            fr?: string | undefined;
            pt?: string | undefined;
            ch?: string | undefined;
            jp?: string | undefined;
            nl?: string | undefined;
        } | undefined;
    };
    children: /*elided*/ any[];
    subElements: /*elided*/ any[];
    layout: {
        type?: import("lkt-vue-kernel").WebElementLayoutType | undefined;
        amountOfItems?: [] | undefined;
        alignItems?: [] | undefined;
        justifyContent?: [] | undefined;
        columns: [];
        alignSelf: [];
        justifySelf: [];
    };
    config: {
        hasHeader?: boolean | undefined;
        hasSubHeader?: boolean | undefined;
        hasIcon?: boolean | undefined;
        amountOfCallToActions?: number | undefined;
        callToActions?: /*elided*/ any[] | undefined;
    };
    keyMoment: string;
    uid: string;
    updateKeyMoment: () => void;
    addChild: (child: WebElement, index?: number | undefined) => WebElement;
    getClone: () => WebElement;
    addSubElement: () => WebElement;
    isCustom: () => boolean;
    getCustomSettings: () => import("lkt-vue-kernel").WebElementSettings | undefined;
    feed: (data?: import("lkt-vue-kernel").LktObject, target?: WebElement | undefined) => void;
    assignProp: (key: string, value: any) => void;
}[]>;
declare const editing: import("vue").Ref<boolean, boolean>;
declare const refreshingSubElements: import("vue").Ref<boolean, boolean>;
declare const onCrudUpdate: () => void;
declare const computedTableConfig: import("vue").ComputedRef<TableConfig>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_12: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    'web-element-actions'?: (props: typeof __VLS_12) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    WebParentType: typeof WebParentType;
    LktWebElementBox: typeof LktWebElementBox;
    slots: typeof slots;
    items: typeof items;
    editing: typeof editing;
    refreshingSubElements: typeof refreshingSubElements;
    onCrudUpdate: typeof onCrudUpdate;
    computedTableConfig: typeof computedTableConfig;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
