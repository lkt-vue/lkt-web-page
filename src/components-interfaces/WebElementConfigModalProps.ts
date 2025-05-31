import {FileBrowserConfig, ItemCrudConfig, WebElement, WebPage, WebParentType} from "lkt-vue-kernel";

export interface WebElementConfigModalProps {
    modalName: string
    modalKey: string
    zIndex: number
    fileBrowserConfig: FileBrowserConfig
    modalCrudConfig: ItemCrudConfig
    element: WebElement
    parent: WebElement | WebPage
    parentType: WebParentType
    afterElement?: number
    beforeElement?: number
    onUpdate?: Function
    defaultAppearance?: string
    isSubElement?: boolean
    beforeClose?: Function
}