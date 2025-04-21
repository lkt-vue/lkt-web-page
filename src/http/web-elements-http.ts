import {
    createHTTPDeleteResource,
    createHTTPGetResource,
    createHTTPPostResource,
    createHTTPPutResource
} from "lkt-http-client";
import {LktObject, WebElement} from "lkt-vue-kernel";


export const setupWebElementsHttp = () => {


    createHTTPGetResource({
        url: '/web/element/{id}',
        name: 'r-web-element',
        params: {id: {default: undefined}},
        digToPerms: 'perms',
        digToData: 'item',
        mapData: (data: LktObject) => {
            return new WebElement(data);
        }
    });

    createHTTPGetResource({
        url: '/web/element/{id}/children',
        name: 'r-web-element-children',
        params: {id: {default: undefined}},
        digToPerms: 'perms',
        digToData: 'results',
        mapData: (data: LktObject[]) => {
            return data.map(z => new WebElement(z));
        }
    });

    createHTTPPostResource({
        url: '/web/element',
        name: 'mk-web-element',
        params: {
            type: {default: undefined},
            children: {default: undefined},
            component: {default: undefined},
            config: {default: undefined},
            layout: {default: undefined},
            props: {default: undefined},

            parent: {default: undefined},
            parentType: {default: undefined},
            beforeElement: {default: undefined},
            afterElement: {default: undefined},
        },
        digToPerms: 'perms',
        digToData: 'item',
        digToAutoReloadId: 'id'
    });

    createHTTPPutResource({
        url: '/web/element/{id}',
        name: 'up-web-element',
        params: {
            id: {default: undefined},
            children: {default: undefined},
            component: {default: undefined},
            config: {default: undefined},
            layout: {default: undefined},
            props: {default: undefined},
        },
        digToPerms: 'perms',
        digToData: 'item'
    });

    createHTTPDeleteResource({
        url: '/web/element/{id}',
        name: 'rm-web-element',
        params: {
            id: {default: undefined},
        },
        digToPerms: 'perms',
        digToData: 'item',
    });
}