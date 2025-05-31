import { defineComponent as X, useSlots as je, createElementBlock as z, openBlock as p, renderSlot as xe, createCommentVNode as T, setBlockTracking as he, createElementVNode as h, unref as e, createBlock as k, resolveDynamicComponent as Me, normalizeProps as b, mergeProps as c, resolveComponent as R, createVNode as r, guardReactiveProps as V, ref as W, watch as ee, computed as j, normalizeClass as J, withCtx as w, createSlots as Re, nextTick as We, Fragment as ge, renderList as Ve, onMounted as rl } from "vue";
import { WebElementLayoutType as $, ButtonType as Ne, WebElementType as u, WebParentType as S, WebElementController as Ae, TablePermission as pe, TableType as me, WebElement as le, WebPage as ye, FormInstance as q, AccordionToggleMode as Le, AccordionType as F, FieldAutoValidationTrigger as fe, FieldType as U, WebPageStatus as Fe, BannerType as He, ensureFieldConfig as dl, LktSettings as il, getDefaultLktButtonWebElement as sl, ItemCrudView as pl, ItemCrudMode as Oe, applyTextFormat as Q, applyTextAlignment as ce } from "lkt-vue-kernel";
import { getCurrentLanguage as Ie, getAvailableLanguages as ml } from "lkt-i18n";
import { httpCall as Ke, createHTTPGetResource as _, createHTTPPostResource as ze, createHTTPPutResource as Ge, createHTTPDeleteResource as Je } from "lkt-http-client";
import { openModal as ve, closeModal as qe, addModal as $e } from "lkt-modal";
import { ucfirst as fl, kebabCaseToCamelCase as cl } from "lkt-string-tools";
const gl = { class: "lkt-text" }, M = /* @__PURE__ */ X({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(m, { emit: a }) {
    const y = a, o = je(), t = (C) => {
      y("input", C);
    };
    return (C, A) => (p(), z("div", gl, [
      A[0] || (he(-1, !0), (A[0] = h("div", {
        contenteditable: C.disabled ? "false" : "true",
        class: "lkt-element-editable-text",
        onInput: (i) => t(i),
        innerHTML: C.modelValue
      }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, he(1), A[0]),
      e(o)["web-element-actions"] ? xe(C.$slots, "web-element-actions", { key: 0 }) : T("", !0)
    ]));
  }
}), Te = (m, a = !1) => {
  if (!m.layout || a) return "";
  let y = [];
  m.layout.type === $.FlexRow && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? y.push("lkt-flex-row") : m.layout.type === $.FlexRows && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? y.push("lkt-flex-rows") : m.layout.type === $.FlexColumn && y.push("lkt-flex-column"), m.layout.amountOfItems && m.layout.amountOfItems.length > 0 && (m.layout.type === $.FlexRow ? y.push(m.layout.amountOfItems.map((t) => `lkt-flex-row-${t}`).join(" ")) : m.layout.type === $.FlexRows ? y.push(m.layout.amountOfItems.map((t) => `lkt-flex-rows-${t}`).join(" ")) : y.push(m.layout.amountOfItems.map((t) => `lkt-grid-${t}`).join(" "))), m.layout.alignItems && m.layout.alignItems.length > 0 && y.push(m.layout.alignItems.join(" ")), m.layout.justifyContent && m.layout.justifyContent.length > 0 && y.push(m.layout.justifyContent.join(" ")), y.length > 0 && y.push("layout-mode");
  let o = y.join(" ");
  return m.layout.type === $.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
}, yl = /* @__PURE__ */ X({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(m) {
    return (a, y) => a.settings.type === "component" ? (p(), k(Me(a.settings.component), b(c({ key: 0 }, a.settings.componentProps)), null, 16)) : T("", !0);
  }
}), vl = {
  key: 0,
  class: "lkt-element-actions"
}, K = /* @__PURE__ */ X({
  __name: "WebElementActionsButton",
  props: {
    webElement: {},
    canRenderActions: { type: Boolean, default: !0 },
    appendingItems: { type: Boolean },
    isSubElement: { type: Boolean },
    onUpdate: {},
    parent: {},
    parentType: {},
    fileBrowserConfig: {},
    modalCrudConfig: {},
    defaultAppearance: {}
  },
  setup(m) {
    return (a, y) => {
      const o = R("lkt-button");
      return !a.appendingItems && a.canRenderActions ? (p(), z("div", vl, [
        r(o, b(V({
          type: e(Ne).Button,
          icon: "lkt-icn-cog",
          modal: "lkt-web-element-config",
          modalKey: a.webElement.id,
          modalData: {
            element: a.webElement,
            parent: a.parent,
            parentType: a.parentType,
            fileBrowserConfig: a.fileBrowserConfig,
            modalCrudConfig: a.modalCrudConfig,
            defaultAppearance: a.defaultAppearance,
            isSubElement: a.isSubElement,
            onUpdate: a.onUpdate
          }
        })), null, 16)
      ])) : T("", !0);
    };
  }
}), kl = { key: 8 }, Be = /* @__PURE__ */ X({
  __name: "LktWebElementBox",
  props: {
    modelValue: {},
    parent: {},
    parentType: {},
    index: { default: -1 },
    lang: {},
    isPreview: { type: Boolean, default: !1 },
    isSubElement: { type: Boolean },
    canRenderActions: { type: Boolean, default: !0 },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    disabled: { type: Boolean, default: !1 },
    editing: { type: Boolean },
    defaultAppearance: {},
    events: {}
  },
  emits: [
    "update:modelValue",
    "crud-update"
  ],
  setup(m, { emit: a }) {
    const y = a, o = m, t = W(o.modelValue);
    ee(() => o.modelValue, (l, n) => {
      t.value = l;
    }), ee(t, (l, n) => {
      y("update:modelValue", l);
    });
    const C = W(!1), A = (l, n = "text") => {
      const G = l.target.innerHTML.trim();
      G !== t.value.props[n][i] && (t.value.props[n][i] = G);
    }, i = o.lang ?? Ie(), H = j(() => [
      u.LktLayoutBox,
      u.LktTextBox,
      u.LktLayoutAccordion,
      u.LktTextAccordion
    ].includes(t.value.type)), x = j(() => [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktLayout
    ].includes(t.value.type)), D = j(() => {
      if ([
        u.LktLayoutBox,
        u.LktTextBox
      ].includes(t.value.type))
        return "lkt-box";
      if ([
        u.LktLayoutAccordion,
        u.LktTextAccordion
      ].includes(t.value.type))
        return "lkt-accordion";
    }), L = j(() => t.value.props.class ? t.value.props.class : o.defaultAppearance), B = j(() => `lkt-element is-${t.value.type} is-${t.value.id} ${L.value}`), E = () => {
      var l;
      typeof ((l = o.events) == null ? void 0 : l.onUpdate) == "function" && o.events.onUpdate(), y("crud-update");
    };
    return (l, n) => {
      var re, de, ae, ie;
      const G = R("lkt-image"), be = R("lkt-icon"), te = R("lkt-header"), ue = R("lkt-button"), Y = R("lkt-anchor"), Ce = R("lkt-banner");
      return t.value.type === e(u).LktText ? (p(), k(M, {
        key: 0,
        class: J(B.value),
        modelValue: t.value.props.text[e(i)],
        "onUpdate:modelValue": n[0] || (n[0] = (d) => t.value.props.text[e(i)] = d),
        disabled: l.disabled || l.parentType === e(S).Page,
        onInput: n[1] || (n[1] = (d) => A(d))
      }, {
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 8, ["class", "modelValue", "disabled"])) : H.value ? (p(), k(Me(D.value), {
        key: 1,
        icon: t.value.config.hasHeader && t.value.config.hasIcon ? t.value.props.icon : "",
        class: J(B.value)
      }, Re({
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        default: w(() => [
          x.value ? (p(), k(ke, {
            key: 0,
            modelValue: t.value.children,
            "onUpdate:modelValue": n[4] || (n[4] = (d) => t.value.children = d),
            "layout-selector": e(Te)(t.value),
            "is-child": "",
            lang: e(i),
            "is-preview": l.isPreview,
            parent: t.value,
            "parent-type": e(S).Element,
            "modal-crud-config": l.modalCrudConfig,
            "file-browser-config": l.fileBrowserConfig,
            disabled: l.disabled,
            editing: l.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), k(M, {
            key: 1,
            modelValue: t.value.props.text[e(i)],
            "onUpdate:modelValue": n[5] || (n[5] = (d) => t.value.props.text[e(i)] = d),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[6] || (n[6] = (d) => A(d, "text"))
          }, null, 8, ["modelValue", "disabled"]))
        ]),
        _: 2
      }, [
        (re = t.value.config) != null && re.hasHeader ? {
          name: "header",
          fn: w(() => [
            r(M, {
              modelValue: t.value.props.header[e(i)],
              "onUpdate:modelValue": n[2] || (n[2] = (d) => t.value.props.header[e(i)] = d),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[3] || (n[3] = (d) => A(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "class"])) : t.value.type === e(u).LktImage ? (p(), k(G, {
        key: 2,
        class: J(B.value),
        src: t.value.props.src,
        alt: typeof t.value.props.alt == "object" ? t.value.props.alt[e(i)] : "",
        title: typeof t.value.props.title == "object" ? t.value.props.title[e(i)] : ""
      }, {
        text: w(() => [
          r(M, {
            modelValue: t.value.props.text[e(i)],
            "onUpdate:modelValue": n[7] || (n[7] = (d) => t.value.props.text[e(i)] = d),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[8] || (n[8] = (d) => A(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 8, ["class", "src", "alt", "title"])) : t.value.type === e(u).LktIcon ? (p(), k(be, {
        key: 3,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: J(B.value)
      }, {
        text: w(() => [
          r(M, {
            modelValue: t.value.props.text[e(i)],
            "onUpdate:modelValue": n[9] || (n[9] = (d) => t.value.props.text[e(i)] = d),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[10] || (n[10] = (d) => A(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 8, ["icon", "class"])) : t.value.type === e(u).LktHeader ? (p(), k(te, b(c({ key: 4 }, {
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: B.value
      })), {
        text: w(() => [
          r(M, {
            modelValue: t.value.props.text[e(i)],
            "onUpdate:modelValue": n[11] || (n[11] = (d) => t.value.props.text[e(i)] = d),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[12] || (n[12] = (d) => A(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 16)) : t.value.type === e(u).LktButton ? (p(), k(ue, {
        key: 5,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: J(B.value)
      }, {
        text: w(() => [
          r(M, {
            modelValue: t.value.props.text[e(i)],
            "onUpdate:modelValue": n[13] || (n[13] = (d) => t.value.props.text[e(i)] = d),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[14] || (n[14] = (d) => A(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 8, ["icon", "class"])) : t.value.type === e(u).LktAnchor ? (p(), k(Y, {
        key: 6,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: J(B.value)
      }, {
        text: w(() => [
          r(M, {
            modelValue: t.value.props.text[e(i)],
            "onUpdate:modelValue": n[15] || (n[15] = (d) => t.value.props.text[e(i)] = d),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[16] || (n[16] = (d) => A(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 8, ["icon", "class"])) : t.value.type === e(u).LktTextBanner ? (p(), k(Ce, {
        key: 7,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: J(B.value),
        opacity: t.value.props.opacity,
        art: t.value.props.art,
        media: t.value.props.media,
        type: t.value.props.type
      }, Re({
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        default: w(() => [
          r(M, {
            modelValue: t.value.props.text[e(i)],
            "onUpdate:modelValue": n[21] || (n[21] = (d) => t.value.props.text[e(i)] = d),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[22] || (n[22] = (d) => A(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        (de = t.value.config) != null && de.hasHeader ? {
          name: "header",
          fn: w(() => [
            r(M, {
              modelValue: t.value.props.header[e(i)],
              "onUpdate:modelValue": n[17] || (n[17] = (d) => t.value.props.header[e(i)] = d),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[18] || (n[18] = (d) => A(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        (ae = t.value.config) != null && ae.hasSubHeader ? {
          name: "subHeader",
          fn: w(() => [
            r(M, {
              modelValue: t.value.props.subHeader[e(i)],
              "onUpdate:modelValue": n[19] || (n[19] = (d) => t.value.props.subHeader[e(i)] = d),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[20] || (n[20] = (d) => A(d, "subHeader"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : t.value.type === e(u).LktIcons ? (p(), z("section", kl, [
        (ie = t.value.config) != null && ie.hasHeader ? (p(), k(te, { key: 0 }, {
          text: w(() => [
            r(M, {
              modelValue: t.value.props.header[e(i)],
              "onUpdate:modelValue": n[23] || (n[23] = (d) => t.value.props.header[e(i)] = d),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[24] || (n[24] = (d) => A(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        })) : T("", !0),
        r(M, {
          modelValue: t.value.props.text[e(i)],
          "onUpdate:modelValue": n[25] || (n[25] = (d) => t.value.props.text[e(i)] = d),
          disabled: l.disabled || l.parentType === e(S).Page,
          onInput: n[26] || (n[26] = (d) => A(d, "text"))
        }, null, 8, ["modelValue", "disabled"]),
        r(ke, c({
          modelValue: t.value.subElements,
          "onUpdate:modelValue": n[27] || (n[27] = (d) => t.value.subElements = d)
        }, {
          layoutSelector: e(Te)(t.value),
          isChild: !0,
          isSubElement: !0,
          lang: e(i),
          parent: t.value,
          isPreview: l.isPreview,
          modalCrudConfig: l.modalCrudConfig,
          fileBrowserConfig: l.fileBrowserConfig,
          disabled: l.disabled,
          editing: l.editing,
          parentType: e(S).Element,
          defaultAppearance: t.value.props.class,
          events: {
            onSubElementUpdate: E
          }
        }), {
          "web-element-actions": w(() => [
            r(K, b(V({
              webElement: t.value,
              appendingItems: C.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: E
            })), null, 16)
          ]),
          _: 1
        }, 16, ["modelValue"])
      ])) : t.value.type === e(u).LktLayout ? (p(), k(ke, {
        key: 9,
        modelValue: t.value.children,
        "onUpdate:modelValue": n[28] || (n[28] = (d) => t.value.children = d),
        class: J(B.value),
        "layout-selector": e(Te)(t.value),
        "is-child": "",
        lang: e(i),
        "is-preview": l.isPreview,
        parent: t.value,
        "parent-type": e(S).Element,
        "modal-crud-config": l.modalCrudConfig,
        "file-browser-config": l.fileBrowserConfig,
        disabled: l.disabled,
        editing: l.editing
      }, {
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 8, ["modelValue", "class", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : t.value.type.startsWith("custom:") ? (p(), k(yl, {
        key: 10,
        settings: e(Ae).getCustomWebElementSettings(t.value.type)
      }, {
        "web-element-actions": w(() => [
          r(K, b(V({
            webElement: t.value,
            appendingItems: C.value,
            canRenderActions: l.canRenderActions,
            parent: l.parent,
            parentType: l.parentType,
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            defaultAppearance: l.defaultAppearance,
            isSubElement: l.isSubElement,
            onUpdate: E
          })), null, 16)
        ]),
        _: 1
      }, 8, ["settings"])) : T("", !0);
    };
  }
}), bl = { class: "lkt-web-elements" }, Cl = {
  key: 0,
  class: "like-lkt-field-label"
}, ke = /* @__PURE__ */ X({
  __name: "LktWebElements",
  props: {
    modelValue: {},
    parent: {},
    parentType: { default: S.Element },
    layoutSelector: { default: "" },
    defaultAppearance: {},
    lang: {},
    isChild: { type: Boolean, default: !1 },
    isPreview: { type: Boolean, default: !1 },
    isSubElement: { type: Boolean },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    disabled: { type: Boolean, default: !1 },
    editing: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    "crud-update"
  ],
  setup(m, { emit: a }) {
    const y = a, o = je(), t = m, C = W(t.modelValue), A = W(t.editing), i = W(!1);
    ee(C, (L) => {
      y("update:modelValue", L);
    }, { deep: !0 });
    const H = () => {
      if (t.isSubElement) {
        i.value = !0, We(() => {
          i.value = !1, y("crud-update");
        });
        return;
      }
      const L = t.parentType === S.Page ? "r-web-page-children" : "r-web-element-children";
      Ke(L, { id: t.parent.id }).then((B) => {
        C.value = B.data.map((E) => new le(E)), y("crud-update");
      });
    }, x = j(() => {
      let L = [pe.Update, pe.Sort];
      t.isChild || L.push(pe.Create), t.parentType === S.Page && L.push(pe.SwitchEditMode);
      let B = t.isPreview ? me.Table : me.Item;
      B = me.Item, A.value && (B = me.Table);
      let E = "lkt-elements-table--default-grid";
      return t.isChild && (E = t.layoutSelector), {
        type: B,
        perms: L,
        itemsContainerClass: E,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (l) => {
          if (!l.layout || t.isPreview) return "";
          let n = [];
          return l.layout.columns && l.layout.columns.length > 0 && n.push(l.layout.columns.join(" ")), n.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: t.isPreview || A.value,
          isDisabled: !1,
          canRender: !0,
          isValid: !0
        },
        createButton: t.isChild ? !1 : {
          text: "Add element",
          icon: "lkt-icn-more",
          modal: "lkt-web-element-select",
          modalData: {
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            parent: t.parent,
            parentType: t.parentType,
            onUpdate: H
          }
        },
        columns: [
          {
            key: "keyMoment",
            label: "",
            isForRowKey: !0
          }
        ]
      };
    }), D = () => {
      var L;
      typeof ((L = t.events) == null ? void 0 : L.onSubElementUpdate) == "function" && t.events.onSubElementUpdate();
    };
    return (L, B) => {
      const E = R("lkt-table");
      return p(), z("div", bl, [
        L.parentType === e(S).Page ? (p(), z("span", Cl, "Web Elements")) : T("", !0),
        r(E, c({
          class: "lkt-elements-table",
          modelValue: C.value,
          "onUpdate:modelValue": B[0] || (B[0] = (l) => C.value = l)
        }, x.value, {
          "edit-mode": A.value,
          "onUpdate:editMode": B[1] || (B[1] = (l) => A.value = l),
          "skip-table-items-container": ""
        }), {
          item: w(({ _: l, index: n }) => [
            i.value ? T("", !0) : (p(), k(Be, c({
              key: 0,
              modelValue: C.value[n],
              "onUpdate:modelValue": (G) => C.value[n] = G
            }, {
              index: n,
              lang: L.lang,
              isPreview: L.isPreview,
              isSubElement: L.isSubElement,
              parent: L.parent,
              parentType: L.parentType,
              fileBrowserConfig: L.fileBrowserConfig,
              modalCrudConfig: L.modalCrudConfig,
              editing: A.value,
              defaultAppearance: L.defaultAppearance,
              canRenderActions: !A.value,
              disabled: L.disabled || !A.value,
              events: {
                onUpdate: D
              }
            }, { onCrudUpdate: H }), null, 16, ["modelValue", "onUpdate:modelValue"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"]),
        e(o)["web-element-actions"] ? xe(L.$slots, "web-element-actions", { key: 1 }) : T("", !0)
      ]);
    };
  }
}), wl = { class: "lkt-web-page" }, Tl = /* @__PURE__ */ X({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(m) {
    const a = m, y = W(new ye(a.modelValue)), o = W(null), t = W(!1), C = () => {
      o.value.turnStoredDataIntoOriginal();
    }, A = j(() => [
      { value: "draft", label: "Draft" },
      { value: "public", label: "Public" },
      { value: "scheduled", label: "Scheduled" }
    ]);
    ee(() => y.value.name, () => {
      y.value.updateSlug();
    });
    const i = j(() => ({
      items: [
        q.mkFormItemConfig({
          container: {
            tag: "lkt-accordion",
            props: {
              type: F.Always,
              title: "Main data",
              toggleMode: Le.Height
            }
          },
          uiConfig: {
            formClass: "lkt-grid-1 lkt-grid-3--from-768"
          },
          items: [
            q.mkFieldItemConfig("name", {
              type: U.Text,
              label: "Name",
              mandatory: !0,
              canUndo: !0,
              validation: {
                trigger: fe.Blur
              }
            }),
            q.mkFieldItemConfig("status", {
              type: U.Select,
              label: "Status",
              mandatory: !0,
              canUndo: !0,
              options: A.value,
              validation: {
                trigger: fe.Blur
              }
            }),
            q.mkFieldItemConfig("scheduledDate", {
              type: U.DateTime,
              label: "Scheduled date",
              mandatory: y.value.status === Fe.Scheduled,
              canUndo: !0,
              validation: {
                trigger: fe.Blur
              }
            }, {}, { canRender: y.value.status === Fe.Scheduled })
          ]
        }),
        q.mkFormItemConfig({
          container: {
            tag: "lkt-accordion",
            props: {
              type: F.Auto,
              title: "SEO",
              toggleMode: Le.Height
            }
          },
          uiConfig: {
            formClass: "lkt-grid-1 lkt-grid-3--from-768"
          },
          items: [
            q.mkFieldItemConfig("slug", {
              type: U.Text,
              label: "Slug",
              mandatory: !0,
              readMode: !0,
              validation: {
                trigger: fe.Blur
              }
            }),
            q.mkFieldItemConfig("keywords", {
              type: U.Select,
              label: "Keywords",
              multiple: !0,
              canUndo: !0,
              canTag: !0
            })
          ]
        }),
        q.mkSlotItemConfig("web-elements", {
          canRender: y.value.id > 0
        })
      ]
    })), H = j(() => {
      var L, B, E;
      let x = !1, D = !1;
      return x = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(L = a.crudConfig.createButton) == null ? void 0 : L.resourceData,
          ...y.value
        }
      }, D = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(B = a.crudConfig.updateButton) == null ? void 0 : B.resourceData,
          ...y.value
        }
      }, {
        ...a.crudConfig,
        createButton: x,
        updateButton: D,
        form: i.value,
        dropButton: {
          ...a.crudConfig.dropButton,
          resourceData: {
            ...(E = a.crudConfig.dropButton) == null ? void 0 : E.resourceData,
            ...y.value
          }
        }
      };
    });
    return (x, D) => {
      const L = R("lkt-item-crud");
      return p(), z("section", wl, [
        r(L, c({
          ref_key: "itemCrudRef",
          ref: o,
          modelValue: y.value,
          "onUpdate:modelValue": D[1] || (D[1] = (B) => y.value = B),
          editing: t.value,
          "onUpdate:editing": D[2] || (D[2] = (B) => t.value = B)
        }, H.value, {
          title: y.value.name === "" ? "Page name" : y.value.name
        }), {
          "web-elements": w(() => [
            y.value.id > 0 ? (p(), k(ke, {
              key: 0,
              modelValue: y.value.webElements,
              "onUpdate:modelValue": D[0] || (D[0] = (B) => y.value.webElements = B),
              lang: e(Ie)(),
              "modal-crud-config": x.modalCrudConfig,
              "file-browser-config": x.fileBrowserConfig,
              parent: y.value,
              "parent-type": e(S).Page,
              "is-preview": !1,
              disabled: "",
              onCrudUpdate: C
            }, null, 8, ["modelValue", "lang", "modal-crud-config", "file-browser-config", "parent", "parent-type"])) : T("", !0)
          ]),
          _: 1
        }, 16, ["modelValue", "editing", "title"])
      ]);
    };
  }
}), Vl = { class: "lkt-grid-1" }, Ll = { class: "lkt-grid-3" }, Bl = { class: "lkt-grid-3" }, Al = { class: "lkt-grid-3" }, Il = { class: "lkt-grid-3" }, Ul = { class: "lkt-grid-3" }, Sl = /* @__PURE__ */ X({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    parent: {},
    parentType: { default: S.Element },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    onUpdate: {}
  },
  setup(m) {
    const a = m, y = W(a.parent), o = (C) => {
      ve("lkt-web-element-config", "_", {
        element: le.createByType(C),
        parent: y.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        qe(a.modalName, a.modalKey);
      }, 200);
    }, t = j(() => Ae.getElements());
    return (C, A) => {
      const i = R("lkt-button"), H = R("lkt-accordion"), x = R("lkt-modal");
      return p(), k(x, c({ id: "lkt-add-element-modal" }, {
        modalName: C.modalName,
        modalKey: C.modalKey,
        zIndex: C.zIndex,
        title: "LktBox Config"
      }), {
        default: w(() => [
          h("div", Vl, [
            r(H, b(V({
              type: e(F).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: w(() => [
                h("div", Ll, [
                  r(i, b(V({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        o(e(u).LktText);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        o(e(u).LktHeader);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        o(e(u).LktImage);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        o(e(u).LktIcon);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        o(e(u).LktTextBox);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-banner",
                    text: "LktTextBanner",
                    events: {
                      click: () => {
                        o(e(u).LktTextBanner);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            r(H, b(V({
              type: e(F).Auto,
              title: "Collection elements"
            })), {
              default: w(() => [
                h("div", Bl, [
                  r(i, b(V({
                    icon: "lkt-icn-icon",
                    text: "LktIcons",
                    events: {
                      click: () => {
                        o(e(u).LktIcons);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            r(H, b(V({
              type: e(F).Auto,
              title: "Containers"
            })), {
              default: w(() => [
                h("div", Al, [
                  r(i, b(V({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-columns",
                    text: "LktLayout",
                    events: {
                      click: () => {
                        o(e(u).LktLayout);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            r(H, b(V({
              type: e(F).Auto,
              title: "Actions"
            })), {
              default: w(() => [
                h("div", Il, [
                  r(i, b(V({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        o(e(u).LktAnchor);
                      }
                    }
                  })), null, 16),
                  r(i, b(V({
                    icon: "lkt-icn-button",
                    text: "LktButton",
                    events: {
                      click: () => {
                        o(e(u).LktButton);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            r(H, b(V({
              type: e(F).Auto,
              title: "Custom"
            })), {
              default: w(() => [
                h("div", Ul, [
                  (p(!0), z(ge, null, Ve(t.value, (D) => (p(), k(i, c({ ref_for: !0 }, {
                    icon: D.icon,
                    text: D.label ?? D.id,
                    events: {
                      click: () => {
                        o(`custom:${D.id}`);
                      }
                    }
                  }), null, 16))), 256))
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
}), El = () => [
  {
    value: F.Auto,
    label: "Auto"
  },
  {
    value: F.Always,
    label: "Always"
  },
  {
    value: F.Lazy,
    label: "Lazy"
  },
  {
    value: F.Ever,
    label: "Ever"
  }
], Pl = () => [
  {
    value: He.Static,
    label: "Static"
  },
  {
    value: He.Parallax,
    label: "Parallax"
  }
], Dl = () => [
  {
    value: $.Grid,
    label: "Grid"
  },
  {
    value: $.FlexRow,
    label: "Flex Row"
  },
  {
    value: $.FlexRows,
    label: "Flex Rows"
  },
  {
    value: $.FlexColumn,
    label: "Flex Column"
  }
], hl = () => {
  let m = {
    default: {
      css: "{n}",
      label: "Default: {n}",
      columns: ["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    from768: {
      css: "{n}--from-768",
      label: "From 768px: {n}",
      columns: ["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }, a = [];
  for (let y in m) {
    let o = m[y];
    if (!(!o.columns || !Array.isArray(o.columns) || o.columns.length === 0))
      for (let t in o.columns) {
        let C = o.columns[t].toString();
        a.push({
          value: o.css.replace("{n}", C),
          label: o.label.replace("{n}", C)
        });
      }
  }
  return a;
}, Rl = [
  "lkt-icn-upload",
  "lkt-icn-download",
  "lkt-icn-angle-top",
  "lkt-icn-angle-right",
  "lkt-icn-angle-bottom",
  "lkt-icn-angle-left",
  "lkt-icn-angle-double-top",
  "lkt-icn-angle-double-right",
  "lkt-icn-angle-double-bottom",
  "lkt-icn-angle-double-left"
], Fl = {
  key: 1,
  class: "lkt-flex-row"
}, Hl = { class: "lkt-flex-col-9 lkt-grid-1" }, Ol = { class: "lkt-flex-col-3" }, $l = { class: "lkt-web-element-config-scroller lkt-grid-1" }, jl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, xl = { class: "lkt-grid-1" }, Ml = { class: "lkt-grid-1" }, Wl = { class: "lkt-grid-1" }, Nl = { class: "lkt-grid-1" }, Kl = { class: "lkt-grid-1" }, zl = /* @__PURE__ */ X({
  __name: "LktWebElementConfigModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    element: {},
    parent: {},
    parentType: {},
    afterElement: {},
    beforeElement: {},
    onUpdate: {},
    defaultAppearance: {},
    isSubElement: { type: Boolean },
    beforeClose: {}
  },
  setup(m) {
    var Ee, Pe, De;
    const a = m, y = W(parseInt(a.modalKey)), o = W(new le(a.element)), t = W(null), C = W(!1);
    ee(() => a.modalKey, (v) => {
      y.value = parseInt(v);
    });
    const A = () => {
      let v = o.value.getClone();
      ve("lkt-web-element-config", "_", {
        element: v,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: o.value.id
      });
    }, i = () => {
      let v = o.value.getClone();
      ve("lkt-web-element-config", "_", {
        element: v,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: o.value.id
      });
    }, H = o.value.getCustomSettings(), x = ml(), D = Ie(), L = !H || ((Ee = H.options) == null ? void 0 : Ee.textEditor) === !0, B = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktTextBanner,
      u.LktIcons
    ].includes(o.value.type), E = [
      u.LktTextBanner
    ].includes(o.value.type), l = [
      u.LktTextBanner
    ].includes(o.value.type), n = [
      u.LktTextBanner
    ].includes(o.value.type), G = [
      u.LktText
    ].includes(o.value.type), be = [
      u.LktLayout
    ].includes(o.value.type), te = [
      u.LktTextBanner
    ].includes(o.value.type), ue = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktIcon,
      u.LktButton,
      u.LktAnchor
    ].includes(o.value.type), Y = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout, u.LktIcons].includes(o.value.type), Ce = [u.LktImage].includes(o.value.type), re = [u.LktLayoutAccordion, u.LktTextAccordion].includes(o.value.type), de = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(o.value.type), ae = [$.FlexRow, $.FlexRows].includes((De = (Pe = a.parent) == null ? void 0 : Pe.layout) == null ? void 0 : De.type), ie = El(), d = Pl(), Qe = Dl(), Xe = hl(), Ye = [
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
    ], Ze = [
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
      },
      {
        value: "lkt-align-items-stretch",
        label: "Default: Stretch"
      }
    ], _e = [
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
    ], se = (v, s) => {
      if (v.length > 0) {
        let N = String(s.value), O = "";
        if (N.includes("--from") && (O = "--" + N.split("--")[1]), N.includes("--to") && (O = "--" + N.split("--")[1]), O !== "") {
          let I = v.find((Z) => String(Z).includes(O));
          if (I)
            return I === s.value;
        }
        let P = v.find((I) => !String(I).includes("--"));
        if (P)
          return P === N || N.includes("--");
      }
      return !0;
    }, el = (v) => {
      var s;
      return se(
        ((s = o.value.layout) == null ? void 0 : s.amountOfItems) ?? [],
        v
      );
    }, ll = (v) => {
      var s;
      return se(
        ((s = o.value.layout) == null ? void 0 : s.alignItems) ?? [],
        v
      );
    }, tl = (v) => {
      var s;
      return se(
        ((s = o.value.layout) == null ? void 0 : s.justifyContent) ?? [],
        v
      );
    }, al = (v) => {
      var s;
      return se(
        ((s = o.value.layout) == null ? void 0 : s.columns) ?? [],
        v
      );
    }, ol = () => {
      o.value.addSubElement();
    }, Ue = j(() => {
      let v = Ae.getCustomAppearance(o.value.type);
      if (!(!v || typeof v > "u"))
        return Object.keys(v).length > 0 ? dl({ options: v.options }, il.defaultFieldElementCustomClassField) : void 0;
    }), Se = j(() => fl(cl(o.value.type)) + " Config"), we = (v, s) => {
      s || (s = o.value.props), s.alt = v[0].nameData, s.title = v[0].nameData;
    };
    ee(() => o.value.config.amountOfCallToActions, (v) => {
      let s = o.value.config.callToActions.length;
      v > s ? o.value.config.callToActions.push(sl()) : o.value.config.callToActions.splice(v, 1);
    }), rl(() => {
      !o.value.id && o.value.type === u.LktLayout && (C.value = !0, We(() => {
        var v, s;
        Ke((v = a.modalCrudConfig.createButton) == null ? void 0 : v.resource, {
          ...(s = a.modalCrudConfig.createButton) == null ? void 0 : s.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((N) => {
          o.value.id = N.data.id, qe(a.modalName, a.modalKey), setTimeout(() => {
            ve(a.modalName, N.data.id, {
              element: o.value,
              parent: a.parent,
              parentType: a.parentType,
              fileBrowserConfig: a.fileBrowserConfig,
              modalCrudConfig: a.modalCrudConfig,
              onUpdate: a.onUpdate
            });
          }, 200);
        });
      }));
    });
    const nl = j(() => a.isSubElement ? [] : ["update", "drop", "delete"]), oe = () => {
      typeof a.onUpdate == "function" && a.onUpdate();
    }, ul = j(() => {
      var P, I, Z, g;
      let v = !1, s = !1;
      !(!o.value.id && o.value.type === u.LktLayout) && !a.isSubElement && (v = {
        ...a.modalCrudConfig.createButton,
        resourceData: {
          ...(I = (P = a.modalCrudConfig) == null ? void 0 : P.createButton) == null ? void 0 : I.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        },
        events: {
          click: oe
        }
      }, s = {
        ...a.modalCrudConfig.updateButton,
        resourceData: {
          ...(Z = a.modalCrudConfig.updateButton) == null ? void 0 : Z.resourceData,
          ...o.value
        },
        events: {
          click: oe
        }
      });
      let O = a.isSubElement ? oe : void 0;
      return {
        mode: y.value > 0 ? Oe.Update : Oe.Create,
        view: pl.Modal,
        editing: !0,
        perms: nl.value,
        title: Se.value,
        modalConfig: {
          modalName: a.modalName,
          modalKey: a.modalKey,
          zIndex: a.zIndex,
          title: Se.value,
          beforeClose: O
        },
        readData: {
          id: y.value
        },
        ...a.modalCrudConfig,
        beforeClose: O,
        createButton: v,
        updateButton: s,
        dropButton: a.isSubElement ? !1 : {
          ...a.modalCrudConfig.dropButton,
          resourceData: {
            ...(g = a.modalCrudConfig.dropButton) == null ? void 0 : g.resourceData,
            ...o.value
          },
          events: {
            click: oe
          }
        },
        enabledSaveWithoutChanges: !0
      };
    });
    return (v, s) => {
      const N = R("lkt-loader"), O = R("lkt-accordion"), P = R("lkt-button"), I = R("lkt-field"), Z = R("lkt-item-crud");
      return p(), k(Z, c({
        ref_key: "itemCrudRef",
        ref: t,
        class: "lkt-web-element-config-modal",
        modelValue: o.value,
        "onUpdate:modelValue": s[14] || (s[14] = (g) => o.value = g)
      }, ul.value), {
        item: w(({ item: g }) => [
          C.value ? (p(), k(N, { key: 0 })) : (p(), z("div", Fl, [
            h("div", Hl, [
              r(Be, c({
                modelValue: o.value,
                "onUpdate:modelValue": s[0] || (s[0] = (f) => o.value = f)
              }, {
                isPreview: !0,
                canRenderActions: !1,
                modalCrudConfig: v.modalCrudConfig,
                parent: o.value,
                parentType: e(S).Element,
                defaultAppearance: v.defaultAppearance
              }, { onCrudUpdate: v.onUpdate }), null, 16, ["modelValue", "onCrudUpdate"]),
              (p(!0), z(ge, null, Ve(e(x), (f) => (p(), z(ge, null, [
                f !== e(D) ? (p(), k(O, c({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(F).Auto,
                  title: f
                }), {
                  default: w(() => [
                    r(Be, c({
                      modelValue: o.value,
                      "onUpdate:modelValue": s[1] || (s[1] = (ne) => o.value = ne)
                    }, { ref_for: !0 }, {
                      lang: f,
                      isPreview: !0,
                      canRenderActions: !1,
                      modalCrudConfig: v.modalCrudConfig,
                      parent: o.value,
                      parentType: e(S).Element,
                      defaultAppearance: v.defaultAppearance
                    }), null, 16, ["modelValue"])
                  ]),
                  _: 2
                }, 1040)) : T("", !0)
              ], 64))), 256))
            ]),
            h("div", Ol, [
              h("div", $l, [
                e(de) ? (p(), k(P, b(c({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: v.fileBrowserConfig,
                    modalCrudConfig: v.modalCrudConfig,
                    parent: o.value,
                    parentType: e(S).Element,
                    onUpdate: oe
                  }
                })), null, 16)) : T("", !0),
                g.type === e(u).LktIcons ? (p(), k(P, b(c({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: ol
                  }
                })), null, 16)) : T("", !0),
                e(L) ? (p(), k(O, b(c({ key: 2 }, {
                  type: e(F).Always,
                  title: "Text editor"
                })), {
                  default: w(() => [
                    h("div", jl, [
                      r(P, c({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: s[2] || (s[2] = () => e(Q)("bold"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: s[3] || (s[3] = () => e(Q)("italic"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: s[4] || (s[4] = () => e(Q)("underline"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: s[5] || (s[5] = () => e(Q)("strikeThrough"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: s[6] || (s[6] = () => e(Q)("superscript"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: s[7] || (s[7] = () => e(Q)("subscript"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: s[8] || (s[8] = () => e(ce)("left"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: s[9] || (s[9] = () => e(ce)("center"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: s[10] || (s[10] = () => e(ce)("right"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-align-justify"
                      }, {
                        onClick: s[11] || (s[11] = () => e(ce)("justify"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-list-bullet"
                      }, {
                        onClick: s[12] || (s[12] = () => e(Q)("insertUnorderedList"))
                      }), null, 16),
                      r(P, c({
                        icon: "lkt-icn-list-numbered"
                      }, {
                        onClick: s[13] || (s[13] = () => e(Q)("insertOrderedList"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : T("", !0),
                !e(G) && !e(be) ? (p(), k(O, b(c({ key: 3 }, {
                  type: e(F).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(Le).Display
                })), {
                  default: w(() => [
                    h("div", xl, [
                      Ue.value ? (p(), k(I, c({ key: 0 }, {
                        type: e(U).Select,
                        ...Ue.value,
                        canClear: !0
                      }, {
                        modelValue: g.props.class,
                        "onUpdate:modelValue": (f) => g.props.class = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(B) ? (p(), k(I, c({ key: 1 }, {
                        type: e(U).Switch,
                        label: "Has header"
                      }, {
                        modelValue: g.config.hasHeader,
                        "onUpdate:modelValue": (f) => g.config.hasHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(E) ? (p(), k(I, c({ key: 2 }, {
                        type: e(U).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: g.config.hasSubHeader,
                        "onUpdate:modelValue": (f) => g.config.hasSubHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(ue) ? (p(), k(I, c({ key: 3 }, {
                        type: e(U).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: g.config.hasIcon,
                        "onUpdate:modelValue": (f) => g.config.hasIcon = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(ue) ? (p(), k(I, c({
                        key: 4,
                        modelValue: g.props.icon,
                        "onUpdate:modelValue": (f) => g.props.icon = f
                      }, {
                        type: e(U).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Rl)
                      }, {
                        disabled: !g.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : T("", !0),
                      e(Ce) ? (p(), k(I, c({ key: 5 }, {
                        type: e(U).Image,
                        label: "Image",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: g.props.src,
                        "onUpdate:modelValue": (f) => g.props.src = f,
                        onPickedFiles: we
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(n) ? (p(), k(I, c({ key: 6 }, {
                        type: e(U).Image,
                        label: "Media content",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: g.props.media.src,
                        "onUpdate:modelValue": (f) => g.props.media.src = f,
                        onPickedFiles: (f) => we(f, g.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : T("", !0),
                      e(n) ? (p(), k(I, c({ key: 7 }, {
                        type: e(U).Select,
                        label: "Type",
                        options: e(d)
                      }, {
                        modelValue: g.props.type,
                        "onUpdate:modelValue": (f) => g.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(l) ? (p(), k(I, c({ key: 8 }, {
                        type: e(U).Image,
                        label: "Background Image",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: g.props.art.src,
                        "onUpdate:modelValue": (f) => g.props.art.src = f,
                        onPickedFiles: (f) => we(f, g.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : T("", !0),
                      h("div", null, [
                        e(te) ? (p(), k(I, c({ key: 0 }, {
                          type: e(U).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: g.props.opacity,
                          "onUpdate:modelValue": (f) => g.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                        e(te) ? (p(), k(I, c({ key: 1 }, {
                          type: e(U).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: g.props.opacity,
                          "onUpdate:modelValue": (f) => g.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0)
                      ]),
                      e(n) ? (p(), k(I, c({ key: 9 }, {
                        type: e(U).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: g.config.amountOfCallToActions,
                        "onUpdate:modelValue": (f) => g.config.amountOfCallToActions = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : T("", !0),
                g.config.amountOfCallToActions > 0 ? (p(!0), z(ge, { key: 4 }, Ve(g.config.callToActions, (f) => (p(), k(O, c({ ref_for: !0 }, {
                  type: e(F).Auto,
                  title: "CTA #1"
                }), {
                  default: w(() => [
                    h("div", Ml, [
                      r(I, c({ ref_for: !0 }, {
                        type: e(U).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (ne) => f.config.hasIcon = ne
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      r(I, c({ ref_for: !0 }, {
                        type: e(U).Text,
                        label: "Icon"
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (ne) => f.props.icon = ne,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : T("", !0),
                e(re) ? (p(), k(O, b(c({ key: 5 }, {
                  type: e(F).Auto,
                  title: "Accordion Config"
                })), {
                  default: w(() => [
                    h("div", Wl, [
                      r(I, c({
                        type: e(U).Select,
                        label: "Type",
                        options: e(ie)
                      }, {
                        modelValue: g.props.type,
                        "onUpdate:modelValue": (f) => g.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : T("", !0),
                e(Y) || e(ae) ? (p(), k(O, b(c({ key: 6 }, {
                  type: e(F).Auto,
                  title: "Layout Config"
                })), {
                  default: w(() => [
                    h("div", Nl, [
                      e(Y) ? (p(), k(I, c({ key: 0 }, {
                        type: e(U).Select,
                        label: "Type",
                        options: e(Qe)
                      }, {
                        modelValue: g.layout.type,
                        "onUpdate:modelValue": (f) => g.layout.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(Y) && g.layout.type !== e($).FlexColumn ? (p(), k(I, c({ key: 1 }, {
                        type: e(U).Select,
                        label: g.layout.type === e($).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Xe),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: el
                        }
                      }, {
                        modelValue: g.layout.amountOfItems,
                        "onUpdate:modelValue": (f) => g.layout.amountOfItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(Y) ? (p(), k(I, c({ key: 2 }, {
                        type: e(U).Select,
                        label: "Align items",
                        options: Ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: ll
                        }
                      }, {
                        modelValue: g.layout.alignItems,
                        "onUpdate:modelValue": (f) => g.layout.alignItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(Y) ? (p(), k(I, c({ key: 3 }, {
                        type: e(U).Select,
                        label: "Justify content",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: tl
                        }
                      }, {
                        modelValue: g.layout.justifyContent,
                        "onUpdate:modelValue": (f) => g.layout.justifyContent = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0),
                      e(ae) ? (p(), k(I, c({ key: 4 }, {
                        type: e(U).Select,
                        label: "Columns Reserved",
                        options: Ye,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: al
                        }
                      }, {
                        modelValue: g.layout.columns,
                        "onUpdate:modelValue": (f) => g.layout.columns = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : T("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : T("", !0),
                r(P, b(V({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(Ne).Split
                })), {
                  split: w(({ doClose: f }) => [
                    h("div", Kl, [
                      r(P, b(V({
                        text: "Before",
                        events: {
                          click: A
                        }
                      })), null, 16),
                      r(P, b(V({
                        text: "After",
                        events: {
                          click: i
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)
              ])
            ])
          ]))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), Zl = () => {
  _({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (m) => new le(m)
  }), _({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new le(a))
  }), ze({
    url: "/web/element",
    name: "mk-web-element",
    params: {
      type: { default: void 0 },
      children: { default: void 0 },
      subElements: { default: void 0 },
      component: { default: void 0 },
      config: { default: void 0 },
      layout: { default: void 0 },
      props: { default: void 0 },
      parent: { default: void 0 },
      parentType: { default: void 0 },
      beforeElement: { default: void 0 },
      afterElement: { default: void 0 }
    },
    digToPerms: "perms",
    digToAutoReloadId: "item.id"
  }), Ge({
    url: "/web/element/{id}",
    name: "up-web-element",
    params: {
      id: { default: void 0 },
      children: { default: void 0 },
      subElements: { default: void 0 },
      component: { default: void 0 },
      config: { default: void 0 },
      layout: { default: void 0 },
      props: { default: void 0 }
    },
    digToPerms: "perms"
  }), Je({
    url: "/web/element/{id}",
    name: "rm-web-element",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, _l = () => {
  _({
    url: "/web/pages",
    name: "ls-web-pages",
    params: {},
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ye(a))
  }), _({
    url: "/web/pages/{type}",
    name: "ls-web-pages-type",
    params: { type: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ye(a))
  }), _({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (m) => new ye(m)
  }), _({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new le(a))
  }), ze({
    url: "/web/page",
    name: "mk-web-page",
    params: {
      name: { default: void 0 },
      type: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item",
    digToAutoReloadId: "id"
  }), Ge({
    url: "/web/page/{id}",
    name: "up-web-page",
    params: {
      id: { default: void 0 },
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  }), Je({
    url: "/web/page/{id}",
    name: "rm-web-page",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, et = {
  install: (m) => {
    m.component("lkt-web-page") === void 0 && (m.component("lkt-web-page", Tl), $e("lkt-web-element-select", Sl), $e("lkt-web-element-config", zl));
  }
};
export {
  et as default,
  Zl as setupWebElementsHttp,
  _l as setupWebPagesHttp
};
