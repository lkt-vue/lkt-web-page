import { defineComponent as q, setBlockTracking as xe, createElementVNode as h, ref as j, watch as G, computed as z, resolveComponent as D, createElementBlock as M, openBlock as m, normalizeClass as N, createCommentVNode as L, createBlock as v, unref as e, resolveDynamicComponent as Be, createSlots as Ie, withCtx as x, createVNode as s, normalizeProps as w, mergeProps as y, guardReactiveProps as A, nextTick as Ue, onMounted as Xe, Fragment as pe, renderList as Ae } from "vue";
import { WebElementLayoutType as H, WebElementType as o, WebParentType as I, ButtonType as He, TablePermission as ae, TableType as me, WebElement as J, WebPage as Oe, FieldType as B, AccordionType as F, BannerType as he, LktSettings as Z, ensureFieldConfig as Ye, getDefaultLktButtonWebElement as Ze, ItemCrudView as el, ItemCrudMode as De, applyTextFormat as K, applyTextAlignment as ce, AccordionToggleMode as ll } from "lkt-vue-kernel";
import { getCurrentLanguage as ge, getAvailableLanguages as tl } from "lkt-i18n";
import { httpCall as Fe, createHTTPGetResource as ue, createHTTPPostResource as Ee, createHTTPPutResource as Re, createHTTPDeleteResource as je } from "lkt-http-client";
import { openModal as ne, closeModal as Me, addModal as Pe } from "lkt-modal";
import { ucfirst as ol, kebabCaseToCamelCase as al } from "lkt-string-tools";
const R = /* @__PURE__ */ q({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(p, { emit: u }) {
    const b = u, t = (l) => {
      b("input", l);
    };
    return (l, V) => V[0] || (xe(-1, !0), (V[0] = h("div", {
      contenteditable: l.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (g) => t(g),
      innerHTML: l.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, xe(1), V[0]);
  }
}), Se = (p, u = !1) => {
  if (!p.layout || u) return "";
  let b = [];
  p.layout.type === H.FlexRow && (!p.layout.amountOfItems || p.layout.amountOfItems.length === 0) ? b.push("lkt-flex-row") : p.layout.type === H.FlexRows && (!p.layout.amountOfItems || p.layout.amountOfItems.length === 0) ? b.push("lkt-flex-rows") : p.layout.type === H.FlexColumn && b.push("lkt-flex-column"), p.layout.amountOfItems && p.layout.amountOfItems.length > 0 && (p.layout.type === H.FlexRow ? b.push(p.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : p.layout.type === H.FlexRows ? b.push(p.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : b.push(p.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), p.layout.alignItems && p.layout.alignItems.length > 0 && b.push(p.layout.alignItems.join(" ")), p.layout.justifyContent && p.layout.justifyContent.length > 0 && b.push(p.layout.justifyContent.join(" ")), b.length > 0 && b.push("layout-mode");
  let t = b.join(" ");
  return p.layout.type === H.FlexRows && (t = t.replace("flex-row-", "flex-rows-")), t;
}, nl = { class: "lkt-element-content" }, ul = {
  key: 0,
  class: "lkt-element-actions"
}, fe = /* @__PURE__ */ q({
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
    editing: { type: Boolean }
  },
  emits: [
    "update:modelValue",
    "crud-update"
  ],
  setup(p, { emit: u }) {
    const b = u, t = p, l = j(t.modelValue);
    G(() => t.modelValue, (d, a) => {
      l.value = d;
    }), G(l, (d, a) => {
      b("update:modelValue", d);
    });
    const V = j(!1), g = (d, a = "text") => {
      const _ = d.target.innerHTML.trim();
      _ !== l.value.props[a][k] && (l.value.props[a][k] = _);
    }, k = t.lang ?? ge(), C = z(() => [
      o.LktLayoutBox,
      o.LktTextBox,
      o.LktLayoutAccordion,
      o.LktTextAccordion
    ].includes(l.value.type)), U = z(() => [
      o.LktLayoutBox,
      o.LktLayoutAccordion,
      o.LktLayout
    ].includes(l.value.type)), S = z(() => {
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
    }), O = () => {
      b("crud-update");
    };
    return (d, a) => {
      var le, te, X;
      const _ = D("lkt-image"), de = D("lkt-icon"), ee = D("lkt-header"), Q = D("lkt-button"), W = D("lkt-anchor"), ie = D("lkt-banner");
      return m(), M("div", {
        class: N(["lkt-element", `is-${l.value.type} is-${l.value.id}`]),
        key: l.value.keyMoment
      }, [
        h("div", nl, [
          l.value.type === e(o).LktText ? (m(), v(R, {
            key: 0,
            modelValue: l.value.props.text[e(k)],
            "onUpdate:modelValue": a[0] || (a[0] = (i) => l.value.props.text[e(k)] = i),
            disabled: d.disabled || d.parentType === e(I).Page,
            onInput: a[1] || (a[1] = (i) => g(i))
          }, null, 8, ["modelValue", "disabled"])) : C.value ? (m(), v(Be(S.value), {
            key: 1,
            icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, Ie({
            default: x(() => [
              U.value ? (m(), v(ye, {
                key: 0,
                modelValue: l.value.children,
                "onUpdate:modelValue": a[4] || (a[4] = (i) => l.value.children = i),
                "layout-selector": e(Se)(l.value),
                "is-child": "",
                lang: e(k),
                "is-preview": d.isPreview,
                parent: l.value,
                "parent-type": e(I).Element,
                "modal-crud-config": d.modalCrudConfig,
                "file-browser-config": d.fileBrowserConfig,
                disabled: d.disabled,
                editing: d.editing
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled", "editing"])) : (m(), v(R, {
                key: 1,
                modelValue: l.value.props.text[e(k)],
                "onUpdate:modelValue": a[5] || (a[5] = (i) => l.value.props.text[e(k)] = i),
                disabled: d.disabled || d.parentType === e(I).Page,
                onInput: a[6] || (a[6] = (i) => g(i, "text"))
              }, null, 8, ["modelValue", "disabled"]))
            ]),
            _: 2
          }, [
            (le = l.value.config) != null && le.hasHeader ? {
              name: "header",
              fn: x(() => [
                s(R, {
                  modelValue: l.value.props.header[e(k)],
                  "onUpdate:modelValue": a[2] || (a[2] = (i) => l.value.props.header[e(k)] = i),
                  onInput: a[3] || (a[3] = (i) => g(i, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : l.value.type === e(o).LktImage ? (m(), v(_, {
            key: 2,
            class: N(l.value.props.class),
            src: l.value.props.src,
            alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(k)] : "",
            title: typeof l.value.props.title == "object" ? l.value.props.title[e(k)] : ""
          }, {
            text: x(() => [
              s(R, {
                modelValue: l.value.props.text[e(k)],
                "onUpdate:modelValue": a[7] || (a[7] = (i) => l.value.props.text[e(k)] = i),
                disabled: d.disabled || d.parentType === e(I).Page,
                onInput: a[8] || (a[8] = (i) => g(i, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(o).LktIcon ? (m(), v(de, {
            key: 3,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              s(R, {
                modelValue: l.value.props.text[e(k)],
                "onUpdate:modelValue": a[9] || (a[9] = (i) => l.value.props.text[e(k)] = i),
                disabled: d.disabled || d.parentType === e(I).Page,
                onInput: a[10] || (a[10] = (i) => g(i, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktHeader ? (m(), v(ee, {
            key: 4,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              s(R, {
                modelValue: l.value.props.text[e(k)],
                "onUpdate:modelValue": a[11] || (a[11] = (i) => l.value.props.text[e(k)] = i),
                disabled: d.disabled || d.parentType === e(I).Page,
                onInput: a[12] || (a[12] = (i) => g(i, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktButton ? (m(), v(Q, {
            key: 5,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              s(R, {
                modelValue: l.value.props.text[e(k)],
                "onUpdate:modelValue": a[13] || (a[13] = (i) => l.value.props.text[e(k)] = i),
                disabled: d.disabled || d.parentType === e(I).Page,
                onInput: a[14] || (a[14] = (i) => g(i, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktAnchor ? (m(), v(W, {
            key: 6,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              s(R, {
                modelValue: l.value.props.text[e(k)],
                "onUpdate:modelValue": a[15] || (a[15] = (i) => l.value.props.text[e(k)] = i),
                disabled: d.disabled || d.parentType === e(I).Page,
                onInput: a[16] || (a[16] = (i) => g(i, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktTextBanner ? (m(), v(ie, {
            key: 7,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class),
            opacity: l.value.props.opacity,
            art: l.value.props.art,
            media: l.value.props.media,
            type: l.value.props.type
          }, Ie({
            default: x(() => [
              s(R, {
                modelValue: l.value.props.text[e(k)],
                "onUpdate:modelValue": a[21] || (a[21] = (i) => l.value.props.text[e(k)] = i),
                disabled: d.disabled || d.parentType === e(I).Page,
                onInput: a[22] || (a[22] = (i) => g(i, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 2
          }, [
            (te = l.value.config) != null && te.hasHeader ? {
              name: "header",
              fn: x(() => [
                s(R, {
                  modelValue: l.value.props.header[e(k)],
                  "onUpdate:modelValue": a[17] || (a[17] = (i) => l.value.props.header[e(k)] = i),
                  disabled: d.disabled || d.parentType === e(I).Page,
                  onInput: a[18] || (a[18] = (i) => g(i, "header"))
                }, null, 8, ["modelValue", "disabled"])
              ]),
              key: "0"
            } : void 0,
            (X = l.value.config) != null && X.hasSubHeader ? {
              name: "subHeader",
              fn: x(() => [
                s(R, {
                  modelValue: l.value.props.subHeader[e(k)],
                  "onUpdate:modelValue": a[19] || (a[19] = (i) => l.value.props.subHeader[e(k)] = i),
                  disabled: d.disabled || d.parentType === e(I).Page,
                  onInput: a[20] || (a[20] = (i) => g(i, "subHeader"))
                }, null, 8, ["modelValue", "disabled"])
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(o).LktLayout ? (m(), v(ye, {
            key: 8,
            modelValue: l.value.children,
            "onUpdate:modelValue": a[23] || (a[23] = (i) => l.value.children = i),
            "layout-selector": e(Se)(l.value),
            "is-child": "",
            lang: e(k),
            "is-preview": d.isPreview,
            parent: l.value,
            "parent-type": e(I).Element,
            "modal-crud-config": d.modalCrudConfig,
            disabled: d.disabled,
            editing: d.editing
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "disabled", "editing"])) : (m(), v(Be(l.value.component), w(y({ key: 9 }, l.value.props)), null, 16))
        ]),
        !V.value && d.canRenderActions ? (m(), M("div", ul, [
          s(Q, w(A({
            type: e(He).Button,
            text: l.value.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-web-element-config",
            modalKey: l.value.id,
            modalData: {
              element: l.value,
              parent: d.parent,
              parentType: d.parentType,
              fileBrowserConfig: d.fileBrowserConfig,
              modalCrudConfig: d.modalCrudConfig,
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
}, ye = /* @__PURE__ */ q({
  __name: "LktWebElements",
  props: {
    modelValue: {},
    parent: {},
    parentType: { default: I.Element },
    layoutSelector: { default: "" },
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
  setup(p, { emit: u }) {
    const b = u, t = p, l = j(t.modelValue), V = j(t.editing);
    G(l, (C) => {
      b("update:modelValue", C);
    }, { deep: !0 }), G(V, (C) => {
      console.log("editing", C);
    }, { deep: !0 });
    const g = z(() => {
      let C = [ae.Update, ae.Sort];
      t.isChild || C.push(ae.Create), t.parentType === I.Page && C.push(ae.SwitchEditMode);
      let U = t.isPreview ? me.Table : me.Item;
      V.value && (U = me.Table);
      let S = "lkt-grid-1";
      return t.isChild && (S = t.layoutSelector), {
        type: U,
        perms: C,
        itemsContainerClass: S,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (O) => {
          if (!O.layout || t.isPreview) return "";
          let d = [];
          return O.layout.columns && O.layout.columns.length > 0 && d.push(O.layout.columns.join(" ")), d.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: t.isPreview || V.value,
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
    }), k = () => {
      const C = t.parentType === I.Page ? "r-web-page-children" : "r-web-element-children";
      Fe(C, { id: t.parent.id }).then((U) => {
        l.value = U.data.map((S) => new J(S)), b("crud-update");
      });
    };
    return (C, U) => {
      const S = D("lkt-table");
      return m(), M("div", null, [
        C.parentType === e(I).Page ? (m(), M("span", dl, "Web Elements")) : L("", !0),
        s(S, y({
          class: "lkt-elements-table",
          modelValue: l.value,
          "onUpdate:modelValue": U[0] || (U[0] = (O) => l.value = O)
        }, g.value, {
          "edit-mode": V.value,
          "onUpdate:editMode": U[1] || (U[1] = (O) => V.value = O)
        }), {
          item: x(({ _: O, index: d }) => [
            s(fe, {
              modelValue: l.value[d],
              "onUpdate:modelValue": (a) => l.value[d] = a,
              index: d,
              lang: C.lang,
              "is-preview": C.isPreview,
              "parent-children": l.value,
              parent: C.parent,
              "parent-type": C.parentType,
              "file-browser-config": C.fileBrowserConfig,
              "modal-crud-config": C.modalCrudConfig,
              "can-render-actions": !V.value,
              disabled: C.disabled || !V.value,
              editing: V.value,
              onCrudUpdate: k
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent-children", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled", "editing"])
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"])
      ]);
    };
  }
}), il = { class: "lkt-web-page" }, rl = { class: "lkt-grid-1 lkt-grid-3--from-768" }, sl = /* @__PURE__ */ q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(p) {
    const u = p, b = j(new Oe(u.modelValue)), t = j(null), l = () => {
      t.value.turnStoredDataIntoOriginal();
    };
    return (V, g) => {
      const k = D("lkt-field"), C = D("lkt-item-crud");
      return m(), M("section", il, [
        s(C, y({
          ref_key: "itemCrudRef",
          ref: t,
          modelValue: b.value,
          "onUpdate:modelValue": g[0] || (g[0] = (U) => b.value = U)
        }, V.crudConfig, {
          title: b.value.name
        }), {
          item: x(({ item: U }) => [
            h("div", rl, [
              s(k, y({
                modelValue: U.name,
                "onUpdate:modelValue": (S) => U.name = S
              }, {
                type: e(B).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            s(ye, {
              modelValue: U.webElements,
              "onUpdate:modelValue": (S) => U.webElements = S,
              lang: e(ge)(),
              "modal-crud-config": V.modalCrudConfig,
              "file-browser-config": V.fileBrowserConfig,
              parent: b.value,
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
}), pl = { class: "lkt-grid-1" }, ml = { class: "lkt-grid-3" }, cl = { class: "lkt-grid-3" }, fl = { class: "lkt-grid-3" }, yl = /* @__PURE__ */ q({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    parent: {},
    parentType: { default: I.Element },
    fileBrowserConfig: {},
    modalCrudConfig: {}
  },
  setup(p) {
    const u = p, b = j(u.parent), t = (l) => {
      ne("lkt-web-element-config", "_", {
        element: J.createByType(l),
        parent: b.value,
        parentType: u.parentType,
        fileBrowserConfig: u.fileBrowserConfig,
        modalCrudConfig: u.modalCrudConfig
      }), setTimeout(() => {
        Me(u.modalName, u.modalKey);
      }, 200);
    };
    return (l, V) => {
      const g = D("lkt-button"), k = D("lkt-accordion"), C = D("lkt-modal");
      return m(), v(C, y({ id: "lkt-add-element-modal" }, {
        modalName: l.modalName,
        modalKey: l.modalKey,
        zIndex: l.zIndex,
        title: "LktBox Config"
      }), {
        default: x(() => [
          h("div", pl, [
            s(k, w(A({
              type: e(F).Always,
              title: "Content"
            })), {
              default: x(() => [
                h("div", ml, [
                  s(g, w(A({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        t(e(o).LktText);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        t(e(o).LktHeader);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        t(e(o).LktImage);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        t(e(o).LktIcon);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        t(e(o).LktTextBox);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-font",
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
            s(k, w(A({
              type: e(F).Always,
              title: "Containers"
            })), {
              default: x(() => [
                h("div", cl, [
                  s(g, w(A({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
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
            s(k, w(A({
              type: e(F).Auto,
              title: "Actions"
            })), {
              default: x(() => [
                h("div", fl, [
                  s(g, w(A({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        t(e(o).LktAnchor);
                      }
                    }
                  })), null, 16),
                  s(g, w(A({
                    icon: "lkt-icn-link",
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
            }, 16)
          ])
        ]),
        _: 1
      }, 16);
    };
  }
}), gl = () => [
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
], kl = () => [
  {
    value: he.Static,
    label: "Static"
  },
  {
    value: he.Parallax,
    label: "Parallax"
  }
], vl = () => [
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
], bl = () => {
  let p = {
    default: {
      css: "{n}",
      label: "Default: {n}",
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    from768: {
      css: "{n}--from-768",
      label: "From 768px: {n}",
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }, u = [];
  for (let b in p) {
    let t = p[b];
    if (!t.columns || !Array.isArray(t.columns) || t.columns.length === 0) continue;
    let l = t.columns[0], V = t.columns[t.columns.length - 1];
    for (let g = l; g <= V; ++g)
      u.push({
        value: t.css.replace("{n}", g.toString()),
        label: t.label.replace("{n}", g.toString())
      });
  }
  return u;
}, Cl = [
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
], Vl = {
  key: 1,
  class: "lkt-flex-row"
}, Tl = { class: "lkt-flex-col-9 lkt-grid-1" }, Ll = { class: "lkt-flex-col-3 lkt-grid-1" }, wl = { class: "lkt-web-element-config-scroller" }, xl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, Bl = { class: "lkt-grid-1" }, Il = { class: "lkt-grid-1" }, Ul = { class: "lkt-grid-1" }, Al = { class: "lkt-grid-1" }, hl = { class: "lkt-grid-1" }, Dl = /* @__PURE__ */ q({
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
    onUpdate: {}
  },
  setup(p) {
    var Ce, Ve;
    const u = p, b = parseInt(u.modalKey), t = j(new J(u.element)), l = j(null), V = j(!1), g = () => {
      let n = t.value.getClone();
      ne("lkt-web-element-config", "_", {
        element: n,
        parent: u.parent,
        parentType: u.parentType,
        fileBrowserConfig: u.fileBrowserConfig,
        modalCrudConfig: u.modalCrudConfig,
        beforeElement: t.value.id
      });
    }, k = () => {
      let n = t.value.getClone();
      ne("lkt-web-element-config", "_", {
        element: n,
        parent: u.parent,
        parentType: u.parentType,
        fileBrowserConfig: u.fileBrowserConfig,
        modalCrudConfig: u.modalCrudConfig,
        afterElement: t.value.id
      });
    }, C = tl(), U = ge(), S = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktTextBox, o.LktTextAccordion, o.LktTextBanner].includes(t.value.type), O = [o.LktTextBanner].includes(t.value.type), d = [o.LktTextBanner].includes(t.value.type), a = [o.LktTextBanner].includes(t.value.type), _ = [o.LktText].includes(t.value.type), de = [o.LktLayout].includes(t.value.type), ee = [o.LktTextBanner].includes(t.value.type), Q = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktTextBox, o.LktTextAccordion, o.LktIcon, o.LktButton, o.LktAnchor].includes(t.value.type), W = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktLayout].includes(t.value.type), ie = [o.LktImage].includes(t.value.type), le = [o.LktLayoutAccordion, o.LktTextAccordion].includes(t.value.type), te = [o.LktLayoutAccordion, o.LktLayoutBox, o.LktLayout].includes(t.value.type), X = [H.FlexRow, H.FlexRows].includes((Ve = (Ce = u.parent) == null ? void 0 : Ce.layout) == null ? void 0 : Ve.type), i = gl(), $e = kl(), Ne = vl(), We = bl(), _e = [
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
    ], Ke = [
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
    ], ze = [
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
    ], oe = (n, c) => {
      if (n.length > 0) {
        let $ = String(c.value), E = "";
        if ($.includes("--from") && (E = "--" + $.split("--")[1]), $.includes("--to") && (E = "--" + $.split("--")[1]), E !== "") {
          let T = n.find((se) => String(se).includes(E));
          if (T)
            return T === c.value;
        }
        let P = n.find((T) => !String(T).includes("--"));
        if (P)
          return P === $ || $.includes("--");
      }
      return !0;
    }, Ge = (n) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.amountOfItems) ?? [],
        n
      );
    }, Je = (n) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.alignItems) ?? [],
        n
      );
    }, qe = (n) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.justifyContent) ?? [],
        n
      );
    }, Qe = (n) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.columns) ?? [],
        n
      );
    }, ke = z(() => {
      let n = {};
      switch (t.value.type) {
        case o.LktLayoutBox:
        case o.LktTextBox:
          n = Z.defaultFieldLktBoxElementCustomClassField;
          break;
        case o.LktLayoutAccordion:
        case o.LktTextAccordion:
          n = Z.defaultFieldLktAccordionElementCustomClassField;
          break;
        case o.LktIcon:
          n = Z.defaultFieldLktIconElementCustomClassField;
          break;
        case o.LktImage:
          n = Z.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(n).length > 0 ? Ye(n, Z.defaultFieldElementCustomClassField) : void 0;
    }), ve = z(() => ol(al(t.value.type)) + " Config"), re = (n) => {
      t.value.props.alt = n[0].nameData, t.value.props.title = n[0].nameData;
    }, be = j(!1);
    return G(() => u.element, (n) => {
      console.log("updating model value"), be.value = !0, t.value = n, Ue(() => {
        be.value = !1;
      });
    }), G(() => t.value.config.amountOfCallToActions, (n) => {
      console.log("updated amount of cta: ", n);
      let c = t.value.config.callToActions.length;
      n > c ? t.value.config.callToActions.push(Ze()) : t.value.config.callToActions.splice(n, 1);
    }), Xe(() => {
      console.log("mounted"), console.log(t.value), !t.value.id && t.value.type === o.LktLayout && (V.value = !0, Ue(() => {
        var n;
        Fe(u.modalCrudConfig.createButton.resource, {
          ...(n = u.modalCrudConfig.createButton) == null ? void 0 : n.resourceData,
          ...t.value,
          parent: u.parent.id,
          parentType: u.parentType,
          afterElement: u.afterElement,
          beforeElement: u.beforeElement
        }).then((c) => {
          console.log("created layout", c), t.value.id = c.data.id, console.log("newid:", t.value.id), Me(u.modalName, u.modalKey), setTimeout(() => {
            ne(u.modalName, c.data.id, {
              element: t.value,
              parent: u.parent,
              parentType: u.parentType,
              fileBrowserConfig: u.fileBrowserConfig,
              modalCrudConfig: u.modalCrudConfig,
              onUpdate: u.onUpdate
            });
          }, 200);
        });
      }));
    }), (n, c) => {
      var Te, Le, we;
      const $ = D("lkt-loader"), E = D("lkt-accordion"), P = D("lkt-button"), T = D("lkt-field"), se = D("lkt-item-crud");
      return m(), v(se, y({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: t.value,
        "onUpdate:modelValue": c[11] || (c[11] = (f) => t.value = f)
      }, {
        mode: e(b) > 0 ? e(De).Update : e(De).Create,
        view: e(el).Modal,
        editing: !0,
        perms: ["update", "drop", "delete"],
        title: ve.value,
        modalConfig: {
          modalName: n.modalName,
          modalKey: n.modalKey,
          zIndex: n.zIndex,
          title: ve.value
        },
        readData: {
          id: e(b)
        },
        ...n.modalCrudConfig,
        createButton: V.value ? !1 : {
          ...n.modalCrudConfig.createButton,
          resourceData: {
            ...(Te = n.modalCrudConfig.createButton) == null ? void 0 : Te.resourceData,
            ...t.value,
            parent: n.parent.id,
            parentType: n.parentType,
            afterElement: n.afterElement,
            beforeElement: n.beforeElement
          },
          events: {
            click: u.onUpdate
          }
        },
        updateButton: {
          ...n.modalCrudConfig.updateButton,
          resourceData: {
            ...(Le = n.modalCrudConfig.updateButton) == null ? void 0 : Le.resourceData,
            ...t.value
          },
          events: {
            click: u.onUpdate
          }
        },
        dropButton: {
          ...n.modalCrudConfig.dropButton,
          resourceData: {
            ...(we = n.modalCrudConfig.dropButton) == null ? void 0 : we.resourceData,
            ...t.value
          },
          events: {
            click: u.onUpdate
          }
        }
      }), {
        item: x(({ item: f }) => [
          V.value ? (m(), v($, { key: 0 })) : (m(), M("div", Vl, [
            h("div", Tl, [
              s(fe, {
                modelValue: t.value,
                "onUpdate:modelValue": c[0] || (c[0] = (r) => t.value = r),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": n.modalCrudConfig,
                parent: t.value,
                "parent-type": e(I).Element
              }, null, 8, ["modelValue", "modal-crud-config", "parent", "parent-type"]),
              (m(!0), M(pe, null, Ae(e(C), (r) => (m(), M(pe, null, [
                r !== e(U) ? (m(), v(E, y({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(F).Auto,
                  title: r
                }), {
                  default: x(() => [
                    s(fe, {
                      modelValue: t.value,
                      "onUpdate:modelValue": c[1] || (c[1] = (Y) => t.value = Y),
                      lang: r,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": n.modalCrudConfig,
                      parent: t.value,
                      "parent-type": e(I).Element
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent", "parent-type"])
                  ]),
                  _: 2
                }, 1040)) : L("", !0)
              ], 64))), 256))
            ]),
            h("div", Ll, [
              h("div", wl, [
                e(te) ? (m(), v(P, w(y({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: n.fileBrowserConfig,
                    modalCrudConfig: n.modalCrudConfig,
                    parent: t.value,
                    parentType: e(I).Element
                  }
                })), null, 16)) : L("", !0),
                s(E, w(A({
                  type: e(F).Always,
                  title: "Text editor"
                })), {
                  default: x(() => [
                    h("div", xl, [
                      s(P, y({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: c[2] || (c[2] = () => e(K)("bold"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: c[3] || (c[3] = () => e(K)("italic"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: c[4] || (c[4] = () => e(K)("underline"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: c[5] || (c[5] = () => e(K)("strikeThrough"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: c[6] || (c[6] = () => e(K)("superscript"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: c[7] || (c[7] = () => e(K)("subscript"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: c[8] || (c[8] = () => e(ce)("left"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: c[9] || (c[9] = () => e(ce)("center"))
                      }), null, 16),
                      s(P, y({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: c[10] || (c[10] = () => e(ce)("right"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                !e(_) && !e(de) ? (m(), v(E, w(y({ key: 1 }, {
                  type: e(F).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(ll).Display
                })), {
                  default: x(() => [
                    h("div", Bl, [
                      ke.value ? (m(), v(T, y({ key: 0 }, {
                        type: e(B).Select,
                        ...ke.value,
                        canClear: !0
                      }, {
                        modelValue: f.props.class,
                        "onUpdate:modelValue": (r) => f.props.class = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(S) ? (m(), v(T, y({ key: 1 }, {
                        type: e(B).Switch,
                        label: "Has header"
                      }, {
                        modelValue: f.config.hasHeader,
                        "onUpdate:modelValue": (r) => f.config.hasHeader = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(O) ? (m(), v(T, y({ key: 2 }, {
                        type: e(B).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: f.config.hasSubHeader,
                        "onUpdate:modelValue": (r) => f.config.hasSubHeader = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Q) ? (m(), v(T, y({ key: 3 }, {
                        type: e(B).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (r) => f.config.hasIcon = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(Q) ? (m(), v(T, y({ key: 4 }, {
                        type: e(B).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(Cl)
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (r) => f.props.icon = r,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : L("", !0),
                      e(ie) ? (m(), v(T, y({ key: 5 }, {
                        type: e(B).Image,
                        label: "Image",
                        fileBrowserConfig: n.fileBrowserConfig
                      }, {
                        modelValue: f.props.src,
                        "onUpdate:modelValue": (r) => f.props.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(a) ? (m(), v(T, y({ key: 6 }, {
                        type: e(B).Image,
                        label: "Media content",
                        fileBrowserConfig: n.fileBrowserConfig
                      }, {
                        modelValue: f.props.media.src,
                        "onUpdate:modelValue": (r) => f.props.media.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(a) ? (m(), v(T, y({ key: 7 }, {
                        type: e(B).Select,
                        label: "Type",
                        options: e($e)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (r) => f.props.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(d) ? (m(), v(T, y({ key: 8 }, {
                        type: e(B).Image,
                        label: "Background Image",
                        fileBrowserConfig: n.fileBrowserConfig
                      }, {
                        modelValue: f.props.art.src,
                        "onUpdate:modelValue": (r) => f.props.art.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      h("div", null, [
                        e(ee) ? (m(), v(T, y({ key: 0 }, {
                          type: e(B).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (r) => f.props.opacity = r
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                        e(ee) ? (m(), v(T, y({ key: 1 }, {
                          type: e(B).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (r) => f.props.opacity = r
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                      ]),
                      e(a) ? (m(), v(T, y({ key: 9 }, {
                        type: e(B).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: f.config.amountOfCallToActions,
                        "onUpdate:modelValue": (r) => f.config.amountOfCallToActions = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                f.config.amountOfCallToActions > 0 ? (m(!0), M(pe, { key: 2 }, Ae(f.config.callToActions, (r) => (m(), v(E, y({ ref_for: !0 }, {
                  type: e(F).Auto,
                  title: "CTA #1"
                }), {
                  default: x(() => [
                    h("div", Il, [
                      s(T, y({ ref_for: !0 }, {
                        type: e(B).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: r.config.hasIcon,
                        "onUpdate:modelValue": (Y) => r.config.hasIcon = Y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      s(T, y({ ref_for: !0 }, {
                        type: e(B).Text,
                        label: "Icon"
                      }, {
                        modelValue: r.props.icon,
                        "onUpdate:modelValue": (Y) => r.props.icon = Y,
                        disabled: !r.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : L("", !0),
                e(le) ? (m(), v(E, w(y({ key: 3 }, {
                  type: e(F).Auto,
                  title: "Accordion Config"
                })), {
                  default: x(() => [
                    h("div", Ul, [
                      s(T, y({
                        type: e(B).Select,
                        label: "Type",
                        options: e(i)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (r) => f.props.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                e(W) || e(X) ? (m(), v(E, w(y({ key: 4 }, {
                  type: e(F).Auto,
                  title: "Layout Config"
                })), {
                  default: x(() => [
                    h("div", Al, [
                      e(W) ? (m(), v(T, y({ key: 0 }, {
                        type: e(B).Select,
                        label: "Type",
                        options: e(Ne)
                      }, {
                        modelValue: f.layout.type,
                        "onUpdate:modelValue": (r) => f.layout.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(W) && f.layout.type !== e(H).FlexColumn ? (m(), v(T, y({ key: 1 }, {
                        type: e(B).Select,
                        label: f.layout.type === e(H).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(We),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Ge
                        }
                      }, {
                        modelValue: f.layout.amountOfItems,
                        "onUpdate:modelValue": (r) => f.layout.amountOfItems = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(W) ? (m(), v(T, y({ key: 2 }, {
                        type: e(B).Select,
                        label: "Align items",
                        options: Ke,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Je
                        }
                      }, {
                        modelValue: f.layout.alignItems,
                        "onUpdate:modelValue": (r) => f.layout.alignItems = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(W) ? (m(), v(T, y({ key: 3 }, {
                        type: e(B).Select,
                        label: "Justify content",
                        options: ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: qe
                        }
                      }, {
                        modelValue: f.layout.justifyContent,
                        "onUpdate:modelValue": (r) => f.layout.justifyContent = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                      e(X) ? (m(), v(T, y({ key: 4 }, {
                        type: e(B).Select,
                        label: "Columns Reserved",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Qe
                        }
                      }, {
                        modelValue: f.layout.columns,
                        "onUpdate:modelValue": (r) => f.layout.columns = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : L("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : L("", !0),
                s(P, w(A({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(He).Split
                })), {
                  split: x(({ doClose: r }) => [
                    h("div", hl, [
                      s(P, w(A({
                        text: "Before",
                        events: {
                          click: g
                        }
                      })), null, 16),
                      s(P, w(A({
                        text: "After",
                        events: {
                          click: k
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
}), Rl = () => {
  ue({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (p) => new J(p)
  }), ue({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (p) => p.map((u) => new J(u))
  }), Ee({
    url: "/web/element",
    name: "mk-web-element",
    params: {
      type: { default: void 0 },
      children: { default: void 0 },
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
    digToData: "item",
    digToAutoReloadId: "id"
  }), Re({
    url: "/web/element/{id}",
    name: "up-web-element",
    params: {
      id: { default: void 0 },
      children: { default: void 0 },
      component: { default: void 0 },
      config: { default: void 0 },
      layout: { default: void 0 },
      props: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  }), je({
    url: "/web/element/{id}",
    name: "rm-web-element",
    params: {
      id: { default: void 0 }
    },
    digToPerms: "perms",
    digToData: "item"
  });
}, jl = () => {
  ue({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (p) => new Oe(p)
  }), ue({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (p) => p.map((u) => new J(u))
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
}, Ml = {
  install: (p) => {
    p.component("lkt-web-page") === void 0 && (p.component("lkt-web-page", sl), Pe("lkt-web-element-select", yl), Pe("lkt-web-element-config", Dl));
  }
};
export {
  Ml as default,
  Rl as setupWebElementsHttp,
  jl as setupWebPagesHttp
};
