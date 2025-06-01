import {App, Plugin} from 'vue';

import "../style.css";
import {default as libComponent} from './lib-components/LktWebPage.vue';
import {addModal} from "lkt-modal";
import LktWebElementSelectModal from "./lib-modals/LktWebElementSelectModal.vue";
import LktWebElementConfigModal from "./lib-modals/LktWebElementConfigModal.vue";
import {Router} from "vue-router";
import LktWebPageView from "./lib-components/LktWebPageView.vue";

const LktWebPage: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-web-page') === undefined) {
      app.component('lkt-web-page', libComponent);

      addModal('lkt-web-element-select', LktWebElementSelectModal);
      addModal('lkt-web-element-config', LktWebElementConfigModal);
    }

  }
};

export default LktWebPage;

export {setupWebElementsHttp} from "./http/web-elements-http";
export {setupWebPagesHttp} from "./http/web-pages-http";
export const setupLktWebPageRoutes = (router: Router) => {
  router.addRoute({ path: '/:pathMatch(.*)*', name: 'lkt-web-page-catch-all', component: LktWebPageView })
}
