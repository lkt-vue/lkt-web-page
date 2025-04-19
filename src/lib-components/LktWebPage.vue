<script setup lang="ts">

import {
    FieldConfig, FieldType,
    getDefaultValues,
    ItemCrudButtonNavVisibility,
    ItemCrudConfig,
    ItemCrudMode,
    WebPage,
    WebPageConfig
} from "lkt-vue-kernel";
import {ref} from "vue";
import LktWebElements from "@/lib-components/LktWebElements.vue";
import {getCurrentLanguage} from "lkt-i18n";

const props = withDefaults(defineProps<{
    modelValue?: WebPageConfig;
    crudConfig?: ItemCrudConfig;
    modalCrudConfig?: ItemCrudConfig;
}>(), {

});

const webPage = ref(new WebPage(props.modelValue));

console.log('webPage: ', webPage.value);
</script>

<template>
    <section class="lkt-web-page">
        <lkt-item-crud
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
                />

                <lkt-field
                    v-if="false"
                    v-model="item.webElements"
                    v-bind="<FieldConfig>{
                        type: FieldType.Elements,
                        fileBrowserConfig: {
                            http: {
                                resource: 'file-browser'
                            },
                            entityCreateButton: {
                                text: 'Crea, leñe',
                                resource: 'mk-file-entity',
                            },
                            entityUpdateButton: {
                                text: 'Guarda, leñe',
                                resource: 'up-file-entity',
                            }
                        }
                    }"
                />
            </template>
        </lkt-item-crud>
    </section>
</template>