<script lang="ts" setup>
import {computed, defineEmits, defineProps, ref, watch} from 'vue';
import {
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

const emit = defineEmits([
    'update:modelValue',
    'crud-update',
])

const props = withDefaults(defineProps<{
    modelValue: WebElement[]
    parent: WebElement|WebPage
    parentType?: WebParentType
    layoutSelector?: string
    lang: string
    isChild?: boolean
    isPreview?: boolean
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

watch(items, (v) => {
    emit('update:modelValue', v);
}, {deep: true})

watch(editing, (v) => {
    console.log('editing', v);
}, {deep: true})

const computedTableConfig = computed(() => {

    let perms = [TablePermission.Update, TablePermission.Sort];
    if (!props.isChild) perms.push(TablePermission.Create);
    if (props.parentType === WebParentType.Page) perms.push(TablePermission.SwitchEditMode)

    let type = props.isPreview ? TableType.Table : TableType.Item;
    if (editing.value) type = TableType.Table;

    let itemsContainerClass = 'lkt-grid-1';
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
            }
        }
    }
});

const onCrudUpdate = () => {
    const resource = props.parentType === WebParentType.Page ? 'r-web-page-children' : 'r-web-element-children';

    httpCall(resource, {id: props.parent.id}).then((response: HTTPResponse) => {
        items.value = response.data.map(z => new WebElement(z));
        emit('crud-update');
    })
}
</script>

<template>
    <div>
        <span v-if="parentType === WebParentType.Page" class="like-lkt-field-label">Web Elements</span>
        <lkt-table
            class="lkt-elements-table"
            v-model="items"
            v-bind="computedTableConfig"
            v-model:edit-mode="editing"
        >
            <template #item="{_, index}">
                <lkt-web-element-box
                    v-model="items[index]"
                    :index="index"
                    :lang="lang"
                    :is-preview="isPreview"
                    :parent-children="items"
                    :parent="parent"
                    :parent-type="parentType"
                    :file-browser-config="fileBrowserConfig"
                    :modal-crud-config="modalCrudConfig"
                    :can-render-actions="!editing"
                    :disabled="disabled || !editing"
                    :editing="editing"
                    @crud-update="onCrudUpdate"
                />
            </template>
        </lkt-table>
    </div>
</template>
