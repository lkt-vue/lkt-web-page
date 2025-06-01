import { defineComponent as J, useSlots as Me, createElementBlock as x, openBlock as p, renderSlot as We, createCommentVNode as V, setBlockTracking as Fe, createElementVNode as H, unref as e, createBlock as v, resolveDynamicComponent as Ne, normalizeProps as w, mergeProps as c, resolveComponent as h, createVNode as d, guardReactiveProps as I, ref as R, watch as Z, computed as M, normalizeClass as Q, createSlots as z, withCtx as T, nextTick as Ue, Fragment as ke, renderList as Be, onMounted as dl } from "vue";
import { WebElementLayoutType as j, ButtonType as Ke, WebElementType as u, WebParentType as S, WebElementController as Se, TableType as ce, TablePermission as ge, WebElement as ae, WebPage as te, FormInstance as X, AccordionToggleMode as Ae, AccordionType as O, FieldAutoValidationTrigger as ye, FieldType as E, WebPageStatus as He, BannerType as Oe, ensureFieldConfig as rl, LktSettings as il, getDefaultLktButtonWebElement as sl, ItemCrudView as pl, ItemCrudMode as $e, applyTextFormat as Y, applyTextAlignment as ve } from "lkt-vue-kernel";
import { getCurrentLanguage as Ce, getAvailableLanguages as ml } from "lkt-i18n";
import { httpCall as xe, createHTTPGetResource as ee, createHTTPPostResource as ze, createHTTPPutResource as Ge, createHTTPDeleteResource as Je } from "lkt-http-client";
import { openModal as be, closeModal as qe, addModal as je } from "lkt-modal";
import { ucfirst as fl, kebabCaseToCamelCase as cl } from "lkt-string-tools";
import { useRoute as gl } from "vue-router";
const yl = { class: "lkt-text" }, N = /* @__PURE__ */ J({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(i, { emit: a }) {
    const g = a, o = Me(), t = (b) => {
      g("input", b);
    };
    return (b, L) => (p(), x("div", yl, [
      L[0] || (Fe(-1, !0), (L[0] = H("div", {
        contenteditable: b.disabled ? "false" : "true",
        class: "lkt-element-editable-text",
        onInput: (r) => t(r),
        innerHTML: b.modelValue
      }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, Fe(1), L[0]),
      e(o)["web-element-actions"] ? We(b.$slots, "web-element-actions", { key: 0 }) : V("", !0)
    ]));
  }
}), Le = (i, a = !1) => {
  if (!i.layout || a) return "";
  let g = [];
  i.layout.type === j.FlexRow && (!i.layout.amountOfItems || i.layout.amountOfItems.length === 0) ? g.push("lkt-flex-row") : i.layout.type === j.FlexRows && (!i.layout.amountOfItems || i.layout.amountOfItems.length === 0) ? g.push("lkt-flex-rows") : i.layout.type === j.FlexColumn && g.push("lkt-flex-column"), i.layout.amountOfItems && i.layout.amountOfItems.length > 0 && (i.layout.type === j.FlexRow ? g.push(i.layout.amountOfItems.map((t) => `lkt-flex-row-${t}`).join(" ")) : i.layout.type === j.FlexRows ? g.push(i.layout.amountOfItems.map((t) => `lkt-flex-rows-${t}`).join(" ")) : g.push(i.layout.amountOfItems.map((t) => `lkt-grid-${t}`).join(" "))), i.layout.alignItems && i.layout.alignItems.length > 0 && g.push(i.layout.alignItems.join(" ")), i.layout.justifyContent && i.layout.justifyContent.length > 0 && g.push(i.layout.justifyContent.join(" ")), g.length > 0 && g.push("layout-mode");
  let o = g.join(" ");
  return i.layout.type === j.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
}, vl = /* @__PURE__ */ J({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(i) {
    return (a, g) => a.settings.type === "component" ? (p(), v(Ne(a.settings.component), w(c({ key: 0 }, a.settings.componentProps)), null, 16)) : V("", !0);
  }
}), kl = {
  key: 0,
  class: "lkt-element-actions"
}, G = /* @__PURE__ */ J({
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
  setup(i) {
    return (a, g) => {
      const o = h("lkt-button");
      return !a.appendingItems && a.canRenderActions ? (p(), x("div", kl, [
        d(o, w(I({
          type: e(Ke).Button,
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
}), bl = { key: 8 }, Ie = /* @__PURE__ */ J({
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
  setup(i, { emit: a }) {
    const g = a, o = i, t = R(o.modelValue);
    Z(() => o.modelValue, (l, n) => {
      t.value = l;
    }), Z(t, (l, n) => {
      g("update:modelValue", l);
    });
    const b = R(!1), L = (l, n = "text") => {
      const q = l.target.innerHTML.trim();
      q !== t.value.props[n][r] && (t.value.props[n][r] = q);
    }, r = o.lang ?? Ce(), F = M(() => [
      u.LktLayoutBox,
      u.LktTextBox,
      u.LktLayoutAccordion,
      u.LktTextAccordion
    ].includes(t.value.type)), W = M(() => [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktLayout
    ].includes(t.value.type)), D = M(() => {
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
    }), C = M(() => t.value.props.class ? t.value.props.class : o.defaultAppearance), B = M(() => `lkt-element is-${t.value.type} is-${t.value.id} ${C.value}`), A = () => {
      var l;
      typeof ((l = o.events) == null ? void 0 : l.onUpdate) == "function" && o.events.onUpdate(), g("crud-update");
    };
    return (l, n) => {
      var se, pe, ne, me;
      const q = h("lkt-image"), we = h("lkt-icon"), oe = h("lkt-header"), ie = h("lkt-button"), _ = h("lkt-anchor"), Te = h("lkt-banner");
      return t.value.type === e(u).LktText ? (p(), v(N, {
        key: 0,
        class: Q(B.value),
        modelValue: t.value.props.text[e(r)],
        "onUpdate:modelValue": n[0] || (n[0] = (s) => t.value.props.text[e(r)] = s),
        disabled: l.disabled || l.parentType === e(S).Page,
        onInput: n[1] || (n[1] = (s) => L(s))
      }, z({ _: 2 }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1032, ["class", "modelValue", "disabled"])) : F.value ? (p(), v(Ne(D.value), {
        key: 1,
        icon: t.value.config.hasHeader && t.value.config.hasIcon ? t.value.props.icon : "",
        class: Q(B.value)
      }, z({
        default: T(() => [
          W.value ? (p(), v(re, {
            key: 0,
            modelValue: t.value.children,
            "onUpdate:modelValue": n[4] || (n[4] = (s) => t.value.children = s),
            "layout-selector": e(Le)(t.value),
            "is-child": "",
            lang: e(r),
            "is-preview": l.isPreview,
            parent: t.value,
            "parent-type": e(S).Element,
            "modal-crud-config": l.modalCrudConfig,
            "file-browser-config": l.fileBrowserConfig,
            disabled: l.disabled,
            editing: l.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), v(N, {
            key: 1,
            modelValue: t.value.props.text[e(r)],
            "onUpdate:modelValue": n[5] || (n[5] = (s) => t.value.props.text[e(r)] = s),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[6] || (n[6] = (s) => L(s, "text"))
          }, null, 8, ["modelValue", "disabled"]))
        ]),
        _: 2
      }, [
        (se = t.value.config) != null && se.hasHeader ? {
          name: "header",
          fn: T(() => [
            d(N, {
              modelValue: t.value.props.header[e(r)],
              "onUpdate:modelValue": n[2] || (n[2] = (s) => t.value.props.header[e(r)] = s),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[3] || (n[3] = (s) => L(s, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "1"
        }
      ]), 1032, ["icon", "class"])) : t.value.type === e(u).LktImage ? (p(), v(q, {
        key: 2,
        class: Q(B.value),
        src: t.value.props.src,
        alt: typeof t.value.props.alt == "object" ? t.value.props.alt[e(r)] : "",
        title: typeof t.value.props.title == "object" ? t.value.props.title[e(r)] : ""
      }, z({
        text: T(() => [
          d(N, {
            modelValue: t.value.props.text[e(r)],
            "onUpdate:modelValue": n[7] || (n[7] = (s) => t.value.props.text[e(r)] = s),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[8] || (n[8] = (s) => L(s, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1032, ["class", "src", "alt", "title"])) : t.value.type === e(u).LktIcon ? (p(), v(we, {
        key: 3,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: Q(B.value)
      }, z({
        text: T(() => [
          d(N, {
            modelValue: t.value.props.text[e(r)],
            "onUpdate:modelValue": n[9] || (n[9] = (s) => t.value.props.text[e(r)] = s),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[10] || (n[10] = (s) => L(s, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1032, ["icon", "class"])) : t.value.type === e(u).LktHeader ? (p(), v(oe, w(c({ key: 4 }, {
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: B.value
      })), z({
        text: T(() => [
          d(N, {
            modelValue: t.value.props.text[e(r)],
            "onUpdate:modelValue": n[11] || (n[11] = (s) => t.value.props.text[e(r)] = s),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[12] || (n[12] = (s) => L(s, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1040)) : t.value.type === e(u).LktButton ? (p(), v(ie, {
        key: 5,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: Q(B.value)
      }, z({
        text: T(() => [
          d(N, {
            modelValue: t.value.props.text[e(r)],
            "onUpdate:modelValue": n[13] || (n[13] = (s) => t.value.props.text[e(r)] = s),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[14] || (n[14] = (s) => L(s, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1032, ["icon", "class"])) : t.value.type === e(u).LktAnchor ? (p(), v(_, {
        key: 6,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: Q(B.value)
      }, z({
        text: T(() => [
          d(N, {
            modelValue: t.value.props.text[e(r)],
            "onUpdate:modelValue": n[15] || (n[15] = (s) => t.value.props.text[e(r)] = s),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[16] || (n[16] = (s) => L(s, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1032, ["icon", "class"])) : t.value.type === e(u).LktTextBanner ? (p(), v(Te, {
        key: 7,
        icon: t.value.config.hasIcon ? t.value.props.icon : "",
        class: Q(B.value),
        opacity: t.value.props.opacity,
        art: t.value.props.art,
        media: t.value.props.media,
        type: t.value.props.type
      }, z({
        default: T(() => [
          d(N, {
            modelValue: t.value.props.text[e(r)],
            "onUpdate:modelValue": n[21] || (n[21] = (s) => t.value.props.text[e(r)] = s),
            disabled: l.disabled || l.parentType === e(S).Page,
            onInput: n[22] || (n[22] = (s) => L(s, "text"))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 2
      }, [
        (pe = t.value.config) != null && pe.hasHeader ? {
          name: "header",
          fn: T(() => [
            d(N, {
              modelValue: t.value.props.header[e(r)],
              "onUpdate:modelValue": n[17] || (n[17] = (s) => t.value.props.header[e(r)] = s),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[18] || (n[18] = (s) => L(s, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "0"
        } : void 0,
        (ne = t.value.config) != null && ne.hasSubHeader ? {
          name: "subHeader",
          fn: T(() => [
            d(N, {
              modelValue: t.value.props.subHeader[e(r)],
              "onUpdate:modelValue": n[19] || (n[19] = (s) => t.value.props.subHeader[e(r)] = s),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[20] || (n[20] = (s) => L(s, "subHeader"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          key: "1"
        } : void 0,
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "2"
        }
      ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : t.value.type === e(u).LktIcons ? (p(), x("section", bl, [
        (me = t.value.config) != null && me.hasHeader ? (p(), v(oe, { key: 0 }, {
          text: T(() => [
            d(N, {
              modelValue: t.value.props.header[e(r)],
              "onUpdate:modelValue": n[23] || (n[23] = (s) => t.value.props.header[e(r)] = s),
              disabled: l.disabled || l.parentType === e(S).Page,
              onInput: n[24] || (n[24] = (s) => L(s, "header"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        })) : V("", !0),
        d(N, {
          modelValue: t.value.props.text[e(r)],
          "onUpdate:modelValue": n[25] || (n[25] = (s) => t.value.props.text[e(r)] = s),
          disabled: l.disabled || l.parentType === e(S).Page,
          onInput: n[26] || (n[26] = (s) => L(s, "text"))
        }, null, 8, ["modelValue", "disabled"]),
        d(re, c({
          modelValue: t.value.subElements,
          "onUpdate:modelValue": n[27] || (n[27] = (s) => t.value.subElements = s)
        }, {
          layoutSelector: e(Le)(t.value),
          isChild: !0,
          isSubElement: !0,
          lang: e(r),
          parent: t.value,
          isPreview: l.isPreview,
          modalCrudConfig: l.modalCrudConfig,
          fileBrowserConfig: l.fileBrowserConfig,
          disabled: l.disabled,
          editing: l.editing,
          parentType: e(S).Element,
          defaultAppearance: t.value.props.class,
          events: {
            onSubElementUpdate: A
          }
        }), z({ _: 2 }, [
          l.disabled ? void 0 : {
            name: "web-element-actions",
            fn: T(() => [
              d(G, w(I({
                webElement: t.value,
                appendingItems: b.value,
                canRenderActions: l.canRenderActions,
                parent: l.parent,
                parentType: l.parentType,
                fileBrowserConfig: l.fileBrowserConfig,
                modalCrudConfig: l.modalCrudConfig,
                defaultAppearance: l.defaultAppearance,
                isSubElement: l.isSubElement,
                onUpdate: A
              })), null, 16)
            ]),
            key: "0"
          }
        ]), 1040, ["modelValue"])
      ])) : t.value.type === e(u).LktLayout ? (p(), v(re, {
        key: 9,
        modelValue: t.value.children,
        "onUpdate:modelValue": n[28] || (n[28] = (s) => t.value.children = s),
        class: Q(B.value),
        "layout-selector": e(Le)(t.value),
        "is-child": "",
        lang: e(r),
        "is-preview": l.isPreview,
        parent: t.value,
        "parent-type": e(S).Element,
        "modal-crud-config": l.modalCrudConfig,
        "file-browser-config": l.fileBrowserConfig,
        disabled: l.disabled,
        editing: l.editing
      }, z({ _: 2 }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1032, ["modelValue", "class", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : t.value.type.startsWith("custom:") ? (p(), v(vl, {
        key: 10,
        settings: e(Se).getCustomWebElementSettings(t.value.type)
      }, z({ _: 2 }, [
        l.disabled ? void 0 : {
          name: "web-element-actions",
          fn: T(() => [
            d(G, w(I({
              webElement: t.value,
              appendingItems: b.value,
              canRenderActions: l.canRenderActions,
              parent: l.parent,
              parentType: l.parentType,
              fileBrowserConfig: l.fileBrowserConfig,
              modalCrudConfig: l.modalCrudConfig,
              defaultAppearance: l.defaultAppearance,
              isSubElement: l.isSubElement,
              onUpdate: A
            })), null, 16)
          ]),
          key: "0"
        }
      ]), 1032, ["settings"])) : V("", !0);
    };
  }
}), Cl = { class: "lkt-web-elements" }, wl = {
  key: 0,
  class: "like-lkt-field-label"
}, re = /* @__PURE__ */ J({
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
  setup(i, { emit: a }) {
    const g = a, o = Me(), t = i, b = R(t.modelValue), L = R(t.editing), r = R(!1);
    Z(b, (C) => {
      g("update:modelValue", C);
    }, { deep: !0 });
    const F = () => {
      if (t.isSubElement) {
        r.value = !0, Ue(() => {
          r.value = !1, g("crud-update");
        });
        return;
      }
      const C = t.parentType === S.Page ? "r-web-page-children" : "r-web-element-children";
      xe(C, { id: t.parent.id }).then((B) => {
        b.value = B.data.map((A) => new ae(A)), g("crud-update");
      });
    }, W = M(() => {
      let C = t.isPreview ? ce.Table : ce.Item;
      C = ce.Item;
      let B = "lkt-elements-table--default-grid";
      if (t.isChild && (B = t.layoutSelector), t.disabled)
        return {
          type: C,
          itemsContainerClass: B
        };
      let A = [ge.Update, ge.Sort];
      return t.isChild || A.push(ge.Create), t.parentType === S.Page && A.push(ge.SwitchEditMode), L.value && (C = ce.Table), {
        type: C,
        perms: A,
        itemsContainerClass: B,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (l) => {
          if (!l.layout || t.isPreview) return "";
          let n = [];
          return l.layout.columns && l.layout.columns.length > 0 && n.push(l.layout.columns.join(" ")), n.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: t.isPreview || L.value,
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
            onUpdate: F
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
      var C;
      typeof ((C = t.events) == null ? void 0 : C.onSubElementUpdate) == "function" && t.events.onSubElementUpdate();
    };
    return (C, B) => {
      const A = h("lkt-table");
      return p(), x("div", Cl, [
        !C.disabled && C.parentType === e(S).Page ? (p(), x("span", wl, "Web Elements")) : V("", !0),
        d(A, c({
          class: "lkt-elements-table",
          modelValue: b.value,
          "onUpdate:modelValue": B[0] || (B[0] = (l) => b.value = l)
        }, W.value, {
          "edit-mode": L.value,
          "onUpdate:editMode": B[1] || (B[1] = (l) => L.value = l),
          "skip-table-items-container": ""
        }), {
          item: T(({ _: l, index: n }) => [
            r.value ? V("", !0) : (p(), v(Ie, c({
              key: 0,
              modelValue: b.value[n],
              "onUpdate:modelValue": (q) => b.value[n] = q
            }, {
              index: n,
              lang: C.lang,
              isPreview: C.isPreview,
              isSubElement: C.isSubElement,
              parent: C.parent,
              parentType: C.parentType,
              fileBrowserConfig: C.fileBrowserConfig,
              modalCrudConfig: C.modalCrudConfig,
              editing: L.value,
              defaultAppearance: C.defaultAppearance,
              canRenderActions: !L.value,
              disabled: C.disabled || !L.value,
              events: {
                onUpdate: D
              }
            }, { onCrudUpdate: F }), null, 16, ["modelValue", "onUpdate:modelValue"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"]),
        e(o)["web-element-actions"] ? We(C.$slots, "web-element-actions", { key: 1 }) : V("", !0)
      ]);
    };
  }
}), Tl = { class: "lkt-web-page" }, Vl = /* @__PURE__ */ J({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(i) {
    const a = i, g = R(new te(a.modelValue)), o = R(null), t = R(!1), b = R(["create", "switch-edit-mode"]), L = () => {
      o.value.turnStoredDataIntoOriginal();
    }, r = M(() => [
      { value: "draft", label: "Draft" },
      { value: "public", label: "Public" },
      { value: "scheduled", label: "Scheduled" }
    ]);
    Z(() => g.value.nameData, () => {
      g.value.updateSlug();
    }, { deep: !0 });
    const F = M(() => ({
      items: [
        X.mkFormItemConfig({
          container: {
            tag: "lkt-accordion",
            props: {
              type: O.Always,
              title: "Main data",
              toggleMode: Ae.Height
            }
          },
          uiConfig: {
            formClass: "lkt-grid-1 lkt-grid-3--from-768"
          },
          items: [
            X.mkFieldItemConfig("nameData", {
              type: E.Text,
              label: "Name",
              mandatory: !0,
              canUndo: !0,
              canI18n: !0,
              validation: {
                trigger: ye.Blur
              }
            }),
            X.mkFieldItemConfig("status", {
              type: E.Select,
              label: "Status",
              mandatory: !0,
              canUndo: !0,
              options: r.value,
              validation: {
                trigger: ye.Blur
              }
            }),
            X.mkFieldItemConfig("scheduledDate", {
              type: E.DateTime,
              label: "Scheduled date",
              mandatory: g.value.status === He.Scheduled,
              canUndo: !0,
              validation: {
                trigger: ye.Blur
              }
            }, {}, { canRender: g.value.status === He.Scheduled })
          ]
        }),
        X.mkFormItemConfig({
          container: {
            tag: "lkt-accordion",
            props: {
              type: O.Auto,
              title: "SEO",
              toggleMode: Ae.Height
            }
          },
          uiConfig: {
            formClass: "lkt-grid-1 lkt-grid-3--from-768"
          },
          items: [
            X.mkFieldItemConfig("slugData", {
              type: E.Text,
              label: "Slug",
              mandatory: !0,
              readMode: !0,
              canI18n: !0,
              validation: {
                trigger: ye.Blur
              }
            }),
            X.mkFieldItemConfig("keywords", {
              type: E.Select,
              label: "Keywords",
              multiple: !0,
              canUndo: !0,
              canTag: !0
            })
          ]
        }),
        X.mkSlotItemConfig("web-elements", {
          canRender: g.value.id > 0
        })
      ]
    })), W = M(() => {
      var B, A, l;
      let D = !1, C = !1;
      return D = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(B = a.crudConfig.createButton) == null ? void 0 : B.resourceData,
          ...g.value
        }
      }, C = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(A = a.crudConfig.updateButton) == null ? void 0 : A.resourceData,
          ...g.value
        }
      }, {
        ...a.crudConfig,
        createButton: D,
        updateButton: C,
        form: F.value,
        dropButton: {
          ...a.crudConfig.dropButton,
          resourceData: {
            ...(l = a.crudConfig.dropButton) == null ? void 0 : l.resourceData,
            ...g.value
          }
        }
      };
    });
    return (D, C) => {
      const B = h("lkt-item-crud");
      return p(), x("section", Tl, [
        d(B, c({
          ref_key: "itemCrudRef",
          ref: o
        }, W.value, {
          modelValue: g.value,
          "onUpdate:modelValue": C[1] || (C[1] = (A) => g.value = A),
          editing: t.value,
          "onUpdate:editing": C[2] || (C[2] = (A) => t.value = A),
          perms: b.value,
          "onUpdate:perms": C[3] || (C[3] = (A) => b.value = A),
          title: g.value.name === "" ? "Page name" : g.value.name
        }), {
          "web-elements": T(() => [
            g.value.id > 0 ? (p(), v(re, {
              key: 0,
              modelValue: g.value.webElements,
              "onUpdate:modelValue": C[0] || (C[0] = (A) => g.value.webElements = A),
              lang: e(Ce)(),
              "modal-crud-config": D.modalCrudConfig,
              "file-browser-config": D.fileBrowserConfig,
              parent: g.value,
              "parent-type": e(S).Page,
              "is-preview": !1,
              onCrudUpdate: L
            }, null, 8, ["modelValue", "lang", "modal-crud-config", "file-browser-config", "parent", "parent-type"])) : V("", !0)
          ]),
          _: 1
        }, 16, ["modelValue", "editing", "perms", "title"])
      ]);
    };
  }
}), Ll = { class: "lkt-grid-1" }, Bl = { class: "lkt-grid-3" }, Al = { class: "lkt-grid-3" }, Il = { class: "lkt-grid-3" }, Ul = { class: "lkt-grid-3" }, Sl = { class: "lkt-grid-3" }, El = /* @__PURE__ */ J({
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
  setup(i) {
    const a = i, g = R(a.parent), o = (b) => {
      be("lkt-web-element-config", "_", {
        element: ae.createByType(b),
        parent: g.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        qe(a.modalName, a.modalKey);
      }, 200);
    }, t = M(() => Se.getElements());
    return (b, L) => {
      const r = h("lkt-button"), F = h("lkt-accordion"), W = h("lkt-modal");
      return p(), v(W, c({ id: "lkt-add-element-modal" }, {
        modalName: b.modalName,
        modalKey: b.modalKey,
        zIndex: b.zIndex,
        title: "LktBox Config"
      }), {
        default: T(() => [
          H("div", Ll, [
            d(F, w(I({
              type: e(O).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: T(() => [
                H("div", Bl, [
                  d(r, w(I({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        o(e(u).LktText);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        o(e(u).LktHeader);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        o(e(u).LktImage);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        o(e(u).LktIcon);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        o(e(u).LktTextBox);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
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
            d(F, w(I({
              type: e(O).Auto,
              title: "Collection elements"
            })), {
              default: T(() => [
                H("div", Al, [
                  d(r, w(I({
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
            d(F, w(I({
              type: e(O).Auto,
              title: "Containers"
            })), {
              default: T(() => [
                H("div", Il, [
                  d(r, w(I({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        o(e(u).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
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
            d(F, w(I({
              type: e(O).Auto,
              title: "Actions"
            })), {
              default: T(() => [
                H("div", Ul, [
                  d(r, w(I({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        o(e(u).LktAnchor);
                      }
                    }
                  })), null, 16),
                  d(r, w(I({
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
            d(F, w(I({
              type: e(O).Auto,
              title: "Custom"
            })), {
              default: T(() => [
                H("div", Sl, [
                  (p(!0), x(ke, null, Be(t.value, (D) => (p(), v(r, c({ ref_for: !0 }, {
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
}), Dl = () => [
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
], Pl = () => [
  {
    value: Oe.Static,
    label: "Static"
  },
  {
    value: Oe.Parallax,
    label: "Parallax"
  }
], Rl = () => [
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
], hl = () => {
  let i = {
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
  for (let g in i) {
    let o = i[g];
    if (!(!o.columns || !Array.isArray(o.columns) || o.columns.length === 0))
      for (let t in o.columns) {
        let b = o.columns[t].toString();
        a.push({
          value: o.css.replace("{n}", b),
          label: o.label.replace("{n}", b)
        });
      }
  }
  return a;
}, Fl = [
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
], Hl = {
  key: 1,
  class: "lkt-flex-row"
}, Ol = { class: "lkt-flex-col-9 lkt-grid-1" }, $l = { class: "lkt-flex-col-3" }, jl = { class: "lkt-web-element-config-scroller lkt-grid-1" }, Ml = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, Wl = { class: "lkt-grid-1" }, Nl = { class: "lkt-grid-1" }, Kl = { class: "lkt-grid-1" }, xl = { class: "lkt-grid-1" }, zl = { class: "lkt-grid-1" }, Gl = /* @__PURE__ */ J({
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
  setup(i) {
    var Pe, Re, he;
    const a = i, g = R(parseInt(a.modalKey)), o = R(new ae(a.element)), t = R(null), b = R(!1);
    Z(() => a.modalKey, (k) => {
      g.value = parseInt(k);
    });
    const L = () => {
      let k = o.value.getClone();
      be("lkt-web-element-config", "_", {
        element: k,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: o.value.id
      });
    }, r = () => {
      let k = o.value.getClone();
      be("lkt-web-element-config", "_", {
        element: k,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: o.value.id
      });
    }, F = o.value.getCustomSettings(), W = ml(), D = Ce(), C = !F || ((Pe = F.options) == null ? void 0 : Pe.textEditor) === !0, B = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktTextBanner,
      u.LktIcons
    ].includes(o.value.type), A = [
      u.LktTextBanner
    ].includes(o.value.type), l = [
      u.LktTextBanner
    ].includes(o.value.type), n = [
      u.LktTextBanner
    ].includes(o.value.type), q = [
      u.LktText
    ].includes(o.value.type), we = [
      u.LktLayout
    ].includes(o.value.type), oe = [
      u.LktTextBanner
    ].includes(o.value.type), ie = [
      u.LktLayoutBox,
      u.LktLayoutAccordion,
      u.LktTextBox,
      u.LktTextAccordion,
      u.LktIcon,
      u.LktButton,
      u.LktAnchor
    ].includes(o.value.type), _ = [u.LktLayoutBox, u.LktLayoutAccordion, u.LktLayout, u.LktIcons].includes(o.value.type), Te = [u.LktImage].includes(o.value.type), se = [u.LktLayoutAccordion, u.LktTextAccordion].includes(o.value.type), pe = [u.LktLayoutAccordion, u.LktLayoutBox, u.LktLayout].includes(o.value.type), ne = [j.FlexRow, j.FlexRows].includes((he = (Re = a.parent) == null ? void 0 : Re.layout) == null ? void 0 : he.type), me = Dl(), s = Pl(), Qe = Rl(), Xe = hl(), Ye = [
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
    ], fe = (k, m) => {
      if (k.length > 0) {
        let K = String(m.value), $ = "";
        if (K.includes("--from") && ($ = "--" + K.split("--")[1]), K.includes("--to") && ($ = "--" + K.split("--")[1]), $ !== "") {
          let U = k.find((le) => String(le).includes($));
          if (U)
            return U === m.value;
        }
        let P = k.find((U) => !String(U).includes("--"));
        if (P)
          return P === K || K.includes("--");
      }
      return !0;
    }, el = (k) => {
      var m;
      return fe(
        ((m = o.value.layout) == null ? void 0 : m.amountOfItems) ?? [],
        k
      );
    }, ll = (k) => {
      var m;
      return fe(
        ((m = o.value.layout) == null ? void 0 : m.alignItems) ?? [],
        k
      );
    }, tl = (k) => {
      var m;
      return fe(
        ((m = o.value.layout) == null ? void 0 : m.justifyContent) ?? [],
        k
      );
    }, al = (k) => {
      var m;
      return fe(
        ((m = o.value.layout) == null ? void 0 : m.columns) ?? [],
        k
      );
    }, ol = () => {
      o.value.addSubElement();
    }, Ee = M(() => {
      let k = Se.getCustomAppearance(o.value.type);
      if (!(!k || typeof k > "u"))
        return Object.keys(k).length > 0 ? rl({ options: k.options }, il.defaultFieldElementCustomClassField) : void 0;
    }), De = M(() => fl(cl(o.value.type)) + " Config"), Ve = (k, m) => {
      m || (m = o.value.props), m.alt = k[0].nameData, m.title = k[0].nameData;
    };
    Z(() => o.value.config.amountOfCallToActions, (k) => {
      let m = o.value.config.callToActions.length;
      k > m ? o.value.config.callToActions.push(sl()) : o.value.config.callToActions.splice(k, 1);
    }), dl(() => {
      !o.value.id && o.value.type === u.LktLayout && (b.value = !0, Ue(() => {
        var k, m;
        xe((k = a.modalCrudConfig.createButton) == null ? void 0 : k.resource, {
          ...(m = a.modalCrudConfig.createButton) == null ? void 0 : m.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((K) => {
          o.value.id = K.data.id, qe(a.modalName, a.modalKey), setTimeout(() => {
            be(a.modalName, K.data.id, {
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
    const nl = M(() => a.isSubElement ? [] : ["create", "update", "drop", "delete"]), ue = () => {
      typeof a.onUpdate == "function" && a.onUpdate();
    }, ul = M(() => {
      var P, U, le, y;
      let k = !1, m = !1;
      !(!o.value.id && o.value.type === u.LktLayout) && !a.isSubElement && (k = {
        ...a.modalCrudConfig.createButton,
        resourceData: {
          ...(U = (P = a.modalCrudConfig) == null ? void 0 : P.createButton) == null ? void 0 : U.resourceData,
          ...o.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        },
        events: {
          click: ue
        }
      }, m = {
        ...a.modalCrudConfig.updateButton,
        resourceData: {
          ...(le = a.modalCrudConfig.updateButton) == null ? void 0 : le.resourceData,
          ...o.value
        },
        events: {
          click: ue
        }
      });
      let $ = a.isSubElement ? ue : void 0;
      return {
        mode: g.value > 0 ? $e.Update : $e.Create,
        view: pl.Modal,
        editing: !0,
        perms: nl.value,
        title: De.value,
        modalConfig: {
          modalName: a.modalName,
          modalKey: a.modalKey,
          zIndex: a.zIndex,
          title: De.value,
          beforeClose: $
        },
        readData: {
          id: g.value
        },
        ...a.modalCrudConfig,
        beforeClose: $,
        createButton: k,
        updateButton: m,
        dropButton: a.isSubElement ? !1 : {
          ...a.modalCrudConfig.dropButton,
          resourceData: {
            ...(y = a.modalCrudConfig.dropButton) == null ? void 0 : y.resourceData,
            ...o.value
          },
          events: {
            click: ue
          }
        },
        enabledSaveWithoutChanges: !0
      };
    });
    return (k, m) => {
      const K = h("lkt-loader"), $ = h("lkt-accordion"), P = h("lkt-button"), U = h("lkt-field"), le = h("lkt-item-crud");
      return p(), v(le, c({
        ref_key: "itemCrudRef",
        ref: t,
        class: "lkt-web-element-config-modal",
        modelValue: o.value,
        "onUpdate:modelValue": m[14] || (m[14] = (y) => o.value = y)
      }, ul.value), {
        item: T(({ item: y }) => [
          b.value ? (p(), v(K, { key: 0 })) : (p(), x("div", Hl, [
            H("div", Ol, [
              d(Ie, c({
                modelValue: o.value,
                "onUpdate:modelValue": m[0] || (m[0] = (f) => o.value = f)
              }, {
                isPreview: !0,
                canRenderActions: !1,
                modalCrudConfig: k.modalCrudConfig,
                parent: o.value,
                parentType: e(S).Element,
                defaultAppearance: k.defaultAppearance
              }, { onCrudUpdate: k.onUpdate }), null, 16, ["modelValue", "onCrudUpdate"]),
              (p(!0), x(ke, null, Be(e(W), (f) => (p(), x(ke, null, [
                f !== e(D) ? (p(), v($, c({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(O).Auto,
                  title: f
                }), {
                  default: T(() => [
                    d(Ie, c({
                      modelValue: o.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (de) => o.value = de)
                    }, { ref_for: !0 }, {
                      lang: f,
                      isPreview: !0,
                      canRenderActions: !1,
                      modalCrudConfig: k.modalCrudConfig,
                      parent: o.value,
                      parentType: e(S).Element,
                      defaultAppearance: k.defaultAppearance
                    }), null, 16, ["modelValue"])
                  ]),
                  _: 2
                }, 1040)) : V("", !0)
              ], 64))), 256))
            ]),
            H("div", $l, [
              H("div", jl, [
                e(pe) ? (p(), v(P, w(c({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: k.fileBrowserConfig,
                    modalCrudConfig: k.modalCrudConfig,
                    parent: o.value,
                    parentType: e(S).Element,
                    onUpdate: ue
                  }
                })), null, 16)) : V("", !0),
                y.type === e(u).LktIcons ? (p(), v(P, w(c({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: ol
                  }
                })), null, 16)) : V("", !0),
                e(C) ? (p(), v($, w(c({ key: 2 }, {
                  type: e(O).Always,
                  title: "Text editor"
                })), {
                  default: T(() => [
                    H("div", Ml, [
                      d(P, c({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: m[2] || (m[2] = () => e(Y)("bold"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: m[3] || (m[3] = () => e(Y)("italic"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: m[4] || (m[4] = () => e(Y)("underline"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: m[5] || (m[5] = () => e(Y)("strikeThrough"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: m[6] || (m[6] = () => e(Y)("superscript"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: m[7] || (m[7] = () => e(Y)("subscript"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: m[8] || (m[8] = () => e(ve)("left"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: m[9] || (m[9] = () => e(ve)("center"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: m[10] || (m[10] = () => e(ve)("right"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-align-justify"
                      }, {
                        onClick: m[11] || (m[11] = () => e(ve)("justify"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-list-bullet"
                      }, {
                        onClick: m[12] || (m[12] = () => e(Y)("insertUnorderedList"))
                      }), null, 16),
                      d(P, c({
                        icon: "lkt-icn-list-numbered"
                      }, {
                        onClick: m[13] || (m[13] = () => e(Y)("insertOrderedList"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : V("", !0),
                !e(q) && !e(we) ? (p(), v($, w(c({ key: 3 }, {
                  type: e(O).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(Ae).Display
                })), {
                  default: T(() => [
                    H("div", Wl, [
                      Ee.value ? (p(), v(U, c({ key: 0 }, {
                        type: e(E).Select,
                        ...Ee.value,
                        canClear: !0
                      }, {
                        modelValue: y.props.class,
                        "onUpdate:modelValue": (f) => y.props.class = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(B) ? (p(), v(U, c({ key: 1 }, {
                        type: e(E).Switch,
                        label: "Has header"
                      }, {
                        modelValue: y.config.hasHeader,
                        "onUpdate:modelValue": (f) => y.config.hasHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(A) ? (p(), v(U, c({ key: 2 }, {
                        type: e(E).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: y.config.hasSubHeader,
                        "onUpdate:modelValue": (f) => y.config.hasSubHeader = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ie) ? (p(), v(U, c({ key: 3 }, {
                        type: e(E).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: y.config.hasIcon,
                        "onUpdate:modelValue": (f) => y.config.hasIcon = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ie) ? (p(), v(U, c({
                        key: 4,
                        modelValue: y.props.icon,
                        "onUpdate:modelValue": (f) => y.props.icon = f
                      }, {
                        type: e(E).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Fl)
                      }, {
                        disabled: !y.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : V("", !0),
                      e(Te) ? (p(), v(U, c({ key: 5 }, {
                        type: e(E).Image,
                        label: "Image",
                        fileBrowserConfig: k.fileBrowserConfig
                      }, {
                        modelValue: y.props.src,
                        "onUpdate:modelValue": (f) => y.props.src = f,
                        onPickedFiles: Ve
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(n) ? (p(), v(U, c({ key: 6 }, {
                        type: e(E).Image,
                        label: "Media content",
                        fileBrowserConfig: k.fileBrowserConfig
                      }, {
                        modelValue: y.props.media.src,
                        "onUpdate:modelValue": (f) => y.props.media.src = f,
                        onPickedFiles: (f) => Ve(f, y.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      e(n) ? (p(), v(U, c({ key: 7 }, {
                        type: e(E).Select,
                        label: "Type",
                        options: e(s)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (f) => y.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(l) ? (p(), v(U, c({ key: 8 }, {
                        type: e(E).Image,
                        label: "Background Image",
                        fileBrowserConfig: k.fileBrowserConfig
                      }, {
                        modelValue: y.props.art.src,
                        "onUpdate:modelValue": (f) => y.props.art.src = f,
                        onPickedFiles: (f) => Ve(f, y.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : V("", !0),
                      H("div", null, [
                        e(oe) ? (p(), v(U, c({ key: 0 }, {
                          type: e(E).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (f) => y.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                        e(oe) ? (p(), v(U, c({ key: 1 }, {
                          type: e(E).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (f) => y.props.opacity = f
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                      ]),
                      e(n) ? (p(), v(U, c({ key: 9 }, {
                        type: e(E).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: y.config.amountOfCallToActions,
                        "onUpdate:modelValue": (f) => y.config.amountOfCallToActions = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                y.config.amountOfCallToActions > 0 ? (p(!0), x(ke, { key: 4 }, Be(y.config.callToActions, (f) => (p(), v($, c({ ref_for: !0 }, {
                  type: e(O).Auto,
                  title: "CTA #1"
                }), {
                  default: T(() => [
                    H("div", Nl, [
                      d(U, c({ ref_for: !0 }, {
                        type: e(E).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (de) => f.config.hasIcon = de
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      d(U, c({ ref_for: !0 }, {
                        type: e(E).Text,
                        label: "Icon"
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (de) => f.props.icon = de,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : V("", !0),
                e(se) ? (p(), v($, w(c({ key: 5 }, {
                  type: e(O).Auto,
                  title: "Accordion Config"
                })), {
                  default: T(() => [
                    H("div", Kl, [
                      d(U, c({
                        type: e(E).Select,
                        label: "Type",
                        options: e(me)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (f) => y.props.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                e(_) || e(ne) ? (p(), v($, w(c({ key: 6 }, {
                  type: e(O).Auto,
                  title: "Layout Config"
                })), {
                  default: T(() => [
                    H("div", xl, [
                      e(_) ? (p(), v(U, c({ key: 0 }, {
                        type: e(E).Select,
                        label: "Type",
                        options: e(Qe)
                      }, {
                        modelValue: y.layout.type,
                        "onUpdate:modelValue": (f) => y.layout.type = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(_) && y.layout.type !== e(j).FlexColumn ? (p(), v(U, c({ key: 1 }, {
                        type: e(E).Select,
                        label: y.layout.type === e(j).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Xe),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: el
                        }
                      }, {
                        modelValue: y.layout.amountOfItems,
                        "onUpdate:modelValue": (f) => y.layout.amountOfItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(_) ? (p(), v(U, c({ key: 2 }, {
                        type: e(E).Select,
                        label: "Align items",
                        options: Ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: ll
                        }
                      }, {
                        modelValue: y.layout.alignItems,
                        "onUpdate:modelValue": (f) => y.layout.alignItems = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(_) ? (p(), v(U, c({ key: 3 }, {
                        type: e(E).Select,
                        label: "Justify content",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: tl
                        }
                      }, {
                        modelValue: y.layout.justifyContent,
                        "onUpdate:modelValue": (f) => y.layout.justifyContent = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0),
                      e(ne) ? (p(), v(U, c({ key: 4 }, {
                        type: e(E).Select,
                        label: "Columns Reserved",
                        options: Ye,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: al
                        }
                      }, {
                        modelValue: y.layout.columns,
                        "onUpdate:modelValue": (f) => y.layout.columns = f
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : V("", !0),
                d(P, w(I({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(Ke).Split
                })), {
                  split: T(({ doClose: f }) => [
                    H("div", zl, [
                      d(P, w(I({
                        text: "Before",
                        events: {
                          click: L
                        }
                      })), null, 16),
                      d(P, w(I({
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
}), Jl = { class: "lkt-web-page" }, ql = /* @__PURE__ */ J({
  __name: "LktWebPageView",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(i) {
    const a = i, g = gl(), o = R(g.path), t = R(new te(a.modelValue)), b = R(null), L = R(!1), r = R(!1);
    Z(g, (W) => {
      t.value = {}, o.value = g.path, r.value = !1, Ue(() => r.value = !0);
    }, { flush: "pre", immediate: !0, deep: !0 });
    const F = () => {
      b.value.turnStoredDataIntoOriginal();
    };
    return Z(() => t.value.name, () => {
      r.value && typeof t.value.updateSlug == "function" && t.value.updateSlug();
    }), (W, D) => {
      const C = h("lkt-item-crud");
      return p(), x("section", Jl, [
        r.value ? (p(), v(C, c({
          key: 0,
          ref_key: "itemCrudRef",
          ref: b,
          modelValue: t.value,
          "onUpdate:modelValue": D[1] || (D[1] = (B) => t.value = B),
          editing: L.value,
          "onUpdate:editing": D[2] || (D[2] = (B) => L.value = B)
        }, {
          readResource: "r-web-page-view",
          readData: {
            slug: o.value
          },
          createButton: !1,
          updateButton: !1,
          dropButton: !1
        }, {
          title: t.value.name === "" ? "Page name" : t.value.name
        }), {
          item: T(() => [
            t.value.id > 0 ? (p(), v(re, {
              key: 0,
              modelValue: t.value.webElements,
              "onUpdate:modelValue": D[0] || (D[0] = (B) => t.value.webElements = B),
              lang: e(Ce)(),
              "modal-crud-config": W.modalCrudConfig,
              "file-browser-config": W.fileBrowserConfig,
              parent: t.value,
              "parent-type": e(S).Page,
              "is-preview": !1,
              disabled: "",
              onCrudUpdate: F
            }, null, 8, ["modelValue", "lang", "modal-crud-config", "file-browser-config", "parent", "parent-type"])) : V("", !0)
          ]),
          _: 1
        }, 16, ["modelValue", "editing", "title"])) : V("", !0)
      ]);
    };
  }
}), tt = () => {
  ee({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (i) => new ae(i)
  }), ee({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (i) => i.map((a) => new ae(a))
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
}, at = () => {
  ee({
    url: "/web/pages",
    name: "ls-web-pages",
    params: {},
    digToPerms: "perms",
    digToData: "results",
    mapData: (i) => i.map((a) => new te(a))
  }), ee({
    url: "/web/pages/{type}",
    name: "ls-web-pages-type",
    params: { type: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (i) => i.map((a) => new te(a))
  }), ee({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (i) => new te(i)
  }), ee({
    url: "/web/page",
    name: "r-web-page-view",
    params: { slug: { default: void 0 } },
    digToData: "item",
    mapData: (i) => new te(i)
  }), ee({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (i) => i.map((a) => new ae(a))
  }), ze({
    url: "/web/page",
    name: "mk-web-page",
    params: {
      nameData: { default: void 0 },
      type: { default: void 0 },
      status: { default: void 0 },
      slugData: { default: void 0 },
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
      nameData: { default: void 0 },
      type: { default: void 0 },
      status: { default: void 0 },
      slugData: { default: void 0 },
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
}, ot = {
  install: (i) => {
    i.component("lkt-web-page") === void 0 && (i.component("lkt-web-page", Vl), je("lkt-web-element-select", El), je("lkt-web-element-config", Gl));
  }
}, nt = (i) => {
  i.addRoute({ path: "/:pathMatch(.*)*", name: "lkt-web-page-catch-all", component: ql });
};
export {
  ot as default,
  nt as setupLktWebPageRoutes,
  tt as setupWebElementsHttp,
  at as setupWebPagesHttp
};
