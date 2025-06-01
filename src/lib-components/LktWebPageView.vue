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
import {computed, nextTick, ref, watch} from "vue";
import LktWebElements from "./LktWebElements.vue";
import {getCurrentLanguage} from "lkt-i18n";
import {useRoute, useRouter} from "vue-router";

const props = withDefaults(defineProps<{
    modelValue?: WebPageConfig;
    crudConfig?: ItemCrudConfig;
    modalCrudConfig?: ItemCrudConfig;
    fileBrowserConfig?: FileBrowserConfig;
}>(), {

});

const route = useRoute();
const slug = ref(route.path);

const webPage = ref(new WebPage(props.modelValue));
const itemCrudRef = ref(null);
const editing = ref(false);
const ready = ref(false);

watch(route, (to) => {
    webPage.value = {};
    slug.value = route.path;
    ready.value = false;
    nextTick(() => ready.value = true);
}, {flush: 'pre', immediate: true, deep: true});

const onCrudUpdate = () => {
    itemCrudRef.value.turnStoredDataIntoOriginal();
}

watch(() => webPage.value.name, () => {
    if (ready.value && typeof webPage.value.updateSlug === 'function') {
        webPage.value.updateSlug();
    }
})
</script>

<template>
    <section class="lkt-web-page">
        <lkt-item-crud
            v-if="ready"
            ref="itemCrudRef"
            v-model="webPage"
            v-model:editing="editing"
            v-bind="<ItemCrudConfig>{
                readResource: 'r-web-page-view',
                readData: {
                    slug,
                },
                createButton: false,
                updateButton: false,
                dropButton: false,
            }"
            :title="webPage.name === '' ? 'Page name' : webPage.name"
        >
            <template #item>
                <lkt-web-elements
                    v-if="webPage.id > 0"
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