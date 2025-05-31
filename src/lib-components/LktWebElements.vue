<script lang="ts" setup>
import {computed, defineEmits, defineProps, nextTick, ref, useSlots, watch} from 'vue';
import {
    ColumnConfig,
    FileBrowserConfig,
    ItemCrudConfig,
    TableConfig,
    TablePermission,
    TableType,
    WebElement,
    WebPage,
    WebParentType,
} from 'lkt-vue-kernel';
import LktWebElementBox from "./LktWebElementBox.vue";
import {httpCall, HTTPResponse} from "lkt-http-client";
import {WebElementBoxProps} from "@/components-interfaces/WebElementBoxProps";

const emit = defineEmits([
    'update:modelValue',
    'crud-update',
])

const slots = useSlots();

const props = withDefaults(defineProps<{
    modelValue: WebElement[]
    parent: WebElement|WebPage
    parentType?: WebParentType
    layoutSelector?: string
    defaultAppearance?: string
    lang: string
    isChild?: boolean
    isPreview?: boolean
    isSubElement?: boolean
    fileBrowserConfig: FileBrowserConfig
    modalCrudConfig: ItemCrudConfig
    disabled?: boolean
    editing?: boolean
}>(), {
    layoutSelector: '',
    isPreview: false,
    isChild: false,
    disabled: false,
    editing: false,
    parentType: WebParentType.Element
});

const items = ref(props.modelValue);
const editing = ref(props.editing);
const refreshingSubElements = ref(false);

watch(items, (v) => {
    emit('update:modelValue', v);
}, {deep: true})

watch(editing, (v) => {
    console.log('editing', v);
}, {deep: true})

const onCrudUpdate = () => {
    if (props.isSubElement) {
        refreshingSubElements.value = true;
        nextTick(() => {
            refreshingSubElements.value = false;
            emit('crud-update');
        })
        return;
    }

    const resource = props.parentType === WebParentType.Page ? 'r-web-page-children' : 'r-web-element-children';

    httpCall(resource, {id: props.parent.id}).then((response: HTTPResponse) => {
        items.value = response.data.map(z => new WebElement(z));
        emit('crud-update');
    })
}

const computedTableConfig = computed(() => {

    let perms = [TablePermission.Update, TablePermission.Sort];
    if (!props.isChild) perms.push(TablePermission.Create);
    if (props.parentType === WebParentType.Page) perms.push(TablePermission.SwitchEditMode)

    let type = props.isPreview ? TableType.Table : TableType.Item;
    type = TableType.Item;
    if (editing.value) type = TableType.Table;

    let itemsContainerClass = 'lkt-elements-table--default-grid';
    if (props.isChild) itemsContainerClass = props.layoutSelector;

    return <TableConfig>{
        type,
        perms,
        itemsContainerClass,
        slotItemVar: 'element',
        hideTableHeader: true,
        itemContainerClass: (el: WebElement): string => {
            if (!el.layout || props.isPreview) return '';
            let r = [];

            if (el.layout.columns && el.layout.columns.length > 0) r.push(el.layout.columns.join(' '));

            return r.join(' ');
        },
        requiredItemsForBottomCreate: 10,
        drag: {
            enabled: props.isPreview || editing.value,
            isDisabled: false,
            canRender: true,
            isValid: true,
        },
        createButton: props.isChild ? false : {
            text: 'Add element',
            icon: 'lkt-icn-more',
            modal: 'lkt-web-element-select',
            modalData: {
                fileBrowserConfig: props.fileBrowserConfig,
                modalCrudConfig: props.modalCrudConfig,
                parent: props.parent,
                parentType: props.parentType,
                onUpdate: onCrudUpdate,
            }
        },
        columns: [
            <ColumnConfig>{
                key: 'keyMoment',
                label: '',
                isForRowKey: true,
            }
        ]
    }
});
</script>

<template>
    <div class="lkt-web-elements">
        <span v-if="parentType === WebParentType.Page" class="like-lkt-field-label">Web Elements</span>
        <lkt-table
            class="lkt-elements-table"
            v-model="items"
            v-bind="computedTableConfig"
            v-model:edit-mode="editing"
            skip-table-items-container
        >
            <template #item="{_, index}">
                <lkt-web-element-box
                    v-if="!refreshingSubElements"
                    v-model="items[index]"
                    v-bind="<WebElementBoxProps>{
                        index,
                        lang,
                        isPreview,
                        parent,
                        parentType,
                        fileBrowserConfig,
                        modalCrudConfig,
                        editing,
                        defaultAppearance,
                        isSubElement,
                        canRenderActions: !editing,
                        disabled: disabled || !editing,
                    }"
                    @crud-update="onCrudUpdate"
                />
            </template>
        </lkt-table>

        <template v-if="slots['web-element-actions']">
            <slot name="web-element-actions"/>
        </template>
    </div>
</template>
