<script setup lang="ts">
import {
    ButtonConfig,
    ButtonType,
    FileBrowserConfig,
    ItemCrudConfig,
    WebElement,
    WebElementType,
    WebPage,
    WebParentType,
} from 'lkt-vue-kernel';
import {getCurrentLanguage} from 'lkt-i18n';
import {computed, ref, watch} from 'vue';
import LktText from "./LktText.vue";
import LktWebElements from "./LktWebElements.vue";
import {getLayoutCss} from "../functions/layout-functions";

const emit = defineEmits([
    'update:modelValue',
    'crud-update',
]);

    const props = withDefaults(defineProps<{
        modelValue: WebElement
        parent: WebElement|WebPage
        parentType: WebParentType
        index?: number
        lang?: string
        isPreview?: boolean
        isSubElement?: boolean
        canRenderActions?: boolean
        fileBrowserConfig: FileBrowserConfig
        modalCrudConfig: ItemCrudConfig
        disabled?: boolean
        editing?: boolean
        defaultAppearance?: string
    }>(), {
        index: -1,
        isPreview: false,
        disabled: false,
        canRenderActions: true,
    });

    const webElement = ref(props.modelValue);

    watch(() => props.modelValue, (newValue, oldValue) => {
        webElement.value = newValue;
    })

    watch(webElement, (newValue, oldValue) => {
        emit('update:modelValue', newValue);
    })

    const appendingItems = ref(false);

    const handleInputText = (event: Event, prop: string = 'text') => {
        const text = (event.target as HTMLElement).innerHTML.trim()

        if (text !== webElement.value.props[prop][currentLang]) {
            webElement.value.props[prop][currentLang] = text;
        }
    }

    const currentLang = props.lang ?? getCurrentLanguage();

const computedIsTypeOne = computed(() => {
    return [
        WebElementType.LktLayoutBox,
        WebElementType.LktTextBox,
        WebElementType.LktLayoutAccordion,
        WebElementType.LktTextAccordion,
    ].includes(webElement.value.type);
})
const computedIsLayoutContainer = computed(() => {
    return [
        WebElementType.LktLayoutBox,
        WebElementType.LktLayoutAccordion,
        WebElementType.LktLayout,
    ].includes(webElement.value.type);
})

const computedComponent = computed(() => {
    if ([
        WebElementType.LktLayoutBox,
        WebElementType.LktTextBox,
    ].includes(webElement.value.type)) {
        return 'lkt-box';
    }

    if ([
        WebElementType.LktLayoutAccordion,
        WebElementType.LktTextAccordion,
    ].includes(webElement.value.type)) {
        return 'lkt-accordion';
    }
})

const computedComponentAppearance = computed(() => {
    if (webElement.value.props.class) return webElement.value.props.class;
    return props.defaultAppearance
})

const onModalUpdate = () => {
    emit('crud-update');
}
</script>

