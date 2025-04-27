import { defineComponent as J, useSlots as He, createElementBlock as K, openBlock as s, renderSlot as Oe, createCommentVNode as L, setBlockTracking as Se, createElementVNode as R, unref as e, createBlock as y, resolveDynamicComponent as Fe, normalizeProps as b, mergeProps as v, resolveComponent as H, createVNode as r, guardReactiveProps as B, ref as N, watch as _, computed as M, normalizeClass as G, withCtx as V, createSlots as De, nextTick as $e, Fragment as me, renderList as we, onMounted as al } from "vue";
import { WebElementLayoutType as $, ButtonType as je, WebElementType as u, WebParentType as I, WebElementController as Te, TablePermission as se, TableType as pe, WebElement as ee, WebPage as ce, FieldType as E, AccordionType as O, BannerType as Pe, ensureFieldConfig as ol, LktSettings as nl, getDefaultLktButtonWebElement as ul, ItemCrudView as dl, ItemCrudMode as he, applyTextFormat as Y, applyTextAlignment as be, AccordionToggleMode as rl } from "lkt-vue-kernel";
import { getCurrentLanguage as Le, getAvailableLanguages as il } from "lkt-i18n";
import { httpCall as xe, createHTTPGetResource as Z, createHTTPPostResource as Me, createHTTPPutResource as Ne, createHTTPDeleteResource as We } from "lkt-http-client";
import { openModal as fe, closeModal as Ke, addModal as Re } from "lkt-modal";
import { ucfirst as sl, kebabCaseToCamelCase as pl } from "lkt-string-tools";
const ml = { class: "lkt-text" }, j = /* @__PURE__ */ J({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(p, { emit: a }) {
    const C = a, o = He(), l = (w) => {
      C("input", w);
    };
    return (w, T) => (s(), K("div", ml, [
      T[0] || (Se(-1, !0), (T[0] = R("div", {
        contenteditable: w.disabled ? "false" : "true",
        class: "lkt-element-editable-text",
        onInput: (d) => l(d),
        innerHTML: w.modelValue
      }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, Se(1), T[0]),
      e(o)["web-element-actions"] ? Oe(w.$slots, "web-element-actions", { key: 0 }) : L("", !0)
    ]));
  }
}), Ce = (p, a = !1) => {
  if (!p.layout || a) return "";
  let C = [];
  p.layout.type === $.FlexRow && (!p.layout.amountOfItems || p.layout.amountOfItems.length === 0) ? C.push("lkt-flex-row") : p.layout.type === $.FlexRows && (!p.layout.amountOfItems || p.layout.amountOfItems.length === 0) ? C.push("lkt-flex-rows") : p.layout.type === $.FlexColumn && C.push("lkt-flex-column"), p.layout.amountOfItems && p.layout.amountOfItems.length > 0 && (p.layout.type === $.FlexRow ? C.push(p.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : p.layout.type === $.FlexRows ? C.push(p.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : C.push(p.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), p.layout.alignItems && p.layout.alignItems.length > 0 && C.push(p.layout.alignItems.join(" ")), p.layout.justifyContent && p.layout.justifyContent.length > 0 && C.push(p.layout.justifyContent.join(" ")), C.length > 0 && C.push("layout-mode");
  let o = C.join(" ");
  return p.layout.type === $.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
}, cl = /* @__PURE__ */ J({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(p) {
    return (a, C) => a.settings.type === "component" ? (s(), y(Fe(a.settings.component), b(v({ key: 0 }, a.settings.componentProps)), null, 16)) : L("", !0);
  }
}), fl = {
  key: 0,
  class: "lkt-element-actions"
}, W = /* @__PURE__ */ J({
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
  setup(p) {
    return (a, C) => {
      const o = H("lkt-button");
      return !a.appendingItems && a.canRenderActions ? (s(), K("div", fl, [
        r(o, b(B({
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
}), gl = { key: 8 }, Ve = /* @__PURE__ */ J({
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
  setup(p, { emit: a }) {
    const C = a, o = p, l = N(o.modelValue);
    _(() => o.modelValue, (t, n) => {
      l.value = t;
    }), _(l, (t, n) => {
      C("update:modelValue", t);
    });
    const w = N(!1), T = (t, n = "text") => {
      const Q = t.target.innerHTML.trim();
      Q !== l.value.props[n][d] && (l.value.props[n][d] = Q);
    }, d = o.lang ?? Le(), D = M(() => [
      u.LktLayoutBox,
      u.LktTextBox,
      u.LktLayoutAccordion,
      u.LktTextAccordion
    ].includes(l.value.type)), x = M(() => [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktLayout
    ].includes(l.value.type)), k = M(() => {
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
      C("crud-update");
    };
    return (t, n) => {
      var ne, ue, te, de;
      const Q = H("lkt-image"), ye = H("lkt-icon"), le = H("lkt-header"), oe = H("lkt-button"), q = H("lkt-anchor"), ve = H("lkt-banner");
      return l.value.type === e(u).LktText ? (s(), y(j, {
        key: 0,
        class: G(h.value),
        modelValue: l.value.props.text[e(d)],
        "onUpdate:modelValue": n[0] || (n[0] = (i) => l.value.props.text[e(d)] = i),
        disabled: t.disabled || t.parentType === e(I).Page,
        onInput: n[1] || (n[1] = (i) => T(i))
      }, {
        "web-element-actions": V(() => [
          r(W, b(B({
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
      }, 8, ["class", "modelValue", "disabled"])) : D.value ? (s(), y(Fe(k.value), {
        key: 1,
        icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value)
      }, De({
        "web-element-actions": V(() => [
          r(W, b(B({
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
          x.value ? (s(), y(ge, {
            key: 0,
            modelValue: l.value.children,
            "onUpdate:modelValue": n[4] || (n[4] = (i) => l.value.children = i),
            "layout-selector": e(Ce)(l.value),
            "is-child": "",
            lang: e(d),
            "is-preview": t.isPreview,
            parent: l.value,
            "parent-type": e(I).Element,
            "modal-crud-config": t.modalCrudConfig,
            "file-browser-config": t.fileBrowserConfig,
            disabled: t.disabled,
            editing: t.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (s(), y(j, {
            key: 1,
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[5] || (n[5] = (i) => l.value.props.text[e(d)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[6] || (n[6] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"]))
        ]),
        _: 2
      }, [
        (ne = l.value.config) != null && ne.hasHeader ? {
          name: "header",
          fn: V(() => [
            r(j, {
              modelValue: l.value.props.header[e(d)],
              "onUpdate:modelValue": n[2] || (n[2] = (i) => l.value.props.header[e(d)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[3] || (n[3] = (i) => T(i, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "class"])) : l.value.type === e(u).LktImage ? (s(), y(Q, {
        key: 2,
        class: G(h.value),
        src: l.value.props.src,
        alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(d)] : "",
        title: typeof l.value.props.title == "object" ? l.value.props.title[e(d)] : ""
      }, {
        text: V(() => [
          r(j, {
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[7] || (n[7] = (i) => l.value.props.text[e(d)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[8] || (n[8] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          r(W, b(B({
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
      }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(u).LktIcon ? (s(), y(ye, {
        key: 3,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value)
      }, {
        text: V(() => [
          r(j, {
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[9] || (n[9] = (i) => l.value.props.text[e(d)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[10] || (n[10] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          r(W, b(B({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktHeader ? (s(), y(le, {
        key: 4,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value)
      }, {
        text: V(() => [
          r(j, {
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[11] || (n[11] = (i) => l.value.props.text[e(d)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[12] || (n[12] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          r(W, b(B({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktButton ? (s(), y(oe, {
        key: 5,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value)
      }, {
        text: V(() => [
          r(j, {
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[13] || (n[13] = (i) => l.value.props.text[e(d)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[14] || (n[14] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          r(W, b(B({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktAnchor ? (s(), y(q, {
        key: 6,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value)
      }, {
        text: V(() => [
          r(j, {
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[15] || (n[15] = (i) => l.value.props.text[e(d)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[16] || (n[16] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        "web-element-actions": V(() => [
          r(W, b(B({
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
      }, 8, ["icon", "class"])) : l.value.type === e(u).LktTextBanner ? (s(), y(ve, {
        key: 7,
        icon: l.value.config.hasIcon ? l.value.props.icon : "",
        class: G(h.value),
        opacity: l.value.props.opacity,
        art: l.value.props.art,
        media: l.value.props.media,
        type: l.value.props.type
      }, De({
        "web-element-actions": V(() => [
          r(W, b(B({
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
          r(j, {
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[21] || (n[21] = (i) => l.value.props.text[e(d)] = i),
            disabled: t.disabled || t.parentType === e(I).Page,
            onInput: n[22] || (n[22] = (i) => T(i, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        (ue = l.value.config) != null && ue.hasHeader ? {
          name: "header",
          fn: V(() => [
            r(j, {
              modelValue: l.value.props.header[e(d)],
              "onUpdate:modelValue": n[17] || (n[17] = (i) => l.value.props.header[e(d)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[18] || (n[18] = (i) => T(i, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        (te = l.value.config) != null && te.hasSubHeader ? {
          name: "subHeader",
          fn: V(() => [
            r(j, {
              modelValue: l.value.props.subHeader[e(d)],
              "onUpdate:modelValue": n[19] || (n[19] = (i) => l.value.props.subHeader[e(d)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[20] || (n[20] = (i) => T(i, "subHeader"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(u).LktIcons ? (s(), K("section", gl, [
        (de = l.value.config) != null && de.hasHeader ? (s(), y(le, { key: 0 }, {
          text: V(() => [
            r(j, {
              modelValue: l.value.props.header[e(d)],
              "onUpdate:modelValue": n[23] || (n[23] = (i) => l.value.props.header[e(d)] = i),
              disabled: t.disabled || t.parentType === e(I).Page,
              onInput: n[24] || (n[24] = (i) => T(i, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        })) : L("", !0),
        r(j, {
          modelValue: l.value.props.text[e(d)],
          "onUpdate:modelValue": n[25] || (n[25] = (i) => l.value.props.text[e(d)] = i),
          disabled: t.disabled || t.parentType === e(I).Page,
          onInput: n[26] || (n[26] = (i) => T(i, "text"))
        }, null, 8, ["modelValue", "disabled"]),
        r(ge, {
          modelValue: l.value.subElements,
          "onUpdate:modelValue": n[27] || (n[27] = (i) => l.value.subElements = i),
          "layout-selector": e(Ce)(l.value),
          "is-child": "",
          lang: e(d),
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
            r(W, b(B({
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
      ])) : l.value.type === e(u).LktLayout ? (s(), y(ge, {
        key: 9,
        modelValue: l.value.children,
        "onUpdate:modelValue": n[28] || (n[28] = (i) => l.value.children = i),
        class: G(h.value),
        "layout-selector": e(Ce)(l.value),
        "is-child": "",
        lang: e(d),
        "is-preview": t.isPreview,
        parent: l.value,
        "parent-type": e(I).Element,
        "modal-crud-config": t.modalCrudConfig,
        "file-browser-config": t.fileBrowserConfig,
        disabled: t.disabled,
        editing: t.editing
      }, {
        "web-element-actions": V(() => [
          r(W, b(B({
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
      }, 8, ["modelValue", "class", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : l.value.type.startsWith("custom:") ? (s(), y(cl, {
        key: 10,
        settings: e(Te).getCustomWebElementSettings(l.value.type)
      }, {
        "web-element-actions": V(() => [
          r(W, b(B({
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
}, ge = /* @__PURE__ */ J({
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
  setup(p, { emit: a }) {
    const C = a, o = He(), l = p, w = N(l.modelValue), T = N(l.editing), d = N(!1);
    _(w, (k) => {
      C("update:modelValue", k);
    }, { deep: !0 }), _(T, (k) => {
      console.log("editing", k);
    }, { deep: !0 });
    const D = () => {
      if (l.isSubElement) {
        d.value = !0, $e(() => {
          d.value = !1, C("crud-update");
        });
        return;
      }
      const k = l.parentType === I.Page ? "r-web-page-children" : "r-web-element-children";
      xe(k, { id: l.parent.id }).then((P) => {
        w.value = P.data.map((h) => new ee(h)), C("crud-update");
      });
    }, x = M(() => {
      let k = [se.Update, se.Sort];
      l.isChild || k.push(se.Create), l.parentType === I.Page && k.push(se.SwitchEditMode);
      let P = l.isPreview ? pe.Table : pe.Item;
      P = pe.Item, T.value && (P = pe.Table);
      let h = "lkt-elements-table--default-grid";
      return l.isChild && (h = l.layoutSelector), {
        type: P,
        perms: k,
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
    return (k, P) => {
      const h = H("lkt-table");
      return s(), K("div", null, [
        k.parentType === e(I).Page ? (s(), K("span", yl, "Web Elements")) : L("", !0),
        r(h, v({
          class: "lkt-elements-table",
          modelValue: w.value,
          "onUpdate:modelValue": P[0] || (P[0] = (U) => w.value = U)
        }, x.value, {
          "edit-mode": T.value,
          "onUpdate:editMode": P[1] || (P[1] = (U) => T.value = U),
          "skip-table-items-container": ""
        }), {
          item: V(({ _: U, index: t }) => [
            d.value ? L("", !0) : (s(), y(Ve, {
              key: 0,
              modelValue: w.value[t],
              "onUpdate:modelValue": (n) => w.value[t] = n,
              index: t,
              lang: k.lang,
              "is-preview": k.isPreview,
              parent: k.parent,
              "parent-type": k.parentType,
              "file-browser-config": k.fileBrowserConfig,
              "modal-crud-config": k.modalCrudConfig,
              "can-render-actions": !T.value,
              disabled: k.disabled || !T.value,
              editing: T.value,
              "default-appearance": k.defaultAppearance,
              "is-sub-element": k.isSubElement,
              onCrudUpdate: D
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled", "editing", "default-appearance", "is-sub-element"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"]),
        e(o)["web-element-actions"] ? Oe(k.$slots, "web-element-actions", { key: 1 }) : L("", !0)
      ]);
    };
  }
}), vl = { class: "lkt-web-page" }, kl = { class: "lkt-grid-1 lkt-grid-3--from-768" }, bl = /* @__PURE__ */ J({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(p) {
    const a = p, C = N(new ce(a.modelValue)), o = N(null), l = () => {
      o.value.turnStoredDataIntoOriginal();
    }, w = M(() => {
      var D, x, k;
      let T = !1, d = !1;
      return T = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(D = a.crudConfig.createButton) == null ? void 0 : D.resourceData,
          ...C.value
        }
      }, d = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(x = a.crudConfig.updateButton) == null ? void 0 : x.resourceData,
          ...C.value
        }
      }, {
        ...a.crudConfig,
        createButton: T,
        updateButton: d,
        dropButton: {
          ...a.crudConfig.dropButton,
          resourceData: {
            ...(k = a.crudConfig.dropButton) == null ? void 0 : k.resourceData,
            ...C.value
          }
        }
      };
    });
    return (T, d) => {
      const D = H("lkt-field"), x = H("lkt-item-crud");
      return s(), K("section", vl, [
        r(x, v({
          ref_key: "itemCrudRef",
          ref: o,
          modelValue: C.value,
          "onUpdate:modelValue": d[0] || (d[0] = (k) => C.value = k)
        }, w.value, {
          title: C.value.name
        }), {
          item: V(({ item: k }) => [
            R("div", kl, [
              r(D, v({
                modelValue: k.name,
                "onUpdate:modelValue": (P) => k.name = P
              }, {
                type: e(E).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            C.value.id > 0 ? (s(), y(ge, {
              key: 0,
              modelValue: k.webElements,
              "onUpdate:modelValue": (P) => k.webElements = P,
              lang: e(Le)(),
              "modal-crud-config": T.modalCrudConfig,
              "file-browser-config": T.fileBrowserConfig,
              parent: C.value,
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
}), Cl = { class: "lkt-grid-1" }, wl = { class: "lkt-grid-3" }, Vl = { class: "lkt-grid-3" }, Tl = { class: "lkt-grid-3" }, Ll = { class: "lkt-grid-3" }, Bl = { class: "lkt-grid-3" }, Al = /* @__PURE__ */ J({
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
  setup(p) {
    const a = p, C = N(a.parent), o = (w) => {
      fe("lkt-web-element-config", "_", {
        element: ee.createByType(w),
        parent: C.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        Ke(a.modalName, a.modalKey);
      }, 200);
    }, l = M(() => Te.getElements());
    return (w, T) => {
      const d = H("lkt-button"), D = H("lkt-accordion"), x = H("lkt-modal");
      return s(), y(x, v({ id: "lkt-add-element-modal" }, {
        modalName: w.modalName,
        modalKey: w.modalKey,
        zIndex: w.zIndex,
        title: "LktBox Config"
      }), {
        default: V(() => [
          R("div", Cl, [
            r(D, b(B({
              type: e(O).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: V(() => [
                R("div", wl, [
                  r(d, b(B({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        o(e(u).LktText);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        o(e(u).LktHeader);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        o(e(u).LktImage);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        o(e(u).LktIcon);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        o(e(u).LktTextBox);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
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
            r(D, b(B({
              type: e(O).Auto,
              title: "Collection elements"
            })), {
              default: V(() => [
                R("div", Vl, [
                  r(d, b(B({
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
            r(D, b(B({
              type: e(O).Auto,
              title: "Containers"
            })), {
              default: V(() => [
                R("div", Tl, [
                  r(d, b(B({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
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
            r(D, b(B({
              type: e(O).Auto,
              title: "Actions"
            })), {
              default: V(() => [
                R("div", Ll, [
                  r(d, b(B({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        o(e(u).LktAnchor);
                      }
                    }
                  })), null, 16),
                  r(d, b(B({
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
            r(D, b(B({
              type: e(O).Auto,
              title: "Custom"
            })), {
              default: V(() => [
                R("div", Bl, [
                  (s(!0), K(me, null, we(l.value, (k) => (s(), y(d, v({ ref_for: !0 }, {
                    icon: k.icon,
                    text: k.label ?? k.id,
                    events: {
                      click: () => {
                        o(`custom:${k.id}`);
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
  let p = {
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
  for (let C in p) {
    let o = p[C];
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
}, hl = { class: "lkt-flex-col-9 lkt-grid-1" }, Rl = { class: "lkt-flex-col-3" }, Hl = { class: "lkt-web-element-config-scroller lkt-grid-1" }, Ol = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, Fl = { class: "lkt-grid-1" }, $l = { class: "lkt-grid-1" }, jl = { class: "lkt-grid-1" }, xl = { class: "lkt-grid-1" }, Ml = { class: "lkt-grid-1" }, Nl = /* @__PURE__ */ J({
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
  setup(p) {
    var Ie, Ue, Ee;
    const a = p, C = N(parseInt(a.modalKey)), o = N(new ee(a.element)), l = N(null), w = N(!1);
    _(() => a.modalKey, (g) => {
      C.value = parseInt(g);
    });
    const T = () => {
      let g = o.value.getClone();
      fe("lkt-web-element-config", "_", {
        element: g,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: o.value.id
      });
    }, d = () => {
      let g = o.value.getClone();
      fe("lkt-web-element-config", "_", {
        element: g,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: o.value.id
      });
    }, D = o.value.getCustomSettings(), x = il(), k = Le(), P = !D || ((Ie = D.options) == null ? void 0 : Ie.textEditor) === !0, h = [
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
    ].includes(o.value.type), Q = [
      u.LktText
    ].includes(o.value.type), ye = [
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
    ].includes(o.value.type), q = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout, u.LktIcons].includes(o.value.type), ve = [u.LktImage].includes(o.value.type), ne = [u.LktLayoutAccordion, u.LktTextAccordion].includes(o.value.type), ue = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(o.value.type), te = [$.FlexRow, $.FlexRows].includes((Ee = (Ue = a.parent) == null ? void 0 : Ue.layout) == null ? void 0 : Ee.type), de = Il(), i = Ul(), ze = El(), Ge = Sl(), Je = [
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
    ], re = (g, m) => {
      if (g.length > 0) {
        let z = String(m.value), F = "";
        if (z.includes("--from") && (F = "--" + z.split("--")[1]), z.includes("--to") && (F = "--" + z.split("--")[1]), F !== "") {
          let A = g.find((X) => String(X).includes(F));
          if (A)
            return A === m.value;
        }
        let S = g.find((A) => !String(A).includes("--"));
        if (S)
          return S === z || z.includes("--");
      }
      return !0;
    }, Xe = (g) => {
      var m;
      return re(
        ((m = o.value.layout) == null ? void 0 : m.amountOfItems) ?? [],
        g
      );
    }, Ye = (g) => {
      var m;
      return re(
        ((m = o.value.layout) == null ? void 0 : m.alignItems) ?? [],
        g
      );
    }, Ze = (g) => {
      var m;
      return re(
        ((m = o.value.layout) == null ? void 0 : m.justifyContent) ?? [],
        g
      );
    }, _e = (g) => {
      var m;
      return re(
        ((m = o.value.layout) == null ? void 0 : m.columns) ?? [],
        g
      );
    }, el = () => {
      o.value.addSubElement();
    }, Be = M(() => {
      let g = Te.getCustomAppearance(o.value.type);
      return Object.keys(g).length > 0 ? ol({ options: g.options }, nl.defaultFieldElementCustomClassField) : void 0;
    }), Ae = M(() => sl(pl(o.value.type)) + " Config"), ke = (g, m) => {
      m || (m = o.value.props), m.alt = g[0].nameData, m.title = g[0].nameData;
    };
    _(() => o.value.config.amountOfCallToActions, (g) => {
      console.log("updated amount of cta: ", g);
      let m = o.value.config.callToActions.length;
      g > m ? o.value.config.callToActions.push(ul()) : o.value.config.callToActions.splice(g, 1);
    }), al(() => {
      console.log("mounted: ", a), !o.value.id && o.value.type === u.LktLayout && (w.value = !0, $e(() => {
        var g;
        xe(a.modalCrudConfig.createButton.resource, {
          ...(g = a.modalCrudConfig.createButton) == null ? void 0 : g.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((m) => {
          console.log("created layout", m), o.value.id = m.data.id, console.log("newid:", o.value.id), Ke(a.modalName, a.modalKey), setTimeout(() => {
            fe(a.modalName, m.data.id, {
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
      var S, A, X;
      let g = !1, m = !1;
      !(!o.value.id && o.value.type === u.LktLayout) && !a.isSubElement && (g = {
        ...a.modalCrudConfig.createButton,
        resourceData: {
          ...(S = a.modalCrudConfig.createButton) == null ? void 0 : S.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        },
        events: {
          click: ie
        }
      }, m = {
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
        mode: C.value > 0 ? he.Update : he.Create,
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
          id: C.value
        },
        ...a.modalCrudConfig,
        createButton: g,
        updateButton: m,
        dropButton: a.isSubElement ? !1 : {
          ...a.modalCrudConfig.dropButton,
          resourceData: {
            ...(X = a.modalCrudConfig.dropButton) == null ? void 0 : X.resourceData,
            ...o.value
          },
          events: {
            click: ie
          }
        },
        enabledSaveWithoutChanges: !0
      };
    });
    return (g, m) => {
      const z = H("lkt-loader"), F = H("lkt-accordion"), S = H("lkt-button"), A = H("lkt-field"), X = H("lkt-item-crud");
      return s(), y(X, v({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: o.value,
        "onUpdate:modelValue": m[11] || (m[11] = (f) => o.value = f)
      }, tl.value), {
        item: V(({ item: f }) => [
          w.value ? (s(), y(z, { key: 0 })) : (s(), K("div", Pl, [
            R("div", hl, [
              r(Ve, {
                modelValue: o.value,
                "onUpdate:modelValue": m[0] || (m[0] = (c) => o.value = c),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": g.modalCrudConfig,
                parent: o.value,
                "parent-type": e(I).Element,
                "default-appearance": g.defaultAppearance,
                onCrudUpdate: g.onUpdate
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type", "default-appearance", "onCrudUpdate"]),
              (s(!0), K(me, null, we(e(x), (c) => (s(), K(me, null, [
                c !== e(k) ? (s(), y(F, v({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(O).Auto,
                  title: c
                }), {
                  default: V(() => [
                    r(Ve, {
                      modelValue: o.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (ae) => o.value = ae),
                      lang: c,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": g.modalCrudConfig,
                      parent: o.value,
                      "parent-type": e(I).Element,
                      "default-appearance": g.defaultAppearance
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type", "default-appearance"])
                  ]),
                  _: 2
                }, 1040)) : L("", !0)
              ], 64))), 256))
            ]),
            R("div", Rl, [
              R("div", Hl, [
                e(ue) ? (s(), y(S, b(v({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: g.fileBrowserConfig,
                    modalCrudConfig: g.modalCrudConfig,
                    parent: o.value,
                    parentType: e(I).Element,
                    onUpdate: g.onCrudUpdate
                  }
                })), null, 16)) : L("", !0),
                f.type === e(u).LktIcons ? (s(), y(S, b(v({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: el
                  }
                })), null, 16)) : L("", !0),
                e(P) ? (s(), y(F, b(v({ key: 2 }, {
                  type: e(O).Always,
                  title: "Text editor"
                })), {
                  default: V(() => [
                    R("div", Ol, [
                      r(S, v({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: m[2] || (m[2] = () => e(Y)("bold"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: m[3] || (m[3] = () => e(Y)("italic"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: m[4] || (m[4] = () => e(Y)("underline"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: m[5] || (m[5] = () => e(Y)("strikeThrough"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: m[6] || (m[6] = () => e(Y)("superscript"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: m[7] || (m[7] = () => e(Y)("subscript"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: m[8] || (m[8] = () => e(be)("left"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: m[9] || (m[9] = () => e(be)("center"))
                      }), null, 16),
                      r(S, v({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: m[10] || (m[10] = () => e(be)("right"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : L("", !0),
                !e(Q) && !e(ye) ? (s(), y(F, b(v({ key: 3 }, {
                  type: e(O).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(rl).Display
                })), {
                  default: V(() => [
                    R("div", Fl, [
                      Be.value ? (s(), y(A, v({ key: 0 }, {
                        type: e(E).Select,
                        ...Be.value,
                        canClear: !0
                      }, {
                        modelValue: f.props.class,
                        "onUpdate:modelValue": (c) => f.props.class = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(h) ? (s(), y(A, v({ key: 1 }, {
                        type: e(E).Switch,
                        label: "Has header"
                      }, {
                        modelValue: f.config.hasHeader,
                        "onUpdate:modelValue": (c) => f.config.hasHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(U) ? (s(), y(A, v({ key: 2 }, {
                        type: e(E).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: f.config.hasSubHeader,
                        "onUpdate:modelValue": (c) => f.config.hasSubHeader = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(oe) ? (s(), y(A, v({ key: 3 }, {
                        type: e(E).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (c) => f.config.hasIcon = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(oe) ? (s(), y(A, v({ key: 4 }, {
                        type: e(E).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Dl)
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (c) => f.props.icon = c,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : L("", !0),
                      e(ve) ? (s(), y(A, v({ key: 5 }, {
                        type: e(E).Image,
                        label: "Image",
                        fileBrowserConfig: g.fileBrowserConfig
                      }, {
                        modelValue: f.props.src,
                        "onUpdate:modelValue": (c) => f.props.src = c,
                        onPickedFiles: ke
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(n) ? (s(), y(A, v({ key: 6 }, {
                        type: e(E).Image,
                        label: "Media content",
                        fileBrowserConfig: g.fileBrowserConfig
                      }, {
                        modelValue: f.props.media.src,
                        "onUpdate:modelValue": (c) => f.props.media.src = c,
                        onPickedFiles: (c) => ke(c, f.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      e(n) ? (s(), y(A, v({ key: 7 }, {
                        type: e(E).Select,
                        label: "Type",
                        options: e(i)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (c) => f.props.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(t) ? (s(), y(A, v({ key: 8 }, {
                        type: e(E).Image,
                        label: "Background Image",
                        fileBrowserConfig: g.fileBrowserConfig
                      }, {
                        modelValue: f.props.art.src,
                        "onUpdate:modelValue": (c) => f.props.art.src = c,
                        onPickedFiles: (c) => ke(c, f.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      R("div", null, [
                        e(le) ? (s(), y(A, v({ key: 0 }, {
                          type: e(E).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (c) => f.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                        e(le) ? (s(), y(A, v({ key: 1 }, {
                          type: e(E).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (c) => f.props.opacity = c
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                      ]),
                      e(n) ? (s(), y(A, v({ key: 9 }, {
                        type: e(E).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: f.config.amountOfCallToActions,
                        "onUpdate:modelValue": (c) => f.config.amountOfCallToActions = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                f.config.amountOfCallToActions > 0 ? (s(!0), K(me, { key: 4 }, we(f.config.callToActions, (c) => (s(), y(F, v({ ref_for: !0 }, {
                  type: e(O).Auto,
                  title: "CTA #1"
                }), {
                  default: V(() => [
                    R("div", $l, [
                      r(A, v({ ref_for: !0 }, {
                        type: e(E).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: c.config.hasIcon,
                        "onUpdate:modelValue": (ae) => c.config.hasIcon = ae
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      r(A, v({ ref_for: !0 }, {
                        type: e(E).Text,
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
                e(ne) ? (s(), y(F, b(v({ key: 5 }, {
                  type: e(O).Auto,
                  title: "Accordion Config"
                })), {
                  default: V(() => [
                    R("div", jl, [
                      r(A, v({
                        type: e(E).Select,
                        label: "Type",
                        options: e(de)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (c) => f.props.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                e(q) || e(te) ? (s(), y(F, b(v({ key: 6 }, {
                  type: e(O).Auto,
                  title: "Layout Config"
                })), {
                  default: V(() => [
                    R("div", xl, [
                      e(q) ? (s(), y(A, v({ key: 0 }, {
                        type: e(E).Select,
                        label: "Type",
                        options: e(ze)
                      }, {
                        modelValue: f.layout.type,
                        "onUpdate:modelValue": (c) => f.layout.type = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(q) && f.layout.type !== e($).FlexColumn ? (s(), y(A, v({ key: 1 }, {
                        type: e(E).Select,
                        label: f.layout.type === e($).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Ge),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Xe
                        }
                      }, {
                        modelValue: f.layout.amountOfItems,
                        "onUpdate:modelValue": (c) => f.layout.amountOfItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(q) ? (s(), y(A, v({ key: 2 }, {
                        type: e(E).Select,
                        label: "Align items",
                        options: qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ye
                        }
                      }, {
                        modelValue: f.layout.alignItems,
                        "onUpdate:modelValue": (c) => f.layout.alignItems = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(q) ? (s(), y(A, v({ key: 3 }, {
                        type: e(E).Select,
                        label: "Justify content",
                        options: Qe,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ze
                        }
                      }, {
                        modelValue: f.layout.justifyContent,
                        "onUpdate:modelValue": (c) => f.layout.justifyContent = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(te) ? (s(), y(A, v({ key: 4 }, {
                        type: e(E).Select,
                        label: "Columns Reserved",
                        options: Je,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: _e
                        }
                      }, {
                        modelValue: f.layout.columns,
                        "onUpdate:modelValue": (c) => f.layout.columns = c
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                r(S, b(B({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(je).Split
                })), {
                  split: V(({ doClose: c }) => [
                    R("div", Ml, [
                      r(S, b(B({
                        text: "Before",
                        events: {
                          click: T
                        }
                      })), null, 16),
                      r(S, b(B({
                        text: "After",
                        events: {
                          click: d
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
    mapData: (p) => new ee(p)
  }), Z({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (p) => p.map((a) => new ee(a))
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
    mapData: (p) => p.map((a) => new ce(a))
  }), Z({
    url: "/web/pages/{type}",
    name: "ls-web-pages-type",
    params: { type: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (p) => p.map((a) => new ce(a))
  }), Z({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (p) => new ce(p)
  }), Z({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (p) => p.map((a) => new ee(a))
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
  install: (p) => {
    p.component("lkt-web-page") === void 0 && (p.component("lkt-web-page", bl), Re("lkt-web-element-select", Al), Re("lkt-web-element-config", Nl));
  }
};
export {
  Yl as default,
  Ql as setupWebElementsHttp,
  Xl as setupWebPagesHttp
};
