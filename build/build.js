import { defineComponent as q, setBlockTracking as xe, createElementVNode as A, ref as R, watch as G, computed as z, resolveComponent as P, createElementBlock as $, openBlock as c, normalizeClass as N, createCommentVNode as w, createBlock as b, unref as e, resolveDynamicComponent as Be, createSlots as Ie, withCtx as x, createVNode as i, normalizeProps as V, mergeProps as k, guardReactiveProps as U, nextTick as Ue, onMounted as Xe, Fragment as pe, renderList as Ae } from "vue";
import { WebElementLayoutType as H, WebElementType as o, WebParentType as h, ButtonType as He, TablePermission as ne, TableType as me, WebElement as J, WebPage as Oe, FieldType as I, AccordionType as F, BannerType as De, LktSettings as Z, ensureFieldConfig as Ye, getDefaultLktButtonWebElement as Ze, ItemCrudView as el, ItemCrudMode as he, applyTextFormat as K, applyTextAlignment as ce, AccordionToggleMode as ll } from "lkt-vue-kernel";
import { getCurrentLanguage as ge, getAvailableLanguages as tl } from "lkt-i18n";
import { httpCall as Fe, createHTTPGetResource as de, createHTTPPostResource as Re, createHTTPPutResource as Ee, createHTTPDeleteResource as je } from "lkt-http-client";
import { openModal as ue, closeModal as fe, addModal as Pe } from "lkt-modal";
import { ucfirst as ol, kebabCaseToCamelCase as al } from "lkt-string-tools";
const j = /* @__PURE__ */ q({
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
    const C = a, t = (l) => {
      C("input", l);
    };
    return (l, m) => m[0] || (xe(-1, !0), (m[0] = A("div", {
      contenteditable: l.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (g) => t(g),
      innerHTML: l.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, xe(1), m[0]);
  }
}), Se = (s, a = !1) => {
  if (!s.layout || a) return "";
  let C = [];
  s.layout.type === H.FlexRow && (!s.layout.amountOfItems || s.layout.amountOfItems.length === 0) ? C.push("lkt-flex-row") : s.layout.type === H.FlexRows && (!s.layout.amountOfItems || s.layout.amountOfItems.length === 0) ? C.push("lkt-flex-rows") : s.layout.type === H.FlexColumn && C.push("lkt-flex-column"), s.layout.amountOfItems && s.layout.amountOfItems.length > 0 && (s.layout.type === H.FlexRow ? C.push(s.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : s.layout.type === H.FlexRows ? C.push(s.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : C.push(s.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), s.layout.alignItems && s.layout.alignItems.length > 0 && C.push(s.layout.alignItems.join(" ")), s.layout.justifyContent && s.layout.justifyContent.length > 0 && C.push(s.layout.justifyContent.join(" ")), C.length > 0 && C.push("layout-mode");
  let t = C.join(" ");
  return s.layout.type === H.FlexRows && (t = t.replace("flex-row-", "flex-rows-")), t;
}, nl = { class: "lkt-element-content" }, ul = {
  key: 0,
  class: "lkt-element-actions"
}, ye = /* @__PURE__ */ q({
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
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    "crud-update"
  ],
  setup(s, { emit: a }) {
    const C = a, t = s, l = R(t.modelValue);
    G(() => t.modelValue, (p, n) => {
      l.value = p;
    }), G(l, (p, n) => {
      C("update:modelValue", p);
    });
    const m = R(!1), g = (p, n = "text") => {
      const _ = p.target.innerHTML.trim();
      _ !== l.value.props[n][v] && (l.value.props[n][v] = _);
    }, v = t.lang ?? ge(), L = z(() => [
      o.LktLayoutBox,
      o.LktTextBox,
      o.LktLayoutAccordion,
      o.LktTextAccordion
    ].includes(l.value.type)), B = z(() => [
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
      C("crud-update");
    };
    return (p, n) => {
      var le, te, oe;
      const _ = P("lkt-image"), Q = P("lkt-icon"), ie = P("lkt-header"), X = P("lkt-button"), ee = P("lkt-anchor"), W = P("lkt-banner");
      return c(), $("div", {
        class: N(["lkt-element", `is-${l.value.type} is-${l.value.id}`]),
        key: l.value.keyMoment
      }, [
        A("div", nl, [
          l.value.type === e(o).LktText ? (c(), b(j, {
            key: 0,
            modelValue: l.value.props.text[e(v)],
            "onUpdate:modelValue": n[0] || (n[0] = (d) => l.value.props.text[e(v)] = d),
            disabled: p.disabled || p.parentType === e(h).Page,
            onInput: n[1] || (n[1] = (d) => g(d))
          }, null, 8, ["modelValue", "disabled"])) : L.value ? (c(), b(Be(S.value), {
            key: 1,
            icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, Ie({
            default: x(() => [
              B.value ? (c(), b(ke, {
                key: 0,
                modelValue: l.value.children,
                "onUpdate:modelValue": n[4] || (n[4] = (d) => l.value.children = d),
                "layout-selector": e(Se)(l.value),
                "is-child": "",
                lang: e(v),
                "is-preview": p.isPreview,
                parent: l.value,
                "parent-type": e(h).Element,
                "modal-crud-config": p.modalCrudConfig,
                "file-browser-config": p.fileBrowserConfig,
                disabled: p.disabled
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled"])) : (c(), b(j, {
                key: 1,
                modelValue: l.value.props.text[e(v)],
                "onUpdate:modelValue": n[5] || (n[5] = (d) => l.value.props.text[e(v)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: n[6] || (n[6] = (d) => g(d, "text"))
              }, null, 8, ["modelValue", "disabled"]))
            ]),
            _: 2
          }, [
            (le = l.value.config) != null && le.hasHeader ? {
              name: "header",
              fn: x(() => [
                i(j, {
                  modelValue: l.value.props.header[e(v)],
                  "onUpdate:modelValue": n[2] || (n[2] = (d) => l.value.props.header[e(v)] = d),
                  onInput: n[3] || (n[3] = (d) => g(d, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : l.value.type === e(o).LktImage ? (c(), b(_, {
            key: 2,
            class: N(l.value.props.class),
            src: l.value.props.src,
            alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(v)] : "",
            title: typeof l.value.props.title == "object" ? l.value.props.title[e(v)] : ""
          }, {
            text: x(() => [
              i(j, {
                modelValue: l.value.props.text[e(v)],
                "onUpdate:modelValue": n[7] || (n[7] = (d) => l.value.props.text[e(v)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: n[8] || (n[8] = (d) => g(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(o).LktIcon ? (c(), b(Q, {
            key: 3,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              i(j, {
                modelValue: l.value.props.text[e(v)],
                "onUpdate:modelValue": n[9] || (n[9] = (d) => l.value.props.text[e(v)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: n[10] || (n[10] = (d) => g(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktHeader ? (c(), b(ie, {
            key: 4,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              i(j, {
                modelValue: l.value.props.text[e(v)],
                "onUpdate:modelValue": n[11] || (n[11] = (d) => l.value.props.text[e(v)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: n[12] || (n[12] = (d) => g(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktButton ? (c(), b(X, {
            key: 5,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              i(j, {
                modelValue: l.value.props.text[e(v)],
                "onUpdate:modelValue": n[13] || (n[13] = (d) => l.value.props.text[e(v)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: n[14] || (n[14] = (d) => g(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktAnchor ? (c(), b(ee, {
            key: 6,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class)
          }, {
            text: x(() => [
              i(j, {
                modelValue: l.value.props.text[e(v)],
                "onUpdate:modelValue": n[15] || (n[15] = (d) => l.value.props.text[e(v)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: n[16] || (n[16] = (d) => g(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktTextBanner ? (c(), b(W, {
            key: 7,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: N(l.value.props.class),
            opacity: l.value.props.opacity,
            art: l.value.props.art,
            media: l.value.props.media,
            type: l.value.props.type
          }, Ie({
            default: x(() => [
              i(j, {
                modelValue: l.value.props.text[e(v)],
                "onUpdate:modelValue": n[21] || (n[21] = (d) => l.value.props.text[e(v)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: n[22] || (n[22] = (d) => g(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 2
          }, [
            (te = l.value.config) != null && te.hasHeader ? {
              name: "header",
              fn: x(() => [
                i(j, {
                  modelValue: l.value.props.header[e(v)],
                  "onUpdate:modelValue": n[17] || (n[17] = (d) => l.value.props.header[e(v)] = d),
                  disabled: p.disabled || p.parentType === e(h).Page,
                  onInput: n[18] || (n[18] = (d) => g(d, "header"))
                }, null, 8, ["modelValue", "disabled"])
              ]),
              key: "0"
            } : void 0,
            (oe = l.value.config) != null && oe.hasSubHeader ? {
              name: "subHeader",
              fn: x(() => [
                i(j, {
                  modelValue: l.value.props.subHeader[e(v)],
                  "onUpdate:modelValue": n[19] || (n[19] = (d) => l.value.props.subHeader[e(v)] = d),
                  disabled: p.disabled || p.parentType === e(h).Page,
                  onInput: n[20] || (n[20] = (d) => g(d, "subHeader"))
                }, null, 8, ["modelValue", "disabled"])
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(o).LktLayout ? (c(), b(ke, {
            key: 8,
            modelValue: l.value.children,
            "onUpdate:modelValue": n[23] || (n[23] = (d) => l.value.children = d),
            "layout-selector": e(Se)(l.value),
            "is-child": "",
            lang: e(v),
            "is-preview": p.isPreview,
            parent: l.value,
            "parent-type": e(h).Element,
            "modal-crud-config": p.modalCrudConfig,
            disabled: p.disabled
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "disabled"])) : (c(), b(Be(l.value.component), V(k({ key: 9 }, l.value.props)), null, 16))
        ]),
        !m.value && p.canRenderActions ? (c(), $("div", ul, [
          i(X, V(U({
            type: e(He).Button,
            text: l.value.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-web-element-config",
            modalKey: l.value.id,
            modalData: {
              element: l.value,
              parent: p.parent,
              parentType: p.parentType,
              fileBrowserConfig: p.fileBrowserConfig,
              modalCrudConfig: p.modalCrudConfig,
              onUpdate: O
            }
          })), null, 16)
        ])) : w("", !0)
      ], 2);
    };
  }
}), ke = /* @__PURE__ */ q({
  __name: "LktWebElements",
  props: {
    modelValue: {},
    parent: {},
    parentType: { default: h.Element },
    layoutSelector: { default: "" },
    lang: {},
    isChild: { type: Boolean, default: !1 },
    isPreview: { type: Boolean, default: !1 },
    fileBrowserConfig: {},
    modalCrudConfig: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    "crud-update"
  ],
  setup(s, { emit: a }) {
    const C = a, t = s, l = R(t.modelValue), m = R(!1);
    G(l, (L) => {
      C("update:modelValue", L);
    }, { deep: !0 }), G(m, (L) => {
      console.log("editing", L);
    }, { deep: !0 });
    const g = z(() => {
      let L = [ne.Update, ne.Sort, ne.SwitchEditMode];
      t.isChild || L.push(ne.Create);
      let B = t.isPreview ? me.Table : me.Item;
      m.value && (B = me.Table);
      let S = "lkt-grid-1";
      return t.isChild && (S = t.layoutSelector), {
        type: B,
        perms: L,
        itemsContainerClass: S,
        slotItemVar: "element",
        hideTableHeader: !0,
        itemContainerClass: (O) => {
          if (!O.layout || t.isPreview) return "";
          let p = [];
          return O.layout.columns && O.layout.columns.length > 0 && p.push(O.layout.columns.join(" ")), p.join(" ");
        },
        requiredItemsForBottomCreate: 10,
        drag: {
          enabled: t.isPreview || m.value,
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
    }), v = () => {
      const L = t.parentType === h.Page ? "r-web-page-children" : "r-web-element-children";
      Fe(L, { id: t.parent.id }).then((B) => {
        l.value = B.data.map((S) => new J(S)), C("crud-update");
      });
    };
    return (L, B) => {
      const S = P("lkt-table");
      return c(), $("div", null, [
        B[2] || (B[2] = A("span", { class: "like-lkt-field-label" }, "Web Elements", -1)),
        i(S, k({
          class: "lkt-elements-table",
          modelValue: l.value,
          "onUpdate:modelValue": B[0] || (B[0] = (O) => l.value = O)
        }, g.value, {
          "edit-mode": m.value,
          "onUpdate:editMode": B[1] || (B[1] = (O) => m.value = O)
        }), {
          item: x(({ _: O, index: p }) => [
            i(ye, {
              modelValue: l.value[p],
              "onUpdate:modelValue": (n) => l.value[p] = n,
              index: p,
              lang: L.lang,
              "is-preview": L.isPreview,
              "parent-children": l.value,
              parent: L.parent,
              "parent-type": L.parentType,
              "file-browser-config": L.fileBrowserConfig,
              "modal-crud-config": L.modalCrudConfig,
              "can-render-actions": !m.value,
              disabled: L.disabled || !m.value,
              onCrudUpdate: v
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent-children", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled"])
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"])
      ]);
    };
  }
}), dl = { class: "lkt-web-page" }, il = { class: "lkt-grid-1 lkt-grid-3--from-768" }, rl = /* @__PURE__ */ q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(s) {
    const a = s, C = R(new Oe(a.modelValue)), t = R(null), l = () => {
      t.value.turnStoredDataIntoOriginal();
    };
    return (m, g) => {
      const v = P("lkt-field"), L = P("lkt-item-crud");
      return c(), $("section", dl, [
        i(L, k({
          ref_key: "itemCrudRef",
          ref: t,
          modelValue: C.value,
          "onUpdate:modelValue": g[0] || (g[0] = (B) => C.value = B)
        }, m.crudConfig, {
          title: C.value.name
        }), {
          item: x(({ item: B }) => [
            A("div", il, [
              i(v, k({
                modelValue: B.name,
                "onUpdate:modelValue": (S) => B.name = S
              }, {
                type: e(I).Text,
                label: "Name"
              }), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            i(ke, {
              modelValue: B.webElements,
              "onUpdate:modelValue": (S) => B.webElements = S,
              lang: e(ge)(),
              "modal-crud-config": m.modalCrudConfig,
              "file-browser-config": m.fileBrowserConfig,
              parent: C.value,
              "parent-type": e(h).Page,
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
}), sl = { class: "lkt-grid-1" }, pl = { class: "lkt-grid-3" }, ml = { class: "lkt-grid-3" }, cl = { class: "lkt-grid-3" }, fl = /* @__PURE__ */ q({
  __name: "LktWebElementSelectModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    parent: {},
    parentType: { default: h.Element },
    fileBrowserConfig: {},
    modalCrudConfig: {}
  },
  setup(s) {
    const a = s, C = R(a.parent), t = (l) => {
      ue("lkt-web-element-config", "_", {
        element: J.createByType(l),
        parent: C.value,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig
      }), setTimeout(() => {
        fe(a.modalName, a.modalKey);
      }, 200);
    };
    return (l, m) => {
      const g = P("lkt-button"), v = P("lkt-accordion"), L = P("lkt-modal");
      return c(), b(L, k({ id: "lkt-add-element-modal" }, {
        modalName: l.modalName,
        modalKey: l.modalKey,
        zIndex: l.zIndex,
        title: "LktBox Config"
      }), {
        default: x(() => [
          A("div", sl, [
            i(v, V(U({
              type: e(F).Always,
              title: "Content"
            })), {
              default: x(() => [
                A("div", pl, [
                  i(g, V(U({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        t(e(o).LktText);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        t(e(o).LktHeader);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        t(e(o).LktImage);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        t(e(o).LktIcon);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        t(e(o).LktTextBox);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
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
            i(v, V(U({
              type: e(F).Always,
              title: "Containers"
            })), {
              default: x(() => [
                A("div", ml, [
                  i(g, V(U({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
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
            i(v, V(U({
              type: e(F).Auto,
              title: "Actions"
            })), {
              default: x(() => [
                A("div", cl, [
                  i(g, V(U({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        t(e(o).LktAnchor);
                      }
                    }
                  })), null, 16),
                  i(g, V(U({
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
}), yl = () => [
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
    value: De.Static,
    label: "Static"
  },
  {
    value: De.Parallax,
    label: "Parallax"
  }
], gl = () => [
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
], vl = () => {
  let s = {
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
  }, a = [];
  for (let C in s) {
    let t = s[C];
    if (!t.columns || !Array.isArray(t.columns) || t.columns.length === 0) continue;
    let l = t.columns[0], m = t.columns[t.columns.length - 1];
    for (let g = l; g <= m; ++g)
      a.push({
        value: t.css.replace("{n}", g.toString()),
        label: t.label.replace("{n}", g.toString())
      });
  }
  return a;
}, bl = [
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
], Cl = {
  key: 1,
  class: "lkt-flex-row"
}, Vl = { class: "lkt-flex-col-9 lkt-grid-1" }, Tl = { class: "lkt-flex-col-3 lkt-grid-1" }, Ll = { class: "lkt-web-element-config-scroller" }, wl = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, xl = { class: "lkt-grid-1" }, Bl = { class: "lkt-grid-1" }, Il = { class: "lkt-grid-1" }, Ul = { class: "lkt-grid-1" }, Al = { class: "lkt-grid-1" }, Dl = /* @__PURE__ */ q({
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
  setup(s) {
    var Ve, Te;
    const a = s;
    console.log("webParent: ", a.parent, a.parentType);
    const C = parseInt(a.modalKey), t = R(new J(a.element)), l = R(null), m = R(a.element), g = R(!1), v = () => {
      fe(a.modalName, a.modalKey);
    }, L = () => {
      let u = t.value.getClone();
      ue("lkt-web-element-config", "_", {
        element: u,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        beforeElement: t.value.id
      });
    }, B = () => {
      let u = t.value.getClone();
      ue("lkt-web-element-config", "_", {
        element: u,
        parent: a.parent,
        parentType: a.parentType,
        fileBrowserConfig: a.fileBrowserConfig,
        modalCrudConfig: a.modalCrudConfig,
        afterElement: t.value.id
      });
    }, S = tl(), O = ge(), p = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktTextBox, o.LktTextAccordion, o.LktTextBanner].includes(m.value.type), n = [o.LktTextBanner].includes(m.value.type), _ = [o.LktTextBanner].includes(m.value.type), Q = [o.LktTextBanner].includes(m.value.type), ie = [o.LktText].includes(m.value.type), X = [o.LktTextBanner].includes(m.value.type), ee = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktTextBox, o.LktTextAccordion, o.LktIcon, o.LktButton, o.LktAnchor].includes(m.value.type), W = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktLayout].includes(m.value.type), le = [o.LktImage].includes(m.value.type), te = [o.LktLayoutAccordion, o.LktTextAccordion].includes(m.value.type), oe = [o.LktLayoutAccordion, o.LktLayoutBox, o.LktLayout].includes(m.value.type), d = [H.FlexRow, H.FlexRows].includes((Te = (Ve = a.parent) == null ? void 0 : Ve.layout) == null ? void 0 : Te.type), Me = yl(), Ne = kl(), $e = gl(), We = vl(), _e = [
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
    ], ae = (u, f) => {
      if (u.length > 0) {
        let M = String(f.value), E = "";
        if (M.includes("--from") && (E = "--" + M.split("--")[1]), M.includes("--to") && (E = "--" + M.split("--")[1]), E !== "") {
          let T = u.find((se) => String(se).includes(E));
          if (T)
            return T === f.value;
        }
        let D = u.find((T) => !String(T).includes("--"));
        if (D)
          return D === M || M.includes("--");
      }
      return !0;
    }, Ge = (u) => {
      var f;
      return ae(
        ((f = m.value.layout) == null ? void 0 : f.amountOfItems) ?? [],
        u
      );
    }, Je = (u) => {
      var f;
      return ae(
        ((f = m.value.layout) == null ? void 0 : f.alignItems) ?? [],
        u
      );
    }, qe = (u) => {
      var f;
      return ae(
        ((f = m.value.layout) == null ? void 0 : f.justifyContent) ?? [],
        u
      );
    }, Qe = (u) => {
      var f;
      return ae(
        ((f = m.value.layout) == null ? void 0 : f.columns) ?? [],
        u
      );
    }, ve = z(() => {
      let u = {};
      switch (m.value.type) {
        case o.LktLayoutBox:
        case o.LktTextBox:
          u = Z.defaultFieldLktBoxElementCustomClassField;
          break;
        case o.LktLayoutAccordion:
        case o.LktTextAccordion:
          u = Z.defaultFieldLktAccordionElementCustomClassField;
          break;
        case o.LktIcon:
          u = Z.defaultFieldLktIconElementCustomClassField;
          break;
        case o.LktImage:
          u = Z.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(u).length > 0 ? Ye(u, Z.defaultFieldElementCustomClassField) : void 0;
    }), be = z(() => ol(al(m.value.type)) + " Config"), re = (u) => {
      m.value.props.alt = u[0].nameData, m.value.props.title = u[0].nameData;
    }, Ce = R(!1);
    return G(() => a.element, (u) => {
      console.log("updating model value"), Ce.value = !0, m.value = u, Ue(() => {
        Ce.value = !1;
      });
    }), G(() => m.value.config.amountOfCallToActions, (u) => {
      console.log("updated amount of cta: ", u);
      let f = m.value.config.callToActions.length;
      u > f ? m.value.config.callToActions.push(Ze()) : m.value.config.callToActions.splice(u, 1);
    }), Xe(() => {
      console.log("mounted"), console.log(m.value), !t.value.id && t.value.type === o.LktLayout && (g.value = !0, Ue(() => {
        var u;
        Fe(a.modalCrudConfig.createButton.resource, {
          ...(u = a.modalCrudConfig.createButton) == null ? void 0 : u.resourceData,
          ...t.value,
          parent: a.parent.id,
          parentType: a.parentType,
          afterElement: a.afterElement,
          beforeElement: a.beforeElement
        }).then((f) => {
          console.log("created layout", f), t.value.id = f.data.id, console.log("newid:", t.value.id), fe(a.modalName, a.modalKey), setTimeout(() => {
            ue(a.modalName, f.data.id, {
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
    }), (u, f) => {
      var Le, we;
      const M = P("lkt-loader"), E = P("lkt-accordion"), D = P("lkt-button"), T = P("lkt-field"), se = P("lkt-item-crud");
      return c(), b(se, k({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: t.value,
        "onUpdate:modelValue": f[11] || (f[11] = (y) => t.value = y)
      }, {
        mode: e(C) > 0 ? e(he).Update : e(he).Create,
        view: e(el).Modal,
        editing: !0,
        perms: ["update"],
        title: be.value,
        modalConfig: {
          modalName: u.modalName,
          modalKey: u.modalKey,
          zIndex: u.zIndex,
          title: be.value
        },
        readData: {
          id: e(C)
        },
        ...u.modalCrudConfig,
        createButton: g.value ? !1 : {
          ...u.modalCrudConfig.createButton,
          resourceData: {
            ...(Le = u.modalCrudConfig.createButton) == null ? void 0 : Le.resourceData,
            ...t.value,
            parent: u.parent.id,
            parentType: u.parentType,
            afterElement: u.afterElement,
            beforeElement: u.beforeElement
          },
          events: {
            click: a.onUpdate
          }
        },
        updateButton: {
          ...u.modalCrudConfig.updateButton,
          resourceData: {
            ...(we = u.modalCrudConfig.updateButton) == null ? void 0 : we.resourceData,
            ...t.value
          },
          events: {
            click: a.onUpdate
          }
        }
      }), {
        item: x(({ item: y }) => [
          g.value ? (c(), b(M, { key: 0 })) : (c(), $("div", Cl, [
            A("div", Vl, [
              i(ye, {
                modelValue: t.value,
                "onUpdate:modelValue": f[0] || (f[0] = (r) => t.value = r),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": u.modalCrudConfig,
                parent: t.value
              }, null, 8, ["modelValue", "modal-crud-config", "parent"]),
              (c(!0), $(pe, null, Ae(e(S), (r) => (c(), $(pe, null, [
                r !== e(O) ? (c(), b(E, k({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(F).Auto,
                  title: r
                }), {
                  default: x(() => [
                    i(ye, {
                      modelValue: t.value,
                      "onUpdate:modelValue": f[1] || (f[1] = (Y) => t.value = Y),
                      lang: r,
                      "is-preview": "",
                      "can-render-actions": !1,
                      "modal-crud-config": u.modalCrudConfig,
                      parent: t.value
                    }, null, 8, ["modelValue", "lang", "modal-crud-config", "parent"])
                  ]),
                  _: 2
                }, 1040)) : w("", !0)
              ], 64))), 256))
            ]),
            A("div", Tl, [
              A("div", Ll, [
                e(oe) ? (c(), b(D, V(k({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-web-element-select",
                  modalData: {
                    fileBrowserConfig: u.fileBrowserConfig,
                    modalCrudConfig: u.modalCrudConfig,
                    parent: t.value,
                    parentType: e(h).Element
                  }
                })), null, 16)) : w("", !0),
                i(E, V(U({
                  type: e(F).Always,
                  title: "Text editor"
                })), {
                  default: x(() => [
                    A("div", wl, [
                      i(D, k({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: f[2] || (f[2] = () => e(K)("bold"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: f[3] || (f[3] = () => e(K)("italic"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: f[4] || (f[4] = () => e(K)("underline"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: f[5] || (f[5] = () => e(K)("strikeThrough"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: f[6] || (f[6] = () => e(K)("superscript"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: f[7] || (f[7] = () => e(K)("subscript"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: f[8] || (f[8] = () => e(ce)("left"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: f[9] || (f[9] = () => e(ce)("center"))
                      }), null, 16),
                      i(D, k({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: f[10] || (f[10] = () => e(ce)("right"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                e(ie) ? w("", !0) : (c(), b(E, V(k({ key: 1 }, {
                  type: e(F).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(ll).Display
                })), {
                  default: x(() => [
                    A("div", xl, [
                      ve.value ? (c(), b(T, k({ key: 0 }, {
                        type: e(I).Select,
                        ...ve.value,
                        canClear: !0
                      }, {
                        modelValue: y.props.class,
                        "onUpdate:modelValue": (r) => y.props.class = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(p) ? (c(), b(T, k({ key: 1 }, {
                        type: e(I).Switch,
                        label: "Has header"
                      }, {
                        modelValue: y.config.hasHeader,
                        "onUpdate:modelValue": (r) => y.config.hasHeader = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(n) ? (c(), b(T, k({ key: 2 }, {
                        type: e(I).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: y.config.hasSubHeader,
                        "onUpdate:modelValue": (r) => y.config.hasSubHeader = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(ee) ? (c(), b(T, k({ key: 3 }, {
                        type: e(I).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: y.config.hasIcon,
                        "onUpdate:modelValue": (r) => y.config.hasIcon = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(ee) ? (c(), b(T, k({ key: 4 }, {
                        type: e(I).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(bl)
                      }, {
                        modelValue: y.props.icon,
                        "onUpdate:modelValue": (r) => y.props.icon = r,
                        disabled: !y.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : w("", !0),
                      e(le) ? (c(), b(T, k({ key: 5 }, {
                        type: e(I).Image,
                        label: "Image",
                        fileBrowserConfig: u.fileBrowserConfig
                      }, {
                        modelValue: y.props.src,
                        "onUpdate:modelValue": (r) => y.props.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(Q) ? (c(), b(T, k({ key: 6 }, {
                        type: e(I).Image,
                        label: "Media content",
                        fileBrowserConfig: u.fileBrowserConfig
                      }, {
                        modelValue: y.props.media.src,
                        "onUpdate:modelValue": (r) => y.props.media.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(Q) ? (c(), b(T, k({ key: 7 }, {
                        type: e(I).Select,
                        label: "Type",
                        options: e(Ne)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (r) => y.props.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(_) ? (c(), b(T, k({ key: 8 }, {
                        type: e(I).Image,
                        label: "Background Image",
                        fileBrowserConfig: u.fileBrowserConfig
                      }, {
                        modelValue: y.props.art.src,
                        "onUpdate:modelValue": (r) => y.props.art.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      A("div", null, [
                        e(X) ? (c(), b(T, k({ key: 0 }, {
                          type: e(I).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (r) => y.props.opacity = r
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                        e(X) ? (c(), b(T, k({ key: 1 }, {
                          type: e(I).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: y.props.opacity,
                          "onUpdate:modelValue": (r) => y.props.opacity = r
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0)
                      ]),
                      e(Q) ? (c(), b(T, k({ key: 9 }, {
                        type: e(I).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: y.config.amountOfCallToActions,
                        "onUpdate:modelValue": (r) => y.config.amountOfCallToActions = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)),
                y.config.amountOfCallToActions > 0 ? (c(!0), $(pe, { key: 2 }, Ae(y.config.callToActions, (r) => (c(), b(E, k({ ref_for: !0 }, {
                  type: e(F).Auto,
                  title: "CTA #1"
                }), {
                  default: x(() => [
                    A("div", Bl, [
                      i(T, k({ ref_for: !0 }, {
                        type: e(I).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: r.config.hasIcon,
                        "onUpdate:modelValue": (Y) => r.config.hasIcon = Y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      i(T, k({ ref_for: !0 }, {
                        type: e(I).Text,
                        label: "Icon"
                      }, {
                        modelValue: r.props.icon,
                        "onUpdate:modelValue": (Y) => r.props.icon = Y,
                        disabled: !r.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : w("", !0),
                e(te) ? (c(), b(E, V(k({ key: 3 }, {
                  type: e(F).Auto,
                  title: "Accordion Config"
                })), {
                  default: x(() => [
                    A("div", Il, [
                      i(T, k({
                        type: e(I).Select,
                        label: "Type",
                        options: e(Me)
                      }, {
                        modelValue: y.props.type,
                        "onUpdate:modelValue": (r) => y.props.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : w("", !0),
                e(W) || e(d) ? (c(), b(E, V(k({ key: 4 }, {
                  type: e(F).Auto,
                  title: "Layout Config"
                })), {
                  default: x(() => [
                    A("div", Ul, [
                      e(W) ? (c(), b(T, k({ key: 0 }, {
                        type: e(I).Select,
                        label: "Type",
                        options: e($e)
                      }, {
                        modelValue: y.layout.type,
                        "onUpdate:modelValue": (r) => y.layout.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(W) && y.layout.type !== e(H).FlexColumn ? (c(), b(T, k({ key: 1 }, {
                        type: e(I).Select,
                        label: y.layout.type === e(H).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: e(We),
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: Ge
                        }
                      }, {
                        modelValue: y.layout.amountOfItems,
                        "onUpdate:modelValue": (r) => y.layout.amountOfItems = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(W) ? (c(), b(T, k({ key: 2 }, {
                        type: e(I).Select,
                        label: "Align items",
                        options: Ke,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Je
                        }
                      }, {
                        modelValue: y.layout.alignItems,
                        "onUpdate:modelValue": (r) => y.layout.alignItems = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(W) ? (c(), b(T, k({ key: 3 }, {
                        type: e(I).Select,
                        label: "Justify content",
                        options: ze,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: qe
                        }
                      }, {
                        modelValue: y.layout.justifyContent,
                        "onUpdate:modelValue": (r) => y.layout.justifyContent = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(d) ? (c(), b(T, k({ key: 4 }, {
                        type: e(I).Select,
                        label: "Columns Reserved",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Qe
                        }
                      }, {
                        modelValue: y.layout.columns,
                        "onUpdate:modelValue": (r) => y.layout.columns = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : w("", !0),
                i(D, V(U({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(He).Split
                })), {
                  split: x(({ doClose: r }) => [
                    A("div", Al, [
                      i(D, V(U({
                        text: "Before",
                        events: {
                          click: L
                        }
                      })), null, 16),
                      i(D, V(U({
                        text: "After",
                        events: {
                          click: B
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                i(D, V(U({
                  text: "Remove element",
                  icon: "lkt-icn-less",
                  events: {
                    click: v
                  }
                })), null, 16)
              ])
            ])
          ]))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), Rl = () => {
  de({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (s) => new J(s)
  }), de({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((a) => new J(a))
  }), Re({
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
  }), Ee({
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
}, El = () => {
  de({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (s) => new Oe(s)
  }), de({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((a) => new J(a))
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
  }), Ee({
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
}, jl = {
  install: (s) => {
    s.component("lkt-web-page") === void 0 && (s.component("lkt-web-page", rl), Pe("lkt-web-element-select", fl), Pe("lkt-web-element-config", Dl));
  }
};
export {
  jl as default,
  Rl as setupWebElementsHttp,
  El as setupWebPagesHttp
};
