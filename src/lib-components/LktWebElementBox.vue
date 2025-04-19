<script setup lang="ts">
import {
    ButtonConfig,
    ButtonType,
    FileBrowserConfig, ItemCrudConfig,
    WebElement,
    WebElementLayoutType,
    WebElementType,
} from 'lkt-vue-kernel';
import {getCurrentLanguage} from 'lkt-i18n';
import {Component, ref, watch} from 'vue';
import LktText from "@/lib-components/LktText.vue";
import LktWebElements from "@/lib-components/LktWebElements.vue";

const emit = defineEmits(['update:modelValue']);

    const props = withDefaults(defineProps<{
        modelValue: WebElement
        parent?: WebElement
        parentChildren: WebElement[]
        index?: number
        lang?: string
        isPreview?: boolean
        canRenderActions?: boolean
        fileBrowserConfig?: FileBrowserConfig
        modalCrudConfig: ItemCrudConfig
        parentLayoutComponent?: Component
    }>(), {
        index: -1,
        isPreview: false,
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

    const getLayoutSelector = (element: WebElement) => {
        if (!element.layout || props.isPreview) return '';
        let r = [];

        if (element.layout.type === WebElementLayoutType.FlexRow && (!element.layout.amountOfItems || element.layout.amountOfItems.length === 0)) {
            r.push('lkt-flex-row');

        } else if (element.layout.type === WebElementLayoutType.FlexRows && (!element.layout.amountOfItems || element.layout.amountOfItems.length === 0)) {
            r.push('lkt-flex-rows');

        } else if (element.layout.type === WebElementLayoutType.FlexColumn) {
            r.push('lkt-flex-column');
        }

        if (element.layout.amountOfItems && element.layout.amountOfItems.length > 0) {
            if (element.layout.type === WebElementLayoutType.FlexRow) {
                r.push(element.layout.amountOfItems.map(z => `lkt-flex-row-${z}`).join(' '));

            } else if (element.layout.type === WebElementLayoutType.FlexRows) {
                r.push(element.layout.amountOfItems.map(z => `lkt-flex-rows-${z}`).join(' '));

            } else {
                r.push(element.layout.amountOfItems.map(z => `lkt-grid-${z}`).join(' '));
            }
            // r.push(element.layout.amountOfItems.join(' '));
        }
        if (element.layout.alignItems && element.layout.alignItems.length > 0) r.push(element.layout.alignItems.join(' '));
        if (element.layout.justifyContent && element.layout.justifyContent.length > 0) r.push(element.layout.justifyContent.join(' '));

        if (r.length > 0) r.push('layout-mode');

        let response = r.join(' ');

        if (element.layout.type === WebElementLayoutType.FlexRows) {
            response = response.replace('flex-row-', 'flex-rows-');
        }
        return response;
    }

    const currentLang = props.lang ?? getCurrentLanguage();

    // watch(() => props.element, (newValue, oldValue) => {
    //     newValue.updateKeyMoment();
    // }, {deep: true})
</script>

<template>
    <div class="lkt-element" :class="`is-${webElement.type} is-${webElement.id}`" :key="webElement.keyMoment">
        <div class="lkt-element-content">
            <lkt-text
                v-if="webElement.type === WebElementType.LktText"
                v-model="webElement.props.text[currentLang]"
                @input="handleInputText($event)"
            />

            <lkt-box
                v-else-if="webElement.type === WebElementType.LktLayoutBox"
                :icon="webElement.config.hasHeader && webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #header v-if="webElement.config?.hasHeader">
                    <lkt-text
                        v-model="webElement.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <lkt-web-elements
                    v-model="webElement.children"
                    :layout-selector="getLayoutSelector(webElement)"
                    is-child
                    :lang="currentLang"
                    :is-preview="isPreview"
                    :parent="webElement"
                    :modal-crud-config="modalCrudConfig"
                />
            </lkt-box>

            <lkt-box
                v-else-if="webElement.type === WebElementType.LktTextBox"
                :icon="webElement.config.hasHeader && webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #header v-if="webElement.config?.hasHeader">
                    <lkt-text
                        v-model="webElement.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    @input="handleInputText($event, 'text')"
                />
            </lkt-box>

            <lkt-accordion
                v-else-if="webElement.type === WebElementType.LktLayoutAccordion"
                :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #header v-if="webElement.config?.hasHeader">
                    <lkt-text
                        v-model="webElement.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <lkt-web-elements
                    v-model="webElement.children"
                    :layout-selector="getLayoutSelector(webElement)"
                    is-child
                    :lang="currentLang"
                    :is-preview="isPreview"
                    :parent="webElement"
                    :modal-crud-config="modalCrudConfig"
                />
            </lkt-accordion>

            <lkt-accordion
                v-else-if="webElement.type === WebElementType.LktTextAccordion"
                :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #header v-if="webElement.config?.hasHeader">
                    <lkt-text
                        v-model="webElement.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    @input="handleInputText($event, 'text')"
                />
            </lkt-accordion>

            <lkt-image
                v-else-if="webElement.type === WebElementType.LktImage"
                :class="webElement.props.class"
                :src="webElement.props.src"
                :alt="webElement.props.alt[currentLang]"
                :title="webElement.props.title[currentLang]"
            >
                <template #text>
                    <lkt-text
                        v-model="webElement.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-image>

            <lkt-icon
                v-else-if="webElement.type === WebElementType.LktIcon"
                :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #text>
                    <lkt-text
                        v-model="webElement.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-icon>

            <lkt-header
                v-else-if="webElement.type === WebElementType.LktHeader"
                :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #text>
                    <lkt-text
                        v-model="webElement.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-header>

            <lkt-button
                v-else-if="webElement.type === WebElementType.LktButton"
                :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #text>
                    <lkt-text
                        v-model="webElement.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-button>

            <lkt-anchor
                v-else-if="webElement.type === WebElementType.LktAnchor"
                :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
            >
                <template #text>
                    <lkt-text
                        v-model="webElement.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-anchor>

            <lkt-banner
                v-else-if="webElement.type === WebElementType.LktTextBanner"
                :icon="webElement.config.hasIcon ? webElement.props.icon : ''"
                :class="webElement.props.class"
                :opacity="webElement.props.opacity"
                :art="webElement.props.art"
                :media="webElement.props.media"
                :type="webElement.props.type"
            >
                <template #header v-if="webElement.config?.hasHeader">
                    <lkt-text
                        v-model="webElement.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <template #subHeader v-if="webElement.config?.hasSubHeader">
                    <lkt-text
                        v-model="webElement.props.subHeader[currentLang]"
                        @input="handleInputText($event, 'subHeader')"
                    />
                </template>
                <lkt-text
                    v-model="webElement.props.text[currentLang]"
                    @input="handleInputText($event, 'text')"
                />
            </lkt-banner>


            <lkt-web-elements
                v-else-if="webElement.type === WebElementType.LktLayout"
                v-model="webElement.children"
                :layout-selector="getLayoutSelector(webElement)"
                is-child
                :lang="currentLang"
                :is-preview="isPreview"
                :parent="webElement"
                :modal-crud-config="modalCrudConfig"
            />

            <component
                v-else
                :is="webElement.component"
                v-bind="webElement.props"
            />
        </div>

        <div class="lkt-element-actions" v-if="!appendingItems && canRenderActions">
            <lkt-button
                v-bind="<ButtonConfig>{
                    type: ButtonType.Button,
                    text: webElement.type,
                    icon: 'lkt-icn-settings-cogs',
                    modal: 'lkt-web-element-config',
                    modalKey: `${index}--${webElement.type}--${webElement.id}`,
                    modalData: {
                        modalCrudConfig,
                        element: webElement,
                        parent,
                        parentChildren,
                        indexInParentChildren: index,
                        fileBrowserConfig,
                        parentLayoutComponent,
                    }
                }"
            />
        </div>
    </div>
</template>