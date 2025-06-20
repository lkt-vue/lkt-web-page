<script setup lang="ts">
import {computed, nextTick, onMounted, ref, watch} from 'vue';
import {
    AccordionConfig,
    AccordionToggleMode,
    AccordionType,
    applyTextAlignment,
    applyTextFormat,
    ButtonConfig,
    ButtonType,
    ensureFieldConfig,
    FieldConfig,
    FieldType,
    FileBrowserConfig,
    FileEntity,
    getDefaultLktButtonWebElement,
    ItemCrudConfig,
    ItemCrudMode,
    ItemCrudView,
    LktObject,
    LktSettings,
    OptionConfig,
    WebElement, WebElementController,
    WebElementLayoutType,
    WebElementType,
    WebPage,
    WebParentType,
} from 'lkt-vue-kernel';
import {kebabCaseToCamelCase, ucfirst} from 'lkt-string-tools';
import {getAvailableLanguages, getCurrentLanguage} from 'lkt-i18n';
import {closeModal, openModal} from 'lkt-modal';
import LktWebElementBox from "../lib-components/LktWebElementBox.vue";
import {
    getAccordionTypeOptions,
    getBannerTypeOptions,
    getLayoutAmountOfItemsOptions,
    getLayoutTypeOptions
} from "./../functions/config-options-functions";
import {LKT_ICON_PACK_ICONS} from "./../constants/lkt-icon-pack";
import {httpCall, HTTPResponse} from "lkt-http-client";
import {WebElementBoxProps} from "./../components-interfaces/WebElementBoxProps";
import {WebElementConfigModalProps} from "./../components-interfaces/WebElementConfigModalProps";

const props = withDefaults(defineProps<WebElementConfigModalProps>(), {
    modalName: '',
    modalKey: '_',
    zIndex: 500,
});

const id = ref(parseInt(props.modalKey)),
    webElement = ref(new WebElement(props.element)),
    itemCrudRef = ref(null),
    isLoading = ref(false);

watch(() => props.modalKey, (v) => {
    id.value = parseInt(v);
})

const doDuplicateBefore = () => {
    let clone = webElement.value.getClone();
    openModal('lkt-web-element-config', '_', {
        element: clone,
        parent: props.parent,
        parentType: props.parentType,
        fileBrowserConfig: props.fileBrowserConfig,
        modalCrudConfig: props.modalCrudConfig,
        beforeElement: webElement.value.id,
    })
}

const doDuplicateAfter = () => {
    let clone = webElement.value.getClone();
    openModal('lkt-web-element-config', '_', {
        element: clone,
        parent: props.parent,
        parentType: props.parentType,
        fileBrowserConfig: props.fileBrowserConfig,
        modalCrudConfig: props.modalCrudConfig,
        afterElement: webElement.value.id,
    })
}

const customSettings = webElement.value.getCustomSettings();

const languages = getAvailableLanguages(),
    currentLang = getCurrentLanguage();

const calculatedHasTextEditor = !customSettings || customSettings.options?.textEditor === true;

const calculatedHasHeader = [
        WebElementType.LktLayoutBox,
        WebElementType.LktLayoutAccordion,
        WebElementType.LktTextBox,
        WebElementType.LktTextAccordion,
        WebElementType.LktTextBanner,
        WebElementType.LktIcons
    ].includes(webElement.value.type),

    calculatedHasSubHeader = [
        WebElementType.LktTextBanner
    ].includes(webElement.value.type),

    calculatedHasBackgroundMultimedia = [
        WebElementType.LktTextBanner
    ].includes(webElement.value.type),

    calculatedIsBanner = [
        WebElementType.LktTextBanner
    ].includes(webElement.value.type),

    calculatedIsText = [
        WebElementType.LktText
    ].includes(webElement.value.type),

    calculatedIsLayout = [
        WebElementType.LktLayout
    ].includes(webElement.value.type),

    calculatedHasOpacityLayer = [
        WebElementType.LktTextBanner
    ].includes(webElement.value.type),

    calculatedHasIcon = [
        WebElementType.LktLayoutBox,
        WebElementType.LktLayoutAccordion,
        WebElementType.LktTextBox,
        WebElementType.LktTextAccordion,
        WebElementType.LktIcon,
        WebElementType.LktButton,
        WebElementType.LktAnchor
    ].includes(webElement.value.type),

    calculatedHasLayout = [WebElementType.LktLayoutBox, WebElementType.LktLayoutAccordion, WebElementType.LktLayout, WebElementType.LktIcons].includes(webElement.value.type),
    calculatedHasImage = [WebElementType.LktImage].includes(webElement.value.type),
    calculatedHasAccordionConfig = [WebElementType.LktLayoutAccordion, WebElementType.LktTextAccordion].includes(webElement.value.type),
    calculatedHasChildren = [WebElementType.LktLayoutAccordion, WebElementType.LktLayoutBox, WebElementType.LktLayout].includes(webElement.value.type),
    //@ts-ignore
    calculatedHasParentLayout = [WebElementLayoutType.FlexRow, WebElementLayoutType.FlexRows].includes(props.parent?.layout?.type);

