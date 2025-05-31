import { defineComponent as Q, useSlots as je, createElementBlock as z, openBlock as p, renderSlot as xe, createCommentVNode as V, setBlockTracking as he, createElementVNode as h, unref as e, createBlock as k, resolveDynamicComponent as Me, normalizeProps as C, mergeProps as g, resolveComponent as R, createVNode as r, guardReactiveProps as L, ref as N, watch as Y, computed as $, normalizeClass as G, withCtx as T, createSlots as Re, nextTick as We, Fragment as ge, renderList as Ve, onMounted as rl } from "vue";
import { WebElementLayoutType as O, ButtonType as Ne, WebElementType as u, WebParentType as E, WebElementController as Ae, TablePermission as pe, TableType as me, WebElement as le, WebPage as ye, FormInstance as J, AccordionToggleMode as Le, AccordionType as F, FieldAutoValidationTrigger as fe, FieldType as S, WebPageStatus as Fe, BannerType as He, ensureFieldConfig as dl, LktSettings as il, getDefaultLktButtonWebElement as sl, ItemCrudView as pl, ItemCrudMode as Oe, applyTextFormat as q, applyTextAlignment as ce } from "lkt-vue-kernel";
import { getCurrentLanguage as Ie, getAvailableLanguages as ml } from "lkt-i18n";
import { httpCall as Ke, createHTTPGetResource as ee, createHTTPPostResource as ze, createHTTPPutResource as Ge, createHTTPDeleteResource as Je } from "lkt-http-client";
import { openModal as ve, closeModal as qe, addModal as $e } from "lkt-modal";
import { ucfirst as fl, kebabCaseToCamelCase as cl } from "lkt-string-tools";
const gl = { class: "lkt-text" }, W = /* @__PURE__ */ Q({
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
    const y = a, o = je(), l = (w) => {
      y("input", w);
    };
    return (w, B) => (p(), z("div", gl, [
      B[0] || (he(-1, !0), (B[0] = h("div", {
        contenteditable: w.disabled ? "false" : "true",
        class: "lkt-element-editable-text",
        onInput: (i) => l(i),
        innerHTML: w.modelValue
      }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, he(1), B[0]),
      e(o)["web-element-actions"] ? xe(w.$slots, "web-element-actions", { key: 0 }) : V("", !0)
    ]));
  }
}), Te = (m, a = !1) => {
  if (!m.layout || a) return "";
  let y = [];
  m.layout.type === O.FlexRow && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? y.push("lkt-flex-row") : m.layout.type === O.FlexRows && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? y.push("lkt-flex-rows") : m.layout.type === O.FlexColumn && y.push("lkt-flex-column"), m.layout.amountOfItems && m.layout.amountOfItems.length > 0 && (m.layout.type === O.FlexRow ? y.push(m.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : m.layout.type === O.FlexRows ? y.push(m.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : y.push(m.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), m.layout.alignItems && m.layout.alignItems.length > 0 && y.push(m.layout.alignItems.join(" ")), m.layout.justifyContent && m.layout.justifyContent.length > 0 && y.push(m.layout.justifyContent.join(" ")), y.length > 0 && y.push("layout-mode");
  let o = y.join(" ");
  return m.layout.type === O.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
}, yl = /* @__PURE__ */ Q({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(m) {
    return (a, y) => a.settings.type === "component" ? (p(), k(Me(a.settings.component), C(g({ key: 0 }, a.settings.componentProps)), null, 16)) : V("", !0);
  }
}), vl = {
  key: 0,
  class: "lkt-element-actions"
}, K = /* @__PURE__ */ Q({
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
    const y = a, o = m, l = N(o.modelValue);
    Y(() => o.modelValue, (t, n) => {
      l.value = t;
    }), Y(l, (t, n) => {
      y("update:modelValue", t);
    });
    const w = N(!1), B = (t, n = "text") => {
      const Z = t.target.innerHTML.trim();
      Z !== l.value.props[n][i] && (l.value.props[n][i] = Z);
    }, i = o.lang ?? Ie(), H = $(() => [
      u.LktLayoutBox,
      u.LktTextBox,
      u.LktLayoutAccordion,
      u.LktTextAccordion
    ].includes(l.value.type)), j = $(() => [
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
    }), D = $(() => l.value.props.class ? l.value.props.class : o.defaultAppearance), I = $(() => `lkt-element is-${l.value.type} is-${l.value.id} ${D.value}`), U = () => {
      y("crud-update");
    };
    return (t, n) => {
      var re, de, ae, ie;
      const Z = R("lkt-image"), be = R("lkt-icon"), te = R("lkt-header"), ue = R("lkt-button"), X = R("lkt-anchor"), Ce = R("lkt-banner");
      return l.value.type === e(u).LktText ? (p(), k(W, {
        key: 0,
        class: G(I.value),
        modelValue: l.value.props.text[e(i)],
        "onUpdate:modelValue": n[0] || (n[0] = (d) => l.value.props.text[e(i)] = d),
        disabled: t.disabled || t.parentType === e(E).Page,
        onInput: n[1] || (n[1] = (d) => B(d))
      }, {
        "web-element-actions": T(() => [
          r(K, C(L({
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
          r(K, C(L({
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
          j.value ? (p(), k(ke, {
            key: 0,
            modelValue: l.value.children,
            "onUpdate:modelValue": n[4] || (n[4] = (d) => l.value.children = d),
            "layout-selector": e(Te)(l.value),
            "is-child": "",
            lang: e(i),
            "is-preview": t.isPreview,
            parent: l.value,
            "parent-type": e(E).Element,
            "modal-crud-config": t.modalCrudConfig,
            "file-browser-config": t.fileBrowserConfig,
            disabled: t.disabled,
            editing: t.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), k(W, {
            key: 1,
            modelValue: l.value.props.text[e(i)],
            "onUpdate:modelValue": n[5] || (n[5] = (d) => l.value.props.text[e(i)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[6] || (n[6] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"]))
        ]),
        _: 2
      }, [
        (re = l.value.config) != null && re.hasHeader ? {
          name: "header",
          fn: T(() => [
            r(W, {
              modelValue: l.value.props.header[e(i)],
              "onUpdate:modelValue": n[2] || (n[2] = (d) => l.value.props.header[e(i)] = d),
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
        alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(i)] : "",
        title: typeof l.value.props.title == "object" ? l.value.props.title[e(i)] : ""
      }, {
        text: T(() => [
          r(W, {
            modelValue: l.value.props.text[e(i)],
            "onUpdate:modelValue": n[7] || (n[7] = (d) => l.value.props.text[e(i)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[8] || (n[8] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(K, C(L({
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
          r(W, {
            modelValue: l.value.props.text[e(i)],
            "onUpdate:modelValue": n[9] || (n[9] = (d) => l.value.props.text[e(i)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[10] || (n[10] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(K, C(L({
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
          r(W, {
            modelValue: l.value.props.text[e(i)],
            "onUpdate:modelValue": n[11] || (n[11] = (d) => l.value.props.text[e(i)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[12] || (n[12] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(K, C(L({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktButton ? (p(), k(ue, {
        key: 5,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(W, {
            modelValue: l.value.props.text[e(i)],
            "onUpdate:modelValue": n[13] || (n[13] = (d) => l.value.props.text[e(i)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[14] || (n[14] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(K, C(L({
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
          r(W, {
            modelValue: l.value.props.text[e(i)],
            "onUpdate:modelValue": n[15] || (n[15] = (d) => l.value.props.text[e(i)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[16] || (n[16] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(K, C(L({
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
          r(K, C(L({
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
          r(W, {
            modelValue: l.value.props.text[e(i)],
            "onUpdate:modelValue": n[21] || (n[21] = (d) => l.value.props.text[e(i)] = d),
            disabled: t.disabled || t.parentType === e(E).Page,
            onInput: n[22] || (n[22] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        (de = l.value.config) != null && de.hasHeader ? {
          name: "header",
          fn: T(() => [
            r(W, {
              modelValue: l.value.props.header[e(i)],
              "onUpdate:modelValue": n[17] || (n[17] = (d) => l.value.props.header[e(i)] = d),
              disabled: t.disabled || t.parentType === e(E).Page,
              onInput: n[18] || (n[18] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        (ae = l.value.config) != null && ae.hasSubHeader ? {
          name: "subHeader",
          fn: T(() => [
            r(W, {
              modelValue: l.value.props.subHeader[e(i)],
              "onUpdate:modelValue": n[19] || (n[19] = (d) => l.value.props.subHeader[e(i)] = d),
              disabled: t.disabled || t.parentType === e(E).Page,
              onInput: n[20] || (n[20] = (d) => B(d, "subHeader"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(u).LktIcons ? (p(), z("section", kl, [
        (ie = l.value.config) != null && ie.hasHeader ? (p(), k(te, { key: 0 }, {
          text: T(() => [
            r(W, {
              modelValue: l.value.props.header[e(i)],
              "onUpdate:modelValue": n[23] || (n[23] = (d) => l.value.props.header[e(i)] = d),
              disabled: t.disabled || t.parentType === e(E).Page,
              onInput: n[24] || (n[24] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        })) : V("", !0),
        r(W, {
          modelValue: l.value.props.text[e(i)],
          "onUpdate:modelValue": n[25] || (n[25] = (d) => l.value.props.text[e(i)] = d),
          disabled: t.disabled || t.parentType === e(E).Page,
          onInput: n[26] || (n[26] = (d) => B(d, "text"))
        }, null, 8, ["modelValue", "disabled"]),
        r(ke, {
          modelValue: l.value.subElements,
          "onUpdate:modelValue": n[27] || (n[27] = (d) => l.value.subElements = d),
          "layout-selector": e(Te)(l.value),
          "is-child": "",
          lang: e(i),
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
            r(K, C(L({
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
        lang: e(i),
        "is-preview": t.isPreview,
        parent: l.value,
        "parent-type": e(E).Element,
        "modal-crud-config": t.modalCrudConfig,
        "file-browser-config": t.fileBrowserConfig,
        disabled: t.disabled,
        editing: t.editing
      }, {
        "web-element-actions": T(() => [
          r(K, C(L({
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
          r(K, C(L({
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
}), bl = { class: "lkt-web-elements" }, Cl = {
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
    const y = a, o = je(), l = m, w = N(l.modelValue), B = N(l.editing), i = N(!1);
    Y(w, (b) => {
      y("update:modelValue", b);
    }, { deep: !0 }), Y(B, (b) => {
      console.log("editing", b);
    }, { deep: !0 });
    const H = () => {
      if (l.isSubElement) {
        i.value = !0, We(() => {
          i.value = !1, y("crud-update");
        });
        return;
      }
      const b = l.parentType === E.Page ? "r-web-page-children" : "r-web-element-children";
      Ke(b, { id: l.parent.id }).then((D) => {
        w.value = D.data.map((I) => new le(I)), y("crud-update");
      });
    }, j = $(() => {
      let b = [pe.Update, pe.Sort];
      l.isChild || b.push(pe.Create), l.parentType === E.Page && b.push(pe.SwitchEditMode);
      let D = l.isPreview ? me.Table : me.Item;
      D = me.Item, B.value && (D = me.Table);
      let I = "lkt-elements-table--default-grid";
      return l.isChild && (I = l.layoutSelector), {
        type: D,
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
    return (b, D) => {
      const I = R("lkt-table");
      return p(), z("div", bl, [
        b.parentType === e(E).Page ? (p(), z("span", Cl, "Web Elements")) : V("", !0),
        r(I, g({
          class: "lkt-elements-table",
          modelValue: w.value,
          "onUpdate:modelValue": D[0] || (D[0] = (U) => w.value = U)
        }, j.value, {
          "edit-mode": B.value,
          "onUpdate:editMode": D[1] || (D[1] = (U) => B.value = U),
          "skip-table-items-container": ""
        }), {
          item: T(({ _: U, index: t }) => [
            i.value ? V("", !0) : (p(), k(Be, g({
              key: 0,
              modelValue: w.value[t],
              "onUpdate:modelValue": (n) => w.value[t] = n
            }, {
              index: t,
              lang: b.lang,
              isPreview: b.isPreview,
              parent: b.parent,
              parentType: b.parentType,
              fileBrowserConfig: b.fileBrowserConfig,
              modalCrudConfig: b.modalCrudConfig,
              editing: B.value,
              defaultAppearance: b.defaultAppearance,
              isSubElement: b.isSubElement,
              canRenderActions: !B.value,
              disabled: b.disabled || !B.value
            }, { onCrudUpdate: H }), null, 16, ["modelValue", "onUpdate:modelValue"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"]),
        e(o)["web-element-actions"] ? xe(b.$slots, "web-element-actions", { key: 1 }) : V("", !0)
      ]);
    };
  }
}), wl = { class: "lkt-web-page" }, Tl = /* @__PURE__ */ Q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(m) {
    const a = m, y = N(new ye(a.modelValue)), o = N(null), l = N(!1), w = () => {
      o.value.turnStoredDataIntoOriginal();
    }, B = $(() => [
      { value: "draft", label: "Draft" },
      { value: "public", label: "Public" },
      { value: "scheduled", label: "Scheduled" }
    ]);
    Y(() => y.value.name, () => {
      y.value.updateSlug();
    });
    const i = $(() => ({
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
                trigger: fe.Blur
              }
            }),
            J.mkFieldItemConfig("status", {
              type: S.Select,
              label: "Status",
              mandatory: !0,
              canUndo: !0,
              options: B.value,
              validation: {
                trigger: fe.Blur
              }
            }),
            J.mkFieldItemConfig("scheduledDate", {
              type: S.DateTime,
              label: "Scheduled date",
              mandatory: y.value.status === Fe.Scheduled,
              canUndo: !0,
              validation: {
                trigger: fe.Blur
              }
            }, {}, { canRender: y.value.status === Fe.Scheduled })
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
                trigger: fe.Blur
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
          canRender: y.value.id > 0
        })
      ]
    })), H = $(() => {
      var D, I, U;
      let j = !1, b = !1;
      return j = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(D = a.crudConfig.createButton) == null ? void 0 : D.resourceData,
          ...y.value
        }
      }, b = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(I = a.crudConfig.updateButton) == null ? void 0 : I.resourceData,
          ...y.value
        }
      }, {
        ...a.crudConfig,
        createButton: j,
        updateButton: b,
        form: i.value,
        dropButton: {
          ...a.crudConfig.dropButton,
          resourceData: {
            ...(U = a.crudConfig.dropButton) == null ? void 0 : U.resourceData,
            ...y.value
          }
        }
      };
    });
    return (j, b) => {
      const D = R("lkt-item-crud");
      return p(), z("section", wl, [
        r(D, g({
          ref_key: "itemCrudRef",
          ref: o,
          modelValue: y.value,
          "onUpdate:modelValue": b[1] || (b[1] = (I) => y.value = I),
          editing: l.value,
          "onUpdate:editing": b[2] || (b[2] = (I) => l.value = I)
        }, H.value, {
          title: y.value.name === "" ? "Page name" : y.value.name
        }), {
          "web-elements": T(() => [
            y.value.id > 0 ? (p(), k(ke, {
              key: 0,
              modelValue: y.value.webElements,
              "onUpdate:modelValue": b[0] || (b[0] = (I) => y.value.webElements = I),
              lang: e(Ie)(),
              "modal-crud-config": j.modalCrudConfig,
              "file-browser-config": j.fileBrowserConfig,
              parent: y.value,
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
}), Vl = { class: "lkt-grid-1" }, Ll = { class: "lkt-grid-3" }, Bl = { class: "lkt-grid-3" }, Al = { class: "lkt-grid-3" }, Il = { class: "lkt-grid-3" }, Ul = { class: "lkt-grid-3" }, Sl = /* @__PURE__ */ Q({
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
    const a = m, y = N(a.parent), o = (w) => {
      ve("lkt-web-element-config", "_", {
        element: le.createByType(w),
        parent: y.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        qe(a.modalName, a.modalKey);
      }, 200);
    }, l = $(() => Ae.getElements());
    return (w, B) => {
      const i = R("lkt-button"), H = R("lkt-accordion"), j = R("lkt-modal");
      return p(), k(j, g({ id: "lkt-add-element-modal" }, {
        modalName: w.modalName,
        modalKey: w.modalKey,
        zIndex: w.zIndex,
        title: "LktBox Config"
      }), {
        default: T(() => [
          h("div", Vl, [
            r(H, C(L({
              type: e(F).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: T(() => [
                h("div", Ll, [
                  r(i, C(L({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        o(e(u).LktText);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        o(e(u).LktHeader);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        o(e(u).LktImage);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        o(e(u).LktIcon);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        o(e(u).LktTextBox);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
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
                h("div", Bl, [
                  r(i, C(L({
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
                h("div", Al, [
                  r(i, C(L({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
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
                h("div", Il, [
                  r(i, C(L({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        o(e(u).LktAnchor);
                      }
                    }
                  })), null, 16),
                  r(i, C(L({
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
                h("div", Ul, [
                  (p(!0), z(ge, null, Ve(l.value, (b) => (p(), k(i, g({ ref_for: !0 }, {
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
    value: O.Grid,
    label: "Grid"
  },
  {
    value: O.FlexRow,
    label: "Flex Row"
  },
  {
    value: O.FlexRows,
    label: "Flex Rows"
  },
  {
    value: O.FlexColumn,
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
      for (let l in o.columns) {
        let w = o.columns[l].toString();
        a.push({
          value: o.css.replace("{n}", w),
          label: o.label.replace("{n}", w)
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
}, Hl = { class: "lkt-flex-col-9 lkt-grid-1" }, Ol = { class: "lkt-flex-col-3" }, $l = { class: "lkt-web-element-config-scroller lkt-grid-1" }, jl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, xl = { class: "lkt-grid-1" }, Ml = { class: "lkt-grid-1" }, Wl = { class: "lkt-grid-1" }, Nl = { class: "lkt-grid-1" }, Kl = { class: "lkt-grid-1" }, zl = /* @__PURE__ */ Q({
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
    const a = m, y = N(parseInt(a.modalKey)), o = N(new le(a.element)), l = N(null), w = N(!1);
    Y(() => a.modalKey, (v) => {
      y.value = parseInt(v);
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
    }, H = o.value.getCustomSettings(), j = ml(), b = Ie(), D = !H || ((Ee = H.options) == null ? void 0 : Ee.textEditor) === !0, I = [
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
    ].includes(o.value.type), ue = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktIcon,
      u.LktButton,
      u.LktAnchor
    ].includes(o.value.type), X = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout, u.LktIcons].includes(o.value.type), Ce = [u.LktImage].includes(o.value.type), re = [u.LktLayoutAccordion, u.LktTextAccordion].includes(o.value.type), de = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(o.value.type), ae = [O.FlexRow, O.FlexRows].includes((De = (Pe = a.parent) == null ? void 0 : Pe.layout) == null ? void 0 : De.type), ie = El(), d = Pl(), Qe = Dl(), Xe = hl(), Ye = [
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
        let x = String(s.value), M = "";
        if (x.includes("--from") && (M = "--" + x.split("--")[1]), x.includes("--to") && (M = "--" + x.split("--")[1]), M !== "") {
          let A = v.find((_) => String(_).includes(M));
          if (A)
            return A === s.value;
        }
        let P = v.find((A) => !String(A).includes("--"));
        if (P)
          return P === x || x.includes("--");
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
    }, Ue = $(() => {
      let v = Ae.getCustomAppearance(o.value.type);
      if (!(!v || typeof v > "u"))
        return Object.keys(v).length > 0 ? dl({ options: v.options }, il.defaultFieldElementCustomClassField) : void 0;
    }), Se = $(() => fl(cl(o.value.type)) + " Config"), we = (v, s) => {
      s || (s = o.value.props), s.alt = v[0].nameData, s.title = v[0].nameData;
    };
    Y(() => o.value.config.amountOfCallToActions, (v) => {
      console.log("updated amount of cta: ", v);
      let s = o.value.config.callToActions.length;
      v > s ? o.value.config.callToActions.push(sl()) : o.value.config.callToActions.splice(v, 1);
    }), rl(() => {
      !o.value.id && o.value.type === u.LktLayout && (w.value = !0, We(() => {
        var v, s;
        Ke((v = a.modalCrudConfig.createButton) == null ? void 0 : v.resource, {
          ...(s = a.modalCrudConfig.createButton) == null ? void 0 : s.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((x) => {
          console.log("created layout", x), o.value.id = x.data.id, console.log("newid:", o.value.id), qe(a.modalName, a.modalKey), setTimeout(() => {
            ve(a.modalName, x.data.id, {
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
    const nl = $(() => a.isSubElement ? [] : ["update", "drop", "delete"]), oe = () => {
      typeof a.onUpdate == "function" && a.onUpdate();
    }, ul = $(() => {
      var P, A, _, c;
      let v = !1, s = !1;
      !(!o.value.id && o.value.type === u.LktLayout) && !a.isSubElement && (v = {
        ...a.modalCrudConfig.createButton,
        resourceData: {
          ...(A = (P = a.modalCrudConfig) == null ? void 0 : P.createButton) == null ? void 0 : A.resourceData,
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
          ...(_ = a.modalCrudConfig.updateButton) == null ? void 0 : _.resourceData,
          ...o.value
        },
        events: {
          click: oe
        }
      });
      let M = a.isSubElement ? oe : void 0;
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
          beforeClose: M
        },
        readData: {
          id: y.value
        },
        ...a.modalCrudConfig,
        createButton: v,
        updateButton: s,
        dropButton: a.isSubElement ? !1 : {
          ...a.modalCrudConfig.dropButton,
          resourceData: {
            ...(c = a.modalCrudConfig.dropButton) == null ? void 0 : c.resourceData,
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
      const x = R("lkt-loader"), M = R("lkt-accordion"), P = R("lkt-button"), A = R("lkt-field"), _ = R("lkt-item-crud");
      return p(), k(_, g({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: o.value,
        "onUpdate:modelValue": s[14] || (s[14] = (c) => o.value = c)
      }, ul.value), {
        item: T(({ item: c }) => [
          w.value ? (p(), k(x, { key: 0 })) : (p(), z("div", Fl, [
            h("div", Hl, [
              r(Be, g({
                modelValue: o.value,
                "onUpdate:modelValue": s[0] || (s[0] = (f) => o.value = f)
              }, {
                isPreview: !0,
                canRenderActions: !1,
                modalCrudConfig: v.modalCrudConfig,
                parent: o.value,
                parentType: e(E).Element,
                defaultAppearance: v.defaultAppearance
              }, { onCrudUpdate: v.onUpdate }), null, 16, ["modelValue", "onCrudUpdate"]),
              (p(!0), z(ge, null, Ve(e(j), (f) => (p(), z(ge, null, [
                f !== e(b) ? (p(), k(M, g({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(F).Auto,
                  title: f
                }), {
                  default: T(() => [
                    r(Be, g({
                      modelValue: o.value,
                      "onUpdate:modelValue": s[1] || (s[1] = (ne) => o.value = ne)
                    }, { ref_for: !0 }, {
                      lang: f,
                      isPreview: !0,
                      canRenderActions: !1,
                      modalCrudConfig: v.modalCrudConfig,
                      parent: o.value,
                      parentType: e(E).Element,
                      defaultAppearance: v.defaultAppearance
                    }), null, 16, ["modelValue"])
                  ]),
                  _: 2
                }, 1040)) : V("", !0)
              ], 64))), 256))
            ]),
            h("div", Ol, [
              h("div", $l, [
                e(de) ? (p(), k(P, C(g({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: v.fileBrowserConfig,
                    modalCrudConfig: v.modalCrudConfig,
                    parent: o.value,
                    parentType: e(E).Element,
                    onUpdate: oe
                  }
                })), null, 16)) : V("", !0),
                c.type === e(u).LktIcons ? (p(), k(P, C(g({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: ol
                  }
                })), null, 16)) : V("", !0),
                e(D) ? (p(), k(M, C(g({ key: 2 }, {
                  type: e(F).Always,
                  title: "Text editor"
                })), {
                  default: T(() => [
                    h("div", jl, [
                      r(P, g({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: s[2] || (s[2] = () => e(q)("bold"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: s[3] || (s[3] = () => e(q)("italic"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: s[4] || (s[4] = () => e(q)("underline"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: s[5] || (s[5] = () => e(q)("strikeThrough"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: s[6] || (s[6] = () => e(q)("superscript"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: s[7] || (s[7] = () => e(q)("subscript"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: s[8] || (s[8] = () => e(ce)("left"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: s[9] || (s[9] = () => e(ce)("center"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: s[10] || (s[10] = () => e(ce)("right"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-align-justify"
                      }, {
                        onClick: s[11] || (s[11] = () => e(ce)("justify"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-list-bullet"
                      }, {
                        onClick: s[12] || (s[12] = () => e(q)("insertUnorderedList"))
                      }), null, 16),
                      r(P, g({
                        icon: "lkt-icn-list-numbered"
                      }, {
                        onClick: s[13] || (s[13] = () => e(q)("insertOrderedList"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : V("", !0),
                !e(Z) && !e(be) ? (p(), k(M, C(g({ key: 3 }, {
                  type: e(F).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(Le).Display
                })), {
                  default: T(() => [
                    h("div", xl, [
                      Ue.value ? (p(), k(A, g({ key: 0 }, {
                        type: e(S).Select,
                        ...Ue.value,
                        canClear: !0
                      }, {
                        modelValue: c.props.class,
                        "onUpdate:modelValue": (f) => c.props.class = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(I) ? (p(), k(A, g({ key: 1 }, {
                        type: e(S).Switch,
                        label: "Has header"
                      }, {
                        modelValue: c.config.hasHeader,
                        "onUpdate:modelValue": (f) => c.config.hasHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(U) ? (p(), k(A, g({ key: 2 }, {
                        type: e(S).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: c.config.hasSubHeader,
                        "onUpdate:modelValue": (f) => c.config.hasSubHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ue) ? (p(), k(A, g({ key: 3 }, {
                        type: e(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: c.config.hasIcon,
                        "onUpdate:modelValue": (f) => c.config.hasIcon = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ue) ? (p(), k(A, g({
                        key: 4,
                        modelValue: c.props.icon,
                        "onUpdate:modelValue": (f) => c.props.icon = f
                      }, {
                        type: e(S).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Rl)
                      }, {
                        disabled: !c.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : V("", !0),
                      e(Ce) ? (p(), k(A, g({ key: 5 }, {
                        type: e(S).Image,
                        label: "Image",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: c.props.src,
                        "onUpdate:modelValue": (f) => c.props.src = f,
                        onPickedFiles: we
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(n) ? (p(), k(A, g({ key: 6 }, {
                        type: e(S).Image,
                        label: "Media content",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: c.props.media.src,
                        "onUpdate:modelValue": (f) => c.props.media.src = f,
                        onPickedFiles: (f) => we(f, c.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      e(n) ? (p(), k(A, g({ key: 7 }, {
                        type: e(S).Select,
                        label: "Type",
                        options: e(d)
                      }, {
                        modelValue: c.props.type,
                        "onUpdate:modelValue": (f) => c.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(t) ? (p(), k(A, g({ key: 8 }, {
                        type: e(S).Image,
                        label: "Background Image",
                        fileBrowserConfig: v.fileBrowserConfig
                      }, {
                        modelValue: c.props.art.src,
                        "onUpdate:modelValue": (f) => c.props.art.src = f,
                        onPickedFiles: (f) => we(f, c.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      h("div", null, [
                        e(te) ? (p(), k(A, g({ key: 0 }, {
                          type: e(S).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: c.props.opacity,
                          "onUpdate:modelValue": (f) => c.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                        e(te) ? (p(), k(A, g({ key: 1 }, {
                          type: e(S).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: c.props.opacity,
                          "onUpdate:modelValue": (f) => c.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                      ]),
                      e(n) ? (p(), k(A, g({ key: 9 }, {
                        type: e(S).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: c.config.amountOfCallToActions,
                        "onUpdate:modelValue": (f) => c.config.amountOfCallToActions = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                c.config.amountOfCallToActions > 0 ? (p(!0), z(ge, { key: 4 }, Ve(c.config.callToActions, (f) => (p(), k(M, g({ ref_for: !0 }, {
                  type: e(F).Auto,
                  title: "CTA #1"
                }), {
                  default: T(() => [
                    h("div", Ml, [
                      r(A, g({ ref_for: !0 }, {
                        type: e(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (ne) => f.config.hasIcon = ne
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      r(A, g({ ref_for: !0 }, {
                        type: e(S).Text,
                        label: "Icon"
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (ne) => f.props.icon = ne,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : V("", !0),
                e(re) ? (p(), k(M, C(g({ key: 5 }, {
                  type: e(F).Auto,
                  title: "Accordion Config"
                })), {
                  default: T(() => [
                    h("div", Wl, [
                      r(A, g({
                        type: e(S).Select,
                        label: "Type",
                        options: e(ie)
                      }, {
                        modelValue: c.props.type,
                        "onUpdate:modelValue": (f) => c.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                e(X) || e(ae) ? (p(), k(M, C(g({ key: 6 }, {
                  type: e(F).Auto,
                  title: "Layout Config"
                })), {
                  default: T(() => [
                    h("div", Nl, [
                      e(X) ? (p(), k(A, g({ key: 0 }, {
                        type: e(S).Select,
                        label: "Type",
                        options: e(Qe)
                      }, {
                        modelValue: c.layout.type,
                        "onUpdate:modelValue": (f) => c.layout.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(X) && c.layout.type !== e(O).FlexColumn ? (p(), k(A, g({ key: 1 }, {
                        type: e(S).Select,
                        label: c.layout.type === e(O).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Xe),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: el
                        }
                      }, {
                        modelValue: c.layout.amountOfItems,
                        "onUpdate:modelValue": (f) => c.layout.amountOfItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(X) ? (p(), k(A, g({ key: 2 }, {
                        type: e(S).Select,
                        label: "Align items",
                        options: Ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: ll
                        }
                      }, {
                        modelValue: c.layout.alignItems,
                        "onUpdate:modelValue": (f) => c.layout.alignItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(X) ? (p(), k(A, g({ key: 3 }, {
                        type: e(S).Select,
                        label: "Justify content",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: tl
                        }
                      }, {
                        modelValue: c.layout.justifyContent,
                        "onUpdate:modelValue": (f) => c.layout.justifyContent = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ae) ? (p(), k(A, g({ key: 4 }, {
                        type: e(S).Select,
                        label: "Columns Reserved",
                        options: Ye,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: al
                        }
                      }, {
                        modelValue: c.layout.columns,
                        "onUpdate:modelValue": (f) => c.layout.columns = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                r(P, C(L({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(Ne).Split
                })), {
                  split: T(({ doClose: f }) => [
                    h("div", Kl, [
                      r(P, C(L({
                        text: "Before",
                        events: {
                          click: B
                        }
                      })), null, 16),
                      r(P, C(L({
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
}, _l = () => {
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
