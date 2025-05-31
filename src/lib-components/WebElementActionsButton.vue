<script setup lang="ts">

import {
    ButtonConfig,
    ButtonType,
} from "lkt-vue-kernel";
import {WebElementActionsButtonProps} from "./../components-interfaces/WebElementActionsButtonProps";

const props = withDefaults(defineProps<WebElementActionsButtonProps>(), {
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