import { Plugin } from 'vue';
import "../style.css";
import { Router } from "vue-router";
declare const LktWebPage: Plugin;
export default LktWebPage;
export { setupWebElementsHttp } from "./http/web-elements-http";
export { setupWebPagesHttp } from "./http/web-pages-http";
export declare const setupLktWebPageRoutes: (router: Router) => void;