const accordionTypeOptions = getAccordionTypeOptions(),
    bannerTypeOptions = getBannerTypeOptions(),
    layoutTypeOptions = getLayoutTypeOptions(),
    amountOfItemsOptions = getLayoutAmountOfItemsOptions();

const flexColumnsOptions: OptionConfig[] = [
    {
        value: 'lkt-flex-col-1',
        label: 'Default: 1',
    },
    {
        value: 'lkt-flex-col-2',
        label: 'Default: 2',
    },
    {
        value: 'lkt-flex-col-3',
        label: 'Default: 3',
    },
    {
        value: 'lkt-flex-col-4',
        label: 'Default: 4',
    },
    {
        value: 'lkt-flex-col-5',
        label: 'Default: 5',
    },
    {
        value: 'lkt-flex-col-6',
        label: 'Default: 6',
    },
    {
        value: 'lkt-flex-col-7',
        label: 'Default: 7',
    },
    {
        value: 'lkt-flex-col-8',
        label: 'Default: 8',
    },
    {
        value: 'lkt-flex-col-9',
        label: 'Default: 9',
    },
    {
        value: 'lkt-flex-col-10',
        label: 'Default: 10',
    },
    {
        value: 'lkt-flex-col-11',
        label: 'Default: 11',
    },
    {
        value: 'lkt-flex-col-12',
        label: 'Default: 12',
    },
    {
        value: 'lkt-flex-col-1--from-768',
        label: 'From 768px: 1',
    },
    {
        value: 'lkt-flex-col-2--from-768',
        label: 'From 768px: 2',
    },
    {
        value: 'lkt-flex-col-3--from-768',
        label: 'From 768px: 3',
    },
    {
        value: 'lkt-flex-col-4--from-768',
        label: 'From 768px: 4',
    },
    {
        value: 'lkt-flex-col-5--from-768',
        label: 'From 768px: 5',
    },
];

const alignItemsOptions: OptionConfig[] = [
    {
        value: 'lkt-align-items-start',
        label: 'Default: Start',
    },
    {
        value: 'lkt-align-items-center',
        label: 'Default: Center',
    },
    {
        value: 'lkt-align-items-end',
        label: 'Default: End',
    },
    {
        value: 'lkt-align-items-stretch',
        label: 'Default: Stretch',
    },
];

const justifyContentOptions: OptionConfig[] = [
    {
        value: 'lkt-justify-content-stretch',
        label: 'Default: Stretch',
    },
    {
        value: 'lkt-justify-content-center',
        label: 'Default: Center',
    },
    {
        value: 'lkt-justify-content-space-between',
        label: 'Default: Space Between',
    },
    {
        value: 'lkt-justify-content-space-around',
        label: 'Default: Space Around',
    },
    {
        value: 'lkt-justify-content-space-evenly',
        label: 'Default: Space Evenly',
    },
    {
        value: 'lkt-justify-content-start',
        label: 'Default: Start',
    },
    {
        value: 'lkt-justify-content-end',
        label: 'Default: End',
    },
];

