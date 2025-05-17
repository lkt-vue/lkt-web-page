import { defineComponent as q, useSlots as Oe, createElementBlock as K, openBlock as p, renderSlot as Fe, createCommentVNode as V, setBlockTracking as De, createElementVNode as h, unref as e, createBlock as v, resolveDynamicComponent as je, normalizeProps as C, mergeProps as g, resolveComponent as R, createVNode as r, guardReactiveProps as L, ref as N, watch as _, computed as $, normalizeClass as G, withCtx as T, createSlots as Pe, nextTick as $e, Fragment as fe, renderList as Te, onMounted as ol } from "vue";
import { WebElementLayoutType as j, ButtonType as xe, WebElementType as u, WebParentType as S, WebElementController as Le, TablePermission as se, TableType as pe, WebElement as ee, WebPage as ge, FormInstance as me, FieldType as D, AccordionType as O, BannerType as he, ensureFieldConfig as nl, LktSettings as ul, getDefaultLktButtonWebElement as rl, ItemCrudView as dl, ItemCrudMode as Re, applyTextFormat as J, applyTextAlignment as ce, AccordionToggleMode as il } from "lkt-vue-kernel";
import { getCurrentLanguage as Be, getAvailableLanguages as sl } from "lkt-i18n";
import { httpCall as Me, createHTTPGetResource as Z, createHTTPPostResource as Ne, createHTTPPutResource as We, createHTTPDeleteResource as Ke } from "lkt-http-client";
import { openModal as ye, closeModal as ze, addModal as He } from "lkt-modal";
import { ucfirst as pl, kebabCaseToCamelCase as ml } from "lkt-string-tools";
const cl = { class: "lkt-text" }, M = /* @__PURE__ */ q({
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
    const k = a, o = Oe(), l = (w) => {
      k("input", w);
    };
    return (w, B) => (p(), K("div", cl, [
      B[0] || (De(-1, !0), (B[0] = h("div", {
        contenteditable: w.disabled ? "false" : "true",
        class: "lkt-element-editable-text",
        onInput: (s) => l(s),
        innerHTML: w.modelValue
      }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, De(1), B[0]),
      e(o)["web-element-actions"] ? Fe(w.$slots, "web-element-actions", { key: 0 }) : V("", !0)
    ]));
  }
}), we = (m, a = !1) => {
  if (!m.layout || a) return "";
  let k = [];
  m.layout.type === j.FlexRow && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? k.push("lkt-flex-row") : m.layout.type === j.FlexRows && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? k.push("lkt-flex-rows") : m.layout.type === j.FlexColumn && k.push("lkt-flex-column"), m.layout.amountOfItems && m.layout.amountOfItems.length > 0 && (m.layout.type === j.FlexRow ? k.push(m.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : m.layout.type === j.FlexRows ? k.push(m.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : k.push(m.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), m.layout.alignItems && m.layout.alignItems.length > 0 && k.push(m.layout.alignItems.join(" ")), m.layout.justifyContent && m.layout.justifyContent.length > 0 && k.push(m.layout.justifyContent.join(" ")), k.length > 0 && k.push("layout-mode");
  let o = k.join(" ");
  return m.layout.type === j.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
}, fl = /* @__PURE__ */ q({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(m) {
    return (a, k) => a.settings.type === "component" ? (p(), v(je(a.settings.component), C(g({ key: 0 }, a.settings.componentProps)), null, 16)) : V("", !0);
  }
}), gl = {
  key: 0,
  class: "lkt-element-actions"
}, W = /* @__PURE__ */ q({
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
    return (a, k) => {
      const o = R("lkt-button");
      return !a.appendingItems && a.canRenderActions ? (p(), K("div", gl, [
        r(o, C(L({
          type: e(xe).Button,
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
}), yl = { key: 8 }, Ve = /* @__PURE__ */ q({
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
    const k = a, o = m, l = N(o.modelValue);
    _(() => o.modelValue, (t, n) => {
      l.value = t;
    }), _(l, (t, n) => {
      k("update:modelValue", t);
    });
    const w = N(!1), B = (t, n = "text") => {
      const X = t.target.innerHTML.trim();
      X !== l.value.props[n][s] && (l.value.props[n][s] = X);
    }, s = o.lang ?? Be(), H = $(() => [
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
      k("crud-update");
    };
    return (t, n) => {
      var ne, ue, te, re;
      const X = R("lkt-image"), ke = R("lkt-icon"), le = R("lkt-header"), oe = R("lkt-button"), Q = R("lkt-anchor"), be = R("lkt-banner");
      return l.value.type === e(u).LktText ? (p(), v(M, {
        key: 0,
        class: G(I.value),
        modelValue: l.value.props.text[e(s)],
        "onUpdate:modelValue": n[0] || (n[0] = (d) => l.value.props.text[e(s)] = d),
        disabled: t.disabled || t.parentType === e(S).Page,
        onInput: n[1] || (n[1] = (d) => B(d))
      }, {
        "web-element-actions": T(() => [
          r(W, C(L({
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
      }, 8, ["class", "modelValue", "disabled"])) : H.value ? (p(), v(je(b.value), {
        key: 1,
        icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, Pe({
        "web-element-actions": T(() => [
          r(W, C(L({
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
          x.value ? (p(), v(ve, {
            key: 0,
            modelValue: l.value.children,
            "onUpdate:modelValue": n[4] || (n[4] = (d) => l.value.children = d),
            "layout-selector": e(we)(l.value),
            "is-child": "",
            lang: e(s),
            "is-preview": t.isPreview,
            parent: l.value,
            "parent-type": e(S).Element,
            "modal-crud-config": t.modalCrudConfig,
            "file-browser-config": t.fileBrowserConfig,
            disabled: t.disabled,
            editing: t.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), v(M, {
            key: 1,
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[5] || (n[5] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(S).Page,
            onInput: n[6] || (n[6] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"]))
        ]),
        _: 2
      }, [
        (ne = l.value.config) != null && ne.hasHeader ? {
          name: "header",
          fn: T(() => [
            r(M, {
              modelValue: l.value.props.header[e(s)],
              "onUpdate:modelValue": n[2] || (n[2] = (d) => l.value.props.header[e(s)] = d),
              disabled: t.disabled || t.parentType === e(S).Page,
              onInput: n[3] || (n[3] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "class"])) : l.value.type === e(u).LktImage ? (p(), v(X, {
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
            disabled: t.disabled || t.parentType === e(S).Page,
            onInput: n[8] || (n[8] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(W, C(L({
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
      }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(u).LktIcon ? (p(), v(ke, {
        key: 3,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[9] || (n[9] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(S).Page,
            onInput: n[10] || (n[10] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(W, C(L({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktHeader ? (p(), v(le, {
        key: 4,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[11] || (n[11] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(S).Page,
            onInput: n[12] || (n[12] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(W, C(L({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktButton ? (p(), v(oe, {
        key: 5,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[13] || (n[13] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(S).Page,
            onInput: n[14] || (n[14] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(W, C(L({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktAnchor ? (p(), v(Q, {
        key: 6,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value)
      }, {
        text: T(() => [
          r(M, {
            modelValue: l.value.props.text[e(s)],
            "onUpdate:modelValue": n[15] || (n[15] = (d) => l.value.props.text[e(s)] = d),
            disabled: t.disabled || t.parentType === e(S).Page,
            onInput: n[16] || (n[16] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": T(() => [
          r(W, C(L({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktTextBanner ? (p(), v(be, {
        key: 7,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(I.value),
        opacity: l.value.props.opacity,
        art: l.value.props.art,
        media: l.value.props.media,
        type: l.value.props.type
      }, Pe({
        "web-element-actions": T(() => [
          r(W, C(L({
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
            disabled: t.disabled || t.parentType === e(S).Page,
            onInput: n[22] || (n[22] = (d) => B(d, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        (ue = l.value.config) != null && ue.hasHeader ? {
          name: "header",
          fn: T(() => [
            r(M, {
              modelValue: l.value.props.header[e(s)],
              "onUpdate:modelValue": n[17] || (n[17] = (d) => l.value.props.header[e(s)] = d),
              disabled: t.disabled || t.parentType === e(S).Page,
              onInput: n[18] || (n[18] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        (te = l.value.config) != null && te.hasSubHeader ? {
          name: "subHeader",
          fn: T(() => [
            r(M, {
              modelValue: l.value.props.subHeader[e(s)],
              "onUpdate:modelValue": n[19] || (n[19] = (d) => l.value.props.subHeader[e(s)] = d),
              disabled: t.disabled || t.parentType === e(S).Page,
              onInput: n[20] || (n[20] = (d) => B(d, "subHeader"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(u).LktIcons ? (p(), K("section", yl, [
        (re = l.value.config) != null && re.hasHeader ? (p(), v(le, { key: 0 }, {
          text: T(() => [
            r(M, {
              modelValue: l.value.props.header[e(s)],
              "onUpdate:modelValue": n[23] || (n[23] = (d) => l.value.props.header[e(s)] = d),
              disabled: t.disabled || t.parentType === e(S).Page,
              onInput: n[24] || (n[24] = (d) => B(d, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        })) : V("", !0),
        r(M, {
          modelValue: l.value.props.text[e(s)],
          "onUpdate:modelValue": n[25] || (n[25] = (d) => l.value.props.text[e(s)] = d),
          disabled: t.disabled || t.parentType === e(S).Page,
          onInput: n[26] || (n[26] = (d) => B(d, "text"))
        }, null, 8, ["modelValue", "disabled"]),
        r(ve, {
          modelValue: l.value.subElements,
          "onUpdate:modelValue": n[27] || (n[27] = (d) => l.value.subElements = d),
          "layout-selector": e(we)(l.value),
          "is-child": "",
          lang: e(s),
          "is-preview": t.isPreview,
          parent: l.value,
          "parent-type": e(S).Element,
          "modal-crud-config": t.modalCrudConfig,
          "file-browser-config": t.fileBrowserConfig,
          disabled: t.disabled,
          editing: t.editing,
          "default-appearance": l.value.props.class,
          "is-sub-element": ""
        }, {
          "web-element-actions": T(() => [
            r(W, C(L({
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
      ])) : l.value.type === e(u).LktLayout ? (p(), v(ve, {
        key: 9,
        modelValue: l.value.children,
        "onUpdate:modelValue": n[28] || (n[28] = (d) => l.value.children = d),
        class: G(I.value),
        "layout-selector": e(we)(l.value),
        "is-child": "",
        lang: e(s),
        "is-preview": t.isPreview,
        parent: l.value,
        "parent-type": e(S).Element,
        "modal-crud-config": t.modalCrudConfig,
        "file-browser-config": t.fileBrowserConfig,
        disabled: t.disabled,
        editing: t.editing
      }, {
        "web-element-actions": T(() => [
          r(W, C(L({
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
      }, 8, ["modelValue", "class", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : l.value.type.startsWith("custom:") ? (p(), v(fl, {
        key: 10,
        settings: e(Le).getCustomWebElementSettings(l.value.type)
      }, {
        "web-element-actions": T(() => [
          r(W, C(L({
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
}), vl = {
  key: 0,
  class: "like-lkt-field-label"
}, ve = /* @__PURE__ */ q({
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
    const k = a, o = Oe(), l = m, w = N(l.modelValue), B = N(l.editing), s = N(!1);
    _(w, (b) => {
      k("update:modelValue", b);
    }, { deep: !0 }), _(B, (b) => {
      console.log("editing", b);
    }, { deep: !0 });
    const H = () => {
      if (l.isSubElement) {
        s.value = !0, $e(() => {
          s.value = !1, k("crud-update");
        });
        return;
      }
      const b = l.parentType === S.Page ? "r-web-page-children" : "r-web-element-children";
      Me(b, { id: l.parent.id }).then((P) => {
        w.value = P.data.map((I) => new ee(I)), k("crud-update");
      });
    }, x = $(() => {
      let b = [se.Update, se.Sort];
      l.isChild || b.push(se.Create), l.parentType === S.Page && b.push(se.SwitchEditMode);
      let P = l.isPreview ? pe.Table : pe.Item;
      P = pe.Item, B.value && (P = pe.Table);
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
        b.parentType === e(S).Page ? (p(), K("span", vl, "Web Elements")) : V("", !0),
        r(I, g({
          class: "lkt-elements-table",
          modelValue: w.value,
          "onUpdate:modelValue": P[0] || (P[0] = (U) => w.value = U)
        }, x.value, {
          "edit-mode": B.value,
          "onUpdate:editMode": P[1] || (P[1] = (U) => B.value = U),
          "skip-table-items-container": ""
        }), {
          item: T(({ _: U, index: t }) => [
            s.value ? V("", !0) : (p(), v(Ve, {
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
        e(o)["web-element-actions"] ? Fe(b.$slots, "web-element-actions", { key: 1 }) : V("", !0)
      ]);
    };
  }
}), kl = { class: "lkt-web-page" }, bl = /* @__PURE__ */ q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(m) {
    const a = m, k = N(new ge(a.modelValue)), o = N(null), l = N(!1), w = () => {
      o.value.turnStoredDataIntoOriginal();
    }, B = $(() => [
      { value: "draft", label: "Draft" },
      { value: "public", label: "Public" },
      { value: "scheduled", label: "Scheduled" }
    ]), s = $(() => ({
      items: [
        me.mkFormItemConfig({
          container: {
            tag: "lkt-box",
            props: {
              title: "Main data"
            }
          },
          uiConfig: {
            formClass: "lkt-grid-1 lkt-grid-3--from-768"
          },
          items: [
            me.mkFieldItemConfig("name", {
              type: D.Text,
              label: "Name",
              mandatory: !0,
              canUndo: !0
            }),
            me.mkFieldItemConfig("status", {
              type: D.Select,
              label: "Status",
              mandatory: !0,
              canUndo: !0,
              options: B.value
            })
          ]
        }),
        me.mkSlotItemConfig("web-elements", { canRender: k.value.id > 0 })
      ]
    })), H = $(() => {
      var P, I, U;
      let x = !1, b = !1;
      return x = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(P = a.crudConfig.createButton) == null ? void 0 : P.resourceData,
          ...k.value
        }
      }, b = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(I = a.crudConfig.updateButton) == null ? void 0 : I.resourceData,
          ...k.value
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
            ...k.value
          }
        }
      };
    });
    return (x, b) => {
      const P = R("lkt-item-crud");
      return p(), K("section", kl, [
        r(P, g({
          ref_key: "itemCrudRef",
          ref: o,
          modelValue: k.value,
          "onUpdate:modelValue": b[1] || (b[1] = (I) => k.value = I),
          editing: l.value,
          "onUpdate:editing": b[2] || (b[2] = (I) => l.value = I)
        }, H.value, {
          title: k.value.name === "" ? "New page" : k.value.name
        }), {
          "web-elements": T(() => [
            r(ve, {
              modelValue: k.value.webElements,
              "onUpdate:modelValue": b[0] || (b[0] = (I) => k.value.webElements = I),
              lang: e(Be)(),
              "modal-crud-config": x.modalCrudConfig,
              "file-browser-config": x.fileBrowserConfig,
              parent: k.value,
              "parent-type": e(S).Page,
              "is-preview": !1,
              disabled: "",
              onCrudUpdate: w
            }, null, 8, ["modelValue", "lang", "modal-crud-config", "file-browser-config", "parent", "parent-type"])
          ]),
          _: 1
        }, 16, ["modelValue", "editing", "title"])
      ]);
    };
  }
}), Cl = { class: "lkt-grid-1" }, wl = { class: "lkt-grid-3" }, Tl = { class: "lkt-grid-3" }, Vl = { class: "lkt-grid-3" }, Ll = { class: "lkt-grid-3" }, Bl = { class: "lkt-grid-3" }, Al = /* @__PURE__ */ q({
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
    const a = m, k = N(a.parent), o = (w) => {
      ye("lkt-web-element-config", "_", {
        element: ee.createByType(w),
        parent: k.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        ze(a.modalName, a.modalKey);
      }, 200);
    }, l = $(() => Le.getElements());
    return (w, B) => {
      const s = R("lkt-button"), H = R("lkt-accordion"), x = R("lkt-modal");
      return p(), v(x, g({ id: "lkt-add-element-modal" }, {
        modalName: w.modalName,
        modalKey: w.modalKey,
        zIndex: w.zIndex,
        title: "LktBox Config"
      }), {
        default: T(() => [
          h("div", Cl, [
            r(H, C(L({
              type: e(O).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: T(() => [
                h("div", wl, [
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
              type: e(O).Auto,
              title: "Collection elements"
            })), {
              default: T(() => [
                h("div", Tl, [
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
              type: e(O).Auto,
              title: "Containers"
            })), {
              default: T(() => [
                h("div", Vl, [
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
              type: e(O).Auto,
              title: "Actions"
            })), {
              default: T(() => [
                h("div", Ll, [
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
              type: e(O).Auto,
              title: "Custom"
            })), {
              default: T(() => [
                h("div", Bl, [
                  (p(!0), K(fe, null, Te(l.value, (b) => (p(), v(s, g({ ref_for: !0 }, {
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
}), Il = () => [
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
], Ul = () => [
  {
    value: he.Static,
    label: "Static"
  },
  {
    value: he.Parallax,
    label: "Parallax"
  }
], Sl = () => [
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
], El = () => {
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
  for (let k in m) {
    let o = m[k];
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
}, Dl = [
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
], Pl = {
  key: 1,
  class: "lkt-flex-row"
}, hl = { class: "lkt-flex-col-9 lkt-grid-1" }, Rl = { class: "lkt-flex-col-3" }, Hl = { class: "lkt-web-element-config-scroller lkt-grid-1" }, Ol = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, Fl = { class: "lkt-grid-1" }, jl = { class: "lkt-grid-1" }, $l = { class: "lkt-grid-1" }, xl = { class: "lkt-grid-1" }, Ml = { class: "lkt-grid-1" }, Nl = /* @__PURE__ */ q({
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
    var Ue, Se, Ee;
    const a = m, k = N(parseInt(a.modalKey)), o = N(new ee(a.element)), l = N(null), w = N(!1);
    _(() => a.modalKey, (y) => {
      k.value = parseInt(y);
    });
    const B = () => {
      let y = o.value.getClone();
      ye("lkt-web-element-config", "_", {
        element: y,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: o.value.id
      });
    }, s = () => {
      let y = o.value.getClone();
      ye("lkt-web-element-config", "_", {
        element: y,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: o.value.id
      });
    }, H = o.value.getCustomSettings(), x = sl(), b = Be(), P = !H || ((Ue = H.options) == null ? void 0 : Ue.textEditor) === !0, I = [
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
    ].includes(o.value.type), X = [
      u.LktText
    ].includes(o.value.type), ke = [
      u.LktLayout
    ].includes(o.value.type), le = [
      u.LktTextBanner
    ].includes(o.value.type), oe = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktIcon,
      u.LktButton,
      u.LktAnchor
    ].includes(o.value.type), Q = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout, u.LktIcons].includes(o.value.type), be = [u.LktImage].includes(o.value.type), ne = [u.LktLayoutAccordion, u.LktTextAccordion].includes(o.value.type), ue = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(o.value.type), te = [j.FlexRow, j.FlexRows].includes((Ee = (Se = a.parent) == null ? void 0 : Se.layout) == null ? void 0 : Ee.type), re = Il(), d = Ul(), Ge = Sl(), Je = El(), qe = [
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
      },
      {
        value: "lkt-align-items-stretch",
        label: "Default: Stretch"
      }
    ], Xe = [
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
    ], de = (y, i) => {
      if (y.length > 0) {
        let z = String(i.value), F = "";
        if (z.includes("--from") && (F = "--" + z.split("--")[1]), z.includes("--to") && (F = "--" + z.split("--")[1]), F !== "") {
          let A = y.find((Y) => String(Y).includes(F));
          if (A)
            return A === i.value;
        }
        let E = y.find((A) => !String(A).includes("--"));
        if (E)
          return E === z || z.includes("--");
      }
      return !0;
    }, Ye = (y) => {
      var i;
      return de(
        ((i = o.value.layout) == null ? void 0 : i.amountOfItems) ?? [],
        y
      );
    }, Ze = (y) => {
      var i;
      return de(
        ((i = o.value.layout) == null ? void 0 : i.alignItems) ?? [],
        y
      );
    }, _e = (y) => {
      var i;
      return de(
        ((i = o.value.layout) == null ? void 0 : i.justifyContent) ?? [],
        y
      );
    }, el = (y) => {
      var i;
      return de(
        ((i = o.value.layout) == null ? void 0 : i.columns) ?? [],
        y
      );
    }, ll = () => {
      o.value.addSubElement();
    }, Ae = $(() => {
      let y = Le.getCustomAppearance(o.value.type);
      return Object.keys(y).length > 0 ? nl({ options: y.options }, ul.defaultFieldElementCustomClassField) : void 0;
    }), Ie = $(() => pl(ml(o.value.type)) + " Config"), Ce = (y, i) => {
      i || (i = o.value.props), i.alt = y[0].nameData, i.title = y[0].nameData;
    };
    _(() => o.value.config.amountOfCallToActions, (y) => {
      console.log("updated amount of cta: ", y);
      let i = o.value.config.callToActions.length;
      y > i ? o.value.config.callToActions.push(rl()) : o.value.config.callToActions.splice(y, 1);
    }), ol(() => {
      console.log("mounted: ", a), !o.value.id && o.value.type === u.LktLayout && (w.value = !0, $e(() => {
        var y;
        Me(a.modalCrudConfig.createButton.resource, {
          ...(y = a.modalCrudConfig.createButton) == null ? void 0 : y.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((i) => {
          console.log("created layout", i), o.value.id = i.data.id, console.log("newid:", o.value.id), ze(a.modalName, a.modalKey), setTimeout(() => {
            ye(a.modalName, i.data.id, {
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
    const tl = $(() => a.isSubElement ? [] : ["update", "drop", "delete"]), ie = () => {
      typeof a.onUpdate == "function" && a.onUpdate();
    }, al = $(() => {
      var E, A, Y;
      let y = !1, i = !1;
      !(!o.value.id && o.value.type === u.LktLayout) && !a.isSubElement && (y = {
        ...a.modalCrudConfig.createButton,
        resourceData: {
          ...(E = a.modalCrudConfig.createButton) == null ? void 0 : E.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        },
        events: {
          click: ie
        }
      }, i = {
        ...a.modalCrudConfig.updateButton,
        resourceData: {
          ...(A = a.modalCrudConfig.updateButton) == null ? void 0 : A.resourceData,
          ...o.value
        },
        events: {
          click: ie
        }
      });
      let F = a.isSubElement ? ie : void 0;
      return {
        mode: k.value > 0 ? Re.Update : Re.Create,
        view: dl.Modal,
        editing: !0,
        perms: tl.value,
        title: Ie.value,
        beforeClose: F,
        modalConfig: {
          modalName: a.modalName,
          modalKey: a.modalKey,
          zIndex: a.zIndex,
          title: Ie.value,
          beforeClose: F
        },
        readData: {
          id: k.value
        },
        ...a.modalCrudConfig,
        createButton: y,
        updateButton: i,
        dropButton: a.isSubElement ? !1 : {
          ...a.modalCrudConfig.dropButton,
          resourceData: {
            ...(Y = a.modalCrudConfig.dropButton) == null ? void 0 : Y.resourceData,
            ...o.value
          },
          events: {
            click: ie
          }
        },
        enabledSaveWithoutChanges: !0
      };
    });
    return (y, i) => {
      const z = R("lkt-loader"), F = R("lkt-accordion"), E = R("lkt-button"), A = R("lkt-field"), Y = R("lkt-item-crud");
      return p(), v(Y, g({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: o.value,
        "onUpdate:modelValue": i[14] || (i[14] = (f) => o.value = f)
      }, al.value), {
        item: T(({ item: f }) => [
          w.value ? (p(), v(z, { key: 0 })) : (p(), K("div", Pl, [
            h("div", hl, [
              r(Ve, {
                modelValue: o.value,
                "onUpdate:modelValue": i[0] || (i[0] = (c) => o.value = c),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": y.modalCrudConfig,
                parent: o.value,
                "parent-type": e(S).Element,
                "default-appearance": y.defaultAppearance,
                onCrudUpdate: y.onUpdate
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type", "default-appearance", "onCrudUpdate"]),
              (p(!0), K(fe, null, Te(e(x), (c) => (p(), K(fe, null, [
                c !== e(b) ? (p(), v(F, g({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(O).Auto,
                  title: c
                }), {
                  default: T(() => [
                    r(Ve, {
                      modelValue: o.value,
                      "onUpdate:modelValue": i[1] || (i[1] = (ae) => o.value = ae),
                      lang: c,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": y.modalCrudConfig,
                      parent: o.value,
                      "parent-type": e(S).Element,
                      "default-appearance": y.defaultAppearance
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type", "default-appearance"])
                  ]),
                  _: 2
                }, 1040)) : V("", !0)
              ], 64))), 256))
            ]),
            h("div", Rl, [
              h("div", Hl, [
                e(ue) ? (p(), v(E, C(g({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: y.fileBrowserConfig,
                    modalCrudConfig: y.modalCrudConfig,
                    parent: o.value,
                    parentType: e(S).Element,
                    onUpdate: y.onCrudUpdate
                  }
                })), null, 16)) : V("", !0),
                f.type === e(u).LktIcons ? (p(), v(E, C(g({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: ll
                  }
                })), null, 16)) : V("", !0),
                e(P) ? (p(), v(F, C(g({ key: 2 }, {
                  type: e(O).Always,
                  title: "Text editor"
                })), {
                  default: T(() => [
                    h("div", Ol, [
                      r(E, g({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: i[2] || (i[2] = () => e(J)("bold"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: i[3] || (i[3] = () => e(J)("italic"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: i[4] || (i[4] = () => e(J)("underline"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: i[5] || (i[5] = () => e(J)("strikeThrough"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: i[6] || (i[6] = () => e(J)("superscript"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: i[7] || (i[7] = () => e(J)("subscript"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: i[8] || (i[8] = () => e(ce)("left"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: i[9] || (i[9] = () => e(ce)("center"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: i[10] || (i[10] = () => e(ce)("right"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-align-justify"
                      }, {
                        onClick: i[11] || (i[11] = () => e(ce)("justify"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-list-bullet"
                      }, {
                        onClick: i[12] || (i[12] = () => e(J)("insertUnorderedList"))
                      }), null, 16),
                      r(E, g({
                        icon: "lkt-icn-list-numbered"
                      }, {
                        onClick: i[13] || (i[13] = () => e(J)("insertOrderedList"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : V("", !0),
                !e(X) && !e(ke) ? (p(), v(F, C(g({ key: 3 }, {
                  type: e(O).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(il).Display
                })), {
                  default: T(() => [
                    h("div", Fl, [
                      Ae.value ? (p(), v(A, g({ key: 0 }, {
                        type: e(D).Select,
                        ...Ae.value,
                        canClear: !0
                      }, {
                        modelValue: f.props.class,
                        "onUpdate:modelValue": (c) => f.props.class = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(I) ? (p(), v(A, g({ key: 1 }, {
                        type: e(D).Switch,
                        label: "Has header"
                      }, {
                        modelValue: f.config.hasHeader,
                        "onUpdate:modelValue": (c) => f.config.hasHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(U) ? (p(), v(A, g({ key: 2 }, {
                        type: e(D).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: f.config.hasSubHeader,
                        "onUpdate:modelValue": (c) => f.config.hasSubHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(oe) ? (p(), v(A, g({ key: 3 }, {
                        type: e(D).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (c) => f.config.hasIcon = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(oe) ? (p(), v(A, g({ key: 4 }, {
                        type: e(D).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Dl)
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (c) => f.props.icon = c,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : V("", !0),
                      e(be) ? (p(), v(A, g({ key: 5 }, {
                        type: e(D).Image,
                        label: "Image",
                        fileBrowserConfig: y.fileBrowserConfig
                      }, {
                        modelValue: f.props.src,
                        "onUpdate:modelValue": (c) => f.props.src = c,
                        onPickedFiles: Ce
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(n) ? (p(), v(A, g({ key: 6 }, {
                        type: e(D).Image,
                        label: "Media content",
                        fileBrowserConfig: y.fileBrowserConfig
                      }, {
                        modelValue: f.props.media.src,
                        "onUpdate:modelValue": (c) => f.props.media.src = c,
                        onPickedFiles: (c) => Ce(c, f.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      e(n) ? (p(), v(A, g({ key: 7 }, {
                        type: e(D).Select,
                        label: "Type",
                        options: e(d)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (c) => f.props.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(t) ? (p(), v(A, g({ key: 8 }, {
                        type: e(D).Image,
                        label: "Background Image",
                        fileBrowserConfig: y.fileBrowserConfig
                      }, {
                        modelValue: f.props.art.src,
                        "onUpdate:modelValue": (c) => f.props.art.src = c,
                        onPickedFiles: (c) => Ce(c, f.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      h("div", null, [
                        e(le) ? (p(), v(A, g({ key: 0 }, {
                          type: e(D).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (c) => f.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                        e(le) ? (p(), v(A, g({ key: 1 }, {
                          type: e(D).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (c) => f.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                      ]),
                      e(n) ? (p(), v(A, g({ key: 9 }, {
                        type: e(D).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: f.config.amountOfCallToActions,
                        "onUpdate:modelValue": (c) => f.config.amountOfCallToActions = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                f.config.amountOfCallToActions > 0 ? (p(!0), K(fe, { key: 4 }, Te(f.config.callToActions, (c) => (p(), v(F, g({ ref_for: !0 }, {
                  type: e(O).Auto,
                  title: "CTA #1"
                }), {
                  default: T(() => [
                    h("div", jl, [
                      r(A, g({ ref_for: !0 }, {
                        type: e(D).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: c.config.hasIcon,
                        "onUpdate:modelValue": (ae) => c.config.hasIcon = ae
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      r(A, g({ ref_for: !0 }, {
                        type: e(D).Text,
                        label: "Icon"
                      }, {
                        modelValue: c.props.icon,
                        "onUpdate:modelValue": (ae) => c.props.icon = ae,
                        disabled: !c.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : V("", !0),
                e(ne) ? (p(), v(F, C(g({ key: 5 }, {
                  type: e(O).Auto,
                  title: "Accordion Config"
                })), {
                  default: T(() => [
                    h("div", $l, [
                      r(A, g({
                        type: e(D).Select,
                        label: "Type",
                        options: e(re)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (c) => f.props.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                e(Q) || e(te) ? (p(), v(F, C(g({ key: 6 }, {
                  type: e(O).Auto,
                  title: "Layout Config"
                })), {
                  default: T(() => [
                    h("div", xl, [
                      e(Q) ? (p(), v(A, g({ key: 0 }, {
                        type: e(D).Select,
                        label: "Type",
                        options: e(Ge)
                      }, {
                        modelValue: f.layout.type,
                        "onUpdate:modelValue": (c) => f.layout.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(Q) && f.layout.type !== e(j).FlexColumn ? (p(), v(A, g({ key: 1 }, {
                        type: e(D).Select,
                        label: f.layout.type === e(j).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Je),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Ye
                        }
                      }, {
                        modelValue: f.layout.amountOfItems,
                        "onUpdate:modelValue": (c) => f.layout.amountOfItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(Q) ? (p(), v(A, g({ key: 2 }, {
                        type: e(D).Select,
                        label: "Align items",
                        options: Qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ze
                        }
                      }, {
                        modelValue: f.layout.alignItems,
                        "onUpdate:modelValue": (c) => f.layout.alignItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(Q) ? (p(), v(A, g({ key: 3 }, {
                        type: e(D).Select,
                        label: "Justify content",
                        options: Xe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: _e
                        }
                      }, {
                        modelValue: f.layout.justifyContent,
                        "onUpdate:modelValue": (c) => f.layout.justifyContent = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(te) ? (p(), v(A, g({ key: 4 }, {
                        type: e(D).Select,
                        label: "Columns Reserved",
                        options: qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: el
                        }
                      }, {
                        modelValue: f.layout.columns,
                        "onUpdate:modelValue": (c) => f.layout.columns = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                r(E, C(L({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(xe).Split
                })), {
                  split: T(({ doClose: c }) => [
                    h("div", Ml, [
                      r(E, C(L({
                        text: "Before",
                        events: {
                          click: B
                        }
                      })), null, 16),
                      r(E, C(L({
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
}), Ql = () => {
  Z({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (m) => new ee(m)
  }), Z({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ee(a))
  }), Ne({
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
  }), We({
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
  }), Ke({
    url: "/web/element/{id}",
    name: "rm-web-element",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, Xl = () => {
  Z({
    url: "/web/pages",
    name: "ls-web-pages",
    params: {},
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ge(a))
  }), Z({
    url: "/web/pages/{type}",
    name: "ls-web-pages-type",
    params: { type: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ge(a))
  }), Z({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (m) => new ge(m)
  }), Z({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ee(a))
  }), Ne({
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
  }), We({
    url: "/web/page/{id}",
    name: "up-web-page",
    params: {
      id: { default: void 0 },
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  }), Ke({
    url: "/web/page/{id}",
    name: "rm-web-page",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, Yl = {
  install: (m) => {
    m.component("lkt-web-page") === void 0 && (m.component("lkt-web-page", bl), He("lkt-web-element-select", Al), He("lkt-web-element-config", Nl));
  }
};
export {
  Yl as default,
  Ql as setupWebElementsHttp,
  Xl as setupWebPagesHttp
};
