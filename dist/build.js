import { defineComponent as Q, useSlots as $e, createElementBlock as K, openBlock as p, renderSlot as xe, createCommentVNode as V, setBlockTracking as he, createElementVNode as h, unref as e, createBlock as k, resolveDynamicComponent as Me, normalizeProps as C, mergeProps as y, resolveComponent as R, createVNode as r, guardReactiveProps as L, ref as W, watch as Y, computed as $, normalizeClass as G, withCtx as T, createSlots as Re, nextTick as We, Fragment as ge, renderList as Ve, onMounted as rl } from "vue";
import { WebElementLayoutType as j, ButtonType as Ne, WebElementType as u, WebParentType as E, WebElementController as Ae, TablePermission as pe, TableType as me, WebElement as le, WebPage as ye, FormInstance as J, AccordionToggleMode as Le, AccordionType as F, FieldAutoValidationTrigger as ce, FieldType as S, WebPageStatus as Fe, BannerType as He, ensureFieldConfig as dl, LktSettings as il, getDefaultLktButtonWebElement as sl, ItemCrudView as pl, ItemCrudMode as Oe, applyTextFormat as q, applyTextAlignment as fe } from "lkt-vue-kernel";
import { getCurrentLanguage as Ie, getAvailableLanguages as ml } from "lkt-i18n";
import { httpCall as Ke, createHTTPGetResource as ee, createHTTPPostResource as ze, createHTTPPutResource as Ge, createHTTPDeleteResource as Je } from "lkt-http-client";
import { openModal as ve, closeModal as qe, addModal as je } from "lkt-modal";
import { ucfirst as cl, kebabCaseToCamelCase as fl } from "lkt-string-tools";
const gl = { class: "lkt-text" }, M = /* @__PURE__ */ Q({
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
    const f = a, o = $e(), l = (w) => {
      f("input", w);
    };
    return (w, B) => (p(), K("div", gl, [
      B[0] || (he(-1, !0), (B[0] = h("div", {
        contenteditable: w.disabled ? "false" : "true",
        class: "lkt-element-editable-text",
        onInput: (s) => l(s),
        innerHTML: w.modelValue
      }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, he(1), B[0]),
      e(o)["web-element-actions"] ? xe(w.$slots, "web-element-actions", { key: 0 }) : V("", !0)
    ]));
  }
}), Te = (m, a = !1) => {
  if (!m.layout || a) return "";
  let f = [];
  m.layout.type === j.FlexRow && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? f.push("lkt-flex-row") : m.layout.type === j.FlexRows && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? f.push("lkt-flex-rows") : m.layout.type === j.FlexColumn && f.push("lkt-flex-column"), m.layout.amountOfItems && m.layout.amountOfItems.length > 0 && (m.layout.type === j.FlexRow ? f.push(m.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : m.layout.type === j.FlexRows ? f.push(m.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : f.push(m.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), m.layout.alignItems && m.layout.alignItems.length > 0 && f.push(m.layout.alignItems.join(" ")), m.layout.justifyContent && m.layout.justifyContent.length > 0 && f.push(m.layout.justifyContent.join(" ")), f.length > 0 && f.push("layout-mode");
  let o = f.join(" ");
  return m.layout.type === j.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
}, yl = /* @__PURE__ */ Q({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(m) {
    return (a, f) => a.settings.type === "component" ? (p(), k(Me(a.settings.component), C(y({ key: 0 }, a.settings.componentProps)), null, 16)) : V("", !0);
  }
}), vl = {
  key: 0,
  class: "lkt-element-actions"
}, N = /* @__PURE__ */ Q({
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
    return (a, f) => {
      const o = R("lkt-button");
      return !a.appendingItems && a.canRenderActions ? (p(), K("div", vl, [
        r(o, C(L({
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
      ])) : V("", !0);
    };
  }
}), kl = { key: 8 }, Be = /* @__PURE__ */ Q({
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
    defaultAppearance: {}
  },
  emits: [
    "update:modelValue",
    "crud-update"
  ],
  setup(m, { emit: a }) {
    const f = a, o = m, l = W(o.modelValue);
    Y(() => o.modelValue, (t, n) => {
      l.value = t;
    }), Y(l, (t, n) => {
      f("update:modelValue", t);
    });
    const w = W(!1), B = (t, n = "text") => {
      const Z = t.target.innerHTML.trim();
      Z !== l.value.props[n][s] && (l.value.props[n][s] = Z);
    }, s = o.lang ?? Ie(), H = $(() => [
      u.LktLayoutBox,
      u.LktTextBox,
      u.LktLayoutAccordion,
      u.LktTextAccordion
    ].includes(l.value.type)), x = $(() => [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktLayout
    ].includes(l.value.type)), b = $(() => {
      if ([
        u.LktLayoutBox,
        u.LktTextBox
      ].includes(l.value.type))
        return "lkt-box";
      if ([
        u.LktLayoutAccordion,
        u.LktTextAccordion
      ].includes(l.value.type))
        return "lkt-accordion";
    }), P = $(() => l.value.props.class ? l.value.props.class : o.defaultAppearance), I = $(() => `lkt-element is-${l.value.type} is-${l.value.id} ${P.value}`), U = () => {
      f("crud-update");
    };
    return (t, n) => {
      var ue, re, ae, de;
      const Z = R("lkt-image"), be = R("lkt-icon"), te = R("lkt-header"), ne = R("lkt-button"), X = R("lkt-anchor"), Ce = R("lkt-banner");
      return l.value.type === e(u).LktText ? (p(), k(M, {
        key: 0,
        class: G(I.value),
        modelValue: l.value.props.text[e(s)],
        "onUpdate:modelValue": n[0] || (n[0] = (d) => l.value.props.text[e(s)] = d),
        disabled: t.disabled || t.parentType === e(E).Page,
        onInput: n[1] || (n[1] = (d) => B(d))
      }, {
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["class", "modelValue", "disabled"])) : H.value ? (p(), k(Me(b.value), {
        key: 1,
        icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, Re({
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        default: T(() => [
          x.value ? (p(), k(ke, {
            key: 0,
            modelValue: l.value.children,
            "onUpdate:modelValue": n[4] || (n[4] = (d) => l.value.children = d),
            "layout-selector": e(Te)(l.value),
            "is-child": "",
            lang: e(s),
            "is-preview": t.isPreview,
            parent: l.value,
            "parent-type": e(E).Element,
            "modal-crud-config": t.modalCrudConfig,
            "file-browser-config": t.fileBrowserConfig,
            disabled: t.disabled,
            editing: t.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), k(M, {
            key: 1,
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[5] || (n[5] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[6] || (n[6] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"]))
        ]),
        _: 2
      }, [
        (ue = l.value.config) != null && ue.hasHeader ? {
          name: "header",
          fn: T(() => [
            r(M, {
              modelValue: l.value.props.header[e(s)],
              "onUpdate:modelValue": n[2] || (n[2] = (d) => l.value.props.header[e(s)] = d),
              disabled: t.disabled || t.parentType === e(E).Page,
              onInput: n[3] || (n[3] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "class"])) : l.value.type === e(u).LktImage ? (p(), k(Z, {
        key: 2,
        class: G(I.value),
        src: l.value.props.src,
        alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(s)] : "",
        title: typeof l.value.props.title == "object" ? l.value.props.title[e(s)] : ""
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[7] || (n[7] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[8] || (n[8] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(u).LktIcon ? (p(), k(be, {
        key: 3,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[9] || (n[9] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[10] || (n[10] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktHeader ? (p(), k(te, {
        key: 4,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[11] || (n[11] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[12] || (n[12] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktButton ? (p(), k(ne, {
        key: 5,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[13] || (n[13] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[14] || (n[14] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktAnchor ? (p(), k(X, {
        key: 6,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[15] || (n[15] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[16] || (n[16] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktTextBanner ? (p(), k(Ce, {
        key: 7,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value),
        opacity: l.value.props.opacity,
        art: l.value.props.art,
        media: l.value.props.media,
        type: l.value.props.type
      }, Re({
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        default: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[21] || (n[21] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[22] || (n[22] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        (re = l.value.config) != null && re.hasHeader ? {
          name: "header",
          fn: T(() => [
            r(M, {
              modelValue: l.value.props.header[e(s)],
              "onUpdate:modelValue": n[17] || (n[17] = (d) => l.value.props.header[e(s)] = d),
              disabled: t.disabled || t.parentType === e(E).Page,
              onInput: n[18] || (n[18] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        (ae = l.value.config) != null && ae.hasSubHeader ? {
          name: "subHeader",
          fn: T(() => [
            r(M, {
              modelValue: l.value.props.subHeader[e(s)],
              "onUpdate:modelValue": n[19] || (n[19] = (d) => l.value.props.subHeader[e(s)] = d),
              disabled: t.disabled || t.parentType === e(E).Page,
              onInput: n[20] || (n[20] = (d) => B(d, "subHeader"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(u).LktIcons ? (p(), K("section", kl, [
        (de = l.value.config) != null && de.hasHeader ? (p(), k(te, { key: 0 }, {
          text: T(() => [
            r(M, {
              modelValue: l.value.props.header[e(s)],
              "onUpdate:modelValue": n[23] || (n[23] = (d) => l.value.props.header[e(s)] = d),
              disabled: t.disabled || t.parentType === e(E).Page,
              onInput: n[24] || (n[24] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        })) : V("", !0),
        r(M, {
          modelValue: l.value.props.text[e(s)],
          "onUpdate:modelValue": n[25] || (n[25] = (d) => l.value.props.text[e(s)] = d),
          disabled: t.disabled || t.parentType === e(E).Page,
          onInput: n[26] || (n[26] = (d) => B(d, "text"))
        }, null, 8, ["modelValue", "disabled"]),
        r(ke, {
          modelValue: l.value.subElements,
          "onUpdate:modelValue": n[27] || (n[27] = (d) => l.value.subElements = d),
          "layout-selector": e(Te)(l.value),
          "is-child": "",
          lang: e(s),
          "is-preview": t.isPreview,
          parent: l.value,
          "parent-type": e(E).Element,
          "modal-crud-config": t.modalCrudConfig,
          "file-browser-config": t.fileBrowserConfig,
          disabled: t.disabled,
          editing: t.editing,
          "default-appearance": l.value.props.class,
          "is-sub-element": ""
        }, {
          "web-element-actions": T(() => [
            r(N, C(L({
              webElement: l.value,
              appendingItems: w.value,
              canRenderActions: t.canRenderActions,
              parent: t.parent,
              parentType: t.parentType,
              fileBrowserConfig: t.fileBrowserConfig,
              modalCrudConfig: t.modalCrudConfig,
              defaultAppearance: t.defaultAppearance,
              isSubElement: t.isSubElement,
              onUpdate: U
            })), null, 16)
          ]),
          _: 1
        }, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing", "default-appearance"])
      ])) : l.value.type === e(u).LktLayout ? (p(), k(ke, {
        key: 9,
        modelValue: l.value.children,
        "onUpdate:modelValue": n[28] || (n[28] = (d) => l.value.children = d),
        class: G(I.value),
        "layout-selector": e(Te)(l.value),
        "is-child": "",
        lang: e(s),
        "is-preview": t.isPreview,
        parent: l.value,
        "parent-type": e(E).Element,
        "modal-crud-config": t.modalCrudConfig,
        "file-browser-config": t.fileBrowserConfig,
        disabled: t.disabled,
        editing: t.editing
      }, {
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["modelValue", "class", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : l.value.type.startsWith("custom:") ? (p(), k(yl, {
        key: 10,
        settings: e(Ae).getCustomWebElementSettings(l.value.type)
      }, {
        "web-element-actions": T(() => [
          r(N, C(L({
            webElement: l.value,
            appendingItems: w.value,
            canRenderActions: t.canRenderActions,
            parent: t.parent,
            parentType: t.parentType,
            fileBrowserConfig: t.fileBrowserConfig,
            modalCrudConfig: t.modalCrudConfig,
            defaultAppearance: t.defaultAppearance,
            isSubElement: t.isSubElement,
            onUpdate: U
          })), null, 16)
        ]),
        _: 1
      }, 8, ["settings"])) : V("", !0);
    };
  }
}), bl = {
  key: 0,
  class: "like-lkt-field-label"
}, ke = /* @__PURE__ */ Q({
  __name: "LktWebElements",
  props: {
    modelValue: {},
    parent: {},
    parentType: { default: E.Element },
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
    const f = a, o = $e(), l = m, w = W(l.modelValue), B = W(l.editing), s = W(!1);
    Y(w, (b) => {
      f("update:modelValue", b);
    }, { deep: !0 }), Y(B, (b) => {
      console.log("editing", b);
    }, { deep: !0 });
    const H = () => {
      if (l.isSubElement) {
        s.value = !0, We(() => {
          s.value = !1, f("crud-update");
        });
        return;
      }
      const b = l.parentType === E.Page ? "r-web-page-children" : "r-web-element-children";
      Ke(b, { id: l.parent.id }).then((P) => {
        w.value = P.data.map((I) => new le(I)), f("crud-update");
      });
    }, x = $(() => {
      let b = [pe.Update, pe.Sort];
      l.isChild || b.push(pe.Create), l.parentType === E.Page && b.push(pe.SwitchEditMode);
      let P = l.isPreview ? me.Table : me.Item;
      P = me.Item, B.value && (P = me.Table);
      let I = "lkt-elements-table--default-grid";
      return l.isChild && (I = l.layoutSelector), {
        type: P,
        perms: b,
        itemsContainerClass: I,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (U) => {
          if (!U.layout || l.isPreview) return "";
          let t = [];
          return U.layout.columns && U.layout.columns.length > 0 && t.push(U.layout.columns.join(" ")), t.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: l.isPreview || B.value,
          isDisabled: !1,
          canRender: !0,
          isValid: !0
        },
        createButton: l.isChild ? !1 : {
          text: "Add element",
          icon: "lkt-icn-more",
          modal: "lkt-web-element-select",
          modalData: {
            fileBrowserConfig: l.fileBrowserConfig,
            modalCrudConfig: l.modalCrudConfig,
            parent: l.parent,
            parentType: l.parentType,
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
    });
    return (b, P) => {
      const I = R("lkt-table");
      return p(), K("div", null, [
        b.parentType === e(E).Page ? (p(), K("span", bl, "Web Elements")) : V("", !0),
        r(I, y({
          class: "lkt-elements-table",
          modelValue: w.value,
          "onUpdate:modelValue": P[0] || (P[0] = (U) => w.value = U)
        }, x.value, {
          "edit-mode": B.value,
          "onUpdate:editMode": P[1] || (P[1] = (U) => B.value = U),
          "skip-table-items-container": ""
        }), {
          item: T(({ _: U, index: t }) => [
            s.value ? V("", !0) : (p(), k(Be, {
              key: 0,
              modelValue: w.value[t],
              "onUpdate:modelValue": (n) => w.value[t] = n,
              index: t,
              lang: b.lang,
              "is-preview": b.isPreview,
              parent: b.parent,
              "parent-type": b.parentType,
              "file-browser-config": b.fileBrowserConfig,
              "modal-crud-config": b.modalCrudConfig,
              "can-render-actions": !B.value,
              disabled: b.disabled || !B.value,
              editing: B.value,
              "default-appearance": b.defaultAppearance,
              "is-sub-element": b.isSubElement,
              onCrudUpdate: H
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled", "editing", "default-appearance", "is-sub-element"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"]),
        e(o)["web-element-actions"] ? xe(b.$slots, "web-element-actions", { key: 1 }) : V("", !0)
      ]);
    };
  }
}), Cl = { class: "lkt-web-page" }, wl = /* @__PURE__ */ Q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(m) {
    const a = m, f = W(new ye(a.modelValue)), o = W(null), l = W(!1), w = () => {
      o.value.turnStoredDataIntoOriginal();
    }, B = $(() => [
      { value: "draft", label: "Draft" },
      { value: "public", label: "Public" },
      { value: "scheduled", label: "Scheduled" }
    ]);
    Y(() => f.value.name, () => {
      f.value.updateSlug();
    });
    const s = $(() => ({
      items: [
        J.mkFormItemConfig({
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
            J.mkFieldItemConfig("name", {
              type: S.Text,
              label: "Name",
              mandatory: !0,
              canUndo: !0,
              validation: {
                trigger: ce.Blur
              }
            }),
            J.mkFieldItemConfig("status", {
              type: S.Select,
              label: "Status",
              mandatory: !0,
              canUndo: !0,
              options: B.value,
              validation: {
                trigger: ce.Blur
              }
            }),
            J.mkFieldItemConfig("scheduledDate", {
              type: S.DateTime,
              label: "Scheduled date",
              mandatory: f.value.status === Fe.Scheduled,
              canUndo: !0,
              validation: {
                trigger: ce.Blur
              }
            }, {}, { canRender: f.value.status === Fe.Scheduled })
          ]
        }),
        J.mkFormItemConfig({
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
            J.mkFieldItemConfig("slug", {
              type: S.Text,
              label: "Slug",
              mandatory: !0,
              readMode: !0,
              validation: {
                trigger: ce.Blur
              }
            }),
            J.mkFieldItemConfig("keywords", {
              type: S.Select,
              label: "Keywords",
              multiple: !0,
              canUndo: !0,
              canTag: !0
            })
          ]
        }),
        J.mkSlotItemConfig("web-elements", {
          canRender: f.value.id > 0
        })
      ]
    })), H = $(() => {
      var P, I, U;
      let x = !1, b = !1;
      return x = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(P = a.crudConfig.createButton) == null ? void 0 : P.resourceData,
          ...f.value
        }
      }, b = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(I = a.crudConfig.updateButton) == null ? void 0 : I.resourceData,
          ...f.value
        }
      }, {
        ...a.crudConfig,
        createButton: x,
        updateButton: b,
        form: s.value,
        dropButton: {
          ...a.crudConfig.dropButton,
          resourceData: {
            ...(U = a.crudConfig.dropButton) == null ? void 0 : U.resourceData,
            ...f.value
          }
        }
      };
    });
    return (x, b) => {
      const P = R("lkt-item-crud");
      return p(), K("section", Cl, [
        r(P, y({
          ref_key: "itemCrudRef",
          ref: o,
          modelValue: f.value,
          "onUpdate:modelValue": b[1] || (b[1] = (I) => f.value = I),
          editing: l.value,
          "onUpdate:editing": b[2] || (b[2] = (I) => l.value = I)
        }, H.value, {
          title: f.value.name === "" ? "Page name" : f.value.name
        }), {
          "web-elements": T(() => [
            f.value.id > 0 ? (p(), k(ke, {
              key: 0,
              modelValue: f.value.webElements,
              "onUpdate:modelValue": b[0] || (b[0] = (I) => f.value.webElements = I),
              lang: e(Ie)(),
              "modal-crud-config": x.modalCrudConfig,
              "file-browser-config": x.fileBrowserConfig,
              parent: f.value,
              "parent-type": e(E).Page,
              "is-preview": !1,
              disabled: "",
              onCrudUpdate: w
            }, null, 8, ["modelValue", "lang", "modal-crud-config", "file-browser-config", "parent", "parent-type"])) : V("", !0)
          ]),
          _: 1
        }, 16, ["modelValue", "editing", "title"])
      ]);
    };
  }
}), Tl = { class: "lkt-grid-1" }, Vl = { class: "lkt-grid-3" }, Ll = { class: "lkt-grid-3" }, Bl = { class: "lkt-grid-3" }, Al = { class: "lkt-grid-3" }, Il = { class: "lkt-grid-3" }, Ul = /* @__PURE__ */ Q({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    parent: {},
    parentType: { default: E.Element },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    onUpdate: {}
  },
  setup(m) {
    const a = m, f = W(a.parent), o = (w) => {
      ve("lkt-web-element-config", "_", {
        element: le.createByType(w),
        parent: f.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        qe(a.modalName, a.modalKey);
      }, 200);
    }, l = $(() => Ae.getElements());
    return (w, B) => {
      const s = R("lkt-button"), H = R("lkt-accordion"), x = R("lkt-modal");
      return p(), k(x, y({ id: "lkt-add-element-modal" }, {
        modalName: w.modalName,
        modalKey: w.modalKey,
        zIndex: w.zIndex,
        title: "LktBox Config"
      }), {
        default: T(() => [
          h("div", Tl, [
            r(H, C(L({
              type: e(F).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: T(() => [
                h("div", Vl, [
                  r(s, C(L({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        o(e(u).LktText);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        o(e(u).LktHeader);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        o(e(u).LktImage);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        o(e(u).LktIcon);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        o(e(u).LktTextBox);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
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
            r(H, C(L({
              type: e(F).Auto,
              title: "Collection elements"
            })), {
              default: T(() => [
                h("div", Ll, [
                  r(s, C(L({
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
            r(H, C(L({
              type: e(F).Auto,
              title: "Containers"
            })), {
              default: T(() => [
                h("div", Bl, [
                  r(s, C(L({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
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
            r(H, C(L({
              type: e(F).Auto,
              title: "Actions"
            })), {
              default: T(() => [
                h("div", Al, [
                  r(s, C(L({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        o(e(u).LktAnchor);
                      }
                    }
                  })), null, 16),
                  r(s, C(L({
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
            r(H, C(L({
              type: e(F).Auto,
              title: "Custom"
            })), {
              default: T(() => [
                h("div", Il, [
                  (p(!0), K(ge, null, Ve(l.value, (b) => (p(), k(s, y({ ref_for: !0 }, {
                    icon: b.icon,
                    text: b.label ?? b.id,
                    events: {
                      click: () => {
                        o(`custom:${b.id}`);
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
}), Sl = () => [
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
], El = () => [
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
    value: j.Grid,
    label: "Grid"
  },
  {
    value: j.FlexRow,
    label: "Flex Row"
  },
  {
    value: j.FlexRows,
    label: "Flex Rows"
  },
  {
    value: j.FlexColumn,
    label: "Flex Column"
  }
], Pl = () => {
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
  for (let f in m) {
    let o = m[f];
    if (!(!o.columns || !Array.isArray(o.columns) || o.columns.length === 0))
      for (let l in o.columns) {
        let w = o.columns[l].toString();
        a.push({
          value: o.css.replace("{n}", w),
          label: o.label.replace("{n}", w)
        });
      }
  }
  return a;
}, hl = [
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
], Rl = {
  key: 1,
  class: "lkt-flex-row"
}, Fl = { class: "lkt-flex-col-9 lkt-grid-1" }, Hl = { class: "lkt-flex-col-3" }, Ol = { class: "lkt-web-element-config-scroller lkt-grid-1" }, jl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, $l = { class: "lkt-grid-1" }, xl = { class: "lkt-grid-1" }, Ml = { class: "lkt-grid-1" }, Wl = { class: "lkt-grid-1" }, Nl = { class: "lkt-grid-1" }, Kl = /* @__PURE__ */ Q({
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
    var Ee, De, Pe;
    const a = m, f = W(parseInt(a.modalKey)), o = W(new le(a.element)), l = W(null), w = W(!1);
    Y(() => a.modalKey, (v) => {
      f.value = parseInt(v);
    });
    const B = () => {
      let v = o.value.getClone();
      ve("lkt-web-element-config", "_", {
        element: v,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: o.value.id
      });
    }, s = () => {
      let v = o.value.getClone();
      ve("lkt-web-element-config", "_", {
        element: v,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: o.value.id
      });
    }, H = o.value.getCustomSettings(), x = ml(), b = Ie(), P = !H || ((Ee = H.options) == null ? void 0 : Ee.textEditor) === !0, I = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktTextBanner,
      u.LktIcons
    ].includes(o.value.type), U = [
      u.LktTextBanner
    ].includes(o.value.type), t = [
      u.LktTextBanner
    ].includes(o.value.type), n = [
      u.LktTextBanner
    ].includes(o.value.type), Z = [
      u.LktText
    ].includes(o.value.type), be = [
      u.LktLayout
    ].includes(o.value.type), te = [
      u.LktTextBanner
    ].includes(o.value.type), ne = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktIcon,
      u.LktButton,
      u.LktAnchor
    ].includes(o.value.type), X = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout, u.LktIcons].includes(o.value.type), Ce = [u.LktImage].includes(o.value.type), ue = [u.LktLayoutAccordion, u.LktTextAccordion].includes(o.value.type), re = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(o.value.type), ae = [j.FlexRow, j.FlexRows].includes((Pe = (De = a.parent) == null ? void 0 : De.layout) == null ? void 0 : Pe.type), de = Sl(), d = El(), Qe = Dl(), Xe = Pl(), Ye = [
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
    ], ie = (v, i) => {
      if (v.length > 0) {
        let z = String(i.value), O = "";
        if (z.includes("--from") && (O = "--" + z.split("--")[1]), z.includes("--to") && (O = "--" + z.split("--")[1]), O !== "") {
          let A = v.find((_) => String(_).includes(O));
          if (A)
            return A === i.value;
        }
        let D = v.find((A) => !String(A).includes("--"));
        if (D)
          return D === z || z.includes("--");
      }
      return !0;
    }, el = (v) => {
      var i;
      return ie(
        ((i = o.value.layout) == null ? void 0 : i.amountOfItems) ?? [],
        v
      );
    }, ll = (v) => {
      var i;
      return ie(
        ((i = o.value.layout) == null ? void 0 : i.alignItems) ?? [],
        v
      );
    }, tl = (v) => {
      var i;
      return ie(
        ((i = o.value.layout) == null ? void 0 : i.justifyContent) ?? [],
        v
      );
    }, al = (v) => {
      var i;
      return ie(
        ((i = o.value.layout) == null ? void 0 : i.columns) ?? [],
        v
      );
    }, ol = () => {
      o.value.addSubElement();
    }, Ue = $(() => {
      let v = Ae.getCustomAppearance(o.value.type);
      return Object.keys(v).length > 0 ? dl({ options: v.options }, il.defaultFieldElementCustomClassField) : void 0;
    }), Se = $(() => cl(fl(o.value.type)) + " Config"), we = (v, i) => {
      i || (i = o.value.props), i.alt = v[0].nameData, i.title = v[0].nameData;
    };
    Y(() => o.value.config.amountOfCallToActions, (v) => {
      console.log("updated amount of cta: ", v);
      let i = o.value.config.callToActions.length;
      v > i ? o.value.config.callToActions.push(sl()) : o.value.config.callToActions.splice(v, 1);
    }), rl(() => {
      console.log("mounted: ", a), !o.value.id && o.value.type === u.LktLayout && (w.value = !0, We(() => {
        var v;
        Ke(a.modalCrudConfig.createButton.resource, {
          ...(v = a.modalCrudConfig.createButton) == null ? void 0 : v.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((i) => {
          console.log("created layout", i), o.value.id = i.data.id, console.log("newid:", o.value.id), qe(a.modalName, a.modalKey), setTimeout(() => {
            ve(a.modalName, i.data.id, {
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
    const nl = $(() => a.isSubElement ? [] : ["update", "drop", "delete"]), se = () => {
      typeof a.onUpdate == "function" && a.onUpdate();
    }, ul = $(() => {
      var D, A, _;
      let v = !1, i = !1;
      !(!o.value.id && o.value.type === u.LktLayout) && !a.isSubElement && (v = {
        ...a.modalCrudConfig.createButton,
        resourceData: {
          ...(D = a.modalCrudConfig.createButton) == null ? void 0 : D.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        },
        events: {
          click: se
        }
      }, i = {
        ...a.modalCrudConfig.updateButton,
        resourceData: {
          ...(A = a.modalCrudConfig.updateButton) == null ? void 0 : A.resourceData,
          ...o.value
        },
        events: {
          click: se
        }
      });
      let O = a.isSubElement ? se : void 0;
      return {
        mode: f.value > 0 ? Oe.Update : Oe.Create,
        view: pl.Modal,
        editing: !0,
        perms: nl.value,
        title: Se.value,
        beforeClose: O,
        modalConfig: {
          modalName: a.modalName,
          modalKey: a.modalKey,
          zIndex: a.zIndex,
          title: Se.value,
          beforeClose: O
        },
        readData: {
          id: f.value
        },
        ...a.modalCrudConfig,
        createButton: v,
        updateButton: i,
        dropButton: a.isSubElement ? !1 : {
          ...a.modalCrudConfig.dropButton,
          resourceData: {
            ...(_ = a.modalCrudConfig.dropButton) == null ? void 0 : _.resourceData,
            ...o.value
          },
          events: {
            click: se
          }
        },
        enabledSaveWithoutChanges: !0
      };
    });
    return (v, i) => {
      const z = R("lkt-loader"), O = R("lkt-accordion"), D = R("lkt-button"), A = R("lkt-field"), _ = R("lkt-item-crud");
      return p(), k(_, y({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: o.value,
        "onUpdate:modelValue": i[14] || (i[14] = (g) => o.value = g)
      }, ul.value), {
        item: T(({ item: g }) => [
          w.value ? (p(), k(z, { key: 0 })) : (p(), K("div", Rl, [
            h("div", Fl, [
              r(Be, {
                modelValue: o.value,
                "onUpdate:modelValue": i[0] || (i[0] = (c) => o.value = c),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": v.modalCrudConfig,
                parent: o.value,
                "parent-type": e(E).Element,
                "default-appearance": v.defaultAppearance,
                onCrudUpdate: v.onUpdate
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type", "default-appearance", "onCrudUpdate"]),
              (p(!0), K(ge, null, Ve(e(x), (c) => (p(), K(ge, null, [
                c !== e(b) ? (p(), k(O, y({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(F).Auto,
                  title: c
                }), {
                  default: T(() => [
                    r(Be, {
                      modelValue: o.value,
                      "onUpdate:modelValue": i[1] || (i[1] = (oe) => o.value = oe),
                      lang: c,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": v.modalCrudConfig,
                      parent: o.value,
                      "parent-type": e(E).Element,
                      "default-appearance": v.defaultAppearance
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type", "default-appearance"])
                  ]),
                  _: 2
                }, 1040)) : V("", !0)
              ], 64))), 256))
            ]),
            h("div", Hl, [
              h("div", Ol, [
                e(re) ? (p(), k(D, C(y({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: v.fileBrowserConfig,
                    modalCrudConfig: v.modalCrudConfig,
                    parent: o.value,
                    parentType: e(E).Element,
                    onUpdate: v.onCrudUpdate
                  }
                })), null, 16)) : V("", !0),
                g.type === e(u).LktIcons ? (p(), k(D, C(y({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: ol
                  }
                })), null, 16)) : V("", !0),
                e(P) ? (p(), k(O, C(y({ key: 2 }, {
                  type: e(F).Always,
                  title: "Text editor"
                })), {
                  default: T(() => [
                    h("div", jl, [
                      r(D, y({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: i[2] || (i[2] = () => e(q)("bold"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: i[3] || (i[3] = () => e(q)("italic"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: i[4] || (i[4] = () => e(q)("underline"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: i[5] || (i[5] = () => e(q)("strikeThrough"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: i[6] || (i[6] = () => e(q)("superscript"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: i[7] || (i[7] = () => e(q)("subscript"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: i[8] || (i[8] = () => e(fe)("left"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: i[9] || (i[9] = () => e(fe)("center"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: i[10] || (i[10] = () => e(fe)("right"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-align-justify"
                      }, {
                        onClick: i[11] || (i[11] = () => e(fe)("justify"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-list-bullet"
                      }, {
                        onClick: i[12] || (i[12] = () => e(q)("insertUnorderedList"))
                      }), null, 16),
                      r(D, y({
                        icon: "lkt-icn-list-numbered"
                      }, {
                        onClick: i[13] || (i[13] = () => e(q)("insertOrderedList"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : V("", !0),
                !e(Z) && !e(be) ? (p(), k(O, C(y({ key: 3 }, {
                  type: e(F).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(Le).Display
                })), {
                  default: T(() => [
                    h("div", $l, [
                      Ue.value ? (p(), k(A, y({ key: 0 }, {
                        type: e(S).Select,
                        ...Ue.value,
                        canClear: !0
                      }, {
                        modelValue: g.props.class,
                        "onUpdate:modelValue": (c) => g.props.class = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(I) ? (p(), k(A, y({ key: 1 }, {
                        type: e(S).Switch,
                        label: "Has header"
                      }, {
                        modelValue: g.config.hasHeader,
                        "onUpdate:modelValue": (c) => g.config.hasHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(U) ? (p(), k(A, y({ key: 2 }, {
                        type: e(S).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: g.config.hasSubHeader,
                        "onUpdate:modelValue": (c) => g.config.hasSubHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ne) ? (p(), k(A, y({ key: 3 }, {
                        type: e(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: g.config.hasIcon,
                        "onUpdate:modelValue": (c) => g.config.hasIcon = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ne) ? (p(), k(A, y({ key: 4 }, {
                        type: e(S).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(hl)
                      }, {
                        modelValue: g.props.icon,
                        "onUpdate:modelValue": (c) => g.props.icon = c,
                        disabled: !g.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : V("", !0),
                      e(Ce) ? (p(), k(A, y({ key: 5 }, {
                        type: e(S).Image,
                        label: "Image",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: g.props.src,
                        "onUpdate:modelValue": (c) => g.props.src = c,
                        onPickedFiles: we
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(n) ? (p(), k(A, y({ key: 6 }, {
                        type: e(S).Image,
                        label: "Media content",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: g.props.media.src,
                        "onUpdate:modelValue": (c) => g.props.media.src = c,
                        onPickedFiles: (c) => we(c, g.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      e(n) ? (p(), k(A, y({ key: 7 }, {
                        type: e(S).Select,
                        label: "Type",
                        options: e(d)
                      }, {
                        modelValue: g.props.type,
                        "onUpdate:modelValue": (c) => g.props.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(t) ? (p(), k(A, y({ key: 8 }, {
                        type: e(S).Image,
                        label: "Background Image",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: g.props.art.src,
                        "onUpdate:modelValue": (c) => g.props.art.src = c,
                        onPickedFiles: (c) => we(c, g.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      h("div", null, [
                        e(te) ? (p(), k(A, y({ key: 0 }, {
                          type: e(S).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: g.props.opacity,
                          "onUpdate:modelValue": (c) => g.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                        e(te) ? (p(), k(A, y({ key: 1 }, {
                          type: e(S).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: g.props.opacity,
                          "onUpdate:modelValue": (c) => g.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                      ]),
                      e(n) ? (p(), k(A, y({ key: 9 }, {
                        type: e(S).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: g.config.amountOfCallToActions,
                        "onUpdate:modelValue": (c) => g.config.amountOfCallToActions = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                g.config.amountOfCallToActions > 0 ? (p(!0), K(ge, { key: 4 }, Ve(g.config.callToActions, (c) => (p(), k(O, y({ ref_for: !0 }, {
                  type: e(F).Auto,
                  title: "CTA #1"
                }), {
                  default: T(() => [
                    h("div", xl, [
                      r(A, y({ ref_for: !0 }, {
                        type: e(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: c.config.hasIcon,
                        "onUpdate:modelValue": (oe) => c.config.hasIcon = oe
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      r(A, y({ ref_for: !0 }, {
                        type: e(S).Text,
                        label: "Icon"
                      }, {
                        modelValue: c.props.icon,
                        "onUpdate:modelValue": (oe) => c.props.icon = oe,
                        disabled: !c.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : V("", !0),
                e(ue) ? (p(), k(O, C(y({ key: 5 }, {
                  type: e(F).Auto,
                  title: "Accordion Config"
                })), {
                  default: T(() => [
                    h("div", Ml, [
                      r(A, y({
                        type: e(S).Select,
                        label: "Type",
                        options: e(de)
                      }, {
                        modelValue: g.props.type,
                        "onUpdate:modelValue": (c) => g.props.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                e(X) || e(ae) ? (p(), k(O, C(y({ key: 6 }, {
                  type: e(F).Auto,
                  title: "Layout Config"
                })), {
                  default: T(() => [
                    h("div", Wl, [
                      e(X) ? (p(), k(A, y({ key: 0 }, {
                        type: e(S).Select,
                        label: "Type",
                        options: e(Qe)
                      }, {
                        modelValue: g.layout.type,
                        "onUpdate:modelValue": (c) => g.layout.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(X) && g.layout.type !== e(j).FlexColumn ? (p(), k(A, y({ key: 1 }, {
                        type: e(S).Select,
                        label: g.layout.type === e(j).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Xe),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: el
                        }
                      }, {
                        modelValue: g.layout.amountOfItems,
                        "onUpdate:modelValue": (c) => g.layout.amountOfItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(X) ? (p(), k(A, y({ key: 2 }, {
                        type: e(S).Select,
                        label: "Align items",
                        options: Ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: ll
                        }
                      }, {
                        modelValue: g.layout.alignItems,
                        "onUpdate:modelValue": (c) => g.layout.alignItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(X) ? (p(), k(A, y({ key: 3 }, {
                        type: e(S).Select,
                        label: "Justify content",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: tl
                        }
                      }, {
                        modelValue: g.layout.justifyContent,
                        "onUpdate:modelValue": (c) => g.layout.justifyContent = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ae) ? (p(), k(A, y({ key: 4 }, {
                        type: e(S).Select,
                        label: "Columns Reserved",
                        options: Ye,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: al
                        }
                      }, {
                        modelValue: g.layout.columns,
                        "onUpdate:modelValue": (c) => g.layout.columns = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                r(D, C(L({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(Ne).Split
                })), {
                  split: T(({ doClose: c }) => [
                    h("div", Nl, [
                      r(D, C(L({
                        text: "Before",
                        events: {
                          click: B
                        }
                      })), null, 16),
                      r(D, C(L({
                        text: "After",
                        events: {
                          click: s
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
}), Yl = () => {
  ee({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (m) => new le(m)
  }), ee({
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
}, Zl = () => {
  ee({
    url: "/web/pages",
    name: "ls-web-pages",
    params: {},
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ye(a))
  }), ee({
    url: "/web/pages/{type}",
    name: "ls-web-pages-type",
    params: { type: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ye(a))
  }), ee({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (m) => new ye(m)
  }), ee({
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
}, _l = {
  install: (m) => {
    m.component("lkt-web-page") === void 0 && (m.component("lkt-web-page", wl), je("lkt-web-element-select", Ul), je("lkt-web-element-config", Kl));
  }
};
export {
  _l as default,
  Yl as setupWebElementsHttp,
  Zl as setupWebPagesHttp
};
