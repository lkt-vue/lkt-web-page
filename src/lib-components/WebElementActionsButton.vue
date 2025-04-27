<script setup lang="ts">

import {
    ButtonConfig,
    ButtonType,
    FileBrowserConfig,
    ItemCrudConfig,
    WebElement,
    WebPage,
    WebParentType
} from "lkt-vue-kernel";

const props = withDefaults(defineProps<{
    webElement: WebElement
    canRenderActions?: boolean
    appendingItems?: boolean
    isSubElement?: boolean
    onUpdate?: Function
    parent: WebElement | WebPage
    parentType: WebParentType
    fileBrowserConfig: FileBrowserConfig
    modalCrudConfig: ItemCrudConfig
    defaultAppearance?: string
}>(), {
    index: -1,
    canRenderActions: true,
});
</script>

<template>
    <div class="lkt-element-actions" v-if="!appendingItems && canRenderActions">
        <lkt-button
            v-bind="<ButtonConfig>{
                type: ButtonType.Button,
                icon: 'lkt-icn-cog',
                modal: 'lkt-web-element-config',
                modalKey: webElement.id,
                modalData: {
                    element: webElement,
                    parent,
                    parentType,
                    fileBrowserConfig,
                    modalCrudConfig,
                    defaultAppearance,
                    isSubElement,
                    onUpdate
                }
            }"
        />
    </div>
</template>