const _filterLayoutMediaQueryOption = (haystack: OptionConfig[], needle: OptionConfig) => {
    if (haystack.length > 0) {

        let needleValue = String(needle.value);

        let optionSearch = '';
        if (needleValue.includes('--from')) optionSearch = '--' + needleValue.split('--')[1];
        if (needleValue.includes('--to')) optionSearch = '--' + needleValue.split('--')[1];

        // Filter to show only picked media selector
        if (optionSearch !== '') {
            let comparedValue = haystack.find(z => String(z).includes(optionSearch));
            if (comparedValue) {
                //@ts-ignore
                return comparedValue === needle.value;
            }
        }

        let comparedValue = haystack.find(z => !String(z).includes('--'));
        if (comparedValue) {
            //@ts-ignore
            return comparedValue === needleValue || needleValue.includes('--');
        }
    }

    return true;
}


const filterLayoutMediaOptions = (option: OptionConfig) => {
    return _filterLayoutMediaQueryOption(
        webElement.value.layout?.amountOfItems ?? [],
        option,
    );
}

const filterLayoutAlignItemsOptions = (option: OptionConfig) => {
    return _filterLayoutMediaQueryOption(
        webElement.value.layout?.alignItems ?? [],
        option,
    );
}

const filterLayoutJustifyContentOptions = (option: OptionConfig) => {
    return _filterLayoutMediaQueryOption(
        webElement.value.layout?.justifyContent ?? [],
        option,
    );
}

const filterLayoutColumnsOptions = (option: OptionConfig) => {
    return _filterLayoutMediaQueryOption(
        webElement.value.layout?.columns ?? [],
        option,
    );
}

const addSubElement = () => {
    webElement.value.addSubElement();
}

const computedCustomClassField = computed((): FieldConfig | undefined => {
    let config = WebElementController.getCustomAppearance(webElement.value.type);

    if (!config || typeof config === 'undefined') return undefined;

    return Object.keys(config).length > 0
        ? ensureFieldConfig({options: config.options}, LktSettings.defaultFieldElementCustomClassField)
        : undefined;
});

const computedTitle = computed(() => {
    return ucfirst(kebabCaseToCamelCase(webElement.value.type)) + ' Config';
})

const onPickedFiles = (fileEntities: Array<FileEntity>, ins: LktObject) => {
    if (!ins) ins = webElement.value.props;
    ins.alt = fileEntities[0].nameData;
    ins.title = fileEntities[0].nameData;
}

watch(() => webElement.value.config.amountOfCallToActions, (v) => {
    let l = webElement.value.config.callToActions.length;
    if (v > l) {
        webElement.value.config.callToActions.push(getDefaultLktButtonWebElement());
    } else {
        webElement.value.config.callToActions.splice(v, 1);
    }
})

onMounted(() => {
    if (!webElement.value.id && webElement.value.type === WebElementType.LktLayout) {
        isLoading.value = true;
        nextTick(() => {
            httpCall(props.modalCrudConfig.createButton?.resource, {
                ...props.modalCrudConfig.createButton?.resourceData,
                ...webElement.value,
                parent: props.parent.id,
                parentType: props.parentType,
                afterElement: props.afterElement,
                beforeElement: props.beforeElement,
            }).then((res: HTTPResponse) => {
                webElement.value.id = res.data.id;
                closeModal(props.modalName, props.modalKey);

                setTimeout(() => {
                    openModal(props.modalName, res.data.id, {
                        element: webElement.value,
                        parent: props.parent,
                        parentType: props.parentType,
                        fileBrowserConfig: props.fileBrowserConfig,
                        modalCrudConfig: props.modalCrudConfig,
                        onUpdate: props.onUpdate
                    })
                }, 200)
            });
        })
    }

})

const computedPerms = computed(() => {
    if (props.isSubElement) return [];
    return ['create', 'update', 'drop', 'delete'];
})

const onCrudUpdated = () => {
    if (typeof props.onUpdate === 'function') props.onUpdate();
}

