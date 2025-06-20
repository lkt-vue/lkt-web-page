<script setup lang="ts">

import {
    AccordionConfig,
    AccordionToggleMode,
    AccordionType,
    ButtonConfig,
    FieldAutoValidationTrigger,
    FieldType,
    FileBrowserConfig,
    FormConfig,
    FormInstance,
    ItemCrudConfig,
    OptionConfig,
    WebPage,
    WebPageConfig,
    WebPageStatus,
    WebParentType
} from "lkt-vue-kernel";
import {computed, ref, watch} from "vue";
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
const perms = ref(['create', 'switch-edit-mode']);

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

watch(() => webPage.value.nameData, () => {
    webPage.value.updateSlug();
}, {deep: true})

const computedItemForm = computed(() => {
    return <FormConfig>{
        items: [
            FormInstance.mkFormItemConfig({
                container: {
                    tag: 'lkt-accordion',
                    props: <AccordionConfig>{
                        type: AccordionType.Always,
                        title: 'Main data',
                        toggleMode: AccordionToggleMode.Height
                    }
                },
                uiConfig: {
                    formClass: 'lkt-grid-1 lkt-grid-3--from-768',
                },
                items: [
                    FormInstance.mkFieldItemConfig('nameData', {
                        type: FieldType.Text,
                        label: 'Name',
                        mandatory: true,
                        canUndo: true,
                        canI18n: true,
                        validation: {
                            trigger: FieldAutoValidationTrigger.Blur
                        }
                    }),
                    FormInstance.mkFieldItemConfig('status', {
                        type: FieldType.Select,
                        label: 'Status',
                        mandatory: true,
                        canUndo: true,
                        options: pageStatuses.value,
                        validation: {
                            trigger: FieldAutoValidationTrigger.Blur
                        }
                    }),
                    FormInstance.mkFieldItemConfig('scheduledDate', {
                        type: FieldType.DateTime,
                        label: 'Scheduled date',
                        mandatory: webPage.value.status === WebPageStatus.Scheduled,
                        canUndo: true,
                        validation: {
                            trigger: FieldAutoValidationTrigger.Blur
                        }
                    }, {}, {canRender: webPage.value.status === WebPageStatus.Scheduled}),
                ]
            }),
            FormInstance.mkFormItemConfig({
                container: {
                    tag: 'lkt-accordion',
                    props: <AccordionConfig>{
                        type: AccordionType.Auto,
                        title: 'SEO',
                        toggleMode: AccordionToggleMode.Height
                    }
                },
                uiConfig: {
                    formClass: 'lkt-grid-1 lkt-grid-3--from-768',
                },
                items: [
                    FormInstance.mkFieldItemConfig('slugData', {
                        type: FieldType.Text,
                        label: 'Slug',
                        mandatory: true,
                        readMode: true,
                        canI18n: true,
                        validation: {
                            trigger: FieldAutoValidationTrigger.Blur
                        }
                    }),
                    FormInstance.mkFieldItemConfig('keywords', {
                        type: FieldType.Select,
                        label: 'Keywords',
                        multiple: true,
                        canUndo: true,
                        canTag: true,
                    }),
                ]
            }),
            FormInstance.mkSlotItemConfig('web-elements', {
                canRender: webPage.value.id > 0
            }),
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
            v-bind="computedItemCrudConfig"
            v-model="webPage"
            v-model:editing="editing"
            v-model:perms="perms"
            :title="webPage.name === '' ? 'Page name' : webPage.name"
        >
            <template #web-elements>
                <lkt-web-elements
                    v-if="webPage.id > 0"
                    v-model="webPage.webElements"
                    :lang="getCurrentLanguage()"
                    :modal-crud-config="modalCrudConfig"
                    :file-browser-config="fileBrowserConfig"
                    :parent="webPage"
                    :parent-type="WebParentType.Page"
                    :is-preview="false"
                    @crud-update="onCrudUpdate"
                />
            </template>
        </lkt-item-crud>
    </section>
</template>