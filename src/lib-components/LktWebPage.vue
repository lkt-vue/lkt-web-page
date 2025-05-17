<script setup lang="ts">

import {
    ButtonConfig,
    FieldConfig,
    FieldType,
    FileBrowserConfig,
    ItemCrudConfig,
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

const onCrudUpdate = () => {
    itemCrudRef.value.turnStoredDataIntoOriginal();
}

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
            v-bind="computedItemCrudConfig"
            :title="webPage.name"
        >
            <template #item="{item}">
                <div class="lkt-grid-1 lkt-grid-3--from-768">
                    <lkt-field
                        v-model="item.name"
                        v-bind="<FieldConfig>{
                            type: FieldType.Text,
                            label: 'Name',
                        }"
                    />
                </div>

                <lkt-web-elements
                    v-if="webPage.id > 0"
                    v-model="item.webElements"
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