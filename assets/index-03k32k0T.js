var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      function C2(r, e) {
        for (var t = 0; t < e.length; t++) {
          const n = e[t];
          if (typeof n != "string" && !Array.isArray(n)) {
            for (const i in n) if (i !== "default" && !(i in r)) {
              const o = Object.getOwnPropertyDescriptor(n, i);
              o && Object.defineProperty(r, i, o.get ? o : {
                enumerable: true,
                get: () => n[i]
              });
            }
          }
        }
        return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
          value: "Module"
        }));
      }
      (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
        new MutationObserver((i) => {
          for (const o of i) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function t(i) {
          const o = {};
          return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function n(i) {
          if (i.ep) return;
          i.ep = true;
          const o = t(i);
          fetch(i.href, o);
        }
      })();
      function k2(r) {
        return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
      }
      var am = {
        exports: {}
      }, Cu = {}, lm = {
        exports: {}
      }, he = {};
      var wl = Symbol.for("react.element"), R2 = Symbol.for("react.portal"), E2 = Symbol.for("react.fragment"), P2 = Symbol.for("react.strict_mode"), T2 = Symbol.for("react.profiler"), A2 = Symbol.for("react.provider"), j2 = Symbol.for("react.context"), M2 = Symbol.for("react.forward_ref"), I2 = Symbol.for("react.suspense"), z2 = Symbol.for("react.memo"), N2 = Symbol.for("react.lazy"), s_ = Symbol.iterator;
      function L2(r) {
        return r === null || typeof r != "object" ? null : (r = s_ && r[s_] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      var cm = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
      }, um = Object.assign, dm = {};
      function Bs(r, e, t) {
        this.props = r, this.context = e, this.refs = dm, this.updater = t || cm;
      }
      Bs.prototype.isReactComponent = {};
      Bs.prototype.setState = function(r, e) {
        if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, e, "setState");
      };
      Bs.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      function fm() {
      }
      fm.prototype = Bs.prototype;
      function Mh(r, e, t) {
        this.props = r, this.context = e, this.refs = dm, this.updater = t || cm;
      }
      var Ih = Mh.prototype = new fm();
      Ih.constructor = Mh;
      um(Ih, Bs.prototype);
      Ih.isPureReactComponent = true;
      var a_ = Array.isArray, hm = Object.prototype.hasOwnProperty, zh = {
        current: null
      }, pm = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function _m(r, e, t) {
        var n, i = {}, o = null, s = null;
        if (e != null) for (n in e.ref !== void 0 && (s = e.ref), e.key !== void 0 && (o = "" + e.key), e) hm.call(e, n) && !pm.hasOwnProperty(n) && (i[n] = e[n]);
        var a = arguments.length - 2;
        if (a === 1) i.children = t;
        else if (1 < a) {
          for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
          i.children = l;
        }
        if (r && r.defaultProps) for (n in a = r.defaultProps, a) i[n] === void 0 && (i[n] = a[n]);
        return {
          $$typeof: wl,
          type: r,
          key: o,
          ref: s,
          props: i,
          _owner: zh.current
        };
      }
      function O2(r, e) {
        return {
          $$typeof: wl,
          type: r.type,
          key: e,
          ref: r.ref,
          props: r.props,
          _owner: r._owner
        };
      }
      function Nh(r) {
        return typeof r == "object" && r !== null && r.$$typeof === wl;
      }
      function D2(r) {
        var e = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + r.replace(/[=:]/g, function(t) {
          return e[t];
        });
      }
      var l_ = /\/+/g;
      function nd(r, e) {
        return typeof r == "object" && r !== null && r.key != null ? D2("" + r.key) : e.toString(36);
      }
      function cc(r, e, t, n, i) {
        var o = typeof r;
        (o === "undefined" || o === "boolean") && (r = null);
        var s = false;
        if (r === null) s = true;
        else switch (o) {
          case "string":
          case "number":
            s = true;
            break;
          case "object":
            switch (r.$$typeof) {
              case wl:
              case R2:
                s = true;
            }
        }
        if (s) return s = r, i = i(s), r = n === "" ? "." + nd(s, 0) : n, a_(i) ? (t = "", r != null && (t = r.replace(l_, "$&/") + "/"), cc(i, e, t, "", function(c) {
          return c;
        })) : i != null && (Nh(i) && (i = O2(i, t + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(l_, "$&/") + "/") + r)), e.push(i)), 1;
        if (s = 0, n = n === "" ? "." : n + ":", a_(r)) for (var a = 0; a < r.length; a++) {
          o = r[a];
          var l = n + nd(o, a);
          s += cc(o, e, t, l, i);
        }
        else if (l = L2(r), typeof l == "function") for (r = l.call(r), a = 0; !(o = r.next()).done; ) o = o.value, l = n + nd(o, a++), s += cc(o, e, t, l, i);
        else if (o === "object") throw e = String(r), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
        return s;
      }
      function El(r, e, t) {
        if (r == null) return r;
        var n = [], i = 0;
        return cc(r, n, "", "", function(o) {
          return e.call(t, o, i++);
        }), n;
      }
      function F2(r) {
        if (r._status === -1) {
          var e = r._result;
          e = e(), e.then(function(t) {
            (r._status === 0 || r._status === -1) && (r._status = 1, r._result = t);
          }, function(t) {
            (r._status === 0 || r._status === -1) && (r._status = 2, r._result = t);
          }), r._status === -1 && (r._status = 0, r._result = e);
        }
        if (r._status === 1) return r._result.default;
        throw r._result;
      }
      var sr = {
        current: null
      }, uc = {
        transition: null
      }, H2 = {
        ReactCurrentDispatcher: sr,
        ReactCurrentBatchConfig: uc,
        ReactCurrentOwner: zh
      };
      function gm() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      he.Children = {
        map: El,
        forEach: function(r, e, t) {
          El(r, function() {
            e.apply(this, arguments);
          }, t);
        },
        count: function(r) {
          var e = 0;
          return El(r, function() {
            e++;
          }), e;
        },
        toArray: function(r) {
          return El(r, function(e) {
            return e;
          }) || [];
        },
        only: function(r) {
          if (!Nh(r)) throw Error("React.Children.only expected to receive a single React element child.");
          return r;
        }
      };
      he.Component = Bs;
      he.Fragment = E2;
      he.Profiler = T2;
      he.PureComponent = Mh;
      he.StrictMode = P2;
      he.Suspense = I2;
      he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H2;
      he.act = gm;
      he.cloneElement = function(r, e, t) {
        if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var n = um({}, r.props), i = r.key, o = r.ref, s = r._owner;
        if (e != null) {
          if (e.ref !== void 0 && (o = e.ref, s = zh.current), e.key !== void 0 && (i = "" + e.key), r.type && r.type.defaultProps) var a = r.type.defaultProps;
          for (l in e) hm.call(e, l) && !pm.hasOwnProperty(l) && (n[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
        }
        var l = arguments.length - 2;
        if (l === 1) n.children = t;
        else if (1 < l) {
          a = Array(l);
          for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
          n.children = a;
        }
        return {
          $$typeof: wl,
          type: r.type,
          key: i,
          ref: o,
          props: n,
          _owner: s
        };
      };
      he.createContext = function(r) {
        return r = {
          $$typeof: j2,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }, r.Provider = {
          $$typeof: A2,
          _context: r
        }, r.Consumer = r;
      };
      he.createElement = _m;
      he.createFactory = function(r) {
        var e = _m.bind(null, r);
        return e.type = r, e;
      };
      he.createRef = function() {
        return {
          current: null
        };
      };
      he.forwardRef = function(r) {
        return {
          $$typeof: M2,
          render: r
        };
      };
      he.isValidElement = Nh;
      he.lazy = function(r) {
        return {
          $$typeof: N2,
          _payload: {
            _status: -1,
            _result: r
          },
          _init: F2
        };
      };
      he.memo = function(r, e) {
        return {
          $$typeof: z2,
          type: r,
          compare: e === void 0 ? null : e
        };
      };
      he.startTransition = function(r) {
        var e = uc.transition;
        uc.transition = {};
        try {
          r();
        } finally {
          uc.transition = e;
        }
      };
      he.unstable_act = gm;
      he.useCallback = function(r, e) {
        return sr.current.useCallback(r, e);
      };
      he.useContext = function(r) {
        return sr.current.useContext(r);
      };
      he.useDebugValue = function() {
      };
      he.useDeferredValue = function(r) {
        return sr.current.useDeferredValue(r);
      };
      he.useEffect = function(r, e) {
        return sr.current.useEffect(r, e);
      };
      he.useId = function() {
        return sr.current.useId();
      };
      he.useImperativeHandle = function(r, e, t) {
        return sr.current.useImperativeHandle(r, e, t);
      };
      he.useInsertionEffect = function(r, e) {
        return sr.current.useInsertionEffect(r, e);
      };
      he.useLayoutEffect = function(r, e) {
        return sr.current.useLayoutEffect(r, e);
      };
      he.useMemo = function(r, e) {
        return sr.current.useMemo(r, e);
      };
      he.useReducer = function(r, e, t) {
        return sr.current.useReducer(r, e, t);
      };
      he.useRef = function(r) {
        return sr.current.useRef(r);
      };
      he.useState = function(r) {
        return sr.current.useState(r);
      };
      he.useSyncExternalStore = function(r, e, t) {
        return sr.current.useSyncExternalStore(r, e, t);
      };
      he.useTransition = function() {
        return sr.current.useTransition();
      };
      he.version = "18.3.1";
      lm.exports = he;
      var F = lm.exports;
      const Pn = k2(F), B2 = C2({
        __proto__: null,
        default: Pn
      }, [
        F
      ]);
      var U2 = F, $2 = Symbol.for("react.element"), V2 = Symbol.for("react.fragment"), W2 = Object.prototype.hasOwnProperty, G2 = U2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y2 = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function wm(r, e, t) {
        var n, i = {}, o = null, s = null;
        t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (s = e.ref);
        for (n in e) W2.call(e, n) && !Y2.hasOwnProperty(n) && (i[n] = e[n]);
        if (r && r.defaultProps) for (n in e = r.defaultProps, e) i[n] === void 0 && (i[n] = e[n]);
        return {
          $$typeof: $2,
          type: r,
          key: o,
          ref: s,
          props: i,
          _owner: G2.current
        };
      }
      Cu.Fragment = V2;
      Cu.jsx = wm;
      Cu.jsxs = wm;
      am.exports = Cu;
      var P = am.exports, mm = {
        exports: {}
      }, Fr = {}, ym = {
        exports: {}
      }, vm = {};
      (function(r) {
        function e(N, L) {
          var x = N.length;
          N.push(L);
          e: for (; 0 < x; ) {
            var V = x - 1 >>> 1, K = N[V];
            if (0 < i(K, L)) N[V] = L, N[x] = K, x = V;
            else break e;
          }
        }
        function t(N) {
          return N.length === 0 ? null : N[0];
        }
        function n(N) {
          if (N.length === 0) return null;
          var L = N[0], x = N.pop();
          if (x !== L) {
            N[0] = x;
            e: for (var V = 0, K = N.length, Re = K >>> 1; V < Re; ) {
              var re = 2 * (V + 1) - 1, _e = N[re], ue = re + 1, pe = N[ue];
              if (0 > i(_e, x)) ue < K && 0 > i(pe, _e) ? (N[V] = pe, N[ue] = x, V = ue) : (N[V] = _e, N[re] = x, V = re);
              else if (ue < K && 0 > i(pe, x)) N[V] = pe, N[ue] = x, V = ue;
              else break e;
            }
          }
          return L;
        }
        function i(N, L) {
          var x = N.sortIndex - L.sortIndex;
          return x !== 0 ? x : N.id - L.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var o = performance;
          r.unstable_now = function() {
            return o.now();
          };
        } else {
          var s = Date, a = s.now();
          r.unstable_now = function() {
            return s.now() - a;
          };
        }
        var l = [], c = [], u = 1, h = null, d = 3, p = false, m = false, g = false, b = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function v(N) {
          for (var L = t(c); L !== null; ) {
            if (L.callback === null) n(c);
            else if (L.startTime <= N) n(c), L.sortIndex = L.expirationTime, e(l, L);
            else break;
            L = t(c);
          }
        }
        function S(N) {
          if (g = false, v(N), !m) if (t(l) !== null) m = true, X(C);
          else {
            var L = t(c);
            L !== null && W(S, L.startTime - N);
          }
        }
        function C(N, L) {
          m = false, g && (g = false, y(T), T = -1), p = true;
          var x = d;
          try {
            for (v(L), h = t(l); h !== null && (!(h.expirationTime > L) || N && !H()); ) {
              var V = h.callback;
              if (typeof V == "function") {
                h.callback = null, d = h.priorityLevel;
                var K = V(h.expirationTime <= L);
                L = r.unstable_now(), typeof K == "function" ? h.callback = K : h === t(l) && n(l), v(L);
              } else n(l);
              h = t(l);
            }
            if (h !== null) var Re = true;
            else {
              var re = t(c);
              re !== null && W(S, re.startTime - L), Re = false;
            }
            return Re;
          } finally {
            h = null, d = x, p = false;
          }
        }
        var E = false, k = null, T = -1, I = 5, M = -1;
        function H() {
          return !(r.unstable_now() - M < I);
        }
        function O() {
          if (k !== null) {
            var N = r.unstable_now();
            M = N;
            var L = true;
            try {
              L = k(true, N);
            } finally {
              L ? Z() : (E = false, k = null);
            }
          } else E = false;
        }
        var Z;
        if (typeof w == "function") Z = function() {
          w(O);
        };
        else if (typeof MessageChannel < "u") {
          var $ = new MessageChannel(), U = $.port2;
          $.port1.onmessage = O, Z = function() {
            U.postMessage(null);
          };
        } else Z = function() {
          b(O, 0);
        };
        function X(N) {
          k = N, E || (E = true, Z());
        }
        function W(N, L) {
          T = b(function() {
            N(r.unstable_now());
          }, L);
        }
        r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(N) {
          N.callback = null;
        }, r.unstable_continueExecution = function() {
          m || p || (m = true, X(C));
        }, r.unstable_forceFrameRate = function(N) {
          0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < N ? Math.floor(1e3 / N) : 5;
        }, r.unstable_getCurrentPriorityLevel = function() {
          return d;
        }, r.unstable_getFirstCallbackNode = function() {
          return t(l);
        }, r.unstable_next = function(N) {
          switch (d) {
            case 1:
            case 2:
            case 3:
              var L = 3;
              break;
            default:
              L = d;
          }
          var x = d;
          d = L;
          try {
            return N();
          } finally {
            d = x;
          }
        }, r.unstable_pauseExecution = function() {
        }, r.unstable_requestPaint = function() {
        }, r.unstable_runWithPriority = function(N, L) {
          switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              N = 3;
          }
          var x = d;
          d = N;
          try {
            return L();
          } finally {
            d = x;
          }
        }, r.unstable_scheduleCallback = function(N, L, x) {
          var V = r.unstable_now();
          switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? V + x : V) : x = V, N) {
            case 1:
              var K = -1;
              break;
            case 2:
              K = 250;
              break;
            case 5:
              K = 1073741823;
              break;
            case 4:
              K = 1e4;
              break;
            default:
              K = 5e3;
          }
          return K = x + K, N = {
            id: u++,
            callback: L,
            priorityLevel: N,
            startTime: x,
            expirationTime: K,
            sortIndex: -1
          }, x > V ? (N.sortIndex = x, e(c, N), t(l) === null && N === t(c) && (g ? (y(T), T = -1) : g = true, W(S, x - V))) : (N.sortIndex = K, e(l, N), m || p || (m = true, X(C))), N;
        }, r.unstable_shouldYield = H, r.unstable_wrapCallback = function(N) {
          var L = d;
          return function() {
            var x = d;
            d = L;
            try {
              return N.apply(this, arguments);
            } finally {
              d = x;
            }
          };
        };
      })(vm);
      ym.exports = vm;
      var X2 = ym.exports;
      var q2 = F, Lr = X2;
      function D(r) {
        for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + r + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var bm = /* @__PURE__ */ new Set(), Ba = {};
      function zo(r, e) {
        Rs(r, e), Rs(r + "Capture", e);
      }
      function Rs(r, e) {
        for (Ba[r] = e, r = 0; r < e.length; r++) bm.add(e[r]);
      }
      var Jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tf = Object.prototype.hasOwnProperty, K2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c_ = {}, u_ = {};
      function J2(r) {
        return tf.call(u_, r) ? true : tf.call(c_, r) ? false : K2.test(r) ? u_[r] = true : (c_[r] = true, false);
      }
      function Q2(r, e, t, n) {
        if (t !== null && t.type === 0) return false;
        switch (typeof e) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            return n ? false : t !== null ? !t.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
          default:
            return false;
        }
      }
      function Z2(r, e, t, n) {
        if (e === null || typeof e > "u" || Q2(r, e, t, n)) return true;
        if (n) return false;
        if (t !== null) switch (t.type) {
          case 3:
            return !e;
          case 4:
            return e === false;
          case 5:
            return isNaN(e);
          case 6:
            return isNaN(e) || 1 > e;
        }
        return false;
      }
      function ar(r, e, t, n, i, o, s) {
        this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = o, this.removeEmptyString = s;
      }
      var It = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
        It[r] = new ar(r, 0, false, r, null, false, false);
      });
      [
        [
          "acceptCharset",
          "accept-charset"
        ],
        [
          "className",
          "class"
        ],
        [
          "htmlFor",
          "for"
        ],
        [
          "httpEquiv",
          "http-equiv"
        ]
      ].forEach(function(r) {
        var e = r[0];
        It[e] = new ar(e, 1, false, r[1], null, false, false);
      });
      [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
      ].forEach(function(r) {
        It[r] = new ar(r, 2, false, r.toLowerCase(), null, false, false);
      });
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(r) {
        It[r] = new ar(r, 2, false, r, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
        It[r] = new ar(r, 3, false, r.toLowerCase(), null, false, false);
      });
      [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(r) {
        It[r] = new ar(r, 3, true, r, null, false, false);
      });
      [
        "capture",
        "download"
      ].forEach(function(r) {
        It[r] = new ar(r, 4, false, r, null, false, false);
      });
      [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(r) {
        It[r] = new ar(r, 6, false, r, null, false, false);
      });
      [
        "rowSpan",
        "start"
      ].forEach(function(r) {
        It[r] = new ar(r, 5, false, r.toLowerCase(), null, false, false);
      });
      var Lh = /[\-:]([a-z])/g;
      function Oh(r) {
        return r[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
        var e = r.replace(Lh, Oh);
        It[e] = new ar(e, 1, false, r, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
        var e = r.replace(Lh, Oh);
        It[e] = new ar(e, 1, false, r, "http://www.w3.org/1999/xlink", false, false);
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(r) {
        var e = r.replace(Lh, Oh);
        It[e] = new ar(e, 1, false, r, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      [
        "tabIndex",
        "crossOrigin"
      ].forEach(function(r) {
        It[r] = new ar(r, 1, false, r.toLowerCase(), null, false, false);
      });
      It.xlinkHref = new ar("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      [
        "src",
        "href",
        "action",
        "formAction"
      ].forEach(function(r) {
        It[r] = new ar(r, 1, false, r.toLowerCase(), null, true, true);
      });
      function Dh(r, e, t, n) {
        var i = It.hasOwnProperty(e) ? It[e] : null;
        (i !== null ? i.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Z2(e, t, i, n) && (t = null), n || i === null ? J2(e) && (t === null ? r.removeAttribute(e) : r.setAttribute(e, "" + t)) : i.mustUseProperty ? r[i.propertyName] = t === null ? i.type === 3 ? false : "" : t : (e = i.attributeName, n = i.attributeNamespace, t === null ? r.removeAttribute(e) : (i = i.type, t = i === 3 || i === 4 && t === true ? "" : "" + t, n ? r.setAttributeNS(n, e, t) : r.setAttribute(e, t))));
      }
      var si = q2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pl = Symbol.for("react.element"), Qo = Symbol.for("react.portal"), Zo = Symbol.for("react.fragment"), Fh = Symbol.for("react.strict_mode"), rf = Symbol.for("react.profiler"), Sm = Symbol.for("react.provider"), xm = Symbol.for("react.context"), Hh = Symbol.for("react.forward_ref"), nf = Symbol.for("react.suspense"), of = Symbol.for("react.suspense_list"), Bh = Symbol.for("react.memo"), pi = Symbol.for("react.lazy"), Cm = Symbol.for("react.offscreen"), d_ = Symbol.iterator;
      function qs(r) {
        return r === null || typeof r != "object" ? null : (r = d_ && r[d_] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      var Ge = Object.assign, id;
      function aa(r) {
        if (id === void 0) try {
          throw Error();
        } catch (t) {
          var e = t.stack.trim().match(/\n( *(at )?)/);
          id = e && e[1] || "";
        }
        return `
` + id + r;
      }
      var od = false;
      function sd(r, e) {
        if (!r || od) return "";
        od = true;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (e) if (e = function() {
            throw Error();
          }, Object.defineProperty(e.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(e, []);
            } catch (c) {
              var n = c;
            }
            Reflect.construct(r, [], e);
          } else {
            try {
              e.call();
            } catch (c) {
              n = c;
            }
            r.call(e.prototype);
          }
          else {
            try {
              throw Error();
            } catch (c) {
              n = c;
            }
            r();
          }
        } catch (c) {
          if (c && n && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = n.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; ) a--;
            for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
              if (s !== 1 || a !== 1) do
                if (s--, a--, 0 > a || i[s] !== o[a]) {
                  var l = `
` + i[s].replace(" at new ", " at ");
                  return r.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", r.displayName)), l;
                }
              while (1 <= s && 0 <= a);
              break;
            }
          }
        } finally {
          od = false, Error.prepareStackTrace = t;
        }
        return (r = r ? r.displayName || r.name : "") ? aa(r) : "";
      }
      function ev(r) {
        switch (r.tag) {
          case 5:
            return aa(r.type);
          case 16:
            return aa("Lazy");
          case 13:
            return aa("Suspense");
          case 19:
            return aa("SuspenseList");
          case 0:
          case 2:
          case 15:
            return r = sd(r.type, false), r;
          case 11:
            return r = sd(r.type.render, false), r;
          case 1:
            return r = sd(r.type, true), r;
          default:
            return "";
        }
      }
      function sf(r) {
        if (r == null) return null;
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
        switch (r) {
          case Zo:
            return "Fragment";
          case Qo:
            return "Portal";
          case rf:
            return "Profiler";
          case Fh:
            return "StrictMode";
          case nf:
            return "Suspense";
          case of:
            return "SuspenseList";
        }
        if (typeof r == "object") switch (r.$$typeof) {
          case xm:
            return (r.displayName || "Context") + ".Consumer";
          case Sm:
            return (r._context.displayName || "Context") + ".Provider";
          case Hh:
            var e = r.render;
            return r = r.displayName, r || (r = e.displayName || e.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Bh:
            return e = r.displayName || null, e !== null ? e : sf(r.type) || "Memo";
          case pi:
            e = r._payload, r = r._init;
            try {
              return sf(r(e));
            } catch {
            }
        }
        return null;
      }
      function tv(r) {
        var e = r.type;
        switch (r.tag) {
          case 24:
            return "Cache";
          case 9:
            return (e.displayName || "Context") + ".Consumer";
          case 10:
            return (e._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return r = e.render, r = r.displayName || r.name || "", e.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return e;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return sf(e);
          case 8:
            return e === Fh ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
        }
        return null;
      }
      function Oi(r) {
        switch (typeof r) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return r;
          case "object":
            return r;
          default:
            return "";
        }
      }
      function km(r) {
        var e = r.type;
        return (r = r.nodeName) && r.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
      }
      function rv(r) {
        var e = km(r) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(r.constructor.prototype, e), n = "" + r[e];
        if (!r.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
          var i = t.get, o = t.set;
          return Object.defineProperty(r, e, {
            configurable: true,
            get: function() {
              return i.call(this);
            },
            set: function(s) {
              n = "" + s, o.call(this, s);
            }
          }), Object.defineProperty(r, e, {
            enumerable: t.enumerable
          }), {
            getValue: function() {
              return n;
            },
            setValue: function(s) {
              n = "" + s;
            },
            stopTracking: function() {
              r._valueTracker = null, delete r[e];
            }
          };
        }
      }
      function Tl(r) {
        r._valueTracker || (r._valueTracker = rv(r));
      }
      function Rm(r) {
        if (!r) return false;
        var e = r._valueTracker;
        if (!e) return true;
        var t = e.getValue(), n = "";
        return r && (n = km(r) ? r.checked ? "true" : "false" : r.value), r = n, r !== t ? (e.setValue(r), true) : false;
      }
      function Ac(r) {
        if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
        try {
          return r.activeElement || r.body;
        } catch {
          return r.body;
        }
      }
      function af(r, e) {
        var t = e.checked;
        return Ge({}, e, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: t ?? r._wrapperState.initialChecked
        });
      }
      function f_(r, e) {
        var t = e.defaultValue == null ? "" : e.defaultValue, n = e.checked != null ? e.checked : e.defaultChecked;
        t = Oi(e.value != null ? e.value : t), r._wrapperState = {
          initialChecked: n,
          initialValue: t,
          controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
        };
      }
      function Em(r, e) {
        e = e.checked, e != null && Dh(r, "checked", e, false);
      }
      function lf(r, e) {
        Em(r, e);
        var t = Oi(e.value), n = e.type;
        if (t != null) n === "number" ? (t === 0 && r.value === "" || r.value != t) && (r.value = "" + t) : r.value !== "" + t && (r.value = "" + t);
        else if (n === "submit" || n === "reset") {
          r.removeAttribute("value");
          return;
        }
        e.hasOwnProperty("value") ? cf(r, e.type, t) : e.hasOwnProperty("defaultValue") && cf(r, e.type, Oi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (r.defaultChecked = !!e.defaultChecked);
      }
      function h_(r, e, t) {
        if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
          var n = e.type;
          if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
          e = "" + r._wrapperState.initialValue, t || e === r.value || (r.value = e), r.defaultValue = e;
        }
        t = r.name, t !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, t !== "" && (r.name = t);
      }
      function cf(r, e, t) {
        (e !== "number" || Ac(r.ownerDocument) !== r) && (t == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + t && (r.defaultValue = "" + t));
      }
      var la = Array.isArray;
      function ps(r, e, t, n) {
        if (r = r.options, e) {
          e = {};
          for (var i = 0; i < t.length; i++) e["$" + t[i]] = true;
          for (t = 0; t < r.length; t++) i = e.hasOwnProperty("$" + r[t].value), r[t].selected !== i && (r[t].selected = i), i && n && (r[t].defaultSelected = true);
        } else {
          for (t = "" + Oi(t), e = null, i = 0; i < r.length; i++) {
            if (r[i].value === t) {
              r[i].selected = true, n && (r[i].defaultSelected = true);
              return;
            }
            e !== null || r[i].disabled || (e = r[i]);
          }
          e !== null && (e.selected = true);
        }
      }
      function uf(r, e) {
        if (e.dangerouslySetInnerHTML != null) throw Error(D(91));
        return Ge({}, e, {
          value: void 0,
          defaultValue: void 0,
          children: "" + r._wrapperState.initialValue
        });
      }
      function p_(r, e) {
        var t = e.value;
        if (t == null) {
          if (t = e.children, e = e.defaultValue, t != null) {
            if (e != null) throw Error(D(92));
            if (la(t)) {
              if (1 < t.length) throw Error(D(93));
              t = t[0];
            }
            e = t;
          }
          e == null && (e = ""), t = e;
        }
        r._wrapperState = {
          initialValue: Oi(t)
        };
      }
      function Pm(r, e) {
        var t = Oi(e.value), n = Oi(e.defaultValue);
        t != null && (t = "" + t, t !== r.value && (r.value = t), e.defaultValue == null && r.defaultValue !== t && (r.defaultValue = t)), n != null && (r.defaultValue = "" + n);
      }
      function __(r) {
        var e = r.textContent;
        e === r._wrapperState.initialValue && e !== "" && e !== null && (r.value = e);
      }
      function Tm(r) {
        switch (r) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function df(r, e) {
        return r == null || r === "http://www.w3.org/1999/xhtml" ? Tm(e) : r === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
      }
      var Al, Am = function(r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, n, i) {
          MSApp.execUnsafeLocalFunction(function() {
            return r(e, t, n, i);
          });
        } : r;
      }(function(r, e) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = e;
        else {
          for (Al = Al || document.createElement("div"), Al.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Al.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
          for (; e.firstChild; ) r.appendChild(e.firstChild);
        }
      });
      function Ua(r, e) {
        if (e) {
          var t = r.firstChild;
          if (t && t === r.lastChild && t.nodeType === 3) {
            t.nodeValue = e;
            return;
          }
        }
        r.textContent = e;
      }
      var ma = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      }, nv = [
        "Webkit",
        "ms",
        "Moz",
        "O"
      ];
      Object.keys(ma).forEach(function(r) {
        nv.forEach(function(e) {
          e = e + r.charAt(0).toUpperCase() + r.substring(1), ma[e] = ma[r];
        });
      });
      function jm(r, e, t) {
        return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || ma.hasOwnProperty(r) && ma[r] ? ("" + e).trim() : e + "px";
      }
      function Mm(r, e) {
        r = r.style;
        for (var t in e) if (e.hasOwnProperty(t)) {
          var n = t.indexOf("--") === 0, i = jm(t, e[t], n);
          t === "float" && (t = "cssFloat"), n ? r.setProperty(t, i) : r[t] = i;
        }
      }
      var iv = Ge({
        menuitem: true
      }, {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      });
      function ff(r, e) {
        if (e) {
          if (iv[r] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(D(137, r));
          if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(D(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(D(61));
          }
          if (e.style != null && typeof e.style != "object") throw Error(D(62));
        }
      }
      function hf(r, e) {
        if (r.indexOf("-") === -1) return typeof e.is == "string";
        switch (r) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var pf = null;
      function Uh(r) {
        return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
      }
      var _f = null, _s = null, gs = null;
      function g_(r) {
        if (r = vl(r)) {
          if (typeof _f != "function") throw Error(D(280));
          var e = r.stateNode;
          e && (e = Tu(e), _f(r.stateNode, r.type, e));
        }
      }
      function Im(r) {
        _s ? gs ? gs.push(r) : gs = [
          r
        ] : _s = r;
      }
      function zm() {
        if (_s) {
          var r = _s, e = gs;
          if (gs = _s = null, g_(r), e) for (r = 0; r < e.length; r++) g_(e[r]);
        }
      }
      function Nm(r, e) {
        return r(e);
      }
      function Lm() {
      }
      var ad = false;
      function Om(r, e, t) {
        if (ad) return r(e, t);
        ad = true;
        try {
          return Nm(r, e, t);
        } finally {
          ad = false, (_s !== null || gs !== null) && (Lm(), zm());
        }
      }
      function $a(r, e) {
        var t = r.stateNode;
        if (t === null) return null;
        var n = Tu(t);
        if (n === null) return null;
        t = n[e];
        e: switch (e) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (n = !n.disabled) || (r = r.type, n = !(r === "button" || r === "input" || r === "select" || r === "textarea")), r = !n;
            break e;
          default:
            r = false;
        }
        if (r) return null;
        if (t && typeof t != "function") throw Error(D(231, e, typeof t));
        return t;
      }
      var gf = false;
      if (Jn) try {
        var Ks = {};
        Object.defineProperty(Ks, "passive", {
          get: function() {
            gf = true;
          }
        }), window.addEventListener("test", Ks, Ks), window.removeEventListener("test", Ks, Ks);
      } catch {
        gf = false;
      }
      function ov(r, e, t, n, i, o, s, a, l) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          e.apply(t, c);
        } catch (u) {
          this.onError(u);
        }
      }
      var ya = false, jc = null, Mc = false, wf = null, sv = {
        onError: function(r) {
          ya = true, jc = r;
        }
      };
      function av(r, e, t, n, i, o, s, a, l) {
        ya = false, jc = null, ov.apply(sv, arguments);
      }
      function lv(r, e, t, n, i, o, s, a, l) {
        if (av.apply(this, arguments), ya) {
          if (ya) {
            var c = jc;
            ya = false, jc = null;
          } else throw Error(D(198));
          Mc || (Mc = true, wf = c);
        }
      }
      function No(r) {
        var e = r, t = r;
        if (r.alternate) for (; e.return; ) e = e.return;
        else {
          r = e;
          do
            e = r, e.flags & 4098 && (t = e.return), r = e.return;
          while (r);
        }
        return e.tag === 3 ? t : null;
      }
      function Dm(r) {
        if (r.tag === 13) {
          var e = r.memoizedState;
          if (e === null && (r = r.alternate, r !== null && (e = r.memoizedState)), e !== null) return e.dehydrated;
        }
        return null;
      }
      function w_(r) {
        if (No(r) !== r) throw Error(D(188));
      }
      function cv(r) {
        var e = r.alternate;
        if (!e) {
          if (e = No(r), e === null) throw Error(D(188));
          return e !== r ? null : r;
        }
        for (var t = r, n = e; ; ) {
          var i = t.return;
          if (i === null) break;
          var o = i.alternate;
          if (o === null) {
            if (n = i.return, n !== null) {
              t = n;
              continue;
            }
            break;
          }
          if (i.child === o.child) {
            for (o = i.child; o; ) {
              if (o === t) return w_(i), r;
              if (o === n) return w_(i), e;
              o = o.sibling;
            }
            throw Error(D(188));
          }
          if (t.return !== n.return) t = i, n = o;
          else {
            for (var s = false, a = i.child; a; ) {
              if (a === t) {
                s = true, t = i, n = o;
                break;
              }
              if (a === n) {
                s = true, n = i, t = o;
                break;
              }
              a = a.sibling;
            }
            if (!s) {
              for (a = o.child; a; ) {
                if (a === t) {
                  s = true, t = o, n = i;
                  break;
                }
                if (a === n) {
                  s = true, n = o, t = i;
                  break;
                }
                a = a.sibling;
              }
              if (!s) throw Error(D(189));
            }
          }
          if (t.alternate !== n) throw Error(D(190));
        }
        if (t.tag !== 3) throw Error(D(188));
        return t.stateNode.current === t ? r : e;
      }
      function Fm(r) {
        return r = cv(r), r !== null ? Hm(r) : null;
      }
      function Hm(r) {
        if (r.tag === 5 || r.tag === 6) return r;
        for (r = r.child; r !== null; ) {
          var e = Hm(r);
          if (e !== null) return e;
          r = r.sibling;
        }
        return null;
      }
      var Bm = Lr.unstable_scheduleCallback, m_ = Lr.unstable_cancelCallback, uv = Lr.unstable_shouldYield, dv = Lr.unstable_requestPaint, tt = Lr.unstable_now, fv = Lr.unstable_getCurrentPriorityLevel, $h = Lr.unstable_ImmediatePriority, Um = Lr.unstable_UserBlockingPriority, Ic = Lr.unstable_NormalPriority, hv = Lr.unstable_LowPriority, $m = Lr.unstable_IdlePriority, ku = null, Tn = null;
      function pv(r) {
        if (Tn && typeof Tn.onCommitFiberRoot == "function") try {
          Tn.onCommitFiberRoot(ku, r, void 0, (r.current.flags & 128) === 128);
        } catch {
        }
      }
      var fn = Math.clz32 ? Math.clz32 : wv, _v = Math.log, gv = Math.LN2;
      function wv(r) {
        return r >>>= 0, r === 0 ? 32 : 31 - (_v(r) / gv | 0) | 0;
      }
      var jl = 64, Ml = 4194304;
      function ca(r) {
        switch (r & -r) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return r & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return r & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return r;
        }
      }
      function zc(r, e) {
        var t = r.pendingLanes;
        if (t === 0) return 0;
        var n = 0, i = r.suspendedLanes, o = r.pingedLanes, s = t & 268435455;
        if (s !== 0) {
          var a = s & ~i;
          a !== 0 ? n = ca(a) : (o &= s, o !== 0 && (n = ca(o)));
        } else s = t & ~i, s !== 0 ? n = ca(s) : o !== 0 && (n = ca(o));
        if (n === 0) return 0;
        if (e !== 0 && e !== n && !(e & i) && (i = n & -n, o = e & -e, i >= o || i === 16 && (o & 4194240) !== 0)) return e;
        if (n & 4 && (n |= t & 16), e = r.entangledLanes, e !== 0) for (r = r.entanglements, e &= n; 0 < e; ) t = 31 - fn(e), i = 1 << t, n |= r[t], e &= ~i;
        return n;
      }
      function mv(r, e) {
        switch (r) {
          case 1:
          case 2:
          case 4:
            return e + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function yv(r, e) {
        for (var t = r.suspendedLanes, n = r.pingedLanes, i = r.expirationTimes, o = r.pendingLanes; 0 < o; ) {
          var s = 31 - fn(o), a = 1 << s, l = i[s];
          l === -1 ? (!(a & t) || a & n) && (i[s] = mv(a, e)) : l <= e && (r.expiredLanes |= a), o &= ~a;
        }
      }
      function mf(r) {
        return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
      }
      function Vm() {
        var r = jl;
        return jl <<= 1, !(jl & 4194240) && (jl = 64), r;
      }
      function ld(r) {
        for (var e = [], t = 0; 31 > t; t++) e.push(r);
        return e;
      }
      function ml(r, e, t) {
        r.pendingLanes |= e, e !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, e = 31 - fn(e), r[e] = t;
      }
      function vv(r, e) {
        var t = r.pendingLanes & ~e;
        r.pendingLanes = e, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= e, r.mutableReadLanes &= e, r.entangledLanes &= e, e = r.entanglements;
        var n = r.eventTimes;
        for (r = r.expirationTimes; 0 < t; ) {
          var i = 31 - fn(t), o = 1 << i;
          e[i] = 0, n[i] = -1, r[i] = -1, t &= ~o;
        }
      }
      function Vh(r, e) {
        var t = r.entangledLanes |= e;
        for (r = r.entanglements; t; ) {
          var n = 31 - fn(t), i = 1 << n;
          i & e | r[n] & e && (r[n] |= e), t &= ~i;
        }
      }
      var ke = 0;
      function Wm(r) {
        return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
      }
      var Gm, Wh, Ym, Xm, qm, yf = false, Il = [], Ri = null, Ei = null, Pi = null, Va = /* @__PURE__ */ new Map(), Wa = /* @__PURE__ */ new Map(), gi = [], bv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function y_(r, e) {
        switch (r) {
          case "focusin":
          case "focusout":
            Ri = null;
            break;
          case "dragenter":
          case "dragleave":
            Ei = null;
            break;
          case "mouseover":
          case "mouseout":
            Pi = null;
            break;
          case "pointerover":
          case "pointerout":
            Va.delete(e.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Wa.delete(e.pointerId);
        }
      }
      function Js(r, e, t, n, i, o) {
        return r === null || r.nativeEvent !== o ? (r = {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [
            i
          ]
        }, e !== null && (e = vl(e), e !== null && Wh(e)), r) : (r.eventSystemFlags |= n, e = r.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), r);
      }
      function Sv(r, e, t, n, i) {
        switch (e) {
          case "focusin":
            return Ri = Js(Ri, r, e, t, n, i), true;
          case "dragenter":
            return Ei = Js(Ei, r, e, t, n, i), true;
          case "mouseover":
            return Pi = Js(Pi, r, e, t, n, i), true;
          case "pointerover":
            var o = i.pointerId;
            return Va.set(o, Js(Va.get(o) || null, r, e, t, n, i)), true;
          case "gotpointercapture":
            return o = i.pointerId, Wa.set(o, Js(Wa.get(o) || null, r, e, t, n, i)), true;
        }
        return false;
      }
      function Km(r) {
        var e = so(r.target);
        if (e !== null) {
          var t = No(e);
          if (t !== null) {
            if (e = t.tag, e === 13) {
              if (e = Dm(t), e !== null) {
                r.blockedOn = e, qm(r.priority, function() {
                  Ym(t);
                });
                return;
              }
            } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
              r.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
              return;
            }
          }
        }
        r.blockedOn = null;
      }
      function dc(r) {
        if (r.blockedOn !== null) return false;
        for (var e = r.targetContainers; 0 < e.length; ) {
          var t = vf(r.domEventName, r.eventSystemFlags, e[0], r.nativeEvent);
          if (t === null) {
            t = r.nativeEvent;
            var n = new t.constructor(t.type, t);
            pf = n, t.target.dispatchEvent(n), pf = null;
          } else return e = vl(t), e !== null && Wh(e), r.blockedOn = t, false;
          e.shift();
        }
        return true;
      }
      function v_(r, e, t) {
        dc(r) && t.delete(e);
      }
      function xv() {
        yf = false, Ri !== null && dc(Ri) && (Ri = null), Ei !== null && dc(Ei) && (Ei = null), Pi !== null && dc(Pi) && (Pi = null), Va.forEach(v_), Wa.forEach(v_);
      }
      function Qs(r, e) {
        r.blockedOn === e && (r.blockedOn = null, yf || (yf = true, Lr.unstable_scheduleCallback(Lr.unstable_NormalPriority, xv)));
      }
      function Ga(r) {
        function e(i) {
          return Qs(i, r);
        }
        if (0 < Il.length) {
          Qs(Il[0], r);
          for (var t = 1; t < Il.length; t++) {
            var n = Il[t];
            n.blockedOn === r && (n.blockedOn = null);
          }
        }
        for (Ri !== null && Qs(Ri, r), Ei !== null && Qs(Ei, r), Pi !== null && Qs(Pi, r), Va.forEach(e), Wa.forEach(e), t = 0; t < gi.length; t++) n = gi[t], n.blockedOn === r && (n.blockedOn = null);
        for (; 0 < gi.length && (t = gi[0], t.blockedOn === null); ) Km(t), t.blockedOn === null && gi.shift();
      }
      var ws = si.ReactCurrentBatchConfig, Nc = true;
      function Cv(r, e, t, n) {
        var i = ke, o = ws.transition;
        ws.transition = null;
        try {
          ke = 1, Gh(r, e, t, n);
        } finally {
          ke = i, ws.transition = o;
        }
      }
      function kv(r, e, t, n) {
        var i = ke, o = ws.transition;
        ws.transition = null;
        try {
          ke = 4, Gh(r, e, t, n);
        } finally {
          ke = i, ws.transition = o;
        }
      }
      function Gh(r, e, t, n) {
        if (Nc) {
          var i = vf(r, e, t, n);
          if (i === null) md(r, e, n, Lc, t), y_(r, n);
          else if (Sv(i, r, e, t, n)) n.stopPropagation();
          else if (y_(r, n), e & 4 && -1 < bv.indexOf(r)) {
            for (; i !== null; ) {
              var o = vl(i);
              if (o !== null && Gm(o), o = vf(r, e, t, n), o === null && md(r, e, n, Lc, t), o === i) break;
              i = o;
            }
            i !== null && n.stopPropagation();
          } else md(r, e, n, null, t);
        }
      }
      var Lc = null;
      function vf(r, e, t, n) {
        if (Lc = null, r = Uh(n), r = so(r), r !== null) if (e = No(r), e === null) r = null;
        else if (t = e.tag, t === 13) {
          if (r = Dm(e), r !== null) return r;
          r = null;
        } else if (t === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          r = null;
        } else e !== r && (r = null);
        return Lc = r, null;
      }
      function Jm(r) {
        switch (r) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (fv()) {
              case $h:
                return 1;
              case Um:
                return 4;
              case Ic:
              case hv:
                return 16;
              case $m:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var yi = null, Yh = null, fc = null;
      function Qm() {
        if (fc) return fc;
        var r, e = Yh, t = e.length, n, i = "value" in yi ? yi.value : yi.textContent, o = i.length;
        for (r = 0; r < t && e[r] === i[r]; r++) ;
        var s = t - r;
        for (n = 1; n <= s && e[t - n] === i[o - n]; n++) ;
        return fc = i.slice(r, 1 < n ? 1 - n : void 0);
      }
      function hc(r) {
        var e = r.keyCode;
        return "charCode" in r ? (r = r.charCode, r === 0 && e === 13 && (r = 13)) : r = e, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
      }
      function zl() {
        return true;
      }
      function b_() {
        return false;
      }
      function Hr(r) {
        function e(t, n, i, o, s) {
          this._reactName = t, this._targetInst = i, this.type = n, this.nativeEvent = o, this.target = s, this.currentTarget = null;
          for (var a in r) r.hasOwnProperty(a) && (t = r[a], this[a] = t ? t(o) : o[a]);
          return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? zl : b_, this.isPropagationStopped = b_, this;
        }
        return Ge(e.prototype, {
          preventDefault: function() {
            this.defaultPrevented = true;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = zl);
          },
          stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = zl);
          },
          persist: function() {
          },
          isPersistent: zl
        }), e;
      }
      var Us = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(r) {
          return r.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      }, Xh = Hr(Us), yl = Ge({}, Us, {
        view: 0,
        detail: 0
      }), Rv = Hr(yl), cd, ud, Zs, Ru = Ge({}, yl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: qh,
        button: 0,
        buttons: 0,
        relatedTarget: function(r) {
          return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
        },
        movementX: function(r) {
          return "movementX" in r ? r.movementX : (r !== Zs && (Zs && r.type === "mousemove" ? (cd = r.screenX - Zs.screenX, ud = r.screenY - Zs.screenY) : ud = cd = 0, Zs = r), cd);
        },
        movementY: function(r) {
          return "movementY" in r ? r.movementY : ud;
        }
      }), S_ = Hr(Ru), Ev = Ge({}, Ru, {
        dataTransfer: 0
      }), Pv = Hr(Ev), Tv = Ge({}, yl, {
        relatedTarget: 0
      }), dd = Hr(Tv), Av = Ge({}, Us, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), jv = Hr(Av), Mv = Ge({}, Us, {
        clipboardData: function(r) {
          return "clipboardData" in r ? r.clipboardData : window.clipboardData;
        }
      }), Iv = Hr(Mv), zv = Ge({}, Us, {
        data: 0
      }), x_ = Hr(zv), Nv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      }, Lv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      }, Ov = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function Dv(r) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(r) : (r = Ov[r]) ? !!e[r] : false;
      }
      function qh() {
        return Dv;
      }
      var Fv = Ge({}, yl, {
        key: function(r) {
          if (r.key) {
            var e = Nv[r.key] || r.key;
            if (e !== "Unidentified") return e;
          }
          return r.type === "keypress" ? (r = hc(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? Lv[r.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: qh,
        charCode: function(r) {
          return r.type === "keypress" ? hc(r) : 0;
        },
        keyCode: function(r) {
          return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
        },
        which: function(r) {
          return r.type === "keypress" ? hc(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
        }
      }), Hv = Hr(Fv), Bv = Ge({}, Ru, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      }), C_ = Hr(Bv), Uv = Ge({}, yl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: qh
      }), $v = Hr(Uv), Vv = Ge({}, Us, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), Wv = Hr(Vv), Gv = Ge({}, Ru, {
        deltaX: function(r) {
          return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
        },
        deltaY: function(r) {
          return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      }), Yv = Hr(Gv), Xv = [
        9,
        13,
        27,
        32
      ], Kh = Jn && "CompositionEvent" in window, va = null;
      Jn && "documentMode" in document && (va = document.documentMode);
      var qv = Jn && "TextEvent" in window && !va, Zm = Jn && (!Kh || va && 8 < va && 11 >= va), k_ = " ", R_ = false;
      function e0(r, e) {
        switch (r) {
          case "keyup":
            return Xv.indexOf(e.keyCode) !== -1;
          case "keydown":
            return e.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function t0(r) {
        return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
      }
      var es = false;
      function Kv(r, e) {
        switch (r) {
          case "compositionend":
            return t0(e);
          case "keypress":
            return e.which !== 32 ? null : (R_ = true, k_);
          case "textInput":
            return r = e.data, r === k_ && R_ ? null : r;
          default:
            return null;
        }
      }
      function Jv(r, e) {
        if (es) return r === "compositionend" || !Kh && e0(r, e) ? (r = Qm(), fc = Yh = yi = null, es = false, r) : null;
        switch (r) {
          case "paste":
            return null;
          case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
              if (e.char && 1 < e.char.length) return e.char;
              if (e.which) return String.fromCharCode(e.which);
            }
            return null;
          case "compositionend":
            return Zm && e.locale !== "ko" ? null : e.data;
          default:
            return null;
        }
      }
      var Qv = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function E_(r) {
        var e = r && r.nodeName && r.nodeName.toLowerCase();
        return e === "input" ? !!Qv[r.type] : e === "textarea";
      }
      function r0(r, e, t, n) {
        Im(n), e = Oc(e, "onChange"), 0 < e.length && (t = new Xh("onChange", "change", null, t, n), r.push({
          event: t,
          listeners: e
        }));
      }
      var ba = null, Ya = null;
      function Zv(r) {
        h0(r, 0);
      }
      function Eu(r) {
        var e = ns(r);
        if (Rm(e)) return r;
      }
      function eb(r, e) {
        if (r === "change") return e;
      }
      var n0 = false;
      if (Jn) {
        var fd;
        if (Jn) {
          var hd = "oninput" in document;
          if (!hd) {
            var P_ = document.createElement("div");
            P_.setAttribute("oninput", "return;"), hd = typeof P_.oninput == "function";
          }
          fd = hd;
        } else fd = false;
        n0 = fd && (!document.documentMode || 9 < document.documentMode);
      }
      function T_() {
        ba && (ba.detachEvent("onpropertychange", i0), Ya = ba = null);
      }
      function i0(r) {
        if (r.propertyName === "value" && Eu(Ya)) {
          var e = [];
          r0(e, Ya, r, Uh(r)), Om(Zv, e);
        }
      }
      function tb(r, e, t) {
        r === "focusin" ? (T_(), ba = e, Ya = t, ba.attachEvent("onpropertychange", i0)) : r === "focusout" && T_();
      }
      function rb(r) {
        if (r === "selectionchange" || r === "keyup" || r === "keydown") return Eu(Ya);
      }
      function nb(r, e) {
        if (r === "click") return Eu(e);
      }
      function ib(r, e) {
        if (r === "input" || r === "change") return Eu(e);
      }
      function ob(r, e) {
        return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
      }
      var pn = typeof Object.is == "function" ? Object.is : ob;
      function Xa(r, e) {
        if (pn(r, e)) return true;
        if (typeof r != "object" || r === null || typeof e != "object" || e === null) return false;
        var t = Object.keys(r), n = Object.keys(e);
        if (t.length !== n.length) return false;
        for (n = 0; n < t.length; n++) {
          var i = t[n];
          if (!tf.call(e, i) || !pn(r[i], e[i])) return false;
        }
        return true;
      }
      function A_(r) {
        for (; r && r.firstChild; ) r = r.firstChild;
        return r;
      }
      function j_(r, e) {
        var t = A_(r);
        r = 0;
        for (var n; t; ) {
          if (t.nodeType === 3) {
            if (n = r + t.textContent.length, r <= e && n >= e) return {
              node: t,
              offset: e - r
            };
            r = n;
          }
          e: {
            for (; t; ) {
              if (t.nextSibling) {
                t = t.nextSibling;
                break e;
              }
              t = t.parentNode;
            }
            t = void 0;
          }
          t = A_(t);
        }
      }
      function o0(r, e) {
        return r && e ? r === e ? true : r && r.nodeType === 3 ? false : e && e.nodeType === 3 ? o0(r, e.parentNode) : "contains" in r ? r.contains(e) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(e) & 16) : false : false;
      }
      function s0() {
        for (var r = window, e = Ac(); e instanceof r.HTMLIFrameElement; ) {
          try {
            var t = typeof e.contentWindow.location.href == "string";
          } catch {
            t = false;
          }
          if (t) r = e.contentWindow;
          else break;
          e = Ac(r.document);
        }
        return e;
      }
      function Jh(r) {
        var e = r && r.nodeName && r.nodeName.toLowerCase();
        return e && (e === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || e === "textarea" || r.contentEditable === "true");
      }
      function sb(r) {
        var e = s0(), t = r.focusedElem, n = r.selectionRange;
        if (e !== t && t && t.ownerDocument && o0(t.ownerDocument.documentElement, t)) {
          if (n !== null && Jh(t)) {
            if (e = n.start, r = n.end, r === void 0 && (r = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(r, t.value.length);
            else if (r = (e = t.ownerDocument || document) && e.defaultView || window, r.getSelection) {
              r = r.getSelection();
              var i = t.textContent.length, o = Math.min(n.start, i);
              n = n.end === void 0 ? o : Math.min(n.end, i), !r.extend && o > n && (i = n, n = o, o = i), i = j_(t, o);
              var s = j_(t, n);
              i && s && (r.rangeCount !== 1 || r.anchorNode !== i.node || r.anchorOffset !== i.offset || r.focusNode !== s.node || r.focusOffset !== s.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), r.removeAllRanges(), o > n ? (r.addRange(e), r.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset), r.addRange(e)));
            }
          }
          for (e = [], r = t; r = r.parentNode; ) r.nodeType === 1 && e.push({
            element: r,
            left: r.scrollLeft,
            top: r.scrollTop
          });
          for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) r = e[t], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
        }
      }
      var ab = Jn && "documentMode" in document && 11 >= document.documentMode, ts = null, bf = null, Sa = null, Sf = false;
      function M_(r, e, t) {
        var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        Sf || ts == null || ts !== Ac(n) || (n = ts, "selectionStart" in n && Jh(n) ? n = {
          start: n.selectionStart,
          end: n.selectionEnd
        } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset
        }), Sa && Xa(Sa, n) || (Sa = n, n = Oc(bf, "onSelect"), 0 < n.length && (e = new Xh("onSelect", "select", null, e, t), r.push({
          event: e,
          listeners: n
        }), e.target = ts)));
      }
      function Nl(r, e) {
        var t = {};
        return t[r.toLowerCase()] = e.toLowerCase(), t["Webkit" + r] = "webkit" + e, t["Moz" + r] = "moz" + e, t;
      }
      var rs = {
        animationend: Nl("Animation", "AnimationEnd"),
        animationiteration: Nl("Animation", "AnimationIteration"),
        animationstart: Nl("Animation", "AnimationStart"),
        transitionend: Nl("Transition", "TransitionEnd")
      }, pd = {}, a0 = {};
      Jn && (a0 = document.createElement("div").style, "AnimationEvent" in window || (delete rs.animationend.animation, delete rs.animationiteration.animation, delete rs.animationstart.animation), "TransitionEvent" in window || delete rs.transitionend.transition);
      function Pu(r) {
        if (pd[r]) return pd[r];
        if (!rs[r]) return r;
        var e = rs[r], t;
        for (t in e) if (e.hasOwnProperty(t) && t in a0) return pd[r] = e[t];
        return r;
      }
      var l0 = Pu("animationend"), c0 = Pu("animationiteration"), u0 = Pu("animationstart"), d0 = Pu("transitionend"), f0 = /* @__PURE__ */ new Map(), I_ = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function Vi(r, e) {
        f0.set(r, e), zo(e, [
          r
        ]);
      }
      for (var _d = 0; _d < I_.length; _d++) {
        var gd = I_[_d], lb = gd.toLowerCase(), cb = gd[0].toUpperCase() + gd.slice(1);
        Vi(lb, "on" + cb);
      }
      Vi(l0, "onAnimationEnd");
      Vi(c0, "onAnimationIteration");
      Vi(u0, "onAnimationStart");
      Vi("dblclick", "onDoubleClick");
      Vi("focusin", "onFocus");
      Vi("focusout", "onBlur");
      Vi(d0, "onTransitionEnd");
      Rs("onMouseEnter", [
        "mouseout",
        "mouseover"
      ]);
      Rs("onMouseLeave", [
        "mouseout",
        "mouseover"
      ]);
      Rs("onPointerEnter", [
        "pointerout",
        "pointerover"
      ]);
      Rs("onPointerLeave", [
        "pointerout",
        "pointerover"
      ]);
      zo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      zo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      zo("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
      ]);
      zo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      zo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      zo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var ua = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ub = new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));
      function z_(r, e, t) {
        var n = r.type || "unknown-event";
        r.currentTarget = t, lv(n, e, void 0, r), r.currentTarget = null;
      }
      function h0(r, e) {
        e = (e & 4) !== 0;
        for (var t = 0; t < r.length; t++) {
          var n = r[t], i = n.event;
          n = n.listeners;
          e: {
            var o = void 0;
            if (e) for (var s = n.length - 1; 0 <= s; s--) {
              var a = n[s], l = a.instance, c = a.currentTarget;
              if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
              z_(i, a, c), o = l;
            }
            else for (s = 0; s < n.length; s++) {
              if (a = n[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
              z_(i, a, c), o = l;
            }
          }
        }
        if (Mc) throw r = wf, Mc = false, wf = null, r;
      }
      function Me(r, e) {
        var t = e[Ef];
        t === void 0 && (t = e[Ef] = /* @__PURE__ */ new Set());
        var n = r + "__bubble";
        t.has(n) || (p0(e, r, 2, false), t.add(n));
      }
      function wd(r, e, t) {
        var n = 0;
        e && (n |= 4), p0(t, r, n, e);
      }
      var Ll = "_reactListening" + Math.random().toString(36).slice(2);
      function qa(r) {
        if (!r[Ll]) {
          r[Ll] = true, bm.forEach(function(t) {
            t !== "selectionchange" && (ub.has(t) || wd(t, false, r), wd(t, true, r));
          });
          var e = r.nodeType === 9 ? r : r.ownerDocument;
          e === null || e[Ll] || (e[Ll] = true, wd("selectionchange", false, e));
        }
      }
      function p0(r, e, t, n) {
        switch (Jm(e)) {
          case 1:
            var i = Cv;
            break;
          case 4:
            i = kv;
            break;
          default:
            i = Gh;
        }
        t = i.bind(null, e, t, r), i = void 0, !gf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = true), n ? i !== void 0 ? r.addEventListener(e, t, {
          capture: true,
          passive: i
        }) : r.addEventListener(e, t, true) : i !== void 0 ? r.addEventListener(e, t, {
          passive: i
        }) : r.addEventListener(e, t, false);
      }
      function md(r, e, t, n, i) {
        var o = n;
        if (!(e & 1) && !(e & 2) && n !== null) e: for (; ; ) {
          if (n === null) return;
          var s = n.tag;
          if (s === 3 || s === 4) {
            var a = n.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4) for (s = n.return; s !== null; ) {
              var l = s.tag;
              if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
              s = s.return;
            }
            for (; a !== null; ) {
              if (s = so(a), s === null) return;
              if (l = s.tag, l === 5 || l === 6) {
                n = o = s;
                continue e;
              }
              a = a.parentNode;
            }
          }
          n = n.return;
        }
        Om(function() {
          var c = o, u = Uh(t), h = [];
          e: {
            var d = f0.get(r);
            if (d !== void 0) {
              var p = Xh, m = r;
              switch (r) {
                case "keypress":
                  if (hc(t) === 0) break e;
                case "keydown":
                case "keyup":
                  p = Hv;
                  break;
                case "focusin":
                  m = "focus", p = dd;
                  break;
                case "focusout":
                  m = "blur", p = dd;
                  break;
                case "beforeblur":
                case "afterblur":
                  p = dd;
                  break;
                case "click":
                  if (t.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  p = S_;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  p = Pv;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  p = $v;
                  break;
                case l0:
                case c0:
                case u0:
                  p = jv;
                  break;
                case d0:
                  p = Wv;
                  break;
                case "scroll":
                  p = Rv;
                  break;
                case "wheel":
                  p = Yv;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  p = Iv;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  p = C_;
              }
              var g = (e & 4) !== 0, b = !g && r === "scroll", y = g ? d !== null ? d + "Capture" : null : d;
              g = [];
              for (var w = c, v; w !== null; ) {
                v = w;
                var S = v.stateNode;
                if (v.tag === 5 && S !== null && (v = S, y !== null && (S = $a(w, y), S != null && g.push(Ka(w, S, v)))), b) break;
                w = w.return;
              }
              0 < g.length && (d = new p(d, m, null, t, u), h.push({
                event: d,
                listeners: g
              }));
            }
          }
          if (!(e & 7)) {
            e: {
              if (d = r === "mouseover" || r === "pointerover", p = r === "mouseout" || r === "pointerout", d && t !== pf && (m = t.relatedTarget || t.fromElement) && (so(m) || m[Qn])) break e;
              if ((p || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (m = t.relatedTarget || t.toElement, p = c, m = m ? so(m) : null, m !== null && (b = No(m), m !== b || m.tag !== 5 && m.tag !== 6) && (m = null)) : (p = null, m = c), p !== m)) {
                if (g = S_, S = "onMouseLeave", y = "onMouseEnter", w = "mouse", (r === "pointerout" || r === "pointerover") && (g = C_, S = "onPointerLeave", y = "onPointerEnter", w = "pointer"), b = p == null ? d : ns(p), v = m == null ? d : ns(m), d = new g(S, w + "leave", p, t, u), d.target = b, d.relatedTarget = v, S = null, so(u) === c && (g = new g(y, w + "enter", m, t, u), g.target = v, g.relatedTarget = b, S = g), b = S, p && m) t: {
                  for (g = p, y = m, w = 0, v = g; v; v = Bo(v)) w++;
                  for (v = 0, S = y; S; S = Bo(S)) v++;
                  for (; 0 < w - v; ) g = Bo(g), w--;
                  for (; 0 < v - w; ) y = Bo(y), v--;
                  for (; w--; ) {
                    if (g === y || y !== null && g === y.alternate) break t;
                    g = Bo(g), y = Bo(y);
                  }
                  g = null;
                }
                else g = null;
                p !== null && N_(h, d, p, g, false), m !== null && b !== null && N_(h, b, m, g, true);
              }
            }
            e: {
              if (d = c ? ns(c) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file") var C = eb;
              else if (E_(d)) if (n0) C = ib;
              else {
                C = rb;
                var E = tb;
              }
              else (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = nb);
              if (C && (C = C(r, c))) {
                r0(h, C, t, u);
                break e;
              }
              E && E(r, d, c), r === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && cf(d, "number", d.value);
            }
            switch (E = c ? ns(c) : window, r) {
              case "focusin":
                (E_(E) || E.contentEditable === "true") && (ts = E, bf = c, Sa = null);
                break;
              case "focusout":
                Sa = bf = ts = null;
                break;
              case "mousedown":
                Sf = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Sf = false, M_(h, t, u);
                break;
              case "selectionchange":
                if (ab) break;
              case "keydown":
              case "keyup":
                M_(h, t, u);
            }
            var k;
            if (Kh) e: {
              switch (r) {
                case "compositionstart":
                  var T = "onCompositionStart";
                  break e;
                case "compositionend":
                  T = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  T = "onCompositionUpdate";
                  break e;
              }
              T = void 0;
            }
            else es ? e0(r, t) && (T = "onCompositionEnd") : r === "keydown" && t.keyCode === 229 && (T = "onCompositionStart");
            T && (Zm && t.locale !== "ko" && (es || T !== "onCompositionStart" ? T === "onCompositionEnd" && es && (k = Qm()) : (yi = u, Yh = "value" in yi ? yi.value : yi.textContent, es = true)), E = Oc(c, T), 0 < E.length && (T = new x_(T, r, null, t, u), h.push({
              event: T,
              listeners: E
            }), k ? T.data = k : (k = t0(t), k !== null && (T.data = k)))), (k = qv ? Kv(r, t) : Jv(r, t)) && (c = Oc(c, "onBeforeInput"), 0 < c.length && (u = new x_("onBeforeInput", "beforeinput", null, t, u), h.push({
              event: u,
              listeners: c
            }), u.data = k));
          }
          h0(h, e);
        });
      }
      function Ka(r, e, t) {
        return {
          instance: r,
          listener: e,
          currentTarget: t
        };
      }
      function Oc(r, e) {
        for (var t = e + "Capture", n = []; r !== null; ) {
          var i = r, o = i.stateNode;
          i.tag === 5 && o !== null && (i = o, o = $a(r, t), o != null && n.unshift(Ka(r, o, i)), o = $a(r, e), o != null && n.push(Ka(r, o, i))), r = r.return;
        }
        return n;
      }
      function Bo(r) {
        if (r === null) return null;
        do
          r = r.return;
        while (r && r.tag !== 5);
        return r || null;
      }
      function N_(r, e, t, n, i) {
        for (var o = e._reactName, s = []; t !== null && t !== n; ) {
          var a = t, l = a.alternate, c = a.stateNode;
          if (l !== null && l === n) break;
          a.tag === 5 && c !== null && (a = c, i ? (l = $a(t, o), l != null && s.unshift(Ka(t, l, a))) : i || (l = $a(t, o), l != null && s.push(Ka(t, l, a)))), t = t.return;
        }
        s.length !== 0 && r.push({
          event: e,
          listeners: s
        });
      }
      var db = /\r\n?/g, fb = /\u0000|\uFFFD/g;
      function L_(r) {
        return (typeof r == "string" ? r : "" + r).replace(db, `
`).replace(fb, "");
      }
      function Ol(r, e, t) {
        if (e = L_(e), L_(r) !== e && t) throw Error(D(425));
      }
      function Dc() {
      }
      var xf = null, Cf = null;
      function kf(r, e) {
        return r === "textarea" || r === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
      }
      var Rf = typeof setTimeout == "function" ? setTimeout : void 0, hb = typeof clearTimeout == "function" ? clearTimeout : void 0, O_ = typeof Promise == "function" ? Promise : void 0, pb = typeof queueMicrotask == "function" ? queueMicrotask : typeof O_ < "u" ? function(r) {
        return O_.resolve(null).then(r).catch(_b);
      } : Rf;
      function _b(r) {
        setTimeout(function() {
          throw r;
        });
      }
      function yd(r, e) {
        var t = e, n = 0;
        do {
          var i = t.nextSibling;
          if (r.removeChild(t), i && i.nodeType === 8) if (t = i.data, t === "/$") {
            if (n === 0) {
              r.removeChild(i), Ga(e);
              return;
            }
            n--;
          } else t !== "$" && t !== "$?" && t !== "$!" || n++;
          t = i;
        } while (t);
        Ga(e);
      }
      function Ti(r) {
        for (; r != null; r = r.nextSibling) {
          var e = r.nodeType;
          if (e === 1 || e === 3) break;
          if (e === 8) {
            if (e = r.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null;
          }
        }
        return r;
      }
      function D_(r) {
        r = r.previousSibling;
        for (var e = 0; r; ) {
          if (r.nodeType === 8) {
            var t = r.data;
            if (t === "$" || t === "$!" || t === "$?") {
              if (e === 0) return r;
              e--;
            } else t === "/$" && e++;
          }
          r = r.previousSibling;
        }
        return null;
      }
      var $s = Math.random().toString(36).slice(2), xn = "__reactFiber$" + $s, Ja = "__reactProps$" + $s, Qn = "__reactContainer$" + $s, Ef = "__reactEvents$" + $s, gb = "__reactListeners$" + $s, wb = "__reactHandles$" + $s;
      function so(r) {
        var e = r[xn];
        if (e) return e;
        for (var t = r.parentNode; t; ) {
          if (e = t[Qn] || t[xn]) {
            if (t = e.alternate, e.child !== null || t !== null && t.child !== null) for (r = D_(r); r !== null; ) {
              if (t = r[xn]) return t;
              r = D_(r);
            }
            return e;
          }
          r = t, t = r.parentNode;
        }
        return null;
      }
      function vl(r) {
        return r = r[xn] || r[Qn], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
      }
      function ns(r) {
        if (r.tag === 5 || r.tag === 6) return r.stateNode;
        throw Error(D(33));
      }
      function Tu(r) {
        return r[Ja] || null;
      }
      var Pf = [], is = -1;
      function Wi(r) {
        return {
          current: r
        };
      }
      function Ie(r) {
        0 > is || (r.current = Pf[is], Pf[is] = null, is--);
      }
      function je(r, e) {
        is++, Pf[is] = r.current, r.current = e;
      }
      var Di = {}, Xt = Wi(Di), hr = Wi(false), xo = Di;
      function Es(r, e) {
        var t = r.type.contextTypes;
        if (!t) return Di;
        var n = r.stateNode;
        if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
        var i = {}, o;
        for (o in t) i[o] = e[o];
        return n && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = e, r.__reactInternalMemoizedMaskedChildContext = i), i;
      }
      function pr(r) {
        return r = r.childContextTypes, r != null;
      }
      function Fc() {
        Ie(hr), Ie(Xt);
      }
      function F_(r, e, t) {
        if (Xt.current !== Di) throw Error(D(168));
        je(Xt, e), je(hr, t);
      }
      function _0(r, e, t) {
        var n = r.stateNode;
        if (e = e.childContextTypes, typeof n.getChildContext != "function") return t;
        n = n.getChildContext();
        for (var i in n) if (!(i in e)) throw Error(D(108, tv(r) || "Unknown", i));
        return Ge({}, t, n);
      }
      function Hc(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Di, xo = Xt.current, je(Xt, r), je(hr, hr.current), true;
      }
      function H_(r, e, t) {
        var n = r.stateNode;
        if (!n) throw Error(D(169));
        t ? (r = _0(r, e, xo), n.__reactInternalMemoizedMergedChildContext = r, Ie(hr), Ie(Xt), je(Xt, r)) : Ie(hr), je(hr, t);
      }
      var Un = null, Au = false, vd = false;
      function g0(r) {
        Un === null ? Un = [
          r
        ] : Un.push(r);
      }
      function mb(r) {
        Au = true, g0(r);
      }
      function Gi() {
        if (!vd && Un !== null) {
          vd = true;
          var r = 0, e = ke;
          try {
            var t = Un;
            for (ke = 1; r < t.length; r++) {
              var n = t[r];
              do
                n = n(true);
              while (n !== null);
            }
            Un = null, Au = false;
          } catch (i) {
            throw Un !== null && (Un = Un.slice(r + 1)), Bm($h, Gi), i;
          } finally {
            ke = e, vd = false;
          }
        }
        return null;
      }
      var os = [], ss = 0, Bc = null, Uc = 0, Vr = [], Wr = 0, Co = null, Gn = 1, Yn = "";
      function to(r, e) {
        os[ss++] = Uc, os[ss++] = Bc, Bc = r, Uc = e;
      }
      function w0(r, e, t) {
        Vr[Wr++] = Gn, Vr[Wr++] = Yn, Vr[Wr++] = Co, Co = r;
        var n = Gn;
        r = Yn;
        var i = 32 - fn(n) - 1;
        n &= ~(1 << i), t += 1;
        var o = 32 - fn(e) + i;
        if (30 < o) {
          var s = i - i % 5;
          o = (n & (1 << s) - 1).toString(32), n >>= s, i -= s, Gn = 1 << 32 - fn(e) + i | t << i | n, Yn = o + r;
        } else Gn = 1 << o | t << i | n, Yn = r;
      }
      function Qh(r) {
        r.return !== null && (to(r, 1), w0(r, 1, 0));
      }
      function Zh(r) {
        for (; r === Bc; ) Bc = os[--ss], os[ss] = null, Uc = os[--ss], os[ss] = null;
        for (; r === Co; ) Co = Vr[--Wr], Vr[Wr] = null, Yn = Vr[--Wr], Vr[Wr] = null, Gn = Vr[--Wr], Vr[Wr] = null;
      }
      var zr = null, Mr = null, De = false, dn = null;
      function m0(r, e) {
        var t = Xr(5, null, null, 0);
        t.elementType = "DELETED", t.stateNode = e, t.return = r, e = r.deletions, e === null ? (r.deletions = [
          t
        ], r.flags |= 16) : e.push(t);
      }
      function B_(r, e) {
        switch (r.tag) {
          case 5:
            var t = r.type;
            return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (r.stateNode = e, zr = r, Mr = Ti(e.firstChild), true) : false;
          case 6:
            return e = r.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (r.stateNode = e, zr = r, Mr = null, true) : false;
          case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Co !== null ? {
              id: Gn,
              overflow: Yn
            } : null, r.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824
            }, t = Xr(18, null, null, 0), t.stateNode = e, t.return = r, r.child = t, zr = r, Mr = null, true) : false;
          default:
            return false;
        }
      }
      function Tf(r) {
        return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
      }
      function Af(r) {
        if (De) {
          var e = Mr;
          if (e) {
            var t = e;
            if (!B_(r, e)) {
              if (Tf(r)) throw Error(D(418));
              e = Ti(t.nextSibling);
              var n = zr;
              e && B_(r, e) ? m0(n, t) : (r.flags = r.flags & -4097 | 2, De = false, zr = r);
            }
          } else {
            if (Tf(r)) throw Error(D(418));
            r.flags = r.flags & -4097 | 2, De = false, zr = r;
          }
        }
      }
      function U_(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
        zr = r;
      }
      function Dl(r) {
        if (r !== zr) return false;
        if (!De) return U_(r), De = true, false;
        var e;
        if ((e = r.tag !== 3) && !(e = r.tag !== 5) && (e = r.type, e = e !== "head" && e !== "body" && !kf(r.type, r.memoizedProps)), e && (e = Mr)) {
          if (Tf(r)) throw y0(), Error(D(418));
          for (; e; ) m0(r, e), e = Ti(e.nextSibling);
        }
        if (U_(r), r.tag === 13) {
          if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(D(317));
          e: {
            for (r = r.nextSibling, e = 0; r; ) {
              if (r.nodeType === 8) {
                var t = r.data;
                if (t === "/$") {
                  if (e === 0) {
                    Mr = Ti(r.nextSibling);
                    break e;
                  }
                  e--;
                } else t !== "$" && t !== "$!" && t !== "$?" || e++;
              }
              r = r.nextSibling;
            }
            Mr = null;
          }
        } else Mr = zr ? Ti(r.stateNode.nextSibling) : null;
        return true;
      }
      function y0() {
        for (var r = Mr; r; ) r = Ti(r.nextSibling);
      }
      function Ps() {
        Mr = zr = null, De = false;
      }
      function ep(r) {
        dn === null ? dn = [
          r
        ] : dn.push(r);
      }
      var yb = si.ReactCurrentBatchConfig;
      function ea(r, e, t) {
        if (r = t.ref, r !== null && typeof r != "function" && typeof r != "object") {
          if (t._owner) {
            if (t = t._owner, t) {
              if (t.tag !== 1) throw Error(D(309));
              var n = t.stateNode;
            }
            if (!n) throw Error(D(147, r));
            var i = n, o = "" + r;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
              var a = i.refs;
              s === null ? delete a[o] : a[o] = s;
            }, e._stringRef = o, e);
          }
          if (typeof r != "string") throw Error(D(284));
          if (!t._owner) throw Error(D(290, r));
        }
        return r;
      }
      function Fl(r, e) {
        throw r = Object.prototype.toString.call(e), Error(D(31, r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r));
      }
      function $_(r) {
        var e = r._init;
        return e(r._payload);
      }
      function v0(r) {
        function e(y, w) {
          if (r) {
            var v = y.deletions;
            v === null ? (y.deletions = [
              w
            ], y.flags |= 16) : v.push(w);
          }
        }
        function t(y, w) {
          if (!r) return null;
          for (; w !== null; ) e(y, w), w = w.sibling;
          return null;
        }
        function n(y, w) {
          for (y = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? y.set(w.key, w) : y.set(w.index, w), w = w.sibling;
          return y;
        }
        function i(y, w) {
          return y = Ii(y, w), y.index = 0, y.sibling = null, y;
        }
        function o(y, w, v) {
          return y.index = v, r ? (v = y.alternate, v !== null ? (v = v.index, v < w ? (y.flags |= 2, w) : v) : (y.flags |= 2, w)) : (y.flags |= 1048576, w);
        }
        function s(y) {
          return r && y.alternate === null && (y.flags |= 2), y;
        }
        function a(y, w, v, S) {
          return w === null || w.tag !== 6 ? (w = Ed(v, y.mode, S), w.return = y, w) : (w = i(w, v), w.return = y, w);
        }
        function l(y, w, v, S) {
          var C = v.type;
          return C === Zo ? u(y, w, v.props.children, S, v.key) : w !== null && (w.elementType === C || typeof C == "object" && C !== null && C.$$typeof === pi && $_(C) === w.type) ? (S = i(w, v.props), S.ref = ea(y, w, v), S.return = y, S) : (S = vc(v.type, v.key, v.props, null, y.mode, S), S.ref = ea(y, w, v), S.return = y, S);
        }
        function c(y, w, v, S) {
          return w === null || w.tag !== 4 || w.stateNode.containerInfo !== v.containerInfo || w.stateNode.implementation !== v.implementation ? (w = Pd(v, y.mode, S), w.return = y, w) : (w = i(w, v.children || []), w.return = y, w);
        }
        function u(y, w, v, S, C) {
          return w === null || w.tag !== 7 ? (w = po(v, y.mode, S, C), w.return = y, w) : (w = i(w, v), w.return = y, w);
        }
        function h(y, w, v) {
          if (typeof w == "string" && w !== "" || typeof w == "number") return w = Ed("" + w, y.mode, v), w.return = y, w;
          if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
              case Pl:
                return v = vc(w.type, w.key, w.props, null, y.mode, v), v.ref = ea(y, null, w), v.return = y, v;
              case Qo:
                return w = Pd(w, y.mode, v), w.return = y, w;
              case pi:
                var S = w._init;
                return h(y, S(w._payload), v);
            }
            if (la(w) || qs(w)) return w = po(w, y.mode, v, null), w.return = y, w;
            Fl(y, w);
          }
          return null;
        }
        function d(y, w, v, S) {
          var C = w !== null ? w.key : null;
          if (typeof v == "string" && v !== "" || typeof v == "number") return C !== null ? null : a(y, w, "" + v, S);
          if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
              case Pl:
                return v.key === C ? l(y, w, v, S) : null;
              case Qo:
                return v.key === C ? c(y, w, v, S) : null;
              case pi:
                return C = v._init, d(y, w, C(v._payload), S);
            }
            if (la(v) || qs(v)) return C !== null ? null : u(y, w, v, S, null);
            Fl(y, v);
          }
          return null;
        }
        function p(y, w, v, S, C) {
          if (typeof S == "string" && S !== "" || typeof S == "number") return y = y.get(v) || null, a(w, y, "" + S, C);
          if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
              case Pl:
                return y = y.get(S.key === null ? v : S.key) || null, l(w, y, S, C);
              case Qo:
                return y = y.get(S.key === null ? v : S.key) || null, c(w, y, S, C);
              case pi:
                var E = S._init;
                return p(y, w, v, E(S._payload), C);
            }
            if (la(S) || qs(S)) return y = y.get(v) || null, u(w, y, S, C, null);
            Fl(w, S);
          }
          return null;
        }
        function m(y, w, v, S) {
          for (var C = null, E = null, k = w, T = w = 0, I = null; k !== null && T < v.length; T++) {
            k.index > T ? (I = k, k = null) : I = k.sibling;
            var M = d(y, k, v[T], S);
            if (M === null) {
              k === null && (k = I);
              break;
            }
            r && k && M.alternate === null && e(y, k), w = o(M, w, T), E === null ? C = M : E.sibling = M, E = M, k = I;
          }
          if (T === v.length) return t(y, k), De && to(y, T), C;
          if (k === null) {
            for (; T < v.length; T++) k = h(y, v[T], S), k !== null && (w = o(k, w, T), E === null ? C = k : E.sibling = k, E = k);
            return De && to(y, T), C;
          }
          for (k = n(y, k); T < v.length; T++) I = p(k, y, T, v[T], S), I !== null && (r && I.alternate !== null && k.delete(I.key === null ? T : I.key), w = o(I, w, T), E === null ? C = I : E.sibling = I, E = I);
          return r && k.forEach(function(H) {
            return e(y, H);
          }), De && to(y, T), C;
        }
        function g(y, w, v, S) {
          var C = qs(v);
          if (typeof C != "function") throw Error(D(150));
          if (v = C.call(v), v == null) throw Error(D(151));
          for (var E = C = null, k = w, T = w = 0, I = null, M = v.next(); k !== null && !M.done; T++, M = v.next()) {
            k.index > T ? (I = k, k = null) : I = k.sibling;
            var H = d(y, k, M.value, S);
            if (H === null) {
              k === null && (k = I);
              break;
            }
            r && k && H.alternate === null && e(y, k), w = o(H, w, T), E === null ? C = H : E.sibling = H, E = H, k = I;
          }
          if (M.done) return t(y, k), De && to(y, T), C;
          if (k === null) {
            for (; !M.done; T++, M = v.next()) M = h(y, M.value, S), M !== null && (w = o(M, w, T), E === null ? C = M : E.sibling = M, E = M);
            return De && to(y, T), C;
          }
          for (k = n(y, k); !M.done; T++, M = v.next()) M = p(k, y, T, M.value, S), M !== null && (r && M.alternate !== null && k.delete(M.key === null ? T : M.key), w = o(M, w, T), E === null ? C = M : E.sibling = M, E = M);
          return r && k.forEach(function(O) {
            return e(y, O);
          }), De && to(y, T), C;
        }
        function b(y, w, v, S) {
          if (typeof v == "object" && v !== null && v.type === Zo && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
              case Pl:
                e: {
                  for (var C = v.key, E = w; E !== null; ) {
                    if (E.key === C) {
                      if (C = v.type, C === Zo) {
                        if (E.tag === 7) {
                          t(y, E.sibling), w = i(E, v.props.children), w.return = y, y = w;
                          break e;
                        }
                      } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === pi && $_(C) === E.type) {
                        t(y, E.sibling), w = i(E, v.props), w.ref = ea(y, E, v), w.return = y, y = w;
                        break e;
                      }
                      t(y, E);
                      break;
                    } else e(y, E);
                    E = E.sibling;
                  }
                  v.type === Zo ? (w = po(v.props.children, y.mode, S, v.key), w.return = y, y = w) : (S = vc(v.type, v.key, v.props, null, y.mode, S), S.ref = ea(y, w, v), S.return = y, y = S);
                }
                return s(y);
              case Qo:
                e: {
                  for (E = v.key; w !== null; ) {
                    if (w.key === E) if (w.tag === 4 && w.stateNode.containerInfo === v.containerInfo && w.stateNode.implementation === v.implementation) {
                      t(y, w.sibling), w = i(w, v.children || []), w.return = y, y = w;
                      break e;
                    } else {
                      t(y, w);
                      break;
                    }
                    else e(y, w);
                    w = w.sibling;
                  }
                  w = Pd(v, y.mode, S), w.return = y, y = w;
                }
                return s(y);
              case pi:
                return E = v._init, b(y, w, E(v._payload), S);
            }
            if (la(v)) return m(y, w, v, S);
            if (qs(v)) return g(y, w, v, S);
            Fl(y, v);
          }
          return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, w !== null && w.tag === 6 ? (t(y, w.sibling), w = i(w, v), w.return = y, y = w) : (t(y, w), w = Ed(v, y.mode, S), w.return = y, y = w), s(y)) : t(y, w);
        }
        return b;
      }
      var Ts = v0(true), b0 = v0(false), $c = Wi(null), Vc = null, as = null, tp = null;
      function rp() {
        tp = as = Vc = null;
      }
      function np(r) {
        var e = $c.current;
        Ie($c), r._currentValue = e;
      }
      function jf(r, e, t) {
        for (; r !== null; ) {
          var n = r.alternate;
          if ((r.childLanes & e) !== e ? (r.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), r === t) break;
          r = r.return;
        }
      }
      function ms(r, e) {
        Vc = r, tp = as = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & e && (fr = true), r.firstContext = null);
      }
      function Qr(r) {
        var e = r._currentValue;
        if (tp !== r) if (r = {
          context: r,
          memoizedValue: e,
          next: null
        }, as === null) {
          if (Vc === null) throw Error(D(308));
          as = r, Vc.dependencies = {
            lanes: 0,
            firstContext: r
          };
        } else as = as.next = r;
        return e;
      }
      var ao = null;
      function ip(r) {
        ao === null ? ao = [
          r
        ] : ao.push(r);
      }
      function S0(r, e, t, n) {
        var i = e.interleaved;
        return i === null ? (t.next = t, ip(e)) : (t.next = i.next, i.next = t), e.interleaved = t, Zn(r, n);
      }
      function Zn(r, e) {
        r.lanes |= e;
        var t = r.alternate;
        for (t !== null && (t.lanes |= e), t = r, r = r.return; r !== null; ) r.childLanes |= e, t = r.alternate, t !== null && (t.childLanes |= e), t = r, r = r.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      var _i = false;
      function op(r) {
        r.updateQueue = {
          baseState: r.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        };
      }
      function x0(r, e) {
        r = r.updateQueue, e.updateQueue === r && (e.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          effects: r.effects
        });
      }
      function qn(r, e) {
        return {
          eventTime: r,
          lane: e,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Ai(r, e, t) {
        var n = r.updateQueue;
        if (n === null) return null;
        if (n = n.shared, ve & 2) {
          var i = n.pending;
          return i === null ? e.next = e : (e.next = i.next, i.next = e), n.pending = e, Zn(r, t);
        }
        return i = n.interleaved, i === null ? (e.next = e, ip(n)) : (e.next = i.next, i.next = e), n.interleaved = e, Zn(r, t);
      }
      function pc(r, e, t) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
          var n = e.lanes;
          n &= r.pendingLanes, t |= n, e.lanes = t, Vh(r, t);
        }
      }
      function V_(r, e) {
        var t = r.updateQueue, n = r.alternate;
        if (n !== null && (n = n.updateQueue, t === n)) {
          var i = null, o = null;
          if (t = t.firstBaseUpdate, t !== null) {
            do {
              var s = {
                eventTime: t.eventTime,
                lane: t.lane,
                tag: t.tag,
                payload: t.payload,
                callback: t.callback,
                next: null
              };
              o === null ? i = o = s : o = o.next = s, t = t.next;
            } while (t !== null);
            o === null ? i = o = e : o = o.next = e;
          } else i = o = e;
          t = {
            baseState: n.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: n.shared,
            effects: n.effects
          }, r.updateQueue = t;
          return;
        }
        r = t.lastBaseUpdate, r === null ? t.firstBaseUpdate = e : r.next = e, t.lastBaseUpdate = e;
      }
      function Wc(r, e, t, n) {
        var i = r.updateQueue;
        _i = false;
        var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
        if (a !== null) {
          i.shared.pending = null;
          var l = a, c = l.next;
          l.next = null, s === null ? o = c : s.next = c, s = l;
          var u = r.alternate;
          u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== s && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l));
        }
        if (o !== null) {
          var h = i.baseState;
          s = 0, u = c = l = null, a = o;
          do {
            var d = a.lane, p = a.eventTime;
            if ((n & d) === d) {
              u !== null && (u = u.next = {
                eventTime: p,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
              });
              e: {
                var m = r, g = a;
                switch (d = e, p = t, g.tag) {
                  case 1:
                    if (m = g.payload, typeof m == "function") {
                      h = m.call(p, h, d);
                      break e;
                    }
                    h = m;
                    break e;
                  case 3:
                    m.flags = m.flags & -65537 | 128;
                  case 0:
                    if (m = g.payload, d = typeof m == "function" ? m.call(p, h, d) : m, d == null) break e;
                    h = Ge({}, h, d);
                    break e;
                  case 2:
                    _i = true;
                }
              }
              a.callback !== null && a.lane !== 0 && (r.flags |= 64, d = i.effects, d === null ? i.effects = [
                a
              ] : d.push(a));
            } else p = {
              eventTime: p,
              lane: d,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null
            }, u === null ? (c = u = p, l = h) : u = u.next = p, s |= d;
            if (a = a.next, a === null) {
              if (a = i.shared.pending, a === null) break;
              d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
            }
          } while (true);
          if (u === null && (l = h), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = u, e = i.shared.interleaved, e !== null) {
            i = e;
            do
              s |= i.lane, i = i.next;
            while (i !== e);
          } else o === null && (i.shared.lanes = 0);
          Ro |= s, r.lanes = s, r.memoizedState = h;
        }
      }
      function W_(r, e, t) {
        if (r = e.effects, e.effects = null, r !== null) for (e = 0; e < r.length; e++) {
          var n = r[e], i = n.callback;
          if (i !== null) {
            if (n.callback = null, n = t, typeof i != "function") throw Error(D(191, i));
            i.call(n);
          }
        }
      }
      var bl = {}, An = Wi(bl), Qa = Wi(bl), Za = Wi(bl);
      function lo(r) {
        if (r === bl) throw Error(D(174));
        return r;
      }
      function sp(r, e) {
        switch (je(Za, e), je(Qa, r), je(An, bl), r = e.nodeType, r) {
          case 9:
          case 11:
            e = (e = e.documentElement) ? e.namespaceURI : df(null, "");
            break;
          default:
            r = r === 8 ? e.parentNode : e, e = r.namespaceURI || null, r = r.tagName, e = df(e, r);
        }
        Ie(An), je(An, e);
      }
      function As() {
        Ie(An), Ie(Qa), Ie(Za);
      }
      function C0(r) {
        lo(Za.current);
        var e = lo(An.current), t = df(e, r.type);
        e !== t && (je(Qa, r), je(An, t));
      }
      function ap(r) {
        Qa.current === r && (Ie(An), Ie(Qa));
      }
      var Ue = Wi(0);
      function Gc(r) {
        for (var e = r; e !== null; ) {
          if (e.tag === 13) {
            var t = e.memoizedState;
            if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return e;
          } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e;
          } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === r) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === r) return null;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        return null;
      }
      var bd = [];
      function lp() {
        for (var r = 0; r < bd.length; r++) bd[r]._workInProgressVersionPrimary = null;
        bd.length = 0;
      }
      var _c = si.ReactCurrentDispatcher, Sd = si.ReactCurrentBatchConfig, ko = 0, We = null, _t = null, xt = null, Yc = false, xa = false, el = 0, vb = 0;
      function Dt() {
        throw Error(D(321));
      }
      function cp(r, e) {
        if (e === null) return false;
        for (var t = 0; t < e.length && t < r.length; t++) if (!pn(r[t], e[t])) return false;
        return true;
      }
      function up(r, e, t, n, i, o) {
        if (ko = o, We = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, _c.current = r === null || r.memoizedState === null ? Cb : kb, r = t(n, i), xa) {
          o = 0;
          do {
            if (xa = false, el = 0, 25 <= o) throw Error(D(301));
            o += 1, xt = _t = null, e.updateQueue = null, _c.current = Rb, r = t(n, i);
          } while (xa);
        }
        if (_c.current = Xc, e = _t !== null && _t.next !== null, ko = 0, xt = _t = We = null, Yc = false, e) throw Error(D(300));
        return r;
      }
      function dp() {
        var r = el !== 0;
        return el = 0, r;
      }
      function yn() {
        var r = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return xt === null ? We.memoizedState = xt = r : xt = xt.next = r, xt;
      }
      function Zr() {
        if (_t === null) {
          var r = We.alternate;
          r = r !== null ? r.memoizedState : null;
        } else r = _t.next;
        var e = xt === null ? We.memoizedState : xt.next;
        if (e !== null) xt = e, _t = r;
        else {
          if (r === null) throw Error(D(310));
          _t = r, r = {
            memoizedState: _t.memoizedState,
            baseState: _t.baseState,
            baseQueue: _t.baseQueue,
            queue: _t.queue,
            next: null
          }, xt === null ? We.memoizedState = xt = r : xt = xt.next = r;
        }
        return xt;
      }
      function tl(r, e) {
        return typeof e == "function" ? e(r) : e;
      }
      function xd(r) {
        var e = Zr(), t = e.queue;
        if (t === null) throw Error(D(311));
        t.lastRenderedReducer = r;
        var n = _t, i = n.baseQueue, o = t.pending;
        if (o !== null) {
          if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s;
          }
          n.baseQueue = i = o, t.pending = null;
        }
        if (i !== null) {
          o = i.next, n = n.baseState;
          var a = s = null, l = null, c = o;
          do {
            var u = c.lane;
            if ((ko & u) === u) l !== null && (l = l.next = {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null
            }), n = c.hasEagerState ? c.eagerState : r(n, c.action);
            else {
              var h = {
                lane: u,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
              };
              l === null ? (a = l = h, s = n) : l = l.next = h, We.lanes |= u, Ro |= u;
            }
            c = c.next;
          } while (c !== null && c !== o);
          l === null ? s = n : l.next = a, pn(n, e.memoizedState) || (fr = true), e.memoizedState = n, e.baseState = s, e.baseQueue = l, t.lastRenderedState = n;
        }
        if (r = t.interleaved, r !== null) {
          i = r;
          do
            o = i.lane, We.lanes |= o, Ro |= o, i = i.next;
          while (i !== r);
        } else i === null && (t.lanes = 0);
        return [
          e.memoizedState,
          t.dispatch
        ];
      }
      function Cd(r) {
        var e = Zr(), t = e.queue;
        if (t === null) throw Error(D(311));
        t.lastRenderedReducer = r;
        var n = t.dispatch, i = t.pending, o = e.memoizedState;
        if (i !== null) {
          t.pending = null;
          var s = i = i.next;
          do
            o = r(o, s.action), s = s.next;
          while (s !== i);
          pn(o, e.memoizedState) || (fr = true), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), t.lastRenderedState = o;
        }
        return [
          o,
          n
        ];
      }
      function k0() {
      }
      function R0(r, e) {
        var t = We, n = Zr(), i = e(), o = !pn(n.memoizedState, i);
        if (o && (n.memoizedState = i, fr = true), n = n.queue, fp(T0.bind(null, t, n, r), [
          r
        ]), n.getSnapshot !== e || o || xt !== null && xt.memoizedState.tag & 1) {
          if (t.flags |= 2048, rl(9, P0.bind(null, t, n, i, e), void 0, null), Ct === null) throw Error(D(349));
          ko & 30 || E0(t, e, i);
        }
        return i;
      }
      function E0(r, e, t) {
        r.flags |= 16384, r = {
          getSnapshot: e,
          value: t
        }, e = We.updateQueue, e === null ? (e = {
          lastEffect: null,
          stores: null
        }, We.updateQueue = e, e.stores = [
          r
        ]) : (t = e.stores, t === null ? e.stores = [
          r
        ] : t.push(r));
      }
      function P0(r, e, t, n) {
        e.value = t, e.getSnapshot = n, A0(e) && j0(r);
      }
      function T0(r, e, t) {
        return t(function() {
          A0(e) && j0(r);
        });
      }
      function A0(r) {
        var e = r.getSnapshot;
        r = r.value;
        try {
          var t = e();
          return !pn(r, t);
        } catch {
          return true;
        }
      }
      function j0(r) {
        var e = Zn(r, 1);
        e !== null && hn(e, r, 1, -1);
      }
      function G_(r) {
        var e = yn();
        return typeof r == "function" && (r = r()), e.memoizedState = e.baseState = r, r = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: tl,
          lastRenderedState: r
        }, e.queue = r, r = r.dispatch = xb.bind(null, We, r), [
          e.memoizedState,
          r
        ];
      }
      function rl(r, e, t, n) {
        return r = {
          tag: r,
          create: e,
          destroy: t,
          deps: n,
          next: null
        }, e = We.updateQueue, e === null ? (e = {
          lastEffect: null,
          stores: null
        }, We.updateQueue = e, e.lastEffect = r.next = r) : (t = e.lastEffect, t === null ? e.lastEffect = r.next = r : (n = t.next, t.next = r, r.next = n, e.lastEffect = r)), r;
      }
      function M0() {
        return Zr().memoizedState;
      }
      function gc(r, e, t, n) {
        var i = yn();
        We.flags |= r, i.memoizedState = rl(1 | e, t, void 0, n === void 0 ? null : n);
      }
      function ju(r, e, t, n) {
        var i = Zr();
        n = n === void 0 ? null : n;
        var o = void 0;
        if (_t !== null) {
          var s = _t.memoizedState;
          if (o = s.destroy, n !== null && cp(n, s.deps)) {
            i.memoizedState = rl(e, t, o, n);
            return;
          }
        }
        We.flags |= r, i.memoizedState = rl(1 | e, t, o, n);
      }
      function Y_(r, e) {
        return gc(8390656, 8, r, e);
      }
      function fp(r, e) {
        return ju(2048, 8, r, e);
      }
      function I0(r, e) {
        return ju(4, 2, r, e);
      }
      function z0(r, e) {
        return ju(4, 4, r, e);
      }
      function N0(r, e) {
        if (typeof e == "function") return r = r(), e(r), function() {
          e(null);
        };
        if (e != null) return r = r(), e.current = r, function() {
          e.current = null;
        };
      }
      function L0(r, e, t) {
        return t = t != null ? t.concat([
          r
        ]) : null, ju(4, 4, N0.bind(null, e, r), t);
      }
      function hp() {
      }
      function O0(r, e) {
        var t = Zr();
        e = e === void 0 ? null : e;
        var n = t.memoizedState;
        return n !== null && e !== null && cp(e, n[1]) ? n[0] : (t.memoizedState = [
          r,
          e
        ], r);
      }
      function D0(r, e) {
        var t = Zr();
        e = e === void 0 ? null : e;
        var n = t.memoizedState;
        return n !== null && e !== null && cp(e, n[1]) ? n[0] : (r = r(), t.memoizedState = [
          r,
          e
        ], r);
      }
      function F0(r, e, t) {
        return ko & 21 ? (pn(t, e) || (t = Vm(), We.lanes |= t, Ro |= t, r.baseState = true), e) : (r.baseState && (r.baseState = false, fr = true), r.memoizedState = t);
      }
      function bb(r, e) {
        var t = ke;
        ke = t !== 0 && 4 > t ? t : 4, r(true);
        var n = Sd.transition;
        Sd.transition = {};
        try {
          r(false), e();
        } finally {
          ke = t, Sd.transition = n;
        }
      }
      function H0() {
        return Zr().memoizedState;
      }
      function Sb(r, e, t) {
        var n = Mi(r);
        if (t = {
          lane: n,
          action: t,
          hasEagerState: false,
          eagerState: null,
          next: null
        }, B0(r)) U0(e, t);
        else if (t = S0(r, e, t, n), t !== null) {
          var i = or();
          hn(t, r, n, i), $0(t, e, n);
        }
      }
      function xb(r, e, t) {
        var n = Mi(r), i = {
          lane: n,
          action: t,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (B0(r)) U0(e, i);
        else {
          var o = r.alternate;
          if (r.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
            var s = e.lastRenderedState, a = o(s, t);
            if (i.hasEagerState = true, i.eagerState = a, pn(a, s)) {
              var l = e.interleaved;
              l === null ? (i.next = i, ip(e)) : (i.next = l.next, l.next = i), e.interleaved = i;
              return;
            }
          } catch {
          } finally {
          }
          t = S0(r, e, i, n), t !== null && (i = or(), hn(t, r, n, i), $0(t, e, n));
        }
      }
      function B0(r) {
        var e = r.alternate;
        return r === We || e !== null && e === We;
      }
      function U0(r, e) {
        xa = Yc = true;
        var t = r.pending;
        t === null ? e.next = e : (e.next = t.next, t.next = e), r.pending = e;
      }
      function $0(r, e, t) {
        if (t & 4194240) {
          var n = e.lanes;
          n &= r.pendingLanes, t |= n, e.lanes = t, Vh(r, t);
        }
      }
      var Xc = {
        readContext: Qr,
        useCallback: Dt,
        useContext: Dt,
        useEffect: Dt,
        useImperativeHandle: Dt,
        useInsertionEffect: Dt,
        useLayoutEffect: Dt,
        useMemo: Dt,
        useReducer: Dt,
        useRef: Dt,
        useState: Dt,
        useDebugValue: Dt,
        useDeferredValue: Dt,
        useTransition: Dt,
        useMutableSource: Dt,
        useSyncExternalStore: Dt,
        useId: Dt,
        unstable_isNewReconciler: false
      }, Cb = {
        readContext: Qr,
        useCallback: function(r, e) {
          return yn().memoizedState = [
            r,
            e === void 0 ? null : e
          ], r;
        },
        useContext: Qr,
        useEffect: Y_,
        useImperativeHandle: function(r, e, t) {
          return t = t != null ? t.concat([
            r
          ]) : null, gc(4194308, 4, N0.bind(null, e, r), t);
        },
        useLayoutEffect: function(r, e) {
          return gc(4194308, 4, r, e);
        },
        useInsertionEffect: function(r, e) {
          return gc(4, 2, r, e);
        },
        useMemo: function(r, e) {
          var t = yn();
          return e = e === void 0 ? null : e, r = r(), t.memoizedState = [
            r,
            e
          ], r;
        },
        useReducer: function(r, e, t) {
          var n = yn();
          return e = t !== void 0 ? t(e) : e, n.memoizedState = n.baseState = e, r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: e
          }, n.queue = r, r = r.dispatch = Sb.bind(null, We, r), [
            n.memoizedState,
            r
          ];
        },
        useRef: function(r) {
          var e = yn();
          return r = {
            current: r
          }, e.memoizedState = r;
        },
        useState: G_,
        useDebugValue: hp,
        useDeferredValue: function(r) {
          return yn().memoizedState = r;
        },
        useTransition: function() {
          var r = G_(false), e = r[0];
          return r = bb.bind(null, r[1]), yn().memoizedState = r, [
            e,
            r
          ];
        },
        useMutableSource: function() {
        },
        useSyncExternalStore: function(r, e, t) {
          var n = We, i = yn();
          if (De) {
            if (t === void 0) throw Error(D(407));
            t = t();
          } else {
            if (t = e(), Ct === null) throw Error(D(349));
            ko & 30 || E0(n, e, t);
          }
          i.memoizedState = t;
          var o = {
            value: t,
            getSnapshot: e
          };
          return i.queue = o, Y_(T0.bind(null, n, o, r), [
            r
          ]), n.flags |= 2048, rl(9, P0.bind(null, n, o, t, e), void 0, null), t;
        },
        useId: function() {
          var r = yn(), e = Ct.identifierPrefix;
          if (De) {
            var t = Yn, n = Gn;
            t = (n & ~(1 << 32 - fn(n) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = el++, 0 < t && (e += "H" + t.toString(32)), e += ":";
          } else t = vb++, e = ":" + e + "r" + t.toString(32) + ":";
          return r.memoizedState = e;
        },
        unstable_isNewReconciler: false
      }, kb = {
        readContext: Qr,
        useCallback: O0,
        useContext: Qr,
        useEffect: fp,
        useImperativeHandle: L0,
        useInsertionEffect: I0,
        useLayoutEffect: z0,
        useMemo: D0,
        useReducer: xd,
        useRef: M0,
        useState: function() {
          return xd(tl);
        },
        useDebugValue: hp,
        useDeferredValue: function(r) {
          var e = Zr();
          return F0(e, _t.memoizedState, r);
        },
        useTransition: function() {
          var r = xd(tl)[0], e = Zr().memoizedState;
          return [
            r,
            e
          ];
        },
        useMutableSource: k0,
        useSyncExternalStore: R0,
        useId: H0,
        unstable_isNewReconciler: false
      }, Rb = {
        readContext: Qr,
        useCallback: O0,
        useContext: Qr,
        useEffect: fp,
        useImperativeHandle: L0,
        useInsertionEffect: I0,
        useLayoutEffect: z0,
        useMemo: D0,
        useReducer: Cd,
        useRef: M0,
        useState: function() {
          return Cd(tl);
        },
        useDebugValue: hp,
        useDeferredValue: function(r) {
          var e = Zr();
          return _t === null ? e.memoizedState = r : F0(e, _t.memoizedState, r);
        },
        useTransition: function() {
          var r = Cd(tl)[0], e = Zr().memoizedState;
          return [
            r,
            e
          ];
        },
        useMutableSource: k0,
        useSyncExternalStore: R0,
        useId: H0,
        unstable_isNewReconciler: false
      };
      function ln(r, e) {
        if (r && r.defaultProps) {
          e = Ge({}, e), r = r.defaultProps;
          for (var t in r) e[t] === void 0 && (e[t] = r[t]);
          return e;
        }
        return e;
      }
      function Mf(r, e, t, n) {
        e = r.memoizedState, t = t(n, e), t = t == null ? e : Ge({}, e, t), r.memoizedState = t, r.lanes === 0 && (r.updateQueue.baseState = t);
      }
      var Mu = {
        isMounted: function(r) {
          return (r = r._reactInternals) ? No(r) === r : false;
        },
        enqueueSetState: function(r, e, t) {
          r = r._reactInternals;
          var n = or(), i = Mi(r), o = qn(n, i);
          o.payload = e, t != null && (o.callback = t), e = Ai(r, o, i), e !== null && (hn(e, r, i, n), pc(e, r, i));
        },
        enqueueReplaceState: function(r, e, t) {
          r = r._reactInternals;
          var n = or(), i = Mi(r), o = qn(n, i);
          o.tag = 1, o.payload = e, t != null && (o.callback = t), e = Ai(r, o, i), e !== null && (hn(e, r, i, n), pc(e, r, i));
        },
        enqueueForceUpdate: function(r, e) {
          r = r._reactInternals;
          var t = or(), n = Mi(r), i = qn(t, n);
          i.tag = 2, e != null && (i.callback = e), e = Ai(r, i, n), e !== null && (hn(e, r, n, t), pc(e, r, n));
        }
      };
      function X_(r, e, t, n, i, o, s) {
        return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(n, o, s) : e.prototype && e.prototype.isPureReactComponent ? !Xa(t, n) || !Xa(i, o) : true;
      }
      function V0(r, e, t) {
        var n = false, i = Di, o = e.contextType;
        return typeof o == "object" && o !== null ? o = Qr(o) : (i = pr(e) ? xo : Xt.current, n = e.contextTypes, o = (n = n != null) ? Es(r, i) : Di), e = new e(t, o), r.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Mu, r.stateNode = e, e._reactInternals = r, n && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = i, r.__reactInternalMemoizedMaskedChildContext = o), e;
      }
      function q_(r, e, t, n) {
        r = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, n), e.state !== r && Mu.enqueueReplaceState(e, e.state, null);
      }
      function If(r, e, t, n) {
        var i = r.stateNode;
        i.props = t, i.state = r.memoizedState, i.refs = {}, op(r);
        var o = e.contextType;
        typeof o == "object" && o !== null ? i.context = Qr(o) : (o = pr(e) ? xo : Xt.current, i.context = Es(r, o)), i.state = r.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Mf(r, e, o, t), i.state = r.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && Mu.enqueueReplaceState(i, i.state, null), Wc(r, t, i, n), i.state = r.memoizedState), typeof i.componentDidMount == "function" && (r.flags |= 4194308);
      }
      function js(r, e) {
        try {
          var t = "", n = e;
          do
            t += ev(n), n = n.return;
          while (n);
          var i = t;
        } catch (o) {
          i = `
Error generating stack: ` + o.message + `
` + o.stack;
        }
        return {
          value: r,
          source: e,
          stack: i,
          digest: null
        };
      }
      function kd(r, e, t) {
        return {
          value: r,
          source: null,
          stack: t ?? null,
          digest: e ?? null
        };
      }
      function zf(r, e) {
        try {
          console.error(e.value);
        } catch (t) {
          setTimeout(function() {
            throw t;
          });
        }
      }
      var Eb = typeof WeakMap == "function" ? WeakMap : Map;
      function W0(r, e, t) {
        t = qn(-1, t), t.tag = 3, t.payload = {
          element: null
        };
        var n = e.value;
        return t.callback = function() {
          Kc || (Kc = true, Vf = n), zf(r, e);
        }, t;
      }
      function G0(r, e, t) {
        t = qn(-1, t), t.tag = 3;
        var n = r.type.getDerivedStateFromError;
        if (typeof n == "function") {
          var i = e.value;
          t.payload = function() {
            return n(i);
          }, t.callback = function() {
            zf(r, e);
          };
        }
        var o = r.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
          zf(r, e), typeof n != "function" && (ji === null ? ji = /* @__PURE__ */ new Set([
            this
          ]) : ji.add(this));
          var s = e.stack;
          this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
          });
        }), t;
      }
      function K_(r, e, t) {
        var n = r.pingCache;
        if (n === null) {
          n = r.pingCache = new Eb();
          var i = /* @__PURE__ */ new Set();
          n.set(e, i);
        } else i = n.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(e, i));
        i.has(t) || (i.add(t), r = Bb.bind(null, r, e, t), e.then(r, r));
      }
      function J_(r) {
        do {
          var e;
          if ((e = r.tag === 13) && (e = r.memoizedState, e = e !== null ? e.dehydrated !== null : true), e) return r;
          r = r.return;
        } while (r !== null);
        return null;
      }
      function Q_(r, e, t, n, i) {
        return r.mode & 1 ? (r.flags |= 65536, r.lanes = i, r) : (r === e ? r.flags |= 65536 : (r.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = qn(-1, 1), e.tag = 2, Ai(t, e, 1))), t.lanes |= 1), r);
      }
      var Pb = si.ReactCurrentOwner, fr = false;
      function er(r, e, t, n) {
        e.child = r === null ? b0(e, null, t, n) : Ts(e, r.child, t, n);
      }
      function Z_(r, e, t, n, i) {
        t = t.render;
        var o = e.ref;
        return ms(e, i), n = up(r, e, t, n, o, i), t = dp(), r !== null && !fr ? (e.updateQueue = r.updateQueue, e.flags &= -2053, r.lanes &= ~i, ei(r, e, i)) : (De && t && Qh(e), e.flags |= 1, er(r, e, n, i), e.child);
      }
      function eg(r, e, t, n, i) {
        if (r === null) {
          var o = t.type;
          return typeof o == "function" && !bp(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = o, Y0(r, e, o, n, i)) : (r = vc(t.type, null, n, e, e.mode, i), r.ref = e.ref, r.return = e, e.child = r);
        }
        if (o = r.child, !(r.lanes & i)) {
          var s = o.memoizedProps;
          if (t = t.compare, t = t !== null ? t : Xa, t(s, n) && r.ref === e.ref) return ei(r, e, i);
        }
        return e.flags |= 1, r = Ii(o, n), r.ref = e.ref, r.return = e, e.child = r;
      }
      function Y0(r, e, t, n, i) {
        if (r !== null) {
          var o = r.memoizedProps;
          if (Xa(o, n) && r.ref === e.ref) if (fr = false, e.pendingProps = n = o, (r.lanes & i) !== 0) r.flags & 131072 && (fr = true);
          else return e.lanes = r.lanes, ei(r, e, i);
        }
        return Nf(r, e, t, n, i);
      }
      function X0(r, e, t) {
        var n = e.pendingProps, i = n.children, o = r !== null ? r.memoizedState : null;
        if (n.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, je(cs, Rr), Rr |= t;
        else {
          if (!(t & 1073741824)) return r = o !== null ? o.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
            baseLanes: r,
            cachePool: null,
            transitions: null
          }, e.updateQueue = null, je(cs, Rr), Rr |= r, null;
          e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, n = o !== null ? o.baseLanes : t, je(cs, Rr), Rr |= n;
        }
        else o !== null ? (n = o.baseLanes | t, e.memoizedState = null) : n = t, je(cs, Rr), Rr |= n;
        return er(r, e, i, t), e.child;
      }
      function q0(r, e) {
        var t = e.ref;
        (r === null && t !== null || r !== null && r.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
      }
      function Nf(r, e, t, n, i) {
        var o = pr(t) ? xo : Xt.current;
        return o = Es(e, o), ms(e, i), t = up(r, e, t, n, o, i), n = dp(), r !== null && !fr ? (e.updateQueue = r.updateQueue, e.flags &= -2053, r.lanes &= ~i, ei(r, e, i)) : (De && n && Qh(e), e.flags |= 1, er(r, e, t, i), e.child);
      }
      function tg(r, e, t, n, i) {
        if (pr(t)) {
          var o = true;
          Hc(e);
        } else o = false;
        if (ms(e, i), e.stateNode === null) wc(r, e), V0(e, t, n), If(e, t, n, i), n = true;
        else if (r === null) {
          var s = e.stateNode, a = e.memoizedProps;
          s.props = a;
          var l = s.context, c = t.contextType;
          typeof c == "object" && c !== null ? c = Qr(c) : (c = pr(t) ? xo : Xt.current, c = Es(e, c));
          var u = t.getDerivedStateFromProps, h = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
          h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== n || l !== c) && q_(e, s, n, c), _i = false;
          var d = e.memoizedState;
          s.state = d, Wc(e, n, s, i), l = e.memoizedState, a !== n || d !== l || hr.current || _i ? (typeof u == "function" && (Mf(e, t, u, n), l = e.memoizedState), (a = _i || X_(e, t, a, n, d, l, c)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = l), s.props = n, s.state = l, s.context = c, n = a) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), n = false);
        } else {
          s = e.stateNode, x0(r, e), a = e.memoizedProps, c = e.type === e.elementType ? a : ln(e.type, a), s.props = c, h = e.pendingProps, d = s.context, l = t.contextType, typeof l == "object" && l !== null ? l = Qr(l) : (l = pr(t) ? xo : Xt.current, l = Es(e, l));
          var p = t.getDerivedStateFromProps;
          (u = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== h || d !== l) && q_(e, s, n, l), _i = false, d = e.memoizedState, s.state = d, Wc(e, n, s, i);
          var m = e.memoizedState;
          a !== h || d !== m || hr.current || _i ? (typeof p == "function" && (Mf(e, t, p, n), m = e.memoizedState), (c = _i || X_(e, t, c, n, d, m, l) || false) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(n, m, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(n, m, l)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === r.memoizedProps && d === r.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === r.memoizedProps && d === r.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = m), s.props = n, s.state = m, s.context = l, n = c) : (typeof s.componentDidUpdate != "function" || a === r.memoizedProps && d === r.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === r.memoizedProps && d === r.memoizedState || (e.flags |= 1024), n = false);
        }
        return Lf(r, e, t, n, o, i);
      }
      function Lf(r, e, t, n, i, o) {
        q0(r, e);
        var s = (e.flags & 128) !== 0;
        if (!n && !s) return i && H_(e, t, false), ei(r, e, o);
        n = e.stateNode, Pb.current = e;
        var a = s && typeof t.getDerivedStateFromError != "function" ? null : n.render();
        return e.flags |= 1, r !== null && s ? (e.child = Ts(e, r.child, null, o), e.child = Ts(e, null, a, o)) : er(r, e, a, o), e.memoizedState = n.state, i && H_(e, t, true), e.child;
      }
      function K0(r) {
        var e = r.stateNode;
        e.pendingContext ? F_(r, e.pendingContext, e.pendingContext !== e.context) : e.context && F_(r, e.context, false), sp(r, e.containerInfo);
      }
      function rg(r, e, t, n, i) {
        return Ps(), ep(i), e.flags |= 256, er(r, e, t, n), e.child;
      }
      var Of = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function Df(r) {
        return {
          baseLanes: r,
          cachePool: null,
          transitions: null
        };
      }
      function J0(r, e, t) {
        var n = e.pendingProps, i = Ue.current, o = false, s = (e.flags & 128) !== 0, a;
        if ((a = s) || (a = r !== null && r.memoizedState === null ? false : (i & 2) !== 0), a ? (o = true, e.flags &= -129) : (r === null || r.memoizedState !== null) && (i |= 1), je(Ue, i & 1), r === null) return Af(e), r = e.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (e.mode & 1 ? r.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (s = n.children, r = n.fallback, o ? (n = e.mode, o = e.child, s = {
          mode: "hidden",
          children: s
        }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Nu(s, n, 0, null), r = po(r, n, t, null), o.return = e, r.return = e, o.sibling = r, e.child = o, e.child.memoizedState = Df(t), e.memoizedState = Of, r) : pp(e, s));
        if (i = r.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Tb(r, e, s, n, a, i, t);
        if (o) {
          o = n.fallback, s = e.mode, i = r.child, a = i.sibling;
          var l = {
            mode: "hidden",
            children: n.children
          };
          return !(s & 1) && e.child !== i ? (n = e.child, n.childLanes = 0, n.pendingProps = l, e.deletions = null) : (n = Ii(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Ii(a, o) : (o = po(o, s, t, null), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, n = o, o = e.child, s = r.child.memoizedState, s = s === null ? Df(t) : {
            baseLanes: s.baseLanes | t,
            cachePool: null,
            transitions: s.transitions
          }, o.memoizedState = s, o.childLanes = r.childLanes & ~t, e.memoizedState = Of, n;
        }
        return o = r.child, r = o.sibling, n = Ii(o, {
          mode: "visible",
          children: n.children
        }), !(e.mode & 1) && (n.lanes = t), n.return = e, n.sibling = null, r !== null && (t = e.deletions, t === null ? (e.deletions = [
          r
        ], e.flags |= 16) : t.push(r)), e.child = n, e.memoizedState = null, n;
      }
      function pp(r, e) {
        return e = Nu({
          mode: "visible",
          children: e
        }, r.mode, 0, null), e.return = r, r.child = e;
      }
      function Hl(r, e, t, n) {
        return n !== null && ep(n), Ts(e, r.child, null, t), r = pp(e, e.pendingProps.children), r.flags |= 2, e.memoizedState = null, r;
      }
      function Tb(r, e, t, n, i, o, s) {
        if (t) return e.flags & 256 ? (e.flags &= -257, n = kd(Error(D(422))), Hl(r, e, s, n)) : e.memoizedState !== null ? (e.child = r.child, e.flags |= 128, null) : (o = n.fallback, i = e.mode, n = Nu({
          mode: "visible",
          children: n.children
        }, i, 0, null), o = po(o, i, s, null), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, e.mode & 1 && Ts(e, r.child, null, s), e.child.memoizedState = Df(s), e.memoizedState = Of, o);
        if (!(e.mode & 1)) return Hl(r, e, s, null);
        if (i.data === "$!") {
          if (n = i.nextSibling && i.nextSibling.dataset, n) var a = n.dgst;
          return n = a, o = Error(D(419)), n = kd(o, n, void 0), Hl(r, e, s, n);
        }
        if (a = (s & r.childLanes) !== 0, fr || a) {
          if (n = Ct, n !== null) {
            switch (s & -s) {
              case 4:
                i = 2;
                break;
              case 16:
                i = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                i = 32;
                break;
              case 536870912:
                i = 268435456;
                break;
              default:
                i = 0;
            }
            i = i & (n.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Zn(r, i), hn(n, r, i, -1));
          }
          return vp(), n = kd(Error(D(421))), Hl(r, e, s, n);
        }
        return i.data === "$?" ? (e.flags |= 128, e.child = r.child, e = Ub.bind(null, r), i._reactRetry = e, null) : (r = o.treeContext, Mr = Ti(i.nextSibling), zr = e, De = true, dn = null, r !== null && (Vr[Wr++] = Gn, Vr[Wr++] = Yn, Vr[Wr++] = Co, Gn = r.id, Yn = r.overflow, Co = e), e = pp(e, n.children), e.flags |= 4096, e);
      }
      function ng(r, e, t) {
        r.lanes |= e;
        var n = r.alternate;
        n !== null && (n.lanes |= e), jf(r.return, e, t);
      }
      function Rd(r, e, t, n, i) {
        var o = r.memoizedState;
        o === null ? r.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: t,
          tailMode: i
        } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = t, o.tailMode = i);
      }
      function Q0(r, e, t) {
        var n = e.pendingProps, i = n.revealOrder, o = n.tail;
        if (er(r, e, n.children, t), n = Ue.current, n & 2) n = n & 1 | 2, e.flags |= 128;
        else {
          if (r !== null && r.flags & 128) e: for (r = e.child; r !== null; ) {
            if (r.tag === 13) r.memoizedState !== null && ng(r, t, e);
            else if (r.tag === 19) ng(r, t, e);
            else if (r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === e) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === e) break e;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
          n &= 1;
        }
        if (je(Ue, n), !(e.mode & 1)) e.memoizedState = null;
        else switch (i) {
          case "forwards":
            for (t = e.child, i = null; t !== null; ) r = t.alternate, r !== null && Gc(r) === null && (i = t), t = t.sibling;
            t = i, t === null ? (i = e.child, e.child = null) : (i = t.sibling, t.sibling = null), Rd(e, false, i, t, o);
            break;
          case "backwards":
            for (t = null, i = e.child, e.child = null; i !== null; ) {
              if (r = i.alternate, r !== null && Gc(r) === null) {
                e.child = i;
                break;
              }
              r = i.sibling, i.sibling = t, t = i, i = r;
            }
            Rd(e, true, t, null, o);
            break;
          case "together":
            Rd(e, false, null, null, void 0);
            break;
          default:
            e.memoizedState = null;
        }
        return e.child;
      }
      function wc(r, e) {
        !(e.mode & 1) && r !== null && (r.alternate = null, e.alternate = null, e.flags |= 2);
      }
      function ei(r, e, t) {
        if (r !== null && (e.dependencies = r.dependencies), Ro |= e.lanes, !(t & e.childLanes)) return null;
        if (r !== null && e.child !== r.child) throw Error(D(153));
        if (e.child !== null) {
          for (r = e.child, t = Ii(r, r.pendingProps), e.child = t, t.return = e; r.sibling !== null; ) r = r.sibling, t = t.sibling = Ii(r, r.pendingProps), t.return = e;
          t.sibling = null;
        }
        return e.child;
      }
      function Ab(r, e, t) {
        switch (e.tag) {
          case 3:
            K0(e), Ps();
            break;
          case 5:
            C0(e);
            break;
          case 1:
            pr(e.type) && Hc(e);
            break;
          case 4:
            sp(e, e.stateNode.containerInfo);
            break;
          case 10:
            var n = e.type._context, i = e.memoizedProps.value;
            je($c, n._currentValue), n._currentValue = i;
            break;
          case 13:
            if (n = e.memoizedState, n !== null) return n.dehydrated !== null ? (je(Ue, Ue.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? J0(r, e, t) : (je(Ue, Ue.current & 1), r = ei(r, e, t), r !== null ? r.sibling : null);
            je(Ue, Ue.current & 1);
            break;
          case 19:
            if (n = (t & e.childLanes) !== 0, r.flags & 128) {
              if (n) return Q0(r, e, t);
              e.flags |= 128;
            }
            if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), je(Ue, Ue.current), n) break;
            return null;
          case 22:
          case 23:
            return e.lanes = 0, X0(r, e, t);
        }
        return ei(r, e, t);
      }
      var Z0, Ff, e1, t1;
      Z0 = function(r, e) {
        for (var t = e.child; t !== null; ) {
          if (t.tag === 5 || t.tag === 6) r.appendChild(t.stateNode);
          else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      };
      Ff = function() {
      };
      e1 = function(r, e, t, n) {
        var i = r.memoizedProps;
        if (i !== n) {
          r = e.stateNode, lo(An.current);
          var o = null;
          switch (t) {
            case "input":
              i = af(r, i), n = af(r, n), o = [];
              break;
            case "select":
              i = Ge({}, i, {
                value: void 0
              }), n = Ge({}, n, {
                value: void 0
              }), o = [];
              break;
            case "textarea":
              i = uf(r, i), n = uf(r, n), o = [];
              break;
            default:
              typeof i.onClick != "function" && typeof n.onClick == "function" && (r.onclick = Dc);
          }
          ff(t, n);
          var s;
          t = null;
          for (c in i) if (!n.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) if (c === "style") {
            var a = i[c];
            for (s in a) a.hasOwnProperty(s) && (t || (t = {}), t[s] = "");
          } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ba.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
          for (c in n) {
            var l = n[c];
            if (a = i == null ? void 0 : i[c], n.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
              for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (t || (t = {}), t[s] = "");
              for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (t || (t = {}), t[s] = l[s]);
            } else t || (o || (o = []), o.push(c, t)), t = l;
            else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ba.hasOwnProperty(c) ? (l != null && c === "onScroll" && Me("scroll", r), o || a === l || (o = [])) : (o = o || []).push(c, l));
          }
          t && (o = o || []).push("style", t);
          var c = o;
          (e.updateQueue = c) && (e.flags |= 4);
        }
      };
      t1 = function(r, e, t, n) {
        t !== n && (e.flags |= 4);
      };
      function ta(r, e) {
        if (!De) switch (r.tailMode) {
          case "hidden":
            e = r.tail;
            for (var t = null; e !== null; ) e.alternate !== null && (t = e), e = e.sibling;
            t === null ? r.tail = null : t.sibling = null;
            break;
          case "collapsed":
            t = r.tail;
            for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e || r.tail === null ? r.tail = null : r.tail.sibling = null : n.sibling = null;
        }
      }
      function Ft(r) {
        var e = r.alternate !== null && r.alternate.child === r.child, t = 0, n = 0;
        if (e) for (var i = r.child; i !== null; ) t |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = r, i = i.sibling;
        else for (i = r.child; i !== null; ) t |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = r, i = i.sibling;
        return r.subtreeFlags |= n, r.childLanes = t, e;
      }
      function jb(r, e, t) {
        var n = e.pendingProps;
        switch (Zh(e), e.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Ft(e), null;
          case 1:
            return pr(e.type) && Fc(), Ft(e), null;
          case 3:
            return n = e.stateNode, As(), Ie(hr), Ie(Xt), lp(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (r === null || r.child === null) && (Dl(e) ? e.flags |= 4 : r === null || r.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, dn !== null && (Yf(dn), dn = null))), Ff(r, e), Ft(e), null;
          case 5:
            ap(e);
            var i = lo(Za.current);
            if (t = e.type, r !== null && e.stateNode != null) e1(r, e, t, n, i), r.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
              if (!n) {
                if (e.stateNode === null) throw Error(D(166));
                return Ft(e), null;
              }
              if (r = lo(An.current), Dl(e)) {
                n = e.stateNode, t = e.type;
                var o = e.memoizedProps;
                switch (n[xn] = e, n[Ja] = o, r = (e.mode & 1) !== 0, t) {
                  case "dialog":
                    Me("cancel", n), Me("close", n);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Me("load", n);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < ua.length; i++) Me(ua[i], n);
                    break;
                  case "source":
                    Me("error", n);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Me("error", n), Me("load", n);
                    break;
                  case "details":
                    Me("toggle", n);
                    break;
                  case "input":
                    f_(n, o), Me("invalid", n);
                    break;
                  case "select":
                    n._wrapperState = {
                      wasMultiple: !!o.multiple
                    }, Me("invalid", n);
                    break;
                  case "textarea":
                    p_(n, o), Me("invalid", n);
                }
                ff(t, o), i = null;
                for (var s in o) if (o.hasOwnProperty(s)) {
                  var a = o[s];
                  s === "children" ? typeof a == "string" ? n.textContent !== a && (o.suppressHydrationWarning !== true && Ol(n.textContent, a, r), i = [
                    "children",
                    a
                  ]) : typeof a == "number" && n.textContent !== "" + a && (o.suppressHydrationWarning !== true && Ol(n.textContent, a, r), i = [
                    "children",
                    "" + a
                  ]) : Ba.hasOwnProperty(s) && a != null && s === "onScroll" && Me("scroll", n);
                }
                switch (t) {
                  case "input":
                    Tl(n), h_(n, o, true);
                    break;
                  case "textarea":
                    Tl(n), __(n);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof o.onClick == "function" && (n.onclick = Dc);
                }
                n = i, e.updateQueue = n, n !== null && (e.flags |= 4);
              } else {
                s = i.nodeType === 9 ? i : i.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = Tm(t)), r === "http://www.w3.org/1999/xhtml" ? t === "script" ? (r = s.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof n.is == "string" ? r = s.createElement(t, {
                  is: n.is
                }) : (r = s.createElement(t), t === "select" && (s = r, n.multiple ? s.multiple = true : n.size && (s.size = n.size))) : r = s.createElementNS(r, t), r[xn] = e, r[Ja] = n, Z0(r, e, false, false), e.stateNode = r;
                e: {
                  switch (s = hf(t, n), t) {
                    case "dialog":
                      Me("cancel", r), Me("close", r), i = n;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Me("load", r), i = n;
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < ua.length; i++) Me(ua[i], r);
                      i = n;
                      break;
                    case "source":
                      Me("error", r), i = n;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Me("error", r), Me("load", r), i = n;
                      break;
                    case "details":
                      Me("toggle", r), i = n;
                      break;
                    case "input":
                      f_(r, n), i = af(r, n), Me("invalid", r);
                      break;
                    case "option":
                      i = n;
                      break;
                    case "select":
                      r._wrapperState = {
                        wasMultiple: !!n.multiple
                      }, i = Ge({}, n, {
                        value: void 0
                      }), Me("invalid", r);
                      break;
                    case "textarea":
                      p_(r, n), i = uf(r, n), Me("invalid", r);
                      break;
                    default:
                      i = n;
                  }
                  ff(t, i), a = i;
                  for (o in a) if (a.hasOwnProperty(o)) {
                    var l = a[o];
                    o === "style" ? Mm(r, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Am(r, l)) : o === "children" ? typeof l == "string" ? (t !== "textarea" || l !== "") && Ua(r, l) : typeof l == "number" && Ua(r, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ba.hasOwnProperty(o) ? l != null && o === "onScroll" && Me("scroll", r) : l != null && Dh(r, o, l, s));
                  }
                  switch (t) {
                    case "input":
                      Tl(r), h_(r, n, false);
                      break;
                    case "textarea":
                      Tl(r), __(r);
                      break;
                    case "option":
                      n.value != null && r.setAttribute("value", "" + Oi(n.value));
                      break;
                    case "select":
                      r.multiple = !!n.multiple, o = n.value, o != null ? ps(r, !!n.multiple, o, false) : n.defaultValue != null && ps(r, !!n.multiple, n.defaultValue, true);
                      break;
                    default:
                      typeof i.onClick == "function" && (r.onclick = Dc);
                  }
                  switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      n = !!n.autoFocus;
                      break e;
                    case "img":
                      n = true;
                      break e;
                    default:
                      n = false;
                  }
                }
                n && (e.flags |= 4);
              }
              e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
            }
            return Ft(e), null;
          case 6:
            if (r && e.stateNode != null) t1(r, e, r.memoizedProps, n);
            else {
              if (typeof n != "string" && e.stateNode === null) throw Error(D(166));
              if (t = lo(Za.current), lo(An.current), Dl(e)) {
                if (n = e.stateNode, t = e.memoizedProps, n[xn] = e, (o = n.nodeValue !== t) && (r = zr, r !== null)) switch (r.tag) {
                  case 3:
                    Ol(n.nodeValue, t, (r.mode & 1) !== 0);
                    break;
                  case 5:
                    r.memoizedProps.suppressHydrationWarning !== true && Ol(n.nodeValue, t, (r.mode & 1) !== 0);
                }
                o && (e.flags |= 4);
              } else n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n), n[xn] = e, e.stateNode = n;
            }
            return Ft(e), null;
          case 13:
            if (Ie(Ue), n = e.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
              if (De && Mr !== null && e.mode & 1 && !(e.flags & 128)) y0(), Ps(), e.flags |= 98560, o = false;
              else if (o = Dl(e), n !== null && n.dehydrated !== null) {
                if (r === null) {
                  if (!o) throw Error(D(318));
                  if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(D(317));
                  o[xn] = e;
                } else Ps(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                Ft(e), o = false;
              } else dn !== null && (Yf(dn), dn = null), o = true;
              if (!o) return e.flags & 65536 ? e : null;
            }
            return e.flags & 128 ? (e.lanes = t, e) : (n = n !== null, n !== (r !== null && r.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (r === null || Ue.current & 1 ? wt === 0 && (wt = 3) : vp())), e.updateQueue !== null && (e.flags |= 4), Ft(e), null);
          case 4:
            return As(), Ff(r, e), r === null && qa(e.stateNode.containerInfo), Ft(e), null;
          case 10:
            return np(e.type._context), Ft(e), null;
          case 17:
            return pr(e.type) && Fc(), Ft(e), null;
          case 19:
            if (Ie(Ue), o = e.memoizedState, o === null) return Ft(e), null;
            if (n = (e.flags & 128) !== 0, s = o.rendering, s === null) if (n) ta(o, false);
            else {
              if (wt !== 0 || r !== null && r.flags & 128) for (r = e.child; r !== null; ) {
                if (s = Gc(r), s !== null) {
                  for (e.flags |= 128, ta(o, false), n = s.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = t, t = e.child; t !== null; ) o = t, r = n, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = r, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, r = s.dependencies, o.dependencies = r === null ? null : {
                    lanes: r.lanes,
                    firstContext: r.firstContext
                  }), t = t.sibling;
                  return je(Ue, Ue.current & 1 | 2), e.child;
                }
                r = r.sibling;
              }
              o.tail !== null && tt() > Ms && (e.flags |= 128, n = true, ta(o, false), e.lanes = 4194304);
            }
            else {
              if (!n) if (r = Gc(s), r !== null) {
                if (e.flags |= 128, n = true, t = r.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), ta(o, true), o.tail === null && o.tailMode === "hidden" && !s.alternate && !De) return Ft(e), null;
              } else 2 * tt() - o.renderingStartTime > Ms && t !== 1073741824 && (e.flags |= 128, n = true, ta(o, false), e.lanes = 4194304);
              o.isBackwards ? (s.sibling = e.child, e.child = s) : (t = o.last, t !== null ? t.sibling = s : e.child = s, o.last = s);
            }
            return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = tt(), e.sibling = null, t = Ue.current, je(Ue, n ? t & 1 | 2 : t & 1), e) : (Ft(e), null);
          case 22:
          case 23:
            return yp(), n = e.memoizedState !== null, r !== null && r.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? Rr & 1073741824 && (Ft(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ft(e), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(D(156, e.tag));
      }
      function Mb(r, e) {
        switch (Zh(e), e.tag) {
          case 1:
            return pr(e.type) && Fc(), r = e.flags, r & 65536 ? (e.flags = r & -65537 | 128, e) : null;
          case 3:
            return As(), Ie(hr), Ie(Xt), lp(), r = e.flags, r & 65536 && !(r & 128) ? (e.flags = r & -65537 | 128, e) : null;
          case 5:
            return ap(e), null;
          case 13:
            if (Ie(Ue), r = e.memoizedState, r !== null && r.dehydrated !== null) {
              if (e.alternate === null) throw Error(D(340));
              Ps();
            }
            return r = e.flags, r & 65536 ? (e.flags = r & -65537 | 128, e) : null;
          case 19:
            return Ie(Ue), null;
          case 4:
            return As(), null;
          case 10:
            return np(e.type._context), null;
          case 22:
          case 23:
            return yp(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Bl = false, $t = false, Ib = typeof WeakSet == "function" ? WeakSet : Set, G = null;
      function ls(r, e) {
        var t = r.ref;
        if (t !== null) if (typeof t == "function") try {
          t(null);
        } catch (n) {
          qe(r, e, n);
        }
        else t.current = null;
      }
      function Hf(r, e, t) {
        try {
          t();
        } catch (n) {
          qe(r, e, n);
        }
      }
      var ig = false;
      function zb(r, e) {
        if (xf = Nc, r = s0(), Jh(r)) {
          if ("selectionStart" in r) var t = {
            start: r.selectionStart,
            end: r.selectionEnd
          };
          else e: {
            t = (t = r.ownerDocument) && t.defaultView || window;
            var n = t.getSelection && t.getSelection();
            if (n && n.rangeCount !== 0) {
              t = n.anchorNode;
              var i = n.anchorOffset, o = n.focusNode;
              n = n.focusOffset;
              try {
                t.nodeType, o.nodeType;
              } catch {
                t = null;
                break e;
              }
              var s = 0, a = -1, l = -1, c = 0, u = 0, h = r, d = null;
              t: for (; ; ) {
                for (var p; h !== t || i !== 0 && h.nodeType !== 3 || (a = s + i), h !== o || n !== 0 && h.nodeType !== 3 || (l = s + n), h.nodeType === 3 && (s += h.nodeValue.length), (p = h.firstChild) !== null; ) d = h, h = p;
                for (; ; ) {
                  if (h === r) break t;
                  if (d === t && ++c === i && (a = s), d === o && ++u === n && (l = s), (p = h.nextSibling) !== null) break;
                  h = d, d = h.parentNode;
                }
                h = p;
              }
              t = a === -1 || l === -1 ? null : {
                start: a,
                end: l
              };
            } else t = null;
          }
          t = t || {
            start: 0,
            end: 0
          };
        } else t = null;
        for (Cf = {
          focusedElem: r,
          selectionRange: t
        }, Nc = false, G = e; G !== null; ) if (e = G, r = e.child, (e.subtreeFlags & 1028) !== 0 && r !== null) r.return = e, G = r;
        else for (; G !== null; ) {
          e = G;
          try {
            var m = e.alternate;
            if (e.flags & 1024) switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps, b = m.memoizedState, y = e.stateNode, w = y.getSnapshotBeforeUpdate(e.elementType === e.type ? g : ln(e.type, g), b);
                  y.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var v = e.stateNode.containerInfo;
                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
          } catch (S) {
            qe(e, e.return, S);
          }
          if (r = e.sibling, r !== null) {
            r.return = e.return, G = r;
            break;
          }
          G = e.return;
        }
        return m = ig, ig = false, m;
      }
      function Ca(r, e, t) {
        var n = e.updateQueue;
        if (n = n !== null ? n.lastEffect : null, n !== null) {
          var i = n = n.next;
          do {
            if ((i.tag & r) === r) {
              var o = i.destroy;
              i.destroy = void 0, o !== void 0 && Hf(e, t, o);
            }
            i = i.next;
          } while (i !== n);
        }
      }
      function Iu(r, e) {
        if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
          var t = e = e.next;
          do {
            if ((t.tag & r) === r) {
              var n = t.create;
              t.destroy = n();
            }
            t = t.next;
          } while (t !== e);
        }
      }
      function Bf(r) {
        var e = r.ref;
        if (e !== null) {
          var t = r.stateNode;
          switch (r.tag) {
            case 5:
              r = t;
              break;
            default:
              r = t;
          }
          typeof e == "function" ? e(r) : e.current = r;
        }
      }
      function r1(r) {
        var e = r.alternate;
        e !== null && (r.alternate = null, r1(e)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (e = r.stateNode, e !== null && (delete e[xn], delete e[Ja], delete e[Ef], delete e[gb], delete e[wb])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
      }
      function n1(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4;
      }
      function og(r) {
        e: for (; ; ) {
          for (; r.sibling === null; ) {
            if (r.return === null || n1(r.return)) return null;
            r = r.return;
          }
          for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
            if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
            r.child.return = r, r = r.child;
          }
          if (!(r.flags & 2)) return r.stateNode;
        }
      }
      function Uf(r, e, t) {
        var n = r.tag;
        if (n === 5 || n === 6) r = r.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(r, e) : t.insertBefore(r, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(r, t)) : (e = t, e.appendChild(r)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Dc));
        else if (n !== 4 && (r = r.child, r !== null)) for (Uf(r, e, t), r = r.sibling; r !== null; ) Uf(r, e, t), r = r.sibling;
      }
      function $f(r, e, t) {
        var n = r.tag;
        if (n === 5 || n === 6) r = r.stateNode, e ? t.insertBefore(r, e) : t.appendChild(r);
        else if (n !== 4 && (r = r.child, r !== null)) for ($f(r, e, t), r = r.sibling; r !== null; ) $f(r, e, t), r = r.sibling;
      }
      var Pt = null, un = false;
      function di(r, e, t) {
        for (t = t.child; t !== null; ) i1(r, e, t), t = t.sibling;
      }
      function i1(r, e, t) {
        if (Tn && typeof Tn.onCommitFiberUnmount == "function") try {
          Tn.onCommitFiberUnmount(ku, t);
        } catch {
        }
        switch (t.tag) {
          case 5:
            $t || ls(t, e);
          case 6:
            var n = Pt, i = un;
            Pt = null, di(r, e, t), Pt = n, un = i, Pt !== null && (un ? (r = Pt, t = t.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(t) : r.removeChild(t)) : Pt.removeChild(t.stateNode));
            break;
          case 18:
            Pt !== null && (un ? (r = Pt, t = t.stateNode, r.nodeType === 8 ? yd(r.parentNode, t) : r.nodeType === 1 && yd(r, t), Ga(r)) : yd(Pt, t.stateNode));
            break;
          case 4:
            n = Pt, i = un, Pt = t.stateNode.containerInfo, un = true, di(r, e, t), Pt = n, un = i;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!$t && (n = t.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
              i = n = n.next;
              do {
                var o = i, s = o.destroy;
                o = o.tag, s !== void 0 && (o & 2 || o & 4) && Hf(t, e, s), i = i.next;
              } while (i !== n);
            }
            di(r, e, t);
            break;
          case 1:
            if (!$t && (ls(t, e), n = t.stateNode, typeof n.componentWillUnmount == "function")) try {
              n.props = t.memoizedProps, n.state = t.memoizedState, n.componentWillUnmount();
            } catch (a) {
              qe(t, e, a);
            }
            di(r, e, t);
            break;
          case 21:
            di(r, e, t);
            break;
          case 22:
            t.mode & 1 ? ($t = (n = $t) || t.memoizedState !== null, di(r, e, t), $t = n) : di(r, e, t);
            break;
          default:
            di(r, e, t);
        }
      }
      function sg(r) {
        var e = r.updateQueue;
        if (e !== null) {
          r.updateQueue = null;
          var t = r.stateNode;
          t === null && (t = r.stateNode = new Ib()), e.forEach(function(n) {
            var i = $b.bind(null, r, n);
            t.has(n) || (t.add(n), n.then(i, i));
          });
        }
      }
      function sn(r, e) {
        var t = e.deletions;
        if (t !== null) for (var n = 0; n < t.length; n++) {
          var i = t[n];
          try {
            var o = r, s = e, a = s;
            e: for (; a !== null; ) {
              switch (a.tag) {
                case 5:
                  Pt = a.stateNode, un = false;
                  break e;
                case 3:
                  Pt = a.stateNode.containerInfo, un = true;
                  break e;
                case 4:
                  Pt = a.stateNode.containerInfo, un = true;
                  break e;
              }
              a = a.return;
            }
            if (Pt === null) throw Error(D(160));
            i1(o, s, i), Pt = null, un = false;
            var l = i.alternate;
            l !== null && (l.return = null), i.return = null;
          } catch (c) {
            qe(i, e, c);
          }
        }
        if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) o1(e, r), e = e.sibling;
      }
      function o1(r, e) {
        var t = r.alternate, n = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (sn(e, r), mn(r), n & 4) {
              try {
                Ca(3, r, r.return), Iu(3, r);
              } catch (g) {
                qe(r, r.return, g);
              }
              try {
                Ca(5, r, r.return);
              } catch (g) {
                qe(r, r.return, g);
              }
            }
            break;
          case 1:
            sn(e, r), mn(r), n & 512 && t !== null && ls(t, t.return);
            break;
          case 5:
            if (sn(e, r), mn(r), n & 512 && t !== null && ls(t, t.return), r.flags & 32) {
              var i = r.stateNode;
              try {
                Ua(i, "");
              } catch (g) {
                qe(r, r.return, g);
              }
            }
            if (n & 4 && (i = r.stateNode, i != null)) {
              var o = r.memoizedProps, s = t !== null ? t.memoizedProps : o, a = r.type, l = r.updateQueue;
              if (r.updateQueue = null, l !== null) try {
                a === "input" && o.type === "radio" && o.name != null && Em(i, o), hf(a, s);
                var c = hf(a, o);
                for (s = 0; s < l.length; s += 2) {
                  var u = l[s], h = l[s + 1];
                  u === "style" ? Mm(i, h) : u === "dangerouslySetInnerHTML" ? Am(i, h) : u === "children" ? Ua(i, h) : Dh(i, u, h, c);
                }
                switch (a) {
                  case "input":
                    lf(i, o);
                    break;
                  case "textarea":
                    Pm(i, o);
                    break;
                  case "select":
                    var d = i._wrapperState.wasMultiple;
                    i._wrapperState.wasMultiple = !!o.multiple;
                    var p = o.value;
                    p != null ? ps(i, !!o.multiple, p, false) : d !== !!o.multiple && (o.defaultValue != null ? ps(i, !!o.multiple, o.defaultValue, true) : ps(i, !!o.multiple, o.multiple ? [] : "", false));
                }
                i[Ja] = o;
              } catch (g) {
                qe(r, r.return, g);
              }
            }
            break;
          case 6:
            if (sn(e, r), mn(r), n & 4) {
              if (r.stateNode === null) throw Error(D(162));
              i = r.stateNode, o = r.memoizedProps;
              try {
                i.nodeValue = o;
              } catch (g) {
                qe(r, r.return, g);
              }
            }
            break;
          case 3:
            if (sn(e, r), mn(r), n & 4 && t !== null && t.memoizedState.isDehydrated) try {
              Ga(e.containerInfo);
            } catch (g) {
              qe(r, r.return, g);
            }
            break;
          case 4:
            sn(e, r), mn(r);
            break;
          case 13:
            sn(e, r), mn(r), i = r.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (wp = tt())), n & 4 && sg(r);
            break;
          case 22:
            if (u = t !== null && t.memoizedState !== null, r.mode & 1 ? ($t = (c = $t) || u, sn(e, r), $t = c) : sn(e, r), mn(r), n & 8192) {
              if (c = r.memoizedState !== null, (r.stateNode.isHidden = c) && !u && r.mode & 1) for (G = r, u = r.child; u !== null; ) {
                for (h = G = u; G !== null; ) {
                  switch (d = G, p = d.child, d.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Ca(4, d, d.return);
                      break;
                    case 1:
                      ls(d, d.return);
                      var m = d.stateNode;
                      if (typeof m.componentWillUnmount == "function") {
                        n = d, t = d.return;
                        try {
                          e = n, m.props = e.memoizedProps, m.state = e.memoizedState, m.componentWillUnmount();
                        } catch (g) {
                          qe(n, t, g);
                        }
                      }
                      break;
                    case 5:
                      ls(d, d.return);
                      break;
                    case 22:
                      if (d.memoizedState !== null) {
                        lg(h);
                        continue;
                      }
                  }
                  p !== null ? (p.return = d, G = p) : lg(h);
                }
                u = u.sibling;
              }
              e: for (u = null, h = r; ; ) {
                if (h.tag === 5) {
                  if (u === null) {
                    u = h;
                    try {
                      i = h.stateNode, c ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, l = h.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = jm("display", s));
                    } catch (g) {
                      qe(r, r.return, g);
                    }
                  }
                } else if (h.tag === 6) {
                  if (u === null) try {
                    h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                  } catch (g) {
                    qe(r, r.return, g);
                  }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === r) && h.child !== null) {
                  h.child.return = h, h = h.child;
                  continue;
                }
                if (h === r) break e;
                for (; h.sibling === null; ) {
                  if (h.return === null || h.return === r) break e;
                  u === h && (u = null), h = h.return;
                }
                u === h && (u = null), h.sibling.return = h.return, h = h.sibling;
              }
            }
            break;
          case 19:
            sn(e, r), mn(r), n & 4 && sg(r);
            break;
          case 21:
            break;
          default:
            sn(e, r), mn(r);
        }
      }
      function mn(r) {
        var e = r.flags;
        if (e & 2) {
          try {
            e: {
              for (var t = r.return; t !== null; ) {
                if (n1(t)) {
                  var n = t;
                  break e;
                }
                t = t.return;
              }
              throw Error(D(160));
            }
            switch (n.tag) {
              case 5:
                var i = n.stateNode;
                n.flags & 32 && (Ua(i, ""), n.flags &= -33);
                var o = og(r);
                $f(r, o, i);
                break;
              case 3:
              case 4:
                var s = n.stateNode.containerInfo, a = og(r);
                Uf(r, a, s);
                break;
              default:
                throw Error(D(161));
            }
          } catch (l) {
            qe(r, r.return, l);
          }
          r.flags &= -3;
        }
        e & 4096 && (r.flags &= -4097);
      }
      function Nb(r, e, t) {
        G = r, s1(r);
      }
      function s1(r, e, t) {
        for (var n = (r.mode & 1) !== 0; G !== null; ) {
          var i = G, o = i.child;
          if (i.tag === 22 && n) {
            var s = i.memoizedState !== null || Bl;
            if (!s) {
              var a = i.alternate, l = a !== null && a.memoizedState !== null || $t;
              a = Bl;
              var c = $t;
              if (Bl = s, ($t = l) && !c) for (G = i; G !== null; ) s = G, l = s.child, s.tag === 22 && s.memoizedState !== null ? cg(i) : l !== null ? (l.return = s, G = l) : cg(i);
              for (; o !== null; ) G = o, s1(o), o = o.sibling;
              G = i, Bl = a, $t = c;
            }
            ag(r);
          } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, G = o) : ag(r);
        }
      }
      function ag(r) {
        for (; G !== null; ) {
          var e = G;
          if (e.flags & 8772) {
            var t = e.alternate;
            try {
              if (e.flags & 8772) switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  $t || Iu(5, e);
                  break;
                case 1:
                  var n = e.stateNode;
                  if (e.flags & 4 && !$t) if (t === null) n.componentDidMount();
                  else {
                    var i = e.elementType === e.type ? t.memoizedProps : ln(e.type, t.memoizedProps);
                    n.componentDidUpdate(i, t.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                  }
                  var o = e.updateQueue;
                  o !== null && W_(e, o, n);
                  break;
                case 3:
                  var s = e.updateQueue;
                  if (s !== null) {
                    if (t = null, e.child !== null) switch (e.child.tag) {
                      case 5:
                        t = e.child.stateNode;
                        break;
                      case 1:
                        t = e.child.stateNode;
                    }
                    W_(e, s, t);
                  }
                  break;
                case 5:
                  var a = e.stateNode;
                  if (t === null && e.flags & 4) {
                    t = a;
                    var l = e.memoizedProps;
                    switch (e.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        l.autoFocus && t.focus();
                        break;
                      case "img":
                        l.src && (t.src = l.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (e.memoizedState === null) {
                    var c = e.alternate;
                    if (c !== null) {
                      var u = c.memoizedState;
                      if (u !== null) {
                        var h = u.dehydrated;
                        h !== null && Ga(h);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(D(163));
              }
              $t || e.flags & 512 && Bf(e);
            } catch (d) {
              qe(e, e.return, d);
            }
          }
          if (e === r) {
            G = null;
            break;
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, G = t;
            break;
          }
          G = e.return;
        }
      }
      function lg(r) {
        for (; G !== null; ) {
          var e = G;
          if (e === r) {
            G = null;
            break;
          }
          var t = e.sibling;
          if (t !== null) {
            t.return = e.return, G = t;
            break;
          }
          G = e.return;
        }
      }
      function cg(r) {
        for (; G !== null; ) {
          var e = G;
          try {
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                var t = e.return;
                try {
                  Iu(4, e);
                } catch (l) {
                  qe(e, t, l);
                }
                break;
              case 1:
                var n = e.stateNode;
                if (typeof n.componentDidMount == "function") {
                  var i = e.return;
                  try {
                    n.componentDidMount();
                  } catch (l) {
                    qe(e, i, l);
                  }
                }
                var o = e.return;
                try {
                  Bf(e);
                } catch (l) {
                  qe(e, o, l);
                }
                break;
              case 5:
                var s = e.return;
                try {
                  Bf(e);
                } catch (l) {
                  qe(e, s, l);
                }
            }
          } catch (l) {
            qe(e, e.return, l);
          }
          if (e === r) {
            G = null;
            break;
          }
          var a = e.sibling;
          if (a !== null) {
            a.return = e.return, G = a;
            break;
          }
          G = e.return;
        }
      }
      var Lb = Math.ceil, qc = si.ReactCurrentDispatcher, _p = si.ReactCurrentOwner, Kr = si.ReactCurrentBatchConfig, ve = 0, Ct = null, ut = null, jt = 0, Rr = 0, cs = Wi(0), wt = 0, nl = null, Ro = 0, zu = 0, gp = 0, ka = null, dr = null, wp = 0, Ms = 1 / 0, Hn = null, Kc = false, Vf = null, ji = null, Ul = false, vi = null, Jc = 0, Ra = 0, Wf = null, mc = -1, yc = 0;
      function or() {
        return ve & 6 ? tt() : mc !== -1 ? mc : mc = tt();
      }
      function Mi(r) {
        return r.mode & 1 ? ve & 2 && jt !== 0 ? jt & -jt : yb.transition !== null ? (yc === 0 && (yc = Vm()), yc) : (r = ke, r !== 0 || (r = window.event, r = r === void 0 ? 16 : Jm(r.type)), r) : 1;
      }
      function hn(r, e, t, n) {
        if (50 < Ra) throw Ra = 0, Wf = null, Error(D(185));
        ml(r, t, n), (!(ve & 2) || r !== Ct) && (r === Ct && (!(ve & 2) && (zu |= t), wt === 4 && wi(r, jt)), _r(r, n), t === 1 && ve === 0 && !(e.mode & 1) && (Ms = tt() + 500, Au && Gi()));
      }
      function _r(r, e) {
        var t = r.callbackNode;
        yv(r, e);
        var n = zc(r, r === Ct ? jt : 0);
        if (n === 0) t !== null && m_(t), r.callbackNode = null, r.callbackPriority = 0;
        else if (e = n & -n, r.callbackPriority !== e) {
          if (t != null && m_(t), e === 1) r.tag === 0 ? mb(ug.bind(null, r)) : g0(ug.bind(null, r)), pb(function() {
            !(ve & 6) && Gi();
          }), t = null;
          else {
            switch (Wm(n)) {
              case 1:
                t = $h;
                break;
              case 4:
                t = Um;
                break;
              case 16:
                t = Ic;
                break;
              case 536870912:
                t = $m;
                break;
              default:
                t = Ic;
            }
            t = p1(t, a1.bind(null, r));
          }
          r.callbackPriority = e, r.callbackNode = t;
        }
      }
      function a1(r, e) {
        if (mc = -1, yc = 0, ve & 6) throw Error(D(327));
        var t = r.callbackNode;
        if (ys() && r.callbackNode !== t) return null;
        var n = zc(r, r === Ct ? jt : 0);
        if (n === 0) return null;
        if (n & 30 || n & r.expiredLanes || e) e = Qc(r, n);
        else {
          e = n;
          var i = ve;
          ve |= 2;
          var o = c1();
          (Ct !== r || jt !== e) && (Hn = null, Ms = tt() + 500, ho(r, e));
          do
            try {
              Fb();
              break;
            } catch (a) {
              l1(r, a);
            }
          while (true);
          rp(), qc.current = o, ve = i, ut !== null ? e = 0 : (Ct = null, jt = 0, e = wt);
        }
        if (e !== 0) {
          if (e === 2 && (i = mf(r), i !== 0 && (n = i, e = Gf(r, i))), e === 1) throw t = nl, ho(r, 0), wi(r, n), _r(r, tt()), t;
          if (e === 6) wi(r, n);
          else {
            if (i = r.current.alternate, !(n & 30) && !Ob(i) && (e = Qc(r, n), e === 2 && (o = mf(r), o !== 0 && (n = o, e = Gf(r, o))), e === 1)) throw t = nl, ho(r, 0), wi(r, n), _r(r, tt()), t;
            switch (r.finishedWork = i, r.finishedLanes = n, e) {
              case 0:
              case 1:
                throw Error(D(345));
              case 2:
                ro(r, dr, Hn);
                break;
              case 3:
                if (wi(r, n), (n & 130023424) === n && (e = wp + 500 - tt(), 10 < e)) {
                  if (zc(r, 0) !== 0) break;
                  if (i = r.suspendedLanes, (i & n) !== n) {
                    or(), r.pingedLanes |= r.suspendedLanes & i;
                    break;
                  }
                  r.timeoutHandle = Rf(ro.bind(null, r, dr, Hn), e);
                  break;
                }
                ro(r, dr, Hn);
                break;
              case 4:
                if (wi(r, n), (n & 4194240) === n) break;
                for (e = r.eventTimes, i = -1; 0 < n; ) {
                  var s = 31 - fn(n);
                  o = 1 << s, s = e[s], s > i && (i = s), n &= ~o;
                }
                if (n = i, n = tt() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Lb(n / 1960)) - n, 10 < n) {
                  r.timeoutHandle = Rf(ro.bind(null, r, dr, Hn), n);
                  break;
                }
                ro(r, dr, Hn);
                break;
              case 5:
                ro(r, dr, Hn);
                break;
              default:
                throw Error(D(329));
            }
          }
        }
        return _r(r, tt()), r.callbackNode === t ? a1.bind(null, r) : null;
      }
      function Gf(r, e) {
        var t = ka;
        return r.current.memoizedState.isDehydrated && (ho(r, e).flags |= 256), r = Qc(r, e), r !== 2 && (e = dr, dr = t, e !== null && Yf(e)), r;
      }
      function Yf(r) {
        dr === null ? dr = r : dr.push.apply(dr, r);
      }
      function Ob(r) {
        for (var e = r; ; ) {
          if (e.flags & 16384) {
            var t = e.updateQueue;
            if (t !== null && (t = t.stores, t !== null)) for (var n = 0; n < t.length; n++) {
              var i = t[n], o = i.getSnapshot;
              i = i.value;
              try {
                if (!pn(o(), i)) return false;
              } catch {
                return false;
              }
            }
          }
          if (t = e.child, e.subtreeFlags & 16384 && t !== null) t.return = e, e = t;
          else {
            if (e === r) break;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === r) return true;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        }
        return true;
      }
      function wi(r, e) {
        for (e &= ~gp, e &= ~zu, r.suspendedLanes |= e, r.pingedLanes &= ~e, r = r.expirationTimes; 0 < e; ) {
          var t = 31 - fn(e), n = 1 << t;
          r[t] = -1, e &= ~n;
        }
      }
      function ug(r) {
        if (ve & 6) throw Error(D(327));
        ys();
        var e = zc(r, 0);
        if (!(e & 1)) return _r(r, tt()), null;
        var t = Qc(r, e);
        if (r.tag !== 0 && t === 2) {
          var n = mf(r);
          n !== 0 && (e = n, t = Gf(r, n));
        }
        if (t === 1) throw t = nl, ho(r, 0), wi(r, e), _r(r, tt()), t;
        if (t === 6) throw Error(D(345));
        return r.finishedWork = r.current.alternate, r.finishedLanes = e, ro(r, dr, Hn), _r(r, tt()), null;
      }
      function mp(r, e) {
        var t = ve;
        ve |= 1;
        try {
          return r(e);
        } finally {
          ve = t, ve === 0 && (Ms = tt() + 500, Au && Gi());
        }
      }
      function Eo(r) {
        vi !== null && vi.tag === 0 && !(ve & 6) && ys();
        var e = ve;
        ve |= 1;
        var t = Kr.transition, n = ke;
        try {
          if (Kr.transition = null, ke = 1, r) return r();
        } finally {
          ke = n, Kr.transition = t, ve = e, !(ve & 6) && Gi();
        }
      }
      function yp() {
        Rr = cs.current, Ie(cs);
      }
      function ho(r, e) {
        r.finishedWork = null, r.finishedLanes = 0;
        var t = r.timeoutHandle;
        if (t !== -1 && (r.timeoutHandle = -1, hb(t)), ut !== null) for (t = ut.return; t !== null; ) {
          var n = t;
          switch (Zh(n), n.tag) {
            case 1:
              n = n.type.childContextTypes, n != null && Fc();
              break;
            case 3:
              As(), Ie(hr), Ie(Xt), lp();
              break;
            case 5:
              ap(n);
              break;
            case 4:
              As();
              break;
            case 13:
              Ie(Ue);
              break;
            case 19:
              Ie(Ue);
              break;
            case 10:
              np(n.type._context);
              break;
            case 22:
            case 23:
              yp();
          }
          t = t.return;
        }
        if (Ct = r, ut = r = Ii(r.current, null), jt = Rr = e, wt = 0, nl = null, gp = zu = Ro = 0, dr = ka = null, ao !== null) {
          for (e = 0; e < ao.length; e++) if (t = ao[e], n = t.interleaved, n !== null) {
            t.interleaved = null;
            var i = n.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, n.next = s;
            }
            t.pending = n;
          }
          ao = null;
        }
        return r;
      }
      function l1(r, e) {
        do {
          var t = ut;
          try {
            if (rp(), _c.current = Xc, Yc) {
              for (var n = We.memoizedState; n !== null; ) {
                var i = n.queue;
                i !== null && (i.pending = null), n = n.next;
              }
              Yc = false;
            }
            if (ko = 0, xt = _t = We = null, xa = false, el = 0, _p.current = null, t === null || t.return === null) {
              wt = 1, nl = e, ut = null;
              break;
            }
            e: {
              var o = r, s = t.return, a = t, l = e;
              if (e = jt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                var c = l, u = a, h = u.tag;
                if (!(u.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                  var d = u.alternate;
                  d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null);
                }
                var p = J_(s);
                if (p !== null) {
                  p.flags &= -257, Q_(p, s, a, o, e), p.mode & 1 && K_(o, c, e), e = p, l = c;
                  var m = e.updateQueue;
                  if (m === null) {
                    var g = /* @__PURE__ */ new Set();
                    g.add(l), e.updateQueue = g;
                  } else m.add(l);
                  break e;
                } else {
                  if (!(e & 1)) {
                    K_(o, c, e), vp();
                    break e;
                  }
                  l = Error(D(426));
                }
              } else if (De && a.mode & 1) {
                var b = J_(s);
                if (b !== null) {
                  !(b.flags & 65536) && (b.flags |= 256), Q_(b, s, a, o, e), ep(js(l, a));
                  break e;
                }
              }
              o = l = js(l, a), wt !== 4 && (wt = 2), ka === null ? ka = [
                o
              ] : ka.push(o), o = s;
              do {
                switch (o.tag) {
                  case 3:
                    o.flags |= 65536, e &= -e, o.lanes |= e;
                    var y = W0(o, l, e);
                    V_(o, y);
                    break e;
                  case 1:
                    a = l;
                    var w = o.type, v = o.stateNode;
                    if (!(o.flags & 128) && (typeof w.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (ji === null || !ji.has(v)))) {
                      o.flags |= 65536, e &= -e, o.lanes |= e;
                      var S = G0(o, a, e);
                      V_(o, S);
                      break e;
                    }
                }
                o = o.return;
              } while (o !== null);
            }
            d1(t);
          } catch (C) {
            e = C, ut === t && t !== null && (ut = t = t.return);
            continue;
          }
          break;
        } while (true);
      }
      function c1() {
        var r = qc.current;
        return qc.current = Xc, r === null ? Xc : r;
      }
      function vp() {
        (wt === 0 || wt === 3 || wt === 2) && (wt = 4), Ct === null || !(Ro & 268435455) && !(zu & 268435455) || wi(Ct, jt);
      }
      function Qc(r, e) {
        var t = ve;
        ve |= 2;
        var n = c1();
        (Ct !== r || jt !== e) && (Hn = null, ho(r, e));
        do
          try {
            Db();
            break;
          } catch (i) {
            l1(r, i);
          }
        while (true);
        if (rp(), ve = t, qc.current = n, ut !== null) throw Error(D(261));
        return Ct = null, jt = 0, wt;
      }
      function Db() {
        for (; ut !== null; ) u1(ut);
      }
      function Fb() {
        for (; ut !== null && !uv(); ) u1(ut);
      }
      function u1(r) {
        var e = h1(r.alternate, r, Rr);
        r.memoizedProps = r.pendingProps, e === null ? d1(r) : ut = e, _p.current = null;
      }
      function d1(r) {
        var e = r;
        do {
          var t = e.alternate;
          if (r = e.return, e.flags & 32768) {
            if (t = Mb(t, e), t !== null) {
              t.flags &= 32767, ut = t;
              return;
            }
            if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
            else {
              wt = 6, ut = null;
              return;
            }
          } else if (t = jb(t, e, Rr), t !== null) {
            ut = t;
            return;
          }
          if (e = e.sibling, e !== null) {
            ut = e;
            return;
          }
          ut = e = r;
        } while (e !== null);
        wt === 0 && (wt = 5);
      }
      function ro(r, e, t) {
        var n = ke, i = Kr.transition;
        try {
          Kr.transition = null, ke = 1, Hb(r, e, t, n);
        } finally {
          Kr.transition = i, ke = n;
        }
        return null;
      }
      function Hb(r, e, t, n) {
        do
          ys();
        while (vi !== null);
        if (ve & 6) throw Error(D(327));
        t = r.finishedWork;
        var i = r.finishedLanes;
        if (t === null) return null;
        if (r.finishedWork = null, r.finishedLanes = 0, t === r.current) throw Error(D(177));
        r.callbackNode = null, r.callbackPriority = 0;
        var o = t.lanes | t.childLanes;
        if (vv(r, o), r === Ct && (ut = Ct = null, jt = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Ul || (Ul = true, p1(Ic, function() {
          return ys(), null;
        })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
          o = Kr.transition, Kr.transition = null;
          var s = ke;
          ke = 1;
          var a = ve;
          ve |= 4, _p.current = null, zb(r, t), o1(t, r), sb(Cf), Nc = !!xf, Cf = xf = null, r.current = t, Nb(t), dv(), ve = a, ke = s, Kr.transition = o;
        } else r.current = t;
        if (Ul && (Ul = false, vi = r, Jc = i), o = r.pendingLanes, o === 0 && (ji = null), pv(t.stateNode), _r(r, tt()), e !== null) for (n = r.onRecoverableError, t = 0; t < e.length; t++) i = e[t], n(i.value, {
          componentStack: i.stack,
          digest: i.digest
        });
        if (Kc) throw Kc = false, r = Vf, Vf = null, r;
        return Jc & 1 && r.tag !== 0 && ys(), o = r.pendingLanes, o & 1 ? r === Wf ? Ra++ : (Ra = 0, Wf = r) : Ra = 0, Gi(), null;
      }
      function ys() {
        if (vi !== null) {
          var r = Wm(Jc), e = Kr.transition, t = ke;
          try {
            if (Kr.transition = null, ke = 16 > r ? 16 : r, vi === null) var n = false;
            else {
              if (r = vi, vi = null, Jc = 0, ve & 6) throw Error(D(331));
              var i = ve;
              for (ve |= 4, G = r.current; G !== null; ) {
                var o = G, s = o.child;
                if (G.flags & 16) {
                  var a = o.deletions;
                  if (a !== null) {
                    for (var l = 0; l < a.length; l++) {
                      var c = a[l];
                      for (G = c; G !== null; ) {
                        var u = G;
                        switch (u.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Ca(8, u, o);
                        }
                        var h = u.child;
                        if (h !== null) h.return = u, G = h;
                        else for (; G !== null; ) {
                          u = G;
                          var d = u.sibling, p = u.return;
                          if (r1(u), u === c) {
                            G = null;
                            break;
                          }
                          if (d !== null) {
                            d.return = p, G = d;
                            break;
                          }
                          G = p;
                        }
                      }
                    }
                    var m = o.alternate;
                    if (m !== null) {
                      var g = m.child;
                      if (g !== null) {
                        m.child = null;
                        do {
                          var b = g.sibling;
                          g.sibling = null, g = b;
                        } while (g !== null);
                      }
                    }
                    G = o;
                  }
                }
                if (o.subtreeFlags & 2064 && s !== null) s.return = o, G = s;
                else e: for (; G !== null; ) {
                  if (o = G, o.flags & 2048) switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ca(9, o, o.return);
                  }
                  var y = o.sibling;
                  if (y !== null) {
                    y.return = o.return, G = y;
                    break e;
                  }
                  G = o.return;
                }
              }
              var w = r.current;
              for (G = w; G !== null; ) {
                s = G;
                var v = s.child;
                if (s.subtreeFlags & 2064 && v !== null) v.return = s, G = v;
                else e: for (s = w; G !== null; ) {
                  if (a = G, a.flags & 2048) try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Iu(9, a);
                    }
                  } catch (C) {
                    qe(a, a.return, C);
                  }
                  if (a === s) {
                    G = null;
                    break e;
                  }
                  var S = a.sibling;
                  if (S !== null) {
                    S.return = a.return, G = S;
                    break e;
                  }
                  G = a.return;
                }
              }
              if (ve = i, Gi(), Tn && typeof Tn.onPostCommitFiberRoot == "function") try {
                Tn.onPostCommitFiberRoot(ku, r);
              } catch {
              }
              n = true;
            }
            return n;
          } finally {
            ke = t, Kr.transition = e;
          }
        }
        return false;
      }
      function dg(r, e, t) {
        e = js(t, e), e = W0(r, e, 1), r = Ai(r, e, 1), e = or(), r !== null && (ml(r, 1, e), _r(r, e));
      }
      function qe(r, e, t) {
        if (r.tag === 3) dg(r, r, t);
        else for (; e !== null; ) {
          if (e.tag === 3) {
            dg(e, r, t);
            break;
          } else if (e.tag === 1) {
            var n = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (ji === null || !ji.has(n))) {
              r = js(t, r), r = G0(e, r, 1), e = Ai(e, r, 1), r = or(), e !== null && (ml(e, 1, r), _r(e, r));
              break;
            }
          }
          e = e.return;
        }
      }
      function Bb(r, e, t) {
        var n = r.pingCache;
        n !== null && n.delete(e), e = or(), r.pingedLanes |= r.suspendedLanes & t, Ct === r && (jt & t) === t && (wt === 4 || wt === 3 && (jt & 130023424) === jt && 500 > tt() - wp ? ho(r, 0) : gp |= t), _r(r, e);
      }
      function f1(r, e) {
        e === 0 && (r.mode & 1 ? (e = Ml, Ml <<= 1, !(Ml & 130023424) && (Ml = 4194304)) : e = 1);
        var t = or();
        r = Zn(r, e), r !== null && (ml(r, e, t), _r(r, t));
      }
      function Ub(r) {
        var e = r.memoizedState, t = 0;
        e !== null && (t = e.retryLane), f1(r, t);
      }
      function $b(r, e) {
        var t = 0;
        switch (r.tag) {
          case 13:
            var n = r.stateNode, i = r.memoizedState;
            i !== null && (t = i.retryLane);
            break;
          case 19:
            n = r.stateNode;
            break;
          default:
            throw Error(D(314));
        }
        n !== null && n.delete(e), f1(r, t);
      }
      var h1;
      h1 = function(r, e, t) {
        if (r !== null) if (r.memoizedProps !== e.pendingProps || hr.current) fr = true;
        else {
          if (!(r.lanes & t) && !(e.flags & 128)) return fr = false, Ab(r, e, t);
          fr = !!(r.flags & 131072);
        }
        else fr = false, De && e.flags & 1048576 && w0(e, Uc, e.index);
        switch (e.lanes = 0, e.tag) {
          case 2:
            var n = e.type;
            wc(r, e), r = e.pendingProps;
            var i = Es(e, Xt.current);
            ms(e, t), i = up(null, e, n, r, i, t);
            var o = dp();
            return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, pr(n) ? (o = true, Hc(e)) : o = false, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, op(e), i.updater = Mu, e.stateNode = i, i._reactInternals = e, If(e, n, r, t), e = Lf(null, e, n, true, o, t)) : (e.tag = 0, De && o && Qh(e), er(null, e, i, t), e = e.child), e;
          case 16:
            n = e.elementType;
            e: {
              switch (wc(r, e), r = e.pendingProps, i = n._init, n = i(n._payload), e.type = n, i = e.tag = Wb(n), r = ln(n, r), i) {
                case 0:
                  e = Nf(null, e, n, r, t);
                  break e;
                case 1:
                  e = tg(null, e, n, r, t);
                  break e;
                case 11:
                  e = Z_(null, e, n, r, t);
                  break e;
                case 14:
                  e = eg(null, e, n, ln(n.type, r), t);
                  break e;
              }
              throw Error(D(306, n, ""));
            }
            return e;
          case 0:
            return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : ln(n, i), Nf(r, e, n, i, t);
          case 1:
            return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : ln(n, i), tg(r, e, n, i, t);
          case 3:
            e: {
              if (K0(e), r === null) throw Error(D(387));
              n = e.pendingProps, o = e.memoizedState, i = o.element, x0(r, e), Wc(e, n, null, t);
              var s = e.memoizedState;
              if (n = s.element, o.isDehydrated) if (o = {
                element: n,
                isDehydrated: false,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions
              }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
                i = js(Error(D(423)), e), e = rg(r, e, n, t, i);
                break e;
              } else if (n !== i) {
                i = js(Error(D(424)), e), e = rg(r, e, n, t, i);
                break e;
              } else for (Mr = Ti(e.stateNode.containerInfo.firstChild), zr = e, De = true, dn = null, t = b0(e, null, n, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
              else {
                if (Ps(), n === i) {
                  e = ei(r, e, t);
                  break e;
                }
                er(r, e, n, t);
              }
              e = e.child;
            }
            return e;
          case 5:
            return C0(e), r === null && Af(e), n = e.type, i = e.pendingProps, o = r !== null ? r.memoizedProps : null, s = i.children, kf(n, i) ? s = null : o !== null && kf(n, o) && (e.flags |= 32), q0(r, e), er(r, e, s, t), e.child;
          case 6:
            return r === null && Af(e), null;
          case 13:
            return J0(r, e, t);
          case 4:
            return sp(e, e.stateNode.containerInfo), n = e.pendingProps, r === null ? e.child = Ts(e, null, n, t) : er(r, e, n, t), e.child;
          case 11:
            return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : ln(n, i), Z_(r, e, n, i, t);
          case 7:
            return er(r, e, e.pendingProps, t), e.child;
          case 8:
            return er(r, e, e.pendingProps.children, t), e.child;
          case 12:
            return er(r, e, e.pendingProps.children, t), e.child;
          case 10:
            e: {
              if (n = e.type._context, i = e.pendingProps, o = e.memoizedProps, s = i.value, je($c, n._currentValue), n._currentValue = s, o !== null) if (pn(o.value, s)) {
                if (o.children === i.children && !hr.current) {
                  e = ei(r, e, t);
                  break e;
                }
              } else for (o = e.child, o !== null && (o.return = e); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  s = o.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === n) {
                      if (o.tag === 1) {
                        l = qn(-1, t & -t), l.tag = 2;
                        var c = o.updateQueue;
                        if (c !== null) {
                          c = c.shared;
                          var u = c.pending;
                          u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l;
                        }
                      }
                      o.lanes |= t, l = o.alternate, l !== null && (l.lanes |= t), jf(o.return, t, e), a.lanes |= t;
                      break;
                    }
                    l = l.next;
                  }
                } else if (o.tag === 10) s = o.type === e.type ? null : o.child;
                else if (o.tag === 18) {
                  if (s = o.return, s === null) throw Error(D(341));
                  s.lanes |= t, a = s.alternate, a !== null && (a.lanes |= t), jf(s, t, e), s = o.sibling;
                } else s = o.child;
                if (s !== null) s.return = o;
                else for (s = o; s !== null; ) {
                  if (s === e) {
                    s = null;
                    break;
                  }
                  if (o = s.sibling, o !== null) {
                    o.return = s.return, s = o;
                    break;
                  }
                  s = s.return;
                }
                o = s;
              }
              er(r, e, i.children, t), e = e.child;
            }
            return e;
          case 9:
            return i = e.type, n = e.pendingProps.children, ms(e, t), i = Qr(i), n = n(i), e.flags |= 1, er(r, e, n, t), e.child;
          case 14:
            return n = e.type, i = ln(n, e.pendingProps), i = ln(n.type, i), eg(r, e, n, i, t);
          case 15:
            return Y0(r, e, e.type, e.pendingProps, t);
          case 17:
            return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : ln(n, i), wc(r, e), e.tag = 1, pr(n) ? (r = true, Hc(e)) : r = false, ms(e, t), V0(e, n, i), If(e, n, i, t), Lf(null, e, n, true, r, t);
          case 19:
            return Q0(r, e, t);
          case 22:
            return X0(r, e, t);
        }
        throw Error(D(156, e.tag));
      };
      function p1(r, e) {
        return Bm(r, e);
      }
      function Vb(r, e, t, n) {
        this.tag = r, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Xr(r, e, t, n) {
        return new Vb(r, e, t, n);
      }
      function bp(r) {
        return r = r.prototype, !(!r || !r.isReactComponent);
      }
      function Wb(r) {
        if (typeof r == "function") return bp(r) ? 1 : 0;
        if (r != null) {
          if (r = r.$$typeof, r === Hh) return 11;
          if (r === Bh) return 14;
        }
        return 2;
      }
      function Ii(r, e) {
        var t = r.alternate;
        return t === null ? (t = Xr(r.tag, e, r.key, r.mode), t.elementType = r.elementType, t.type = r.type, t.stateNode = r.stateNode, t.alternate = r, r.alternate = t) : (t.pendingProps = e, t.type = r.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = r.flags & 14680064, t.childLanes = r.childLanes, t.lanes = r.lanes, t.child = r.child, t.memoizedProps = r.memoizedProps, t.memoizedState = r.memoizedState, t.updateQueue = r.updateQueue, e = r.dependencies, t.dependencies = e === null ? null : {
          lanes: e.lanes,
          firstContext: e.firstContext
        }, t.sibling = r.sibling, t.index = r.index, t.ref = r.ref, t;
      }
      function vc(r, e, t, n, i, o) {
        var s = 2;
        if (n = r, typeof r == "function") bp(r) && (s = 1);
        else if (typeof r == "string") s = 5;
        else e: switch (r) {
          case Zo:
            return po(t.children, i, o, e);
          case Fh:
            s = 8, i |= 8;
            break;
          case rf:
            return r = Xr(12, t, e, i | 2), r.elementType = rf, r.lanes = o, r;
          case nf:
            return r = Xr(13, t, e, i), r.elementType = nf, r.lanes = o, r;
          case of:
            return r = Xr(19, t, e, i), r.elementType = of, r.lanes = o, r;
          case Cm:
            return Nu(t, i, o, e);
          default:
            if (typeof r == "object" && r !== null) switch (r.$$typeof) {
              case Sm:
                s = 10;
                break e;
              case xm:
                s = 9;
                break e;
              case Hh:
                s = 11;
                break e;
              case Bh:
                s = 14;
                break e;
              case pi:
                s = 16, n = null;
                break e;
            }
            throw Error(D(130, r == null ? r : typeof r, ""));
        }
        return e = Xr(s, t, e, i), e.elementType = r, e.type = n, e.lanes = o, e;
      }
      function po(r, e, t, n) {
        return r = Xr(7, r, n, e), r.lanes = t, r;
      }
      function Nu(r, e, t, n) {
        return r = Xr(22, r, n, e), r.elementType = Cm, r.lanes = t, r.stateNode = {
          isHidden: false
        }, r;
      }
      function Ed(r, e, t) {
        return r = Xr(6, r, null, e), r.lanes = t, r;
      }
      function Pd(r, e, t) {
        return e = Xr(4, r.children !== null ? r.children : [], r.key, e), e.lanes = t, e.stateNode = {
          containerInfo: r.containerInfo,
          pendingChildren: null,
          implementation: r.implementation
        }, e;
      }
      function Gb(r, e, t, n, i) {
        this.tag = e, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ld(0), this.expirationTimes = ld(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ld(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
      }
      function Sp(r, e, t, n, i, o, s, a, l) {
        return r = new Gb(r, e, t, a, l), e === 1 ? (e = 1, o === true && (e |= 8)) : e = 0, o = Xr(3, null, null, e), r.current = o, o.stateNode = r, o.memoizedState = {
          element: n,
          isDehydrated: t,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, op(o), r;
      }
      function Yb(r, e, t) {
        var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Qo,
          key: n == null ? null : "" + n,
          children: r,
          containerInfo: e,
          implementation: t
        };
      }
      function _1(r) {
        if (!r) return Di;
        r = r._reactInternals;
        e: {
          if (No(r) !== r || r.tag !== 1) throw Error(D(170));
          var e = r;
          do {
            switch (e.tag) {
              case 3:
                e = e.stateNode.context;
                break e;
              case 1:
                if (pr(e.type)) {
                  e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            e = e.return;
          } while (e !== null);
          throw Error(D(171));
        }
        if (r.tag === 1) {
          var t = r.type;
          if (pr(t)) return _0(r, t, e);
        }
        return e;
      }
      function g1(r, e, t, n, i, o, s, a, l) {
        return r = Sp(t, n, true, r, i, o, s, a, l), r.context = _1(null), t = r.current, n = or(), i = Mi(t), o = qn(n, i), o.callback = e ?? null, Ai(t, o, i), r.current.lanes = i, ml(r, i, n), _r(r, n), r;
      }
      function Lu(r, e, t, n) {
        var i = e.current, o = or(), s = Mi(i);
        return t = _1(t), e.context === null ? e.context = t : e.pendingContext = t, e = qn(o, s), e.payload = {
          element: r
        }, n = n === void 0 ? null : n, n !== null && (e.callback = n), r = Ai(i, e, s), r !== null && (hn(r, i, s, o), pc(r, i, s)), s;
      }
      function Zc(r) {
        if (r = r.current, !r.child) return null;
        switch (r.child.tag) {
          case 5:
            return r.child.stateNode;
          default:
            return r.child.stateNode;
        }
      }
      function fg(r, e) {
        if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
          var t = r.retryLane;
          r.retryLane = t !== 0 && t < e ? t : e;
        }
      }
      function xp(r, e) {
        fg(r, e), (r = r.alternate) && fg(r, e);
      }
      function Xb() {
        return null;
      }
      var w1 = typeof reportError == "function" ? reportError : function(r) {
        console.error(r);
      };
      function Cp(r) {
        this._internalRoot = r;
      }
      Ou.prototype.render = Cp.prototype.render = function(r) {
        var e = this._internalRoot;
        if (e === null) throw Error(D(409));
        Lu(r, e, null, null);
      };
      Ou.prototype.unmount = Cp.prototype.unmount = function() {
        var r = this._internalRoot;
        if (r !== null) {
          this._internalRoot = null;
          var e = r.containerInfo;
          Eo(function() {
            Lu(null, r, null, null);
          }), e[Qn] = null;
        }
      };
      function Ou(r) {
        this._internalRoot = r;
      }
      Ou.prototype.unstable_scheduleHydration = function(r) {
        if (r) {
          var e = Xm();
          r = {
            blockedOn: null,
            target: r,
            priority: e
          };
          for (var t = 0; t < gi.length && e !== 0 && e < gi[t].priority; t++) ;
          gi.splice(t, 0, r), t === 0 && Km(r);
        }
      };
      function kp(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
      }
      function Du(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
      }
      function hg() {
      }
      function qb(r, e, t, n, i) {
        if (i) {
          if (typeof n == "function") {
            var o = n;
            n = function() {
              var c = Zc(s);
              o.call(c);
            };
          }
          var s = g1(e, n, r, 0, null, false, false, "", hg);
          return r._reactRootContainer = s, r[Qn] = s.current, qa(r.nodeType === 8 ? r.parentNode : r), Eo(), s;
        }
        for (; i = r.lastChild; ) r.removeChild(i);
        if (typeof n == "function") {
          var a = n;
          n = function() {
            var c = Zc(l);
            a.call(c);
          };
        }
        var l = Sp(r, 0, false, null, null, false, false, "", hg);
        return r._reactRootContainer = l, r[Qn] = l.current, qa(r.nodeType === 8 ? r.parentNode : r), Eo(function() {
          Lu(e, l, t, n);
        }), l;
      }
      function Fu(r, e, t, n, i) {
        var o = t._reactRootContainer;
        if (o) {
          var s = o;
          if (typeof i == "function") {
            var a = i;
            i = function() {
              var l = Zc(s);
              a.call(l);
            };
          }
          Lu(e, s, r, i);
        } else s = qb(t, e, r, i, n);
        return Zc(s);
      }
      Gm = function(r) {
        switch (r.tag) {
          case 3:
            var e = r.stateNode;
            if (e.current.memoizedState.isDehydrated) {
              var t = ca(e.pendingLanes);
              t !== 0 && (Vh(e, t | 1), _r(e, tt()), !(ve & 6) && (Ms = tt() + 500, Gi()));
            }
            break;
          case 13:
            Eo(function() {
              var n = Zn(r, 1);
              if (n !== null) {
                var i = or();
                hn(n, r, 1, i);
              }
            }), xp(r, 1);
        }
      };
      Wh = function(r) {
        if (r.tag === 13) {
          var e = Zn(r, 134217728);
          if (e !== null) {
            var t = or();
            hn(e, r, 134217728, t);
          }
          xp(r, 134217728);
        }
      };
      Ym = function(r) {
        if (r.tag === 13) {
          var e = Mi(r), t = Zn(r, e);
          if (t !== null) {
            var n = or();
            hn(t, r, e, n);
          }
          xp(r, e);
        }
      };
      Xm = function() {
        return ke;
      };
      qm = function(r, e) {
        var t = ke;
        try {
          return ke = r, e();
        } finally {
          ke = t;
        }
      };
      _f = function(r, e, t) {
        switch (e) {
          case "input":
            if (lf(r, t), e = t.name, t.type === "radio" && e != null) {
              for (t = r; t.parentNode; ) t = t.parentNode;
              for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
                var n = t[e];
                if (n !== r && n.form === r.form) {
                  var i = Tu(n);
                  if (!i) throw Error(D(90));
                  Rm(n), lf(n, i);
                }
              }
            }
            break;
          case "textarea":
            Pm(r, t);
            break;
          case "select":
            e = t.value, e != null && ps(r, !!t.multiple, e, false);
        }
      };
      Nm = mp;
      Lm = Eo;
      var Kb = {
        usingClientEntryPoint: false,
        Events: [
          vl,
          ns,
          Tu,
          Im,
          zm,
          mp
        ]
      }, ra = {
        findFiberByHostInstance: so,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
      }, Jb = {
        bundleType: ra.bundleType,
        version: ra.version,
        rendererPackageName: ra.rendererPackageName,
        rendererConfig: ra.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: si.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(r) {
          return r = Fm(r), r === null ? null : r.stateNode;
        },
        findFiberByHostInstance: ra.findFiberByHostInstance || Xb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!$l.isDisabled && $l.supportsFiber) try {
          ku = $l.inject(Jb), Tn = $l;
        } catch {
        }
      }
      Fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kb;
      Fr.createPortal = function(r, e) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!kp(e)) throw Error(D(200));
        return Yb(r, e, null, t);
      };
      Fr.createRoot = function(r, e) {
        if (!kp(r)) throw Error(D(299));
        var t = false, n = "", i = w1;
        return e != null && (e.unstable_strictMode === true && (t = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Sp(r, 1, false, null, null, t, false, n, i), r[Qn] = e.current, qa(r.nodeType === 8 ? r.parentNode : r), new Cp(e);
      };
      Fr.findDOMNode = function(r) {
        if (r == null) return null;
        if (r.nodeType === 1) return r;
        var e = r._reactInternals;
        if (e === void 0) throw typeof r.render == "function" ? Error(D(188)) : (r = Object.keys(r).join(","), Error(D(268, r)));
        return r = Fm(e), r = r === null ? null : r.stateNode, r;
      };
      Fr.flushSync = function(r) {
        return Eo(r);
      };
      Fr.hydrate = function(r, e, t) {
        if (!Du(e)) throw Error(D(200));
        return Fu(null, r, e, true, t);
      };
      Fr.hydrateRoot = function(r, e, t) {
        if (!kp(r)) throw Error(D(405));
        var n = t != null && t.hydratedSources || null, i = false, o = "", s = w1;
        if (t != null && (t.unstable_strictMode === true && (i = true), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), e = g1(e, null, r, 1, t ?? null, i, false, o, s), r[Qn] = e.current, qa(r), n) for (r = 0; r < n.length; r++) t = n[r], i = t._getVersion, i = i(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [
          t,
          i
        ] : e.mutableSourceEagerHydrationData.push(t, i);
        return new Ou(e);
      };
      Fr.render = function(r, e, t) {
        if (!Du(e)) throw Error(D(200));
        return Fu(null, r, e, false, t);
      };
      Fr.unmountComponentAtNode = function(r) {
        if (!Du(r)) throw Error(D(40));
        return r._reactRootContainer ? (Eo(function() {
          Fu(null, null, r, false, function() {
            r._reactRootContainer = null, r[Qn] = null;
          });
        }), true) : false;
      };
      Fr.unstable_batchedUpdates = mp;
      Fr.unstable_renderSubtreeIntoContainer = function(r, e, t, n) {
        if (!Du(t)) throw Error(D(200));
        if (r == null || r._reactInternals === void 0) throw Error(D(38));
        return Fu(r, e, t, false, n);
      };
      Fr.version = "18.3.1-next-f1338f8080-20240426";
      function m1() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m1);
        } catch (r) {
          console.error(r);
        }
      }
      m1(), mm.exports = Fr;
      var Qb = mm.exports, y1, pg = Qb;
      y1 = pg.createRoot, pg.hydrateRoot;
      function eu() {
        return eu = Object.assign ? Object.assign.bind() : function(r) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
          }
          return r;
        }, eu.apply(this, arguments);
      }
      var co;
      (function(r) {
        r.Pop = "POP", r.Push = "PUSH", r.Replace = "REPLACE";
      })(co || (co = {}));
      const _g = "popstate";
      function Zb(r) {
        r === void 0 && (r = {});
        function e(i, o) {
          let { pathname: s = "/", search: a = "", hash: l = "" } = Rp(i.location.hash.substr(1));
          return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), Xf("", {
            pathname: s,
            search: a,
            hash: l
          }, o.state && o.state.usr || null, o.state && o.state.key || "default");
        }
        function t(i, o) {
          let s = i.document.querySelector("base"), a = "";
          if (s && s.getAttribute("href")) {
            let l = i.location.href, c = l.indexOf("#");
            a = c === -1 ? l : l.slice(0, c);
          }
          return a + "#" + (typeof o == "string" ? o : b1(o));
        }
        function n(i, o) {
          eS(i.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")");
        }
        return rS(e, t, n, r);
      }
      function v1(r, e) {
        if (r === false || r === null || typeof r > "u") throw new Error(e);
      }
      function eS(r, e) {
        if (!r) {
          typeof console < "u" && console.warn(e);
          try {
            throw new Error(e);
          } catch {
          }
        }
      }
      function tS() {
        return Math.random().toString(36).substr(2, 8);
      }
      function gg(r, e) {
        return {
          usr: r.state,
          key: r.key,
          idx: e
        };
      }
      function Xf(r, e, t, n) {
        return t === void 0 && (t = null), eu({
          pathname: typeof r == "string" ? r : r.pathname,
          search: "",
          hash: ""
        }, typeof e == "string" ? Rp(e) : e, {
          state: t,
          key: e && e.key || n || tS()
        });
      }
      function b1(r) {
        let { pathname: e = "/", search: t = "", hash: n = "" } = r;
        return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
      }
      function Rp(r) {
        let e = {};
        if (r) {
          let t = r.indexOf("#");
          t >= 0 && (e.hash = r.substr(t), r = r.substr(0, t));
          let n = r.indexOf("?");
          n >= 0 && (e.search = r.substr(n), r = r.substr(0, n)), r && (e.pathname = r);
        }
        return e;
      }
      function rS(r, e, t, n) {
        n === void 0 && (n = {});
        let { window: i = document.defaultView, v5Compat: o = false } = n, s = i.history, a = co.Pop, l = null, c = u();
        c == null && (c = 0, s.replaceState(eu({}, s.state, {
          idx: c
        }), ""));
        function u() {
          return (s.state || {
            idx: null
          }).idx;
        }
        function h() {
          a = co.Pop;
          let b = u(), y = b == null ? null : b - c;
          c = b, l && l({
            action: a,
            location: g.location,
            delta: y
          });
        }
        function d(b, y) {
          a = co.Push;
          let w = Xf(g.location, b, y);
          t && t(w, b), c = u() + 1;
          let v = gg(w, c), S = g.createHref(w);
          try {
            s.pushState(v, "", S);
          } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            i.location.assign(S);
          }
          o && l && l({
            action: a,
            location: g.location,
            delta: 1
          });
        }
        function p(b, y) {
          a = co.Replace;
          let w = Xf(g.location, b, y);
          t && t(w, b), c = u();
          let v = gg(w, c), S = g.createHref(w);
          s.replaceState(v, "", S), o && l && l({
            action: a,
            location: g.location,
            delta: 0
          });
        }
        function m(b) {
          let y = i.location.origin !== "null" ? i.location.origin : i.location.href, w = typeof b == "string" ? b : b1(b);
          return w = w.replace(/ $/, "%20"), v1(y, "No window.location.(origin|href) available to create URL for href: " + w), new URL(w, y);
        }
        let g = {
          get action() {
            return a;
          },
          get location() {
            return r(i, s);
          },
          listen(b) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(_g, h), l = b, () => {
              i.removeEventListener(_g, h), l = null;
            };
          },
          createHref(b) {
            return e(i, b);
          },
          createURL: m,
          encodeLocation(b) {
            let y = m(b);
            return {
              pathname: y.pathname,
              search: y.search,
              hash: y.hash
            };
          },
          push: d,
          replace: p,
          go(b) {
            return s.go(b);
          }
        };
        return g;
      }
      var wg;
      (function(r) {
        r.data = "data", r.deferred = "deferred", r.redirect = "redirect", r.error = "error";
      })(wg || (wg = {}));
      function nS(r, e) {
        if (e === "/") return r;
        if (!r.toLowerCase().startsWith(e.toLowerCase())) return null;
        let t = e.endsWith("/") ? e.length - 1 : e.length, n = r.charAt(t);
        return n && n !== "/" ? null : r.slice(t) || "/";
      }
      const S1 = [
        "post",
        "put",
        "patch",
        "delete"
      ];
      new Set(S1);
      const iS = [
        "get",
        ...S1
      ];
      new Set(iS);
      function qf() {
        return qf = Object.assign ? Object.assign.bind() : function(r) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
          }
          return r;
        }, qf.apply(this, arguments);
      }
      const oS = F.createContext(null), x1 = F.createContext(null);
      function sS() {
        return F.useContext(x1) != null;
      }
      function aS(r, e) {
        r == null ? void 0 : r.v7_startTransition, r == null ? void 0 : r.v7_relativeSplatPath;
      }
      function lS(r) {
        let { basename: e = "/", children: t = null, location: n, navigationType: i = co.Pop, navigator: o, static: s = false, future: a } = r;
        sS() && v1(false);
        let l = e.replace(/^\/*/, "/"), c = F.useMemo(() => ({
          basename: l,
          navigator: o,
          static: s,
          future: qf({
            v7_relativeSplatPath: false
          }, a)
        }), [
          l,
          a,
          o,
          s
        ]);
        typeof n == "string" && (n = Rp(n));
        let { pathname: u = "/", search: h = "", hash: d = "", state: p = null, key: m = "default" } = n, g = F.useMemo(() => {
          let b = nS(u, l);
          return b == null ? null : {
            location: {
              pathname: b,
              search: h,
              hash: d,
              state: p,
              key: m
            },
            navigationType: i
          };
        }, [
          l,
          u,
          h,
          d,
          p,
          m,
          i
        ]);
        return g == null ? null : F.createElement(oS.Provider, {
          value: c
        }, F.createElement(x1.Provider, {
          children: t,
          value: g
        }));
      }
      new Promise(() => {
      });
      const cS = "6";
      try {
        window.__reactRouterVersion = cS;
      } catch {
      }
      const uS = "startTransition", mg = B2[uS];
      function dS(r) {
        let { basename: e, children: t, future: n, window: i } = r, o = F.useRef();
        o.current == null && (o.current = Zb({
          window: i,
          v5Compat: true
        }));
        let s = o.current, [a, l] = F.useState({
          action: s.action,
          location: s.location
        }), { v7_startTransition: c } = n || {}, u = F.useCallback((h) => {
          c && mg ? mg(() => l(h)) : l(h);
        }, [
          l,
          c
        ]);
        return F.useLayoutEffect(() => s.listen(u), [
          s,
          u
        ]), F.useEffect(() => aS(n), [
          n
        ]), F.createElement(lS, {
          basename: e,
          children: t,
          location: a.location,
          navigationType: a.action,
          navigator: s,
          future: n
        });
      }
      var yg;
      (function(r) {
        r.UseScrollRestoration = "useScrollRestoration", r.UseSubmit = "useSubmit", r.UseSubmitFetcher = "useSubmitFetcher", r.UseFetcher = "useFetcher", r.useViewTransitionState = "useViewTransitionState";
      })(yg || (yg = {}));
      var vg;
      (function(r) {
        r.UseFetcher = "useFetcher", r.UseFetchers = "useFetchers", r.UseScrollRestoration = "useScrollRestoration";
      })(vg || (vg = {}));
      const fS = (r, e, t, n) => {
        var _a2, _b2, _c2, _d2;
        const i = [
          t,
          {
            code: e,
            ...n || {}
          }
        ];
        if ((_b2 = (_a2 = r == null ? void 0 : r.services) == null ? void 0 : _a2.logger) == null ? void 0 : _b2.forward) return r.services.logger.forward(i, "warn", "react-i18next::", true);
        _o(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), ((_d2 = (_c2 = r == null ? void 0 : r.services) == null ? void 0 : _c2.logger) == null ? void 0 : _d2.warn) ? r.services.logger.warn(...i) : (console == null ? void 0 : console.warn) && console.warn(...i);
      }, bg = {}, Kf = (r, e, t, n) => {
        _o(t) && bg[t] || (_o(t) && (bg[t] = /* @__PURE__ */ new Date()), fS(r, e, t, n));
      }, C1 = (r, e) => () => {
        if (r.isInitialized) e();
        else {
          const t = () => {
            setTimeout(() => {
              r.off("initialized", t);
            }, 0), e();
          };
          r.on("initialized", t);
        }
      }, Jf = (r, e, t) => {
        r.loadNamespaces(e, C1(r, t));
      }, Sg = (r, e, t, n) => {
        if (_o(t) && (t = [
          t
        ]), r.options.preload && r.options.preload.indexOf(e) > -1) return Jf(r, t, n);
        t.forEach((i) => {
          r.options.ns.indexOf(i) < 0 && r.options.ns.push(i);
        }), r.loadLanguages(e, C1(r, n));
      }, hS = (r, e, t = {}) => !e.languages || !e.languages.length ? (Kf(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
        languages: e.languages
      }), true) : e.hasLoadedNamespace(r, {
        lng: t.lng,
        precheck: (n, i) => {
          var _a2;
          if (((_a2 = t.bindI18n) == null ? void 0 : _a2.indexOf("languageChanging")) > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !i(n.isLanguageChangingTo, r)) return false;
        }
      }), _o = (r) => typeof r == "string", pS = (r) => typeof r == "object" && r !== null, _S = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, gS = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "\xA9",
        "&#169;": "\xA9",
        "&reg;": "\xAE",
        "&#174;": "\xAE",
        "&hellip;": "\u2026",
        "&#8230;": "\u2026",
        "&#x2F;": "/",
        "&#47;": "/"
      }, wS = (r) => gS[r], mS = (r) => r.replace(_S, wS);
      let Qf = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: true,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: [
          "br",
          "strong",
          "i",
          "p"
        ],
        useSuspense: true,
        unescape: mS
      };
      const yS = (r = {}) => {
        Qf = {
          ...Qf,
          ...r
        };
      }, vS = () => Qf;
      let k1;
      const bS = (r) => {
        k1 = r;
      }, SS = () => k1, xS = {
        type: "3rdParty",
        init(r) {
          yS(r.options.react), bS(r);
        }
      }, CS = F.createContext();
      class kS {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((t) => {
            this.usedNamespaces[t] || (this.usedNamespaces[t] = true);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      const RS = (r, e) => {
        const t = F.useRef();
        return F.useEffect(() => {
          t.current = r;
        }, [
          r,
          e
        ]), t.current;
      }, R1 = (r, e, t, n) => r.getFixedT(e, t, n), ES = (r, e, t, n) => F.useCallback(R1(r, e, t, n), [
        r,
        e,
        t,
        n
      ]), Lo = (r, e = {}) => {
        var _a2, _b2, _c2, _d2;
        const { i18n: t } = e, { i18n: n, defaultNS: i } = F.useContext(CS) || {}, o = t || n || SS();
        if (o && !o.reportNamespaces && (o.reportNamespaces = new kS()), !o) {
          Kf(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
          const S = (E, k) => _o(k) ? k : pS(k) && _o(k.defaultValue) ? k.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, C = [
            S,
            {},
            false
          ];
          return C.t = S, C.i18n = {}, C.ready = false, C;
        }
        ((_a2 = o.options.react) == null ? void 0 : _a2.wait) && Kf(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
        const s = {
          ...vS(),
          ...o.options.react,
          ...e
        }, { useSuspense: a, keyPrefix: l } = s;
        let c = i || ((_b2 = o.options) == null ? void 0 : _b2.defaultNS);
        c = _o(c) ? [
          c
        ] : c || [
          "translation"
        ], (_d2 = (_c2 = o.reportNamespaces).addUsedNamespaces) == null ? void 0 : _d2.call(_c2, c);
        const u = (o.isInitialized || o.initializedStoreOnce) && c.every((S) => hS(S, o, s)), h = ES(o, e.lng || null, s.nsMode === "fallback" ? c : c[0], l), d = () => h, p = () => R1(o, e.lng || null, s.nsMode === "fallback" ? c : c[0], l), [m, g] = F.useState(d);
        let b = c.join();
        e.lng && (b = `${e.lng}${b}`);
        const y = RS(b), w = F.useRef(true);
        F.useEffect(() => {
          const { bindI18n: S, bindI18nStore: C } = s;
          w.current = true, !u && !a && (e.lng ? Sg(o, e.lng, c, () => {
            w.current && g(p);
          }) : Jf(o, c, () => {
            w.current && g(p);
          })), u && y && y !== b && w.current && g(p);
          const E = () => {
            w.current && g(p);
          };
          return S && (o == null ? void 0 : o.on(S, E)), C && (o == null ? void 0 : o.store.on(C, E)), () => {
            w.current = false, o && (S == null ? void 0 : S.split(" ").forEach((k) => o.off(k, E))), C && o && C.split(" ").forEach((k) => o.store.off(k, E));
          };
        }, [
          o,
          b
        ]), F.useEffect(() => {
          w.current && u && g(d);
        }, [
          o,
          l,
          u
        ]);
        const v = [
          m,
          o,
          u
        ];
        if (v.t = m, v.i18n = o, v.ready = u, u || !u && !a) return v;
        throw new Promise((S) => {
          e.lng ? Sg(o, e.lng, c, () => S()) : Jf(o, c, () => S());
        });
      }, E1 = F.createContext(void 0), PS = ({ children: r }) => {
        const [e, t] = F.useState(() => localStorage.getItem("theme") || "dark");
        F.useEffect(() => {
          localStorage.setItem("theme", e), document.documentElement.setAttribute("data-theme", e);
        }, [
          e
        ]);
        const n = () => {
          t((i) => i === "light" ? "dark" : "light");
        };
        return P.jsx(E1.Provider, {
          value: {
            theme: e,
            toggleTheme: n
          },
          children: r
        });
      }, P1 = () => {
        const r = F.useContext(E1);
        if (r === void 0) throw new Error("useTheme must be used within a ThemeProvider");
        return r;
      }, TS = () => {
        const { t: r, i18n: e } = Lo(), { theme: t, toggleTheme: n } = P1(), [i, o] = F.useState(false), s = [
          {
            id: "about",
            label: r("header.about")
          },
          {
            id: "skills",
            label: r("header.skills")
          },
          {
            id: "portfolio",
            label: r("header.portfolio")
          },
          {
            id: "experience",
            label: r("header.experience")
          },
          {
            id: "contacts",
            label: r("header.contacts")
          }
        ];
        F.useEffect(() => (i ? document.body.classList.add("mobile-menu-open") : document.body.classList.remove("mobile-menu-open"), () => {
          document.body.classList.remove("mobile-menu-open");
        }), [
          i
        ]);
        const a = () => {
          o(false);
        }, l = () => {
          o((u) => !u);
        }, c = () => {
          const u = e.language === "ru" ? "en" : "ru";
          e.changeLanguage(u);
        };
        return P.jsxs("header", {
          className: "header",
          children: [
            P.jsxs("div", {
              className: "header-container",
              children: [
                P.jsxs("button", {
                  className: `mobile-menu-toggle burger ${i ? "active" : ""}`,
                  onClick: l,
                  "aria-label": r(i ? "header.closeMenu" : "header.openMenu"),
                  children: [
                    P.jsx("span", {
                      className: "burger-bar top"
                    }),
                    P.jsx("span", {
                      className: "burger-bar middle"
                    }),
                    P.jsx("span", {
                      className: "burger-bar bottom"
                    })
                  ]
                }),
                P.jsx("nav", {
                  className: "header-nav",
                  children: P.jsx("ul", {
                    className: "nav-list",
                    children: s.map((u) => P.jsx("li", {
                      className: "nav-item",
                      children: P.jsx("a", {
                        href: `#${u.id}`,
                        className: "nav-link",
                        children: u.label
                      })
                    }, u.id))
                  })
                }),
                P.jsxs("div", {
                  className: `mobile-menu ${i ? "active" : ""}`,
                  children: [
                    P.jsx("div", {
                      className: "menu-header",
                      children: P.jsx("span", {
                        className: "menu-title",
                        children: r("header.menu")
                      })
                    }),
                    P.jsx("div", {
                      className: "mobile-menu-content",
                      children: P.jsxs("ul", {
                        className: "mobile-content-nav",
                        children: [
                          s.map((u) => P.jsx("li", {
                            className: "mobile-content-item",
                            children: P.jsx("a", {
                              href: `#${u.id}`,
                              className: "mobile-content-link",
                              onClick: a,
                              children: u.label
                            })
                          }, u.id)),
                          P.jsx("li", {
                            className: "mobile-content-item mobile-controls",
                            children: P.jsxs("div", {
                              className: "mobile-buttons",
                              children: [
                                P.jsx("button", {
                                  className: "mobile-language-toggle",
                                  onClick: c,
                                  children: r("header.language")
                                }),
                                P.jsx("button", {
                                  className: "mobile-theme-toggle",
                                  onClick: n,
                                  children: t === "light" ? "\u{1F319}" : "\u2600\uFE0F"
                                })
                              ]
                            })
                          })
                        ]
                      })
                    })
                  ]
                })
              ]
            }),
            P.jsxs("div", {
              className: "header-controls",
              children: [
                P.jsx("button", {
                  className: "language-toggle",
                  onClick: c,
                  "aria-label": "Change language",
                  children: r("header.language")
                }),
                P.jsx("button", {
                  className: "theme-toggle",
                  onClick: n,
                  "aria-label": r("header.switchTheme", {
                    theme: r(t === "light" ? "header.darkTheme" : "header.lightTheme")
                  }),
                  children: t === "light" ? "\u{1F319}" : "\u2600\uFE0F"
                })
              ]
            })
          ]
        });
      }, AS = "/pr/assets/rapier_wasm2d_bg-CHH7RTe6.wasm", jS = async (r = {}, e) => {
        let t;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let i;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") i = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const o = atob(n);
            i = new Uint8Array(o.length);
            for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
          } else throw new Error("Cannot decode base64-encoded data URL");
          t = await WebAssembly.instantiate(i, r);
        } else {
          const n = await fetch(e), i = n.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(n, r);
          else {
            const o = await n.arrayBuffer();
            t = await WebAssembly.instantiate(o, r);
          }
        }
        return t.instance.exports;
      };
      let f;
      function MS(r) {
        f = r;
      }
      const me = new Array(128).fill(void 0);
      me.push(void 0, null, true, false);
      function Ce(r) {
        return me[r];
      }
      let Ea = me.length;
      function dt(r) {
        Ea === me.length && me.push(me.length + 1);
        const e = Ea;
        return Ea = me[e], me[e] = r, e;
      }
      function Ep(r, e) {
        try {
          return r.apply(this, e);
        } catch (t) {
          f.__wbindgen_export_0(dt(t));
        }
      }
      function Q(r) {
        return r == null;
      }
      let Uo = null;
      function Bt() {
        return (Uo === null || Uo.buffer.detached === true || Uo.buffer.detached === void 0 && Uo.buffer !== f.memory.buffer) && (Uo = new DataView(f.memory.buffer)), Uo;
      }
      function IS(r) {
        r < 132 || (me[r] = Ea, Ea = r);
      }
      function tu(r) {
        const e = Ce(r);
        return IS(r), e;
      }
      const zS = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let T1 = new zS("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      T1.decode();
      let Vl = null;
      function NS() {
        return (Vl === null || Vl.byteLength === 0) && (Vl = new Uint8Array(f.memory.buffer)), Vl;
      }
      function LS(r, e) {
        return r = r >>> 0, T1.decode(NS().subarray(r, r + e));
      }
      function R(r, e) {
        if (!(r instanceof e)) throw new Error(`expected instance of ${e.name}`);
      }
      let Ae = 128;
      function Be(r) {
        if (Ae == 1) throw new Error("out of js stack");
        return me[--Ae] = r, Ae;
      }
      let Wl = null;
      function OS() {
        return (Wl === null || Wl.byteLength === 0) && (Wl = new Int32Array(f.memory.buffer)), Wl;
      }
      function DS(r, e) {
        return r = r >>> 0, OS().subarray(r / 4, r / 4 + e);
      }
      let Gl = null;
      function A1() {
        return (Gl === null || Gl.byteLength === 0) && (Gl = new Float32Array(f.memory.buffer)), Gl;
      }
      function xg(r, e) {
        return r = r >>> 0, A1().subarray(r / 4, r / 4 + e);
      }
      let Yl = null;
      function j1() {
        return (Yl === null || Yl.byteLength === 0) && (Yl = new Uint32Array(f.memory.buffer)), Yl;
      }
      function FS(r, e) {
        return r = r >>> 0, j1().subarray(r / 4, r / 4 + e);
      }
      let Cr = 0;
      function Td(r, e) {
        const t = e(r.length * 4, 4) >>> 0;
        return j1().set(r, t / 4), Cr = r.length, t;
      }
      function fi(r, e) {
        const t = e(r.length * 4, 4) >>> 0;
        return A1().set(r, t / 4), Cr = r.length, t;
      }
      const Hu = Object.freeze({
        LinX: 0,
        0: "LinX",
        LinY: 1,
        1: "LinY",
        AngX: 2,
        2: "AngX"
      }), mi = Object.freeze({
        Revolute: 0,
        0: "Revolute",
        Fixed: 1,
        1: "Fixed",
        Prismatic: 2,
        2: "Prismatic",
        Rope: 3,
        3: "Rope",
        Spring: 4,
        4: "Spring",
        Generic: 5,
        5: "Generic"
      }), cr = Object.freeze({
        Ball: 0,
        0: "Ball",
        Cuboid: 1,
        1: "Cuboid",
        Capsule: 2,
        2: "Capsule",
        Segment: 3,
        3: "Segment",
        Polyline: 4,
        4: "Polyline",
        Triangle: 5,
        5: "Triangle",
        TriMesh: 6,
        6: "TriMesh",
        HeightField: 7,
        7: "HeightField",
        Compound: 8,
        8: "Compound",
        ConvexPolygon: 9,
        9: "ConvexPolygon",
        RoundCuboid: 10,
        10: "RoundCuboid",
        RoundTriangle: 11,
        11: "RoundTriangle",
        RoundConvexPolygon: 12,
        12: "RoundConvexPolygon",
        HalfSpace: 13,
        13: "HalfSpace",
        Voxels: 14,
        14: "Voxels"
      }), HS = Object.freeze({
        PseudoBall: 0,
        0: "PseudoBall",
        PseudoCube: 1,
        1: "PseudoCube"
      }), Ad = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawbroadphase_free(r >>> 0, 1));
      class Po {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Po.prototype);
          return t.__wbg_ptr = e, Ad.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Ad.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawbroadphase_free(e, 0);
        }
        constructor() {
          const e = f.rawbroadphase_new();
          return this.__wbg_ptr = e >>> 0, Ad.register(this, this.__wbg_ptr, this), this;
        }
      }
      const Cg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawccdsolver_free(r >>> 0, 1));
      class Zf {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Cg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawccdsolver_free(e, 0);
        }
        constructor() {
          const e = f.rawccdsolver_new();
          return this.__wbg_ptr = e >>> 0, Cg.register(this, this.__wbg_ptr, this), this;
        }
      }
      const kg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawcharactercollision_free(r >>> 0, 1));
      class M1 {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, kg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawcharactercollision_free(e, 0);
        }
        constructor() {
          const e = f.rawcharactercollision_new();
          return this.__wbg_ptr = e >>> 0, kg.register(this, this.__wbg_ptr, this), this;
        }
        handle() {
          return f.rawcharactercollision_handle(this.__wbg_ptr);
        }
        translationDeltaApplied() {
          const e = f.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
          return A.__wrap(e);
        }
        translationDeltaRemaining() {
          const e = f.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
          return A.__wrap(e);
        }
        toi() {
          return f.rawcharactercollision_toi(this.__wbg_ptr);
        }
        worldWitness1() {
          const e = f.rawcharactercollision_worldWitness1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        worldWitness2() {
          const e = f.rawcharactercollision_worldWitness2(this.__wbg_ptr);
          return A.__wrap(e);
        }
        worldNormal1() {
          const e = f.rawcharactercollision_worldNormal1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        worldNormal2() {
          const e = f.rawcharactercollision_worldNormal2(this.__wbg_ptr);
          return A.__wrap(e);
        }
      }
      const jd = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawcolliderset_free(r >>> 0, 1));
      class Xe {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Xe.prototype);
          return t.__wbg_ptr = e, jd.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, jd.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawcolliderset_free(e, 0);
        }
        coTranslation(e) {
          const t = f.rawcolliderset_coTranslation(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        coRotation(e) {
          const t = f.rawcolliderset_coRotation(this.__wbg_ptr, e);
          return ye.__wrap(t);
        }
        coSetTranslation(e, t, n) {
          f.rawcolliderset_coSetTranslation(this.__wbg_ptr, e, t, n);
        }
        coSetTranslationWrtParent(e, t, n) {
          f.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, e, t, n);
        }
        coSetRotation(e, t) {
          f.rawcolliderset_coSetRotation(this.__wbg_ptr, e, t);
        }
        coSetRotationWrtParent(e, t) {
          f.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, e, t);
        }
        coIsSensor(e) {
          return f.rawcolliderset_coIsSensor(this.__wbg_ptr, e) !== 0;
        }
        coShapeType(e) {
          return f.rawcolliderset_coShapeType(this.__wbg_ptr, e);
        }
        coHalfspaceNormal(e) {
          const t = f.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, e);
          return t === 0 ? void 0 : A.__wrap(t);
        }
        coHalfExtents(e) {
          const t = f.rawcolliderset_coHalfExtents(this.__wbg_ptr, e);
          return t === 0 ? void 0 : A.__wrap(t);
        }
        coSetHalfExtents(e, t) {
          R(t, A), f.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, e, t.__wbg_ptr);
        }
        coRadius(e) {
          const t = f.rawcolliderset_coRadius(this.__wbg_ptr, e);
          return t === 4294967297 ? void 0 : t;
        }
        coSetRadius(e, t) {
          f.rawcolliderset_coSetRadius(this.__wbg_ptr, e, t);
        }
        coHalfHeight(e) {
          const t = f.rawcolliderset_coHalfHeight(this.__wbg_ptr, e);
          return t === 4294967297 ? void 0 : t;
        }
        coSetHalfHeight(e, t) {
          f.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, e, t);
        }
        coRoundRadius(e) {
          const t = f.rawcolliderset_coRoundRadius(this.__wbg_ptr, e);
          return t === 4294967297 ? void 0 : t;
        }
        coSetRoundRadius(e, t) {
          f.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, e, t);
        }
        coVoxelData(e) {
          try {
            const i = f.__wbindgen_add_to_stack_pointer(-16);
            f.rawcolliderset_coVoxelData(i, this.__wbg_ptr, e);
            var t = Bt().getInt32(i + 4 * 0, true), n = Bt().getInt32(i + 4 * 1, true);
            let o;
            return t !== 0 && (o = DS(t, n).slice(), f.__wbindgen_export_1(t, n * 4, 4)), o;
          } finally {
            f.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coVoxelPrimitiveGeometry(e) {
          const t = f.rawcolliderset_coVoxelPrimitiveGeometry(this.__wbg_ptr, e);
          return t === 2 ? void 0 : t;
        }
        coVoxelSize(e) {
          const t = f.rawcolliderset_coVoxelSize(this.__wbg_ptr, e);
          return t === 0 ? void 0 : A.__wrap(t);
        }
        coSetVoxel(e, t, n, i) {
          f.rawcolliderset_coSetVoxel(this.__wbg_ptr, e, t, n, i);
        }
        coVertices(e) {
          try {
            const i = f.__wbindgen_add_to_stack_pointer(-16);
            f.rawcolliderset_coVertices(i, this.__wbg_ptr, e);
            var t = Bt().getInt32(i + 4 * 0, true), n = Bt().getInt32(i + 4 * 1, true);
            let o;
            return t !== 0 && (o = xg(t, n).slice(), f.__wbindgen_export_1(t, n * 4, 4)), o;
          } finally {
            f.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coIndices(e) {
          try {
            const i = f.__wbindgen_add_to_stack_pointer(-16);
            f.rawcolliderset_coIndices(i, this.__wbg_ptr, e);
            var t = Bt().getInt32(i + 4 * 0, true), n = Bt().getInt32(i + 4 * 1, true);
            let o;
            return t !== 0 && (o = FS(t, n).slice(), f.__wbindgen_export_1(t, n * 4, 4)), o;
          } finally {
            f.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coTriMeshFlags(e) {
          const t = f.rawcolliderset_coTriMeshFlags(this.__wbg_ptr, e);
          return t === 4294967297 ? void 0 : t;
        }
        coHeightfieldHeights(e) {
          try {
            const i = f.__wbindgen_add_to_stack_pointer(-16);
            f.rawcolliderset_coHeightfieldHeights(i, this.__wbg_ptr, e);
            var t = Bt().getInt32(i + 4 * 0, true), n = Bt().getInt32(i + 4 * 1, true);
            let o;
            return t !== 0 && (o = xg(t, n).slice(), f.__wbindgen_export_1(t, n * 4, 4)), o;
          } finally {
            f.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coHeightfieldScale(e) {
          const t = f.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, e);
          return t === 0 ? void 0 : A.__wrap(t);
        }
        coParent(e) {
          try {
            const i = f.__wbindgen_add_to_stack_pointer(-16);
            f.rawcolliderset_coParent(i, this.__wbg_ptr, e);
            var t = Bt().getInt32(i + 4 * 0, true), n = Bt().getFloat64(i + 8 * 1, true);
            return t === 0 ? void 0 : n;
          } finally {
            f.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coSetEnabled(e, t) {
          f.rawcolliderset_coSetEnabled(this.__wbg_ptr, e, t);
        }
        coIsEnabled(e) {
          return f.rawcolliderset_coIsEnabled(this.__wbg_ptr, e) !== 0;
        }
        coSetContactSkin(e, t) {
          f.rawcolliderset_coSetContactSkin(this.__wbg_ptr, e, t);
        }
        coContactSkin(e) {
          return f.rawcolliderset_coContactSkin(this.__wbg_ptr, e);
        }
        coFriction(e) {
          return f.rawcolliderset_coFriction(this.__wbg_ptr, e);
        }
        coRestitution(e) {
          return f.rawcolliderset_coRestitution(this.__wbg_ptr, e);
        }
        coDensity(e) {
          return f.rawcolliderset_coDensity(this.__wbg_ptr, e);
        }
        coMass(e) {
          return f.rawcolliderset_coMass(this.__wbg_ptr, e);
        }
        coVolume(e) {
          return f.rawcolliderset_coVolume(this.__wbg_ptr, e);
        }
        coCollisionGroups(e) {
          return f.rawcolliderset_coCollisionGroups(this.__wbg_ptr, e) >>> 0;
        }
        coSolverGroups(e) {
          return f.rawcolliderset_coSolverGroups(this.__wbg_ptr, e) >>> 0;
        }
        coActiveHooks(e) {
          return f.rawcolliderset_coActiveHooks(this.__wbg_ptr, e) >>> 0;
        }
        coActiveCollisionTypes(e) {
          return f.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, e);
        }
        coActiveEvents(e) {
          return f.rawcolliderset_coActiveEvents(this.__wbg_ptr, e) >>> 0;
        }
        coContactForceEventThreshold(e) {
          return f.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, e);
        }
        coContainsPoint(e, t) {
          return R(t, A), f.rawcolliderset_coContainsPoint(this.__wbg_ptr, e, t.__wbg_ptr) !== 0;
        }
        coCastShape(e, t, n, i, o, s, a, l, c) {
          R(t, A), R(n, ee), R(i, A), R(o, ye), R(s, A);
          const u = f.rawcolliderset_coCastShape(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s.__wbg_ptr, a, l, c);
          return u === 0 ? void 0 : Wu.__wrap(u);
        }
        coCastCollider(e, t, n, i, o, s, a) {
          R(t, A), R(i, A);
          const l = f.rawcolliderset_coCastCollider(this.__wbg_ptr, e, t.__wbg_ptr, n, i.__wbg_ptr, o, s, a);
          return l === 0 ? void 0 : Bu.__wrap(l);
        }
        coIntersectsShape(e, t, n, i) {
          return R(t, ee), R(n, A), R(i, ye), f.rawcolliderset_coIntersectsShape(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr) !== 0;
        }
        coContactShape(e, t, n, i, o) {
          R(t, ee), R(n, A), R(i, ye);
          const s = f.rawcolliderset_coContactShape(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o);
          return s === 0 ? void 0 : il.__wrap(s);
        }
        coContactCollider(e, t, n) {
          const i = f.rawcolliderset_coContactCollider(this.__wbg_ptr, e, t, n);
          return i === 0 ? void 0 : il.__wrap(i);
        }
        coProjectPoint(e, t, n) {
          R(t, A);
          const i = f.rawcolliderset_coProjectPoint(this.__wbg_ptr, e, t.__wbg_ptr, n);
          return Uu.__wrap(i);
        }
        coIntersectsRay(e, t, n, i) {
          return R(t, A), R(n, A), f.rawcolliderset_coIntersectsRay(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i) !== 0;
        }
        coCastRay(e, t, n, i, o) {
          return R(t, A), R(n, A), f.rawcolliderset_coCastRay(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i, o);
        }
        coCastRayAndGetNormal(e, t, n, i, o) {
          R(t, A), R(n, A);
          const s = f.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i, o);
          return s === 0 ? void 0 : Vu.__wrap(s);
        }
        coSetSensor(e, t) {
          f.rawcolliderset_coSetSensor(this.__wbg_ptr, e, t);
        }
        coSetRestitution(e, t) {
          f.rawcolliderset_coSetRestitution(this.__wbg_ptr, e, t);
        }
        coSetFriction(e, t) {
          f.rawcolliderset_coSetFriction(this.__wbg_ptr, e, t);
        }
        coFrictionCombineRule(e) {
          return f.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, e) >>> 0;
        }
        coSetFrictionCombineRule(e, t) {
          f.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, e, t);
        }
        coRestitutionCombineRule(e) {
          return f.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, e) >>> 0;
        }
        coSetRestitutionCombineRule(e, t) {
          f.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, e, t);
        }
        coSetCollisionGroups(e, t) {
          f.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, e, t);
        }
        coSetSolverGroups(e, t) {
          f.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, e, t);
        }
        coSetActiveHooks(e, t) {
          f.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, e, t);
        }
        coSetActiveEvents(e, t) {
          f.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, e, t);
        }
        coSetActiveCollisionTypes(e, t) {
          f.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, e, t);
        }
        coSetShape(e, t) {
          R(t, ee), f.rawcolliderset_coSetShape(this.__wbg_ptr, e, t.__wbg_ptr);
        }
        coSetContactForceEventThreshold(e, t) {
          f.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, e, t);
        }
        coSetDensity(e, t) {
          f.rawcolliderset_coSetDensity(this.__wbg_ptr, e, t);
        }
        coSetMass(e, t) {
          f.rawcolliderset_coSetMass(this.__wbg_ptr, e, t);
        }
        coSetMassProperties(e, t, n, i) {
          R(n, A), f.rawcolliderset_coSetMassProperties(this.__wbg_ptr, e, t, n.__wbg_ptr, i);
        }
        constructor() {
          const e = f.rawcolliderset_new();
          return this.__wbg_ptr = e >>> 0, jd.register(this, this.__wbg_ptr, this), this;
        }
        len() {
          return f.rawcolliderset_len(this.__wbg_ptr) >>> 0;
        }
        contains(e) {
          return f.rawcolliderset_contains(this.__wbg_ptr, e) !== 0;
        }
        createCollider(e, t, n, i, o, s, a, l, c, u, h, d, p, m, g, b, y, w, v, S, C, E, k, T) {
          try {
            const H = f.__wbindgen_add_to_stack_pointer(-16);
            R(t, ee), R(n, A), R(i, ye), R(a, A), R(T, Oe), f.rawcolliderset_createCollider(H, this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o, s, a.__wbg_ptr, l, c, u, h, d, p, m, g, b, y, w, v, S, C, E, k, T.__wbg_ptr);
            var I = Bt().getInt32(H + 4 * 0, true), M = Bt().getFloat64(H + 8 * 1, true);
            return I === 0 ? void 0 : M;
          } finally {
            f.__wbindgen_add_to_stack_pointer(16);
          }
        }
        remove(e, t, n, i) {
          R(t, ri), R(n, Oe), f.rawcolliderset_remove(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i);
        }
        isHandleValid(e) {
          return f.rawcolliderset_contains(this.__wbg_ptr, e) !== 0;
        }
        forEachColliderHandle(e) {
          try {
            f.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, Be(e));
          } finally {
            me[Ae++] = void 0;
          }
        }
      }
      const Rg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawcollidershapecasthit_free(r >>> 0, 1));
      class Bu {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Bu.prototype);
          return t.__wbg_ptr = e, Rg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Rg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawcollidershapecasthit_free(e, 0);
        }
        colliderHandle() {
          return f.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
        }
        time_of_impact() {
          return f.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        witness1() {
          const e = f.rawcollidershapecasthit_witness1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        witness2() {
          const e = f.rawcollidershapecasthit_witness2(this.__wbg_ptr);
          return A.__wrap(e);
        }
        normal1() {
          const e = f.rawcollidershapecasthit_normal1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        normal2() {
          const e = f.rawcollidershapecasthit_normal2(this.__wbg_ptr);
          return A.__wrap(e);
        }
      }
      const Eg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawcontactforceevent_free(r >>> 0, 1));
      class Pp {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Pp.prototype);
          return t.__wbg_ptr = e, Eg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Eg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawcontactforceevent_free(e, 0);
        }
        collider1() {
          return f.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
        }
        collider2() {
          return f.rawcontactforceevent_collider2(this.__wbg_ptr);
        }
        total_force() {
          const e = f.rawcontactforceevent_total_force(this.__wbg_ptr);
          return A.__wrap(e);
        }
        total_force_magnitude() {
          return f.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
        }
        max_force_direction() {
          const e = f.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
          return A.__wrap(e);
        }
        max_force_magnitude() {
          return f.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
        }
      }
      const Pg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawcontactmanifold_free(r >>> 0, 1));
      class Tp {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Tp.prototype);
          return t.__wbg_ptr = e, Pg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Pg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawcontactmanifold_free(e, 0);
        }
        normal() {
          const e = f.rawcontactmanifold_normal(this.__wbg_ptr);
          return A.__wrap(e);
        }
        local_n1() {
          const e = f.rawcontactmanifold_local_n1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        local_n2() {
          const e = f.rawcontactmanifold_local_n2(this.__wbg_ptr);
          return A.__wrap(e);
        }
        subshape1() {
          return f.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
        }
        subshape2() {
          return f.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
        }
        num_contacts() {
          return f.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
        }
        contact_local_p1(e) {
          const t = f.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, e);
          return t === 0 ? void 0 : A.__wrap(t);
        }
        contact_local_p2(e) {
          const t = f.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, e);
          return t === 0 ? void 0 : A.__wrap(t);
        }
        contact_dist(e) {
          return f.rawcontactmanifold_contact_dist(this.__wbg_ptr, e);
        }
        contact_fid1(e) {
          return f.rawcontactmanifold_contact_fid1(this.__wbg_ptr, e) >>> 0;
        }
        contact_fid2(e) {
          return f.rawcontactmanifold_contact_fid2(this.__wbg_ptr, e) >>> 0;
        }
        contact_impulse(e) {
          return f.rawcontactmanifold_contact_impulse(this.__wbg_ptr, e);
        }
        contact_tangent_impulse(e) {
          return f.rawcontactmanifold_contact_tangent_impulse(this.__wbg_ptr, e);
        }
        num_solver_contacts() {
          return f.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
        }
        solver_contact_point(e) {
          const t = f.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, e);
          return t === 0 ? void 0 : A.__wrap(t);
        }
        solver_contact_dist(e) {
          return f.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, e);
        }
        solver_contact_friction(e) {
          return f.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, e);
        }
        solver_contact_restitution(e) {
          return f.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, e);
        }
        solver_contact_tangent_velocity(e) {
          const t = f.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
      }
      const Tg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawcontactpair_free(r >>> 0, 1));
      class Ap {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Ap.prototype);
          return t.__wbg_ptr = e, Tg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Tg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawcontactpair_free(e, 0);
        }
        collider1() {
          return f.rawcontactpair_collider1(this.__wbg_ptr);
        }
        collider2() {
          return f.rawcontactpair_collider2(this.__wbg_ptr);
        }
        numContactManifolds() {
          return f.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
        }
        contactManifold(e) {
          const t = f.rawcontactpair_contactManifold(this.__wbg_ptr, e);
          return t === 0 ? void 0 : Tp.__wrap(t);
        }
      }
      const Ag = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawdebugrenderpipeline_free(r >>> 0, 1));
      class BS {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Ag.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawdebugrenderpipeline_free(e, 0);
        }
        constructor() {
          const e = f.rawdebugrenderpipeline_new();
          return this.__wbg_ptr = e >>> 0, Ag.register(this, this.__wbg_ptr, this), this;
        }
        vertices() {
          const e = f.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
          return tu(e);
        }
        colors() {
          const e = f.rawdebugrenderpipeline_colors(this.__wbg_ptr);
          return tu(e);
        }
        render(e, t, n, i, o) {
          R(e, Oe), R(t, Xe), R(n, ti), R(i, ni), R(o, Fi), f.rawdebugrenderpipeline_render(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr);
        }
      }
      const jg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawdeserializedworld_free(r >>> 0, 1));
      class jp {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(jp.prototype);
          return t.__wbg_ptr = e, jg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, jg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawdeserializedworld_free(e, 0);
        }
        takeGravity() {
          const e = f.rawdeserializedworld_takeGravity(this.__wbg_ptr);
          return e === 0 ? void 0 : A.__wrap(e);
        }
        takeIntegrationParameters() {
          const e = f.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
          return e === 0 ? void 0 : To.__wrap(e);
        }
        takeIslandManager() {
          const e = f.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
          return e === 0 ? void 0 : ri.__wrap(e);
        }
        takeBroadPhase() {
          const e = f.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
          return e === 0 ? void 0 : Po.__wrap(e);
        }
        takeNarrowPhase() {
          const e = f.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
          return e === 0 ? void 0 : Fi.__wrap(e);
        }
        takeBodies() {
          const e = f.rawdeserializedworld_takeBodies(this.__wbg_ptr);
          return e === 0 ? void 0 : Oe.__wrap(e);
        }
        takeColliders() {
          const e = f.rawdeserializedworld_takeColliders(this.__wbg_ptr);
          return e === 0 ? void 0 : Xe.__wrap(e);
        }
        takeImpulseJoints() {
          const e = f.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
          return e === 0 ? void 0 : ti.__wrap(e);
        }
        takeMultibodyJoints() {
          const e = f.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
          return e === 0 ? void 0 : ni.__wrap(e);
        }
      }
      const Mg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_raweventqueue_free(r >>> 0, 1));
      class US {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Mg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_raweventqueue_free(e, 0);
        }
        constructor(e) {
          const t = f.raweventqueue_new(e);
          return this.__wbg_ptr = t >>> 0, Mg.register(this, this.__wbg_ptr, this), this;
        }
        drainCollisionEvents(e) {
          try {
            f.raweventqueue_drainCollisionEvents(this.__wbg_ptr, Be(e));
          } finally {
            me[Ae++] = void 0;
          }
        }
        drainContactForceEvents(e) {
          try {
            f.raweventqueue_drainContactForceEvents(this.__wbg_ptr, Be(e));
          } finally {
            me[Ae++] = void 0;
          }
        }
        clear() {
          f.raweventqueue_clear(this.__wbg_ptr);
        }
      }
      const Ig = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawgenericjoint_free(r >>> 0, 1));
      class $n {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create($n.prototype);
          return t.__wbg_ptr = e, Ig.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Ig.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawgenericjoint_free(e, 0);
        }
        static spring(e, t, n, i, o) {
          R(i, A), R(o, A);
          const s = f.rawgenericjoint_spring(e, t, n, i.__wbg_ptr, o.__wbg_ptr);
          return $n.__wrap(s);
        }
        static rope(e, t, n) {
          R(t, A), R(n, A);
          const i = f.rawgenericjoint_rope(e, t.__wbg_ptr, n.__wbg_ptr);
          return $n.__wrap(i);
        }
        static prismatic(e, t, n, i, o, s) {
          R(e, A), R(t, A), R(n, A);
          const a = f.rawgenericjoint_prismatic(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i, o, s);
          return a === 0 ? void 0 : $n.__wrap(a);
        }
        static fixed(e, t, n, i) {
          R(e, A), R(t, ye), R(n, A), R(i, ye);
          const o = f.rawgenericjoint_fixed(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr);
          return $n.__wrap(o);
        }
        static revolute(e, t) {
          R(e, A), R(t, A);
          const n = f.rawgenericjoint_revolute(e.__wbg_ptr, t.__wbg_ptr);
          return n === 0 ? void 0 : $n.__wrap(n);
        }
      }
      const Md = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawimpulsejointset_free(r >>> 0, 1));
      class ti {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(ti.prototype);
          return t.__wbg_ptr = e, Md.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Md.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawimpulsejointset_free(e, 0);
        }
        jointType(e) {
          return f.rawimpulsejointset_jointType(this.__wbg_ptr, e);
        }
        jointBodyHandle1(e) {
          return f.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, e);
        }
        jointBodyHandle2(e) {
          return f.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, e);
        }
        jointFrameX1(e) {
          const t = f.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, e);
          return ye.__wrap(t);
        }
        jointFrameX2(e) {
          const t = f.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, e);
          return ye.__wrap(t);
        }
        jointAnchor1(e) {
          const t = f.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        jointAnchor2(e) {
          const t = f.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        jointSetAnchor1(e, t) {
          R(t, A), f.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, e, t.__wbg_ptr);
        }
        jointSetAnchor2(e, t) {
          R(t, A), f.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, e, t.__wbg_ptr);
        }
        jointContactsEnabled(e) {
          return f.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, e) !== 0;
        }
        jointSetContactsEnabled(e, t) {
          f.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, e, t);
        }
        jointLimitsEnabled(e, t) {
          return f.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, e, t) !== 0;
        }
        jointLimitsMin(e, t) {
          return f.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, e, t);
        }
        jointLimitsMax(e, t) {
          return f.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, e, t);
        }
        jointSetLimits(e, t, n, i) {
          f.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, e, t, n, i);
        }
        jointConfigureMotorModel(e, t, n) {
          f.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, e, t, n);
        }
        jointConfigureMotorVelocity(e, t, n, i) {
          f.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, e, t, n, i);
        }
        jointConfigureMotorPosition(e, t, n, i, o) {
          f.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, e, t, n, i, o);
        }
        jointConfigureMotor(e, t, n, i, o, s) {
          f.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, e, t, n, i, o, s);
        }
        constructor() {
          const e = f.rawimpulsejointset_new();
          return this.__wbg_ptr = e >>> 0, Md.register(this, this.__wbg_ptr, this), this;
        }
        createJoint(e, t, n, i) {
          return R(e, $n), f.rawimpulsejointset_createJoint(this.__wbg_ptr, e.__wbg_ptr, t, n, i);
        }
        remove(e, t) {
          f.rawimpulsejointset_remove(this.__wbg_ptr, e, t);
        }
        len() {
          return f.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
        }
        contains(e) {
          return f.rawimpulsejointset_contains(this.__wbg_ptr, e) !== 0;
        }
        forEachJointHandle(e) {
          try {
            f.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, Be(e));
          } finally {
            me[Ae++] = void 0;
          }
        }
        forEachJointAttachedToRigidBody(e, t) {
          try {
            f.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, e, Be(t));
          } finally {
            me[Ae++] = void 0;
          }
        }
      }
      const Id = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawintegrationparameters_free(r >>> 0, 1));
      class To {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(To.prototype);
          return t.__wbg_ptr = e, Id.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Id.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawintegrationparameters_free(e, 0);
        }
        constructor() {
          const e = f.rawintegrationparameters_new();
          return this.__wbg_ptr = e >>> 0, Id.register(this, this.__wbg_ptr, this), this;
        }
        get dt() {
          return f.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        get contact_erp() {
          return f.rawintegrationparameters_contact_erp(this.__wbg_ptr);
        }
        get normalizedAllowedLinearError() {
          return f.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
        }
        get normalizedPredictionDistance() {
          return f.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr);
        }
        get numSolverIterations() {
          return f.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
        }
        get numAdditionalFrictionIterations() {
          return f.rawintegrationparameters_numAdditionalFrictionIterations(this.__wbg_ptr) >>> 0;
        }
        get numInternalPgsIterations() {
          return f.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr) >>> 0;
        }
        get minIslandSize() {
          return f.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
        }
        get maxCcdSubsteps() {
          return f.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
        }
        get lengthUnit() {
          return f.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
        }
        set dt(e) {
          f.rawintegrationparameters_set_dt(this.__wbg_ptr, e);
        }
        set contact_natural_frequency(e) {
          f.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, e);
        }
        set normalizedAllowedLinearError(e) {
          f.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, e);
        }
        set normalizedPredictionDistance(e) {
          f.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, e);
        }
        set numSolverIterations(e) {
          f.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, e);
        }
        set numAdditionalFrictionIterations(e) {
          f.rawintegrationparameters_set_numAdditionalFrictionIterations(this.__wbg_ptr, e);
        }
        set numInternalPgsIterations(e) {
          f.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr, e);
        }
        set minIslandSize(e) {
          f.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, e);
        }
        set maxCcdSubsteps(e) {
          f.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, e);
        }
        set lengthUnit(e) {
          f.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, e);
        }
        switchToStandardPgsSolver() {
          f.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
        }
        switchToSmallStepsPgsSolver() {
          f.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
        }
        switchToSmallStepsPgsSolverWithoutWarmstart() {
          f.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
        }
      }
      const zd = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawislandmanager_free(r >>> 0, 1));
      class ri {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(ri.prototype);
          return t.__wbg_ptr = e, zd.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, zd.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawislandmanager_free(e, 0);
        }
        constructor() {
          const e = f.rawislandmanager_new();
          return this.__wbg_ptr = e >>> 0, zd.register(this, this.__wbg_ptr, this), this;
        }
        forEachActiveRigidBodyHandle(e) {
          try {
            f.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, Be(e));
          } finally {
            me[Ae++] = void 0;
          }
        }
      }
      const zg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawkinematiccharactercontroller_free(r >>> 0, 1));
      class $S {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, zg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawkinematiccharactercontroller_free(e, 0);
        }
        constructor(e) {
          const t = f.rawkinematiccharactercontroller_new(e);
          return this.__wbg_ptr = t >>> 0, zg.register(this, this.__wbg_ptr, this), this;
        }
        up() {
          const e = f.rawcollidershapecasthit_normal2(this.__wbg_ptr);
          return A.__wrap(e);
        }
        setUp(e) {
          R(e, A), f.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, e.__wbg_ptr);
        }
        normalNudgeFactor() {
          return f.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
        }
        setNormalNudgeFactor(e) {
          f.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, e);
        }
        offset() {
          return f.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        setOffset(e) {
          f.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, e);
        }
        slideEnabled() {
          return f.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
        }
        setSlideEnabled(e) {
          f.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, e);
        }
        autostepMaxHeight() {
          const e = f.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);
          return e === 4294967297 ? void 0 : e;
        }
        autostepMinWidth() {
          const e = f.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);
          return e === 4294967297 ? void 0 : e;
        }
        autostepIncludesDynamicBodies() {
          const e = f.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
          return e === 16777215 ? void 0 : e !== 0;
        }
        autostepEnabled() {
          return f.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
        }
        enableAutostep(e, t, n) {
          f.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, e, t, n);
        }
        disableAutostep() {
          f.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
        }
        maxSlopeClimbAngle() {
          return f.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr);
        }
        setMaxSlopeClimbAngle(e) {
          f.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, e);
        }
        minSlopeSlideAngle() {
          return f.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
        }
        setMinSlopeSlideAngle(e) {
          f.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, e);
        }
        snapToGroundDistance() {
          const e = f.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);
          return e === 4294967297 ? void 0 : e;
        }
        enableSnapToGround(e) {
          f.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, e);
        }
        disableSnapToGround() {
          f.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
        }
        snapToGroundEnabled() {
          return f.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
        }
        computeColliderMovement(e, t, n, i, o, s, a, l, c, u, h) {
          try {
            R(t, Oe), R(n, Xe), R(i, I1), R(s, A), f.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o, s.__wbg_ptr, a, Q(l) ? 4294967297 : Math.fround(l), c, Q(u) ? 4294967297 : u >>> 0, Be(h));
          } finally {
            me[Ae++] = void 0;
          }
        }
        computedMovement() {
          const e = f.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
          return A.__wrap(e);
        }
        computedGrounded() {
          return f.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
        }
        numComputedCollisions() {
          return f.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
        }
        computedCollision(e, t) {
          return R(t, M1), f.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, e, t.__wbg_ptr) !== 0;
        }
      }
      const Nd = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawmultibodyjointset_free(r >>> 0, 1));
      class ni {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(ni.prototype);
          return t.__wbg_ptr = e, Nd.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Nd.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawmultibodyjointset_free(e, 0);
        }
        jointType(e) {
          return f.rawmultibodyjointset_jointType(this.__wbg_ptr, e);
        }
        jointFrameX1(e) {
          const t = f.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, e);
          return ye.__wrap(t);
        }
        jointFrameX2(e) {
          const t = f.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, e);
          return ye.__wrap(t);
        }
        jointAnchor1(e) {
          const t = f.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        jointAnchor2(e) {
          const t = f.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        jointContactsEnabled(e) {
          return f.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, e) !== 0;
        }
        jointSetContactsEnabled(e, t) {
          f.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, e, t);
        }
        jointLimitsEnabled(e, t) {
          return f.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, e, t) !== 0;
        }
        jointLimitsMin(e, t) {
          return f.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, e, t);
        }
        jointLimitsMax(e, t) {
          return f.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, e, t);
        }
        constructor() {
          const e = f.rawmultibodyjointset_new();
          return this.__wbg_ptr = e >>> 0, Nd.register(this, this.__wbg_ptr, this), this;
        }
        createJoint(e, t, n, i) {
          return R(e, $n), f.rawmultibodyjointset_createJoint(this.__wbg_ptr, e.__wbg_ptr, t, n, i);
        }
        remove(e, t) {
          f.rawmultibodyjointset_remove(this.__wbg_ptr, e, t);
        }
        contains(e) {
          return f.rawmultibodyjointset_contains(this.__wbg_ptr, e) !== 0;
        }
        forEachJointHandle(e) {
          try {
            f.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, Be(e));
          } finally {
            me[Ae++] = void 0;
          }
        }
        forEachJointAttachedToRigidBody(e, t) {
          try {
            f.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, e, Be(t));
          } finally {
            me[Ae++] = void 0;
          }
        }
      }
      const Ld = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawnarrowphase_free(r >>> 0, 1));
      class Fi {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Fi.prototype);
          return t.__wbg_ptr = e, Ld.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Ld.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawnarrowphase_free(e, 0);
        }
        constructor() {
          const e = f.rawnarrowphase_new();
          return this.__wbg_ptr = e >>> 0, Ld.register(this, this.__wbg_ptr, this), this;
        }
        contact_pairs_with(e, t) {
          f.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, e, dt(t));
        }
        contact_pair(e, t) {
          const n = f.rawnarrowphase_contact_pair(this.__wbg_ptr, e, t);
          return n === 0 ? void 0 : Ap.__wrap(n);
        }
        intersection_pairs_with(e, t) {
          f.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, e, dt(t));
        }
        intersection_pair(e, t) {
          return f.rawnarrowphase_intersection_pair(this.__wbg_ptr, e, t) !== 0;
        }
      }
      const Ng = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawphysicspipeline_free(r >>> 0, 1));
      class VS {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Ng.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawphysicspipeline_free(e, 0);
        }
        constructor() {
          const e = f.rawphysicspipeline_new();
          return this.__wbg_ptr = e >>> 0, Ng.register(this, this.__wbg_ptr, this), this;
        }
        step(e, t, n, i, o, s, a, l, c, u) {
          R(e, A), R(t, To), R(n, ri), R(i, Po), R(o, Fi), R(s, Oe), R(a, Xe), R(l, ti), R(c, ni), R(u, Zf), f.rawphysicspipeline_step(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, l.__wbg_ptr, c.__wbg_ptr, u.__wbg_ptr);
        }
        stepWithEvents(e, t, n, i, o, s, a, l, c, u, h, d, p, m) {
          R(e, A), R(t, To), R(n, ri), R(i, Po), R(o, Fi), R(s, Oe), R(a, Xe), R(l, ti), R(c, ni), R(u, Zf), R(h, US), f.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, l.__wbg_ptr, c.__wbg_ptr, u.__wbg_ptr, h.__wbg_ptr, dt(d), dt(p), dt(m));
        }
      }
      const Lg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawpidcontroller_free(r >>> 0, 1));
      class WS {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Lg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawpidcontroller_free(e, 0);
        }
        constructor(e, t, n, i) {
          const o = f.rawpidcontroller_new(e, t, n, i);
          return this.__wbg_ptr = o >>> 0, Lg.register(this, this.__wbg_ptr, this), this;
        }
        set_kp(e, t) {
          f.rawpidcontroller_set_kp(this.__wbg_ptr, e, t);
        }
        set_ki(e, t) {
          f.rawpidcontroller_set_ki(this.__wbg_ptr, e, t);
        }
        set_kd(e, t) {
          f.rawpidcontroller_set_kd(this.__wbg_ptr, e, t);
        }
        set_axes_mask(e) {
          f.rawpidcontroller_set_axes_mask(this.__wbg_ptr, e);
        }
        reset_integrals() {
          f.rawpidcontroller_reset_integrals(this.__wbg_ptr);
        }
        apply_linear_correction(e, t, n, i, o) {
          R(t, Oe), R(i, A), R(o, A), f.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, i.__wbg_ptr, o.__wbg_ptr);
        }
        apply_angular_correction(e, t, n, i, o) {
          R(t, Oe), f.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, i, o);
        }
        linear_correction(e, t, n, i, o) {
          R(t, Oe), R(i, A), R(o, A);
          const s = f.rawpidcontroller_linear_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, i.__wbg_ptr, o.__wbg_ptr);
          return A.__wrap(s);
        }
        angular_correction(e, t, n, i, o) {
          return R(t, Oe), f.rawpidcontroller_angular_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, i, o);
        }
      }
      const Og = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawpointcolliderprojection_free(r >>> 0, 1));
      class ru {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(ru.prototype);
          return t.__wbg_ptr = e, Og.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Og.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawpointcolliderprojection_free(e, 0);
        }
        colliderHandle() {
          return f.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
        }
        point() {
          const e = f.rawpointcolliderprojection_point(this.__wbg_ptr);
          return A.__wrap(e);
        }
        isInside() {
          return f.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
        }
        featureType() {
          return f.rawpointcolliderprojection_featureType(this.__wbg_ptr);
        }
        featureId() {
          const e = f.rawpointcolliderprojection_featureId(this.__wbg_ptr);
          return e === 4294967297 ? void 0 : e;
        }
      }
      const Dg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawpointprojection_free(r >>> 0, 1));
      class Uu {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Uu.prototype);
          return t.__wbg_ptr = e, Dg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Dg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawpointprojection_free(e, 0);
        }
        point() {
          const e = f.rawpointprojection_point(this.__wbg_ptr);
          return A.__wrap(e);
        }
        isInside() {
          return f.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
        }
      }
      const Fg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawquerypipeline_free(r >>> 0, 1));
      class I1 {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Fg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawquerypipeline_free(e, 0);
        }
        constructor() {
          const e = f.rawquerypipeline_new();
          return this.__wbg_ptr = e >>> 0, Fg.register(this, this.__wbg_ptr, this), this;
        }
        update(e) {
          R(e, Xe), f.rawquerypipeline_update(this.__wbg_ptr, e.__wbg_ptr);
        }
        castRay(e, t, n, i, o, s, a, l, c, u, h) {
          try {
            R(e, Oe), R(t, Xe), R(n, A), R(i, A);
            const d = f.rawquerypipeline_castRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o, s, a, Q(l) ? 4294967297 : l >>> 0, !Q(c), Q(c) ? 0 : c, !Q(u), Q(u) ? 0 : u, Be(h));
            return d === 0 ? void 0 : Mp.__wrap(d);
          } finally {
            me[Ae++] = void 0;
          }
        }
        castRayAndGetNormal(e, t, n, i, o, s, a, l, c, u, h) {
          try {
            R(e, Oe), R(t, Xe), R(n, A), R(i, A);
            const d = f.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o, s, a, Q(l) ? 4294967297 : l >>> 0, !Q(c), Q(c) ? 0 : c, !Q(u), Q(u) ? 0 : u, Be(h));
            return d === 0 ? void 0 : $u.__wrap(d);
          } finally {
            me[Ae++] = void 0;
          }
        }
        intersectionsWithRay(e, t, n, i, o, s, a, l, c, u, h, d) {
          try {
            R(e, Oe), R(t, Xe), R(n, A), R(i, A), f.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o, s, Be(a), l, Q(c) ? 4294967297 : c >>> 0, !Q(u), Q(u) ? 0 : u, !Q(h), Q(h) ? 0 : h, Be(d));
          } finally {
            me[Ae++] = void 0, me[Ae++] = void 0;
          }
        }
        intersectionWithShape(e, t, n, i, o, s, a, l, c, u) {
          try {
            const p = f.__wbindgen_add_to_stack_pointer(-16);
            R(e, Oe), R(t, Xe), R(n, A), R(i, ye), R(o, ee), f.rawquerypipeline_intersectionWithShape(p, this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s, Q(a) ? 4294967297 : a >>> 0, !Q(l), Q(l) ? 0 : l, !Q(c), Q(c) ? 0 : c, Be(u));
            var h = Bt().getInt32(p + 4 * 0, true), d = Bt().getFloat64(p + 8 * 1, true);
            return h === 0 ? void 0 : d;
          } finally {
            f.__wbindgen_add_to_stack_pointer(16), me[Ae++] = void 0;
          }
        }
        projectPoint(e, t, n, i, o, s, a, l, c) {
          try {
            R(e, Oe), R(t, Xe), R(n, A);
            const u = f.rawquerypipeline_projectPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i, o, Q(s) ? 4294967297 : s >>> 0, !Q(a), Q(a) ? 0 : a, !Q(l), Q(l) ? 0 : l, Be(c));
            return u === 0 ? void 0 : ru.__wrap(u);
          } finally {
            me[Ae++] = void 0;
          }
        }
        projectPointAndGetFeature(e, t, n, i, o, s, a, l) {
          try {
            R(e, Oe), R(t, Xe), R(n, A);
            const c = f.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i, Q(o) ? 4294967297 : o >>> 0, !Q(s), Q(s) ? 0 : s, !Q(a), Q(a) ? 0 : a, Be(l));
            return c === 0 ? void 0 : ru.__wrap(c);
          } finally {
            me[Ae++] = void 0;
          }
        }
        intersectionsWithPoint(e, t, n, i, o, s, a, l, c) {
          try {
            R(e, Oe), R(t, Xe), R(n, A), f.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, Be(i), o, Q(s) ? 4294967297 : s >>> 0, !Q(a), Q(a) ? 0 : a, !Q(l), Q(l) ? 0 : l, Be(c));
          } finally {
            me[Ae++] = void 0, me[Ae++] = void 0;
          }
        }
        castShape(e, t, n, i, o, s, a, l, c, u, h, d, p, m) {
          try {
            R(e, Oe), R(t, Xe), R(n, A), R(i, ye), R(o, A), R(s, ee);
            const g = f.rawquerypipeline_castShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s.__wbg_ptr, a, l, c, u, Q(h) ? 4294967297 : h >>> 0, !Q(d), Q(d) ? 0 : d, !Q(p), Q(p) ? 0 : p, Be(m));
            return g === 0 ? void 0 : Bu.__wrap(g);
          } finally {
            me[Ae++] = void 0;
          }
        }
        intersectionsWithShape(e, t, n, i, o, s, a, l, c, u, h) {
          try {
            R(e, Oe), R(t, Xe), R(n, A), R(i, ye), R(o, ee), f.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, Be(s), a, Q(l) ? 4294967297 : l >>> 0, !Q(c), Q(c) ? 0 : c, !Q(u), Q(u) ? 0 : u, Be(h));
          } finally {
            me[Ae++] = void 0, me[Ae++] = void 0;
          }
        }
        collidersWithAabbIntersectingAabb(e, t, n) {
          try {
            R(e, A), R(t, A), f.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, Be(n));
          } finally {
            me[Ae++] = void 0;
          }
        }
      }
      const Hg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawraycolliderhit_free(r >>> 0, 1));
      class Mp {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Mp.prototype);
          return t.__wbg_ptr = e, Hg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Hg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawraycolliderhit_free(e, 0);
        }
        colliderHandle() {
          return f.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
        }
        timeOfImpact() {
          return f.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
      }
      const Bg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawraycolliderintersection_free(r >>> 0, 1));
      class $u {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create($u.prototype);
          return t.__wbg_ptr = e, Bg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Bg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawraycolliderintersection_free(e, 0);
        }
        colliderHandle() {
          return f.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
        }
        normal() {
          const e = f.rawcollidershapecasthit_witness1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        time_of_impact() {
          return f.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        featureType() {
          return f.rawpointcolliderprojection_featureType(this.__wbg_ptr);
        }
        featureId() {
          const e = f.rawpointcolliderprojection_featureId(this.__wbg_ptr);
          return e === 4294967297 ? void 0 : e;
        }
      }
      const Ug = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawrayintersection_free(r >>> 0, 1));
      class Vu {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Vu.prototype);
          return t.__wbg_ptr = e, Ug.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Ug.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawrayintersection_free(e, 0);
        }
        normal() {
          const e = f.rawcollidershapecasthit_witness1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        time_of_impact() {
          return f.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        featureType() {
          return f.rawpointcolliderprojection_featureType(this.__wbg_ptr);
        }
        featureId() {
          const e = f.rawpointcolliderprojection_featureId(this.__wbg_ptr);
          return e === 4294967297 ? void 0 : e;
        }
      }
      const Od = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawrigidbodyset_free(r >>> 0, 1));
      class Oe {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Oe.prototype);
          return t.__wbg_ptr = e, Od.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Od.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawrigidbodyset_free(e, 0);
        }
        rbTranslation(e) {
          const t = f.rawrigidbodyset_rbTranslation(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        rbRotation(e) {
          const t = f.rawrigidbodyset_rbRotation(this.__wbg_ptr, e);
          return ye.__wrap(t);
        }
        rbSleep(e) {
          f.rawrigidbodyset_rbSleep(this.__wbg_ptr, e);
        }
        rbIsSleeping(e) {
          return f.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, e) !== 0;
        }
        rbIsMoving(e) {
          return f.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, e) !== 0;
        }
        rbNextTranslation(e) {
          const t = f.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        rbNextRotation(e) {
          const t = f.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, e);
          return ye.__wrap(t);
        }
        rbSetTranslation(e, t, n, i) {
          f.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, e, t, n, i);
        }
        rbSetRotation(e, t, n) {
          f.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, e, t, n);
        }
        rbSetLinvel(e, t, n) {
          R(t, A), f.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, e, t.__wbg_ptr, n);
        }
        rbSetAngvel(e, t, n) {
          f.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, e, t, n);
        }
        rbSetNextKinematicTranslation(e, t, n) {
          f.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, e, t, n);
        }
        rbSetNextKinematicRotation(e, t) {
          f.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, e, t);
        }
        rbRecomputeMassPropertiesFromColliders(e, t) {
          R(t, Xe), f.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, e, t.__wbg_ptr);
        }
        rbSetAdditionalMass(e, t, n) {
          f.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, e, t, n);
        }
        rbSetAdditionalMassProperties(e, t, n, i, o) {
          R(n, A), f.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, e, t, n.__wbg_ptr, i, o);
        }
        rbLinvel(e) {
          const t = f.rawrigidbodyset_rbLinvel(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        rbAngvel(e) {
          return f.rawrigidbodyset_rbAngvel(this.__wbg_ptr, e);
        }
        rbVelocityAtPoint(e, t) {
          R(t, A);
          const n = f.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr, e, t.__wbg_ptr);
          return A.__wrap(n);
        }
        rbLockTranslations(e, t, n) {
          f.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, e, t, n);
        }
        rbSetEnabledTranslations(e, t, n, i) {
          f.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, e, t, n, i);
        }
        rbLockRotations(e, t, n) {
          f.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, e, t, n);
        }
        rbDominanceGroup(e) {
          return f.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, e);
        }
        rbSetDominanceGroup(e, t) {
          f.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, e, t);
        }
        rbEnableCcd(e, t) {
          f.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, e, t);
        }
        rbSetSoftCcdPrediction(e, t) {
          f.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, e, t);
        }
        rbMass(e) {
          return f.rawrigidbodyset_rbMass(this.__wbg_ptr, e);
        }
        rbInvMass(e) {
          return f.rawrigidbodyset_rbInvMass(this.__wbg_ptr, e);
        }
        rbEffectiveInvMass(e) {
          const t = f.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        rbLocalCom(e) {
          const t = f.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        rbWorldCom(e) {
          const t = f.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        rbInvPrincipalInertiaSqrt(e) {
          return f.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, e);
        }
        rbPrincipalInertia(e) {
          return f.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, e);
        }
        rbEffectiveWorldInvInertiaSqrt(e) {
          return f.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, e);
        }
        rbEffectiveAngularInertia(e) {
          return f.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, e);
        }
        rbWakeUp(e) {
          f.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, e);
        }
        rbIsCcdEnabled(e) {
          return f.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, e) !== 0;
        }
        rbSoftCcdPrediction(e) {
          return f.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, e);
        }
        rbNumColliders(e) {
          return f.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, e) >>> 0;
        }
        rbCollider(e, t) {
          return f.rawrigidbodyset_rbCollider(this.__wbg_ptr, e, t);
        }
        rbBodyType(e) {
          return f.rawrigidbodyset_rbBodyType(this.__wbg_ptr, e);
        }
        rbSetBodyType(e, t, n) {
          f.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, e, t, n);
        }
        rbIsFixed(e) {
          return f.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, e) !== 0;
        }
        rbIsKinematic(e) {
          return f.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, e) !== 0;
        }
        rbIsDynamic(e) {
          return f.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, e) !== 0;
        }
        rbLinearDamping(e) {
          return f.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, e);
        }
        rbAngularDamping(e) {
          return f.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, e);
        }
        rbSetLinearDamping(e, t) {
          f.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, e, t);
        }
        rbSetAngularDamping(e, t) {
          f.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, e, t);
        }
        rbSetEnabled(e, t) {
          f.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, e, t);
        }
        rbIsEnabled(e) {
          return f.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, e) !== 0;
        }
        rbGravityScale(e) {
          return f.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, e);
        }
        rbSetGravityScale(e, t, n) {
          f.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, e, t, n);
        }
        rbResetForces(e, t) {
          f.rawrigidbodyset_rbResetForces(this.__wbg_ptr, e, t);
        }
        rbResetTorques(e, t) {
          f.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, e, t);
        }
        rbAddForce(e, t, n) {
          R(t, A), f.rawrigidbodyset_rbAddForce(this.__wbg_ptr, e, t.__wbg_ptr, n);
        }
        rbApplyImpulse(e, t, n) {
          R(t, A), f.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, e, t.__wbg_ptr, n);
        }
        rbAddTorque(e, t, n) {
          f.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, e, t, n);
        }
        rbApplyTorqueImpulse(e, t, n) {
          f.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, e, t, n);
        }
        rbAddForceAtPoint(e, t, n, i) {
          R(t, A), R(n, A), f.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i);
        }
        rbApplyImpulseAtPoint(e, t, n, i) {
          R(t, A), R(n, A), f.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i);
        }
        rbAdditionalSolverIterations(e) {
          return f.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, e) >>> 0;
        }
        rbSetAdditionalSolverIterations(e, t) {
          f.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, e, t);
        }
        rbUserData(e) {
          return f.rawrigidbodyset_rbUserData(this.__wbg_ptr, e) >>> 0;
        }
        rbSetUserData(e, t) {
          f.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, e, t);
        }
        rbUserForce(e) {
          const t = f.rawrigidbodyset_rbUserForce(this.__wbg_ptr, e);
          return A.__wrap(t);
        }
        rbUserTorque(e) {
          return f.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, e);
        }
        constructor() {
          const e = f.rawrigidbodyset_new();
          return this.__wbg_ptr = e >>> 0, Od.register(this, this.__wbg_ptr, this), this;
        }
        createRigidBody(e, t, n, i, o, s, a, l, c, u, h, d, p, m, g, b, y, w, v, S, C, E) {
          return R(t, A), R(n, ye), R(a, A), R(l, A), f.rawrigidbodyset_createRigidBody(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i, o, s, a.__wbg_ptr, l.__wbg_ptr, c, u, h, d, p, m, g, b, y, w, v, S, C, E);
        }
        remove(e, t, n, i, o) {
          R(t, ri), R(n, Xe), R(i, ti), R(o, ni), f.rawrigidbodyset_remove(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr);
        }
        len() {
          return f.rawcolliderset_len(this.__wbg_ptr) >>> 0;
        }
        contains(e) {
          return f.rawrigidbodyset_contains(this.__wbg_ptr, e) !== 0;
        }
        forEachRigidBodyHandle(e) {
          try {
            f.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, Be(e));
          } finally {
            me[Ae++] = void 0;
          }
        }
        propagateModifiedBodyPositionsToColliders(e) {
          R(e, Xe), f.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, e.__wbg_ptr);
        }
      }
      const $g = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawrotation_free(r >>> 0, 1));
      class ye {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(ye.prototype);
          return t.__wbg_ptr = e, $g.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, $g.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawrotation_free(e, 0);
        }
        static identity() {
          const e = f.rawrotation_identity();
          return ye.__wrap(e);
        }
        static fromAngle(e) {
          const t = f.rawrotation_fromAngle(e);
          return ye.__wrap(t);
        }
        get im() {
          return f.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        get re() {
          return f.rawrotation_re(this.__wbg_ptr);
        }
        get angle() {
          return f.rawrotation_angle(this.__wbg_ptr);
        }
      }
      const Vg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawserializationpipeline_free(r >>> 0, 1));
      class GS {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Vg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawserializationpipeline_free(e, 0);
        }
        constructor() {
          const e = f.rawserializationpipeline_new();
          return this.__wbg_ptr = e >>> 0, Vg.register(this, this.__wbg_ptr, this), this;
        }
        serializeAll(e, t, n, i, o, s, a, l, c) {
          R(e, A), R(t, To), R(n, ri), R(i, Po), R(o, Fi), R(s, Oe), R(a, Xe), R(l, ti), R(c, ni);
          const u = f.rawserializationpipeline_serializeAll(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, l.__wbg_ptr, c.__wbg_ptr);
          return tu(u);
        }
        deserializeAll(e) {
          const t = f.rawserializationpipeline_deserializeAll(this.__wbg_ptr, dt(e));
          return t === 0 ? void 0 : jp.__wrap(t);
        }
      }
      const Wg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawshape_free(r >>> 0, 1));
      class ee {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(ee.prototype);
          return t.__wbg_ptr = e, Wg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Wg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawshape_free(e, 0);
        }
        static cuboid(e, t) {
          const n = f.rawshape_cuboid(e, t);
          return ee.__wrap(n);
        }
        static roundCuboid(e, t, n) {
          const i = f.rawshape_roundCuboid(e, t, n);
          return ee.__wrap(i);
        }
        static ball(e) {
          const t = f.rawshape_ball(e);
          return ee.__wrap(t);
        }
        static halfspace(e) {
          R(e, A);
          const t = f.rawshape_halfspace(e.__wbg_ptr);
          return ee.__wrap(t);
        }
        static capsule(e, t) {
          const n = f.rawshape_capsule(e, t);
          return ee.__wrap(n);
        }
        static voxels(e, t, n) {
          R(t, A);
          const i = Td(n, f.__wbindgen_export_2), o = Cr, s = f.rawshape_voxels(e, t.__wbg_ptr, i, o);
          return ee.__wrap(s);
        }
        static voxelsFromPoints(e, t, n) {
          R(t, A);
          const i = fi(n, f.__wbindgen_export_2), o = Cr, s = f.rawshape_voxelsFromPoints(e, t.__wbg_ptr, i, o);
          return ee.__wrap(s);
        }
        static polyline(e, t) {
          const n = fi(e, f.__wbindgen_export_2), i = Cr, o = Td(t, f.__wbindgen_export_2), s = Cr, a = f.rawshape_polyline(n, i, o, s);
          return ee.__wrap(a);
        }
        static trimesh(e, t, n) {
          const i = fi(e, f.__wbindgen_export_2), o = Cr, s = Td(t, f.__wbindgen_export_2), a = Cr, l = f.rawshape_trimesh(i, o, s, a, n);
          return l === 0 ? void 0 : ee.__wrap(l);
        }
        static heightfield(e, t) {
          const n = fi(e, f.__wbindgen_export_2), i = Cr;
          R(t, A);
          const o = f.rawshape_heightfield(n, i, t.__wbg_ptr);
          return ee.__wrap(o);
        }
        static segment(e, t) {
          R(e, A), R(t, A);
          const n = f.rawshape_segment(e.__wbg_ptr, t.__wbg_ptr);
          return ee.__wrap(n);
        }
        static triangle(e, t, n) {
          R(e, A), R(t, A), R(n, A);
          const i = f.rawshape_triangle(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
          return ee.__wrap(i);
        }
        static roundTriangle(e, t, n, i) {
          R(e, A), R(t, A), R(n, A);
          const o = f.rawshape_roundTriangle(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i);
          return ee.__wrap(o);
        }
        static convexHull(e) {
          const t = fi(e, f.__wbindgen_export_2), n = Cr, i = f.rawshape_convexHull(t, n);
          return i === 0 ? void 0 : ee.__wrap(i);
        }
        static roundConvexHull(e, t) {
          const n = fi(e, f.__wbindgen_export_2), i = Cr, o = f.rawshape_roundConvexHull(n, i, t);
          return o === 0 ? void 0 : ee.__wrap(o);
        }
        static convexPolyline(e) {
          const t = fi(e, f.__wbindgen_export_2), n = Cr, i = f.rawshape_convexPolyline(t, n);
          return i === 0 ? void 0 : ee.__wrap(i);
        }
        static roundConvexPolyline(e, t) {
          const n = fi(e, f.__wbindgen_export_2), i = Cr, o = f.rawshape_roundConvexPolyline(n, i, t);
          return o === 0 ? void 0 : ee.__wrap(o);
        }
        castShape(e, t, n, i, o, s, a, l, c, u) {
          R(e, A), R(t, ye), R(n, A), R(i, ee), R(o, A), R(s, ye), R(a, A);
          const h = f.rawshape_castShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, l, c, u);
          return h === 0 ? void 0 : Wu.__wrap(h);
        }
        intersectsShape(e, t, n, i, o) {
          return R(e, A), R(t, ye), R(n, ee), R(i, A), R(o, ye), f.rawshape_intersectsShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr) !== 0;
        }
        contactShape(e, t, n, i, o, s) {
          R(e, A), R(t, ye), R(n, ee), R(i, A), R(o, ye);
          const a = f.rawshape_contactShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o.__wbg_ptr, s);
          return a === 0 ? void 0 : il.__wrap(a);
        }
        containsPoint(e, t, n) {
          return R(e, A), R(t, ye), R(n, A), f.rawshape_containsPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr) !== 0;
        }
        projectPoint(e, t, n, i) {
          R(e, A), R(t, ye), R(n, A);
          const o = f.rawshape_projectPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i);
          return Uu.__wrap(o);
        }
        intersectsRay(e, t, n, i, o) {
          return R(e, A), R(t, ye), R(n, A), R(i, A), f.rawshape_intersectsRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o) !== 0;
        }
        castRay(e, t, n, i, o, s) {
          return R(e, A), R(t, ye), R(n, A), R(i, A), f.rawshape_castRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o, s);
        }
        castRayAndGetNormal(e, t, n, i, o, s) {
          R(e, A), R(t, ye), R(n, A), R(i, A);
          const a = f.rawshape_castRayAndGetNormal(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, i.__wbg_ptr, o, s);
          return a === 0 ? void 0 : Vu.__wrap(a);
        }
      }
      const Gg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawshapecasthit_free(r >>> 0, 1));
      class Wu {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(Wu.prototype);
          return t.__wbg_ptr = e, Gg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Gg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawshapecasthit_free(e, 0);
        }
        time_of_impact() {
          return f.rawrotation_re(this.__wbg_ptr);
        }
        witness1() {
          const e = f.rawshapecasthit_witness1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        witness2() {
          const e = f.rawcollidershapecasthit_witness1(this.__wbg_ptr);
          return A.__wrap(e);
        }
        normal1() {
          const e = f.rawcollidershapecasthit_witness2(this.__wbg_ptr);
          return A.__wrap(e);
        }
        normal2() {
          const e = f.rawcollidershapecasthit_normal1(this.__wbg_ptr);
          return A.__wrap(e);
        }
      }
      const Yg = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawshapecontact_free(r >>> 0, 1));
      class il {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(il.prototype);
          return t.__wbg_ptr = e, Yg.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Yg.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawshapecontact_free(e, 0);
        }
        distance() {
          return f.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
        }
        point1() {
          const e = f.rawpointprojection_point(this.__wbg_ptr);
          return A.__wrap(e);
        }
        point2() {
          const e = f.rawpointcolliderprojection_point(this.__wbg_ptr);
          return A.__wrap(e);
        }
        normal1() {
          const e = f.rawcontactforceevent_total_force(this.__wbg_ptr);
          return A.__wrap(e);
        }
        normal2() {
          const e = f.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
          return A.__wrap(e);
        }
      }
      const Dd = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((r) => f.__wbg_rawvector_free(r >>> 0, 1));
      class A {
        static __wrap(e) {
          e = e >>> 0;
          const t = Object.create(A.prototype);
          return t.__wbg_ptr = e, Dd.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Dd.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          f.__wbg_rawvector_free(e, 0);
        }
        static zero() {
          const e = f.rawvector_zero();
          return A.__wrap(e);
        }
        constructor(e, t) {
          const n = f.rawvector_new(e, t);
          return this.__wbg_ptr = n >>> 0, Dd.register(this, this.__wbg_ptr, this), this;
        }
        get x() {
          return f.rawrotation_re(this.__wbg_ptr);
        }
        set x(e) {
          f.rawvector_set_x(this.__wbg_ptr, e);
        }
        get y() {
          return f.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        set y(e) {
          f.rawintegrationparameters_set_dt(this.__wbg_ptr, e);
        }
        xy() {
          const e = f.rawvector_xy(this.__wbg_ptr);
          return A.__wrap(e);
        }
        yx() {
          const e = f.rawvector_yx(this.__wbg_ptr);
          return A.__wrap(e);
        }
      }
      function YS(r, e, t, n) {
        const i = Ce(r).bind(Ce(e), Ce(t), Ce(n));
        return dt(i);
      }
      function XS(r) {
        const e = Ce(r).buffer;
        return dt(e);
      }
      function qS() {
        return Ep(function(r, e, t) {
          const n = Ce(r).call(Ce(e), Ce(t));
          return dt(n);
        }, arguments);
      }
      function KS() {
        return Ep(function(r, e, t, n) {
          const i = Ce(r).call(Ce(e), Ce(t), Ce(n));
          return dt(i);
        }, arguments);
      }
      function JS() {
        return Ep(function(r, e, t, n, i) {
          const o = Ce(r).call(Ce(e), Ce(t), Ce(n), Ce(i));
          return dt(o);
        }, arguments);
      }
      function QS(r) {
        return Ce(r).length;
      }
      function ZS(r) {
        return Ce(r).length;
      }
      function e4(r) {
        const e = new Uint8Array(Ce(r));
        return dt(e);
      }
      function t4(r, e, t) {
        const n = new Uint8Array(Ce(r), e >>> 0, t >>> 0);
        return dt(n);
      }
      function r4(r, e, t) {
        const n = new Float32Array(Ce(r), e >>> 0, t >>> 0);
        return dt(n);
      }
      function n4(r) {
        const e = new Float32Array(r >>> 0);
        return dt(e);
      }
      function i4(r) {
        const e = Pp.__wrap(r);
        return dt(e);
      }
      function o4(r) {
        const e = $u.__wrap(r);
        return dt(e);
      }
      function s4(r, e, t) {
        Ce(r).set(Ce(e), t >>> 0);
      }
      function a4(r, e, t) {
        Ce(r).set(Ce(e), t >>> 0);
      }
      function l4(r) {
        const e = Ce(r);
        return typeof e == "boolean" ? e ? 1 : 0 : 2;
      }
      function c4(r) {
        return typeof Ce(r) == "function";
      }
      function u4() {
        const r = f.memory;
        return dt(r);
      }
      function d4(r, e) {
        const t = Ce(e), n = typeof t == "number" ? t : void 0;
        Bt().setFloat64(r + 8 * 1, Q(n) ? 0 : n, true), Bt().setInt32(r + 4 * 0, !Q(n), true);
      }
      function f4(r) {
        return dt(r);
      }
      function h4(r) {
        tu(r);
      }
      function p4(r, e) {
        throw new Error(LS(r, e));
      }
      URL = globalThis.URL;
      const _ = await jS({
        "./rapier_wasm2d_bg.js": {
          __wbindgen_number_new: f4,
          __wbindgen_boolean_get: l4,
          __wbindgen_object_drop_ref: h4,
          __wbindgen_number_get: d4,
          __wbindgen_is_function: c4,
          __wbg_rawraycolliderintersection_new: o4,
          __wbg_rawcontactforceevent_new: i4,
          __wbg_call_7cccdd69e0791ae2: qS,
          __wbg_call_833bed5770ea2041: KS,
          __wbg_call_b8adc8b1d0a0d8eb: JS,
          __wbg_bind_c8359b1cba058168: YS,
          __wbg_buffer_609cc3eee51ed158: XS,
          __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: t4,
          __wbg_new_a12002a7f91c75be: e4,
          __wbg_set_65595bdd868b3009: a4,
          __wbg_length_a446193dc22c12f8: ZS,
          __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: r4,
          __wbg_set_10bad9bee0e9c58b: s4,
          __wbg_length_3b4f022188ae8db6: QS,
          __wbg_newwithlength_5a5efe313cfd59f1: n4,
          __wbindgen_throw: p4,
          __wbindgen_memory: u4
        }
      }, AS), _4 = _.memory, g4 = _.version, w4 = _.__wbg_rawkinematiccharactercontroller_free, m4 = _.rawkinematiccharactercontroller_new, y4 = _.rawkinematiccharactercontroller_setUp, v4 = _.rawkinematiccharactercontroller_normalNudgeFactor, b4 = _.rawkinematiccharactercontroller_setNormalNudgeFactor, S4 = _.rawkinematiccharactercontroller_setOffset, x4 = _.rawkinematiccharactercontroller_slideEnabled, C4 = _.rawkinematiccharactercontroller_setSlideEnabled, k4 = _.rawkinematiccharactercontroller_autostepMaxHeight, R4 = _.rawkinematiccharactercontroller_autostepMinWidth, E4 = _.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, P4 = _.rawkinematiccharactercontroller_autostepEnabled, T4 = _.rawkinematiccharactercontroller_enableAutostep, A4 = _.rawkinematiccharactercontroller_disableAutostep, j4 = _.rawkinematiccharactercontroller_minSlopeSlideAngle, M4 = _.rawkinematiccharactercontroller_setMinSlopeSlideAngle, I4 = _.rawkinematiccharactercontroller_snapToGroundDistance, z4 = _.rawkinematiccharactercontroller_enableSnapToGround, N4 = _.rawkinematiccharactercontroller_disableSnapToGround, L4 = _.rawkinematiccharactercontroller_snapToGroundEnabled, O4 = _.rawkinematiccharactercontroller_computeColliderMovement, D4 = _.rawkinematiccharactercontroller_computedMovement, F4 = _.rawkinematiccharactercontroller_computedGrounded, H4 = _.rawkinematiccharactercontroller_numComputedCollisions, B4 = _.rawkinematiccharactercontroller_computedCollision, U4 = _.__wbg_rawcharactercollision_free, $4 = _.rawcharactercollision_new, V4 = _.rawcharactercollision_handle, W4 = _.rawcharactercollision_translationDeltaApplied, G4 = _.rawcharactercollision_translationDeltaRemaining, Y4 = _.rawcharactercollision_toi, X4 = _.rawcharactercollision_worldWitness1, q4 = _.rawcharactercollision_worldWitness2, K4 = _.rawcharactercollision_worldNormal1, J4 = _.rawcharactercollision_worldNormal2, Q4 = _.__wbg_rawpidcontroller_free, Z4 = _.rawpidcontroller_new, e3 = _.rawpidcontroller_set_kp, t3 = _.rawpidcontroller_set_ki, r3 = _.rawpidcontroller_set_kd, n3 = _.rawpidcontroller_set_axes_mask, i3 = _.rawpidcontroller_reset_integrals, o3 = _.rawpidcontroller_apply_linear_correction, s3 = _.rawpidcontroller_apply_angular_correction, a3 = _.rawpidcontroller_linear_correction, l3 = _.rawpidcontroller_angular_correction, c3 = _.__wbg_rawccdsolver_free, u3 = _.rawccdsolver_new, d3 = _.rawimpulsejointset_jointType, f3 = _.rawimpulsejointset_jointBodyHandle1, h3 = _.rawimpulsejointset_jointBodyHandle2, p3 = _.rawimpulsejointset_jointFrameX1, _3 = _.rawimpulsejointset_jointFrameX2, g3 = _.rawimpulsejointset_jointAnchor1, w3 = _.rawimpulsejointset_jointAnchor2, m3 = _.rawimpulsejointset_jointSetAnchor1, y3 = _.rawimpulsejointset_jointSetAnchor2, v3 = _.rawimpulsejointset_jointContactsEnabled, b3 = _.rawimpulsejointset_jointSetContactsEnabled, S3 = _.rawimpulsejointset_jointLimitsEnabled, x3 = _.rawimpulsejointset_jointLimitsMin, C3 = _.rawimpulsejointset_jointLimitsMax, k3 = _.rawimpulsejointset_jointSetLimits, R3 = _.rawimpulsejointset_jointConfigureMotorModel, E3 = _.rawimpulsejointset_jointConfigureMotorVelocity, P3 = _.rawimpulsejointset_jointConfigureMotorPosition, T3 = _.rawimpulsejointset_jointConfigureMotor, A3 = _.__wbg_rawimpulsejointset_free, j3 = _.rawimpulsejointset_new, M3 = _.rawimpulsejointset_createJoint, I3 = _.rawimpulsejointset_remove, z3 = _.rawimpulsejointset_len, N3 = _.rawimpulsejointset_contains, L3 = _.rawimpulsejointset_forEachJointHandle, O3 = _.rawimpulsejointset_forEachJointAttachedToRigidBody, D3 = _.__wbg_rawintegrationparameters_free, F3 = _.rawintegrationparameters_new, H3 = _.rawintegrationparameters_dt, B3 = _.rawintegrationparameters_contact_erp, U3 = _.rawintegrationparameters_normalizedPredictionDistance, $3 = _.rawintegrationparameters_numSolverIterations, V3 = _.rawintegrationparameters_numAdditionalFrictionIterations, W3 = _.rawintegrationparameters_numInternalPgsIterations, G3 = _.rawintegrationparameters_minIslandSize, Y3 = _.rawintegrationparameters_maxCcdSubsteps, X3 = _.rawintegrationparameters_set_dt, q3 = _.rawintegrationparameters_set_contact_natural_frequency, K3 = _.rawintegrationparameters_set_normalizedAllowedLinearError, J3 = _.rawintegrationparameters_set_normalizedPredictionDistance, Q3 = _.rawintegrationparameters_set_numSolverIterations, Z3 = _.rawintegrationparameters_set_numAdditionalFrictionIterations, ex = _.rawintegrationparameters_set_numInternalPgsIterations, tx = _.rawintegrationparameters_set_minIslandSize, rx = _.rawintegrationparameters_set_maxCcdSubsteps, nx = _.rawintegrationparameters_set_lengthUnit, ix = _.rawintegrationparameters_switchToStandardPgsSolver, ox = _.rawintegrationparameters_switchToSmallStepsPgsSolver, sx = _.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart, ax = _.__wbg_rawislandmanager_free, lx = _.rawislandmanager_new, cx = _.rawislandmanager_forEachActiveRigidBodyHandle, ux = _.__wbg_rawgenericjoint_free, dx = _.rawgenericjoint_spring, fx = _.rawgenericjoint_rope, hx = _.rawgenericjoint_prismatic, px = _.rawgenericjoint_fixed, _x = _.rawgenericjoint_revolute, gx = _.rawmultibodyjointset_jointType, wx = _.rawmultibodyjointset_jointFrameX1, mx = _.rawmultibodyjointset_jointFrameX2, yx = _.rawmultibodyjointset_jointAnchor1, vx = _.rawmultibodyjointset_jointAnchor2, bx = _.rawmultibodyjointset_jointContactsEnabled, Sx = _.rawmultibodyjointset_jointSetContactsEnabled, xx = _.rawmultibodyjointset_jointLimitsEnabled, Cx = _.rawmultibodyjointset_jointLimitsMin, kx = _.rawmultibodyjointset_jointLimitsMax, Rx = _.__wbg_rawmultibodyjointset_free, Ex = _.rawmultibodyjointset_new, Px = _.rawmultibodyjointset_createJoint, Tx = _.rawmultibodyjointset_remove, Ax = _.rawmultibodyjointset_contains, jx = _.rawmultibodyjointset_forEachJointHandle, Mx = _.rawmultibodyjointset_forEachJointAttachedToRigidBody, Ix = _.rawrigidbodyset_rbTranslation, zx = _.rawrigidbodyset_rbRotation, Nx = _.rawrigidbodyset_rbSleep, Lx = _.rawrigidbodyset_rbIsSleeping, Ox = _.rawrigidbodyset_rbIsMoving, Dx = _.rawrigidbodyset_rbNextTranslation, Fx = _.rawrigidbodyset_rbNextRotation, Hx = _.rawrigidbodyset_rbSetTranslation, Bx = _.rawrigidbodyset_rbSetRotation, Ux = _.rawrigidbodyset_rbSetLinvel, $x = _.rawrigidbodyset_rbSetAngvel, Vx = _.rawrigidbodyset_rbSetNextKinematicTranslation, Wx = _.rawrigidbodyset_rbSetNextKinematicRotation, Gx = _.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, Yx = _.rawrigidbodyset_rbSetAdditionalMass, Xx = _.rawrigidbodyset_rbSetAdditionalMassProperties, qx = _.rawrigidbodyset_rbLinvel, Kx = _.rawrigidbodyset_rbAngvel, Jx = _.rawrigidbodyset_rbVelocityAtPoint, Qx = _.rawrigidbodyset_rbLockTranslations, Zx = _.rawrigidbodyset_rbSetEnabledTranslations, e6 = _.rawrigidbodyset_rbLockRotations, t6 = _.rawrigidbodyset_rbDominanceGroup, r6 = _.rawrigidbodyset_rbSetDominanceGroup, n6 = _.rawrigidbodyset_rbEnableCcd, i6 = _.rawrigidbodyset_rbSetSoftCcdPrediction, o6 = _.rawrigidbodyset_rbMass, s6 = _.rawrigidbodyset_rbInvMass, a6 = _.rawrigidbodyset_rbEffectiveInvMass, l6 = _.rawrigidbodyset_rbLocalCom, c6 = _.rawrigidbodyset_rbWorldCom, u6 = _.rawrigidbodyset_rbInvPrincipalInertiaSqrt, d6 = _.rawrigidbodyset_rbPrincipalInertia, f6 = _.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt, h6 = _.rawrigidbodyset_rbEffectiveAngularInertia, p6 = _.rawrigidbodyset_rbWakeUp, _6 = _.rawrigidbodyset_rbIsCcdEnabled, g6 = _.rawrigidbodyset_rbSoftCcdPrediction, w6 = _.rawrigidbodyset_rbNumColliders, m6 = _.rawrigidbodyset_rbCollider, y6 = _.rawrigidbodyset_rbBodyType, v6 = _.rawrigidbodyset_rbSetBodyType, b6 = _.rawrigidbodyset_rbIsFixed, S6 = _.rawrigidbodyset_rbIsKinematic, x6 = _.rawrigidbodyset_rbIsDynamic, C6 = _.rawrigidbodyset_rbLinearDamping, k6 = _.rawrigidbodyset_rbAngularDamping, R6 = _.rawrigidbodyset_rbSetLinearDamping, E6 = _.rawrigidbodyset_rbSetAngularDamping, P6 = _.rawrigidbodyset_rbSetEnabled, T6 = _.rawrigidbodyset_rbIsEnabled, A6 = _.rawrigidbodyset_rbGravityScale, j6 = _.rawrigidbodyset_rbSetGravityScale, M6 = _.rawrigidbodyset_rbResetForces, I6 = _.rawrigidbodyset_rbResetTorques, z6 = _.rawrigidbodyset_rbAddForce, N6 = _.rawrigidbodyset_rbApplyImpulse, L6 = _.rawrigidbodyset_rbAddTorque, O6 = _.rawrigidbodyset_rbApplyTorqueImpulse, D6 = _.rawrigidbodyset_rbAddForceAtPoint, F6 = _.rawrigidbodyset_rbApplyImpulseAtPoint, H6 = _.rawrigidbodyset_rbAdditionalSolverIterations, B6 = _.rawrigidbodyset_rbSetAdditionalSolverIterations, U6 = _.rawrigidbodyset_rbUserData, $6 = _.rawrigidbodyset_rbSetUserData, V6 = _.rawrigidbodyset_rbUserForce, W6 = _.rawrigidbodyset_rbUserTorque, G6 = _.__wbg_rawrigidbodyset_free, Y6 = _.rawrigidbodyset_new, X6 = _.rawrigidbodyset_createRigidBody, q6 = _.rawrigidbodyset_remove, K6 = _.rawrigidbodyset_contains, J6 = _.rawrigidbodyset_forEachRigidBodyHandle, Q6 = _.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, Z6 = _.__wbg_rawbroadphase_free, e5 = _.rawbroadphase_new, t5 = _.rawcolliderset_coTranslation, r5 = _.rawcolliderset_coRotation, n5 = _.rawcolliderset_coSetTranslation, i5 = _.rawcolliderset_coSetTranslationWrtParent, o5 = _.rawcolliderset_coSetRotation, s5 = _.rawcolliderset_coSetRotationWrtParent, a5 = _.rawcolliderset_coIsSensor, l5 = _.rawcolliderset_coShapeType, c5 = _.rawcolliderset_coHalfspaceNormal, u5 = _.rawcolliderset_coHalfExtents, d5 = _.rawcolliderset_coSetHalfExtents, f5 = _.rawcolliderset_coRadius, h5 = _.rawcolliderset_coSetRadius, p5 = _.rawcolliderset_coHalfHeight, _5 = _.rawcolliderset_coSetHalfHeight, g5 = _.rawcolliderset_coRoundRadius, w5 = _.rawcolliderset_coSetRoundRadius, m5 = _.rawcolliderset_coVoxelData, y5 = _.rawcolliderset_coVoxelPrimitiveGeometry, v5 = _.rawcolliderset_coVoxelSize, b5 = _.rawcolliderset_coSetVoxel, S5 = _.rawcolliderset_coVertices, x5 = _.rawcolliderset_coIndices, C5 = _.rawcolliderset_coTriMeshFlags, k5 = _.rawcolliderset_coHeightfieldHeights, R5 = _.rawcolliderset_coHeightfieldScale, E5 = _.rawcolliderset_coParent, P5 = _.rawcolliderset_coSetEnabled, T5 = _.rawcolliderset_coIsEnabled, A5 = _.rawcolliderset_coSetContactSkin, j5 = _.rawcolliderset_coContactSkin, M5 = _.rawcolliderset_coFriction, I5 = _.rawcolliderset_coRestitution, z5 = _.rawcolliderset_coDensity, N5 = _.rawcolliderset_coMass, L5 = _.rawcolliderset_coVolume, O5 = _.rawcolliderset_coCollisionGroups, D5 = _.rawcolliderset_coSolverGroups, F5 = _.rawcolliderset_coActiveHooks, H5 = _.rawcolliderset_coActiveCollisionTypes, B5 = _.rawcolliderset_coActiveEvents, U5 = _.rawcolliderset_coContactForceEventThreshold, $5 = _.rawcolliderset_coContainsPoint, V5 = _.rawcolliderset_coCastShape, W5 = _.rawcolliderset_coCastCollider, G5 = _.rawcolliderset_coIntersectsShape, Y5 = _.rawcolliderset_coContactShape, X5 = _.rawcolliderset_coContactCollider, q5 = _.rawcolliderset_coProjectPoint, K5 = _.rawcolliderset_coIntersectsRay, J5 = _.rawcolliderset_coCastRay, Q5 = _.rawcolliderset_coCastRayAndGetNormal, Z5 = _.rawcolliderset_coSetSensor, eC = _.rawcolliderset_coSetRestitution, tC = _.rawcolliderset_coSetFriction, rC = _.rawcolliderset_coFrictionCombineRule, nC = _.rawcolliderset_coSetFrictionCombineRule, iC = _.rawcolliderset_coRestitutionCombineRule, oC = _.rawcolliderset_coSetRestitutionCombineRule, sC = _.rawcolliderset_coSetCollisionGroups, aC = _.rawcolliderset_coSetSolverGroups, lC = _.rawcolliderset_coSetActiveHooks, cC = _.rawcolliderset_coSetActiveEvents, uC = _.rawcolliderset_coSetActiveCollisionTypes, dC = _.rawcolliderset_coSetShape, fC = _.rawcolliderset_coSetContactForceEventThreshold, hC = _.rawcolliderset_coSetDensity, pC = _.rawcolliderset_coSetMass, _C = _.rawcolliderset_coSetMassProperties, gC = _.__wbg_rawcolliderset_free, wC = _.rawcolliderset_new, mC = _.rawcolliderset_len, yC = _.rawcolliderset_contains, vC = _.rawcolliderset_createCollider, bC = _.rawcolliderset_remove, SC = _.rawcolliderset_forEachColliderHandle, xC = _.__wbg_rawshapecontact_free, CC = _.__wbg_rawnarrowphase_free, kC = _.rawnarrowphase_new, RC = _.rawnarrowphase_contact_pairs_with, EC = _.rawnarrowphase_contact_pair, PC = _.rawnarrowphase_intersection_pairs_with, TC = _.rawnarrowphase_intersection_pair, AC = _.__wbg_rawcontactmanifold_free, jC = _.rawcontactpair_collider1, MC = _.rawcontactpair_collider2, IC = _.rawcontactpair_numContactManifolds, zC = _.rawcontactpair_contactManifold, NC = _.rawcontactmanifold_normal, LC = _.rawcontactmanifold_local_n1, OC = _.rawcontactmanifold_local_n2, DC = _.rawcontactmanifold_subshape1, FC = _.rawcontactmanifold_subshape2, HC = _.rawcontactmanifold_num_contacts, BC = _.rawcontactmanifold_contact_local_p1, UC = _.rawcontactmanifold_contact_local_p2, $C = _.rawcontactmanifold_contact_dist, VC = _.rawcontactmanifold_contact_fid1, WC = _.rawcontactmanifold_contact_fid2, GC = _.rawcontactmanifold_contact_impulse, YC = _.rawcontactmanifold_contact_tangent_impulse, XC = _.rawcontactmanifold_num_solver_contacts, qC = _.rawcontactmanifold_solver_contact_point, KC = _.rawcontactmanifold_solver_contact_dist, JC = _.rawcontactmanifold_solver_contact_friction, QC = _.rawcontactmanifold_solver_contact_restitution, ZC = _.rawcontactmanifold_solver_contact_tangent_velocity, e8 = _.__wbg_rawpointprojection_free, t8 = _.rawpointprojection_point, r8 = _.rawpointprojection_isInside, n8 = _.__wbg_rawpointcolliderprojection_free, i8 = _.rawpointcolliderprojection_colliderHandle, o8 = _.rawpointcolliderprojection_point, s8 = _.rawpointcolliderprojection_isInside, a8 = _.rawpointcolliderprojection_featureType, l8 = _.rawpointcolliderprojection_featureId, c8 = _.__wbg_rawrayintersection_free, u8 = _.__wbg_rawshape_free, d8 = _.rawshape_cuboid, f8 = _.rawshape_roundCuboid, h8 = _.rawshape_ball, p8 = _.rawshape_halfspace, _8 = _.rawshape_capsule, g8 = _.rawshape_voxels, w8 = _.rawshape_voxelsFromPoints, m8 = _.rawshape_polyline, y8 = _.rawshape_trimesh, v8 = _.rawshape_heightfield, b8 = _.rawshape_segment, S8 = _.rawshape_triangle, x8 = _.rawshape_roundTriangle, C8 = _.rawshape_convexHull, k8 = _.rawshape_roundConvexHull, R8 = _.rawshape_convexPolyline, E8 = _.rawshape_roundConvexPolyline, P8 = _.rawshape_castShape, T8 = _.rawshape_intersectsShape, A8 = _.rawshape_contactShape, j8 = _.rawshape_containsPoint, M8 = _.rawshape_projectPoint, I8 = _.rawshape_intersectsRay, z8 = _.rawshape_castRay, N8 = _.rawshape_castRayAndGetNormal, L8 = _.rawshapecasthit_witness1, O8 = _.__wbg_rawcollidershapecasthit_free, D8 = _.rawcollidershapecasthit_colliderHandle, F8 = _.rawcollidershapecasthit_time_of_impact, H8 = _.rawcollidershapecasthit_witness1, B8 = _.rawcollidershapecasthit_witness2, U8 = _.rawcollidershapecasthit_normal1, $8 = _.rawcollidershapecasthit_normal2, V8 = _.__wbg_rawrotation_free, W8 = _.rawrotation_identity, G8 = _.rawrotation_fromAngle, Y8 = _.rawrotation_re, X8 = _.rawrotation_angle, q8 = _.__wbg_rawvector_free, K8 = _.rawvector_zero, J8 = _.rawvector_new, Q8 = _.rawvector_set_x, Z8 = _.rawvector_xy, ek = _.rawvector_yx, tk = _.__wbg_rawdebugrenderpipeline_free, rk = _.rawdebugrenderpipeline_new, nk = _.rawdebugrenderpipeline_vertices, ik = _.rawdebugrenderpipeline_colors, ok = _.rawdebugrenderpipeline_render, sk = _.__wbg_raweventqueue_free, ak = _.__wbg_rawcontactforceevent_free, lk = _.rawcontactforceevent_collider2, ck = _.rawcontactforceevent_total_force, uk = _.rawcontactforceevent_total_force_magnitude, dk = _.rawcontactforceevent_max_force_magnitude, fk = _.raweventqueue_new, hk = _.raweventqueue_drainCollisionEvents, pk = _.raweventqueue_drainContactForceEvents, _k = _.raweventqueue_clear, gk = _.__wbg_rawphysicspipeline_free, wk = _.rawphysicspipeline_new, mk = _.rawphysicspipeline_step, yk = _.rawphysicspipeline_stepWithEvents, vk = _.rawquerypipeline_new, bk = _.rawquerypipeline_update, Sk = _.rawquerypipeline_castRay, xk = _.rawquerypipeline_castRayAndGetNormal, Ck = _.rawquerypipeline_intersectionsWithRay, kk = _.rawquerypipeline_intersectionWithShape, Rk = _.rawquerypipeline_projectPoint, Ek = _.rawquerypipeline_projectPointAndGetFeature, Pk = _.rawquerypipeline_intersectionsWithPoint, Tk = _.rawquerypipeline_castShape, Ak = _.rawquerypipeline_intersectionsWithShape, jk = _.rawquerypipeline_collidersWithAabbIntersectingAabb, Mk = _.__wbg_rawdeserializedworld_free, Ik = _.rawdeserializedworld_takeGravity, zk = _.rawdeserializedworld_takeIntegrationParameters, Nk = _.rawdeserializedworld_takeIslandManager, Lk = _.rawdeserializedworld_takeBroadPhase, Ok = _.rawdeserializedworld_takeNarrowPhase, Dk = _.rawdeserializedworld_takeBodies, Fk = _.rawdeserializedworld_takeColliders, Hk = _.rawdeserializedworld_takeImpulseJoints, Bk = _.rawdeserializedworld_takeMultibodyJoints, Uk = _.__wbg_rawserializationpipeline_free, $k = _.rawserializationpipeline_new, Vk = _.rawserializationpipeline_serializeAll, Wk = _.rawserializationpipeline_deserializeAll, Gk = _.rawcolliderset_isHandleValid, Yk = _.rawkinematiccharactercontroller_offset, Xk = _.rawkinematiccharactercontroller_maxSlopeClimbAngle, qk = _.rawrigidbodyset_len, Kk = _.rawshapecontact_distance, Jk = _.rawrayintersection_featureType, Qk = _.rawraycolliderintersection_colliderHandle, Zk = _.rawrayintersection_time_of_impact, eR = _.rawraycolliderintersection_featureType, tR = _.rawraycolliderintersection_time_of_impact, rR = _.rawraycolliderhit_colliderHandle, nR = _.rawraycolliderhit_timeOfImpact, iR = _.rawrotation_im, oR = _.rawshapecasthit_time_of_impact, sR = _.rawvector_x, aR = _.rawvector_y, lR = _.rawcontactforceevent_collider1, cR = _.rawintegrationparameters_lengthUnit, uR = _.rawintegrationparameters_normalizedAllowedLinearError, dR = _.rawrayintersection_featureId, fR = _.rawraycolliderintersection_featureId, hR = _.__wbg_rawquerypipeline_free, pR = _.rawshapecontact_normal2, _R = _.rawshapecontact_point1, gR = _.rawshapecontact_point2, wR = _.rawrayintersection_normal, mR = _.rawshapecasthit_witness2, yR = _.rawraycolliderintersection_normal, vR = _.rawshapecasthit_normal1, bR = _.rawshapecasthit_normal2, SR = _.rawkinematiccharactercontroller_up, xR = _.rawshapecontact_normal1, CR = _.rawcontactforceevent_max_force_direction, kR = _.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, RR = _.rawvector_set_y, ER = _.__wbg_rawraycolliderhit_free, PR = _.__wbg_rawshapecasthit_free, TR = _.__wbg_rawcontactpair_free, AR = _.__wbg_rawraycolliderintersection_free, jR = _.__wbindgen_export_0, MR = _.__wbindgen_add_to_stack_pointer, IR = _.__wbindgen_export_1, zR = _.__wbindgen_export_2, NR = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbg_rawbroadphase_free: Z6,
        __wbg_rawccdsolver_free: c3,
        __wbg_rawcharactercollision_free: U4,
        __wbg_rawcolliderset_free: gC,
        __wbg_rawcollidershapecasthit_free: O8,
        __wbg_rawcontactforceevent_free: ak,
        __wbg_rawcontactmanifold_free: AC,
        __wbg_rawcontactpair_free: TR,
        __wbg_rawdebugrenderpipeline_free: tk,
        __wbg_rawdeserializedworld_free: Mk,
        __wbg_raweventqueue_free: sk,
        __wbg_rawgenericjoint_free: ux,
        __wbg_rawimpulsejointset_free: A3,
        __wbg_rawintegrationparameters_free: D3,
        __wbg_rawislandmanager_free: ax,
        __wbg_rawkinematiccharactercontroller_free: w4,
        __wbg_rawmultibodyjointset_free: Rx,
        __wbg_rawnarrowphase_free: CC,
        __wbg_rawphysicspipeline_free: gk,
        __wbg_rawpidcontroller_free: Q4,
        __wbg_rawpointcolliderprojection_free: n8,
        __wbg_rawpointprojection_free: e8,
        __wbg_rawquerypipeline_free: hR,
        __wbg_rawraycolliderhit_free: ER,
        __wbg_rawraycolliderintersection_free: AR,
        __wbg_rawrayintersection_free: c8,
        __wbg_rawrigidbodyset_free: G6,
        __wbg_rawrotation_free: V8,
        __wbg_rawserializationpipeline_free: Uk,
        __wbg_rawshape_free: u8,
        __wbg_rawshapecasthit_free: PR,
        __wbg_rawshapecontact_free: xC,
        __wbg_rawvector_free: q8,
        __wbindgen_add_to_stack_pointer: MR,
        __wbindgen_export_0: jR,
        __wbindgen_export_1: IR,
        __wbindgen_export_2: zR,
        memory: _4,
        rawbroadphase_new: e5,
        rawccdsolver_new: u3,
        rawcharactercollision_handle: V4,
        rawcharactercollision_new: $4,
        rawcharactercollision_toi: Y4,
        rawcharactercollision_translationDeltaApplied: W4,
        rawcharactercollision_translationDeltaRemaining: G4,
        rawcharactercollision_worldNormal1: K4,
        rawcharactercollision_worldNormal2: J4,
        rawcharactercollision_worldWitness1: X4,
        rawcharactercollision_worldWitness2: q4,
        rawcolliderset_coActiveCollisionTypes: H5,
        rawcolliderset_coActiveEvents: B5,
        rawcolliderset_coActiveHooks: F5,
        rawcolliderset_coCastCollider: W5,
        rawcolliderset_coCastRay: J5,
        rawcolliderset_coCastRayAndGetNormal: Q5,
        rawcolliderset_coCastShape: V5,
        rawcolliderset_coCollisionGroups: O5,
        rawcolliderset_coContactCollider: X5,
        rawcolliderset_coContactForceEventThreshold: U5,
        rawcolliderset_coContactShape: Y5,
        rawcolliderset_coContactSkin: j5,
        rawcolliderset_coContainsPoint: $5,
        rawcolliderset_coDensity: z5,
        rawcolliderset_coFriction: M5,
        rawcolliderset_coFrictionCombineRule: rC,
        rawcolliderset_coHalfExtents: u5,
        rawcolliderset_coHalfHeight: p5,
        rawcolliderset_coHalfspaceNormal: c5,
        rawcolliderset_coHeightfieldHeights: k5,
        rawcolliderset_coHeightfieldScale: R5,
        rawcolliderset_coIndices: x5,
        rawcolliderset_coIntersectsRay: K5,
        rawcolliderset_coIntersectsShape: G5,
        rawcolliderset_coIsEnabled: T5,
        rawcolliderset_coIsSensor: a5,
        rawcolliderset_coMass: N5,
        rawcolliderset_coParent: E5,
        rawcolliderset_coProjectPoint: q5,
        rawcolliderset_coRadius: f5,
        rawcolliderset_coRestitution: I5,
        rawcolliderset_coRestitutionCombineRule: iC,
        rawcolliderset_coRotation: r5,
        rawcolliderset_coRoundRadius: g5,
        rawcolliderset_coSetActiveCollisionTypes: uC,
        rawcolliderset_coSetActiveEvents: cC,
        rawcolliderset_coSetActiveHooks: lC,
        rawcolliderset_coSetCollisionGroups: sC,
        rawcolliderset_coSetContactForceEventThreshold: fC,
        rawcolliderset_coSetContactSkin: A5,
        rawcolliderset_coSetDensity: hC,
        rawcolliderset_coSetEnabled: P5,
        rawcolliderset_coSetFriction: tC,
        rawcolliderset_coSetFrictionCombineRule: nC,
        rawcolliderset_coSetHalfExtents: d5,
        rawcolliderset_coSetHalfHeight: _5,
        rawcolliderset_coSetMass: pC,
        rawcolliderset_coSetMassProperties: _C,
        rawcolliderset_coSetRadius: h5,
        rawcolliderset_coSetRestitution: eC,
        rawcolliderset_coSetRestitutionCombineRule: oC,
        rawcolliderset_coSetRotation: o5,
        rawcolliderset_coSetRotationWrtParent: s5,
        rawcolliderset_coSetRoundRadius: w5,
        rawcolliderset_coSetSensor: Z5,
        rawcolliderset_coSetShape: dC,
        rawcolliderset_coSetSolverGroups: aC,
        rawcolliderset_coSetTranslation: n5,
        rawcolliderset_coSetTranslationWrtParent: i5,
        rawcolliderset_coSetVoxel: b5,
        rawcolliderset_coShapeType: l5,
        rawcolliderset_coSolverGroups: D5,
        rawcolliderset_coTranslation: t5,
        rawcolliderset_coTriMeshFlags: C5,
        rawcolliderset_coVertices: S5,
        rawcolliderset_coVolume: L5,
        rawcolliderset_coVoxelData: m5,
        rawcolliderset_coVoxelPrimitiveGeometry: y5,
        rawcolliderset_coVoxelSize: v5,
        rawcolliderset_contains: yC,
        rawcolliderset_createCollider: vC,
        rawcolliderset_forEachColliderHandle: SC,
        rawcolliderset_isHandleValid: Gk,
        rawcolliderset_len: mC,
        rawcolliderset_new: wC,
        rawcolliderset_remove: bC,
        rawcollidershapecasthit_colliderHandle: D8,
        rawcollidershapecasthit_normal1: U8,
        rawcollidershapecasthit_normal2: $8,
        rawcollidershapecasthit_time_of_impact: F8,
        rawcollidershapecasthit_witness1: H8,
        rawcollidershapecasthit_witness2: B8,
        rawcontactforceevent_collider1: lR,
        rawcontactforceevent_collider2: lk,
        rawcontactforceevent_max_force_direction: CR,
        rawcontactforceevent_max_force_magnitude: dk,
        rawcontactforceevent_total_force: ck,
        rawcontactforceevent_total_force_magnitude: uk,
        rawcontactmanifold_contact_dist: $C,
        rawcontactmanifold_contact_fid1: VC,
        rawcontactmanifold_contact_fid2: WC,
        rawcontactmanifold_contact_impulse: GC,
        rawcontactmanifold_contact_local_p1: BC,
        rawcontactmanifold_contact_local_p2: UC,
        rawcontactmanifold_contact_tangent_impulse: YC,
        rawcontactmanifold_local_n1: LC,
        rawcontactmanifold_local_n2: OC,
        rawcontactmanifold_normal: NC,
        rawcontactmanifold_num_contacts: HC,
        rawcontactmanifold_num_solver_contacts: XC,
        rawcontactmanifold_solver_contact_dist: KC,
        rawcontactmanifold_solver_contact_friction: JC,
        rawcontactmanifold_solver_contact_point: qC,
        rawcontactmanifold_solver_contact_restitution: QC,
        rawcontactmanifold_solver_contact_tangent_velocity: ZC,
        rawcontactmanifold_subshape1: DC,
        rawcontactmanifold_subshape2: FC,
        rawcontactpair_collider1: jC,
        rawcontactpair_collider2: MC,
        rawcontactpair_contactManifold: zC,
        rawcontactpair_numContactManifolds: IC,
        rawdebugrenderpipeline_colors: ik,
        rawdebugrenderpipeline_new: rk,
        rawdebugrenderpipeline_render: ok,
        rawdebugrenderpipeline_vertices: nk,
        rawdeserializedworld_takeBodies: Dk,
        rawdeserializedworld_takeBroadPhase: Lk,
        rawdeserializedworld_takeColliders: Fk,
        rawdeserializedworld_takeGravity: Ik,
        rawdeserializedworld_takeImpulseJoints: Hk,
        rawdeserializedworld_takeIntegrationParameters: zk,
        rawdeserializedworld_takeIslandManager: Nk,
        rawdeserializedworld_takeMultibodyJoints: Bk,
        rawdeserializedworld_takeNarrowPhase: Ok,
        raweventqueue_clear: _k,
        raweventqueue_drainCollisionEvents: hk,
        raweventqueue_drainContactForceEvents: pk,
        raweventqueue_new: fk,
        rawgenericjoint_fixed: px,
        rawgenericjoint_prismatic: hx,
        rawgenericjoint_revolute: _x,
        rawgenericjoint_rope: fx,
        rawgenericjoint_spring: dx,
        rawimpulsejointset_contains: N3,
        rawimpulsejointset_createJoint: M3,
        rawimpulsejointset_forEachJointAttachedToRigidBody: O3,
        rawimpulsejointset_forEachJointHandle: L3,
        rawimpulsejointset_jointAnchor1: g3,
        rawimpulsejointset_jointAnchor2: w3,
        rawimpulsejointset_jointBodyHandle1: f3,
        rawimpulsejointset_jointBodyHandle2: h3,
        rawimpulsejointset_jointConfigureMotor: T3,
        rawimpulsejointset_jointConfigureMotorModel: R3,
        rawimpulsejointset_jointConfigureMotorPosition: P3,
        rawimpulsejointset_jointConfigureMotorVelocity: E3,
        rawimpulsejointset_jointContactsEnabled: v3,
        rawimpulsejointset_jointFrameX1: p3,
        rawimpulsejointset_jointFrameX2: _3,
        rawimpulsejointset_jointLimitsEnabled: S3,
        rawimpulsejointset_jointLimitsMax: C3,
        rawimpulsejointset_jointLimitsMin: x3,
        rawimpulsejointset_jointSetAnchor1: m3,
        rawimpulsejointset_jointSetAnchor2: y3,
        rawimpulsejointset_jointSetContactsEnabled: b3,
        rawimpulsejointset_jointSetLimits: k3,
        rawimpulsejointset_jointType: d3,
        rawimpulsejointset_len: z3,
        rawimpulsejointset_new: j3,
        rawimpulsejointset_remove: I3,
        rawintegrationparameters_contact_erp: B3,
        rawintegrationparameters_dt: H3,
        rawintegrationparameters_lengthUnit: cR,
        rawintegrationparameters_maxCcdSubsteps: Y3,
        rawintegrationparameters_minIslandSize: G3,
        rawintegrationparameters_new: F3,
        rawintegrationparameters_normalizedAllowedLinearError: uR,
        rawintegrationparameters_normalizedPredictionDistance: U3,
        rawintegrationparameters_numAdditionalFrictionIterations: V3,
        rawintegrationparameters_numInternalPgsIterations: W3,
        rawintegrationparameters_numSolverIterations: $3,
        rawintegrationparameters_set_contact_natural_frequency: q3,
        rawintegrationparameters_set_dt: X3,
        rawintegrationparameters_set_lengthUnit: nx,
        rawintegrationparameters_set_maxCcdSubsteps: rx,
        rawintegrationparameters_set_minIslandSize: tx,
        rawintegrationparameters_set_normalizedAllowedLinearError: K3,
        rawintegrationparameters_set_normalizedPredictionDistance: J3,
        rawintegrationparameters_set_numAdditionalFrictionIterations: Z3,
        rawintegrationparameters_set_numInternalPgsIterations: ex,
        rawintegrationparameters_set_numSolverIterations: Q3,
        rawintegrationparameters_switchToSmallStepsPgsSolver: ox,
        rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart: sx,
        rawintegrationparameters_switchToStandardPgsSolver: ix,
        rawislandmanager_forEachActiveRigidBodyHandle: cx,
        rawislandmanager_new: lx,
        rawkinematiccharactercontroller_autostepEnabled: P4,
        rawkinematiccharactercontroller_autostepIncludesDynamicBodies: E4,
        rawkinematiccharactercontroller_autostepMaxHeight: k4,
        rawkinematiccharactercontroller_autostepMinWidth: R4,
        rawkinematiccharactercontroller_computeColliderMovement: O4,
        rawkinematiccharactercontroller_computedCollision: B4,
        rawkinematiccharactercontroller_computedGrounded: F4,
        rawkinematiccharactercontroller_computedMovement: D4,
        rawkinematiccharactercontroller_disableAutostep: A4,
        rawkinematiccharactercontroller_disableSnapToGround: N4,
        rawkinematiccharactercontroller_enableAutostep: T4,
        rawkinematiccharactercontroller_enableSnapToGround: z4,
        rawkinematiccharactercontroller_maxSlopeClimbAngle: Xk,
        rawkinematiccharactercontroller_minSlopeSlideAngle: j4,
        rawkinematiccharactercontroller_new: m4,
        rawkinematiccharactercontroller_normalNudgeFactor: v4,
        rawkinematiccharactercontroller_numComputedCollisions: H4,
        rawkinematiccharactercontroller_offset: Yk,
        rawkinematiccharactercontroller_setMaxSlopeClimbAngle: kR,
        rawkinematiccharactercontroller_setMinSlopeSlideAngle: M4,
        rawkinematiccharactercontroller_setNormalNudgeFactor: b4,
        rawkinematiccharactercontroller_setOffset: S4,
        rawkinematiccharactercontroller_setSlideEnabled: C4,
        rawkinematiccharactercontroller_setUp: y4,
        rawkinematiccharactercontroller_slideEnabled: x4,
        rawkinematiccharactercontroller_snapToGroundDistance: I4,
        rawkinematiccharactercontroller_snapToGroundEnabled: L4,
        rawkinematiccharactercontroller_up: SR,
        rawmultibodyjointset_contains: Ax,
        rawmultibodyjointset_createJoint: Px,
        rawmultibodyjointset_forEachJointAttachedToRigidBody: Mx,
        rawmultibodyjointset_forEachJointHandle: jx,
        rawmultibodyjointset_jointAnchor1: yx,
        rawmultibodyjointset_jointAnchor2: vx,
        rawmultibodyjointset_jointContactsEnabled: bx,
        rawmultibodyjointset_jointFrameX1: wx,
        rawmultibodyjointset_jointFrameX2: mx,
        rawmultibodyjointset_jointLimitsEnabled: xx,
        rawmultibodyjointset_jointLimitsMax: kx,
        rawmultibodyjointset_jointLimitsMin: Cx,
        rawmultibodyjointset_jointSetContactsEnabled: Sx,
        rawmultibodyjointset_jointType: gx,
        rawmultibodyjointset_new: Ex,
        rawmultibodyjointset_remove: Tx,
        rawnarrowphase_contact_pair: EC,
        rawnarrowphase_contact_pairs_with: RC,
        rawnarrowphase_intersection_pair: TC,
        rawnarrowphase_intersection_pairs_with: PC,
        rawnarrowphase_new: kC,
        rawphysicspipeline_new: wk,
        rawphysicspipeline_step: mk,
        rawphysicspipeline_stepWithEvents: yk,
        rawpidcontroller_angular_correction: l3,
        rawpidcontroller_apply_angular_correction: s3,
        rawpidcontroller_apply_linear_correction: o3,
        rawpidcontroller_linear_correction: a3,
        rawpidcontroller_new: Z4,
        rawpidcontroller_reset_integrals: i3,
        rawpidcontroller_set_axes_mask: n3,
        rawpidcontroller_set_kd: r3,
        rawpidcontroller_set_ki: t3,
        rawpidcontroller_set_kp: e3,
        rawpointcolliderprojection_colliderHandle: i8,
        rawpointcolliderprojection_featureId: l8,
        rawpointcolliderprojection_featureType: a8,
        rawpointcolliderprojection_isInside: s8,
        rawpointcolliderprojection_point: o8,
        rawpointprojection_isInside: r8,
        rawpointprojection_point: t8,
        rawquerypipeline_castRay: Sk,
        rawquerypipeline_castRayAndGetNormal: xk,
        rawquerypipeline_castShape: Tk,
        rawquerypipeline_collidersWithAabbIntersectingAabb: jk,
        rawquerypipeline_intersectionWithShape: kk,
        rawquerypipeline_intersectionsWithPoint: Pk,
        rawquerypipeline_intersectionsWithRay: Ck,
        rawquerypipeline_intersectionsWithShape: Ak,
        rawquerypipeline_new: vk,
        rawquerypipeline_projectPoint: Rk,
        rawquerypipeline_projectPointAndGetFeature: Ek,
        rawquerypipeline_update: bk,
        rawraycolliderhit_colliderHandle: rR,
        rawraycolliderhit_timeOfImpact: nR,
        rawraycolliderintersection_colliderHandle: Qk,
        rawraycolliderintersection_featureId: fR,
        rawraycolliderintersection_featureType: eR,
        rawraycolliderintersection_normal: yR,
        rawraycolliderintersection_time_of_impact: tR,
        rawrayintersection_featureId: dR,
        rawrayintersection_featureType: Jk,
        rawrayintersection_normal: wR,
        rawrayintersection_time_of_impact: Zk,
        rawrigidbodyset_contains: K6,
        rawrigidbodyset_createRigidBody: X6,
        rawrigidbodyset_forEachRigidBodyHandle: J6,
        rawrigidbodyset_len: qk,
        rawrigidbodyset_new: Y6,
        rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Q6,
        rawrigidbodyset_rbAddForce: z6,
        rawrigidbodyset_rbAddForceAtPoint: D6,
        rawrigidbodyset_rbAddTorque: L6,
        rawrigidbodyset_rbAdditionalSolverIterations: H6,
        rawrigidbodyset_rbAngularDamping: k6,
        rawrigidbodyset_rbAngvel: Kx,
        rawrigidbodyset_rbApplyImpulse: N6,
        rawrigidbodyset_rbApplyImpulseAtPoint: F6,
        rawrigidbodyset_rbApplyTorqueImpulse: O6,
        rawrigidbodyset_rbBodyType: y6,
        rawrigidbodyset_rbCollider: m6,
        rawrigidbodyset_rbDominanceGroup: t6,
        rawrigidbodyset_rbEffectiveAngularInertia: h6,
        rawrigidbodyset_rbEffectiveInvMass: a6,
        rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt: f6,
        rawrigidbodyset_rbEnableCcd: n6,
        rawrigidbodyset_rbGravityScale: A6,
        rawrigidbodyset_rbInvMass: s6,
        rawrigidbodyset_rbInvPrincipalInertiaSqrt: u6,
        rawrigidbodyset_rbIsCcdEnabled: _6,
        rawrigidbodyset_rbIsDynamic: x6,
        rawrigidbodyset_rbIsEnabled: T6,
        rawrigidbodyset_rbIsFixed: b6,
        rawrigidbodyset_rbIsKinematic: S6,
        rawrigidbodyset_rbIsMoving: Ox,
        rawrigidbodyset_rbIsSleeping: Lx,
        rawrigidbodyset_rbLinearDamping: C6,
        rawrigidbodyset_rbLinvel: qx,
        rawrigidbodyset_rbLocalCom: l6,
        rawrigidbodyset_rbLockRotations: e6,
        rawrigidbodyset_rbLockTranslations: Qx,
        rawrigidbodyset_rbMass: o6,
        rawrigidbodyset_rbNextRotation: Fx,
        rawrigidbodyset_rbNextTranslation: Dx,
        rawrigidbodyset_rbNumColliders: w6,
        rawrigidbodyset_rbPrincipalInertia: d6,
        rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: Gx,
        rawrigidbodyset_rbResetForces: M6,
        rawrigidbodyset_rbResetTorques: I6,
        rawrigidbodyset_rbRotation: zx,
        rawrigidbodyset_rbSetAdditionalMass: Yx,
        rawrigidbodyset_rbSetAdditionalMassProperties: Xx,
        rawrigidbodyset_rbSetAdditionalSolverIterations: B6,
        rawrigidbodyset_rbSetAngularDamping: E6,
        rawrigidbodyset_rbSetAngvel: $x,
        rawrigidbodyset_rbSetBodyType: v6,
        rawrigidbodyset_rbSetDominanceGroup: r6,
        rawrigidbodyset_rbSetEnabled: P6,
        rawrigidbodyset_rbSetEnabledTranslations: Zx,
        rawrigidbodyset_rbSetGravityScale: j6,
        rawrigidbodyset_rbSetLinearDamping: R6,
        rawrigidbodyset_rbSetLinvel: Ux,
        rawrigidbodyset_rbSetNextKinematicRotation: Wx,
        rawrigidbodyset_rbSetNextKinematicTranslation: Vx,
        rawrigidbodyset_rbSetRotation: Bx,
        rawrigidbodyset_rbSetSoftCcdPrediction: i6,
        rawrigidbodyset_rbSetTranslation: Hx,
        rawrigidbodyset_rbSetUserData: $6,
        rawrigidbodyset_rbSleep: Nx,
        rawrigidbodyset_rbSoftCcdPrediction: g6,
        rawrigidbodyset_rbTranslation: Ix,
        rawrigidbodyset_rbUserData: U6,
        rawrigidbodyset_rbUserForce: V6,
        rawrigidbodyset_rbUserTorque: W6,
        rawrigidbodyset_rbVelocityAtPoint: Jx,
        rawrigidbodyset_rbWakeUp: p6,
        rawrigidbodyset_rbWorldCom: c6,
        rawrigidbodyset_remove: q6,
        rawrotation_angle: X8,
        rawrotation_fromAngle: G8,
        rawrotation_identity: W8,
        rawrotation_im: iR,
        rawrotation_re: Y8,
        rawserializationpipeline_deserializeAll: Wk,
        rawserializationpipeline_new: $k,
        rawserializationpipeline_serializeAll: Vk,
        rawshape_ball: h8,
        rawshape_capsule: _8,
        rawshape_castRay: z8,
        rawshape_castRayAndGetNormal: N8,
        rawshape_castShape: P8,
        rawshape_contactShape: A8,
        rawshape_containsPoint: j8,
        rawshape_convexHull: C8,
        rawshape_convexPolyline: R8,
        rawshape_cuboid: d8,
        rawshape_halfspace: p8,
        rawshape_heightfield: v8,
        rawshape_intersectsRay: I8,
        rawshape_intersectsShape: T8,
        rawshape_polyline: m8,
        rawshape_projectPoint: M8,
        rawshape_roundConvexHull: k8,
        rawshape_roundConvexPolyline: E8,
        rawshape_roundCuboid: f8,
        rawshape_roundTriangle: x8,
        rawshape_segment: b8,
        rawshape_triangle: S8,
        rawshape_trimesh: y8,
        rawshape_voxels: g8,
        rawshape_voxelsFromPoints: w8,
        rawshapecasthit_normal1: vR,
        rawshapecasthit_normal2: bR,
        rawshapecasthit_time_of_impact: oR,
        rawshapecasthit_witness1: L8,
        rawshapecasthit_witness2: mR,
        rawshapecontact_distance: Kk,
        rawshapecontact_normal1: xR,
        rawshapecontact_normal2: pR,
        rawshapecontact_point1: _R,
        rawshapecontact_point2: gR,
        rawvector_new: J8,
        rawvector_set_x: Q8,
        rawvector_set_y: RR,
        rawvector_x: sR,
        rawvector_xy: Z8,
        rawvector_y: aR,
        rawvector_yx: ek,
        rawvector_zero: K8,
        version: g4
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      MS(NR);
      class LR {
        constructor(e, t) {
          this.x = e, this.y = t;
        }
      }
      class j {
        static new(e, t) {
          return new LR(e, t);
        }
        static zeros() {
          return j.new(0, 0);
        }
        static fromRaw(e) {
          if (!e) return null;
          let t = j.new(e.x, e.y);
          return e.free(), t;
        }
        static intoRaw(e) {
          return new A(e.x, e.y);
        }
        static copy(e, t) {
          e.x = t.x, e.y = t.y;
        }
      }
      class Le {
        static identity() {
          return 0;
        }
        static fromRaw(e) {
          if (!e) return null;
          let t = e.angle;
          return e.free(), t;
        }
        static intoRaw(e) {
          return ye.fromAngle(e);
        }
      }
      var vn;
      (function(r) {
        r[r.Dynamic = 0] = "Dynamic", r[r.Fixed = 1] = "Fixed", r[r.KinematicPositionBased = 2] = "KinematicPositionBased", r[r.KinematicVelocityBased = 3] = "KinematicVelocityBased";
      })(vn || (vn = {}));
      class Xg {
        constructor(e, t, n) {
          this.rawSet = e, this.colliderSet = t, this.handle = n;
        }
        finalizeDeserialization(e) {
          this.colliderSet = e;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        lockTranslations(e, t) {
          return this.rawSet.rbLockTranslations(this.handle, e, t);
        }
        lockRotations(e, t) {
          return this.rawSet.rbLockRotations(this.handle, e, t);
        }
        setEnabledTranslations(e, t, n) {
          return this.rawSet.rbSetEnabledTranslations(this.handle, e, t, n);
        }
        restrictTranslations(e, t, n) {
          this.setEnabledTranslations(e, e, n);
        }
        dominanceGroup() {
          return this.rawSet.rbDominanceGroup(this.handle);
        }
        setDominanceGroup(e) {
          this.rawSet.rbSetDominanceGroup(this.handle, e);
        }
        additionalSolverIterations() {
          return this.rawSet.rbAdditionalSolverIterations(this.handle);
        }
        setAdditionalSolverIterations(e) {
          this.rawSet.rbSetAdditionalSolverIterations(this.handle, e);
        }
        enableCcd(e) {
          this.rawSet.rbEnableCcd(this.handle, e);
        }
        setSoftCcdPrediction(e) {
          this.rawSet.rbSetSoftCcdPrediction(this.handle, e);
        }
        softCcdPrediction() {
          return this.rawSet.rbSoftCcdPrediction(this.handle);
        }
        translation() {
          let e = this.rawSet.rbTranslation(this.handle);
          return j.fromRaw(e);
        }
        rotation() {
          let e = this.rawSet.rbRotation(this.handle);
          return Le.fromRaw(e);
        }
        nextTranslation() {
          let e = this.rawSet.rbNextTranslation(this.handle);
          return j.fromRaw(e);
        }
        nextRotation() {
          let e = this.rawSet.rbNextRotation(this.handle);
          return Le.fromRaw(e);
        }
        setTranslation(e, t) {
          this.rawSet.rbSetTranslation(this.handle, e.x, e.y, t);
        }
        setLinvel(e, t) {
          let n = j.intoRaw(e);
          this.rawSet.rbSetLinvel(this.handle, n, t), n.free();
        }
        gravityScale() {
          return this.rawSet.rbGravityScale(this.handle);
        }
        setGravityScale(e, t) {
          this.rawSet.rbSetGravityScale(this.handle, e, t);
        }
        setRotation(e, t) {
          this.rawSet.rbSetRotation(this.handle, e, t);
        }
        setAngvel(e, t) {
          this.rawSet.rbSetAngvel(this.handle, e, t);
        }
        setNextKinematicTranslation(e) {
          this.rawSet.rbSetNextKinematicTranslation(this.handle, e.x, e.y);
        }
        setNextKinematicRotation(e) {
          this.rawSet.rbSetNextKinematicRotation(this.handle, e);
        }
        linvel() {
          return j.fromRaw(this.rawSet.rbLinvel(this.handle));
        }
        velocityAtPoint(e) {
          const t = j.intoRaw(e);
          let n = j.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle, t));
          return t.free(), n;
        }
        angvel() {
          return this.rawSet.rbAngvel(this.handle);
        }
        mass() {
          return this.rawSet.rbMass(this.handle);
        }
        effectiveInvMass() {
          return j.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
        }
        invMass() {
          return this.rawSet.rbInvMass(this.handle);
        }
        localCom() {
          return j.fromRaw(this.rawSet.rbLocalCom(this.handle));
        }
        worldCom() {
          return j.fromRaw(this.rawSet.rbWorldCom(this.handle));
        }
        invPrincipalInertiaSqrt() {
          return this.rawSet.rbInvPrincipalInertiaSqrt(this.handle);
        }
        principalInertia() {
          return this.rawSet.rbPrincipalInertia(this.handle);
        }
        effectiveWorldInvInertiaSqrt() {
          return this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle);
        }
        effectiveAngularInertia() {
          return this.rawSet.rbEffectiveAngularInertia(this.handle);
        }
        sleep() {
          this.rawSet.rbSleep(this.handle);
        }
        wakeUp() {
          this.rawSet.rbWakeUp(this.handle);
        }
        isCcdEnabled() {
          return this.rawSet.rbIsCcdEnabled(this.handle);
        }
        numColliders() {
          return this.rawSet.rbNumColliders(this.handle);
        }
        collider(e) {
          return this.colliderSet.get(this.rawSet.rbCollider(this.handle, e));
        }
        setEnabled(e) {
          this.rawSet.rbSetEnabled(this.handle, e);
        }
        isEnabled() {
          return this.rawSet.rbIsEnabled(this.handle);
        }
        bodyType() {
          return this.rawSet.rbBodyType(this.handle);
        }
        setBodyType(e, t) {
          return this.rawSet.rbSetBodyType(this.handle, e, t);
        }
        isSleeping() {
          return this.rawSet.rbIsSleeping(this.handle);
        }
        isMoving() {
          return this.rawSet.rbIsMoving(this.handle);
        }
        isFixed() {
          return this.rawSet.rbIsFixed(this.handle);
        }
        isKinematic() {
          return this.rawSet.rbIsKinematic(this.handle);
        }
        isDynamic() {
          return this.rawSet.rbIsDynamic(this.handle);
        }
        linearDamping() {
          return this.rawSet.rbLinearDamping(this.handle);
        }
        angularDamping() {
          return this.rawSet.rbAngularDamping(this.handle);
        }
        setLinearDamping(e) {
          this.rawSet.rbSetLinearDamping(this.handle, e);
        }
        recomputeMassPropertiesFromColliders() {
          this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
        }
        setAdditionalMass(e, t) {
          this.rawSet.rbSetAdditionalMass(this.handle, e, t);
        }
        setAdditionalMassProperties(e, t, n, i) {
          let o = j.intoRaw(t);
          this.rawSet.rbSetAdditionalMassProperties(this.handle, e, o, n, i), o.free();
        }
        setAngularDamping(e) {
          this.rawSet.rbSetAngularDamping(this.handle, e);
        }
        resetForces(e) {
          this.rawSet.rbResetForces(this.handle, e);
        }
        resetTorques(e) {
          this.rawSet.rbResetTorques(this.handle, e);
        }
        addForce(e, t) {
          const n = j.intoRaw(e);
          this.rawSet.rbAddForce(this.handle, n, t), n.free();
        }
        applyImpulse(e, t) {
          const n = j.intoRaw(e);
          this.rawSet.rbApplyImpulse(this.handle, n, t), n.free();
        }
        addTorque(e, t) {
          this.rawSet.rbAddTorque(this.handle, e, t);
        }
        applyTorqueImpulse(e, t) {
          this.rawSet.rbApplyTorqueImpulse(this.handle, e, t);
        }
        addForceAtPoint(e, t, n) {
          const i = j.intoRaw(e), o = j.intoRaw(t);
          this.rawSet.rbAddForceAtPoint(this.handle, i, o, n), i.free(), o.free();
        }
        applyImpulseAtPoint(e, t, n) {
          const i = j.intoRaw(e), o = j.intoRaw(t);
          this.rawSet.rbApplyImpulseAtPoint(this.handle, i, o, n), i.free(), o.free();
        }
        userForce() {
          return j.fromRaw(this.rawSet.rbUserForce(this.handle));
        }
        userTorque() {
          return this.rawSet.rbUserTorque(this.handle);
        }
      }
      class cn {
        constructor(e) {
          this.enabled = true, this.status = e, this.translation = j.zeros(), this.rotation = Le.identity(), this.gravityScale = 1, this.linvel = j.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = j.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = 0, this.principalAngularInertia = 0, this.rotationsEnabled = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
        }
        static dynamic() {
          return new cn(vn.Dynamic);
        }
        static kinematicPositionBased() {
          return new cn(vn.KinematicPositionBased);
        }
        static kinematicVelocityBased() {
          return new cn(vn.KinematicVelocityBased);
        }
        static fixed() {
          return new cn(vn.Fixed);
        }
        static newDynamic() {
          return new cn(vn.Dynamic);
        }
        static newKinematicPositionBased() {
          return new cn(vn.KinematicPositionBased);
        }
        static newKinematicVelocityBased() {
          return new cn(vn.KinematicVelocityBased);
        }
        static newStatic() {
          return new cn(vn.Fixed);
        }
        setDominanceGroup(e) {
          return this.dominanceGroup = e, this;
        }
        setAdditionalSolverIterations(e) {
          return this.additionalSolverIterations = e, this;
        }
        setEnabled(e) {
          return this.enabled = e, this;
        }
        setTranslation(e, t) {
          if (typeof e != "number" || typeof t != "number") throw TypeError("The translation components must be numbers.");
          return this.translation = {
            x: e,
            y: t
          }, this;
        }
        setRotation(e) {
          return this.rotation = e, this;
        }
        setGravityScale(e) {
          return this.gravityScale = e, this;
        }
        setAdditionalMass(e) {
          return this.mass = e, this.massOnly = true, this;
        }
        setLinvel(e, t) {
          if (typeof e != "number" || typeof t != "number") throw TypeError("The linvel components must be numbers.");
          return this.linvel = {
            x: e,
            y: t
          }, this;
        }
        setAngvel(e) {
          return this.angvel = e, this;
        }
        setAdditionalMassProperties(e, t, n) {
          return this.mass = e, j.copy(this.centerOfMass, t), this.principalAngularInertia = n, this.massOnly = false, this;
        }
        enabledTranslations(e, t) {
          return this.translationsEnabledX = e, this.translationsEnabledY = t, this;
        }
        restrictTranslations(e, t) {
          return this.enabledTranslations(e, t);
        }
        lockTranslations() {
          return this.restrictTranslations(false, false);
        }
        lockRotations() {
          return this.rotationsEnabled = false, this;
        }
        setLinearDamping(e) {
          return this.linearDamping = e, this;
        }
        setAngularDamping(e) {
          return this.angularDamping = e, this;
        }
        setCanSleep(e) {
          return this.canSleep = e, this;
        }
        setSleeping(e) {
          return this.sleeping = e, this;
        }
        setCcdEnabled(e) {
          return this.ccdEnabled = e, this;
        }
        setSoftCcdPrediction(e) {
          return this.softCcdPrediction = e, this;
        }
        setUserData(e) {
          return this.userData = e, this;
        }
      }
      class Gu {
        constructor() {
          this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
        }
        set(e, t) {
          let n = this.index(e);
          for (; this.data.length <= n; ) this.data.push(null);
          this.data[n] == null && (this.size += 1), this.data[n] = t;
        }
        len() {
          return this.size;
        }
        delete(e) {
          let t = this.index(e);
          t < this.data.length && (this.data[t] != null && (this.size -= 1), this.data[t] = null);
        }
        clear() {
          this.data = new Array();
        }
        get(e) {
          let t = this.index(e);
          return t < this.data.length ? this.data[t] : null;
        }
        forEach(e) {
          for (const t of this.data) t != null && e(t);
        }
        getAll() {
          return this.data.filter((e) => e != null);
        }
        index(e) {
          return this.fconv[0] = e, this.uconv[0];
        }
      }
      class OR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(e) {
          this.raw = e || new Oe(), this.map = new Gu(), e && e.forEachRigidBodyHandle((t) => {
            this.map.set(t, new Xg(e, null, t));
          });
        }
        finalizeDeserialization(e) {
          this.map.forEach((t) => t.finalizeDeserialization(e));
        }
        createRigidBody(e, t) {
          let n = j.intoRaw(t.translation), i = Le.intoRaw(t.rotation), o = j.intoRaw(t.linvel), s = j.intoRaw(t.centerOfMass), a = this.raw.createRigidBody(t.enabled, n, i, t.gravityScale, t.mass, t.massOnly, s, o, t.angvel, t.principalAngularInertia, t.translationsEnabledX, t.translationsEnabledY, t.rotationsEnabled, t.linearDamping, t.angularDamping, t.status, t.canSleep, t.sleeping, t.softCcdPrediction, t.ccdEnabled, t.dominanceGroup, t.additionalSolverIterations);
          n.free(), i.free(), o.free(), s.free();
          const l = new Xg(this.raw, e, a);
          return l.userData = t.userData, this.map.set(a, l), l;
        }
        remove(e, t, n, i, o) {
          for (let s = 0; s < this.raw.rbNumColliders(e); s += 1) n.unmap(this.raw.rbCollider(e, s));
          i.forEachJointHandleAttachedToRigidBody(e, (s) => i.unmap(s)), o.forEachJointHandleAttachedToRigidBody(e, (s) => o.unmap(s)), this.raw.remove(e, t.raw, n.raw, i.raw, o.raw), this.map.delete(e);
        }
        len() {
          return this.map.len();
        }
        contains(e) {
          return this.get(e) != null;
        }
        get(e) {
          return this.map.get(e);
        }
        forEach(e) {
          this.map.forEach(e);
        }
        forEachActiveRigidBody(e, t) {
          e.forEachActiveRigidBodyHandle((n) => {
            t(this.get(n));
          });
        }
        getAll() {
          return this.map.getAll();
        }
      }
      class DR {
        constructor(e) {
          this.raw = e || new To();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        get dt() {
          return this.raw.dt;
        }
        get contact_erp() {
          return this.raw.contact_erp;
        }
        get lengthUnit() {
          return this.raw.lengthUnit;
        }
        get normalizedAllowedLinearError() {
          return this.raw.normalizedAllowedLinearError;
        }
        get normalizedPredictionDistance() {
          return this.raw.normalizedPredictionDistance;
        }
        get numSolverIterations() {
          return this.raw.numSolverIterations;
        }
        get numAdditionalFrictionIterations() {
          return this.raw.numAdditionalFrictionIterations;
        }
        get numInternalPgsIterations() {
          return this.raw.numInternalPgsIterations;
        }
        get minIslandSize() {
          return this.raw.minIslandSize;
        }
        get maxCcdSubsteps() {
          return this.raw.maxCcdSubsteps;
        }
        set dt(e) {
          this.raw.dt = e;
        }
        set contact_natural_frequency(e) {
          this.raw.contact_natural_frequency = e;
        }
        set lengthUnit(e) {
          this.raw.lengthUnit = e;
        }
        set normalizedAllowedLinearError(e) {
          this.raw.normalizedAllowedLinearError = e;
        }
        set normalizedPredictionDistance(e) {
          this.raw.normalizedPredictionDistance = e;
        }
        set numSolverIterations(e) {
          this.raw.numSolverIterations = e;
        }
        set numAdditionalFrictionIterations(e) {
          this.raw.numAdditionalFrictionIterations = e;
        }
        set numInternalPgsIterations(e) {
          this.raw.numInternalPgsIterations = e;
        }
        set minIslandSize(e) {
          this.raw.minIslandSize = e;
        }
        set maxCcdSubsteps(e) {
          this.raw.maxCcdSubsteps = e;
        }
        switchToStandardPgsSolver() {
          this.raw.switchToStandardPgsSolver();
        }
        switchToSmallStepsPgsSolver() {
          this.raw.switchToSmallStepsPgsSolver();
        }
        switchToSmallStepsPgsSolverWithoutWarmstart() {
          this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
        }
      }
      var qg;
      (function(r) {
        r[r.Revolute = 0] = "Revolute", r[r.Fixed = 1] = "Fixed", r[r.Prismatic = 2] = "Prismatic", r[r.Rope = 3] = "Rope", r[r.Spring = 4] = "Spring";
      })(qg || (qg = {}));
      var Kg;
      (function(r) {
        r[r.AccelerationBased = 0] = "AccelerationBased", r[r.ForceBased = 1] = "ForceBased";
      })(Kg || (Kg = {}));
      var Jg;
      (function(r) {
        r[r.LinX = 1] = "LinX", r[r.LinY = 2] = "LinY", r[r.LinZ = 4] = "LinZ", r[r.AngX = 8] = "AngX", r[r.AngY = 16] = "AngY", r[r.AngZ = 32] = "AngZ";
      })(Jg || (Jg = {}));
      class Hi {
        constructor(e, t, n) {
          this.rawSet = e, this.bodySet = t, this.handle = n;
        }
        static newTyped(e, t, n) {
          switch (e.jointType(n)) {
            case mi.Revolute:
              return new $R(e, t, n);
            case mi.Prismatic:
              return new UR(e, t, n);
            case mi.Fixed:
              return new FR(e, t, n);
            case mi.Spring:
              return new BR(e, t, n);
            case mi.Rope:
              return new HR(e, t, n);
            default:
              return new Hi(e, t, n);
          }
        }
        finalizeDeserialization(e) {
          this.bodySet = e;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        body1() {
          return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
        }
        body2() {
          return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
        }
        type() {
          return this.rawSet.jointType(this.handle);
        }
        anchor1() {
          return j.fromRaw(this.rawSet.jointAnchor1(this.handle));
        }
        anchor2() {
          return j.fromRaw(this.rawSet.jointAnchor2(this.handle));
        }
        setAnchor1(e) {
          const t = j.intoRaw(e);
          this.rawSet.jointSetAnchor1(this.handle, t), t.free();
        }
        setAnchor2(e) {
          const t = j.intoRaw(e);
          this.rawSet.jointSetAnchor2(this.handle, t), t.free();
        }
        setContactsEnabled(e) {
          this.rawSet.jointSetContactsEnabled(this.handle, e);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      }
      class z1 extends Hi {
        limitsEnabled() {
          return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
        }
        limitsMin() {
          return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
        }
        limitsMax() {
          return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
        }
        setLimits(e, t) {
          this.rawSet.jointSetLimits(this.handle, this.rawAxis(), e, t);
        }
        configureMotorModel(e) {
          this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), e);
        }
        configureMotorVelocity(e, t) {
          this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), e, t);
        }
        configureMotorPosition(e, t, n) {
          this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), e, t, n);
        }
        configureMotor(e, t, n, i) {
          this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), e, t, n, i);
        }
      }
      class FR extends Hi {
      }
      class HR extends Hi {
      }
      class BR extends Hi {
      }
      class UR extends z1 {
        rawAxis() {
          return Hu.LinX;
        }
      }
      class $R extends z1 {
        rawAxis() {
          return Hu.AngX;
        }
      }
      class VR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(e) {
          this.raw = e || new ti(), this.map = new Gu(), e && e.forEachJointHandle((t) => {
            this.map.set(t, Hi.newTyped(e, null, t));
          });
        }
        finalizeDeserialization(e) {
          this.map.forEach((t) => t.finalizeDeserialization(e));
        }
        createJoint(e, t, n, i, o) {
          const s = t.intoRaw(), a = this.raw.createJoint(s, n, i, o);
          s.free();
          let l = Hi.newTyped(this.raw, e, a);
          return this.map.set(a, l), l;
        }
        remove(e, t) {
          this.raw.remove(e, t), this.unmap(e);
        }
        forEachJointHandleAttachedToRigidBody(e, t) {
          this.raw.forEachJointAttachedToRigidBody(e, t);
        }
        unmap(e) {
          this.map.delete(e);
        }
        len() {
          return this.map.len();
        }
        contains(e) {
          return this.get(e) != null;
        }
        get(e) {
          return this.map.get(e);
        }
        forEach(e) {
          this.map.forEach(e);
        }
        getAll() {
          return this.map.getAll();
        }
      }
      class Is {
        constructor(e, t) {
          this.rawSet = e, this.handle = t;
        }
        static newTyped(e, t) {
          switch (e.jointType(t)) {
            case mi.Revolute:
              return new YR(e, t);
            case mi.Prismatic:
              return new GR(e, t);
            case mi.Fixed:
              return new WR(e, t);
            default:
              return new Is(e, t);
          }
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        setContactsEnabled(e) {
          this.rawSet.jointSetContactsEnabled(this.handle, e);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      }
      class N1 extends Is {
      }
      class WR extends Is {
      }
      class GR extends N1 {
        rawAxis() {
          return Hu.LinX;
        }
      }
      class YR extends N1 {
        rawAxis() {
          return Hu.AngX;
        }
      }
      class XR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(e) {
          this.raw = e || new ni(), this.map = new Gu(), e && e.forEachJointHandle((t) => {
            this.map.set(t, Is.newTyped(this.raw, t));
          });
        }
        createJoint(e, t, n, i) {
          const o = e.intoRaw(), s = this.raw.createJoint(o, t, n, i);
          o.free();
          let a = Is.newTyped(this.raw, s);
          return this.map.set(s, a), a;
        }
        remove(e, t) {
          this.raw.remove(e, t), this.map.delete(e);
        }
        unmap(e) {
          this.map.delete(e);
        }
        len() {
          return this.map.len();
        }
        contains(e) {
          return this.get(e) != null;
        }
        get(e) {
          return this.map.get(e);
        }
        forEach(e) {
          this.map.forEach(e);
        }
        forEachJointHandleAttachedToRigidBody(e, t) {
          this.raw.forEachJointAttachedToRigidBody(e, t);
        }
        getAll() {
          return this.map.getAll();
        }
      }
      var nu;
      (function(r) {
        r[r.Average = 0] = "Average", r[r.Min = 1] = "Min", r[r.Multiply = 2] = "Multiply", r[r.Max = 3] = "Max";
      })(nu || (nu = {}));
      class qR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e || new Zf();
        }
      }
      class KR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e || new ri();
        }
        forEachActiveRigidBodyHandle(e) {
          this.raw.forEachActiveRigidBodyHandle(e);
        }
      }
      class JR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e || new Po();
        }
      }
      class QR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e || new Fi(), this.tempManifold = new ZR(null);
        }
        contactPairsWith(e, t) {
          this.raw.contact_pairs_with(e, t);
        }
        intersectionPairsWith(e, t) {
          this.raw.intersection_pairs_with(e, t);
        }
        contactPair(e, t, n) {
          const i = this.raw.contact_pair(e, t);
          if (i) {
            const o = i.collider1() != e;
            let s;
            for (s = 0; s < i.numContactManifolds(); ++s) this.tempManifold.raw = i.contactManifold(s), this.tempManifold.raw && n(this.tempManifold, o), this.tempManifold.free();
            i.free();
          }
        }
        intersectionPair(e, t) {
          return this.raw.intersection_pair(e, t);
        }
      }
      class ZR {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e;
        }
        normal() {
          return j.fromRaw(this.raw.normal());
        }
        localNormal1() {
          return j.fromRaw(this.raw.local_n1());
        }
        localNormal2() {
          return j.fromRaw(this.raw.local_n2());
        }
        subshape1() {
          return this.raw.subshape1();
        }
        subshape2() {
          return this.raw.subshape2();
        }
        numContacts() {
          return this.raw.num_contacts();
        }
        localContactPoint1(e) {
          return j.fromRaw(this.raw.contact_local_p1(e));
        }
        localContactPoint2(e) {
          return j.fromRaw(this.raw.contact_local_p2(e));
        }
        contactDist(e) {
          return this.raw.contact_dist(e);
        }
        contactFid1(e) {
          return this.raw.contact_fid1(e);
        }
        contactFid2(e) {
          return this.raw.contact_fid2(e);
        }
        contactImpulse(e) {
          return this.raw.contact_impulse(e);
        }
        contactTangentImpulse(e) {
          return this.raw.contact_tangent_impulse(e);
        }
        numSolverContacts() {
          return this.raw.num_solver_contacts();
        }
        solverContactPoint(e) {
          return j.fromRaw(this.raw.solver_contact_point(e));
        }
        solverContactDist(e) {
          return this.raw.solver_contact_dist(e);
        }
        solverContactFriction(e) {
          return this.raw.solver_contact_friction(e);
        }
        solverContactRestitution(e) {
          return this.raw.solver_contact_restitution(e);
        }
        solverContactTangentVelocity(e) {
          return j.fromRaw(this.raw.solver_contact_tangent_velocity(e));
        }
      }
      class ol {
        constructor(e, t, n, i, o) {
          this.distance = e, this.point1 = t, this.point2 = n, this.normal1 = i, this.normal2 = o;
        }
        static fromRaw(e) {
          if (!e) return null;
          const t = new ol(e.distance(), j.fromRaw(e.point1()), j.fromRaw(e.point2()), j.fromRaw(e.normal1()), j.fromRaw(e.normal2()));
          return e.free(), t;
        }
      }
      var sl;
      (function(r) {
        r[r.Vertex = 0] = "Vertex", r[r.Face = 1] = "Face", r[r.Unknown = 2] = "Unknown";
      })(sl || (sl = {}));
      class Yu {
        constructor(e, t) {
          this.point = e, this.isInside = t;
        }
        static fromRaw(e) {
          if (!e) return null;
          const t = new Yu(j.fromRaw(e.point()), e.isInside());
          return e.free(), t;
        }
      }
      class iu {
        constructor(e, t, n, i, o) {
          this.featureType = sl.Unknown, this.featureId = void 0, this.collider = e, this.point = t, this.isInside = n, o !== void 0 && (this.featureId = o), i !== void 0 && (this.featureType = i);
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const n = new iu(e.get(t.colliderHandle()), j.fromRaw(t.point()), t.isInside(), t.featureType(), t.featureId());
          return t.free(), n;
        }
      }
      class Xu {
        constructor(e, t, n, i) {
          this.featureType = sl.Unknown, this.featureId = void 0, this.timeOfImpact = e, this.normal = t, i !== void 0 && (this.featureId = i), n !== void 0 && (this.featureType = n);
        }
        static fromRaw(e) {
          if (!e) return null;
          const t = new Xu(e.time_of_impact(), j.fromRaw(e.normal()), e.featureType(), e.featureId());
          return e.free(), t;
        }
      }
      class ou {
        constructor(e, t, n, i, o) {
          this.featureType = sl.Unknown, this.featureId = void 0, this.collider = e, this.timeOfImpact = t, this.normal = n, o !== void 0 && (this.featureId = o), i !== void 0 && (this.featureType = i);
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const n = new ou(e.get(t.colliderHandle()), t.time_of_impact(), j.fromRaw(t.normal()), t.featureType(), t.featureId());
          return t.free(), n;
        }
      }
      class Ip {
        constructor(e, t) {
          this.collider = e, this.timeOfImpact = t;
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const n = new Ip(e.get(t.colliderHandle()), t.timeOfImpact());
          return t.free(), n;
        }
      }
      class Sl {
        constructor(e, t, n, i, o) {
          this.time_of_impact = e, this.witness1 = t, this.witness2 = n, this.normal1 = i, this.normal2 = o;
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const n = new Sl(t.time_of_impact(), j.fromRaw(t.witness1()), j.fromRaw(t.witness2()), j.fromRaw(t.normal1()), j.fromRaw(t.normal2()));
          return t.free(), n;
        }
      }
      class qu extends Sl {
        constructor(e, t, n, i, o, s) {
          super(t, n, i, o, s), this.collider = e;
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const n = new qu(e.get(t.colliderHandle()), t.time_of_impact(), j.fromRaw(t.witness1()), j.fromRaw(t.witness2()), j.fromRaw(t.normal1()), j.fromRaw(t.normal2()));
          return t.free(), n;
        }
      }
      class lr {
        static fromRaw(e, t) {
          const n = e.coShapeType(t);
          let i, o, s, a, l, c, u;
          switch (n) {
            case cr.Ball:
              return new L1(e.coRadius(t));
            case cr.Cuboid:
              return i = e.coHalfExtents(t), new D1(i.x, i.y);
            case cr.RoundCuboid:
              return i = e.coHalfExtents(t), o = e.coRoundRadius(t), new F1(i.x, i.y, o);
            case cr.Capsule:
              return l = e.coHalfHeight(t), c = e.coRadius(t), new H1(l, c);
            case cr.Segment:
              return s = e.coVertices(t), new B1(j.new(s[0], s[1]), j.new(s[2], s[3]));
            case cr.Polyline:
              return s = e.coVertices(t), a = e.coIndices(t), new V1(s, a);
            case cr.Triangle:
              return s = e.coVertices(t), new U1(j.new(s[0], s[1]), j.new(s[2], s[3]), j.new(s[4], s[5]));
            case cr.RoundTriangle:
              return s = e.coVertices(t), o = e.coRoundRadius(t), new $1(j.new(s[0], s[1]), j.new(s[2], s[3]), j.new(s[4], s[5]), o);
            case cr.HalfSpace:
              return u = j.fromRaw(e.coHalfspaceNormal(t)), new O1(u);
            case cr.Voxels:
              const h = e.coVoxelData(t), d = e.coVoxelPrimitiveGeometry(t), p = e.coVoxelSize(t);
              return new W1(h, p, d);
            case cr.TriMesh:
              s = e.coVertices(t), a = e.coIndices(t);
              const m = e.coTriMeshFlags(t);
              return new G1(s, a, m);
            case cr.HeightField:
              const g = e.coHeightfieldScale(t), b = e.coHeightfieldHeights(t);
              return new Y1(b, g);
            case cr.ConvexPolygon:
              return s = e.coVertices(t), new eh(s, false);
            case cr.RoundConvexPolygon:
              return s = e.coVertices(t), o = e.coRoundRadius(t), new th(s, o, false);
            default:
              throw new Error("unknown shape type: " + n);
          }
        }
        castShape(e, t, n, i, o, s, a, l, c, u) {
          let h = j.intoRaw(e), d = Le.intoRaw(t), p = j.intoRaw(n), m = j.intoRaw(o), g = Le.intoRaw(s), b = j.intoRaw(a), y = this.intoRaw(), w = i.intoRaw(), v = Sl.fromRaw(null, y.castShape(h, d, p, w, m, g, b, l, c, u));
          return h.free(), d.free(), p.free(), m.free(), g.free(), b.free(), y.free(), w.free(), v;
        }
        intersectsShape(e, t, n, i, o) {
          let s = j.intoRaw(e), a = Le.intoRaw(t), l = j.intoRaw(i), c = Le.intoRaw(o), u = this.intoRaw(), h = n.intoRaw(), d = u.intersectsShape(s, a, h, l, c);
          return s.free(), a.free(), l.free(), c.free(), u.free(), h.free(), d;
        }
        contactShape(e, t, n, i, o, s) {
          let a = j.intoRaw(e), l = Le.intoRaw(t), c = j.intoRaw(i), u = Le.intoRaw(o), h = this.intoRaw(), d = n.intoRaw(), p = ol.fromRaw(h.contactShape(a, l, d, c, u, s));
          return a.free(), l.free(), c.free(), u.free(), h.free(), d.free(), p;
        }
        containsPoint(e, t, n) {
          let i = j.intoRaw(e), o = Le.intoRaw(t), s = j.intoRaw(n), a = this.intoRaw(), l = a.containsPoint(i, o, s);
          return i.free(), o.free(), s.free(), a.free(), l;
        }
        projectPoint(e, t, n, i) {
          let o = j.intoRaw(e), s = Le.intoRaw(t), a = j.intoRaw(n), l = this.intoRaw(), c = Yu.fromRaw(l.projectPoint(o, s, a, i));
          return o.free(), s.free(), a.free(), l.free(), c;
        }
        intersectsRay(e, t, n, i) {
          let o = j.intoRaw(t), s = Le.intoRaw(n), a = j.intoRaw(e.origin), l = j.intoRaw(e.dir), c = this.intoRaw(), u = c.intersectsRay(o, s, a, l, i);
          return o.free(), s.free(), a.free(), l.free(), c.free(), u;
        }
        castRay(e, t, n, i, o) {
          let s = j.intoRaw(t), a = Le.intoRaw(n), l = j.intoRaw(e.origin), c = j.intoRaw(e.dir), u = this.intoRaw(), h = u.castRay(s, a, l, c, i, o);
          return s.free(), a.free(), l.free(), c.free(), u.free(), h;
        }
        castRayAndGetNormal(e, t, n, i, o) {
          let s = j.intoRaw(t), a = Le.intoRaw(n), l = j.intoRaw(e.origin), c = j.intoRaw(e.dir), u = this.intoRaw(), h = Xu.fromRaw(u.castRayAndGetNormal(s, a, l, c, i, o));
          return s.free(), a.free(), l.free(), c.free(), u.free(), h;
        }
      }
      var qt;
      (function(r) {
        r[r.Ball = 0] = "Ball", r[r.Cuboid = 1] = "Cuboid", r[r.Capsule = 2] = "Capsule", r[r.Segment = 3] = "Segment", r[r.Polyline = 4] = "Polyline", r[r.Triangle = 5] = "Triangle", r[r.TriMesh = 6] = "TriMesh", r[r.HeightField = 7] = "HeightField", r[r.ConvexPolygon = 9] = "ConvexPolygon", r[r.RoundCuboid = 10] = "RoundCuboid", r[r.RoundTriangle = 11] = "RoundTriangle", r[r.RoundConvexPolygon = 12] = "RoundConvexPolygon", r[r.HalfSpace = 13] = "HalfSpace", r[r.Voxels = 14] = "Voxels";
      })(qt || (qt = {}));
      var Qg;
      (function(r) {
        r[r.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", r[r.ORIENTED = 8] = "ORIENTED", r[r.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", r[r.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", r[r.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", r[r.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
      })(Qg || (Qg = {}));
      class L1 extends lr {
        constructor(e) {
          super(), this.type = qt.Ball, this.radius = e;
        }
        intoRaw() {
          return ee.ball(this.radius);
        }
      }
      class O1 extends lr {
        constructor(e) {
          super(), this.type = qt.HalfSpace, this.normal = e;
        }
        intoRaw() {
          let e = j.intoRaw(this.normal), t = ee.halfspace(e);
          return e.free(), t;
        }
      }
      class D1 extends lr {
        constructor(e, t) {
          super(), this.type = qt.Cuboid, this.halfExtents = j.new(e, t);
        }
        intoRaw() {
          return ee.cuboid(this.halfExtents.x, this.halfExtents.y);
        }
      }
      class F1 extends lr {
        constructor(e, t, n) {
          super(), this.type = qt.RoundCuboid, this.halfExtents = j.new(e, t), this.borderRadius = n;
        }
        intoRaw() {
          return ee.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.borderRadius);
        }
      }
      class H1 extends lr {
        constructor(e, t) {
          super(), this.type = qt.Capsule, this.halfHeight = e, this.radius = t;
        }
        intoRaw() {
          return ee.capsule(this.halfHeight, this.radius);
        }
      }
      class B1 extends lr {
        constructor(e, t) {
          super(), this.type = qt.Segment, this.a = e, this.b = t;
        }
        intoRaw() {
          let e = j.intoRaw(this.a), t = j.intoRaw(this.b), n = ee.segment(e, t);
          return e.free(), t.free(), n;
        }
      }
      class U1 extends lr {
        constructor(e, t, n) {
          super(), this.type = qt.Triangle, this.a = e, this.b = t, this.c = n;
        }
        intoRaw() {
          let e = j.intoRaw(this.a), t = j.intoRaw(this.b), n = j.intoRaw(this.c), i = ee.triangle(e, t, n);
          return e.free(), t.free(), n.free(), i;
        }
      }
      class $1 extends lr {
        constructor(e, t, n, i) {
          super(), this.type = qt.RoundTriangle, this.a = e, this.b = t, this.c = n, this.borderRadius = i;
        }
        intoRaw() {
          let e = j.intoRaw(this.a), t = j.intoRaw(this.b), n = j.intoRaw(this.c), i = ee.roundTriangle(e, t, n, this.borderRadius);
          return e.free(), t.free(), n.free(), i;
        }
      }
      class V1 extends lr {
        constructor(e, t) {
          super(), this.type = qt.Polyline, this.vertices = e, this.indices = t ?? new Uint32Array(0);
        }
        intoRaw() {
          return ee.polyline(this.vertices, this.indices);
        }
      }
      class W1 extends lr {
        constructor(e, t, n) {
          super(), this.type = qt.Voxels, this.data = e, this.voxelSize = t, n !== void 0 ? this.primitiveGeometry = n : this.primitiveGeometry = HS.PseudoCube;
        }
        intoRaw() {
          let e = j.intoRaw(this.voxelSize), t;
          return this.data instanceof Int32Array ? t = ee.voxels(this.primitiveGeometry, e, this.data) : t = ee.voxelsFromPoints(this.primitiveGeometry, e, this.data), e.free(), t;
        }
      }
      class G1 extends lr {
        constructor(e, t, n) {
          super(), this.type = qt.TriMesh, this.vertices = e, this.indices = t, this.flags = n;
        }
        intoRaw() {
          return ee.trimesh(this.vertices, this.indices, this.flags);
        }
      }
      class eh extends lr {
        constructor(e, t) {
          super(), this.type = qt.ConvexPolygon, this.vertices = e, this.skipConvexHullComputation = !!t;
        }
        intoRaw() {
          return this.skipConvexHullComputation ? ee.convexPolyline(this.vertices) : ee.convexHull(this.vertices);
        }
      }
      class th extends lr {
        constructor(e, t, n) {
          super(), this.type = qt.RoundConvexPolygon, this.vertices = e, this.borderRadius = t, this.skipConvexHullComputation = !!n;
        }
        intoRaw() {
          return this.skipConvexHullComputation ? ee.roundConvexPolyline(this.vertices, this.borderRadius) : ee.roundConvexHull(this.vertices, this.borderRadius);
        }
      }
      class Y1 extends lr {
        constructor(e, t) {
          super(), this.type = qt.HeightField, this.heights = e, this.scale = t;
        }
        intoRaw() {
          let e = j.intoRaw(this.scale), t = ee.heightfield(this.heights, e);
          return e.free(), t;
        }
      }
      class eE {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e || new VS();
        }
        step(e, t, n, i, o, s, a, l, c, u, h, d) {
          let p = j.intoRaw(e);
          h ? this.raw.stepWithEvents(p, t.raw, n.raw, i.raw, o.raw, s.raw, a.raw, l.raw, c.raw, u.raw, h.raw, d, d ? d.filterContactPair : null, d ? d.filterIntersectionPair : null) : this.raw.step(p, t.raw, n.raw, i.raw, o.raw, s.raw, a.raw, l.raw, c.raw, u.raw), p.free();
        }
      }
      var Zg;
      (function(r) {
        r[r.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", r[r.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", r[r.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", r[r.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", r[r.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", r[r.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", r[r.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", r[r.ONLY_FIXED = 6] = "ONLY_FIXED";
      })(Zg || (Zg = {}));
      class tE {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e || new I1();
        }
        update(e) {
          this.raw.update(e.raw);
        }
        castRay(e, t, n, i, o, s, a, l, c, u) {
          let h = j.intoRaw(n.origin), d = j.intoRaw(n.dir), p = Ip.fromRaw(t, this.raw.castRay(e.raw, t.raw, h, d, i, o, s, a, l, c, u));
          return h.free(), d.free(), p;
        }
        castRayAndGetNormal(e, t, n, i, o, s, a, l, c, u) {
          let h = j.intoRaw(n.origin), d = j.intoRaw(n.dir), p = ou.fromRaw(t, this.raw.castRayAndGetNormal(e.raw, t.raw, h, d, i, o, s, a, l, c, u));
          return h.free(), d.free(), p;
        }
        intersectionsWithRay(e, t, n, i, o, s, a, l, c, u, h) {
          let d = j.intoRaw(n.origin), p = j.intoRaw(n.dir), m = (g) => s(ou.fromRaw(t, g));
          this.raw.intersectionsWithRay(e.raw, t.raw, d, p, i, o, m, a, l, c, u, h), d.free(), p.free();
        }
        intersectionWithShape(e, t, n, i, o, s, a, l, c, u) {
          let h = j.intoRaw(n), d = Le.intoRaw(i), p = o.intoRaw(), m = this.raw.intersectionWithShape(e.raw, t.raw, h, d, p, s, a, l, c, u);
          return h.free(), d.free(), p.free(), m;
        }
        projectPoint(e, t, n, i, o, s, a, l, c) {
          let u = j.intoRaw(n), h = iu.fromRaw(t, this.raw.projectPoint(e.raw, t.raw, u, i, o, s, a, l, c));
          return u.free(), h;
        }
        projectPointAndGetFeature(e, t, n, i, o, s, a, l) {
          let c = j.intoRaw(n), u = iu.fromRaw(t, this.raw.projectPointAndGetFeature(e.raw, t.raw, c, i, o, s, a, l));
          return c.free(), u;
        }
        intersectionsWithPoint(e, t, n, i, o, s, a, l, c) {
          let u = j.intoRaw(n);
          this.raw.intersectionsWithPoint(e.raw, t.raw, u, i, o, s, a, l, c), u.free();
        }
        castShape(e, t, n, i, o, s, a, l, c, u, h, d, p, m) {
          let g = j.intoRaw(n), b = Le.intoRaw(i), y = j.intoRaw(o), w = s.intoRaw(), v = qu.fromRaw(t, this.raw.castShape(e.raw, t.raw, g, b, y, w, a, l, c, u, h, d, p, m));
          return g.free(), b.free(), y.free(), w.free(), v;
        }
        intersectionsWithShape(e, t, n, i, o, s, a, l, c, u, h) {
          let d = j.intoRaw(n), p = Le.intoRaw(i), m = o.intoRaw();
          this.raw.intersectionsWithShape(e.raw, t.raw, d, p, m, s, a, l, c, u, h), d.free(), p.free(), m.free();
        }
        collidersWithAabbIntersectingAabb(e, t, n) {
          let i = j.intoRaw(e), o = j.intoRaw(t);
          this.raw.collidersWithAabbIntersectingAabb(i, o, n), i.free(), o.free();
        }
      }
      class ew {
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(e) {
          this.raw = e || new GS();
        }
        serializeAll(e, t, n, i, o, s, a, l, c) {
          let u = j.intoRaw(e);
          const h = this.raw.serializeAll(u, t.raw, n.raw, i.raw, o.raw, s.raw, a.raw, l.raw, c.raw);
          return u.free(), h;
        }
        deserializeAll(e) {
          return Ku.fromRaw(this.raw.deserializeAll(e));
        }
      }
      class rE {
        constructor(e, t) {
          this.vertices = e, this.colors = t;
        }
      }
      class nE {
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
        }
        constructor(e) {
          this.raw = e || new BS();
        }
        render(e, t, n, i, o) {
          this.raw.render(e.raw, t.raw, n.raw, i.raw, o.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
        }
      }
      class iE {
      }
      class oE {
        constructor(e, t, n, i, o) {
          this.params = t, this.bodies = n, this.colliders = i, this.queries = o, this.raw = new $S(e), this.rawCharacterCollision = new M1(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
        }
        free() {
          this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
        }
        up() {
          return this.raw.up();
        }
        setUp(e) {
          let t = j.intoRaw(e);
          return this.raw.setUp(t);
        }
        applyImpulsesToDynamicBodies() {
          return this._applyImpulsesToDynamicBodies;
        }
        setApplyImpulsesToDynamicBodies(e) {
          this._applyImpulsesToDynamicBodies = e;
        }
        characterMass() {
          return this._characterMass;
        }
        setCharacterMass(e) {
          this._characterMass = e;
        }
        offset() {
          return this.raw.offset();
        }
        setOffset(e) {
          this.raw.setOffset(e);
        }
        normalNudgeFactor() {
          return this.raw.normalNudgeFactor();
        }
        setNormalNudgeFactor(e) {
          this.raw.setNormalNudgeFactor(e);
        }
        slideEnabled() {
          return this.raw.slideEnabled();
        }
        setSlideEnabled(e) {
          this.raw.setSlideEnabled(e);
        }
        autostepMaxHeight() {
          return this.raw.autostepMaxHeight();
        }
        autostepMinWidth() {
          return this.raw.autostepMinWidth();
        }
        autostepIncludesDynamicBodies() {
          return this.raw.autostepIncludesDynamicBodies();
        }
        autostepEnabled() {
          return this.raw.autostepEnabled();
        }
        enableAutostep(e, t, n) {
          this.raw.enableAutostep(e, t, n);
        }
        disableAutostep() {
          return this.raw.disableAutostep();
        }
        maxSlopeClimbAngle() {
          return this.raw.maxSlopeClimbAngle();
        }
        setMaxSlopeClimbAngle(e) {
          this.raw.setMaxSlopeClimbAngle(e);
        }
        minSlopeSlideAngle() {
          return this.raw.minSlopeSlideAngle();
        }
        setMinSlopeSlideAngle(e) {
          this.raw.setMinSlopeSlideAngle(e);
        }
        snapToGroundDistance() {
          return this.raw.snapToGroundDistance();
        }
        enableSnapToGround(e) {
          this.raw.enableSnapToGround(e);
        }
        disableSnapToGround() {
          this.raw.disableSnapToGround();
        }
        snapToGroundEnabled() {
          return this.raw.snapToGroundEnabled();
        }
        computeColliderMovement(e, t, n, i, o) {
          let s = j.intoRaw(t);
          this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, e.handle, s, this._applyImpulsesToDynamicBodies, this._characterMass, n, i, this.colliders.castClosure(o)), s.free();
        }
        computedMovement() {
          return j.fromRaw(this.raw.computedMovement());
        }
        computedGrounded() {
          return this.raw.computedGrounded();
        }
        numComputedCollisions() {
          return this.raw.numComputedCollisions();
        }
        computedCollision(e, t) {
          if (this.raw.computedCollision(e, this.rawCharacterCollision)) {
            let n = this.rawCharacterCollision;
            return t = t ?? new iE(), t.translationDeltaApplied = j.fromRaw(n.translationDeltaApplied()), t.translationDeltaRemaining = j.fromRaw(n.translationDeltaRemaining()), t.toi = n.toi(), t.witness1 = j.fromRaw(n.worldWitness1()), t.witness2 = j.fromRaw(n.worldWitness2()), t.normal1 = j.fromRaw(n.worldNormal1()), t.normal2 = j.fromRaw(n.worldNormal2()), t.collider = this.colliders.get(n.handle()), t;
          } else return null;
        }
      }
      var tw;
      (function(r) {
        r[r.None = 0] = "None", r[r.LinX = 1] = "LinX", r[r.LinY = 2] = "LinY", r[r.LinZ = 4] = "LinZ", r[r.AngZ = 32] = "AngZ", r[r.AllLin = 3] = "AllLin", r[r.AllAng = 32] = "AllAng", r[r.All = 35] = "All";
      })(tw || (tw = {}));
      class sE {
        constructor(e, t, n, i, o, s) {
          this.params = e, this.bodies = t, this.raw = new WS(n, i, o, s);
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        setKp(e, t) {
          this.raw.set_kp(e, t);
        }
        setKi(e, t) {
          this.raw.set_kp(e, t);
        }
        setKd(e, t) {
          this.raw.set_kp(e, t);
        }
        setAxes(e) {
          this.raw.set_axes_mask(e);
        }
        resetIntegrals() {
          this.raw.reset_integrals();
        }
        applyLinearCorrection(e, t, n) {
          let i = j.intoRaw(t), o = j.intoRaw(n);
          this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, e.handle, i, o), i.free(), o.free();
        }
        applyAngularCorrection(e, t, n) {
          this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, e.handle, t, n);
        }
        linearCorrection(e, t, n) {
          let i = j.intoRaw(t), o = j.intoRaw(n), s = this.raw.linear_correction(this.params.dt, this.bodies.raw, e.handle, i, o);
          return i.free(), o.free(), j.fromRaw(s);
        }
        angularCorrection(e, t, n) {
          return this.raw.angular_correction(this.params.dt, this.bodies.raw, e.handle, t, n);
        }
      }
      class Ku {
        free() {
          this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((e) => e.free()), this.pidControllers.forEach((e) => e.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0;
        }
        constructor(e, t, n, i, o, s, a, l, c, u, h, d, p, m) {
          this.gravity = e, this.integrationParameters = new DR(t), this.islands = new KR(n), this.broadPhase = new JR(i), this.narrowPhase = new QR(o), this.bodies = new OR(s), this.colliders = new aE(a), this.impulseJoints = new VR(l), this.multibodyJoints = new XR(c), this.ccdSolver = new qR(u), this.queryPipeline = new tE(h), this.physicsPipeline = new eE(d), this.serializationPipeline = new ew(p), this.debugRenderPipeline = new nE(m), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
        }
        static fromRaw(e) {
          return e ? new Ku(j.fromRaw(e.takeGravity()), e.takeIntegrationParameters(), e.takeIslandManager(), e.takeBroadPhase(), e.takeNarrowPhase(), e.takeBodies(), e.takeColliders(), e.takeImpulseJoints(), e.takeMultibodyJoints()) : null;
        }
        takeSnapshot() {
          return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
        }
        static restoreSnapshot(e) {
          return new ew().deserializeAll(e);
        }
        debugRender() {
          return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new rE(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
        }
        step(e, t) {
          this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, e, t), this.queryPipeline.update(this.colliders);
        }
        propagateModifiedBodyPositionsToColliders() {
          this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
        }
        updateSceneQueries() {
          this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.colliders);
        }
        get timestep() {
          return this.integrationParameters.dt;
        }
        set timestep(e) {
          this.integrationParameters.dt = e;
        }
        get lengthUnit() {
          return this.integrationParameters.lengthUnit;
        }
        set lengthUnit(e) {
          this.integrationParameters.lengthUnit = e;
        }
        get numSolverIterations() {
          return this.integrationParameters.numSolverIterations;
        }
        set numSolverIterations(e) {
          this.integrationParameters.numSolverIterations = e;
        }
        get numAdditionalFrictionIterations() {
          return this.integrationParameters.numAdditionalFrictionIterations;
        }
        set numAdditionalFrictionIterations(e) {
          this.integrationParameters.numAdditionalFrictionIterations = e;
        }
        get numInternalPgsIterations() {
          return this.integrationParameters.numInternalPgsIterations;
        }
        set numInternalPgsIterations(e) {
          this.integrationParameters.numInternalPgsIterations = e;
        }
        switchToStandardPgsSolver() {
          this.integrationParameters.switchToStandardPgsSolver();
        }
        switchToSmallStepsPgsSolver() {
          this.integrationParameters.switchToSmallStepsPgsSolver();
        }
        switchToSmallStepsPgsSolverWithoutWarmstart() {
          this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
        }
        createRigidBody(e) {
          return this.bodies.createRigidBody(this.colliders, e);
        }
        createCharacterController(e) {
          let t = new oE(e, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
          return this.characterControllers.add(t), t;
        }
        removeCharacterController(e) {
          this.characterControllers.delete(e), e.free();
        }
        createPidController(e, t, n, i) {
          let o = new sE(this.integrationParameters, this.bodies, e, t, n, i);
          return this.pidControllers.add(o), o;
        }
        removePidController(e) {
          this.pidControllers.delete(e), e.free();
        }
        createCollider(e, t) {
          let n = t ? t.handle : void 0;
          return this.colliders.createCollider(this.bodies, e, n);
        }
        createImpulseJoint(e, t, n, i) {
          return this.impulseJoints.createJoint(this.bodies, e, t.handle, n.handle, i);
        }
        createMultibodyJoint(e, t, n, i) {
          return this.multibodyJoints.createJoint(e, t.handle, n.handle, i);
        }
        getRigidBody(e) {
          return this.bodies.get(e);
        }
        getCollider(e) {
          return this.colliders.get(e);
        }
        getImpulseJoint(e) {
          return this.impulseJoints.get(e);
        }
        getMultibodyJoint(e) {
          return this.multibodyJoints.get(e);
        }
        removeRigidBody(e) {
          this.bodies && this.bodies.remove(e.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
        }
        removeCollider(e, t) {
          this.colliders && this.colliders.remove(e.handle, this.islands, this.bodies, t);
        }
        removeImpulseJoint(e, t) {
          this.impulseJoints && this.impulseJoints.remove(e.handle, t);
        }
        removeMultibodyJoint(e, t) {
          this.impulseJoints && this.multibodyJoints.remove(e.handle, t);
        }
        forEachCollider(e) {
          this.colliders.forEach(e);
        }
        forEachRigidBody(e) {
          this.bodies.forEach(e);
        }
        forEachActiveRigidBody(e) {
          this.bodies.forEachActiveRigidBody(this.islands, e);
        }
        castRay(e, t, n, i, o, s, a, l) {
          return this.queryPipeline.castRay(this.bodies, this.colliders, e, t, n, i, o, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(l));
        }
        castRayAndGetNormal(e, t, n, i, o, s, a, l) {
          return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, e, t, n, i, o, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(l));
        }
        intersectionsWithRay(e, t, n, i, o, s, a, l, c) {
          this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, e, t, n, i, o, s, a ? a.handle : null, l ? l.handle : null, this.colliders.castClosure(c));
        }
        intersectionWithShape(e, t, n, i, o, s, a, l) {
          let c = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, e, t, n, i, o, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(l));
          return c != null ? this.colliders.get(c) : null;
        }
        projectPoint(e, t, n, i, o, s, a) {
          return this.queryPipeline.projectPoint(this.bodies, this.colliders, e, t, n, i, o ? o.handle : null, s ? s.handle : null, this.colliders.castClosure(a));
        }
        projectPointAndGetFeature(e, t, n, i, o, s) {
          return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, e, t, n, i ? i.handle : null, o ? o.handle : null, this.colliders.castClosure(s));
        }
        intersectionsWithPoint(e, t, n, i, o, s, a) {
          this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, e, this.colliders.castClosure(t), n, i, o ? o.handle : null, s ? s.handle : null, this.colliders.castClosure(a));
        }
        castShape(e, t, n, i, o, s, a, l, c, u, h, d) {
          return this.queryPipeline.castShape(this.bodies, this.colliders, e, t, n, i, o, s, a, l, c, u ? u.handle : null, h ? h.handle : null, this.colliders.castClosure(d));
        }
        intersectionsWithShape(e, t, n, i, o, s, a, l, c) {
          this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, e, t, n, this.colliders.castClosure(i), o, s, a ? a.handle : null, l ? l.handle : null, this.colliders.castClosure(c));
        }
        collidersWithAabbIntersectingAabb(e, t, n) {
          this.queryPipeline.collidersWithAabbIntersectingAabb(e, t, this.colliders.castClosure(n));
        }
        contactPairsWith(e, t) {
          this.narrowPhase.contactPairsWith(e.handle, this.colliders.castClosure(t));
        }
        intersectionPairsWith(e, t) {
          this.narrowPhase.intersectionPairsWith(e.handle, this.colliders.castClosure(t));
        }
        contactPair(e, t, n) {
          this.narrowPhase.contactPair(e.handle, t.handle, n);
        }
        intersectionPair(e, t) {
          return this.narrowPhase.intersectionPair(e.handle, t.handle);
        }
      }
      var rh;
      (function(r) {
        r[r.NONE = 0] = "NONE", r[r.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", r[r.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
      })(rh || (rh = {}));
      var nh;
      (function(r) {
        r[r.NONE = 0] = "NONE", r[r.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", r[r.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
      })(nh || (nh = {}));
      var rw;
      (function(r) {
        r[r.EMPTY = 0] = "EMPTY", r[r.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
      })(rw || (rw = {}));
      var ih;
      (function(r) {
        r[r.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", r[r.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", r[r.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", r[r.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", r[r.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", r[r.FIXED_FIXED = 32] = "FIXED_FIXED", r[r.DEFAULT = 15] = "DEFAULT", r[r.ALL = 60943] = "ALL";
      })(ih || (ih = {}));
      class nw {
        constructor(e, t, n, i) {
          this.colliderSet = e, this.handle = t, this._parent = n, this._shape = i;
        }
        finalizeDeserialization(e) {
          this.handle != null && (this._parent = e.get(this.colliderSet.raw.coParent(this.handle)));
        }
        ensureShapeIsCached() {
          this._shape || (this._shape = lr.fromRaw(this.colliderSet.raw, this.handle));
        }
        get shape() {
          return this.ensureShapeIsCached(), this._shape;
        }
        isValid() {
          return this.colliderSet.raw.contains(this.handle);
        }
        translation() {
          return j.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
        }
        rotation() {
          return Le.fromRaw(this.colliderSet.raw.coRotation(this.handle));
        }
        isSensor() {
          return this.colliderSet.raw.coIsSensor(this.handle);
        }
        setSensor(e) {
          this.colliderSet.raw.coSetSensor(this.handle, e);
        }
        setShape(e) {
          let t = e.intoRaw();
          this.colliderSet.raw.coSetShape(this.handle, t), t.free(), this._shape = e;
        }
        setEnabled(e) {
          this.colliderSet.raw.coSetEnabled(this.handle, e);
        }
        isEnabled() {
          return this.colliderSet.raw.coIsEnabled(this.handle);
        }
        setRestitution(e) {
          this.colliderSet.raw.coSetRestitution(this.handle, e);
        }
        setFriction(e) {
          this.colliderSet.raw.coSetFriction(this.handle, e);
        }
        frictionCombineRule() {
          return this.colliderSet.raw.coFrictionCombineRule(this.handle);
        }
        setFrictionCombineRule(e) {
          this.colliderSet.raw.coSetFrictionCombineRule(this.handle, e);
        }
        restitutionCombineRule() {
          return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
        }
        setRestitutionCombineRule(e) {
          this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, e);
        }
        setCollisionGroups(e) {
          this.colliderSet.raw.coSetCollisionGroups(this.handle, e);
        }
        setSolverGroups(e) {
          this.colliderSet.raw.coSetSolverGroups(this.handle, e);
        }
        contactSkin() {
          return this.colliderSet.raw.coContactSkin(this.handle);
        }
        setContactSkin(e) {
          return this.colliderSet.raw.coSetContactSkin(this.handle, e);
        }
        activeHooks() {
          return this.colliderSet.raw.coActiveHooks(this.handle);
        }
        setActiveHooks(e) {
          this.colliderSet.raw.coSetActiveHooks(this.handle, e);
        }
        activeEvents() {
          return this.colliderSet.raw.coActiveEvents(this.handle);
        }
        setActiveEvents(e) {
          this.colliderSet.raw.coSetActiveEvents(this.handle, e);
        }
        activeCollisionTypes() {
          return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
        }
        setContactForceEventThreshold(e) {
          return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, e);
        }
        contactForceEventThreshold() {
          return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
        }
        setActiveCollisionTypes(e) {
          this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, e);
        }
        setDensity(e) {
          this.colliderSet.raw.coSetDensity(this.handle, e);
        }
        setMass(e) {
          this.colliderSet.raw.coSetMass(this.handle, e);
        }
        setMassProperties(e, t, n) {
          let i = j.intoRaw(t);
          this.colliderSet.raw.coSetMassProperties(this.handle, e, i, n), i.free();
        }
        setTranslation(e) {
          this.colliderSet.raw.coSetTranslation(this.handle, e.x, e.y);
        }
        setTranslationWrtParent(e) {
          this.colliderSet.raw.coSetTranslationWrtParent(this.handle, e.x, e.y);
        }
        setRotation(e) {
          this.colliderSet.raw.coSetRotation(this.handle, e);
        }
        setRotationWrtParent(e) {
          this.colliderSet.raw.coSetRotationWrtParent(this.handle, e);
        }
        shapeType() {
          return this.colliderSet.raw.coShapeType(this.handle);
        }
        halfExtents() {
          return j.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
        }
        setHalfExtents(e) {
          const t = j.intoRaw(e);
          this.colliderSet.raw.coSetHalfExtents(this.handle, t);
        }
        radius() {
          return this.colliderSet.raw.coRadius(this.handle);
        }
        setRadius(e) {
          this.colliderSet.raw.coSetRadius(this.handle, e);
        }
        roundRadius() {
          return this.colliderSet.raw.coRoundRadius(this.handle);
        }
        setRoundRadius(e) {
          this.colliderSet.raw.coSetRoundRadius(this.handle, e);
        }
        halfHeight() {
          return this.colliderSet.raw.coHalfHeight(this.handle);
        }
        setHalfHeight(e) {
          this.colliderSet.raw.coSetHalfHeight(this.handle, e);
        }
        setVoxel(e, t, n) {
          this.colliderSet.raw.coSetVoxel(this.handle, e, t, n), this._shape = null;
        }
        vertices() {
          return this.colliderSet.raw.coVertices(this.handle);
        }
        indices() {
          return this.colliderSet.raw.coIndices(this.handle);
        }
        heightfieldHeights() {
          return this.colliderSet.raw.coHeightfieldHeights(this.handle);
        }
        heightfieldScale() {
          let e = this.colliderSet.raw.coHeightfieldScale(this.handle);
          return j.fromRaw(e);
        }
        parent() {
          return this._parent;
        }
        friction() {
          return this.colliderSet.raw.coFriction(this.handle);
        }
        restitution() {
          return this.colliderSet.raw.coRestitution(this.handle);
        }
        density() {
          return this.colliderSet.raw.coDensity(this.handle);
        }
        mass() {
          return this.colliderSet.raw.coMass(this.handle);
        }
        volume() {
          return this.colliderSet.raw.coVolume(this.handle);
        }
        collisionGroups() {
          return this.colliderSet.raw.coCollisionGroups(this.handle);
        }
        solverGroups() {
          return this.colliderSet.raw.coSolverGroups(this.handle);
        }
        containsPoint(e) {
          let t = j.intoRaw(e), n = this.colliderSet.raw.coContainsPoint(this.handle, t);
          return t.free(), n;
        }
        projectPoint(e, t) {
          let n = j.intoRaw(e), i = Yu.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, n, t));
          return n.free(), i;
        }
        intersectsRay(e, t) {
          let n = j.intoRaw(e.origin), i = j.intoRaw(e.dir), o = this.colliderSet.raw.coIntersectsRay(this.handle, n, i, t);
          return n.free(), i.free(), o;
        }
        castShape(e, t, n, i, o, s, a, l) {
          let c = j.intoRaw(e), u = j.intoRaw(n), h = Le.intoRaw(i), d = j.intoRaw(o), p = t.intoRaw(), m = Sl.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, c, p, u, h, d, s, a, l));
          return c.free(), u.free(), h.free(), d.free(), p.free(), m;
        }
        castCollider(e, t, n, i, o, s) {
          let a = j.intoRaw(e), l = j.intoRaw(n), c = qu.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, a, t.handle, l, i, o, s));
          return a.free(), l.free(), c;
        }
        intersectsShape(e, t, n) {
          let i = j.intoRaw(t), o = Le.intoRaw(n), s = e.intoRaw(), a = this.colliderSet.raw.coIntersectsShape(this.handle, s, i, o);
          return i.free(), o.free(), s.free(), a;
        }
        contactShape(e, t, n, i) {
          let o = j.intoRaw(t), s = Le.intoRaw(n), a = e.intoRaw(), l = ol.fromRaw(this.colliderSet.raw.coContactShape(this.handle, a, o, s, i));
          return o.free(), s.free(), a.free(), l;
        }
        contactCollider(e, t) {
          return ol.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, e.handle, t));
        }
        castRay(e, t, n) {
          let i = j.intoRaw(e.origin), o = j.intoRaw(e.dir), s = this.colliderSet.raw.coCastRay(this.handle, i, o, t, n);
          return i.free(), o.free(), s;
        }
        castRayAndGetNormal(e, t, n) {
          let i = j.intoRaw(e.origin), o = j.intoRaw(e.dir), s = Xu.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, i, o, t, n));
          return i.free(), o.free(), s;
        }
      }
      var us;
      (function(r) {
        r[r.Density = 0] = "Density", r[r.Mass = 1] = "Mass", r[r.MassProps = 2] = "MassProps";
      })(us || (us = {}));
      class ht {
        constructor(e) {
          this.enabled = true, this.shape = e, this.massPropsMode = us.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = Le.identity(), this.translation = j.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = nu.Average, this.restitutionCombineRule = nu.Average, this.activeCollisionTypes = ih.DEFAULT, this.activeEvents = rh.NONE, this.activeHooks = nh.NONE, this.mass = 0, this.centerOfMass = j.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = 0, this.rotationsEnabled = true;
        }
        static ball(e) {
          const t = new L1(e);
          return new ht(t);
        }
        static capsule(e, t) {
          const n = new H1(e, t);
          return new ht(n);
        }
        static segment(e, t) {
          const n = new B1(e, t);
          return new ht(n);
        }
        static triangle(e, t, n) {
          const i = new U1(e, t, n);
          return new ht(i);
        }
        static roundTriangle(e, t, n, i) {
          const o = new $1(e, t, n, i);
          return new ht(o);
        }
        static polyline(e, t) {
          const n = new V1(e, t);
          return new ht(n);
        }
        static voxels(e, t, n) {
          const i = new W1(e, t, n);
          return new ht(i);
        }
        static trimesh(e, t, n) {
          const i = new G1(e, t, n);
          return new ht(i);
        }
        static cuboid(e, t) {
          const n = new D1(e, t);
          return new ht(n);
        }
        static roundCuboid(e, t, n) {
          const i = new F1(e, t, n);
          return new ht(i);
        }
        static halfspace(e) {
          const t = new O1(e);
          return new ht(t);
        }
        static heightfield(e, t) {
          const n = new Y1(e, t);
          return new ht(n);
        }
        static convexHull(e) {
          const t = new eh(e, false);
          return new ht(t);
        }
        static convexPolyline(e) {
          const t = new eh(e, true);
          return new ht(t);
        }
        static roundConvexHull(e, t) {
          const n = new th(e, t, false);
          return new ht(n);
        }
        static roundConvexPolyline(e, t) {
          const n = new th(e, t, true);
          return new ht(n);
        }
        setTranslation(e, t) {
          if (typeof e != "number" || typeof t != "number") throw TypeError("The translation components must be numbers.");
          return this.translation = {
            x: e,
            y: t
          }, this;
        }
        setRotation(e) {
          return this.rotation = e, this;
        }
        setSensor(e) {
          return this.isSensor = e, this;
        }
        setEnabled(e) {
          return this.enabled = e, this;
        }
        setContactSkin(e) {
          return this.contactSkin = e, this;
        }
        setDensity(e) {
          return this.massPropsMode = us.Density, this.density = e, this;
        }
        setMass(e) {
          return this.massPropsMode = us.Mass, this.mass = e, this;
        }
        setMassProperties(e, t, n) {
          return this.massPropsMode = us.MassProps, this.mass = e, j.copy(this.centerOfMass, t), this.principalAngularInertia = n, this;
        }
        setRestitution(e) {
          return this.restitution = e, this;
        }
        setFriction(e) {
          return this.friction = e, this;
        }
        setFrictionCombineRule(e) {
          return this.frictionCombineRule = e, this;
        }
        setRestitutionCombineRule(e) {
          return this.restitutionCombineRule = e, this;
        }
        setCollisionGroups(e) {
          return this.collisionGroups = e, this;
        }
        setSolverGroups(e) {
          return this.solverGroups = e, this;
        }
        setActiveHooks(e) {
          return this.activeHooks = e, this;
        }
        setActiveEvents(e) {
          return this.activeEvents = e, this;
        }
        setActiveCollisionTypes(e) {
          return this.activeCollisionTypes = e, this;
        }
        setContactForceEventThreshold(e) {
          return this.contactForceEventThreshold = e, this;
        }
      }
      class aE {
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(e) {
          this.raw = e || new Xe(), this.map = new Gu(), e && e.forEachColliderHandle((t) => {
            this.map.set(t, new nw(this, t, null));
          });
        }
        castClosure(e) {
          return (t) => {
            if (e) return e(this.get(t));
          };
        }
        finalizeDeserialization(e) {
          this.map.forEach((t) => t.finalizeDeserialization(e));
        }
        createCollider(e, t, n) {
          let i = n != null && n != null;
          if (i && isNaN(n)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
          let o = t.shape.intoRaw(), s = j.intoRaw(t.translation), a = Le.intoRaw(t.rotation), l = j.intoRaw(t.centerOfMass), c = this.raw.createCollider(t.enabled, o, s, a, t.massPropsMode, t.mass, l, t.principalAngularInertia, t.density, t.friction, t.restitution, t.frictionCombineRule, t.restitutionCombineRule, t.isSensor, t.collisionGroups, t.solverGroups, t.activeCollisionTypes, t.activeHooks, t.activeEvents, t.contactForceEventThreshold, t.contactSkin, i, i ? n : 0, e.raw);
          o.free(), s.free(), a.free(), l.free();
          let u = i ? e.get(n) : null, h = new nw(this, c, u, t.shape);
          return this.map.set(c, h), h;
        }
        remove(e, t, n, i) {
          this.raw.remove(e, t.raw, n.raw, i), this.unmap(e);
        }
        unmap(e) {
          this.map.delete(e);
        }
        get(e) {
          return this.map.get(e);
        }
        len() {
          return this.map.len();
        }
        contains(e) {
          return this.get(e) != null;
        }
        forEach(e) {
          this.map.forEach(e);
        }
        getAll() {
          return this.map.getAll();
        }
      }
      function lE({ onVisibilityChange: r }) {
        const { theme: e } = P1(), [t, n] = F.useState(true), [i, o] = F.useState(null), s = F.useRef(null), a = F.useRef([]), l = F.useRef(null), c = F.useRef(null), u = F.useRef([]), h = F.useRef(null), d = F.useRef(null), p = F.useRef({
          x: 0,
          y: 0
        }), m = F.useRef(0), g = F.useRef(false), b = F.useRef([]), y = F.useRef([]), w = 2e3, v = 0.01, S = 0.99, C = 0.15, E = 3e-3, k = 0.97, T = 0.5, I = Pn.useMemo(() => Array.from({
          length: 150
        }, () => Math.round(Math.random())), []), M = Pn.useMemo(() => (y.current = Array.from({
          length: I.length
        }, () => 24 + Math.floor(Math.random() * 16)), I.map(() => {
          const $ = 5 + Math.random() * 90, U = 5 + Math.random() * 90;
          return {
            left: `${$}%`,
            top: `${U}%`
          };
        })), [
          I
        ]);
        F.useEffect(() => ((async () => {
          try {
            const U = {
              x: 0,
              y: 0
            }, X = new Ku(U);
            if (c.current = X, s.current) {
              const W = s.current.getBoundingClientRect();
              I.forEach((x, V) => {
                const K = parseFloat(M[V].left) / 100 * W.width, Re = parseFloat(M[V].top) / 100 * W.height;
                b.current[V] = {
                  x: K,
                  y: Re
                };
                const re = cn.dynamic().setTranslation(K * v, Re * v).setLinearDamping(0.8).setAngularDamping(0.8), _e = X.createRigidBody(re), ue = ht.ball(15 * v).setDensity(0.5).setFriction(0).setRestitution(0.7);
                X.createCollider(ue, _e), u.current[V] = _e;
              });
              const N = cn.kinematicPositionBased();
              h.current = X.createRigidBody(N);
              const L = ht.ball(50 * v).setSensor(true);
              X.createCollider(L, h.current);
            }
          } catch (U) {
            console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 Rapier:", U);
          }
        })(), () => {
          c.current && (c.current = null), u.current = [], h.current = null;
        }), [
          I,
          M
        ]), F.useEffect(() => {
          const $ = () => !!c.current && u.current.length > 0;
          I.forEach((X, W) => {
            a.current[W] && (a.current[W].style.opacity = "1");
          });
          const U = (X) => {
            if (!$() || !t) {
              l.current = requestAnimationFrame(U);
              return;
            }
            const W = c.current;
            X - m.current > w && !g.current && (g.current = true), u.current.forEach((L, x) => {
              if (L) {
                const V = L.translation(), K = L.linvel();
                L.setLinvel({
                  x: K.x * S,
                  y: K.y * S
                }, true);
                const Re = L.angvel();
                if (L.setAngvel(Re * k, true), g.current || Math.abs(K.x) < 0.05 && Math.abs(K.y) < 0.05) {
                  const re = b.current[x], _e = re.x * v - V.x, ue = re.y * v - V.y, pe = Math.sqrt(_e * _e + ue * ue);
                  if (pe > C * v) {
                    const nt = pe * E, it = _e / pe * nt, Br = ue / pe * nt, ot = Math.sin(X * 1e-3 + x * 0.7) * 3e-4, mt = _e * ot, de = ue * ot;
                    L.applyImpulse({
                      x: it + mt,
                      y: Br + de
                    }, true);
                    const ze = L.rotation();
                    if (Math.abs(ze) > 0.01) {
                      const zt = -ze * 0.01;
                      L.applyTorqueImpulse(zt, true);
                    }
                  } else pe < 0.01 * v && Math.abs(Re) < 0.1 && (L.setTranslation({
                    x: re.x * v,
                    y: re.y * v
                  }, true), L.setLinvel({
                    x: 0,
                    y: 0
                  }, true), L.setRotation(0, true), L.setAngvel(0, true));
                }
              }
            }), W.step(), a.current.forEach((L, x) => {
              if (L && u.current[x]) {
                const V = u.current[x].translation(), K = b.current[x], Re = u.current[x].rotation(), re = V.x / v - K.x, _e = V.y / v - K.y, ue = y.current[x];
                L.style.cssText = `
            position: absolute;
            left: ${M[x].left};
            top: ${M[x].top};
            font-size: ${ue}px;
            color: ${i === x ? "#00ff00" : e === "dark" ? "#ffffff" : "#000000"};
            opacity: 1;
            transform: translate(${re}px, ${_e}px) rotate(${Re}rad);
            cursor: pointer;
            user-select: none;
            font-family: monospace;
            z-index: 10;
          `;
              }
            }), l.current = requestAnimationFrame(U);
          };
          return l.current = requestAnimationFrame(U), () => {
            l.current && cancelAnimationFrame(l.current);
          };
        }, [
          t,
          I,
          e
        ]), F.useEffect(() => {
          const $ = (U) => {
            if (!t || !c.current || !h.current || !s.current) return;
            const X = s.current.getBoundingClientRect(), W = U.clientX - X.left, N = U.clientY - X.top;
            if (m.current = performance.now(), g.current = false, h.current.setTranslation({
              x: W * v,
              y: N * v
            }, true), d.current) {
              const x = W - d.current.x, V = N - d.current.y;
              p.current.x = p.current.x * 0.6 + x * 0.4, p.current.y = p.current.y * 0.6 + V * 0.4;
            }
            d.current = {
              x: W,
              y: N
            };
            const L = Math.sqrt(p.current.x * p.current.x + p.current.y * p.current.y);
            L > 3 && u.current.forEach((x, V) => {
              if (x && a.current[V]) {
                const K = x.translation(), Re = K.x - W * v, re = K.y - N * v, _e = Math.sqrt(Re * Re + re * re);
                if (_e < 150 * v) {
                  const ue = Math.atan2(re, Re), pe = Math.min(25, 500 / (_e / v + 10)) * (L / 5), nt = Math.cos(ue) * pe * v, it = Math.sin(ue) * pe * v;
                  x.applyImpulse({
                    x: nt,
                    y: it
                  }, true);
                  const Br = -Math.sin(ue) * pe * T * v, ot = Math.cos(ue) * pe * T * v, mt = Math.random() > 0.5 ? 1 : -1, de = (Br + ot) * mt;
                  x.applyTorqueImpulse(de, true), _e < 80 * v && (a.current[V].style.color = "#00ff00");
                }
              }
            });
          };
          return window.addEventListener("mousemove", $), () => {
            window.removeEventListener("mousemove", $);
          };
        }, [
          t,
          e
        ]), F.useEffect(() => {
          const $ = () => {
            const U = document.getElementById("about");
            if (U) {
              const X = U.getBoundingClientRect();
              X.bottom <= 0 || X.top >= window.innerHeight ? (n(false), r(false)) : (n(true), r(true));
            } else window.scrollY > window.innerHeight * 0.8 ? (n(false), r(false)) : (n(true), r(true));
          };
          return window.addEventListener("scroll", $), $(), () => {
            window.removeEventListener("scroll", $);
          };
        }, [
          r
        ]);
        const H = ($) => {
          o($);
        }, O = () => {
          o(null);
        }, Z = ($) => {
          o($), setTimeout(() => o(null), 1e3);
        };
        return P.jsx("div", {
          className: `binary-background ${t ? "" : "hidden"}`,
          ref: s,
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 5,
            pointerEvents: t ? "auto" : "none",
            willChange: "opacity",
            transform: "translateZ(0)"
          },
          children: I.map(($, U) => P.jsx("div", {
            ref: (X) => a.current[U] = X,
            style: {
              position: "absolute",
              left: M[U].left,
              top: M[U].top,
              fontSize: `${y.current[U]}px`,
              color: e === "dark" ? "#ffffff" : "#000000",
              opacity: 1,
              cursor: "pointer",
              userSelect: "none",
              fontFamily: "monospace",
              fontWeight: Math.random() > 0.6 ? "bold" : "normal",
              zIndex: 10
            },
            onMouseEnter: () => H(U),
            onMouseLeave: O,
            onClick: () => Z(U),
            children: $
          }, U))
        });
      }
      const Xl = 100, cE = 100, iw = 1e3, uE = ({ onAnimationComplete: r }) => {
        const { t: e } = Lo(), [t, n] = F.useState(""), [i, o] = F.useState(false);
        F.useState(true);
        const [s, a] = F.useState([]), l = F.useRef(null), [c, u] = F.useState(true), [h, d] = F.useState(false);
        F.useEffect(() => {
          const b = () => {
            d(window.innerWidth < 1024);
          };
          return b(), window.addEventListener("resize", b), () => {
            window.removeEventListener("resize", b);
          };
        }, []);
        const p = (b, y, w) => {
          const v = [], S = [
            "#4CAF50",
            "#8BC34A",
            "#CDDC39",
            "#2196F3",
            "#00BCD4"
          ], C = w.left + b, E = w.top + y;
          for (let I = 0; I < 20; I++) {
            const M = Math.random() * Math.PI * 2, H = Math.random() * 7 + 3;
            v.push({
              id: Date.now() + I,
              x: C,
              y: E,
              size: Math.random() * 10 + 5,
              color: S[Math.floor(Math.random() * S.length)],
              velocityX: Math.cos(M) * H,
              velocityY: Math.sin(M) * H
            });
          }
          a((I) => [
            ...I,
            ...v
          ]);
          let k;
          const T = () => {
            a((I) => I.map((M) => v.some((H) => H.id === M.id) ? {
              ...M,
              x: M.x + M.velocityX,
              y: M.y + M.velocityY,
              velocityY: M.velocityY + 0.2,
              size: M.size * 0.97
            } : M).filter((M) => M.size > 0.5)), k = requestAnimationFrame(T);
          };
          k = requestAnimationFrame(T), setTimeout(() => {
            cancelAnimationFrame(k), a((I) => I.filter((M) => !v.some((H) => H.id === M.id)));
          }, 1e3);
        }, m = (b) => {
          const y = b.currentTarget.getBoundingClientRect(), w = b.clientX - y.left, v = b.clientY - y.top;
          p(w, v, y), b.preventDefault(), b.stopPropagation();
          const S = b.currentTarget;
          S.style.backgroundColor = "#1e7600", S.style.transform = "scale(0.95)", console.log(e("debugMessages.buttonClicked"));
          let C = document.getElementById("portfolio");
          C || (C = document.querySelector(".portfolio-section")), C ? (console.log(e("debugMessages.scrollingToSection"), C), C.scrollIntoView({
            behavior: "smooth"
          })) : (console.log(e("debugMessages.sectionNotFound")), window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })), setTimeout(() => {
            S.style.backgroundColor = "", S.style.transform = "";
          }, 1e3);
        };
        F.useEffect(() => {
          r == null ? void 0 : r();
        }, [
          r
        ]), F.useEffect(() => {
          let b, y = "typing0", w = 0;
          const v = e("about.baseText"), S = e("about.firstPhrase"), C = e("about.secondPhrase"), E = () => {
            y === "typing0" ? w <= v.length ? (n(v.slice(0, w)), w++, b = window.setTimeout(E, Xl)) : (w = 0, y = "typing1", b = window.setTimeout(E, Xl)) : y === "typing1" ? w <= S.length ? (n(v + S.slice(0, w)), w++, b = window.setTimeout(E, Xl)) : (w = S.length, b = window.setTimeout(() => {
              y = "erasing", E();
            }, iw)) : y === "erasing" ? w > 0 ? (n(v + S.slice(0, w - 1)), w--, b = window.setTimeout(E, cE)) : (y = "typing2", w = 0, b = window.setTimeout(E, iw)) : y === "typing2" && (w <= C.length ? (n(v + C.slice(0, w)), w++, b = window.setTimeout(E, Xl)) : o(true));
          };
          return E(), () => window.clearTimeout(b);
        }, [
          e
        ]);
        const g = () => {
          const b = t.split(`
`);
          return b.map((y, w) => P.jsxs("span", {
            className: "line",
            children: [
              y,
              w === b.length - 1 && P.jsx("span", {
                className: "cursor"
              })
            ]
          }, w));
        };
        return F.useEffect(() => {
          const b = () => {
            (window.pageYOffset || document.documentElement.scrollTop) > 100 ? u(false) : u(true);
          };
          let y = false;
          return window.addEventListener("scroll", () => {
            y || (window.requestAnimationFrame(() => {
              b(), y = false;
            }), y = true);
          }), b(), () => {
            window.removeEventListener("scroll", b);
          };
        }, []), P.jsxs("div", {
          className: "about-container",
          children: [
            P.jsx("div", {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: 5,
                opacity: c ? 1 : 0,
                visibility: c ? "visible" : "hidden",
                transition: "opacity 0.3s ease, visibility 0.3s ease",
                pointerEvents: "none",
                transform: "translateZ(0)",
                willChange: "opacity, visibility"
              },
              children: P.jsx(lE, {
                onVisibilityChange: u
              })
            }),
            P.jsxs("div", {
              className: "about-wrapper",
              children: [
                h && P.jsx("video", {
                  className: "about-bg-video",
                  src: "/pr/video.mp4",
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 2,
                    pointerEvents: "none"
                  }
                }),
                P.jsx("div", {
                  className: "content-container",
                  children: P.jsx("section", {
                    id: "about",
                    className: "about",
                    children: P.jsxs("div", {
                      className: "about-content",
                      children: [
                        P.jsx("div", {
                          className: "about-text",
                          children: P.jsx("div", {
                            className: "typing-text",
                            children: g()
                          })
                        }),
                        P.jsx("div", {
                          className: "fixed-button-container",
                          style: {
                            marginTop: "2rem",
                            display: "flex",
                            justifyContent: "center"
                          },
                          children: P.jsx("button", {
                            className: `check-button ${i ? "fade-in" : ""}`,
                            onClick: m,
                            style: {
                              cursor: "pointer",
                              opacity: i ? 1 : 0,
                              visibility: i ? "visible" : "hidden",
                              pointerEvents: "auto"
                            },
                            children: e("about.buttonText")
                          })
                        })
                      ]
                    })
                  })
                })
              ]
            }),
            P.jsx("div", {
              className: "particle-container",
              ref: l,
              children: s.map((b) => P.jsx("div", {
                className: "particle",
                style: {
                  left: `${b.x}px`,
                  top: `${b.y}px`,
                  width: `${b.size}px`,
                  height: `${b.size}px`,
                  backgroundColor: b.color,
                  position: "absolute",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 3e4
                }
              }, b.id))
            })
          ]
        });
      };
      function Bn(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function X1(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
      }
      var Nr = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      }, zs = {
        duration: 0.5,
        overwrite: false,
        delay: 0
      }, zp, Mt, Fe, jn = 1e8, Gt = 1 / jn, oh = Math.PI * 2, dE = oh / 4, fE = 0, q1 = Math.sqrt, hE = Math.cos, pE = Math.sin, kt = function(e) {
        return typeof e == "string";
      }, Ke = function(e) {
        return typeof e == "function";
      }, ii = function(e) {
        return typeof e == "number";
      }, Np = function(e) {
        return typeof e > "u";
      }, zn = function(e) {
        return typeof e == "object";
      }, gr = function(e) {
        return e !== false;
      }, Lp = function() {
        return typeof window < "u";
      }, ql = function(e) {
        return Ke(e) || kt(e);
      }, K1 = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
      }, Yt = Array.isArray, sh = /(?:-?\.?\d|\.)+/gi, J1 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ds = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Fd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Q1 = /[+-]=-?[.\d]+/, Z1 = /[^,'"\[\]\s]+/gi, _E = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, $e, bn, ah, Op, Or = {}, su = {}, ey, ty = function(e) {
        return (su = Ns(e, Or)) && vr;
      }, Dp = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
      }, al = function(e, t) {
        return !t && console.warn(e);
      }, ry = function(e, t) {
        return e && (Or[e] = t) && su && (su[e] = t) || Or;
      }, ll = function() {
        return 0;
      }, gE = {
        suppressEvents: true,
        isStart: true,
        kill: false
      }, bc = {
        suppressEvents: true,
        kill: false
      }, wE = {
        suppressEvents: true
      }, Fp = {}, zi = [], lh = {}, ny, Pr = {}, Hd = {}, ow = 30, Sc = [], Hp = "", Bp = function(e) {
        var t = e[0], n, i;
        if (zn(t) || Ke(t) || (e = [
          e
        ]), !(n = (t._gsap || {}).harness)) {
          for (i = Sc.length; i-- && !Sc[i].targetTest(t); ) ;
          n = Sc[i];
        }
        for (i = e.length; i--; ) e[i] && (e[i]._gsap || (e[i]._gsap = new Ey(e[i], n))) || e.splice(i, 1);
        return e;
      }, go = function(e) {
        return e._gsap || Bp(qr(e))[0]._gsap;
      }, iy = function(e, t, n) {
        return (n = e[t]) && Ke(n) ? e[t]() : Np(n) && e.getAttribute && e.getAttribute(t) || n;
      }, wr = function(e, t) {
        return (e = e.split(",")).forEach(t) || e;
      }, et = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      }, ct = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0;
      }, vs = function(e, t) {
        var n = t.charAt(0), i = parseFloat(t.substr(2));
        return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
      }, mE = function(e, t) {
        for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; ) ;
        return i < n;
      }, au = function() {
        var e = zi.length, t = zi.slice(0), n, i;
        for (lh = {}, zi.length = 0, n = 0; n < e; n++) i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], true)._lazy = 0);
      }, oy = function(e, t, n, i) {
        zi.length && !Mt && au(), e.render(t, n, Mt && t < 0 && (e._initted || e._startAt)), zi.length && !Mt && au();
      }, sy = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(Z1).length < 2 ? t : kt(e) ? e.trim() : e;
      }, ay = function(e) {
        return e;
      }, Dr = function(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }, yE = function(e) {
        return function(t, n) {
          for (var i in n) i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
        };
      }, Ns = function(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }, sw = function r(e, t) {
        for (var n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = zn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e;
      }, lu = function(e, t) {
        var n = {}, i;
        for (i in e) i in t || (n[i] = e[i]);
        return n;
      }, Pa = function(e) {
        var t = e.parent || $e, n = e.keyframes ? yE(Yt(e.keyframes)) : Dr;
        if (gr(e.inherit)) for (; t; ) n(e, t.vars.defaults), t = t.parent || t._dp;
        return e;
      }, vE = function(e, t) {
        for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; ) ;
        return n < 0;
      }, ly = function(e, t, n, i, o) {
        var s = e[i], a;
        if (o) for (a = t[o]; s && s[o] > a; ) s = s._prev;
        return s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t;
      }, Ju = function(e, t, n, i) {
        n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
        var o = t._prev, s = t._next;
        o ? o._next = s : e[n] === t && (e[n] = s), s ? s._prev = o : e[i] === t && (e[i] = o), t._next = t._prev = t.parent = null;
      }, Bi = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
      }, wo = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n; ) n._dirty = 1, n = n.parent;
        return e;
      }, bE = function(e) {
        for (var t = e.parent; t && t.parent; ) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e;
      }, ch = function(e, t, n, i) {
        return e._startAt && (Mt ? e._startAt.revert(bc) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, true, i));
      }, SE = function r(e) {
        return !e || e._ts && r(e.parent);
      }, aw = function(e) {
        return e._repeat ? Ls(e._tTime, e = e.duration() + e._rDelay) * e : 0;
      }, Ls = function(e, t) {
        var n = Math.floor(e = ct(e / t));
        return e && n === e ? n - 1 : n;
      }, cu = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
      }, Qu = function(e) {
        return e._end = ct(e._start + (e._tDur / Math.abs(e._ts || e._rts || Gt) || 0));
      }, Zu = function(e, t) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = ct(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Qu(e), n._dirty || wo(n, e)), e;
      }, cy = function(e, t) {
        var n;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = cu(e.rawTime(), t), (!t._dur || xl(0, t.totalDuration(), n) - t._tTime > Gt) && t.render(n, true)), wo(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
          if (e._dur < e.duration()) for (n = e; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
          e._zTime = -1e-8;
        }
      }, Cn = function(e, t, n, i) {
        return t.parent && Bi(t), t._start = ct((ii(n) ? n : n || e !== $e ? $r(e, n, t) : e._time) + t._delay), t._end = ct(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ly(e, t, "_first", "_last", e._sort ? "_start" : 0), uh(t) || (e._recent = t), i || cy(e, t), e._ts < 0 && Zu(e, e._tTime), e;
      }, uy = function(e, t) {
        return (Or.ScrollTrigger || Dp("scrollTrigger", t)) && Or.ScrollTrigger.create(t, e);
      }, dy = function(e, t, n, i, o) {
        if ($p(e, t, o), !e._initted) return 1;
        if (!n && e._pt && !Mt && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && ny !== Ar.frame) return zi.push(e), e._lazy = [
          o,
          i
        ], 1;
      }, xE = function r(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
      }, uh = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart";
      }, CE = function(e, t, n, i) {
        var o = e.ratio, s = t < 0 || !t && (!e._start && xE(e) && !(!e._initted && uh(e)) || (e._ts < 0 || e._dp._ts < 0) && !uh(e)) ? 0 : 1, a = e._rDelay, l = 0, c, u, h;
        if (a && e._repeat && (l = xl(0, e._tDur, t), u = Ls(l, a), e._yoyo && u & 1 && (s = 1 - s), u !== Ls(e._tTime, a) && (o = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== o || Mt || i || e._zTime === Gt || !t && e._zTime) {
          if (!e._initted && dy(e, t, i, n, l)) return;
          for (h = e._zTime, e._zTime = t || (n ? Gt : 0), n || (n = t && !h), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = l, c = e._pt; c; ) c.r(s, c.d), c = c._next;
          t < 0 && ch(e, t, n, true), e._onUpdate && !n && Ir(e, "onUpdate"), l && e._repeat && !n && e.parent && Ir(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Bi(e, 1), !n && !Mt && (Ir(e, s ? "onComplete" : "onReverseComplete", true), e._prom && e._prom()));
        } else e._zTime || (e._zTime = t);
      }, kE = function(e, t, n) {
        var i;
        if (n > t) for (i = e._first; i && i._start <= n; ) {
          if (i.data === "isPause" && i._start > t) return i;
          i = i._next;
        }
        else for (i = e._last; i && i._start >= n; ) {
          if (i.data === "isPause" && i._start < t) return i;
          i = i._prev;
        }
      }, Os = function(e, t, n, i) {
        var o = e._repeat, s = ct(t) || 0, a = e._tTime / e._tDur;
        return a && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = o ? o < 0 ? 1e10 : ct(s * (o + 1) + e._rDelay * o) : s, a > 0 && !i && Zu(e, e._tTime = e._tDur * a), e.parent && Qu(e), n || wo(e.parent, e), e;
      }, lw = function(e) {
        return e instanceof nr ? wo(e) : Os(e, e._dur);
      }, RE = {
        _start: 0,
        endTime: ll,
        totalDuration: ll
      }, $r = function r(e, t, n) {
        var i = e.labels, o = e._recent || RE, s = e.duration() >= jn ? o.endTime(false) : e._dur, a, l, c;
        return kt(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? o : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = s), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && n && (l = l / 100 * (Yt(n) ? n[0] : n).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), n) + l : s + l)) : t == null ? s : +t;
      }, Ta = function(e, t, n) {
        var i = ii(t[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = t[o], a, l;
        if (i && (s.duration = t[1]), s.parent = n, e) {
          for (a = s, l = n; l && !("immediateRender" in a); ) a = l.vars.defaults || {}, l = gr(l.vars.inherit) && l.parent;
          s.immediateRender = gr(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[o - 1];
        }
        return new lt(t[0], s, t[o + 1]);
      }, Yi = function(e, t) {
        return e || e === 0 ? t(e) : t;
      }, xl = function(e, t, n) {
        return n < e ? e : n > t ? t : n;
      }, Vt = function(e, t) {
        return !kt(e) || !(t = _E.exec(e)) ? "" : t[1];
      }, EE = function(e, t, n) {
        return Yi(n, function(i) {
          return xl(e, t, i);
        });
      }, dh = [].slice, fy = function(e, t) {
        return e && zn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && zn(e[0])) && !e.nodeType && e !== bn;
      }, PE = function(e, t, n) {
        return n === void 0 && (n = []), e.forEach(function(i) {
          var o;
          return kt(i) && !t || fy(i, 1) ? (o = n).push.apply(o, qr(i)) : n.push(i);
        }) || n;
      }, qr = function(e, t, n) {
        return Fe && !t && Fe.selector ? Fe.selector(e) : kt(e) && !n && (ah || !Ds()) ? dh.call((t || Op).querySelectorAll(e), 0) : Yt(e) ? PE(e, n) : fy(e) ? dh.call(e, 0) : e ? [
          e
        ] : [];
      }, fh = function(e) {
        return e = qr(e)[0] || al("Invalid scope") || {}, function(t) {
          var n = e.current || e.nativeElement || e;
          return qr(t, n.querySelectorAll ? n : n === e ? al("Invalid scope") || Op.createElement("div") : e);
        };
      }, hy = function(e) {
        return e.sort(function() {
          return 0.5 - Math.random();
        });
      }, py = function(e) {
        if (Ke(e)) return e;
        var t = zn(e) ? e : {
          each: e
        }, n = mo(t.ease), i = t.from || 0, o = parseFloat(t.base) || 0, s = {}, a = i > 0 && i < 1, l = isNaN(i) || a, c = t.axis, u = i, h = i;
        return kt(i) ? u = h = {
          center: 0.5,
          edges: 0.5,
          end: 1
        }[i] || 0 : !a && l && (u = i[0], h = i[1]), function(d, p, m) {
          var g = (m || t).length, b = s[g], y, w, v, S, C, E, k, T, I;
          if (!b) {
            if (I = t.grid === "auto" ? 0 : (t.grid || [
              1,
              jn
            ])[1], !I) {
              for (k = -1e8; k < (k = m[I++].getBoundingClientRect().left) && I < g; ) ;
              I < g && I--;
            }
            for (b = s[g] = [], y = l ? Math.min(I, g) * u - 0.5 : i % I, w = I === jn ? 0 : l ? g * h / I - 0.5 : i / I | 0, k = 0, T = jn, E = 0; E < g; E++) v = E % I - y, S = w - (E / I | 0), b[E] = C = c ? Math.abs(c === "y" ? S : v) : q1(v * v + S * S), C > k && (k = C), C < T && (T = C);
            i === "random" && hy(b), b.max = k - T, b.min = T, b.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (I > g ? g - 1 : c ? c === "y" ? g / I : I : Math.max(I, g / I)) || 0) * (i === "edges" ? -1 : 1), b.b = g < 0 ? o - g : o, b.u = Vt(t.amount || t.each) || 0, n = n && g < 0 ? Cy(n) : n;
          }
          return g = (b[d] - b.min) / b.max || 0, ct(b.b + (n ? n(g) : g) * b.v) + b.u;
        };
      }, hh = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(n) {
          var i = ct(Math.round(parseFloat(n) / e) * e * t);
          return (i - i % 1) / t + (ii(n) ? 0 : Vt(n));
        };
      }, _y = function(e, t) {
        var n = Yt(e), i, o;
        return !n && zn(e) && (i = n = e.radius || jn, e.values ? (e = qr(e.values), (o = !ii(e[0])) && (i *= i)) : e = hh(e.increment)), Yi(t, n ? Ke(e) ? function(s) {
          return o = e(s), Math.abs(o - s) <= i ? o : s;
        } : function(s) {
          for (var a = parseFloat(o ? s.x : s), l = parseFloat(o ? s.y : 0), c = jn, u = 0, h = e.length, d, p; h--; ) o ? (d = e[h].x - a, p = e[h].y - l, d = d * d + p * p) : d = Math.abs(e[h] - a), d < c && (c = d, u = h);
          return u = !i || c <= i ? e[u] : s, o || u === s || ii(s) ? u : u + Vt(s);
        } : hh(e));
      }, gy = function(e, t, n, i) {
        return Yi(Yt(e) ? !t : n === true ? !!(n = 0) : !i, function() {
          return Yt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
        });
      }, TE = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(i) {
          return t.reduce(function(o, s) {
            return s(o);
          }, i);
        };
      }, AE = function(e, t) {
        return function(n) {
          return e(parseFloat(n)) + (t || Vt(n));
        };
      }, jE = function(e, t, n) {
        return my(e, t, 0, 1, n);
      }, wy = function(e, t, n) {
        return Yi(n, function(i) {
          return e[~~t(i)];
        });
      }, ME = function r(e, t, n) {
        var i = t - e;
        return Yt(e) ? wy(e, r(0, e.length), t) : Yi(n, function(o) {
          return (i + (o - e) % i) % i + e;
        });
      }, IE = function r(e, t, n) {
        var i = t - e, o = i * 2;
        return Yt(e) ? wy(e, r(0, e.length - 1), t) : Yi(n, function(s) {
          return s = (o + (s - e) % o) % o || 0, e + (s > i ? o - s : s);
        });
      }, cl = function(e) {
        for (var t = 0, n = "", i, o, s, a; ~(i = e.indexOf("random(", t)); ) s = e.indexOf(")", i), a = e.charAt(i + 7) === "[", o = e.substr(i + 7, s - i - 7).match(a ? Z1 : sh), n += e.substr(t, i - t) + gy(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5), t = s + 1;
        return n + e.substr(t, e.length - t);
      }, my = function(e, t, n, i, o) {
        var s = t - e, a = i - n;
        return Yi(o, function(l) {
          return n + ((l - e) / s * a || 0);
        });
      }, zE = function r(e, t, n, i) {
        var o = isNaN(e + t) ? 0 : function(p) {
          return (1 - p) * e + p * t;
        };
        if (!o) {
          var s = kt(e), a = {}, l, c, u, h, d;
          if (n === true && (i = 1) && (n = null), s) e = {
            p: e
          }, t = {
            p: t
          };
          else if (Yt(e) && !Yt(t)) {
            for (u = [], h = e.length, d = h - 2, c = 1; c < h; c++) u.push(r(e[c - 1], e[c]));
            h--, o = function(m) {
              m *= h;
              var g = Math.min(d, ~~m);
              return u[g](m - g);
            }, n = t;
          } else i || (e = Ns(Yt(e) ? [] : {}, e));
          if (!u) {
            for (l in t) Up.call(a, e, l, "get", t[l]);
            o = function(m) {
              return Gp(m, a) || (s ? e.p : e);
            };
          }
        }
        return Yi(n, o);
      }, cw = function(e, t, n) {
        var i = e.labels, o = jn, s, a, l;
        for (s in i) a = i[s] - t, a < 0 == !!n && a && o > (a = Math.abs(a)) && (l = s, o = a);
        return l;
      }, Ir = function(e, t, n) {
        var i = e.vars, o = i[t], s = Fe, a = e._ctx, l, c, u;
        if (o) return l = i[t + "Params"], c = i.callbackScope || e, n && zi.length && au(), a && (Fe = a), u = l ? o.apply(c, l) : o.call(c), Fe = s, u;
      }, da = function(e) {
        return Bi(e), e.scrollTrigger && e.scrollTrigger.kill(!!Mt), e.progress() < 1 && Ir(e, "onInterrupt"), e;
      }, fs, yy = [], vy = function(e) {
        if (e) if (e = !e.name && e.default || e, Lp() || e.headless) {
          var t = e.name, n = Ke(e), i = t && !n && e.init ? function() {
            this._props = [];
          } : e, o = {
            init: ll,
            render: Gp,
            add: Up,
            kill: KE,
            modifier: qE,
            rawVars: 0
          }, s = {
            targetTest: 0,
            get: 0,
            getSetter: Wp,
            aliases: {},
            register: 0
          };
          if (Ds(), e !== i) {
            if (Pr[t]) return;
            Dr(i, Dr(lu(e, o), s)), Ns(i.prototype, Ns(o, lu(e, s))), Pr[i.prop = t] = i, e.targetTest && (Sc.push(i), Fp[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
          }
          ry(t, i), e.register && e.register(vr, i, mr);
        } else yy.push(e);
      }, Pe = 255, fa = {
        aqua: [
          0,
          Pe,
          Pe
        ],
        lime: [
          0,
          Pe,
          0
        ],
        silver: [
          192,
          192,
          192
        ],
        black: [
          0,
          0,
          0
        ],
        maroon: [
          128,
          0,
          0
        ],
        teal: [
          0,
          128,
          128
        ],
        blue: [
          0,
          0,
          Pe
        ],
        navy: [
          0,
          0,
          128
        ],
        white: [
          Pe,
          Pe,
          Pe
        ],
        olive: [
          128,
          128,
          0
        ],
        yellow: [
          Pe,
          Pe,
          0
        ],
        orange: [
          Pe,
          165,
          0
        ],
        gray: [
          128,
          128,
          128
        ],
        purple: [
          128,
          0,
          128
        ],
        green: [
          0,
          128,
          0
        ],
        red: [
          Pe,
          0,
          0
        ],
        pink: [
          Pe,
          192,
          203
        ],
        cyan: [
          0,
          Pe,
          Pe
        ],
        transparent: [
          Pe,
          Pe,
          Pe,
          0
        ]
      }, Bd = function(e, t, n) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Pe + 0.5 | 0;
      }, by = function(e, t, n) {
        var i = e ? ii(e) ? [
          e >> 16,
          e >> 8 & Pe,
          e & Pe
        ] : 0 : fa.black, o, s, a, l, c, u, h, d, p, m;
        if (!i) {
          if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), fa[e]) i = fa[e];
          else if (e.charAt(0) === "#") {
            if (e.length < 6 && (o = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + o + o + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [
              i >> 16,
              i >> 8 & Pe,
              i & Pe,
              parseInt(e.substr(7), 16) / 255
            ];
            e = parseInt(e.substr(1), 16), i = [
              e >> 16,
              e >> 8 & Pe,
              e & Pe
            ];
          } else if (e.substr(0, 3) === "hsl") {
            if (i = m = e.match(sh), !t) l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, s = u <= 0.5 ? u * (c + 1) : u + c - u * c, o = u * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Bd(l + 1 / 3, o, s), i[1] = Bd(l, o, s), i[2] = Bd(l - 1 / 3, o, s);
            else if (~e.indexOf("=")) return i = e.match(J1), n && i.length < 4 && (i[3] = 1), i;
          } else i = e.match(sh) || fa.transparent;
          i = i.map(Number);
        }
        return t && !m && (o = i[0] / Pe, s = i[1] / Pe, a = i[2] / Pe, h = Math.max(o, s, a), d = Math.min(o, s, a), u = (h + d) / 2, h === d ? l = c = 0 : (p = h - d, c = u > 0.5 ? p / (2 - h - d) : p / (h + d), l = h === o ? (s - a) / p + (s < a ? 6 : 0) : h === s ? (a - o) / p + 2 : (o - s) / p + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
      }, Sy = function(e) {
        var t = [], n = [], i = -1;
        return e.split(Ni).forEach(function(o) {
          var s = o.match(ds) || [];
          t.push.apply(t, s), n.push(i += s.length + 1);
        }), t.c = n, t;
      }, uw = function(e, t, n) {
        var i = "", o = (e + i).match(Ni), s = t ? "hsla(" : "rgba(", a = 0, l, c, u, h;
        if (!o) return e;
        if (o = o.map(function(d) {
          return (d = by(d, t, 1)) && s + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
        }), n && (u = Sy(e), l = n.c, l.join(i) !== u.c.join(i))) for (c = e.replace(Ni, "1").split(ds), h = c.length - 1; a < h; a++) i += c[a] + (~l.indexOf(a) ? o.shift() || s + "0,0,0,0)" : (u.length ? u : o.length ? o : n).shift());
        if (!c) for (c = e.split(Ni), h = c.length - 1; a < h; a++) i += c[a] + o[a];
        return i + c[h];
      }, Ni = function() {
        var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in fa) r += "|" + e + "\\b";
        return new RegExp(r + ")", "gi");
      }(), NE = /hsl[a]?\(/, xy = function(e) {
        var t = e.join(" "), n;
        if (Ni.lastIndex = 0, Ni.test(t)) return n = NE.test(t), e[1] = uw(e[1], n), e[0] = uw(e[0], n, Sy(e[1])), true;
      }, ul, Ar = function() {
        var r = Date.now, e = 500, t = 33, n = r(), i = n, o = 1e3 / 240, s = o, a = [], l, c, u, h, d, p, m = function g(b) {
          var y = r() - i, w = b === true, v, S, C, E;
          if ((y > e || y < 0) && (n += y - t), i += y, C = i - n, v = C - s, (v > 0 || w) && (E = ++h.frame, d = C - h.time * 1e3, h.time = C = C / 1e3, s += v + (v >= o ? 4 : o - v), S = 1), w || (l = c(g)), S) for (p = 0; p < a.length; p++) a[p](C, d, E, b);
        };
        return h = {
          time: 0,
          frame: 0,
          tick: function() {
            m(true);
          },
          deltaRatio: function(b) {
            return d / (1e3 / (b || 60));
          },
          wake: function() {
            ey && (!ah && Lp() && (bn = ah = window, Op = bn.document || {}, Or.gsap = vr, (bn.gsapVersions || (bn.gsapVersions = [])).push(vr.version), ty(su || bn.GreenSockGlobals || !bn.gsap && bn || {}), yy.forEach(vy)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && h.sleep(), c = u || function(b) {
              return setTimeout(b, s - h.time * 1e3 + 1 | 0);
            }, ul = 1, m(2));
          },
          sleep: function() {
            (u ? cancelAnimationFrame : clearTimeout)(l), ul = 0, c = ll;
          },
          lagSmoothing: function(b, y) {
            e = b || 1 / 0, t = Math.min(y || 33, e);
          },
          fps: function(b) {
            o = 1e3 / (b || 240), s = h.time * 1e3 + o;
          },
          add: function(b, y, w) {
            var v = y ? function(S, C, E, k) {
              b(S, C, E, k), h.remove(v);
            } : b;
            return h.remove(b), a[w ? "unshift" : "push"](v), Ds(), v;
          },
          remove: function(b, y) {
            ~(y = a.indexOf(b)) && a.splice(y, 1) && p >= y && p--;
          },
          _listeners: a
        }, h;
      }(), Ds = function() {
        return !ul && Ar.wake();
      }, we = {}, LE = /^[\d.\-M][\d.\-,\s]/, OE = /["']/g, DE = function(e) {
        for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], o = 1, s = n.length, a, l, c; o < s; o++) l = n[o], a = o !== s - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[i] = isNaN(c) ? c.replace(OE, "").trim() : +c, i = l.substr(a + 1).trim();
        return t;
      }, FE = function(e) {
        var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
        return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
      }, HE = function(e) {
        var t = (e + "").split("("), n = we[t[0]];
        return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [
          DE(t[1])
        ] : FE(e).split(",").map(sy)) : we._CE && LE.test(e) ? we._CE("", e) : n;
      }, Cy = function(e) {
        return function(t) {
          return 1 - e(1 - t);
        };
      }, ky = function r(e, t) {
        for (var n = e._first, i; n; ) n instanceof nr ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
      }, mo = function(e, t) {
        return e && (Ke(e) ? e : we[e] || HE(e)) || t;
      }, Oo = function(e, t, n, i) {
        n === void 0 && (n = function(l) {
          return 1 - t(1 - l);
        }), i === void 0 && (i = function(l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
        var o = {
          easeIn: t,
          easeOut: n,
          easeInOut: i
        }, s;
        return wr(e, function(a) {
          we[a] = Or[a] = o, we[s = a.toLowerCase()] = n;
          for (var l in o) we[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = we[a + "." + l] = o[l];
        }), o;
      }, Ry = function(e) {
        return function(t) {
          return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
        };
      }, Ud = function r(e, t, n) {
        var i = t >= 1 ? t : 1, o = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), s = o / oh * (Math.asin(1 / i) || 0), a = function(u) {
          return u === 1 ? 1 : i * Math.pow(2, -10 * u) * pE((u - s) * o) + 1;
        }, l = e === "out" ? a : e === "in" ? function(c) {
          return 1 - a(1 - c);
        } : Ry(a);
        return o = oh / o, l.config = function(c, u) {
          return r(e, c, u);
        }, l;
      }, $d = function r(e, t) {
        t === void 0 && (t = 1.70158);
        var n = function(s) {
          return s ? --s * s * ((t + 1) * s + t) + 1 : 0;
        }, i = e === "out" ? n : e === "in" ? function(o) {
          return 1 - n(1 - o);
        } : Ry(n);
        return i.config = function(o) {
          return r(e, o);
        }, i;
      };
      wr("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
        var t = e < 5 ? e + 1 : e;
        Oo(r + ",Power" + (t - 1), e ? function(n) {
          return Math.pow(n, t);
        } : function(n) {
          return n;
        }, function(n) {
          return 1 - Math.pow(1 - n, t);
        }, function(n) {
          return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
        });
      });
      we.Linear.easeNone = we.none = we.Linear.easeIn;
      Oo("Elastic", Ud("in"), Ud("out"), Ud());
      (function(r, e) {
        var t = 1 / e, n = 2 * t, i = 2.5 * t, o = function(a) {
          return a < t ? r * a * a : a < n ? r * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? r * (a -= 2.25 / e) * a + 0.9375 : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
        Oo("Bounce", function(s) {
          return 1 - o(1 - s);
        }, o);
      })(7.5625, 2.75);
      Oo("Expo", function(r) {
        return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
      });
      Oo("Circ", function(r) {
        return -(q1(1 - r * r) - 1);
      });
      Oo("Sine", function(r) {
        return r === 1 ? 1 : -hE(r * dE) + 1;
      });
      Oo("Back", $d("in"), $d("out"), $d());
      we.SteppedEase = we.steps = Or.SteppedEase = {
        config: function(e, t) {
          e === void 0 && (e = 1);
          var n = 1 / e, i = e + (t ? 0 : 1), o = t ? 1 : 0, s = 1 - Gt;
          return function(a) {
            return ((i * xl(0, s, a) | 0) + o) * n;
          };
        }
      };
      zs.ease = we["quad.out"];
      wr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
        return Hp += r + "," + r + "Params,";
      });
      var Ey = function(e, t) {
        this.id = fE++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : iy, this.set = t ? t.getSetter : Wp;
      }, dl = function() {
        function r(t) {
          this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Os(this, +t.duration, 1, 1), this.data = t.data, Fe && (this._ctx = Fe, Fe.data.push(this)), ul || Ar.wake();
        }
        var e = r.prototype;
        return e.delay = function(n) {
          return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
        }, e.duration = function(n) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
        }, e.totalDuration = function(n) {
          return arguments.length ? (this._dirty = 0, Os(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
        }, e.totalTime = function(n, i) {
          if (Ds(), !arguments.length) return this._tTime;
          var o = this._dp;
          if (o && o.smoothChildTiming && this._ts) {
            for (Zu(this, n), !o._dp || o.parent || cy(o, this); o && o.parent; ) o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, true), o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Cn(this._dp, this, this._start - this._delay);
          }
          return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Gt || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), oy(this, n, i)), this;
        }, e.time = function(n, i) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + aw(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
        }, e.totalProgress = function(n, i) {
          return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
        }, e.progress = function(n, i) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + aw(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
        }, e.iteration = function(n, i) {
          var o = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (n - 1) * o, i) : this._repeat ? Ls(this._tTime, o) + 1 : 1;
        }, e.timeScale = function(n, i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === n) return this;
          var o = this.parent && this._ts ? cu(this.parent._time, this) : this._tTime;
          return this._rts = +n || 0, this._ts = this._ps || n === -1e-8 ? 0 : this._rts, this.totalTime(xl(-Math.abs(this._delay), this._tDur, o), i !== false), Qu(this), bE(this);
        }, e.paused = function(n) {
          return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ds(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Gt && (this._tTime -= Gt)))), this) : this._ps;
        }, e.startTime = function(n) {
          if (arguments.length) {
            this._start = n;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && Cn(i, this, n - this._delay), this;
          }
          return this._start;
        }, e.endTime = function(n) {
          return this._start + (gr(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        }, e.rawTime = function(n) {
          var i = this.parent || this._dp;
          return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? cu(i.rawTime(n), this) : this._tTime : this._tTime;
        }, e.revert = function(n) {
          n === void 0 && (n = wE);
          var i = Mt;
          return Mt = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), Mt = i, this;
        }, e.globalTime = function(n) {
          for (var i = this, o = arguments.length ? n : i.rawTime(); i; ) o = i._start + o / (Math.abs(i._ts) || 1), i = i._dp;
          return !this.parent && this._sat ? this._sat.globalTime(n) : o;
        }, e.repeat = function(n) {
          return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, lw(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
        }, e.repeatDelay = function(n) {
          if (arguments.length) {
            var i = this._time;
            return this._rDelay = n, lw(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }, e.yoyo = function(n) {
          return arguments.length ? (this._yoyo = n, this) : this._yoyo;
        }, e.seek = function(n, i) {
          return this.totalTime($r(this, n), gr(i));
        }, e.restart = function(n, i) {
          return this.play().totalTime(n ? -this._delay : 0, gr(i)), this._dur || (this._zTime = -1e-8), this;
        }, e.play = function(n, i) {
          return n != null && this.seek(n, i), this.reversed(false).paused(false);
        }, e.reverse = function(n, i) {
          return n != null && this.seek(n || this.totalDuration(), i), this.reversed(true).paused(false);
        }, e.pause = function(n, i) {
          return n != null && this.seek(n, i), this.paused(true);
        }, e.resume = function() {
          return this.paused(false);
        }, e.reversed = function(n) {
          return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -1e-8 : 0)), this) : this._rts < 0;
        }, e.invalidate = function() {
          return this._initted = this._act = 0, this._zTime = -1e-8, this;
        }, e.isActive = function() {
          var n = this.parent || this._dp, i = this._start, o;
          return !!(!n || this._ts && this._initted && n.isActive() && (o = n.rawTime(true)) >= i && o < this.endTime(true) - Gt);
        }, e.eventCallback = function(n, i, o) {
          var s = this.vars;
          return arguments.length > 1 ? (i ? (s[n] = i, o && (s[n + "Params"] = o), n === "onUpdate" && (this._onUpdate = i)) : delete s[n], this) : s[n];
        }, e.then = function(n) {
          var i = this;
          return new Promise(function(o) {
            var s = Ke(n) ? n : ay, a = function() {
              var c = i.then;
              i.then = null, Ke(s) && (s = s(i)) && (s.then || s === i) && (i.then = c), o(s), i.then = c;
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
          });
        }, e.kill = function() {
          da(this);
        }, r;
      }();
      Dr(dl.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: false,
        _rts: 1
      });
      var nr = function(r) {
        X1(e, r);
        function e(n, i) {
          var o;
          return n === void 0 && (n = {}), o = r.call(this, n) || this, o.labels = {}, o.smoothChildTiming = !!n.smoothChildTiming, o.autoRemoveChildren = !!n.autoRemoveChildren, o._sort = gr(n.sortChildren), $e && Cn(n.parent || $e, Bn(o), i), n.reversed && o.reverse(), n.paused && o.paused(true), n.scrollTrigger && uy(Bn(o), n.scrollTrigger), o;
        }
        var t = e.prototype;
        return t.to = function(i, o, s) {
          return Ta(0, arguments, this), this;
        }, t.from = function(i, o, s) {
          return Ta(1, arguments, this), this;
        }, t.fromTo = function(i, o, s, a) {
          return Ta(2, arguments, this), this;
        }, t.set = function(i, o, s) {
          return o.duration = 0, o.parent = this, Pa(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new lt(i, o, $r(this, s), 1), this;
        }, t.call = function(i, o, s) {
          return Cn(this, lt.delayedCall(0, i, o), s);
        }, t.staggerTo = function(i, o, s, a, l, c, u) {
          return s.duration = o, s.stagger = s.stagger || a, s.onComplete = c, s.onCompleteParams = u, s.parent = this, new lt(i, s, $r(this, l)), this;
        }, t.staggerFrom = function(i, o, s, a, l, c, u) {
          return s.runBackwards = 1, Pa(s).immediateRender = gr(s.immediateRender), this.staggerTo(i, o, s, a, l, c, u);
        }, t.staggerFromTo = function(i, o, s, a, l, c, u, h) {
          return a.startAt = s, Pa(a).immediateRender = gr(a.immediateRender), this.staggerTo(i, o, a, l, c, u, h);
        }, t.render = function(i, o, s) {
          var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : ct(i), h = this._zTime < 0 != i < 0 && (this._initted || !c), d, p, m, g, b, y, w, v, S, C, E, k;
          if (this !== $e && u > l && i >= 0 && (u = l), u !== this._tTime || s || h) {
            if (a !== this._time && c && (u += this._time - a, i += this._time - a), d = u, S = this._start, v = this._ts, y = !v, h && (c || (a = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
              if (E = this._yoyo, b = c + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(b * 100 + i, o, s);
              if (d = ct(u % b), u === l ? (g = this._repeat, d = c) : (C = ct(u / b), g = ~~C, g && g === C && (d = c, g--), d > c && (d = c)), C = Ls(this._tTime, b), !a && this._tTime && C !== g && this._tTime - C * b - this._dur <= 0 && (C = g), E && g & 1 && (d = c - d, k = 1), g !== C && !this._lock) {
                var T = E && C & 1, I = T === (E && g & 1);
                if (g < C && (T = !T), a = T ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (k ? 0 : ct(g * b)), o, !c)._lock = 0, this._tTime = u, !o && this.parent && Ir(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (c = this._dur, l = this._tDur, I && (this._lock = 2, a = T ? c : -1e-4, this.render(a, true), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
                ky(this, k);
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (w = kE(this, ct(a), ct(d)), w && (u -= d - (d = w._start))), this._tTime = u, this._time = d, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && d && !o && !g && (Ir(this, "onStart"), this._tTime !== u)) return this;
            if (d >= a && i >= 0) for (p = this._first; p; ) {
              if (m = p._next, (p._act || d >= p._start) && p._ts && w !== p) {
                if (p.parent !== this) return this.render(i, o, s);
                if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, o, s), d !== this._time || !this._ts && !y) {
                  w = 0, m && (u += this._zTime = -1e-8);
                  break;
                }
              }
              p = m;
            }
            else {
              p = this._last;
              for (var M = i < 0 ? i : d; p; ) {
                if (m = p._prev, (p._act || M <= p._end) && p._ts && w !== p) {
                  if (p.parent !== this) return this.render(i, o, s);
                  if (p.render(p._ts > 0 ? (M - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (M - p._start) * p._ts, o, s || Mt && (p._initted || p._startAt)), d !== this._time || !this._ts && !y) {
                    w = 0, m && (u += this._zTime = M ? -1e-8 : Gt);
                    break;
                  }
                }
                p = m;
              }
            }
            if (w && !o && (this.pause(), w.render(d >= a ? 0 : -1e-8)._zTime = d >= a ? 1 : -1, this._ts)) return this._start = S, Qu(this), this.render(i, o, s);
            this._onUpdate && !o && Ir(this, "onUpdate", true), (u === l && this._tTime >= this.totalDuration() || !u && a) && (S === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Bi(this, 1), !o && !(i < 0 && !a) && (u || a || !l) && (Ir(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
          }
          return this;
        }, t.add = function(i, o) {
          var s = this;
          if (ii(o) || (o = $r(this, o, i)), !(i instanceof dl)) {
            if (Yt(i)) return i.forEach(function(a) {
              return s.add(a, o);
            }), this;
            if (kt(i)) return this.addLabel(i, o);
            if (Ke(i)) i = lt.delayedCall(0, i);
            else return this;
          }
          return this !== i ? Cn(this, i, o) : this;
        }, t.getChildren = function(i, o, s, a) {
          i === void 0 && (i = true), o === void 0 && (o = true), s === void 0 && (s = true), a === void 0 && (a = -1e8);
          for (var l = [], c = this._first; c; ) c._start >= a && (c instanceof lt ? o && l.push(c) : (s && l.push(c), i && l.push.apply(l, c.getChildren(true, o, s)))), c = c._next;
          return l;
        }, t.getById = function(i) {
          for (var o = this.getChildren(1, 1, 1), s = o.length; s--; ) if (o[s].vars.id === i) return o[s];
        }, t.remove = function(i) {
          return kt(i) ? this.removeLabel(i) : Ke(i) ? this.killTweensOf(i) : (i.parent === this && Ju(this, i), i === this._recent && (this._recent = this._last), wo(this));
        }, t.totalTime = function(i, o) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ct(Ar.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime;
        }, t.addLabel = function(i, o) {
          return this.labels[i] = $r(this, o), this;
        }, t.removeLabel = function(i) {
          return delete this.labels[i], this;
        }, t.addPause = function(i, o, s) {
          var a = lt.delayedCall(0, o || ll, s);
          return a.data = "isPause", this._hasPause = 1, Cn(this, a, $r(this, i));
        }, t.removePause = function(i) {
          var o = this._first;
          for (i = $r(this, i); o; ) o._start === i && o.data === "isPause" && Bi(o), o = o._next;
        }, t.killTweensOf = function(i, o, s) {
          for (var a = this.getTweensOf(i, s), l = a.length; l--; ) bi !== a[l] && a[l].kill(i, o);
          return this;
        }, t.getTweensOf = function(i, o) {
          for (var s = [], a = qr(i), l = this._first, c = ii(o), u; l; ) l instanceof lt ? mE(l._targets, a) && (c ? (!bi || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && s.push(l) : (u = l.getTweensOf(a, o)).length && s.push.apply(s, u), l = l._next;
          return s;
        }, t.tweenTo = function(i, o) {
          o = o || {};
          var s = this, a = $r(s, i), l = o, c = l.startAt, u = l.onStart, h = l.onStartParams, d = l.immediateRender, p, m = lt.to(s, Dr({
            ease: o.ease || "none",
            lazy: false,
            immediateRender: false,
            time: a,
            overwrite: "auto",
            duration: o.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale()) || Gt,
            onStart: function() {
              if (s.pause(), !p) {
                var b = o.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale());
                m._dur !== b && Os(m, b, 0, 1).render(m._time, true, true), p = 1;
              }
              u && u.apply(m, h || []);
            }
          }, o));
          return d ? m.render(0) : m;
        }, t.tweenFromTo = function(i, o, s) {
          return this.tweenTo(o, Dr({
            startAt: {
              time: $r(this, i)
            }
          }, s));
        }, t.recent = function() {
          return this._recent;
        }, t.nextLabel = function(i) {
          return i === void 0 && (i = this._time), cw(this, $r(this, i));
        }, t.previousLabel = function(i) {
          return i === void 0 && (i = this._time), cw(this, $r(this, i), 1);
        }, t.currentLabel = function(i) {
          return arguments.length ? this.seek(i, true) : this.previousLabel(this._time + Gt);
        }, t.shiftChildren = function(i, o, s) {
          s === void 0 && (s = 0);
          for (var a = this._first, l = this.labels, c; a; ) a._start >= s && (a._start += i, a._end += i), a = a._next;
          if (o) for (c in l) l[c] >= s && (l[c] += i);
          return wo(this);
        }, t.invalidate = function(i) {
          var o = this._first;
          for (this._lock = 0; o; ) o.invalidate(i), o = o._next;
          return r.prototype.invalidate.call(this, i);
        }, t.clear = function(i) {
          i === void 0 && (i = true);
          for (var o = this._first, s; o; ) s = o._next, this.remove(o), o = s;
          return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), wo(this);
        }, t.totalDuration = function(i) {
          var o = 0, s = this, a = s._last, l = jn, c, u, h;
          if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
          if (s._dirty) {
            for (h = s.parent; a; ) c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && s._sort && a._ts && !s._lock ? (s._lock = 1, Cn(s, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (o -= u, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += u / s._ts, s._time -= u, s._tTime -= u), s.shiftChildren(-u, false, -1 / 0), l = 0), a._end > o && a._ts && (o = a._end), a = c;
            Os(s, s === $e && s._time > o ? s._time : o, 1, 1), s._dirty = 0;
          }
          return s._tDur;
        }, e.updateRoot = function(i) {
          if ($e._ts && (oy($e, cu(i, $e)), ny = Ar.frame), Ar.frame >= ow) {
            ow += Nr.autoSleep || 120;
            var o = $e._first;
            if ((!o || !o._ts) && Nr.autoSleep && Ar._listeners.length < 2) {
              for (; o && !o._ts; ) o = o._next;
              o || Ar.sleep();
            }
          }
        }, e;
      }(dl);
      Dr(nr.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var BE = function(e, t, n, i, o, s, a) {
        var l = new mr(this._pt, e, t, 0, 1, Iy, null, o), c = 0, u = 0, h, d, p, m, g, b, y, w;
        for (l.b = n, l.e = i, n += "", i += "", (y = ~i.indexOf("random(")) && (i = cl(i)), s && (w = [
          n,
          i
        ], s(w, e, t), n = w[0], i = w[1]), d = n.match(Fd) || []; h = Fd.exec(i); ) m = h[0], g = i.substring(c, h.index), p ? p = (p + 1) % 5 : g.substr(-5) === "rgba(" && (p = 1), m !== d[u++] && (b = parseFloat(d[u - 1]) || 0, l._pt = {
          _next: l._pt,
          p: g || u === 1 ? g : ",",
          s: b,
          c: m.charAt(1) === "=" ? vs(b, m) - b : parseFloat(m) - b,
          m: p && p < 4 ? Math.round : 0
        }, c = Fd.lastIndex);
        return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (Q1.test(i) || y) && (l.e = 0), this._pt = l, l;
      }, Up = function(e, t, n, i, o, s, a, l, c, u) {
        Ke(i) && (i = i(o || 0, e, s));
        var h = e[t], d = n !== "get" ? n : Ke(h) ? c ? e[t.indexOf("set") || !Ke(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : h, p = Ke(h) ? c ? GE : jy : Vp, m;
        if (kt(i) && (~i.indexOf("random(") && (i = cl(i)), i.charAt(1) === "=" && (m = vs(d, i) + (Vt(d) || 0), (m || m === 0) && (i = m))), !u || d !== i || ph) return !isNaN(d * i) && i !== "" ? (m = new mr(this._pt, e, t, +d || 0, i - (d || 0), typeof h == "boolean" ? XE : My, 0, p), c && (m.fp = c), a && m.modifier(a, this, e), this._pt = m) : (!h && !(t in e) && Dp(t, i), BE.call(this, e, t, d, i, p, l || Nr.stringFilter, c));
      }, UE = function(e, t, n, i, o) {
        if (Ke(e) && (e = Aa(e, o, t, n, i)), !zn(e) || e.style && e.nodeType || Yt(e) || K1(e)) return kt(e) ? Aa(e, o, t, n, i) : e;
        var s = {}, a;
        for (a in e) s[a] = Aa(e[a], o, t, n, i);
        return s;
      }, Py = function(e, t, n, i, o, s) {
        var a, l, c, u;
        if (Pr[e] && (a = new Pr[e]()).init(o, a.rawVars ? t[e] : UE(t[e], i, o, s, n), n, i, s) !== false && (n._pt = l = new mr(n._pt, o, e, 0, 1, a.render, a, 0, a.priority), n !== fs)) for (c = n._ptLookup[n._targets.indexOf(o)], u = a._props.length; u--; ) c[a._props[u]] = l;
        return a;
      }, bi, ph, $p = function r(e, t, n) {
        var i = e.vars, o = i.ease, s = i.startAt, a = i.immediateRender, l = i.lazy, c = i.onUpdate, u = i.runBackwards, h = i.yoyoEase, d = i.keyframes, p = i.autoRevert, m = e._dur, g = e._startAt, b = e._targets, y = e.parent, w = y && y.data === "nested" ? y.vars.targets : b, v = e._overwrite === "auto" && !zp, S = e.timeline, C, E, k, T, I, M, H, O, Z, $, U, X, W;
        if (S && (!d || !o) && (o = "none"), e._ease = mo(o, zs.ease), e._yEase = h ? Cy(mo(h === true ? o : h, zs.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !S && !!i.runBackwards, !S || d && !i.stagger) {
          if (O = b[0] ? go(b[0]).harness : 0, X = O && i[O.prop], C = lu(i, Fp), g && (g._zTime < 0 && g.progress(1), t < 0 && u && a && !p ? g.render(-1, true) : g.revert(u && m ? bc : gE), g._lazy = 0), s) {
            if (Bi(e._startAt = lt.set(b, Dr({
              data: "isStart",
              overwrite: false,
              parent: y,
              immediateRender: true,
              lazy: !g && gr(l),
              startAt: null,
              delay: 0,
              onUpdate: c && function() {
                return Ir(e, "onUpdate");
              },
              stagger: 0
            }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Mt || !a && !p) && e._startAt.revert(bc), a && m && t <= 0 && n <= 0) {
              t && (e._zTime = t);
              return;
            }
          } else if (u && m && !g) {
            if (t && (a = false), k = Dr({
              overwrite: false,
              data: "isFromStart",
              lazy: a && !g && gr(l),
              immediateRender: a,
              stagger: 0,
              parent: y
            }, C), X && (k[O.prop] = X), Bi(e._startAt = lt.set(b, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Mt ? e._startAt.revert(bc) : e._startAt.render(-1, true)), e._zTime = t, !a) r(e._startAt, Gt, Gt);
            else if (!t) return;
          }
          for (e._pt = e._ptCache = 0, l = m && gr(l) || l && !m, E = 0; E < b.length; E++) {
            if (I = b[E], H = I._gsap || Bp(b)[E]._gsap, e._ptLookup[E] = $ = {}, lh[H.id] && zi.length && au(), U = w === b ? E : w.indexOf(I), O && (Z = new O()).init(I, X || C, e, U, w) !== false && (e._pt = T = new mr(e._pt, I, Z.name, 0, 1, Z.render, Z, 0, Z.priority), Z._props.forEach(function(N) {
              $[N] = T;
            }), Z.priority && (M = 1)), !O || X) for (k in C) Pr[k] && (Z = Py(k, C, e, U, I, w)) ? Z.priority && (M = 1) : $[k] = T = Up.call(e, I, k, "get", C[k], U, w, 0, i.stringFilter);
            e._op && e._op[E] && e.kill(I, e._op[E]), v && e._pt && (bi = e, $e.killTweensOf(I, $, e.globalTime(t)), W = !e.parent, bi = 0), e._pt && l && (lh[H.id] = 1);
          }
          M && zy(e), e._onInit && e._onInit(e);
        }
        e._onUpdate = c, e._initted = (!e._op || e._pt) && !W, d && t <= 0 && S.render(jn, true, true);
      }, $E = function(e, t, n, i, o, s, a, l) {
        var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, h, d, p;
        if (!c) for (c = e._ptCache[t] = [], d = e._ptLookup, p = e._targets.length; p--; ) {
          if (u = d[p][t], u && u.d && u.d._pt) for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
          if (!u) return ph = 1, e.vars[t] = "+=0", $p(e, a), ph = 0, l ? al(t + " not eligible for reset") : 1;
          c.push(u);
        }
        for (p = c.length; p--; ) h = c[p], u = h._pt || h, u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + s * u.c, u.c = n - u.s, h.e && (h.e = et(n) + Vt(h.e)), h.b && (h.b = u.s + Vt(h.b));
      }, VE = function(e, t) {
        var n = e[0] ? go(e[0]).harness : 0, i = n && n.aliases, o, s, a, l;
        if (!i) return t;
        o = Ns({}, t);
        for (s in i) if (s in o) for (l = i[s].split(","), a = l.length; a--; ) o[l[a]] = o[s];
        return o;
      }, WE = function(e, t, n, i) {
        var o = t.ease || i || "power1.inOut", s, a;
        if (Yt(t)) a = n[e] || (n[e] = []), t.forEach(function(l, c) {
          return a.push({
            t: c / (t.length - 1) * 100,
            v: l,
            e: o
          });
        });
        else for (s in t) a = n[s] || (n[s] = []), s === "ease" || a.push({
          t: parseFloat(e),
          v: t[s],
          e: o
        });
      }, Aa = function(e, t, n, i, o) {
        return Ke(e) ? e.call(t, n, i, o) : kt(e) && ~e.indexOf("random(") ? cl(e) : e;
      }, Ty = Hp + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ay = {};
      wr(Ty + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
        return Ay[r] = 1;
      });
      var lt = function(r) {
        X1(e, r);
        function e(n, i, o, s) {
          var a;
          typeof i == "number" && (o.duration = i, i = o, o = null), a = r.call(this, s ? i : Pa(i)) || this;
          var l = a.vars, c = l.duration, u = l.delay, h = l.immediateRender, d = l.stagger, p = l.overwrite, m = l.keyframes, g = l.defaults, b = l.scrollTrigger, y = l.yoyoEase, w = i.parent || $e, v = (Yt(n) || K1(n) ? ii(n[0]) : "length" in i) ? [
            n
          ] : qr(n), S, C, E, k, T, I, M, H;
          if (a._targets = v.length ? Bp(v) : al("GSAP target " + n + " not found. https://gsap.com", !Nr.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, m || d || ql(c) || ql(u)) {
            if (i = a.vars, S = a.timeline = new nr({
              data: "nested",
              defaults: g || {},
              targets: w && w.data === "nested" ? w.vars.targets : v
            }), S.kill(), S.parent = S._dp = Bn(a), S._start = 0, d || ql(c) || ql(u)) {
              if (k = v.length, M = d && py(d), zn(d)) for (T in d) ~Ty.indexOf(T) && (H || (H = {}), H[T] = d[T]);
              for (C = 0; C < k; C++) E = lu(i, Ay), E.stagger = 0, y && (E.yoyoEase = y), H && Ns(E, H), I = v[C], E.duration = +Aa(c, Bn(a), C, I, v), E.delay = (+Aa(u, Bn(a), C, I, v) || 0) - a._delay, !d && k === 1 && E.delay && (a._delay = u = E.delay, a._start += u, E.delay = 0), S.to(I, E, M ? M(C, I, v) : 0), S._ease = we.none;
              S.duration() ? c = u = 0 : a.timeline = 0;
            } else if (m) {
              Pa(Dr(S.vars.defaults, {
                ease: "none"
              })), S._ease = mo(m.ease || i.ease || "none");
              var O = 0, Z, $, U;
              if (Yt(m)) m.forEach(function(X) {
                return S.to(v, X, ">");
              }), S.duration();
              else {
                E = {};
                for (T in m) T === "ease" || T === "easeEach" || WE(T, m[T], E, m.easeEach);
                for (T in E) for (Z = E[T].sort(function(X, W) {
                  return X.t - W.t;
                }), O = 0, C = 0; C < Z.length; C++) $ = Z[C], U = {
                  ease: $.e,
                  duration: ($.t - (C ? Z[C - 1].t : 0)) / 100 * c
                }, U[T] = $.v, S.to(v, U, O), O += U.duration;
                S.duration() < c && S.to({}, {
                  duration: c - S.duration()
                });
              }
            }
            c || a.duration(c = S.duration());
          } else a.timeline = 0;
          return p === true && !zp && (bi = Bn(a), $e.killTweensOf(v), bi = 0), Cn(w, Bn(a), o), i.reversed && a.reverse(), i.paused && a.paused(true), (h || !c && !m && a._start === ct(w._time) && gr(h) && SE(Bn(a)) && w.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -u) || 0)), b && uy(Bn(a), b), a;
        }
        var t = e.prototype;
        return t.render = function(i, o, s) {
          var a = this._time, l = this._tDur, c = this._dur, u = i < 0, h = i > l - Gt && !u ? l : i < Gt ? 0 : i, d, p, m, g, b, y, w, v, S;
          if (!c) CE(this, i, o, s);
          else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
            if (d = h, v = this.timeline, this._repeat) {
              if (g = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(g * 100 + i, o, s);
              if (d = ct(h % g), h === l ? (m = this._repeat, d = c) : (b = ct(h / g), m = ~~b, m && m === b ? (d = c, m--) : d > c && (d = c)), y = this._yoyo && m & 1, y && (S = this._yEase, d = c - d), b = Ls(this._tTime, g), d === a && !s && this._initted && m === b) return this._tTime = h, this;
              m !== b && (v && this._yEase && ky(v, y), this.vars.repeatRefresh && !y && !this._lock && d !== g && this._initted && (this._lock = s = 1, this.render(ct(g * m), true).invalidate()._lock = 0));
            }
            if (!this._initted) {
              if (dy(this, u ? i : d, s, o, h)) return this._tTime = 0, this;
              if (a !== this._time && !(s && this.vars.repeatRefresh && m !== b)) return this;
              if (c !== this._dur) return this.render(i, o, s);
            }
            if (this._tTime = h, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = w = (S || this._ease)(d / c), this._from && (this.ratio = w = 1 - w), d && !a && !o && !m && (Ir(this, "onStart"), this._tTime !== h)) return this;
            for (p = this._pt; p; ) p.r(w, p.d), p = p._next;
            v && v.render(i < 0 ? i : v._dur * v._ease(d / this._dur), o, s) || this._startAt && (this._zTime = i), this._onUpdate && !o && (u && ch(this, i, o, s), Ir(this, "onUpdate")), this._repeat && m !== b && this.vars.onRepeat && !o && this.parent && Ir(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && ch(this, i, true, true), (i || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Bi(this, 1), !o && !(u && !a) && (h || a || y) && (Ir(this, h === l ? "onComplete" : "onReverseComplete", true), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
          }
          return this;
        }, t.targets = function() {
          return this._targets;
        }, t.invalidate = function(i) {
          return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
        }, t.resetTo = function(i, o, s, a, l) {
          ul || Ar.wake(), this._ts || this.play();
          var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
          return this._initted || $p(this, c), u = this._ease(c / this._dur), $E(this, i, o, s, a, u, c, l) ? this.resetTo(i, o, s, a, 1) : (Zu(this, 0), this.parent || ly(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
        }, t.kill = function(i, o) {
          if (o === void 0 && (o = "all"), !i && (!o || o === "all")) return this._lazy = this._pt = 0, this.parent ? da(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Mt), this;
          if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, o, bi && bi.vars.overwrite !== true)._first || da(this), this.parent && s !== this.timeline.totalDuration() && Os(this, this._dur * this.timeline._tDur / s, 0, 1), this;
          }
          var a = this._targets, l = i ? qr(i) : a, c = this._ptLookup, u = this._pt, h, d, p, m, g, b, y;
          if ((!o || o === "all") && vE(a, l)) return o === "all" && (this._pt = 0), da(this);
          for (h = this._op = this._op || [], o !== "all" && (kt(o) && (g = {}, wr(o, function(w) {
            return g[w] = 1;
          }), o = g), o = VE(a, o)), y = a.length; y--; ) if (~l.indexOf(a[y])) {
            d = c[y], o === "all" ? (h[y] = o, m = d, p = {}) : (p = h[y] = h[y] || {}, m = o);
            for (g in m) b = d && d[g], b && ((!("kill" in b.d) || b.d.kill(g) === true) && Ju(this, b, "_pt"), delete d[g]), p !== "all" && (p[g] = 1);
          }
          return this._initted && !this._pt && u && da(this), this;
        }, e.to = function(i, o) {
          return new e(i, o, arguments[2]);
        }, e.from = function(i, o) {
          return Ta(1, arguments);
        }, e.delayedCall = function(i, o, s, a) {
          return new e(o, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: i,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
          });
        }, e.fromTo = function(i, o, s) {
          return Ta(2, arguments);
        }, e.set = function(i, o) {
          return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o);
        }, e.killTweensOf = function(i, o, s) {
          return $e.killTweensOf(i, o, s);
        }, e;
      }(dl);
      Dr(lt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });
      wr("staggerTo,staggerFrom,staggerFromTo", function(r) {
        lt[r] = function() {
          var e = new nr(), t = dh.call(arguments, 0);
          return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
        };
      });
      var Vp = function(e, t, n) {
        return e[t] = n;
      }, jy = function(e, t, n) {
        return e[t](n);
      }, GE = function(e, t, n, i) {
        return e[t](i.fp, n);
      }, YE = function(e, t, n) {
        return e.setAttribute(t, n);
      }, Wp = function(e, t) {
        return Ke(e[t]) ? jy : Np(e[t]) && e.setAttribute ? YE : Vp;
      }, My = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
      }, XE = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      }, Iy = function(e, t) {
        var n = t._pt, i = "";
        if (!e && t.b) i = t.b;
        else if (e === 1 && t.e) i = t.e;
        else {
          for (; n; ) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
          i += t.c;
        }
        t.set(t.t, t.p, i, t);
      }, Gp = function(e, t) {
        for (var n = t._pt; n; ) n.r(e, n.d), n = n._next;
      }, qE = function(e, t, n, i) {
        for (var o = this._pt, s; o; ) s = o._next, o.p === i && o.modifier(e, t, n), o = s;
      }, KE = function(e) {
        for (var t = this._pt, n, i; t; ) i = t._next, t.p === e && !t.op || t.op === e ? Ju(this, t, "_pt") : t.dep || (n = 1), t = i;
        return !n;
      }, JE = function(e, t, n, i) {
        i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
      }, zy = function(e) {
        for (var t = e._pt, n, i, o, s; t; ) {
          for (n = t._next, i = o; i && i.pr > t.pr; ) i = i._next;
          (t._prev = i ? i._prev : s) ? t._prev._next = t : o = t, (t._next = i) ? i._prev = t : s = t, t = n;
        }
        e._pt = o;
      }, mr = function() {
        function r(t, n, i, o, s, a, l, c, u) {
          this.t = n, this.s = o, this.c = s, this.p = i, this.r = a || My, this.d = l || this, this.set = c || Vp, this.pr = u || 0, this._next = t, t && (t._prev = this);
        }
        var e = r.prototype;
        return e.modifier = function(n, i, o) {
          this.mSet = this.mSet || this.set, this.set = JE, this.m = n, this.mt = o, this.tween = i;
        }, r;
      }();
      wr(Hp + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
        return Fp[r] = 1;
      });
      Or.TweenMax = Or.TweenLite = lt;
      Or.TimelineLite = Or.TimelineMax = nr;
      $e = new nr({
        sortChildren: false,
        defaults: zs,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      Nr.stringFilter = xy;
      var yo = [], xc = {}, QE = [], dw = 0, ZE = 0, Vd = function(e) {
        return (xc[e] || QE).map(function(t) {
          return t();
        });
      }, _h = function() {
        var e = Date.now(), t = [];
        e - dw > 2 && (Vd("matchMediaInit"), yo.forEach(function(n) {
          var i = n.queries, o = n.conditions, s, a, l, c;
          for (a in i) s = bn.matchMedia(i[a]).matches, s && (l = 1), s !== o[a] && (o[a] = s, c = 1);
          c && (n.revert(), l && t.push(n));
        }), Vd("matchMediaRevert"), t.forEach(function(n) {
          return n.onMatch(n, function(i) {
            return n.add(null, i);
          });
        }), dw = e, Vd("matchMedia"));
      }, Ny = function() {
        function r(t, n) {
          this.selector = n && fh(n), this.data = [], this._r = [], this.isReverted = false, this.id = ZE++, t && this.add(t);
        }
        var e = r.prototype;
        return e.add = function(n, i, o) {
          Ke(n) && (o = i, i = n, n = Ke);
          var s = this, a = function() {
            var c = Fe, u = s.selector, h;
            return c && c !== s && c.data.push(s), o && (s.selector = fh(o)), Fe = s, h = i.apply(s, arguments), Ke(h) && s._r.push(h), Fe = c, s.selector = u, s.isReverted = false, h;
          };
          return s.last = a, n === Ke ? a(s, function(l) {
            return s.add(null, l);
          }) : n ? s[n] = a : a;
        }, e.ignore = function(n) {
          var i = Fe;
          Fe = null, n(this), Fe = i;
        }, e.getTweens = function() {
          var n = [];
          return this.data.forEach(function(i) {
            return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof lt && !(i.parent && i.parent.data === "nested") && n.push(i);
          }), n;
        }, e.clear = function() {
          this._r.length = this.data.length = 0;
        }, e.kill = function(n, i) {
          var o = this;
          if (n ? function() {
            for (var a = o.getTweens(), l = o.data.length, c; l--; ) c = o.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(true, true, false).forEach(function(u) {
              return a.splice(a.indexOf(u), 1);
            }));
            for (a.map(function(u) {
              return {
                g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
                t: u
              };
            }).sort(function(u, h) {
              return h.g - u.g || -1 / 0;
            }).forEach(function(u) {
              return u.t.revert(n);
            }), l = o.data.length; l--; ) c = o.data[l], c instanceof nr ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof lt) && c.revert && c.revert(n);
            o._r.forEach(function(u) {
              return u(n, o);
            }), o.isReverted = true;
          }() : this.data.forEach(function(a) {
            return a.kill && a.kill();
          }), this.clear(), i) for (var s = yo.length; s--; ) yo[s].id === this.id && yo.splice(s, 1);
        }, e.revert = function(n) {
          this.kill(n || {});
        }, r;
      }(), e7 = function() {
        function r(t) {
          this.contexts = [], this.scope = t, Fe && Fe.data.push(this);
        }
        var e = r.prototype;
        return e.add = function(n, i, o) {
          zn(n) || (n = {
            matches: n
          });
          var s = new Ny(0, o || this.scope), a = s.conditions = {}, l, c, u;
          Fe && !s.selector && (s.selector = Fe.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = n;
          for (c in n) c === "all" ? u = 1 : (l = bn.matchMedia(n[c]), l && (yo.indexOf(s) < 0 && yo.push(s), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(_h) : l.addEventListener("change", _h)));
          return u && i(s, function(h) {
            return s.add(null, h);
          }), this;
        }, e.revert = function(n) {
          this.kill(n || {});
        }, e.kill = function(n) {
          this.contexts.forEach(function(i) {
            return i.kill(n, true);
          });
        }, r;
      }(), uu = {
        registerPlugin: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          t.forEach(function(i) {
            return vy(i);
          });
        },
        timeline: function(e) {
          return new nr(e);
        },
        getTweensOf: function(e, t) {
          return $e.getTweensOf(e, t);
        },
        getProperty: function(e, t, n, i) {
          kt(e) && (e = qr(e)[0]);
          var o = go(e || {}).get, s = n ? ay : sy;
          return n === "native" && (n = ""), e && (t ? s((Pr[t] && Pr[t].get || o)(e, t, n, i)) : function(a, l, c) {
            return s((Pr[a] && Pr[a].get || o)(e, a, l, c));
          });
        },
        quickSetter: function(e, t, n) {
          if (e = qr(e), e.length > 1) {
            var i = e.map(function(u) {
              return vr.quickSetter(u, t, n);
            }), o = i.length;
            return function(u) {
              for (var h = o; h--; ) i[h](u);
            };
          }
          e = e[0] || {};
          var s = Pr[t], a = go(e), l = a.harness && (a.harness.aliases || {})[t] || t, c = s ? function(u) {
            var h = new s();
            fs._pt = 0, h.init(e, n ? u + n : u, fs, 0, [
              e
            ]), h.render(1, h), fs._pt && Gp(1, fs);
          } : a.set(e, l);
          return s ? c : function(u) {
            return c(e, l, n ? u + n : u, a, 1);
          };
        },
        quickTo: function(e, t, n) {
          var i, o = vr.to(e, Dr((i = {}, i[t] = "+=0.1", i.paused = true, i.stagger = 0, i), n || {})), s = function(l, c, u) {
            return o.resetTo(t, l, c, u);
          };
          return s.tween = o, s;
        },
        isTweening: function(e) {
          return $e.getTweensOf(e, true).length > 0;
        },
        defaults: function(e) {
          return e && e.ease && (e.ease = mo(e.ease, zs.ease)), sw(zs, e || {});
        },
        config: function(e) {
          return sw(Nr, e || {});
        },
        registerEffect: function(e) {
          var t = e.name, n = e.effect, i = e.plugins, o = e.defaults, s = e.extendTimeline;
          (i || "").split(",").forEach(function(a) {
            return a && !Pr[a] && !Or[a] && al(t + " effect requires " + a + " plugin.");
          }), Hd[t] = function(a, l, c) {
            return n(qr(a), Dr(l || {}, o), c);
          }, s && (nr.prototype[t] = function(a, l, c) {
            return this.add(Hd[t](a, zn(l) ? l : (c = l) && {}, this), c);
          });
        },
        registerEase: function(e, t) {
          we[e] = mo(t);
        },
        parseEase: function(e, t) {
          return arguments.length ? mo(e, t) : we;
        },
        getById: function(e) {
          return $e.getById(e);
        },
        exportRoot: function(e, t) {
          e === void 0 && (e = {});
          var n = new nr(e), i, o;
          for (n.smoothChildTiming = gr(e.smoothChildTiming), $e.remove(n), n._dp = 0, n._time = n._tTime = $e._time, i = $e._first; i; ) o = i._next, (t || !(!i._dur && i instanceof lt && i.vars.onComplete === i._targets[0])) && Cn(n, i, i._start - i._delay), i = o;
          return Cn($e, n, 0), n;
        },
        context: function(e, t) {
          return e ? new Ny(e, t) : Fe;
        },
        matchMedia: function(e) {
          return new e7(e);
        },
        matchMediaRefresh: function() {
          return yo.forEach(function(e) {
            var t = e.conditions, n, i;
            for (i in t) t[i] && (t[i] = false, n = 1);
            n && e.revert();
          }) || _h();
        },
        addEventListener: function(e, t) {
          var n = xc[e] || (xc[e] = []);
          ~n.indexOf(t) || n.push(t);
        },
        removeEventListener: function(e, t) {
          var n = xc[e], i = n && n.indexOf(t);
          i >= 0 && n.splice(i, 1);
        },
        utils: {
          wrap: ME,
          wrapYoyo: IE,
          distribute: py,
          random: gy,
          snap: _y,
          normalize: jE,
          getUnit: Vt,
          clamp: EE,
          splitColor: by,
          toArray: qr,
          selector: fh,
          mapRange: my,
          pipe: TE,
          unitize: AE,
          interpolate: zE,
          shuffle: hy
        },
        install: ty,
        effects: Hd,
        ticker: Ar,
        updateRoot: nr.updateRoot,
        plugins: Pr,
        globalTimeline: $e,
        core: {
          PropTween: mr,
          globals: ry,
          Tween: lt,
          Timeline: nr,
          Animation: dl,
          getCache: go,
          _removeLinkedListItem: Ju,
          reverting: function() {
            return Mt;
          },
          context: function(e) {
            return e && Fe && (Fe.data.push(e), e._ctx = Fe), Fe;
          },
          suppressOverwrites: function(e) {
            return zp = e;
          }
        }
      };
      wr("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
        return uu[r] = lt[r];
      });
      Ar.add(nr.updateRoot);
      fs = uu.to({}, {
        duration: 0
      });
      var t7 = function(e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; ) n = n._next;
        return n;
      }, r7 = function(e, t) {
        var n = e._targets, i, o, s;
        for (i in t) for (o = n.length; o--; ) s = e._ptLookup[o][i], s && (s = s.d) && (s._pt && (s = t7(s, i)), s && s.modifier && s.modifier(t[i], e, n[o], i));
      }, Wd = function(e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function(i, o, s) {
            s._onInit = function(a) {
              var l, c;
              if (kt(o) && (l = {}, wr(o, function(u) {
                return l[u] = 1;
              }), o = l), t) {
                l = {};
                for (c in o) l[c] = t(o[c]);
                o = l;
              }
              r7(a, o);
            };
          }
        };
      }, vr = uu.registerPlugin({
        name: "attr",
        init: function(e, t, n, i, o) {
          var s, a, l;
          this.tween = n;
          for (s in t) l = e.getAttribute(s) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[s], i, o, 0, 0, s), a.op = s, a.b = l, this._props.push(s);
        },
        render: function(e, t) {
          for (var n = t._pt; n; ) Mt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
        }
      }, {
        name: "endArray",
        init: function(e, t) {
          for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        }
      }, Wd("roundProps", hh), Wd("modifiers"), Wd("snap", _y)) || uu;
      lt.version = nr.version = vr.version = "3.12.7";
      ey = 1;
      Lp() && Ds();
      we.Power0;
      we.Power1;
      we.Power2;
      we.Power3;
      we.Power4;
      we.Linear;
      we.Quad;
      we.Cubic;
      we.Quart;
      we.Quint;
      we.Strong;
      we.Elastic;
      we.Back;
      we.SteppedEase;
      we.Bounce;
      we.Sine;
      we.Expo;
      we.Circ;
      var fw, Si, bs, Yp, uo, hw, Xp, n7 = function() {
        return typeof window < "u";
      }, oi = {}, no = 180 / Math.PI, Ss = Math.PI / 180, $o = Math.atan2, pw = 1e8, qp = /([A-Z])/g, i7 = /(left|right|width|margin|padding|x)/i, o7 = /[\s,\(]\S/, kn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      }, gh = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
      }, s7 = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
      }, a7 = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
      }, l7 = function(e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
      }, Ly = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      }, Oy = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
      }, c7 = function(e, t, n) {
        return e.style[t] = n;
      }, u7 = function(e, t, n) {
        return e.style.setProperty(t, n);
      }, d7 = function(e, t, n) {
        return e._gsap[t] = n;
      }, f7 = function(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n;
      }, h7 = function(e, t, n, i, o) {
        var s = e._gsap;
        s.scaleX = s.scaleY = n, s.renderTransform(o, s);
      }, p7 = function(e, t, n, i, o) {
        var s = e._gsap;
        s[t] = n, s.renderTransform(o, s);
      }, Ve = "transform", yr = Ve + "Origin", _7 = function r(e, t) {
        var n = this, i = this.target, o = i.style, s = i._gsap;
        if (e in oi && o) {
          if (this.tfm = this.tfm || {}, e !== "transform") e = kn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
            return n.tfm[a] = Vn(i, a);
          }) : this.tfm[e] = s.x ? s[e] : Vn(i, e), e === yr && (this.tfm.zOrigin = s.zOrigin);
          else return kn.transform.split(",").forEach(function(a) {
            return r.call(n, a, t);
          });
          if (this.props.indexOf(Ve) >= 0) return;
          s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(yr, t, "")), e = Ve;
        }
        (o || t) && this.props.push(e, t, o[e]);
      }, Dy = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
      }, g7 = function() {
        var e = this.props, t = this.target, n = t.style, i = t._gsap, o, s;
        for (o = 0; o < e.length; o += 3) e[o + 1] ? e[o + 1] === 2 ? t[e[o]](e[o + 2]) : t[e[o]] = e[o + 2] : e[o + 2] ? n[e[o]] = e[o + 2] : n.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(qp, "-$1").toLowerCase());
        if (this.tfm) {
          for (s in this.tfm) i[s] = this.tfm[s];
          i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), o = Xp(), (!o || !o.isStart) && !n[Ve] && (Dy(n), i.zOrigin && n[yr] && (n[yr] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
        }
      }, Fy = function(e, t) {
        var n = {
          target: e,
          props: [],
          revert: g7,
          save: _7
        };
        return e._gsap || vr.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
          return n.save(i);
        }), n;
      }, Hy, wh = function(e, t) {
        var n = Si.createElementNS ? Si.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Si.createElement(e);
        return n && n.style ? n : Si.createElement(e);
      }, Mn = function r(e, t, n) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(qp, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, Fs(t) || t, 1) || "";
      }, _w = "O,Moz,ms,Ms,Webkit".split(","), Fs = function(e, t, n) {
        var i = t || uo, o = i.style, s = 5;
        if (e in o && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(_w[s] + e in o); ) ;
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? _w[s] : "") + e;
      }, mh = function() {
        n7() && window.document && (fw = window, Si = fw.document, bs = Si.documentElement, uo = wh("div") || {
          style: {}
        }, wh("div"), Ve = Fs(Ve), yr = Ve + "Origin", uo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Hy = !!Fs("perspective"), Xp = vr.core.reverting, Yp = 1);
      }, gw = function(e) {
        var t = e.ownerSVGElement, n = wh("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(true), o;
        i.style.display = "block", n.appendChild(i), bs.appendChild(n);
        try {
          o = i.getBBox();
        } catch {
        }
        return n.removeChild(i), bs.removeChild(n), o;
      }, ww = function(e, t) {
        for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
      }, By = function(e) {
        var t, n;
        try {
          t = e.getBBox();
        } catch {
          t = gw(e), n = 1;
        }
        return t && (t.width || t.height) || n || (t = gw(e)), t && !t.width && !t.x && !t.y ? {
          x: +ww(e, [
            "x",
            "cx",
            "x1"
          ]) || 0,
          y: +ww(e, [
            "y",
            "cy",
            "y1"
          ]) || 0,
          width: 0,
          height: 0
        } : t;
      }, Uy = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && By(e));
      }, Ao = function(e, t) {
        if (t) {
          var n = e.style, i;
          t in oi && t !== yr && (t = Ve), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(qp, "-$1").toLowerCase())) : n.removeAttribute(t);
        }
      }, xi = function(e, t, n, i, o, s) {
        var a = new mr(e._pt, t, n, 0, 1, s ? Oy : Ly);
        return e._pt = a, a.b = i, a.e = o, e._props.push(n), a;
      }, mw = {
        deg: 1,
        rad: 1,
        turn: 1
      }, w7 = {
        grid: 1,
        flex: 1
      }, Ui = function r(e, t, n, i) {
        var o = parseFloat(n) || 0, s = (n + "").trim().substr((o + "").length) || "px", a = uo.style, l = i7.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, d = i === "px", p = i === "%", m, g, b, y;
        if (i === s || !o || mw[i] || mw[s]) return o;
        if (s !== "px" && !d && (o = r(e, t, n, "px")), y = e.getCTM && Uy(e), (p || s === "%") && (oi[t] || ~t.indexOf("adius"))) return m = y ? e.getBBox()[l ? "width" : "height"] : e[u], et(p ? o / m * h : o / 100 * m);
        if (a[l ? "width" : "height"] = h + (d ? s : i), g = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, y && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === Si || !g.appendChild) && (g = Si.body), b = g._gsap, b && p && b.width && l && b.time === Ar.time && !b.uncache) return et(o / b.width * h);
        if (p && (t === "height" || t === "width")) {
          var w = e.style[t];
          e.style[t] = h + i, m = e[u], w ? e.style[t] = w : Ao(e, t);
        } else (p || s === "%") && !w7[Mn(g, "display")] && (a.position = Mn(e, "position")), g === e && (a.position = "static"), g.appendChild(uo), m = uo[u], g.removeChild(uo), a.position = "absolute";
        return l && p && (b = go(g), b.time = Ar.time, b.width = g[u]), et(d ? m * o / h : m && o ? h / m * o : 0);
      }, Vn = function(e, t, n, i) {
        var o;
        return Yp || mh(), t in kn && t !== "transform" && (t = kn[t], ~t.indexOf(",") && (t = t.split(",")[0])), oi[t] && t !== "transform" ? (o = hl(e, i), o = t !== "transformOrigin" ? o[t] : o.svg ? o.origin : fu(Mn(e, yr)) + " " + o.zOrigin + "px") : (o = e.style[t], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = du[t] && du[t](e, t, n) || Mn(e, t) || iy(e, t) || (t === "opacity" ? 1 : 0))), n && !~(o + "").trim().indexOf(" ") ? Ui(e, t, o, n) + n : o;
      }, m7 = function(e, t, n, i) {
        if (!n || n === "none") {
          var o = Fs(t, e, 1), s = o && Mn(e, o, 1);
          s && s !== n ? (t = o, n = s) : t === "borderColor" && (n = Mn(e, "borderTopColor"));
        }
        var a = new mr(this._pt, e.style, t, 0, 1, Iy), l = 0, c = 0, u, h, d, p, m, g, b, y, w, v, S, C;
        if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (g = e.style[t], e.style[t] = i, i = Mn(e, t) || i, g ? e.style[t] = g : Ao(e, t)), u = [
          n,
          i
        ], xy(u), n = u[0], i = u[1], d = n.match(ds) || [], C = i.match(ds) || [], C.length) {
          for (; h = ds.exec(i); ) b = h[0], w = i.substring(l, h.index), m ? m = (m + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (m = 1), b !== (g = d[c++] || "") && (p = parseFloat(g) || 0, S = g.substr((p + "").length), b.charAt(1) === "=" && (b = vs(p, b) + S), y = parseFloat(b), v = b.substr((y + "").length), l = ds.lastIndex - v.length, v || (v = v || Nr.units[t] || S, l === i.length && (i += v, a.e += v)), S !== v && (p = Ui(e, t, g, v) || 0), a._pt = {
            _next: a._pt,
            p: w || c === 1 ? w : ",",
            s: p,
            c: y - p,
            m: m && m < 4 || t === "zIndex" ? Math.round : 0
          });
          a.c = l < i.length ? i.substring(l, i.length) : "";
        } else a.r = t === "display" && i === "none" ? Oy : Ly;
        return Q1.test(i) && (a.e = 0), this._pt = a, a;
      }, yw = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      }, y7 = function(e) {
        var t = e.split(" "), n = t[0], i = t[1] || "50%";
        return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = yw[n] || n, t[1] = yw[i] || i, t.join(" ");
      }, v7 = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var n = t.t, i = n.style, o = t.u, s = n._gsap, a, l, c;
          if (o === "all" || o === true) i.cssText = "", l = 1;
          else for (o = o.split(","), c = o.length; --c > -1; ) a = o[c], oi[a] && (l = 1, a = a === "transformOrigin" ? yr : Ve), Ao(n, a);
          l && (Ao(n, Ve), s && (s.svg && n.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", hl(n, 1), s.uncache = 1, Dy(i)));
        }
      }, du = {
        clearProps: function(e, t, n, i, o) {
          if (o.data !== "isFromStart") {
            var s = e._pt = new mr(e._pt, t, n, 0, 0, v7);
            return s.u = i, s.pr = -10, s.tween = o, e._props.push(n), 1;
          }
        }
      }, fl = [
        1,
        0,
        0,
        1,
        0,
        0
      ], $y = {}, Vy = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
      }, vw = function(e) {
        var t = Mn(e, Ve);
        return Vy(t) ? fl : t.substr(7).match(J1).map(et);
      }, Kp = function(e, t) {
        var n = e._gsap || go(e), i = e.style, o = vw(e), s, a, l, c;
        return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, o = [
          l.a,
          l.b,
          l.c,
          l.d,
          l.e,
          l.f
        ], o.join(",") === "1,0,0,1,0,0" ? fl : o) : (o === fl && !e.offsetParent && e !== bs && !n.svg && (l = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, a = e.nextElementSibling, bs.appendChild(e)), o = vw(e), l ? i.display = l : Ao(e, "display"), c && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : bs.removeChild(e))), t && o.length > 6 ? [
          o[0],
          o[1],
          o[4],
          o[5],
          o[12],
          o[13]
        ] : o);
      }, yh = function(e, t, n, i, o, s) {
        var a = e._gsap, l = o || Kp(e, true), c = a.xOrigin || 0, u = a.yOrigin || 0, h = a.xOffset || 0, d = a.yOffset || 0, p = l[0], m = l[1], g = l[2], b = l[3], y = l[4], w = l[5], v = t.split(" "), S = parseFloat(v[0]) || 0, C = parseFloat(v[1]) || 0, E, k, T, I;
        n ? l !== fl && (k = p * b - m * g) && (T = S * (b / k) + C * (-g / k) + (g * w - b * y) / k, I = S * (-m / k) + C * (p / k) - (p * w - m * y) / k, S = T, C = I) : (E = By(e), S = E.x + (~v[0].indexOf("%") ? S / 100 * E.width : S), C = E.y + (~(v[1] || v[0]).indexOf("%") ? C / 100 * E.height : C)), i || i !== false && a.smooth ? (y = S - c, w = C - u, a.xOffset = h + (y * p + w * g) - y, a.yOffset = d + (y * m + w * b) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = S, a.yOrigin = C, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[yr] = "0px 0px", s && (xi(s, a, "xOrigin", c, S), xi(s, a, "yOrigin", u, C), xi(s, a, "xOffset", h, a.xOffset), xi(s, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", S + " " + C);
      }, hl = function(e, t) {
        var n = e._gsap || new Ey(e);
        if ("x" in n && !t && !n.uncache) return n;
        var i = e.style, o = n.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(e), c = Mn(e, yr) || "0", u, h, d, p, m, g, b, y, w, v, S, C, E, k, T, I, M, H, O, Z, $, U, X, W, N, L, x, V, K, Re, re, _e;
        return u = h = d = g = b = y = w = v = S = 0, p = m = 1, n.svg = !!(e.getCTM && Uy(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Ve] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Ve] !== "none" ? l[Ve] : "")), i.scale = i.rotate = i.translate = "none"), k = Kp(e, n.svg), n.svg && (n.uncache ? (N = e.getBBox(), c = n.xOrigin - N.x + "px " + (n.yOrigin - N.y) + "px", W = "") : W = !t && e.getAttribute("data-svg-origin"), yh(e, W || c, !!W || n.originIsAbsolute, n.smooth !== false, k)), C = n.xOrigin || 0, E = n.yOrigin || 0, k !== fl && (H = k[0], O = k[1], Z = k[2], $ = k[3], u = U = k[4], h = X = k[5], k.length === 6 ? (p = Math.sqrt(H * H + O * O), m = Math.sqrt($ * $ + Z * Z), g = H || O ? $o(O, H) * no : 0, w = Z || $ ? $o(Z, $) * no + g : 0, w && (m *= Math.abs(Math.cos(w * Ss))), n.svg && (u -= C - (C * H + E * Z), h -= E - (C * O + E * $))) : (_e = k[6], Re = k[7], x = k[8], V = k[9], K = k[10], re = k[11], u = k[12], h = k[13], d = k[14], T = $o(_e, K), b = T * no, T && (I = Math.cos(-T), M = Math.sin(-T), W = U * I + x * M, N = X * I + V * M, L = _e * I + K * M, x = U * -M + x * I, V = X * -M + V * I, K = _e * -M + K * I, re = Re * -M + re * I, U = W, X = N, _e = L), T = $o(-Z, K), y = T * no, T && (I = Math.cos(-T), M = Math.sin(-T), W = H * I - x * M, N = O * I - V * M, L = Z * I - K * M, re = $ * M + re * I, H = W, O = N, Z = L), T = $o(O, H), g = T * no, T && (I = Math.cos(T), M = Math.sin(T), W = H * I + O * M, N = U * I + X * M, O = O * I - H * M, X = X * I - U * M, H = W, U = N), b && Math.abs(b) + Math.abs(g) > 359.9 && (b = g = 0, y = 180 - y), p = et(Math.sqrt(H * H + O * O + Z * Z)), m = et(Math.sqrt(X * X + _e * _e)), T = $o(U, X), w = Math.abs(T) > 2e-4 ? T * no : 0, S = re ? 1 / (re < 0 ? -re : re) : 0), n.svg && (W = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Vy(Mn(e, Ve)), W && e.setAttribute("transform", W))), Math.abs(w) > 90 && Math.abs(w) < 270 && (o ? (p *= -1, w += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (m *= -1, w += w <= 0 ? 180 : -180)), t = t || n.uncache, n.x = u - ((n.xPercent = u && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + s, n.y = h - ((n.yPercent = h && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + s, n.z = d + s, n.scaleX = et(p), n.scaleY = et(m), n.rotation = et(g) + a, n.rotationX = et(b) + a, n.rotationY = et(y) + a, n.skewX = w + a, n.skewY = v + a, n.transformPerspective = S + s, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (i[yr] = fu(c)), n.xOffset = n.yOffset = 0, n.force3D = Nr.force3D, n.renderTransform = n.svg ? S7 : Hy ? Wy : b7, n.uncache = 0, n;
      }, fu = function(e) {
        return (e = e.split(" "))[0] + " " + e[1];
      }, Gd = function(e, t, n) {
        var i = Vt(t);
        return et(parseFloat(t) + parseFloat(Ui(e, "x", n + "px", i))) + i;
      }, b7 = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Wy(e, t);
      }, Zi = "0deg", na = "0px", eo = ") ", Wy = function(e, t) {
        var n = t || this, i = n.xPercent, o = n.yPercent, s = n.x, a = n.y, l = n.z, c = n.rotation, u = n.rotationY, h = n.rotationX, d = n.skewX, p = n.skewY, m = n.scaleX, g = n.scaleY, b = n.transformPerspective, y = n.force3D, w = n.target, v = n.zOrigin, S = "", C = y === "auto" && e && e !== 1 || y === true;
        if (v && (h !== Zi || u !== Zi)) {
          var E = parseFloat(u) * Ss, k = Math.sin(E), T = Math.cos(E), I;
          E = parseFloat(h) * Ss, I = Math.cos(E), s = Gd(w, s, k * I * -v), a = Gd(w, a, -Math.sin(E) * -v), l = Gd(w, l, T * I * -v + v);
        }
        b !== na && (S += "perspective(" + b + eo), (i || o) && (S += "translate(" + i + "%, " + o + "%) "), (C || s !== na || a !== na || l !== na) && (S += l !== na || C ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + eo), c !== Zi && (S += "rotate(" + c + eo), u !== Zi && (S += "rotateY(" + u + eo), h !== Zi && (S += "rotateX(" + h + eo), (d !== Zi || p !== Zi) && (S += "skew(" + d + ", " + p + eo), (m !== 1 || g !== 1) && (S += "scale(" + m + ", " + g + eo), w.style[Ve] = S || "translate(0, 0)";
      }, S7 = function(e, t) {
        var n = t || this, i = n.xPercent, o = n.yPercent, s = n.x, a = n.y, l = n.rotation, c = n.skewX, u = n.skewY, h = n.scaleX, d = n.scaleY, p = n.target, m = n.xOrigin, g = n.yOrigin, b = n.xOffset, y = n.yOffset, w = n.forceCSS, v = parseFloat(s), S = parseFloat(a), C, E, k, T, I;
        l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= Ss, c *= Ss, C = Math.cos(l) * h, E = Math.sin(l) * h, k = Math.sin(l - c) * -d, T = Math.cos(l - c) * d, c && (u *= Ss, I = Math.tan(c - u), I = Math.sqrt(1 + I * I), k *= I, T *= I, u && (I = Math.tan(u), I = Math.sqrt(1 + I * I), C *= I, E *= I)), C = et(C), E = et(E), k = et(k), T = et(T)) : (C = h, T = d, E = k = 0), (v && !~(s + "").indexOf("px") || S && !~(a + "").indexOf("px")) && (v = Ui(p, "x", s, "px"), S = Ui(p, "y", a, "px")), (m || g || b || y) && (v = et(v + m - (m * C + g * k) + b), S = et(S + g - (m * E + g * T) + y)), (i || o) && (I = p.getBBox(), v = et(v + i / 100 * I.width), S = et(S + o / 100 * I.height)), I = "matrix(" + C + "," + E + "," + k + "," + T + "," + v + "," + S + ")", p.setAttribute("transform", I), w && (p.style[Ve] = I);
      }, x7 = function(e, t, n, i, o) {
        var s = 360, a = kt(o), l = parseFloat(o) * (a && ~o.indexOf("rad") ? no : 1), c = l - i, u = i + c + "deg", h, d;
        return a && (h = o.split("_")[1], h === "short" && (c %= s, c !== c % (s / 2) && (c += c < 0 ? s : -360)), h === "cw" && c < 0 ? c = (c + s * pw) % s - ~~(c / s) * s : h === "ccw" && c > 0 && (c = (c - s * pw) % s - ~~(c / s) * s)), e._pt = d = new mr(e._pt, t, n, i, c, s7), d.e = u, d.u = "deg", e._props.push(n), d;
      }, bw = function(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }, C7 = function(e, t, n) {
        var i = bw({}, n._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", s = n.style, a, l, c, u, h, d, p, m;
        i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), s[Ve] = t, a = hl(n, 1), Ao(n, Ve), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[Ve], s[Ve] = t, a = hl(n, 1), s[Ve] = c);
        for (l in oi) c = i[l], u = a[l], c !== u && o.indexOf(l) < 0 && (p = Vt(c), m = Vt(u), h = p !== m ? Ui(n, l, c, m) : parseFloat(c), d = parseFloat(u), e._pt = new mr(e._pt, a, l, h, d - h, gh), e._pt.u = m || 0, e._props.push(l));
        bw(a, i);
      };
      wr("padding,margin,Width,Radius", function(r, e) {
        var t = "Top", n = "Right", i = "Bottom", o = "Left", s = (e < 3 ? [
          t,
          n,
          i,
          o
        ] : [
          t + o,
          t + n,
          i + n,
          i + o
        ]).map(function(a) {
          return e < 2 ? r + a : "border" + a + r;
        });
        du[e > 1 ? "border" + r : r] = function(a, l, c, u, h) {
          var d, p;
          if (arguments.length < 4) return d = s.map(function(m) {
            return Vn(a, m, c);
          }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
          d = (u + "").split(" "), p = {}, s.forEach(function(m, g) {
            return p[m] = d[g] = d[g] || d[(g - 1) / 2 | 0];
          }), a.init(l, p, h);
        };
      });
      var Gy = {
        name: "css",
        register: mh,
        targetTest: function(e) {
          return e.style && e.nodeType;
        },
        init: function(e, t, n, i, o) {
          var s = this._props, a = e.style, l = n.vars.startAt, c, u, h, d, p, m, g, b, y, w, v, S, C, E, k, T;
          Yp || mh(), this.styles = this.styles || Fy(e), T = this.styles.props, this.tween = n;
          for (g in t) if (g !== "autoRound" && (u = t[g], !(Pr[g] && Py(g, t, n, i, e, o)))) {
            if (p = typeof u, m = du[g], p === "function" && (u = u.call(n, i, e, o), p = typeof u), p === "string" && ~u.indexOf("random(") && (u = cl(u)), m) m(this, e, g, u, n) && (k = 1);
            else if (g.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(g) + "").trim(), u += "", Ni.lastIndex = 0, Ni.test(c) || (b = Vt(c), y = Vt(u)), y ? b !== y && (c = Ui(e, g, c, y) + y) : b && (u += b), this.add(a, "setProperty", c, u, i, o, 0, 0, g), s.push(g), T.push(g, 0, a[g]);
            else if (p !== "undefined") {
              if (l && g in l ? (c = typeof l[g] == "function" ? l[g].call(n, i, e, o) : l[g], kt(c) && ~c.indexOf("random(") && (c = cl(c)), Vt(c + "") || c === "auto" || (c += Nr.units[g] || Vt(Vn(e, g)) || ""), (c + "").charAt(1) === "=" && (c = Vn(e, g))) : c = Vn(e, g), d = parseFloat(c), w = p === "string" && u.charAt(1) === "=" && u.substr(0, 2), w && (u = u.substr(2)), h = parseFloat(u), g in kn && (g === "autoAlpha" && (d === 1 && Vn(e, "visibility") === "hidden" && h && (d = 0), T.push("visibility", 0, a.visibility), xi(this, a, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), g !== "scale" && g !== "transform" && (g = kn[g], ~g.indexOf(",") && (g = g.split(",")[0]))), v = g in oi, v) {
                if (this.styles.save(g), S || (C = e._gsap, C.renderTransform && !t.parseTransform || hl(e, t.parseTransform), E = t.smoothOrigin !== false && C.smooth, S = this._pt = new mr(this._pt, a, Ve, 0, 1, C.renderTransform, C, 0, -1), S.dep = 1), g === "scale") this._pt = new mr(this._pt, C, "scaleY", C.scaleY, (w ? vs(C.scaleY, w + h) : h) - C.scaleY || 0, gh), this._pt.u = 0, s.push("scaleY", g), g += "X";
                else if (g === "transformOrigin") {
                  T.push(yr, 0, a[yr]), u = y7(u), C.svg ? yh(e, u, 0, E, 0, this) : (y = parseFloat(u.split(" ")[2]) || 0, y !== C.zOrigin && xi(this, C, "zOrigin", C.zOrigin, y), xi(this, a, g, fu(c), fu(u)));
                  continue;
                } else if (g === "svgOrigin") {
                  yh(e, u, 1, E, 0, this);
                  continue;
                } else if (g in $y) {
                  x7(this, C, g, d, w ? vs(d, w + u) : u);
                  continue;
                } else if (g === "smoothOrigin") {
                  xi(this, C, "smooth", C.smooth, u);
                  continue;
                } else if (g === "force3D") {
                  C[g] = u;
                  continue;
                } else if (g === "transform") {
                  C7(this, u, e);
                  continue;
                }
              } else g in a || (g = Fs(g) || g);
              if (v || (h || h === 0) && (d || d === 0) && !o7.test(u) && g in a) b = (c + "").substr((d + "").length), h || (h = 0), y = Vt(u) || (g in Nr.units ? Nr.units[g] : b), b !== y && (d = Ui(e, g, c, y)), this._pt = new mr(this._pt, v ? C : a, g, d, (w ? vs(d, w + h) : h) - d, !v && (y === "px" || g === "zIndex") && t.autoRound !== false ? l7 : gh), this._pt.u = y || 0, b !== y && y !== "%" && (this._pt.b = c, this._pt.r = a7);
              else if (g in a) m7.call(this, e, g, c, w ? w + u : u);
              else if (g in e) this.add(e, g, c || e[g], w ? w + u : u, i, o);
              else if (g !== "parseTransform") {
                Dp(g, u);
                continue;
              }
              v || (g in a ? T.push(g, 0, a[g]) : typeof e[g] == "function" ? T.push(g, 2, e[g]()) : T.push(g, 1, c || e[g])), s.push(g);
            }
          }
          k && zy(this);
        },
        render: function(e, t) {
          if (t.tween._time || !Xp()) for (var n = t._pt; n; ) n.r(e, n.d), n = n._next;
          else t.styles.revert();
        },
        get: Vn,
        aliases: kn,
        getSetter: function(e, t, n) {
          var i = kn[t];
          return i && i.indexOf(",") < 0 && (t = i), t in oi && t !== yr && (e._gsap.x || Vn(e, "x")) ? n && hw === n ? t === "scale" ? f7 : d7 : (hw = n || {}) && (t === "scale" ? h7 : p7) : e.style && !Np(e.style[t]) ? c7 : ~t.indexOf("-") ? u7 : Wp(e, t);
        },
        core: {
          _removeProperty: Ao,
          _getMatrix: Kp
        }
      };
      vr.utils.checkPrefix = Fs;
      vr.core.getStyleSaver = Fy;
      (function(r, e, t, n) {
        var i = wr(r + "," + e + "," + t, function(o) {
          oi[o] = 1;
        });
        wr(e, function(o) {
          Nr.units[o] = "deg", $y[o] = 1;
        }), kn[i[13]] = r + "," + e, wr(n, function(o) {
          var s = o.split(":");
          kn[s[1]] = i[s[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
      wr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
        Nr.units[r] = "px";
      });
      vr.registerPlugin(Gy);
      var Tt = vr.registerPlugin(Gy) || vr;
      Tt.core.Tween;
      function k7(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, n.key, n);
        }
      }
      function R7(r, e, t) {
        return e && k7(r.prototype, e), r;
      }
      var At, Cc, jr, Ci, ki, xs, Yy, io, ja, Xy, Xn, an, qy, Ky = function() {
        return At || typeof window < "u" && (At = window.gsap) && At.registerPlugin && At;
      }, Jy = 1, hs = [], ce = [], In = [], Ma = Date.now, vh = function(e, t) {
        return t;
      }, E7 = function() {
        var e = ja.core, t = e.bridge || {}, n = e._scrollers, i = e._proxies;
        n.push.apply(n, ce), i.push.apply(i, In), ce = n, In = i, vh = function(s, a) {
          return t[s](a);
        };
      }, Li = function(e, t) {
        return ~In.indexOf(e) && In[In.indexOf(e) + 1][t];
      }, Ia = function(e) {
        return !!~Xy.indexOf(e);
      }, Qt = function(e, t, n, i, o) {
        return e.addEventListener(t, n, {
          passive: i !== false,
          capture: !!o
        });
      }, Jt = function(e, t, n, i) {
        return e.removeEventListener(t, n, !!i);
      }, Kl = "scrollLeft", Jl = "scrollTop", bh = function() {
        return Xn && Xn.isPressed || ce.cache++;
      }, hu = function(e, t) {
        var n = function i(o) {
          if (o || o === 0) {
            Jy && (jr.history.scrollRestoration = "manual");
            var s = Xn && Xn.isPressed;
            o = i.v = Math.round(o) || (Xn && Xn.iOS ? 1 : 0), e(o), i.cacheID = ce.cache, s && vh("ss", o);
          } else (t || ce.cache !== i.cacheID || vh("ref")) && (i.cacheID = ce.cache, i.v = e());
          return i.v + i.offset;
        };
        return n.offset = 0, e && n;
      }, ir = {
        s: Kl,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: hu(function(r) {
          return arguments.length ? jr.scrollTo(r, gt.sc()) : jr.pageXOffset || Ci[Kl] || ki[Kl] || xs[Kl] || 0;
        })
      }, gt = {
        s: Jl,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ir,
        sc: hu(function(r) {
          return arguments.length ? jr.scrollTo(ir.sc(), r) : jr.pageYOffset || Ci[Jl] || ki[Jl] || xs[Jl] || 0;
        })
      }, ur = function(e, t) {
        return (t && t._ctx && t._ctx.selector || At.utils.toArray)(e)[0] || (typeof e == "string" && At.config().nullTargetWarn !== false ? console.warn("Element not found:", e) : null);
      }, $i = function(e, t) {
        var n = t.s, i = t.sc;
        Ia(e) && (e = Ci.scrollingElement || ki);
        var o = ce.indexOf(e), s = i === gt.sc ? 1 : 2;
        !~o && (o = ce.push(e) - 1), ce[o + s] || Qt(e, "scroll", bh);
        var a = ce[o + s], l = a || (ce[o + s] = hu(Li(e, n), true) || (Ia(e) ? i : hu(function(c) {
          return arguments.length ? e[n] = c : e[n];
        })));
        return l.target = e, a || (l.smooth = At.getProperty(e, "scrollBehavior") === "smooth"), l;
      }, Sh = function(e, t, n) {
        var i = e, o = e, s = Ma(), a = s, l = t || 50, c = Math.max(500, l * 3), u = function(m, g) {
          var b = Ma();
          g || b - s > l ? (o = i, i = m, a = s, s = b) : n ? i += m : i = o + (m - o) / (b - a) * (s - a);
        }, h = function() {
          o = i = n ? 0 : i, a = s = 0;
        }, d = function(m) {
          var g = a, b = o, y = Ma();
          return (m || m === 0) && m !== i && u(m), s === a || y - a > c ? 0 : (i + (n ? b : -b)) / ((n ? y : s) - g) * 1e3;
        };
        return {
          update: u,
          reset: h,
          getVelocity: d
        };
      }, ia = function(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
      }, Sw = function(e) {
        var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(n) ? t : n;
      }, Qy = function() {
        ja = At.core.globals().ScrollTrigger, ja && ja.core && E7();
      }, Zy = function(e) {
        return At = e || Ky(), !Cc && At && typeof document < "u" && document.body && (jr = window, Ci = document, ki = Ci.documentElement, xs = Ci.body, Xy = [
          jr,
          Ci,
          ki,
          xs
        ], At.utils.clamp, qy = At.core.context || function() {
        }, io = "onpointerenter" in xs ? "pointer" : "mouse", Yy = rt.isTouch = jr.matchMedia && jr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in jr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, an = rt.eventTypes = ("ontouchstart" in ki ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ki ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
          return Jy = 0;
        }, 500), Qy(), Cc = 1), Cc;
      };
      ir.op = gt;
      ce.cache = 0;
      var rt = function() {
        function r(t) {
          this.init(t);
        }
        var e = r.prototype;
        return e.init = function(n) {
          Cc || Zy(At) || console.warn("Please gsap.registerPlugin(Observer)"), ja || Qy();
          var i = n.tolerance, o = n.dragMinimum, s = n.type, a = n.target, l = n.lineHeight, c = n.debounce, u = n.preventDefault, h = n.onStop, d = n.onStopDelay, p = n.ignore, m = n.wheelSpeed, g = n.event, b = n.onDragStart, y = n.onDragEnd, w = n.onDrag, v = n.onPress, S = n.onRelease, C = n.onRight, E = n.onLeft, k = n.onUp, T = n.onDown, I = n.onChangeX, M = n.onChangeY, H = n.onChange, O = n.onToggleX, Z = n.onToggleY, $ = n.onHover, U = n.onHoverEnd, X = n.onMove, W = n.ignoreCheck, N = n.isNormalizer, L = n.onGestureStart, x = n.onGestureEnd, V = n.onWheel, K = n.onEnable, Re = n.onDisable, re = n.onClick, _e = n.scrollSpeed, ue = n.capture, pe = n.allowClicks, nt = n.lockAxis, it = n.onLockAxis;
          this.target = a = ur(a) || ki, this.vars = n, p && (p = At.utils.toArray(p)), i = i || 1e-9, o = o || 0, m = m || 1, _e = _e || 1, s = s || "wheel,touch,pointer", c = c !== false, l || (l = parseFloat(jr.getComputedStyle(xs).lineHeight) || 22);
          var Br, ot, mt, de, ze, zt, br, z = this, Sr = 0, Nn = 0, ai = n.passive || !u && n.passive !== false, Je = $i(a, ir), Ln = $i(a, gt), li = Je(), Xi = Ln(), yt = ~s.indexOf("touch") && !~s.indexOf("pointer") && an[0] === "pointerdown", ci = Ia(a), Qe = a.ownerDocument || Ci, en = [
            0,
            0,
            0
          ], Ur = [
            0,
            0,
            0
          ], On = 0, Vs = function() {
            return On = Ma();
          }, st = function(J, Se) {
            return (z.event = J) && p && ~p.indexOf(J.target) || Se && yt && J.pointerType !== "touch" || W && W(J, Se);
          }, Cl = function() {
            z._vx.reset(), z._vy.reset(), ot.pause(), h && h(z);
          }, Dn = function() {
            var J = z.deltaX = Sw(en), Se = z.deltaY = Sw(Ur), B = Math.abs(J) >= i, ne = Math.abs(Se) >= i;
            H && (B || ne) && H(z, J, Se, en, Ur), B && (C && z.deltaX > 0 && C(z), E && z.deltaX < 0 && E(z), I && I(z), O && z.deltaX < 0 != Sr < 0 && O(z), Sr = z.deltaX, en[0] = en[1] = en[2] = 0), ne && (T && z.deltaY > 0 && T(z), k && z.deltaY < 0 && k(z), M && M(z), Z && z.deltaY < 0 != Nn < 0 && Z(z), Nn = z.deltaY, Ur[0] = Ur[1] = Ur[2] = 0), (de || mt) && (X && X(z), mt && (b && mt === 1 && b(z), w && w(z), mt = 0), de = false), zt && !(zt = false) && it && it(z), ze && (V(z), ze = false), Br = 0;
          }, Do = function(J, Se, B) {
            en[B] += J, Ur[B] += Se, z._vx.update(J), z._vy.update(Se), c ? Br || (Br = requestAnimationFrame(Dn)) : Dn();
          }, Fo = function(J, Se) {
            nt && !br && (z.axis = br = Math.abs(J) > Math.abs(Se) ? "x" : "y", zt = true), br !== "y" && (en[2] += J, z._vx.update(J, true)), br !== "x" && (Ur[2] += Se, z._vy.update(Se, true)), c ? Br || (Br = requestAnimationFrame(Dn)) : Dn();
          }, ui = function(J) {
            if (!st(J, 1)) {
              J = ia(J, u);
              var Se = J.clientX, B = J.clientY, ne = Se - z.x, q = B - z.y, ie = z.isDragging;
              z.x = Se, z.y = B, (ie || (ne || q) && (Math.abs(z.startX - Se) >= o || Math.abs(z.startY - B) >= o)) && (mt = ie ? 2 : 1, ie || (z.isDragging = true), Fo(ne, q));
            }
          }, qi = z.onPress = function(oe) {
            st(oe, 1) || oe && oe.button || (z.axis = br = null, ot.pause(), z.isPressed = true, oe = ia(oe), Sr = Nn = 0, z.startX = z.x = oe.clientX, z.startY = z.y = oe.clientY, z._vx.reset(), z._vy.reset(), Qt(N ? a : Qe, an[1], ui, ai, true), z.deltaX = z.deltaY = 0, v && v(z));
          }, fe = z.onRelease = function(oe) {
            if (!st(oe, 1)) {
              Jt(N ? a : Qe, an[1], ui, true);
              var J = !isNaN(z.y - z.startY), Se = z.isDragging, B = Se && (Math.abs(z.x - z.startX) > 3 || Math.abs(z.y - z.startY) > 3), ne = ia(oe);
              !B && J && (z._vx.reset(), z._vy.reset(), u && pe && At.delayedCall(0.08, function() {
                if (Ma() - On > 300 && !oe.defaultPrevented) {
                  if (oe.target.click) oe.target.click();
                  else if (Qe.createEvent) {
                    var q = Qe.createEvent("MouseEvents");
                    q.initMouseEvent("click", true, true, jr, 1, ne.screenX, ne.screenY, ne.clientX, ne.clientY, false, false, false, false, 0, null), oe.target.dispatchEvent(q);
                  }
                }
              })), z.isDragging = z.isGesturing = z.isPressed = false, h && Se && !N && ot.restart(true), mt && Dn(), y && Se && y(z), S && S(z, B);
            }
          }, Ki = function(J) {
            return J.touches && J.touches.length > 1 && (z.isGesturing = true) && L(J, z.isDragging);
          }, tn = function() {
            return (z.isGesturing = false) || x(z);
          }, rn = function(J) {
            if (!st(J)) {
              var Se = Je(), B = Ln();
              Do((Se - li) * _e, (B - Xi) * _e, 1), li = Se, Xi = B, h && ot.restart(true);
            }
          }, nn = function(J) {
            if (!st(J)) {
              J = ia(J, u), V && (ze = true);
              var Se = (J.deltaMode === 1 ? l : J.deltaMode === 2 ? jr.innerHeight : 1) * m;
              Do(J.deltaX * Se, J.deltaY * Se, 0), h && !N && ot.restart(true);
            }
          }, Ji = function(J) {
            if (!st(J)) {
              var Se = J.clientX, B = J.clientY, ne = Se - z.x, q = B - z.y;
              z.x = Se, z.y = B, de = true, h && ot.restart(true), (ne || q) && Fo(ne, q);
            }
          }, Ho = function(J) {
            z.event = J, $(z);
          }, Fn = function(J) {
            z.event = J, U(z);
          }, Ws = function(J) {
            return st(J) || ia(J, u) && re(z);
          };
          ot = z._dc = At.delayedCall(d || 0.25, Cl).pause(), z.deltaX = z.deltaY = 0, z._vx = Sh(0, 50, true), z._vy = Sh(0, 50, true), z.scrollX = Je, z.scrollY = Ln, z.isDragging = z.isGesturing = z.isPressed = false, qy(this), z.enable = function(oe) {
            return z.isEnabled || (Qt(ci ? Qe : a, "scroll", bh), s.indexOf("scroll") >= 0 && Qt(ci ? Qe : a, "scroll", rn, ai, ue), s.indexOf("wheel") >= 0 && Qt(a, "wheel", nn, ai, ue), (s.indexOf("touch") >= 0 && Yy || s.indexOf("pointer") >= 0) && (Qt(a, an[0], qi, ai, ue), Qt(Qe, an[2], fe), Qt(Qe, an[3], fe), pe && Qt(a, "click", Vs, true, true), re && Qt(a, "click", Ws), L && Qt(Qe, "gesturestart", Ki), x && Qt(Qe, "gestureend", tn), $ && Qt(a, io + "enter", Ho), U && Qt(a, io + "leave", Fn), X && Qt(a, io + "move", Ji)), z.isEnabled = true, z.isDragging = z.isGesturing = z.isPressed = de = mt = false, z._vx.reset(), z._vy.reset(), li = Je(), Xi = Ln(), oe && oe.type && qi(oe), K && K(z)), z;
          }, z.disable = function() {
            z.isEnabled && (hs.filter(function(oe) {
              return oe !== z && Ia(oe.target);
            }).length || Jt(ci ? Qe : a, "scroll", bh), z.isPressed && (z._vx.reset(), z._vy.reset(), Jt(N ? a : Qe, an[1], ui, true)), Jt(ci ? Qe : a, "scroll", rn, ue), Jt(a, "wheel", nn, ue), Jt(a, an[0], qi, ue), Jt(Qe, an[2], fe), Jt(Qe, an[3], fe), Jt(a, "click", Vs, true), Jt(a, "click", Ws), Jt(Qe, "gesturestart", Ki), Jt(Qe, "gestureend", tn), Jt(a, io + "enter", Ho), Jt(a, io + "leave", Fn), Jt(a, io + "move", Ji), z.isEnabled = z.isPressed = z.isDragging = false, Re && Re(z));
          }, z.kill = z.revert = function() {
            z.disable();
            var oe = hs.indexOf(z);
            oe >= 0 && hs.splice(oe, 1), Xn === z && (Xn = 0);
          }, hs.push(z), N && Ia(a) && (Xn = z), z.enable(g);
        }, R7(r, [
          {
            key: "velocityX",
            get: function() {
              return this._vx.getVelocity();
            }
          },
          {
            key: "velocityY",
            get: function() {
              return this._vy.getVelocity();
            }
          }
        ]), r;
      }();
      rt.version = "3.12.7";
      rt.create = function(r) {
        return new rt(r);
      };
      rt.register = Zy;
      rt.getAll = function() {
        return hs.slice();
      };
      rt.getById = function(r) {
        return hs.filter(function(e) {
          return e.vars.id === r;
        })[0];
      };
      Ky() && At.registerPlugin(rt);
      var Y, Ko, le, Te, Tr, xe, Jp, pu, pl, za, ha, Ql, Ht, ed, xh, tr, xw, Cw, Jo, e2, Yd, t2, Zt, Ch, r2, n2, hi, kh, Qp, Cs, Zp, _u, Rh, Xd, Zl = 1, Ut = Date.now, qd = Ut(), Jr = 0, pa = 0, kw = function(e, t, n) {
        var i = Er(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return n["_" + t + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
      }, Rw = function(e, t) {
        return t && (!Er(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
      }, P7 = function r() {
        return pa && requestAnimationFrame(r);
      }, Ew = function() {
        return ed = 1;
      }, Pw = function() {
        return ed = 0;
      }, Sn = function(e) {
        return e;
      }, _a = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      }, i2 = function() {
        return typeof window < "u";
      }, o2 = function() {
        return Y || i2() && (Y = window.gsap) && Y.registerPlugin && Y;
      }, jo = function(e) {
        return !!~Jp.indexOf(e);
      }, s2 = function(e) {
        return (e === "Height" ? Zp : le["inner" + e]) || Tr["client" + e] || xe["client" + e];
      }, a2 = function(e) {
        return Li(e, "getBoundingClientRect") || (jo(e) ? function() {
          return Tc.width = le.innerWidth, Tc.height = Zp, Tc;
        } : function() {
          return Wn(e);
        });
      }, T7 = function(e, t, n) {
        var i = n.d, o = n.d2, s = n.a;
        return (s = Li(e, "getBoundingClientRect")) ? function() {
          return s()[i];
        } : function() {
          return (t ? s2(o) : e["client" + o]) || 0;
        };
      }, A7 = function(e, t) {
        return !t || ~In.indexOf(e) ? a2(e) : function() {
          return Tc;
        };
      }, Rn = function(e, t) {
        var n = t.s, i = t.d2, o = t.d, s = t.a;
        return Math.max(0, (n = "scroll" + i) && (s = Li(e, n)) ? s() - a2(e)()[o] : jo(e) ? (Tr[n] || xe[n]) - s2(i) : e[n] - e["offset" + i]);
      }, ec = function(e, t) {
        for (var n = 0; n < Jo.length; n += 3) (!t || ~t.indexOf(Jo[n + 1])) && e(Jo[n], Jo[n + 1], Jo[n + 2]);
      }, Er = function(e) {
        return typeof e == "string";
      }, Wt = function(e) {
        return typeof e == "function";
      }, ga = function(e) {
        return typeof e == "number";
      }, oo = function(e) {
        return typeof e == "object";
      }, oa = function(e, t, n) {
        return e && e.progress(t ? 0 : 1) && n && e.pause();
      }, Kd = function(e, t) {
        if (e.enabled) {
          var n = e._ctx ? e._ctx.add(function() {
            return t(e);
          }) : t(e);
          n && n.totalTime && (e.callbackAnimation = n);
        }
      }, Vo = Math.abs, l2 = "left", c2 = "top", e_ = "right", t_ = "bottom", vo = "width", bo = "height", Na = "Right", La = "Left", Oa = "Top", Da = "Bottom", at = "padding", Gr = "margin", Hs = "Width", r_ = "Height", pt = "px", Yr = function(e) {
        return le.getComputedStyle(e);
      }, j7 = function(e) {
        var t = Yr(e).position;
        e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
      }, Tw = function(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }, Wn = function(e, t) {
        var n = t && Yr(e)[xh] !== "matrix(1, 0, 0, 1, 0, 0)" && Y.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1), i = e.getBoundingClientRect();
        return n && n.progress(0).kill(), i;
      }, gu = function(e, t) {
        var n = t.d2;
        return e["offset" + n] || e["client" + n] || 0;
      }, u2 = function(e) {
        var t = [], n = e.labels, i = e.duration(), o;
        for (o in n) t.push(n[o] / i);
        return t;
      }, M7 = function(e) {
        return function(t) {
          return Y.utils.snap(u2(e), t);
        };
      }, n_ = function(e) {
        var t = Y.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(i, o) {
          return i - o;
        });
        return n ? function(i, o, s) {
          s === void 0 && (s = 1e-3);
          var a;
          if (!o) return t(i);
          if (o > 0) {
            for (i -= s, a = 0; a < n.length; a++) if (n[a] >= i) return n[a];
            return n[a - 1];
          } else for (a = n.length, i += s; a--; ) if (n[a] <= i) return n[a];
          return n[0];
        } : function(i, o, s) {
          s === void 0 && (s = 1e-3);
          var a = t(i);
          return !o || Math.abs(a - i) < s || a - i < 0 == o < 0 ? a : t(o < 0 ? i - e : i + e);
        };
      }, I7 = function(e) {
        return function(t, n) {
          return n_(u2(e))(t, n.direction);
        };
      }, tc = function(e, t, n, i) {
        return n.split(",").forEach(function(o) {
          return e(t, o, i);
        });
      }, St = function(e, t, n, i, o) {
        return e.addEventListener(t, n, {
          passive: !i,
          capture: !!o
        });
      }, bt = function(e, t, n, i) {
        return e.removeEventListener(t, n, !!i);
      }, rc = function(e, t, n) {
        n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
      }, Aw = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
      }, nc = {
        toggleActions: "play",
        anticipatePin: 0
      }, wu = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1
      }, kc = function(e, t) {
        if (Er(e)) {
          var n = e.indexOf("="), i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          ~n && (e.indexOf("%") > n && (i *= t / 100), e = e.substr(0, n - 1)), e = i + (e in wu ? wu[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
        }
        return e;
      }, ic = function(e, t, n, i, o, s, a, l) {
        var c = o.startColor, u = o.endColor, h = o.fontSize, d = o.indent, p = o.fontWeight, m = Te.createElement("div"), g = jo(n) || Li(n, "pinType") === "fixed", b = e.indexOf("scroller") !== -1, y = g ? xe : n, w = e.indexOf("start") !== -1, v = w ? c : u, S = "border-color:" + v + ";font-size:" + h + ";color:" + v + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return S += "position:" + ((b || l) && g ? "fixed;" : "absolute;"), (b || l || !g) && (S += (i === gt ? e_ : t_) + ":" + (s + parseFloat(d)) + "px;"), a && (S += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), m._isStart = w, m.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), m.style.cssText = S, m.innerText = t || t === 0 ? e + "-" + t : e, y.children[0] ? y.insertBefore(m, y.children[0]) : y.appendChild(m), m._offset = m["offset" + i.op.d2], Rc(m, 0, i, w), m;
      }, Rc = function(e, t, n, i) {
        var o = {
          display: "block"
        }, s = n[i ? "os2" : "p2"], a = n[i ? "p2" : "os2"];
        e._isFlipped = i, o[n.a + "Percent"] = i ? -100 : 0, o[n.a] = i ? "1px" : 0, o["border" + s + Hs] = 1, o["border" + a + Hs] = 0, o[n.p] = t + "px", Y.set(e, o);
      }, ae = [], Eh = {}, _l, jw = function() {
        return Ut() - Jr > 34 && (_l || (_l = requestAnimationFrame(Kn)));
      }, Wo = function() {
        (!Zt || !Zt.isPressed || Zt.startX > xe.clientWidth) && (ce.cache++, Zt ? _l || (_l = requestAnimationFrame(Kn)) : Kn(), Jr || Io("scrollStart"), Jr = Ut());
      }, Jd = function() {
        n2 = le.innerWidth, r2 = le.innerHeight;
      }, wa = function(e) {
        ce.cache++, (e === true || !Ht && !t2 && !Te.fullscreenElement && !Te.webkitFullscreenElement && (!Ch || n2 !== le.innerWidth || Math.abs(le.innerHeight - r2) > le.innerHeight * 0.25)) && pu.restart(true);
      }, Mo = {}, z7 = [], d2 = function r() {
        return bt(se, "scrollEnd", r) || fo(true);
      }, Io = function(e) {
        return Mo[e] && Mo[e].map(function(t) {
          return t();
        }) || z7;
      }, kr = [], f2 = function(e) {
        for (var t = 0; t < kr.length; t += 5) (!e || kr[t + 4] && kr[t + 4].query === e) && (kr[t].style.cssText = kr[t + 1], kr[t].getBBox && kr[t].setAttribute("transform", kr[t + 2] || ""), kr[t + 3].uncache = 1);
      }, i_ = function(e, t) {
        var n;
        for (tr = 0; tr < ae.length; tr++) n = ae[tr], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(true, true));
        _u = true, t && f2(t), t || Io("revert");
      }, h2 = function(e, t) {
        ce.cache++, (t || !rr) && ce.forEach(function(n) {
          return Wt(n) && n.cacheID++ && (n.rec = 0);
        }), Er(e) && (le.history.scrollRestoration = Qp = e);
      }, rr, So = 0, Mw, N7 = function() {
        if (Mw !== So) {
          var e = Mw = So;
          requestAnimationFrame(function() {
            return e === So && fo(true);
          });
        }
      }, p2 = function() {
        xe.appendChild(Cs), Zp = !Zt && Cs.offsetHeight || le.innerHeight, xe.removeChild(Cs);
      }, Iw = function(e) {
        return pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
          return t.style.display = e ? "none" : "block";
        });
      }, fo = function(e, t) {
        if (Tr = Te.documentElement, xe = Te.body, Jp = [
          le,
          Te,
          Tr,
          xe
        ], Jr && !e && !_u) {
          St(se, "scrollEnd", d2);
          return;
        }
        p2(), rr = se.isRefreshing = true, ce.forEach(function(i) {
          return Wt(i) && ++i.cacheID && (i.rec = i());
        });
        var n = Io("refreshInit");
        e2 && se.sort(), t || i_(), ce.forEach(function(i) {
          Wt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }), ae.slice(0).forEach(function(i) {
          return i.refresh();
        }), _u = false, ae.forEach(function(i) {
          if (i._subPinOffset && i.pin) {
            var o = i.vars.horizontal ? "offsetWidth" : "offsetHeight", s = i.pin[o];
            i.revert(true, 1), i.adjustPinSpacing(i.pin[o] - s), i.refresh();
          }
        }), Rh = 1, Iw(true), ae.forEach(function(i) {
          var o = Rn(i.scroller, i._dir), s = i.vars.end === "max" || i._endClamp && i.end > o, a = i._startClamp && i.start >= o;
          (s || a) && i.setPositions(a ? o - 1 : i.start, s ? Math.max(a ? o : i.start + 1, o) : i.end, true);
        }), Iw(false), Rh = 0, n.forEach(function(i) {
          return i && i.render && i.render(-1);
        }), ce.forEach(function(i) {
          Wt(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth";
          }), i.rec && i(i.rec));
        }), h2(Qp, 1), pu.pause(), So++, rr = 2, Kn(2), ae.forEach(function(i) {
          return Wt(i.vars.onRefresh) && i.vars.onRefresh(i);
        }), rr = se.isRefreshing = false, Io("refresh");
      }, Ph = 0, Ec = 1, Fa, Kn = function(e) {
        if (e === 2 || !rr && !_u) {
          se.isUpdating = true, Fa && Fa.update(0);
          var t = ae.length, n = Ut(), i = n - qd >= 50, o = t && ae[0].scroll();
          if (Ec = Ph > o ? -1 : 1, rr || (Ph = o), i && (Jr && !ed && n - Jr > 200 && (Jr = 0, Io("scrollEnd")), ha = qd, qd = n), Ec < 0) {
            for (tr = t; tr-- > 0; ) ae[tr] && ae[tr].update(0, i);
            Ec = 1;
          } else for (tr = 0; tr < t; tr++) ae[tr] && ae[tr].update(0, i);
          se.isUpdating = false;
        }
        _l = 0;
      }, Th = [
        l2,
        c2,
        t_,
        e_,
        Gr + Da,
        Gr + Na,
        Gr + Oa,
        Gr + La,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order"
      ], Pc = Th.concat([
        vo,
        bo,
        "boxSizing",
        "max" + Hs,
        "max" + r_,
        "position",
        Gr,
        at,
        at + Oa,
        at + Na,
        at + Da,
        at + La
      ]), L7 = function(e, t, n) {
        ks(n);
        var i = e._gsap;
        if (i.spacerIsNative) ks(i.spacerState);
        else if (e._gsap.swappedIn) {
          var o = t.parentNode;
          o && (o.insertBefore(e, t), o.removeChild(t));
        }
        e._gsap.swappedIn = false;
      }, Qd = function(e, t, n, i) {
        if (!e._gsap.swappedIn) {
          for (var o = Th.length, s = t.style, a = e.style, l; o--; ) l = Th[o], s[l] = n[l];
          s.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (s.display = "inline-block"), a[t_] = a[e_] = "auto", s.flexBasis = n.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[vo] = gu(e, ir) + pt, s[bo] = gu(e, gt) + pt, s[at] = a[Gr] = a[c2] = a[l2] = "0", ks(i), a[vo] = a["max" + Hs] = n[vo], a[bo] = a["max" + r_] = n[bo], a[at] = n[at], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = true;
        }
      }, O7 = /([A-Z])/g, ks = function(e) {
        if (e) {
          var t = e.t.style, n = e.length, i = 0, o, s;
          for ((e.t._gsap || Y.core.getCache(e.t)).uncache = 1; i < n; i += 2) s = e[i + 1], o = e[i], s ? t[o] = s : t[o] && t.removeProperty(o.replace(O7, "-$1").toLowerCase());
        }
      }, oc = function(e) {
        for (var t = Pc.length, n = e.style, i = [], o = 0; o < t; o++) i.push(Pc[o], n[Pc[o]]);
        return i.t = e, i;
      }, D7 = function(e, t, n) {
        for (var i = [], o = e.length, s = n ? 8 : 0, a; s < o; s += 2) a = e[s], i.push(a, a in t ? t[a] : e[s + 1]);
        return i.t = e.t, i;
      }, Tc = {
        left: 0,
        top: 0
      }, zw = function(e, t, n, i, o, s, a, l, c, u, h, d, p, m) {
        Wt(e) && (e = e(l)), Er(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? kc("0" + e.substr(3), n) : 0));
        var g = p ? p.time() : 0, b, y, w;
        if (p && p.seek(0), isNaN(e) || (e = +e), ga(e)) p && (e = Y.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, d, e)), a && Rc(a, n, i, true);
        else {
          Wt(t) && (t = t(l));
          var v = (e || "0").split(" "), S, C, E, k;
          w = ur(t, l) || xe, S = Wn(w) || {}, (!S || !S.left && !S.top) && Yr(w).display === "none" && (k = w.style.display, w.style.display = "block", S = Wn(w), k ? w.style.display = k : w.style.removeProperty("display")), C = kc(v[0], S[i.d]), E = kc(v[1] || "0", n), e = S[i.p] - c[i.p] - u + C + o - E, a && Rc(a, E, i, n - E < 20 || a._isStart && E > 20), n -= n - E;
        }
        if (m && (l[m] = e || -1e-3, e < 0 && (e = 0)), s) {
          var T = e + n, I = s._isStart;
          b = "scroll" + i.d2, Rc(s, T, i, I && T > 20 || !I && (h ? Math.max(xe[b], Tr[b]) : s.parentNode[b]) <= T + 1), h && (c = Wn(a), h && (s.style[i.op.p] = c[i.op.p] - i.op.m - s._offset + pt));
        }
        return p && w && (b = Wn(w), p.seek(d), y = Wn(w), p._caScrollDist = b[i.p] - y[i.p], e = e / p._caScrollDist * d), p && p.seek(g), p ? e : Math.round(e);
      }, F7 = /(webkit|moz|length|cssText|inset)/i, Nw = function(e, t, n, i) {
        if (e.parentNode !== t) {
          var o = e.style, s, a;
          if (t === xe) {
            e._stOrig = o.cssText, a = Yr(e);
            for (s in a) !+s && !F7.test(s) && a[s] && typeof o[s] == "string" && s !== "0" && (o[s] = a[s]);
            o.top = n, o.left = i;
          } else o.cssText = e._stOrig;
          Y.core.getCache(e).uncache = 1, t.appendChild(e);
        }
      }, _2 = function(e, t, n) {
        var i = t, o = i;
        return function(s) {
          var a = Math.round(e());
          return a !== i && a !== o && Math.abs(a - i) > 3 && Math.abs(a - o) > 3 && (s = a, n && n()), o = i, i = Math.round(s), i;
        };
      }, sc = function(e, t, n) {
        var i = {};
        i[t.p] = "+=" + n, Y.set(e, i);
      }, Lw = function(e, t) {
        var n = $i(e, t), i = "_scroll" + t.p2, o = function s(a, l, c, u, h) {
          var d = s.tween, p = l.onComplete, m = {};
          c = c || n();
          var g = _2(n, c, function() {
            d.kill(), s.tween = 0;
          });
          return h = u && h || 0, u = u || a - c, d && d.kill(), l[i] = a, l.inherit = false, l.modifiers = m, m[i] = function() {
            return g(c + u * d.ratio + h * d.ratio * d.ratio);
          }, l.onUpdate = function() {
            ce.cache++, s.tween && Kn();
          }, l.onComplete = function() {
            s.tween = 0, p && p.call(d);
          }, d = s.tween = Y.to(e, l), d;
        };
        return e[i] = n, n.wheelHandler = function() {
          return o.tween && o.tween.kill() && (o.tween = 0);
        }, St(e, "wheel", n.wheelHandler), se.isTouch && St(e, "touchmove", n.wheelHandler), o;
      }, se = function() {
        function r(t, n) {
          Ko || r.register(Y) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), kh(this), this.init(t, n);
        }
        var e = r.prototype;
        return e.init = function(n, i) {
          if (this.progress = this.start = 0, this.vars && this.kill(true, true), !pa) {
            this.update = this.refresh = this.kill = Sn;
            return;
          }
          n = Tw(Er(n) || ga(n) || n.nodeType ? {
            trigger: n
          } : n, nc);
          var o = n, s = o.onUpdate, a = o.toggleClass, l = o.id, c = o.onToggle, u = o.onRefresh, h = o.scrub, d = o.trigger, p = o.pin, m = o.pinSpacing, g = o.invalidateOnRefresh, b = o.anticipatePin, y = o.onScrubComplete, w = o.onSnapComplete, v = o.once, S = o.snap, C = o.pinReparent, E = o.pinSpacer, k = o.containerAnimation, T = o.fastScrollEnd, I = o.preventOverlaps, M = n.horizontal || n.containerAnimation && n.horizontal !== false ? ir : gt, H = !h && h !== 0, O = ur(n.scroller || le), Z = Y.core.getCache(O), $ = jo(O), U = ("pinType" in n ? n.pinType : Li(O, "pinType") || $ && "fixed") === "fixed", X = [
            n.onEnter,
            n.onLeave,
            n.onEnterBack,
            n.onLeaveBack
          ], W = H && n.toggleActions.split(" "), N = "markers" in n ? n.markers : nc.markers, L = $ ? 0 : parseFloat(Yr(O)["border" + M.p2 + Hs]) || 0, x = this, V = n.onRefreshInit && function() {
            return n.onRefreshInit(x);
          }, K = T7(O, $, M), Re = A7(O, $), re = 0, _e = 0, ue = 0, pe = $i(O, M), nt, it, Br, ot, mt, de, ze, zt, br, z, Sr, Nn, ai, Je, Ln, li, Xi, yt, ci, Qe, en, Ur, On, Vs, st, Cl, Dn, Do, Fo, ui, qi, fe, Ki, tn, rn, nn, Ji, Ho, Fn;
          if (x._startClamp = x._endClamp = false, x._dir = M, b *= 45, x.scroller = O, x.scroll = k ? k.time.bind(k) : pe, ot = pe(), x.vars = n, i = i || n.animation, "refreshPriority" in n && (e2 = 1, n.refreshPriority === -9999 && (Fa = x)), Z.tweenScroll = Z.tweenScroll || {
            top: Lw(O, gt),
            left: Lw(O, ir)
          }, x.tweenTo = nt = Z.tweenScroll[M.p], x.scrubDuration = function(B) {
            Ki = ga(B) && B, Ki ? fe ? fe.duration(B) : fe = Y.to(i, {
              ease: "expo",
              totalProgress: "+=0",
              inherit: false,
              duration: Ki,
              paused: true,
              onComplete: function() {
                return y && y(x);
              }
            }) : (fe && fe.progress(1).kill(), fe = 0);
          }, i && (i.vars.lazy = false, i._initted && !x.isReverted || i.vars.immediateRender !== false && n.immediateRender !== false && i.duration() && i.render(0, true, true), x.animation = i.pause(), i.scrollTrigger = x, x.scrubDuration(h), ui = 0, l || (l = i.vars.id)), S && ((!oo(S) || S.push) && (S = {
            snapTo: S
          }), "scrollBehavior" in xe.style && Y.set($ ? [
            xe,
            Tr
          ] : O, {
            scrollBehavior: "auto"
          }), ce.forEach(function(B) {
            return Wt(B) && B.target === ($ ? Te.scrollingElement || Tr : O) && (B.smooth = false);
          }), Br = Wt(S.snapTo) ? S.snapTo : S.snapTo === "labels" ? M7(i) : S.snapTo === "labelsDirectional" ? I7(i) : S.directional !== false ? function(B, ne) {
            return n_(S.snapTo)(B, Ut() - _e < 500 ? 0 : ne.direction);
          } : Y.utils.snap(S.snapTo), tn = S.duration || {
            min: 0.1,
            max: 2
          }, tn = oo(tn) ? za(tn.min, tn.max) : za(tn, tn), rn = Y.delayedCall(S.delay || Ki / 2 || 0.1, function() {
            var B = pe(), ne = Ut() - _e < 500, q = nt.tween;
            if ((ne || Math.abs(x.getVelocity()) < 10) && !q && !ed && re !== B) {
              var ie = (B - de) / Je, vt = i && !H ? i.totalProgress() : ie, ge = ne ? 0 : (vt - qi) / (Ut() - ha) * 1e3 || 0, Ze = Y.utils.clamp(-ie, 1 - ie, Vo(ge / 2) * ge / 0.185), Nt = ie + (S.inertia === false ? 0 : Ze), Ye, Ne, Ee = S, on = Ee.onStart, He = Ee.onInterrupt, xr = Ee.onComplete;
              if (Ye = Br(Nt, x), ga(Ye) || (Ye = Nt), Ne = Math.max(0, Math.round(de + Ye * Je)), B <= ze && B >= de && Ne !== B) {
                if (q && !q._initted && q.data <= Vo(Ne - B)) return;
                S.inertia === false && (Ze = Ye - ie), nt(Ne, {
                  duration: tn(Vo(Math.max(Vo(Nt - vt), Vo(Ye - vt)) * 0.185 / ge / 0.05 || 0)),
                  ease: S.ease || "power3",
                  data: Vo(Ne - B),
                  onInterrupt: function() {
                    return rn.restart(true) && He && He(x);
                  },
                  onComplete: function() {
                    x.update(), re = pe(), i && !H && (fe ? fe.resetTo("totalProgress", Ye, i._tTime / i._tDur) : i.progress(Ye)), ui = qi = i && !H ? i.totalProgress() : x.progress, w && w(x), xr && xr(x);
                  }
                }, B, Ze * Je, Ne - B - Ze * Je), on && on(x, nt.tween);
              }
            } else x.isActive && re !== B && rn.restart(true);
          }).pause()), l && (Eh[l] = x), d = x.trigger = ur(d || p !== true && p), Fn = d && d._gsap && d._gsap.stRevert, Fn && (Fn = Fn(x)), p = p === true ? d : ur(p), Er(a) && (a = {
            targets: d,
            className: a
          }), p && (m === false || m === Gr || (m = !m && p.parentNode && p.parentNode.style && Yr(p.parentNode).display === "flex" ? false : at), x.pin = p, it = Y.core.getCache(p), it.spacer ? Ln = it.pinState : (E && (E = ur(E), E && !E.nodeType && (E = E.current || E.nativeElement), it.spacerIsNative = !!E, E && (it.spacerState = oc(E))), it.spacer = yt = E || Te.createElement("div"), yt.classList.add("pin-spacer"), l && yt.classList.add("pin-spacer-" + l), it.pinState = Ln = oc(p)), n.force3D !== false && Y.set(p, {
            force3D: true
          }), x.spacer = yt = it.spacer, Fo = Yr(p), Vs = Fo[m + M.os2], Qe = Y.getProperty(p), en = Y.quickSetter(p, M.a, pt), Qd(p, yt, Fo), Xi = oc(p)), N) {
            Nn = oo(N) ? Tw(N, Aw) : Aw, z = ic("scroller-start", l, O, M, Nn, 0), Sr = ic("scroller-end", l, O, M, Nn, 0, z), ci = z["offset" + M.op.d2];
            var Ws = ur(Li(O, "content") || O);
            zt = this.markerStart = ic("start", l, Ws, M, Nn, ci, 0, k), br = this.markerEnd = ic("end", l, Ws, M, Nn, ci, 0, k), k && (Ho = Y.quickSetter([
              zt,
              br
            ], M.a, pt)), !U && !(In.length && Li(O, "fixedMarkers") === true) && (j7($ ? xe : O), Y.set([
              z,
              Sr
            ], {
              force3D: true
            }), Cl = Y.quickSetter(z, M.a, pt), Do = Y.quickSetter(Sr, M.a, pt));
          }
          if (k) {
            var oe = k.vars.onUpdate, J = k.vars.onUpdateParams;
            k.eventCallback("onUpdate", function() {
              x.update(0, 0, 1), oe && oe.apply(k, J || []);
            });
          }
          if (x.previous = function() {
            return ae[ae.indexOf(x) - 1];
          }, x.next = function() {
            return ae[ae.indexOf(x) + 1];
          }, x.revert = function(B, ne) {
            if (!ne) return x.kill(true);
            var q = B !== false || !x.enabled, ie = Ht;
            q !== x.isReverted && (q && (nn = Math.max(pe(), x.scroll.rec || 0), ue = x.progress, Ji = i && i.progress()), zt && [
              zt,
              br,
              z,
              Sr
            ].forEach(function(vt) {
              return vt.style.display = q ? "none" : "block";
            }), q && (Ht = x, x.update(q)), p && (!C || !x.isActive) && (q ? L7(p, yt, Ln) : Qd(p, yt, Yr(p), st)), q || x.update(q), Ht = ie, x.isReverted = q);
          }, x.refresh = function(B, ne, q, ie) {
            if (!((Ht || !x.enabled) && !ne)) {
              if (p && B && Jr) {
                St(r, "scrollEnd", d2);
                return;
              }
              !rr && V && V(x), Ht = x, nt.tween && !q && (nt.tween.kill(), nt.tween = 0), fe && fe.pause(), g && i && i.revert({
                kill: false
              }).invalidate(), x.isReverted || x.revert(true, true), x._subPinOffset = false;
              var vt = K(), ge = Re(), Ze = k ? k.duration() : Rn(O, M), Nt = Je <= 0.01, Ye = 0, Ne = ie || 0, Ee = oo(q) ? q.end : n.end, on = n.endTrigger || d, He = oo(q) ? q.start : n.start || (n.start === 0 || !d ? 0 : p ? "0 0" : "0 100%"), xr = x.pinnedContainer = n.pinnedContainer && ur(n.pinnedContainer, x), _n = d && Math.max(0, ae.indexOf(x)) || 0, Rt = _n, Et, Lt, Qi, kl, Ot, ft, gn, rd, o_, Gs, wn, Ys, Rl;
              for (N && oo(q) && (Ys = Y.getProperty(z, M.p), Rl = Y.getProperty(Sr, M.p)); Rt-- > 0; ) ft = ae[Rt], ft.end || ft.refresh(0, 1) || (Ht = x), gn = ft.pin, gn && (gn === d || gn === p || gn === xr) && !ft.isReverted && (Gs || (Gs = []), Gs.unshift(ft), ft.revert(true, true)), ft !== ae[Rt] && (_n--, Rt--);
              for (Wt(He) && (He = He(x)), He = kw(He, "start", x), de = zw(He, d, vt, M, pe(), zt, z, x, ge, L, U, Ze, k, x._startClamp && "_startClamp") || (p ? -1e-3 : 0), Wt(Ee) && (Ee = Ee(x)), Er(Ee) && !Ee.indexOf("+=") && (~Ee.indexOf(" ") ? Ee = (Er(He) ? He.split(" ")[0] : "") + Ee : (Ye = kc(Ee.substr(2), vt), Ee = Er(He) ? He : (k ? Y.utils.mapRange(0, k.duration(), k.scrollTrigger.start, k.scrollTrigger.end, de) : de) + Ye, on = d)), Ee = kw(Ee, "end", x), ze = Math.max(de, zw(Ee || (on ? "100% 0" : Ze), on, vt, M, pe() + Ye, br, Sr, x, ge, L, U, Ze, k, x._endClamp && "_endClamp")) || -1e-3, Ye = 0, Rt = _n; Rt--; ) ft = ae[Rt], gn = ft.pin, gn && ft.start - ft._pinPush <= de && !k && ft.end > 0 && (Et = ft.end - (x._startClamp ? Math.max(0, ft.start) : ft.start), (gn === d && ft.start - ft._pinPush < de || gn === xr) && isNaN(He) && (Ye += Et * (1 - ft.progress)), gn === p && (Ne += Et));
              if (de += Ye, ze += Ye, x._startClamp && (x._startClamp += Ye), x._endClamp && !rr && (x._endClamp = ze || -1e-3, ze = Math.min(ze, Rn(O, M))), Je = ze - de || (de -= 0.01) && 1e-3, Nt && (ue = Y.utils.clamp(0, 1, Y.utils.normalize(de, ze, nn))), x._pinPush = Ne, zt && Ye && (Et = {}, Et[M.a] = "+=" + Ye, xr && (Et[M.p] = "-=" + pe()), Y.set([
                zt,
                br
              ], Et)), p && !(Rh && x.end >= Rn(O, M))) Et = Yr(p), kl = M === gt, Qi = pe(), Ur = parseFloat(Qe(M.a)) + Ne, !Ze && ze > 1 && (wn = ($ ? Te.scrollingElement || Tr : O).style, wn = {
                style: wn,
                value: wn["overflow" + M.a.toUpperCase()]
              }, $ && Yr(xe)["overflow" + M.a.toUpperCase()] !== "scroll" && (wn.style["overflow" + M.a.toUpperCase()] = "scroll")), Qd(p, yt, Et), Xi = oc(p), Lt = Wn(p, true), rd = U && $i(O, kl ? ir : gt)(), m ? (st = [
                m + M.os2,
                Je + Ne + pt
              ], st.t = yt, Rt = m === at ? gu(p, M) + Je + Ne : 0, Rt && (st.push(M.d, Rt + pt), yt.style.flexBasis !== "auto" && (yt.style.flexBasis = Rt + pt)), ks(st), xr && ae.forEach(function(Xs) {
                Xs.pin === xr && Xs.vars.pinSpacing !== false && (Xs._subPinOffset = true);
              }), U && pe(nn)) : (Rt = gu(p, M), Rt && yt.style.flexBasis !== "auto" && (yt.style.flexBasis = Rt + pt)), U && (Ot = {
                top: Lt.top + (kl ? Qi - de : rd) + pt,
                left: Lt.left + (kl ? rd : Qi - de) + pt,
                boxSizing: "border-box",
                position: "fixed"
              }, Ot[vo] = Ot["max" + Hs] = Math.ceil(Lt.width) + pt, Ot[bo] = Ot["max" + r_] = Math.ceil(Lt.height) + pt, Ot[Gr] = Ot[Gr + Oa] = Ot[Gr + Na] = Ot[Gr + Da] = Ot[Gr + La] = "0", Ot[at] = Et[at], Ot[at + Oa] = Et[at + Oa], Ot[at + Na] = Et[at + Na], Ot[at + Da] = Et[at + Da], Ot[at + La] = Et[at + La], li = D7(Ln, Ot, C), rr && pe(0)), i ? (o_ = i._initted, Yd(1), i.render(i.duration(), true, true), On = Qe(M.a) - Ur + Je + Ne, Dn = Math.abs(Je - On) > 1, U && Dn && li.splice(li.length - 2, 2), i.render(0, true, true), o_ || i.invalidate(true), i.parent || i.totalTime(i.totalTime()), Yd(0)) : On = Je, wn && (wn.value ? wn.style["overflow" + M.a.toUpperCase()] = wn.value : wn.style.removeProperty("overflow-" + M.a));
              else if (d && pe() && !k) for (Lt = d.parentNode; Lt && Lt !== xe; ) Lt._pinOffset && (de -= Lt._pinOffset, ze -= Lt._pinOffset), Lt = Lt.parentNode;
              Gs && Gs.forEach(function(Xs) {
                return Xs.revert(false, true);
              }), x.start = de, x.end = ze, ot = mt = rr ? nn : pe(), !k && !rr && (ot < nn && pe(nn), x.scroll.rec = 0), x.revert(false, true), _e = Ut(), rn && (re = -1, rn.restart(true)), Ht = 0, i && H && (i._initted || Ji) && i.progress() !== Ji && i.progress(Ji || 0, true).render(i.time(), true, true), (Nt || ue !== x.progress || k || g || i && !i._initted) && (i && !H && i.totalProgress(k && de < -1e-3 && !ue ? Y.utils.normalize(de, ze, 0) : ue, true), x.progress = Nt || (ot - de) / Je === ue ? 0 : ue), p && m && (yt._pinOffset = Math.round(x.progress * On)), fe && fe.invalidate(), isNaN(Ys) || (Ys -= Y.getProperty(z, M.p), Rl -= Y.getProperty(Sr, M.p), sc(z, M, Ys), sc(zt, M, Ys - (ie || 0)), sc(Sr, M, Rl), sc(br, M, Rl - (ie || 0))), Nt && !rr && x.update(), u && !rr && !ai && (ai = true, u(x), ai = false);
            }
          }, x.getVelocity = function() {
            return (pe() - mt) / (Ut() - ha) * 1e3 || 0;
          }, x.endAnimation = function() {
            oa(x.callbackAnimation), i && (fe ? fe.progress(1) : i.paused() ? H || oa(i, x.direction < 0, 1) : oa(i, i.reversed()));
          }, x.labelToScroll = function(B) {
            return i && i.labels && (de || x.refresh() || de) + i.labels[B] / i.duration() * Je || 0;
          }, x.getTrailing = function(B) {
            var ne = ae.indexOf(x), q = x.direction > 0 ? ae.slice(0, ne).reverse() : ae.slice(ne + 1);
            return (Er(B) ? q.filter(function(ie) {
              return ie.vars.preventOverlaps === B;
            }) : q).filter(function(ie) {
              return x.direction > 0 ? ie.end <= de : ie.start >= ze;
            });
          }, x.update = function(B, ne, q) {
            if (!(k && !q && !B)) {
              var ie = rr === true ? nn : x.scroll(), vt = B ? 0 : (ie - de) / Je, ge = vt < 0 ? 0 : vt > 1 ? 1 : vt || 0, Ze = x.progress, Nt, Ye, Ne, Ee, on, He, xr, _n;
              if (ne && (mt = ot, ot = k ? pe() : ie, S && (qi = ui, ui = i && !H ? i.totalProgress() : ge)), b && p && !Ht && !Zl && Jr && (!ge && de < ie + (ie - mt) / (Ut() - ha) * b ? ge = 1e-4 : ge === 1 && ze > ie + (ie - mt) / (Ut() - ha) * b && (ge = 0.9999)), ge !== Ze && x.enabled) {
                if (Nt = x.isActive = !!ge && ge < 1, Ye = !!Ze && Ze < 1, He = Nt !== Ye, on = He || !!ge != !!Ze, x.direction = ge > Ze ? 1 : -1, x.progress = ge, on && !Ht && (Ne = ge && !Ze ? 0 : ge === 1 ? 1 : Ze === 1 ? 2 : 3, H && (Ee = !He && W[Ne + 1] !== "none" && W[Ne + 1] || W[Ne], _n = i && (Ee === "complete" || Ee === "reset" || Ee in i))), I && (He || _n) && (_n || h || !i) && (Wt(I) ? I(x) : x.getTrailing(I).forEach(function(Qi) {
                  return Qi.endAnimation();
                })), H || (fe && !Ht && !Zl ? (fe._dp._time - fe._start !== fe._time && fe.render(fe._dp._time - fe._start), fe.resetTo ? fe.resetTo("totalProgress", ge, i._tTime / i._tDur) : (fe.vars.totalProgress = ge, fe.invalidate().restart())) : i && i.totalProgress(ge, !!(Ht && (_e || B)))), p) {
                  if (B && m && (yt.style[m + M.os2] = Vs), !U) en(_a(Ur + On * ge));
                  else if (on) {
                    if (xr = !B && ge > Ze && ze + 1 > ie && ie + 1 >= Rn(O, M), C) if (!B && (Nt || xr)) {
                      var Rt = Wn(p, true), Et = ie - de;
                      Nw(p, xe, Rt.top + (M === gt ? Et : 0) + pt, Rt.left + (M === gt ? 0 : Et) + pt);
                    } else Nw(p, yt);
                    ks(Nt || xr ? li : Xi), Dn && ge < 1 && Nt || en(Ur + (ge === 1 && !xr ? On : 0));
                  }
                }
                S && !nt.tween && !Ht && !Zl && rn.restart(true), a && (He || v && ge && (ge < 1 || !Xd)) && pl(a.targets).forEach(function(Qi) {
                  return Qi.classList[Nt || v ? "add" : "remove"](a.className);
                }), s && !H && !B && s(x), on && !Ht ? (H && (_n && (Ee === "complete" ? i.pause().totalProgress(1) : Ee === "reset" ? i.restart(true).pause() : Ee === "restart" ? i.restart(true) : i[Ee]()), s && s(x)), (He || !Xd) && (c && He && Kd(x, c), X[Ne] && Kd(x, X[Ne]), v && (ge === 1 ? x.kill(false, 1) : X[Ne] = 0), He || (Ne = ge === 1 ? 1 : 3, X[Ne] && Kd(x, X[Ne]))), T && !Nt && Math.abs(x.getVelocity()) > (ga(T) ? T : 2500) && (oa(x.callbackAnimation), fe ? fe.progress(1) : oa(i, Ee === "reverse" ? 1 : !ge, 1))) : H && s && !Ht && s(x);
              }
              if (Do) {
                var Lt = k ? ie / k.duration() * (k._caScrollDist || 0) : ie;
                Cl(Lt + (z._isFlipped ? 1 : 0)), Do(Lt);
              }
              Ho && Ho(-ie / k.duration() * (k._caScrollDist || 0));
            }
          }, x.enable = function(B, ne) {
            x.enabled || (x.enabled = true, St(O, "resize", wa), $ || St(O, "scroll", Wo), V && St(r, "refreshInit", V), B !== false && (x.progress = ue = 0, ot = mt = re = pe()), ne !== false && x.refresh());
          }, x.getTween = function(B) {
            return B && nt ? nt.tween : fe;
          }, x.setPositions = function(B, ne, q, ie) {
            if (k) {
              var vt = k.scrollTrigger, ge = k.duration(), Ze = vt.end - vt.start;
              B = vt.start + Ze * B / ge, ne = vt.start + Ze * ne / ge;
            }
            x.refresh(false, false, {
              start: Rw(B, q && !!x._startClamp),
              end: Rw(ne, q && !!x._endClamp)
            }, ie), x.update();
          }, x.adjustPinSpacing = function(B) {
            if (st && B) {
              var ne = st.indexOf(M.d) + 1;
              st[ne] = parseFloat(st[ne]) + B + pt, st[1] = parseFloat(st[1]) + B + pt, ks(st);
            }
          }, x.disable = function(B, ne) {
            if (x.enabled && (B !== false && x.revert(true, true), x.enabled = x.isActive = false, ne || fe && fe.pause(), nn = 0, it && (it.uncache = 1), V && bt(r, "refreshInit", V), rn && (rn.pause(), nt.tween && nt.tween.kill() && (nt.tween = 0)), !$)) {
              for (var q = ae.length; q--; ) if (ae[q].scroller === O && ae[q] !== x) return;
              bt(O, "resize", wa), $ || bt(O, "scroll", Wo);
            }
          }, x.kill = function(B, ne) {
            x.disable(B, ne), fe && !ne && fe.kill(), l && delete Eh[l];
            var q = ae.indexOf(x);
            q >= 0 && ae.splice(q, 1), q === tr && Ec > 0 && tr--, q = 0, ae.forEach(function(ie) {
              return ie.scroller === x.scroller && (q = 1);
            }), q || rr || (x.scroll.rec = 0), i && (i.scrollTrigger = null, B && i.revert({
              kill: false
            }), ne || i.kill()), zt && [
              zt,
              br,
              z,
              Sr
            ].forEach(function(ie) {
              return ie.parentNode && ie.parentNode.removeChild(ie);
            }), Fa === x && (Fa = 0), p && (it && (it.uncache = 1), q = 0, ae.forEach(function(ie) {
              return ie.pin === p && q++;
            }), q || (it.spacer = 0)), n.onKill && n.onKill(x);
          }, ae.push(x), x.enable(false, false), Fn && Fn(x), i && i.add && !Je) {
            var Se = x.update;
            x.update = function() {
              x.update = Se, ce.cache++, de || ze || x.refresh();
            }, Y.delayedCall(0.01, x.update), Je = 0.01, de = ze = 0;
          } else x.refresh();
          p && N7();
        }, r.register = function(n) {
          return Ko || (Y = n || o2(), i2() && window.document && r.enable(), Ko = pa), Ko;
        }, r.defaults = function(n) {
          if (n) for (var i in n) nc[i] = n[i];
          return nc;
        }, r.disable = function(n, i) {
          pa = 0, ae.forEach(function(s) {
            return s[i ? "kill" : "disable"](n);
          }), bt(le, "wheel", Wo), bt(Te, "scroll", Wo), clearInterval(Ql), bt(Te, "touchcancel", Sn), bt(xe, "touchstart", Sn), tc(bt, Te, "pointerdown,touchstart,mousedown", Ew), tc(bt, Te, "pointerup,touchend,mouseup", Pw), pu.kill(), ec(bt);
          for (var o = 0; o < ce.length; o += 3) rc(bt, ce[o], ce[o + 1]), rc(bt, ce[o], ce[o + 2]);
        }, r.enable = function() {
          if (le = window, Te = document, Tr = Te.documentElement, xe = Te.body, Y && (pl = Y.utils.toArray, za = Y.utils.clamp, kh = Y.core.context || Sn, Yd = Y.core.suppressOverwrites || Sn, Qp = le.history.scrollRestoration || "auto", Ph = le.pageYOffset || 0, Y.core.globals("ScrollTrigger", r), xe)) {
            pa = 1, Cs = document.createElement("div"), Cs.style.height = "100vh", Cs.style.position = "absolute", p2(), P7(), rt.register(Y), r.isTouch = rt.isTouch, hi = rt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ch = rt.isTouch === 1, St(le, "wheel", Wo), Jp = [
              le,
              Te,
              Tr,
              xe
            ], Y.matchMedia ? (r.matchMedia = function(c) {
              var u = Y.matchMedia(), h;
              for (h in c) u.add(h, c[h]);
              return u;
            }, Y.addEventListener("matchMediaInit", function() {
              return i_();
            }), Y.addEventListener("matchMediaRevert", function() {
              return f2();
            }), Y.addEventListener("matchMedia", function() {
              fo(0, 1), Io("matchMedia");
            }), Y.matchMedia().add("(orientation: portrait)", function() {
              return Jd(), Jd;
            })) : console.warn("Requires GSAP 3.11.0 or later"), Jd(), St(Te, "scroll", Wo);
            var n = xe.hasAttribute("style"), i = xe.style, o = i.borderTopStyle, s = Y.core.Animation.prototype, a, l;
            for (s.revert || Object.defineProperty(s, "revert", {
              value: function() {
                return this.time(-0.01, true);
              }
            }), i.borderTopStyle = "solid", a = Wn(xe), gt.m = Math.round(a.top + gt.sc()) || 0, ir.m = Math.round(a.left + ir.sc()) || 0, o ? i.borderTopStyle = o : i.removeProperty("border-top-style"), n || (xe.setAttribute("style", ""), xe.removeAttribute("style")), Ql = setInterval(jw, 250), Y.delayedCall(0.5, function() {
              return Zl = 0;
            }), St(Te, "touchcancel", Sn), St(xe, "touchstart", Sn), tc(St, Te, "pointerdown,touchstart,mousedown", Ew), tc(St, Te, "pointerup,touchend,mouseup", Pw), xh = Y.utils.checkPrefix("transform"), Pc.push(xh), Ko = Ut(), pu = Y.delayedCall(0.2, fo).pause(), Jo = [
              Te,
              "visibilitychange",
              function() {
                var c = le.innerWidth, u = le.innerHeight;
                Te.hidden ? (xw = c, Cw = u) : (xw !== c || Cw !== u) && wa();
              },
              Te,
              "DOMContentLoaded",
              fo,
              le,
              "load",
              fo,
              le,
              "resize",
              wa
            ], ec(St), ae.forEach(function(c) {
              return c.enable(0, 1);
            }), l = 0; l < ce.length; l += 3) rc(bt, ce[l], ce[l + 1]), rc(bt, ce[l], ce[l + 2]);
          }
        }, r.config = function(n) {
          "limitCallbacks" in n && (Xd = !!n.limitCallbacks);
          var i = n.syncInterval;
          i && clearInterval(Ql) || (Ql = i) && setInterval(jw, i), "ignoreMobileResize" in n && (Ch = r.isTouch === 1 && n.ignoreMobileResize), "autoRefreshEvents" in n && (ec(bt) || ec(St, n.autoRefreshEvents || "none"), t2 = (n.autoRefreshEvents + "").indexOf("resize") === -1);
        }, r.scrollerProxy = function(n, i) {
          var o = ur(n), s = ce.indexOf(o), a = jo(o);
          ~s && ce.splice(s, a ? 6 : 2), i && (a ? In.unshift(le, i, xe, i, Tr, i) : In.unshift(o, i));
        }, r.clearMatchMedia = function(n) {
          ae.forEach(function(i) {
            return i._ctx && i._ctx.query === n && i._ctx.kill(true, true);
          });
        }, r.isInViewport = function(n, i, o) {
          var s = (Er(n) ? ur(n) : n).getBoundingClientRect(), a = s[o ? vo : bo] * i || 0;
          return o ? s.right - a > 0 && s.left + a < le.innerWidth : s.bottom - a > 0 && s.top + a < le.innerHeight;
        }, r.positionInViewport = function(n, i, o) {
          Er(n) && (n = ur(n));
          var s = n.getBoundingClientRect(), a = s[o ? vo : bo], l = i == null ? a / 2 : i in wu ? wu[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
          return o ? (s.left + l) / le.innerWidth : (s.top + l) / le.innerHeight;
        }, r.killAll = function(n) {
          if (ae.slice(0).forEach(function(o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }), n !== true) {
            var i = Mo.killAll || [];
            Mo = {}, i.forEach(function(o) {
              return o();
            });
          }
        }, r;
      }();
      se.version = "3.12.7";
      se.saveStyles = function(r) {
        return r ? pl(r).forEach(function(e) {
          if (e && e.style) {
            var t = kr.indexOf(e);
            t >= 0 && kr.splice(t, 5), kr.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Y.core.getCache(e), kh());
          }
        }) : kr;
      };
      se.revert = function(r, e) {
        return i_(!r, e);
      };
      se.create = function(r, e) {
        return new se(r, e);
      };
      se.refresh = function(r) {
        return r ? wa(true) : (Ko || se.register()) && fo(true);
      };
      se.update = function(r) {
        return ++ce.cache && Kn(r === true ? 2 : 0);
      };
      se.clearScrollMemory = h2;
      se.maxScroll = function(r, e) {
        return Rn(r, e ? ir : gt);
      };
      se.getScrollFunc = function(r, e) {
        return $i(ur(r), e ? ir : gt);
      };
      se.getById = function(r) {
        return Eh[r];
      };
      se.getAll = function() {
        return ae.filter(function(r) {
          return r.vars.id !== "ScrollSmoother";
        });
      };
      se.isScrolling = function() {
        return !!Jr;
      };
      se.snapDirectional = n_;
      se.addEventListener = function(r, e) {
        var t = Mo[r] || (Mo[r] = []);
        ~t.indexOf(e) || t.push(e);
      };
      se.removeEventListener = function(r, e) {
        var t = Mo[r], n = t && t.indexOf(e);
        n >= 0 && t.splice(n, 1);
      };
      se.batch = function(r, e) {
        var t = [], n = {}, i = e.interval || 0.016, o = e.batchMax || 1e9, s = function(c, u) {
          var h = [], d = [], p = Y.delayedCall(i, function() {
            u(h, d), h = [], d = [];
          }).pause();
          return function(m) {
            h.length || p.restart(true), h.push(m.trigger), d.push(m), o <= h.length && p.progress(1);
          };
        }, a;
        for (a in e) n[a] = a.substr(0, 2) === "on" && Wt(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
        return Wt(o) && (o = o(), St(se, "refresh", function() {
          return o = e.batchMax();
        })), pl(r).forEach(function(l) {
          var c = {};
          for (a in n) c[a] = n[a];
          c.trigger = l, t.push(se.create(c));
        }), t;
      };
      var Ow = function(e, t, n, i) {
        return t > i ? e(i) : t < 0 && e(0), n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1;
      }, Zd = function r(e, t) {
        t === true ? e.style.removeProperty("touch-action") : e.style.touchAction = t === true ? "auto" : t ? "pan-" + t + (rt.isTouch ? " pinch-zoom" : "") : "none", e === Tr && r(xe, t);
      }, ac = {
        auto: 1,
        scroll: 1
      }, H7 = function(e) {
        var t = e.event, n = e.target, i = e.axis, o = (t.changedTouches ? t.changedTouches[0] : t).target, s = o._gsap || Y.core.getCache(o), a = Ut(), l;
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
          for (; o && o !== xe && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(ac[(l = Yr(o)).overflowY] || ac[l.overflowX])); ) o = o.parentNode;
          s._isScroll = o && o !== n && !jo(o) && (ac[(l = Yr(o)).overflowY] || ac[l.overflowX]), s._isScrollT = a;
        }
        (s._isScroll || i === "x") && (t.stopPropagation(), t._gsapAllow = true);
      }, g2 = function(e, t, n, i) {
        return rt.create({
          target: e,
          capture: true,
          debounce: false,
          lockAxis: true,
          type: t,
          onWheel: i = i && H7,
          onPress: i,
          onDrag: i,
          onScroll: i,
          onEnable: function() {
            return n && St(Te, rt.eventTypes[0], Fw, false, true);
          },
          onDisable: function() {
            return bt(Te, rt.eventTypes[0], Fw, true);
          }
        });
      }, B7 = /(input|label|select|textarea)/i, Dw, Fw = function(e) {
        var t = B7.test(e.target.tagName);
        (t || Dw) && (e._gsapAllow = true, Dw = t);
      }, U7 = function(e) {
        oo(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = true, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var t = e, n = t.normalizeScrollX, i = t.momentum, o = t.allowNestedScroll, s = t.onRelease, a, l, c = ur(e.target) || Tr, u = Y.core.globals().ScrollSmoother, h = u && u.get(), d = hi && (e.content && ur(e.content) || h && e.content !== false && !h.smooth() && h.content()), p = $i(c, gt), m = $i(c, ir), g = 1, b = (rt.isTouch && le.visualViewport ? le.visualViewport.scale * le.visualViewport.width : le.outerWidth) / le.innerWidth, y = 0, w = Wt(i) ? function() {
          return i(a);
        } : function() {
          return i || 2.8;
        }, v, S, C = g2(c, e.type, true, o), E = function() {
          return S = false;
        }, k = Sn, T = Sn, I = function() {
          l = Rn(c, gt), T = za(hi ? 1 : 0, l), n && (k = za(0, Rn(c, ir))), v = So;
        }, M = function() {
          d._gsap.y = _a(parseFloat(d._gsap.y) + p.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", p.offset = p.cacheID = 0;
        }, H = function() {
          if (S) {
            requestAnimationFrame(E);
            var N = _a(a.deltaY / 2), L = T(p.v - N);
            if (d && L !== p.v + p.offset) {
              p.offset = L - p.v;
              var x = _a((parseFloat(d && d._gsap.y) || 0) - p.offset);
              d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + x + ", 0, 1)", d._gsap.y = x + "px", p.cacheID = ce.cache, Kn();
            }
            return true;
          }
          p.offset && M(), S = true;
        }, O, Z, $, U, X = function() {
          I(), O.isActive() && O.vars.scrollY > l && (p() > l ? O.progress(1) && p(l) : O.resetTo("scrollY", l));
        };
        return d && Y.set(d, {
          y: "+=0"
        }), e.ignoreCheck = function(W) {
          return hi && W.type === "touchmove" && H() || g > 1.05 && W.type !== "touchstart" || a.isGesturing || W.touches && W.touches.length > 1;
        }, e.onPress = function() {
          S = false;
          var W = g;
          g = _a((le.visualViewport && le.visualViewport.scale || 1) / b), O.pause(), W !== g && Zd(c, g > 1.01 ? true : n ? false : "x"), Z = m(), $ = p(), I(), v = So;
        }, e.onRelease = e.onGestureStart = function(W, N) {
          if (p.offset && M(), !N) U.restart(true);
          else {
            ce.cache++;
            var L = w(), x, V;
            n && (x = m(), V = x + L * 0.05 * -W.velocityX / 0.227, L *= Ow(m, x, V, Rn(c, ir)), O.vars.scrollX = k(V)), x = p(), V = x + L * 0.05 * -W.velocityY / 0.227, L *= Ow(p, x, V, Rn(c, gt)), O.vars.scrollY = T(V), O.invalidate().duration(L).play(0.01), (hi && O.vars.scrollY >= l || x >= l - 1) && Y.to({}, {
              onUpdate: X,
              duration: L
            });
          }
          s && s(W);
        }, e.onWheel = function() {
          O._ts && O.pause(), Ut() - y > 1e3 && (v = 0, y = Ut());
        }, e.onChange = function(W, N, L, x, V) {
          if (So !== v && I(), N && n && m(k(x[2] === N ? Z + (W.startX - W.x) : m() + N - x[1])), L) {
            p.offset && M();
            var K = V[2] === L, Re = K ? $ + W.startY - W.y : p() + L - V[1], re = T(Re);
            K && Re !== re && ($ += re - Re), p(re);
          }
          (L || N) && Kn();
        }, e.onEnable = function() {
          Zd(c, n ? false : "x"), se.addEventListener("refresh", X), St(le, "resize", X), p.smooth && (p.target.style.scrollBehavior = "auto", p.smooth = m.smooth = false), C.enable();
        }, e.onDisable = function() {
          Zd(c, true), bt(le, "resize", X), se.removeEventListener("refresh", X), C.kill();
        }, e.lockAxis = e.lockAxis !== false, a = new rt(e), a.iOS = hi, hi && !p() && p(1), hi && Y.ticker.add(Sn), U = a._dc, O = Y.to(a, {
          ease: "power4",
          paused: true,
          inherit: false,
          scrollX: n ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: _2(p, p(), function() {
              return O.pause();
            })
          },
          onUpdate: Kn,
          onComplete: U.vars.onComplete
        }), a;
      };
      se.sort = function(r) {
        if (Wt(r)) return ae.sort(r);
        var e = le.pageYOffset || 0;
        return se.getAll().forEach(function(t) {
          return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + le.innerHeight;
        }), ae.sort(r || function(t, n) {
          return (t.vars.refreshPriority || 0) * -1e6 + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((n.vars.containerAnimation ? 1e6 : n._sortY) + (n.vars.refreshPriority || 0) * -1e6);
        });
      };
      se.observe = function(r) {
        return new rt(r);
      };
      se.normalizeScroll = function(r) {
        if (typeof r > "u") return Zt;
        if (r === true && Zt) return Zt.enable();
        if (r === false) {
          Zt && Zt.kill(), Zt = r;
          return;
        }
        var e = r instanceof rt ? r : U7(r);
        return Zt && Zt.target === e.target && Zt.kill(), jo(e.target) && (Zt = e), e;
      };
      se.core = {
        _getVelocityProp: Sh,
        _inputObserver: g2,
        _scrollers: ce,
        _proxies: In,
        bridge: {
          ss: function() {
            Jr || Io("scrollStart"), Jr = Ut();
          },
          ref: function() {
            return Ht;
          }
        }
      };
      o2() && Y.registerPlugin(se);
      var w2 = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
      }, Hw = Pn.createContext && Pn.createContext(w2), $7 = [
        "attr",
        "size",
        "title"
      ];
      function V7(r, e) {
        if (r == null) return {};
        var t = W7(r, e), n, i;
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          for (i = 0; i < o.length; i++) n = o[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }
      function W7(r, e) {
        if (r == null) return {};
        var t = {};
        for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n)) {
          if (e.indexOf(n) >= 0) continue;
          t[n] = r[n];
        }
        return t;
      }
      function mu() {
        return mu = Object.assign ? Object.assign.bind() : function(r) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
          }
          return r;
        }, mu.apply(this, arguments);
      }
      function Bw(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(r, i).enumerable;
          })), t.push.apply(t, n);
        }
        return t;
      }
      function yu(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2 ? Bw(Object(t), true).forEach(function(n) {
            G7(r, n, t[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Bw(Object(t)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
        }
        return r;
      }
      function G7(r, e, t) {
        return e = Y7(e), e in r ? Object.defineProperty(r, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : r[e] = t, r;
      }
      function Y7(r) {
        var e = X7(r, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      function X7(r, e) {
        if (typeof r != "object" || !r) return r;
        var t = r[Symbol.toPrimitive];
        if (t !== void 0) {
          var n = t.call(r, e);
          if (typeof n != "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(r);
      }
      function m2(r) {
        return r && r.map((e, t) => Pn.createElement(e.tag, yu({
          key: t
        }, e.attr), m2(e.child)));
      }
      function be(r) {
        return (e) => Pn.createElement(q7, mu({
          attr: yu({}, r.attr)
        }, e), m2(r.child));
      }
      function q7(r) {
        var e = (t) => {
          var { attr: n, size: i, title: o } = r, s = V7(r, $7), a = i || t.size || "1em", l;
          return t.className && (l = t.className), r.className && (l = (l ? l + " " : "") + r.className), Pn.createElement("svg", mu({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
          }, t.attr, n, s, {
            className: l,
            style: yu(yu({
              color: r.color || t.color
            }, t.style), r.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
          }), o && Pn.createElement("title", null, o), r.children);
        };
        return Hw !== void 0 ? Pn.createElement(Hw.Consumer, null, (t) => e(t)) : e(w2);
      }
      function K7(r) {
        return be({
          attr: {
            viewBox: "0 0 496 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              },
              child: []
            }
          ]
        })(r);
      }
      function J7(r) {
        return be({
          attr: {
            viewBox: "0 0 496 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
              },
              child: []
            }
          ]
        })(r);
      }
      function Q7(r) {
        return be({
          attr: {
            viewBox: "0 0 512 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
              },
              child: []
            }
          ]
        })(r);
      }
      function Z7(r) {
        return be({
          attr: {
            viewBox: "0 0 448 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
              },
              child: []
            }
          ]
        })(r);
      }
      function e9(r) {
        return be({
          attr: {
            viewBox: "0 0 448 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
              },
              child: []
            }
          ]
        })(r);
      }
      function t9(r) {
        return be({
          attr: {
            viewBox: "0 0 448 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              },
              child: []
            }
          ]
        })(r);
      }
      function r9(r) {
        return be({
          attr: {
            viewBox: "0 0 448 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
              },
              child: []
            }
          ]
        })(r);
      }
      function Ah(r) {
        return be({
          attr: {
            viewBox: "0 0 640 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
              },
              child: []
            }
          ]
        })(r);
      }
      function n9(r) {
        return be({
          attr: {
            viewBox: "0 0 640 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
              },
              child: []
            }
          ]
        })(r);
      }
      function i9(r) {
        return be({
          attr: {
            viewBox: "0 0 576 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
              },
              child: []
            }
          ]
        })(r);
      }
      function o9(r) {
        return be({
          attr: {
            viewBox: "0 0 512 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              },
              child: []
            }
          ]
        })(r);
      }
      function s9(r) {
        return be({
          attr: {
            viewBox: "0 0 512 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
              },
              child: []
            }
          ]
        })(r);
      }
      function a9(r) {
        return be({
          attr: {
            viewBox: "0 0 512 512"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
              },
              child: []
            }
          ]
        })(r);
      }
      function l9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
              },
              child: []
            }
          ]
        })(r);
      }
      function c9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"
              },
              child: []
            }
          ]
        })(r);
      }
      function u9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
              },
              child: []
            }
          ]
        })(r);
      }
      function d9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
              },
              child: []
            }
          ]
        })(r);
      }
      function f9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              },
              child: []
            }
          ]
        })(r);
      }
      function h9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
              },
              child: []
            }
          ]
        })(r);
      }
      function p9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M9 1h6v2H9zM19.03 7.39l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM13 14h-2V8h2v6z"
              },
              child: []
            }
          ]
        })(r);
      }
      function _9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              },
              child: []
            }
          ]
        })(r);
      }
      function g9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              },
              child: []
            }
          ]
        })(r);
      }
      function w9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63a3 3 0 0 1 0-4.24l4.24-4.24a3 3 0 0 1 4.24 0L16.48 9c.39.39.39 1.02 0 1.41zm.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62a.996.996 0 1 0 1.41 1.41l4.62-4.62.71.71-4.62 4.62a.996.996 0 1 0 1.41 1.41l8.32-8.34a3 3 0 0 0 0-4.24l-4.24-4.24a3.001 3.001 0 0 0-4.18-.06l4.47 4.47z"
              },
              child: []
            }
          ]
        })(r);
      }
      function m9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
              },
              child: []
            }
          ]
        })(r);
      }
      function y9(r) {
        return be({
          attr: {
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
              },
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"
              },
              child: []
            }
          ]
        })(r);
      }
      Tt.registerPlugin(se);
      const v9 = () => {
        const { t: r, i18n: e } = Lo(), [t, n] = F.useState("hard"), [i, o] = F.useState(null), s = F.useRef(null), a = F.useRef(null), l = F.useRef(null), c = F.useRef({}), u = [
          {
            name: r("skills.categories.frontend"),
            icon: P.jsx(Ah, {}),
            skills: [
              {
                name: "HTML (HTML5), EJS, JSX",
                level: 9
              },
              {
                name: "CSS (CSS3), SASS (SCSS), PostCSS",
                level: 9
              },
              {
                name: "Bootstrap, Tailwind, Animations",
                level: 8
              },
              {
                name: "JavaScript (ES6+, OOP), jQuery",
                level: 9
              },
              {
                name: "TypeScript",
                level: 8
              },
              {
                name: "React",
                level: 9
              }
            ]
          },
          {
            name: r("skills.categories.libraries"),
            icon: P.jsx(n9, {}),
            skills: [
              {
                name: "Redux (Redux Toolkit, Redux Persist)",
                level: 8
              },
              {
                name: "MobX, Zustand",
                level: 7
              },
              {
                name: "Formik, React Hook Form, Yup",
                level: 8
              },
              {
                name: "Axios, React Router, React Query",
                level: 8
              }
            ]
          },
          {
            name: r("skills.categories.tools"),
            icon: P.jsx(a9, {}),
            skills: [
              {
                name: "Webpack, Vite, Gulp, Rollup",
                level: 8
              },
              {
                name: "Jest, React Testing Library",
                level: 7
              },
              {
                name: "Enzyme, Chai, Mocha, Vitest",
                level: 6
              },
              {
                name: "Git (GitHub, BitBucket, GitLab)",
                level: 8
              },
              {
                name: "Figma, Adobe Photoshop, Avocode",
                level: 7
              }
            ]
          },
          {
            name: r("skills.categories.other"),
            icon: P.jsx(i9, {}),
            skills: [
              {
                name: "REST API, WebSockets, Long Polling",
                level: 8
              },
              {
                name: "BEM, Feature-Sliced Design",
                level: 9
              },
              {
                name: "Accessibility, UX",
                level: 7
              },
              {
                name: "CMS 1C-Bitrix, Drupal, OpenCart, MODX",
                level: 6
              },
              {
                name: "PHP, Blade, Twig (Basic understanding)",
                level: 5
              },
              {
                name: "Agile, Waterfall, SCRUM",
                level: 7
              },
              {
                name: "English level - B1",
                level: 7
              }
            ]
          }
        ], h = [
          {
            key: "teamwork",
            icon: P.jsx(m9, {})
          },
          {
            key: "deadlines",
            icon: P.jsx(p9, {})
          },
          {
            key: "attention",
            icon: P.jsx(f9, {})
          },
          {
            key: "codeQuality",
            icon: P.jsx(_9, {})
          },
          {
            key: "timeManagement",
            icon: P.jsx(u9, {})
          },
          {
            key: "feedback",
            icon: P.jsx(g9, {})
          },
          {
            key: "conflictResolution",
            icon: P.jsx(w9, {})
          },
          {
            key: "communication",
            icon: P.jsx(h9, {})
          },
          {
            key: "reporting",
            icon: P.jsx(l9, {})
          },
          {
            key: "remoteWork",
            icon: P.jsx(d9, {})
          },
          {
            key: "mentoring",
            icon: P.jsx(y9, {})
          },
          {
            key: "learning",
            icon: P.jsx(c9, {})
          }
        ], d = () => {
          const m = Object.values(c.current).filter((g) => g);
          m.forEach((g) => {
            g && (g.style.width = "0");
          }), setTimeout(() => {
            m.forEach((g) => {
              if (g) {
                const b = g.getAttribute("data-level") || "5", y = parseInt(b, 10);
                g.style.width = `${y * 10}%`;
              }
            });
          }, 100);
        };
        F.useEffect(() => {
          if (t === "hard") d();
          else if (t === "soft" && l.current) {
            const m = l.current.querySelectorAll(".soft-skill-card");
            m.forEach((g) => {
              g.style.opacity = "0", g.style.transform = "scale(0.9)";
            }), setTimeout(() => {
              Tt.fromTo(m, {
                opacity: 0,
                scale: 0.9
              }, {
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                duration: 0.5,
                ease: "back.out(1.4)"
              });
            }, 100);
          }
        }, [
          e.language,
          t
        ]), F.useEffect(() => {
          if (!s.current) return;
          const m = () => {
            const g = Object.values(c.current).filter((b) => b);
            Tt.fromTo(g, {
              width: 0
            }, {
              width: function(b) {
                var _a2;
                const y = ((_a2 = g[b]) == null ? void 0 : _a2.getAttribute("data-level")) || "5";
                return `${parseInt(y, 10) * 10}%`;
              },
              duration: 1,
              stagger: 0.1,
              ease: "power2.out"
            });
          };
          if (a.current && t === "hard") {
            const g = a.current.querySelectorAll(".skill-category");
            Tt.fromTo(g, {
              opacity: 0,
              y: 30
            }, {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              duration: 0.6,
              ease: "power1.out",
              onComplete: m
            });
          }
          if (l.current && t === "soft") {
            const g = l.current.querySelectorAll(".soft-skill-card");
            Tt.fromTo(g, {
              opacity: 0,
              scale: 0.9
            }, {
              opacity: 1,
              scale: 1,
              stagger: 0.1,
              duration: 0.5,
              ease: "back.out(1.4)"
            });
          }
          return se.create({
            trigger: s.current,
            start: "top 70%",
            onEnter: t === "hard" ? m : void 0
          }), () => {
            se.getAll().forEach((g) => g.kill());
          };
        }, [
          t,
          e.language
        ]), F.useEffect(() => {
          const m = document.querySelectorAll(".hard-skill-card"), g = /* @__PURE__ */ new Map();
          return m.forEach((b) => {
            if (!b) return;
            const y = (v) => {
              const S = v, C = b.getBoundingClientRect(), E = S.clientX - C.left, k = S.clientY - C.top, T = C.width / 2, M = (C.height / 2 - k) / 15, H = (E - T) / 15;
              Tt.to(b, {
                rotationX: M,
                rotationY: H,
                transformPerspective: 1e3,
                duration: 0.4,
                ease: "power2.out"
              });
            }, w = () => {
              Tt.to(b, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.4,
                ease: "power2.out"
              });
            };
            g.set(b, {
              move: y,
              leave: w
            }), b.addEventListener("mousemove", y), b.addEventListener("mouseleave", w);
          }), () => {
            m.forEach((b) => {
              const y = g.get(b);
              y && (b.removeEventListener("mousemove", y.move), b.removeEventListener("mouseleave", y.leave));
            });
          };
        }, [
          t
        ]);
        const p = (m) => {
          n(m);
        };
        return P.jsx("section", {
          id: "skills",
          className: "skills",
          ref: s,
          children: P.jsxs("div", {
            className: "container",
            children: [
              P.jsx("h2", {
                className: "section-title",
                children: r("skills.title")
              }),
              P.jsxs("div", {
                className: "skills-tabs",
                children: [
                  P.jsx("button", {
                    className: `tab-button ${t === "hard" ? "active" : ""}`,
                    onClick: () => p("hard"),
                    children: r("skills.hardSkills")
                  }),
                  P.jsx("button", {
                    className: `tab-button ${t === "soft" ? "active" : ""}`,
                    onClick: () => p("soft"),
                    children: r("skills.softSkills")
                  })
                ]
              }),
              P.jsx("div", {
                className: `skills-content ${t === "hard" ? "active" : ""}`,
                ref: a,
                children: u.map((m) => P.jsxs("div", {
                  className: "skill-category",
                  children: [
                    P.jsxs("div", {
                      className: "category-header",
                      children: [
                        P.jsx("div", {
                          className: "category-icon",
                          children: m.icon
                        }),
                        P.jsx("h3", {
                          className: "category-title",
                          children: m.name
                        })
                      ]
                    }),
                    P.jsx("div", {
                      className: "skills-grid",
                      children: m.skills.map((g, b) => P.jsxs("div", {
                        className: `hard-skill-card ${i === `${m.name}-${b}` ? "hovered" : ""}`,
                        onMouseEnter: () => o(`${m.name}-${b}`),
                        onMouseLeave: () => o(null),
                        children: [
                          P.jsx("h4", {
                            className: "skill-name",
                            children: g.name
                          }),
                          P.jsxs("div", {
                            className: "skill-level-container",
                            children: [
                              P.jsx("div", {
                                className: "skill-level",
                                "data-level": g.level,
                                ref: (y) => c.current[`${m.name}-${b}`] = y
                              }),
                              P.jsxs("span", {
                                className: "skill-level-text",
                                children: [
                                  g.level,
                                  "/10"
                                ]
                              })
                            ]
                          })
                        ]
                      }, `${m.name}-${b}`))
                    })
                  ]
                }, m.name))
              }),
              P.jsx("div", {
                className: `skills-content ${t === "soft" ? "active" : ""}`,
                ref: l,
                children: P.jsx("div", {
                  className: "soft-skills-grid",
                  children: h.map((m, g) => P.jsx("div", {
                    className: `soft-skill-card ${i === `soft-${g}` ? "flipped" : ""}`,
                    onMouseEnter: () => o(`soft-${g}`),
                    onMouseLeave: () => o(null),
                    children: P.jsxs("div", {
                      className: "soft-skill-card-inner",
                      children: [
                        P.jsxs("div", {
                          className: "soft-skill-card-front",
                          children: [
                            P.jsx("div", {
                              className: "soft-skill-icon",
                              children: m.icon
                            }),
                            P.jsx("h4", {
                              className: "soft-skill-name",
                              children: r(`skills.softSkillsItems.${m.key}.name`)
                            })
                          ]
                        }),
                        P.jsx("div", {
                          className: "soft-skill-card-back",
                          children: P.jsx("p", {
                            className: "soft-skill-description",
                            children: r(`skills.softSkillsItems.${m.key}.description`)
                          })
                        })
                      ]
                    })
                  }, g))
                })
              })
            ]
          })
        });
      };
      Tt.registerPlugin(se);
      const b9 = () => {
        const { t: r } = Lo(), e = F.useRef(null), t = F.useRef([]), [n, i] = F.useState(/* @__PURE__ */ new Set()), o = [
          {
            id: 1,
            imageUrl: "/pr/images/\u0444\u043E\u0442\u043E1.png",
            technologies: [
              "React",
              "TypeScript",
              "REST API",
              "Tailwind CSS",
              "Google Analytics",
              "Google Tag Manager"
            ],
            projectUrl: "https://trucking-desk.com/ru"
          },
          {
            id: 2,
            imageUrl: "/pr/images/\u0444\u043E\u0442\u043E2.png",
            technologies: [
              "React",
              "Swiper.js",
              "HTML",
              "SCSS"
            ],
            projectUrl: "https://san-remo.kz/"
          },
          {
            id: 3,
            imageUrl: "/pr/images/\u0444\u043E\u0442\u043E3.png",
            technologies: [
              "React",
              "jQuery",
              "Node.js",
              "MongoDB"
            ],
            projectUrl: "https://hongqi-auto.kz/"
          },
          {
            id: 4,
            imageUrl: "/pr/images/\u0444\u043E\u0442\u043E4.png",
            technologies: [
              "React",
              "TypeScript",
              "REST API",
              "Firebase",
              "Tailwind",
              "SEO-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F"
            ],
            projectUrl: "https://habr.com/ru/companies/pt/articles/"
          },
          {
            id: 5,
            imageUrl: "/pr/images/\u0444\u043E\u0442\u043E5.png",
            technologies: [
              "React",
              "Express",
              "PostgreSQL"
            ],
            projectUrl: "https://www.ptsecurity.com/ru-ru/about/vacancy/"
          }
        ];
        return F.useEffect(() => {
          const s = new IntersectionObserver((a) => {
            a.forEach((l) => {
              const c = Number(l.target.getAttribute("data-id"));
              l.isIntersecting ? i((u) => /* @__PURE__ */ new Set([
                ...u,
                c
              ])) : i((u) => {
                const h = /* @__PURE__ */ new Set([
                  ...u
                ]);
                return h.delete(c), h;
              });
            });
          }, {
            threshold: [
              0.2,
              0.5,
              0.8
            ],
            rootMargin: "0px 0px -10% 0px"
          });
          return t.current.forEach((a) => {
            a && s.observe(a);
          }), () => {
            t.current.forEach((a) => {
              a && s.unobserve(a);
            });
          };
        }, []), F.useEffect(() => e.current ? (document.querySelectorAll(".project-image").forEach((a) => {
          Tt.fromTo(a, {
            y: 0
          }, {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: a.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }), () => {
          se.getAll().forEach((a) => a.kill());
        }) : void 0, []), F.useEffect(() => {
          t.current.forEach((s) => {
            if (!s) return;
            const a = (c) => {
              const u = s.getBoundingClientRect(), h = c.clientX - u.left, d = c.clientY - u.top, p = u.width / 2, g = (u.height / 2 - d) / 20, b = (h - p) / 20;
              Tt.to(s, {
                rotationX: g,
                rotationY: b,
                transformPerspective: 1e3,
                duration: 0.4,
                ease: "power2.out"
              });
            }, l = () => {
              Tt.to(s, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.4,
                ease: "power2.out"
              });
            };
            return s.addEventListener("mousemove", a), s.addEventListener("mouseleave", l), () => {
              s.removeEventListener("mousemove", a), s.removeEventListener("mouseleave", l);
            };
          });
        }, [
          t.current.length
        ]), F.useEffect(() => {
          n.forEach((s) => {
            const a = t.current[s - 1];
            a && Tt.fromTo(a, {
              opacity: 0,
              y: 30
            }, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
            });
          });
        }, [
          n
        ]), P.jsx("section", {
          ref: e,
          className: "portfolio",
          id: "portfolio",
          children: P.jsxs("div", {
            className: "container",
            children: [
              P.jsx("h2", {
                className: "section-title",
                children: r("portfolio.title")
              }),
              P.jsx("div", {
                className: "portfolio-grid",
                children: o.map((s, a) => P.jsxs("div", {
                  ref: (l) => t.current[a] = l,
                  className: "portfolio-card",
                  "data-id": s.id,
                  children: [
                    P.jsxs("div", {
                      className: "portfolio-image",
                      children: [
                        P.jsx("img", {
                          src: s.imageUrl,
                          alt: r(`portfolio.projects.${s.id}.title`)
                        }),
                        P.jsx("div", {
                          className: "portfolio-overlay",
                          children: P.jsx("a", {
                            href: s.projectUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "portfolio-link",
                            children: r("portfolio.viewProject")
                          })
                        })
                      ]
                    }),
                    P.jsxs("div", {
                      className: "portfolio-content",
                      children: [
                        P.jsx("h3", {
                          className: "portfolio-title",
                          children: r(`portfolio.projects.${s.id}.title`)
                        }),
                        P.jsx("p", {
                          className: "portfolio-description",
                          children: r(`portfolio.projects.${s.id}.description`)
                        }),
                        P.jsx("div", {
                          className: "portfolio-technologies",
                          children: s.technologies.map((l, c) => P.jsx("span", {
                            className: "tech-tag",
                            children: l
                          }, c))
                        })
                      ]
                    })
                  ]
                }, s.id))
              })
            ]
          })
        });
      };
      function S9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
              },
              child: []
            }
          ]
        })(r);
      }
      function x9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"
              },
              child: []
            }
          ]
        })(r);
      }
      function C9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z"
              },
              child: []
            }
          ]
        })(r);
      }
      function k9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
              },
              child: []
            }
          ]
        })(r);
      }
      function R9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"
              },
              child: []
            }
          ]
        })(r);
      }
      function E9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
              },
              child: []
            }
          ]
        })(r);
      }
      function P9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
              },
              child: []
            }
          ]
        })(r);
      }
      function T9(r) {
        return be({
          attr: {
            role: "img",
            viewBox: "0 0 24 24"
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M22.1987 18.498l-9.7699 5.5022v-4.2855l6.0872-3.3338 3.6826 2.117zm.6683-.6026V6.3884l-3.5752 2.0544v7.396zm-21.0657.6026l9.7699 5.5022v-4.2855L5.484 16.3809l-3.6826 2.117zm-.6683-.6026V6.3884l3.5751 2.0544v7.396zm.4183-12.2515l10.0199-5.644v4.1434L5.152 7.6586l-.0489.028zm20.8975 0l-10.02-5.644v4.1434l6.4192 3.5154.0489.028 3.5518-2.0427zm-10.8775 13.096l-6.0056-3.2873V8.9384l6.0054 3.4525v6.349zm.8575 0l6.0053-3.2873V8.9384l-6.0053 3.4525zM5.9724 8.1845l6.0287-3.3015L18.03 8.1845l-6.0288 3.4665z"
              },
              child: []
            }
          ]
        })(r);
      }
      Tt.registerPlugin(se);
      const Uw = {
        React: P.jsx(k9, {}),
        TypeScript: P.jsx(P9, {}),
        Redux: P.jsx(R9, {}),
        "REST API": P.jsx(Ah, {}),
        Jest: P.jsx(C9, {}),
        Webpack: P.jsx(T9, {}),
        "CSS/SCSS": P.jsx(S9, {}),
        "Tailwind CSS": P.jsx(E9, {}),
        "Swiper.js": P.jsx(Ah, {}),
        "Google Analytics": P.jsx(x9, {})
      }, $w = [
        {
          id: 1,
          logo: "./images/\u043B\u043E\u0433\u043E \u043F\u0442.png",
          technologies: [
            "React",
            "TypeScript",
            "Redux",
            "REST API",
            "Jest",
            "Webpack",
            "CSS/SCSS"
          ],
          links: [
            {
              url: "https://www.ptsecurity.com",
              label: ""
            }
          ]
        },
        {
          id: 2,
          logo: "./images/nomad-logo.png",
          technologies: [
            "React",
            "TypeScript",
            "REST API",
            "Tailwind CSS",
            "Swiper.js",
            "Google Analytics",
            "CSS/SCSS"
          ],
          links: [
            {
              url: "https://trucking-desk.com/ru",
              label: "Trucking Desk"
            },
            {
              url: "https://san-remo.kz",
              label: "San Remo"
            },
            {
              url: "https://hongqi-auto.kz",
              label: "Hongqi"
            }
          ]
        }
      ], A9 = () => {
        const { t: r } = Lo(), e = F.useRef(null), t = F.useRef([]), [n, i] = F.useState({}), [o, s] = F.useState(false), a = (l) => {
          i((c) => ({
            ...c,
            [l]: !c[l]
          }));
        };
        return F.useEffect(() => {
          if (o) return;
          const l = Tt.timeline({
            onComplete: () => s(true)
          });
          return t.current.forEach((c, u) => {
            if (!c) return;
            const h = c.querySelector(".experience-card-header"), d = c.querySelector(".experience-card-body"), p = c.querySelector(".experience-card-footer"), m = u * 0.15;
            l.fromTo(c, {
              opacity: 0,
              y: 50
            }, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              delay: m
            }, u > 0 ? "-=0.4" : 0), h && d && p && l.fromTo(h, {
              opacity: 0,
              y: 20
            }, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            }, "-=0.3").fromTo(d, {
              opacity: 0,
              y: 20
            }, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            }, "-=0.2").fromTo(p, {
              opacity: 0,
              y: 20
            }, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            }, "-=0.2");
          }), () => {
            l.kill();
          };
        }, [
          o
        ]), F.useEffect(() => {
          Object.entries(n).forEach(([l, c]) => {
            const u = parseInt(l), h = t.current[u - 1];
            if (!h) return;
            const d = h.querySelector(".description"), p = h.querySelector(".read-more-btn");
            if (!d || !p) return;
            const m = Tt.timeline({
              defaults: {
                duration: 0.7,
                ease: "power2.inOut"
              }
            });
            if (c) m.to(d, {
              height: "auto",
              onStart: () => {
                p.style.pointerEvents = "none";
              },
              onComplete: () => {
                p.style.pointerEvents = "auto";
              }
            }), m.to(p, {
              color: "var(--accent-hover)",
              scale: 1.05,
              duration: 0.4,
              boxShadow: "0 4px 12px rgba(var(--accent-color-rgb), 0.2)"
            }, "-=0.5");
            else {
              m.to(p, {
                color: "var(--accent-color)",
                scale: 1,
                duration: 0.4,
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
              });
              const g = d.offsetHeight;
              Tt.set(d, {
                height: g
              }), m.to(d, {
                height: "80px",
                delay: 0.1,
                onStart: () => {
                  p.style.pointerEvents = "none";
                },
                onComplete: () => {
                  p.style.pointerEvents = "auto";
                }
              }, "-=0.2");
            }
          });
        }, [
          n
        ]), F.useEffect(() => {
          const l = {};
          $w.forEach((c) => {
            l[c.id] = false;
          }), i(l);
        }, []), P.jsx("section", {
          id: "experience",
          className: "experience",
          ref: e,
          children: P.jsxs("div", {
            className: "container",
            children: [
              P.jsx("h2", {
                className: "section-title",
                children: r("experience.title")
              }),
              P.jsx("div", {
                className: "experience-cards",
                children: $w.map((l, c) => P.jsxs("div", {
                  className: `experience-card ${n[l.id] ? "expanded" : ""}`,
                  ref: (u) => t.current[c] = u,
                  "data-id": l.id,
                  children: [
                    P.jsxs("div", {
                      className: "experience-card-header",
                      children: [
                        P.jsx("div", {
                          className: "company-icon",
                          children: l.logo ? P.jsx("img", {
                            src: l.logo,
                            alt: `${r(`experience.experiences.${l.id}.company`)} logo`,
                            className: `company-logo ${l.logo.includes("nomad-logo") ? "nomad-logo" : ""} ${l.logo.includes("\u043B\u043E\u0433\u043E \u043F\u0442") ? "pt-logo" : ""}`
                          }) : P.jsx(Z7, {})
                        }),
                        P.jsxs("div", {
                          className: "company-info",
                          children: [
                            P.jsx("h3", {
                              className: "company-name",
                              children: r(`experience.experiences.${l.id}.company`)
                            }),
                            P.jsxs("div", {
                              className: "position-info",
                              children: [
                                P.jsx(Q7, {
                                  className: "info-icon position-icon"
                                }),
                                P.jsx("p", {
                                  className: "position",
                                  children: r(`experience.experiences.${l.id}.position`)
                                })
                              ]
                            }),
                            P.jsxs("div", {
                              className: "period-info",
                              children: [
                                P.jsx(e9, {
                                  className: "info-icon period-icon"
                                }),
                                P.jsx("time", {
                                  className: "period",
                                  children: r(`experience.experiences.${l.id}.period`)
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    P.jsxs("div", {
                      className: "experience-card-body",
                      children: [
                        P.jsx("p", {
                          className: `description ${n[l.id] ? "expanded" : ""}`,
                          children: n[l.id] ? r(`experience.experiences.${l.id}.description`) : r(`experience.experiences.${l.id}.shortDescription`)
                        }),
                        P.jsx("button", {
                          className: `read-more-btn ${n[l.id] ? "expanded" : ""}`,
                          onClick: () => a(l.id),
                          children: n[l.id] ? P.jsxs(P.Fragment, {
                            children: [
                              r("experience.showLess"),
                              " ",
                              P.jsx(r9, {
                                style: {
                                  marginLeft: "5px",
                                  fontSize: "0.8em",
                                  transition: "transform 0.3s ease"
                                }
                              })
                            ]
                          }) : P.jsxs(P.Fragment, {
                            children: [
                              r("experience.showMore"),
                              " ",
                              P.jsx(t9, {
                                style: {
                                  marginLeft: "5px",
                                  fontSize: "0.8em",
                                  transition: "transform 0.3s ease"
                                }
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    P.jsxs("div", {
                      className: "experience-card-footer",
                      children: [
                        l.links && l.links.length > 0 && P.jsx("div", {
                          className: "project-links",
                          children: l.links.map((u, h) => P.jsxs("a", {
                            href: u.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "project-link",
                            children: [
                              P.jsx(s9, {
                                className: "link-icon"
                              }),
                              h === 0 && u.label === "" ? r("experience.companyWebsite") : u.label
                            ]
                          }, h))
                        }),
                        P.jsx("div", {
                          className: "technologies",
                          children: l.technologies.map((u, h) => P.jsxs("span", {
                            className: "tech-tag",
                            children: [
                              Uw[u] && P.jsx("span", {
                                className: "tech-icon",
                                children: Uw[u]
                              }),
                              u
                            ]
                          }, h))
                        })
                      ]
                    })
                  ]
                }, l.id))
              })
            ]
          })
        });
      }, j9 = () => {
        const { t: r } = Lo(), [e, t] = F.useState(false), n = F.useRef(null), i = "Ange1Nikita@yandex.ru", o = (s) => {
          s.preventDefault(), navigator.clipboard.writeText(i).then(() => {
            n.current && clearTimeout(n.current), t(true), n.current = window.setTimeout(() => {
              t(false);
            }, 2e3);
          }).catch((a) => {
            console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0447\u0442\u0443: ", a);
          });
        };
        return P.jsxs("section", {
          id: "contacts",
          className: "contacts",
          children: [
            P.jsxs("div", {
              className: "container",
              children: [
                P.jsx("h2", {
                  className: "section-title",
                  children: r("contacts.title")
                }),
                P.jsxs("div", {
                  className: "contacts-content",
                  children: [
                    P.jsx("p", {
                      className: "contacts-text",
                      children: r("contacts.question")
                    }),
                    P.jsx("p", {
                      className: "contacts-availability",
                      children: r("contacts.availability")
                    }),
                    P.jsxs("div", {
                      className: "social-links",
                      children: [
                        P.jsxs("a", {
                          href: "https://github.com/Ange1Nikita",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "social-link",
                          children: [
                            P.jsx(K7, {
                              className: "social-icon"
                            }),
                            " GitHub"
                          ]
                        }),
                        P.jsxs("a", {
                          href: "https://t.me/AndRom193",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "social-link",
                          children: [
                            P.jsx(J7, {
                              className: "social-icon"
                            }),
                            " Telegram"
                          ]
                        }),
                        P.jsxs("button", {
                          onClick: o,
                          className: "social-link email-button",
                          children: [
                            P.jsx(o9, {
                              className: "social-icon"
                            }),
                            " Email",
                            e && P.jsx("span", {
                              className: "tooltip",
                              children: r("contacts.emailCopied")
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            P.jsx("footer", {
              className: "footer",
              children: P.jsx("div", {
                className: "container",
                children: P.jsx("p", {
                  className: "copyright",
                  children: r("contacts.copyright", {
                    year: (/* @__PURE__ */ new Date()).getFullYear()
                  })
                })
              })
            })
          ]
        });
      }, M9 = () => {
        const { i18n: r } = Lo(), [e] = F.useState(true);
        return F.useEffect(() => {
          const t = localStorage.getItem("i18nextLng");
          t && r.changeLanguage(t);
        }, [
          r
        ]), P.jsx(PS, {
          children: P.jsx(dS, {
            children: P.jsxs("div", {
              className: "app",
              children: [
                e && P.jsx(TS, {}),
                P.jsxs("main", {
                  children: [
                    P.jsx(uE, {
                      onAnimationComplete: () => {
                      }
                    }),
                    P.jsx(v9, {}),
                    P.jsx(b9, {}),
                    P.jsx(A9, {}),
                    P.jsx(j9, {})
                  ]
                })
              ]
            })
          })
        });
      }, te = (r) => typeof r == "string", sa = () => {
        let r, e;
        const t = new Promise((n, i) => {
          r = n, e = i;
        });
        return t.resolve = r, t.reject = e, t;
      }, Vw = (r) => r == null ? "" : "" + r, I9 = (r, e, t) => {
        r.forEach((n) => {
          e[n] && (t[n] = e[n]);
        });
      }, z9 = /###/g, Ww = (r) => r && r.indexOf("###") > -1 ? r.replace(z9, ".") : r, Gw = (r) => !r || te(r), Ha = (r, e, t) => {
        const n = te(e) ? e.split(".") : e;
        let i = 0;
        for (; i < n.length - 1; ) {
          if (Gw(r)) return {};
          const o = Ww(n[i]);
          !r[o] && t && (r[o] = new t()), Object.prototype.hasOwnProperty.call(r, o) ? r = r[o] : r = {}, ++i;
        }
        return Gw(r) ? {} : {
          obj: r,
          k: Ww(n[i])
        };
      }, Yw = (r, e, t) => {
        const { obj: n, k: i } = Ha(r, e, Object);
        if (n !== void 0 || e.length === 1) {
          n[i] = t;
          return;
        }
        let o = e[e.length - 1], s = e.slice(0, e.length - 1), a = Ha(r, s, Object);
        for (; a.obj === void 0 && s.length; ) o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), a = Ha(r, s, Object), (a == null ? void 0 : a.obj) && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
        a.obj[`${a.k}.${o}`] = t;
      }, N9 = (r, e, t, n) => {
        const { obj: i, k: o } = Ha(r, e, Object);
        i[o] = i[o] || [], i[o].push(t);
      }, vu = (r, e) => {
        const { obj: t, k: n } = Ha(r, e);
        if (t && Object.prototype.hasOwnProperty.call(t, n)) return t[n];
      }, L9 = (r, e, t) => {
        const n = vu(r, t);
        return n !== void 0 ? n : vu(e, t);
      }, y2 = (r, e, t) => {
        for (const n in e) n !== "__proto__" && n !== "constructor" && (n in r ? te(r[n]) || r[n] instanceof String || te(e[n]) || e[n] instanceof String ? t && (r[n] = e[n]) : y2(r[n], e[n], t) : r[n] = e[n]);
        return r;
      }, Go = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      var O9 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
      };
      const D9 = (r) => te(r) ? r.replace(/[&<>"'\/]/g, (e) => O9[e]) : r;
      class F9 {
        constructor(e) {
          this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
        }
        getRegExp(e) {
          const t = this.regExpMap.get(e);
          if (t !== void 0) return t;
          const n = new RegExp(e);
          return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
        }
      }
      const H9 = [
        " ",
        ",",
        "?",
        "!",
        ";"
      ], B9 = new F9(20), U9 = (r, e, t) => {
        e = e || "", t = t || "";
        const n = H9.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
        if (n.length === 0) return true;
        const i = B9.getRegExp(`(${n.map((s) => s === "?" ? "\\?" : s).join("|")})`);
        let o = !i.test(r);
        if (!o) {
          const s = r.indexOf(t);
          s > 0 && !i.test(r.substring(0, s)) && (o = true);
        }
        return o;
      }, jh = function(r, e) {
        let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
        if (!r) return;
        if (r[e]) return Object.prototype.hasOwnProperty.call(r, e) ? r[e] : void 0;
        const n = e.split(t);
        let i = r;
        for (let o = 0; o < n.length; ) {
          if (!i || typeof i != "object") return;
          let s, a = "";
          for (let l = o; l < n.length; ++l) if (l !== o && (a += t), a += n[l], s = i[a], s !== void 0) {
            if ([
              "string",
              "number",
              "boolean"
            ].indexOf(typeof s) > -1 && l < n.length - 1) continue;
            o += l - o + 1;
            break;
          }
          i = s;
        }
        return i;
      }, bu = (r) => r == null ? void 0 : r.replace("_", "-"), $9 = {
        type: "logger",
        log(r) {
          this.output("log", r);
        },
        warn(r) {
          this.output("warn", r);
        },
        error(r) {
          this.output("error", r);
        },
        output(r, e) {
          var _a2, _b2;
          (_b2 = (_a2 = console == null ? void 0 : console[r]) == null ? void 0 : _a2.apply) == null ? void 0 : _b2.call(_a2, console, e);
        }
      };
      class Su {
        constructor(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.prefix = t.prefix || "i18next:", this.logger = e || $9, this.options = t, this.debug = t.debug;
        }
        log() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "log", "", true);
        }
        warn() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "warn", "", true);
        }
        error() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", true);
        }
        forward(e, t, n, i) {
          return i && !this.debug ? null : (te(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
        }
        create(e) {
          return new Su(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options
          });
        }
        clone(e) {
          return e = e || this.options, e.prefix = e.prefix || this.prefix, new Su(this.logger, e);
        }
      }
      var En = new Su();
      class td {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return e.split(" ").forEach((n) => {
            this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
            const i = this.observers[n].get(t) || 0;
            this.observers[n].set(t, i + 1);
          }), this;
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return;
            }
            this.observers[e].delete(t);
          }
        }
        emit(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
          this.observers[e] && Array.from(this.observers[e].entries()).forEach((s) => {
            let [a, l] = s;
            for (let c = 0; c < l; c++) a(...n);
          }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
            let [a, l] = s;
            for (let c = 0; c < l; c++) a.apply(a, [
              e,
              ...n
            ]);
          });
        }
      }
      class Xw extends td {
        constructor(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: [
              "translation"
            ],
            defaultNS: "translation"
          };
          super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = true);
        }
        addNamespaces(e) {
          this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          const t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          var _a2, _b2;
          let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
          let a;
          e.indexOf(".") > -1 ? a = e.split(".") : (a = [
            e,
            t
          ], n && (Array.isArray(n) ? a.push(...n) : te(n) && o ? a.push(...n.split(o)) : a.push(n)));
          const l = vu(this.data, a);
          return !l && !t && !n && e.indexOf(".") > -1 && (e = a[0], t = a[1], n = a.slice(2).join(".")), l || !s || !te(n) ? l : jh((_b2 = (_a2 = this.data) == null ? void 0 : _a2[e]) == null ? void 0 : _b2[t], n, o);
        }
        addResource(e, t, n, i) {
          let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: false
          };
          const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
          let a = [
            e,
            t
          ];
          n && (a = a.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (a = e.split("."), i = t, t = a[1]), this.addNamespaces(t), Yw(this.data, a, i), o.silent || this.emit("added", e, t, n, i);
        }
        addResources(e, t, n) {
          let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: false
          };
          for (const o in n) (te(n[o]) || Array.isArray(n[o])) && this.addResource(e, t, o, n[o], {
            silent: true
          });
          i.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, i, o) {
          let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: false,
            skipCopy: false
          }, a = [
            e,
            t
          ];
          e.indexOf(".") > -1 && (a = e.split("."), i = n, n = t, t = a[1]), this.addNamespaces(t);
          let l = vu(this.data, a) || {};
          s.skipCopy || (n = JSON.parse(JSON.stringify(n))), i ? y2(l, n, o) : l = {
            ...l,
            ...n
          }, Yw(this.data, a, l), s.silent || this.emit("added", e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return this.getResource(e, t) !== void 0;
        }
        getResourceBundle(e, t) {
          return t || (t = this.options.defaultNS), this.getResource(e, t);
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          const t = this.getDataByLanguage(e);
          return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
        }
        toJSON() {
          return this.data;
        }
      }
      var v2 = {
        processors: {},
        addPostProcessor(r) {
          this.processors[r.name] = r;
        },
        handle(r, e, t, n, i) {
          return r.forEach((o) => {
            var _a2;
            e = ((_a2 = this.processors[o]) == null ? void 0 : _a2.process(e, t, n, i)) ?? e;
          }), e;
        }
      };
      const qw = {}, Kw = (r) => !te(r) && typeof r != "boolean" && typeof r != "number";
      class xu extends td {
        constructor(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          super(), I9([
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils"
          ], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = En.create("translator");
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          var _a2;
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          return e == null ? false : ((_a2 = this.resolve(e, t)) == null ? void 0 : _a2.res) !== void 0;
        }
        extractFromKey(e, t) {
          let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
          n === void 0 && (n = ":");
          const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
          let o = t.ns || this.options.defaultNS || [];
          const s = n && e.indexOf(n) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !U9(e, n, i);
          if (s && !a) {
            const l = e.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0) return {
              key: e,
              namespaces: te(o) ? [
                o
              ] : o
            };
            const c = e.split(n);
            (n !== i || n === i && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), e = c.join(i);
          }
          return {
            key: e,
            namespaces: te(o) ? [
              o
            ] : o
          };
        }
        translate(e, t, n) {
          if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (t = {
            ...t
          }), t || (t = {}), e == null) return "";
          Array.isArray(e) || (e = [
            String(e)
          ]);
          const i = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, { key: s, namespaces: a } = this.extractFromKey(e[e.length - 1], t), l = a[a.length - 1], c = t.lng || this.language, u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if ((c == null ? void 0 : c.toLowerCase()) === "cimode") {
            if (u) {
              const H = t.nsSeparator || this.options.nsSeparator;
              return i ? {
                res: `${l}${H}${s}`,
                usedKey: s,
                exactUsedKey: s,
                usedLng: c,
                usedNS: l,
                usedParams: this.getUsedParamsDetails(t)
              } : `${l}${H}${s}`;
            }
            return i ? {
              res: s,
              usedKey: s,
              exactUsedKey: s,
              usedLng: c,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(t)
            } : s;
          }
          const h = this.resolve(e, t);
          let d = h == null ? void 0 : h.res;
          const p = (h == null ? void 0 : h.usedKey) || s, m = (h == null ? void 0 : h.exactUsedKey) || s, g = [
            "[object Number]",
            "[object Function]",
            "[object RegExp]"
          ], b = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, y = !this.i18nFormat || this.i18nFormat.handleAsObject, w = t.count !== void 0 && !te(t.count), v = xu.hasDefaultValue(t), S = w ? this.pluralResolver.getSuffix(c, t.count, t) : "", C = t.ordinal && w ? this.pluralResolver.getSuffix(c, t.count, {
            ordinal: false
          }) : "", E = w && !t.ordinal && t.count === 0, k = E && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${S}`] || t[`defaultValue${C}`] || t.defaultValue;
          let T = d;
          y && !d && v && (T = k);
          const I = Kw(T), M = Object.prototype.toString.apply(T);
          if (y && T && I && g.indexOf(M) < 0 && !(te(b) && Array.isArray(T))) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
              const H = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, T, {
                ...t,
                ns: a
              }) : `key '${s} (${this.language})' returned an object instead of string.`;
              return i ? (h.res = H, h.usedParams = this.getUsedParamsDetails(t), h) : H;
            }
            if (o) {
              const H = Array.isArray(T), O = H ? [] : {}, Z = H ? m : p;
              for (const $ in T) if (Object.prototype.hasOwnProperty.call(T, $)) {
                const U = `${Z}${o}${$}`;
                v && !d ? O[$] = this.translate(U, {
                  ...t,
                  defaultValue: Kw(k) ? k[$] : void 0,
                  joinArrays: false,
                  ns: a
                }) : O[$] = this.translate(U, {
                  ...t,
                  joinArrays: false,
                  ns: a
                }), O[$] === U && (O[$] = T[$]);
              }
              d = O;
            }
          } else if (y && te(b) && Array.isArray(d)) d = d.join(b), d && (d = this.extendTranslation(d, e, t, n));
          else {
            let H = false, O = false;
            !this.isValidLookup(d) && v && (H = true, d = k), this.isValidLookup(d) || (O = true, d = s);
            const $ = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : d, U = v && k !== d && this.options.updateMissing;
            if (O || H || U) {
              if (this.logger.log(U ? "updateKey" : "missingKey", c, l, s, U ? k : d), o) {
                const L = this.resolve(s, {
                  ...t,
                  keySeparator: false
                });
                L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
              let X = [];
              const W = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
              if (this.options.saveMissingTo === "fallback" && W && W[0]) for (let L = 0; L < W.length; L++) X.push(W[L]);
              else this.options.saveMissingTo === "all" ? X = this.languageUtils.toResolveHierarchy(t.lng || this.language) : X.push(t.lng || this.language);
              const N = (L, x, V) => {
                var _a2;
                const K = v && V !== d ? V : $;
                this.options.missingKeyHandler ? this.options.missingKeyHandler(L, l, x, K, U, t) : ((_a2 = this.backendConnector) == null ? void 0 : _a2.saveMissing) && this.backendConnector.saveMissing(L, l, x, K, U, t), this.emit("missingKey", L, l, x, d);
              };
              this.options.saveMissing && (this.options.saveMissingPlurals && w ? X.forEach((L) => {
                const x = this.pluralResolver.getSuffixes(L, t);
                E && t[`defaultValue${this.options.pluralSeparator}zero`] && x.indexOf(`${this.options.pluralSeparator}zero`) < 0 && x.push(`${this.options.pluralSeparator}zero`), x.forEach((V) => {
                  N([
                    L
                  ], s + V, t[`defaultValue${V}`] || k);
                });
              }) : N(X, s, k));
            }
            d = this.extendTranslation(d, e, t, h, n), O && d === s && this.options.appendNamespaceToMissingKey && (d = `${l}:${s}`), (O || H) && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, H ? d : void 0));
          }
          return i ? (h.res = d, h.usedParams = this.getUsedParamsDetails(t), h) : d;
        }
        extendTranslation(e, t, n, i, o) {
          var _a2, _b2;
          var s = this;
          if ((_a2 = this.i18nFormat) == null ? void 0 : _a2.parse) e = this.i18nFormat.parse(e, {
            ...this.options.interpolation.defaultVariables,
            ...n
          }, n.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
            resolved: i
          });
          else if (!n.skipInterpolation) {
            n.interpolation && this.interpolator.init({
              ...n,
              interpolation: {
                ...this.options.interpolation,
                ...n.interpolation
              }
            });
            const c = te(e) && (((_b2 = n == null ? void 0 : n.interpolation) == null ? void 0 : _b2.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let u;
            if (c) {
              const d = e.match(this.interpolator.nestingRegexp);
              u = d && d.length;
            }
            let h = n.replace && !te(n.replace) ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (h = {
              ...this.options.interpolation.defaultVariables,
              ...h
            }), e = this.interpolator.interpolate(e, h, n.lng || this.language || i.usedLng, n), c) {
              const d = e.match(this.interpolator.nestingRegexp), p = d && d.length;
              u < p && (n.nest = false);
            }
            !n.lng && i && i.res && (n.lng = this.language || i.usedLng), n.nest !== false && (e = this.interpolator.nest(e, function() {
              for (var d = arguments.length, p = new Array(d), m = 0; m < d; m++) p[m] = arguments[m];
              return (o == null ? void 0 : o[0]) === p[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`), null) : s.translate(...p, t);
            }, n)), n.interpolation && this.interpolator.reset();
          }
          const a = n.postProcess || this.options.postProcess, l = te(a) ? [
            a
          ] : a;
          return e != null && (l == null ? void 0 : l.length) && n.applyPostProcessor !== false && (e = v2.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
              ...i,
              usedParams: this.getUsedParamsDetails(n)
            },
            ...n
          } : n, this)), e;
        }
        resolve(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, i, o, s, a;
          return te(e) && (e = [
            e
          ]), e.forEach((l) => {
            if (this.isValidLookup(n)) return;
            const c = this.extractFromKey(l, t), u = c.key;
            i = u;
            let h = c.namespaces;
            this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
            const d = t.count !== void 0 && !te(t.count), p = d && !t.ordinal && t.count === 0, m = t.context !== void 0 && (te(t.context) || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
            h.forEach((b) => {
              var _a2, _b2;
              this.isValidLookup(n) || (a = b, !qw[`${g[0]}-${b}`] && ((_a2 = this.utils) == null ? void 0 : _a2.hasLoadedNamespace) && !((_b2 = this.utils) == null ? void 0 : _b2.hasLoadedNamespace(a)) && (qw[`${g[0]}-${b}`] = true, this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((y) => {
                var _a3;
                if (this.isValidLookup(n)) return;
                s = y;
                const w = [
                  u
                ];
                if ((_a3 = this.i18nFormat) == null ? void 0 : _a3.addLookupKeys) this.i18nFormat.addLookupKeys(w, u, y, b, t);
                else {
                  let S;
                  d && (S = this.pluralResolver.getSuffix(y, t.count, t));
                  const C = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                  if (d && (w.push(u + S), t.ordinal && S.indexOf(E) === 0 && w.push(u + S.replace(E, this.options.pluralSeparator)), p && w.push(u + C)), m) {
                    const k = `${u}${this.options.contextSeparator}${t.context}`;
                    w.push(k), d && (w.push(k + S), t.ordinal && S.indexOf(E) === 0 && w.push(k + S.replace(E, this.options.pluralSeparator)), p && w.push(k + C));
                  }
                }
                let v;
                for (; v = w.pop(); ) this.isValidLookup(n) || (o = v, n = this.getResource(y, b, v, t));
              }));
            });
          }), {
            res: n,
            usedKey: i,
            exactUsedKey: o,
            usedLng: s,
            usedNS: a
          };
        }
        isValidLookup(e) {
          return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
        }
        getResource(e, t, n) {
          var _a2;
          let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return ((_a2 = this.i18nFormat) == null ? void 0 : _a2.getResource) ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i);
        }
        getUsedParamsDetails() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const t = [
            "defaultValue",
            "ordinal",
            "context",
            "replace",
            "lng",
            "lngs",
            "fallbackLng",
            "ns",
            "keySeparator",
            "nsSeparator",
            "returnObjects",
            "returnDetails",
            "joinArrays",
            "postProcess",
            "interpolation"
          ], n = e.replace && !te(e.replace);
          let i = n ? e.replace : e;
          if (n && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
            ...this.options.interpolation.defaultVariables,
            ...i
          }), !n) {
            i = {
              ...i
            };
            for (const o of t) delete i[o];
          }
          return i;
        }
        static hasDefaultValue(e) {
          const t = "defaultValue";
          for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0) return true;
          return false;
        }
      }
      class Jw {
        constructor(e) {
          this.options = e, this.supportedLngs = this.options.supportedLngs || false, this.logger = En.create("languageUtils");
        }
        getScriptPartFromCode(e) {
          if (e = bu(e), !e || e.indexOf("-") < 0) return null;
          const t = e.split("-");
          return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
          if (e = bu(e), !e || e.indexOf("-") < 0) return e;
          const t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if (te(e) && e.indexOf("-") > -1) {
            let t;
            try {
              t = Intl.getCanonicalLocales(e)[0];
            } catch {
            }
            return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
        }
        isSupportedCode(e) {
          return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
        }
        getBestMatchFromCodes(e) {
          if (!e) return null;
          let t;
          return e.forEach((n) => {
            if (t) return;
            const i = this.formatLanguageCode(n);
            (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
          }), !t && this.options.supportedLngs && e.forEach((n) => {
            if (t) return;
            const i = this.getScriptPartFromCode(n);
            if (this.isSupportedCode(i)) return t = i;
            const o = this.getLanguagePartFromCode(n);
            if (this.isSupportedCode(o)) return t = o;
            t = this.options.supportedLngs.find((s) => {
              if (s === o) return s;
              if (!(s.indexOf("-") < 0 && o.indexOf("-") < 0) && (s.indexOf("-") > 0 && o.indexOf("-") < 0 && s.substring(0, s.indexOf("-")) === o || s.indexOf(o) === 0 && o.length > 1)) return s;
            });
          }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (typeof e == "function" && (e = e(t)), te(e) && (e = [
            e
          ]), Array.isArray(e)) return e;
          if (!t) return e.default || [];
          let n = e[t];
          return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
        }
        toResolveHierarchy(e, t) {
          const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), i = [], o = (s) => {
            s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
          };
          return te(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : te(e) && o(this.formatLanguageCode(e)), n.forEach((s) => {
            i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
          }), i;
        }
      }
      const Qw = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
      }, Zw = {
        select: (r) => r === 1 ? "one" : "other",
        resolvedOptions: () => ({
          pluralCategories: [
            "one",
            "other"
          ]
        })
      };
      class V9 {
        constructor(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.languageUtils = e, this.options = t, this.logger = En.create("pluralResolver"), this.pluralRulesCache = {};
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        clearCache() {
          this.pluralRulesCache = {};
        }
        getRule(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const n = bu(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
            cleanedCode: n,
            type: i
          });
          if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
          let s;
          try {
            s = new Intl.PluralRules(n, {
              type: i
            });
          } catch {
            if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Zw;
            if (!e.match(/-|_/)) return Zw;
            const l = this.languageUtils.getLanguagePartFromCode(e);
            s = this.getRule(l, t);
          }
          return this.pluralRulesCache[o] = s, s;
        }
        needsPlural(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
          return n || (n = this.getRule("dev", t)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(e, n).map((i) => `${t}${i}`);
        }
        getSuffixes(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
          return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((i, o) => Qw[i] - Qw[o]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
        }
        getSuffix(e, t) {
          let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          const i = this.getRule(e, n);
          return i ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
        }
      }
      const em = function(r, e, t) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, o = L9(r, e, t);
        return !o && i && te(t) && (o = jh(r, t, n), o === void 0 && (o = jh(e, t, n))), o;
      }, ef = (r) => r.replace(/\$/g, "$$$$");
      class W9 {
        constructor() {
          var _a2;
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.logger = En.create("interpolator"), this.options = e, this.format = ((_a2 = e == null ? void 0 : e.interpolation) == null ? void 0 : _a2.format) || ((t) => t), this.init(e);
        }
        init() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          e.interpolation || (e.interpolation = {
            escapeValue: true
          });
          const { escape: t, escapeValue: n, useRawValueToEscape: i, prefix: o, prefixEscaped: s, suffix: a, suffixEscaped: l, formatSeparator: c, unescapeSuffix: u, unescapePrefix: h, nestingPrefix: d, nestingPrefixEscaped: p, nestingSuffix: m, nestingSuffixEscaped: g, nestingOptionsSeparator: b, maxReplaces: y, alwaysFormat: w } = e.interpolation;
          this.escape = t !== void 0 ? t : D9, this.escapeValue = n !== void 0 ? n : true, this.useRawValueToEscape = i !== void 0 ? i : false, this.prefix = o ? Go(o) : s || "{{", this.suffix = a ? Go(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? Go(d) : p || Go("$t("), this.nestingSuffix = m ? Go(m) : g || Go(")"), this.nestingOptionsSeparator = b || ",", this.maxReplaces = y || 1e3, this.alwaysFormat = w !== void 0 ? w : false, this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          const e = (t, n) => (t == null ? void 0 : t.source) === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
          this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
        }
        interpolate(e, t, n, i) {
          var _a2;
          let o, s, a;
          const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (p) => {
            if (p.indexOf(this.formatSeparator) < 0) {
              const y = em(t, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
              return this.alwaysFormat ? this.format(y, void 0, n, {
                ...i,
                ...t,
                interpolationkey: p
              }) : y;
            }
            const m = p.split(this.formatSeparator), g = m.shift().trim(), b = m.join(this.formatSeparator).trim();
            return this.format(em(t, l, g, this.options.keySeparator, this.options.ignoreJSONStructure), b, n, {
              ...i,
              ...t,
              interpolationkey: g
            });
          };
          this.resetRegExp();
          const u = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((_a2 = i == null ? void 0 : i.interpolation) == null ? void 0 : _a2.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
          return [
            {
              regex: this.regexpUnescape,
              safeValue: (p) => ef(p)
            },
            {
              regex: this.regexp,
              safeValue: (p) => this.escapeValue ? ef(this.escape(p)) : ef(p)
            }
          ].forEach((p) => {
            for (a = 0; o = p.regex.exec(e); ) {
              const m = o[1].trim();
              if (s = c(m), s === void 0) if (typeof u == "function") {
                const b = u(e, o, i);
                s = te(b) ? b : "";
              } else if (i && Object.prototype.hasOwnProperty.call(i, m)) s = "";
              else if (h) {
                s = o[0];
                continue;
              } else this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`), s = "";
              else !te(s) && !this.useRawValueToEscape && (s = Vw(s));
              const g = p.safeValue(s);
              if (e = e.replace(o[0], g), h ? (p.regex.lastIndex += s.length, p.regex.lastIndex -= o[0].length) : p.regex.lastIndex = 0, a++, a >= this.maxReplaces) break;
            }
          }), e;
        }
        nest(e, t) {
          let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
          const a = (l, c) => {
            const u = this.nestingOptionsSeparator;
            if (l.indexOf(u) < 0) return l;
            const h = l.split(new RegExp(`${u}[ ]*{`));
            let d = `{${h[1]}`;
            l = h[0], d = this.interpolate(d, s);
            const p = d.match(/'/g), m = d.match(/"/g);
            (((p == null ? void 0 : p.length) ?? 0) % 2 === 0 && !m || m.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
            try {
              s = JSON.parse(d), c && (s = {
                ...c,
                ...s
              });
            } catch (g) {
              return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${u}${d}`;
            }
            return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, l;
          };
          for (; i = this.nestingRegexp.exec(e); ) {
            let l = [];
            s = {
              ...n
            }, s = s.replace && !te(s.replace) ? s.replace : s, s.applyPostProcessor = false, delete s.defaultValue;
            let c = false;
            if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
              const u = i[1].split(this.formatSeparator).map((h) => h.trim());
              i[1] = u.shift(), l = u, c = true;
            }
            if (o = t(a.call(this, i[1].trim(), s), s), o && i[0] === e && !te(o)) return o;
            te(o) || (o = Vw(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), o = ""), c && (o = l.reduce((u, h) => this.format(u, h, n.lng, {
              ...n,
              interpolationkey: i[1].trim()
            }), o.trim())), e = e.replace(i[0], o), this.regexp.lastIndex = 0;
          }
          return e;
        }
      }
      const G9 = (r) => {
        let e = r.toLowerCase().trim();
        const t = {};
        if (r.indexOf("(") > -1) {
          const n = r.split("(");
          e = n[0].toLowerCase().trim();
          const i = n[1].substring(0, n[1].length - 1);
          e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((s) => {
            if (s) {
              const [a, ...l] = s.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
              t[u] || (t[u] = c), c === "false" && (t[u] = false), c === "true" && (t[u] = true), isNaN(c) || (t[u] = parseInt(c, 10));
            }
          });
        }
        return {
          formatName: e,
          formatOptions: t
        };
      }, Yo = (r) => {
        const e = {};
        return (t, n, i) => {
          let o = i;
          i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (o = {
            ...o,
            [i.interpolationkey]: void 0
          });
          const s = n + JSON.stringify(o);
          let a = e[s];
          return a || (a = r(bu(n), i), e[s] = a), a(t);
        };
      };
      class Y9 {
        constructor() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.logger = En.create("formatter"), this.options = e, this.formats = {
            number: Yo((t, n) => {
              const i = new Intl.NumberFormat(t, {
                ...n
              });
              return (o) => i.format(o);
            }),
            currency: Yo((t, n) => {
              const i = new Intl.NumberFormat(t, {
                ...n,
                style: "currency"
              });
              return (o) => i.format(o);
            }),
            datetime: Yo((t, n) => {
              const i = new Intl.DateTimeFormat(t, {
                ...n
              });
              return (o) => i.format(o);
            }),
            relativetime: Yo((t, n) => {
              const i = new Intl.RelativeTimeFormat(t, {
                ...n
              });
              return (o) => i.format(o, n.range || "day");
            }),
            list: Yo((t, n) => {
              const i = new Intl.ListFormat(t, {
                ...n
              });
              return (o) => i.format(o);
            })
          }, this.init(e);
        }
        init(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          this.formatSeparator = t.interpolation.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = Yo(t);
        }
        format(e, t, n) {
          let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          const o = t.split(this.formatSeparator);
          if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((a) => a.indexOf(")") > -1)) {
            const a = o.findIndex((l) => l.indexOf(")") > -1);
            o[0] = [
              o[0],
              ...o.splice(1, a)
            ].join(this.formatSeparator);
          }
          return o.reduce((a, l) => {
            var _a2;
            const { formatName: c, formatOptions: u } = G9(l);
            if (this.formats[c]) {
              let h = a;
              try {
                const d = ((_a2 = i == null ? void 0 : i.formatParams) == null ? void 0 : _a2[i.interpolationkey]) || {}, p = d.locale || d.lng || i.locale || i.lng || n;
                h = this.formats[c](a, p, {
                  ...u,
                  ...i,
                  ...d
                });
              } catch (d) {
                this.logger.warn(d);
              }
              return h;
            } else this.logger.warn(`there was no format function for ${c}`);
            return a;
          }, e);
        }
      }
      const X9 = (r, e) => {
        r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
      };
      class q9 extends td {
        constructor(e, t, n) {
          var _a2, _b2;
          let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = i, this.logger = En.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (_b2 = (_a2 = this.backend) == null ? void 0 : _a2.init) == null ? void 0 : _b2.call(_a2, n, i.backend, i);
        }
        queueLoad(e, t, n, i) {
          const o = {}, s = {}, a = {}, l = {};
          return e.forEach((c) => {
            let u = true;
            t.forEach((h) => {
              const d = `${c}|${h}`;
              !n.reload && this.store.hasResourceBundle(c, h) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = true) : (this.state[d] = 1, u = false, s[d] === void 0 && (s[d] = true), o[d] === void 0 && (o[d] = true), l[h] === void 0 && (l[h] = true)));
            }), u || (a[c] = true);
          }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
            pending: s,
            pendingCount: Object.keys(s).length,
            loaded: {},
            errors: [],
            callback: i
          }), {
            toLoad: Object.keys(o),
            pending: Object.keys(s),
            toLoadLanguages: Object.keys(a),
            toLoadNamespaces: Object.keys(l)
          };
        }
        loaded(e, t, n) {
          const i = e.split("|"), o = i[0], s = i[1];
          t && this.emit("failedLoading", o, s, t), !t && n && this.store.addResourceBundle(o, s, n, void 0, void 0, {
            skipCopy: true
          }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
          const a = {};
          this.queue.forEach((l) => {
            N9(l.loaded, [
              o
            ], s), X9(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
              a[c] || (a[c] = {});
              const u = l.loaded[c];
              u.length && u.forEach((h) => {
                a[c][h] === void 0 && (a[c][h] = true);
              });
            }), l.done = true, l.errors.length ? l.callback(l.errors) : l.callback());
          }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
        }
        read(e, t, n) {
          let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return s(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: i,
              wait: o,
              callback: s
            });
            return;
          }
          this.readingCalls++;
          const a = (c, u) => {
            if (this.readingCalls--, this.waitingReads.length > 0) {
              const h = this.waitingReads.shift();
              this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
            }
            if (c && u && i < this.maxRetries) {
              setTimeout(() => {
                this.read.call(this, e, t, n, i + 1, o * 2, s);
              }, o);
              return;
            }
            s(c, u);
          }, l = this.backend[n].bind(this.backend);
          if (l.length === 2) {
            try {
              const c = l(e, t);
              c && typeof c.then == "function" ? c.then((u) => a(null, u)).catch(a) : a(null, c);
            } catch (c) {
              a(c);
            }
            return;
          }
          return l(e, t, a);
        }
        prepareLoading(e, t) {
          let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
          te(e) && (e = this.languageUtils.toResolveHierarchy(e)), te(t) && (t = [
            t
          ]);
          const o = this.queueLoad(e, t, n, i);
          if (!o.toLoad.length) return o.pending.length || i(), null;
          o.toLoad.forEach((s) => {
            this.loadOne(s);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, {
            reload: true
          }, n);
        }
        loadOne(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          const n = e.split("|"), i = n[0], o = n[1];
          this.read(i, o, "read", void 0, void 0, (s, a) => {
            s && this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`, s), !s && a && this.logger.log(`${t}loaded namespace ${o} for language ${i}`, a), this.loaded(e, s, a);
          });
        }
        saveMissing(e, t, n, i, o) {
          var _a2, _b2, _c2, _d2, _e;
          let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
          };
          if (((_b2 = (_a2 = this.services) == null ? void 0 : _a2.utils) == null ? void 0 : _b2.hasLoadedNamespace) && !((_d2 = (_c2 = this.services) == null ? void 0 : _c2.utils) == null ? void 0 : _d2.hasLoadedNamespace(t))) {
            this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return;
          }
          if (!(n == null || n === "")) {
            if ((_e = this.backend) == null ? void 0 : _e.create) {
              const l = {
                ...s,
                isUpdate: o
              }, c = this.backend.create.bind(this.backend);
              if (c.length < 6) try {
                let u;
                c.length === 5 ? u = c(e, t, n, i, l) : u = c(e, t, n, i), u && typeof u.then == "function" ? u.then((h) => a(null, h)).catch(a) : a(null, u);
              } catch (u) {
                a(u);
              }
              else c(e, t, n, i, a, l);
            }
            !e || !e[0] || this.store.addResource(e[0], t, n, i);
          }
        }
      }
      const tm = () => ({
        debug: false,
        initAsync: true,
        ns: [
          "translation"
        ],
        defaultNS: [
          "translation"
        ],
        fallbackLng: [
          "dev"
        ],
        fallbackNS: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: "all",
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: "fallback",
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: false,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler: (r) => {
          let e = {};
          if (typeof r[1] == "object" && (e = r[1]), te(r[1]) && (e.defaultValue = r[1]), te(r[2]) && (e.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
            const t = r[3] || r[2];
            Object.keys(t).forEach((n) => {
              e[n] = t[n];
            });
          }
          return e;
        },
        interpolation: {
          escapeValue: true,
          format: (r) => r,
          prefix: "{{",
          suffix: "}}",
          formatSeparator: ",",
          unescapePrefix: "-",
          nestingPrefix: "$t(",
          nestingSuffix: ")",
          nestingOptionsSeparator: ",",
          maxReplaces: 1e3,
          skipOnVariables: true
        }
      }), rm = (r) => {
        var _a2, _b2;
        return te(r.ns) && (r.ns = [
          r.ns
        ]), te(r.fallbackLng) && (r.fallbackLng = [
          r.fallbackLng
        ]), te(r.fallbackNS) && (r.fallbackNS = [
          r.fallbackNS
        ]), ((_b2 = (_a2 = r.supportedLngs) == null ? void 0 : _a2.indexOf) == null ? void 0 : _b2.call(_a2, "cimode")) < 0 && (r.supportedLngs = r.supportedLngs.concat([
          "cimode"
        ])), typeof r.initImmediate == "boolean" && (r.initAsync = r.initImmediate), r;
      }, lc = () => {
      }, K9 = (r) => {
        Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
          typeof r[t] == "function" && (r[t] = r[t].bind(r));
        });
      };
      class gl extends td {
        constructor() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
          if (super(), this.options = rm(e), this.services = {}, this.logger = En, this.modules = {
            external: []
          }, K9(this), t && !this.isInitialized && !e.isClone) {
            if (!this.options.initAsync) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
          this.isInitializing = true, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (te(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
          const i = tm();
          this.options = {
            ...i,
            ...this.options,
            ...rm(t)
          }, this.options.interpolation = {
            ...i.interpolation,
            ...this.options.interpolation
          }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
          const o = (u) => u ? typeof u == "function" ? new u() : u : null;
          if (!this.options.isClone) {
            this.modules.logger ? En.init(o(this.modules.logger), this.options) : En.init(null, this.options);
            let u;
            this.modules.formatter ? u = this.modules.formatter : u = Y9;
            const h = new Jw(this.options);
            this.store = new Xw(this.options.resources, this.options);
            const d = this.services;
            d.logger = En, d.resourceStore = this.store, d.languageUtils = h, d.pluralResolver = new V9(h, {
              prepend: this.options.pluralSeparator,
              simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), u && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (d.formatter = o(u), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new W9(this.options), d.utils = {
              hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, d.backendConnector = new q9(o(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(p) {
              for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++) g[b - 1] = arguments[b];
              e.emit(p, ...g);
            }), this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new xu(this.services, this.options), this.translator.on("*", function(p) {
              for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++) g[b - 1] = arguments[b];
              e.emit(p, ...g);
            }), this.modules.external.forEach((p) => {
              p.init && p.init(this);
            });
          }
          if (this.format = this.options.interpolation.format, n || (n = lc), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
          }
          !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage"
          ].forEach((u) => {
            this[u] = function() {
              return e.store[u](...arguments);
            };
          }), [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle"
          ].forEach((u) => {
            this[u] = function() {
              return e.store[u](...arguments), e;
            };
          });
          const l = sa(), c = () => {
            const u = (h, d) => {
              this.isInitializing = false, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = true, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(d), n(h, d);
            };
            if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, u);
          };
          return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), l;
        }
        loadResources(e) {
          var _a2, _b2;
          let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lc;
          const i = te(e) ? e : this.language;
          if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
            if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
            const o = [], s = (a) => {
              if (!a || a === "cimode") return;
              this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
                c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
              });
            };
            i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => s(l)), (_b2 = (_a2 = this.options.preload) == null ? void 0 : _a2.forEach) == null ? void 0 : _b2.call(_a2, (a) => s(a)), this.services.backendConnector.load(o, this.options.ns, (a) => {
              !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(a);
            });
          } else n(null);
        }
        reloadResources(e, t, n) {
          const i = sa();
          return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = lc), this.services.backendConnector.reload(e, t, (o) => {
            i.resolve(), n(o);
          }), i;
        }
        use(e) {
          if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
          if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && v2.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
        }
        setResolvedLanguage(e) {
          if (!(!e || !this.languages) && !([
            "cimode",
            "dev"
          ].indexOf(e) > -1)) {
            for (let t = 0; t < this.languages.length; t++) {
              const n = this.languages[t];
              if (!([
                "cimode",
                "dev"
              ].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                this.resolvedLanguage = n;
                break;
              }
            }
            !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
          }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          const i = sa();
          this.emit("languageChanging", e);
          const o = (l) => {
            this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
          }, s = (l, c) => {
            c ? this.isLanguageChangingTo === e && (o(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
              return n.t(...arguments);
            }), t && t(l, function() {
              return n.t(...arguments);
            });
          }, a = (l) => {
            var _a2, _b2;
            !e && !l && this.services.languageDetector && (l = []);
            const c = te(l) ? l : l && l[0], u = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(te(l) ? [
              l
            ] : l);
            u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), (_b2 = (_a2 = this.services.languageDetector) == null ? void 0 : _a2.cacheUserLanguage) == null ? void 0 : _b2.call(_a2, u)), this.loadResources(u, (h) => {
              s(h, u);
            });
          };
          return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), i;
        }
        getFixedT(e, t, n) {
          var i = this;
          const o = function(s, a) {
            let l;
            if (typeof a != "object") {
              for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), h = 2; h < c; h++) u[h - 2] = arguments[h];
              l = i.options.overloadTranslationOptionHandler([
                s,
                a
              ].concat(u));
            } else l = {
              ...a
            };
            l.lng = l.lng || o.lng, l.lngs = l.lngs || o.lngs, l.ns = l.ns || o.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || n || o.keyPrefix);
            const d = i.options.keySeparator || ".";
            let p;
            return l.keyPrefix && Array.isArray(s) ? p = s.map((m) => `${l.keyPrefix}${d}${m}`) : p = l.keyPrefix ? `${l.keyPrefix}${d}${s}` : s, i.t(p, l);
          };
          return te(e) ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = n, o;
        }
        t() {
          var _a2;
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return (_a2 = this.translator) == null ? void 0 : _a2.translate(...t);
        }
        exists() {
          var _a2;
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return (_a2 = this.translator) == null ? void 0 : _a2.exists(...t);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
          if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
          const n = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : false, o = this.languages[this.languages.length - 1];
          if (n.toLowerCase() === "cimode") return true;
          const s = (a, l) => {
            const c = this.services.backendConnector.state[`${a}|${l}`];
            return c === -1 || c === 0 || c === 2;
          };
          if (t.precheck) {
            const a = t.precheck(this, s);
            if (a !== void 0) return a;
          }
          return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, e) && (!i || s(o, e)));
        }
        loadNamespaces(e, t) {
          const n = sa();
          return this.options.ns ? (te(e) && (e = [
            e
          ]), e.forEach((i) => {
            this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
          }), this.loadResources((i) => {
            n.resolve(), t && t(i);
          }), n) : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          const n = sa();
          te(e) && (e = [
            e
          ]);
          const i = this.options.preload || [], o = e.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
          return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
            n.resolve(), t && t(s);
          }), n) : (t && t(), Promise.resolve());
        }
        dir(e) {
          var _a2, _b2;
          if (e || (e = this.resolvedLanguage || (((_a2 = this.languages) == null ? void 0 : _a2.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
          const t = [
            "ar",
            "shu",
            "sqr",
            "ssh",
            "xaa",
            "yhd",
            "yud",
            "aao",
            "abh",
            "abv",
            "acm",
            "acq",
            "acw",
            "acx",
            "acy",
            "adf",
            "ads",
            "aeb",
            "aec",
            "afb",
            "ajp",
            "apc",
            "apd",
            "arb",
            "arq",
            "ars",
            "ary",
            "arz",
            "auz",
            "avl",
            "ayh",
            "ayl",
            "ayn",
            "ayp",
            "bbz",
            "pga",
            "he",
            "iw",
            "ps",
            "pbt",
            "pbu",
            "pst",
            "prp",
            "prd",
            "ug",
            "ur",
            "ydd",
            "yds",
            "yih",
            "ji",
            "yi",
            "hbo",
            "men",
            "xmn",
            "fa",
            "jpr",
            "peo",
            "pes",
            "prs",
            "dv",
            "sam",
            "ckb"
          ], n = ((_b2 = this.services) == null ? void 0 : _b2.languageUtils) || new Jw(tm());
          return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
        }
        static createInstance() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
          return new gl(e, t);
        }
        cloneInstance() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lc;
          const n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          const i = {
            ...this.options,
            ...e,
            isClone: true
          }, o = new gl(i);
          if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), [
            "store",
            "services",
            "language"
          ].forEach((a) => {
            o[a] = this[a];
          }), o.services = {
            ...this.services
          }, o.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
          }, n) {
            const a = Object.keys(this.store.data).reduce((l, c) => (l[c] = {
              ...this.store.data[c]
            }, l[c] = Object.keys(l[c]).reduce((u, h) => (u[h] = {
              ...l[c][h]
            }, u), l[c]), l), {});
            o.store = new Xw(a, i), o.services.resourceStore = o.store;
          }
          return o.translator = new xu(o.services, i), o.translator.on("*", function(a) {
            for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) c[u - 1] = arguments[u];
            o.emit(a, ...c);
          }), o.init(i, t), o.translator.options = i, o.translator.backendConnector.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
          }, o;
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
          };
        }
      }
      const Kt = gl.createInstance();
      Kt.createInstance = gl.createInstance;
      Kt.createInstance;
      Kt.dir;
      Kt.init;
      Kt.loadResources;
      Kt.reloadResources;
      Kt.use;
      Kt.changeLanguage;
      Kt.getFixedT;
      Kt.t;
      Kt.exists;
      Kt.setDefaultNamespace;
      Kt.hasLoadedNamespace;
      Kt.loadNamespaces;
      Kt.loadLanguages;
      const { slice: J9, forEach: Q9 } = [];
      function Z9(r) {
        return Q9.call(J9.call(arguments, 1), (e) => {
          if (e) for (const t in e) r[t] === void 0 && (r[t] = e[t]);
        }), r;
      }
      function eP(r) {
        return typeof r != "string" ? false : [
          /<\s*script.*?>/i,
          /<\s*\/\s*script\s*>/i,
          /<\s*img.*?on\w+\s*=/i,
          /<\s*\w+\s*on\w+\s*=.*?>/i,
          /javascript\s*:/i,
          /vbscript\s*:/i,
          /expression\s*\(/i,
          /eval\s*\(/i,
          /alert\s*\(/i,
          /document\.cookie/i,
          /document\.write\s*\(/i,
          /window\.location/i,
          /innerHTML/i
        ].some((t) => t.test(r));
      }
      const nm = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, tP = function(r, e) {
        const n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
          path: "/"
        }, i = encodeURIComponent(e);
        let o = `${r}=${i}`;
        if (n.maxAge > 0) {
          const s = n.maxAge - 0;
          if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
          o += `; Max-Age=${Math.floor(s)}`;
        }
        if (n.domain) {
          if (!nm.test(n.domain)) throw new TypeError("option domain is invalid");
          o += `; Domain=${n.domain}`;
        }
        if (n.path) {
          if (!nm.test(n.path)) throw new TypeError("option path is invalid");
          o += `; Path=${n.path}`;
        }
        if (n.expires) {
          if (typeof n.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
          o += `; Expires=${n.expires.toUTCString()}`;
        }
        if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
          case true:
            o += "; SameSite=Strict";
            break;
          case "lax":
            o += "; SameSite=Lax";
            break;
          case "strict":
            o += "; SameSite=Strict";
            break;
          case "none":
            o += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
        return o;
      }, im = {
        create(r, e, t, n) {
          let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            path: "/",
            sameSite: "strict"
          };
          t && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + t * 60 * 1e3)), n && (i.domain = n), document.cookie = tP(r, encodeURIComponent(e), i);
        },
        read(r) {
          const e = `${r}=`, t = document.cookie.split(";");
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
            if (i.indexOf(e) === 0) return i.substring(e.length, i.length);
          }
          return null;
        },
        remove(r) {
          this.create(r, "", -1);
        }
      };
      var rP = {
        name: "cookie",
        lookup(r) {
          let { lookupCookie: e } = r;
          if (e && typeof document < "u") return im.read(e) || void 0;
        },
        cacheUserLanguage(r, e) {
          let { lookupCookie: t, cookieMinutes: n, cookieDomain: i, cookieOptions: o } = e;
          t && typeof document < "u" && im.create(t, r, n, i, o);
        }
      }, nP = {
        name: "querystring",
        lookup(r) {
          var _a2;
          let { lookupQuerystring: e } = r, t;
          if (typeof window < "u") {
            let { search: n } = window.location;
            !window.location.search && ((_a2 = window.location.hash) == null ? void 0 : _a2.indexOf("?")) > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
            const o = n.substring(1).split("&");
            for (let s = 0; s < o.length; s++) {
              const a = o[s].indexOf("=");
              a > 0 && o[s].substring(0, a) === e && (t = o[s].substring(a + 1));
            }
          }
          return t;
        }
      };
      let Xo = null;
      const om = () => {
        if (Xo !== null) return Xo;
        try {
          if (Xo = typeof window < "u" && window.localStorage !== null, !Xo) return false;
          const r = "i18next.translate.boo";
          window.localStorage.setItem(r, "foo"), window.localStorage.removeItem(r);
        } catch {
          Xo = false;
        }
        return Xo;
      };
      var iP = {
        name: "localStorage",
        lookup(r) {
          let { lookupLocalStorage: e } = r;
          if (e && om()) return window.localStorage.getItem(e) || void 0;
        },
        cacheUserLanguage(r, e) {
          let { lookupLocalStorage: t } = e;
          t && om() && window.localStorage.setItem(t, r);
        }
      };
      let qo = null;
      const sm = () => {
        if (qo !== null) return qo;
        try {
          if (qo = typeof window < "u" && window.sessionStorage !== null, !qo) return false;
          const r = "i18next.translate.boo";
          window.sessionStorage.setItem(r, "foo"), window.sessionStorage.removeItem(r);
        } catch {
          qo = false;
        }
        return qo;
      };
      var oP = {
        name: "sessionStorage",
        lookup(r) {
          let { lookupSessionStorage: e } = r;
          if (e && sm()) return window.sessionStorage.getItem(e) || void 0;
        },
        cacheUserLanguage(r, e) {
          let { lookupSessionStorage: t } = e;
          t && sm() && window.sessionStorage.setItem(t, r);
        }
      }, sP = {
        name: "navigator",
        lookup(r) {
          const e = [];
          if (typeof navigator < "u") {
            const { languages: t, userLanguage: n, language: i } = navigator;
            if (t) for (let o = 0; o < t.length; o++) e.push(t[o]);
            n && e.push(n), i && e.push(i);
          }
          return e.length > 0 ? e : void 0;
        }
      }, aP = {
        name: "htmlTag",
        lookup(r) {
          let { htmlTag: e } = r, t;
          const n = e || (typeof document < "u" ? document.documentElement : null);
          return n && typeof n.getAttribute == "function" && (t = n.getAttribute("lang")), t;
        }
      }, lP = {
        name: "path",
        lookup(r) {
          var _a2;
          let { lookupFromPathIndex: e } = r;
          if (typeof window > "u") return;
          const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
          return Array.isArray(t) ? (_a2 = t[typeof e == "number" ? e : 0]) == null ? void 0 : _a2.replace("/", "") : void 0;
        }
      }, cP = {
        name: "subdomain",
        lookup(r) {
          var _a2, _b2;
          let { lookupFromSubdomainIndex: e } = r;
          const t = typeof e == "number" ? e + 1 : 1, n = typeof window < "u" && ((_b2 = (_a2 = window.location) == null ? void 0 : _a2.hostname) == null ? void 0 : _b2.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
          if (n) return n[t];
        }
      };
      let b2 = false;
      try {
        document.cookie, b2 = true;
      } catch {
      }
      const S2 = [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag"
      ];
      b2 || S2.splice(1, 1);
      const uP = () => ({
        order: S2,
        lookupQuerystring: "lng",
        lookupCookie: "i18next",
        lookupLocalStorage: "i18nextLng",
        lookupSessionStorage: "i18nextLng",
        caches: [
          "localStorage"
        ],
        excludeCacheFor: [
          "cimode"
        ],
        convertDetectedLanguage: (r) => r
      });
      class x2 {
        constructor(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.type = "languageDetector", this.detectors = {}, this.init(e, t);
        }
        init() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            languageUtils: {}
          }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          this.services = e, this.options = Z9(t, this.options || {}, uP()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(rP), this.addDetector(nP), this.addDetector(iP), this.addDetector(oP), this.addDetector(sP), this.addDetector(aP), this.addDetector(lP), this.addDetector(cP);
        }
        addDetector(e) {
          return this.detectors[e.name] = e, this;
        }
        detect() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
          return e.forEach((n) => {
            if (this.detectors[n]) {
              let i = this.detectors[n].lookup(this.options);
              i && typeof i == "string" && (i = [
                i
              ]), i && (t = t.concat(i));
            }
          }), t = t.filter((n) => n != null && !eP(n)).map((n) => this.options.convertDetectedLanguage(n)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
        }
        cacheUserLanguage(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
          t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((n) => {
            this.detectors[n] && this.detectors[n].cacheUserLanguage(e, this.options);
          }));
        }
      }
      x2.type = "languageDetector";
      const dP = {
        baseText: "Nikita Kuznetsov \u2014 frontend developer,",
        firstPhrase: " ready to take the challenge!",
        secondPhrase: " Your project is too complex? Great, I like it!",
        buttonText: "My projects"
      }, fP = {
        about: "About me",
        skills: "Skills",
        portfolio: "Works",
        experience: "Experience",
        contacts: "Contacts",
        menu: "Menu",
        closeMenu: "Close menu",
        openMenu: "Open menu",
        switchTheme: "Switch to {{theme}} theme",
        darkTheme: "dark",
        lightTheme: "light",
        language: "RU"
      }, hP = {
        title: "My Skills",
        hardSkills: "Hard Skills",
        softSkills: "Soft Skills",
        categories: {
          frontend: "Frontend",
          libraries: "Libraries & State Management",
          tools: "Development Tools",
          other: "Other Skills"
        },
        softSkillsItems: {
          teamwork: {
            name: "Teamwork",
            description: "Experience working with designers, managers and developers in a team"
          },
          deadlines: {
            name: "Meeting Deadlines",
            description: "Responsible attitude to deadlines and time constraints"
          },
          attention: {
            name: "Attention to Detail",
            description: "Thorough approach to work and tracking details"
          },
          codeQuality: {
            name: "Code Quality",
            description: "Focus on writing clean, maintainable code"
          },
          timeManagement: {
            name: "Time Management",
            description: "Effective organization and prioritization of tasks"
          },
          feedback: {
            name: "Open to Feedback",
            description: "Receptiveness to constructive criticism and improvements"
          },
          conflictResolution: {
            name: "Conflict Resolution",
            description: "Ability to professionally resolve disagreements"
          },
          communication: {
            name: "Clear Communication",
            description: "Clear expression of ideas and concepts"
          },
          reporting: {
            name: "Detailed Reporting",
            description: "Thorough documentation and updates on work done"
          },
          remoteWork: {
            name: "Remote Work",
            description: "Experience with productive remote collaboration"
          },
          mentoring: {
            name: "Mentoring",
            description: "Experience teaching and mentoring other developers"
          },
          learning: {
            name: "Continuous Learning",
            description: "Constant improvement of skills and knowledge"
          }
        }
      }, pP = {
        title: "My Projects",
        viewProject: "View Project",
        projects: {
          1: {
            title: "Trucking Desk",
            description: "Developed the Trucking Desk platform interface using React, Tailwind CSS, and Swiper.js, providing dynamic data loading, responsive design, slider integration, analytics integration, and creating a library of universal components."
          },
          2: {
            title: "San Remo",
            description: "Developed and improved the San Remo website using React, responsive layout, and Swiper.js."
          },
          3: {
            title: "Hongqi",
            description: "Migrated the website slider from jQuery to Swiper.js, ensuring cross-browser compatibility and responsive design."
          },
          4: {
            title: "Blog Section Development",
            description: 'Developed the "Blog" section, including structure, commenting system, SEO optimization, and newsletter subscription, to increase user engagement and attract new customers.'
          },
          5: {
            title: "Careers Section Update",
            description: 'Updated the "Careers" section and developed a security monitoring interface, improving design, implementing application forms, as well as data visualization, filtering, and sorting tools.'
          }
        }
      }, _P = {
        title: "Work Experience",
        showMore: "Show More",
        showLess: "Show Less",
        companyWebsite: "Company Website",
        experiences: {
          1: {
            company: "Positive Technologies",
            position: "Frontend Developer",
            period: "April 2023 \u2014 March 2025",
            description: 'Improved feedback forms with real-time validation. Developed the "Blog" section with commenting system integration and SEO optimization. Updated the "Careers" section. Developed the interface for an internal security monitoring system with data visualization and filtering.',
            shortDescription: "Form improvements, development of new sections, interface updates."
          },
          2: {
            company: "Studio Nomad",
            position: "Frontend Developer",
            period: "March 2021 \u2014 April 2023",
            description: "Developed the logistics management platform interface (Trucking Desk) and company websites (San Remo, Hongqi) using React. Implemented dynamic data loading via REST API. Responsive design with Tailwind CSS. Integration of sliders with Swiper.js. Development of a universal component library.",
            shortDescription: "Interface development, responsive design, and component integration."
          }
        }
      }, gP = {
        title: "Contact Me",
        question: "Do you want to ask something interesting?",
        availability: "Contact me. I am in touch mon-fri from 8 am to 8 pm (GMT).",
        emailCopied: "Email copied!",
        copyright: "\xA9 {{year}} Nikita Kuznetsov"
      }, wP = {
        buttonClicked: "The 'Check it out!' button was clicked!",
        scrollingToSection: "Scrolling to section:",
        sectionNotFound: "Section not found, scrolling down to screen height"
      }, mP = {
        about: dP,
        header: fP,
        skills: hP,
        portfolio: pP,
        experience: _P,
        contacts: gP,
        debugMessages: wP
      }, yP = {
        baseText: "\u041D\u0438\u043A\u0438\u0442\u0430 \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432 \u2014 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A,",
        firstPhrase: " \u0433\u043E\u0442\u043E\u0432 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0432\u044B\u0437\u043E\u0432!",
        secondPhrase: " \u0412\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0441\u043B\u043E\u0436\u043D\u044B\u0439? \u041E\u0442\u043B\u0438\u0447\u043D\u043E, \u043C\u043D\u0435 \u044D\u0442\u043E \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F!",
        buttonText: "\u041C\u043E\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"
      }, vP = {
        about: "\u041E\u0431\u043E \u043C\u043D\u0435",
        skills: "\u041D\u0430\u0432\u044B\u043A\u0438",
        portfolio: "\u0420\u0430\u0431\u043E\u0442\u044B",
        experience: "\u041E\u043F\u044B\u0442",
        contacts: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        menu: "\u041C\u0435\u043D\u044E",
        closeMenu: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",
        openMenu: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",
        switchTheme: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 {{theme}} \u0442\u0435\u043C\u0443",
        darkTheme: "\u0442\u0435\u043C\u043D\u0443\u044E",
        lightTheme: "\u0441\u0432\u0435\u0442\u043B\u0443\u044E",
        language: "EN"
      }, bP = {
        title: "\u041C\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438",
        hardSkills: "Hard Skills",
        softSkills: "Soft Skills",
        categories: {
          frontend: "Frontend",
          libraries: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u0438 State Management",
          tools: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438",
          other: "\u0414\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
        },
        softSkillsItems: {
          teamwork: {
            name: "\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
            description: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430\u043C\u0438, \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C\u0438 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435"
          },
          deadlines: {
            name: "\u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0434\u0435\u0434\u043B\u0430\u0439\u043D\u043E\u0432",
            description: "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u043A \u0441\u0440\u043E\u043A\u0430\u043C \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u043C"
          },
          attention: {
            name: "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A \u0434\u0435\u0442\u0430\u043B\u044F\u043C",
            description: "\u0422\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0440\u0430\u0431\u043E\u0442\u0435 \u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u043B\u043E\u0447\u0435\u0439"
          },
          codeQuality: {
            name: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u0434\u0430",
            description: "\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0438 \u0447\u0438\u0441\u0442\u043E\u0433\u043E, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u043A\u043E\u0434\u0430"
          },
          timeManagement: {
            name: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C",
            description: "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447"
          },
          feedback: {
            name: "\u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u044C \u043A \u0444\u0438\u0434\u0431\u0435\u043A\u0443",
            description: "\u0412\u043E\u0441\u043F\u0440\u0438\u0438\u043C\u0447\u0438\u0432\u043E\u0441\u0442\u044C \u043A \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043A\u0440\u0438\u0442\u0438\u043A\u0435 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F\u043C"
          },
          conflictResolution: {
            name: "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432",
            description: "\u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0442\u044C \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u044F"
          },
          communication: {
            name: "\u0427\u0435\u0442\u043A\u0430\u044F \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u044F",
            description: "\u042F\u0441\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0434\u0435\u0439 \u0438 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0439"
          },
          reporting: {
            name: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
            description: "\u0422\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u043E\u0434\u0435\u043B\u0430\u043D\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435"
          },
          remoteWork: {
            name: "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
            description: "\u041E\u043F\u044B\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430"
          },
          mentoring: {
            name: "\u041C\u0435\u043D\u0442\u043E\u0440\u0441\u0442\u0432\u043E",
            description: "\u041E\u043F\u044B\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432"
          },
          learning: {
            name: "\u041D\u0435\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",
            description: "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0435 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0438 \u0437\u043D\u0430\u043D\u0438\u0439"
          }
        }
      }, SP = {
        title: "\u041C\u043E\u0438 \u0440\u0430\u0431\u043E\u0442\u044B",
        viewProject: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442",
        projects: {
          1: {
            title: "Trucking Desk",
            description: "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043B \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B Trucking Desk, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F React, Tailwind CSS \u0438 Swiper.js, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u043E\u0432, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 \u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432."
          },
          2: {
            title: "San Remo",
            description: "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043B \u0438 \u0443\u043B\u0443\u0447\u0448\u0430\u043B \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 San Remo \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C React, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 \u0438 Swiper.js."
          },
          3: {
            title: "Hongqi",
            description: "\u041F\u0435\u0440\u0435\u043D\u0435\u0441 \u0441\u043B\u0430\u0439\u0434\u0435\u0440 \u0441\u0430\u0439\u0442\u0430 \u0441 jQuery \u043D\u0430 Swiper.js, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432 \u043A\u0440\u043E\u0441\u0441-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u0443\u044E \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0438 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D."
          },
          4: {
            title: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u0411\u043B\u043E\u0433",
            description: '\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0440\u0430\u0437\u0434\u0435\u043B "\u0411\u043B\u043E\u0433", \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, SEO-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044E \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443, \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.'
          },
          5: {
            title: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438",
            description: '\u041E\u0431\u043D\u043E\u0432\u0438\u043B \u0440\u0430\u0437\u0434\u0435\u043B "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438" \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043B\u044F \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0443\u043B\u0443\u0447\u0448\u0438\u0432 \u0434\u0438\u0437\u0430\u0439\u043D, \u0432\u043D\u0435\u0434\u0440\u0438\u0432 \u0444\u043E\u0440\u043C\u044B \u0437\u0430\u044F\u0432\u043E\u043A, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445.'
          }
        }
      }, xP = {
        title: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",
        showMore: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
        showLess: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
        companyWebsite: "\u0421\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
        experiences: {
          1: {
            company: "Positive Technologies",
            position: "Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A",
            period: "\u0410\u043F\u0440\u0435\u043B\u044C 2023 \u2014 \u041C\u0430\u0440\u0442 2025",
            description: '\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u0444\u043E\u0440\u043C\u044B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0435\u0439 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 "\u0411\u043B\u043E\u0433" \u0441 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 SEO-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0435\u0439. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438". \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0441 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0434\u0430\u043D\u043D\u044B\u0445.',
            shortDescription: "\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u0444\u043E\u0440\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u043E\u0432\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432, \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432."
          },
          2: {
            company: "Studio Nomad",
            position: "Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A",
            period: "\u041C\u0430\u0440\u0442 2021 \u2014 \u0410\u043F\u0440\u0435\u043B\u044C 2023",
            description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u043E\u0439 (Trucking Desk) \u0438 \u0441\u0430\u0439\u0442\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 (San Remo, Hongqi) \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C React. \u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0447\u0435\u0440\u0435\u0437 REST API. \u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0441 Tailwind CSS. \u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u043E\u0432 \u0441 Swiper.js. \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432.",
            shortDescription: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432."
          }
        }
      }, CP = {
        title: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439",
        question: "\u0425\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441?",
        availability: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439. \u042F \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u043F\u043D-\u043F\u0442 \u0441 8:00 \u0434\u043E 20:00 (GMT).",
        emailCopied: "\u041F\u043E\u0447\u0442\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!",
        copyright: "\xA9 {{year}} \u041D\u0438\u043A\u0438\u0442\u0430 \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432"
      }, kP = {
        buttonClicked: "\u041A\u043D\u043E\u043F\u043A\u0430 '\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043C!' \u0431\u044B\u043B\u0430 \u043D\u0430\u0436\u0430\u0442\u0430!",
        scrollingToSection: "\u041F\u0440\u043E\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u043C \u043A \u0441\u0435\u043A\u0446\u0438\u0438:",
        sectionNotFound: "\u0421\u0435\u043A\u0446\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430, \u043F\u0440\u043E\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u043C \u0432\u043D\u0438\u0437 \u043D\u0430 \u0432\u044B\u0441\u043E\u0442\u0443 \u044D\u043A\u0440\u0430\u043D\u0430"
      }, RP = {
        about: yP,
        header: vP,
        skills: bP,
        portfolio: SP,
        experience: xP,
        contacts: CP,
        debugMessages: kP
      }, EP = {
        en: {
          translation: mP
        },
        ru: {
          translation: RP
        }
      };
      Kt.use(x2).use(xS).init({
        resources: EP,
        fallbackLng: "ru",
        debug: false,
        interpolation: {
          escapeValue: false
        },
        detection: {
          order: [
            "localStorage",
            "navigator"
          ],
          caches: [
            "localStorage"
          ]
        }
      });
      y1(document.getElementById("root")).render(P.jsx(F.StrictMode, {
        children: P.jsx(M9, {})
      }));
    })();
  }
});
export default require_stdin();
