import {
    createHTTPDeleteResource,
    createHTTPGetResource,
    createHTTPPostResource,
    createHTTPPutResource
} from "lkt-http-client";
import {LktObject, WebElement, WebPage} from "lkt-vue-kernel";


export const setupWebPagesHttp = () => {

    createHTTPGetResource({
        url: '/web/page/{id}',
        name: 'r-web-page',
        params: {id: {default: undefined}},
        digToPerms: 'perms',
        digToData: 'item',
        mapData: (data: LktObject) => {
            return new WebPage(data);
        }
    });

    createHTTPGetResource({
        url: '/web/page/{id}/children',
        name: 'r-web-page-children',
        params: {id: {default: undefined}},
        digToPerms: 'perms',
        digToData: 'results',
        mapData: (data: LktObject[]) => {
            return data.map(z => new WebElement(z));
        }
    });

    createHTTPPostResource({
        url: '/web/page',
        name: 'mk-web-page',
        params: {
            name: {default: undefined},
            webElements: {default: undefined},
        },
        digToPerms: 'perms',
        digToData: 'item',
        digToAutoReloadId: 'id'
    });

    createHTTPPutResource({
        url: '/web/page/{id}',
        name: 'up-web-page',
        params: {
            id: {default: undefined},
            name: {default: undefined},
            webElements: {default: undefined},
        },
        digToPerms: 'perms',
        digToData: 'item'
    });

    createHTTPDeleteResource({
        url: '/web/page/{id}',
        name: 'rm-web-page',
        params: {
            id: {default: undefined},
        },
        digToPerms: 'perms',
        digToData: 'item',
    });
}