<template>
    <div class="lkt-element" :class="`is-${webElement.type} is-${webElement.id}`" :key="webElement.keyMoment">
        <lkt-text
            v-if="webElement.type === WebElementType.LktText"
            v-model="webElement.props.text[currentLang]"
            :disabled="disabled || parentType === WebParentType.Page"
            @input="handleInputText($event)"
        />

        <component
            v-else-if="computedIsTypeOne"
            :is="computedComponent"
            :icon="webElement.config.hasHeader && webElement.config.hasIcon ? webElement.props.icon : ''"
            :class="computedComponentAppearance"
        >
            <template #header v-if="webElement.config?.hasHeader">
                <lkt-text
                    v-model="webElement.props.header[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'header')"
                />
            </template>
            <lkt-web-elements
                v-if="computedIsLayoutContainer"
                v-model="webElement.children"
                :layout-selector="getLayoutCss(webElement)"
                is-child
                :lang="currentLang"
                :is-preview="isPreview"
                :parent="webElement"
                :parent-type="WebParentType.Element"
                :modal-crud-config="modalCrudConfig"
                :file-browser-config="fileBrowserConfig"
                :disabled="disabled"
                :editing="editing"
            />
            <lkt-text
                v-else
                v-model="webElement.props.text[currentLang]"
                :disabled="disabled || parentType === WebParentType.Page"
                @input="handleInputText($event, 'text')"
            />
        </component>

        <lkt-image
            v-else-if="webElement.type === WebElementType.LktImage"
            :class="computedComponentAppearance"
            :src="webElement.props.src"
            :alt="typeof webElement.props.alt === 'object' ? webElement.props.alt[currentLang] : ''"
            :title="typeof webElement.props.title === 'object' ? webElement.props.title[currentLang] : ''"
        >
            <template #text>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'text')"
                />
            </template>
        </lkt-image>

        <lkt-icon
            v-else-if="webElement.type === WebElementType.LktIcon"
            :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
            :class="computedComponentAppearance"
        >
            <template #text>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'text')"
                />
            </template>
        </lkt-icon>

        <lkt-header
            v-else-if="webElement.type === WebElementType.LktHeader"
            :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
            :class="computedComponentAppearance"
        >
            <template #text>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'text')"
                />
            </template>
        </lkt-header>

        <lkt-button
            v-else-if="webElement.type === WebElementType.LktButton"
            :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
            :class="computedComponentAppearance"
        >
            <template #text>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'text')"
                />
            </template>
        </lkt-button>

        <lkt-anchor
            v-else-if="webElement.type === WebElementType.LktAnchor"
            :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
            :class="computedComponentAppearance"
        >
            <template #text>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'text')"
                />
            </template>
        </lkt-anchor>

        <lkt-banner
            v-else-if="webElement.type === WebElementType.LktTextBanner"
            :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
            :class="computedComponentAppearance"
            :opacity="webElement.props.opacity"
            :art="webElement.props.art"
            :media="webElement.props.media"
            :type="webElement.props.type"
        >
            <template #header v-if="webElement.config?.hasHeader">
                <lkt-text
                    v-model="webElement.props.header[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'header')"
                />
            </template>
            <template #subHeader v-if="webElement.config?.hasSubHeader">
                <lkt-text
                    v-model="webElement.props.subHeader[currentLang]"
                    :disabled="disabled || parentType === WebParentType.Page"
                    @input="handleInputText($event, 'subHeader')"
                />
            </template>
            <lkt-text
                v-model="webElement.props.text[currentLang]"
                :disabled="disabled || parentType === WebParentType.Page"
                @input="handleInputText($event, 'text')"
            />
        </lkt-banner>

        <section
            v-else-if="webElement.type === WebElementType.LktIcons"
        >
            <lkt-header v-if="webElement.config?.hasHeader">
                <template #text >
                    <lkt-text
                        v-model="webElement.props.header[currentLang]"
                        :disabled="disabled || parentType === WebParentType.Page"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
            </lkt-header>

            <lkt-text
                v-model="webElement.props.text[currentLang]"
                :disabled="disabled || parentType === WebParentType.Page"
                @input="handleInputText($event, 'text')"
            />

            <lkt-web-elements
                v-model="webElement.subElements"
                :layout-selector="getLayoutCss(webElement)"
                is-child
                :lang="currentLang"
                :is-preview="isPreview"
                :parent="webElement"
                :parent-type="WebParentType.Element"
                :modal-crud-config="modalCrudConfig"
                :file-browser-config="fileBrowserConfig"
                :disabled="disabled"
                :editing="editing"
                :default-appearance="webElement.props.class"
                is-sub-element
            />

        </section>


        <lkt-web-elements
            v-else-if="webElement.type === WebElementType.LktLayout"
            v-model="webElement.children"
            :layout-selector="getLayoutCss(webElement)"
            is-child
            :lang="currentLang"
            :is-preview="isPreview"
            :parent="webElement"
            :parent-type="WebParentType.Element"
            :modal-crud-config="modalCrudConfig"
            :file-browser-config="fileBrowserConfig"
            :disabled="disabled"
            :editing="editing"
        />

        <component
            v-else
            :is="webElement.component"
            v-bind="webElement.props"
        />

        <div class="lkt-element-actions" v-if="!appendingItems && canRenderActions">
            <lkt-button
                v-bind="<ButtonConfig>{
                    type: ButtonType.Button,
                    text: webElement.type,
                    icon: 'lkt-icn-settings-cogs',
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
                        onUpdate: onModalUpdate
                    }
                }"
            />
        </div>
    </div>
</template>