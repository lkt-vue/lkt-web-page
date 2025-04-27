<script setup lang="ts">

    import {useSlots} from "vue";

    const emit = defineEmits([
        'input',
        'keydown',
    ]);

    const slots = useSlots();

    const props = withDefaults(defineProps<{
        modelValue: string,
        disabled?: boolean
    }>(), {
        modelValue: '',
        disabled: false
    });

    const handleInputText = ($event: InputEvent) => {
        emit('input', $event);
    }
</script>

<template>
    <div class="lkt-text">
        <div :contenteditable="disabled ? 'false' : 'true'"
             class="lkt-element-editable-text"
             @input="handleInputText($event)"
             v-html="modelValue"
             v-once
        >
        </div>

        <template v-if="slots['web-element-actions']">
            <slot name="web-element-actions"/>
        </template>
    </div>
</template>