(function(t) {
    function e(e) {
        for (var n, a, c = e[0], r = e[1], l = e[2], u = 0, d = []; u < c.length; u++)
            a = c[u],
            Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
            o[a] = 0;
        for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        h && h(e);
        while (d.length)
            d.shift()();
        return s.push.apply(s, l || []),
        i()
    }
    function i() {
        for (var t, e = 0; e < s.length; e++) {
            for (var i = s[e], n = !0, c = 1; c < i.length; c++) {
                var r = i[c];
                0 !== o[r] && (n = !1)
            }
            n && (s.splice(e--, 1),
            t = a(a.s = i[0]))
        }
        return t
    }
    var n = {}
      , o = {
        app: 0
    }
      , s = [];
    function a(e) {
        if (n[e])
            return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, a),
        i.l = !0,
        i.exports
    }
    a.m = t,
    a.c = n,
    a.d = function(t, e, i) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(t, e) {
        if (1 & e && (t = a(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (a.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                a.d(i, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return i
    }
    ,
    a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return a.d(e, "a", e),
        e
    }
    ,
    a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    a.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || []
      , r = c.push.bind(c);
    c.push = e,
    c = c.slice();
    for (var l = 0; l < c.length; l++)
        e(c[l]);
    var h = r;
    s.push([0, "chunk-vendors"]),
    i()
}
)({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "0159": function(t, e, i) {},
    "034f": function(t, e, i) {
        "use strict";
        var n = i("1356")
          , o = i.n(n);
        o.a
    },
    "09f8": function(t, e, i) {},
    1356: function(t, e, i) {},
    1766: function(t, e, i) {},
    "3a2d": function(t, e, i) {
        t.exports = i.p + "https://ldstabler.github.io/computer/computer/sys/img/SVG.jpg"
    },
    "43fb": function(t, e, i) {},
    4678: function(t, e, i) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-SG": "cdab",
            "./en-SG.js": "cdab",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function o(t) {
            var e = s(t);
            return i(e)
        }
        function s(t) {
            if (!i.o(n, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return n[t]
        }
        o.keys = function() {
            return Object.keys(n)
        }
        ,
        o.resolve = s,
        t.exports = o,
        o.id = "4678"
    },
    "46ac": function(t, e, i) {
        "use strict";
        var n = i("1766")
          , o = i.n(n);
        o.a
    },
    4728: function(t, e, i) {
        "use strict";
        var n = i("0159")
          , o = i.n(n);
        o.a
    },
    "497e": function(t, e, i) {},
    "4cf7": function(t, e, i) {
        "use strict";
        var n = i("43fb")
          , o = i.n(n);
        o.a
    },
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = {};
        i.r(n),
        i.d(n, "WindowResizeEvent", (function() {
            return ue
        }
        )),
        i.d(n, "fixPosition", (function() {
            return ve
        }
        )),
        i.d(n, "StyleBlack", (function() {
            return Ft
        }
        )),
        i.d(n, "StyleWhite", (function() {
            return Lt
        }
        )),
        i.d(n, "StyleMetal", (function() {
            return Ut
        }
        )),
        i.d(n, "StyleFactory", (function() {
            return It
        }
        )),
        i.d(n, "install", (function() {
            return we
        }
        )),
        i.d(n, "windows", (function() {
            return Nt
        }
        )),
        i.d(n, "WindowType", (function() {
            return ye
        }
        ));
        i("cadf"),
        i("551c"),
        i("f751"),
        i("097d");
        var o = i("2b0e")
          , s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-app", [i("v-content", [i("v-container", {
                staticClass: "desktop",
                style: {
                    backgroundImage: "url(" + t.backgroundUrl + ")"
                },
                attrs: {
                    fluid: ""
                }
            }, [i("v-list", {
                staticStyle: {
                    width: "110px",
                    "background-color": "rgba(255, 255, 255, 0) !important"
                },
                attrs: {
                    dense: "",
                    "two-line": ""
                }
            }, [i("v-list-item", {
                attrs: {
                    link: ""
                },
                on: {
                    click: function(e) {
                        return t.toggleApp(11, !0)
                    }
                }
            }, [i("v-list-item-content", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [i("v-list-item-icon", {
                staticStyle: {
                    "margin-bottom": "5px",
                    "margin-left": "20px"
                }
            }, [i("v-icon", {
                attrs: {
                    "x-large": "",
                    color: "#1565C0"
                }
            }, [t._v("mdi-microsoft-word")])], 1), i("v-list-item-title", [t._v("SSuite Documents")])], 1)], 1), i("v-list-item", {
                attrs: {
                    link: ""
                },
                on: {
                    click: function(e) {
                        return t.toggleApp(10, !0)
                    }
                }
            }, [i("v-list-item-content", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [i("v-list-item-icon", {
                staticStyle: {
                    "margin-bottom": "5px",
                    "margin-left": "20px"
                }
            }, [i("ExcelIcon")], 1), i("v-list-item-title", [t._v("SSuite Spreadsheets")])], 1)], 1), i("v-list-item", {
                attrs: {
                    link: ""
                },
                on: {
                    click: function(e) {
                        return t.toggleApp(21, !0)
                    }
                }
            }, [i("v-list-item-content", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [i("v-list-item-icon", {
                staticStyle: {
                    "margin-bottom": "5px",
                    "margin-left": "20px"
                }
            }, [i("v-icon", {
                attrs: {
                    "x-large": "",
                    color: "#9400d3"
                }
            }, [t._v("mdi-image")])], 1), i("v-list-item-title", [t._v("Photopea")])], 1)], 1)], 1)], 1)], 1), i("v-navigation-drawer", {
                staticStyle: {
                    "z-index": "28"
                },
                attrs: {
                    absolute: "",
                    right: "",
                    width: "307"
                },
                model: {
                    value: t.drawer,
                    callback: function(e) {
                        t.drawer = e
                    },
                    expression: "drawer"
                }
            }, [i("v-layout", {
                attrs: {
                    "justify-space-between": "",
                    column: "",
                    "fill-height": ""
                }
            }, [i("v-list", {
                attrs: {
                    "three-line": "",
                    dense: ""
                }
            }, [i("v-list-item", [i("v-list-item-content", [i("v-list-item-title", [t._v("Welcome to Liam's WebTop.")]), i("v-list-item-subtitle", [t._v("Webtop with fake 17 core and 2GB RAM.")])], 1)], 1)], 1), i("v-spacer"), i("v-list", {
                attrs: {
                    subheader: "",
                    dense: ""
                }
					 }, [i("v-subheader", [t._v("Ads")]), i("v-list-item-group", {
                attrs: {
                    color: "primary"
                }
            }, [i("v-list-item", {
                on: {
                    click: t.openAdsterraDirect
                }
            }, [i("v-list-item-content", [i("v-list-item-title", [t._v("Adsterra Direct link")])], 1)], 1), i("v-list-item", {
                on: {
                    click: t.openPropellerAdsDirect
                }
            }, [i("v-list-item-content", [i("v-list-item-title", [t._v("PropellerAds Direct link")])], 1)], 1)], 1)], 1), i("v-list", {
                staticClass: "mb-12",
                attrs: {
                    subheader: "",
                    "two-line": "",
                    dense: "",
                    "justify-end": ""
                }
            }, [i("v-subheader", [t._v("Donate to The Project")]), i("v-list-item", {
                attrs: {
                    selectable: ""
                }
            }, [i("v-list-item-content", [i("v-list-item-title", [t._v("Bitcoin address:"), i("v-btn", {
                staticStyle: {
                    "margin-left": "132px !important"
                },
                attrs: {
                    "x-small": ""
                },
                on: {
                    click: t.copyBtcAddress
                }
            }, [t._v("copy")])], 1), i("v-list-item-subtitle", {
                attrs: {
                    id: "btcAddress"
                }
            }, [t._v("1C5uqnU4MHZMhDCQHxECQQuVpZs6LZooRK")])], 1)], 1)], 1)], 1)], 1), i("v-app-bar", {
                staticStyle: {
                    "z-index": "29"
                },
                attrs: {
                    app: "",
                    bottom: !0,
                    dense: "",
                    dark: ""
                }
            }, [i("v-menu", {
                staticStyle: {
                    "z-index": "30"
                },
                attrs: {
                    left: "",
                    top: "",
                    "offset-y": ""
                },
                scopedSlots: t._u([{
                    key: "activator",
                    fn: function(e) {
                        var n = e.on;
                        return [i("v-btn", t._g({
                            attrs: {
                                icon: ""
                            }
                        }, n), [i("v-icon", [t._v("mdi-microsoft-windows")])], 1)]
                    }
                }])
            }, [i("v-card", {
                staticClass: "startcard"
            }, [i("v-card-actions", {
                staticStyle: {
                    padding: "0em"
                }
            }, [i("StartMenu")], 1)], 1)], 1), i("div", {
                staticClass: "search"
            }, [i("v-text-field", {
                attrs: {
                    "hide-details": "",
                    label: "Search",
                    "prepend-inner-icon": "",
                    dark: "",
                    "single-line": ""
                },
                on: {
                    keyup: t.searchInternet,
                    "click:prepend-inner": function(e) {
                        return t.toggleAppUrl(2, "https://www.google.com/search?igu=1&q=" + t.search, !0)
                    }
                },
                model: {
                    value: t.search,
                    callback: function(e) {
                        t.search = e
                    },
                    expression: "search"
                }
            })], 1), t._l(t.apps, (function(e) {
                return i("v-tooltip", {
                    key: e.id,
                    attrs: {
                        top: ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(n) {
                            var o = n.on;
                            return [i("v-btn", t._g({
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.isTaskbarVisible,
                                    expression: "app.isTaskbarVisible"
                                }],
                                class: [e.isOpen ? "toolbar-button-active" : "toolbar-button"],
                                attrs: {
                                    tile: "",
                                    icon: ""
                                },
                                on: {
                                    click: function(i) {
                                        return t.toggleAppState(e.id)
                                    }
                                }
                            }, o), [i("v-icon", {
                                attrs: {
                                    size: "32",
                                    color: e.iconcolor
                                }
                            }, [t._v(t._s(e.icon))])], 1)]
                        }
                    }], null, !0)
                }, [i("span", [t._v(t._s(e.title))])])
            }
            )), i("v-spacer"), i("v-btn", {
                staticStyle: {
                    transform: "rotate(270deg)"
                },
                attrs: {
                    icon: ""
                }
            }, [i("v-icon", [t._v("mdi-signal-variant")])], 1), i("DateTime"), i("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.drawer = !t.drawer
                    }
                }
            }, [i("v-icon", [t._v("mdi-message-text")])], 1)], 2), t._l(t.apps, (function(e) {
                return i("silveos-window-style-black", {
                    key: e.id
                }, [i("silveos-window", {
                    style: [e.isMaximized ? {
                        width: "calc(100vw - (100vw - 100%))",
                        height: "calc(100vh - 48px)"
                    } : {
                        width: e.width + "px",
                        height: e.height + "px"
                    }],
                    attrs: {
                        icon: e.icon,
                        iconcolor: e.iconcolor,
                        positionHint: "center",
                        title: e.title,
                        minimizeButton: !0,
                        closeButton: !0,
                        maximizeButton: e.isResizible,
                        isOpen: e.isOpen,
                        isMaximized: e.isMaximized,
                        draggable: !0,
                        resizable: e.isResizible
                    },
                    on: {
                        closebuttonclick: function(i) {
                            return t.closeApp(e.id)
                        },
                        minimizebuttonclick: function(i) {
                            return t.toggleAppState(e.id)
                        },
                        "update:isOpen": function(i) {
                            return t.$set(e, "isOpen", i)
                        },
                        "update:is-open": function(i) {
                            return t.$set(e, "isOpen", i)
                        },
                        "update:isMaximized": function(i) {
                            return t.$set(e, "isMaximized", i)
                        },
                        "update:is-maximized": function(i) {
                            return t.$set(e, "isMaximized", i)
                        }
                    }
                }, [e.isExternalUrl ? [e.isTaskbarVisible ? i("div", {
                    staticClass: "wrap"
                }, [i("iframe", {
                    staticClass: "frame",
                    attrs: {
                        src: e.url
                    }
                })]) : t._e()] : [i(e.url, {
                    tag: "component"
                })]], 2)], 1)
            }
            )), i("v-overlay", {
                attrs: {
                    absolute: "",
                    opacity: t.shutdownOpacity,
                    value: t.isShutdown,
                    "z-index": 100
                }
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.shutdownOpacity < 1,
                    expression: "shutdownOpacity < 1"
                }]
            }, [i("v-progress-circular", {
                attrs: {
					 	  indeterminate: true,
                    color: "white"
						  }
            }), i("span", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "x-large"
                }
            }, [t._v("")])], 1)])], 2)
        }
          , a = []
          , c = (i("386d"),
        i("ac6a"),
        i("c575"))
          , r = i.n(c)
          , l = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "dt"
            }, [t._v(t._s(t.displayTime)), i("br"), t._v(t._s(t.displayDate))])
        }
          , h = []
          , u = i("c1df")
          , d = i.n(u)
          , p = {
            data: function() {
                return {
                    time: Date.now()
                }
            },
            computed: {
                displayTime: function() {
                    return d()(this.time).format("HH:mm")
                },
                displayDate: function() {
                    return d()(this.time).format("L")
                }
            },
            created: function() {
                var t = this;
                setInterval((function() {
                    t.time = Date.now()
                }
                ), 1e3)
            }
        }
          , v = p
          , f = (i("4728"),
        i("2877"))
          , g = Object(f["a"])(v, l, h, !1, null, "a1322f76", null)
          , m = g.exports
          , b = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("v-container", {
                staticStyle: {
                    padding: "0px",
                    margin: "0px"
                }
            }, [n("v-navigation-drawer", {
                staticStyle: {
                    transform: "translateX(0)"
                },
                attrs: {
                    absolute: "",
                    permanent: "",
                    temporary: "",
                    "hide-overlay": "",
                    "mini-variant": t.miniDrawer,
                    "mini-variant-width": "2.5em",
                    width: "10em"
                },
                on: {
                    "update:miniVariant": function(e) {
                        t.miniDrawer = e
                    },
                    "update:mini-variant": function(e) {
                        t.miniDrawer = e
                    }
                }
            }, [n("v-layout", {
                attrs: {
                    "justify-space-between": "",
                    column: "",
                    "fill-height": ""
                }
            }, [n("v-list", [n("v-list-item", {
                attrs: {
                    link: ""
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.miniDrawer = !t.miniDrawer
                    }
                }
            }, [n("v-list-item-icon", [n("v-app-bar-nav-icon")], 1)], 1)], 1), n("v-spacer"), n("v-list", {
                attrs: {
                    dense: "",
                    "justify-end": ""
                }
            }, [n("v-list-item", {
                attrs: {
                    disabled: "",
                    link: ""
                }
            }, [n("v-list-item-icon", [n("v-icon", {
                attrs: {
                    color: "white"
                }
            }, [t._v("mdi-account-circle-outline")])], 1), n("v-list-item-title", [t._v("Lenni")])], 1), n("v-list-item", {
                attrs: {
                    disabled: "",
                    link: ""
                }
            }, [n("v-list-item-icon", [n("v-icon", {
                attrs: {
                    color: "white"
                }
            }, [t._v("mdi-cog")])], 1), n("v-list-item-title", [t._v("Settings")])], 1), n("v-list-item", {
                attrs: {
                    link: ""
                },
                on: {
                    click: t.shutdown
                }
            }, [n("v-list-item-icon", [n("v-icon", [t._v("mdi-logout")])], 1), n("v-list-item-title", [t._v("Logout")])], 1)], 1)], 1)], 1), n("div", {
                attrs: {
                    id: "start"
                }
            }, [n("div", {
                staticClass: "grid-layout-container margin-right"
            }, [n("v-row", {
                key: 1
            }, [n("v-col", {
                key: 1,
                staticClass: "col-start",
                attrs: {
                    cols: "8"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(4),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#1E90FF"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(1, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("EdgeIcon", {
                staticClass: "icon",
                staticStyle: {
                    fill: "white"
                }
            }), n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    Microsoft Edge\n                                ")])], 1)])], 1), n("v-col", {
                key: 2,
                staticClass: "col-start",
                attrs: {
                    cols: "4"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(2),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#9400d3"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(3, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("OneNoteIcon", {
                staticClass: "icon",
                staticStyle: {
                    fill: "white"
                }
            }), n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    Note\n                                ")])], 1)])], 1)], 1), n("v-row", {
                key: 2
            }, [n("v-col", {
                key: 1,
                staticClass: "col-start",
                attrs: {
                    cols: "4"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(2),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#228b22"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(7, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("v-icon", {
                staticClass: "icon",
                attrs: {
                    "x-large": ""
                }
            }, [t._v("mdi-map-marker-outline")]), n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    Map\n                                ")])], 1)])], 1), n("v-col", {
                key: 2,
                staticClass: "col-start",
                attrs: {
                    cols: "8"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(4),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#282828"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(20, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("YouTubeIcon", {
                staticClass: "youtubeicon",
                staticStyle: {
                    fill: "white"
                }
            })], 1)])], 1)], 1), n("v-row", {
                key: 3
            }, [n("v-col", {
                key: 1,
                staticClass: "col-start",
                attrs: {
                    cols: "8"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(4),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#21519D"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(5, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("img", {
                staticClass: "solitaire-cover-img",
                attrs: {
                    src: i("3a2d")
                }
            })])])], 1), n("v-col", {
                key: 2,
                staticClass: "col-start",
                attrs: {
                    cols: "4"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(2),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#ffa07a"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(9, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("PowerPointIcon", {
                staticClass: "icon",
                staticStyle: {
                    fill: "white"
                }
            }), n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    Discord\n                                ")])], 1)])], 1)], 1), n("v-row", {
                key: 4
            }, [n("v-col", {
                key: 1,
                staticClass: "col-start",
                attrs: {
                    cols: "4"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(2),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#1E90FF"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(15, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "calendar"
            }, [n("div", {
                staticClass: "calendar-week-day"
            }, [t._v("\n                                        " + t._s(t.weekDay) + "\n                                    ")]), n("div", {
                staticClass: "calendar-month-day"
            }, [t._v("\n                                        " + t._s(t.monthDay) + "\n                                    ")])])])])], 1), n("v-col", {
                key: 2,
                staticClass: "col-start",
                attrs: {
                    cols: "8"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(4),
                    height: t.getHeight(2),
                    rotateX: t.rotateNews,
                    faceStyle: {
                        "background-color": "#ff4500"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.clickNews()
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    News\n                                ")]), n("img", {
                staticClass: "news-cover-img",
                attrs: {
                    src: "https://news.sky.com/resources/sky-news-logo.png?v=1?bypass-service-worker"
                }
            }), n("div", {
                staticClass: "news-title"
            }, [t._v("\n                                    Sky news\n                                ")]), n("div", {
                staticClass: "news-subtitle"
            }, [t._v("\n                                    World News - Breaking international news and headlines\n                                ")])]), n("div", {
                attrs: {
                    slot: "top"
                },
                slot: "top"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    News\n                                ")]), n("img", {
                staticClass: "news-cover-img",
                attrs: {
                    src: "https://static.foxnews.com/static/orion/styles/img/fox-news/s/logos/fox-news-logo.svg"
                }
            }), n("div", {
                staticClass: "news-title"
            }, [t._v("\n                                    Fox news\n                                ")]), n("div", {
                staticClass: "news-subtitle"
            }, [t._v("\n                                    Breaking News Updates | Latest News Headlines | Photos & News Videos\n                                ")])]), n("div", {
                attrs: {
                    slot: "bottom"
                },
                slot: "bottom"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    News\n                                ")]), n("img", {
                staticClass: "news-cover-img",
                attrs: {
                    src: "https://www.thesun.co.uk/wp-content/themes/thesun/images/sunmasthead.svg"
                }
            }), n("div", {
                staticClass: "news-title"
            }, [t._v("\n                                    The Sun\n                                ")]), n("div", {
                staticClass: "news-subtitle"
            }, [t._v("\n                                    Latest News headlines, exclusives and opinion\n                                ")])])])], 1)], 1)], 1), n("div", {
                staticClass: "grid-layout-container"
            }, [n("v-row", {
                key: 1
            }, [n("v-col", {
                key: 1,
                staticClass: "col-start",
                attrs: {
                    cols: "2"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(1),
                    height: t.getHeight(1, 1.5),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#1E90FF"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(14, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("WeatherIcon", {
                staticClass: "icon",
                staticStyle: {
                    fill: "white"
                }
            })], 1)]), n("MetroTile", {
                staticStyle: {
                    "margin-top": "0.375em"
                },
                attrs: {
                    width: t.getWidth(1),
                    height: t.getHeight(1, 1.5),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#1E90FF"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(13, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("CameraIcon", {
                staticClass: "icon",
                staticStyle: {
                    fill: "white"
                }
            })], 1)])], 1), n("v-col", {
                key: 2,
                staticClass: "col-start",
                attrs: {
                    cols: "2"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(1),
                    height: t.getHeight(1, 1.5),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#1E90FF"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(18, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("v-icon", {
                staticClass: "icon",
                attrs: {
                    large: ""
                }
            }, [t._v("mdi-calculator")])], 1)]), n("MetroTile", {
                staticStyle: {
                    "margin-top": "0.375em"
                },
                attrs: {
                    width: t.getWidth(1),
                    height: t.getHeight(1, 1.5),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#1E90FF"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(6, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("PhotoIcon", {
                staticClass: "icon",
                staticStyle: {
                    fill: "white"
                }
            })], 1)])], 1), n("v-col", {
                key: 3,
                staticClass: "col-start",
                attrs: {
                    cols: "8"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(4),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#3cb371"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(10, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    SSuite Spreadsheets\n                                ")]), n("ExcelIcon", {
                staticClass: "icon"
            })], 1)])], 1)], 1), n("v-row", {
                key: 2
            }, [n("v-col", {
                key: 1,
                staticClass: "col-start",
                attrs: {
                    cols: "8"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(4),
                    height: t.getHeight(4, .5),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#608B8B"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(16, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                              Addicting Games\n                                ")]), n("img", {
                staticClass: "icon",
                attrs: {
                    src: "data:image/png;base64,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"
                }
            })])])], 1), n("v-col", {
                key: 2,
                staticClass: "col-start",
                attrs: {
                    cols: "4"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(2),
                    height: t.getHeight(2, 1.5),
                    rotateX: t.rotateApps,
                    frontStyle: {
                        "background-color": "#8a2be2"
                    },
                    topStyle: {
                        "background-color": "#1E90FF"
                    },
                    backStyle: {
                        "background-color": "yellow"
                    },
                    bottomStyle: {
                        "background-color": "green"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.clickApp()
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    PDFzorro\n                                ")]), n("v-icon", {
                staticClass: "icon",
                attrs: {
                    "x-large": ""
                }
            }, [t._v("mdi-file-pdf-outline")])], 1), n("div", {
                attrs: {
                    slot: "top"
                },
                slot: "top"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    Photopea\n                                ")]), n("img", {
                staticClass: "photopeaimage",
                attrs: {
                    src: "https://www.photopea.com/promo/thumb256.png"
                }
            })])]), n("MetroTile", {
                staticStyle: {
                    "margin-top": "0.375em"
                },
                attrs: {
                    width: t.getWidth(2),
                    height: t.getHeight(2, 1.5),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#4169e1"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(19, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    TuneIn\n                                ")]), n("TuneinIcon", {
                staticClass: "icon",
                staticStyle: {
                    fill: "white"
                }
            })], 1)])], 1)], 1), n("v-row", {
                key: 3
            }, [n("v-col", {
                key: 1,
                staticClass: "col-start",
                attrs: {
                    cols: "8"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(4),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#4169e1"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(11, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    Doc\n                                ")]), n("v-icon", {
                staticClass: "icon",
                attrs: {
                    "x-large": ""
                }
            }, [t._v("mdi-microsoft-word")])], 1)])], 1), n("v-col", {
                key: 2,
                staticClass: "col-start",
                attrs: {
                    cols: "4"
                }
            }, [n("MetroTile", {
                attrs: {
                    width: t.getWidth(2),
                    height: t.getHeight(2),
                    rotateX: 0,
                    faceStyle: {
                        "background-color": "#cd5c5c"
                    }
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleApp(12, !0)
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "front"
                },
                slot: "front"
            }, [n("div", {
                staticClass: "tile-label"
            }, [t._v("\n                                    Drawing\n                                ")]), n("v-icon", {
                staticClass: "icon",
                attrs: {
                    "x-large": ""
                }
            }, [t._v("mdi-drawing-box")])], 1)])], 1)], 1)], 1)])], 1)
        }
          , w = []
          , y = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                ref: "scene",
                style: t.sceneStyle,
                on: {
                    mousemove: function(e) {
                        return t.onMouseMove(e)
                    },
                    mousedown: function(e) {
                        return t.onMouseDown(e)
                    },
                    mouseup: function(e) {
                        return t.onMouseUp(e)
                    },
                    mouseleave: t.onMouseLeave,
                    touchmove: function(e) {
                        return e.preventDefault(),
                        t.onTouchMove(e)
                    }
                }
            }, [i("div", {
                style: t.boxContainerStyle
            }, [i("div", {
                style: t.frontFaceStyle
            }, [t._t("front")], 2), i("div", {
                style: t.backFaceStyle
            }, [t._t("back")], 2), i("div", {
                style: t.topFaceStyle
            }, [t._t("top")], 2), i("div", {
                style: t.bottomFaceStyle
            }, [t._t("bottom")], 2), i("div", {
                style: t.rightFaceStyle
            }, [t._t("right")], 2), i("div", {
                style: t.leftFaceStyle
            }, [t._t("left")], 2)]), i("div", {
                class: {
                    border: t.isHover && !t.isMouseDown
                },
                style: t.glareBoundingBox
            }, [i("div", {
                style: t.hoverGlareStyle
            }), i("div", {
                class: {
                    ripple: t.isAnimating
                },
                style: t.clickGlareStyle,
                on: {
                    animationend: t.resetAnimation
                }
            })])])
        }
          , k = []
          , x = (i("8e6e"),
        i("456d"),
        i("bd86"));
        i("c5f6");
        function j(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        function _(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? j(i, !0).forEach((function(e) {
                    Object(x["a"])(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : j(i).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        var z = {
            name: "MetroTile",
            props: {
                faceStyle: {
                    type: Object
                },
                frontStyle: {
                    type: Object
                },
                backStyle: {
                    type: Object
                },
                rightStyle: {
                    type: Object
                },
                leftStyle: {
                    type: Object
                },
                topStyle: {
                    type: Object
                },
                bottomStyle: {
                    type: Object
                },
                rotateX: {
                    type: Number,
                    default: 0
                },
                height: {
                    type: Number,
                    default: 200
                },
                width: {
                    type: Number,
                    default: 250
                },
                perspective: {
                    type: Number,
                    default: 750
                },
                maxTiltX: {
                    type: Number,
                    default: 20
                },
                maxTiltY: {
                    type: Number,
                    default: 10
                },
                clickGlareSize: {
                    type: Number,
                    default: 90
                },
                clickGlareOpacity: {
                    type: Number,
                    default: .2
                },
                hoverGlareOpacity: {
                    type: Number,
                    default: .3
                }
            },
            data: function() {
                return {
                    curTiltTransform: "",
                    clickGlareTop: 0,
                    clickGlareLeft: 0,
                    glareScale: 5,
                    hoverX: 0,
                    hoverY: 0,
                    mouseDownX: 0,
                    mouseDownY: 0,
                    isHover: !1,
                    isMouseDown: !1,
                    isAnimating: !1
                }
            },
            computed: {
                sceneStyle: function() {
                    return {
                        position: "relative",
                        cursor: "pointer",
                        width: "".concat(this.width, "vw"),
                        height: "".concat(this.height, "vh"),
                        perspective: "".concat(this.perspective, "em"),
                        overflow: "hidden",
                        "background-color": "rgba(153,153,153,0.3)"
                    }
                },
                curFaceTransform: function() {
                    return "translateZ(-".concat(this.height / 2, "vh) rotateX(").concat(this.rotateX, "deg)")
                },
                boxContainerStyle: function() {
                    return {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        "transform-style": "preserve-3d",
                        transition: "transform 0.5s",
                        transform: "".concat(this.curTiltTransform, " ").concat(this.curFaceTransform),
                        "will-change": "transform"
                    }
                },
                glareBoundingBox: function() {
                    var t = Math.max(this.height / 2, this.width / 2)
                      , e = this.perspective ? this.perspective / (this.perspective - t) : 1;
                    return {
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        position: "absolute",
                        overflow: "hidden",
                        "transform-style": "preserve-3d",
                        transform: "scale(".concat(1 / e, ", ").concat(1 / e, ") translateZ(").concat(t, "em"),
                        "pointer-events": "none"
                    }
                },
                hoverGlareStyle: function() {
                    return {
                        position: "absolute",
                        width: "".concat(2 * this.width, "vw"),
                        height: "".concat(2 * this.height, "vh"),
                        "background-image": "radial-gradient(circle at center, rgba(255,255,255, 0.7) 0%, rgba(255,255,255,0.1) 100%)",
                        transform: "translate(".concat(this.hoverX - this.width / 2, "vw, ").concat(this.hoverY - this.height / 2, "vh) translate(-").concat(this.width / 2, "vw, -").concat(this.height / 2, "vh)"),
                        opacity: this.isHover ? this.hoverGlareOpacity : 0,
                        "transform-style": "preserve-3d"
                    }
                },
                clickGlareStyle: function() {
                    var t = this.clickGlareSize * this.glareScale
                      , e = (t - this.clickGlareSize) / 2
                      , i = this.clickGlareTop - this.clickGlareSize / 2
                      , n = this.clickGlareLeft - this.clickGlareSize / 2;
                    return {
                        position: "absolute",
                        width: "".concat(this.clickGlareSize, "vw"),
                        height: "".concat(this.clickGlareSize, "vh"),
                        opacity: 0,
                        "border-radius": "50%",
                        "--glare-top": "".concat(i, "em"),
                        "--glare-left": "".concat(n, "em"),
                        "--glare-opacity": "".concat(this.clickGlareOpacity),
                        "--glare-scaled-size": "".concat(t, "em"),
                        "--glare-scaled-top": "".concat(i - e, "em"),
                        "--glare-scaled-left": "".concat(n - e, "em"),
                        "transform-style": "preserve-3d"
                    }
                },
                frontFaceStyle: function() {
                    return _({}, this.faceStyle, {}, this.frontStyle, {
                        position: "absolute",
                        width: "".concat(this.width, "vw"),
                        height: "".concat(this.height, "vh"),
                        transform: "translateZ(".concat(this.height / 2, "vh)"),
                        outline: "1px solid transparent"
                    })
                },
                backFaceStyle: function() {
                    return _({}, this.faceStyle, {}, this.backStyle, {
                        position: "absolute",
                        width: "".concat(this.width, "vw"),
                        height: "".concat(this.height, "vh"),
                        transform: "translateZ(-".concat(this.height / 2, "vh) rotateZ(180deg) rotateY(180deg)"),
                        outline: "1px solid transparent"
                    })
                },
                topFaceStyle: function() {
                    return _({}, this.faceStyle, {}, this.topStyle, {
                        position: "absolute",
                        width: "".concat(this.width, "vw"),
                        height: "".concat(this.height, "vh"),
                        transform: "translateY(-".concat(this.height / 2, "vh) rotateX(90deg)"),
                        outline: "1px solid transparent"
                    })
                },
                bottomFaceStyle: function() {
                    return _({}, this.faceStyle, {}, this.bottomStyle, {
                        position: "absolute",
                        width: "".concat(this.width, "vw"),
                        height: "".concat(this.height, "vh"),
                        transform: "translateY(".concat(this.height - this.height / 2, "vh) rotateX(-90deg)"),
                        outline: "1px solid transparent"
                    })
                },
                leftFaceStyle: function() {
                    return _({}, this.faceStyle, {}, this.leftStyle, {
                        position: "absolute",
                        width: "".concat(this.height, "vw"),
                        height: "".concat(this.height, "vh"),
                        transform: "translateX(-".concat(this.height / 2, "vh) rotateY(-90deg)"),
                        outline: "1px solid transparent"
                    })
                },
                rightFaceStyle: function() {
                    return _({}, this.faceStyle, {}, this.rightStyle, {
                        position: "absolute",
                        width: "".concat(this.height, "vw"),
                        height: "".concat(this.height, "vh"),
                        transform: "translateX(".concat(this.width - this.height / 2, "vh) rotateY(90deg)"),
                        outline: "1px solid transparent"
                    })
                }
            },
            methods: {
                getRelativePos2Scene: function(t, e) {
                    var i = this.$refs.scene.getBoundingClientRect();
                    return {
                        x: t - (i.left + window.scrollX),
                        y: e - (i.top + window.scrollY)
                    }
                },
                onMouseDown: function(t) {
                    var e = this.getRelativePos2Scene(t.pageX, t.pageY);
                    this.mouseDownX = t.pageX,
                    this.mouseDownY = t.pageY,
                    this.tiltTile(e),
                    this.clickGlare(e),
                    this.setMouseDown(!0)
                },
                onMouseUp: function(t) {
                    this.$emit("click", t),
                    this.recoverTile(),
                    this.setMouseDown(!1)
                },
                onMouseMove: function(t) {
                    var e = this.getRelativePos2Scene(t.pageX, t.pageY);
                    this.hoverGlare(e)
                },
                onMouseLeave: function() {
                    this.recoverTile(),
                    this.resetHover()
                },
                onTouchMove: function(t) {
                    this.$emit("touchmove", t)
                },
                tiltTile: function(t) {
                    var e = t.x / this.width
                      , i = t.y / this.height
                      , n = ((.5 - i) * this.maxTiltX).toFixed(2)
                      , o = ((e - .5) * this.maxTiltY).toFixed(2);
                    this.curTiltTransform = "rotateX(".concat(n, "deg) rotateY(").concat(o, "deg)")
                },
                recoverTile: function() {
                    this.curTiltTransform = ""
                },
                resetHover: function() {
                    this.isHover = !1
                },
                clickGlare: function(t) {
                    this.clickGlareTop = t.y,
                    this.clickGlareLeft = t.x,
                    this.isAnimating = !0
                },
                resetAnimation: function() {
                    this.isAnimating = !1
                },
                hoverGlare: function(t) {
                    this.isHover = !0,
                    this.hoverX = t.x,
                    this.hoverY = t.y
                },
                setMouseDown: function(t) {
                    this.isMouseDown = t
                }
            }
        }
          , O = z
          , S = (i("ccb7"),
        Object(f["a"])(O, y, k, !1, null, null, null))
          , C = S.exports
          , M = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("svg", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        width: "50",
                        height: "50"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M9.96 10.828c-2.616 1.629-4.112 3.942-4.112 3.942s.386-4.852 4.113-7.696C11.44 5.945 13.469 5 16.19 5c1.024 0 3.168.18 5.102 1.371 1.934 1.191 2.715 2.188 3.586 3.652.375.63.683 1.442.875 2.223.355 1.465.398 3.215.398 3.215v2.309H12.336s-.336 4.64 6.02 4.64c2.206 0 2.984-.348 3.71-.562 1.137-.336 2.235-1.086 2.235-1.086l.004 4.636S21.703 27 17.773 27c-1.105 0-2.27-.094-3.394-.457-.984-.32-3.04-1.18-4.418-3.195-.488-.711-1.016-1.66-1.277-2.586-.286-1.004-.282-1.977-.282-2.516 0-2.004.688-3.918 1.875-5.305 1.54-1.793 3.489-2.582 3.489-2.582s-.633.739-1.024 1.66c-.39.922-.5 1.848-.5 1.848h7.805s.457-4.664-4.414-4.664c-1.836 0-4.09.64-5.672 1.625z"
                    }
                })]))
            }
        }
          , E = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("svg", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 50 50",
                        width: "40",
                        height: "40"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M28.813.031l-28 5.313c-.473.09-.813.52-.813 1v37.312c0 .48.34.91.813 1l28 5.313c.062.011.125.031.187.031.23 0 .445-.07.625-.219.23-.191.375-.484.375-.781V1c0-.297-.145-.59-.375-.781-.23-.192-.52-.242-.813-.188zM32 5v10h6v2h-6v3h6v2h-6v3h6v2h-6v3h6v2h-6v3h6v2h-6v9h12c.555 0 1-.445 1-1V18h3c1.102 0 2-.898 2-2V7c0-1.102-.898-2-2-2zM6.531 15.688h4L17.031 27c.297.508.594 1 .844 1.5h.031c-.062-.434-.093-1.293-.093-2.563v-10.25h3.5V34.25h-3.75l-6.75-11.656A15.83 15.83 0 0110 21.03h-.063c.063.657.094 1.653.094 3V34.25h-3.5zM47 20v12h1c1.102 0 2-.898 2-2v-8c0-1.102-.898-2-2-2zm0 14v12h1c1.102 0 2-.898 2-2v-8c0-1.102-.898-2-2-2z"
                    }
                })]))
            }
        }
          , A = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("img", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        src: "https://ldstabler.github.io/computer/computer/sys/img/music163.png",
                        width: "55",
                        height: "55",
                        viewBox: "0 0 48 48"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        fill: "#FF8A65",
                        d: "M41 10H25v28h16a1 1 0 001-1V11a1 1 0 00-1-1z"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#FBE9E7"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M24 29h14v2H24zM24 33h14v2H24zM30 15a6 6 0 000 12 6 6 0 006-6h-6v-6z"
                    }
                }), i("path", {
                    attrs: {
                        d: "M32 13v6h6a6 6 0 00-6-6z"
                    }
                })]), i("path", {
                    attrs: {
                        fill: "#E64A19",
                        d: "M27 42L6 38V10l21-4z"
                    }
                }), i("path", {
                    attrs: {
                        fill: "#FFF",
                        d: "M16.828 17H12v14h3v-4.823h1.552c1.655 0 2.976-.436 3.965-1.304.988-.869 1.484-2.007 1.482-3.412C22 18.487 20.275 17 16.828 17zm-.534 6.785H15v-4.364h1.294c1.641 0 2.461.72 2.461 2.158 0 1.472-.82 2.206-2.461 2.206z"
                    }
                })]))
            }
        }
          , T = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("svg", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        width: "36",
                        height: "36"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M15 3v5h2V3zM7.5 6.094L6.094 7.5l3.531 3.563 1.438-1.438zm17 0l-3.563 3.531 1.438 1.438L25.906 7.5zM16 9c-3.855 0-7 3.145-7 7s3.145 7 7 7 7-3.145 7-7-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zM3 15v2h5v-2zm21 0v2h5v-2zM9.625 20.938L6.094 24.5 7.5 25.906l3.563-3.531zm12.75 0l-1.438 1.437 3.563 3.531 1.406-1.406zM15 24v5h2v-5z"
                    }
                })]))
            }
        }
          , V = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("svg", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 50 50",
                        width: "26",
                        height: "26"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M0 4v42h50V4zm2 2h46v38H2zm2 2v22.688L17.313 18.28c.195-.183.457-.308.718-.281.266.012.54.117.719.313l10.281 11.25 4.25-4.282c.39-.39 1.047-.39 1.438 0L46 36.594V8zm31 7a3 3 0 11-.002 6.002A3 3 0 0135 15zm-17.063 5.406L4 33.438V42h42v-2.594l-12-12L26.406 35h-2.812l4.031-4.031z"
                    }
                })]))
            }
        }
          , D = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("svg", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "48",
                        height: "48"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M41 10H25v28h16c.555 0 1-.445 1-1V11c0-.555-.445-1-1-1z",
                        fill: "#4caf50"
                    }
                }), i("path", {
                    attrs: {
                        d: "M32 15h7v3h-7zM32 25h7v3h-7zM32 30h7v3h-7zM32 20h7v3h-7zM25 15h5v3h-5zM25 25h5v3h-5zM25 30h5v3h-5zM25 20h5v3h-5z",
                        fill: "#fff"
                    }
                }), i("path", {
                    attrs: {
                        d: "M27 42L6 38V10l21-4z",
                        fill: "#2e7d32"
                    }
                }), i("path", {
                    attrs: {
                        d: "M19.129 31l-2.41-4.563c-.094-.167-.188-.48-.285-.937h-.036c-.046.215-.156.543-.324.98L13.652 31H9.895l4.46-7-4.082-7h3.836l2.004 4.195c.157.332.293.727.418 1.18h.04c.077-.27.226-.68.44-1.219L19.239 17h3.516l-4.2 6.938 4.313 7.058H19.13z",
                        fill: "#fff"
                    }
                })]))
            }
        }
          , P = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("svg", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "26",
                        height: "26"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M25.188 6.016h-5.391c-.813 0-.813-.813-.813-.813v-1.36a.812.812 0 00-.812-.812H7.812A.812.812 0 007 3.844v1.36s0 .812-.813.812H.813A.812.812 0 000 6.828v15.36c0 .449.363.812.813.812h24.375c.449 0 .812-.363.812-.813V6.829a.812.812 0 00-.813-.812zM23 10.258A1.26 1.26 0 0121.742 9 1.26 1.26 0 0123 7.742 1.26 1.26 0 0124.258 9 1.26 1.26 0 0123 10.258zM13 21.12A7.123 7.123 0 015.879 14 7.123 7.123 0 0113 6.879 7.123 7.123 0 0120.121 14 7.12 7.12 0 0113 21.121zm0-1.664a5.457 5.457 0 110-10.914 5.457 5.457 0 010 10.914z"
                    }
                })]))
            }
        }
          , R = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("svg", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 200 88"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M180.24 20.8a.8.8 0 00-.8-.8h-4a.8.8 0 00-.8.8v15c0 .24-.28.32-.36.08l-5.48-15.2a1 1 0 00-1-.72H163a.8.8 0 00-.8.8v26.43a.8.8 0 00.8.81h4a.8.8 0 00.8-.81V33.36c0-.24.28-.32.36-.08l5.44 14a1 1 0 001.08.68h4.72a.8.8 0 00.8-.81V20.8zM157.8 43.4a.8.8 0 00-.8-.8h-3.4a.38.38 0 01-.4-.4V25.8a.38.38 0 01.4-.4h3a.8.8 0 00.8-.8v-3.8a.8.8 0 00-.8-.8h-12.4a.8.8 0 00-.8.8v3.8a.8.8 0 00.8.8h3a.38.38 0 01.4.4v16.4a.38.38 0 01-.4.4h-3.4a.8.8 0 00-.8.8v3.79a.8.8 0 00.8.81H157a.8.8 0 00.8-.81V43.4zM122 26H6.5a.5.5 0 00-.5.5v55a.5.5 0 00.5.5h115a.5.5 0 00.5-.5V26zm78-23v62a3 3 0 01-3 3h-69v17a3 3 0 01-3 3H3a3 3 0 01-3-3V23a3 3 0 013-3h119V3a3 3 0 013-3h72a3 3 0 013 3zm-95.73 59.4H94.8a.38.38 0 01-.4-.4v-4.8a.38.38 0 01.4-.4h9a.8.8 0 00.8-.8v-4a.8.8 0 00-.8-.8h-9a.38.38 0 01-.4-.4V46a.38.38 0 01.4-.4h9.31a.8.8 0 00.8-.8v-4a.8.8 0 00-.8-.8H89.6a.8.8 0 00-.8.8v26.4a.81.81 0 00.8.8h14.67a.81.81 0 00.8-.8v-4a.8.8 0 00-.8-.8zM83.56 40h-4a.8.8 0 00-.8.8v15c0 .24-.28.32-.36.08l-5.48-15.2a1 1 0 00-1-.72h-4.76a.8.8 0 00-.8.8V67.2a.81.81 0 00.8.8h4a.81.81 0 00.8-.8V53.36c0-.24.28-.32.36-.08l5.44 14a1 1 0 001.08.68h4.72a.81.81 0 00.79-.8V40.8a.8.8 0 00-.79-.8zM61 40h-4a.8.8 0 00-.8.8v18.8c0 1.76-1.44 3.2-3.88 3.2s-3.8-1.44-3.8-3.2V40.8a.8.8 0 00-.8-.8h-4a.8.8 0 00-.8.8v18.8c0 4.84 4 8.83 9.44 8.83s9.52-4 9.52-8.83V40.8A.8.8 0 0061 40zm-22 .8v4a.8.8 0 01-.8.8h-5a.38.38 0 00-.4.4v21.2a.81.81 0 01-.8.8h-4a.81.81 0 01-.8-.8V46a.38.38 0 00-.4-.4h-5a.8.8 0 01-.8-.8v-4a.8.8 0 01.8-.8h16.4a.8.8 0 01.8.8z",
                        fill: "#14d8cc"
                    }
                })]))
            }
        }
          , H = {
            functional: !0,
            render(t, e) {
                const {_c: i, _v: n, data: o, children: s=[]} = e
                  , {class: a, staticClass: c, style: r, staticStyle: l, attrs: h={}, ...u} = o;
                return i("img", {
                    class: [a, c],
                    style: [r, l],
                    attrs: Object.assign({
                        version: "1.1",
                        id: "Layer_1",
                        src: "https://ldstabler.github.io/computer/computer/sys/img/bilibili.jpg",
                        x: "0",
                        y: "0",
                        viewBox: "0 0 380.9 85",
                        "xml:space": "preserve"
                    }, h),
                    ...u
                }, s.concat([i("path", {
                    attrs: {
                        d: "M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z",
                        fill: "red"
                    }
                }), i("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M48.6 60.7l31.6-18.2-31.6-18.2z"
                    }
                }), i("g", [i("path", {
                    staticClass: "st2",
                    attrs: {
                        d: "M176.3 77.4c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4 2.4 1.6 4.1 4.2 5.2 7.6 1.1 3.4 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.2-.1-7.6-.9-10-2.5zm13.5-8.4c.7-1.7 1-4.6 1-8.5V43.9c0-3.8-.3-6.6-1-8.4-.7-1.8-1.8-2.6-3.5-2.6-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.6 0 2.7-.8 3.4-2.6zM360.9 56.3V59c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11s-6.5 3.6-11.4 3.6c-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5 2.5-3.7 6.7-5.5 12.6-5.5 4.1 0 7.3.8 9.5 2.3 2.2 1.5 3.7 3.9 4.6 7 .9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1zm1.5-22.4c-.6.8-1 2-1.2 3.7-.2 1.7-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.4-.1-2.3.3-2.9 1.1zM147.1 55.3L133.5 6h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.3v23.6h-11.8V55.3zM241.6 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7h12zM303.1 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7h12z"
                    }
                }), i("path", {
                    staticClass: "st2",
                    attrs: {
                        d: "M274.2 15.7h-11.9v63.2h-11.7V15.7h-11.9V6h35.5v9.7zM342.8 34.2c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.3h-11.6v75.6h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c-.1-6.1-.4-10.8-1.1-14.1zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.1c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6v7z"
                    }
                })])]))
            }
        }
          , W = 3.5
          , B = 7
          , I = .375
          , F = {
            name: "app",
            components: {
                MetroTile: C,
                EdgeIcon: M,
                OneNoteIcon: E,
                PowerPointIcon: A,
                WeatherIcon: T,
                PhotoIcon: V,
                ExcelIcon: D,
                CameraIcon: P,
                TuneinIcon: R,
                YouTubeIcon: H
            },
            data: function() {
                return {
                    BASE_WIDTH: W,
                    BASE_HEIGHT: B,
                    rotateNews: 0,
                    rotateApps: 0,
                    weekDay: function() {
                        var t = {
                            0: "Sunday",
                            1: "Monday",
                            2: "Tuesday",
                            3: "Wednesday",
                            4: "Thursday",
                            5: "Friday",
                            6: "Saturday"
                        };
                        return t[(new Date).getDay()]
                    }(),
                    monthDay: function() {
                        return (new Date).getDate()
                    }(),
                    rotateIndex1: 0,
                    rotateArray1: [-90, 90, 90, -90],
                    rotateIndex2: 0,
                    rotateArray2: [-90, 90],
                    miniDrawer: !0
                }
            },
            methods: {
                getWidth: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return W * t - I * e
                },
                getHeight: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return B * t - I * e
                },
                setRotateX: function(t, e, i) {
                    this[t] += i[this[e] % i.length],
                    this[e] += 1
                },
                shutdown: function() {
                    var t = this;
                    this.$store.dispatch("shutdownAction"),
                    this.intervalShutdown = setInterval((function() {
                        t.$store.dispatch("shutdownEndAction")
                    }
                    ), 5e3)
                },
                shutdownEnd: function() {
                    this.$store.dispatch("shutdownEndAction")
                },
                toggleApp: function(t, e) {
                    this.$store.dispatch("toggleAppAction", {
                        id: t,
                        isOpen: e
                    })
                },
                clickApp: function() {
                    0 == this.rotateApps ? this.toggleApp(22, !0) : this.toggleApp(21, !0)
                },
                clickNews: function() {
                    0 == this.rotateNews ? this.toggleAppUrl(17, "https://news.sky.com/world", !0) : -90 == this.rotateNews ? this.toggleAppUrl(17, "https://www.foxnews.com/", !0) : this.toggleAppUrl(17, "https://www.thesun.co.uk/news/", !0)
                },
                toggleAppUrl: function(t, e, i) {
                    this.$store.dispatch("toggleAppUrlAction", {
                        id: t,
                        url: e,
                        isOpen: i
                    })
                },
                redirect: function() {
                    window.open("https://www.rferl.org", "_blank")
                },
                closeWindow: function() {
                    window.close()
                },
                say: function(t) {
                    alert(t)
                }
            },
            computed: {
                apps: function() {
                    return this.$store.getters.apps
                }
            },
            mounted: function() {
                var t = this;
                this.interval1 = setInterval((function() {
                    t.setRotateX("rotateNews", "rotateIndex1", t.rotateArray1)
                }
                ), 3e3),
                this.interval2 = setInterval((function() {
                    t.setRotateX("rotateApps", "rotateIndex2", t.rotateArray2)
                }
                ), 5e3)
            },
            beforeDestroy: function() {
                clearInterval(this.interval1),
                clearInterval(this.interval2),
                clearInterval(this.intervalShutdown)
            }
        }
          , L = F
          , U = (i("906a"),
        i("6544"))
          , N = i.n(U)
          , X = i("5bc1")
          , $ = i("62ad")
          , Y = i("a523")
          , G = i("132d")
          , q = i("a722")
          , Z = i("8860")
          , K = i("da13")
          , J = i("34c3")
          , Q = i("5d23")
          , tt = i("f774")
          , et = i("0fd9")
          , it = i("2fa4")
          , nt = Object(f["a"])(L, b, w, !1, null, null, null)
          , ot = nt.exports;
        N()(nt, {
            VAppBarNavIcon: X["a"],
            VCol: $["a"],
            VContainer: Y["a"],
            VIcon: G["a"],
            VLayout: q["a"],
            VList: Z["a"],
            VListItem: K["a"],
            VListItemIcon: J["a"],
            VListItemTitle: Q["c"],
            VNavigationDrawer: tt["a"],
            VRow: et["a"],
            VSpacer: it["a"]
        });
        var st = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                attrs: {
                    id: "calculator"
                }
            }, [i("div", {
                staticClass: "calculator-logs"
            }, t._l(t.logs, (function(e) {
                return i("span", {
                    key: e
                }, [t._v(t._s(e))])
            }
            )), 0), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.value,
                    expression: "value"
                }],
                staticClass: "calculator-input",
                attrs: {
                    type: "string"
                },
                domProps: {
                    value: t.value
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getResult()
                    },
                    input: function(e) {
                        e.target.composing || (t.value = e.target.value)
                    }
                }
            }), i("div", {
                staticClass: "calculator-row"
            }, [i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn gray action",
                on: {
                    click: function(e) {
                        return t.clear()
                    }
                }
            }, [t._v("C")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn gray action",
                on: {
                    click: function(e) {
                        return t.del()
                    }
                }
            }, [t._v("del")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn gray action",
                on: {
                    click: function(e) {
                        return t.addExpresion("%")
                    }
                }
            }, [t._v("%")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn clcaccent action",
                on: {
                    click: function(e) {
                        return t.addExpresion("/")
                    }
                }
            }, [t._v("/")])])]), i("div", {
                staticClass: "calculator-row"
            }, [i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(7)
                    }
                }
            }, [t._v("7")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(8)
                    }
                }
            }, [t._v("8")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(9)
                    }
                }
            }, [t._v("9")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn clcaccent action",
                on: {
                    click: function(e) {
                        return t.addExpresion("*")
                    }
                }
            }, [t._v("*")])])]), i("div", {
                staticClass: "calculator-row"
            }, [i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(4)
                    }
                }
            }, [t._v("4")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(5)
                    }
                }
            }, [t._v("5")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(6)
                    }
                }
            }, [t._v("6")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn clcaccent action",
                on: {
                    click: function(e) {
                        return t.addExpresion("-")
                    }
                }
            }, [t._v("-")])])]), i("div", {
                staticClass: "calculator-row"
            }, [i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(1)
                    }
                }
            }, [t._v("1")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(2)
                    }
                }
            }, [t._v("2")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(3)
                    }
                }
            }, [t._v("3")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn clcaccent action",
                on: {
                    click: function(e) {
                        return t.addExpresion("+")
                    }
                }
            }, [t._v("+")])])]), i("div", {
                staticClass: "calculator-row"
            }, [i("div", {
                staticClass: "calculator-col wide"
            }, [i("button", {
                staticClass: "calculator-btn",
                on: {
                    click: function(e) {
                        return t.addExpresion(0)
                    }
                }
            }, [t._v("0")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn action",
                on: {
                    click: function(e) {
                        return t.addExpresion(".")
                    }
                }
            }, [t._v(".")])]), i("div", {
                staticClass: "calculator-col"
            }, [i("button", {
                staticClass: "calculator-btn clcaccent action",
                on: {
                    click: function(e) {
                        return t.getResult()
                    }
                }
            }, [t._v("=")])])])])
        }
          , at = []
          , ct = i("99d0")
          , rt = ct["a"]
          , lt = (i("c519"),
        Object(f["a"])(rt, st, at, !1, null, "cdc390cc", null))
          , ht = lt.exports
          , ut = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-sheet", {
                attrs: {
                    height: "500"
                }
            }, [i("v-calendar", {
                ref: "calendar",
                attrs: {
                    type: t.type,
                    light: "",
                    now: t.getDate,
                    value: t.getDate
                },
                on: {
                    "click:more": t.viewDay,
                    "click:date": t.viewDay
                }
            })], 1)
        }
          , dt = []
          , pt = {
            data: function() {
                return {
                    time: Date.now(),
                    type: "month",
                    start: null,
                    end: null
                }
            },
            computed: {
                getDate: function() {
                    return d()(this.time).format("YYYY-MM-DD")
                },
                title: function() {
                    var t = this.start
                      , e = this.end;
                    if (!t || !e)
                        return "";
                    var i = this.monthFormatter(t)
                      , n = this.monthFormatter(e)
                      , o = i === n ? "" : n
                      , s = t.year
                      , a = e.year
                      , c = s === a ? "" : a
                      , r = t.day + this.nth(t.day)
                      , l = e.day + this.nth(e.day);
                    switch (this.type) {
                    case "month":
                        return "".concat(i, " ").concat(s);
                    case "week":
                    case "4day":
                        return "".concat(i, " ").concat(r, " ").concat(s, " - ").concat(o, " ").concat(l, " ").concat(c);
                    case "day":
                        return "".concat(i, " ").concat(r, " ").concat(s)
                    }
                    return ""
                },
                monthFormatter: function() {
                    return this.$refs.calendar.getFormatter({
                        timeZone: "UTC",
                        month: "long"
                    })
                }
            },
            mounted: function() {
                this.$refs.calendar.checkChange()
            },
            methods: {
                viewDay: function(t) {
                    var e = t.date;
                    "day" == this.type ? (this.focus = e,
                    this.type = "month") : (this.focus = e,
                    this.type = "day")
                },
                prev: function() {
                    this.$refs.calendar.prev()
                },
                next: function() {
                    this.$refs.calendar.next()
                },
                nth: function(t) {
                    return t > 3 && t < 21 ? "th" : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][t % 10]
                }
            }
        }
          , vt = pt
          , ft = i("a4f6")
          , gt = i("8dd9")
          , mt = Object(f["a"])(vt, ut, dt, !1, null, "67cbe464", null)
          , bt = mt.exports;
        N()(mt, {
            VCalendar: ft["a"],
            VSheet: gt["a"]
        });
        var wt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "fade"
                },
                on: {
                    "after-leave": function(e) {
                        return t.$emit("close")
                    },
                    "after-enter": function(e) {
                        return t.$emit("open")
                    }
                }
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isOpen,
                    expression: "isOpen"
                }],
                ref: "window",
                staticClass: "window",
                style: t.styleWindow,
                on: {
                    mousedown: t.activate,
                    touchstart: t.activate
                }
            }, [i("div", {
                ref: "titlebar",
                staticClass: "titlebar",
                style: t.styleTitlebar
            }, [i("div", {
                staticClass: "window_title"
            }, [t.icon ? i("v-icon", {
                staticClass: "window_icon",
                attrs: {
                    color: t.iconcolor
                }
            }, [t._v(t._s(t.icon))]) : t._e(), t.$slots.title ? [t._t("title")] : [t._v("\n                    " + t._s(t.title) + "\n                ")]], 2), t.minimizeButton ? [i("my-button", {
                staticClass: "bar-button",
                on: {
                    click: t.minimizeButtonClick
                }
            }, [t._v("⚊")])] : t._e(), t.maximizeButton ? [i("my-button", {
                staticClass: "bar-button",
                on: {
                    click: t.maximizeButtonClick
                }
            }, [t._v("☐")])] : t._e(), t.closeButton ? [i("my-button", {
                staticClass: "bar-button",
                on: {
                    click: t.closeButtonClick
                }
            }, [t._v("⛌")])] : t._e()], 2), i("div", {
                ref: "content",
                staticClass: "content",
                style: t.styleContent
            }, [t._t("default")], 2)])])
        }
          , yt = []
          , kt = i("768b")
          , xt = (i("28a5"),
        i("d225"))
          , jt = i("b0b4")
          , _t = i("308d")
          , zt = i("6bb5")
          , Ot = i("4e2b")
          , St = i("7618")
          , Ct = i("60a3");
        function Mt(t) {
            var e = t.style
              , i = e.width
              , n = e.height;
            t.style.width = "auto",
            t.style.height = "auto";
            var o = Et(t);
            return t.style.width = i,
            t.style.height = n,
            o
        }
        function Et(t) {
            var e = t.getBoundingClientRect()
              , i = e.width
              , n = e.height
              , o = e.top
              , s = e.left
              , a = s + i
              , c = o + n;
            return {
                width: i,
                height: n,
                top: o,
                left: s,
                bottom: c,
                right: a
            }
        }
        function At(t) {
            return window.TouchEvent && t instanceof TouchEvent
        }
        var Tt = function() {
            function t(e) {
                Object(xt["a"])(this, t),
                this.e = e
            }
            return Object(jt["a"])(t, [{
                key: "stopPropagation",
                value: function() {
                    this.e.stopPropagation()
                }
            }, {
                key: "preventDefault",
                value: function() {
                    this.e.preventDefault()
                }
            }, {
                key: "originalEvent",
                value: function(t) {
                    var e = t.mouse
                      , i = t.touch;
                    At(this.e) ? i && i(this.e) : e && e(this.e)
                }
            }, {
                key: "clientX",
                get: function() {
                    return At(this.e) ? ("touchend" === this.e.type ? this.e.changedTouches : this.e.touches).item(0).clientX : this.e.clientX
                }
            }, {
                key: "clientY",
                get: function() {
                    return At(this.e) ? ("touchend" === this.e.type ? this.e.changedTouches : this.e.touches).item(0).clientY : this.e.clientY
                }
            }, {
                key: "clientCoord",
                get: function() {
                    return new Vt(this.clientX,this.clientY)
                }
            }], [{
                key: "bindDown",
                value: function(e, i, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , s = function(e) {
                        i(new t(e))
                    }
                      , a = function(e) {
                        1 === e.touches.length && i(new t(e)),
                        e.touches.length > 1 && n && n(new t(e))
                    };
                    return e.addEventListener("mousedown", s, o),
                    e.addEventListener("touchstart", a, o),
                    function() {
                        e.removeEventListener("mousedown", s, o),
                        e.removeEventListener("touchstart", a, o)
                    }
                }
            }, {
                key: "bindMove",
                value: function(e, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , o = function(e) {
                        i(new t(e))
                    }
                      , s = function(e) {
                        1 === e.touches.length && i(new t(e))
                    };
                    return e.addEventListener("mousemove", o, n),
                    e.addEventListener("touchmove", s, n),
                    function() {
                        e.removeEventListener("mousemove", o, n),
                        e.removeEventListener("touchmove", s, n)
                    }
                }
            }, {
                key: "bindUp",
                value: function(e, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , o = function(e) {
                        i(new t(e))
                    }
                      , s = function(e) {
                        0 === e.touches.length && i(new t(e))
                    };
                    return e.addEventListener("mouseup", o, n),
                    e.addEventListener("touchend", s, n),
                    function() {
                        e.removeEventListener("mouseup", o, n),
                        e.removeEventListener("touchend", s, n)
                    }
                }
            }]),
            t
        }()
          , Vt = function() {
            function t(e, i) {
                Object(xt["a"])(this, t),
                this.x = e,
                this.y = i
            }
            return Object(jt["a"])(t, [{
                key: "clone",
                value: function() {
                    return new t(this.x,this.y)
                }
            }]),
            t
        }()
          , Dt = function() {
            function t(e, i) {
                var n = this
                  , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(xt["a"])(this, t),
                this.handle = e,
                this.container = i,
                this.options = o,
                this.mousedown = function(t) {
                    t.preventDefault(),
                    n.options.onMoveEnd && n.options.onMoveEnd(),
                    n.unbindUp && n.unbindUp(),
                    n.unbindMove && n.unbindMove(),
                    n.unbindUp = n.unbindMove = void 0;
                    var e = n.handle.getBoundingClientRect()
                      , i = e.left
                      , o = e.top;
                    n.offsetX = t.clientX - i,
                    n.offsetY = t.clientY - o,
                    n.options.onMoveStart && n.options.onMoveStart(),
                    n.unbindMove = Tt.bindMove(document, n.mousemove),
                    n.unbindUp = Tt.bindUp(document, n.mouseup)
                }
                ,
                this.mousemove = function(t) {
                    n.container.style.left = "".concat(t.clientX - n.offsetX, "px"),
                    n.container.style.top = "".concat(t.clientY - n.offsetY, "px"),
                    n.options.onMove && n.options.onMove()
                }
                ,
                this.mouseup = function(t) {
                    n.options.onMoveEnd && n.options.onMoveEnd(),
                    n.unbindUp(),
                    n.unbindMove(),
                    n.unbindUp = n.unbindMove = void 0
                }
                ,
                this.unbindDown = Tt.bindDown(e, this.mousedown),
                e.classList.add("draggable-handle")
            }
            return Object(jt["a"])(t, [{
                key: "teardown",
                value: function() {
                    this.handle.classList.remove("draggable-handle"),
                    this.unbindDown(),
                    this.unbindUp && this.unbindUp(),
                    this.unbindMove && this.unbindMove()
                }
            }]),
            t
        }()
          , Pt = function() {
            function t(e, i) {
                var n = this;
                Object(xt["a"])(this, t),
                this.container = e,
                this.options = i,
                this.handles = Rt.map((function(t) {
                    return new t(e,n)
                }
                ));
                var o = Mt(e)
                  , s = o.width
                  , a = o.height
                  , c = i.maxWidth || window.innerWidth
                  , r = i.maxHeight || window.innerHeight
                  , l = !1;
                (s < i.minWidth || s > c) && (e.style.width = "".concat(Wt(s, i.minWidth, c), "px"),
                l = !0),
                (a < i.minHeight || a > r) && (e.style.height = "".concat(Wt(a, i.minHeight, r), "px"),
                l = !0),
                l && i.onResize && i.onResize()
            }
            return Object(jt["a"])(t, [{
                key: "teardown",
                value: function() {
                    this.handles.forEach((function(t) {
                        return t.teardown()
                    }
                    ))
                }
            }]),
            t
        }()
          , Rt = []
          , Ht = function() {
            function t(e, i) {
                var n = this;
                Object(xt["a"])(this, t),
                this.container = e,
                this.helper = i,
                this.handleSize = 8,
                this.mousedown = function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    n.helper.options.onResizeEnd && n.helper.options.onResizeEnd(),
                    n.unbindUp && n.unbindUp(),
                    n.unbindMove && n.unbindMove(),
                    n.unbindUp = n.unbindMove = void 0;
                    var e = Et(n.container)
                      , i = e.left
                      , o = e.top
                      , s = e.width
                      , a = e.height;
                    n.x0 = t.clientX,
                    n.y0 = t.clientY,
                    n.left0 = i,
                    n.top0 = o,
                    n.width0 = s,
                    n.height0 = a,
                    n.calcSafeBoundaries(),
                    n.helper.options.onResizeStart && n.helper.options.onResizeStart(),
                    n.unbindMove = Tt.bindMove(document, n.mousemove),
                    n.unbindUp = Tt.bindUp(document, n.mouseup)
                }
                ,
                this.mousemove = function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    n.setPosition(t),
                    n.fixPosition(),
                    n.helper.options.onResize && n.helper.options.onResize()
                }
                ,
                this.mouseup = function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    n.helper.options.onResizeEnd && n.helper.options.onResizeEnd(),
                    n.unbindUp(),
                    n.unbindMove(),
                    n.unbindUp = n.unbindMove = void 0
                }
                ,
                this.handle = this.createHandleElement(),
                this.unbindDown = Tt.bindDown(this.handle, this.mousedown)
            }
            return Object(jt["a"])(t, [{
                key: "teardown",
                value: function() {
                    this.unbindDown(),
                    this.unbindUp && this.unbindUp(),
                    this.unbindMove && this.unbindMove(),
                    this.handle.parentElement.removeChild(this.handle)
                }
            }, {
                key: "calcSafeBoundaries",
                value: function() {
                    var t = Et(this.container)
                      , e = t.left
                      , i = t.top
                      , n = t.right
                      , o = t.bottom
                      , s = this.helper.options
                      , a = s.maxWidth || window.innerWidth
                      , c = s.maxHeight || window.innerHeight;
                    this.minLeft = Math.max(n - a, 0),
                    this.maxLeft = n - s.minWidth,
                    this.minRight = e + s.minWidth,
                    this.maxRight = Math.min(e + a, window.innerWidth),
                    this.minTop = Math.max(o - c, 0),
                    this.maxTop = o - s.minHeight,
                    this.minBottom = i + s.minHeight,
                    this.maxBottom = Math.min(i + c, window.innerHeight)
                }
            }, {
                key: "fixPosition",
                value: function() {
                    var t = Et(this.container)
                      , e = t.width
                      , i = t.height
                      , n = t.left
                      , o = t.top
                      , s = t.right
                      , a = t.bottom
                      , c = this.helper.options;
                    n < this.minLeft ? (this.container.style.width = "".concat(e + n - this.minLeft, "px"),
                    this.container.style.left = "".concat(this.minLeft, "px")) : n > this.maxLeft ? (this.container.style.width = "".concat(c.minWidth, "px"),
                    this.container.style.left = "".concat(this.maxLeft, "px")) : s < this.minRight ? this.container.style.width = "".concat(c.minWidth, "px") : s > this.maxRight && (this.container.style.width = "".concat(this.maxRight - n, "px")),
                    o < this.minTop ? (this.container.style.height = "".concat(i + o - this.minTop, "px"),
                    this.container.style.top = "".concat(this.minTop, "px")) : o > this.maxTop ? (this.container.style.height = "".concat(c.minHeight, "px"),
                    this.container.style.top = "".concat(this.maxTop, "px")) : a < this.minBottom ? this.container.style.height = "".concat(c.minHeight, "px") : a > this.maxBottom && (this.container.style.height = "".concat(this.maxBottom - o, "px"))
                }
            }, {
                key: "createHandleElement",
                value: function() {
                    var t = document.createElement("div")
                      , e = t.style;
                    return e.position = "absolute",
                    this.applyStyle(e),
                    this.container.appendChild(t),
                    t
                }
            }]),
            t
        }();
        function Wt(t, e, i) {
            return t < e ? e : t > i ? i : t
        }
        Rt.push(function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.width = "".concat(this.width0 + t.clientX - this.x0, "px"),
                    this.container.style.height = "".concat(this.height0 + t.clientY - this.y0, "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.width = "".concat(2 * this.handleSize, "px"),
                    t.height = "".concat(2 * this.handleSize, "px"),
                    t.right = "".concat(-this.handleSize, "px"),
                    t.bottom = "".concat(-this.handleSize, "px"),
                    t.cursor = "nwse-resize"
                }
            }]),
            e
        }(Ht), function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.height = "".concat(this.height0 + t.clientY - this.y0, "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.right = "".concat(this.handleSize, "px"),
                    t.left = "".concat(this.handleSize, "px"),
                    t.height = "".concat(2 * this.handleSize, "px"),
                    t.bottom = "".concat(-this.handleSize, "px"),
                    t.cursor = "ns-resize"
                }
            }]),
            e
        }(Ht), function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.left = "".concat(this.left0 + t.clientX - this.x0, "px"),
                    this.container.style.width = "".concat(this.width0 - (t.clientX - this.x0), "px"),
                    this.container.style.height = "".concat(this.height0 + t.clientY - this.y0, "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.left = "".concat(-this.handleSize, "px"),
                    t.bottom = "".concat(-this.handleSize, "px"),
                    t.width = "".concat(2 * this.handleSize, "px"),
                    t.height = "".concat(2 * this.handleSize, "px"),
                    t.cursor = "nesw-resize"
                }
            }]),
            e
        }(Ht), function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.left = "".concat(this.left0 + t.clientX - this.x0, "px"),
                    this.container.style.width = "".concat(this.width0 - (t.clientX - this.x0), "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.left = "".concat(-this.handleSize, "px"),
                    t.bottom = "".concat(this.handleSize, "px"),
                    t.width = "".concat(2 * this.handleSize, "px"),
                    t.top = "".concat(this.handleSize, "px"),
                    t.cursor = "ew-resize"
                }
            }]),
            e
        }(Ht), function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.left = "".concat(this.left0 + t.clientX - this.x0, "px"),
                    this.container.style.width = "".concat(this.width0 - (t.clientX - this.x0), "px"),
                    this.container.style.top = "".concat(this.top0 + t.clientY - this.y0, "px"),
                    this.container.style.height = "".concat(this.height0 - (t.clientY - this.y0), "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.left = "".concat(-this.handleSize, "px"),
                    t.top = "".concat(-this.handleSize, "px"),
                    t.width = "".concat(2 * this.handleSize, "px"),
                    t.height = "".concat(2 * this.handleSize, "px"),
                    t.cursor = "nwse-resize"
                }
            }]),
            e
        }(Ht), function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.top = "".concat(this.top0 + t.clientY - this.y0, "px"),
                    this.container.style.height = "".concat(this.height0 - (t.clientY - this.y0), "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.left = "".concat(this.handleSize, "px"),
                    t.right = "".concat(this.handleSize, "px"),
                    t.height = "".concat(2 * this.handleSize, "px"),
                    t.top = "".concat(-this.handleSize, "px"),
                    t.cursor = "ns-resize"
                }
            }]),
            e
        }(Ht), function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.top = "".concat(this.top0 + t.clientY - this.y0, "px"),
                    this.container.style.height = "".concat(this.height0 - (t.clientY - this.y0), "px"),
                    this.container.style.width = "".concat(this.width0 + t.clientX - this.x0, "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.right = "".concat(-this.handleSize, "px"),
                    t.top = "".concat(-this.handleSize, "px"),
                    t.height = "".concat(2 * this.handleSize, "px"),
                    t.width = "".concat(2 * this.handleSize, "px"),
                    t.cursor = "nesw-resize"
                }
            }]),
            e
        }(Ht), function(t) {
            function e() {
                return Object(xt["a"])(this, e),
                Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments))
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "setPosition",
                value: function(t) {
                    this.container.style.width = "".concat(this.width0 + t.clientX - this.x0, "px")
                }
            }, {
                key: "applyStyle",
                value: function(t) {
                    t.right = "".concat(-this.handleSize, "px"),
                    t.top = "".concat(this.handleSize, "px"),
                    t.bottom = "".concat(this.handleSize, "px"),
                    t.width = "".concat(2 * this.handleSize, "px"),
                    t.cursor = "ew-resize"
                }
            }]),
            e
        }(Ht));
        var Bt = "windowStyle";
        function It(t) {
            return {
                provide: function() {
                    return Object(x["a"])({}, Bt, t)
                },
                render: function(t) {
                    return t("div", this.$slots.default)
                }
            }
        }
        var Ft = It({
            window: {
                color: "#fff",
                boxShadow: "0 0 6pt rgba(255, 255, 255, 0.75)",
                backgroundColor: "rgba(31, 31, 31, 0.9)"
            },
            titlebar: {
                backgroundColor: "rgba(63, 63, 63, 0.9)"
            },
            content: {},
            button: {
                color: "white"
            },
            buttonHover: {
                backgroundColor: "rgba(255, 255, 255, 0.25)"
            },
            buttonActive: {
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.5)"
            }
        })
          , Lt = It({
            window: {
                color: "#000",
                boxShadow: "0 2pt 4pt rgba(0, 0, 0, 0.5)",
                backgroundColor: "rgba(239, 239, 239, 0.95)"
            },
            titlebar: {
                backgroundColor: "rgba(191, 191, 191, 0.9)"
            },
            content: {},
            button: {
                color: "#000"
            },
            buttonHover: {
                backgroundColor: "rgba(0, 0, 0, 0.25)"
            },
            buttonActive: {
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            }
        })
          , Ut = It({
            window: {
                color: "#000",
                boxShadow: "0 4pt 8pt rgba(0, 0, 0, 0.5)",
                background: "linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))"
            },
            titlebar: {
                background: "linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))"
            },
            content: {},
            button: {
                color: "#000"
            },
            buttonHover: {
                backgroundColor: "rgba(0, 0, 0, 0.25)"
            },
            buttonActive: {
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            }
        })
          , Nt = (i("5df3"),
        i("4f7f"),
        new Set)
          , Xt = (i("ac4d"),
        i("8a81"),
        i("55dd"),
        i("f400"),
        function() {
            function t(e, i) {
                var n = this;
                Object(xt["a"])(this, t),
                this._group = e,
                this.onChange = i,
                this.a((function(t) {
                    return t.push(n)
                }
                ))
            }
            return Object(jt["a"])(t, [{
                key: "unregister",
                value: function() {
                    var t = this;
                    this.a((function(e) {
                        return e.splice(e.indexOf(t), 1)
                    }
                    ))
                }
            }, {
                key: "raise",
                value: function() {
                    var t = this;
                    this.a((function(e) {
                        e.splice(e.indexOf(t), 1),
                        e.push(t)
                    }
                    ))
                }
            }, {
                key: "a",
                value: function(t) {
                    t(Gt(this._group)),
                    Zt()
                }
            }, {
                key: "group",
                set: function(t) {
                    this._group = t;
                    var e = Gt(this._group)
                      , i = Gt(t);
                    e.splice(e.indexOf(this), 1),
                    i.push(this),
                    Zt()
                },
                get: function() {
                    return this._group
                }
            }]),
            t
        }())
          , $t = new Map
          , Yt = 0;
        function Gt(t) {
            return $t.has(t) || $t.set(t, []),
            $t.get(t)
        }
        function qt(t, e) {
            return t > e ? -qt(e, t) : t < 0 && e >= 0 ? 1 : t - e
        }
        function Zt() {
            var t = Yt
              , e = !0
              , i = !1
              , n = void 0;
            try {
                for (var o, s = Kt($t).sort(qt)[Symbol.iterator](); !(e = (o = s.next()).done); e = !0) {
                    var a = o.value
                      , c = !0
                      , r = !1
                      , l = void 0;
                    try {
                        for (var h, u = Gt(a)[Symbol.iterator](); !(c = (h = u.next()).done); c = !0) {
                            var d = h.value;
                            t != d.zIndex && (d.zIndex = t,
                            d.onChange(t)),
                            t++
                        }
                    } catch (p) {
                        r = !0,
                        l = p
                    } finally {
                        try {
                            c || null == u.return || u.return()
                        } finally {
                            if (r)
                                throw l
                        }
                    }
                }
            } catch (p) {
                i = !0,
                n = p
            } finally {
                try {
                    e || null == s.return || s.return()
                } finally {
                    if (i)
                        throw n
                }
            }
        }
        function Kt(t) {
            var e = [];
            return t.forEach((function(t, i) {
                return e.push(i)
            }
            )),
            e
        }
        var Jt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "button",
                style: t.style,
                attrs: {
                    disabled: t.disabled
                },
                on: {
                    mouseenter: function(e) {
                        t.hover = !0
                    },
                    mouseleave: function(e) {
                        t.hover = !1
                    },
                    mousedown: function(e) {
                        return e.stopPropagation(),
                        t.mousedown(e)
                    },
                    touchstart: function(e) {
                        return e.stopPropagation(),
                        t.mousedown(e)
                    },
                    mouseup: t.mouseup,
                    touchend: t.mouseup
                }
            }, [t._t("default")], 2)
        }
          , Qt = []
          , te = function(t, e, i, n) {
            var o, s = arguments.length, a = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" === ("undefined" === typeof Reflect ? "undefined" : Object(St["a"])(Reflect)) && "function" === typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, n);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (o = t[c]) && (a = (s < 3 ? o(a) : s > 3 ? o(e, i, a) : o(e, i)) || a);
            return s > 3 && a && Object.defineProperty(e, i, a),
            a
        }
          , ee = function(t) {
            function e() {
                var t;
                return Object(xt["a"])(this, e),
                t = Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments)),
                t.hover = !1,
                t.active = !1,
                t
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "mousedown",
                value: function(t) {
                    var e = this;
                    t.preventDefault(),
                    this.active = !0;
                    var i = Tt.bindUp(document, (function() {
                        e.active = !1,
                        i()
                    }
                    ))
                }
            }, {
                key: "mouseup",
                value: function(t) {
                    this.active && this.$emit("click")
                }
            }, {
                key: "style",
                get: function() {
                    var t = this.windowStyle.button;
                    return this.hover && (t = Object.assign(Object.assign({}, t), this.windowStyle.buttonHover)),
                    this.active && (t = Object.assign(Object.assign({}, t), this.windowStyle.buttonActive)),
                    t
                }
            }]),
            e
        }(Ct["d"]);
        te([Object(Ct["b"])(Bt)], ee.prototype, "windowStyle", void 0),
        te([Object(Ct["c"])({
            type: Boolean,
            default: !1
        })], ee.prototype, "disabled", void 0),
        ee = te([Ct["a"]], ee);
        var ie = ee
          , ne = ie
          , oe = (i("4cf7"),
        Object(f["a"])(ne, Jt, Qt, !1, null, "565314e6", null))
          , se = oe.exports
          , ae = function(t, e, i, n) {
            var o, s = arguments.length, a = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" === ("undefined" === typeof Reflect ? "undefined" : Object(St["a"])(Reflect)) && "function" === typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, n);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (o = t[c]) && (a = (s < 3 ? o(a) : s > 3 ? o(e, i, a) : o(e, i)) || a);
            return s > 3 && a && Object.defineProperty(e, i, a),
            a
        }
          , ce = []
          , re = function(t) {
            function e() {
                var t;
                return Object(xt["a"])(this, e),
                t = Object(_t["a"])(this, Object(zt["a"])(e).apply(this, arguments)),
                t.zIndex = "auto",
                t.openCount = 0,
                t
            }
            return Object(Ot["a"])(e, t),
            Object(jt["a"])(e, [{
                key: "mounted",
                value: function() {
                    var t = this;
                    ce.push(this),
                    this.zElement = new Xt(this.zGroup,(function(e) {
                        return t.zIndex = "".concat(e)
                    }
                    )),
                    this.isOpen && this.onIsOpenChange(!0),
                    Nt.add(this)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    Nt.delete(this),
                    this.zElement.unregister(),
                    this.resizableHelper && this.resizableHelper.teardown(),
                    this.draggableHelper && this.draggableHelper.teardown(),
                    ce.splice(ce.indexOf(this), 1)
                }
            }, {
                key: "windowElement",
                value: function() {
                    return this.$refs.window
                }
            }, {
                key: "titlebarElement",
                value: function() {
                    return this.$refs.titlebar
                }
            }, {
                key: "contentElement",
                value: function() {
                    return this.$refs.content
                }
            }, {
                key: "activate",
                value: function() {
                    this.zElement.raise(),
                    this.$emit("activate")
                }
            }, {
                key: "onResizableChange",
                value: function(t) {
                    this.console.error("prop 'resizable' can't be changed")
                }
            }, {
                key: "onIsOpenChange",
                value: function(t) {
                    var e = this;
                    t && (this.$nextTick((function() {
                        0 == e.openCount++ && (e.setWindowRect(e),
                        e.setInitialPosition()),
                        e.isMaximized ? e.maximizeButtonClick() : (e.resizable && e.onWindowResize(),
                        e.onWindowMove(),
                        e.draggableHelper = new Dt(e.titlebarElement(),e.windowElement(),{
                            onMove: function() {
                                return e.onWindowMove()
                            },
                            onMoveStart: function() {
                                return e.$emit("move-start")
                            },
                            onMoveEnd: function() {
                                return e.$emit("move-end")
                            }
                        }),
                        e.resizable && e.initResizeHelper())
                    }
                    )),
                    this.activateWhenOpen && this.activate())
                }
            }, {
                key: "onZGroupChange",
                value: function() {
                    this.zElement.group = this.zGroup
                }
            }, {
                key: "fixPosition",
                value: function() {
                    var t = this.windowElement()
                      , e = t.getBoundingClientRect();
                    e.left < 0 && (t.style.left = "0px"),
                    e.top < 0 && (t.style.top = "0px"),
                    e.right > window.innerWidth && (t.style.left = "".concat(window.innerWidth - e.width, "px")),
                    e.bottom > window.innerHeight && (t.style.top = "".concat(window.innerHeight - e.height, "px"))
                }
            }, {
                key: "onLeftChange",
                value: function(t) {
                    this.setWindowRect({
                        left: t
                    }),
                    this.onWindowMove(!1)
                }
            }, {
                key: "onTopChange",
                value: function(t) {
                    this.setWindowRect({
                        top: t
                    }),
                    this.onWindowMove(!1)
                }
            }, {
                key: "onWidthChange",
                value: function(t) {
                    this.setWindowRect({
                        width: t
                    }),
                    this.onWindowResize(!1)
                }
            }, {
                key: "onHeightChange",
                value: function(t) {
                    this.setWindowRect({
                        height: t
                    }),
                    this.onWindowResize(!1)
                }
            }, {
                key: "setWindowRect",
                value: function(t) {
                    var e = t.width
                      , i = t.height
                      , n = t.top
                      , o = t.left
                      , s = this.windowElement();
                    if (void 0 != e && (s.style.width = "".concat(e, "px")),
                    void 0 != i) {
                        var a = he(this.titlebarElement()).height;
                        s.style.height = "".concat(i + a, "px")
                    }
                    void 0 != o && (s.style.left = "".concat(o, "px")),
                    void 0 != n && (s.style.top = "".concat(n, "px"))
                }
            }, {
                key: "initResizeHelper",
                value: function() {
                    var t = this
                      , e = Mt(this.titlebarElement())
                      , i = e.height;
                    this.resizableHelper = new Pt(this.windowElement(),{
                        onResize: function() {
                            return t.onWindowResize()
                        },
                        onResizeStart: function() {
                            return t.$emit("resize-start")
                        },
                        onResizeEnd: function() {
                            return t.$emit("resize-end")
                        },
                        minWidth: this.minWidth,
                        minHeight: this.minHeight + i,
                        maxWidth: this.maxWidth,
                        maxHeight: this.maxHeight ? this.maxHeight + i : void 0
                    })
                }
            }, {
                key: "onWindowResize",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , e = this.windowElement()
                      , i = this.titlebarElement()
                      , n = this.contentElement()
                      , o = he(n)
                      , s = o.width
                      , a = o.height
                      , c = he(e)
                      , r = c.width
                      , l = c.height
                      , h = he(i).height
                      , u = r - (n.offsetWidth - s)
                      , d = l - h - (n.offsetHeight - a);
                    n.style.width = "".concat(u, "px"),
                    n.style.height = "".concat(d, "px"),
                    ve(),
                    this.$emit("resize", new ue(u,d)),
                    t && (this.$emit("update:width", u),
                    this.$emit("update:height", d))
                }
            }, {
                key: "onWindowMove",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.fixPosition();
                    var e = this.windowElement().getBoundingClientRect()
                      , i = e.left
                      , n = e.top;
                    t && (this.$emit("update:left", i),
                    this.$emit("update:top", n))
                }
            }, {
                key: "setInitialPosition",
                value: function() {
                    var t, e, i = this, n = this.windowElement(), o = Et(n), s = o.width, a = o.height;
                    if (void 0 !== this.left != (void 0 !== this.top))
                        throw new Error("Either of left or top is specified. Both must be set or not set.");
                    if ("number" == typeof this.left)
                        t = this.left,
                        e = this.top;
                    else {
                        var c = this.isMaximized ? "maximized" : this.positionHint || "auto";
                        switch (c) {
                        case "auto":
                            (function() {
                                var n = 20
                                  , o = 50
                                  , s = 0;
                                do {
                                    if (ce.every((function(t) {
                                        if (!t.isOpen || i == t)
                                            return !0;
                                        var e = de(t);
                                        if (null == e)
                                            return !0;
                                        var s = e.left
                                          , a = e.top;
                                        return pe(s, a, n, o) > 16
                                    }
                                    )))
                                        break;
                                    n = (n + 40) % (window.innerWidth - 200),
                                    o = (o + 40) % (window.innerHeight - 200)
                                } while (++s < 100);t = n,
                                e = o
                            }
                            )();
                            break;
                        case "center":
                            t = (window.innerWidth - s) / 2,
                            e = (window.innerHeight - a) / 2 - 48;
                            break;
                        case "maximized":
                            t = 0,
                            e = 0;
                            break;
                        default:
                            try {
                                var r = c.split("/").map(Number);
                                if (2 != r.length)
                                    throw null;
                                var l = Object(kt["a"])(r, 2)
                                  , h = l[0]
                                  , u = l[1];
                                if (!isFinite(h) || !isFinite(u))
                                    throw null;
                                t = h >= 0 ? h : window.innerWidth - s + h,
                                e = u >= 0 ? u : window.innerHeight - a + u
                            } catch (d) {
                                throw new Error("invalid position string: ".concat(c))
                            }
                        }
                    }
                    n.style.left = "".concat(t, "px"),
                    n.style.top = "".concat(e, "px")
                }
            }, {
                key: "minimizeButtonClick",
                value: function() {
                    this.$emit("minimizebuttonclick")
                }
            }, {
                key: "maximizeButtonClick",
                value: function() {
                    var t = this.windowElement();
                    t.style.left = "0px",
                    t.style.top = "0px",
                    t.style.width = "calc(100vw - (100vw - 100%))",
                    t.style.height = "calc(100vh - 48px)",
                    this.$emit("update:isMaximized", !0),
                    this.onWindowResize(),
                    this.$emit("maximizebuttonclick")
                }
            }, {
                key: "closeButtonClick",
                value: function() {
                    this.$emit("closebuttonclick")
                }
            }, {
                key: "styleWindow",
                get: function() {
                    return Object.assign(Object.assign({}, this.windowStyle.window), {
                        zIndex: this.zIndex,
                        overflow: this.overflow
                    })
                }
            }, {
                key: "styleTitlebar",
                get: function() {
                    return this.windowStyle.titlebar
                }
            }, {
                key: "styleContent",
                get: function() {
                    var t = Object.assign({}, this.windowStyle.content);
                    return this.resizable ? t.padding = "0" : void 0 != this.padding && (t.padding = "".concat(this.padding, "px")),
                    this.isScrollable && (t.overflow = "auto"),
                    t
                }
            }]),
            e
        }(Ct["d"]);
        function le(t) {
            return null !== t ? parseFloat(t) : 0
        }
        function he(t) {
            var e = window.getComputedStyle(t)
              , i = Math.ceil([e.paddingLeft, e.width, e.paddingRight].map(le).reduce((function(t, e) {
                return t + e
            }
            )))
              , n = Math.ceil([e.paddingTop, e.height, e.paddingBottom].map(le).reduce((function(t, e) {
                return t + e
            }
            )));
            return {
                width: i,
                height: n
            }
        }
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !0
        })], re.prototype, "isOpen"),
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !1
        })], re.prototype, "isMaximized"),
        ae([Object(Ct["c"])({
            type: String,
            default: ""
        })], re.prototype, "icon"),
        ae([Object(Ct["c"])({
            type: String,
            default: ""
        })], re.prototype, "iconcolor"),
        ae([Object(Ct["c"])({
            type: String,
            default: ""
        })], re.prototype, "title"),
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !1
        })], re.prototype, "minimizeButton"),
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !1
        })], re.prototype, "maximizeButton"),
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !1
        })], re.prototype, "closeButton"),
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !1
        })], re.prototype, "resizable"),
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !1
        })], re.prototype, "isScrollable"),
        ae([Object(Ct["c"])({
            type: Number,
            default: 8
        })], re.prototype, "padding"),
        ae([Object(Ct["c"])({
            type: Boolean,
            default: !0
        })], re.prototype, "activateWhenOpen"),
        ae([Object(Ct["c"])({
            type: String
        })], re.prototype, "positionHint"),
        ae([Object(Ct["c"])({
            type: Number,
            default: 0
        })], re.prototype, "zGroup"),
        ae([Object(Ct["c"])({
            default: "visible"
        })], re.prototype, "overflow"),
        ae([Object(Ct["b"])(Bt)], re.prototype, "windowStyle"),
        ae([Object(Ct["e"])("resizable")], re.prototype, "onResizableChange"),
        ae([Object(Ct["e"])("isOpen")], re.prototype, "onIsOpenChange"),
        ae([Object(Ct["e"])("zGroup")], re.prototype, "onZGroupChange"),
        ae([Object(Ct["c"])({
            type: Number
        })], re.prototype, "left"),
        ae([Object(Ct["e"])("left")], re.prototype, "onLeftChange"),
        ae([Object(Ct["c"])({
            type: Number
        })], re.prototype, "top"),
        ae([Object(Ct["e"])("top")], re.prototype, "onTopChange"),
        ae([Object(Ct["c"])({
            type: Number
        })], re.prototype, "width"),
        ae([Object(Ct["e"])("width")], re.prototype, "onWidthChange"),
        ae([Object(Ct["c"])({
            type: Number
        })], re.prototype, "height"),
        ae([Object(Ct["e"])("height")], re.prototype, "onHeightChange"),
        ae([Object(Ct["c"])({
            type: Number,
            default: 1
        })], re.prototype, "minWidth"),
        ae([Object(Ct["c"])({
            type: Number,
            default: 0
        })], re.prototype, "minHeight"),
        ae([Object(Ct["c"])({
            type: Number
        })], re.prototype, "maxWidth"),
        ae([Object(Ct["c"])({
            type: Number
        })], re.prototype, "maxHeight"),
        re = ae([Object(Ct["a"])({
            components: {
                MyButton: se
            }
        })], re);
        var ue = function t(e, i) {
            Object(xt["a"])(this, t),
            this.width = e,
            this.height = i
        };
        function de(t) {
            var e = t.windowElement()
              , i = parseFloat(e.style.left || "NaN")
              , n = parseFloat(e.style.top || "NaN");
            return isNaN(i) || isNaN(n) ? null : {
                left: i,
                top: n
            }
        }
        function pe(t, e, i, n) {
            var o = t - i
              , s = e - n;
            return o * o + s * s
        }
        function ve() {
            Nt.forEach((function(t) {
                t.fixPosition()
            }
            ))
        }
        window.addEventListener("resize", (function(t) {
            return ve()
        }
        ));
        var fe = re
          , ge = fe
          , me = (i("46ac"),
        Object(f["a"])(ge, wt, yt, !1, null, "4ab7a64e", null))
          , be = me.exports;
        function we(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                prefix: "silveos-window"
            }
              , i = e.prefix;
            t.component("".concat(i), be),
            t.component("".concat(i, "-style-black"), Ft),
            t.component("".concat(i, "-style-white"), Lt),
            t.component("".concat(i, "-style-metal"), Ut)
        }
        N()(me, {
            VIcon: G["a"]
        });
        var ye = be;
        o["a"].use(n);
        var ke = {
            name: "App",
            components: {
                DateTime: m,
                StartMenu: ot,
                Calculator: ht,
                Calendar: bt,
                ExcelIcon: D
            },
            data: function() {
                return {
                    drawer: !1,
                    search: null,
                    backgroundUrl: r.a,
                    showSearch: !1,
                    showInternetBrowser: !1,
                    taskbarItemOrder: 1
                }
            },
            created: function() {
                this.$vuetify.theme.themes.dark.primary = "#1F1F1F",
                this.$vuetify.theme.dark = !0,
                window.innerWidth <= 721 && this.apps.forEach((function(t) {
                    return t.isMaximized = !0
                }
                ))
            },
            methods: {
                updateIsOpenWindow: function(t) {
                    this.$emit("update:isOpen", !1)
                },
                toggleAppState: function(t) {
                    this.$store.dispatch("toggleAppStateAction", t)
                },
                toggleApp: function(t, e) {
                    this.$store.dispatch("toggleAppAction", {
                        id: t,
                        isOpen: e
                    })
                },
                toggleAppUrl: function(t, e, i) {
                    this.$store.dispatch("toggleAppUrlAction", {
                        id: t,
                        url: e,
                        isOpen: i
                    })
                },
                closeApp: function(t) {
                    this.$store.dispatch("closeAppAction", t)
                },
                searchInternet: function(t) {
                    13 === t.keyCode && this.toggleAppUrl(2, "https://www.bing.com/search?q=" + this.search, !0)
                },
                openAdsterraDirect: function() {
                    window.open("https://www.passeura.com/c55cjgm3u?key=fd5c8ef8270209f0dffbb7c5c8355385", "_blank")
                },
                openPropellerAdsDirect: function() {
                    window.open("http://serconmp.com/afu.php?zoneid=2964282", "_blank")
                },
                selectElementText: function(t) {
                    var e = document.createRange();
                    e.selectNodeContents(t);
                    var i = window.getSelection();
                    i.removeAllRanges(),
                    i.addRange(e)
                },
                copyBtcAddress: function() {
                    var t = this.$el.querySelector("#btcAddress");
                    this.selectElementText(t);
                    try {
                        document.execCommand("copy")
                    } catch (e) {}
                }
            },
            computed: {
                apps: function() {
                    return this.$store.getters.apps
                },
                isShutdown: function() {
                    return this.$store.getters.isShutdown
                },
                shutdownOpacity: function() {
                    return this.$store.getters.shutdownOpacity
                },
                isWindowSmall: function() {
                    return window.innerWidth <= 721
                }
            }
        }
          , xe = ke
          , je = (i("034f"),
        i("7496"))
          , _e = i("40dc")
          , ze = i("8336")
          , Oe = i("b0af")
          , Se = i("99d9")
          , Ce = i("a75b")
          , Me = i("1baa")
          , Ee = i("e449")
          , Ae = i("a797")
          , Te = i("490a")
          , Ve = i("e0c7")
          , De = i("8654")
          , Pe = i("3a2f")
          , Re = Object(f["a"])(xe, s, a, !1, null, null, null)
          , He = Re.exports;
        N()(Re, {
            VApp: je["a"],
            VAppBar: _e["a"],
            VBtn: ze["a"],
            VCard: Oe["a"],
            VCardActions: Se["a"],
            VContainer: Y["a"],
            VContent: Ce["a"],
            VIcon: G["a"],
            VLayout: q["a"],
            VList: Z["a"],
            VListItem: K["a"],
            VListItemContent: Q["a"],
            VListItemGroup: Me["a"],
            VListItemIcon: J["a"],
            VListItemSubtitle: Q["b"],
            VListItemTitle: Q["c"],
            VMenu: Ee["a"],
            VNavigationDrawer: tt["a"],
            VOverlay: Ae["a"],
            VProgressCircular: Te["a"],
            VSpacer: it["a"],
            VSubheader: Ve["a"],
            VTextField: De["a"],
            VTooltip: Pe["a"]
        });
        var We = i("f309");
        o["a"].use(We["a"]);
        var Be = new We["a"]({
            theme: {
                themes: {
                    dark: {
                        primary: "#1F1F1F"
                    }
                }
            }
        })
          , Ie = i("2f62");
        o["a"].use(Ie["a"]);
        var Fe = new Ie["a"].Store({
            state: {
                isShutdown: !1,
                shutdownOpacity: .7,
                apps: [{
                    id: 1,
                    title: "Microsoft Edge",
                    icon: "mdi-microsoft-edge",
                    iconcolor: "#0D87DD",
                    url: "https://www.bing.com/",
                    isExternalUrl: !0,
                    isTaskbarVisible: !0,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 2,
                    title: "Search",
                    icon: "mdi-magnify",
                    iconcolor: "#FBBD00",
                    url: "https://www.bing.com/search?",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 3,
                    title: "Memo Notepad",
                    icon: "mdi-note-outline",
                    iconcolor: "#66B2C2",
                    url: ".apps/Memo_Notepad_fix.html",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 4,
                    title: "Email",
                    icon: "mdi-email",
                    iconcolor: "#FFFFFF",
                    url: "https://outlook.live.com/mail/0/inbox",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 5,
                    title: "SVG Editor",
                    icon: "mdi-image-edit",
                    iconcolor: "#17B134",
                    url: ".apps/SVGEditor.html",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 900,
                    height: 550
                }, {
                    id: 6,
                    title: "Bing Images",
                    icon: "mdi-image-search",
                    iconcolor: "#E0995E",
                    url: "https://www.bing.com/images/discover?FORM=ILSTFI",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 7,
                    title: "Map",
                    icon: "mdi-map-marker-outline",
                    iconcolor: "#D0E2B0",
                    url: "https://www.bing.com/maps/embed?h=400&w=500&cp=50.407588423945285~30.5332896313632&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !1,
                    isMaximized: !1,
                    width: 520,
                    height: 460
                }, {
                    id: 8,
                    title: "Skype",
                    icon: "mdi-skype-business",
                    iconcolor: "#00ADEF",
                    url: "https://web.skype.com",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 9,
                    title: "Discord",
                    icon: "mdi-file-powerpoint-box-outline",
                    iconcolor: "#EF6C00",
                    url: "http://music.163.com/",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 10,
                    title: "SSuite Spreadsheets",
                    icon: "mdi-microsoft-excel",
                    iconcolor: "#639E66",
                    url: "https://spreadsheet.ssuiteoffice.com/",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 1020,
                    height: 500
                }, {
                    id: 11,
                    title: "SSuite Documents",
                    icon: "mdi-microsoft-word",
                    iconcolor: "#1565C0",
                    url: "https://text.ssuiteoffice.com",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 1020,
                    height: 500
                }, {
                    id: 12,
                    title: "Drawing",
                    icon: "mdi-drawing-box",
                    iconcolor: "#DE5347",
                    url: "https://sketch.io",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 13,
                    title: "Photo Search",
                    icon: "mdi-camera-burst",
                    iconcolor: "#FF1A03",
                    url: "https://www.shutterstock.com/search?image_type=photo",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 14,
                    title: "Weather",
                    icon: "mdi-weather-cloudy",
                    iconcolor: "#DEBD25",
                    url: "https://weather.com/weather/today/",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 15,
                    title: "Calendar",
                    icon: "mdi-calendar-range",
                    iconcolor: "#F34D56",
                    url: "Calendar",
                    isExternalUrl: !1,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 500,
                    height: 500
                }, {
                    id: 16,
                    title: "Addicting Games",
                    icon: "mdi-gamepad-variant-outline",
                    iconcolor: "#DD0131",
                    url: "addictinggames.com",
                    isExternalUrl: !1,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 17,
                    title: "News",
                    icon: "mdi-newspaper-variant-outline",
                    iconcolor: "#FDF1C1",
                    url: "https://news.sky.com/world",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 18,
                    title: "Calculator",
                    icon: "mdi-calculator",
                    iconcolor: "#F49E3F",
                    url: "Calculator",
                    isExternalUrl: !1,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !1,
                    isMaximized: !1,
                    width: 340,
                    height: 540
                }, {
                    id: 19,
                    title: "TuneIn",
                    icon: "mdi-radio-tower",
                    iconcolor: "#2CB6A8",
                    url: "https://tunein.com/",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 20,
                    title: "Powershell",
                    icon: "mdi-powershell",
                    iconcolor: "#FF0000",
                    url: "https://cocalc.com/projects/f8e5158d-2e89-40f5-a578-35c044a564c8/files/Welcome%20to%20CoCalc.term?session=default",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }, {
                    id: 21,
                    title: "Photopea",
                    icon: "mdi-image-edit",
                    iconcolor: "#18A497",
                    url: "https://photopea.com/",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 1e3,
                    height: 500
                }, {
                    id: 22,
                    title: "PDFZorro",
                    icon: "mdi-file-pdf-outline",
                    iconcolor: "#9D1B35",
                    url: "https://www.pdfzorro.com/",
                    isExternalUrl: !0,
                    isTaskbarVisible: !1,
                    isOpen: !1,
                    isResizible: !0,
                    isMaximized: !1,
                    width: 800,
                    height: 500
                }]
            },
            mutations: {
                shutdown: function(t) {
                    t.isShutdown = !0
                },
                shutdownEnd: function(t) {
                    t.shutdownOpacity = 1
                },
                toggleAppState: function(t, e) {
                    e--,
                    t.apps[e].isOpen = !t.apps[e].isOpen
                },
                closeApp: function(t, e) {
                    e--,
                    t.apps[e].isOpen = !1,
                    t.apps[e].isTaskbarVisible = !1
                },
                toggleApp: function(t, e) {
                    var i = e.id
                      , n = e.isOpen;
                    i--,
                    t.apps[i].isOpen = n,
                    t.apps[i].isTaskbarVisible = n
                },
                toggleAppUrl: function(t, e) {
                    var i = e.id
                      , n = e.url
                      , o = e.isOpen;
                    i--,
                    t.apps[i].url = n,
                    t.apps[i].isOpen = o,
                    t.apps[i].isTaskbarVisible = o
                }
            },
            actions: {
                shutdownAction: function(t) {
                    var e = t.commit;
                    e("shutdown")
                },
                shutdownEndAction: function(t) {
                    var e = t.commit;
                    e("shutdownEnd")
                },
                toggleAppStateAction: function(t, e) {
                    var i = t.commit;
                    i("toggleAppState", e)
                },
                toggleAppAction: function(t, e) {
                    var i = t.commit
                      , n = e.id
                      , o = e.isOpen;
                    i("toggleApp", {
                        id: n,
                        isOpen: o
                    })
                },
                toggleAppUrlAction: function(t, e) {
                    var i = t.commit
                      , n = e.id
                      , o = e.url
                      , s = e.isOpen;
                    i("toggleAppUrl", {
                        id: n,
                        url: o,
                        isOpen: s
                    })
                },
                closeAppAction: function(t, e) {
                    var i = t.commit;
                    i("closeApp", e)
                }
            },
            getters: {
                apps: function(t) {
                    return t.apps
                },
                isShutdown: function(t) {
                    return t.isShutdown
                },
                shutdownOpacity: function(t) {
                    return t.shutdownOpacity
                }
            }
        });
        o["a"].config.productionTip = !1,
        o["a"].use(Ie["a"]),
        new o["a"]({
            vuetify: Be,
            render: function(t) {
                return t(He)
            },
            store: Fe
        }).$mount("#app")
    },
    "906a": function(t, e, i) {
        "use strict";
        var n = i("c171")
          , o = i.n(n);
        o.a
    },
    "99d0": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c5f6")
          , core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__)
          , core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7cdf")
          , core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_1__);
        __webpack_exports__["a"] = {
            data: function() {
                return {
                    value: 0,
                    logs: []
                }
            },
            methods: {
                addExpresion: function(t) {
                    Number.isInteger(this.value) && (this.value = ""),
                    this.value += t
                },
                getResult: function getResult() {
                    var log = this.value;
                    this.value = eval(this.value),
                    this.logs.push(log + "=" + this.value)
                },
                clear: function() {
                    this.value = 0
                },
                del: function() {
                    this.value = this.value.slice(0, -1)
                }
            }
        }
    },
    c171: function(t, e, i) {},
    c519: function(t, e, i) {
        "use strict";
        var n = i("09f8")
          , o = i.n(n);
        o.a
    },
    c575: function(t, e, i) {
        t.exports = i.p + "https://ldstabler.github.io/resources/wallpaper.jpg"
    },
    ccb7: function(t, e, i) {
        "use strict";
        var n = i("497e")
          , o = i.n(n);
        o.a
    }
});
//# sourceMappingURL=app.a564ab14.js.map
