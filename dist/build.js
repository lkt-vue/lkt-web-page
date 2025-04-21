import { defineComponent as q, setBlockTracking as xe, createElementVNode as A, ref as j, watch as G, computed as z, resolveComponent as P, createElementBlock as W, openBlock as m, normalizeClass as $, createCommentVNode as w, createBlock as v, unref as e, resolveDynamicComponent as Be, createSlots as Ie, withCtx as x, createVNode as i, normalizeProps as C, mergeProps as y, guardReactiveProps as U, nextTick as Ue, onMounted as Qe, Fragment as pe, renderList as Ae } from "vue";
import { WebElementLayoutType as H, WebElementType as o, WebParentType as h, ButtonType as He, TablePermission as ae, TableType as me, WebElement as J, WebPage as Oe, FieldType as I, AccordionType as F, BannerType as De, LktSettings as Z, ensureFieldConfig as Xe, getDefaultLktButtonWebElement as Ye, ItemCrudView as Ze, ItemCrudMode as he, applyTextFormat as K, applyTextAlignment as ce, AccordionToggleMode as el } from "lkt-vue-kernel";
import { getCurrentLanguage as ge, getAvailableLanguages as ll } from "lkt-i18n";
import { httpCall as Fe, createHTTPGetResource as ue, createHTTPPostResource as Re, createHTTPPutResource as Ee, createHTTPDeleteResource as je } from "lkt-http-client";
import { openModal as ne, closeModal as fe, addModal as Pe } from "lkt-modal";
import { ucfirst as tl, kebabCaseToCamelCase as ol } from "lkt-string-tools";
const E = /* @__PURE__ */ q({
  __name: "LktText",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(s, { emit: n }) {
    const b = n, t = (l) => {
      b("input", l);
    };
    return (l, T) => T[0] || (xe(-1, !0), (T[0] = A("div", {
      contenteditable: l.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (k) => t(k),
      innerHTML: l.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, xe(1), T[0]);
  }
}), Se = (s, n = !1) => {
  if (!s.layout || n) return "";
  let b = [];
  s.layout.type === H.FlexRow && (!s.layout.amountOfItems || s.layout.amountOfItems.length === 0) ? b.push("lkt-flex-row") : s.layout.type === H.FlexRows && (!s.layout.amountOfItems || s.layout.amountOfItems.length === 0) ? b.push("lkt-flex-rows") : s.layout.type === H.FlexColumn && b.push("lkt-flex-column"), s.layout.amountOfItems && s.layout.amountOfItems.length > 0 && (s.layout.type === H.FlexRow ? b.push(s.layout.amountOfItems.map((l) => `lkt-flex-row-${l}`).join(" ")) : s.layout.type === H.FlexRows ? b.push(s.layout.amountOfItems.map((l) => `lkt-flex-rows-${l}`).join(" ")) : b.push(s.layout.amountOfItems.map((l) => `lkt-grid-${l}`).join(" "))), s.layout.alignItems && s.layout.alignItems.length > 0 && b.push(s.layout.alignItems.join(" ")), s.layout.justifyContent && s.layout.justifyContent.length > 0 && b.push(s.layout.justifyContent.join(" ")), b.length > 0 && b.push("layout-mode");
  let t = b.join(" ");
  return s.layout.type === H.FlexRows && (t = t.replace("flex-row-", "flex-rows-")), t;
}, al = { class: "lkt-element-content" }, nl = {
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
  setup(s, { emit: n }) {
    const b = n, t = s, l = j(t.modelValue);
    G(() => t.modelValue, (p, a) => {
      l.value = p;
    }), G(l, (p, a) => {
      b("update:modelValue", p);
    });
    const T = j(!1), k = (p, a = "text") => {
      const M = p.target.innerHTML.trim();
      M !== l.value.props[a][g] && (l.value.props[a][g] = M);
    }, g = t.lang ?? ge(), L = z(() => [
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
      b("crud-update");
    };
    return (p, a) => {
      var le, te, X;
      const M = P("lkt-image"), de = P("lkt-icon"), ee = P("lkt-header"), Q = P("lkt-button"), _ = P("lkt-anchor"), ie = P("lkt-banner");
      return m(), W("div", {
        class: $(["lkt-element", `is-${l.value.type} is-${l.value.id}`]),
        key: l.value.keyMoment
      }, [
        A("div", al, [
          l.value.type === e(o).LktText ? (m(), v(E, {
            key: 0,
            modelValue: l.value.props.text[e(g)],
            "onUpdate:modelValue": a[0] || (a[0] = (d) => l.value.props.text[e(g)] = d),
            disabled: p.disabled || p.parentType === e(h).Page,
            onInput: a[1] || (a[1] = (d) => k(d))
          }, null, 8, ["modelValue", "disabled"])) : L.value ? (m(), v(Be(S.value), {
            key: 1,
            icon: l.value.config.hasHeader && l.value.config.hasIcon ? l.value.props.icon : "",
            class: $(l.value.props.class)
          }, Ie({
            default: x(() => [
              B.value ? (m(), v(ke, {
                key: 0,
                modelValue: l.value.children,
                "onUpdate:modelValue": a[4] || (a[4] = (d) => l.value.children = d),
                "layout-selector": e(Se)(l.value),
                "is-child": "",
                lang: e(g),
                "is-preview": p.isPreview,
                parent: l.value,
                "parent-type": e(h).Element,
                "modal-crud-config": p.modalCrudConfig,
                "file-browser-config": p.fileBrowserConfig,
                disabled: p.disabled
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "file-browser-config", "disabled"])) : (m(), v(E, {
                key: 1,
                modelValue: l.value.props.text[e(g)],
                "onUpdate:modelValue": a[5] || (a[5] = (d) => l.value.props.text[e(g)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: a[6] || (a[6] = (d) => k(d, "text"))
              }, null, 8, ["modelValue", "disabled"]))
            ]),
            _: 2
          }, [
            (le = l.value.config) != null && le.hasHeader ? {
              name: "header",
              fn: x(() => [
                i(E, {
                  modelValue: l.value.props.header[e(g)],
                  "onUpdate:modelValue": a[2] || (a[2] = (d) => l.value.props.header[e(g)] = d),
                  onInput: a[3] || (a[3] = (d) => k(d, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : l.value.type === e(o).LktImage ? (m(), v(M, {
            key: 2,
            class: $(l.value.props.class),
            src: l.value.props.src,
            alt: typeof l.value.props.alt == "object" ? l.value.props.alt[e(g)] : "",
            title: typeof l.value.props.title == "object" ? l.value.props.title[e(g)] : ""
          }, {
            text: x(() => [
              i(E, {
                modelValue: l.value.props.text[e(g)],
                "onUpdate:modelValue": a[7] || (a[7] = (d) => l.value.props.text[e(g)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: a[8] || (a[8] = (d) => k(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["class", "src", "alt", "title"])) : l.value.type === e(o).LktIcon ? (m(), v(de, {
            key: 3,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: $(l.value.props.class)
          }, {
            text: x(() => [
              i(E, {
                modelValue: l.value.props.text[e(g)],
                "onUpdate:modelValue": a[9] || (a[9] = (d) => l.value.props.text[e(g)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: a[10] || (a[10] = (d) => k(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktHeader ? (m(), v(ee, {
            key: 4,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: $(l.value.props.class)
          }, {
            text: x(() => [
              i(E, {
                modelValue: l.value.props.text[e(g)],
                "onUpdate:modelValue": a[11] || (a[11] = (d) => l.value.props.text[e(g)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: a[12] || (a[12] = (d) => k(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktButton ? (m(), v(Q, {
            key: 5,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: $(l.value.props.class)
          }, {
            text: x(() => [
              i(E, {
                modelValue: l.value.props.text[e(g)],
                "onUpdate:modelValue": a[13] || (a[13] = (d) => l.value.props.text[e(g)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: a[14] || (a[14] = (d) => k(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktAnchor ? (m(), v(_, {
            key: 6,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: $(l.value.props.class)
          }, {
            text: x(() => [
              i(E, {
                modelValue: l.value.props.text[e(g)],
                "onUpdate:modelValue": a[15] || (a[15] = (d) => l.value.props.text[e(g)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: a[16] || (a[16] = (d) => k(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : l.value.type === e(o).LktTextBanner ? (m(), v(ie, {
            key: 7,
            icon: l.value.config.hasIcon ? l.value.props.icon : "",
            class: $(l.value.props.class),
            opacity: l.value.props.opacity,
            art: l.value.props.art,
            media: l.value.props.media,
            type: l.value.props.type
          }, Ie({
            default: x(() => [
              i(E, {
                modelValue: l.value.props.text[e(g)],
                "onUpdate:modelValue": a[21] || (a[21] = (d) => l.value.props.text[e(g)] = d),
                disabled: p.disabled || p.parentType === e(h).Page,
                onInput: a[22] || (a[22] = (d) => k(d, "text"))
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 2
          }, [
            (te = l.value.config) != null && te.hasHeader ? {
              name: "header",
              fn: x(() => [
                i(E, {
                  modelValue: l.value.props.header[e(g)],
                  "onUpdate:modelValue": a[17] || (a[17] = (d) => l.value.props.header[e(g)] = d),
                  disabled: p.disabled || p.parentType === e(h).Page,
                  onInput: a[18] || (a[18] = (d) => k(d, "header"))
                }, null, 8, ["modelValue", "disabled"])
              ]),
              key: "0"
            } : void 0,
            (X = l.value.config) != null && X.hasSubHeader ? {
              name: "subHeader",
              fn: x(() => [
                i(E, {
                  modelValue: l.value.props.subHeader[e(g)],
                  "onUpdate:modelValue": a[19] || (a[19] = (d) => l.value.props.subHeader[e(g)] = d),
                  disabled: p.disabled || p.parentType === e(h).Page,
                  onInput: a[20] || (a[20] = (d) => k(d, "subHeader"))
                }, null, 8, ["modelValue", "disabled"])
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : l.value.type === e(o).LktLayout ? (m(), v(ke, {
            key: 8,
            modelValue: l.value.children,
            "onUpdate:modelValue": a[23] || (a[23] = (d) => l.value.children = d),
            "layout-selector": e(Se)(l.value),
            "is-child": "",
            lang: e(g),
            "is-preview": p.isPreview,
            parent: l.value,
            "parent-type": e(h).Element,
            "modal-crud-config": p.modalCrudConfig,
            disabled: p.disabled
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent", "parent-type", "modal-crud-config", "disabled"])) : (m(), v(Be(l.value.component), C(y({ key: 9 }, l.value.props)), null, 16))
        ]),
        !T.value && p.canRenderActions ? (m(), W("div", nl, [
          i(Q, C(U({
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
  setup(s, { emit: n }) {
    const b = n, t = s, l = j(t.modelValue), T = j(!1);
    G(l, (L) => {
      b("update:modelValue", L);
    }, { deep: !0 }), G(T, (L) => {
      console.log("editing", L);
    }, { deep: !0 });
    const k = z(() => {
      let L = [ae.Update, ae.Sort, ae.SwitchEditMode];
      t.isChild || L.push(ae.Create);
      let B = t.isPreview ? me.Table : me.Item;
      T.value && (B = me.Table);
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
    }), g = () => {
      const L = t.parentType === h.Page ? "r-web-page-children" : "r-web-element-children";
      Fe(L, { id: t.parent.id }).then((B) => {
        l.value = B.data.map((S) => new J(S)), b("crud-update");
      });
    };
    return (L, B) => {
      const S = P("lkt-table");
      return m(), W("div", null, [
        B[2] || (B[2] = A("span", { class: "like-lkt-field-label" }, "Web Elements", -1)),
        i(S, y({
          class: "lkt-elements-table",
          modelValue: l.value,
          "onUpdate:modelValue": B[0] || (B[0] = (O) => l.value = O)
        }, k.value, {
          "edit-mode": T.value,
          "onUpdate:editMode": B[1] || (B[1] = (O) => T.value = O)
        }), {
          item: x(({ _: O, index: p }) => [
            i(ye, {
              modelValue: l.value[p],
              "onUpdate:modelValue": (a) => l.value[p] = a,
              index: p,
              lang: L.lang,
              "is-preview": L.isPreview,
              "parent-children": l.value,
              parent: L.parent,
              "parent-type": L.parentType,
              "file-browser-config": L.fileBrowserConfig,
              "modal-crud-config": L.modalCrudConfig,
              "can-render-actions": !T.value,
              disabled: L.disabled || !T.value,
              onCrudUpdate: g
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent-children", "parent", "parent-type", "file-browser-config", "modal-crud-config", "can-render-actions", "disabled"])
          ]),
          _: 1
        }, 16, ["modelValue", "edit-mode"])
      ]);
    };
  }
}), ul = { class: "lkt-web-page" }, dl = { class: "lkt-grid-1 lkt-grid-3--from-768" }, il = /* @__PURE__ */ q({
  __name: "LktWebPage",
  props: {
    modelValue: {},
    crudConfig: {},
    modalCrudConfig: {},
    fileBrowserConfig: {}
  },
  setup(s) {
    const n = s, b = j(new Oe(n.modelValue)), t = j(null), l = () => {
      t.value.turnStoredDataIntoOriginal();
    };
    return (T, k) => {
      const g = P("lkt-field"), L = P("lkt-item-crud");
      return m(), W("section", ul, [
        i(L, y({
          ref_key: "itemCrudRef",
          ref: t,
          modelValue: b.value,
          "onUpdate:modelValue": k[0] || (k[0] = (B) => b.value = B)
        }, T.crudConfig, {
          title: b.value.name
        }), {
          item: x(({ item: B }) => [
            A("div", dl, [
              i(g, y({
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
              "modal-crud-config": T.modalCrudConfig,
              "file-browser-config": T.fileBrowserConfig,
              parent: b.value,
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
}), rl = { class: "lkt-grid-1" }, sl = { class: "lkt-grid-3" }, pl = { class: "lkt-grid-3" }, ml = { class: "lkt-grid-3" }, cl = /* @__PURE__ */ q({
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
    const n = s, b = j(n.parent), t = (l) => {
      ne("lkt-web-element-config", "_", {
        element: J.createByType(l),
        parent: b.value,
        parentType: n.parentType,
        fileBrowserConfig: n.fileBrowserConfig,
        modalCrudConfig: n.modalCrudConfig
      }), setTimeout(() => {
        fe(n.modalName, n.modalKey);
      }, 200);
    };
    return (l, T) => {
      const k = P("lkt-button"), g = P("lkt-accordion"), L = P("lkt-modal");
      return m(), v(L, y({ id: "lkt-add-element-modal" }, {
        modalName: l.modalName,
        modalKey: l.modalKey,
        zIndex: l.zIndex,
        title: "LktBox Config"
      }), {
        default: x(() => [
          A("div", rl, [
            i(g, C(U({
              type: e(F).Always,
              title: "Content"
            })), {
              default: x(() => [
                A("div", sl, [
                  i(k, C(U({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        t(e(o).LktText);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        t(e(o).LktHeader);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        t(e(o).LktImage);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        t(e(o).LktIcon);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        t(e(o).LktTextBox);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
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
            i(g, C(U({
              type: e(F).Always,
              title: "Containers"
            })), {
              default: x(() => [
                A("div", pl, [
                  i(k, C(U({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        t(e(o).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
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
            i(g, C(U({
              type: e(F).Auto,
              title: "Actions"
            })), {
              default: x(() => [
                A("div", ml, [
                  i(k, C(U({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        t(e(o).LktAnchor);
                      }
                    }
                  })), null, 16),
                  i(k, C(U({
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
}), fl = () => [
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
], yl = () => [
  {
    value: De.Static,
    label: "Static"
  },
  {
    value: De.Parallax,
    label: "Parallax"
  }
], kl = () => [
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
], gl = () => {
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
  }, n = [];
  for (let b in s) {
    let t = s[b];
    if (!t.columns || !Array.isArray(t.columns) || t.columns.length === 0) continue;
    let l = t.columns[0], T = t.columns[t.columns.length - 1];
    for (let k = l; k <= T; ++k)
      n.push({
        value: t.css.replace("{n}", k.toString()),
        label: t.label.replace("{n}", k.toString())
      });
  }
  return n;
}, vl = [
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
], bl = {
  key: 1,
  class: "lkt-flex-row"
}, Cl = { class: "lkt-flex-col-9 lkt-grid-1" }, Vl = { class: "lkt-flex-col-3 lkt-grid-1" }, Tl = { class: "lkt-web-element-config-scroller" }, Ll = { class: "lkt-grid-1 lkt-grid-3--from-768 lkt-web-element-text-editor-buttons" }, wl = { class: "lkt-grid-1" }, xl = { class: "lkt-grid-1" }, Bl = { class: "lkt-grid-1" }, Il = { class: "lkt-grid-1" }, Ul = { class: "lkt-grid-1" }, Al = /* @__PURE__ */ q({
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
    const n = s, b = parseInt(n.modalKey), t = j(new J(n.element)), l = j(null), T = j(!1), k = () => {
      fe(n.modalName, n.modalKey);
    }, g = () => {
      let u = t.value.getClone();
      ne("lkt-web-element-config", "_", {
        element: u,
        parent: n.parent,
        parentType: n.parentType,
        fileBrowserConfig: n.fileBrowserConfig,
        modalCrudConfig: n.modalCrudConfig,
        beforeElement: t.value.id
      });
    }, L = () => {
      let u = t.value.getClone();
      ne("lkt-web-element-config", "_", {
        element: u,
        parent: n.parent,
        parentType: n.parentType,
        fileBrowserConfig: n.fileBrowserConfig,
        modalCrudConfig: n.modalCrudConfig,
        afterElement: t.value.id
      });
    }, B = ll(), S = ge(), O = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktTextBox, o.LktTextAccordion, o.LktTextBanner].includes(t.value.type), p = [o.LktTextBanner].includes(t.value.type), a = [o.LktTextBanner].includes(t.value.type), M = [o.LktTextBanner].includes(t.value.type), de = [o.LktText].includes(t.value.type), ee = [o.LktTextBanner].includes(t.value.type), Q = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktTextBox, o.LktTextAccordion, o.LktIcon, o.LktButton, o.LktAnchor].includes(t.value.type), _ = [o.LktLayoutBox, o.LktLayoutAccordion, o.LktLayout].includes(t.value.type), ie = [o.LktImage].includes(t.value.type), le = [o.LktLayoutAccordion, o.LktTextAccordion].includes(t.value.type), te = [o.LktLayoutAccordion, o.LktLayoutBox, o.LktLayout].includes(t.value.type), X = [H.FlexRow, H.FlexRows].includes((Te = (Ve = n.parent) == null ? void 0 : Ve.layout) == null ? void 0 : Te.type), d = fl(), Me = yl(), Ne = kl(), $e = gl(), We = [
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
    ], oe = (u, c) => {
      if (u.length > 0) {
        let N = String(c.value), R = "";
        if (N.includes("--from") && (R = "--" + N.split("--")[1]), N.includes("--to") && (R = "--" + N.split("--")[1]), R !== "") {
          let V = u.find((se) => String(se).includes(R));
          if (V)
            return V === c.value;
        }
        let D = u.find((V) => !String(V).includes("--"));
        if (D)
          return D === N || N.includes("--");
      }
      return !0;
    }, ze = (u) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.amountOfItems) ?? [],
        u
      );
    }, Ge = (u) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.alignItems) ?? [],
        u
      );
    }, Je = (u) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.justifyContent) ?? [],
        u
      );
    }, qe = (u) => {
      var c;
      return oe(
        ((c = t.value.layout) == null ? void 0 : c.columns) ?? [],
        u
      );
    }, ve = z(() => {
      let u = {};
      switch (t.value.type) {
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
      return Object.keys(u).length > 0 ? Xe(u, Z.defaultFieldElementCustomClassField) : void 0;
    }), be = z(() => tl(ol(t.value.type)) + " Config"), re = (u) => {
      t.value.props.alt = u[0].nameData, t.value.props.title = u[0].nameData;
    }, Ce = j(!1);
    return G(() => n.element, (u) => {
      console.log("updating model value"), Ce.value = !0, t.value = u, Ue(() => {
        Ce.value = !1;
      });
    }), G(() => t.value.config.amountOfCallToActions, (u) => {
      console.log("updated amount of cta: ", u);
      let c = t.value.config.callToActions.length;
      u > c ? t.value.config.callToActions.push(Ye()) : t.value.config.callToActions.splice(u, 1);
    }), Qe(() => {
      console.log("mounted"), console.log(t.value), !t.value.id && t.value.type === o.LktLayout && (T.value = !0, Ue(() => {
        var u;
        Fe(n.modalCrudConfig.createButton.resource, {
          ...(u = n.modalCrudConfig.createButton) == null ? void 0 : u.resourceData,
          ...t.value,
          parent: n.parent.id,
          parentType: n.parentType,
          afterElement: n.afterElement,
          beforeElement: n.beforeElement
        }).then((c) => {
          console.log("created layout", c), t.value.id = c.data.id, console.log("newid:", t.value.id), fe(n.modalName, n.modalKey), setTimeout(() => {
            ne(n.modalName, c.data.id, {
              element: t.value,
              parent: n.parent,
              parentType: n.parentType,
              fileBrowserConfig: n.fileBrowserConfig,
              modalCrudConfig: n.modalCrudConfig,
              onUpdate: n.onUpdate
            });
          }, 200);
        });
      }));
    }), (u, c) => {
      var Le, we;
      const N = P("lkt-loader"), R = P("lkt-accordion"), D = P("lkt-button"), V = P("lkt-field"), se = P("lkt-item-crud");
      return m(), v(se, y({
        ref_key: "itemCrudRef",
        ref: l,
        class: "lkt-web-element-config-modal",
        modelValue: t.value,
        "onUpdate:modelValue": c[11] || (c[11] = (f) => t.value = f)
      }, {
        mode: e(b) > 0 ? e(he).Update : e(he).Create,
        view: e(Ze).Modal,
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
          id: e(b)
        },
        ...u.modalCrudConfig,
        createButton: T.value ? !1 : {
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
            click: n.onUpdate
          }
        },
        updateButton: {
          ...u.modalCrudConfig.updateButton,
          resourceData: {
            ...(we = u.modalCrudConfig.updateButton) == null ? void 0 : we.resourceData,
            ...t.value
          },
          events: {
            click: n.onUpdate
          }
        }
      }), {
        item: x(({ item: f }) => [
          T.value ? (m(), v(N, { key: 0 })) : (m(), W("div", bl, [
            A("div", Cl, [
              i(ye, {
                modelValue: t.value,
                "onUpdate:modelValue": c[0] || (c[0] = (r) => t.value = r),
                "is-preview": "",
                "can-render-actions": !1,
                "modal-crud-config": u.modalCrudConfig,
                parent: t.value
              }, null, 8, ["modelValue", "modal-crud-config", "parent"]),
              (m(!0), W(pe, null, Ae(e(B), (r) => (m(), W(pe, null, [
                r !== e(S) ? (m(), v(R, y({
                  key: 0,
                  ref_for: !0
                }, {
                  type: e(F).Auto,
                  title: r
                }), {
                  default: x(() => [
                    i(ye, {
                      modelValue: t.value,
                      "onUpdate:modelValue": c[1] || (c[1] = (Y) => t.value = Y),
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
            A("div", Vl, [
              A("div", Tl, [
                e(te) ? (m(), v(D, C(y({ key: 0 }, {
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
                i(R, C(U({
                  type: e(F).Always,
                  title: "Text editor"
                })), {
                  default: x(() => [
                    A("div", Ll, [
                      i(D, y({
                        icon: "lkt-icn-bold"
                      }, {
                        onClick: c[2] || (c[2] = () => e(K)("bold"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-italic"
                      }, {
                        onClick: c[3] || (c[3] = () => e(K)("italic"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-underline"
                      }, {
                        onClick: c[4] || (c[4] = () => e(K)("underline"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-strike"
                      }, {
                        onClick: c[5] || (c[5] = () => e(K)("strikeThrough"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-superscript"
                      }, {
                        onClick: c[6] || (c[6] = () => e(K)("superscript"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-subscript"
                      }, {
                        onClick: c[7] || (c[7] = () => e(K)("subscript"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-align-left"
                      }, {
                        onClick: c[8] || (c[8] = () => e(ce)("left"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-align-center"
                      }, {
                        onClick: c[9] || (c[9] = () => e(ce)("center"))
                      }), null, 16),
                      i(D, y({
                        icon: "lkt-icn-align-right"
                      }, {
                        onClick: c[10] || (c[10] = () => e(ce)("right"))
                      }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                e(de) ? w("", !0) : (m(), v(R, C(y({ key: 1 }, {
                  type: e(F).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: e(el).Display
                })), {
                  default: x(() => [
                    A("div", wl, [
                      ve.value ? (m(), v(V, y({ key: 0 }, {
                        type: e(I).Select,
                        ...ve.value,
                        canClear: !0
                      }, {
                        modelValue: f.props.class,
                        "onUpdate:modelValue": (r) => f.props.class = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(O) ? (m(), v(V, y({ key: 1 }, {
                        type: e(I).Switch,
                        label: "Has header"
                      }, {
                        modelValue: f.config.hasHeader,
                        "onUpdate:modelValue": (r) => f.config.hasHeader = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(p) ? (m(), v(V, y({ key: 2 }, {
                        type: e(I).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: f.config.hasSubHeader,
                        "onUpdate:modelValue": (r) => f.config.hasSubHeader = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(Q) ? (m(), v(V, y({ key: 3 }, {
                        type: e(I).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: f.config.hasIcon,
                        "onUpdate:modelValue": (r) => f.config.hasIcon = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(Q) ? (m(), v(V, y({ key: 4 }, {
                        type: e(I).Text,
                        label: "Icon",
                        canClear: !0,
                        options: e(vl)
                      }, {
                        modelValue: f.props.icon,
                        "onUpdate:modelValue": (r) => f.props.icon = r,
                        disabled: !f.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : w("", !0),
                      e(ie) ? (m(), v(V, y({ key: 5 }, {
                        type: e(I).Image,
                        label: "Image",
                        fileBrowserConfig: u.fileBrowserConfig
                      }, {
                        modelValue: f.props.src,
                        "onUpdate:modelValue": (r) => f.props.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(M) ? (m(), v(V, y({ key: 6 }, {
                        type: e(I).Image,
                        label: "Media content",
                        fileBrowserConfig: u.fileBrowserConfig
                      }, {
                        modelValue: f.props.media.src,
                        "onUpdate:modelValue": (r) => f.props.media.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(M) ? (m(), v(V, y({ key: 7 }, {
                        type: e(I).Select,
                        label: "Type",
                        options: e(Me)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (r) => f.props.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(a) ? (m(), v(V, y({ key: 8 }, {
                        type: e(I).Image,
                        label: "Background Image",
                        fileBrowserConfig: u.fileBrowserConfig
                      }, {
                        modelValue: f.props.art.src,
                        "onUpdate:modelValue": (r) => f.props.art.src = r,
                        onPickedFiles: re
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      A("div", null, [
                        e(ee) ? (m(), v(V, y({ key: 0 }, {
                          type: e(I).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (r) => f.props.opacity = r
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                        e(ee) ? (m(), v(V, y({ key: 1 }, {
                          type: e(I).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: f.props.opacity,
                          "onUpdate:modelValue": (r) => f.props.opacity = r
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0)
                      ]),
                      e(M) ? (m(), v(V, y({ key: 9 }, {
                        type: e(I).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: f.config.amountOfCallToActions,
                        "onUpdate:modelValue": (r) => f.config.amountOfCallToActions = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)),
                f.config.amountOfCallToActions > 0 ? (m(!0), W(pe, { key: 2 }, Ae(f.config.callToActions, (r) => (m(), v(R, y({ ref_for: !0 }, {
                  type: e(F).Auto,
                  title: "CTA #1"
                }), {
                  default: x(() => [
                    A("div", xl, [
                      i(V, y({ ref_for: !0 }, {
                        type: e(I).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: r.config.hasIcon,
                        "onUpdate:modelValue": (Y) => r.config.hasIcon = Y
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      i(V, y({ ref_for: !0 }, {
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
                e(le) ? (m(), v(R, C(y({ key: 3 }, {
                  type: e(F).Auto,
                  title: "Accordion Config"
                })), {
                  default: x(() => [
                    A("div", Bl, [
                      i(V, y({
                        type: e(I).Select,
                        label: "Type",
                        options: e(d)
                      }, {
                        modelValue: f.props.type,
                        "onUpdate:modelValue": (r) => f.props.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : w("", !0),
                e(_) || e(X) ? (m(), v(R, C(y({ key: 4 }, {
                  type: e(F).Auto,
                  title: "Layout Config"
                })), {
                  default: x(() => [
                    A("div", Il, [
                      e(_) ? (m(), v(V, y({ key: 0 }, {
                        type: e(I).Select,
                        label: "Type",
                        options: e(Ne)
                      }, {
                        modelValue: f.layout.type,
                        "onUpdate:modelValue": (r) => f.layout.type = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(_) && f.layout.type !== e(H).FlexColumn ? (m(), v(V, y({ key: 1 }, {
                        type: e(I).Select,
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
                        "onUpdate:modelValue": (r) => f.layout.amountOfItems = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(_) ? (m(), v(V, y({ key: 2 }, {
                        type: e(I).Select,
                        label: "Align items",
                        options: _e,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Ge
                        }
                      }, {
                        modelValue: f.layout.alignItems,
                        "onUpdate:modelValue": (r) => f.layout.alignItems = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(_) ? (m(), v(V, y({ key: 3 }, {
                        type: e(I).Select,
                        label: "Justify content",
                        options: Ke,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: Je
                        }
                      }, {
                        modelValue: f.layout.justifyContent,
                        "onUpdate:modelValue": (r) => f.layout.justifyContent = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0),
                      e(X) ? (m(), v(V, y({ key: 4 }, {
                        type: e(I).Select,
                        label: "Columns Reserved",
                        options: We,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: qe
                        }
                      }, {
                        modelValue: f.layout.columns,
                        "onUpdate:modelValue": (r) => f.layout.columns = r
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : w("", !0),
                i(D, C(U({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: e(He).Split
                })), {
                  split: x(({ doClose: r }) => [
                    A("div", Ul, [
                      i(D, C(U({
                        text: "Before",
                        events: {
                          click: g
                        }
                      })), null, 16),
                      i(D, C(U({
                        text: "After",
                        events: {
                          click: L
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                i(D, C(U({
                  text: "Remove element",
                  icon: "lkt-icn-less",
                  events: {
                    click: k
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
}), Fl = () => {
  ue({
    url: "/web/element/{id}",
    name: "r-web-element",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (s) => new J(s)
  }), ue({
    url: "/web/element/{id}/children",
    name: "r-web-element-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((n) => new J(n))
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
}, Rl = () => {
  ue({
    url: "/web/page/{id}",
    name: "r-web-page",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "item",
    mapData: (s) => new Oe(s)
  }), ue({
    url: "/web/page/{id}/children",
    name: "r-web-page-children",
    params: { id: { default: void 0 } },
    digToPerms: "perms",
    digToData: "results",
    mapData: (s) => s.map((n) => new J(n))
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
}, El = {
  install: (s) => {
    s.component("lkt-web-page") === void 0 && (s.component("lkt-web-page", il), Pe("lkt-web-element-select", cl), Pe("lkt-web-element-config", Al));
  }
};
export {
  El as default,
  Fl as setupWebElementsHttp,
  Rl as setupWebPagesHttp
};
