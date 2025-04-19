var tt = Object.defineProperty;
var lt = (e, t, n) => t in e ? tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t, n) => lt(e, typeof t != "symbol" ? t + "" : t, n);
import { ref as H, reactive as at, computed as X, defineComponent as _, setBlockTracking as Ue, createElementVNode as A, watch as Y, resolveComponent as U, createElementBlock as q, openBlock as y, normalizeClass as K, createCommentVNode as b, createBlock as v, unref as o, resolveDynamicComponent as Ee, createSlots as Fe, withCtx as V, createVNode as g, normalizeProps as I, mergeProps as h, guardReactiveProps as T, nextTick as Ie, Fragment as ye, renderList as Pe } from "vue";
import { generateRandomString as ke, ucfirst as ot, kebabCaseToCamelCase as nt } from "lkt-string-tools";
import { openModal as ut, closeModal as Oe, addModal as Me } from "lkt-modal";
const ve = () => (/* @__PURE__ */ new Date()).getTime() / 1e3;
at({});
const je = H("en"), rt = H(["en"]), N = () => rt.value, be = () => je.value;
X(() => je.value);
var Ve = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(Ve || {}), M = (e, t) => typeof e > "u" || !e ? t : { ...t, ...e }, ne = (e, t) => typeof e > "u" ? t : { ...t, ...e }, l, oe = (l = class {
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
  static setDefaultSaveButton(t, n = !0) {
    return n ? l.defaultSaveButton = t : l.defaultSaveButton = M(t, l.defaultSaveButton), l;
  }
  static setDefaultConfirmButton(t, n = !0) {
    return n ? l.defaultConfirmButton = t : l.defaultConfirmButton = M(t, l.defaultConfirmButton), l;
  }
  static setDefaultCancelButton(t, n = !0) {
    return n ? l.defaultCancelButton = t : l.defaultCancelButton = M(t, l.defaultCancelButton), l;
  }
  static setDefaultCreateButton(t, n = !0) {
    return n ? l.defaultCreateButton = t : l.defaultCreateButton = M(t, l.defaultCreateButton), l;
  }
  static setDefaultUpdateButton(t, n = !0) {
    return n ? l.defaultUpdateButton = t : l.defaultUpdateButton = M(t, l.defaultUpdateButton), l;
  }
  static setDefaultDropButton(t, n = !0) {
    return n ? l.defaultDropButton = t : l.defaultDropButton = M(t, l.defaultDropButton), l;
  }
  static setDefaultEditModeButton(t, n = !0) {
    return n ? l.defaultEditModeButton = t : l.defaultEditModeButton = M(t, l.defaultEditModeButton), l;
  }
  static setDefaultGroupButton(t, n = !0) {
    return n ? l.defaultGroupButton = t : l.defaultGroupButton = M(t, l.defaultGroupButton), l;
  }
  static setDefaultToggleButton(t, n = !0) {
    return n ? l.defaultToggleButton = t : l.defaultToggleButton = M(t, l.defaultToggleButton), l;
  }
  static setDefaultLoadMoreButton(t, n = !0) {
    return n ? l.defaultLoadMoreButton = t : l.defaultLoadMoreButton = M(t, l.defaultLoadMoreButton), l;
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
  static setDefaultPaginatorFirstButton(t, n = !0) {
    return n ? l.defaultPaginatorFirstButton = t : l.defaultPaginatorFirstButton = M(t, l.defaultPaginatorFirstButton), l;
  }
  static setDefaultPaginatorPrevButton(t, n = !0) {
    return n ? l.defaultPaginatorPrevButton = t : l.defaultPaginatorPrevButton = M(t, l.defaultPaginatorPrevButton), l;
  }
  static setDefaultPaginatorNextButton(t, n = !0) {
    return n ? l.defaultPaginatorNextButton = t : l.defaultPaginatorNextButton = M(t, l.defaultPaginatorNextButton), l;
  }
  static setDefaultPaginatorLastButton(t, n = !0) {
    return n ? l.defaultPaginatorLastButton = t : l.defaultPaginatorLastButton = M(t, l.defaultPaginatorLastButton), l;
  }
  static setDefaultFieldLktAccordionElementCustomClassField(t, n = !0) {
    return n ? l.defaultFieldLktAccordionElementCustomClassField = t : l.defaultFieldLktAccordionElementCustomClassField = ne(t, l.defaultFieldLktAccordionElementCustomClassField), l;
  }
  static setDefaultFieldLktBoxElementCustomClassField(t, n = !0) {
    return n ? l.defaultFieldLktBoxElementCustomClassField = t : l.defaultFieldLktBoxElementCustomClassField = ne(t, l.defaultFieldLktBoxElementCustomClassField), l;
  }
  static setDefaultFieldLktIconElementCustomClassField(t, n = !0) {
    return n ? l.defaultFieldLktIconElementCustomClassField = t : l.defaultFieldLktIconElementCustomClassField = ne(t, l.defaultFieldLktIconElementCustomClassField), l;
  }
  static setDefaultFieldLktImageElementCustomClassField(t, n = !0) {
    return n ? l.defaultFieldLktImageElementCustomClassField = t : l.defaultFieldLktImageElementCustomClassField = ne(t, l.defaultFieldLktImageElementCustomClassField), l;
  }
  static setI18nOptionsFormatter(t, n) {
    return l.i18nOptionsFormatter[t] = n, l;
  }
}, r(l, "debugEnabled", !1), r(l, "defaultCreateErrorText", "Creation failed"), r(l, "defaultCreateErrorDetails", "An error occurred while creating the item. Please try again."), r(l, "defaultCreateErrorIcon", ""), r(l, "defaultUpdateErrorText", "Update failed"), r(l, "defaultUpdateErrorDetails", "An error occurred while updating the item. Please try again."), r(l, "defaultUpdateErrorIcon", ""), r(l, "defaultDropErrorText", "Drop failed"), r(l, "defaultDropErrorDetails", "An error occurred while removing the item. Please try again."), r(l, "defaultDropErrorIcon", ""), r(l, "defaultCreateSuccessText", "Item created"), r(l, "defaultCreateSuccessDetails", ""), r(l, "defaultCreateSuccessIcon", ""), r(l, "defaultUpdateSuccessText", "Item updated"), r(l, "defaultUpdateSuccessDetails", ""), r(l, "defaultUpdateSuccessIcon", ""), r(l, "defaultDropSuccessText", "Item removed"), r(l, "defaultDropSuccessDetails", ""), r(l, "defaultDropSuccessIcon", ""), r(l, "defaultUploadSuccessText", "Upload success"), r(l, "defaultUploadSuccessDetails", ""), r(l, "defaultUploadSuccessIcon", ""), r(l, "defaultUploadErrorText", "Upload error"), r(l, "defaultUploadErrorDetails", ""), r(l, "defaultUploadErrorIcon", ""), r(l, "defaultSaveButton", { text: "Save", icon: "lkt-icn-save" }), r(l, "defaultConfirmButton", { text: "Confirm" }), r(l, "defaultCancelButton", { text: "Cancel" }), r(l, "defaultCreateButton", { text: "Create", icon: "lkt-icn-save" }), r(l, "defaultUpdateButton", { text: "Update", icon: "lkt-icn-save" }), r(l, "defaultDropButton", { text: "Drop" }), r(l, "defaultEditModeButton", { text: "Edit mode", type: "switch" }), r(l, "defaultGroupButton", { text: "Actions", type: "split", icon: "lkt-icn-settings-cogs" }), r(l, "defaultToggleButton", { text: "Toggle", textOn: "Close", textOff: "Show more", type: "hidden-switch" }), r(l, "defaultLoadMoreButton", { text: "Load more", type: "hidden-switch" }), r(l, "defaultCloseModalIcon", "lkt-icn-cancel"), r(l, "defaultCloseToastIcon", "lkt-icn-cancel"), r(l, "defaultTableSortAscIcon", "lkt-icn-arrow-bottom"), r(l, "defaultTableSortDescIcon", "lkt-icn-arrow-top"), r(l, "defaultPaginatorFirstButton", { text: "", icon: "lkt-icn-angle-double-left" }), r(l, "defaultPaginatorPrevButton", { text: "", icon: "lkt-icn-angle-left" }), r(l, "defaultPaginatorNextButton", { text: "", iconEnd: "lkt-icn-angle-right" }), r(l, "defaultPaginatorLastButton", { text: "", iconEnd: "lkt-icn-angle-double-right" }), r(l, "defaultFieldElementCustomClassField", { label: "Appearance", multiple: !1 }), r(l, "defaultFieldLktAccordionElementCustomClassField", {}), r(l, "defaultFieldLktBoxElementCustomClassField", {}), r(l, "defaultFieldLktIconElementCustomClassField", {}), r(l, "defaultFieldLktImageElementCustomClassField", {}), r(l, "i18nOptionsFormatter", {}), l), S = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(S || {}), st = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], R, Re = (R = class {
  constructor(t) {
  }
  feed(t = {}, n = this) {
    if (typeof t == "object") for (let [c, a] of Object.entries(t)) n.assignProp(c, a);
  }
  assignProp(t, n) {
    if (!(st.includes(t) || R.lktExcludedProps.includes(t))) {
      if (R.lktDateProps.includes(t)) {
        this[t] = new Date(n);
        return;
      }
      this[t] = n;
    }
  }
}, r(R, "lktAllowUndefinedProps", []), r(R, "lktExcludedProps", []), r(R, "lktDateProps", []), r(R, "lktStrictItem", !1), r(R, "lktDefaultValues", []), R), O = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(O || {}), Ne = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(Ne || {}), it = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(it || {}), he = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(he || {}), dt = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(dt || {}), ct = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(ct || {}), pt = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(pt || {}), ft = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(ft || {}), mt = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(mt || {}), yt = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(yt || {}), gt = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(gt || {}), kt = ((e) => (e.NotDefined = "", e.Button = "button", e))(kt || {}), vt = ((e) => (e.Start = "start", e.End = "end", e))(vt || {}), $e = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))($e || {}), ze = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(ze || {}), ht = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ht || {}), Ct = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(Ct || {}), xt = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(xt || {}), Lt = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Lt || {}), It = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(It || {}), bt = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(bt || {}), Vt = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(Vt || {}), Bt = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Bt || {}), St = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(St || {}), Ce = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e))(Ce || {}), Tt = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Tt || {}), Dt = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Dt || {}), At = ((e) => (e.Message = "message", e.Button = "button", e))(At || {}), wt = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(wt || {}), Ut = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Ut || {}), Et = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Et || {}), Ft = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Ft || {}), u = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(u || {}), F = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(F || {}), G, j = (G = class extends Re {
  constructor(n = {}) {
    var c;
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
    this.feed(n), this.props || (this.props = { text: {} }), this.layout || (this.layout = { amountOfItems: [], columns: [], alignSelf: [], alignItems: [], justifySelf: [], justifyContent: [] }), this.layout.columns || (this.layout.columns = []), this.layout.alignSelf || (this.layout.alignSelf = []), this.layout.alignItems || (this.layout.alignItems = []), this.layout.justifySelf || (this.layout.justifySelf = []), this.layout.justifyContent || (this.layout.justifyContent = []), this.props.header || (this.props.header = {}), this.props.text || (this.props.text = {}), this.type === "lkt-text-banner" && (this.props.subHeader || (this.props.subHeader = {}), this.props.art || (this.props.art = { src: "" }), this.props.media || (this.props.media = { src: "" }), this.props.opacity || (this.props.opacity = 0), this.props.type || (this.props.type = "static")), Array.isArray(this.config.callToActions) && ((c = this.config.callToActions) == null ? void 0 : c.length) > 0 && (this.config.callToActions = this.config.callToActions.map((a) => new G(a))), this.uid = `${ke(6)}-${this.id}`, this.updateKeyMoment(), Array.isArray(this.children) || (this.children = []), this.children = this.children.map((a) => new G(a));
  }
  updateKeyMoment() {
    return this.keyMoment = `${this.uid}-${ve()}`, console.log("updateKeyMoment: ", this.uid, this.keyMoment), this;
  }
  addChild(n, c = void 0) {
    return Array.isArray(this.children) || (this.children = []), typeof c == "number" && c >= 0 && c < this.children.length ? (this.children.splice(c, 0, n), this) : (this.children.push(n), this);
  }
}, r(G, "lktDefaultValues", ["id", "type", "component", "props", "children", "layout", "config"]), G), ge, Pt = (ge = class extends Re {
  constructor(t = {}) {
    super();
    r(this, "keyMoment", "");
    r(this, "id", 0);
    r(this, "name", "");
    r(this, "nameData", {});
    r(this, "webElements", []);
    this.feed(t), this.keyMoment = ke(4) + this.id + ve();
  }
  updateKeyMoment() {
    this.keyMoment = ke(4) + this.id + ve();
  }
}, r(ge, "lktDefaultValues", ["id", "webElements"]), ge), Mt = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Mt || {}), Ht = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Ht || {}), Ot = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ot || {}), jt = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(jt || {}), Z = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Z || {}), Rt = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Rt || {}), ue = (e = "Time to create") => {
  let t = {};
  return N().forEach((n) => {
    t[n] = e;
  }), new j({ id: 0, type: "lkt-text", props: { text: t }, config: {}, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Nt = () => {
  let e = {};
  return N().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-anchor", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 } });
}, Ke = () => {
  let e = {};
  return N().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-button", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, children: [ue("Button text")], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, $t = () => new j({ id: 0, type: "lkt-layout", props: {}, config: {}, children: [ue("Content goes here")], layout: { type: "grid", amountOfItems: [], alignItems: [], justifyContent: [], columns: [], alignSelf: [], justifySelf: [] } }), zt = () => {
  let e = {}, t = {};
  return N().forEach((n) => {
    e[n] = "Title goes here", t[n] = "Content goes here";
  }), new j({ id: 0, type: "lkt-text-box", props: { header: e, text: t }, config: { hasHeader: !0, hasIcon: !0 }, children: [], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Kt = () => {
  let e = {};
  return N().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-layout-box", props: { header: e }, config: { hasHeader: !0, hasIcon: !0 }, children: [ue("Content goes here")], layout: { type: "grid", amountOfItems: [], alignItems: [], justifyContent: [], columns: [], alignSelf: [], justifySelf: [] } });
}, Gt = () => {
  let e = {};
  return N().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-layout-accordion", props: { header: e, type: "auto" }, config: { hasHeader: !0, hasIcon: !0 }, children: [ue("Content goes here")], layout: { type: "grid", amountOfItems: [], alignItems: [], justifyContent: [], columns: [], alignSelf: [], justifySelf: [] } });
}, Wt = () => {
  let e = {}, t = {};
  return N().forEach((n) => {
    e[n] = "Title goes here", t[n] = "Content goes here";
  }), new j({ id: 0, type: "lkt-text-accordion", props: { header: e, text: t, type: "auto" }, config: { hasHeader: !0, hasIcon: !0 }, children: [], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, qt = () => {
  let e = {};
  return N().forEach((t) => {
    e[t] = "Title goes here";
  }), new j({ id: 0, type: "lkt-header", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Jt = () => {
  let e = {};
  return N().forEach((t) => {
    e[t] = "Content goes here";
  }), new j({ id: 0, type: "lkt-icon", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Qt = () => {
  let e = {};
  return N().forEach((t) => {
    e[t] = "Image description goes here";
  }), new j({ id: 0, type: "lkt-image", props: { text: e }, config: { hasHeader: !0, hasIcon: !0 }, layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Zt = () => {
  let e = {}, t = {}, n = {};
  return N().forEach((c) => {
    e[c] = "Title goes here", t[c] = "Subtitle goes here", n[c] = "Content goes here";
  }), new j({ id: 0, type: "lkt-text-banner", props: { header: e, subHeader: t, text: n, art: {}, media: {}, opacity: 0, type: "static" }, config: { hasHeader: !0, hasSubHeader: !0, hasIcon: !0, amountOfCallToActions: 0, callToActions: [] }, children: [], layout: { columns: [], alignSelf: [], justifySelf: [] } });
}, Xt = ((e) => (e.Quick = "quick", e.Full = "full", e))(Xt || {});
const $ = /* @__PURE__ */ _({
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
    const n = t, c = (a) => {
      n("input", a);
    };
    return (a, x) => x[0] || (Ue(-1, !0), (x[0] = A("div", {
      contenteditable: a.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (k) => c(k),
      innerHTML: a.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, Ue(1), x[0]);
  }
}), He = (e, t = !1) => {
  if (!e.layout || t) return "";
  let n = [];
  e.layout.type === F.FlexRow && (!e.layout.amountOfItems || e.layout.amountOfItems.length === 0) ? n.push("lkt-flex-row") : e.layout.type === F.FlexRows && (!e.layout.amountOfItems || e.layout.amountOfItems.length === 0) ? n.push("lkt-flex-rows") : e.layout.type === F.FlexColumn && n.push("lkt-flex-column"), e.layout.amountOfItems && e.layout.amountOfItems.length > 0 && (e.layout.type === F.FlexRow ? n.push(e.layout.amountOfItems.map((a) => `lkt-flex-row-${a}`).join(" ")) : e.layout.type === F.FlexRows ? n.push(e.layout.amountOfItems.map((a) => `lkt-flex-rows-${a}`).join(" ")) : n.push(e.layout.amountOfItems.map((a) => `lkt-grid-${a}`).join(" "))), e.layout.alignItems && e.layout.alignItems.length > 0 && n.push(e.layout.alignItems.join(" ")), e.layout.justifyContent && e.layout.justifyContent.length > 0 && n.push(e.layout.justifyContent.join(" ")), n.length > 0 && n.push("layout-mode");
  let c = n.join(" ");
  return e.layout.type === F.FlexRows && (c = c.replace("flex-row-", "flex-rows-")), c;
}, Yt = { class: "lkt-element-content" }, _t = {
  key: 0,
  class: "lkt-element-actions"
}, xe = /* @__PURE__ */ _({
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
    const n = t, c = e, a = H(c.modelValue);
    console.log("webElement: ", a.value), Y(() => c.modelValue, (C, i) => {
      a.value = C;
    }), Y(a, (C, i) => {
      n("update:modelValue", C);
    });
    const x = H(!1), k = (C, i = "text") => {
      const J = C.target.innerHTML.trim();
      J !== a.value.props[i][s] && (a.value.props[i][s] = J);
    }, s = c.lang ?? be(), w = X(() => [
      u.LktLayoutBox,
      u.LktTextBox,
      u.LktLayoutAccordion,
      u.LktTextAccordion
    ].includes(a.value.type)), D = X(() => [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktLayout
    ].includes(a.value.type)), E = X(() => {
      if ([
        u.LktLayoutBox,
        u.LktTextBox
      ].includes(a.value.type))
        return "lkt-box";
      if ([
        u.LktLayoutAccordion,
        u.LktTextAccordion
      ].includes(a.value.type))
        return "lkt-accordion";
    });
    return (C, i) => {
      var se, ie, le;
      const J = U("lkt-image"), pe = U("lkt-icon"), ee = U("lkt-header"), te = U("lkt-button"), re = U("lkt-anchor"), W = U("lkt-banner");
      return y(), q("div", {
        class: K(["lkt-element", `is-${a.value.type} is-${a.value.id}`]),
        key: a.value.keyMoment
      }, [
        A("div", Yt, [
          a.value.type === o(u).LktText ? (y(), v($, {
            key: 0,
            modelValue: a.value.props.text[o(s)],
            "onUpdate:modelValue": i[0] || (i[0] = (p) => a.value.props.text[o(s)] = p),
            onInput: i[1] || (i[1] = (p) => k(p))
          }, null, 8, ["modelValue"])) : w.value ? (y(), v(Ee(E.value), {
            key: 1,
            icon: a.value.config.hasHeader && a.value.config.hasIcon ? a.value.props.icon : "",
            class: K(a.value.props.class)
          }, Fe({
            default: V(() => [
              D.value ? (y(), v(Le, {
                key: 0,
                modelValue: a.value.children,
                "onUpdate:modelValue": i[4] || (i[4] = (p) => a.value.children = p),
                "layout-selector": o(He)(a.value),
                "is-child": "",
                lang: o(s),
                "is-preview": C.isPreview,
                parent: a.value,
                "modal-crud-config": C.modalCrudConfig,
                "file-browser-config": C.fileBrowserConfig
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "modal-crud-config", "file-browser-config"])) : (y(), v($, {
                key: 1,
                modelValue: a.value.props.text[o(s)],
                "onUpdate:modelValue": i[5] || (i[5] = (p) => a.value.props.text[o(s)] = p),
                onInput: i[6] || (i[6] = (p) => k(p, "text"))
              }, null, 8, ["modelValue"]))
            ]),
            _: 2
          }, [
            (se = a.value.config) != null && se.hasHeader ? {
              name: "header",
              fn: V(() => [
                g($, {
                  modelValue: a.value.props.header[o(s)],
                  "onUpdate:modelValue": i[2] || (i[2] = (p) => a.value.props.header[o(s)] = p),
                  onInput: i[3] || (i[3] = (p) => k(p, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : a.value.type === o(u).LktImage ? (y(), v(J, {
            key: 2,
            class: K(a.value.props.class),
            src: a.value.props.src,
            alt: a.value.props.alt[o(s)],
            title: a.value.props.title[o(s)]
          }, {
            text: V(() => [
              g($, {
                modelValue: a.value.props.text[o(s)],
                "onUpdate:modelValue": i[7] || (i[7] = (p) => a.value.props.text[o(s)] = p),
                onInput: i[8] || (i[8] = (p) => k(p, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["class", "src", "alt", "title"])) : a.value.type === o(u).LktIcon ? (y(), v(pe, {
            key: 3,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: K(a.value.props.class)
          }, {
            text: V(() => [
              g($, {
                modelValue: a.value.props.text[o(s)],
                "onUpdate:modelValue": i[9] || (i[9] = (p) => a.value.props.text[o(s)] = p),
                onInput: i[10] || (i[10] = (p) => k(p, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(u).LktHeader ? (y(), v(ee, {
            key: 4,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: K(a.value.props.class)
          }, {
            text: V(() => [
              g($, {
                modelValue: a.value.props.text[o(s)],
                "onUpdate:modelValue": i[11] || (i[11] = (p) => a.value.props.text[o(s)] = p),
                onInput: i[12] || (i[12] = (p) => k(p, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(u).LktButton ? (y(), v(te, {
            key: 5,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: K(a.value.props.class)
          }, {
            text: V(() => [
              g($, {
                modelValue: a.value.props.text[o(s)],
                "onUpdate:modelValue": i[13] || (i[13] = (p) => a.value.props.text[o(s)] = p),
                onInput: i[14] || (i[14] = (p) => k(p, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(u).LktAnchor ? (y(), v(re, {
            key: 6,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: K(a.value.props.class)
          }, {
            text: V(() => [
              g($, {
                modelValue: a.value.props.text[o(s)],
                "onUpdate:modelValue": i[15] || (i[15] = (p) => a.value.props.text[o(s)] = p),
                onInput: i[16] || (i[16] = (p) => k(p, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : a.value.type === o(u).LktTextBanner ? (y(), v(W, {
            key: 7,
            icon: a.value.config.hasIcon ? a.value.props.icon : "",
            class: K(a.value.props.class),
            opacity: a.value.props.opacity,
            art: a.value.props.art,
            media: a.value.props.media,
            type: a.value.props.type
          }, Fe({
            default: V(() => [
              g($, {
                modelValue: a.value.props.text[o(s)],
                "onUpdate:modelValue": i[21] || (i[21] = (p) => a.value.props.text[o(s)] = p),
                onInput: i[22] || (i[22] = (p) => k(p, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (ie = a.value.config) != null && ie.hasHeader ? {
              name: "header",
              fn: V(() => [
                g($, {
                  modelValue: a.value.props.header[o(s)],
                  "onUpdate:modelValue": i[17] || (i[17] = (p) => a.value.props.header[o(s)] = p),
                  onInput: i[18] || (i[18] = (p) => k(p, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0,
            (le = a.value.config) != null && le.hasSubHeader ? {
              name: "subHeader",
              fn: V(() => [
                g($, {
                  modelValue: a.value.props.subHeader[o(s)],
                  "onUpdate:modelValue": i[19] || (i[19] = (p) => a.value.props.subHeader[o(s)] = p),
                  onInput: i[20] || (i[20] = (p) => k(p, "subHeader"))
                }, null, 8, ["modelValue"])
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : a.value.type === o(u).LktLayout ? (y(), v(Le, {
            key: 8,
            modelValue: a.value.children,
            "onUpdate:modelValue": i[23] || (i[23] = (p) => a.value.children = p),
            "layout-selector": o(He)(a.value),
            "is-child": "",
            lang: o(s),
            "is-preview": C.isPreview,
            parent: a.value,
            "modal-crud-config": C.modalCrudConfig
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "modal-crud-config"])) : (y(), v(Ee(a.value.component), I(h({ key: 9 }, a.value.props)), null, 16))
        ]),
        !x.value && C.canRenderActions ? (y(), q("div", _t, [
          g(te, I(T({
            type: o(Ve).Button,
            text: a.value.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-web-element-config",
            modalKey: a.value.id,
            modalData: {
              modalCrudConfig: C.modalCrudConfig,
              element: a.value,
              parent: C.parent,
              parentChildren: C.parentChildren,
              indexInParentChildren: C.index,
              fileBrowserConfig: C.fileBrowserConfig,
              parentLayoutComponent: C.parentLayoutComponent
            }
          })), null, 16)
        ])) : b("", !0)
      ], 2);
    };
  }
}), Le = /* @__PURE__ */ _({
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
    const n = t, c = e, a = H(c.modelValue), x = H(!1), k = H(null);
    return console.log("items: ", a.value), Y(a, (s) => {
      n("update:modelValue", s);
    }, { deep: !0 }), (s, w) => {
      const D = U("lkt-table");
      return y(), q("div", null, [
        w[1] || (w[1] = A("span", { class: "like-lkt-field-label" }, "Web Elements", -1)),
        g(D, h({
          ref_key: "tableRef",
          ref: k,
          class: "lkt-elements-table",
          modelValue: a.value,
          "onUpdate:modelValue": w[0] || (w[0] = (E) => a.value = E)
        }, {
          type: s.isPreview ? o(Ce).Table : o(Ce).Item,
          slotItemVar: "element",
          editMode: !0,
          hideTableHeader: !0,
          perms: s.isChild ? [o(Z).Update, o(Z).Sort] : [o(Z).Create, o(Z).Update, o(Z).Sort],
          itemsContainerClass: s.isChild ? s.layoutSelector : "lkt-grid-1",
          itemContainerClass: (E) => {
            if (!E.layout || c.isPreview) return "";
            let C = [];
            return E.layout.columns && E.layout.columns.length > 0 && C.push(E.layout.columns.join(" ")), C.join(" ");
          },
          requiredItemsForBottomCreate: 10,
          drag: {
            enabled: s.isPreview,
            isDisabled: !1,
            canRender: !0,
            isValid: !0
          },
          createButton: s.isChild ? !1 : {
            text: "Add element",
            icon: "lkt-icn-more",
            modal: "lkt-web-element-select",
            modalData: {
              items: a.value,
              index: a.value.length,
              fileBrowserConfig: s.fileBrowserConfig,
              modalCrudConfig: s.modalCrudConfig,
              onAppend: () => {
                x.value = !0, Ie(() => {
                  x.value = !1;
                });
              }
            }
          }
        }), {
          item: V(({ _: E, index: C }) => [
            g(xe, {
              modelValue: a.value[C],
              "onUpdate:modelValue": (i) => a.value[C] = i,
              index: C,
              lang: s.lang,
              "is-preview": s.isPreview,
              "parent-children": a.value,
              parent: s.parent,
              "file-browser-config": s.fileBrowserConfig,
              "modal-crud-config": s.modalCrudConfig,
              "parent-layout-component": k.value
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent-children", "parent", "file-browser-config", "modal-crud-config", "parent-layout-component"])
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]);
    };
  }
}), el = { class: "lkt-web-page" }, tl = { class: "lkt-grid-1 lkt-grid-3--from-768" }, ll = /* @__PURE__ */ _({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {}
  },
  setup(e) {
    const t = e, n = H(new Pt(t.modelValue));
    return console.log("webPage: ", n.value), (c, a) => {
      const x = U("lkt-field"), k = U("lkt-item-crud");
      return y(), q("section", el, [
        g(k, h({
          modelValue: n.value,
          "onUpdate:modelValue": a[0] || (a[0] = (s) => n.value = s)
        }, c.crudConfig, {
          title: n.value.name
        }), {
          item: V(({ item: s }) => [
            A("div", tl, [
              g(x, h({
                modelValue: s.name,
                "onUpdate:modelValue": (w) => s.name = w
              }, {
                type: o(S).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            g(Le, {
              modelValue: s.webElements,
              "onUpdate:modelValue": (w) => s.webElements = w,
              lang: o(be)(),
              "modal-crud-config": c.modalCrudConfig
            }, null, 8, ["modelValue", "onUpdate:modelValue", "lang", "modal-crud-config"]),
            b("", !0)
          ]),
          _: 1
        }, 16, ["modelValue", "title"])
      ]);
    };
  }
}), al = { class: "lkt-grid-1" }, ol = { class: "lkt-grid-3" }, nl = { class: "lkt-grid-3" }, ul = { class: "lkt-grid-3" }, rl = /* @__PURE__ */ _({
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
    modalCrudConfig: {},
    parentLayoutComponent: {}
  },
  setup(e) {
    const t = e, n = H(t.element), c = H(t.items), a = H(t.index + 1), x = (s) => {
      console.log("doRealAddElement"), t.addingChildren ? (console.log("esto va por aquí"), t.element.addChild(s).updateKeyMoment()) : (console.log("esto va por acá: ", s, t.items, a.value), t.items.push(s)), ++a.value, typeof t.onAppend == "function" && t.onAppend();
      let w = c.value.length;
      Ie(() => {
        ut("lkt-web-element-config", `${w}--${s.type}--${s.id}`, {
          element: s,
          parent: n.value,
          parentChildren: c.value,
          indexInParentChildren: w,
          fileBrowserConfig: t.fileBrowserConfig,
          parentLayoutComponent: t.parentLayoutComponent
        }), Oe(t.modalName, t.modalKey);
      });
    }, k = (s) => {
      switch (s) {
        case u.LktLayoutBox:
          return x(Kt());
        case u.LktTextBox:
          return x(zt());
        case u.LktLayoutAccordion:
          return x(Gt());
        case u.LktTextAccordion:
          return x(Wt());
        case u.LktIcon:
          return x(Jt());
        case u.LktImage:
          return x(Qt());
        case u.LktAnchor:
          return x(Nt());
        case u.LktButton:
          return x(Ke());
        case u.LktLayout:
          return x($t());
        case u.LktHeader:
          return x(qt());
        case u.LktText:
          return x(ue());
        case u.LktTextBanner:
          return x(Zt());
      }
    };
    return (s, w) => {
      const D = U("lkt-button"), E = U("lkt-accordion"), C = U("lkt-modal");
      return y(), v(C, h({ id: "lkt-add-element-modal" }, {
        modalName: s.modalName,
        modalKey: s.modalKey,
        zIndex: s.zIndex,
        title: "LktBox Config"
      }), {
        default: V(() => [
          A("div", al, [
            g(E, I(T({
              type: o(O).Always,
              title: "Content"
            })), {
              default: V(() => [
                A("div", ol, [
                  g(D, I(T({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        k(o(u).LktText);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        k(o(u).LktHeader);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        k(o(u).LktImage);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        k(o(u).LktIcon);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        k(o(u).LktTextBox);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        k(o(u).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-font",
                    text: "LktTextBanner",
                    events: {
                      click: () => {
                        k(o(u).LktTextBanner);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            g(E, I(T({
              type: o(O).Always,
              title: "Containers"
            })), {
              default: V(() => [
                A("div", nl, [
                  g(D, I(T({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        k(o(u).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        k(o(u).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-columns",
                    text: "LktLayout",
                    events: {
                      click: () => {
                        k(o(u).LktLayout);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            g(E, I(T({
              type: o(O).Auto,
              title: "Actions"
            })), {
              default: V(() => [
                A("div", ul, [
                  g(D, I(T({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        k(o(u).LktAnchor);
                      }
                    }
                  })), null, 16),
                  g(D, I(T({
                    icon: "lkt-icn-link",
                    text: "LktButton",
                    events: {
                      click: () => {
                        k(o(u).LktButton);
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
}), sl = (e) => typeof e == "object" ? { ...e } : {}, il = () => [
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
], dl = () => [
  {
    value: he.Static,
    label: "Static"
  },
  {
    value: he.Parallax,
    label: "Parallax"
  }
], cl = () => [
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
], pl = () => {
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
  for (let n in e) {
    let c = e[n];
    if (!c.columns || !Array.isArray(c.columns) || c.columns.length === 0) continue;
    let a = c.columns[0], x = c.columns[c.columns.length - 1];
    for (let k = a; k <= x; ++k)
      t.push({
        value: c.css.replace("{n}", k.toString()),
        label: c.label.replace("{n}", k.toString())
      });
  }
  return t;
}, fl = { class: "lkt-flex-row" }, ml = { class: "lkt-flex-col-9 lkt-grid-1" }, yl = { class: "lkt-flex-col-3 lkt-grid-1" }, gl = { class: "lkt-grid-1" }, kl = { class: "lkt-grid-1" }, vl = { class: "lkt-grid-1" }, hl = { class: "lkt-grid-1" }, Cl = { class: "lkt-grid-1" }, xl = /* @__PURE__ */ _({
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
    var De, Ae;
    const t = e, n = parseInt(t.modalKey), c = H(new j());
    console.log("tableRef: ", t.parentLayoutComponent);
    const a = H(t.element), x = () => {
      t.parentChildren.splice(t.indexInParentChildren, 1), Oe(t.modalName, t.modalKey);
    }, k = (d) => {
      var L;
      return d.id = 0, (L = d.children) == null || L.forEach((P) => k(P)), d;
    }, s = () => k(sl(t.element)), w = () => {
      t.parentChildren.splice(t.indexInParentChildren - 1, 0, s()), t.indexInParentChildren += 1;
    }, D = () => {
      t.parentChildren.splice(t.indexInParentChildren + 1, 0, s());
    }, E = N(), C = be(), i = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktTextBox, u.LktTextAccordion, u.LktTextBanner].includes(a.value.type), J = [u.LktTextBanner].includes(a.value.type), pe = [u.LktTextBanner].includes(a.value.type), ee = [u.LktTextBanner].includes(a.value.type), te = [u.LktTextBanner].includes(a.value.type), re = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktTextBox, u.LktTextAccordion, u.LktIcon, u.LktButton, u.LktAnchor].includes(a.value.type), W = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout].includes(a.value.type);
    [u.LktImage].includes(a.value.type);
    const se = [u.LktLayoutAccordion, u.LktTextAccordion].includes(a.value.type), ie = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(a.value.type), le = [F.FlexRow, F.FlexRows].includes((Ae = (De = t.parent) == null ? void 0 : De.layout) == null ? void 0 : Ae.type), p = il(), Ge = dl(), We = cl(), qe = pl(), Je = [
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
    ], Qe = [
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
    ], Ze = [
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
    ], de = (d, L) => {
      if (d.length > 0) {
        let P = String(L.value), z = "";
        if (P.includes("--from") && (z = "--" + P.split("--")[1]), P.includes("--to") && (z = "--" + P.split("--")[1]), z !== "") {
          let Q = d.find((ce) => String(ce).includes(z));
          if (Q)
            return Q === L.value;
        }
        let B = d.find((Q) => !String(Q).includes("--"));
        if (B)
          return B === P || P.includes("--");
      }
      return !0;
    }, Xe = (d) => {
      var L;
      return de(
        ((L = a.value.layout) == null ? void 0 : L.amountOfItems) ?? [],
        d
      );
    }, Ye = (d) => {
      var L;
      return de(
        ((L = a.value.layout) == null ? void 0 : L.alignItems) ?? [],
        d
      );
    }, _e = (d) => {
      var L;
      return de(
        ((L = a.value.layout) == null ? void 0 : L.justifyContent) ?? [],
        d
      );
    }, et = (d) => {
      var L;
      return de(
        ((L = a.value.layout) == null ? void 0 : L.columns) ?? [],
        d
      );
    }, Be = X(() => {
      let d = {};
      switch (a.value.type) {
        case u.LktLayoutBox:
        case u.LktTextBox:
          d = oe.defaultFieldLktBoxElementCustomClassField;
          break;
        case u.LktLayoutAccordion:
        case u.LktTextAccordion:
          d = oe.defaultFieldLktAccordionElementCustomClassField;
          break;
        case u.LktIcon:
          d = oe.defaultFieldLktIconElementCustomClassField;
          break;
        case u.LktImage:
          d = oe.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(d).length > 0 ? ne(d, oe.defaultFieldElementCustomClassField) : void 0;
    }), Se = X(() => ot(nt(a.value.type)) + " Config"), Te = (d) => {
      a.value.props.alt = d[0].nameData, a.value.props.title = d[0].nameData;
    }, fe = H(!1);
    Y(() => t.element, (d) => {
      console.log("updating model value"), fe.value = !0, a.value = d, Ie(() => {
        fe.value = !1;
      });
    });
    let me;
    return Y([
      () => a.value.props,
      () => a.value.config,
      () => a.value.layout
    ], (d, L) => {
      fe.value || (console.log("clear timeout porque ya hay uno"), clearTimeout(me), console.log("crear nuevo timeout"), me = setTimeout(() => {
        console.log("ejecutar el timeout"), t.element.feed({
          props: d[0],
          config: d[1],
          layout: d[2]
        }), t.element.updateKeyMoment(), t.parent && t.parent.updateKeyMoment(), clearTimeout(me);
      }, 1e3));
    }, { deep: !0 }), Y(() => a.value.config.amountOfCallToActions, (d) => {
      console.log("updated amount of cta: ", d);
      let L = a.value.config.callToActions.length;
      d > L ? a.value.config.callToActions.push(Ke()) : a.value.config.callToActions.splice(d, 1);
    }), (d, L) => {
      var ce;
      const P = U("lkt-accordion"), z = U("lkt-button"), B = U("lkt-field"), Q = U("lkt-item-crud");
      return y(), v(Q, h({
        class: "lkt-web-element-config-modal",
        modelValue: c.value,
        "onUpdate:modelValue": L[2] || (L[2] = (m) => c.value = m)
      }, {
        mode: o($e).Update,
        view: o(ze).Modal,
        editing: !0,
        perms: ["update"],
        title: Se.value,
        modalConfig: {
          modalName: d.modalName,
          modalKey: d.modalKey,
          zIndex: d.zIndex,
          title: Se.value
        },
        updateButton: !1,
        readData: {
          id: o(n)
        },
        ...d.modalCrudConfig,
        updateButton: {
          ...d.modalCrudConfig.updateButton,
          resourceData: {
            ...(ce = d.modalCrudConfig.updateButton) == null ? void 0 : ce.resourceData,
            ...c.value
          }
        }
      }), {
        item: V(({ item: m }) => {
          var we;
          return [
            A("div", fl, [
              A("div", ml, [
                g(xe, {
                  modelValue: c.value,
                  "onUpdate:modelValue": L[0] || (L[0] = (f) => c.value = f),
                  "is-preview": "",
                  "parent-children": d.parentChildren,
                  index: d.indexInParentChildren,
                  "can-render-actions": !1,
                  "modal-crud-config": d.modalCrudConfig
                }, null, 8, ["modelValue", "parent-children", "index", "modal-crud-config"]),
                (y(!0), q(ye, null, Pe(o(E), (f) => (y(), q(ye, null, [
                  f !== o(C) ? (y(), v(P, h({
                    key: 0,
                    ref_for: !0
                  }, {
                    type: o(O).Auto,
                    title: f
                  }), {
                    default: V(() => [
                      g(xe, {
                        modelValue: c.value,
                        "onUpdate:modelValue": L[1] || (L[1] = (ae) => c.value = ae),
                        lang: f,
                        "is-preview": "",
                        "parent-children": d.parentChildren,
                        index: d.indexInParentChildren,
                        "can-render-actions": !1,
                        "modal-crud-config": d.modalCrudConfig
                      }, null, 8, ["modelValue", "lang", "parent-children", "index", "modal-crud-config"])
                    ]),
                    _: 2
                  }, 1040)) : b("", !0)
                ], 64))), 256))
              ]),
              A("div", yl, [
                o(ie) ? (y(), v(z, I(h({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    items: m.children,
                    index: (we = m.children) == null ? void 0 : we.length,
                    element: m,
                    addingChildren: !0,
                    fileBrowserConfig: d.fileBrowserConfig,
                    parentLayoutComponent: d.parentLayoutComponent
                  }
                })), null, 16)) : b("", !0),
                g(P, I(T({
                  type: o(O).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: o(Ne).Display
                })), {
                  default: V(() => [
                    A("div", gl, [
                      Be.value ? (y(), v(B, h({ key: 0 }, {
                        type: o(S).Select,
                        ...Be.value,
                        canClear: !0
                      }, {
                        modelValue: m.props.class,
                        "onUpdate:modelValue": (f) => m.props.class = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(i) ? (y(), v(B, h({ key: 1 }, {
                        type: o(S).Switch,
                        label: "Has header"
                      }, {
                        modelValue: m.config.hasHeader,
                        "onUpdate:modelValue": (f) => m.config.hasHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(J) ? (y(), v(B, h({ key: 2 }, {
                        type: o(S).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: m.config.hasSubHeader,
                        "onUpdate:modelValue": (f) => m.config.hasSubHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(re) ? (y(), v(B, h({ key: 3 }, {
                        type: o(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: m.config.hasIcon,
                        "onUpdate:modelValue": (f) => m.config.hasIcon = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(re) ? (y(), v(B, h({ key: 4 }, {
                        type: o(S).Text,
                        label: "Icon"
                      }, {
                        modelValue: m.props.icon,
                        "onUpdate:modelValue": (f) => m.props.icon = f,
                        disabled: !m.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : b("", !0),
                      o(ee) ? (y(), v(B, h({ key: 5 }, {
                        type: o(S).Image,
                        label: "Media content",
                        fileBrowserConfig: d.fileBrowserConfig
                      }, {
                        modelValue: m.props.media.src,
                        "onUpdate:modelValue": (f) => m.props.media.src = f,
                        onPickedFiles: Te
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(ee) ? (y(), v(B, h({ key: 6 }, {
                        type: o(S).Select,
                        label: "Type",
                        options: o(Ge)
                      }, {
                        modelValue: m.props.type,
                        "onUpdate:modelValue": (f) => m.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(pe) ? (y(), v(B, h({ key: 7 }, {
                        type: o(S).Image,
                        label: "Background Image",
                        fileBrowserConfig: d.fileBrowserConfig
                      }, {
                        modelValue: m.props.art.src,
                        "onUpdate:modelValue": (f) => m.props.art.src = f,
                        onPickedFiles: Te
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      A("div", null, [
                        o(te) ? (y(), v(B, h({ key: 0 }, {
                          type: o(S).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: m.props.opacity,
                          "onUpdate:modelValue": (f) => m.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                        o(te) ? (y(), v(B, h({ key: 1 }, {
                          type: o(S).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: m.props.opacity,
                          "onUpdate:modelValue": (f) => m.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0)
                      ]),
                      o(ee) ? (y(), v(B, h({ key: 8 }, {
                        type: o(S).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: m.config.amountOfCallToActions,
                        "onUpdate:modelValue": (f) => m.config.amountOfCallToActions = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040),
                m.config.amountOfCallToActions > 0 ? (y(!0), q(ye, { key: 1 }, Pe(m.config.callToActions, (f) => (y(), v(P, h({ ref_for: !0 }, {
                  type: o(O).Auto,
                  title: "CTA #1"
                }), {
                  default: V(() => [
                    A("div", kl, [
                      g(B, h({ ref_for: !0 }, {
                        type: o(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (ae) => f.config.hasIcon = ae
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      g(B, h({ ref_for: !0 }, {
                        type: o(S).Text,
                        label: "Icon"
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (ae) => f.props.icon = ae,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : b("", !0),
                o(se) ? (y(), v(P, I(h({ key: 2 }, {
                  type: o(O).Auto,
                  title: "Accordion Config"
                })), {
                  default: V(() => [
                    A("div", vl, [
                      g(B, h({
                        type: o(S).Select,
                        label: "Type",
                        options: o(p)
                      }, {
                        modelValue: m.props.type,
                        "onUpdate:modelValue": (f) => m.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : b("", !0),
                o(W) || o(le) ? (y(), v(P, I(h({ key: 3 }, {
                  type: o(O).Auto,
                  title: "Layout Config"
                })), {
                  default: V(() => [
                    A("div", hl, [
                      o(W) ? (y(), v(B, h({ key: 0 }, {
                        type: o(S).Select,
                        label: "Type",
                        options: o(We)
                      }, {
                        modelValue: m.layout.type,
                        "onUpdate:modelValue": (f) => m.layout.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(W) && m.layout.type !== o(F).FlexColumn ? (y(), v(B, h({ key: 1 }, {
                        type: o(S).Select,
                        label: m.layout.type === o(F).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: o(qe),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Xe
                        }
                      }, {
                        modelValue: m.layout.amountOfItems,
                        "onUpdate:modelValue": (f) => m.layout.amountOfItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(W) ? (y(), v(B, h({ key: 2 }, {
                        type: o(S).Select,
                        label: "Align items",
                        options: Qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ye
                        }
                      }, {
                        modelValue: m.layout.alignItems,
                        "onUpdate:modelValue": (f) => m.layout.alignItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(W) ? (y(), v(B, h({ key: 3 }, {
                        type: o(S).Select,
                        label: "Justify content",
                        options: Ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: _e
                        }
                      }, {
                        modelValue: m.layout.justifyContent,
                        "onUpdate:modelValue": (f) => m.layout.justifyContent = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
                      o(le) ? (y(), v(B, h({ key: 4 }, {
                        type: o(S).Select,
                        label: "Columns Reserved",
                        options: Je,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: et
                        }
                      }, {
                        modelValue: m.layout.columns,
                        "onUpdate:modelValue": (f) => m.layout.columns = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : b("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : b("", !0),
                g(z, I(T({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: o(Ve).Split
                })), {
                  split: V(({ doClose: f }) => [
                    A("div", Cl, [
                      g(z, I(T({
                        text: "Before",
                        events: {
                          click: w
                        }
                      })), null, 16),
                      g(z, I(T({
                        text: "After",
                        events: {
                          click: D
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                g(z, I(T({
                  text: "Remove element",
                  icon: "lkt-icn-less",
                  events: {
                    click: x
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
}), Bl = {
  install: (e) => {
    e.component("lkt-web-page") === void 0 && (e.component("lkt-web-page", ll), Me("lkt-web-element-select", rl), Me("lkt-web-element-config", xl));
  }
};
export {
  Bl as default
};
