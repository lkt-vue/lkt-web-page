import { defineComponent as Q, setBlockTracking as xe, createElementVNode as h, ref as $, watch as ee, computed as z, resolveComponent as S, createElementBlock as M, openBlock as m, normalizeClass as K, createBlock as k, createCommentVNode as L, unref as e, resolveDynamicComponent as Ae, createSlots as Ue, withCtx as w, createVNode as i, normalizeProps as C, mergeProps as g, guardReactiveProps as x, onMounted as Xe, nextTick as Ye, Fragment as fe, renderList as Pe } from "vue";
import { WebElementLayoutType as H, WebElementType as a, WebParentType as B, ButtonType as Fe, TablePermission as ue, TableType as ye, WebElement as q, WebPage as He, FieldType as A, AccordionType as O, BannerType as De, LktSettings as _, ensureFieldConfig as Ze, getDefaultLktButtonWebElement as _e, ItemCrudView as el, ItemCrudMode as he, applyTextFormat as J, applyTextAlignment as ge, AccordionToggleMode as ll } from "lkt-vue-kernel";
import { getCurrentLanguage as be, getAvailableLanguages as tl } from "lkt-i18n";
import { httpCall as Oe, createHTTPGetResource as re, createHTTPPostResource as Ee, createHTTPPutResource as Re, createHTTPDeleteResource as je } from "lkt-http-client";
import { openModal as de, closeModal as Me, addModal as Se } from "lkt-modal";
import { ucfirst as al, kebabCaseToCamelCase as ol } from "lkt-string-tools";
const E = /* @__PURE__ */ Q({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(c, { emit: r }) {
    const b = r, t = (l) => {
      b("input", l);
    };
    return (l, T) => T[0] || (xe(-1, !0), (T[0] = h("div", {
      contenteditable: l.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (v) => t(v),
      innerHTML: l.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, xe(1), T[0]);
  }
}), ke = (c, r = !1) => {
  if (!c.layout || r) return "";
  let b = [];
  c.layout.type === H.FlexRow && (!c.layout.amountOfItems || c.layout.amountOfItems.length === 0) ? b.push("lkt-flex-row") : c.layout.type === H.FlexRows && (!c.layout.amountOfItems || c.layout.amountOfItems.length === 0) ? b.push("lkt-flex-rows") : c.layout.type === H.FlexColumn && b.push("lkt-flex-column"), c.layout.amountOfItems && c.layout.amountOfItems.length > 0 && (c.layout.type === H.FlexRow ? b.push(c.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : c.layout.type === H.FlexRows ? b.push(c.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : b.push(c.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), c.layout.alignItems && c.layout.alignItems.length > 0 && b.push(c.layout.alignItems.join(" ")), c.layout.justifyContent && c.layout.justifyContent.length > 0 && b.push(c.layout.justifyContent.join(" ")), b.length > 0 && b.push("layout-mode");
  let t = b.join(" ");
  return c.layout.type === H.FlexRows && (t = t.replace("flex-row-", "flex-rows-")), t;
}, nl = { key: 8 }, ul = {
  key: 11,
  class: "lkt-element-actions"
}, ve = /* @__PURE__ */ Q({
  __name: "LktWebElementBox",
  props: {
    modelValue: {},
    parent: {},
    parentType: {},
    index: { default: -1 },
    lang: {},
    isPreview: { type: Boolean, default: !1 },
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
  setup(c, { emit: r }) {
    const b = r, t = c, l = $(t.modelValue);
    ee(() => t.modelValue, (n, o) => {
      l.value = n;
    }), ee(l, (n, o) => {
      b("update:modelValue", n);
    });
    const T = $(!1), v = (n, o = "text") => {
      const G = n.target.innerHTML.trim();
      G !== l.value.props[o][y] && (l.value.props[o][y] = G);
    }, y = t.lang ?? be(), V = z(() => [
      a.LktLayoutBox,
      a.LktTextBox,
      a.LktLayoutAccordion,
      a.LktTextAccordion
    ].includes(l.value.type)), U = z(() => [
      a.LktLayoutBox,
      a.LktLayoutAccordion,
      a.LktLayout
    ].includes(l.value.type)), F = z(() => {
      if ([
        a.LktLayoutBox,
        a.LktTextBox
      ].includes(l.value.type))
        return "lkt-box";
      if ([
        a.LktLayoutAccordion,
        a.LktTextAccordion
      ].includes(l.value.type))
        return "lkt-accordion";
    }), P = z(() => l.value.props.class ? l.value.props.class : t.defaultAppearance), j = () => {
      b("crud-update");
    };
    return (n, o) => {
      var te, Y, ae, oe;
      const G = S("lkt-image"), le = S("lkt-icon"), X = S("lkt-header"), N = S("lkt-button"), se = S("lkt-anchor"), pe = S("lkt-banner");
      return m(), M("div", {
        class: K(["lkt-element", `is-${l.value.type} is-${l.value.id}`]),
        key: l.value.keyMoment
      }, [
        l.value.type === e(a).LktText ? (m(), k(E, {
          key: 0,
          modelValue: l.value.props.text[e(y)],
          "onUpdate:modelValue": o[0] || (o[0] = (u) => l.value.props.text[e(y)] = u),
          disabled: n.disabled || n.parentType === e(B).Page,
          onInput: o[1] || (o[1] = (u) => v(u))
        }, null, 8, ["modelValue", "disabled"])) : V.value ? (m(), k(Ae(F.value), {
          key: 1,
          icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
          class: K(P.value)
        }, Ue({
          default: w(() => [
            U.value ? (m(), k(ie, {
              key: 0,
              modelValue: l.value.children,
              "onUpdate:modelValue": o[4] || (o[4] = (u) => l.value.children = u),
              "layout-selector": e(ke)(l.value),
              "is-child": "",
              lang: e(y),
              "is-preview": n.isPreview,
              parent: l.value,
              "parent-type": e(B).Element,
              "modal-crud-config": n.modalCrudConfig,
              "file-browser-config": n.fileBrowserConfig,
              disabled: n.disabled,
              editing: n.editing
            }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (m(), k(E, {
              key: 1,
              modelValue: l.value.props.text[e(y)],
              "onUpdate:modelValue": o[5] || (o[5] = (u) => l.value.props.text[e(y)] = u),
              disabled: n.disabled || n.parentType === e(B).Page,
              onInput: o[6] || (o[6] = (u) => v(u, "text"))
            }, null, 8, ["modelValue", "disabled"]))
          ]),
          _: 2
        }, [
          (te = l.value.config) != null && te.hasHeader ? {
            name: "header",
            fn: w(() => [
              i(E, {
                modelValue: l.value.props.header[e(y)],
                "onUpdate:modelValue": o[2] || (o[2] = (u) => l.value.props.header[e(y)] = u),
                disabled: n.disabled || n.parentType === e(B).Page,
                onInput: o[3] || (o[3] = (u) => v(u, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["icon", "class"])) : l.value.type === e(a).LktImage ? (m(), k(G, {
          key: 2,
          class: K(P.value),
          src: l.value.props.src,
          alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(y)] : "",
          title: typeof l.value.props.title == "object" ? l.value.props.title[e(y)] : ""
        }, {
          text: w(() => [
            i(E, {
              modelValue: l.value.props.text[e(y)],
              "onUpdate:modelValue": o[7] || (o[7] = (u) => l.value.props.text[e(y)] = u),
              disabled: n.disabled || n.parentType === e(B).Page,
              onInput: o[8] || (o[8] = (u) => v(u, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(a).LktIcon ? (m(), k(le, {
          key: 3,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: K(P.value)
        }, {
          text: w(() => [
            i(E, {
              modelValue: l.value.props.text[e(y)],
              "onUpdate:modelValue": o[9] || (o[9] = (u) => l.value.props.text[e(y)] = u),
              disabled: n.disabled || n.parentType === e(B).Page,
              onInput: o[10] || (o[10] = (u) => v(u, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktHeader ? (m(), k(X, {
          key: 4,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: K(P.value)
        }, {
          text: w(() => [
            i(E, {
              modelValue: l.value.props.text[e(y)],
              "onUpdate:modelValue": o[11] || (o[11] = (u) => l.value.props.text[e(y)] = u),
              disabled: n.disabled || n.parentType === e(B).Page,
              onInput: o[12] || (o[12] = (u) => v(u, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktButton ? (m(), k(N, {
          key: 5,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: K(P.value)
        }, {
          text: w(() => [
            i(E, {
              modelValue: l.value.props.text[e(y)],
              "onUpdate:modelValue": o[13] || (o[13] = (u) => l.value.props.text[e(y)] = u),
              disabled: n.disabled || n.parentType === e(B).Page,
              onInput: o[14] || (o[14] = (u) => v(u, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktAnchor ? (m(), k(se, {
          key: 6,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: K(P.value)
        }, {
          text: w(() => [
            i(E, {
              modelValue: l.value.props.text[e(y)],
              "onUpdate:modelValue": o[15] || (o[15] = (u) => l.value.props.text[e(y)] = u),
              disabled: n.disabled || n.parentType === e(B).Page,
              onInput: o[16] || (o[16] = (u) => v(u, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktTextBanner ? (m(), k(pe, {
          key: 7,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: K(P.value),
          opacity: l.value.props.opacity,
          art: l.value.props.art,
          media: l.value.props.media,
          type: l.value.props.type
        }, Ue({
          default: w(() => [
            i(E, {
              modelValue: l.value.props.text[e(y)],
              "onUpdate:modelValue": o[21] || (o[21] = (u) => l.value.props.text[e(y)] = u),
              disabled: n.disabled || n.parentType === e(B).Page,
              onInput: o[22] || (o[22] = (u) => v(u, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 2
        }, [
          (Y = l.value.config) != null && Y.hasHeader ? {
            name: "header",
            fn: w(() => [
              i(E, {
                modelValue: l.value.props.header[e(y)],
                "onUpdate:modelValue": o[17] || (o[17] = (u) => l.value.props.header[e(y)] = u),
                disabled: n.disabled || n.parentType === e(B).Page,
                onInput: o[18] || (o[18] = (u) => v(u, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "0"
          } : void 0,
          (ae = l.value.config) != null && ae.hasSubHeader ? {
            name: "subHeader",
            fn: w(() => [
              i(E, {
                modelValue: l.value.props.subHeader[e(y)],
                "onUpdate:modelValue": o[19] || (o[19] = (u) => l.value.props.subHeader[e(y)] = u),
                disabled: n.disabled || n.parentType === e(B).Page,
                onInput: o[20] || (o[20] = (u) => v(u, "subHeader"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(a).LktIcons ? (m(), M("section", nl, [
          (oe = l.value.config) != null && oe.hasHeader ? (m(), k(X, { key: 0 }, {
            text: w(() => [
              i(E, {
                modelValue: l.value.props.header[e(y)],
                "onUpdate:modelValue": o[23] || (o[23] = (u) => l.value.props.header[e(y)] = u),
                disabled: n.disabled || n.parentType === e(B).Page,
                onInput: o[24] || (o[24] = (u) => v(u, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          })) : L("", !0),
          i(E, {
            modelValue: l.value.props.text[e(y)],
            "onUpdate:modelValue": o[25] || (o[25] = (u) => l.value.props.text[e(y)] = u),
            disabled: n.disabled || n.parentType === e(B).Page,
            onInput: o[26] || (o[26] = (u) => v(u, "text"))
          }, null, 8, ["modelValue", "disabled"]),
          i(ie, {
            modelValue: l.value.subElements,
            "onUpdate:modelValue": o[27] || (o[27] = (u) => l.value.subElements = u),
            "layout-selector": e(ke)(l.value),
            "is-child": "",
            lang: e(y),
            "is-preview": n.isPreview,
            parent: l.value,
            "parent-type": e(B).Element,
            "modal-crud-config": n.modalCrudConfig,
            "file-browser-config": n.fileBrowserConfig,
            disabled: n.disabled,
            editing: n.editing,
            "default-appearance": l.value.props.class
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing", "default-appearance"])
        ])) : l.value.type === e(a).LktLayout ? (m(), k(ie, {
          key: 9,
          modelValue: l.value.children,
          "onUpdate:modelValue": o[28] || (o[28] = (u) => l.value.children = u),
          "layout-selector": e(ke)(l.value),
          "is-child": "",
          lang: e(y),
          "is-preview": n.isPreview,
          parent: l.value,
          "parent-type": e(B).Element,
          "modal-crud-config": n.modalCrudConfig,
          "file-browser-config": n.fileBrowserConfig,
          disabled: n.disabled,
          editing: n.editing
        }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (m(), k(Ae(l.value.component), C(g({ key: 10 }, l.value.props)), null, 16)),
        !T.value && n.canRenderActions ? (m(), M("div", ul, [
          i(N, C(x({
            type: e(Fe).Button,
            text: l.value.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-web-element-config",
            modalKey: l.value.id,
            modalData: {
              element: l.value,
              parent: n.parent,
              parentType: n.parentType,
              fileBrowserConfig: n.fileBrowserConfig,
              modalCrudConfig: n.modalCrudConfig,
              defaultAppearance: n.defaultAppearance,
              onUpdate: j
            }
          })), null, 16)
        ])) : L("", !0)
      ], 2);
    };
  }
}), dl = {
  key: 0,
  class: "like-lkt-field-label"
}, ie = /* @__PURE__ */ Q({
  __name: "LktWebElements",
  props: {
    modelValue: {},
    parent: {},
    parentType: { default: B.Element },
    layoutSelector: { default: "" },
    defaultAppearance: {},
    lang: {},
    isChild: { type: Boolean, default: !1 },
    isPreview: { type: Boolean, default: !1 },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    disabled: { type: Boolean, default: !1 },
    editing: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    "crud-update"
  ],
  setup(c, { emit: r }) {
    const b = r, t = c, l = $(t.modelValue), T = $(t.editing);
    ee(l, (V) => {
      b("update:modelValue", V);
    }, { deep: !0 }), ee(T, (V) => {
      console.log("editing", V);
    }, { deep: !0 });
    const v = z(() => {
      let V = [ue.Update, ue.Sort];
      t.isChild || V.push(ue.Create), t.parentType === B.Page && V.push(ue.SwitchEditMode);
      let U = t.isPreview ? ye.Table : ye.Item;
      T.value && (U = ye.Table);
      let F = "lkt-elements-table--default-grid";
      return t.isChild && (F = t.layoutSelector), {
        type: U,
        perms: V,
        itemsContainerClass: F,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (P) => {
          if (!P.layout || t.isPreview) return "";
          let j = [];
          return P.layout.columns && P.layout.columns.length > 0 && j.push(P.layout.columns.join(" ")), j.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: t.isPreview || T.value,
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
            parentType: t.parentType
          }
        }
      };
    }), y = () => {
      const V = t.parentType === B.Page ? "r-web-page-children" : "r-web-element-children";
      Oe(V, { id: t.parent.id }).then((U) => {
        l.value = U.data.map((F) => new q(F)), b("crud-update");
      });
    };
    return (V, U) => {
      const F = S("lkt-table");
      return m(), M("div", null, [
        V.parentType === e(B).Page ? (m(), M("span", dl, "Web Elements")) : L("", !0),
        i(F, g({
          class: "lkt-elements-table",
          modelValue: l.value,
          "onUpdate:modelValue": U[0] || (U[0] = (P) => l.value = P)
        }, v.value, {
          "edit-mode": T.value,
          "onUpdate:editMode": U[1] || (U[1] = (P) => T.value = P)
        }), {
          item: w(({ _: P, index: j }) => [
            i(ve, {
              modelValue: l.value[j],
              "onUpdate:modelValue": (n) => l.value[j] = n,
              index: j,
              lang: V.lang,
              "is-preview": V.isPreview,
              parent: V.parent,
              "parent-type": V.parentType,
              "file-browser-config": V.fileBrowserConfig,
              "modal-crud-config": V.modalCrudConfig,
              "can-render-actions": !T.value,
              disabled: V.disabled || !T.value,
              editing: T.value,
              "default-appearance": V.defaultAppearance,
              onCrudUpdate: y
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled", "editing", "default-appearance"])
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"])
      ]);
    };
  }
}), il = { class: "lkt-web-page" }, rl = { class: "lkt-grid-1 lkt-grid-3--from-768" }, sl = /* @__PURE__ */ Q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(c) {
    const r = c, b = $(new He(r.modelValue)), t = $(null), l = () => {
      t.value.turnStoredDataIntoOriginal();
    };
    return (T, v) => {
      const y = S("lkt-field"), V = S("lkt-item-crud");
      return m(), M("section", il, [
        i(V, g({
          ref_key: "itemCrudRef",
          ref: t,
          modelValue: b.value,
          "onUpdate:modelValue": v[0] || (v[0] = (U) => b.value = U)
        }, T.crudConfig, {
          title: b.value.name
        }), {
          item: w(({ item: U }) => [
            h("div", rl, [
              i(y, g({
                modelValue: U.name,
                "onUpdate:modelValue": (F) => U.name = F
              }, {
                type: e(A).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            i(ie, {
              modelValue: U.webElements,
              "onUpdate:modelValue": (F) => U.webElements = F,
              lang: e(be)(),
              "modal-crud-config": T.modalCrudConfig,
              "file-browser-config": T.fileBrowserConfig,
              parent: b.value,
              "parent-type": e(B).Page,
              "is-preview": !1,
              disabled: "",
              onCrudUpdate: l
            }, null, 8, ["modelValue", "onUpdate:modelValue", "lang", "modal-crud-config", "file-browser-config", "parent", "parent-type"])
          ]),
          _: 1
        }, 16, ["modelValue", "title"])
      ]);
    };
  }
}), pl = { class: "lkt-grid-1" }, ml = { class: "lkt-grid-3" }, cl = { class: "lkt-grid-3" }, fl = { class: "lkt-grid-3" }, yl = { class: "lkt-grid-3" }, gl = /* @__PURE__ */ Q({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    parent: {},
    parentType: { default: B.Element },
    fileBrowserConfig: {},
    modalCrudConfig: {}
  },
  setup(c) {
    const r = c, b = $(r.parent), t = (l) => {
      de("lkt-web-element-config", "_", {
        element: q.createByType(l),
        parent: b.value,
        parentType: r.parentType,
        fileBrowserConfig: r.fileBrowserConfig,
        modalCrudConfig: r.modalCrudConfig
      }), setTimeout(() => {
        Me(r.modalName, r.modalKey);
      }, 200);
    };
    return (l, T) => {
      const v = S("lkt-button"), y = S("lkt-accordion"), V = S("lkt-modal");
      return m(), k(V, g({ id: "lkt-add-element-modal" }, {
        modalName: l.modalName,
        modalKey: l.modalKey,
        zIndex: l.zIndex,
        title: "LktBox Config"
      }), {
        default: w(() => [
          h("div", pl, [
            i(y, C(x({
              type: e(O).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: w(() => [
                h("div", ml, [
                  i(v, C(x({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        t(e(a).LktText);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        t(e(a).LktHeader);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        t(e(a).LktImage);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        t(e(a).LktIcon);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        t(e(a).LktTextBox);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        t(e(a).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-font",
                    text: "LktTextBanner",
                    events: {
                      click: () => {
                        t(e(a).LktTextBanner);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            i(y, C(x({
              type: e(O).Auto,
              title: "Collection elements"
            })), {
              default: w(() => [
                h("div", cl, [
                  i(v, C(x({
                    icon: "lkt-icn-info",
                    text: "LktIcons",
                    events: {
                      click: () => {
                        t(e(a).LktIcons);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            i(y, C(x({
              type: e(O).Auto,
              title: "Containers"
            })), {
              default: w(() => [
                h("div", fl, [
                  i(v, C(x({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        t(e(a).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        t(e(a).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-columns",
                    text: "LktLayout",
                    events: {
                      click: () => {
                        t(e(a).LktLayout);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            i(y, C(x({
              type: e(O).Auto,
              title: "Actions"
            })), {
              default: w(() => [
                h("div", yl, [
                  i(v, C(x({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        t(e(a).LktAnchor);
                      }
                    }
                  })), null, 16),
                  i(v, C(x({
                    icon: "lkt-icn-link",
                    text: "LktButton",
                    events: {
                      click: () => {
                        t(e(a).LktButton);
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
}), kl = () => [
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
], vl = () => [
  {
    value: De.Static,
    label: "Static"
  },
  {
    value: De.Parallax,
    label: "Parallax"
  }
], bl = () => [
  {
    value: H.Grid,
    label: "Grid"
  },
  {
    value: H.FlexRow,
    label: "Flex Row"
  },
  {
    value: H.FlexRows,
    label: "Flex Rows"
  },
  {
    value: H.FlexColumn,
    label: "Flex Column"
  }
], Cl = () => {
  let c = {
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
  }, r = [];
  for (let b in c) {
    let t = c[b];
    if (!(!t.columns || !Array.isArray(t.columns) || t.columns.length === 0))
      for (let l in t.columns) {
        let T = t.columns[l].toString();
        r.push({
          value: t.css.replace("{n}", T),
          label: t.label.replace("{n}", T)
        });
      }
  }
  return r;
}, Vl = [
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
], Ll = {
  key: 1,
  class: "lkt-flex-row"
}, Tl = { class: "lkt-flex-col-9 lkt-grid-1" }, wl = { class: "lkt-flex-col-3" }, Il = { class: "lkt-web-element-config-scroller lkt-grid-1" }, Bl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, xl = { class: "lkt-grid-1" }, Al = { class: "lkt-grid-1" }, Ul = { class: "lkt-grid-1" }, Pl = { class: "lkt-grid-1" }, Dl = { class: "lkt-grid-1" }, hl = /* @__PURE__ */ Q({
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
    defaultAppearance: {}
  },
  setup(c) {
    var Le, Te;
    const r = c, b = parseInt(r.modalKey), t = $(new q(r.element)), l = $(null), T = $(!1), v = () => {
      let d = t.value.getClone();
      de("lkt-web-element-config", "_", {
        element: d,
        parent: r.parent,
        parentType: r.parentType,
        fileBrowserConfig: r.fileBrowserConfig,
        modalCrudConfig: r.modalCrudConfig,
        beforeElement: t.value.id
      });
    }, y = () => {
      let d = t.value.getClone();
      de("lkt-web-element-config", "_", {
        element: d,
        parent: r.parent,
        parentType: r.parentType,
        fileBrowserConfig: r.fileBrowserConfig,
        modalCrudConfig: r.modalCrudConfig,
        afterElement: t.value.id
      });
    }, V = tl(), U = be(), F = [a.LktLayoutBox, a.LktLayoutAccordion, a.LktTextBox, a.LktTextAccordion, a.LktTextBanner, a.LktIcons].includes(t.value.type), P = [a.LktTextBanner].includes(t.value.type), j = [a.LktTextBanner].includes(t.value.type), n = [a.LktTextBanner].includes(t.value.type), o = [a.LktText].includes(t.value.type), G = [a.LktLayout].includes(t.value.type), le = [a.LktTextBanner].includes(t.value.type), X = [a.LktLayoutBox, a.LktLayoutAccordion, a.LktTextBox, a.LktTextAccordion, a.LktIcon, a.LktButton, a.LktAnchor].includes(t.value.type), N = [a.LktLayoutBox, a.LktLayoutAccordion, a.LktLayout, a.LktIcons].includes(t.value.type), se = [a.LktImage].includes(t.value.type), pe = [a.LktLayoutAccordion, a.LktTextAccordion].includes(t.value.type), te = [a.LktLayoutAccordion, a.LktLayoutBox, a.LktLayout].includes(t.value.type), Y = [H.FlexRow, H.FlexRows].includes((Te = (Le = r.parent) == null ? void 0 : Le.layout) == null ? void 0 : Te.type), ae = kl(), oe = vl(), u = bl(), $e = Cl(), Ne = [
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
    ], Ke = [
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
    ], ne = (d, p) => {
      if (d.length > 0) {
        let W = String(p.value), R = "";
        if (W.includes("--from") && (R = "--" + W.split("--")[1]), W.includes("--to") && (R = "--" + W.split("--")[1]), R !== "") {
          let I = d.find((ce) => String(ce).includes(R));
          if (I)
            return I === p.value;
        }
        let D = d.find((I) => !String(I).includes("--"));
        if (D)
          return D === W || W.includes("--");
      }
      return !0;
    }, ze = (d) => {
      var p;
      return ne(
        ((p = t.value.layout) == null ? void 0 : p.amountOfItems) ?? [],
        d
      );
    }, Ge = (d) => {
      var p;
      return ne(
        ((p = t.value.layout) == null ? void 0 : p.alignItems) ?? [],
        d
      );
    }, Je = (d) => {
      var p;
      return ne(
        ((p = t.value.layout) == null ? void 0 : p.justifyContent) ?? [],
        d
      );
    }, qe = (d) => {
      var p;
      return ne(
        ((p = t.value.layout) == null ? void 0 : p.columns) ?? [],
        d
      );
    }, Qe = () => {
      t.value.addSubElement();
    }, Ce = z(() => {
      let d = {};
      switch (t.value.type) {
        case a.LktLayoutBox:
        case a.LktTextBox:
          d = _.defaultFieldLktBoxElementCustomClassField;
          break;
        case a.LktLayoutAccordion:
        case a.LktTextAccordion:
          d = _.defaultFieldLktAccordionElementCustomClassField;
          break;
        case a.LktIcon:
        case a.LktIcons:
          d = _.defaultFieldLktIconElementCustomClassField;
          break;
        case a.LktImage:
          d = _.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(d).length > 0 ? Ze(d, _.defaultFieldElementCustomClassField) : void 0;
    }), Ve = z(() => al(ol(t.value.type)) + " Config"), me = (d, p) => {
      p || (p = t.value.props), p.alt = d[0].nameData, p.title = d[0].nameData;
    };
    return ee(() => t.value.config.amountOfCallToActions, (d) => {
      console.log("updated amount of cta: ", d);
      let p = t.value.config.callToActions.length;
      d > p ? t.value.config.callToActions.push(_e()) : t.value.config.callToActions.splice(d, 1);
    }), Xe(() => {
      console.log("mounted"), console.log(t.value), !t.value.id && t.value.type === a.LktLayout && (T.value = !0, Ye(() => {
        var d;
        Oe(r.modalCrudConfig.createButton.resource, {
          ...(d = r.modalCrudConfig.createButton) == null ? void 0 : d.resourceData,
          ...t.value,
          parent: r.parent.id,
          parentType: r.parentType,
          afterElement: r.afterElement,
          beforeElement: r.beforeElement
        }).then((p) => {
          console.log("created layout", p), t.value.id = p.data.id, console.log("newid:", t.value.id), Me(r.modalName, r.modalKey), setTimeout(() => {
            de(r.modalName, p.data.id, {
              element: t.value,
              parent: r.parent,
              parentType: r.parentType,
              fileBrowserConfig: r.fileBrowserConfig,
              modalCrudConfig: r.modalCrudConfig,
              onUpdate: r.onUpdate
            });
          }, 200);
        });
      }));
    }), (d, p) => {
      var we, Ie, Be;
      const W = S("lkt-loader"), R = S("lkt-accordion"), D = S("lkt-button"), I = S("lkt-field"), ce = S("lkt-item-crud");
      return m(), k(ce, g({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: t.value,
        "onUpdate:modelValue": p[11] || (p[11] = (f) => t.value = f)
      }, {
        mode: e(b) > 0 ? e(he).Update : e(he).Create,
        view: e(el).Modal,
        editing: !0,
        perms: ["update", "drop", "delete"],
        title: Ve.value,
        modalConfig: {
          modalName: d.modalName,
          modalKey: d.modalKey,
          zIndex: d.zIndex,
          title: Ve.value
        },
        readData: {
          id: e(b)
        },
        ...d.modalCrudConfig,
        createButton: T.value ? !1 : {
          ...d.modalCrudConfig.createButton,
          resourceData: {
            ...(we = d.modalCrudConfig.createButton) == null ? void 0 : we.resourceData,
            ...t.value,
            parent: d.parent.id,
            parentType: d.parentType,
            afterElement: d.afterElement,
            beforeElement: d.beforeElement
          },
          events: {
            click: r.onUpdate
          }
        },
        updateButton: {
          ...d.modalCrudConfig.updateButton,
          resourceData: {
            ...(Ie = d.modalCrudConfig.updateButton) == null ? void 0 : Ie.resourceData,
            ...t.value
          },
          events: {
            click: r.onUpdate
          }
        },
        dropButton: {
          ...d.modalCrudConfig.dropButton,
          resourceData: {
            ...(Be = d.modalCrudConfig.dropButton) == null ? void 0 : Be.resourceData,
            ...t.value
          },
          events: {
            click: r.onUpdate
          }
        }
      }), {
        item: w(({ item: f }) => [
          T.value ? (m(), k(W, { key: 0 })) : (m(), M("div", Ll, [
            h("div", Tl, [
              i(ve, {
                modelValue: t.value,
                "onUpdate:modelValue": p[0] || (p[0] = (s) => t.value = s),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": d.modalCrudConfig,
                parent: t.value,
                "parent-type": e(B).Element,
                "default-appearance": d.defaultAppearance,
                onCrudUpdate: d.onUpdate
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type", "default-appearance", "onCrudUpdate"]),
              (m(!0), M(fe, null, Pe(e(V), (s) => (m(), M(fe, null, [
                s !== e(U) ? (m(), k(R, g({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(O).Auto,
                  title: s
                }), {
                  default: w(() => [
                    i(ve, {
                      modelValue: t.value,
                      "onUpdate:modelValue": p[1] || (p[1] = (Z) => t.value = Z),
                      lang: s,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": d.modalCrudConfig,
                      parent: t.value,
                      "parent-type": e(B).Element,
                      "default-appearance": d.defaultAppearance
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type", "default-appearance"])
                  ]),
                  _: 2
                }, 1040)) : L("", !0)
              ], 64))), 256))
            ]),
            h("div", wl, [
              h("div", Il, [
                e(te) ? (m(), k(D, C(g({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: d.fileBrowserConfig,
                    modalCrudConfig: d.modalCrudConfig,
                    parent: t.value,
                    parentType: e(B).Element
                  }
                })), null, 16)) : L("", !0),
                f.type === e(a).LktIcons ? (m(), k(D, C(g({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: Qe
                  }
                })), null, 16)) : L("", !0),
                i(R, C(x({
                  type: e(O).Always,
                  title: "Text editor"
                })), {
                  default: w(() => [
                    h("div", Bl, [
                      i(D, g({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: p[2] || (p[2] = () => e(J)("bold"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: p[3] || (p[3] = () => e(J)("italic"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: p[4] || (p[4] = () => e(J)("underline"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: p[5] || (p[5] = () => e(J)("strikeThrough"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: p[6] || (p[6] = () => e(J)("superscript"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: p[7] || (p[7] = () => e(J)("subscript"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: p[8] || (p[8] = () => e(ge)("left"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: p[9] || (p[9] = () => e(ge)("center"))
                      }), null, 16),
                      i(D, g({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: p[10] || (p[10] = () => e(ge)("right"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                !e(o) && !e(G) ? (m(), k(R, C(g({ key: 2 }, {
                  type: e(O).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(ll).Display
                })), {
                  default: w(() => [
                    h("div", xl, [
                      Ce.value ? (m(), k(I, g({ key: 0 }, {
                        type: e(A).Select,
                        ...Ce.value,
                        canClear: !0
                      }, {
                        modelValue: f.props.class,
                        "onUpdate:modelValue": (s) => f.props.class = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(F) ? (m(), k(I, g({ key: 1 }, {
                        type: e(A).Switch,
                        label: "Has header"
                      }, {
                        modelValue: f.config.hasHeader,
                        "onUpdate:modelValue": (s) => f.config.hasHeader = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(P) ? (m(), k(I, g({ key: 2 }, {
                        type: e(A).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: f.config.hasSubHeader,
                        "onUpdate:modelValue": (s) => f.config.hasSubHeader = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(X) ? (m(), k(I, g({ key: 3 }, {
                        type: e(A).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (s) => f.config.hasIcon = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(X) ? (m(), k(I, g({ key: 4 }, {
                        type: e(A).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Vl)
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (s) => f.props.icon = s,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : L("", !0),
                      e(se) ? (m(), k(I, g({ key: 5 }, {
                        type: e(A).Image,
                        label: "Image",
                        fileBrowserConfig: d.fileBrowserConfig
                      }, {
                        modelValue: f.props.src,
                        "onUpdate:modelValue": (s) => f.props.src = s,
                        onPickedFiles: me
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(n) ? (m(), k(I, g({ key: 6 }, {
                        type: e(A).Image,
                        label: "Media content",
                        fileBrowserConfig: d.fileBrowserConfig
                      }, {
                        modelValue: f.props.media.src,
                        "onUpdate:modelValue": (s) => f.props.media.src = s,
                        onPickedFiles: (s) => me(s, f.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      e(n) ? (m(), k(I, g({ key: 7 }, {
                        type: e(A).Select,
                        label: "Type",
                        options: e(oe)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (s) => f.props.type = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(j) ? (m(), k(I, g({ key: 8 }, {
                        type: e(A).Image,
                        label: "Background Image",
                        fileBrowserConfig: d.fileBrowserConfig
                      }, {
                        modelValue: f.props.art.src,
                        "onUpdate:modelValue": (s) => f.props.art.src = s,
                        onPickedFiles: (s) => me(s, f.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      h("div", null, [
                        e(le) ? (m(), k(I, g({ key: 0 }, {
                          type: e(A).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (s) => f.props.opacity = s
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                        e(le) ? (m(), k(I, g({ key: 1 }, {
                          type: e(A).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (s) => f.props.opacity = s
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                      ]),
                      e(n) ? (m(), k(I, g({ key: 9 }, {
                        type: e(A).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: f.config.amountOfCallToActions,
                        "onUpdate:modelValue": (s) => f.config.amountOfCallToActions = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                f.config.amountOfCallToActions > 0 ? (m(!0), M(fe, { key: 3 }, Pe(f.config.callToActions, (s) => (m(), k(R, g({ ref_for: !0 }, {
                  type: e(O).Auto,
                  title: "CTA #1"
                }), {
                  default: w(() => [
                    h("div", Al, [
                      i(I, g({ ref_for: !0 }, {
                        type: e(A).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: s.config.hasIcon,
                        "onUpdate:modelValue": (Z) => s.config.hasIcon = Z
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      i(I, g({ ref_for: !0 }, {
                        type: e(A).Text,
                        label: "Icon"
                      }, {
                        modelValue: s.props.icon,
                        "onUpdate:modelValue": (Z) => s.props.icon = Z,
                        disabled: !s.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : L("", !0),
                e(pe) ? (m(), k(R, C(g({ key: 4 }, {
                  type: e(O).Auto,
                  title: "Accordion Config"
                })), {
                  default: w(() => [
                    h("div", Ul, [
                      i(I, g({
                        type: e(A).Select,
                        label: "Type",
                        options: e(ae)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (s) => f.props.type = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                e(N) || e(Y) ? (m(), k(R, C(g({ key: 5 }, {
                  type: e(O).Auto,
                  title: "Layout Config"
                })), {
                  default: w(() => [
                    h("div", Pl, [
                      e(N) ? (m(), k(I, g({ key: 0 }, {
                        type: e(A).Select,
                        label: "Type",
                        options: e(u)
                      }, {
                        modelValue: f.layout.type,
                        "onUpdate:modelValue": (s) => f.layout.type = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(N) && f.layout.type !== e(H).FlexColumn ? (m(), k(I, g({ key: 1 }, {
                        type: e(A).Select,
                        label: f.layout.type === e(H).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e($e),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: ze
                        }
                      }, {
                        modelValue: f.layout.amountOfItems,
                        "onUpdate:modelValue": (s) => f.layout.amountOfItems = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(N) ? (m(), k(I, g({ key: 2 }, {
                        type: e(A).Select,
                        label: "Align items",
                        options: We,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ge
                        }
                      }, {
                        modelValue: f.layout.alignItems,
                        "onUpdate:modelValue": (s) => f.layout.alignItems = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(N) ? (m(), k(I, g({ key: 3 }, {
                        type: e(A).Select,
                        label: "Justify content",
                        options: Ke,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Je
                        }
                      }, {
                        modelValue: f.layout.justifyContent,
                        "onUpdate:modelValue": (s) => f.layout.justifyContent = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Y) ? (m(), k(I, g({ key: 4 }, {
                        type: e(A).Select,
                        label: "Columns Reserved",
                        options: Ne,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: qe
                        }
                      }, {
                        modelValue: f.layout.columns,
                        "onUpdate:modelValue": (s) => f.layout.columns = s
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                i(D, C(x({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(Fe).Split
                })), {
                  split: w(({ doClose: s }) => [
                    h("div", Dl, [
                      i(D, C(x({
                        text: "Before",
                        events: {
                          click: v
                        }
                      })), null, 16),
                      i(D, C(x({
                        text: "After",
                        events: {
                          click: y
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
}), jl = () => {
  re({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (c) => new q(c)
  }), re({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (c) => c.map((r) => new q(r))
  }), Ee({
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
  }), Re({
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
  }), je({
    url: "/web/element/{id}",
    name: "rm-web-element",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, Ml = () => {
  re({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (c) => new He(c)
  }), re({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (c) => c.map((r) => new q(r))
  }), Ee({
    url: "/web/page",
    name: "mk-web-page",
    params: {
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item",
    digToAutoReloadId: "id"
  }), Re({
    url: "/web/page/{id}",
    name: "up-web-page",
    params: {
      id: { default: void 0 },
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  }), je({
    url: "/web/page/{id}",
    name: "rm-web-page",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, $l = {
  install: (c) => {
    c.component("lkt-web-page") === void 0 && (c.component("lkt-web-page", sl), Se("lkt-web-element-select", gl), Se("lkt-web-element-config", hl));
  }
};
export {
  $l as default,
  jl as setupWebElementsHttp,
  Ml as setupWebPagesHttp
};
