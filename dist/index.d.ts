import { Plugin } from 'vue';
import "../style.css";
declare const LktWebPage: Plugin;
export default LktWebPage;
export { setupWebElementsHttp } from "./http/web-elements-http";
export { setupWebPagesHttp } from "./http/web-pages-http";
