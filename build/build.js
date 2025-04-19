var Ye = Object.defineProperty;
var _e = (e, t, u) => t in e ? Ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u;
var r = (e, t, u) => _e(e, typeof t != "symbol" ? t + "" : t, u);
import { ref as M, reactive as et, computed as Ce, defineComponent as X, setBlockTracking as Pe, createElementVNode as U, watch as Z, resolveComponent as A, createElementBlock as q, openBlock as v, normalizeClass as z, createCommentVNode as B, createBlock as C, unref as o, createSlots as le, withCtx as b, createVNode as f, resolveDynamicComponent as tt, normalizeProps as V, mergeProps as x, guardReactiveProps as D, nextTick as Be, Fragment as ve, renderList as He } from "vue";
import { generateRandomString as xe, ucfirst as lt, kebabCaseToCamelCase as at } from "lkt-string-tools";
import { openModal as ot, closeModal as Oe, addModal as Me } from "lkt-modal";
const Le = () => (/* @__PURE__ */ new Date()).getTime() / 1e3;
et({});
const je = M("en"), nt = M(["en"]), $ = () => nt.value, Se = () => je.value;
Ce(() => je.value);
var we = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(we || {}), H = (e, t) => typeof e > "u" || !e ? t : { ...t, ...e }, oe = (e, t) => typeof e > "u" ? t : { ...t, ...e }, l, ae = (l = class {
  static debugMode(t = !0) {
    return l.debugEnabled = t, l;
  }
  static setDefaultCreateError(t) {
    l.defaultCreateErrorText = t.text ?? l.defaultCreateErrorText, l.defaultCreateErrorDetails = t.details ?? l.defaultCreateErrorDetails, l.defaultCreateErrorIcon = t.icon ?? l.defaultCreateErrorIcon;
  }
  static setDefaultUpdateError(t) {
    l.defaultUpdateErrorText = t.text ?? l.defaultUpdateErrorText, l.defaultUpdateErrorDetails = t.details ?? l.defaultUpdateErrorDetails, l.defaultUpdateErrorIcon = t.icon ?? l.defaultUpdateErrorIcon;
  }
  static setDefaultDropError(t) {
    l.defaultDropErrorText = t.text ?? l.defaultDropErrorText, l.defaultDropErrorDetails = t.details ?? l.defaultDropErrorDetails, l.defaultDropErrorIcon = t.icon ?? l.defaultDropErrorIcon;
  }
  static setDefaultCreateSuccess(t) {
    l.defaultCreateSuccessText = t.text ?? l.defaultCreateSuccessText, l.defaultCreateSuccessDetails = t.details ?? l.defaultCreateSuccessDetails, l.defaultCreateSuccessIcon = t.icon ?? l.defaultCreateSuccessIcon;
  }
  static setDefaultUpdateSuccess(t) {
    l.defaultUpdateSuccessText = t.text ?? l.defaultUpdateSuccessText, l.defaultUpdateSuccessDetails = t.details ?? l.defaultUpdateSuccessDetails, l.defaultUpdateSuccessIcon = t.icon ?? l.defaultUpdateSuccessIcon;
  }
  static setDefaultDropSuccess(t) {
    l.defaultDropSuccessText = t.text ?? l.defaultDropSuccessText, l.defaultDropSuccessDetails = t.details ?? l.defaultDropSuccessDetails, l.defaultDropSuccessIcon = t.icon ?? l.defaultDropSuccessIcon;
  }
  static setDefaultUploadSuccess(t) {
    l.defaultUploadSuccessText = t.text ?? l.defaultUploadSuccessText, l.defaultUploadSuccessDetails = t.details ?? l.defaultUploadSuccessDetails, l.defaultUploadSuccessIcon = t.icon ?? l.defaultUploadSuccessIcon;
  }
  static setDefaultUploadError(t) {
    l.defaultUploadErrorText = t.text ?? l.defaultUploadErrorText, l.defaultUploadErrorDetails = t.details ?? l.defaultUploadErrorDetails, l.defaultUploadErrorIcon = t.icon ?? l.defaultUploadErrorIcon;
  }
  static setDefaultSaveButton(t, u = !0) {
    return u ? l.defaultSaveButton = t : l.defaultSaveButton = H(t, l.defaultSaveButton), l;
  }
  static setDefaultConfirmButton(t, u = !0) {
    return u ? l.defaultConfirmButton = t : l.defaultConfirmButton = H(t, l.defaultConfirmButton), l;
  }
  static setDefaultCancelButton(t, u = !0) {
    return u ? l.defaultCancelButton = t : l.defaultCancelButton = H(t, l.defaultCancelButton), l;
  }
  static setDefaultCreateButton(t, u = !0) {
    return u ? l.defaultCreateButton = t : l.defaultCreateButton = H(t, l.defaultCreateButton), l;
  }
  static setDefaultUpdateButton(t, u = !0) {
    return u ? l.defaultUpdateButton = t : l.defaultUpdateButton = H(t, l.defaultUpdateButton), l;
  }
  static setDefaultDropButton(t, u = !0) {
    return u ? l.defaultDropButton = t : l.defaultDropButton = H(t, l.defaultDropButton), l;
  }
  static setDefaultEditModeButton(t, u = !0) {
    return u ? l.defaultEditModeButton = t : l.defaultEditModeButton = H(t, l.defaultEditModeButton), l;
  }
  static setDefaultGroupButton(t, u = !0) {
    return u ? l.defaultGroupButton = t : l.defaultGroupButton = H(t, l.defaultGroupButton), l;
  }
  static setDefaultToggleButton(t, u = !0) {
    return u ? l.defaultToggleButton = t : l.defaultToggleButton = H(t, l.defaultToggleButton), l;
  }
  static setDefaultLoadMoreButton(t, u = !0) {
    return u ? l.defaultLoadMoreButton = t : l.defaultLoadMoreButton = H(t, l.defaultLoadMoreButton), l;
  }
  static setDefaultCloseModalIcon(t) {
    return l.defaultCloseModalIcon = t, l;
  }
  static setDefaultCloseToastIcon(t) {
    return l.defaultCloseToastIcon = t, l;
  }
  static setDefaultTableSortAscIcon(t) {
    return l.defaultTableSortAscIcon = t, l;
  }
  static setDefaultTableSortDescIcon(t) {
    return l.defaultTableSortDescIcon = t, l;
  }
  static setDefaultPaginatorFirstButton(t, u = !0) {
    return u ? l.defaultPaginatorFirstButton = t : l.defaultPaginatorFirstButton = H(t, l.defaultPaginatorFirstButton), l;
  }
  static setDefaultPaginatorPrevButton(t, u = !0) {
    return u ? l.defaultPaginatorPrevButton = t : l.defaultPaginatorPrevButton = H(t, l.defaultPaginatorPrevButton), l;
  }
  static setDefaultPaginatorNextButton(t, u = !0) {
    return u ? l.defaultPaginatorNextButton = t : l.defaultPaginatorNextButton = H(t, l.defaultPaginatorNextButton), l;
  }
  static setDefaultPaginatorLastButton(t, u = !0) {
    return u ? l.defaultPaginatorLastButton = t : l.defaultPaginatorLastButton = H(t, l.defaultPaginatorLastButton), l;
  }
  static setDefaultFieldLktAccordionElementCustomClassField(t, u = !0) {
    return u ? l.defaultFieldLktAccordionElementCustomClassField = t : l.defaultFieldLktAccordionElementCustomClassField = oe(t, l.defaultFieldLktAccordionElementCustomClassField), l;
  }
  static setDefaultFieldLktBoxElementCustomClassField(t, u = !0) {
    return u ? l.defaultFieldLktBoxElementCustomClassField = t : l.defaultFieldLktBoxElementCustomClassField = oe(t, l.defaultFieldLktBoxElementCustomClassField), l;
  }
  static setDefaultFieldLktIconElementCustomClassField(t, u = !0) {
    return u ? l.defaultFieldLktIconElementCustomClassField = t : l.defaultFieldLktIconElementCustomClassField = oe(t, l.defaultFieldLktIconElementCustomClassField), l;
  }
  static setDefaultFieldLktImageElementCustomClassField(t, u = !0) {
    return u ? l.defaultFieldLktImageElementCustomClassField = t : l.defaultFieldLktImageElementCustomClassField = oe(t, l.defaultFieldLktImageElementCustomClassField), l;
  }
  static setI18nOptionsFormatter(t, u) {
    return l.i18nOptionsFormatter[t] = u, l;
  }
}, r(l, "debugEnabled", !1), r(l, "defaultCreateErrorText", "Creation failed"), r(l, "defaultCreateErrorDetails", "An error occurred while creating the item. Please try again."), r(l, "defaultCreateErrorIcon", ""), r(l, "defaultUpdateErrorText", "Update failed"), r(l, "defaultUpdateErrorDetails", "An error occurred while updating the item. Please try again."), r(l, "defaultUpdateErrorIcon", ""), r(l, "defaultDropErrorText", "Drop failed"), r(l, "defaultDropErrorDetails", "An error occurred while removing the item. Please try again."), r(l, "defaultDropErrorIcon", ""), r(l, "defaultCreateSuccessText", "Item created"), r(l, "defaultCreateSuccessDetails", ""), r(l, "defaultCreateSuccessIcon", ""), r(l, "defaultUpdateSuccessText", "Item updated"), r(l, "defaultUpdateSuccessDetails", ""), r(l, "defaultUpdateSuccessIcon", ""), r(l, "defaultDropSuccessText", "Item removed"), r(l, "defaultDropSuccessDetails", ""), r(l, "defaultDropSuccessIcon", ""), r(l, "defaultUploadSuccessText", "Upload success"), r(l, "defaultUploadSuccessDetails", ""), r(l, "defaultUploadSuccessIcon", ""), r(l, "defaultUploadErrorText", "Upload error"), r(l, "defaultUploadErrorDetails", ""), r(l, "defaultUploadErrorIcon", ""), r(l, "defaultSaveButton", { text: "Save", icon: "lkt-icn-save" }), r(l, "defaultConfirmButton", { text: "Confirm" }), r(l, "defaultCancelButton", { text: "Cancel" }), r(l, "defaultCreateButton", { text: "Create", icon: "lkt-icn-save" }), r(l, "defaultUpdateButton", { text: "Update", icon: "lkt-icn-save" }), r(l, "defaultDropButton", { text: "Drop" }), r(l, "defaultEditModeButton", { text: "Edit mode", type: "switch" }), r(l, "defaultGroupButton", { text: "Actions", type: "split", icon: "lkt-icn-settings-cogs" }), r(l, "defaultToggleButton", { text: "Toggle", textOn: "Close", textOff: "Show more", type: "hidden-switch" }), r(l, "defaultLoadMoreButton", { text: "Load more", type: "hidden-switch" }), r(l, "defaultCloseModalIcon", "lkt-icn-cancel"), r(l, "defaultCloseToastIcon", "lkt-icn-cancel"), r(l, "defaultTableSortAscIcon", "lkt-icn-arrow-bottom"), r(l, "defaultTableSortDescIcon", "lkt-icn-arrow-top"), r(l, "defaultPaginatorFirstButton", { text: "", icon: "lkt-icn-angle-double-left" }), r(l, "defaultPaginatorPrevButton", { text: "", icon: "lkt-icn-angle-left" }), r(l, "defaultPaginatorNextButton", { text: "", iconEnd: "lkt-icn-angle-right" }), r(l, "defaultPaginatorLastButton", { text: "", iconEnd: "lkt-icn-angle-double-right" }), r(l, "defaultFieldElementCustomClassField", { label: "Appearance", multiple: !1 }), r(l, "defaultFieldLktAccordionElementCustomClassField", {}), r(l, "defaultFieldLktBoxElementCustomClassField", {}), r(l, "defaultFieldLktIconElementCustomClassField", {}), r(l, "defaultFieldLktImageElementCustomClassField", {}), r(l, "i18nOptionsFormatter", {}), l), w = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(w || {}), ut = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], N, Re = (N = class {
  constructor(t) {
  }
  feed(t = {}, u = this) {
    if (typeof t == "object") for (let [g, a] of Object.entries(t)) u.assignProp(g, a);
  }
  assignProp(t, u) {
    if (!(ut.includes(t) || N.lktExcludedProps.includes(t))) {
      if (N.lktDateProps.includes(t)) {
        this[t] = new Date(u);
        return;
      }
      this[t] = u;
    }
  }
}, r(N, "lktAllowUndefinedProps", []), r(N, "lktExcludedProps", []), r(N, "lktDateProps", []), r(N, "lktStrictItem", !1), r(N, "lktDefaultValues", []), N), O = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(O || {}), Ne = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(Ne || {}), rt = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(rt || {}), be = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(be || {}), st = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(st || {}), it = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(it || {}), dt = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(dt || {}), ct = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(ct || {}), pt = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(pt || {}), ft = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(ft || {}), mt = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(mt || {}), yt = ((e) => (e.NotDefined = "", e.Button = "button", e))(yt || {}), gt = ((e) => (e.Start = "start", e.End = "end", e))(gt || {}), $e = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))($e || {}), ze = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(ze || {}), kt = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(kt || {}), vt = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(vt || {}), ht = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(ht || {}), Ct = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Ct || {}), xt = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(xt || {}), Lt = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Lt || {}), bt = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(bt || {}), It = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(It || {}), Vt = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Vt || {}), Ie = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e))(Ie || {}), Bt = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Bt || {}), St = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(St || {}), wt = ((e) => (e.Message = "message", e.Button = "button", e))(wt || {}), Dt = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Dt || {}), Tt = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Tt || {}), Ut = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Ut || {}), At = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(At || {}), s = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(s || {}), F = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(F || {}), G, j = (G = class extends Re {
  constructor(u = {}) {
    var g;
    super();
    r(this, "id", 0);
    r(this, "type", "lkt-text");
    r(this, "component", "");
    r(this, "props", { class: "", icon: "", header: {}, subHeader: {}, text: {} });
    r(this, "children", []);
    r(this, "layout", { type: "grid", amountOfItems: [], alignItems: [], justifyContent: [], columns: [], alignSelf: [], justifySelf: [] });
    r(this, "config", { hasHeader: !0, hasSubHeader: !0, hasIcon: !0, amountOfCallToActions: 0, callToActions: [] });
    r(this, "keyMoment", "");
    r(this, "uid", "");
    this.feed(u), this.props || (this.props = { text: {} }), this.layout || (this.layout = { amountOfItems: [], columns: [], alignSelf: [], alignItems: [], justifySelf: [], justifyContent: [] }), this.layout.columns || (this.layout.columns = []), this.layout.alignSelf || (this.layout.alignSelf = []), this.layout.alignItems || (this.layout.alignItems = []), this.layout.justifySelf || (this.layout.justifySelf = []), this.layout.justifyContent || (this.layout.justifyContent = []), this.props.header || (this.props.header = {}), this.props.text || (this.props.text = {}), this.type === "lkt-text-banner" && (this.props.subHeader || (this.props.subHeader = {}), this.props.art || (this.props.art = { src: "" }), this.props.media || (this.props.media = { src: "" }), this.props.opacity || (this.props.opacity = 0), this.props.type || (this.props.type = "static")), Array.isArray(this.config.callToActions) && ((g = this.config.callToActions) == null ? void 0 : g.length) > 0 && (this.config.callToActions = this.config.callToActions.map((a) => new G(a))), this.uid = `${xe(6)}-${this.id}`, this.updateKeyMoment(), Array.isArray(this.children) || (this.children = []), this.children = this.children.map((a) => new G(a));
  }
  updateKeyMoment() {
    return this.keyMoment = `${this.uid}-${Le()}`, console.log("updateKeyMoment: ", this.uid, this.keyMoment), this;
  }
  addChild(u, g = void 0) {
    return Array.isArray(this.children) || (this.children = []), typeof g == "number" && g >= 0 && g < this.children.length ? (this.children.splice(g, 0, u), this) : (this.children.push(u), this);
  }
}, r(G, "lktDefaultValues", ["id", "type", "component", "props", "children", "layout", "config"]), G), he, Et = (he = class extends Re {
  constructor(t = {}) {
    super();
    r(this, "keyMoment", "");
    r(this, "id", 0);
    r(this, "name", "");
    r(this, "nameData", {});
    r(this, "webElements", []);
    this.feed(t), this.keyMoment = xe(4) + this.id + Le();
  }
  updateKeyMoment() {
    this.keyMoment = xe(4) + this.id + Le();
  }
}, r(he, "lktDefaultValues", ["id", "webElements"]), he), Ft = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Ft || {}), Pt = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Pt || {}), Ht = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ht || {}), Mt = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Mt || {}), Q = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Q || {}), Ot = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Ot || {}), ne = (e = "Time to create") => {
  let t = {};
  return $().forEach((u) => {
    t[u] = e;
  }), new j({ id: 0, type: "lkt-text", props: { text: t }, config: {}, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, jt = () => {
  let e = {};
  return $().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-anchor", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 } });
}, Ke = () => {
  let e = {};
  return $().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-button", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, children: [ne("Button text")], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Rt = () => new j({ id: 0, type: "lkt-layout", props: {}, config: {}, children: [ne("Content goes here")], layout: { type: "grid", amountOfItems: [], alignItems: [], justifyContent: [], columns: [], alignSelf: [], justifySelf: [] } }), Nt = () => {
  let e = {}, t = {};
  return $().forEach((u) => {
    e[u] = "Title goes here", t[u] = "Content goes here";
  }), new j({ id: 0, type: "lkt-text-box", props: { header: e, text: t }, config: { hasHeader: !0, hasIcon: !0 }, children: [], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, $t = () => {
  let e = {};
  return $().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-layout-box", props: { header: e }, config: { hasHeader: !0, hasIcon: !0 }, children: [ne("Content goes here")], layout: { type: "grid", amountOfItems: [], alignItems: [], justifyContent: [], columns: [], alignSelf: [], justifySelf: [] } });
}, zt = () => {
  let e = {};
  return $().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-layout-accordion", props: { header: e, type: "auto" }, config: { hasHeader: !0, hasIcon: !0 }, children: [ne("Content goes here")], layout: { type: "grid", amountOfItems: [], alignItems: [], justifyContent: [], columns: [], alignSelf: [], justifySelf: [] } });
}, Kt = () => {
  let e = {}, t = {};
  return $().forEach((u) => {
    e[u] = "Title goes here", t[u] = "Content goes here";
  }), new j({ id: 0, type: "lkt-text-accordion", props: { header: e, text: t, type: "auto" }, config: { hasHeader: !0, hasIcon: !0 }, children: [], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Gt = () => {
  let e = {};
  return $().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-header", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Wt = () => {
  let e = {};
  return $().forEach((t) => {
    e[t] = "Content goes here";
  }), new j({ id: 0, type: "lkt-icon", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, qt = () => {
  let e = {};
  return $().forEach((t) => {
    e[t] = "Image description goes here";
  }), new j({ id: 0, type: "lkt-image", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Jt = () => {
  let e = {}, t = {}, u = {};
  return $().forEach((g) => {
    e[g] = "Title goes here", t[g] = "Subtitle goes here", u[g] = "Content goes here";
  }), new j({ id: 0, type: "lkt-text-banner", props: { header: e, subHeader: t, text: u, art: {}, media: {}, opacity: 0, type: "static" }, config: { hasHeader: !0, hasSubHeader: !0, hasIcon: !0, amountOfCallToActions: 0, callToActions: [] }, children: [], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Qt = ((e) => (e.Quick = "quick", e.Full = "full", e))(Qt || {});
const E = /* @__PURE__ */ X({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(e, { emit: t }) {
    const u = t, g = (a) => {
      u("input", a);
    };
    return (a, I) => I[0] || (Pe(-1, !0), (I[0] = U("div", {
      contenteditable: a.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (k) => g(k),
      innerHTML: a.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, Pe(1), I[0]);
  }
}), Zt = { class: "lkt-element-content" }, Xt = {
  key: 0,
  class: "lkt-element-actions"
}, Ve = /* @__PURE__ */ X({
  __name: "LktWebElementBox",
  props: {
    modelValue: {},
    parent: {},
    parentChildren: {},
    index: { default: -1 },
    lang: {},
    isPreview: { type: Boolean, default: !1 },
    canRenderActions: { type: Boolean, default: !0 },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    parentLayoutComponent: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const u = t, g = e, a = M(g.modelValue);
    Z(() => g.modelValue, (d, n) => {
      a.value = d;
    }), Z(a, (d, n) => {
      u("update:modelValue", d);
    });
    const I = M(!1), k = (d, n = "text") => {
      const T = d.target.innerHTML.trim();
      T !== a.value.props[n][c] && (a.value.props[n][c] = T);
    }, h = (d) => {
      if (!d.layout || g.isPreview) return "";
      let n = [];
      d.layout.type === F.FlexRow && (!d.layout.amountOfItems || d.layout.amountOfItems.length === 0) ? n.push("lkt-flex-row") : d.layout.type === F.FlexRows && (!d.layout.amountOfItems || d.layout.amountOfItems.length === 0) ? n.push("lkt-flex-rows") : d.layout.type === F.FlexColumn && n.push("lkt-flex-column"), d.layout.amountOfItems && d.layout.amountOfItems.length > 0 && (d.layout.type === F.FlexRow ? n.push(d.layout.amountOfItems.map((R) => `lkt-flex-row-${R}`).join(" ")) : d.layout.type === F.FlexRows ? n.push(d.layout.amountOfItems.map((R) => `lkt-flex-rows-${R}`).join(" ")) : n.push(d.layout.amountOfItems.map((R) => `lkt-grid-${R}`).join(" "))), d.layout.alignItems && d.layout.alignItems.length > 0 && n.push(d.layout.alignItems.join(" ")), d.layout.justifyContent && d.layout.justifyContent.length > 0 && n.push(d.layout.justifyContent.join(" ")), n.length > 0 && n.push("layout-mode");
      let T = n.join(" ");
      return d.layout.type === F.FlexRows && (T = T.replace("flex-row-", "flex-rows-")), T;
    }, c = g.lang ?? Se();
    return (d, n) => {
      var re, se, ee, ie, de, ce;
      const T = A("lkt-box"), R = A("lkt-accordion"), me = A("lkt-image"), ye = A("lkt-icon"), Y = A("lkt-header"), _ = A("lkt-button"), ue = A("lkt-anchor"), W = A("lkt-banner");
      return v(), q("div", {
        class: z(["lkt-element", `is-${a.value.type} is-${a.value.id}`]),
        key: a.value.keyMoment
      }, [
        U("div", Zt, [
          a.value.type === o(s).LktText ? (v(), C(E, {
            key: 0,
            modelValue: a.value.props.text[o(c)],
            "onUpdate:modelValue": n[0] || (n[0] = (i) => a.value.props.text[o(c)] = i),
            onInput: n[1] || (n[1] = (i) => k(i))
          }, null, 8, ["modelValue"])) : a.value.type === o(s).LktLayoutBox ? (v(), C(T, {
            key: 1,
            icon: a.value.config.hasHeader && a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, le({
            default: b(() => [
              f(fe, {
                modelValue: a.value.children,
                "onUpdate:modelValue": n[4] || (n[4] = (i) => a.value.children = i),
                "layout-selector": h(a.value),
                "is-child": "",
                lang: o(c),
                "is-preview": d.isPreview,
                parent: a.value,
                "modal-crud-config": d.modalCrudConfig
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "modal-crud-config"])
            ]),
            _: 2
          }, [
            (re = a.value.config) != null && re.hasHeader ? {
              name: "header",
              fn: b(() => [
                f(E, {
                  modelValue: a.value.props.header[o(c)],
                  "onUpdate:modelValue": n[2] || (n[2] = (i) => a.value.props.header[o(c)] = i),
                  onInput: n[3] || (n[3] = (i) => k(i, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : a.value.type === o(s).LktTextBox ? (v(), C(T, {
            key: 2,
            icon: a.value.config.hasHeader && a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, le({
            default: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[7] || (n[7] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[8] || (n[8] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (se = a.value.config) != null && se.hasHeader ? {
              name: "header",
              fn: b(() => [
                f(E, {
                  modelValue: a.value.props.header[o(c)],
                  "onUpdate:modelValue": n[5] || (n[5] = (i) => a.value.props.header[o(c)] = i),
                  onInput: n[6] || (n[6] = (i) => k(i, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : a.value.type === o(s).LktLayoutAccordion ? (v(), C(R, {
            key: 3,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, le({
            default: b(() => [
              f(fe, {
                modelValue: a.value.children,
                "onUpdate:modelValue": n[11] || (n[11] = (i) => a.value.children = i),
                "layout-selector": h(a.value),
                "is-child": "",
                lang: o(c),
                "is-preview": d.isPreview,
                parent: a.value,
                "modal-crud-config": d.modalCrudConfig
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "modal-crud-config"])
            ]),
            _: 2
          }, [
            (ee = a.value.config) != null && ee.hasHeader ? {
              name: "header",
              fn: b(() => [
                f(E, {
                  modelValue: a.value.props.header[o(c)],
                  "onUpdate:modelValue": n[9] || (n[9] = (i) => a.value.props.header[o(c)] = i),
                  onInput: n[10] || (n[10] = (i) => k(i, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : a.value.type === o(s).LktTextAccordion ? (v(), C(R, {
            key: 4,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, le({
            default: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[14] || (n[14] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[15] || (n[15] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (ie = a.value.config) != null && ie.hasHeader ? {
              name: "header",
              fn: b(() => [
                f(E, {
                  modelValue: a.value.props.header[o(c)],
                  "onUpdate:modelValue": n[12] || (n[12] = (i) => a.value.props.header[o(c)] = i),
                  onInput: n[13] || (n[13] = (i) => k(i, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : a.value.type === o(s).LktImage ? (v(), C(me, {
            key: 5,
            class: z(a.value.props.class),
            src: a.value.props.src,
            alt: a.value.props.alt[o(c)],
            title: a.value.props.title[o(c)]
          }, {
            text: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[16] || (n[16] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[17] || (n[17] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["class", "src", "alt", "title"])) : a.value.type === o(s).LktIcon ? (v(), C(ye, {
            key: 6,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, {
            text: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[18] || (n[18] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[19] || (n[19] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(s).LktHeader ? (v(), C(Y, {
            key: 7,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, {
            text: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[20] || (n[20] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[21] || (n[21] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(s).LktButton ? (v(), C(_, {
            key: 8,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, {
            text: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[22] || (n[22] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[23] || (n[23] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(s).LktAnchor ? (v(), C(ue, {
            key: 9,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class)
          }, {
            text: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[24] || (n[24] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[25] || (n[25] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(s).LktTextBanner ? (v(), C(W, {
            key: 10,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: z(a.value.props.class),
            opacity: a.value.props.opacity,
            art: a.value.props.art,
            media: a.value.props.media,
            type: a.value.props.type
          }, le({
            default: b(() => [
              f(E, {
                modelValue: a.value.props.text[o(c)],
                "onUpdate:modelValue": n[30] || (n[30] = (i) => a.value.props.text[o(c)] = i),
                onInput: n[31] || (n[31] = (i) => k(i, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (de = a.value.config) != null && de.hasHeader ? {
              name: "header",
              fn: b(() => [
                f(E, {
                  modelValue: a.value.props.header[o(c)],
                  "onUpdate:modelValue": n[26] || (n[26] = (i) => a.value.props.header[o(c)] = i),
                  onInput: n[27] || (n[27] = (i) => k(i, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0,
            (ce = a.value.config) != null && ce.hasSubHeader ? {
              name: "subHeader",
              fn: b(() => [
                f(E, {
                  modelValue: a.value.props.subHeader[o(c)],
                  "onUpdate:modelValue": n[28] || (n[28] = (i) => a.value.props.subHeader[o(c)] = i),
                  onInput: n[29] || (n[29] = (i) => k(i, "subHeader"))
                }, null, 8, ["modelValue"])
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : a.value.type === o(s).LktLayout ? (v(), C(fe, {
            key: 11,
            modelValue: a.value.children,
            "onUpdate:modelValue": n[32] || (n[32] = (i) => a.value.children = i),
            "layout-selector": h(a.value),
            "is-child": "",
            lang: o(c),
            "is-preview": d.isPreview,
            parent: a.value,
            "modal-crud-config": d.modalCrudConfig
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "modal-crud-config"])) : (v(), C(tt(a.value.component), V(x({ key: 12 }, a.value.props)), null, 16))
        ]),
        !I.value && d.canRenderActions ? (v(), q("div", Xt, [
          f(_, V(D({
            type: o(we).Button,
            text: a.value.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-web-element-config",
            modalKey: `${d.index}--${a.value.type}--${a.value.id}`,
            modalData: {
              modalCrudConfig: d.modalCrudConfig,
              element: a.value,
              parent: d.parent,
              parentChildren: d.parentChildren,
              indexInParentChildren: d.index,
              fileBrowserConfig: d.fileBrowserConfig,
              parentLayoutComponent: d.parentLayoutComponent
            }
          })), null, 16)
        ])) : B("", !0)
      ], 2);
    };
  }
}), fe = /* @__PURE__ */ X({
  __name: "LktWebElements",
  props: {
    modelValue: {},
    parent: {},
    layoutSelector: { default: "" },
    lang: {},
    isChild: { type: Boolean, default: !0 },
    isPreview: { type: Boolean, default: !1 },
    fileBrowserConfig: {},
    modalCrudConfig: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const u = t, g = e, a = M(g.modelValue), I = M(!1), k = M(null);
    return Z(a, (h) => {
      console.log("updated items: ", a), u("update:modelValue", h);
    }, { deep: !0 }), (h, c) => {
      const d = A("lkt-table");
      return v(), q("div", null, [
        c[1] || (c[1] = U("span", { class: "like-lkt-field-label" }, "Web Elements", -1)),
        f(d, x({
          ref_key: "tableRef",
          ref: k,
          class: "lkt-elements-table",
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (n) => a.value = n)
        }, {
          type: h.isPreview ? o(Ie).Table : o(Ie).Item,
          slotItemVar: "element",
          editMode: !0,
          hideTableHeader: !0,
          perms: h.isChild ? [o(Q).Update, o(Q).Sort] : [o(Q).Create, o(Q).Update, o(Q).Sort],
          itemsContainerClass: h.isChild ? h.layoutSelector : "lkt-grid-1",
          itemContainerClass: (n) => {
            if (!n.layout || g.isPreview) return "";
            let T = [];
            return n.layout.columns && n.layout.columns.length > 0 && T.push(n.layout.columns.join(" ")), T.join(" ");
          },
          requiredItemsForBottomCreate: 10,
          drag: {
            enabled: h.isPreview,
            isDisabled: !1,
            canRender: !0,
            isValid: !0
          },
          createButton: h.isChild ? !1 : {
            text: "Add element",
            icon: "lkt-icn-more",
            modal: "lkt-web-element-select",
            modalData: {
              items: a.value,
              index: a.value.length,
              fileBrowserConfig: h.fileBrowserConfig,
              onAppend: () => {
                I.value = !0, Be(() => {
                  I.value = !1;
                });
              }
            }
          }
        }), {
          item: b(({ _: n, index: T }) => [
            f(Ve, {
              modelValue: a.value[T],
              "onUpdate:modelValue": (R) => a.value[T] = R,
              index: T,
              lang: h.lang,
              "is-preview": h.isPreview,
              "parent-children": a.value,
              parent: h.parent,
              "file-browser-config": h.fileBrowserConfig,
              "modal-crud-config": h.modalCrudConfig,
              "parent-layout-component": k.value
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent-children", "parent", "file-browser-config", "modal-crud-config", "parent-layout-component"])
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]);
    };
  }
}), Yt = { class: "lkt-web-page" }, _t = { class: "lkt-grid-1 lkt-grid-3--from-768" }, el = /* @__PURE__ */ X({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {}
  },
  setup(e) {
    const t = e, u = M(new Et(t.modelValue));
    return console.log("webPage: ", u.value), (g, a) => {
      const I = A("lkt-field"), k = A("lkt-item-crud");
      return v(), q("section", Yt, [
        f(k, x({
          modelValue: u.value,
          "onUpdate:modelValue": a[0] || (a[0] = (h) => u.value = h)
        }, g.crudConfig, {
          title: u.value.name
        }), {
          item: b(({ item: h }) => [
            U("div", _t, [
              f(I, x({
                modelValue: h.name,
                "onUpdate:modelValue": (c) => h.name = c
              }, {
                type: o(w).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            f(fe, {
              modelValue: h.webElements,
              "onUpdate:modelValue": (c) => h.webElements = c,
              lang: o(Se)(),
              "modal-crud-config": g.modalCrudConfig
            }, null, 8, ["modelValue", "onUpdate:modelValue", "lang", "modal-crud-config"]),
            B("", !0)
          ]),
          _: 1
        }, 16, ["modelValue", "title"])
      ]);
    };
  }
}), tl = { class: "lkt-grid-1" }, ll = { class: "lkt-grid-3" }, al = { class: "lkt-grid-3" }, ol = { class: "lkt-grid-3" }, nl = /* @__PURE__ */ X({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    items: {},
    element: {},
    onUpdate: {},
    onAppend: {},
    index: {},
    addingChildren: { type: Boolean },
    fileBrowserConfig: {},
    parentLayoutComponent: {}
  },
  setup(e) {
    const t = e, u = M(t.element), g = M(t.items), a = M(t.index + 1), I = (h) => {
      console.log("doRealAddElement"), t.addingChildren ? (console.log("esto va por aquí"), t.element.addChild(h).updateKeyMoment()) : (console.log("esto va por acá: ", h, t.items, a.value), t.items.push(h)), ++a.value, typeof t.onAppend == "function" && t.onAppend();
      let c = g.value.length;
      Be(() => {
        ot("lkt-web-element-config", `${c}--${h.type}--${h.id}`, {
          element: h,
          parent: u.value,
          parentChildren: g.value,
          indexInParentChildren: c,
          fileBrowserConfig: t.fileBrowserConfig,
          parentLayoutComponent: t.parentLayoutComponent
        }), Oe(t.modalName, t.modalKey);
      });
    }, k = (h) => {
      switch (h) {
        case s.LktLayoutBox:
          return I($t());
        case s.LktTextBox:
          return I(Nt());
        case s.LktLayoutAccordion:
          return I(zt());
        case s.LktTextAccordion:
          return I(Kt());
        case s.LktIcon:
          return I(Wt());
        case s.LktImage:
          return I(qt());
        case s.LktAnchor:
          return I(jt());
        case s.LktButton:
          return I(Ke());
        case s.LktLayout:
          return I(Rt());
        case s.LktHeader:
          return I(Gt());
        case s.LktText:
          return I(ne());
        case s.LktTextBanner:
          return I(Jt());
      }
    };
    return (h, c) => {
      const d = A("lkt-button"), n = A("lkt-accordion"), T = A("lkt-modal");
      return v(), C(T, x({ id: "lkt-add-element-modal" }, {
        modalName: h.modalName,
        modalKey: h.modalKey,
        zIndex: h.zIndex,
        title: "LktBox Config"
      }), {
        default: b(() => [
          U("div", tl, [
            f(n, V(D({
              type: o(O).Always,
              title: "Content"
            })), {
              default: b(() => [
                U("div", ll, [
                  f(d, V(D({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        k(o(s).LktText);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        k(o(s).LktHeader);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        k(o(s).LktImage);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        k(o(s).LktIcon);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        k(o(s).LktTextBox);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        k(o(s).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-font",
                    text: "LktTextBanner",
                    events: {
                      click: () => {
                        k(o(s).LktTextBanner);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            f(n, V(D({
              type: o(O).Always,
              title: "Containers"
            })), {
              default: b(() => [
                U("div", al, [
                  f(d, V(D({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        k(o(s).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        k(o(s).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-columns",
                    text: "LktLayout",
                    events: {
                      click: () => {
                        k(o(s).LktLayout);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            f(n, V(D({
              type: o(O).Auto,
              title: "Actions"
            })), {
              default: b(() => [
                U("div", ol, [
                  f(d, V(D({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        k(o(s).LktAnchor);
                      }
                    }
                  })), null, 16),
                  f(d, V(D({
                    icon: "lkt-icn-link",
                    text: "LktButton",
                    events: {
                      click: () => {
                        k(o(s).LktButton);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16)
          ])
        ]),
        _: 1
      }, 16);
    };
  }
}), ul = (e) => typeof e == "object" ? { ...e } : {}, rl = () => [
  {
    value: O.Auto,
    label: "Auto"
  },
  {
    value: O.Always,
    label: "Always"
  },
  {
    value: O.Lazy,
    label: "Lazy"
  },
  {
    value: O.Ever,
    label: "Ever"
  }
], sl = () => [
  {
    value: be.Static,
    label: "Static"
  },
  {
    value: be.Parallax,
    label: "Parallax"
  }
], il = () => [
  {
    value: F.Grid,
    label: "Grid"
  },
  {
    value: F.FlexRow,
    label: "Flex Row"
  },
  {
    value: F.FlexRows,
    label: "Flex Rows"
  },
  {
    value: F.FlexColumn,
    label: "Flex Column"
  }
], dl = () => {
  let e = {
    default: {
      css: "{n}",
      label: "Default: {n}",
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    from768: {
      css: "{n}--from-768",
      label: "From 768px: {n}",
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }, t = [];
  for (let u in e) {
    let g = e[u];
    if (!g.columns || !Array.isArray(g.columns) || g.columns.length === 0) continue;
    let a = g.columns[0], I = g.columns[g.columns.length - 1];
    for (let k = a; k <= I; ++k)
      t.push({
        value: g.css.replace("{n}", k.toString()),
        label: g.label.replace("{n}", k.toString())
      });
  }
  return t;
}, cl = { class: "lkt-flex-row" }, pl = { class: "lkt-flex-col-9 lkt-grid-1" }, fl = { class: "lkt-flex-col-3 lkt-grid-1" }, ml = { class: "lkt-grid-1" }, yl = { class: "lkt-grid-1" }, gl = { class: "lkt-grid-1" }, kl = { class: "lkt-grid-1" }, vl = { class: "lkt-grid-1" }, hl = /* @__PURE__ */ X({
  __name: "LktWebElementConfigModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    element: {},
    parent: {},
    parentChildren: {},
    indexInParentChildren: {},
    onUpdate: {},
    parentLayoutComponent: {}
  },
  setup(e) {
    var Ae, Ee;
    const t = e, u = parseInt(t.modalKey), g = M(new j());
    console.log("tableRef: ", t.parentLayoutComponent);
    const a = M(t.element), I = () => {
      t.parentChildren.splice(t.indexInParentChildren, 1), Oe(t.modalName, t.modalKey);
    }, k = (p) => {
      var L;
      return p.id = 0, (L = p.children) == null || L.forEach((P) => k(P)), p;
    }, h = () => k(ul(t.element)), c = () => {
      t.parentChildren.splice(t.indexInParentChildren - 1, 0, h()), t.indexInParentChildren += 1;
    }, d = () => {
      t.parentChildren.splice(t.indexInParentChildren + 1, 0, h());
    }, n = $(), T = Se(), R = [s.LktLayoutBox, s.LktLayoutAccordion, s.LktTextBox, s.LktTextAccordion, s.LktTextBanner].includes(a.value.type), me = [s.LktTextBanner].includes(a.value.type), ye = [s.LktTextBanner].includes(a.value.type), Y = [s.LktTextBanner].includes(a.value.type), _ = [s.LktTextBanner].includes(a.value.type), ue = [s.LktLayoutBox, s.LktLayoutAccordion, s.LktTextBox, s.LktTextAccordion, s.LktIcon, s.LktButton, s.LktAnchor].includes(a.value.type), W = [s.LktLayoutBox, s.LktLayoutAccordion, s.LktLayout].includes(a.value.type);
    [s.LktImage].includes(a.value.type);
    const re = [s.LktLayoutAccordion, s.LktTextAccordion].includes(a.value.type), se = [s.LktLayoutAccordion, s.LktLayoutBox, s.LktLayout].includes(a.value.type), ee = [F.FlexRow, F.FlexRows].includes((Ee = (Ae = t.parent) == null ? void 0 : Ae.layout) == null ? void 0 : Ee.type), ie = rl(), de = sl(), ce = il(), i = dl(), Ge = [
      {
        value: "lkt-flex-col-1",
        label: "Default: 1"
      },
      {
        value: "lkt-flex-col-2",
        label: "Default: 2"
      },
      {
        value: "lkt-flex-col-3",
        label: "Default: 3"
      },
      {
        value: "lkt-flex-col-4",
        label: "Default: 4"
      },
      {
        value: "lkt-flex-col-5",
        label: "Default: 5"
      },
      {
        value: "lkt-flex-col-6",
        label: "Default: 6"
      },
      {
        value: "lkt-flex-col-7",
        label: "Default: 7"
      },
      {
        value: "lkt-flex-col-8",
        label: "Default: 8"
      },
      {
        value: "lkt-flex-col-9",
        label: "Default: 9"
      },
      {
        value: "lkt-flex-col-10",
        label: "Default: 10"
      },
      {
        value: "lkt-flex-col-11",
        label: "Default: 11"
      },
      {
        value: "lkt-flex-col-12",
        label: "Default: 12"
      },
      {
        value: "lkt-flex-col-1--from-768",
        label: "From 768px: 1"
      },
      {
        value: "lkt-flex-col-2--from-768",
        label: "From 768px: 2"
      },
      {
        value: "lkt-flex-col-3--from-768",
        label: "From 768px: 3"
      },
      {
        value: "lkt-flex-col-4--from-768",
        label: "From 768px: 4"
      },
      {
        value: "lkt-flex-col-5--from-768",
        label: "From 768px: 5"
      }
    ], We = [
      {
        value: "lkt-align-items-start",
        label: "Default: Start"
      },
      {
        value: "lkt-align-items-center",
        label: "Default: Center"
      },
      {
        value: "lkt-align-items-end",
        label: "Default: End"
      }
    ], qe = [
      {
        value: "lkt-justify-content-stretch",
        label: "Default: Stretch"
      },
      {
        value: "lkt-justify-content-center",
        label: "Default: Center"
      },
      {
        value: "lkt-justify-content-space-between",
        label: "Default: Space Between"
      },
      {
        value: "lkt-justify-content-space-around",
        label: "Default: Space Around"
      },
      {
        value: "lkt-justify-content-space-evenly",
        label: "Default: Space Evenly"
      },
      {
        value: "lkt-justify-content-start",
        label: "Default: Start"
      },
      {
        value: "lkt-justify-content-end",
        label: "Default: End"
      }
    ], pe = (p, L) => {
      if (p.length > 0) {
        let P = String(L.value), K = "";
        if (P.includes("--from") && (K = "--" + P.split("--")[1]), P.includes("--to") && (K = "--" + P.split("--")[1]), K !== "") {
          let J = p.find((m) => String(m).includes(K));
          if (J)
            return J === L.value;
        }
        let S = p.find((J) => !String(J).includes("--"));
        if (S)
          return S === P || P.includes("--");
      }
      return !0;
    }, Je = (p) => {
      var L;
      return pe(
        ((L = a.value.layout) == null ? void 0 : L.amountOfItems) ?? [],
        p
      );
    }, Qe = (p) => {
      var L;
      return pe(
        ((L = a.value.layout) == null ? void 0 : L.alignItems) ?? [],
        p
      );
    }, Ze = (p) => {
      var L;
      return pe(
        ((L = a.value.layout) == null ? void 0 : L.justifyContent) ?? [],
        p
      );
    }, Xe = (p) => {
      var L;
      return pe(
        ((L = a.value.layout) == null ? void 0 : L.columns) ?? [],
        p
      );
    }, De = Ce(() => {
      let p = {};
      switch (a.value.type) {
        case s.LktLayoutBox:
        case s.LktTextBox:
          p = ae.defaultFieldLktBoxElementCustomClassField;
          break;
        case s.LktLayoutAccordion:
        case s.LktTextAccordion:
          p = ae.defaultFieldLktAccordionElementCustomClassField;
          break;
        case s.LktIcon:
          p = ae.defaultFieldLktIconElementCustomClassField;
          break;
        case s.LktImage:
          p = ae.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(p).length > 0 ? oe(p, ae.defaultFieldElementCustomClassField) : void 0;
    }), Te = Ce(() => lt(at(a.value.type)) + " Config"), Ue = (p) => {
      a.value.props.alt = p[0].nameData, a.value.props.title = p[0].nameData;
    }, ge = M(!1);
    Z(() => t.element, (p) => {
      console.log("updating model value"), ge.value = !0, a.value = p, Be(() => {
        ge.value = !1;
      });
    });
    let ke;
    return Z([
      () => a.value.props,
      () => a.value.config,
      () => a.value.layout
    ], (p, L) => {
      ge.value || (console.log("clear timeout porque ya hay uno"), clearTimeout(ke), console.log("crear nuevo timeout"), ke = setTimeout(() => {
        console.log("ejecutar el timeout"), t.element.feed({
          props: p[0],
          config: p[1],
          layout: p[2]
        }), t.element.updateKeyMoment(), t.parent && t.parent.updateKeyMoment(), clearTimeout(ke);
      }, 1e3));
    }, { deep: !0 }), Z(() => a.value.config.amountOfCallToActions, (p) => {
      console.log("updated amount of cta: ", p);
      let L = a.value.config.callToActions.length;
      p > L ? a.value.config.callToActions.push(Ke()) : a.value.config.callToActions.splice(p, 1);
    }), (p, L) => {
      const P = A("lkt-accordion"), K = A("lkt-button"), S = A("lkt-field"), J = A("lkt-item-crud");
      return v(), C(J, x({
        class: "lkt-web-element-config-modal",
        modelValue: g.value,
        "onUpdate:modelValue": L[2] || (L[2] = (m) => g.value = m)
      }, {
        mode: o($e).Update,
        view: o(ze).Modal,
        editing: !0,
        perms: ["update"],
        title: Te.value,
        modalConfig: {
          modalName: p.modalName,
          modalKey: p.modalKey,
          zIndex: p.zIndex,
          title: Te.value
        },
        updateButton: !1,
        readData: {
          id: o(u)
        },
        ...p.modalCrudConfig
      }), {
        item: b(({ item: m }) => {
          var Fe;
          return [
            L[3] || (L[3] = U("div", null, "A ver si es este", -1)),
            U("div", cl, [
              U("div", pl, [
                f(Ve, {
                  modelValue: g.value,
                  "onUpdate:modelValue": L[0] || (L[0] = (y) => g.value = y),
                  "is-preview": "",
                  "parent-children": p.parentChildren,
                  index: p.indexInParentChildren,
                  "can-render-actions": !1,
                  "modal-crud-config": p.modalCrudConfig
                }, null, 8, ["modelValue", "parent-children", "index", "modal-crud-config"]),
                (v(!0), q(ve, null, He(o(n), (y) => (v(), q(ve, null, [
                  y !== o(T) ? (v(), C(P, x({
                    key: 0,
                    ref_for: !0
                  }, {
                    type: o(O).Auto,
                    title: y
                  }), {
                    default: b(() => [
                      f(Ve, {
                        modelValue: g.value,
                        "onUpdate:modelValue": L[1] || (L[1] = (te) => g.value = te),
                        lang: y,
                        "is-preview": "",
                        "parent-children": p.parentChildren,
                        index: p.indexInParentChildren,
                        "can-render-actions": !1
                      }, null, 8, ["modelValue", "lang", "parent-children", "index"])
                    ]),
                    _: 2
                  }, 1040)) : B("", !0)
                ], 64))), 256))
              ]),
              U("div", fl, [
                o(se) ? (v(), C(K, V(x({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    items: m.children,
                    index: (Fe = m.children) == null ? void 0 : Fe.length,
                    element: m,
                    addingChildren: !0,
                    fileBrowserConfig: p.fileBrowserConfig,
                    parentLayoutComponent: p.parentLayoutComponent
                  }
                })), null, 16)) : B("", !0),
                f(P, V(D({
                  type: o(O).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: o(Ne).Display
                })), {
                  default: b(() => [
                    U("div", ml, [
                      De.value ? (v(), C(S, x({ key: 0 }, {
                        type: o(w).Select,
                        ...De.value,
                        canClear: !0
                      }, {
                        modelValue: m.props.class,
                        "onUpdate:modelValue": (y) => m.props.class = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(R) ? (v(), C(S, x({ key: 1 }, {
                        type: o(w).Switch,
                        label: "Has header"
                      }, {
                        modelValue: m.config.hasHeader,
                        "onUpdate:modelValue": (y) => m.config.hasHeader = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(me) ? (v(), C(S, x({ key: 2 }, {
                        type: o(w).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: m.config.hasSubHeader,
                        "onUpdate:modelValue": (y) => m.config.hasSubHeader = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(ue) ? (v(), C(S, x({ key: 3 }, {
                        type: o(w).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: m.config.hasIcon,
                        "onUpdate:modelValue": (y) => m.config.hasIcon = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(ue) ? (v(), C(S, x({ key: 4 }, {
                        type: o(w).Text,
                        label: "Icon"
                      }, {
                        modelValue: m.props.icon,
                        "onUpdate:modelValue": (y) => m.props.icon = y,
                        disabled: !m.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : B("", !0),
                      o(Y) ? (v(), C(S, x({ key: 5 }, {
                        type: o(w).Image,
                        label: "Media content",
                        fileBrowserConfig: p.fileBrowserConfig
                      }, {
                        modelValue: m.props.media.src,
                        "onUpdate:modelValue": (y) => m.props.media.src = y,
                        onPickedFiles: Ue
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(Y) ? (v(), C(S, x({ key: 6 }, {
                        type: o(w).Select,
                        label: "Type",
                        options: o(de)
                      }, {
                        modelValue: m.props.type,
                        "onUpdate:modelValue": (y) => m.props.type = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(ye) ? (v(), C(S, x({ key: 7 }, {
                        type: o(w).Image,
                        label: "Background Image",
                        fileBrowserConfig: p.fileBrowserConfig
                      }, {
                        modelValue: m.props.art.src,
                        "onUpdate:modelValue": (y) => m.props.art.src = y,
                        onPickedFiles: Ue
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      U("div", null, [
                        o(_) ? (v(), C(S, x({ key: 0 }, {
                          type: o(w).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: m.props.opacity,
                          "onUpdate:modelValue": (y) => m.props.opacity = y
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                        o(_) ? (v(), C(S, x({ key: 1 }, {
                          type: o(w).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: m.props.opacity,
                          "onUpdate:modelValue": (y) => m.props.opacity = y
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0)
                      ]),
                      o(Y) ? (v(), C(S, x({ key: 8 }, {
                        type: o(w).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: m.config.amountOfCallToActions,
                        "onUpdate:modelValue": (y) => m.config.amountOfCallToActions = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040),
                m.config.amountOfCallToActions > 0 ? (v(!0), q(ve, { key: 1 }, He(m.config.callToActions, (y) => (v(), C(P, x({ ref_for: !0 }, {
                  type: o(O).Auto,
                  title: "CTA #1"
                }), {
                  default: b(() => [
                    U("div", yl, [
                      f(S, x({ ref_for: !0 }, {
                        type: o(w).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: y.config.hasIcon,
                        "onUpdate:modelValue": (te) => y.config.hasIcon = te
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      f(S, x({ ref_for: !0 }, {
                        type: o(w).Text,
                        label: "Icon"
                      }, {
                        modelValue: y.props.icon,
                        "onUpdate:modelValue": (te) => y.props.icon = te,
                        disabled: !y.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : B("", !0),
                o(re) ? (v(), C(P, V(x({ key: 2 }, {
                  type: o(O).Auto,
                  title: "Accordion Config"
                })), {
                  default: b(() => [
                    U("div", gl, [
                      f(S, x({
                        type: o(w).Select,
                        label: "Type",
                        options: o(ie)
                      }, {
                        modelValue: m.props.type,
                        "onUpdate:modelValue": (y) => m.props.type = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : B("", !0),
                o(W) || o(ee) ? (v(), C(P, V(x({ key: 3 }, {
                  type: o(O).Auto,
                  title: "Layout Config"
                })), {
                  default: b(() => [
                    U("div", kl, [
                      o(W) ? (v(), C(S, x({ key: 0 }, {
                        type: o(w).Select,
                        label: "Type",
                        options: o(ce)
                      }, {
                        modelValue: m.layout.type,
                        "onUpdate:modelValue": (y) => m.layout.type = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(W) && m.layout.type !== o(F).FlexColumn ? (v(), C(S, x({ key: 1 }, {
                        type: o(w).Select,
                        label: m.layout.type === o(F).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: o(i),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Je
                        }
                      }, {
                        modelValue: m.layout.amountOfItems,
                        "onUpdate:modelValue": (y) => m.layout.amountOfItems = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(W) ? (v(), C(S, x({ key: 2 }, {
                        type: o(w).Select,
                        label: "Align items",
                        options: We,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Qe
                        }
                      }, {
                        modelValue: m.layout.alignItems,
                        "onUpdate:modelValue": (y) => m.layout.alignItems = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(W) ? (v(), C(S, x({ key: 3 }, {
                        type: o(w).Select,
                        label: "Justify content",
                        options: qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ze
                        }
                      }, {
                        modelValue: m.layout.justifyContent,
                        "onUpdate:modelValue": (y) => m.layout.justifyContent = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0),
                      o(ee) ? (v(), C(S, x({ key: 4 }, {
                        type: o(w).Select,
                        label: "Columns Reserved",
                        options: Ge,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Xe
                        }
                      }, {
                        modelValue: m.layout.columns,
                        "onUpdate:modelValue": (y) => m.layout.columns = y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : B("", !0),
                f(K, V(D({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: o(we).Split
                })), {
                  split: b(({ doClose: y }) => [
                    U("div", vl, [
                      f(K, V(D({
                        text: "Before",
                        events: {
                          click: c
                        }
                      })), null, 16),
                      f(K, V(D({
                        text: "After",
                        events: {
                          click: d
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                f(K, V(D({
                  text: "Remove element",
                  icon: "lkt-icn-less",
                  events: {
                    click: I
                  }
                })), null, 16)
              ])
            ])
          ];
        }),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), Il = {
  install: (e) => {
    e.component("lkt-web-page") === void 0 && (e.component("lkt-web-page", el), Me("lkt-web-element-select", nl), Me("lkt-web-element-config", hl));
  }
};
export {
  Il as default
};
