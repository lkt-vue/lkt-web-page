<script setup lang="ts">

import {
    FieldConfig,
    FieldType,
    FileBrowserConfig,
    ItemCrudConfig,
    WebPage,
    WebPageConfig,
    WebParentType
} from "lkt-vue-kernel";
import {ref} from "vue";
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
</script>

<template>
    <section class="lkt-web-page">
        <lkt-item-crud
            ref="itemCrudRef"
            v-model="webPage"
            v-bind="crudConfig"
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