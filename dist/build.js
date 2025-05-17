import { defineComponent as q, useSlots as He, createElementBlock as K, openBlock as p, renderSlot as Oe, createCommentVNode as L, setBlockTracking as Se, createElementVNode as R, unref as e, createBlock as v, resolveDynamicComponent as Fe, normalizeProps as C, mergeProps as f, resolveComponent as H, createVNode as d, guardReactiveProps as B, ref as N, watch as _, computed as M, normalizeClass as G, withCtx as V, createSlots as De, nextTick as $e, Fragment as ce, renderList as we, onMounted as al } from "vue";
import { WebElementLayoutType as $, ButtonType as je, WebElementType as u, WebParentType as I, WebElementController as Te, TablePermission as se, TableType as pe, WebElement as ee, WebPage as fe, FieldType as S, AccordionType as O, BannerType as Pe, ensureFieldConfig as ol, LktSettings as nl, getDefaultLktButtonWebElement as ul, ItemCrudView as dl, ItemCrudMode as he, applyTextFormat as J, applyTextAlignment as me, AccordionToggleMode as rl } from "lkt-vue-kernel";
import { getCurrentLanguage as Le, getAvailableLanguages as il } from "lkt-i18n";
import { httpCall as xe, createHTTPGetResource as Z, createHTTPPostResource as Me, createHTTPPutResource as Ne, createHTTPDeleteResource as We } from "lkt-http-client";
import { openModal as ge, closeModal as Ke, addModal as Re } from "lkt-modal";
import { ucfirst as sl, kebabCaseToCamelCase as pl } from "lkt-string-tools";
const ml = { class: "lkt-text" }, j = /* @__PURE__ */ q({
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
    const k = a, o = He(), l = (w) => {
      k("input", w);
    };
    return (w, T) => (p(), K("div", ml, [
      T[0] || (Se(-1, !0), (T[0] = R("div", {
        contenteditable: w.disabled ? "false" : "true",
        class: "lkt-element-editable-text",
        onInput: (r) => l(r),
        innerHTML: w.modelValue
      }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, Se(1), T[0]),
      e(o)["web-element-actions"] ? Oe(w.$slots, "web-element-actions", { key: 0 }) : L("", !0)
    ]));
  }
}), Ce = (m, a = !1) => {
  if (!m.layout || a) return "";
  let k = [];
  m.layout.type === $.FlexRow && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? k.push("lkt-flex-row") : m.layout.type === $.FlexRows && (!m.layout.amountOfItems || m.layout.amountOfItems.length === 0) ? k.push("lkt-flex-rows") : m.layout.type === $.FlexColumn && k.push("lkt-flex-column"), m.layout.amountOfItems && m.layout.amountOfItems.length > 0 && (m.layout.type === $.FlexRow ? k.push(m.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : m.layout.type === $.FlexRows ? k.push(m.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : k.push(m.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), m.layout.alignItems && m.layout.alignItems.length > 0 && k.push(m.layout.alignItems.join(" ")), m.layout.justifyContent && m.layout.justifyContent.length > 0 && k.push(m.layout.justifyContent.join(" ")), k.length > 0 && k.push("layout-mode");
  let o = k.join(" ");
  return m.layout.type === $.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
}, cl = /* @__PURE__ */ q({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(m) {
    return (a, k) => a.settings.type === "component" ? (p(), v(Fe(a.settings.component), C(f({ key: 0 }, a.settings.componentProps)), null, 16)) : L("", !0);
  }
}), fl = {
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
      const o = H("lkt-button");
      return !a.appendingItems && a.canRenderActions ? (p(), K("div", fl, [
        d(o, C(B({
          type: e(je).Button,
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
      ])) : L("", !0);
    };
  }
}), gl = { key: 8 }, Ve = /* @__PURE__ */ q({
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
    const w = N(!1), T = (t, n = "text") => {
      const X = t.target.innerHTML.trim();
      X !== l.value.props[n][r] && (l.value.props[n][r] = X);
    }, r = o.lang ?? Le(), D = M(() => [
      u.LktLayoutBox,
      u.LktTextBox,
      u.LktLayoutAccordion,
      u.LktTextAccordion
    ].includes(l.value.type)), x = M(() => [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktLayout
    ].includes(l.value.type)), b = M(() => {
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
    }), P = M(() => l.value.props.class ? l.value.props.class : o.defaultAppearance), h = M(() => `lkt-element is-${l.value.type} is-${l.value.id} ${P.value}`), U = () => {
      k("crud-update");
    };
    return (t, n) => {
      var ne, ue, te, de;
      const X = H("lkt-image"), ve = H("lkt-icon"), le = H("lkt-header"), oe = H("lkt-button"), Q = H("lkt-anchor"), ke = H("lkt-banner");
      return l.value.type === e(u).LktText ? (p(), v(j, {
        key: 0,
        class: G(h.value),
        modelValue: l.value.props.text[e(r)],
        "onUpdate:modelValue": n[0] || (n[0] = (i) => l.value.props.text[e(r)] = i),
        disabled: t.disabled || t.parentType === e(I).Page,
        onInput: n[1] || (n[1] = (i) => T(i))
      }, {
        "web-element-actions": V(() => [
          d(W, C(B({
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
      }, 8, ["class", "modelValue", "disabled"])) : D.value ? (p(), v(Fe(b.value), {
        key: 1,
        icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value)
      }, De({
        "web-element-actions": V(() => [
          d(W, C(B({
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
        default: V(() => [
          x.value ? (p(), v(ye, {
            key: 0,
            modelValue: l.value.children,
            "onUpdate:modelValue": n[4] || (n[4] = (i) => l.value.children = i),
            "layout-selector": e(Ce)(l.value),
            "is-child": "",
            lang: e(r),
            "is-preview": t.isPreview,
            parent: l.value,
            "parent-type": e(I).Element,
            "modal-crud-config": t.modalCrudConfig,
            "file-browser-config": t.fileBrowserConfig,
            disabled: t.disabled,
            editing: t.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), v(j, {
            key: 1,
            modelValue: l.value.props.text[e(r)],
            "onUpdate:modelValue": n[5] || (n[5] = (i) => l.value.props.text[e(r)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[6] || (n[6] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"]))
        ]),
        _: 2
      }, [
        (ne = l.value.config) != null && ne.hasHeader ? {
          name: "header",
          fn: V(() => [
            d(j, {
              modelValue: l.value.props.header[e(r)],
              "onUpdate:modelValue": n[2] || (n[2] = (i) => l.value.props.header[e(r)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[3] || (n[3] = (i) => T(i, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "class"])) : l.value.type === e(u).LktImage ? (p(), v(X, {
        key: 2,
        class: G(h.value),
        src: l.value.props.src,
        alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(r)] : "",
        title: typeof l.value.props.title == "object" ? l.value.props.title[e(r)] : ""
      }, {
        text: V(() => [
          d(j, {
            modelValue: l.value.props.text[e(r)],
            "onUpdate:modelValue": n[7] || (n[7] = (i) => l.value.props.text[e(r)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[8] || (n[8] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          d(W, C(B({
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
      }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(u).LktIcon ? (p(), v(ve, {
        key: 3,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value)
      }, {
        text: V(() => [
          d(j, {
            modelValue: l.value.props.text[e(r)],
            "onUpdate:modelValue": n[9] || (n[9] = (i) => l.value.props.text[e(r)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[10] || (n[10] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          d(W, C(B({
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
        class: G(h.value)
      }, {
        text: V(() => [
          d(j, {
            modelValue: l.value.props.text[e(r)],
            "onUpdate:modelValue": n[11] || (n[11] = (i) => l.value.props.text[e(r)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[12] || (n[12] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          d(W, C(B({
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
        class: G(h.value)
      }, {
        text: V(() => [
          d(j, {
            modelValue: l.value.props.text[e(r)],
            "onUpdate:modelValue": n[13] || (n[13] = (i) => l.value.props.text[e(r)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[14] || (n[14] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          d(W, C(B({
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
        class: G(h.value)
      }, {
        text: V(() => [
          d(j, {
            modelValue: l.value.props.text[e(r)],
            "onUpdate:modelValue": n[15] || (n[15] = (i) => l.value.props.text[e(r)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[16] || (n[16] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          d(W, C(B({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktTextBanner ? (p(), v(ke, {
        key: 7,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value),
        opacity: l.value.props.opacity,
        art: l.value.props.art,
        media: l.value.props.media,
        type: l.value.props.type
      }, De({
        "web-element-actions": V(() => [
          d(W, C(B({
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
        default: V(() => [
          d(j, {
            modelValue: l.value.props.text[e(r)],
            "onUpdate:modelValue": n[21] || (n[21] = (i) => l.value.props.text[e(r)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[22] || (n[22] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        (ue = l.value.config) != null && ue.hasHeader ? {
          name: "header",
          fn: V(() => [
            d(j, {
              modelValue: l.value.props.header[e(r)],
              "onUpdate:modelValue": n[17] || (n[17] = (i) => l.value.props.header[e(r)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[18] || (n[18] = (i) => T(i, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        (te = l.value.config) != null && te.hasSubHeader ? {
          name: "subHeader",
          fn: V(() => [
            d(j, {
              modelValue: l.value.props.subHeader[e(r)],
              "onUpdate:modelValue": n[19] || (n[19] = (i) => l.value.props.subHeader[e(r)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[20] || (n[20] = (i) => T(i, "subHeader"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(u).LktIcons ? (p(), K("section", gl, [
        (de = l.value.config) != null && de.hasHeader ? (p(), v(le, { key: 0 }, {
          text: V(() => [
            d(j, {
              modelValue: l.value.props.header[e(r)],
              "onUpdate:modelValue": n[23] || (n[23] = (i) => l.value.props.header[e(r)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[24] || (n[24] = (i) => T(i, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        })) : L("", !0),
        d(j, {
          modelValue: l.value.props.text[e(r)],
          "onUpdate:modelValue": n[25] || (n[25] = (i) => l.value.props.text[e(r)] = i),
          disabled: t.disabled || t.parentType === e(I).Page,
          onInput: n[26] || (n[26] = (i) => T(i, "text"))
        }, null, 8, ["modelValue", "disabled"]),
        d(ye, {
          modelValue: l.value.subElements,
          "onUpdate:modelValue": n[27] || (n[27] = (i) => l.value.subElements = i),
          "layout-selector": e(Ce)(l.value),
          "is-child": "",
          lang: e(r),
          "is-preview": t.isPreview,
          parent: l.value,
          "parent-type": e(I).Element,
          "modal-crud-config": t.modalCrudConfig,
          "file-browser-config": t.fileBrowserConfig,
          disabled: t.disabled,
          editing: t.editing,
          "default-appearance": l.value.props.class,
          "is-sub-element": ""
        }, {
          "web-element-actions": V(() => [
            d(W, C(B({
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
      ])) : l.value.type === e(u).LktLayout ? (p(), v(ye, {
        key: 9,
        modelValue: l.value.children,
        "onUpdate:modelValue": n[28] || (n[28] = (i) => l.value.children = i),
        class: G(h.value),
        "layout-selector": e(Ce)(l.value),
        "is-child": "",
        lang: e(r),
        "is-preview": t.isPreview,
        parent: l.value,
        "parent-type": e(I).Element,
        "modal-crud-config": t.modalCrudConfig,
        "file-browser-config": t.fileBrowserConfig,
        disabled: t.disabled,
        editing: t.editing
      }, {
        "web-element-actions": V(() => [
          d(W, C(B({
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
      }, 8, ["modelValue", "class", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : l.value.type.startsWith("custom:") ? (p(), v(cl, {
        key: 10,
        settings: e(Te).getCustomWebElementSettings(l.value.type)
      }, {
        "web-element-actions": V(() => [
          d(W, C(B({
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
      }, 8, ["settings"])) : L("", !0);
    };
  }
}), yl = {
  key: 0,
  class: "like-lkt-field-label"
}, ye = /* @__PURE__ */ q({
  __name: "LktWebElements",
  props: {
    modelValue: {},
    parent: {},
    parentType: { default: I.Element },
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
    const k = a, o = He(), l = m, w = N(l.modelValue), T = N(l.editing), r = N(!1);
    _(w, (b) => {
      k("update:modelValue", b);
    }, { deep: !0 }), _(T, (b) => {
      console.log("editing", b);
    }, { deep: !0 });
    const D = () => {
      if (l.isSubElement) {
        r.value = !0, $e(() => {
          r.value = !1, k("crud-update");
        });
        return;
      }
      const b = l.parentType === I.Page ? "r-web-page-children" : "r-web-element-children";
      xe(b, { id: l.parent.id }).then((P) => {
        w.value = P.data.map((h) => new ee(h)), k("crud-update");
      });
    }, x = M(() => {
      let b = [se.Update, se.Sort];
      l.isChild || b.push(se.Create), l.parentType === I.Page && b.push(se.SwitchEditMode);
      let P = l.isPreview ? pe.Table : pe.Item;
      P = pe.Item, T.value && (P = pe.Table);
      let h = "lkt-elements-table--default-grid";
      return l.isChild && (h = l.layoutSelector), {
        type: P,
        perms: b,
        itemsContainerClass: h,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (U) => {
          if (!U.layout || l.isPreview) return "";
          let t = [];
          return U.layout.columns && U.layout.columns.length > 0 && t.push(U.layout.columns.join(" ")), t.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: l.isPreview || T.value,
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
            onUpdate: D
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
      const h = H("lkt-table");
      return p(), K("div", null, [
        b.parentType === e(I).Page ? (p(), K("span", yl, "Web Elements")) : L("", !0),
        d(h, f({
          class: "lkt-elements-table",
          modelValue: w.value,
          "onUpdate:modelValue": P[0] || (P[0] = (U) => w.value = U)
        }, x.value, {
          "edit-mode": T.value,
          "onUpdate:editMode": P[1] || (P[1] = (U) => T.value = U),
          "skip-table-items-container": ""
        }), {
          item: V(({ _: U, index: t }) => [
            r.value ? L("", !0) : (p(), v(Ve, {
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
              "can-render-actions": !T.value,
              disabled: b.disabled || !T.value,
              editing: T.value,
              "default-appearance": b.defaultAppearance,
              "is-sub-element": b.isSubElement,
              onCrudUpdate: D
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled", "editing", "default-appearance", "is-sub-element"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"]),
        e(o)["web-element-actions"] ? Oe(b.$slots, "web-element-actions", { key: 1 }) : L("", !0)
      ]);
    };
  }
}), vl = { class: "lkt-web-page" }, kl = { class: "lkt-grid-1 lkt-grid-3--from-768" }, bl = /* @__PURE__ */ q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(m) {
    const a = m, k = N(new fe(a.modelValue)), o = N(null), l = () => {
      o.value.turnStoredDataIntoOriginal();
    }, w = M(() => {
      var D, x, b;
      let T = !1, r = !1;
      return T = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(D = a.crudConfig.createButton) == null ? void 0 : D.resourceData,
          ...k.value
        }
      }, r = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(x = a.crudConfig.updateButton) == null ? void 0 : x.resourceData,
          ...k.value
        }
      }, {
        ...a.crudConfig,
        createButton: T,
        updateButton: r,
        dropButton: {
          ...a.crudConfig.dropButton,
          resourceData: {
            ...(b = a.crudConfig.dropButton) == null ? void 0 : b.resourceData,
            ...k.value
          }
        }
      };
    });
    return (T, r) => {
      const D = H("lkt-field"), x = H("lkt-item-crud");
      return p(), K("section", vl, [
        d(x, f({
          ref_key: "itemCrudRef",
          ref: o,
          modelValue: k.value,
          "onUpdate:modelValue": r[0] || (r[0] = (b) => k.value = b)
        }, w.value, {
          title: k.value.name === "" ? "New page" : k.value.name
        }), {
          item: V(({ item: b }) => [
            R("div", kl, [
              d(D, f({
                modelValue: b.name,
                "onUpdate:modelValue": (P) => b.name = P
              }, {
                type: e(S).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            k.value.id > 0 ? (p(), v(ye, {
              key: 0,
              modelValue: b.webElements,
              "onUpdate:modelValue": (P) => b.webElements = P,
              lang: e(Le)(),
              "modal-crud-config": T.modalCrudConfig,
              "file-browser-config": T.fileBrowserConfig,
              parent: k.value,
              "parent-type": e(I).Page,
              "is-preview": !1,
              disabled: "",
              onCrudUpdate: l
            }, null, 8, ["modelValue", "onUpdate:modelValue", "lang", "modal-crud-config", "file-browser-config", "parent", "parent-type"])) : L("", !0)
          ]),
          _: 1
        }, 16, ["modelValue", "title"])
      ]);
    };
  }
}), Cl = { class: "lkt-grid-1" }, wl = { class: "lkt-grid-3" }, Vl = { class: "lkt-grid-3" }, Tl = { class: "lkt-grid-3" }, Ll = { class: "lkt-grid-3" }, Bl = { class: "lkt-grid-3" }, Al = /* @__PURE__ */ q({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    parent: {},
    parentType: { default: I.Element },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    onUpdate: {}
  },
  setup(m) {
    const a = m, k = N(a.parent), o = (w) => {
      ge("lkt-web-element-config", "_", {
        element: ee.createByType(w),
        parent: k.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        Ke(a.modalName, a.modalKey);
      }, 200);
    }, l = M(() => Te.getElements());
    return (w, T) => {
      const r = H("lkt-button"), D = H("lkt-accordion"), x = H("lkt-modal");
      return p(), v(x, f({ id: "lkt-add-element-modal" }, {
        modalName: w.modalName,
        modalKey: w.modalKey,
        zIndex: w.zIndex,
        title: "LktBox Config"
      }), {
        default: V(() => [
          R("div", Cl, [
            d(D, C(B({
              type: e(O).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: V(() => [
                R("div", wl, [
                  d(r, C(B({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        o(e(u).LktText);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        o(e(u).LktHeader);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        o(e(u).LktImage);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        o(e(u).LktIcon);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        o(e(u).LktTextBox);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
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
            d(D, C(B({
              type: e(O).Auto,
              title: "Collection elements"
            })), {
              default: V(() => [
                R("div", Vl, [
                  d(r, C(B({
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
            d(D, C(B({
              type: e(O).Auto,
              title: "Containers"
            })), {
              default: V(() => [
                R("div", Tl, [
                  d(r, C(B({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
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
            d(D, C(B({
              type: e(O).Auto,
              title: "Actions"
            })), {
              default: V(() => [
                R("div", Ll, [
                  d(r, C(B({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        o(e(u).LktAnchor);
                      }
                    }
                  })), null, 16),
                  d(r, C(B({
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
            d(D, C(B({
              type: e(O).Auto,
              title: "Custom"
            })), {
              default: V(() => [
                R("div", Bl, [
                  (p(!0), K(ce, null, we(l.value, (b) => (p(), v(r, f({ ref_for: !0 }, {
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
    value: Pe.Static,
    label: "Static"
  },
  {
    value: Pe.Parallax,
    label: "Parallax"
  }
], El = () => [
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
], Sl = () => {
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
}, hl = { class: "lkt-flex-col-9 lkt-grid-1" }, Rl = { class: "lkt-flex-col-3" }, Hl = { class: "lkt-web-element-config-scroller lkt-grid-1" }, Ol = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, Fl = { class: "lkt-grid-1" }, $l = { class: "lkt-grid-1" }, jl = { class: "lkt-grid-1" }, xl = { class: "lkt-grid-1" }, Ml = { class: "lkt-grid-1" }, Nl = /* @__PURE__ */ q({
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
    var Ie, Ue, Ee;
    const a = m, k = N(parseInt(a.modalKey)), o = N(new ee(a.element)), l = N(null), w = N(!1);
    _(() => a.modalKey, (y) => {
      k.value = parseInt(y);
    });
    const T = () => {
      let y = o.value.getClone();
      ge("lkt-web-element-config", "_", {
        element: y,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: o.value.id
      });
    }, r = () => {
      let y = o.value.getClone();
      ge("lkt-web-element-config", "_", {
        element: y,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: o.value.id
      });
    }, D = o.value.getCustomSettings(), x = il(), b = Le(), P = !D || ((Ie = D.options) == null ? void 0 : Ie.textEditor) === !0, h = [
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
    ].includes(o.value.type), ve = [
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
    ].includes(o.value.type), Q = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout, u.LktIcons].includes(o.value.type), ke = [u.LktImage].includes(o.value.type), ne = [u.LktLayoutAccordion, u.LktTextAccordion].includes(o.value.type), ue = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(o.value.type), te = [$.FlexRow, $.FlexRows].includes((Ee = (Ue = a.parent) == null ? void 0 : Ue.layout) == null ? void 0 : Ee.type), de = Il(), i = Ul(), ze = El(), Ge = Sl(), Je = [
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
    ], qe = [
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
    ], Qe = [
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
    ], re = (y, s) => {
      if (y.length > 0) {
        let z = String(s.value), F = "";
        if (z.includes("--from") && (F = "--" + z.split("--")[1]), z.includes("--to") && (F = "--" + z.split("--")[1]), F !== "") {
          let A = y.find((Y) => String(Y).includes(F));
          if (A)
            return A === s.value;
        }
        let E = y.find((A) => !String(A).includes("--"));
        if (E)
          return E === z || z.includes("--");
      }
      return !0;
    }, Xe = (y) => {
      var s;
      return re(
        ((s = o.value.layout) == null ? void 0 : s.amountOfItems) ?? [],
        y
      );
    }, Ye = (y) => {
      var s;
      return re(
        ((s = o.value.layout) == null ? void 0 : s.alignItems) ?? [],
        y
      );
    }, Ze = (y) => {
      var s;
      return re(
        ((s = o.value.layout) == null ? void 0 : s.justifyContent) ?? [],
        y
      );
    }, _e = (y) => {
      var s;
      return re(
        ((s = o.value.layout) == null ? void 0 : s.columns) ?? [],
        y
      );
    }, el = () => {
      o.value.addSubElement();
    }, Be = M(() => {
      let y = Te.getCustomAppearance(o.value.type);
      return Object.keys(y).length > 0 ? ol({ options: y.options }, nl.defaultFieldElementCustomClassField) : void 0;
    }), Ae = M(() => sl(pl(o.value.type)) + " Config"), be = (y, s) => {
      s || (s = o.value.props), s.alt = y[0].nameData, s.title = y[0].nameData;
    };
    _(() => o.value.config.amountOfCallToActions, (y) => {
      console.log("updated amount of cta: ", y);
      let s = o.value.config.callToActions.length;
      y > s ? o.value.config.callToActions.push(ul()) : o.value.config.callToActions.splice(y, 1);
    }), al(() => {
      console.log("mounted: ", a), !o.value.id && o.value.type === u.LktLayout && (w.value = !0, $e(() => {
        var y;
        xe(a.modalCrudConfig.createButton.resource, {
          ...(y = a.modalCrudConfig.createButton) == null ? void 0 : y.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((s) => {
          console.log("created layout", s), o.value.id = s.data.id, console.log("newid:", o.value.id), Ke(a.modalName, a.modalKey), setTimeout(() => {
            ge(a.modalName, s.data.id, {
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
    const ll = M(() => a.isSubElement ? [] : ["update", "drop", "delete"]), ie = () => {
      typeof a.onUpdate == "function" && a.onUpdate();
    }, tl = M(() => {
      var E, A, Y;
      let y = !1, s = !1;
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
      }, s = {
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
        mode: k.value > 0 ? he.Update : he.Create,
        view: dl.Modal,
        editing: !0,
        perms: ll.value,
        title: Ae.value,
        beforeClose: F,
        modalConfig: {
          modalName: a.modalName,
          modalKey: a.modalKey,
          zIndex: a.zIndex,
          title: Ae.value,
          beforeClose: F
        },
        readData: {
          id: k.value
        },
        ...a.modalCrudConfig,
        createButton: y,
        updateButton: s,
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
    return (y, s) => {
      const z = H("lkt-loader"), F = H("lkt-accordion"), E = H("lkt-button"), A = H("lkt-field"), Y = H("lkt-item-crud");
      return p(), v(Y, f({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: o.value,
        "onUpdate:modelValue": s[14] || (s[14] = (g) => o.value = g)
      }, tl.value), {
        item: V(({ item: g }) => [
          w.value ? (p(), v(z, { key: 0 })) : (p(), K("div", Pl, [
            R("div", hl, [
              d(Ve, {
                modelValue: o.value,
                "onUpdate:modelValue": s[0] || (s[0] = (c) => o.value = c),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": y.modalCrudConfig,
                parent: o.value,
                "parent-type": e(I).Element,
                "default-appearance": y.defaultAppearance,
                onCrudUpdate: y.onUpdate
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type", "default-appearance", "onCrudUpdate"]),
              (p(!0), K(ce, null, we(e(x), (c) => (p(), K(ce, null, [
                c !== e(b) ? (p(), v(F, f({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(O).Auto,
                  title: c
                }), {
                  default: V(() => [
                    d(Ve, {
                      modelValue: o.value,
                      "onUpdate:modelValue": s[1] || (s[1] = (ae) => o.value = ae),
                      lang: c,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": y.modalCrudConfig,
                      parent: o.value,
                      "parent-type": e(I).Element,
                      "default-appearance": y.defaultAppearance
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type", "default-appearance"])
                  ]),
                  _: 2
                }, 1040)) : L("", !0)
              ], 64))), 256))
            ]),
            R("div", Rl, [
              R("div", Hl, [
                e(ue) ? (p(), v(E, C(f({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: y.fileBrowserConfig,
                    modalCrudConfig: y.modalCrudConfig,
                    parent: o.value,
                    parentType: e(I).Element,
                    onUpdate: y.onCrudUpdate
                  }
                })), null, 16)) : L("", !0),
                g.type === e(u).LktIcons ? (p(), v(E, C(f({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: el
                  }
                })), null, 16)) : L("", !0),
                e(P) ? (p(), v(F, C(f({ key: 2 }, {
                  type: e(O).Always,
                  title: "Text editor"
                })), {
                  default: V(() => [
                    R("div", Ol, [
                      d(E, f({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: s[2] || (s[2] = () => e(J)("bold"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: s[3] || (s[3] = () => e(J)("italic"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: s[4] || (s[4] = () => e(J)("underline"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: s[5] || (s[5] = () => e(J)("strikeThrough"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: s[6] || (s[6] = () => e(J)("superscript"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: s[7] || (s[7] = () => e(J)("subscript"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: s[8] || (s[8] = () => e(me)("left"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: s[9] || (s[9] = () => e(me)("center"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: s[10] || (s[10] = () => e(me)("right"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-align-justify"
                      }, {
                        onClick: s[11] || (s[11] = () => e(me)("justify"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-list-bullet"
                      }, {
                        onClick: s[12] || (s[12] = () => e(J)("insertUnorderedList"))
                      }), null, 16),
                      d(E, f({
                        icon: "lkt-icn-list-numbered"
                      }, {
                        onClick: s[13] || (s[13] = () => e(J)("insertOrderedList"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : L("", !0),
                !e(X) && !e(ve) ? (p(), v(F, C(f({ key: 3 }, {
                  type: e(O).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(rl).Display
                })), {
                  default: V(() => [
                    R("div", Fl, [
                      Be.value ? (p(), v(A, f({ key: 0 }, {
                        type: e(S).Select,
                        ...Be.value,
                        canClear: !0
                      }, {
                        modelValue: g.props.class,
                        "onUpdate:modelValue": (c) => g.props.class = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(h) ? (p(), v(A, f({ key: 1 }, {
                        type: e(S).Switch,
                        label: "Has header"
                      }, {
                        modelValue: g.config.hasHeader,
                        "onUpdate:modelValue": (c) => g.config.hasHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(U) ? (p(), v(A, f({ key: 2 }, {
                        type: e(S).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: g.config.hasSubHeader,
                        "onUpdate:modelValue": (c) => g.config.hasSubHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(oe) ? (p(), v(A, f({ key: 3 }, {
                        type: e(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: g.config.hasIcon,
                        "onUpdate:modelValue": (c) => g.config.hasIcon = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(oe) ? (p(), v(A, f({ key: 4 }, {
                        type: e(S).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Dl)
                      }, {
                        modelValue: g.props.icon,
                        "onUpdate:modelValue": (c) => g.props.icon = c,
                        disabled: !g.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : L("", !0),
                      e(ke) ? (p(), v(A, f({ key: 5 }, {
                        type: e(S).Image,
                        label: "Image",
                        fileBrowserConfig: y.fileBrowserConfig
                      }, {
                        modelValue: g.props.src,
                        "onUpdate:modelValue": (c) => g.props.src = c,
                        onPickedFiles: be
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(n) ? (p(), v(A, f({ key: 6 }, {
                        type: e(S).Image,
                        label: "Media content",
                        fileBrowserConfig: y.fileBrowserConfig
                      }, {
                        modelValue: g.props.media.src,
                        "onUpdate:modelValue": (c) => g.props.media.src = c,
                        onPickedFiles: (c) => be(c, g.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      e(n) ? (p(), v(A, f({ key: 7 }, {
                        type: e(S).Select,
                        label: "Type",
                        options: e(i)
                      }, {
                        modelValue: g.props.type,
                        "onUpdate:modelValue": (c) => g.props.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(t) ? (p(), v(A, f({ key: 8 }, {
                        type: e(S).Image,
                        label: "Background Image",
                        fileBrowserConfig: y.fileBrowserConfig
                      }, {
                        modelValue: g.props.art.src,
                        "onUpdate:modelValue": (c) => g.props.art.src = c,
                        onPickedFiles: (c) => be(c, g.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      R("div", null, [
                        e(le) ? (p(), v(A, f({ key: 0 }, {
                          type: e(S).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: g.props.opacity,
                          "onUpdate:modelValue": (c) => g.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                        e(le) ? (p(), v(A, f({ key: 1 }, {
                          type: e(S).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: g.props.opacity,
                          "onUpdate:modelValue": (c) => g.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                      ]),
                      e(n) ? (p(), v(A, f({ key: 9 }, {
                        type: e(S).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: g.config.amountOfCallToActions,
                        "onUpdate:modelValue": (c) => g.config.amountOfCallToActions = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                g.config.amountOfCallToActions > 0 ? (p(!0), K(ce, { key: 4 }, we(g.config.callToActions, (c) => (p(), v(F, f({ ref_for: !0 }, {
                  type: e(O).Auto,
                  title: "CTA #1"
                }), {
                  default: V(() => [
                    R("div", $l, [
                      d(A, f({ ref_for: !0 }, {
                        type: e(S).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: c.config.hasIcon,
                        "onUpdate:modelValue": (ae) => c.config.hasIcon = ae
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      d(A, f({ ref_for: !0 }, {
                        type: e(S).Text,
                        label: "Icon"
                      }, {
                        modelValue: c.props.icon,
                        "onUpdate:modelValue": (ae) => c.props.icon = ae,
                        disabled: !c.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : L("", !0),
                e(ne) ? (p(), v(F, C(f({ key: 5 }, {
                  type: e(O).Auto,
                  title: "Accordion Config"
                })), {
                  default: V(() => [
                    R("div", jl, [
                      d(A, f({
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
                }, 1040)) : L("", !0),
                e(Q) || e(te) ? (p(), v(F, C(f({ key: 6 }, {
                  type: e(O).Auto,
                  title: "Layout Config"
                })), {
                  default: V(() => [
                    R("div", xl, [
                      e(Q) ? (p(), v(A, f({ key: 0 }, {
                        type: e(S).Select,
                        label: "Type",
                        options: e(ze)
                      }, {
                        modelValue: g.layout.type,
                        "onUpdate:modelValue": (c) => g.layout.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Q) && g.layout.type !== e($).FlexColumn ? (p(), v(A, f({ key: 1 }, {
                        type: e(S).Select,
                        label: g.layout.type === e($).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Ge),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Xe
                        }
                      }, {
                        modelValue: g.layout.amountOfItems,
                        "onUpdate:modelValue": (c) => g.layout.amountOfItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Q) ? (p(), v(A, f({ key: 2 }, {
                        type: e(S).Select,
                        label: "Align items",
                        options: qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ye
                        }
                      }, {
                        modelValue: g.layout.alignItems,
                        "onUpdate:modelValue": (c) => g.layout.alignItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Q) ? (p(), v(A, f({ key: 3 }, {
                        type: e(S).Select,
                        label: "Justify content",
                        options: Qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ze
                        }
                      }, {
                        modelValue: g.layout.justifyContent,
                        "onUpdate:modelValue": (c) => g.layout.justifyContent = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(te) ? (p(), v(A, f({ key: 4 }, {
                        type: e(S).Select,
                        label: "Columns Reserved",
                        options: Je,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: _e
                        }
                      }, {
                        modelValue: g.layout.columns,
                        "onUpdate:modelValue": (c) => g.layout.columns = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                d(E, C(B({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(je).Split
                })), {
                  split: V(({ doClose: c }) => [
                    R("div", Ml, [
                      d(E, C(B({
                        text: "Before",
                        events: {
                          click: T
                        }
                      })), null, 16),
                      d(E, C(B({
                        text: "After",
                        events: {
                          click: r
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
  }), Me({
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
  }), Ne({
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
  }), We({
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
    mapData: (m) => m.map((a) => new fe(a))
  }), Z({
    url: "/web/pages/{type}",
    name: "ls-web-pages-type",
    params: { type: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new fe(a))
  }), Z({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (m) => new fe(m)
  }), Z({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (m) => m.map((a) => new ee(a))
  }), Me({
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
  }), Ne({
    url: "/web/page/{id}",
    name: "up-web-page",
    params: {
      id: { default: void 0 },
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  }), We({
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
    m.component("lkt-web-page") === void 0 && (m.component("lkt-web-page", bl), Re("lkt-web-element-select", Al), Re("lkt-web-element-config", Nl));
  }
};
export {
  Yl as default,
  Ql as setupWebElementsHttp,
  Xl as setupWebPagesHttp
};