const computedItemCrudConfig = computed((): ItemCrudConfig => {

    let createButton: false | ButtonConfig = false;
    let updateButton: false | ButtonConfig = false;

    const isCreatingLayout = !webElement.value.id && webElement.value.type === WebElementType.LktLayout;

    if (!isCreatingLayout && !props.isSubElement) {
        createButton = {
            ...props.modalCrudConfig.createButton,
            resourceData: {
                ...props.modalCrudConfig?.createButton?.resourceData,
                ...webElement.value,
                parent: props.parent.id,
                parentType: props.parentType,
                afterElement: props.afterElement,
                beforeElement: props.beforeElement,
            },
            events: {
                click: onCrudUpdated
            },
        }
        updateButton = {
            ...props.modalCrudConfig.updateButton,
            resourceData: {
                ...props.modalCrudConfig.updateButton?.resourceData,
                ...webElement.value,
            },
            events: {
                click: onCrudUpdated
            }
        }
    }

    let beforeClose = props.isSubElement ? onCrudUpdated : undefined;

    return {
        mode: id.value > 0 ? ItemCrudMode.Update : ItemCrudMode.Create,
        view: ItemCrudView.Modal,
        editing: true,
        perms: computedPerms.value,
        title: computedTitle.value,
        modalConfig: {
            modalName: props.modalName,
            modalKey: props.modalKey,
            zIndex: props.zIndex,
            title: computedTitle.value,
            beforeClose,
        },
        readData: {
            id: id.value,
        },
        ...props.modalCrudConfig,
        beforeClose,
        createButton: createButton,
        updateButton: updateButton,
        dropButton: props.isSubElement ? false : {
            ...props.modalCrudConfig.dropButton,
            resourceData: {
                ...props.modalCrudConfig.dropButton?.resourceData,
                ...webElement.value,
            },
            events: {
                click: onCrudUpdated
            }
        },
        enabledSaveWithoutChanges: true
    }
})
</script>

