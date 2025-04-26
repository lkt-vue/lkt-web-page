import { defineComponent as X, setBlockTracking as Be, createElementVNode as S, ref as M, watch as q, computed as $, resolveComponent as h, createElementBlock as N, openBlock as p, normalizeClass as z, createBlock as v, createCommentVNode as L, unref as e, resolveDynamicComponent as xe, createSlots as Ie, withCtx as w, createVNode as s, normalizeProps as T, mergeProps as g, guardReactiveProps as U, nextTick as Se, onMounted as Xe, Fragment as ye, renderList as Ue } from "vue";
import { WebElementLayoutType as F, WebElementType as a, WebParentType as B, ButtonType as he, TablePermission as re, TableType as ge, WebElement as Q, WebPage as Ee, FieldType as A, AccordionType as H, BannerType as Ae, LktSettings as le, ensureFieldConfig as Ye, getDefaultLktButtonWebElement as Ze, ItemCrudView as el, ItemCrudMode as De, applyTextFormat as J, applyTextAlignment as ke, AccordionToggleMode as ll } from "lkt-vue-kernel";
import { getCurrentLanguage as Ce, getAvailableLanguages as tl } from "lkt-i18n";
import { httpCall as Fe, createHTTPGetResource as pe, createHTTPPostResource as He, createHTTPPutResource as Oe, createHTTPDeleteResource as Re } from "lkt-http-client";
import { openModal as ie, closeModal as je, addModal as Pe } from "lkt-modal";
import { ucfirst as ol, kebabCaseToCamelCase as al } from "lkt-string-tools";
const R = /* @__PURE__ */ X({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(f, { emit: o }) {
    const b = o, t = (l) => {
      b("input", l);
    };
    return (l, x) => x[0] || (Be(-1, !0), (x[0] = S("div", {
      contenteditable: l.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (k) => t(k),
      innerHTML: l.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, Be(1), x[0]);
  }
}), ve = (f, o = !1) => {
  if (!f.layout || o) return "";
  let b = [];
  f.layout.type === F.FlexRow && (!f.layout.amountOfItems || f.layout.amountOfItems.length === 0) ? b.push("lkt-flex-row") : f.layout.type === F.FlexRows && (!f.layout.amountOfItems || f.layout.amountOfItems.length === 0) ? b.push("lkt-flex-rows") : f.layout.type === F.FlexColumn && b.push("lkt-flex-column"), f.layout.amountOfItems && f.layout.amountOfItems.length > 0 && (f.layout.type === F.FlexRow ? b.push(f.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : f.layout.type === F.FlexRows ? b.push(f.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : b.push(f.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), f.layout.alignItems && f.layout.alignItems.length > 0 && b.push(f.layout.alignItems.join(" ")), f.layout.justifyContent && f.layout.justifyContent.length > 0 && b.push(f.layout.justifyContent.join(" ")), b.length > 0 && b.push("layout-mode");
  let t = b.join(" ");
  return f.layout.type === F.FlexRows && (t = t.replace("flex-row-", "flex-rows-")), t;
}, nl = { key: 8 }, ul = {
  key: 11,
  class: "lkt-element-actions"
}, be = /* @__PURE__ */ X({
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
  setup(f, { emit: o }) {
    const b = o, t = f, l = M(t.modelValue);
    q(() => t.modelValue, (u, n) => {
      l.value = u;
    }), q(l, (u, n) => {
      b("update:modelValue", u);
    });
    const x = M(!1), k = (u, n = "text") => {
      const G = u.target.innerHTML.trim();
      G !== l.value.props[n][m] && (l.value.props[n][m] = G);
    }, m = t.lang ?? Ce(), j = $(() => [
      a.LktLayoutBox,
      a.LktTextBox,
      a.LktLayoutAccordion,
      a.LktTextAccordion
    ].includes(l.value.type)), C = $(() => [
      a.LktLayoutBox,
      a.LktLayoutAccordion,
      a.LktLayout
    ].includes(l.value.type)), I = $(() => {
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
    }), D = $(() => l.value.props.class ? l.value.props.class : t.defaultAppearance), O = () => {
      console.log("triggered onModalUpdate!"), b("crud-update");
    };
    return (u, n) => {
      var oe, Z, ae, ne;
      const G = h("lkt-image"), te = h("lkt-icon"), Y = h("lkt-header"), K = h("lkt-button"), me = h("lkt-anchor"), ce = h("lkt-banner");
      return p(), N("div", {
        class: z(["lkt-element", `is-${l.value.type} is-${l.value.id}`]),
        key: l.value.keyMoment
      }, [
        l.value.type === e(a).LktText ? (p(), v(R, {
          key: 0,
          modelValue: l.value.props.text[e(m)],
          "onUpdate:modelValue": n[0] || (n[0] = (d) => l.value.props.text[e(m)] = d),
          disabled: u.disabled || u.parentType === e(B).Page,
          onInput: n[1] || (n[1] = (d) => k(d))
        }, null, 8, ["modelValue", "disabled"])) : j.value ? (p(), v(xe(I.value), {
          key: 1,
          icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, Ie({
          default: w(() => [
            C.value ? (p(), v(se, {
              key: 0,
              modelValue: l.value.children,
              "onUpdate:modelValue": n[4] || (n[4] = (d) => l.value.children = d),
              "layout-selector": e(ve)(l.value),
              "is-child": "",
              lang: e(m),
              "is-preview": u.isPreview,
              parent: l.value,
              "parent-type": e(B).Element,
              "modal-crud-config": u.modalCrudConfig,
              "file-browser-config": u.fileBrowserConfig,
              disabled: u.disabled,
              editing: u.editing
            }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), v(R, {
              key: 1,
              modelValue: l.value.props.text[e(m)],
              "onUpdate:modelValue": n[5] || (n[5] = (d) => l.value.props.text[e(m)] = d),
              disabled: u.disabled || u.parentType === e(B).Page,
              onInput: n[6] || (n[6] = (d) => k(d, "text"))
            }, null, 8, ["modelValue", "disabled"]))
          ]),
          _: 2
        }, [
          (oe = l.value.config) != null && oe.hasHeader ? {
            name: "header",
            fn: w(() => [
              s(R, {
                modelValue: l.value.props.header[e(m)],
                "onUpdate:modelValue": n[2] || (n[2] = (d) => l.value.props.header[e(m)] = d),
                disabled: u.disabled || u.parentType === e(B).Page,
                onInput: n[3] || (n[3] = (d) => k(d, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["icon", "class"])) : l.value.type === e(a).LktImage ? (p(), v(G, {
          key: 2,
          class: z(D.value),
          src: l.value.props.src,
          alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(m)] : "",
          title: typeof l.value.props.title == "object" ? l.value.props.title[e(m)] : ""
        }, {
          text: w(() => [
            s(R, {
              modelValue: l.value.props.text[e(m)],
              "onUpdate:modelValue": n[7] || (n[7] = (d) => l.value.props.text[e(m)] = d),
              disabled: u.disabled || u.parentType === e(B).Page,
              onInput: n[8] || (n[8] = (d) => k(d, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(a).LktIcon ? (p(), v(te, {
          key: 3,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: w(() => [
            s(R, {
              modelValue: l.value.props.text[e(m)],
              "onUpdate:modelValue": n[9] || (n[9] = (d) => l.value.props.text[e(m)] = d),
              disabled: u.disabled || u.parentType === e(B).Page,
              onInput: n[10] || (n[10] = (d) => k(d, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktHeader ? (p(), v(Y, {
          key: 4,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: w(() => [
            s(R, {
              modelValue: l.value.props.text[e(m)],
              "onUpdate:modelValue": n[11] || (n[11] = (d) => l.value.props.text[e(m)] = d),
              disabled: u.disabled || u.parentType === e(B).Page,
              onInput: n[12] || (n[12] = (d) => k(d, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktButton ? (p(), v(K, {
          key: 5,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: w(() => [
            s(R, {
              modelValue: l.value.props.text[e(m)],
              "onUpdate:modelValue": n[13] || (n[13] = (d) => l.value.props.text[e(m)] = d),
              disabled: u.disabled || u.parentType === e(B).Page,
              onInput: n[14] || (n[14] = (d) => k(d, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktAnchor ? (p(), v(me, {
          key: 6,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value)
        }, {
          text: w(() => [
            s(R, {
              modelValue: l.value.props.text[e(m)],
              "onUpdate:modelValue": n[15] || (n[15] = (d) => l.value.props.text[e(m)] = d),
              disabled: u.disabled || u.parentType === e(B).Page,
              onInput: n[16] || (n[16] = (d) => k(d, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }, 8, ["icon", "class"])) : l.value.type === e(a).LktTextBanner ? (p(), v(ce, {
          key: 7,
          icon: l.value.config.hasIcon ? l.value.props.icon : "",
          class: z(D.value),
          opacity: l.value.props.opacity,
          art: l.value.props.art,
          media: l.value.props.media,
          type: l.value.props.type
        }, Ie({
          default: w(() => [
            s(R, {
              modelValue: l.value.props.text[e(m)],
              "onUpdate:modelValue": n[21] || (n[21] = (d) => l.value.props.text[e(m)] = d),
              disabled: u.disabled || u.parentType === e(B).Page,
              onInput: n[22] || (n[22] = (d) => k(d, "text"))
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 2
        }, [
          (Z = l.value.config) != null && Z.hasHeader ? {
            name: "header",
            fn: w(() => [
              s(R, {
                modelValue: l.value.props.header[e(m)],
                "onUpdate:modelValue": n[17] || (n[17] = (d) => l.value.props.header[e(m)] = d),
                disabled: u.disabled || u.parentType === e(B).Page,
                onInput: n[18] || (n[18] = (d) => k(d, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "0"
          } : void 0,
          (ae = l.value.config) != null && ae.hasSubHeader ? {
            name: "subHeader",
            fn: w(() => [
              s(R, {
                modelValue: l.value.props.subHeader[e(m)],
                "onUpdate:modelValue": n[19] || (n[19] = (d) => l.value.props.subHeader[e(m)] = d),
                disabled: u.disabled || u.parentType === e(B).Page,
                onInput: n[20] || (n[20] = (d) => k(d, "subHeader"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(a).LktIcons ? (p(), N("section", nl, [
          (ne = l.value.config) != null && ne.hasHeader ? (p(), v(Y, { key: 0 }, {
            text: w(() => [
              s(R, {
                modelValue: l.value.props.header[e(m)],
                "onUpdate:modelValue": n[23] || (n[23] = (d) => l.value.props.header[e(m)] = d),
                disabled: u.disabled || u.parentType === e(B).Page,
                onInput: n[24] || (n[24] = (d) => k(d, "header"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          })) : L("", !0),
          s(R, {
            modelValue: l.value.props.text[e(m)],
            "onUpdate:modelValue": n[25] || (n[25] = (d) => l.value.props.text[e(m)] = d),
            disabled: u.disabled || u.parentType === e(B).Page,
            onInput: n[26] || (n[26] = (d) => k(d, "text"))
          }, null, 8, ["modelValue", "disabled"]),
          s(se, {
            modelValue: l.value.subElements,
            "onUpdate:modelValue": n[27] || (n[27] = (d) => l.value.subElements = d),
            "layout-selector": e(ve)(l.value),
            "is-child": "",
            lang: e(m),
            "is-preview": u.isPreview,
            parent: l.value,
            "parent-type": e(B).Element,
            "modal-crud-config": u.modalCrudConfig,
            "file-browser-config": u.fileBrowserConfig,
            disabled: u.disabled,
            editing: u.editing,
            "default-appearance": l.value.props.class,
            "is-sub-element": ""
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing", "default-appearance"])
        ])) : l.value.type === e(a).LktLayout ? (p(), v(se, {
          key: 9,
          modelValue: l.value.children,
          "onUpdate:modelValue": n[28] || (n[28] = (d) => l.value.children = d),
          "layout-selector": e(ve)(l.value),
          "is-child": "",
          lang: e(m),
          "is-preview": u.isPreview,
          parent: l.value,
          "parent-type": e(B).Element,
          "modal-crud-config": u.modalCrudConfig,
          "file-browser-config": u.fileBrowserConfig,
          disabled: u.disabled,
          editing: u.editing
        }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (p(), v(xe(l.value.component), T(g({ key: 10 }, l.value.props)), null, 16)),
        !x.value && u.canRenderActions ? (p(), N("div", ul, [
          s(K, T(U({
            type: e(he).Button,
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
              onUpdate: O
            }
          })), null, 16)
        ])) : L("", !0)
      ], 2);
    };
  }
}), dl = {
  key: 0,
  class: "like-lkt-field-label"
}, se = /* @__PURE__ */ X({
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
  setup(f, { emit: o }) {
    const b = o, t = f, l = M(t.modelValue), x = M(t.editing), k = M(!1);
    q(l, (C) => {
      b("update:modelValue", C);
    }, { deep: !0 }), q(x, (C) => {
      console.log("editing", C);
    }, { deep: !0 });
    const m = () => {
      if (t.isSubElement) {
        k.value = !0, Se(() => {
          k.value = !1, b("crud-update");
        });
        return;
      }
      const C = t.parentType === B.Page ? "r-web-page-children" : "r-web-element-children";
      Fe(C, { id: t.parent.id }).then((I) => {
        l.value = I.data.map((D) => new Q(D)), b("crud-update");
      });
    }, j = $(() => {
      let C = [re.Update, re.Sort];
      t.isChild || C.push(re.Create), t.parentType === B.Page && C.push(re.SwitchEditMode);
      let I = t.isPreview ? ge.Table : ge.Item;
      x.value && (I = ge.Table);
      let D = "lkt-elements-table--default-grid";
      return t.isChild && (D = t.layoutSelector), {
        type: I,
        perms: C,
        itemsContainerClass: D,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (O) => {
          if (!O.layout || t.isPreview) return "";
          let u = [];
          return O.layout.columns && O.layout.columns.length > 0 && u.push(O.layout.columns.join(" ")), u.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: t.isPreview || x.value,
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
            onUpdate: m
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
    return (C, I) => {
      const D = h("lkt-table");
      return p(), N("div", null, [
        C.parentType === e(B).Page ? (p(), N("span", dl, "Web Elements")) : L("", !0),
        s(D, g({
          class: "lkt-elements-table",
          modelValue: l.value,
          "onUpdate:modelValue": I[0] || (I[0] = (O) => l.value = O)
        }, j.value, {
          "edit-mode": x.value,
          "onUpdate:editMode": I[1] || (I[1] = (O) => x.value = O)
        }), {
          item: w(({ _: O, index: u }) => [
            k.value ? L("", !0) : (p(), v(be, {
              key: 0,
              modelValue: l.value[u],
              "onUpdate:modelValue": (n) => l.value[u] = n,
              index: u,
              lang: C.lang,
              "is-preview": C.isPreview,
              parent: C.parent,
              "parent-type": C.parentType,
              "file-browser-config": C.fileBrowserConfig,
              "modal-crud-config": C.modalCrudConfig,
              "can-render-actions": !x.value,
              disabled: C.disabled || !x.value,
              editing: x.value,
              "default-appearance": C.defaultAppearance,
              "is-sub-element": C.isSubElement,
              onCrudUpdate: m
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled", "editing", "default-appearance", "is-sub-element"]))
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"])
      ]);
    };
  }
}), rl = { class: "lkt-web-page" }, il = { class: "lkt-grid-1 lkt-grid-3--from-768" }, sl = /* @__PURE__ */ X({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(f) {
    const o = f, b = M(new Ee(o.modelValue)), t = M(null), l = () => {
      t.value.turnStoredDataIntoOriginal();
    }, x = $(() => {
      var j, C, I;
      let k = !1, m = !1;
      return k = {
        ...o.crudConfig.createButton,
        resourceData: {
          ...(j = o.crudConfig.createButton) == null ? void 0 : j.resourceData,
          ...b.value
        }
      }, m = {
        ...o.crudConfig.updateButton,
        resourceData: {
          ...(C = o.crudConfig.updateButton) == null ? void 0 : C.resourceData,
          ...b.value
        }
      }, {
        ...o.crudConfig,
        createButton: k,
        updateButton: m,
        dropButton: {
          ...o.crudConfig.dropButton,
          resourceData: {
            ...(I = o.crudConfig.dropButton) == null ? void 0 : I.resourceData,
            ...b.value
          }
        }
      };
    });
    return (k, m) => {
      const j = h("lkt-field"), C = h("lkt-item-crud");
      return p(), N("section", rl, [
        s(C, g({
          ref_key: "itemCrudRef",
          ref: t,
          modelValue: b.value,
          "onUpdate:modelValue": m[0] || (m[0] = (I) => b.value = I)
        }, x.value, {
          title: b.value.name
        }), {
          item: w(({ item: I }) => [
            S("div", il, [
              s(j, g({
                modelValue: I.name,
                "onUpdate:modelValue": (D) => I.name = D
              }, {
                type: e(A).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            s(se, {
              modelValue: I.webElements,
              "onUpdate:modelValue": (D) => I.webElements = D,
              lang: e(Ce)(),
              "modal-crud-config": k.modalCrudConfig,
              "file-browser-config": k.fileBrowserConfig,
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
}), pl = { class: "lkt-grid-1" }, ml = { class: "lkt-grid-3" }, cl = { class: "lkt-grid-3" }, fl = { class: "lkt-grid-3" }, yl = { class: "lkt-grid-3" }, gl = /* @__PURE__ */ X({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    parent: {},
    parentType: { default: B.Element },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    onUpdate: {}
  },
  setup(f) {
    const o = f, b = M(o.parent), t = (l) => {
      ie("lkt-web-element-config", "_", {
        element: Q.createByType(l),
        parent: b.value,
        parentType: o.parentType,
        fileBrowserConfig: o.fileBrowserConfig,
        modalCrudConfig: o.modalCrudConfig,
        onUpdate: o.onUpdate
      }), setTimeout(() => {
        je(o.modalName, o.modalKey);
      }, 200);
    };
    return (l, x) => {
      const k = h("lkt-button"), m = h("lkt-accordion"), j = h("lkt-modal");
      return p(), v(j, g({ id: "lkt-add-element-modal" }, {
        modalName: l.modalName,
        modalKey: l.modalKey,
        zIndex: l.zIndex,
        title: "LktBox Config"
      }), {
        default: w(() => [
          S("div", pl, [
            s(m, T(U({
              type: e(H).Auto,
              title: "Individual elements",
              modelValue: !0
            })), {
              default: w(() => [
                S("div", ml, [
                  s(k, T(U({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        t(e(a).LktText);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        t(e(a).LktHeader);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        t(e(a).LktImage);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-icon",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        t(e(a).LktIcon);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-box",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        t(e(a).LktTextBox);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-accordion",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        t(e(a).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-banner",
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
            s(m, T(U({
              type: e(H).Auto,
              title: "Collection elements"
            })), {
              default: w(() => [
                S("div", cl, [
                  s(k, T(U({
                    icon: "lkt-icn-icon",
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
            s(m, T(U({
              type: e(H).Auto,
              title: "Containers"
            })), {
              default: w(() => [
                S("div", fl, [
                  s(k, T(U({
                    icon: "lkt-icn-box",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        t(e(a).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-accordion",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        t(e(a).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
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
            s(m, T(U({
              type: e(H).Auto,
              title: "Actions"
            })), {
              default: w(() => [
                S("div", yl, [
                  s(k, T(U({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        t(e(a).LktAnchor);
                      }
                    }
                  })), null, 16),
                  s(k, T(U({
                    icon: "lkt-icn-button",
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
    value: H.Auto,
    label: "Auto"
  },
  {
    value: H.Always,
    label: "Always"
  },
  {
    value: H.Lazy,
    label: "Lazy"
  },
  {
    value: H.Ever,
    label: "Ever"
  }
], vl = () => [
  {
    value: Ae.Static,
    label: "Static"
  },
  {
    value: Ae.Parallax,
    label: "Parallax"
  }
], bl = () => [
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
], Cl = () => {
  let f = {
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
  }, o = [];
  for (let b in f) {
    let t = f[b];
    if (!(!t.columns || !Array.isArray(t.columns) || t.columns.length === 0))
      for (let l in t.columns) {
        let x = t.columns[l].toString();
        o.push({
          value: t.css.replace("{n}", x),
          label: t.label.replace("{n}", x)
        });
      }
  }
  return o;
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
}, Tl = { class: "lkt-flex-col-9 lkt-grid-1" }, wl = { class: "lkt-flex-col-3" }, Bl = { class: "lkt-web-element-config-scroller lkt-grid-1" }, xl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, Il = { class: "lkt-grid-1" }, Ul = { class: "lkt-grid-1" }, Al = { class: "lkt-grid-1" }, Dl = { class: "lkt-grid-1" }, Pl = { class: "lkt-grid-1" }, Sl = /* @__PURE__ */ X({
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
  setup(f) {
    var Te, we;
    const o = f, b = M(parseInt(o.modalKey)), t = M(new Q(o.element)), l = M(null), x = M(!1);
    q(() => o.modalKey, (c) => {
      b.value = parseInt(c);
    });
    const k = () => {
      let c = t.value.getClone();
      ie("lkt-web-element-config", "_", {
        element: c,
        parent: o.parent,
        parentType: o.parentType,
        fileBrowserConfig: o.fileBrowserConfig,
        modalCrudConfig: o.modalCrudConfig,
        beforeElement: t.value.id
      });
    }, m = () => {
      let c = t.value.getClone();
      ie("lkt-web-element-config", "_", {
        element: c,
        parent: o.parent,
        parentType: o.parentType,
        fileBrowserConfig: o.fileBrowserConfig,
        modalCrudConfig: o.modalCrudConfig,
        afterElement: t.value.id
      });
    }, j = tl(), C = Ce(), I = [a.LktLayoutBox, a.LktLayoutAccordion, a.LktTextBox, a.LktTextAccordion, a.LktTextBanner, a.LktIcons].includes(t.value.type), D = [a.LktTextBanner].includes(t.value.type), O = [a.LktTextBanner].includes(t.value.type), u = [a.LktTextBanner].includes(t.value.type), n = [a.LktText].includes(t.value.type), G = [a.LktLayout].includes(t.value.type), te = [a.LktTextBanner].includes(t.value.type), Y = [a.LktLayoutBox, a.LktLayoutAccordion, a.LktTextBox, a.LktTextAccordion, a.LktIcon, a.LktButton, a.LktAnchor].includes(t.value.type), K = [a.LktLayoutBox, a.LktLayoutAccordion, a.LktLayout, a.LktIcons].includes(t.value.type), me = [a.LktImage].includes(t.value.type), ce = [a.LktLayoutAccordion, a.LktTextAccordion].includes(t.value.type), oe = [a.LktLayoutAccordion, a.LktLayoutBox, a.LktLayout].includes(t.value.type), Z = [F.FlexRow, F.FlexRows].includes((we = (Te = o.parent) == null ? void 0 : Te.layout) == null ? void 0 : we.type), ae = kl(), ne = vl(), d = bl(), Me = Cl(), $e = [
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
    ], Ne = [
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
    ], We = [
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
    ], ue = (c, r) => {
      if (c.length > 0) {
        let W = String(r.value), E = "";
        if (W.includes("--from") && (E = "--" + W.split("--")[1]), W.includes("--to") && (E = "--" + W.split("--")[1]), E !== "") {
          let V = c.find((_) => String(_).includes(E));
          if (V)
            return V === r.value;
        }
        let P = c.find((V) => !String(V).includes("--"));
        if (P)
          return P === W || W.includes("--");
      }
      return !0;
    }, Ke = (c) => {
      var r;
      return ue(
        ((r = t.value.layout) == null ? void 0 : r.amountOfItems) ?? [],
        c
      );
    }, ze = (c) => {
      var r;
      return ue(
        ((r = t.value.layout) == null ? void 0 : r.alignItems) ?? [],
        c
      );
    }, Ge = (c) => {
      var r;
      return ue(
        ((r = t.value.layout) == null ? void 0 : r.justifyContent) ?? [],
        c
      );
    }, _e = (c) => {
      var r;
      return ue(
        ((r = t.value.layout) == null ? void 0 : r.columns) ?? [],
        c
      );
    }, Je = () => {
      t.value.addSubElement();
    }, Ve = $(() => {
      let c = {};
      switch (t.value.type) {
        case a.LktLayoutBox:
        case a.LktTextBox:
          c = le.defaultFieldLktBoxElementCustomClassField;
          break;
        case a.LktLayoutAccordion:
        case a.LktTextAccordion:
          c = le.defaultFieldLktAccordionElementCustomClassField;
          break;
        case a.LktIcon:
        case a.LktIcons:
          c = le.defaultFieldLktIconElementCustomClassField;
          break;
        case a.LktImage:
          c = le.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(c).length > 0 ? Ye(c, le.defaultFieldElementCustomClassField) : void 0;
    }), Le = $(() => ol(al(t.value.type)) + " Config"), fe = (c, r) => {
      r || (r = t.value.props), r.alt = c[0].nameData, r.title = c[0].nameData;
    };
    q(() => t.value.config.amountOfCallToActions, (c) => {
      console.log("updated amount of cta: ", c);
      let r = t.value.config.callToActions.length;
      c > r ? t.value.config.callToActions.push(Ze()) : t.value.config.callToActions.splice(c, 1);
    }), Xe(() => {
      console.log("mounted: ", o), !t.value.id && t.value.type === a.LktLayout && (x.value = !0, Se(() => {
        var c;
        Fe(o.modalCrudConfig.createButton.resource, {
          ...(c = o.modalCrudConfig.createButton) == null ? void 0 : c.resourceData,
          ...t.value,
          parent: o.parent.id,
          parentType: o.parentType,
          afterElement: o.afterElement,
          beforeElement: o.beforeElement
        }).then((r) => {
          console.log("created layout", r), t.value.id = r.data.id, console.log("newid:", t.value.id), je(o.modalName, o.modalKey), setTimeout(() => {
            ie(o.modalName, r.data.id, {
              element: t.value,
              parent: o.parent,
              parentType: o.parentType,
              fileBrowserConfig: o.fileBrowserConfig,
              modalCrudConfig: o.modalCrudConfig,
              onUpdate: o.onUpdate
            });
          }, 200);
        });
      }));
    });
    const qe = $(() => o.isSubElement ? [] : ["update", "drop", "delete"]), de = () => {
      typeof o.onUpdate == "function" && o.onUpdate();
    }, Qe = $(() => {
      var P, V, _;
      let c = !1, r = !1;
      !(!t.value.id && t.value.type === a.LktLayout) && !o.isSubElement && (c = {
        ...o.modalCrudConfig.createButton,
        resourceData: {
          ...(P = o.modalCrudConfig.createButton) == null ? void 0 : P.resourceData,
          ...t.value,
          parent: o.parent.id,
          parentType: o.parentType,
          afterElement: o.afterElement,
          beforeElement: o.beforeElement
        },
        events: {
          click: de
        }
      }, r = {
        ...o.modalCrudConfig.updateButton,
        resourceData: {
          ...(V = o.modalCrudConfig.updateButton) == null ? void 0 : V.resourceData,
          ...t.value
        },
        events: {
          click: de
        }
      });
      let E = o.isSubElement ? de : void 0;
      return {
        mode: b.value > 0 ? De.Update : De.Create,
        view: el.Modal,
        editing: !0,
        perms: qe.value,
        title: Le.value,
        beforeClose: E,
        modalConfig: {
          modalName: o.modalName,
          modalKey: o.modalKey,
          zIndex: o.zIndex,
          title: Le.value,
          beforeClose: E
        },
        readData: {
          id: b.value
        },
        ...o.modalCrudConfig,
        createButton: c,
        updateButton: r,
        dropButton: o.isSubElement ? !1 : {
          ...o.modalCrudConfig.dropButton,
          resourceData: {
            ...(_ = o.modalCrudConfig.dropButton) == null ? void 0 : _.resourceData,
            ...t.value
          },
          events: {
            click: de
          }
        }
      };
    });
    return console.log("webElementConfigCreated update: ", o.onUpdate), (c, r) => {
      const W = h("lkt-loader"), E = h("lkt-accordion"), P = h("lkt-button"), V = h("lkt-field"), _ = h("lkt-item-crud");
      return p(), v(_, g({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: t.value,
        "onUpdate:modelValue": r[11] || (r[11] = (y) => t.value = y)
      }, Qe.value), {
        item: w(({ item: y }) => [
          x.value ? (p(), v(W, { key: 0 })) : (p(), N("div", Ll, [
            S("div", Tl, [
              s(be, {
                modelValue: t.value,
                "onUpdate:modelValue": r[0] || (r[0] = (i) => t.value = i),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": c.modalCrudConfig,
                parent: t.value,
                "parent-type": e(B).Element,
                "default-appearance": c.defaultAppearance,
                onCrudUpdate: c.onUpdate
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type", "default-appearance", "onCrudUpdate"]),
              (p(!0), N(ye, null, Ue(e(j), (i) => (p(), N(ye, null, [
                i !== e(C) ? (p(), v(E, g({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(H).Auto,
                  title: i
                }), {
                  default: w(() => [
                    s(be, {
                      modelValue: t.value,
                      "onUpdate:modelValue": r[1] || (r[1] = (ee) => t.value = ee),
                      lang: i,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": c.modalCrudConfig,
                      parent: t.value,
                      "parent-type": e(B).Element,
                      "default-appearance": c.defaultAppearance
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type", "default-appearance"])
                  ]),
                  _: 2
                }, 1040)) : L("", !0)
              ], 64))), 256))
            ]),
            S("div", wl, [
              S("div", Bl, [
                e(oe) ? (p(), v(P, T(g({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: c.fileBrowserConfig,
                    modalCrudConfig: c.modalCrudConfig,
                    parent: t.value,
                    parentType: e(B).Element,
                    onUpdate: c.onCrudUpdate
                  }
                })), null, 16)) : L("", !0),
                y.type === e(a).LktIcons ? (p(), v(P, T(g({ key: 1 }, {
                  text: "Add icon",
                  icon: "lkt-icn-more",
                  events: {
                    click: Je
                  }
                })), null, 16)) : L("", !0),
                s(E, T(U({
                  type: e(H).Always,
                  title: "Text editor"
                })), {
                  default: w(() => [
                    S("div", xl, [
                      s(P, g({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: r[2] || (r[2] = () => e(J)("bold"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: r[3] || (r[3] = () => e(J)("italic"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: r[4] || (r[4] = () => e(J)("underline"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: r[5] || (r[5] = () => e(J)("strikeThrough"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: r[6] || (r[6] = () => e(J)("superscript"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: r[7] || (r[7] = () => e(J)("subscript"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: r[8] || (r[8] = () => e(ke)("left"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: r[9] || (r[9] = () => e(ke)("center"))
                      }), null, 16),
                      s(P, g({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: r[10] || (r[10] = () => e(ke)("right"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                !e(n) && !e(G) ? (p(), v(E, T(g({ key: 2 }, {
                  type: e(H).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(ll).Display
                })), {
                  default: w(() => [
                    S("div", Il, [
                      Ve.value ? (p(), v(V, g({ key: 0 }, {
                        type: e(A).Select,
                        ...Ve.value,
                        canClear: !0
                      }, {
                        modelValue: y.props.class,
                        "onUpdate:modelValue": (i) => y.props.class = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(I) ? (p(), v(V, g({ key: 1 }, {
                        type: e(A).Switch,
                        label: "Has header"
                      }, {
                        modelValue: y.config.hasHeader,
                        "onUpdate:modelValue": (i) => y.config.hasHeader = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(D) ? (p(), v(V, g({ key: 2 }, {
                        type: e(A).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: y.config.hasSubHeader,
                        "onUpdate:modelValue": (i) => y.config.hasSubHeader = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Y) ? (p(), v(V, g({ key: 3 }, {
                        type: e(A).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: y.config.hasIcon,
                        "onUpdate:modelValue": (i) => y.config.hasIcon = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Y) ? (p(), v(V, g({ key: 4 }, {
                        type: e(A).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Vl)
                      }, {
                        modelValue: y.props.icon,
                        "onUpdate:modelValue": (i) => y.props.icon = i,
                        disabled: !y.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : L("", !0),
                      e(me) ? (p(), v(V, g({ key: 5 }, {
                        type: e(A).Image,
                        label: "Image",
                        fileBrowserConfig: c.fileBrowserConfig
                      }, {
                        modelValue: y.props.src,
                        "onUpdate:modelValue": (i) => y.props.src = i,
                        onPickedFiles: fe
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(u) ? (p(), v(V, g({ key: 6 }, {
                        type: e(A).Image,
                        label: "Media content",
                        fileBrowserConfig: c.fileBrowserConfig
                      }, {
                        modelValue: y.props.media.src,
                        "onUpdate:modelValue": (i) => y.props.media.src = i,
                        onPickedFiles: (i) => fe(i, y.props.media)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      e(u) ? (p(), v(V, g({ key: 7 }, {
                        type: e(A).Select,
                        label: "Type",
                        options: e(ne)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (i) => y.props.type = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(O) ? (p(), v(V, g({ key: 8 }, {
                        type: e(A).Image,
                        label: "Background Image",
                        fileBrowserConfig: c.fileBrowserConfig
                      }, {
                        modelValue: y.props.art.src,
                        "onUpdate:modelValue": (i) => y.props.art.src = i,
                        onPickedFiles: (i) => fe(i, y.props.art)
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onPickedFiles"])) : L("", !0),
                      S("div", null, [
                        e(te) ? (p(), v(V, g({ key: 0 }, {
                          type: e(A).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (i) => y.props.opacity = i
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                        e(te) ? (p(), v(V, g({ key: 1 }, {
                          type: e(A).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (i) => y.props.opacity = i
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                      ]),
                      e(u) ? (p(), v(V, g({ key: 9 }, {
                        type: e(A).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: y.config.amountOfCallToActions,
                        "onUpdate:modelValue": (i) => y.config.amountOfCallToActions = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                y.config.amountOfCallToActions > 0 ? (p(!0), N(ye, { key: 3 }, Ue(y.config.callToActions, (i) => (p(), v(E, g({ ref_for: !0 }, {
                  type: e(H).Auto,
                  title: "CTA #1"
                }), {
                  default: w(() => [
                    S("div", Ul, [
                      s(V, g({ ref_for: !0 }, {
                        type: e(A).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: i.config.hasIcon,
                        "onUpdate:modelValue": (ee) => i.config.hasIcon = ee
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      s(V, g({ ref_for: !0 }, {
                        type: e(A).Text,
                        label: "Icon"
                      }, {
                        modelValue: i.props.icon,
                        "onUpdate:modelValue": (ee) => i.props.icon = ee,
                        disabled: !i.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : L("", !0),
                e(ce) ? (p(), v(E, T(g({ key: 4 }, {
                  type: e(H).Auto,
                  title: "Accordion Config"
                })), {
                  default: w(() => [
                    S("div", Al, [
                      s(V, g({
                        type: e(A).Select,
                        label: "Type",
                        options: e(ae)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (i) => y.props.type = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                e(K) || e(Z) ? (p(), v(E, T(g({ key: 5 }, {
                  type: e(H).Auto,
                  title: "Layout Config"
                })), {
                  default: w(() => [
                    S("div", Dl, [
                      e(K) ? (p(), v(V, g({ key: 0 }, {
                        type: e(A).Select,
                        label: "Type",
                        options: e(d)
                      }, {
                        modelValue: y.layout.type,
                        "onUpdate:modelValue": (i) => y.layout.type = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(K) && y.layout.type !== e(F).FlexColumn ? (p(), v(V, g({ key: 1 }, {
                        type: e(A).Select,
                        label: y.layout.type === e(F).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(Me),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Ke
                        }
                      }, {
                        modelValue: y.layout.amountOfItems,
                        "onUpdate:modelValue": (i) => y.layout.amountOfItems = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(K) ? (p(), v(V, g({ key: 2 }, {
                        type: e(A).Select,
                        label: "Align items",
                        options: Ne,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: ze
                        }
                      }, {
                        modelValue: y.layout.alignItems,
                        "onUpdate:modelValue": (i) => y.layout.alignItems = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(K) ? (p(), v(V, g({ key: 3 }, {
                        type: e(A).Select,
                        label: "Justify content",
                        options: We,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ge
                        }
                      }, {
                        modelValue: y.layout.justifyContent,
                        "onUpdate:modelValue": (i) => y.layout.justifyContent = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Z) ? (p(), v(V, g({ key: 4 }, {
                        type: e(A).Select,
                        label: "Columns Reserved",
                        options: $e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: _e
                        }
                      }, {
                        modelValue: y.layout.columns,
                        "onUpdate:modelValue": (i) => y.layout.columns = i
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                s(P, T(U({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(he).Split
                })), {
                  split: w(({ doClose: i }) => [
                    S("div", Pl, [
                      s(P, T(U({
                        text: "Before",
                        events: {
                          click: k
                        }
                      })), null, 16),
                      s(P, T(U({
                        text: "After",
                        events: {
                          click: m
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
  pe({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (f) => new Q(f)
  }), pe({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (f) => f.map((o) => new Q(o))
  }), He({
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
  }), Oe({
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
  }), Re({
    url: "/web/element/{id}",
    name: "rm-web-element",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, Ml = () => {
  pe({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (f) => new Ee(f)
  }), pe({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (f) => f.map((o) => new Q(o))
  }), He({
    url: "/web/page",
    name: "mk-web-page",
    params: {
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item",
    digToAutoReloadId: "id"
  }), Oe({
    url: "/web/page/{id}",
    name: "up-web-page",
    params: {
      id: { default: void 0 },
      name: { default: void 0 },
      webElements: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  }), Re({
    url: "/web/page/{id}",
    name: "rm-web-page",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, $l = {
  install: (f) => {
    f.component("lkt-web-page") === void 0 && (f.component("lkt-web-page", sl), Pe("lkt-web-element-select", gl), Pe("lkt-web-element-config", Sl));
  }
};
export {
  $l as default,
  jl as setupWebElementsHttp,
  Ml as setupWebPagesHttp
};
