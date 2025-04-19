<script lang="ts" setup>
import {defineEmits, defineProps, nextTick, ref, watch} from 'vue';
import {
    FileBrowserConfig,
    ItemCrudConfig,
    TableConfig,
    TablePermission,
    TableType,
    WebElement,
    WebElementConfig,
} from 'lkt-vue-kernel';
import LktWebElementBox from "@/lib-components/LktWebElementBox.vue";

const emit = defineEmits([
    'update:modelValue',
])

const props = withDefaults(defineProps<{
    modelValue: WebElement[]
    parent: WebElement
    layoutSelector?: string
    lang: string
    isChild?: boolean
    isPreview?: boolean
    fileBrowserConfig: FileBrowserConfig
    modalCrudConfig: ItemCrudConfig
}>(), {
    layoutSelector: '',
    isPreview: false,
    isChild: true,
});

const items = ref(props.modelValue);
const appendingItems = ref(false);
const tableRef = ref(null);

console.log('items: ', items.value);

watch(items, (v) => {
    emit('update:modelValue', v);
}, {deep: true})
</script>

<template>
    <div>
        <span class="like-lkt-field-label">Web Elements</span>
        <lkt-table
            ref="tableRef"
            class="lkt-elements-table"
            v-model="items"
            v-bind="<TableConfig>{
                type: isPreview ? TableType.Table : TableType.Item,
                slotItemVar: 'element',
                editMode: true,
                hideTableHeader: true,
                perms: isChild ? [TablePermission.Update, TablePermission.Sort] : [TablePermission.Create, TablePermission.Update, TablePermission.Sort],
                itemsContainerClass: (!isChild) ? 'lkt-grid-1' : layoutSelector,
                itemContainerClass: (el: WebElementConfig): string => {
                    if (!el.layout || props.isPreview) return '';
                    let r = [];

                    if (el.layout.columns && el.layout.columns.length > 0) r.push(el.layout.columns.join(' '));

                    return r.join(' ');
                },
                requiredItemsForBottomCreate: 10,
                drag: {
                    enabled: isPreview,
                    isDisabled: false,
                    canRender: true,
                    isValid: true,
                },
                createButton: isChild ? false : {
                    text: 'Add element',
                    icon: 'lkt-icn-more',
                    modal: 'lkt-web-element-select',
                    modalData: {
                        items: items,
                        index: items.length,
                        fileBrowserConfig,
                        modalCrudConfig,
                        onAppend: () => {
                            appendingItems = true;
                            nextTick(() => {
                                appendingItems = false;
                            })
                        }
                    }
                },
            }"
        >
            <template #item="{_, index}">
                <lkt-web-element-box
                    v-model="items[index]"
                    :index="index"
                    :lang="lang"
                    :is-preview="isPreview"
                    :parent-children="items"
                    :parent="parent"
                    :file-browser-config="fileBrowserConfig"
                    :modal-crud-config="modalCrudConfig"
                    :parent-layout-component="tableRef"
                />
            </template>
        </lkt-table>
    </div>
</template>
