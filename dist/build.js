import { defineComponent as G, setBlockTracking as Ae, createElementVNode as S, createBlock as k, createCommentVNode as C, openBlock as i, resolveDynamicComponent as Ce, normalizeProps as V, mergeProps as g, ref as $, watch as X, computed as M, resolveComponent as E, createElementBlock as N, normalizeClass as z, unref as e, createSlots as De, withCtx as x, createVNode as c, guardReactiveProps as U, nextTick as Ee, Fragment as pe, renderList as Ve, onMounted as ll } from "vue";
import { WebElementLayoutType as O, WebElementType as o, WebParentType as I, WebElementController as Fe, ButtonType as He, TablePermission as se, TableType as ke, WebElement as Y, WebPage as me, FieldType as A, AccordionType as F, BannerType as Pe, LktSettings as te, ensureFieldConfig as tl, getDefaultLktButtonWebElement as al, ItemCrudView as ol, ItemCrudMode as Se, applyTextFormat as q, applyTextAlignment as ve, AccordionToggleMode as nl } from "lkt-vue-kernel";
import { getCurrentLanguage as Te, getAvailableLanguages as ul } from "lkt-i18n";
import { httpCall as Oe, createHTTPGetResource as Q, createHTTPPostResource as Re, createHTTPPutResource as je, createHTTPDeleteResource as $e } from "lkt-http-client";
import { openModal as ce, closeModal as Me, addModal as he } from "lkt-modal";
import { ucfirst as dl, kebabCaseToCamelCase as rl } from "lkt-string-tools";
const j = /* @__PURE__ */ G({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(s, { emit: a }) {
    const v = a, t = (l) => {
      v("input", l);
    };
    return (l, L) => L[0] || (Ae(-1, !0), (L[0] = S("div", {
      contenteditable: l.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (T) => t(T),
      innerHTML: l.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, Ae(1), L[0]);
  }
}), be = (s, a = !1) => {
  if (!s.layout || a) return "";
  let v = [];
  s.layout.type === O.FlexRow && (!s.layout.amountOfItems || s.layout.amountOfItems.length === 0) ? v.push("lkt-flex-row") : s.layout.type === O.FlexRows && (!s.layout.amountOfItems || s.layout.amountOfItems.length === 0) ? v.push("lkt-flex-rows") : s.layout.type === O.FlexColumn && v.push("lkt-flex-column"), s.layout.amountOfItems && s.layout.amountOfItems.length > 0 && (s.layout.type === O.FlexRow ? v.push(s.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : s.layout.type === O.FlexRows ? v.push(s.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : v.push(s.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), s.layout.alignItems && s.layout.alignItems.length > 0 && v.push(s.layout.alignItems.join(" ")), s.layout.justifyContent && s.layout.justifyContent.length > 0 && v.push(s.layout.justifyContent.join(" ")), v.length > 0 && v.push("layout-mode");
  let t = v.join(" ");
  return s.layout.type === O.FlexRows && (t = t.replace("flex-row-", "flex-rows-")), t;
}, il = /* @__PURE__ */ G({
  __name: "LktCustomElement",
  props: {
    settings: {}
  },
  setup(s) {
    return (a, v) => a.settings.type === "component" ? (i(), k(Ce(a.settings.component), V(g({ key: 0 }, a.settings.componentProps)), null, 16)) : C("", !0);
  }
}), sl = { key: 8 }, pl = {
  key: 12,
  class: "lkt-element-actions"
}, Le = /* @__PURE__ */ G({
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
  setup(s, { emit: a }) {
    const v = a, t = s, l = $(t.modelValue);
    X(() => t.modelValue, (u, n) => {
      l.value = u;
    }), X(l, (u, n) => {
      v("update:modelValue", u);
    });
    const L = $(!1), T = (u, n = "text") => {
      const K = u.target.innerHTML.trim();
      K !== l.value.props[n][d] && (l.value.props[n][d] = K);
    }, d = t.lang ?? Te(), h = M(() => [
      o.LktLayoutBox,
      o.LktTextBox,
      o.LktLayoutAccordion,
      o.LktTextAccordion
    ].includes(l.value.type)), b = M(() => [
      o.LktLayoutBox,
      o.LktLayoutAccordion,
      o.LktLayout
    ].includes(l.value.type)), w = M(() => {
      if ([
        o.LktLayoutBox,
        o.LktTextBox
      ].includes(l.value.type))
        return "lkt-box";
      if ([
        o.LktLayoutAccordion,
        o.LktTextAccordion
      ].includes(l.value.type))
        return "lkt-accordion";
    }), D = M(() => l.value.props.class ? l.value.props.class : t.defaultAppearance), R = () => {
      v("crud-update");
    };
    return (u, n) => {
      var ne, ue, de, ee;
      const K = E("lkt-image"), ye = E("lkt-icon"), ae = E("lkt-header"), Z = E("lkt-button"), oe = E("lkt-anchor"), _ = E("lkt-banner");
      return i(), N("div", {
        class: z(["lkt-element", `is-${l.value.type} is-${l.value.id}`]),
        key: l.value.keyMoment
      }, [
        l.value.type === e(o).LktText ? (i(), k(j, {
          key: 0,
          modelValue: l.value.props.text[e(d)],
          "onUpdate:modelValue": n[0] || (n[0] = (r) => l.value.props.text[e(d)] = r),
          disabled: u.disabled || u.parentType === e(I).Page,
          onInput: n[1] || (n[1] = (r) => T(r))
        }, null, 8, ["modelValue", "disabled"])) : h.value ? (i(), k(Ce(w.value), {
          key: 1,
          icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, De({
          default: x(() => [
            b.value ? (i(), k(fe, {
              key: 0,
              modelValue: l.value.children,
              "onUpdate:modelValue": n[4] || (n[4] = (r) => l.value.children = r),
              "layout-selector": e(be)(l.value),
              "is-child": "",
              lang: e(d),
              "is-preview": u.isPreview,
              parent: l.value,
              "parent-type": e(I).Element,
              "modal-crud-config": u.modalCrudConfig,
              "file-browser-config": u.fileBrowserConfig,
              disabled: u.disabled,
              editing: u.editing
            }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (i(), k(j, {
              key: 1,
              modelValue: l.value.props.text[e(d)],
              "onUpdate:modelValue": n[5] || (n[5] = (r) => l.value.props.text[e(d)] = r),
              disabled: u.disabled || u.parentType === e(I).Page,
              onInput: n[6] || (n[6] = (r) => T(r, "text"))
            }, null, 8, ["modelValue", "disabled"]))
          ]),
          _: 2
        }, [
          (ne = l.value.config) != null && ne.hasHeader ? {
            name: "header",
            fn: x(() => [
              c(j, {
                modelValue: l.value.props.header[e(d)],
                "onUpdate:modelValue": n[2] || (n[2] = (r) => l.value.props.header[e(d)] = r),
                disabled: u.disabled || u.parentType === e(I).Page,
                onInput: n[3] || (n[3] = (r) => T(r, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["icon", "class"])) : l.value.type === e(o).LktImage ? (i(), k(K, {
          key: 2,
          class: z(D.value),
          src: l.value.props.src,
          alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(d)] : "",
          title: typeof l.value.props.title == "object" ? l.value.props.title[e(d)] : ""
        }, {
          text: x(() => [
            c(j, {
              modelValue: l.value.props.text[e(d)],
              "onUpdate:modelValue": n[7] || (n[7] = (r) => l.value.props.text[e(d)] = r),
              disabled: u.disabled || u.parentType === e(I).Page,
              onInput: n[8] || (n[8] = (r) => T(r, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(o).LktIcon ? (i(), k(ye, {
          key: 3,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: x(() => [
            c(j, {
              modelValue: l.value.props.text[e(d)],
              "onUpdate:modelValue": n[9] || (n[9] = (r) => l.value.props.text[e(d)] = r),
              disabled: u.disabled || u.parentType === e(I).Page,
              onInput: n[10] || (n[10] = (r) => T(r, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(o).LktHeader ? (i(), k(ae, {
          key: 4,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: x(() => [
            c(j, {
              modelValue: l.value.props.text[e(d)],
              "onUpdate:modelValue": n[11] || (n[11] = (r) => l.value.props.text[e(d)] = r),
              disabled: u.disabled || u.parentType === e(I).Page,
              onInput: n[12] || (n[12] = (r) => T(r, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(o).LktButton ? (i(), k(Z, {
          key: 5,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: x(() => [
            c(j, {
              modelValue: l.value.props.text[e(d)],
              "onUpdate:modelValue": n[13] || (n[13] = (r) => l.value.props.text[e(d)] = r),
              disabled: u.disabled || u.parentType === e(I).Page,
              onInput: n[14] || (n[14] = (r) => T(r, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(o).LktAnchor ? (i(), k(oe, {
          key: 6,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: x(() => [
            c(j, {
              modelValue: l.value.props.text[e(d)],
              "onUpdate:modelValue": n[15] || (n[15] = (r) => l.value.props.text[e(d)] = r),
              disabled: u.disabled || u.parentType === e(I).Page,
              onInput: n[16] || (n[16] = (r) => T(r, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(o).LktTextBanner ? (i(), k(_, {
          key: 7,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value),
          opacity: l.value.props.opacity,
          art: l.value.props.art,
          media: l.value.props.media,
          type: l.value.props.type
        }, De({
          default: x(() => [
            c(j, {
              modelValue: l.value.props.text[e(d)],
              "onUpdate:modelValue": n[21] || (n[21] = (r) => l.value.props.text[e(d)] = r),
              disabled: u.disabled || u.parentType === e(I).Page,
              onInput: n[22] || (n[22] = (r) => T(r, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 2
        }, [
          (ue = l.value.config) != null && ue.hasHeader ? {
            name: "header",
            fn: x(() => [
              c(j, {
                modelValue: l.value.props.header[e(d)],
                "onUpdate:modelValue": n[17] || (n[17] = (r) => l.value.props.header[e(d)] = r),
                disabled: u.disabled || u.parentType === e(I).Page,
                onInput: n[18] || (n[18] = (r) => T(r, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "0"
          } : void 0,
          (de = l.value.config) != null && de.hasSubHeader ? {
            name: "subHeader",
            fn: x(() => [
              c(j, {
                modelValue: l.value.props.subHeader[e(d)],
                "onUpdate:modelValue": n[19] || (n[19] = (r) => l.value.props.subHeader[e(d)] = r),
                disabled: u.disabled || u.parentType === e(I).Page,
                onInput: n[20] || (n[20] = (r) => T(r, "subHeader"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(o).LktIcons ? (i(), N("section", sl, [
          (ee = l.value.config) != null && ee.hasHeader ? (i(), k(ae, { key: 0 }, {
            text: x(() => [
              c(j, {
                modelValue: l.value.props.header[e(d)],
                "onUpdate:modelValue": n[23] || (n[23] = (r) => l.value.props.header[e(d)] = r),
                disabled: u.disabled || u.parentType === e(I).Page,
                onInput: n[24] || (n[24] = (r) => T(r, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          })) : C("", !0),
          c(j, {
            modelValue: l.value.props.text[e(d)],
            "onUpdate:modelValue": n[25] || (n[25] = (r) => l.value.props.text[e(d)] = r),
            disabled: u.disabled || u.parentType === e(I).Page,
            onInput: n[26] || (n[26] = (r) => T(r, "text"))
          }, null, 8, ["modelValue", "disabled"]),
          c(fe, {
            modelValue: l.value.subElements,
            "onUpdate:modelValue": n[27] || (n[27] = (r) => l.value.subElements = r),
            "layout-selector": e(be)(l.value),
            "is-child": "",
            lang: e(d),
            "is-preview": u.isPreview,
            parent: l.value,
            "parent-type": e(I).Element,
            "modal-crud-config": u.modalCrudConfig,
            "file-browser-config": u.fileBrowserConfig,
            disabled: u.disabled,
            editing: u.editing,
            "default-appearance": l.value.props.class,
            "is-sub-element": ""
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing", "default-appearance"])
        ])) : l.value.type === e(o).LktLayout ? (i(), k(fe, {
          key: 9,
          modelValue: l.value.children,
          "onUpdate:modelValue": n[28] || (n[28] = (r) => l.value.children = r),
          "layout-selector": e(be)(l.value),
          "is-child": "",
          lang: e(d),
          "is-preview": u.isPreview,
          parent: l.value,
          "parent-type": e(I).Element,
          "modal-crud-config": u.modalCrudConfig,
          "file-browser-config": u.fileBrowserConfig,
          disabled: u.disabled,
          editing: u.editing
        }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : l.value.type.startsWith("custom:") ? (i(), k(il, {
          key: 10,
          settings: e(Fe).getCustomWebElementSettings(l.value.type)
        }, null, 8, ["settings"])) : (i(), k(Ce(l.value.component), V(g({ key: 11 }, l.value.props)), null, 16)),
        !L.value && u.canRenderActions ? (i(), N("div", pl, [
          c(Z, V(U({
            type: e(He).Button,
            text: l.value.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-web-element-config",
            modalKey: l.value.id,
            modalData: {
              element: l.value,
              parent: u.parent,
              parentType: u.parentType,
              fileBrowserConfig: u.fileBrowserConfig,
              modalCrudConfig: u.modalCrudConfig,
              defaultAppearance: u.defaultAppearance,
              isSubElement: u.isSubElement,
              onUpdate: R
            }
          })), null, 16)
        ])) : C("", !0)
      ], 2);
    };
  }
}), ml = {
  key: 0,
  class: "like-lkt-field-label"
}, fe = /* @__PURE__ */ G({
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
  setup(s, { emit: a }) {
    const v = a, t = s, l = $(t.modelValue), L = $(t.editing), T = $(!1);
    X(l, (b) => {
      v("update:modelValue", b);
    }, { deep: !0 }), X(L, (b) => {
      console.log("editing", b);
    }, { deep: !0 });
    const d = () => {
      if (t.isSubElement) {
        T.value = !0, Ee(() => {
          T.value = !1, v("crud-update");
        });
        return;
      }
      const b = t.parentType === I.Page ? "r-web-page-children" : "r-web-element-children";
      Oe(b, { id: t.parent.id }).then((w) => {
        l.value = w.data.map((D) => new Y(D)), v("crud-update");
      });
    }, h = M(() => {
      let b = [se.Update, se.Sort];
      t.isChild || b.push(se.Create), t.parentType === I.Page && b.push(se.SwitchEditMode);
      let w = t.isPreview ? ke.Table : ke.Item;
      L.value && (w = ke.Table);
      let D = "lkt-elements-table--default-grid";
      return t.isChild && (D = t.layoutSelector), {
        type: w,
        perms: b,
        itemsContainerClass: D,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (R) => {
          if (!R.layout || t.isPreview) return "";
          let u = [];
          return R.layout.columns && R.layout.columns.length > 0 && u.push(R.layout.columns.join(" ")), u.join(" ");
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
            onUpdate: d
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
    return (b, w) => {
      const D = E("lkt-table");
      return i(), N("div", null, [
        b.parentType === e(I).Page ? (i(), N("span", ml, "Web Elements")) : C("", !0),
        c(D, g({
          class: "lkt-elements-table",
          modelValue: l.value,
          "onUpdate:modelValue": w[0] || (w[0] = (R) => l.value = R)
        }, h.value, {
          "edit-mode": L.value,
          "onUpdate:editMode": w[1] || (w[1] = (R) => L.value = R)
        }), {
          item: x(({ _: R, index: u }) => [
            T.value ? C("", !0) : (i(), k(Le, {
              key: 0,
              modelValue: l.value[u],
              "onUpdate:modelValue": (n) => l.value[u] = n,
              index: u,
              lang: b.lang,
              "is-preview": b.isPreview,
              parent: b.parent,
              "parent-type": b.parentType,
              "file-browser-config": b.fileBrowserConfig,
              "modal-crud-config": b.modalCrudConfig,
              "can-render-actions": !L.value,
              disabled: b.disabled || !L.value,
              editing: L.value,
              "default-appearance": b.defaultAppearance,
              "is-sub-element": b.isSubElement,
              onCrudUpdate: d
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled", "editing", "default-appearance", "is-sub-element"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"])
      ]);
    };
  }
}), cl = { class: "lkt-web-page" }, fl = { class: "lkt-grid-1 lkt-grid-3--from-768" }, yl = /* @__PURE__ */ G({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(s) {
    const a = s, v = $(new me(a.modelValue)), t = $(null), l = () => {
      t.value.turnStoredDataIntoOriginal();
    }, L = M(() => {
      var h, b, w;
      let T = !1, d = !1;
      return T = {
        ...a.crudConfig.createButton,
        resourceData: {
          ...(h = a.crudConfig.createButton) == null ? void 0 : h.resourceData,
          ...v.value
        }
      }, d = {
        ...a.crudConfig.updateButton,
        resourceData: {
          ...(b = a.crudConfig.updateButton) == null ? void 0 : b.resourceData,
          ...v.value
        }
      }, {
        ...a.crudConfig,
        createButton: T,
        updateButton: d,
        dropButton: {
          ...a.crudConfig.dropButton,
          resourceData: {
            ...(w = a.crudConfig.dropButton) == null ? void 0 : w.resourceData,
            ...v.value
          }
        }
      };
    });
    return (T, d) => {
      const h = E("lkt-field"), b = E("lkt-item-crud");
      return i(), N("section", cl, [
        c(b, g({
          ref_key: "itemCrudRef",
          ref: t,
          modelValue: v.value,
          "onUpdate:modelValue": d[0] || (d[0] = (w) => v.value = w)
        }, L.value, {
          title: v.value.name
        }), {
          item: x(({ item: w }) => [
            S("div", fl, [
              c(h, g({
                modelValue: w.name,
                "onUpdate:modelValue": (D) => w.name = D
              }, {
                type: e(A).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            c(fe, {
              modelValue: w.webElements,
              "onUpdate:modelValue": (D) => w.webElements = D,
              lang: e(Te)(),
              "modal-crud-config": T.modalCrudConfig,
              "file-browser-config": T.fileBrowserConfig,
              parent: v.value,
              "parent-type": e(I).Page,
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
}), gl = { class: "lkt-grid-1" }, kl = { class: "lkt-grid-3" }, vl = { class: "lkt-grid-3" }, bl = { class: "lkt-grid-3" }, Cl = { class: "lkt-grid-3" }, Vl = { class: "lkt-grid-3" }, Ll = /* @__PURE__ */ G({
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
  setup(s) {
    const a = s, v = $(a.parent), t = (L) => {
      ce("lkt-web-element-config", "_", {
        element: Y.createByType(L),
        parent: v.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        onUpdate: a.onUpdate
      }), setTimeout(() => {
        Me(a.modalName, a.modalKey);
      }, 200);
    }, l = M(() => Fe.getElements());
    return (L, T) => {
      const d = E("lkt-button"), h = E("lkt-accordion"), b = E("lkt-modal");
      return i(), k(b, g({ id: "lkt-add-element-modal" }, {
        modalName: L.modalName,
        modalKey: L.modalKey,
        zIndex: L.zIndex,
        title: "LktBox Config"
      }), {
        default: x(() => [
          S("div", gl, [
            c(h, V(U({
              type: e(F).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: x(() => [
                S("div", kl, [
                  c(d, V(U({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        t(e(o).LktText);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        t(e(o).LktHeader);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        t(e(o).LktImage);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        t(e(o).LktIcon);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        t(e(o).LktTextBox);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-banner",
                    text: "LktTextBanner",
                    events: {
                      click: () => {
                        t(e(o).LktTextBanner);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            c(h, V(U({
              type: e(F).Auto,
              title: "Collection elements"
            })), {
              default: x(() => [
                S("div", vl, [
                  c(d, V(U({
                    icon: "lkt-icn-icon",
                    text: "LktIcons",
                    events: {
                      click: () => {
                        t(e(o).LktIcons);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            c(h, V(U({
              type: e(F).Auto,
              title: "Containers"
            })), {
              default: x(() => [
                S("div", bl, [
                  c(d, V(U({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-columns",
                    text: "LktLayout",
                    events: {
                      click: () => {
                        t(e(o).LktLayout);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            c(h, V(U({
              type: e(F).Auto,
              title: "Actions"
            })), {
              default: x(() => [
                S("div", Cl, [
                  c(d, V(U({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        t(e(o).LktAnchor);
                      }
                    }
                  })), null, 16),
                  c(d, V(U({
                    icon: "lkt-icn-button",
                    text: "LktButton",
                    events: {
                      click: () => {
                        t(e(o).LktButton);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            c(h, V(U({
              type: e(F).Auto,
              title: "Custom"
            })), {
              default: x(() => [
                S("div", Vl, [
                  (i(!0), N(pe, null, Ve(l.value, (w) => (i(), k(d, g({ ref_for: !0 }, {
                    icon: w.icon,
                    text: w.label ?? w.id,
                    events: {
                      click: () => {
                        t(`custom:${w.id}`);
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
}), Tl = () => [
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
], wl = () => [
  {
    value: Pe.Static,
    label: "Static"
  },
  {
    value: Pe.Parallax,
    label: "Parallax"
  }
], Bl = () => [
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
], xl = () => {
  let s = {
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
  for (let v in s) {
    let t = s[v];
    if (!(!t.columns || !Array.isArray(t.columns) || t.columns.length === 0))
      for (let l in t.columns) {
        let L = t.columns[l].toString();
        a.push({
          value: t.css.replace("{n}", L),
          label: t.label.replace("{n}", L)
        });
      }
  }
  return a;
}, Il = [
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
], Ul = {
  key: 1,
  class: "lkt-flex-row"
}, Al = { class: "lkt-flex-col-9 lkt-grid-1" }, Dl = { class: "lkt-flex-col-3" }, Pl = { class: "lkt-web-element-config-scroller lkt-grid-1" }, Sl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, hl = { class: "lkt-grid-1" }, El = { class: "lkt-grid-1" }, Fl = { class: "lkt-grid-1" }, Hl = { class: "lkt-grid-1" }, Ol = { class: "lkt-grid-1" }, Rl = /* @__PURE__ */ G({
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
  setup(s) {
    var xe, Ie, Ue;
    const a = s, v = $(parseInt(a.modalKey)), t = $(new Y(a.element)), l = $(null), L = $(!1);
    X(() => a.modalKey, (f) => {
      v.value = parseInt(f);
    });
    const T = () => {
      let f = t.value.getClone();
      ce("lkt-web-element-config", "_", {
        element: f,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: t.value.id
      });
    }, d = () => {
      let f = t.value.getClone();
      ce("lkt-web-element-config", "_", {
        element: f,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: t.value.id
      });
    }, h = t.value.getCustomSettings(), b = ul(), w = Te(), D = !h || ((xe = h.options) == null ? void 0 : xe.textEditor) === !0, R = [
      o.LktLayoutBox,
      o.LktLayoutAccordion,
      o.LktTextBox,
      o.LktTextAccordion,
      o.LktTextBanner,
      o.LktIcons
    ].includes(t.value.type), u = [
      o.LktTextBanner
    ].includes(t.value.type), n = [
      o.LktTextBanner
    ].includes(t.value.type), K = [
      o.LktTextBanner
    ].includes(t.value.type), ye = [
      o.LktText
    ].includes(t.value.type), ae = [
      o.LktLayout
    ].includes(t.value.type), Z = [
      o.LktTextBanner
    ].includes(t.value.type), oe = [
      o.LktLayoutBox,
      o.LktLayoutAccordion,
      o.LktTextBox,
      o.LktTextAccordion,
      o.LktIcon,
      o.LktButton,
      o.LktAnchor
    ].includes(t.value.type), _ = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktLayout, o.LktIcons].includes(t.value.type), ne = [o.LktImage].includes(t.value.type), ue = [o.LktLayoutAccordion, o.LktTextAccordion].includes(t.value.type), de = [o.LktLayoutAccordion, o.LktLayoutBox, o.LktLayout].includes(t.value.type), ee = [O.FlexRow, O.FlexRows].includes((Ue = (Ie = a.parent) == null ? void 0 : Ie.layout) == null ? void 0 : Ue.type), r = Tl(), Ne = wl(), We = Bl(), Ke = xl(), ze = [
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
    ], _e = [
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
    ], Ge = [
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
    ], re = (f, p) => {
      if (f.length > 0) {
        let W = String(p.value), H = "";
        if (W.includes("--from") && (H = "--" + W.split("--")[1]), W.includes("--to") && (H = "--" + W.split("--")[1]), H !== "") {
          let B = f.find((J) => String(J).includes(H));
          if (B)
            return B === p.value;
        }
        let P = f.find((B) => !String(B).includes("--"));
        if (P)
          return P === W || W.includes("--");
      }
      return !0;
    }, Je = (f) => {
      var p;
      return re(
        ((p = t.value.layout) == null ? void 0 : p.amountOfItems) ?? [],
        f
      );
    }, qe = (f) => {
      var p;
      return re(
        ((p = t.value.layout) == null ? void 0 : p.alignItems) ?? [],
        f
      );
    }, Qe = (f) => {
      var p;
      return re(
        ((p = t.value.layout) == null ? void 0 : p.justifyContent) ?? [],
        f
      );
    }, Xe = (f) => {
      var p;
      return re(
        ((p = t.value.layout) == null ? void 0 : p.columns) ?? [],
        f
      );
    }, Ye = () => {
      t.value.addSubElement();
    }, we = M(() => {
      let f = {};
      switch (t.value.type) {
        case o.LktLayoutBox:
        case o.LktTextBox:
          f = te.defaultFieldLktBoxElementCustomClassField;
          break;
        case o.LktLayoutAccordion:
        case o.LktTextAccordion:
          f = te.defaultFieldLktAccordionElementCustomClassField;
          break;
        case o.LktIcon:
        case o.LktIcons:
          f = te.defaultFieldLktIconElementCustomClassField;
          break;
        case o.LktImage:
          f = te.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(f).length > 0 ? tl(f, te.defaultFieldElementCustomClassField) : void 0;
    }), Be = M(() => dl(rl(t.value.type)) + " Config"), ge = (f, p) => {
      p || (p = t.value.props), p.alt = f[0].nameData, p.title = f[0].nameData;
    };
    X(() => t.value.config.amountOfCallToActions, (f) => {
      console.log("updated amount of cta: ", f);
      let p = t.value.config.callToActions.length;
      f > p ? t.value.config.callToActions.push(al()) : t.value.config.callToActions.splice(f, 1);
    }), ll(() => {
      console.log("mounted: ", a), !t.value.id && t.value.type === o.LktLayout && (L.value = !0, Ee(() => {
        var f;
        Oe(a.modalCrudConfig.createButton.resource, {
          ...(f = a.modalCrudConfig.createButton) == null ? void 0 : f.resourceData,
          ...t.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((p) => {
          console.log("created layout", p), t.value.id = p.data.id, console.log("newid:", t.value.id), Me(a.modalName, a.modalKey), setTimeout(() => {
            ce(a.modalName, p.data.id, {
              element: t.value,
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
    const Ze = M(() => a.isSubElement ? [] : ["update", "drop", "delete"]), ie = () => {
      typeof a.onUpdate == "function" && a.onUpdate();
    }, el = M(() => {
      var P, B, J;
      let f = !1, p = !1;
      !(!t.value.id && t.value.type === o.LktLayout) && !a.isSubElement && (f = {
        ...a.modalCrudConfig.createButton,
        resourceData: {
          ...(P = a.modalCrudConfig.createButton) == null ? void 0 : P.resourceData,
          ...t.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        },
        events: {
          click: ie
        }
      }, p = {
        ...a.modalCrudConfig.updateButton,
        resourceData: {
          ...(B = a.modalCrudConfig.updateButton) == null ? void 0 : B.resourceData,
          ...t.value
        },
        events: {
          click: ie
        }
      });
      let H = a.isSubElement ? ie : void 0;
      return {
        mode: v.value > 0 ? Se.Update : Se.Create,
        view: ol.Modal,
        editing: !0,
        perms: Ze.value,
        title: Be.value,
        beforeClose: H,
        modalConfig: {
          modalName: a.modalName,
          modalKey: a.modalKey,
          zIndex: a.zIndex,
          title: Be.value,
          beforeClose: H
        },
        readData: {
          id: v.value
        },
        ...a.modalCrudConfig,
        createButton: f,
        updateButton: p,
        dropButton: a.isSubElement ? !1 : {
          ...a.modalCrudConfig.dropButton,
          resourceData: {
            ...(J = a.modalCrudConfig.dropButton) == null ? void 0 : J.resourceData,
            ...t.value
          },
          events: {
            click: ie
          }
        },
        enabledSaveWithoutChanges: !0
      };
    });
    return (f, p) => {
      const W = E("lkt-loader"), H = E("lkt-accordion"), P = E("lkt-button"), B = E("lkt-field"), J = E("lkt-item-crud");
      return i(), k(J, g({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: t.value,
        "onUpdate:modelValue": p[11] || (p[11] = (y) => t.value = y)
      }, el.value), {
        item: x(({ item: y }) => [
          L.value ? (i(), k(W, { key: 0 })) : (i(), N("div", Ul, [
            S("div", Al, [
              c(Le, {
                modelValue: t.value,
                "onUpdate:modelValue": p[0] || (p[0] = (m) => t.value = m),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": f.modalCrudConfig,
                parent: t.value,
                "parent-type": e(I).Element,
                "default-appearance": f.defaultAppearance,
                onCrudUpdate: f.onUpdate
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type", "default-appearance", "onCrudUpdate"]),
              (i(!0), N(pe, null, Ve(e(b), (m) => (i(), N(pe, null, [
                m !== e(w) ? (i(), k(H, g({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(F).Auto,
                  title: m
                }), {
                  default: x(() => [
                    c(Le, {
                      modelValue: t.value,
                      "onUpdate:modelValue": p[1] || (p[1] = (le) => t.value = le),
                      lang: m,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": f.modalCrudConfig,
                      parent: t.value,
                      "parent-type": e(I).Element,
                      "default-appearance": f.defaultAppearance
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type", "default-appearance"])
                  ]),
                  _: 2
                }, 1040)) : C("", !0)
              ], 64))), 256))
            ]),
            S("div", Dl, [
              S("div", Pl, [
                e(de) ? (i(), k(P, V(g({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: f.fileBrowserConfig,
                    modalCrudConfig: f.modalCrudConfig,
                    parent: t.value,
                    parentType: e(I).Element,
                    onUpdate: f.onCrudUpdate
                  }
                })), null, 16)) : C("", !0),
                y.type === e(o).LktIcons ? (i(), k(P, V(g({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: Ye
                  }
                })), null, 16)) : C("", !0),
                e(D) ? (i(), k(H, V(g({ key: 2 }, {
                  type: e(F).Always,
                  title: "Text editor"
                })), {
                  default: x(() => [
                    S("div", Sl, [
                      c(P, g({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: p[2] || (p[2] = () => e(q)("bold"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: p[3] || (p[3] = () => e(q)("italic"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: p[4] || (p[4] = () => e(q)("underline"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: p[5] || (p[5] = () => e(q)("strikeThrough"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: p[6] || (p[6] = () => e(q)("superscript"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: p[7] || (p[7] = () => e(q)("subscript"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: p[8] || (p[8] = () => e(ve)("left"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: p[9] || (p[9] = () => e(ve)("center"))
                      }), null, 16),
                      c(P, g({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: p[10] || (p[10] = () => e(ve)("right"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16)) : C("", !0),
                !e(ye) && !e(ae) ? (i(), k(H, V(g({ key: 3 }, {
                  type: e(F).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(nl).Display
                })), {
                  default: x(() => [
                    S("div", hl, [
                      we.value ? (i(), k(B, g({ key: 0 }, {
                        type: e(A).Select,
                        ...we.value,
                        canClear: !0
                      }, {
                        modelValue: y.props.class,
                        "onUpdate:modelValue": (m) => y.props.class = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(R) ? (i(), k(B, g({ key: 1 }, {
                        type: e(A).Switch,
                        label: "Has header"
                      }, {
                        modelValue: y.config.hasHeader,
                        "onUpdate:modelValue": (m) => y.config.hasHeader = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(u) ? (i(), k(B, g({ key: 2 }, {
                        type: e(A).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: y.config.hasSubHeader,
                        "onUpdate:modelValue": (m) => y.config.hasSubHeader = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(oe) ? (i(), k(B, g({ key: 3 }, {
                        type: e(A).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: y.config.hasIcon,
                        "onUpdate:modelValue": (m) => y.config.hasIcon = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(oe) ? (i(), k(B, g({ key: 4 }, {
                        type: e(A).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Il)
                      }, {
                        modelValue: y.props.icon,
                        "onUpdate:modelValue": (m) => y.props.icon = m,
                        disabled: !y.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : C("", !0),
                      e(ne) ? (i(), k(B, g({ key: 5 }, {
                        type: e(A).Image,
                        label: "Image",
                        fileBrowserConfig: f.fileBrowserConfig
                      }, {
                        modelValue: y.props.src,
                        "onUpdate:modelValue": (m) => y.props.src = m,
                        onPickedFiles: ge
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(K) ? (i(), k(B, g({ key: 6 }, {
                        type: e(A).Image,
                        label: "Media content",
                        fileBrowserConfig: f.fileBrowserConfig
                      }, {
                        modelValue: y.props.media.src,
                        "onUpdate:modelValue": (m) => y.props.media.src = m,
                        onPickedFiles: (m) => ge(m, y.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : C("", !0),
                      e(K) ? (i(), k(B, g({ key: 7 }, {
                        type: e(A).Select,
                        label: "Type",
                        options: e(Ne)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (m) => y.props.type = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(n) ? (i(), k(B, g({ key: 8 }, {
                        type: e(A).Image,
                        label: "Background Image",
                        fileBrowserConfig: f.fileBrowserConfig
                      }, {
                        modelValue: y.props.art.src,
                        "onUpdate:modelValue": (m) => y.props.art.src = m,
                        onPickedFiles: (m) => ge(m, y.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : C("", !0),
                      S("div", null, [
                        e(Z) ? (i(), k(B, g({ key: 0 }, {
                          type: e(A).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (m) => y.props.opacity = m
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                        e(Z) ? (i(), k(B, g({ key: 1 }, {
                          type: e(A).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (m) => y.props.opacity = m
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0)
                      ]),
                      e(K) ? (i(), k(B, g({ key: 9 }, {
                        type: e(A).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: y.config.amountOfCallToActions,
                        "onUpdate:modelValue": (m) => y.config.amountOfCallToActions = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : C("", !0),
                y.config.amountOfCallToActions > 0 ? (i(!0), N(pe, { key: 4 }, Ve(y.config.callToActions, (m) => (i(), k(H, g({ ref_for: !0 }, {
                  type: e(F).Auto,
                  title: "CTA #1"
                }), {
                  default: x(() => [
                    S("div", El, [
                      c(B, g({ ref_for: !0 }, {
                        type: e(A).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: m.config.hasIcon,
                        "onUpdate:modelValue": (le) => m.config.hasIcon = le
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      c(B, g({ ref_for: !0 }, {
                        type: e(A).Text,
                        label: "Icon"
                      }, {
                        modelValue: m.props.icon,
                        "onUpdate:modelValue": (le) => m.props.icon = le,
                        disabled: !m.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : C("", !0),
                e(ue) ? (i(), k(H, V(g({ key: 5 }, {
                  type: e(F).Auto,
                  title: "Accordion Config"
                })), {
                  default: x(() => [
                    S("div", Fl, [
                      c(B, g({
                        type: e(A).Select,
                        label: "Type",
                        options: e(r)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (m) => y.props.type = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : C("", !0),
                e(_) || e(ee) ? (i(), k(H, V(g({ key: 6 }, {
                  type: e(F).Auto,
                  title: "Layout Config"
                })), {
                  default: x(() => [
                    S("div", Hl, [
                      e(_) ? (i(), k(B, g({ key: 0 }, {
                        type: e(A).Select,
                        label: "Type",
                        options: e(We)
                      }, {
                        modelValue: y.layout.type,
                        "onUpdate:modelValue": (m) => y.layout.type = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(_) && y.layout.type !== e(O).FlexColumn ? (i(), k(B, g({ key: 1 }, {
                        type: e(A).Select,
                        label: y.layout.type === e(O).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Ke),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Je
                        }
                      }, {
                        modelValue: y.layout.amountOfItems,
                        "onUpdate:modelValue": (m) => y.layout.amountOfItems = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(_) ? (i(), k(B, g({ key: 2 }, {
                        type: e(A).Select,
                        label: "Align items",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: qe
                        }
                      }, {
                        modelValue: y.layout.alignItems,
                        "onUpdate:modelValue": (m) => y.layout.alignItems = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(_) ? (i(), k(B, g({ key: 3 }, {
                        type: e(A).Select,
                        label: "Justify content",
                        options: Ge,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Qe
                        }
                      }, {
                        modelValue: y.layout.justifyContent,
                        "onUpdate:modelValue": (m) => y.layout.justifyContent = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0),
                      e(ee) ? (i(), k(B, g({ key: 4 }, {
                        type: e(A).Select,
                        label: "Columns Reserved",
                        options: ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Xe
                        }
                      }, {
                        modelValue: y.layout.columns,
                        "onUpdate:modelValue": (m) => y.layout.columns = m
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : C("", !0),
                c(P, V(U({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(He).Split
                })), {
                  split: x(({ doClose: m }) => [
                    S("div", Ol, [
                      c(P, V(U({
                        text: "Before",
                        events: {
                          click: T
                        }
                      })), null, 16),
                      c(P, V(U({
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
}), zl = () => {
  Q({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (s) => new Y(s)
  }), Q({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((a) => new Y(a))
  }), Re({
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
  }), je({
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
  }), $e({
    url: "/web/element/{id}",
    name: "rm-web-element",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, _l = () => {
  Q({
    url: "/web/pages",
    name: "ls-web-pages",
    params: {},
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((a) => new me(s))
  }), Q({
    url: "/web/pages/{type}",
    name: "ls-web-pages-type",
    params: { type: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((a) => new me(s))
  }), Q({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (s) => new me(s)
  }), Q({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((a) => new Y(a))
  }), Re({
    url: "/web/page",
    name: "mk-web-page",
    params: {
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item",
    digToAutoReloadId: "id"
  }), je({
    url: "/web/page/{id}",
    name: "up-web-page",
    params: {
      id: { default: void 0 },
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  }), $e({
    url: "/web/page/{id}",
    name: "rm-web-page",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, Gl = {
  install: (s) => {
    s.component("lkt-web-page") === void 0 && (s.component("lkt-web-page", yl), he("lkt-web-element-select", Ll), he("lkt-web-element-config", Rl));
  }
};
export {
  Gl as default,
  zl as setupWebElementsHttp,
  _l as setupWebPagesHttp
};
