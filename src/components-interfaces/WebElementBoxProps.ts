import {FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType} from "lkt-vue-kernel";

export interface WebElementBoxProps {
    modelValue: WebElement
    parent: WebElement | WebPage
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
}