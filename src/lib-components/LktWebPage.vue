<script setup lang="ts">

import {
    BoxConfig,
    ButtonConfig,
    FieldConfig,
    FieldType,
    FileBrowserConfig,
    FormConfig,
    FormInstance,
    ItemCrudConfig, OptionConfig,
    WebPage,
    WebPageConfig,
    WebParentType
} from "lkt-vue-kernel";
import {computed, ref} from "vue";
import LktWebElements from "./LktWebElements.vue";
import {getCurrentLanguage} from "lkt-i18n";

const props = withDefaults(defineProps<{
    modelValue?: WebPageConfig;
    crudConfig?: ItemCrudConfig;
    modalCrudConfig?: ItemCrudConfig;
    fileBrowserConfig?: FileBrowserConfig;
}>(), {

});

const webPage = ref(new WebPage(props.modelValue));
const itemCrudRef = ref(null);
const editing = ref(false);

const onCrudUpdate = () => {
    itemCrudRef.value.turnStoredDataIntoOriginal();
}

const pageStatuses = computed(() => {
    return <Array<OptionConfig>>[
        {value: 'draft', label: 'Draft'},
        {value: 'public', label: 'Public'},
        {value: 'scheduled', label: 'Scheduled'},
    ];
})

const computedItemForm = computed(() => {
    return <FormConfig>{
        items: [
            FormInstance.mkFormItemConfig({
                container: {
                    tag: 'lkt-box',
                    props: <BoxConfig>{
                        title: 'Main data',
                    }
                },
                uiConfig: {
                    formClass: 'lkt-grid-1 lkt-grid-3--from-768',
                },
                items: [
                    FormInstance.mkFieldItemConfig('name', {
                        type: FieldType.Text,
                        label: 'Name',
                        mandatory: true,
                        canUndo: true,
                    }),
                    FormInstance.mkFieldItemConfig('status', {
                        type: FieldType.Select,
                        label: 'Status',
                        mandatory: true,
                        canUndo: true,
                        options: pageStatuses.value,
                    }),
                ]
            }),
            FormInstance.mkSlotItemConfig('web-elements', {canRender: webPage.value.id > 0}),
        ]
    }
})

const computedItemCrudConfig = computed((): ItemCrudConfig => {

    let createButton: false | ButtonConfig = false;
    let updateButton: false | ButtonConfig = false;

    createButton = {
        ...props.crudConfig.createButton,
        resourceData: {
            ...props.crudConfig.createButton?.resourceData,
            ...webPage.value,
        }
    }
    updateButton = {
        ...props.crudConfig.updateButton,
        resourceData: {
            ...props.crudConfig.updateButton?.resourceData,
            ...webPage.value,
        }
    }

    return {
        ...props.crudConfig,
        createButton,
        updateButton,
        form: computedItemForm.value,
        dropButton: {
            ...props.crudConfig.dropButton,
            resourceData: {
                ...props.crudConfig.dropButton?.resourceData,
                ...webPage.value,
            }
        },
    }
})
</script>

<template>
    <section class="lkt-web-page">
        <lkt-item-crud
            ref="itemCrudRef"
            v-model="webPage"
            v-model:editing="editing"
            v-bind="computedItemCrudConfig"
            :title="webPage.name === '' ? 'New page' : webPage.name"
        >
            <template #web-elements>
                <lkt-web-elements
                    v-model="webPage.webElements"
                    :lang="getCurrentLanguage()"
                    :modal-crud-config="modalCrudConfig"
                    :file-browser-config="fileBrowserConfig"
                    :parent="webPage"
                    :parent-type="WebParentType.Page"
                    :is-preview="false"
                    disabled
                    @crud-update="onCrudUpdate"
                />
            </template>
        </lkt-item-crud>
    </section>
</template>