<template>
    <lkt-item-crud
        ref="itemCrudRef"
        class="lkt-web-element-config-modal"
        v-model="webElement"
        v-bind="computedItemCrudConfig"
    >
        <template #item="{item}">

            <lkt-loader v-if="isLoading"/>
            <div v-else class="lkt-flex-row">
                <div class="lkt-flex-col-9 lkt-grid-1">
                    <lkt-web-element-box
                        v-model="webElement"
                        v-bind="<WebElementBoxProps>{
                            isPreview: true,
                            canRenderActions: false,
                            modalCrudConfig,
                            parent: webElement,
                            parentType: WebParentType.Element,
                            defaultAppearance,
                        }"
                        @crud-update="onUpdate"
                    />

                    <template
                        v-for="lang in languages">
                        <lkt-accordion
                            v-if="lang !== currentLang"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Auto,
                                title: lang
                            }"
                        >
                            <lkt-web-element-box
                                v-model="webElement"
                                v-bind="<WebElementBoxProps>{
                                    lang,
                                    isPreview: true,
                                    canRenderActions: false,
                                    modalCrudConfig,
                                    parent: webElement,
                                    parentType: WebParentType.Element,
                                    defaultAppearance,
                                }"
                            />
                        </lkt-accordion>
                    </template>
                </div>
                <div class="lkt-flex-col-3">

                    <div class="lkt-web-element-config-scroller lkt-grid-1">

                        <lkt-button
                            v-if="calculatedHasChildren"
                            v-bind="<ButtonConfig>{
                                text: 'Add children',
                                icon: 'lkt-icn-more',
                                modal: 'lkt-web-element-select',
                                modalData: {
                                    fileBrowserConfig,
                                    modalCrudConfig,
                                    parent: webElement,
                                    parentType: WebParentType.Element,
                                    onUpdate: onCrudUpdated,
                                }
                            }"
                        />

                        <lkt-button
                            v-if="item.type === WebElementType.LktIcons"
                            v-bind="<ButtonConfig>{
                                text: 'Add icon',
                                icon: 'lkt-icn-more',
                                events: {
                                    click: addSubElement
                                }
                            }"
                        />

                        <lkt-accordion
                            v-if="calculatedHasTextEditor"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Always,
                                title: 'Text editor'
                            }"
                        >
                            <div class="lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons">
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-bold',
                                    }"
                                    @click="() => applyTextFormat('bold')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-italic',
                                    }"
                                    @click="() => applyTextFormat('italic')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-underline',
                                    }"
                                    @click="() => applyTextFormat('underline')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-strike',
                                    }"
                                    @click="() => applyTextFormat('strikeThrough')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-superscript',
                                    }"
                                    @click="() => applyTextFormat('superscript')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-subscript',
                                    }"
                                    @click="() => applyTextFormat('subscript')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-align-left',
                                    }"
                                    @click="() => applyTextAlignment('left')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-align-center',
                                    }"
                                    @click="() => applyTextAlignment('center')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-align-right',
                                    }"
                                    @click="() => applyTextAlignment('right')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-align-justify',
                                    }"
                                    @click="() => applyTextAlignment('justify')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-list-bullet',
                                    }"
                                    @click="() => applyTextFormat('insertUnorderedList')"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        icon: 'lkt-icn-list-numbered',
                                    }"
                                    @click="() => applyTextFormat('insertOrderedList')"
                                />
                            </div>
                        </lkt-accordion>

                        <lkt-accordion
                            v-if="!calculatedIsText && !calculatedIsLayout"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Auto,
                                title: 'Config',
                                modelValue: true,
                                toggleMode: AccordionToggleMode.Display
                            }"
                        >
                            <div class="lkt-grid-1">

                                <lkt-field
                                    v-if="computedCustomClassField"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        ...computedCustomClassField,
                                        canClear: true
                                    }"
                                    v-model="item.props.class"
                                />

                                <lkt-field
                                    v-if="calculatedHasHeader"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Switch,
                                        label: 'Has header',
                                    }"
                                    v-model="item.config.hasHeader"
                                />

                                <lkt-field
                                    v-if="calculatedHasSubHeader"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Switch,
                                        label: 'Has sub-header',
                                    }"
                                    v-model="item.config.hasSubHeader"
                                />
                                <lkt-field
                                    v-if="calculatedHasIcon"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Switch,
                                        label: 'Has icon',
                                    }"
                                    v-model="item.config.hasIcon"
                                />
                                <lkt-field
                                    v-if="calculatedHasIcon"
                                    v-model="item.props.icon"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Text,
                                        label: 'Icon',
                                        canClear: true,
                                        options: LKT_ICON_PACK_ICONS
                                    }"
                                    :disabled="!item.config.hasIcon"
                                />


                                <lkt-field
                                    v-if="calculatedHasImage"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Image,
                                        label: 'Image',
                                        fileBrowserConfig: fileBrowserConfig,
                                    }"
                                    v-model="item.props.src"
                                    @picked-files="onPickedFiles"
                                />


                                <lkt-field
                                    v-if="calculatedIsBanner"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Image,
                                        label: 'Media content',
                                        fileBrowserConfig: fileBrowserConfig,
                                    }"
                                    v-model="item.props.media.src"
                                    @picked-files="($event: any) => onPickedFiles($event, item.props.media)"
                                />

                                <lkt-field
                                    v-if="calculatedIsBanner"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        label: 'Type',
                                        options: bannerTypeOptions,
                                    }"
                                    v-model="item.props.type"
                                />

                                <lkt-field
                                    v-if="calculatedHasBackgroundMultimedia"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Image,
                                        label: 'Background Image',
                                        fileBrowserConfig: fileBrowserConfig,
                                    }"
                                    v-model="item.props.art.src"
                                    @picked-files="($event: any) => onPickedFiles($event, item.props.art)"
                                />

                                <div>
                                    <lkt-field
                                        v-if="calculatedHasOpacityLayer"
                                        v-bind="<FieldConfig>{
                                            type: FieldType.Number,
                                            label: 'Background opacity',
                                            min: 0,
                                            max: 1,
                                            step: .1,
                                            canStep: true,
                                        }"
                                        v-model="item.props.opacity"
                                    />

                                    <lkt-field
                                        v-if="calculatedHasOpacityLayer"
                                        v-bind="<FieldConfig>{
                                            type: FieldType.Range,
                                            min: 0,
                                            max: 1,
                                            step: .1,
                                        }"
                                        v-model="item.props.opacity"
                                    />
                                </div>

                                <lkt-field
                                    v-if="calculatedIsBanner"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Number,
                                        label: 'Amount of CTA\'s',
                                        min: 0,
                                        max: 2,
                                        step: 1,
                                        canStep: true,
                                    }"
                                    v-model="item.config.amountOfCallToActions"
                                />
                            </div>
                        </lkt-accordion>

                        <template
                            v-if="item.config.amountOfCallToActions > 0">
                            <lkt-accordion
                                v-for="cta in item.config.callToActions"
                                v-bind="<AccordionConfig>{
                                    type: AccordionType.Auto,
                                    title: 'CTA #1'
                                }"
                            >
                                <div class="lkt-grid-1">
                                    <lkt-field
                                        v-bind="<FieldConfig>{
                                            type: FieldType.Switch,
                                            label: 'Has icon',
                                        }"
                                        v-model="cta.config.hasIcon"
                                    />
                                    <lkt-field
                                        v-bind="<FieldConfig>{
                                            type: FieldType.Text,
                                            label: 'Icon',
                                        }"
                                        v-model="cta.props.icon"
                                        :disabled="!cta.config.hasIcon"
                                    />
                                </div>
                            </lkt-accordion>
                        </template>

                        <lkt-accordion
                            v-if="calculatedHasAccordionConfig"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Auto,
                                title: 'Accordion Config'
                            }"
                        >
                            <div class="lkt-grid-1">
                                <lkt-field
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        label: 'Type',
                                        options: accordionTypeOptions,
                                    }"
                                    v-model="item.props.type"
                                />
                            </div>
                        </lkt-accordion>


                        <lkt-accordion
                            v-if="calculatedHasLayout || calculatedHasParentLayout"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Auto,
                                title: 'Layout Config'
                            }"
                        >
                            <div class="lkt-grid-1">
                                <lkt-field
                                    v-if="calculatedHasLayout"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        label: 'Type',
                                        options: layoutTypeOptions,
                                    }"
                                    v-model="item.layout.type"
                                />
                                <lkt-field
                                    v-if="calculatedHasLayout && item.layout.type !== WebElementLayoutType.FlexColumn"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        label: item.layout.type === WebElementLayoutType.Grid ? 'Items per row (based on device width)' : 'Column size (based on device width)',
                                        options: amountOfItemsOptions,
                                        multiple: true,
                                        searchable: true,
                                        canClear: true,
                                        optionsConfig: {
                                            filter: filterLayoutMediaOptions
                                        }
                                    }"
                                    v-model="item.layout.amountOfItems"
                                />
                                <lkt-field
                                    v-if="calculatedHasLayout"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        label: 'Align items',
                                        options: alignItemsOptions,
                                        multiple: true,
                                        searchable: true,
                                        optionsConfig: {
                                            filter: filterLayoutAlignItemsOptions
                                        }
                                    }"
                                    v-model="item.layout.alignItems"
                                />
                                <lkt-field
                                    v-if="calculatedHasLayout"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        label: 'Justify content',
                                        options: justifyContentOptions,
                                        multiple: true,
                                        searchable: true,
                                        optionsConfig: {
                                            filter: filterLayoutJustifyContentOptions
                                        }
                                    }"
                                    v-model="item.layout.justifyContent"
                                />
                                <lkt-field
                                    v-if="calculatedHasParentLayout"
                                    v-bind="<FieldConfig>{
                                        type: FieldType.Select,
                                        label: 'Columns Reserved',
                                        options: flexColumnsOptions,
                                        multiple: true,
                                        searchable: true,
                                        optionsConfig: {
                                            filter: filterLayoutColumnsOptions
                                        }
                                    }"
                                    v-model="item.layout.columns"
                                />

                            </div>
                        </lkt-accordion>

                        <lkt-button
                            v-bind="<ButtonConfig>{
                                text: 'Duplicate',
                                icon: 'lkt-icn-more',
                                type: ButtonType.Split,
                            }"
                        >
                            <template #split="{doClose}">
                                <div class="lkt-grid-1">
                                    <lkt-button
                                        v-bind="<ButtonConfig>{
                                            text: 'Before',
                                            events: {
                                                click: doDuplicateBefore
                                            }
                                        }"
                                    />
                                    <lkt-button
                                        v-bind="<ButtonConfig>{
                                            text: 'After',
                                            events: {
                                                click: doDuplicateAfter
                                            }
                                        }"
                                    />
                                </div>
                            </template>
                        </lkt-button>
                    </div>
                </div>
            </div>
        </template>
    </lkt-item-crud>
</template>