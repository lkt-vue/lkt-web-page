<script setup lang="ts">
import {WebElementSettings} from "lkt-vue-kernel";

const props = withDefaults(defineProps<{
    settings: WebElementSettings
}>(), {
});
</script>

<template>
    <component
        v-if="settings.type === 'component'"
        :is="settings.component"
        v-bind="settings.componentProps"
    />
</template>