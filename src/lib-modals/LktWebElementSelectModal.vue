<script setup lang="ts">
    import { Component, nextTick, ref } from 'vue';
    import {
        AccordionConfig,
        AccordionType,
        ButtonConfig,
        FileBrowserConfig,
        getDefaultLktAnchorWebElement,
        getDefaultLktButtonWebElement,
        getDefaultLktHeaderWebElement,
        getDefaultLktIconWebElement,
        getDefaultLktImageWebElement,
        getDefaultLktLayoutAccordionWebElement,
        getDefaultLktLayoutBoxWebElement,
        getDefaultLktLayoutWebElement,
        getDefaultLktTextAccordionWebElement,
        getDefaultLktTextBannerWebElement,
        getDefaultLktTextBoxWebElement,
        getDefaultLktTextWebElement, ItemCrudConfig,
        ModalConfig,
        WebElement,
        WebElementType,
    } from 'lkt-vue-kernel';
    import { closeModal, openModal } from 'lkt-modal';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        items: WebElement[]
        element: WebElement
        onUpdate: Function
        onAppend: Function
        index: number
        addingChildren?: boolean
        fileBrowserConfig: FileBrowserConfig
        modalCrudConfig: ItemCrudConfig
        parentLayoutComponent?: Component
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
    });

    const editableConfig = ref(props.element);
    const editableItems = ref(props.items);
    const appendIndex = ref(props.index + 1);

    const doRealAddElement = (element: WebElement) => {
        console.log('doRealAddElement');
        if (props.addingChildren) {
            console.log('esto va por aquí');
            props.element.addChild(element).updateKeyMoment();

        } else {
            console.log('esto va por acá: ', element, props.items, appendIndex.value);
            // editableItems.value.splice(appendIndex.value, 0, element);
            props.items.push(element);
        }
        ++appendIndex.value;
        if (typeof props.onAppend === 'function') props.onAppend();
        let index = editableItems.value.length;
        nextTick(() => {
            openModal('lkt-web-element-config', `${index}--${element.type}--${element.id}`, {
                element: element,
                parent: editableConfig.value,
                parentChildren: editableItems.value,
                indexInParentChildren: index,
                fileBrowserConfig: props.fileBrowserConfig,
                parentLayoutComponent: props.parentLayoutComponent,
            })
            closeModal(props.modalName, props.modalKey);
        })
    }

    const doAddElement = (type: WebElementType) => {
        switch (type) {
            case WebElementType.LktLayoutBox:
                return doRealAddElement(getDefaultLktLayoutBoxWebElement());

            case WebElementType.LktTextBox:
                return doRealAddElement(getDefaultLktTextBoxWebElement());

            case WebElementType.LktLayoutAccordion:
                return doRealAddElement(getDefaultLktLayoutAccordionWebElement());

            case WebElementType.LktTextAccordion:
                return doRealAddElement(getDefaultLktTextAccordionWebElement());

            case WebElementType.LktIcon:
                return doRealAddElement(getDefaultLktIconWebElement());

            case WebElementType.LktImage:
                return doRealAddElement(getDefaultLktImageWebElement());

            case WebElementType.LktAnchor:
                return doRealAddElement(getDefaultLktAnchorWebElement());

            case WebElementType.LktButton:
                return doRealAddElement(getDefaultLktButtonWebElement());

            case WebElementType.LktLayout:
                return doRealAddElement(getDefaultLktLayoutWebElement());

            case WebElementType.LktHeader:
                return doRealAddElement(getDefaultLktHeaderWebElement());

            case WebElementType.LktText:
                return doRealAddElement(getDefaultLktTextWebElement());

            case WebElementType.LktTextBanner:
                return doRealAddElement(getDefaultLktTextBannerWebElement());
        }
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
                    type: AccordionType.Always,
                    title: 'Content'
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
                    type: AccordionType.Always,
                    title: 'Containers'
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