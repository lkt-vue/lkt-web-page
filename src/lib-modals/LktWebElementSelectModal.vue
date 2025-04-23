<script setup lang="ts">
import {ref} from 'vue';
import {
    AccordionConfig,
    AccordionType,
    ButtonConfig,
    FileBrowserConfig,
    ItemCrudConfig,
    ModalConfig,
    WebElement,
    WebElementType,
    WebPage,
    WebParentType,
} from 'lkt-vue-kernel';
import {closeModal, openModal} from 'lkt-modal';

const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        parent: WebElement|WebPage
        parentType?: WebParentType
        fileBrowserConfig: FileBrowserConfig
        modalCrudConfig: ItemCrudConfig
        onUpdate?: Function
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
        parentType: WebParentType.Element
    });

    const webParent = ref(props.parent);

    const doAddElement = (type: WebElementType) => {
        openModal('lkt-web-element-config', '_', {
            element: WebElement.createByType(type),
            parent: webParent.value,
            parentType: props.parentType,
            fileBrowserConfig: props.fileBrowserConfig,
            modalCrudConfig: props.modalCrudConfig,
            onUpdate: props.onUpdate,
        })

        setTimeout(() => {
            closeModal(props.modalName, props.modalKey);
        }, 200);
    };
</script>

<template>
    <lkt-modal
        id="lkt-add-element-modal"
        v-bind="<ModalConfig>{
            modalName,
            modalKey,
            zIndex,
            title: 'LktBox Config',
        }"
    >
        <div class="lkt-grid-1">
            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Auto,
                    title: 'Individual elements',
                    modelValue: true,
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-font',
                            text: 'Text',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktText);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-header',
                            text: 'LktHeader',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktHeader);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-picture',
                            text: 'LktImage',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktImage);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-info',
                            text: 'LktIcon',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktIcon);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-font',
                            text: 'LktTextBox',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktTextBox);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-font',
                            text: 'LktTextAccordion',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktTextAccordion);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-font',
                            text: 'LktTextBanner',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktTextBanner);
                                }
                            }
                        }"
                    />
                </div>
            </lkt-accordion>

            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Auto,
                    title: 'Collection elements',
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-info',
                            text: 'LktIcons',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktIcons);
                                }
                            }
                        }"
                    />
                </div>
            </lkt-accordion>

            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Auto,
                    title: 'Containers',
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-columns',
                            text: 'LktLayoutBox',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktLayoutBox);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-columns',
                            text: 'LktLayoutAccordion',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktLayoutAccordion);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-columns',
                            text: 'LktLayout',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktLayout);
                                }
                            }
                        }"
                    />
                </div>
            </lkt-accordion>

            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Auto,
                    title: 'Actions'
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-link',
                            text: 'LktAnchor',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktAnchor);
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-link',
                            text: 'LktButton',
                            events: {
                                click: () => {
                                    doAddElement(WebElementType.LktButton);
                                }
                            }
                        }"
                    />
                </div>
            </lkt-accordion>
        </div>
    </lkt-modal>
</template>

<style lang="css">
    #lkt-add-element-modal .lkt-button-main {
        flex-direction: column;
        min-width: 100%;
        width: 100%;
        max-width: 100%;
    }
    #lkt-add-element-modal .lkt-button-main i{
        font-size: 2em;
    }
</style>