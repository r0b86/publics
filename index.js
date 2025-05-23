var fd = e => {
    throw TypeError(e)
}
;
var $i = (e, t, n) => t.has(e) || fd("Cannot " + n);
var N = (e, t, n) => ($i(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , se = (e, t, n) => t.has(e) ? fd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , Y = (e, t, n, o) => ($i(e, t, "write to private field"),
o ? o.call(e, n) : t.set(e, n),
n)
  , _e = (e, t, n) => ($i(e, t, "access private method"),
n);
var Da = (e, t, n, o) => ({
    set _(r) {
        Y(e, t, r, n)
    },
    get _() {
        return N(e, t, o)
    }
});
function W2(e, t) {
    for (var n = 0; n < t.length; n++) {
        const o = t[n];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const r in o)
                if (r !== "default" && !(r in e)) {
                    const a = Object.getOwnPropertyDescriptor(o, r);
                    a && Object.defineProperty(e, r, a.get ? a : {
                        enumerable: !0,
                        get: () => o[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        o(r);
    new MutationObserver(r => {
        for (const a of r)
            if (a.type === "childList")
                for (const s of a.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const a = {};
        return r.integrity && (a.integrity = r.integrity),
        r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function o(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const a = n(r);
        fetch(r.href, a)
    }
}
)();
function Tf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ef = {
    exports: {}
}
  , ti = {}
  , Pf = {
    exports: {}
}
  , q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya = Symbol.for("react.element")
  , V2 = Symbol.for("react.portal")
  , H2 = Symbol.for("react.fragment")
  , G2 = Symbol.for("react.strict_mode")
  , K2 = Symbol.for("react.profiler")
  , Q2 = Symbol.for("react.provider")
  , Y2 = Symbol.for("react.context")
  , X2 = Symbol.for("react.forward_ref")
  , q2 = Symbol.for("react.suspense")
  , Z2 = Symbol.for("react.memo")
  , J2 = Symbol.for("react.lazy")
  , md = Symbol.iterator;
function e0(e) {
    return e === null || typeof e != "object" ? null : (e = md && e[md] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var kf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Nf = Object.assign
  , Rf = {};
function dr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rf,
    this.updater = n || kf
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
dr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Af() {}
Af.prototype = dr.prototype;
function Gc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rf,
    this.updater = n || kf
}
var Kc = Gc.prototype = new Af;
Kc.constructor = Gc;
Nf(Kc, dr.prototype);
Kc.isPureReactComponent = !0;
var hd = Array.isArray
  , Df = Object.prototype.hasOwnProperty
  , Qc = {
    current: null
}
  , If = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function jf(e, t, n) {
    var o, r = {}, a = null, s = null;
    if (t != null)
        for (o in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t)
            Df.call(t, o) && !If.hasOwnProperty(o) && (r[o] = t[o]);
    var i = arguments.length - 2;
    if (i === 1)
        r.children = n;
    else if (1 < i) {
        for (var l = Array(i), c = 0; c < i; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    if (e && e.defaultProps)
        for (o in i = e.defaultProps,
        i)
            r[o] === void 0 && (r[o] = i[o]);
    return {
        $$typeof: ya,
        type: e,
        key: a,
        ref: s,
        props: r,
        _owner: Qc.current
    }
}
function t0(e, t) {
    return {
        $$typeof: ya,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Yc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ya
}
function n0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var vd = /\/+/g;
function Ui(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? n0("" + e.key) : t.toString(36)
}
function rs(e, t, n, o, r) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (a) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ya:
            case V2:
                s = !0
            }
        }
    if (s)
        return s = e,
        r = r(s),
        e = o === "" ? "." + Ui(s, 0) : o,
        hd(r) ? (n = "",
        e != null && (n = e.replace(vd, "$&/") + "/"),
        rs(r, t, n, "", function(c) {
            return c
        })) : r != null && (Yc(r) && (r = t0(r, n + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(vd, "$&/") + "/") + e)),
        t.push(r)),
        1;
    if (s = 0,
    o = o === "" ? "." : o + ":",
    hd(e))
        for (var i = 0; i < e.length; i++) {
            a = e[i];
            var l = o + Ui(a, i);
            s += rs(a, t, n, l, r)
        }
    else if (l = e0(e),
    typeof l == "function")
        for (e = l.call(e),
        i = 0; !(a = e.next()).done; )
            a = a.value,
            l = o + Ui(a, i++),
            s += rs(a, t, n, l, r);
    else if (a === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ia(e, t, n) {
    if (e == null)
        return e;
    var o = []
      , r = 0;
    return rs(e, o, "", "", function(a) {
        return t.call(n, a, r++)
    }),
    o
}
function o0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ge = {
    current: null
}
  , as = {
    transition: null
}
  , r0 = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: as,
    ReactCurrentOwner: Qc
};
function _f() {
    throw Error("act(...) is not supported in production builds of React.")
}
q.Children = {
    map: Ia,
    forEach: function(e, t, n) {
        Ia(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ia(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ia(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Yc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
q.Component = dr;
q.Fragment = H2;
q.Profiler = K2;
q.PureComponent = Gc;
q.StrictMode = G2;
q.Suspense = q2;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0;
q.act = _f;
q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var o = Nf({}, e.props)
      , r = e.key
      , a = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref,
        s = Qc.current),
        t.key !== void 0 && (r = "" + t.key),
        e.type && e.type.defaultProps)
            var i = e.type.defaultProps;
        for (l in t)
            Df.call(t, l) && !If.hasOwnProperty(l) && (o[l] = t[l] === void 0 && i !== void 0 ? i[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        i = Array(l);
        for (var c = 0; c < l; c++)
            i[c] = arguments[c + 2];
        o.children = i
    }
    return {
        $$typeof: ya,
        type: e.type,
        key: r,
        ref: a,
        props: o,
        _owner: s
    }
}
;
q.createContext = function(e) {
    return e = {
        $$typeof: Y2,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Q2,
        _context: e
    },
    e.Consumer = e
}
;
q.createElement = jf;
q.createFactory = function(e) {
    var t = jf.bind(null, e);
    return t.type = e,
    t
}
;
q.createRef = function() {
    return {
        current: null
    }
}
;
q.forwardRef = function(e) {
    return {
        $$typeof: X2,
        render: e
    }
}
;
q.isValidElement = Yc;
q.lazy = function(e) {
    return {
        $$typeof: J2,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: o0
    }
}
;
q.memo = function(e, t) {
    return {
        $$typeof: Z2,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
q.startTransition = function(e) {
    var t = as.transition;
    as.transition = {};
    try {
        e()
    } finally {
        as.transition = t
    }
}
;
q.unstable_act = _f;
q.useCallback = function(e, t) {
    return Ge.current.useCallback(e, t)
}
;
q.useContext = function(e) {
    return Ge.current.useContext(e)
}
;
q.useDebugValue = function() {}
;
q.useDeferredValue = function(e) {
    return Ge.current.useDeferredValue(e)
}
;
q.useEffect = function(e, t) {
    return Ge.current.useEffect(e, t)
}
;
q.useId = function() {
    return Ge.current.useId()
}
;
q.useImperativeHandle = function(e, t, n) {
    return Ge.current.useImperativeHandle(e, t, n)
}
;
q.useInsertionEffect = function(e, t) {
    return Ge.current.useInsertionEffect(e, t)
}
;
q.useLayoutEffect = function(e, t) {
    return Ge.current.useLayoutEffect(e, t)
}
;
q.useMemo = function(e, t) {
    return Ge.current.useMemo(e, t)
}
;
q.useReducer = function(e, t, n) {
    return Ge.current.useReducer(e, t, n)
}
;
q.useRef = function(e) {
    return Ge.current.useRef(e)
}
;
q.useState = function(e) {
    return Ge.current.useState(e)
}
;
q.useSyncExternalStore = function(e, t, n) {
    return Ge.current.useSyncExternalStore(e, t, n)
}
;
q.useTransition = function() {
    return Ge.current.useTransition()
}
;
q.version = "18.3.1";
Pf.exports = q;
var h = Pf.exports;
const D = Tf(h)
  , Of = W2({
    __proto__: null,
    default: D
}, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a0 = h
  , s0 = Symbol.for("react.element")
  , i0 = Symbol.for("react.fragment")
  , l0 = Object.prototype.hasOwnProperty
  , c0 = a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , u0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mf(e, t, n) {
    var o, r = {}, a = null, s = null;
    n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (o in t)
        l0.call(t, o) && !u0.hasOwnProperty(o) && (r[o] = t[o]);
    if (e && e.defaultProps)
        for (o in t = e.defaultProps,
        t)
            r[o] === void 0 && (r[o] = t[o]);
    return {
        $$typeof: s0,
        type: e,
        key: a,
        ref: s,
        props: r,
        _owner: c0.current
    }
}
ti.Fragment = i0;
ti.jsx = Mf;
ti.jsxs = Mf;
Ef.exports = ti;
var v = Ef.exports
  , Bf = {
    exports: {}
}
  , dt = {}
  , Lf = {
    exports: {}
}
  , Ff = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, A) {
        var F = T.length;
        T.push(A);
        e: for (; 0 < F; ) {
            var B = F - 1 >>> 1
              , $ = T[B];
            if (0 < r($, A))
                T[B] = A,
                T[F] = $,
                F = B;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function o(T) {
        if (T.length === 0)
            return null;
        var A = T[0]
          , F = T.pop();
        if (F !== A) {
            T[0] = F;
            e: for (var B = 0, $ = T.length, X = $ >>> 1; B < X; ) {
                var re = 2 * (B + 1) - 1
                  , ke = T[re]
                  , Z = re + 1
                  , U = T[Z];
                if (0 > r(ke, F))
                    Z < $ && 0 > r(U, ke) ? (T[B] = U,
                    T[Z] = F,
                    B = Z) : (T[B] = ke,
                    T[re] = F,
                    B = re);
                else if (Z < $ && 0 > r(U, F))
                    T[B] = U,
                    T[Z] = F,
                    B = Z;
                else
                    break e
            }
        }
        return A
    }
    function r(T, A) {
        var F = T.sortIndex - A.sortIndex;
        return F !== 0 ? F : T.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var s = Date
          , i = s.now();
        e.unstable_now = function() {
            return s.now() - i
        }
    }
    var l = []
      , c = []
      , d = 1
      , p = null
      , u = 3
      , y = !1
      , S = !1
      , f = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(T) {
        for (var A = n(c); A !== null; ) {
            if (A.callback === null)
                o(c);
            else if (A.startTime <= T)
                o(c),
                A.sortIndex = A.expirationTime,
                t(l, A);
            else
                break;
            A = n(c)
        }
    }
    function C(T) {
        if (f = !1,
        x(T),
        !S)
            if (n(l) !== null)
                S = !0,
                M(b);
            else {
                var A = n(c);
                A !== null && H(C, A.startTime - T)
            }
    }
    function b(T, A) {
        S = !1,
        f && (f = !1,
        g(k),
        k = -1),
        y = !0;
        var F = u;
        try {
            for (x(A),
            p = n(l); p !== null && (!(p.expirationTime > A) || T && !z()); ) {
                var B = p.callback;
                if (typeof B == "function") {
                    p.callback = null,
                    u = p.priorityLevel;
                    var $ = B(p.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof $ == "function" ? p.callback = $ : p === n(l) && o(l),
                    x(A)
                } else
                    o(l);
                p = n(l)
            }
            if (p !== null)
                var X = !0;
            else {
                var re = n(c);
                re !== null && H(C, re.startTime - A),
                X = !1
            }
            return X
        } finally {
            p = null,
            u = F,
            y = !1
        }
    }
    var P = !1
      , E = null
      , k = -1
      , _ = 5
      , I = -1;
    function z() {
        return !(e.unstable_now() - I < _)
    }
    function O() {
        if (E !== null) {
            var T = e.unstable_now();
            I = T;
            var A = !0;
            try {
                A = E(!0, T)
            } finally {
                A ? W() : (P = !1,
                E = null)
            }
        } else
            P = !1
    }
    var W;
    if (typeof m == "function")
        W = function() {
            m(O)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var j = new MessageChannel
          , V = j.port2;
        j.port1.onmessage = O,
        W = function() {
            V.postMessage(null)
        }
    } else
        W = function() {
            w(O, 0)
        }
        ;
    function M(T) {
        E = T,
        P || (P = !0,
        W())
    }
    function H(T, A) {
        k = w(function() {
            T(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || y || (S = !0,
        M(b))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return u
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(T) {
        switch (u) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = u
        }
        var F = u;
        u = A;
        try {
            return T()
        } finally {
            u = F
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, A) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var F = u;
        u = T;
        try {
            return A()
        } finally {
            u = F
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, A, F) {
        var B = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay,
        F = typeof F == "number" && 0 < F ? B + F : B) : F = B,
        T) {
        case 1:
            var $ = -1;
            break;
        case 2:
            $ = 250;
            break;
        case 5:
            $ = 1073741823;
            break;
        case 4:
            $ = 1e4;
            break;
        default:
            $ = 5e3
        }
        return $ = F + $,
        T = {
            id: d++,
            callback: A,
            priorityLevel: T,
            startTime: F,
            expirationTime: $,
            sortIndex: -1
        },
        F > B ? (T.sortIndex = F,
        t(c, T),
        n(l) === null && T === n(c) && (f ? (g(k),
        k = -1) : f = !0,
        H(C, F - B))) : (T.sortIndex = $,
        t(l, T),
        S || y || (S = !0,
        M(b))),
        T
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(T) {
        var A = u;
        return function() {
            var F = u;
            u = A;
            try {
                return T.apply(this, arguments)
            } finally {
                u = F
            }
        }
    }
}
)(Ff);
Lf.exports = Ff;
var d0 = Lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p0 = h
  , ut = d0;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var zf = new Set
  , Hr = {};
function mo(e, t) {
    tr(e, t),
    tr(e + "Capture", t)
}
function tr(e, t) {
    for (Hr[e] = t,
    e = 0; e < t.length; e++)
        zf.add(t[e])
}
var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Rl = Object.prototype.hasOwnProperty
  , f0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , gd = {}
  , xd = {};
function m0(e) {
    return Rl.call(xd, e) ? !0 : Rl.call(gd, e) ? !1 : f0.test(e) ? xd[e] = !0 : (gd[e] = !0,
    !1)
}
function h0(e, t, n, o) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function v0(e, t, n, o) {
    if (t === null || typeof t > "u" || h0(e, t, n, o))
        return !0;
    if (o)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ke(e, t, n, o, r, a, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = o,
    this.attributeNamespace = r,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = a,
    this.removeEmptyString = s
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    je[e] = new Ke(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    je[t] = new Ke(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    je[e] = new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    je[e] = new Ke(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    je[e] = new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    je[e] = new Ke(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    je[e] = new Ke(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    je[e] = new Ke(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    je[e] = new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Xc = /[\-:]([a-z])/g;
function qc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Xc, qc);
    je[t] = new Ke(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Xc, qc);
    je[t] = new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Xc, qc);
    je[t] = new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    je[e] = new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    je[e] = new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Zc(e, t, n, o) {
    var r = je.hasOwnProperty(t) ? je[t] : null;
    (r !== null ? r.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (v0(t, n, r, o) && (n = null),
    o || r === null ? m0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (t = r.attributeName,
    o = r.attributeNamespace,
    n === null ? e.removeAttribute(t) : (r = r.type,
    n = r === 3 || r === 4 && n === !0 ? "" : "" + n,
    o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
}
var sn = p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ja = Symbol.for("react.element")
  , To = Symbol.for("react.portal")
  , Eo = Symbol.for("react.fragment")
  , Jc = Symbol.for("react.strict_mode")
  , Al = Symbol.for("react.profiler")
  , $f = Symbol.for("react.provider")
  , Uf = Symbol.for("react.context")
  , eu = Symbol.for("react.forward_ref")
  , Dl = Symbol.for("react.suspense")
  , Il = Symbol.for("react.suspense_list")
  , tu = Symbol.for("react.memo")
  , hn = Symbol.for("react.lazy")
  , Wf = Symbol.for("react.offscreen")
  , yd = Symbol.iterator;
function xr(e) {
    return e === null || typeof e != "object" ? null : (e = yd && e[yd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var xe = Object.assign, Wi;
function Nr(e) {
    if (Wi === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Wi = t && t[1] || ""
        }
    return `
` + Wi + e
}
var Vi = !1;
function Hi(e, t) {
    if (!e || Vi)
        return "";
    Vi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var o = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    o = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                o = c
            }
            e()
        }
    } catch (c) {
        if (c && o && typeof c.stack == "string") {
            for (var r = c.stack.split(`
`), a = o.stack.split(`
`), s = r.length - 1, i = a.length - 1; 1 <= s && 0 <= i && r[s] !== a[i]; )
                i--;
            for (; 1 <= s && 0 <= i; s--,
            i--)
                if (r[s] !== a[i]) {
                    if (s !== 1 || i !== 1)
                        do
                            if (s--,
                            i--,
                            0 > i || r[s] !== a[i]) {
                                var l = `
` + r[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= i);
                    break
                }
        }
    } finally {
        Vi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nr(e) : ""
}
function g0(e) {
    switch (e.tag) {
    case 5:
        return Nr(e.type);
    case 16:
        return Nr("Lazy");
    case 13:
        return Nr("Suspense");
    case 19:
        return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Hi(e.type, !1),
        e;
    case 11:
        return e = Hi(e.type.render, !1),
        e;
    case 1:
        return e = Hi(e.type, !0),
        e;
    default:
        return ""
    }
}
function jl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Eo:
        return "Fragment";
    case To:
        return "Portal";
    case Al:
        return "Profiler";
    case Jc:
        return "StrictMode";
    case Dl:
        return "Suspense";
    case Il:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Uf:
            return (e.displayName || "Context") + ".Consumer";
        case $f:
            return (e._context.displayName || "Context") + ".Provider";
        case eu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case tu:
            return t = e.displayName || null,
            t !== null ? t : jl(e.type) || "Memo";
        case hn:
            t = e._payload,
            e = e._init;
            try {
                return jl(e(t))
            } catch {}
        }
    return null
}
function x0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return jl(t);
    case 8:
        return t === Jc ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function On(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Vf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function y0(e) {
    var t = Vf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get
          , a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(s) {
                o = "" + s,
                a.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return o
            },
            setValue: function(s) {
                o = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function _a(e) {
    e._valueTracker || (e._valueTracker = y0(e))
}
function Hf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , o = "";
    return e && (o = Vf(e) ? e.checked ? "true" : "false" : e.value),
    e = o,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Cs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function _l(e, t) {
    var n = t.checked;
    return xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function wd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , o = t.checked != null ? t.checked : t.defaultChecked;
    n = On(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: o,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Gf(e, t) {
    t = t.checked,
    t != null && Zc(e, "checked", t, !1)
}
function Ol(e, t) {
    Gf(e, t);
    var n = On(t.value)
      , o = t.type;
    if (n != null)
        o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ml(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ml(e, t.type, On(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Sd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type;
        if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ml(e, t, n) {
    (t !== "number" || Cs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Rr = Array.isArray;
function Mo(e, t, n, o) {
    if (e = e.options,
    t) {
        t = {};
        for (var r = 0; r < n.length; r++)
            t["$" + n[r]] = !0;
        for (n = 0; n < e.length; n++)
            r = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== r && (e[n].selected = r),
            r && o && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + On(n),
        t = null,
        r = 0; r < e.length; r++) {
            if (e[r].value === n) {
                e[r].selected = !0,
                o && (e[r].defaultSelected = !0);
                return
            }
            t !== null || e[r].disabled || (t = e[r])
        }
        t !== null && (t.selected = !0)
    }
}
function Bl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return xe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Cd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (Rr(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: On(n)
    }
}
function Kf(e, t) {
    var n = On(t.value)
      , o = On(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    o != null && (e.defaultValue = "" + o)
}
function bd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Qf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ll(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Oa, Yf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, o, r)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Oa = Oa || document.createElement("div"),
        Oa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Oa.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Gr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , w0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function(e) {
    w0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Or[t] = Or[e]
    })
});
function Xf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Or.hasOwnProperty(e) && Or[e] ? ("" + t).trim() : t + "px"
}
function qf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var o = n.indexOf("--") === 0
              , r = Xf(n, t[n], o);
            n === "float" && (n = "cssFloat"),
            o ? e.setProperty(n, r) : e[n] = r
        }
}
var S0 = xe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Fl(e, t) {
    if (t) {
        if (S0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function zl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var $l = null;
function nu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ul = null
  , Bo = null
  , Lo = null;
function Td(e) {
    if (e = Ca(e)) {
        if (typeof Ul != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = si(t),
        Ul(e.stateNode, e.type, t))
    }
}
function Zf(e) {
    Bo ? Lo ? Lo.push(e) : Lo = [e] : Bo = e
}
function Jf() {
    if (Bo) {
        var e = Bo
          , t = Lo;
        if (Lo = Bo = null,
        Td(e),
        t)
            for (e = 0; e < t.length; e++)
                Td(t[e])
    }
}
function em(e, t) {
    return e(t)
}
function tm() {}
var Gi = !1;
function nm(e, t, n) {
    if (Gi)
        return e(t, n);
    Gi = !0;
    try {
        return em(e, t, n)
    } finally {
        Gi = !1,
        (Bo !== null || Lo !== null) && (tm(),
        Jf())
    }
}
function Kr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var o = si(n);
    if (o === null)
        return null;
    n = o[t];
    e: switch (t) {
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
        (o = !o.disabled) || (e = e.type,
        o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !o;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var Wl = !1;
if (en)
    try {
        var yr = {};
        Object.defineProperty(yr, "passive", {
            get: function() {
                Wl = !0
            }
        }),
        window.addEventListener("test", yr, yr),
        window.removeEventListener("test", yr, yr)
    } catch {
        Wl = !1
    }
function C0(e, t, n, o, r, a, s, i, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Mr = !1
  , bs = null
  , Ts = !1
  , Vl = null
  , b0 = {
    onError: function(e) {
        Mr = !0,
        bs = e
    }
};
function T0(e, t, n, o, r, a, s, i, l) {
    Mr = !1,
    bs = null,
    C0.apply(b0, arguments)
}
function E0(e, t, n, o, r, a, s, i, l) {
    if (T0.apply(this, arguments),
    Mr) {
        if (Mr) {
            var c = bs;
            Mr = !1,
            bs = null
        } else
            throw Error(R(198));
        Ts || (Ts = !0,
        Vl = c)
    }
}
function ho(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function om(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ed(e) {
    if (ho(e) !== e)
        throw Error(R(188))
}
function P0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ho(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, o = t; ; ) {
        var r = n.return;
        if (r === null)
            break;
        var a = r.alternate;
        if (a === null) {
            if (o = r.return,
            o !== null) {
                n = o;
                continue
            }
            break
        }
        if (r.child === a.child) {
            for (a = r.child; a; ) {
                if (a === n)
                    return Ed(r),
                    e;
                if (a === o)
                    return Ed(r),
                    t;
                a = a.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== o.return)
            n = r,
            o = a;
        else {
            for (var s = !1, i = r.child; i; ) {
                if (i === n) {
                    s = !0,
                    n = r,
                    o = a;
                    break
                }
                if (i === o) {
                    s = !0,
                    o = r,
                    n = a;
                    break
                }
                i = i.sibling
            }
            if (!s) {
                for (i = a.child; i; ) {
                    if (i === n) {
                        s = !0,
                        n = a,
                        o = r;
                        break
                    }
                    if (i === o) {
                        s = !0,
                        o = a,
                        n = r;
                        break
                    }
                    i = i.sibling
                }
                if (!s)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== o)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function rm(e) {
    return e = P0(e),
    e !== null ? am(e) : null
}
function am(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = am(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var sm = ut.unstable_scheduleCallback
  , Pd = ut.unstable_cancelCallback
  , k0 = ut.unstable_shouldYield
  , N0 = ut.unstable_requestPaint
  , be = ut.unstable_now
  , R0 = ut.unstable_getCurrentPriorityLevel
  , ou = ut.unstable_ImmediatePriority
  , im = ut.unstable_UserBlockingPriority
  , Es = ut.unstable_NormalPriority
  , A0 = ut.unstable_LowPriority
  , lm = ut.unstable_IdlePriority
  , ni = null
  , Wt = null;
function D0(e) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function")
        try {
            Wt.onCommitFiberRoot(ni, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : _0
  , I0 = Math.log
  , j0 = Math.LN2;
function _0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (I0(e) / j0 | 0) | 0
}
var Ma = 64
  , Ba = 4194304;
function Ar(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ps(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var o = 0
      , r = e.suspendedLanes
      , a = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var i = s & ~r;
        i !== 0 ? o = Ar(i) : (a &= s,
        a !== 0 && (o = Ar(a)))
    } else
        s = n & ~r,
        s !== 0 ? o = Ar(s) : a !== 0 && (o = Ar(a));
    if (o === 0)
        return 0;
    if (t !== 0 && t !== o && !(t & r) && (r = o & -o,
    a = t & -t,
    r >= a || r === 16 && (a & 4194240) !== 0))
        return t;
    if (o & 4 && (o |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= o; 0 < t; )
            n = 31 - Rt(t),
            r = 1 << n,
            o |= e[n],
            t &= ~r;
    return o
}
function O0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
        return -1
    }
}
function M0(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, r = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var s = 31 - Rt(a)
          , i = 1 << s
          , l = r[s];
        l === -1 ? (!(i & n) || i & o) && (r[s] = O0(i, t)) : l <= t && (e.expiredLanes |= i),
        a &= ~i
    }
}
function Hl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function cm() {
    var e = Ma;
    return Ma <<= 1,
    !(Ma & 4194240) && (Ma = 64),
    e
}
function Ki(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function wa(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Rt(t),
    e[t] = n
}
function B0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var r = 31 - Rt(n)
          , a = 1 << r;
        t[r] = 0,
        o[r] = -1,
        e[r] = -1,
        n &= ~a
    }
}
function ru(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var o = 31 - Rt(n)
          , r = 1 << o;
        r & t | e[o] & t && (e[o] |= t),
        n &= ~r
    }
}
var ie = 0;
function um(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var dm, au, pm, fm, mm, Gl = !1, La = [], kn = null, Nn = null, Rn = null, Qr = new Map, Yr = new Map, gn = [], L0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        kn = null;
        break;
    case "dragenter":
    case "dragleave":
        Nn = null;
        break;
    case "mouseover":
    case "mouseout":
        Rn = null;
        break;
    case "pointerover":
    case "pointerout":
        Qr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Yr.delete(t.pointerId)
    }
}
function wr(e, t, n, o, r, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: o,
        nativeEvent: a,
        targetContainers: [r]
    },
    t !== null && (t = Ca(t),
    t !== null && au(t)),
    e) : (e.eventSystemFlags |= o,
    t = e.targetContainers,
    r !== null && t.indexOf(r) === -1 && t.push(r),
    e)
}
function F0(e, t, n, o, r) {
    switch (t) {
    case "focusin":
        return kn = wr(kn, e, t, n, o, r),
        !0;
    case "dragenter":
        return Nn = wr(Nn, e, t, n, o, r),
        !0;
    case "mouseover":
        return Rn = wr(Rn, e, t, n, o, r),
        !0;
    case "pointerover":
        var a = r.pointerId;
        return Qr.set(a, wr(Qr.get(a) || null, e, t, n, o, r)),
        !0;
    case "gotpointercapture":
        return a = r.pointerId,
        Yr.set(a, wr(Yr.get(a) || null, e, t, n, o, r)),
        !0
    }
    return !1
}
function hm(e) {
    var t = Yn(e.target);
    if (t !== null) {
        var n = ho(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = om(n),
                t !== null) {
                    e.blockedOn = t,
                    mm(e.priority, function() {
                        pm(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ss(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Kl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var o = new n.constructor(n.type,n);
            $l = o,
            n.target.dispatchEvent(o),
            $l = null
        } else
            return t = Ca(n),
            t !== null && au(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Nd(e, t, n) {
    ss(e) && n.delete(t)
}
function z0() {
    Gl = !1,
    kn !== null && ss(kn) && (kn = null),
    Nn !== null && ss(Nn) && (Nn = null),
    Rn !== null && ss(Rn) && (Rn = null),
    Qr.forEach(Nd),
    Yr.forEach(Nd)
}
function Sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Gl || (Gl = !0,
    ut.unstable_scheduleCallback(ut.unstable_NormalPriority, z0)))
}
function Xr(e) {
    function t(r) {
        return Sr(r, e)
    }
    if (0 < La.length) {
        Sr(La[0], e);
        for (var n = 1; n < La.length; n++) {
            var o = La[n];
            o.blockedOn === e && (o.blockedOn = null)
        }
    }
    for (kn !== null && Sr(kn, e),
    Nn !== null && Sr(Nn, e),
    Rn !== null && Sr(Rn, e),
    Qr.forEach(t),
    Yr.forEach(t),
    n = 0; n < gn.length; n++)
        o = gn[n],
        o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < gn.length && (n = gn[0],
    n.blockedOn === null); )
        hm(n),
        n.blockedOn === null && gn.shift()
}
var Fo = sn.ReactCurrentBatchConfig
  , ks = !0;
function $0(e, t, n, o) {
    var r = ie
      , a = Fo.transition;
    Fo.transition = null;
    try {
        ie = 1,
        su(e, t, n, o)
    } finally {
        ie = r,
        Fo.transition = a
    }
}
function U0(e, t, n, o) {
    var r = ie
      , a = Fo.transition;
    Fo.transition = null;
    try {
        ie = 4,
        su(e, t, n, o)
    } finally {
        ie = r,
        Fo.transition = a
    }
}
function su(e, t, n, o) {
    if (ks) {
        var r = Kl(e, t, n, o);
        if (r === null)
            ol(e, t, o, Ns, n),
            kd(e, o);
        else if (F0(r, e, t, n, o))
            o.stopPropagation();
        else if (kd(e, o),
        t & 4 && -1 < L0.indexOf(e)) {
            for (; r !== null; ) {
                var a = Ca(r);
                if (a !== null && dm(a),
                a = Kl(e, t, n, o),
                a === null && ol(e, t, o, Ns, n),
                a === r)
                    break;
                r = a
            }
            r !== null && o.stopPropagation()
        } else
            ol(e, t, o, null, n)
    }
}
var Ns = null;
function Kl(e, t, n, o) {
    if (Ns = null,
    e = nu(o),
    e = Yn(e),
    e !== null)
        if (t = ho(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = om(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ns = e,
    null
}
function vm(e) {
    switch (e) {
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
        switch (R0()) {
        case ou:
            return 1;
        case im:
            return 4;
        case Es:
        case A0:
            return 16;
        case lm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Tn = null
  , iu = null
  , is = null;
function gm() {
    if (is)
        return is;
    var e, t = iu, n = t.length, o, r = "value"in Tn ? Tn.value : Tn.textContent, a = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++)
        ;
    var s = n - e;
    for (o = 1; o <= s && t[n - o] === r[a - o]; o++)
        ;
    return is = r.slice(e, 1 < o ? 1 - o : void 0)
}
function ls(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Fa() {
    return !0
}
function Rd() {
    return !1
}
function pt(e) {
    function t(n, o, r, a, s) {
        this._reactName = n,
        this._targetInst = r,
        this.type = o,
        this.nativeEvent = a,
        this.target = s,
        this.currentTarget = null;
        for (var i in e)
            e.hasOwnProperty(i) && (n = e[i],
            this[i] = n ? n(a) : a[i]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Fa : Rd,
        this.isPropagationStopped = Rd,
        this
    }
    return xe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Fa)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Fa)
        },
        persist: function() {},
        isPersistent: Fa
    }),
    t
}
var pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, lu = pt(pr), Sa = xe({}, pr, {
    view: 0,
    detail: 0
}), W0 = pt(Sa), Qi, Yi, Cr, oi = xe({}, Sa, {
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
    getModifierState: cu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Cr && (Cr && e.type === "mousemove" ? (Qi = e.screenX - Cr.screenX,
        Yi = e.screenY - Cr.screenY) : Yi = Qi = 0,
        Cr = e),
        Qi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Yi
    }
}), Ad = pt(oi), V0 = xe({}, oi, {
    dataTransfer: 0
}), H0 = pt(V0), G0 = xe({}, Sa, {
    relatedTarget: 0
}), Xi = pt(G0), K0 = xe({}, pr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Q0 = pt(K0), Y0 = xe({}, pr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), X0 = pt(Y0), q0 = xe({}, pr, {
    data: 0
}), Dd = pt(q0), Z0 = {
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
}, J0 = {
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
}, ex = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function tx(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ex[e]) ? !!t[e] : !1
}
function cu() {
    return tx
}
var nx = xe({}, Sa, {
    key: function(e) {
        if (e.key) {
            var t = Z0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ls(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cu,
    charCode: function(e) {
        return e.type === "keypress" ? ls(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ls(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , ox = pt(nx)
  , rx = xe({}, oi, {
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
})
  , Id = pt(rx)
  , ax = xe({}, Sa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cu
})
  , sx = pt(ax)
  , ix = xe({}, pr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , lx = pt(ix)
  , cx = xe({}, oi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ux = pt(cx)
  , dx = [9, 13, 27, 32]
  , uu = en && "CompositionEvent"in window
  , Br = null;
en && "documentMode"in document && (Br = document.documentMode);
var px = en && "TextEvent"in window && !Br
  , xm = en && (!uu || Br && 8 < Br && 11 >= Br)
  , jd = " "
  , _d = !1;
function ym(e, t) {
    switch (e) {
    case "keyup":
        return dx.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function wm(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Po = !1;
function fx(e, t) {
    switch (e) {
    case "compositionend":
        return wm(t);
    case "keypress":
        return t.which !== 32 ? null : (_d = !0,
        jd);
    case "textInput":
        return e = t.data,
        e === jd && _d ? null : e;
    default:
        return null
    }
}
function mx(e, t) {
    if (Po)
        return e === "compositionend" || !uu && ym(e, t) ? (e = gm(),
        is = iu = Tn = null,
        Po = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return xm && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var hx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Od(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hx[e.type] : t === "textarea"
}
function Sm(e, t, n, o) {
    Zf(o),
    t = Rs(t, "onChange"),
    0 < t.length && (n = new lu("onChange","change",null,n,o),
    e.push({
        event: n,
        listeners: t
    }))
}
var Lr = null
  , qr = null;
function vx(e) {
    Im(e, 0)
}
function ri(e) {
    var t = Ro(e);
    if (Hf(t))
        return e
}
function gx(e, t) {
    if (e === "change")
        return t
}
var Cm = !1;
if (en) {
    var qi;
    if (en) {
        var Zi = "oninput"in document;
        if (!Zi) {
            var Md = document.createElement("div");
            Md.setAttribute("oninput", "return;"),
            Zi = typeof Md.oninput == "function"
        }
        qi = Zi
    } else
        qi = !1;
    Cm = qi && (!document.documentMode || 9 < document.documentMode)
}
function Bd() {
    Lr && (Lr.detachEvent("onpropertychange", bm),
    qr = Lr = null)
}
function bm(e) {
    if (e.propertyName === "value" && ri(qr)) {
        var t = [];
        Sm(t, qr, e, nu(e)),
        nm(vx, t)
    }
}
function xx(e, t, n) {
    e === "focusin" ? (Bd(),
    Lr = t,
    qr = n,
    Lr.attachEvent("onpropertychange", bm)) : e === "focusout" && Bd()
}
function yx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ri(qr)
}
function wx(e, t) {
    if (e === "click")
        return ri(t)
}
function Sx(e, t) {
    if (e === "input" || e === "change")
        return ri(t)
}
function Cx(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Dt = typeof Object.is == "function" ? Object.is : Cx;
function Zr(e, t) {
    if (Dt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , o = Object.keys(t);
    if (n.length !== o.length)
        return !1;
    for (o = 0; o < n.length; o++) {
        var r = n[o];
        if (!Rl.call(t, r) || !Dt(e[r], t[r]))
            return !1
    }
    return !0
}
function Ld(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Fd(e, t) {
    var n = Ld(e);
    e = 0;
    for (var o; n; ) {
        if (n.nodeType === 3) {
            if (o = e + n.textContent.length,
            e <= t && o >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = o
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ld(n)
    }
}
function Tm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Tm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Em() {
    for (var e = window, t = Cs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Cs(e.document)
    }
    return t
}
function du(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function bx(e) {
    var t = Em()
      , n = e.focusedElem
      , o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Tm(n.ownerDocument.documentElement, n)) {
        if (o !== null && du(n)) {
            if (t = o.start,
            e = o.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var r = n.textContent.length
                  , a = Math.min(o.start, r);
                o = o.end === void 0 ? a : Math.min(o.end, r),
                !e.extend && a > o && (r = o,
                o = a,
                a = r),
                r = Fd(n, a);
                var s = Fd(n, o);
                r && s && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(r.node, r.offset),
                e.removeAllRanges(),
                a > o ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Tx = en && "documentMode"in document && 11 >= document.documentMode
  , ko = null
  , Ql = null
  , Fr = null
  , Yl = !1;
function zd(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yl || ko == null || ko !== Cs(o) || (o = ko,
    "selectionStart"in o && du(o) ? o = {
        start: o.selectionStart,
        end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
    o = {
        anchorNode: o.anchorNode,
        anchorOffset: o.anchorOffset,
        focusNode: o.focusNode,
        focusOffset: o.focusOffset
    }),
    Fr && Zr(Fr, o) || (Fr = o,
    o = Rs(Ql, "onSelect"),
    0 < o.length && (t = new lu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: o
    }),
    t.target = ko)))
}
function za(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var No = {
    animationend: za("Animation", "AnimationEnd"),
    animationiteration: za("Animation", "AnimationIteration"),
    animationstart: za("Animation", "AnimationStart"),
    transitionend: za("Transition", "TransitionEnd")
}
  , Ji = {}
  , Pm = {};
en && (Pm = document.createElement("div").style,
"AnimationEvent"in window || (delete No.animationend.animation,
delete No.animationiteration.animation,
delete No.animationstart.animation),
"TransitionEvent"in window || delete No.transitionend.transition);
function ai(e) {
    if (Ji[e])
        return Ji[e];
    if (!No[e])
        return e;
    var t = No[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Pm)
            return Ji[e] = t[n];
    return e
}
var km = ai("animationend")
  , Nm = ai("animationiteration")
  , Rm = ai("animationstart")
  , Am = ai("transitionend")
  , Dm = new Map
  , $d = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $n(e, t) {
    Dm.set(e, t),
    mo(t, [e])
}
for (var el = 0; el < $d.length; el++) {
    var tl = $d[el]
      , Ex = tl.toLowerCase()
      , Px = tl[0].toUpperCase() + tl.slice(1);
    $n(Ex, "on" + Px)
}
$n(km, "onAnimationEnd");
$n(Nm, "onAnimationIteration");
$n(Rm, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(Am, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
mo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , kx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function Ud(e, t, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = n,
    E0(o, t, void 0, e),
    e.currentTarget = null
}
function Im(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var o = e[n]
          , r = o.event;
        o = o.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var s = o.length - 1; 0 <= s; s--) {
                    var i = o[s]
                      , l = i.instance
                      , c = i.currentTarget;
                    if (i = i.listener,
                    l !== a && r.isPropagationStopped())
                        break e;
                    Ud(r, i, c),
                    a = l
                }
            else
                for (s = 0; s < o.length; s++) {
                    if (i = o[s],
                    l = i.instance,
                    c = i.currentTarget,
                    i = i.listener,
                    l !== a && r.isPropagationStopped())
                        break e;
                    Ud(r, i, c),
                    a = l
                }
        }
    }
    if (Ts)
        throw e = Vl,
        Ts = !1,
        Vl = null,
        e
}
function fe(e, t) {
    var n = t[ec];
    n === void 0 && (n = t[ec] = new Set);
    var o = e + "__bubble";
    n.has(o) || (jm(t, e, 2, !1),
    n.add(o))
}
function nl(e, t, n) {
    var o = 0;
    t && (o |= 4),
    jm(n, e, o, t)
}
var $a = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
    if (!e[$a]) {
        e[$a] = !0,
        zf.forEach(function(n) {
            n !== "selectionchange" && (kx.has(n) || nl(n, !1, e),
            nl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[$a] || (t[$a] = !0,
        nl("selectionchange", !1, t))
    }
}
function jm(e, t, n, o) {
    switch (vm(t)) {
    case 1:
        var r = $0;
        break;
    case 4:
        r = U0;
        break;
    default:
        r = su
    }
    n = r.bind(null, t, n, e),
    r = void 0,
    !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
    o ? r !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: r
    }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, {
        passive: r
    }) : e.addEventListener(t, n, !1)
}
function ol(e, t, n, o, r) {
    var a = o;
    if (!(t & 1) && !(t & 2) && o !== null)
        e: for (; ; ) {
            if (o === null)
                return;
            var s = o.tag;
            if (s === 3 || s === 4) {
                var i = o.stateNode.containerInfo;
                if (i === r || i.nodeType === 8 && i.parentNode === r)
                    break;
                if (s === 4)
                    for (s = o.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === r || l.nodeType === 8 && l.parentNode === r))
                            return;
                        s = s.return
                    }
                for (; i !== null; ) {
                    if (s = Yn(i),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        o = a = s;
                        continue e
                    }
                    i = i.parentNode
                }
            }
            o = o.return
        }
    nm(function() {
        var c = a
          , d = nu(n)
          , p = [];
        e: {
            var u = Dm.get(e);
            if (u !== void 0) {
                var y = lu
                  , S = e;
                switch (e) {
                case "keypress":
                    if (ls(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = ox;
                    break;
                case "focusin":
                    S = "focus",
                    y = Xi;
                    break;
                case "focusout":
                    S = "blur",
                    y = Xi;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Xi;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Ad;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = H0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = sx;
                    break;
                case km:
                case Nm:
                case Rm:
                    y = Q0;
                    break;
                case Am:
                    y = lx;
                    break;
                case "scroll":
                    y = W0;
                    break;
                case "wheel":
                    y = ux;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = X0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Id
                }
                var f = (t & 4) !== 0
                  , w = !f && e === "scroll"
                  , g = f ? u !== null ? u + "Capture" : null : u;
                f = [];
                for (var m = c, x; m !== null; ) {
                    x = m;
                    var C = x.stateNode;
                    if (x.tag === 5 && C !== null && (x = C,
                    g !== null && (C = Kr(m, g),
                    C != null && f.push(ea(m, C, x)))),
                    w)
                        break;
                    m = m.return
                }
                0 < f.length && (u = new y(u,S,null,n,d),
                p.push({
                    event: u,
                    listeners: f
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (u = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                u && n !== $l && (S = n.relatedTarget || n.fromElement) && (Yn(S) || S[tn]))
                    break e;
                if ((y || u) && (u = d.window === d ? d : (u = d.ownerDocument) ? u.defaultView || u.parentWindow : window,
                y ? (S = n.relatedTarget || n.toElement,
                y = c,
                S = S ? Yn(S) : null,
                S !== null && (w = ho(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (y = null,
                S = c),
                y !== S)) {
                    if (f = Ad,
                    C = "onMouseLeave",
                    g = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (f = Id,
                    C = "onPointerLeave",
                    g = "onPointerEnter",
                    m = "pointer"),
                    w = y == null ? u : Ro(y),
                    x = S == null ? u : Ro(S),
                    u = new f(C,m + "leave",y,n,d),
                    u.target = w,
                    u.relatedTarget = x,
                    C = null,
                    Yn(d) === c && (f = new f(g,m + "enter",S,n,d),
                    f.target = x,
                    f.relatedTarget = w,
                    C = f),
                    w = C,
                    y && S)
                        t: {
                            for (f = y,
                            g = S,
                            m = 0,
                            x = f; x; x = wo(x))
                                m++;
                            for (x = 0,
                            C = g; C; C = wo(C))
                                x++;
                            for (; 0 < m - x; )
                                f = wo(f),
                                m--;
                            for (; 0 < x - m; )
                                g = wo(g),
                                x--;
                            for (; m--; ) {
                                if (f === g || g !== null && f === g.alternate)
                                    break t;
                                f = wo(f),
                                g = wo(g)
                            }
                            f = null
                        }
                    else
                        f = null;
                    y !== null && Wd(p, u, y, f, !1),
                    S !== null && w !== null && Wd(p, w, S, f, !0)
                }
            }
            e: {
                if (u = c ? Ro(c) : window,
                y = u.nodeName && u.nodeName.toLowerCase(),
                y === "select" || y === "input" && u.type === "file")
                    var b = gx;
                else if (Od(u))
                    if (Cm)
                        b = Sx;
                    else {
                        b = yx;
                        var P = xx
                    }
                else
                    (y = u.nodeName) && y.toLowerCase() === "input" && (u.type === "checkbox" || u.type === "radio") && (b = wx);
                if (b && (b = b(e, c))) {
                    Sm(p, b, n, d);
                    break e
                }
                P && P(e, u, c),
                e === "focusout" && (P = u._wrapperState) && P.controlled && u.type === "number" && Ml(u, "number", u.value)
            }
            switch (P = c ? Ro(c) : window,
            e) {
            case "focusin":
                (Od(P) || P.contentEditable === "true") && (ko = P,
                Ql = c,
                Fr = null);
                break;
            case "focusout":
                Fr = Ql = ko = null;
                break;
            case "mousedown":
                Yl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Yl = !1,
                zd(p, n, d);
                break;
            case "selectionchange":
                if (Tx)
                    break;
            case "keydown":
            case "keyup":
                zd(p, n, d)
            }
            var E;
            if (uu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                Po ? ym(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (xm && n.locale !== "ko" && (Po || k !== "onCompositionStart" ? k === "onCompositionEnd" && Po && (E = gm()) : (Tn = d,
            iu = "value"in Tn ? Tn.value : Tn.textContent,
            Po = !0)),
            P = Rs(c, k),
            0 < P.length && (k = new Dd(k,e,null,n,d),
            p.push({
                event: k,
                listeners: P
            }),
            E ? k.data = E : (E = wm(n),
            E !== null && (k.data = E)))),
            (E = px ? fx(e, n) : mx(e, n)) && (c = Rs(c, "onBeforeInput"),
            0 < c.length && (d = new Dd("onBeforeInput","beforeinput",null,n,d),
            p.push({
                event: d,
                listeners: c
            }),
            d.data = E))
        }
        Im(p, t)
    })
}
function ea(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Rs(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
        var r = e
          , a = r.stateNode;
        r.tag === 5 && a !== null && (r = a,
        a = Kr(e, n),
        a != null && o.unshift(ea(e, a, r)),
        a = Kr(e, t),
        a != null && o.push(ea(e, a, r))),
        e = e.return
    }
    return o
}
function wo(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Wd(e, t, n, o, r) {
    for (var a = t._reactName, s = []; n !== null && n !== o; ) {
        var i = n
          , l = i.alternate
          , c = i.stateNode;
        if (l !== null && l === o)
            break;
        i.tag === 5 && c !== null && (i = c,
        r ? (l = Kr(n, a),
        l != null && s.unshift(ea(n, l, i))) : r || (l = Kr(n, a),
        l != null && s.push(ea(n, l, i)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Nx = /\r\n?/g
  , Rx = /\u0000|\uFFFD/g;
function Vd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Nx, `
`).replace(Rx, "")
}
function Ua(e, t, n) {
    if (t = Vd(t),
    Vd(e) !== t && n)
        throw Error(R(425))
}
function As() {}
var Xl = null
  , ql = null;
function Zl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Jl = typeof setTimeout == "function" ? setTimeout : void 0
  , Ax = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Hd = typeof Promise == "function" ? Promise : void 0
  , Dx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hd < "u" ? function(e) {
    return Hd.resolve(null).then(e).catch(Ix)
}
: Jl;
function Ix(e) {
    setTimeout(function() {
        throw e
    })
}
function rl(e, t) {
    var n = t
      , o = 0;
    do {
        var r = n.nextSibling;
        if (e.removeChild(n),
        r && r.nodeType === 8)
            if (n = r.data,
            n === "/$") {
                if (o === 0) {
                    e.removeChild(r),
                    Xr(t);
                    return
                }
                o--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || o++;
        n = r
    } while (n);
    Xr(t)
}
function An(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Gd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fr = Math.random().toString(36).slice(2)
  , $t = "__reactFiber$" + fr
  , ta = "__reactProps$" + fr
  , tn = "__reactContainer$" + fr
  , ec = "__reactEvents$" + fr
  , jx = "__reactListeners$" + fr
  , _x = "__reactHandles$" + fr;
function Yn(e) {
    var t = e[$t];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[tn] || n[$t]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Gd(e); e !== null; ) {
                    if (n = e[$t])
                        return n;
                    e = Gd(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ca(e) {
    return e = e[$t] || e[tn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ro(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function si(e) {
    return e[ta] || null
}
var tc = []
  , Ao = -1;
function Un(e) {
    return {
        current: e
    }
}
function me(e) {
    0 > Ao || (e.current = tc[Ao],
    tc[Ao] = null,
    Ao--)
}
function ce(e, t) {
    Ao++,
    tc[Ao] = e.current,
    e.current = t
}
var Mn = {}
  , Fe = Un(Mn)
  , qe = Un(!1)
  , so = Mn;
function nr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Mn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
        return o.__reactInternalMemoizedMaskedChildContext;
    var r = {}, a;
    for (a in n)
        r[a] = t[a];
    return o && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function Ze(e) {
    return e = e.childContextTypes,
    e != null
}
function Ds() {
    me(qe),
    me(Fe)
}
function Kd(e, t, n) {
    if (Fe.current !== Mn)
        throw Error(R(168));
    ce(Fe, t),
    ce(qe, n)
}
function _m(e, t, n) {
    var o = e.stateNode;
    if (t = t.childContextTypes,
    typeof o.getChildContext != "function")
        return n;
    o = o.getChildContext();
    for (var r in o)
        if (!(r in t))
            throw Error(R(108, x0(e) || "Unknown", r));
    return xe({}, n, o)
}
function Is(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mn,
    so = Fe.current,
    ce(Fe, e),
    ce(qe, qe.current),
    !0
}
function Qd(e, t, n) {
    var o = e.stateNode;
    if (!o)
        throw Error(R(169));
    n ? (e = _m(e, t, so),
    o.__reactInternalMemoizedMergedChildContext = e,
    me(qe),
    me(Fe),
    ce(Fe, e)) : me(qe),
    ce(qe, n)
}
var Xt = null
  , ii = !1
  , al = !1;
function Om(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}
function Ox(e) {
    ii = !0,
    Om(e)
}
function Wn() {
    if (!al && Xt !== null) {
        al = !0;
        var e = 0
          , t = ie;
        try {
            var n = Xt;
            for (ie = 1; e < n.length; e++) {
                var o = n[e];
                do
                    o = o(!0);
                while (o !== null)
            }
            Xt = null,
            ii = !1
        } catch (r) {
            throw Xt !== null && (Xt = Xt.slice(e + 1)),
            sm(ou, Wn),
            r
        } finally {
            ie = t,
            al = !1
        }
    }
    return null
}
var Do = []
  , Io = 0
  , js = null
  , _s = 0
  , ht = []
  , vt = 0
  , io = null
  , qt = 1
  , Zt = "";
function Kn(e, t) {
    Do[Io++] = _s,
    Do[Io++] = js,
    js = e,
    _s = t
}
function Mm(e, t, n) {
    ht[vt++] = qt,
    ht[vt++] = Zt,
    ht[vt++] = io,
    io = e;
    var o = qt;
    e = Zt;
    var r = 32 - Rt(o) - 1;
    o &= ~(1 << r),
    n += 1;
    var a = 32 - Rt(t) + r;
    if (30 < a) {
        var s = r - r % 5;
        a = (o & (1 << s) - 1).toString(32),
        o >>= s,
        r -= s,
        qt = 1 << 32 - Rt(t) + r | n << r | o,
        Zt = a + e
    } else
        qt = 1 << a | n << r | o,
        Zt = e
}
function pu(e) {
    e.return !== null && (Kn(e, 1),
    Mm(e, 1, 0))
}
function fu(e) {
    for (; e === js; )
        js = Do[--Io],
        Do[Io] = null,
        _s = Do[--Io],
        Do[Io] = null;
    for (; e === io; )
        io = ht[--vt],
        ht[vt] = null,
        Zt = ht[--vt],
        ht[vt] = null,
        qt = ht[--vt],
        ht[vt] = null
}
var lt = null
  , it = null
  , he = !1
  , Nt = null;
function Bm(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Yd(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        it = An(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        it = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = io !== null ? {
            id: qt,
            overflow: Zt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = gt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        lt = e,
        it = null,
        !0) : !1;
    default:
        return !1
    }
}
function nc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function oc(e) {
    if (he) {
        var t = it;
        if (t) {
            var n = t;
            if (!Yd(e, t)) {
                if (nc(e))
                    throw Error(R(418));
                t = An(n.nextSibling);
                var o = lt;
                t && Yd(e, t) ? Bm(o, n) : (e.flags = e.flags & -4097 | 2,
                he = !1,
                lt = e)
            }
        } else {
            if (nc(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            he = !1,
            lt = e
        }
    }
}
function Xd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    lt = e
}
function Wa(e) {
    if (e !== lt)
        return !1;
    if (!he)
        return Xd(e),
        he = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps)),
    t && (t = it)) {
        if (nc(e))
            throw Lm(),
            Error(R(418));
        for (; t; )
            Bm(e, t),
            t = An(t.nextSibling)
    }
    if (Xd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            it = An(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            it = null
        }
    } else
        it = lt ? An(e.stateNode.nextSibling) : null;
    return !0
}
function Lm() {
    for (var e = it; e; )
        e = An(e.nextSibling)
}
function or() {
    it = lt = null,
    he = !1
}
function mu(e) {
    Nt === null ? Nt = [e] : Nt.push(e)
}
var Mx = sn.ReactCurrentBatchConfig;
function br(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var o = n.stateNode
            }
            if (!o)
                throw Error(R(147, e));
            var r = o
              , a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(s) {
                var i = r.refs;
                s === null ? delete i[a] : i[a] = s
            }
            ,
            t._stringRef = a,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function Va(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function qd(e) {
    var t = e._init;
    return t(e._payload)
}
function Fm(e) {
    function t(g, m) {
        if (e) {
            var x = g.deletions;
            x === null ? (g.deletions = [m],
            g.flags |= 16) : x.push(m)
        }
    }
    function n(g, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(g, m),
            m = m.sibling;
        return null
    }
    function o(g, m) {
        for (g = new Map; m !== null; )
            m.key !== null ? g.set(m.key, m) : g.set(m.index, m),
            m = m.sibling;
        return g
    }
    function r(g, m) {
        return g = _n(g, m),
        g.index = 0,
        g.sibling = null,
        g
    }
    function a(g, m, x) {
        return g.index = x,
        e ? (x = g.alternate,
        x !== null ? (x = x.index,
        x < m ? (g.flags |= 2,
        m) : x) : (g.flags |= 2,
        m)) : (g.flags |= 1048576,
        m)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function i(g, m, x, C) {
        return m === null || m.tag !== 6 ? (m = pl(x, g.mode, C),
        m.return = g,
        m) : (m = r(m, x),
        m.return = g,
        m)
    }
    function l(g, m, x, C) {
        var b = x.type;
        return b === Eo ? d(g, m, x.props.children, C, x.key) : m !== null && (m.elementType === b || typeof b == "object" && b !== null && b.$$typeof === hn && qd(b) === m.type) ? (C = r(m, x.props),
        C.ref = br(g, m, x),
        C.return = g,
        C) : (C = hs(x.type, x.key, x.props, null, g.mode, C),
        C.ref = br(g, m, x),
        C.return = g,
        C)
    }
    function c(g, m, x, C) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== x.containerInfo || m.stateNode.implementation !== x.implementation ? (m = fl(x, g.mode, C),
        m.return = g,
        m) : (m = r(m, x.children || []),
        m.return = g,
        m)
    }
    function d(g, m, x, C, b) {
        return m === null || m.tag !== 7 ? (m = oo(x, g.mode, C, b),
        m.return = g,
        m) : (m = r(m, x),
        m.return = g,
        m)
    }
    function p(g, m, x) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = pl("" + m, g.mode, x),
            m.return = g,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ja:
                return x = hs(m.type, m.key, m.props, null, g.mode, x),
                x.ref = br(g, null, m),
                x.return = g,
                x;
            case To:
                return m = fl(m, g.mode, x),
                m.return = g,
                m;
            case hn:
                var C = m._init;
                return p(g, C(m._payload), x)
            }
            if (Rr(m) || xr(m))
                return m = oo(m, g.mode, x, null),
                m.return = g,
                m;
            Va(g, m)
        }
        return null
    }
    function u(g, m, x, C) {
        var b = m !== null ? m.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return b !== null ? null : i(g, m, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ja:
                return x.key === b ? l(g, m, x, C) : null;
            case To:
                return x.key === b ? c(g, m, x, C) : null;
            case hn:
                return b = x._init,
                u(g, m, b(x._payload), C)
            }
            if (Rr(x) || xr(x))
                return b !== null ? null : d(g, m, x, C, null);
            Va(g, x)
        }
        return null
    }
    function y(g, m, x, C, b) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return g = g.get(x) || null,
            i(m, g, "" + C, b);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case ja:
                return g = g.get(C.key === null ? x : C.key) || null,
                l(m, g, C, b);
            case To:
                return g = g.get(C.key === null ? x : C.key) || null,
                c(m, g, C, b);
            case hn:
                var P = C._init;
                return y(g, m, x, P(C._payload), b)
            }
            if (Rr(C) || xr(C))
                return g = g.get(x) || null,
                d(m, g, C, b, null);
            Va(m, C)
        }
        return null
    }
    function S(g, m, x, C) {
        for (var b = null, P = null, E = m, k = m = 0, _ = null; E !== null && k < x.length; k++) {
            E.index > k ? (_ = E,
            E = null) : _ = E.sibling;
            var I = u(g, E, x[k], C);
            if (I === null) {
                E === null && (E = _);
                break
            }
            e && E && I.alternate === null && t(g, E),
            m = a(I, m, k),
            P === null ? b = I : P.sibling = I,
            P = I,
            E = _
        }
        if (k === x.length)
            return n(g, E),
            he && Kn(g, k),
            b;
        if (E === null) {
            for (; k < x.length; k++)
                E = p(g, x[k], C),
                E !== null && (m = a(E, m, k),
                P === null ? b = E : P.sibling = E,
                P = E);
            return he && Kn(g, k),
            b
        }
        for (E = o(g, E); k < x.length; k++)
            _ = y(E, g, k, x[k], C),
            _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? k : _.key),
            m = a(_, m, k),
            P === null ? b = _ : P.sibling = _,
            P = _);
        return e && E.forEach(function(z) {
            return t(g, z)
        }),
        he && Kn(g, k),
        b
    }
    function f(g, m, x, C) {
        var b = xr(x);
        if (typeof b != "function")
            throw Error(R(150));
        if (x = b.call(x),
        x == null)
            throw Error(R(151));
        for (var P = b = null, E = m, k = m = 0, _ = null, I = x.next(); E !== null && !I.done; k++,
        I = x.next()) {
            E.index > k ? (_ = E,
            E = null) : _ = E.sibling;
            var z = u(g, E, I.value, C);
            if (z === null) {
                E === null && (E = _);
                break
            }
            e && E && z.alternate === null && t(g, E),
            m = a(z, m, k),
            P === null ? b = z : P.sibling = z,
            P = z,
            E = _
        }
        if (I.done)
            return n(g, E),
            he && Kn(g, k),
            b;
        if (E === null) {
            for (; !I.done; k++,
            I = x.next())
                I = p(g, I.value, C),
                I !== null && (m = a(I, m, k),
                P === null ? b = I : P.sibling = I,
                P = I);
            return he && Kn(g, k),
            b
        }
        for (E = o(g, E); !I.done; k++,
        I = x.next())
            I = y(E, g, k, I.value, C),
            I !== null && (e && I.alternate !== null && E.delete(I.key === null ? k : I.key),
            m = a(I, m, k),
            P === null ? b = I : P.sibling = I,
            P = I);
        return e && E.forEach(function(O) {
            return t(g, O)
        }),
        he && Kn(g, k),
        b
    }
    function w(g, m, x, C) {
        if (typeof x == "object" && x !== null && x.type === Eo && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ja:
                e: {
                    for (var b = x.key, P = m; P !== null; ) {
                        if (P.key === b) {
                            if (b = x.type,
                            b === Eo) {
                                if (P.tag === 7) {
                                    n(g, P.sibling),
                                    m = r(P, x.props.children),
                                    m.return = g,
                                    g = m;
                                    break e
                                }
                            } else if (P.elementType === b || typeof b == "object" && b !== null && b.$$typeof === hn && qd(b) === P.type) {
                                n(g, P.sibling),
                                m = r(P, x.props),
                                m.ref = br(g, P, x),
                                m.return = g,
                                g = m;
                                break e
                            }
                            n(g, P);
                            break
                        } else
                            t(g, P);
                        P = P.sibling
                    }
                    x.type === Eo ? (m = oo(x.props.children, g.mode, C, x.key),
                    m.return = g,
                    g = m) : (C = hs(x.type, x.key, x.props, null, g.mode, C),
                    C.ref = br(g, m, x),
                    C.return = g,
                    g = C)
                }
                return s(g);
            case To:
                e: {
                    for (P = x.key; m !== null; ) {
                        if (m.key === P)
                            if (m.tag === 4 && m.stateNode.containerInfo === x.containerInfo && m.stateNode.implementation === x.implementation) {
                                n(g, m.sibling),
                                m = r(m, x.children || []),
                                m.return = g,
                                g = m;
                                break e
                            } else {
                                n(g, m);
                                break
                            }
                        else
                            t(g, m);
                        m = m.sibling
                    }
                    m = fl(x, g.mode, C),
                    m.return = g,
                    g = m
                }
                return s(g);
            case hn:
                return P = x._init,
                w(g, m, P(x._payload), C)
            }
            if (Rr(x))
                return S(g, m, x, C);
            if (xr(x))
                return f(g, m, x, C);
            Va(g, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        m !== null && m.tag === 6 ? (n(g, m.sibling),
        m = r(m, x),
        m.return = g,
        g = m) : (n(g, m),
        m = pl(x, g.mode, C),
        m.return = g,
        g = m),
        s(g)) : n(g, m)
    }
    return w
}
var rr = Fm(!0)
  , zm = Fm(!1)
  , Os = Un(null)
  , Ms = null
  , jo = null
  , hu = null;
function vu() {
    hu = jo = Ms = null
}
function gu(e) {
    var t = Os.current;
    me(Os),
    e._currentValue = t
}
function rc(e, t, n) {
    for (; e !== null; ) {
        var o = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function zo(e, t) {
    Ms = e,
    hu = jo = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0),
    e.firstContext = null)
}
function yt(e) {
    var t = e._currentValue;
    if (hu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        jo === null) {
            if (Ms === null)
                throw Error(R(308));
            jo = e,
            Ms.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            jo = jo.next = e;
    return t
}
var Xn = null;
function xu(e) {
    Xn === null ? Xn = [e] : Xn.push(e)
}
function $m(e, t, n, o) {
    var r = t.interleaved;
    return r === null ? (n.next = n,
    xu(t)) : (n.next = r.next,
    r.next = n),
    t.interleaved = n,
    nn(e, o)
}
function nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var vn = !1;
function yu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Um(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Jt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Dn(e, t, n) {
    var o = e.updateQueue;
    if (o === null)
        return null;
    if (o = o.shared,
    J & 2) {
        var r = o.pending;
        return r === null ? t.next = t : (t.next = r.next,
        r.next = t),
        o.pending = t,
        nn(e, n)
    }
    return r = o.interleaved,
    r === null ? (t.next = t,
    xu(o)) : (t.next = r.next,
    r.next = t),
    o.interleaved = t,
    nn(e, n)
}
function cs(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var o = t.lanes;
        o &= e.pendingLanes,
        n |= o,
        t.lanes = n,
        ru(e, n)
    }
}
function Zd(e, t) {
    var n = e.updateQueue
      , o = e.alternate;
    if (o !== null && (o = o.updateQueue,
    n === o)) {
        var r = null
          , a = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? r = a = s : a = a.next = s,
                n = n.next
            } while (n !== null);
            a === null ? r = a = t : a = a.next = t
        } else
            r = a = t;
        n = {
            baseState: o.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: a,
            shared: o.shared,
            effects: o.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Bs(e, t, n, o) {
    var r = e.updateQueue;
    vn = !1;
    var a = r.firstBaseUpdate
      , s = r.lastBaseUpdate
      , i = r.shared.pending;
    if (i !== null) {
        r.shared.pending = null;
        var l = i
          , c = l.next;
        l.next = null,
        s === null ? a = c : s.next = c,
        s = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        i = d.lastBaseUpdate,
        i !== s && (i === null ? d.firstBaseUpdate = c : i.next = c,
        d.lastBaseUpdate = l))
    }
    if (a !== null) {
        var p = r.baseState;
        s = 0,
        d = c = l = null,
        i = a;
        do {
            var u = i.lane
              , y = i.eventTime;
            if ((o & u) === u) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var S = e
                      , f = i;
                    switch (u = t,
                    y = n,
                    f.tag) {
                    case 1:
                        if (S = f.payload,
                        typeof S == "function") {
                            p = S.call(y, p, u);
                            break e
                        }
                        p = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = f.payload,
                        u = typeof S == "function" ? S.call(y, p, u) : S,
                        u == null)
                            break e;
                        p = xe({}, p, u);
                        break e;
                    case 2:
                        vn = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64,
                u = r.effects,
                u === null ? r.effects = [i] : u.push(i))
            } else
                y = {
                    eventTime: y,
                    lane: u,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                },
                d === null ? (c = d = y,
                l = p) : d = d.next = y,
                s |= u;
            if (i = i.next,
            i === null) {
                if (i = r.shared.pending,
                i === null)
                    break;
                u = i,
                i = u.next,
                u.next = null,
                r.lastBaseUpdate = u,
                r.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = p),
        r.baseState = l,
        r.firstBaseUpdate = c,
        r.lastBaseUpdate = d,
        t = r.shared.interleaved,
        t !== null) {
            r = t;
            do
                s |= r.lane,
                r = r.next;
            while (r !== t)
        } else
            a === null && (r.shared.lanes = 0);
        co |= s,
        e.lanes = s,
        e.memoizedState = p
    }
}
function Jd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var o = e[t]
              , r = o.callback;
            if (r !== null) {
                if (o.callback = null,
                o = n,
                typeof r != "function")
                    throw Error(R(191, r));
                r.call(o)
            }
        }
}
var ba = {}
  , Vt = Un(ba)
  , na = Un(ba)
  , oa = Un(ba);
function qn(e) {
    if (e === ba)
        throw Error(R(174));
    return e
}
function wu(e, t) {
    switch (ce(oa, t),
    ce(na, e),
    ce(Vt, ba),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ll(t, e)
    }
    me(Vt),
    ce(Vt, t)
}
function ar() {
    me(Vt),
    me(na),
    me(oa)
}
function Wm(e) {
    qn(oa.current);
    var t = qn(Vt.current)
      , n = Ll(t, e.type);
    t !== n && (ce(na, e),
    ce(Vt, n))
}
function Su(e) {
    na.current === e && (me(Vt),
    me(na))
}
var ve = Un(0);
function Ls(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var sl = [];
function Cu() {
    for (var e = 0; e < sl.length; e++)
        sl[e]._workInProgressVersionPrimary = null;
    sl.length = 0
}
var us = sn.ReactCurrentDispatcher
  , il = sn.ReactCurrentBatchConfig
  , lo = 0
  , ge = null
  , Ee = null
  , Ne = null
  , Fs = !1
  , zr = !1
  , ra = 0
  , Bx = 0;
function Oe() {
    throw Error(R(321))
}
function bu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dt(e[n], t[n]))
            return !1;
    return !0
}
function Tu(e, t, n, o, r, a) {
    if (lo = a,
    ge = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    us.current = e === null || e.memoizedState === null ? $x : Ux,
    e = n(o, r),
    zr) {
        a = 0;
        do {
            if (zr = !1,
            ra = 0,
            25 <= a)
                throw Error(R(301));
            a += 1,
            Ne = Ee = null,
            t.updateQueue = null,
            us.current = Wx,
            e = n(o, r)
        } while (zr)
    }
    if (us.current = zs,
    t = Ee !== null && Ee.next !== null,
    lo = 0,
    Ne = Ee = ge = null,
    Fs = !1,
    t)
        throw Error(R(300));
    return e
}
function Eu() {
    var e = ra !== 0;
    return ra = 0,
    e
}
function Bt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ne === null ? ge.memoizedState = Ne = e : Ne = Ne.next = e,
    Ne
}
function wt() {
    if (Ee === null) {
        var e = ge.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ee.next;
    var t = Ne === null ? ge.memoizedState : Ne.next;
    if (t !== null)
        Ne = t,
        Ee = e;
    else {
        if (e === null)
            throw Error(R(310));
        Ee = e,
        e = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        },
        Ne === null ? ge.memoizedState = Ne = e : Ne = Ne.next = e
    }
    return Ne
}
function aa(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ll(e) {
    var t = wt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var o = Ee
      , r = o.baseQueue
      , a = n.pending;
    if (a !== null) {
        if (r !== null) {
            var s = r.next;
            r.next = a.next,
            a.next = s
        }
        o.baseQueue = r = a,
        n.pending = null
    }
    if (r !== null) {
        a = r.next,
        o = o.baseState;
        var i = s = null
          , l = null
          , c = a;
        do {
            var d = c.lane;
            if ((lo & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                o = c.hasEagerState ? c.eagerState : e(o, c.action);
            else {
                var p = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (i = l = p,
                s = o) : l = l.next = p,
                ge.lanes |= d,
                co |= d
            }
            c = c.next
        } while (c !== null && c !== a);
        l === null ? s = o : l.next = i,
        Dt(o, t.memoizedState) || (Xe = !0),
        t.memoizedState = o,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = o
    }
    if (e = n.interleaved,
    e !== null) {
        r = e;
        do
            a = r.lane,
            ge.lanes |= a,
            co |= a,
            r = r.next;
        while (r !== e)
    } else
        r === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function cl(e) {
    var t = wt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch
      , r = n.pending
      , a = t.memoizedState;
    if (r !== null) {
        n.pending = null;
        var s = r = r.next;
        do
            a = e(a, s.action),
            s = s.next;
        while (s !== r);
        Dt(a, t.memoizedState) || (Xe = !0),
        t.memoizedState = a,
        t.baseQueue === null && (t.baseState = a),
        n.lastRenderedState = a
    }
    return [a, o]
}
function Vm() {}
function Hm(e, t) {
    var n = ge
      , o = wt()
      , r = t()
      , a = !Dt(o.memoizedState, r);
    if (a && (o.memoizedState = r,
    Xe = !0),
    o = o.queue,
    Pu(Qm.bind(null, n, o, e), [e]),
    o.getSnapshot !== t || a || Ne !== null && Ne.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        sa(9, Km.bind(null, n, o, r, t), void 0, null),
        Re === null)
            throw Error(R(349));
        lo & 30 || Gm(n, t, r)
    }
    return r
}
function Gm(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ge.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ge.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Km(e, t, n, o) {
    t.value = n,
    t.getSnapshot = o,
    Ym(t) && Xm(e)
}
function Qm(e, t, n) {
    return n(function() {
        Ym(t) && Xm(e)
    })
}
function Ym(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Dt(e, n)
    } catch {
        return !0
    }
}
function Xm(e) {
    var t = nn(e, 1);
    t !== null && At(t, e, 1, -1)
}
function ep(e) {
    var t = Bt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: aa,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = zx.bind(null, ge, e),
    [t.memoizedState, e]
}
function sa(e, t, n, o) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: o,
        next: null
    },
    t = ge.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ge.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (o = n.next,
    n.next = e,
    e.next = o,
    t.lastEffect = e)),
    e
}
function qm() {
    return wt().memoizedState
}
function ds(e, t, n, o) {
    var r = Bt();
    ge.flags |= e,
    r.memoizedState = sa(1 | t, n, void 0, o === void 0 ? null : o)
}
function li(e, t, n, o) {
    var r = wt();
    o = o === void 0 ? null : o;
    var a = void 0;
    if (Ee !== null) {
        var s = Ee.memoizedState;
        if (a = s.destroy,
        o !== null && bu(o, s.deps)) {
            r.memoizedState = sa(t, n, a, o);
            return
        }
    }
    ge.flags |= e,
    r.memoizedState = sa(1 | t, n, a, o)
}
function tp(e, t) {
    return ds(8390656, 8, e, t)
}
function Pu(e, t) {
    return li(2048, 8, e, t)
}
function Zm(e, t) {
    return li(4, 2, e, t)
}
function Jm(e, t) {
    return li(4, 4, e, t)
}
function eh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function th(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    li(4, 4, eh.bind(null, t, e), n)
}
function ku() {}
function nh(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && bu(t, o[1]) ? o[0] : (n.memoizedState = [e, t],
    e)
}
function oh(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && bu(t, o[1]) ? o[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function rh(e, t, n) {
    return lo & 21 ? (Dt(n, t) || (n = cm(),
    ge.lanes |= n,
    co |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Xe = !0),
    e.memoizedState = n)
}
function Lx(e, t) {
    var n = ie;
    ie = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var o = il.transition;
    il.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ie = n,
        il.transition = o
    }
}
function ah() {
    return wt().memoizedState
}
function Fx(e, t, n) {
    var o = jn(e);
    if (n = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    sh(e))
        ih(t, n);
    else if (n = $m(e, t, n, o),
    n !== null) {
        var r = He();
        At(n, e, o, r),
        lh(n, t, o)
    }
}
function zx(e, t, n) {
    var o = jn(e)
      , r = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (sh(e))
        ih(t, r);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
        a !== null))
            try {
                var s = t.lastRenderedState
                  , i = a(s, n);
                if (r.hasEagerState = !0,
                r.eagerState = i,
                Dt(i, s)) {
                    var l = t.interleaved;
                    l === null ? (r.next = r,
                    xu(t)) : (r.next = l.next,
                    l.next = r),
                    t.interleaved = r;
                    return
                }
            } catch {} finally {}
        n = $m(e, t, r, o),
        n !== null && (r = He(),
        At(n, e, o, r),
        lh(n, t, o))
    }
}
function sh(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge
}
function ih(e, t) {
    zr = Fs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function lh(e, t, n) {
    if (n & 4194240) {
        var o = t.lanes;
        o &= e.pendingLanes,
        n |= o,
        t.lanes = n,
        ru(e, n)
    }
}
var zs = {
    readContext: yt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1
}
  , $x = {
    readContext: yt,
    useCallback: function(e, t) {
        return Bt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: yt,
    useEffect: tp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ds(4194308, 4, eh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ds(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ds(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Bt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var o = Bt();
        return t = n !== void 0 ? n(t) : t,
        o.memoizedState = o.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        o.queue = e,
        e = e.dispatch = Fx.bind(null, ge, e),
        [o.memoizedState, e]
    },
    useRef: function(e) {
        var t = Bt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ep,
    useDebugValue: ku,
    useDeferredValue: function(e) {
        return Bt().memoizedState = e
    },
    useTransition: function() {
        var e = ep(!1)
          , t = e[0];
        return e = Lx.bind(null, e[1]),
        Bt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var o = ge
          , r = Bt();
        if (he) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            Re === null)
                throw Error(R(349));
            lo & 30 || Gm(o, t, n)
        }
        r.memoizedState = n;
        var a = {
            value: n,
            getSnapshot: t
        };
        return r.queue = a,
        tp(Qm.bind(null, o, a, e), [e]),
        o.flags |= 2048,
        sa(9, Km.bind(null, o, a, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Bt()
          , t = Re.identifierPrefix;
        if (he) {
            var n = Zt
              , o = qt;
            n = (o & ~(1 << 32 - Rt(o) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ra++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Bx++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Ux = {
    readContext: yt,
    useCallback: nh,
    useContext: yt,
    useEffect: Pu,
    useImperativeHandle: th,
    useInsertionEffect: Zm,
    useLayoutEffect: Jm,
    useMemo: oh,
    useReducer: ll,
    useRef: qm,
    useState: function() {
        return ll(aa)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = wt();
        return rh(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = ll(aa)[0]
          , t = wt().memoizedState;
        return [e, t]
    },
    useMutableSource: Vm,
    useSyncExternalStore: Hm,
    useId: ah,
    unstable_isNewReconciler: !1
}
  , Wx = {
    readContext: yt,
    useCallback: nh,
    useContext: yt,
    useEffect: Pu,
    useImperativeHandle: th,
    useInsertionEffect: Zm,
    useLayoutEffect: Jm,
    useMemo: oh,
    useReducer: cl,
    useRef: qm,
    useState: function() {
        return cl(aa)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = wt();
        return Ee === null ? t.memoizedState = e : rh(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = cl(aa)[0]
          , t = wt().memoizedState;
        return [e, t]
    },
    useMutableSource: Vm,
    useSyncExternalStore: Hm,
    useId: ah,
    unstable_isNewReconciler: !1
};
function Tt(e, t) {
    if (e && e.defaultProps) {
        t = xe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ac(e, t, n, o) {
    t = e.memoizedState,
    n = n(o, t),
    n = n == null ? t : xe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ci = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ho(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var o = He()
          , r = jn(e)
          , a = Jt(o, r);
        a.payload = t,
        n != null && (a.callback = n),
        t = Dn(e, a, r),
        t !== null && (At(t, e, r, o),
        cs(t, e, r))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var o = He()
          , r = jn(e)
          , a = Jt(o, r);
        a.tag = 1,
        a.payload = t,
        n != null && (a.callback = n),
        t = Dn(e, a, r),
        t !== null && (At(t, e, r, o),
        cs(t, e, r))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = He()
          , o = jn(e)
          , r = Jt(n, o);
        r.tag = 2,
        t != null && (r.callback = t),
        t = Dn(e, r, o),
        t !== null && (At(t, e, o, n),
        cs(t, e, o))
    }
};
function np(e, t, n, o, r, a, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, a, s) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, o) || !Zr(r, a) : !0
}
function ch(e, t, n) {
    var o = !1
      , r = Mn
      , a = t.contextType;
    return typeof a == "object" && a !== null ? a = yt(a) : (r = Ze(t) ? so : Fe.current,
    o = t.contextTypes,
    a = (o = o != null) ? nr(e, r) : Mn),
    t = new t(n,a),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ci,
    e.stateNode = t,
    t._reactInternals = e,
    o && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = r,
    e.__reactInternalMemoizedMaskedChildContext = a),
    t
}
function op(e, t, n, o) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o),
    t.state !== e && ci.enqueueReplaceState(t, t.state, null)
}
function sc(e, t, n, o) {
    var r = e.stateNode;
    r.props = n,
    r.state = e.memoizedState,
    r.refs = {},
    yu(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? r.context = yt(a) : (a = Ze(t) ? so : Fe.current,
    r.context = nr(e, a)),
    r.state = e.memoizedState,
    a = t.getDerivedStateFromProps,
    typeof a == "function" && (ac(e, t, a, n),
    r.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state,
    typeof r.componentWillMount == "function" && r.componentWillMount(),
    typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
    t !== r.state && ci.enqueueReplaceState(r, r.state, null),
    Bs(e, n, r, o),
    r.state = e.memoizedState),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308)
}
function sr(e, t) {
    try {
        var n = ""
          , o = t;
        do
            n += g0(o),
            o = o.return;
        while (o);
        var r = n
    } catch (a) {
        r = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: r,
        digest: null
    }
}
function ul(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ic(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Vx = typeof WeakMap == "function" ? WeakMap : Map;
function uh(e, t, n) {
    n = Jt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var o = t.value;
    return n.callback = function() {
        Us || (Us = !0,
        gc = o),
        ic(e, t)
    }
    ,
    n
}
function dh(e, t, n) {
    n = Jt(-1, n),
    n.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
        var r = t.value;
        n.payload = function() {
            return o(r)
        }
        ,
        n.callback = function() {
            ic(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        ic(e, t),
        typeof o != "function" && (In === null ? In = new Set([this]) : In.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function rp(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
        o = e.pingCache = new Vx;
        var r = new Set;
        o.set(t, r)
    } else
        r = o.get(t),
        r === void 0 && (r = new Set,
        o.set(t, r));
    r.has(n) || (r.add(n),
    e = ry.bind(null, e, t, n),
    t.then(e, e))
}
function ap(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function sp(e, t, n, o, r) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = r,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Jt(-1, 1),
    t.tag = 2,
    Dn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Hx = sn.ReactCurrentOwner
  , Xe = !1;
function We(e, t, n, o) {
    t.child = e === null ? zm(t, null, n, o) : rr(t, e.child, n, o)
}
function ip(e, t, n, o, r) {
    n = n.render;
    var a = t.ref;
    return zo(t, r),
    o = Tu(e, t, n, o, a, r),
    n = Eu(),
    e !== null && !Xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    on(e, t, r)) : (he && n && pu(t),
    t.flags |= 1,
    We(e, t, o, r),
    t.child)
}
function lp(e, t, n, o, r) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !Ou(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = a,
        ph(e, t, a, o, r)) : (e = hs(n.type, null, o, t, t.mode, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (a = e.child,
    !(e.lanes & r)) {
        var s = a.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Zr,
        n(s, o) && e.ref === t.ref)
            return on(e, t, r)
    }
    return t.flags |= 1,
    e = _n(a, o),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ph(e, t, n, o, r) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (Zr(a, o) && e.ref === t.ref)
            if (Xe = !1,
            t.pendingProps = o = a,
            (e.lanes & r) !== 0)
                e.flags & 131072 && (Xe = !0);
            else
                return t.lanes = e.lanes,
                on(e, t, r)
    }
    return lc(e, t, n, o, r)
}
function fh(e, t, n) {
    var o = t.pendingProps
      , r = o.children
      , a = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ce(Oo, at),
            at |= n;
        else {
            if (!(n & 1073741824))
                return e = a !== null ? a.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ce(Oo, at),
                at |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            o = a !== null ? a.baseLanes : n,
            ce(Oo, at),
            at |= o
        }
    else
        a !== null ? (o = a.baseLanes | n,
        t.memoizedState = null) : o = n,
        ce(Oo, at),
        at |= o;
    return We(e, t, r, n),
    t.child
}
function mh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function lc(e, t, n, o, r) {
    var a = Ze(n) ? so : Fe.current;
    return a = nr(t, a),
    zo(t, r),
    n = Tu(e, t, n, o, a, r),
    o = Eu(),
    e !== null && !Xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    on(e, t, r)) : (he && o && pu(t),
    t.flags |= 1,
    We(e, t, n, r),
    t.child)
}
function cp(e, t, n, o, r) {
    if (Ze(n)) {
        var a = !0;
        Is(t)
    } else
        a = !1;
    if (zo(t, r),
    t.stateNode === null)
        ps(e, t),
        ch(t, n, o),
        sc(t, n, o, r),
        o = !0;
    else if (e === null) {
        var s = t.stateNode
          , i = t.memoizedProps;
        s.props = i;
        var l = s.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = yt(c) : (c = Ze(n) ? so : Fe.current,
        c = nr(t, c));
        var d = n.getDerivedStateFromProps
          , p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== o || l !== c) && op(t, s, o, c),
        vn = !1;
        var u = t.memoizedState;
        s.state = u,
        Bs(t, o, s, r),
        l = t.memoizedState,
        i !== o || u !== l || qe.current || vn ? (typeof d == "function" && (ac(t, n, d, o),
        l = t.memoizedState),
        (i = vn || np(t, n, i, o, u, l, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = o,
        t.memoizedState = l),
        s.props = o,
        s.state = l,
        s.context = c,
        o = i) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        o = !1)
    } else {
        s = t.stateNode,
        Um(e, t),
        i = t.memoizedProps,
        c = t.type === t.elementType ? i : Tt(t.type, i),
        s.props = c,
        p = t.pendingProps,
        u = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = yt(l) : (l = Ze(n) ? so : Fe.current,
        l = nr(t, l));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== p || u !== l) && op(t, s, o, l),
        vn = !1,
        u = t.memoizedState,
        s.state = u,
        Bs(t, o, s, r);
        var S = t.memoizedState;
        i !== p || u !== S || qe.current || vn ? (typeof y == "function" && (ac(t, n, y, o),
        S = t.memoizedState),
        (c = vn || np(t, n, c, o, u, S, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(o, S, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(o, S, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && u === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = o,
        t.memoizedState = S),
        s.props = o,
        s.state = S,
        s.context = l,
        o = c) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && u === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024),
        o = !1)
    }
    return cc(e, t, n, o, a, r)
}
function cc(e, t, n, o, r, a) {
    mh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!o && !s)
        return r && Qd(t, n, !1),
        on(e, t, a);
    o = t.stateNode,
    Hx.current = t;
    var i = s && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = rr(t, e.child, null, a),
    t.child = rr(t, null, i, a)) : We(e, t, i, a),
    t.memoizedState = o.state,
    r && Qd(t, n, !0),
    t.child
}
function hh(e) {
    var t = e.stateNode;
    t.pendingContext ? Kd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Kd(e, t.context, !1),
    wu(e, t.containerInfo)
}
function up(e, t, n, o, r) {
    return or(),
    mu(r),
    t.flags |= 256,
    We(e, t, n, o),
    t.child
}
var uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function dc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function vh(e, t, n) {
    var o = t.pendingProps, r = ve.current, a = !1, s = (t.flags & 128) !== 0, i;
    if ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    i ? (a = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1),
    ce(ve, r & 1),
    e === null)
        return oc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = o.children,
        e = o.fallback,
        a ? (o = t.mode,
        a = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(o & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = s) : a = pi(s, o, 0, null),
        e = oo(e, o, n, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = dc(n),
        t.memoizedState = uc,
        e) : Nu(t, s));
    if (r = e.memoizedState,
    r !== null && (i = r.dehydrated,
    i !== null))
        return Gx(e, t, s, o, i, r, n);
    if (a) {
        a = o.fallback,
        s = t.mode,
        r = e.child,
        i = r.sibling;
        var l = {
            mode: "hidden",
            children: o.children
        };
        return !(s & 1) && t.child !== r ? (o = t.child,
        o.childLanes = 0,
        o.pendingProps = l,
        t.deletions = null) : (o = _n(r, l),
        o.subtreeFlags = r.subtreeFlags & 14680064),
        i !== null ? a = _n(i, a) : (a = oo(a, s, n, null),
        a.flags |= 2),
        a.return = t,
        o.return = t,
        o.sibling = a,
        t.child = o,
        o = a,
        a = t.child,
        s = e.child.memoizedState,
        s = s === null ? dc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        a.memoizedState = s,
        a.childLanes = e.childLanes & ~n,
        t.memoizedState = uc,
        o
    }
    return a = e.child,
    e = a.sibling,
    o = _n(a, {
        mode: "visible",
        children: o.children
    }),
    !(t.mode & 1) && (o.lanes = n),
    o.return = t,
    o.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = o,
    t.memoizedState = null,
    o
}
function Nu(e, t) {
    return t = pi({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ha(e, t, n, o) {
    return o !== null && mu(o),
    rr(t, e.child, null, n),
    e = Nu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Gx(e, t, n, o, r, a, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        o = ul(Error(R(422))),
        Ha(e, t, s, o)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (a = o.fallback,
        r = t.mode,
        o = pi({
            mode: "visible",
            children: o.children
        }, r, 0, null),
        a = oo(a, r, s, null),
        a.flags |= 2,
        o.return = t,
        a.return = t,
        o.sibling = a,
        t.child = o,
        t.mode & 1 && rr(t, e.child, null, s),
        t.child.memoizedState = dc(s),
        t.memoizedState = uc,
        a);
    if (!(t.mode & 1))
        return Ha(e, t, s, null);
    if (r.data === "$!") {
        if (o = r.nextSibling && r.nextSibling.dataset,
        o)
            var i = o.dgst;
        return o = i,
        a = Error(R(419)),
        o = ul(a, o, void 0),
        Ha(e, t, s, o)
    }
    if (i = (s & e.childLanes) !== 0,
    Xe || i) {
        if (o = Re,
        o !== null) {
            switch (s & -s) {
            case 4:
                r = 2;
                break;
            case 16:
                r = 8;
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
                r = 32;
                break;
            case 536870912:
                r = 268435456;
                break;
            default:
                r = 0
            }
            r = r & (o.suspendedLanes | s) ? 0 : r,
            r !== 0 && r !== a.retryLane && (a.retryLane = r,
            nn(e, r),
            At(o, e, r, -1))
        }
        return _u(),
        o = ul(Error(R(421))),
        Ha(e, t, s, o)
    }
    return r.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = ay.bind(null, e),
    r._reactRetry = t,
    null) : (e = a.treeContext,
    it = An(r.nextSibling),
    lt = t,
    he = !0,
    Nt = null,
    e !== null && (ht[vt++] = qt,
    ht[vt++] = Zt,
    ht[vt++] = io,
    qt = e.id,
    Zt = e.overflow,
    io = t),
    t = Nu(t, o.children),
    t.flags |= 4096,
    t)
}
function dp(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t),
    rc(e.return, t, n)
}
function dl(e, t, n, o, r) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: n,
        tailMode: r
    } : (a.isBackwards = t,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = o,
    a.tail = n,
    a.tailMode = r)
}
function gh(e, t, n) {
    var o = t.pendingProps
      , r = o.revealOrder
      , a = o.tail;
    if (We(e, t, o.children, n),
    o = ve.current,
    o & 2)
        o = o & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && dp(e, n, t);
                else if (e.tag === 19)
                    dp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        o &= 1
    }
    if (ce(ve, o),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (r) {
        case "forwards":
            for (n = t.child,
            r = null; n !== null; )
                e = n.alternate,
                e !== null && Ls(e) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = t.child,
            t.child = null) : (r = n.sibling,
            n.sibling = null),
            dl(t, !1, r, n, a);
            break;
        case "backwards":
            for (n = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && Ls(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = n,
                n = r,
                r = e
            }
            dl(t, !0, n, null, a);
            break;
        case "together":
            dl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ps(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function on(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    co |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = _n(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = _n(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Kx(e, t, n) {
    switch (t.tag) {
    case 3:
        hh(t),
        or();
        break;
    case 5:
        Wm(t);
        break;
    case 1:
        Ze(t.type) && Is(t);
        break;
    case 4:
        wu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var o = t.type._context
          , r = t.memoizedProps.value;
        ce(Os, o._currentValue),
        o._currentValue = r;
        break;
    case 13:
        if (o = t.memoizedState,
        o !== null)
            return o.dehydrated !== null ? (ce(ve, ve.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? vh(e, t, n) : (ce(ve, ve.current & 1),
            e = on(e, t, n),
            e !== null ? e.sibling : null);
        ce(ve, ve.current & 1);
        break;
    case 19:
        if (o = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (o)
                return gh(e, t, n);
            t.flags |= 128
        }
        if (r = t.memoizedState,
        r !== null && (r.rendering = null,
        r.tail = null,
        r.lastEffect = null),
        ce(ve, ve.current),
        o)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        fh(e, t, n)
    }
    return on(e, t, n)
}
var xh, pc, yh, wh;
xh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
pc = function() {}
;
yh = function(e, t, n, o) {
    var r = e.memoizedProps;
    if (r !== o) {
        e = t.stateNode,
        qn(Vt.current);
        var a = null;
        switch (n) {
        case "input":
            r = _l(e, r),
            o = _l(e, o),
            a = [];
            break;
        case "select":
            r = xe({}, r, {
                value: void 0
            }),
            o = xe({}, o, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            r = Bl(e, r),
            o = Bl(e, o),
            a = [];
            break;
        default:
            typeof r.onClick != "function" && typeof o.onClick == "function" && (e.onclick = As)
        }
        Fl(n, o);
        var s;
        n = null;
        for (c in r)
            if (!o.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
                if (c === "style") {
                    var i = r[c];
                    for (s in i)
                        i.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Hr.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
        for (c in o) {
            var l = o[c];
            if (i = r != null ? r[c] : void 0,
            o.hasOwnProperty(c) && l !== i && (l != null || i != null))
                if (c === "style")
                    if (i) {
                        for (s in i)
                            !i.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && i[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (a || (a = []),
                        a.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    i = i ? i.__html : void 0,
                    l != null && i !== l && (a = a || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Hr.hasOwnProperty(c) ? (l != null && c === "onScroll" && fe("scroll", e),
                    a || i === l || (a = [])) : (a = a || []).push(c, l))
        }
        n && (a = a || []).push("style", n);
        var c = a;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
wh = function(e, t, n, o) {
    n !== o && (t.flags |= 4)
}
;
function Tr(e, t) {
    if (!he)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var o = null; n !== null; )
                n.alternate !== null && (o = n),
                n = n.sibling;
            o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
        }
}
function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , o = 0;
    if (t)
        for (var r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            o |= r.subtreeFlags & 14680064,
            o |= r.flags & 14680064,
            r.return = e,
            r = r.sibling;
    else
        for (r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            o |= r.subtreeFlags,
            o |= r.flags,
            r.return = e,
            r = r.sibling;
    return e.subtreeFlags |= o,
    e.childLanes = n,
    t
}
function Qx(e, t, n) {
    var o = t.pendingProps;
    switch (fu(t),
    t.tag) {
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
        return Me(t),
        null;
    case 1:
        return Ze(t.type) && Ds(),
        Me(t),
        null;
    case 3:
        return o = t.stateNode,
        ar(),
        me(qe),
        me(Fe),
        Cu(),
        o.pendingContext && (o.context = o.pendingContext,
        o.pendingContext = null),
        (e === null || e.child === null) && (Wa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Nt !== null && (wc(Nt),
        Nt = null))),
        pc(e, t),
        Me(t),
        null;
    case 5:
        Su(t);
        var r = qn(oa.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            yh(e, t, n, o, r),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!o) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return Me(t),
                null
            }
            if (e = qn(Vt.current),
            Wa(t)) {
                o = t.stateNode,
                n = t.type;
                var a = t.memoizedProps;
                switch (o[$t] = t,
                o[ta] = a,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    fe("cancel", o),
                    fe("close", o);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    fe("load", o);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < Dr.length; r++)
                        fe(Dr[r], o);
                    break;
                case "source":
                    fe("error", o);
                    break;
                case "img":
                case "image":
                case "link":
                    fe("error", o),
                    fe("load", o);
                    break;
                case "details":
                    fe("toggle", o);
                    break;
                case "input":
                    wd(o, a),
                    fe("invalid", o);
                    break;
                case "select":
                    o._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    fe("invalid", o);
                    break;
                case "textarea":
                    Cd(o, a),
                    fe("invalid", o)
                }
                Fl(n, a),
                r = null;
                for (var s in a)
                    if (a.hasOwnProperty(s)) {
                        var i = a[s];
                        s === "children" ? typeof i == "string" ? o.textContent !== i && (a.suppressHydrationWarning !== !0 && Ua(o.textContent, i, e),
                        r = ["children", i]) : typeof i == "number" && o.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Ua(o.textContent, i, e),
                        r = ["children", "" + i]) : Hr.hasOwnProperty(s) && i != null && s === "onScroll" && fe("scroll", o)
                    }
                switch (n) {
                case "input":
                    _a(o),
                    Sd(o, a, !0);
                    break;
                case "textarea":
                    _a(o),
                    bd(o);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (o.onclick = As)
                }
                o = r,
                t.updateQueue = o,
                o !== null && (t.flags |= 4)
            } else {
                s = r.nodeType === 9 ? r : r.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = s.createElement(n, {
                    is: o.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                o.multiple ? s.multiple = !0 : o.size && (s.size = o.size))) : e = s.createElementNS(e, n),
                e[$t] = t,
                e[ta] = o,
                xh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = zl(n, o),
                    n) {
                    case "dialog":
                        fe("cancel", e),
                        fe("close", e),
                        r = o;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        fe("load", e),
                        r = o;
                        break;
                    case "video":
                    case "audio":
                        for (r = 0; r < Dr.length; r++)
                            fe(Dr[r], e);
                        r = o;
                        break;
                    case "source":
                        fe("error", e),
                        r = o;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        fe("error", e),
                        fe("load", e),
                        r = o;
                        break;
                    case "details":
                        fe("toggle", e),
                        r = o;
                        break;
                    case "input":
                        wd(e, o),
                        r = _l(e, o),
                        fe("invalid", e);
                        break;
                    case "option":
                        r = o;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!o.multiple
                        },
                        r = xe({}, o, {
                            value: void 0
                        }),
                        fe("invalid", e);
                        break;
                    case "textarea":
                        Cd(e, o),
                        r = Bl(e, o),
                        fe("invalid", e);
                        break;
                    default:
                        r = o
                    }
                    Fl(n, r),
                    i = r;
                    for (a in i)
                        if (i.hasOwnProperty(a)) {
                            var l = i[a];
                            a === "style" ? qf(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Yf(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Gr(e, l) : typeof l == "number" && Gr(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Hr.hasOwnProperty(a) ? l != null && a === "onScroll" && fe("scroll", e) : l != null && Zc(e, a, l, s))
                        }
                    switch (n) {
                    case "input":
                        _a(e),
                        Sd(e, o, !1);
                        break;
                    case "textarea":
                        _a(e),
                        bd(e);
                        break;
                    case "option":
                        o.value != null && e.setAttribute("value", "" + On(o.value));
                        break;
                    case "select":
                        e.multiple = !!o.multiple,
                        a = o.value,
                        a != null ? Mo(e, !!o.multiple, a, !1) : o.defaultValue != null && Mo(e, !!o.multiple, o.defaultValue, !0);
                        break;
                    default:
                        typeof r.onClick == "function" && (e.onclick = As)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        o = !!o.autoFocus;
                        break e;
                    case "img":
                        o = !0;
                        break e;
                    default:
                        o = !1
                    }
                }
                o && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Me(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            wh(e, t, e.memoizedProps, o);
        else {
            if (typeof o != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = qn(oa.current),
            qn(Vt.current),
            Wa(t)) {
                if (o = t.stateNode,
                n = t.memoizedProps,
                o[$t] = t,
                (a = o.nodeValue !== n) && (e = lt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ua(o.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ua(o.nodeValue, n, (e.mode & 1) !== 0)
                    }
                a && (t.flags |= 4)
            } else
                o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o),
                o[$t] = t,
                t.stateNode = o
        }
        return Me(t),
        null;
    case 13:
        if (me(ve),
        o = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (he && it !== null && t.mode & 1 && !(t.flags & 128))
                Lm(),
                or(),
                t.flags |= 98560,
                a = !1;
            else if (a = Wa(t),
            o !== null && o.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(R(318));
                    if (a = t.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(R(317));
                    a[$t] = t
                } else
                    or(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Me(t),
                a = !1
            } else
                Nt !== null && (wc(Nt),
                Nt = null),
                a = !0;
            if (!a)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (o = o !== null,
        o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ve.current & 1 ? Pe === 0 && (Pe = 3) : _u())),
        t.updateQueue !== null && (t.flags |= 4),
        Me(t),
        null);
    case 4:
        return ar(),
        pc(e, t),
        e === null && Jr(t.stateNode.containerInfo),
        Me(t),
        null;
    case 10:
        return gu(t.type._context),
        Me(t),
        null;
    case 17:
        return Ze(t.type) && Ds(),
        Me(t),
        null;
    case 19:
        if (me(ve),
        a = t.memoizedState,
        a === null)
            return Me(t),
            null;
        if (o = (t.flags & 128) !== 0,
        s = a.rendering,
        s === null)
            if (o)
                Tr(a, !1);
            else {
                if (Pe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ls(e),
                        s !== null) {
                            for (t.flags |= 128,
                            Tr(a, !1),
                            o = s.updateQueue,
                            o !== null && (t.updateQueue = o,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            o = n,
                            n = t.child; n !== null; )
                                a = n,
                                e = o,
                                a.flags &= 14680066,
                                s = a.alternate,
                                s === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = s.childLanes,
                                a.lanes = s.lanes,
                                a.child = s.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = s.memoizedProps,
                                a.memoizedState = s.memoizedState,
                                a.updateQueue = s.updateQueue,
                                a.type = s.type,
                                e = s.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ce(ve, ve.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && be() > ir && (t.flags |= 128,
                o = !0,
                Tr(a, !1),
                t.lanes = 4194304)
            }
        else {
            if (!o)
                if (e = Ls(s),
                e !== null) {
                    if (t.flags |= 128,
                    o = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Tr(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !s.alternate && !he)
                        return Me(t),
                        null
                } else
                    2 * be() - a.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128,
                    o = !0,
                    Tr(a, !1),
                    t.lanes = 4194304);
            a.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = a.last,
            n !== null ? n.sibling = s : t.child = s,
            a.last = s)
        }
        return a.tail !== null ? (t = a.tail,
        a.rendering = t,
        a.tail = t.sibling,
        a.renderingStartTime = be(),
        t.sibling = null,
        n = ve.current,
        ce(ve, o ? n & 1 | 2 : n & 1),
        t) : (Me(t),
        null);
    case 22:
    case 23:
        return ju(),
        o = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
        o && t.mode & 1 ? at & 1073741824 && (Me(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function Yx(e, t) {
    switch (fu(t),
    t.tag) {
    case 1:
        return Ze(t.type) && Ds(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ar(),
        me(qe),
        me(Fe),
        Cu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Su(t),
        null;
    case 13:
        if (me(ve),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            or()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return me(ve),
        null;
    case 4:
        return ar(),
        null;
    case 10:
        return gu(t.type._context),
        null;
    case 22:
    case 23:
        return ju(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ga = !1
  , Le = !1
  , Xx = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function _o(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (o) {
                Ce(e, t, o)
            }
        else
            n.current = null
}
function fc(e, t, n) {
    try {
        n()
    } catch (o) {
        Ce(e, t, o)
    }
}
var pp = !1;
function qx(e, t) {
    if (Xl = ks,
    e = Em(),
    du(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var o = n.getSelection && n.getSelection();
                if (o && o.rangeCount !== 0) {
                    n = o.anchorNode;
                    var r = o.anchorOffset
                      , a = o.focusNode;
                    o = o.focusOffset;
                    try {
                        n.nodeType,
                        a.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , i = -1
                      , l = -1
                      , c = 0
                      , d = 0
                      , p = e
                      , u = null;
                    t: for (; ; ) {
                        for (var y; p !== n || r !== 0 && p.nodeType !== 3 || (i = s + r),
                        p !== a || o !== 0 && p.nodeType !== 3 || (l = s + o),
                        p.nodeType === 3 && (s += p.nodeValue.length),
                        (y = p.firstChild) !== null; )
                            u = p,
                            p = y;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (u === n && ++c === r && (i = s),
                            u === a && ++d === o && (l = s),
                            (y = p.nextSibling) !== null)
                                break;
                            p = u,
                            u = p.parentNode
                        }
                        p = y
                    }
                    n = i === -1 || l === -1 ? null : {
                        start: i,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ql = {
        focusedElem: e,
        selectionRange: n
    },
    ks = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var f = S.memoizedProps
                                  , w = S.memoizedState
                                  , g = t.stateNode
                                  , m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? f : Tt(t.type, f), w);
                                g.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (C) {
                    Ce(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return S = pp,
    pp = !1,
    S
}
function $r(e, t, n) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null,
    o !== null) {
        var r = o = o.next;
        do {
            if ((r.tag & e) === e) {
                var a = r.destroy;
                r.destroy = void 0,
                a !== void 0 && fc(t, n, a)
            }
            r = r.next
        } while (r !== o)
    }
}
function ui(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var o = n.create;
                n.destroy = o()
            }
            n = n.next
        } while (n !== t)
    }
}
function mc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Sh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Sh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[$t],
    delete t[ta],
    delete t[ec],
    delete t[jx],
    delete t[_x])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Ch(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ch(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function hc(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = As));
    else if (o !== 4 && (e = e.child,
    e !== null))
        for (hc(e, t, n),
        e = e.sibling; e !== null; )
            hc(e, t, n),
            e = e.sibling
}
function vc(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (e = e.child,
    e !== null))
        for (vc(e, t, n),
        e = e.sibling; e !== null; )
            vc(e, t, n),
            e = e.sibling
}
var De = null
  , kt = !1;
function un(e, t, n) {
    for (n = n.child; n !== null; )
        bh(e, t, n),
        n = n.sibling
}
function bh(e, t, n) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function")
        try {
            Wt.onCommitFiberUnmount(ni, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Le || _o(n, t);
    case 6:
        var o = De
          , r = kt;
        De = null,
        un(e, t, n),
        De = o,
        kt = r,
        De !== null && (kt ? (e = De,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
        break;
    case 18:
        De !== null && (kt ? (e = De,
        n = n.stateNode,
        e.nodeType === 8 ? rl(e.parentNode, n) : e.nodeType === 1 && rl(e, n),
        Xr(e)) : rl(De, n.stateNode));
        break;
    case 4:
        o = De,
        r = kt,
        De = n.stateNode.containerInfo,
        kt = !0,
        un(e, t, n),
        De = o,
        kt = r;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Le && (o = n.updateQueue,
        o !== null && (o = o.lastEffect,
        o !== null))) {
            r = o = o.next;
            do {
                var a = r
                  , s = a.destroy;
                a = a.tag,
                s !== void 0 && (a & 2 || a & 4) && fc(n, t, s),
                r = r.next
            } while (r !== o)
        }
        un(e, t, n);
        break;
    case 1:
        if (!Le && (_o(n, t),
        o = n.stateNode,
        typeof o.componentWillUnmount == "function"))
            try {
                o.props = n.memoizedProps,
                o.state = n.memoizedState,
                o.componentWillUnmount()
            } catch (i) {
                Ce(n, t, i)
            }
        un(e, t, n);
        break;
    case 21:
        un(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Le = (o = Le) || n.memoizedState !== null,
        un(e, t, n),
        Le = o) : un(e, t, n);
        break;
    default:
        un(e, t, n)
    }
}
function mp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Xx),
        t.forEach(function(o) {
            var r = sy.bind(null, e, o);
            n.has(o) || (n.add(o),
            o.then(r, r))
        })
    }
}
function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var o = 0; o < n.length; o++) {
            var r = n[o];
            try {
                var a = e
                  , s = t
                  , i = s;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                    case 5:
                        De = i.stateNode,
                        kt = !1;
                        break e;
                    case 3:
                        De = i.stateNode.containerInfo,
                        kt = !0;
                        break e;
                    case 4:
                        De = i.stateNode.containerInfo,
                        kt = !0;
                        break e
                    }
                    i = i.return
                }
                if (De === null)
                    throw Error(R(160));
                bh(a, s, r),
                De = null,
                kt = !1;
                var l = r.alternate;
                l !== null && (l.return = null),
                r.return = null
            } catch (c) {
                Ce(r, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Th(t, e),
            t = t.sibling
}
function Th(e, t) {
    var n = e.alternate
      , o = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ct(t, e),
        Mt(e),
        o & 4) {
            try {
                $r(3, e, e.return),
                ui(3, e)
            } catch (f) {
                Ce(e, e.return, f)
            }
            try {
                $r(5, e, e.return)
            } catch (f) {
                Ce(e, e.return, f)
            }
        }
        break;
    case 1:
        Ct(t, e),
        Mt(e),
        o & 512 && n !== null && _o(n, n.return);
        break;
    case 5:
        if (Ct(t, e),
        Mt(e),
        o & 512 && n !== null && _o(n, n.return),
        e.flags & 32) {
            var r = e.stateNode;
            try {
                Gr(r, "")
            } catch (f) {
                Ce(e, e.return, f)
            }
        }
        if (o & 4 && (r = e.stateNode,
        r != null)) {
            var a = e.memoizedProps
              , s = n !== null ? n.memoizedProps : a
              , i = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    i === "input" && a.type === "radio" && a.name != null && Gf(r, a),
                    zl(i, s);
                    var c = zl(i, a);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s]
                          , p = l[s + 1];
                        d === "style" ? qf(r, p) : d === "dangerouslySetInnerHTML" ? Yf(r, p) : d === "children" ? Gr(r, p) : Zc(r, d, p, c)
                    }
                    switch (i) {
                    case "input":
                        Ol(r, a);
                        break;
                    case "textarea":
                        Kf(r, a);
                        break;
                    case "select":
                        var u = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!a.multiple;
                        var y = a.value;
                        y != null ? Mo(r, !!a.multiple, y, !1) : u !== !!a.multiple && (a.defaultValue != null ? Mo(r, !!a.multiple, a.defaultValue, !0) : Mo(r, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    r[ta] = a
                } catch (f) {
                    Ce(e, e.return, f)
                }
        }
        break;
    case 6:
        if (Ct(t, e),
        Mt(e),
        o & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            r = e.stateNode,
            a = e.memoizedProps;
            try {
                r.nodeValue = a
            } catch (f) {
                Ce(e, e.return, f)
            }
        }
        break;
    case 3:
        if (Ct(t, e),
        Mt(e),
        o & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Xr(t.containerInfo)
            } catch (f) {
                Ce(e, e.return, f)
            }
        break;
    case 4:
        Ct(t, e),
        Mt(e);
        break;
    case 13:
        Ct(t, e),
        Mt(e),
        r = e.child,
        r.flags & 8192 && (a = r.memoizedState !== null,
        r.stateNode.isHidden = a,
        !a || r.alternate !== null && r.alternate.memoizedState !== null || (Du = be())),
        o & 4 && mp(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Le = (c = Le) || d,
        Ct(t, e),
        Le = c) : Ct(t, e),
        Mt(e),
        o & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (L = e,
                d = e.child; d !== null; ) {
                    for (p = L = d; L !== null; ) {
                        switch (u = L,
                        y = u.child,
                        u.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            $r(4, u, u.return);
                            break;
                        case 1:
                            _o(u, u.return);
                            var S = u.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                o = u,
                                n = u.return;
                                try {
                                    t = o,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (f) {
                                    Ce(o, n, f)
                                }
                            }
                            break;
                        case 5:
                            _o(u, u.return);
                            break;
                        case 22:
                            if (u.memoizedState !== null) {
                                vp(p);
                                continue
                            }
                        }
                        y !== null ? (y.return = u,
                        L = y) : vp(p)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (d === null) {
                        d = p;
                        try {
                            r = p.stateNode,
                            c ? (a = r.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = p.stateNode,
                            l = p.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            i.style.display = Xf("display", s))
                        } catch (f) {
                            Ce(e, e.return, f)
                        }
                    }
                } else if (p.tag === 6) {
                    if (d === null)
                        try {
                            p.stateNode.nodeValue = c ? "" : p.memoizedProps
                        } catch (f) {
                            Ce(e, e.return, f)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    d === p && (d = null),
                    p = p.return
                }
                d === p && (d = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        Ct(t, e),
        Mt(e),
        o & 4 && mp(e);
        break;
    case 21:
        break;
    default:
        Ct(t, e),
        Mt(e)
    }
}
function Mt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ch(n)) {
                        var o = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (o.tag) {
            case 5:
                var r = o.stateNode;
                o.flags & 32 && (Gr(r, ""),
                o.flags &= -33);
                var a = fp(e);
                vc(e, a, r);
                break;
            case 3:
            case 4:
                var s = o.stateNode.containerInfo
                  , i = fp(e);
                hc(e, i, s);
                break;
            default:
                throw Error(R(161))
            }
        } catch (l) {
            Ce(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Zx(e, t, n) {
    L = e,
    Eh(e)
}
function Eh(e, t, n) {
    for (var o = (e.mode & 1) !== 0; L !== null; ) {
        var r = L
          , a = r.child;
        if (r.tag === 22 && o) {
            var s = r.memoizedState !== null || Ga;
            if (!s) {
                var i = r.alternate
                  , l = i !== null && i.memoizedState !== null || Le;
                i = Ga;
                var c = Le;
                if (Ga = s,
                (Le = l) && !c)
                    for (L = r; L !== null; )
                        s = L,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? gp(r) : l !== null ? (l.return = s,
                        L = l) : gp(r);
                for (; a !== null; )
                    L = a,
                    Eh(a),
                    a = a.sibling;
                L = r,
                Ga = i,
                Le = c
            }
            hp(e)
        } else
            r.subtreeFlags & 8772 && a !== null ? (a.return = r,
            L = a) : hp(e)
    }
}
function hp(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Le || ui(5, t);
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (t.flags & 4 && !Le)
                            if (n === null)
                                o.componentDidMount();
                            else {
                                var r = t.elementType === t.type ? n.memoizedProps : Tt(t.type, n.memoizedProps);
                                o.componentDidUpdate(r, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && Jd(t, a, o);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Jd(t, s, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var p = d.dehydrated;
                                    p !== null && Xr(p)
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
                        throw Error(R(163))
                    }
                Le || t.flags & 512 && mc(t)
            } catch (u) {
                Ce(t, t.return, u)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function vp(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function gp(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ui(4, t)
                } catch (l) {
                    Ce(t, n, l)
                }
                break;
            case 1:
                var o = t.stateNode;
                if (typeof o.componentDidMount == "function") {
                    var r = t.return;
                    try {
                        o.componentDidMount()
                    } catch (l) {
                        Ce(t, r, l)
                    }
                }
                var a = t.return;
                try {
                    mc(t)
                } catch (l) {
                    Ce(t, a, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    mc(t)
                } catch (l) {
                    Ce(t, s, l)
                }
            }
        } catch (l) {
            Ce(t, t.return, l)
        }
        if (t === e) {
            L = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return,
            L = i;
            break
        }
        L = t.return
    }
}
var Jx = Math.ceil
  , $s = sn.ReactCurrentDispatcher
  , Ru = sn.ReactCurrentOwner
  , xt = sn.ReactCurrentBatchConfig
  , J = 0
  , Re = null
  , Te = null
  , Ie = 0
  , at = 0
  , Oo = Un(0)
  , Pe = 0
  , ia = null
  , co = 0
  , di = 0
  , Au = 0
  , Ur = null
  , Qe = null
  , Du = 0
  , ir = 1 / 0
  , Yt = null
  , Us = !1
  , gc = null
  , In = null
  , Ka = !1
  , En = null
  , Ws = 0
  , Wr = 0
  , xc = null
  , fs = -1
  , ms = 0;
function He() {
    return J & 6 ? be() : fs !== -1 ? fs : fs = be()
}
function jn(e) {
    return e.mode & 1 ? J & 2 && Ie !== 0 ? Ie & -Ie : Mx.transition !== null ? (ms === 0 && (ms = cm()),
    ms) : (e = ie,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : vm(e.type)),
    e) : 1
}
function At(e, t, n, o) {
    if (50 < Wr)
        throw Wr = 0,
        xc = null,
        Error(R(185));
    wa(e, n, o),
    (!(J & 2) || e !== Re) && (e === Re && (!(J & 2) && (di |= n),
    Pe === 4 && xn(e, Ie)),
    Je(e, o),
    n === 1 && J === 0 && !(t.mode & 1) && (ir = be() + 500,
    ii && Wn()))
}
function Je(e, t) {
    var n = e.callbackNode;
    M0(e, t);
    var o = Ps(e, e === Re ? Ie : 0);
    if (o === 0)
        n !== null && Pd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = o & -o,
    e.callbackPriority !== t) {
        if (n != null && Pd(n),
        t === 1)
            e.tag === 0 ? Ox(xp.bind(null, e)) : Om(xp.bind(null, e)),
            Dx(function() {
                !(J & 6) && Wn()
            }),
            n = null;
        else {
            switch (um(o)) {
            case 1:
                n = ou;
                break;
            case 4:
                n = im;
                break;
            case 16:
                n = Es;
                break;
            case 536870912:
                n = lm;
                break;
            default:
                n = Es
            }
            n = jh(n, Ph.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ph(e, t) {
    if (fs = -1,
    ms = 0,
    J & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if ($o() && e.callbackNode !== n)
        return null;
    var o = Ps(e, e === Re ? Ie : 0);
    if (o === 0)
        return null;
    if (o & 30 || o & e.expiredLanes || t)
        t = Vs(e, o);
    else {
        t = o;
        var r = J;
        J |= 2;
        var a = Nh();
        (Re !== e || Ie !== t) && (Yt = null,
        ir = be() + 500,
        no(e, t));
        do
            try {
                ny();
                break
            } catch (i) {
                kh(e, i)
            }
        while (!0);
        vu(),
        $s.current = a,
        J = r,
        Te !== null ? t = 0 : (Re = null,
        Ie = 0,
        t = Pe)
    }
    if (t !== 0) {
        if (t === 2 && (r = Hl(e),
        r !== 0 && (o = r,
        t = yc(e, r))),
        t === 1)
            throw n = ia,
            no(e, 0),
            xn(e, o),
            Je(e, be()),
            n;
        if (t === 6)
            xn(e, o);
        else {
            if (r = e.current.alternate,
            !(o & 30) && !ey(r) && (t = Vs(e, o),
            t === 2 && (a = Hl(e),
            a !== 0 && (o = a,
            t = yc(e, a))),
            t === 1))
                throw n = ia,
                no(e, 0),
                xn(e, o),
                Je(e, be()),
                n;
            switch (e.finishedWork = r,
            e.finishedLanes = o,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                Qn(e, Qe, Yt);
                break;
            case 3:
                if (xn(e, o),
                (o & 130023424) === o && (t = Du + 500 - be(),
                10 < t)) {
                    if (Ps(e, 0) !== 0)
                        break;
                    if (r = e.suspendedLanes,
                    (r & o) !== o) {
                        He(),
                        e.pingedLanes |= e.suspendedLanes & r;
                        break
                    }
                    e.timeoutHandle = Jl(Qn.bind(null, e, Qe, Yt), t);
                    break
                }
                Qn(e, Qe, Yt);
                break;
            case 4:
                if (xn(e, o),
                (o & 4194240) === o)
                    break;
                for (t = e.eventTimes,
                r = -1; 0 < o; ) {
                    var s = 31 - Rt(o);
                    a = 1 << s,
                    s = t[s],
                    s > r && (r = s),
                    o &= ~a
                }
                if (o = r,
                o = be() - o,
                o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Jx(o / 1960)) - o,
                10 < o) {
                    e.timeoutHandle = Jl(Qn.bind(null, e, Qe, Yt), o);
                    break
                }
                Qn(e, Qe, Yt);
                break;
            case 5:
                Qn(e, Qe, Yt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return Je(e, be()),
    e.callbackNode === n ? Ph.bind(null, e) : null
}
function yc(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (no(e, t).flags |= 256),
    e = Vs(e, t),
    e !== 2 && (t = Qe,
    Qe = n,
    t !== null && wc(t)),
    e
}
function wc(e) {
    Qe === null ? Qe = e : Qe.push.apply(Qe, e)
}
function ey(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var o = 0; o < n.length; o++) {
                    var r = n[o]
                      , a = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!Dt(a(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function xn(e, t) {
    for (t &= ~Au,
    t &= ~di,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Rt(t)
          , o = 1 << n;
        e[n] = -1,
        t &= ~o
    }
}
function xp(e) {
    if (J & 6)
        throw Error(R(327));
    $o();
    var t = Ps(e, 0);
    if (!(t & 1))
        return Je(e, be()),
        null;
    var n = Vs(e, t);
    if (e.tag !== 0 && n === 2) {
        var o = Hl(e);
        o !== 0 && (t = o,
        n = yc(e, o))
    }
    if (n === 1)
        throw n = ia,
        no(e, 0),
        xn(e, t),
        Je(e, be()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Qn(e, Qe, Yt),
    Je(e, be()),
    null
}
function Iu(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = n,
        J === 0 && (ir = be() + 500,
        ii && Wn())
    }
}
function uo(e) {
    En !== null && En.tag === 0 && !(J & 6) && $o();
    var t = J;
    J |= 1;
    var n = xt.transition
      , o = ie;
    try {
        if (xt.transition = null,
        ie = 1,
        e)
            return e()
    } finally {
        ie = o,
        xt.transition = n,
        J = t,
        !(J & 6) && Wn()
    }
}
function ju() {
    at = Oo.current,
    me(Oo)
}
function no(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Ax(n)),
    Te !== null)
        for (n = Te.return; n !== null; ) {
            var o = n;
            switch (fu(o),
            o.tag) {
            case 1:
                o = o.type.childContextTypes,
                o != null && Ds();
                break;
            case 3:
                ar(),
                me(qe),
                me(Fe),
                Cu();
                break;
            case 5:
                Su(o);
                break;
            case 4:
                ar();
                break;
            case 13:
                me(ve);
                break;
            case 19:
                me(ve);
                break;
            case 10:
                gu(o.type._context);
                break;
            case 22:
            case 23:
                ju()
            }
            n = n.return
        }
    if (Re = e,
    Te = e = _n(e.current, null),
    Ie = at = t,
    Pe = 0,
    ia = null,
    Au = di = co = 0,
    Qe = Ur = null,
    Xn !== null) {
        for (t = 0; t < Xn.length; t++)
            if (n = Xn[t],
            o = n.interleaved,
            o !== null) {
                n.interleaved = null;
                var r = o.next
                  , a = n.pending;
                if (a !== null) {
                    var s = a.next;
                    a.next = r,
                    o.next = s
                }
                n.pending = o
            }
        Xn = null
    }
    return e
}
function kh(e, t) {
    do {
        var n = Te;
        try {
            if (vu(),
            us.current = zs,
            Fs) {
                for (var o = ge.memoizedState; o !== null; ) {
                    var r = o.queue;
                    r !== null && (r.pending = null),
                    o = o.next
                }
                Fs = !1
            }
            if (lo = 0,
            Ne = Ee = ge = null,
            zr = !1,
            ra = 0,
            Ru.current = null,
            n === null || n.return === null) {
                Pe = 1,
                ia = t,
                Te = null;
                break
            }
            e: {
                var a = e
                  , s = n.return
                  , i = n
                  , l = t;
                if (t = Ie,
                i.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , d = i
                      , p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var u = d.alternate;
                        u ? (d.updateQueue = u.updateQueue,
                        d.memoizedState = u.memoizedState,
                        d.lanes = u.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = ap(s);
                    if (y !== null) {
                        y.flags &= -257,
                        sp(y, s, i, a, t),
                        y.mode & 1 && rp(a, c, t),
                        t = y,
                        l = c;
                        var S = t.updateQueue;
                        if (S === null) {
                            var f = new Set;
                            f.add(l),
                            t.updateQueue = f
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            rp(a, c, t),
                            _u();
                            break e
                        }
                        l = Error(R(426))
                    }
                } else if (he && i.mode & 1) {
                    var w = ap(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        sp(w, s, i, a, t),
                        mu(sr(l, i));
                        break e
                    }
                }
                a = l = sr(l, i),
                Pe !== 4 && (Pe = 2),
                Ur === null ? Ur = [a] : Ur.push(a),
                a = s;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        t &= -t,
                        a.lanes |= t;
                        var g = uh(a, l, t);
                        Zd(a, g);
                        break e;
                    case 1:
                        i = l;
                        var m = a.type
                          , x = a.stateNode;
                        if (!(a.flags & 128) && (typeof m.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (In === null || !In.has(x)))) {
                            a.flags |= 65536,
                            t &= -t,
                            a.lanes |= t;
                            var C = dh(a, i, t);
                            Zd(a, C);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            Ah(n)
        } catch (b) {
            t = b,
            Te === n && n !== null && (Te = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Nh() {
    var e = $s.current;
    return $s.current = zs,
    e === null ? zs : e
}
function _u() {
    (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Re === null || !(co & 268435455) && !(di & 268435455) || xn(Re, Ie)
}
function Vs(e, t) {
    var n = J;
    J |= 2;
    var o = Nh();
    (Re !== e || Ie !== t) && (Yt = null,
    no(e, t));
    do
        try {
            ty();
            break
        } catch (r) {
            kh(e, r)
        }
    while (!0);
    if (vu(),
    J = n,
    $s.current = o,
    Te !== null)
        throw Error(R(261));
    return Re = null,
    Ie = 0,
    Pe
}
function ty() {
    for (; Te !== null; )
        Rh(Te)
}
function ny() {
    for (; Te !== null && !k0(); )
        Rh(Te)
}
function Rh(e) {
    var t = Ih(e.alternate, e, at);
    e.memoizedProps = e.pendingProps,
    t === null ? Ah(e) : Te = t,
    Ru.current = null
}
function Ah(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Yx(n, t),
            n !== null) {
                n.flags &= 32767,
                Te = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Pe = 6,
                Te = null;
                return
            }
        } else if (n = Qx(n, t, at),
        n !== null) {
            Te = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Te = t;
            return
        }
        Te = t = e
    } while (t !== null);
    Pe === 0 && (Pe = 5)
}
function Qn(e, t, n) {
    var o = ie
      , r = xt.transition;
    try {
        xt.transition = null,
        ie = 1,
        oy(e, t, n, o)
    } finally {
        xt.transition = r,
        ie = o
    }
    return null
}
function oy(e, t, n, o) {
    do
        $o();
    while (En !== null);
    if (J & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var r = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (B0(e, a),
    e === Re && (Te = Re = null,
    Ie = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ka || (Ka = !0,
    jh(Es, function() {
        return $o(),
        null
    })),
    a = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || a) {
        a = xt.transition,
        xt.transition = null;
        var s = ie;
        ie = 1;
        var i = J;
        J |= 4,
        Ru.current = null,
        qx(e, n),
        Th(n, e),
        bx(ql),
        ks = !!Xl,
        ql = Xl = null,
        e.current = n,
        Zx(n),
        N0(),
        J = i,
        ie = s,
        xt.transition = a
    } else
        e.current = n;
    if (Ka && (Ka = !1,
    En = e,
    Ws = r),
    a = e.pendingLanes,
    a === 0 && (In = null),
    D0(n.stateNode),
    Je(e, be()),
    t !== null)
        for (o = e.onRecoverableError,
        n = 0; n < t.length; n++)
            r = t[n],
            o(r.value, {
                componentStack: r.stack,
                digest: r.digest
            });
    if (Us)
        throw Us = !1,
        e = gc,
        gc = null,
        e;
    return Ws & 1 && e.tag !== 0 && $o(),
    a = e.pendingLanes,
    a & 1 ? e === xc ? Wr++ : (Wr = 0,
    xc = e) : Wr = 0,
    Wn(),
    null
}
function $o() {
    if (En !== null) {
        var e = um(Ws)
          , t = xt.transition
          , n = ie;
        try {
            if (xt.transition = null,
            ie = 16 > e ? 16 : e,
            En === null)
                var o = !1;
            else {
                if (e = En,
                En = null,
                Ws = 0,
                J & 6)
                    throw Error(R(331));
                var r = J;
                for (J |= 4,
                L = e.current; L !== null; ) {
                    var a = L
                      , s = a.child;
                    if (L.flags & 16) {
                        var i = a.deletions;
                        if (i !== null) {
                            for (var l = 0; l < i.length; l++) {
                                var c = i[l];
                                for (L = c; L !== null; ) {
                                    var d = L;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $r(8, d, a)
                                    }
                                    var p = d.child;
                                    if (p !== null)
                                        p.return = d,
                                        L = p;
                                    else
                                        for (; L !== null; ) {
                                            d = L;
                                            var u = d.sibling
                                              , y = d.return;
                                            if (Sh(d),
                                            d === c) {
                                                L = null;
                                                break
                                            }
                                            if (u !== null) {
                                                u.return = y,
                                                L = u;
                                                break
                                            }
                                            L = y
                                        }
                                }
                            }
                            var S = a.alternate;
                            if (S !== null) {
                                var f = S.child;
                                if (f !== null) {
                                    S.child = null;
                                    do {
                                        var w = f.sibling;
                                        f.sibling = null,
                                        f = w
                                    } while (f !== null)
                                }
                            }
                            L = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && s !== null)
                        s.return = a,
                        L = s;
                    else
                        e: for (; L !== null; ) {
                            if (a = L,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    $r(9, a, a.return)
                                }
                            var g = a.sibling;
                            if (g !== null) {
                                g.return = a.return,
                                L = g;
                                break e
                            }
                            L = a.return
                        }
                }
                var m = e.current;
                for (L = m; L !== null; ) {
                    s = L;
                    var x = s.child;
                    if (s.subtreeFlags & 2064 && x !== null)
                        x.return = s,
                        L = x;
                    else
                        e: for (s = m; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                try {
                                    switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ui(9, i)
                                    }
                                } catch (b) {
                                    Ce(i, i.return, b)
                                }
                            if (i === s) {
                                L = null;
                                break e
                            }
                            var C = i.sibling;
                            if (C !== null) {
                                C.return = i.return,
                                L = C;
                                break e
                            }
                            L = i.return
                        }
                }
                if (J = r,
                Wn(),
                Wt && typeof Wt.onPostCommitFiberRoot == "function")
                    try {
                        Wt.onPostCommitFiberRoot(ni, e)
                    } catch {}
                o = !0
            }
            return o
        } finally {
            ie = n,
            xt.transition = t
        }
    }
    return !1
}
function yp(e, t, n) {
    t = sr(n, t),
    t = uh(e, t, 1),
    e = Dn(e, t, 1),
    t = He(),
    e !== null && (wa(e, 1, t),
    Je(e, t))
}
function Ce(e, t, n) {
    if (e.tag === 3)
        yp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                yp(t, e, n);
                break
            } else if (t.tag === 1) {
                var o = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (In === null || !In.has(o))) {
                    e = sr(n, e),
                    e = dh(t, e, 1),
                    t = Dn(t, e, 1),
                    e = He(),
                    t !== null && (wa(t, 1, e),
                    Je(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ry(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t),
    t = He(),
    e.pingedLanes |= e.suspendedLanes & n,
    Re === e && (Ie & n) === n && (Pe === 4 || Pe === 3 && (Ie & 130023424) === Ie && 500 > be() - Du ? no(e, 0) : Au |= n),
    Je(e, t)
}
function Dh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ba,
    Ba <<= 1,
    !(Ba & 130023424) && (Ba = 4194304)) : t = 1);
    var n = He();
    e = nn(e, t),
    e !== null && (wa(e, t, n),
    Je(e, n))
}
function ay(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Dh(e, n)
}
function sy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var o = e.stateNode
          , r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
    case 19:
        o = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    o !== null && o.delete(t),
    Dh(e, n)
}
var Ih;
Ih = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || qe.current)
            Xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Xe = !1,
                Kx(e, t, n);
            Xe = !!(e.flags & 131072)
        }
    else
        Xe = !1,
        he && t.flags & 1048576 && Mm(t, _s, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var o = t.type;
        ps(e, t),
        e = t.pendingProps;
        var r = nr(t, Fe.current);
        zo(t, n),
        r = Tu(null, t, o, e, r, n);
        var a = Eu();
        return t.flags |= 1,
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ze(o) ? (a = !0,
        Is(t)) : a = !1,
        t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        yu(t),
        r.updater = ci,
        t.stateNode = r,
        r._reactInternals = t,
        sc(t, o, e, n),
        t = cc(null, t, o, !0, a, n)) : (t.tag = 0,
        he && a && pu(t),
        We(null, t, r, n),
        t = t.child),
        t;
    case 16:
        o = t.elementType;
        e: {
            switch (ps(e, t),
            e = t.pendingProps,
            r = o._init,
            o = r(o._payload),
            t.type = o,
            r = t.tag = ly(o),
            e = Tt(o, e),
            r) {
            case 0:
                t = lc(null, t, o, e, n);
                break e;
            case 1:
                t = cp(null, t, o, e, n);
                break e;
            case 11:
                t = ip(null, t, o, e, n);
                break e;
            case 14:
                t = lp(null, t, o, Tt(o.type, e), n);
                break e
            }
            throw Error(R(306, o, ""))
        }
        return t;
    case 0:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : Tt(o, r),
        lc(e, t, o, r, n);
    case 1:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : Tt(o, r),
        cp(e, t, o, r, n);
    case 3:
        e: {
            if (hh(t),
            e === null)
                throw Error(R(387));
            o = t.pendingProps,
            a = t.memoizedState,
            r = a.element,
            Um(e, t),
            Bs(t, o, null, n);
            var s = t.memoizedState;
            if (o = s.element,
            a.isDehydrated)
                if (a = {
                    element: o,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = a,
                t.memoizedState = a,
                t.flags & 256) {
                    r = sr(Error(R(423)), t),
                    t = up(e, t, o, n, r);
                    break e
                } else if (o !== r) {
                    r = sr(Error(R(424)), t),
                    t = up(e, t, o, n, r);
                    break e
                } else
                    for (it = An(t.stateNode.containerInfo.firstChild),
                    lt = t,
                    he = !0,
                    Nt = null,
                    n = zm(t, null, o, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (or(),
                o === r) {
                    t = on(e, t, n);
                    break e
                }
                We(e, t, o, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Wm(t),
        e === null && oc(t),
        o = t.type,
        r = t.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        s = r.children,
        Zl(o, r) ? s = null : a !== null && Zl(o, a) && (t.flags |= 32),
        mh(e, t),
        We(e, t, s, n),
        t.child;
    case 6:
        return e === null && oc(t),
        null;
    case 13:
        return vh(e, t, n);
    case 4:
        return wu(t, t.stateNode.containerInfo),
        o = t.pendingProps,
        e === null ? t.child = rr(t, null, o, n) : We(e, t, o, n),
        t.child;
    case 11:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : Tt(o, r),
        ip(e, t, o, r, n);
    case 7:
        return We(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return We(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return We(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (o = t.type._context,
            r = t.pendingProps,
            a = t.memoizedProps,
            s = r.value,
            ce(Os, o._currentValue),
            o._currentValue = s,
            a !== null)
                if (Dt(a.value, s)) {
                    if (a.children === r.children && !qe.current) {
                        t = on(e, t, n);
                        break e
                    }
                } else
                    for (a = t.child,
                    a !== null && (a.return = t); a !== null; ) {
                        var i = a.dependencies;
                        if (i !== null) {
                            s = a.child;
                            for (var l = i.firstContext; l !== null; ) {
                                if (l.context === o) {
                                    if (a.tag === 1) {
                                        l = Jt(-1, n & -n),
                                        l.tag = 2;
                                        var c = a.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            c.pending = l
                                        }
                                    }
                                    a.lanes |= n,
                                    l = a.alternate,
                                    l !== null && (l.lanes |= n),
                                    rc(a.return, n, t),
                                    i.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (a.tag === 10)
                            s = a.type === t.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (s = a.return,
                            s === null)
                                throw Error(R(341));
                            s.lanes |= n,
                            i = s.alternate,
                            i !== null && (i.lanes |= n),
                            rc(s, n, t),
                            s = a.sibling
                        } else
                            s = a.child;
                        if (s !== null)
                            s.return = a;
                        else
                            for (s = a; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (a = s.sibling,
                                a !== null) {
                                    a.return = s.return,
                                    s = a;
                                    break
                                }
                                s = s.return
                            }
                        a = s
                    }
            We(e, t, r.children, n),
            t = t.child
        }
        return t;
    case 9:
        return r = t.type,
        o = t.pendingProps.children,
        zo(t, n),
        r = yt(r),
        o = o(r),
        t.flags |= 1,
        We(e, t, o, n),
        t.child;
    case 14:
        return o = t.type,
        r = Tt(o, t.pendingProps),
        r = Tt(o.type, r),
        lp(e, t, o, r, n);
    case 15:
        return ph(e, t, t.type, t.pendingProps, n);
    case 17:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : Tt(o, r),
        ps(e, t),
        t.tag = 1,
        Ze(o) ? (e = !0,
        Is(t)) : e = !1,
        zo(t, n),
        ch(t, o, r),
        sc(t, o, r, n),
        cc(null, t, o, !0, e, n);
    case 19:
        return gh(e, t, n);
    case 22:
        return fh(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function jh(e, t) {
    return sm(e, t)
}
function iy(e, t, n, o) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = o,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function gt(e, t, n, o) {
    return new iy(e,t,n,o)
}
function Ou(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function ly(e) {
    if (typeof e == "function")
        return Ou(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === eu)
            return 11;
        if (e === tu)
            return 14
    }
    return 2
}
function _n(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function hs(e, t, n, o, r, a) {
    var s = 2;
    if (o = e,
    typeof e == "function")
        Ou(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Eo:
            return oo(n.children, r, a, t);
        case Jc:
            s = 8,
            r |= 8;
            break;
        case Al:
            return e = gt(12, n, t, r | 2),
            e.elementType = Al,
            e.lanes = a,
            e;
        case Dl:
            return e = gt(13, n, t, r),
            e.elementType = Dl,
            e.lanes = a,
            e;
        case Il:
            return e = gt(19, n, t, r),
            e.elementType = Il,
            e.lanes = a,
            e;
        case Wf:
            return pi(n, r, a, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case $f:
                    s = 10;
                    break e;
                case Uf:
                    s = 9;
                    break e;
                case eu:
                    s = 11;
                    break e;
                case tu:
                    s = 14;
                    break e;
                case hn:
                    s = 16,
                    o = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = gt(s, n, t, r),
    t.elementType = e,
    t.type = o,
    t.lanes = a,
    t
}
function oo(e, t, n, o) {
    return e = gt(7, e, o, t),
    e.lanes = n,
    e
}
function pi(e, t, n, o) {
    return e = gt(22, e, o, t),
    e.elementType = Wf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function pl(e, t, n) {
    return e = gt(6, e, null, t),
    e.lanes = n,
    e
}
function fl(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function cy(e, t, n, o, r) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ki(0),
    this.expirationTimes = Ki(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ki(0),
    this.identifierPrefix = o,
    this.onRecoverableError = r,
    this.mutableSourceEagerHydrationData = null
}
function Mu(e, t, n, o, r, a, s, i, l) {
    return e = new cy(e,t,n,i,l),
    t === 1 ? (t = 1,
    a === !0 && (t |= 8)) : t = 0,
    a = gt(3, null, null, t),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: o,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    yu(a),
    e
}
function uy(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: To,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function _h(e) {
    if (!e)
        return Mn;
    e = e._reactInternals;
    e: {
        if (ho(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ze(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ze(n))
            return _m(e, n, t)
    }
    return t
}
function Oh(e, t, n, o, r, a, s, i, l) {
    return e = Mu(n, o, !0, e, r, a, s, i, l),
    e.context = _h(null),
    n = e.current,
    o = He(),
    r = jn(n),
    a = Jt(o, r),
    a.callback = t ?? null,
    Dn(n, a, r),
    e.current.lanes = r,
    wa(e, r, o),
    Je(e, o),
    e
}
function fi(e, t, n, o) {
    var r = t.current
      , a = He()
      , s = jn(r);
    return n = _h(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Jt(a, s),
    t.payload = {
        element: e
    },
    o = o === void 0 ? null : o,
    o !== null && (t.callback = o),
    e = Dn(r, t, s),
    e !== null && (At(e, r, s, a),
    cs(e, r, s)),
    s
}
function Hs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function wp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Bu(e, t) {
    wp(e, t),
    (e = e.alternate) && wp(e, t)
}
function dy() {
    return null
}
var Mh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Lu(e) {
    this._internalRoot = e
}
mi.prototype.render = Lu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    fi(e, t, null, null)
}
;
mi.prototype.unmount = Lu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        uo(function() {
            fi(null, e, null, null)
        }),
        t[tn] = null
    }
}
;
function mi(e) {
    this._internalRoot = e
}
mi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = fm();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++)
            ;
        gn.splice(n, 0, e),
        n === 0 && hm(e)
    }
}
;
function Fu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function hi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Sp() {}
function py(e, t, n, o, r) {
    if (r) {
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var c = Hs(s);
                a.call(c)
            }
        }
        var s = Oh(t, o, e, 0, null, !1, !1, "", Sp);
        return e._reactRootContainer = s,
        e[tn] = s.current,
        Jr(e.nodeType === 8 ? e.parentNode : e),
        uo(),
        s
    }
    for (; r = e.lastChild; )
        e.removeChild(r);
    if (typeof o == "function") {
        var i = o;
        o = function() {
            var c = Hs(l);
            i.call(c)
        }
    }
    var l = Mu(e, 0, !1, null, null, !1, !1, "", Sp);
    return e._reactRootContainer = l,
    e[tn] = l.current,
    Jr(e.nodeType === 8 ? e.parentNode : e),
    uo(function() {
        fi(t, l, n, o)
    }),
    l
}
function vi(e, t, n, o, r) {
    var a = n._reactRootContainer;
    if (a) {
        var s = a;
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var l = Hs(s);
                i.call(l)
            }
        }
        fi(t, s, e, r)
    } else
        s = py(n, t, e, r, o);
    return Hs(s)
}
dm = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Ar(t.pendingLanes);
            n !== 0 && (ru(t, n | 1),
            Je(t, be()),
            !(J & 6) && (ir = be() + 500,
            Wn()))
        }
        break;
    case 13:
        uo(function() {
            var o = nn(e, 1);
            if (o !== null) {
                var r = He();
                At(o, e, 1, r)
            }
        }),
        Bu(e, 1)
    }
}
;
au = function(e) {
    if (e.tag === 13) {
        var t = nn(e, 134217728);
        if (t !== null) {
            var n = He();
            At(t, e, 134217728, n)
        }
        Bu(e, 134217728)
    }
}
;
pm = function(e) {
    if (e.tag === 13) {
        var t = jn(e)
          , n = nn(e, t);
        if (n !== null) {
            var o = He();
            At(n, e, t, o)
        }
        Bu(e, t)
    }
}
;
fm = function() {
    return ie
}
;
mm = function(e, t) {
    var n = ie;
    try {
        return ie = e,
        t()
    } finally {
        ie = n
    }
}
;
Ul = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ol(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var o = n[t];
                if (o !== e && o.form === e.form) {
                    var r = si(o);
                    if (!r)
                        throw Error(R(90));
                    Hf(o),
                    Ol(o, r)
                }
            }
        }
        break;
    case "textarea":
        Kf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Mo(e, !!n.multiple, t, !1)
    }
}
;
em = Iu;
tm = uo;
var fy = {
    usingClientEntryPoint: !1,
    Events: [Ca, Ro, si, Zf, Jf, Iu]
}
  , Er = {
    findFiberByHostInstance: Yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , my = {
    bundleType: Er.bundleType,
    version: Er.version,
    rendererPackageName: Er.rendererPackageName,
    rendererConfig: Er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = rm(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Er.findFiberByHostInstance || dy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qa.isDisabled && Qa.supportsFiber)
        try {
            ni = Qa.inject(my),
            Wt = Qa
        } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fu(t))
        throw Error(R(200));
    return uy(e, t, null, n)
}
;
dt.createRoot = function(e, t) {
    if (!Fu(e))
        throw Error(R(299));
    var n = !1
      , o = ""
      , r = Mh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    t = Mu(e, 1, !1, null, null, n, !1, o, r),
    e[tn] = t.current,
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new Lu(t)
}
;
dt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = rm(t),
    e = e === null ? null : e.stateNode,
    e
}
;
dt.flushSync = function(e) {
    return uo(e)
}
;
dt.hydrate = function(e, t, n) {
    if (!hi(t))
        throw Error(R(200));
    return vi(null, e, t, !0, n)
}
;
dt.hydrateRoot = function(e, t, n) {
    if (!Fu(e))
        throw Error(R(405));
    var o = n != null && n.hydratedSources || null
      , r = !1
      , a = ""
      , s = Mh;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0),
    n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Oh(t, null, e, 1, n ?? null, r, !1, a, s),
    e[tn] = t.current,
    Jr(e),
    o)
        for (e = 0; e < o.length; e++)
            n = o[e],
            r = n._getVersion,
            r = r(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(n, r);
    return new mi(t)
}
;
dt.render = function(e, t, n) {
    if (!hi(t))
        throw Error(R(200));
    return vi(null, e, t, !1, n)
}
;
dt.unmountComponentAtNode = function(e) {
    if (!hi(e))
        throw Error(R(40));
    return e._reactRootContainer ? (uo(function() {
        vi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[tn] = null
        })
    }),
    !0) : !1
}
;
dt.unstable_batchedUpdates = Iu;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
    if (!hi(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return vi(e, t, n, !1, o)
}
;
dt.version = "18.3.1-next-f1338f8080-20240426";
function Bh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)
        } catch (e) {
            console.error(e)
        }
}
Bh(),
Bf.exports = dt;
var vo = Bf.exports;
const Lh = Tf(vo);
var Fh, Cp = vo;
Fh = Cp.createRoot,
Cp.hydrateRoot;
const hy = 1
  , vy = 1e6;
let ml = 0;
function gy() {
    return ml = (ml + 1) % Number.MAX_SAFE_INTEGER,
    ml.toString()
}
const hl = new Map
  , bp = e => {
    if (hl.has(e))
        return;
    const t = setTimeout( () => {
        hl.delete(e),
        Vr({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , vy);
    hl.set(e, t)
}
  , xy = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, hy)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? bp(n) : e.toasts.forEach(o => {
                bp(o.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(o => o.id === n || n === void 0 ? {
                    ...o,
                    open: !1
                } : o)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , vs = [];
let gs = {
    toasts: []
};
function Vr(e) {
    gs = xy(gs, e),
    vs.forEach(t => {
        t(gs)
    }
    )
}
function Ye({...e}) {
    const t = gy()
      , n = r => Vr({
        type: "UPDATE_TOAST",
        toast: {
            ...r,
            id: t
        }
    })
      , o = () => Vr({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Vr({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: r => {
                r || o()
            }
        }
    }),
    {
        id: t,
        dismiss: o,
        update: n
    }
}
function yy() {
    const [e,t] = h.useState(gs);
    return h.useEffect( () => (vs.push(t),
    () => {
        const n = vs.indexOf(t);
        n > -1 && vs.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Ye,
        dismiss: n => Vr({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function G(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(r) {
        if (e == null || e(r),
        n === !1 || !r.defaultPrevented)
            return t == null ? void 0 : t(r)
    }
}
function wy(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function zh(...e) {
    return t => e.forEach(n => wy(n, t))
}
function ye(...e) {
    return h.useCallback(zh(...e), e)
}
function Sy(e, t=[]) {
    let n = [];
    function o(a, s) {
        const i = h.createContext(s)
          , l = n.length;
        n = [...n, s];
        function c(p) {
            const {scope: u, children: y, ...S} = p
              , f = (u == null ? void 0 : u[e][l]) || i
              , w = h.useMemo( () => S, Object.values(S));
            return v.jsx(f.Provider, {
                value: w,
                children: y
            })
        }
        function d(p, u) {
            const y = (u == null ? void 0 : u[e][l]) || i
              , S = h.useContext(y);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return c.displayName = a + "Provider",
        [c, d]
    }
    const r = () => {
        const a = n.map(s => h.createContext(s));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || a;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return r.scopeName = e,
    [o, Cy(r, ...t)]
}
function Cy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const s = o.reduce( (i, {useScope: l, scopeName: c}) => {
                const p = l(a)[`__scope${c}`];
                return {
                    ...i,
                    ...p
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var lr = h.forwardRef( (e, t) => {
    const {children: n, ...o} = e
      , r = h.Children.toArray(n)
      , a = r.find(by);
    if (a) {
        const s = a.props.children
          , i = r.map(l => l === a ? h.Children.count(s) > 1 ? h.Children.only(null) : h.isValidElement(s) ? s.props.children : null : l);
        return v.jsx(Sc, {
            ...o,
            ref: t,
            children: h.isValidElement(s) ? h.cloneElement(s, void 0, i) : null
        })
    }
    return v.jsx(Sc, {
        ...o,
        ref: t,
        children: n
    })
}
);
lr.displayName = "Slot";
var Sc = h.forwardRef( (e, t) => {
    const {children: n, ...o} = e;
    if (h.isValidElement(n)) {
        const r = Ey(n);
        return h.cloneElement(n, {
            ...Ty(o, n.props),
            ref: t ? zh(t, r) : r
        })
    }
    return h.Children.count(n) > 1 ? h.Children.only(null) : null
}
);
Sc.displayName = "SlotClone";
var $h = ({children: e}) => v.jsx(v.Fragment, {
    children: e
});
function by(e) {
    return h.isValidElement(e) && e.type === $h
}
function Ty(e, t) {
    const n = {
        ...t
    };
    for (const o in t) {
        const r = e[o]
          , a = t[o];
        /^on[A-Z]/.test(o) ? r && a ? n[o] = (...i) => {
            a(...i),
            r(...i)
        }
        : r && (n[o] = r) : o === "style" ? n[o] = {
            ...r,
            ...a
        } : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Ey(e) {
    var o, r;
    let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function zu(e) {
    const t = e + "CollectionProvider"
      , [n,o] = Sy(t)
      , [r,a] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: S, children: f} = y
          , w = D.useRef(null)
          , g = D.useRef(new Map).current;
        return v.jsx(r, {
            scope: S,
            itemMap: g,
            collectionRef: w,
            children: f
        })
    }
    ;
    s.displayName = t;
    const i = e + "CollectionSlot"
      , l = D.forwardRef( (y, S) => {
        const {scope: f, children: w} = y
          , g = a(i, f)
          , m = ye(S, g.collectionRef);
        return v.jsx(lr, {
            ref: m,
            children: w
        })
    }
    );
    l.displayName = i;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , p = D.forwardRef( (y, S) => {
        const {scope: f, children: w, ...g} = y
          , m = D.useRef(null)
          , x = ye(S, m)
          , C = a(c, f);
        return D.useEffect( () => (C.itemMap.set(m, {
            ref: m,
            ...g
        }),
        () => void C.itemMap.delete(m))),
        v.jsx(lr, {
            [d]: "",
            ref: x,
            children: w
        })
    }
    );
    p.displayName = c;
    function u(y) {
        const S = a(e + "CollectionConsumer", y);
        return D.useCallback( () => {
            const w = S.collectionRef.current;
            if (!w)
                return [];
            const g = Array.from(w.querySelectorAll(`[${d}]`));
            return Array.from(S.itemMap.values()).sort( (C, b) => g.indexOf(C.ref.current) - g.indexOf(b.ref.current))
        }
        , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: l,
        ItemSlot: p
    }, u, o]
}
function gi(e, t=[]) {
    let n = [];
    function o(a, s) {
        const i = h.createContext(s)
          , l = n.length;
        n = [...n, s];
        const c = p => {
            var g;
            const {scope: u, children: y, ...S} = p
              , f = ((g = u == null ? void 0 : u[e]) == null ? void 0 : g[l]) || i
              , w = h.useMemo( () => S, Object.values(S));
            return v.jsx(f.Provider, {
                value: w,
                children: y
            })
        }
        ;
        c.displayName = a + "Provider";
        function d(p, u) {
            var f;
            const y = ((f = u == null ? void 0 : u[e]) == null ? void 0 : f[l]) || i
              , S = h.useContext(y);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return [c, d]
    }
    const r = () => {
        const a = n.map(s => h.createContext(s));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || a;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return r.scopeName = e,
    [o, Py(r, ...t)]
}
function Py(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const s = o.reduce( (i, {useScope: l, scopeName: c}) => {
                const p = l(a)[`__scope${c}`];
                return {
                    ...i,
                    ...p
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var ky = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , ee = ky.reduce( (e, t) => {
    const n = h.forwardRef( (o, r) => {
        const {asChild: a, ...s} = o
          , i = a ? lr : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(i, {
            ...s,
            ref: r
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function Uh(e, t) {
    e && vo.flushSync( () => e.dispatchEvent(t))
}
function et(e) {
    const t = h.useRef(e);
    return h.useEffect( () => {
        t.current = e
    }
    ),
    h.useMemo( () => (...n) => {
        var o;
        return (o = t.current) == null ? void 0 : o.call(t, ...n)
    }
    , [])
}
function Ny(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = et(e);
    h.useEffect( () => {
        const o = r => {
            r.key === "Escape" && n(r)
        }
        ;
        return t.addEventListener("keydown", o, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", o, {
            capture: !0
        })
    }
    , [n, t])
}
var Ry = "DismissableLayer", Cc = "dismissableLayer.update", Ay = "dismissableLayer.pointerDownOutside", Dy = "dismissableLayer.focusOutside", Tp, Wh = h.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), xi = h.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: o, onPointerDownOutside: r, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...l} = e
      , c = h.useContext(Wh)
      , [d,p] = h.useState(null)
      , u = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,y] = h.useState({})
      , S = ye(t, E => p(E))
      , f = Array.from(c.layers)
      , [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = f.indexOf(w)
      , m = d ? f.indexOf(d) : -1
      , x = c.layersWithOutsidePointerEventsDisabled.size > 0
      , C = m >= g
      , b = jy(E => {
        const k = E.target
          , _ = [...c.branches].some(I => I.contains(k));
        !C || _ || (r == null || r(E),
        s == null || s(E),
        E.defaultPrevented || i == null || i())
    }
    , u)
      , P = _y(E => {
        const k = E.target;
        [...c.branches].some(I => I.contains(k)) || (a == null || a(E),
        s == null || s(E),
        E.defaultPrevented || i == null || i())
    }
    , u);
    return Ny(E => {
        m === c.layers.size - 1 && (o == null || o(E),
        !E.defaultPrevented && i && (E.preventDefault(),
        i()))
    }
    , u),
    h.useEffect( () => {
        if (d)
            return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Tp = u.body.style.pointerEvents,
            u.body.style.pointerEvents = "none"),
            c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Ep(),
            () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (u.body.style.pointerEvents = Tp)
            }
    }
    , [d, u, n, c]),
    h.useEffect( () => () => {
        d && (c.layers.delete(d),
        c.layersWithOutsidePointerEventsDisabled.delete(d),
        Ep())
    }
    , [d, c]),
    h.useEffect( () => {
        const E = () => y({});
        return document.addEventListener(Cc, E),
        () => document.removeEventListener(Cc, E)
    }
    , []),
    v.jsx(ee.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: x ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: G(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: G(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: G(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
xi.displayName = Ry;
var Iy = "DismissableLayerBranch"
  , Vh = h.forwardRef( (e, t) => {
    const n = h.useContext(Wh)
      , o = h.useRef(null)
      , r = ye(t, o);
    return h.useEffect( () => {
        const a = o.current;
        if (a)
            return n.branches.add(a),
            () => {
                n.branches.delete(a)
            }
    }
    , [n.branches]),
    v.jsx(ee.div, {
        ...e,
        ref: r
    })
}
);
Vh.displayName = Iy;
function jy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = et(e)
      , o = h.useRef(!1)
      , r = h.useRef( () => {}
    );
    return h.useEffect( () => {
        const a = i => {
            if (i.target && !o.current) {
                let l = function() {
                    Hh(Ay, n, c, {
                        discrete: !0
                    })
                };
                const c = {
                    originalEvent: i
                };
                i.pointerType === "touch" ? (t.removeEventListener("click", r.current),
                r.current = l,
                t.addEventListener("click", r.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", r.current);
            o.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", a)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", a),
            t.removeEventListener("click", r.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => o.current = !0
    }
}
function _y(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = et(e)
      , o = h.useRef(!1);
    return h.useEffect( () => {
        const r = a => {
            a.target && !o.current && Hh(Dy, n, {
                originalEvent: a
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", r),
        () => t.removeEventListener("focusin", r)
    }
    , [t, n]),
    {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}
function Ep() {
    const e = new CustomEvent(Cc);
    document.dispatchEvent(e)
}
function Hh(e, t, n, {discrete: o}) {
    const r = n.originalEvent.target
      , a = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && r.addEventListener(e, t, {
        once: !0
    }),
    o ? Uh(r, a) : r.dispatchEvent(a)
}
var Oy = xi
  , My = Vh
  , ze = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {}
  , By = "Portal"
  , $u = h.forwardRef( (e, t) => {
    var i;
    const {container: n, ...o} = e
      , [r,a] = h.useState(!1);
    ze( () => a(!0), []);
    const s = n || r && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
    return s ? Lh.createPortal(v.jsx(ee.div, {
        ...o,
        ref: t
    }), s) : null
}
);
$u.displayName = By;
function Ly(e, t) {
    return h.useReducer( (n, o) => t[n][o] ?? n, e)
}
var yi = e => {
    const {present: t, children: n} = e
      , o = Fy(t)
      , r = typeof n == "function" ? n({
        present: o.isPresent
    }) : h.Children.only(n)
      , a = ye(o.ref, zy(r));
    return typeof n == "function" || o.isPresent ? h.cloneElement(r, {
        ref: a
    }) : null
}
;
yi.displayName = "Presence";
function Fy(e) {
    const [t,n] = h.useState()
      , o = h.useRef({})
      , r = h.useRef(e)
      , a = h.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [i,l] = Ly(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return h.useEffect( () => {
        const c = Ya(o.current);
        a.current = i === "mounted" ? c : "none"
    }
    , [i]),
    ze( () => {
        const c = o.current
          , d = r.current;
        if (d !== e) {
            const u = a.current
              , y = Ya(c);
            e ? l("MOUNT") : y === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && u !== y ? "ANIMATION_OUT" : "UNMOUNT"),
            r.current = e
        }
    }
    , [e, l]),
    ze( () => {
        if (t) {
            let c;
            const d = t.ownerDocument.defaultView ?? window
              , p = y => {
                const f = Ya(o.current).includes(y.animationName);
                if (y.target === t && f && (l("ANIMATION_END"),
                !r.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    c = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , u = y => {
                y.target === t && (a.current = Ya(o.current))
            }
            ;
            return t.addEventListener("animationstart", u),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
                d.clearTimeout(c),
                t.removeEventListener("animationstart", u),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(i),
        ref: h.useCallback(c => {
            c && (o.current = getComputedStyle(c)),
            n(c)
        }
        , [])
    }
}
function Ya(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function zy(e) {
    var o, r;
    let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function la({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [o,r] = $y({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , s = a ? e : o
      , i = et(n)
      , l = h.useCallback(c => {
        if (a) {
            const p = typeof c == "function" ? c(e) : c;
            p !== e && i(p)
        } else
            r(c)
    }
    , [a, e, r, i]);
    return [s, l]
}
function $y({defaultProp: e, onChange: t}) {
    const n = h.useState(e)
      , [o] = n
      , r = h.useRef(o)
      , a = et(t);
    return h.useEffect( () => {
        r.current !== o && (a(o),
        r.current = o)
    }
    , [o, r, a]),
    n
}
var Uy = "VisuallyHidden"
  , Ta = h.forwardRef( (e, t) => v.jsx(ee.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Ta.displayName = Uy;
var Wy = Ta
  , Uu = "ToastProvider"
  , [Wu,Vy,Hy] = zu("Toast")
  , [Gh,gE] = gi("Toast", [Hy])
  , [Gy,wi] = Gh(Uu)
  , Kh = e => {
    const {__scopeToast: t, label: n="Notification", duration: o=5e3, swipeDirection: r="right", swipeThreshold: a=50, children: s} = e
      , [i,l] = h.useState(null)
      , [c,d] = h.useState(0)
      , p = h.useRef(!1)
      , u = h.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Uu}\`. Expected non-empty \`string\`.`),
    v.jsx(Wu.Provider, {
        scope: t,
        children: v.jsx(Gy, {
            scope: t,
            label: n,
            duration: o,
            swipeDirection: r,
            swipeThreshold: a,
            toastCount: c,
            viewport: i,
            onViewportChange: l,
            onToastAdd: h.useCallback( () => d(y => y + 1), []),
            onToastRemove: h.useCallback( () => d(y => y - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: u,
            children: s
        })
    })
}
;
Kh.displayName = Uu;
var Qh = "ToastViewport"
  , Ky = ["F8"]
  , bc = "toast.viewportPause"
  , Tc = "toast.viewportResume"
  , Yh = h.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: o=Ky, label: r="Notifications ({hotkey})", ...a} = e
      , s = wi(Qh, n)
      , i = Vy(n)
      , l = h.useRef(null)
      , c = h.useRef(null)
      , d = h.useRef(null)
      , p = h.useRef(null)
      , u = ye(t, p, s.onViewportChange)
      , y = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = s.toastCount > 0;
    h.useEffect( () => {
        const w = g => {
            var x;
            o.length !== 0 && o.every(C => g[C] || g.code === C) && ((x = p.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [o]),
    h.useEffect( () => {
        const w = l.current
          , g = p.current;
        if (S && w && g) {
            const m = () => {
                if (!s.isClosePausedRef.current) {
                    const P = new CustomEvent(bc);
                    g.dispatchEvent(P),
                    s.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (s.isClosePausedRef.current) {
                    const P = new CustomEvent(Tc);
                    g.dispatchEvent(P),
                    s.isClosePausedRef.current = !1
                }
            }
              , C = P => {
                !w.contains(P.relatedTarget) && x()
            }
              , b = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", m),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", b),
            window.addEventListener("blur", m),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [S, s.isClosePausedRef]);
    const f = h.useCallback( ({tabbingDirection: w}) => {
        const m = i().map(x => {
            const C = x.ref.current
              , b = [C, ...s1(C)];
            return w === "forwards" ? b : b.reverse()
        }
        );
        return (w === "forwards" ? m.reverse() : m).flat()
    }
    , [i]);
    return h.useEffect( () => {
        const w = p.current;
        if (w) {
            const g = m => {
                var b, P, E;
                const x = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !x) {
                    const k = document.activeElement
                      , _ = m.shiftKey;
                    if (m.target === w && _) {
                        (b = c.current) == null || b.focus();
                        return
                    }
                    const O = f({
                        tabbingDirection: _ ? "backwards" : "forwards"
                    })
                      , W = O.findIndex(j => j === k);
                    vl(O.slice(W + 1)) ? m.preventDefault() : _ ? (P = c.current) == null || P.focus() : (E = d.current) == null || E.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
        }
    }
    , [i, f]),
    v.jsxs(My, {
        ref: l,
        role: "region",
        "aria-label": r.replace("{hotkey}", y),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && v.jsx(Ec, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = f({
                    tabbingDirection: "forwards"
                });
                vl(w)
            }
        }), v.jsx(Wu.Slot, {
            scope: n,
            children: v.jsx(ee.ol, {
                tabIndex: -1,
                ...a,
                ref: u
            })
        }), S && v.jsx(Ec, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = f({
                    tabbingDirection: "backwards"
                });
                vl(w)
            }
        })]
    })
}
);
Yh.displayName = Qh;
var Xh = "ToastFocusProxy"
  , Ec = h.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: o, ...r} = e
      , a = wi(Xh, n);
    return v.jsx(Ta, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...r,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var c;
            const i = s.relatedTarget;
            !((c = a.viewport) != null && c.contains(i)) && o()
        }
    })
}
);
Ec.displayName = Xh;
var Si = "Toast"
  , Qy = "toast.swipeStart"
  , Yy = "toast.swipeMove"
  , Xy = "toast.swipeCancel"
  , qy = "toast.swipeEnd"
  , qh = h.forwardRef( (e, t) => {
    const {forceMount: n, open: o, defaultOpen: r, onOpenChange: a, ...s} = e
      , [i=!0,l] = la({
        prop: o,
        defaultProp: r,
        onChange: a
    });
    return v.jsx(yi, {
        present: n || i,
        children: v.jsx(e1, {
            open: i,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: et(e.onPause),
            onResume: et(e.onResume),
            onSwipeStart: G(e.onSwipeStart, c => {
                c.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: G(e.onSwipeMove, c => {
                const {x: d, y: p} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "move"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
            }
            ),
            onSwipeCancel: G(e.onSwipeCancel, c => {
                c.currentTarget.setAttribute("data-swipe", "cancel"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: G(e.onSwipeEnd, c => {
                const {x: d, y: p} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "end"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                l(!1)
            }
            )
        })
    })
}
);
qh.displayName = Si;
var [Zy,Jy] = Gh(Si, {
    onClose() {}
})
  , e1 = h.forwardRef( (e, t) => {
    const {__scopeToast: n, type: o="foreground", duration: r, open: a, onClose: s, onEscapeKeyDown: i, onPause: l, onResume: c, onSwipeStart: d, onSwipeMove: p, onSwipeCancel: u, onSwipeEnd: y, ...S} = e
      , f = wi(Si, n)
      , [w,g] = h.useState(null)
      , m = ye(t, j => g(j))
      , x = h.useRef(null)
      , C = h.useRef(null)
      , b = r || f.duration
      , P = h.useRef(0)
      , E = h.useRef(b)
      , k = h.useRef(0)
      , {onToastAdd: _, onToastRemove: I} = f
      , z = et( () => {
        var V;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((V = f.viewport) == null || V.focus()),
        s()
    }
    )
      , O = h.useCallback(j => {
        !j || j === 1 / 0 || (window.clearTimeout(k.current),
        P.current = new Date().getTime(),
        k.current = window.setTimeout(z, j))
    }
    , [z]);
    h.useEffect( () => {
        const j = f.viewport;
        if (j) {
            const V = () => {
                O(E.current),
                c == null || c()
            }
              , M = () => {
                const H = new Date().getTime() - P.current;
                E.current = E.current - H,
                window.clearTimeout(k.current),
                l == null || l()
            }
            ;
            return j.addEventListener(bc, M),
            j.addEventListener(Tc, V),
            () => {
                j.removeEventListener(bc, M),
                j.removeEventListener(Tc, V)
            }
        }
    }
    , [f.viewport, b, l, c, O]),
    h.useEffect( () => {
        a && !f.isClosePausedRef.current && O(b)
    }
    , [a, b, f.isClosePausedRef, O]),
    h.useEffect( () => (_(),
    () => I()), [_, I]);
    const W = h.useMemo( () => w ? rv(w) : null, [w]);
    return f.viewport ? v.jsxs(v.Fragment, {
        children: [W && v.jsx(t1, {
            __scopeToast: n,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), v.jsx(Zy, {
            scope: n,
            onClose: z,
            children: vo.createPortal(v.jsx(Wu.ItemSlot, {
                scope: n,
                children: v.jsx(Oy, {
                    asChild: !0,
                    onEscapeKeyDown: G(i, () => {
                        f.isFocusedToastEscapeKeyDownRef.current || z(),
                        f.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: v.jsx(ee.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": a ? "open" : "closed",
                        "data-swipe-direction": f.swipeDirection,
                        ...S,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: G(e.onKeyDown, j => {
                            j.key === "Escape" && (i == null || i(j.nativeEvent),
                            j.nativeEvent.defaultPrevented || (f.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: G(e.onPointerDown, j => {
                            j.button === 0 && (x.current = {
                                x: j.clientX,
                                y: j.clientY
                            })
                        }
                        ),
                        onPointerMove: G(e.onPointerMove, j => {
                            if (!x.current)
                                return;
                            const V = j.clientX - x.current.x
                              , M = j.clientY - x.current.y
                              , H = !!C.current
                              , T = ["left", "right"].includes(f.swipeDirection)
                              , A = ["left", "up"].includes(f.swipeDirection) ? Math.min : Math.max
                              , F = T ? A(0, V) : 0
                              , B = T ? 0 : A(0, M)
                              , $ = j.pointerType === "touch" ? 10 : 2
                              , X = {
                                x: F,
                                y: B
                            }
                              , re = {
                                originalEvent: j,
                                delta: X
                            };
                            H ? (C.current = X,
                            Xa(Yy, p, re, {
                                discrete: !1
                            })) : Pp(X, f.swipeDirection, $) ? (C.current = X,
                            Xa(Qy, d, re, {
                                discrete: !1
                            }),
                            j.target.setPointerCapture(j.pointerId)) : (Math.abs(V) > $ || Math.abs(M) > $) && (x.current = null)
                        }
                        ),
                        onPointerUp: G(e.onPointerUp, j => {
                            const V = C.current
                              , M = j.target;
                            if (M.hasPointerCapture(j.pointerId) && M.releasePointerCapture(j.pointerId),
                            C.current = null,
                            x.current = null,
                            V) {
                                const H = j.currentTarget
                                  , T = {
                                    originalEvent: j,
                                    delta: V
                                };
                                Pp(V, f.swipeDirection, f.swipeThreshold) ? Xa(qy, y, T, {
                                    discrete: !0
                                }) : Xa(Xy, u, T, {
                                    discrete: !0
                                }),
                                H.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), f.viewport)
        })]
    }) : null
}
)
  , t1 = e => {
    const {__scopeToast: t, children: n, ...o} = e
      , r = wi(Si, t)
      , [a,s] = h.useState(!1)
      , [i,l] = h.useState(!1);
    return r1( () => s(!0)),
    h.useEffect( () => {
        const c = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(c)
    }
    , []),
    i ? null : v.jsx($u, {
        asChild: !0,
        children: v.jsx(Ta, {
            ...o,
            children: a && v.jsxs(v.Fragment, {
                children: [r.label, " ", n]
            })
        })
    })
}
  , n1 = "ToastTitle"
  , Zh = h.forwardRef( (e, t) => {
    const {__scopeToast: n, ...o} = e;
    return v.jsx(ee.div, {
        ...o,
        ref: t
    })
}
);
Zh.displayName = n1;
var o1 = "ToastDescription"
  , Jh = h.forwardRef( (e, t) => {
    const {__scopeToast: n, ...o} = e;
    return v.jsx(ee.div, {
        ...o,
        ref: t
    })
}
);
Jh.displayName = o1;
var ev = "ToastAction"
  , tv = h.forwardRef( (e, t) => {
    const {altText: n, ...o} = e;
    return n.trim() ? v.jsx(ov, {
        altText: n,
        asChild: !0,
        children: v.jsx(Vu, {
            ...o,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${ev}\`. Expected non-empty \`string\`.`),
    null)
}
);
tv.displayName = ev;
var nv = "ToastClose"
  , Vu = h.forwardRef( (e, t) => {
    const {__scopeToast: n, ...o} = e
      , r = Jy(nv, n);
    return v.jsx(ov, {
        asChild: !0,
        children: v.jsx(ee.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: G(e.onClick, r.onClose)
        })
    })
}
);
Vu.displayName = nv;
var ov = h.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: o, ...r} = e;
    return v.jsx(ee.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...r,
        ref: t
    })
}
);
function rv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(o => {
        if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent),
        a1(o)) {
            const r = o.ariaHidden || o.hidden || o.style.display === "none"
              , a = o.dataset.radixToastAnnounceExclude === "";
            if (!r)
                if (a) {
                    const s = o.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...rv(o))
        }
    }
    ),
    t
}
function Xa(e, t, n, {discrete: o}) {
    const r = n.originalEvent.currentTarget
      , a = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && r.addEventListener(e, t, {
        once: !0
    }),
    o ? Uh(r, a) : r.dispatchEvent(a)
}
var Pp = (e, t, n=0) => {
    const o = Math.abs(e.x)
      , r = Math.abs(e.y)
      , a = o > r;
    return t === "left" || t === "right" ? a && o > n : !a && r > n
}
;
function r1(e= () => {}
) {
    const t = et(e);
    ze( () => {
        let n = 0
          , o = 0;
        return n = window.requestAnimationFrame( () => o = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(o)
        }
    }
    , [t])
}
function a1(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function s1(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: o => {
            const r = o.tagName === "INPUT" && o.type === "hidden";
            return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function vl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var i1 = Kh
  , av = Yh
  , sv = qh
  , iv = Zh
  , lv = Jh
  , cv = tv
  , uv = Vu;
function dv(e) {
    var t, n, o = "";
    if (typeof e == "string" || typeof e == "number")
        o += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var r = e.length;
            for (t = 0; t < r; t++)
                e[t] && (n = dv(e[t])) && (o && (o += " "),
                o += n)
        } else
            for (n in e)
                e[n] && (o && (o += " "),
                o += n);
    return o
}
function pv() {
    for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
        (e = arguments[n]) && (t = dv(e)) && (o && (o += " "),
        o += t);
    return o
}
const kp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Np = pv
  , fv = (e, t) => n => {
    var o;
    if ((t == null ? void 0 : t.variants) == null)
        return Np(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: r, defaultVariants: a} = t
      , s = Object.keys(r).map(c => {
        const d = n == null ? void 0 : n[c]
          , p = a == null ? void 0 : a[c];
        if (d === null)
            return null;
        const u = kp(d) || kp(p);
        return r[c][u]
    }
    )
      , i = n && Object.entries(n).reduce( (c, d) => {
        let[p,u] = d;
        return u === void 0 || (c[p] = u),
        c
    }
    , {})
      , l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce( (c, d) => {
        let {class: p, className: u, ...y} = d;
        return Object.entries(y).every(S => {
            let[f,w] = S;
            return Array.isArray(w) ? w.includes({
                ...a,
                ...i
            }[f]) : {
                ...a,
                ...i
            }[f] === w
        }
        ) ? [...c, p, u] : c
    }
    , []);
    return Np(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , mv = (...e) => e.filter( (t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var c1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = h.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: o, className: r="", children: a, iconNode: s, ...i}, l) => h.createElement("svg", {
    ref: l,
    ...c1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: o ? Number(n) * 24 / Number(t) : n,
    className: mv("lucide", r),
    ...i
}, [...s.map( ([c,d]) => h.createElement(c, d)), ...Array.isArray(a) ? a : [a]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = (e, t) => {
    const n = h.forwardRef( ({className: o, ...r}, a) => h.createElement(u1, {
        ref: a,
        iconNode: t,
        className: mv(`lucide-${l1(e)}`, o),
        ...r
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = St("Car", [["path", {
    d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
    key: "5owen"
}], ["circle", {
    cx: "7",
    cy: "17",
    r: "2",
    key: "u2ysq9"
}], ["path", {
    d: "M9 17h6",
    key: "r8uit2"
}], ["circle", {
    cx: "17",
    cy: "17",
    r: "2",
    key: "axvx0g"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = St("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hv = St("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = St("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = St("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = St("Flag", [["path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
    key: "i9b6wo"
}], ["line", {
    x1: "4",
    x2: "4",
    y1: "22",
    y2: "15",
    key: "1cm3nv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = St("Scale", [["path", {
    d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "7g6ntu"
}], ["path", {
    d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "ijws7r"
}], ["path", {
    d: "M7 21h10",
    key: "1b0cd5"
}], ["path", {
    d: "M12 3v18",
    key: "108xh3"
}], ["path", {
    d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
    key: "3gwbw2"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = St("Timer", [["line", {
    x1: "10",
    x2: "14",
    y1: "2",
    y2: "2",
    key: "14vaq8"
}], ["line", {
    x1: "12",
    x2: "15",
    y1: "14",
    y2: "11",
    key: "17fdiu"
}], ["circle", {
    cx: "12",
    cy: "14",
    r: "8",
    key: "1e1u0o"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = St("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = St("Wrench", [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = St("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = St("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Hu = "-"
  , g1 = e => {
    const t = y1(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: o} = e;
    return {
        getClassGroupId: s => {
            const i = s.split(Hu);
            return i[0] === "" && i.length !== 1 && i.shift(),
            vv(i, t) || x1(s)
        }
        ,
        getConflictingClassGroupIds: (s, i) => {
            const l = n[s] || [];
            return i && o[s] ? [...l, ...o[s]] : l
        }
    }
}
  , vv = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , o = t.nextPart.get(n)
      , r = o ? vv(e.slice(1), o) : void 0;
    if (r)
        return r;
    if (t.validators.length === 0)
        return;
    const a = e.join(Hu);
    return (s = t.validators.find( ({validator: i}) => i(a))) == null ? void 0 : s.classGroupId
}
  , Ap = /^\[(.+)\]$/
  , x1 = e => {
    if (Ap.test(e)) {
        const t = Ap.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , y1 = e => {
    const {theme: t, prefix: n} = e
      , o = {
        nextPart: new Map,
        validators: []
    };
    return S1(Object.entries(e.classGroups), n).forEach( ([a,s]) => {
        kc(s, o, a, t)
    }
    ),
    o
}
  , kc = (e, t, n, o) => {
    e.forEach(r => {
        if (typeof r == "string") {
            const a = r === "" ? t : Dp(t, r);
            a.classGroupId = n;
            return
        }
        if (typeof r == "function") {
            if (w1(r)) {
                kc(r(o), t, n, o);
                return
            }
            t.validators.push({
                validator: r,
                classGroupId: n
            });
            return
        }
        Object.entries(r).forEach( ([a,s]) => {
            kc(s, Dp(t, a), n, o)
        }
        )
    }
    )
}
  , Dp = (e, t) => {
    let n = e;
    return t.split(Hu).forEach(o => {
        n.nextPart.has(o) || n.nextPart.set(o, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(o)
    }
    ),
    n
}
  , w1 = e => e.isThemeGetter
  , S1 = (e, t) => t ? e.map( ([n,o]) => {
    const r = o.map(a => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map( ([s,i]) => [t + s, i])) : a);
    return [n, r]
}
) : e
  , C1 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , o = new Map;
    const r = (a, s) => {
        n.set(a, s),
        t++,
        t > e && (t = 0,
        o = n,
        n = new Map)
    }
    ;
    return {
        get(a) {
            let s = n.get(a);
            if (s !== void 0)
                return s;
            if ((s = o.get(a)) !== void 0)
                return r(a, s),
                s
        },
        set(a, s) {
            n.has(a) ? n.set(a, s) : r(a, s)
        }
    }
}
  , gv = "!"
  , b1 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , o = t.length === 1
      , r = t[0]
      , a = t.length
      , s = i => {
        const l = [];
        let c = 0, d = 0, p;
        for (let w = 0; w < i.length; w++) {
            let g = i[w];
            if (c === 0) {
                if (g === r && (o || i.slice(w, w + a) === t)) {
                    l.push(i.slice(d, w)),
                    d = w + a;
                    continue
                }
                if (g === "/") {
                    p = w;
                    continue
                }
            }
            g === "[" ? c++ : g === "]" && c--
        }
        const u = l.length === 0 ? i : i.substring(d)
          , y = u.startsWith(gv)
          , S = y ? u.substring(1) : u
          , f = p && p > d ? p - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: y,
            baseClassName: S,
            maybePostfixModifierPosition: f
        }
    }
    ;
    return n ? i => n({
        className: i,
        parseClassName: s
    }) : s
}
  , T1 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(o => {
        o[0] === "[" ? (t.push(...n.sort(), o),
        n = []) : n.push(o)
    }
    ),
    t.push(...n.sort()),
    t
}
  , E1 = e => ({
    cache: C1(e.cacheSize),
    parseClassName: b1(e),
    ...g1(e)
})
  , P1 = /\s+/
  , k1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: o, getConflictingClassGroupIds: r} = t
      , a = []
      , s = e.trim().split(P1);
    let i = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
        const c = s[l]
          , {modifiers: d, hasImportantModifier: p, baseClassName: u, maybePostfixModifierPosition: y} = n(c);
        let S = !!y
          , f = o(S ? u.substring(0, y) : u);
        if (!f) {
            if (!S) {
                i = c + (i.length > 0 ? " " + i : i);
                continue
            }
            if (f = o(u),
            !f) {
                i = c + (i.length > 0 ? " " + i : i);
                continue
            }
            S = !1
        }
        const w = T1(d).join(":")
          , g = p ? w + gv : w
          , m = g + f;
        if (a.includes(m))
            continue;
        a.push(m);
        const x = r(f, S);
        for (let C = 0; C < x.length; ++C) {
            const b = x[C];
            a.push(g + b)
        }
        i = c + (i.length > 0 ? " " + i : i)
    }
    return i
}
;
function N1() {
    let e = 0, t, n, o = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = xv(t)) && (o && (o += " "),
        o += n);
    return o
}
const xv = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let o = 0; o < e.length; o++)
        e[o] && (t = xv(e[o])) && (n && (n += " "),
        n += t);
    return n
}
;
function R1(e, ...t) {
    let n, o, r, a = s;
    function s(l) {
        const c = t.reduce( (d, p) => p(d), e());
        return n = E1(c),
        o = n.cache.get,
        r = n.cache.set,
        a = i,
        i(l)
    }
    function i(l) {
        const c = o(l);
        if (c)
            return c;
        const d = k1(l, n);
        return r(l, d),
        d
    }
    return function() {
        return a(N1.apply(null, arguments))
    }
}
const pe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , yv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , A1 = /^\d+\/\d+$/
  , D1 = new Set(["px", "full", "screen"])
  , I1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , j1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , _1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , O1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , M1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Kt = e => Uo(e) || D1.has(e) || A1.test(e)
  , dn = e => mr(e, "length", V1)
  , Uo = e => !!e && !Number.isNaN(Number(e))
  , gl = e => mr(e, "number", Uo)
  , Pr = e => !!e && Number.isInteger(Number(e))
  , B1 = e => e.endsWith("%") && Uo(e.slice(0, -1))
  , Q = e => yv.test(e)
  , pn = e => I1.test(e)
  , L1 = new Set(["length", "size", "percentage"])
  , F1 = e => mr(e, L1, wv)
  , z1 = e => mr(e, "position", wv)
  , $1 = new Set(["image", "url"])
  , U1 = e => mr(e, $1, G1)
  , W1 = e => mr(e, "", H1)
  , kr = () => !0
  , mr = (e, t, n) => {
    const o = yv.exec(e);
    return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1
}
  , V1 = e => j1.test(e) && !_1.test(e)
  , wv = () => !1
  , H1 = e => O1.test(e)
  , G1 = e => M1.test(e)
  , K1 = () => {
    const e = pe("colors")
      , t = pe("spacing")
      , n = pe("blur")
      , o = pe("brightness")
      , r = pe("borderColor")
      , a = pe("borderRadius")
      , s = pe("borderSpacing")
      , i = pe("borderWidth")
      , l = pe("contrast")
      , c = pe("grayscale")
      , d = pe("hueRotate")
      , p = pe("invert")
      , u = pe("gap")
      , y = pe("gradientColorStops")
      , S = pe("gradientColorStopPositions")
      , f = pe("inset")
      , w = pe("margin")
      , g = pe("opacity")
      , m = pe("padding")
      , x = pe("saturate")
      , C = pe("scale")
      , b = pe("sepia")
      , P = pe("skew")
      , E = pe("space")
      , k = pe("translate")
      , _ = () => ["auto", "contain", "none"]
      , I = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", Q, t]
      , O = () => [Q, t]
      , W = () => ["", Kt, dn]
      , j = () => ["auto", Uo, Q]
      , V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , M = () => ["solid", "dashed", "dotted", "double", "none"]
      , H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", Q]
      , F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , B = () => [Uo, Q];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [kr],
            spacing: [Kt, dn],
            blur: ["none", "", pn, Q],
            brightness: B(),
            borderColor: [e],
            borderRadius: ["none", "", "full", pn, Q],
            borderSpacing: O(),
            borderWidth: W(),
            contrast: B(),
            grayscale: A(),
            hueRotate: B(),
            invert: A(),
            gap: O(),
            gradientColorStops: [e],
            gradientColorStopPositions: [B1, dn],
            inset: z(),
            margin: z(),
            opacity: B(),
            padding: O(),
            saturate: B(),
            scale: B(),
            sepia: A(),
            skew: B(),
            space: O(),
            translate: O()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Q]
            }],
            container: ["container"],
            columns: [{
                columns: [pn]
            }],
            "break-after": [{
                "break-after": F()
            }],
            "break-before": [{
                "break-before": F()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...V(), Q]
            }],
            overflow: [{
                overflow: I()
            }],
            "overflow-x": [{
                "overflow-x": I()
            }],
            "overflow-y": [{
                "overflow-y": I()
            }],
            overscroll: [{
                overscroll: _()
            }],
            "overscroll-x": [{
                "overscroll-x": _()
            }],
            "overscroll-y": [{
                "overscroll-y": _()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [f]
            }],
            "inset-x": [{
                "inset-x": [f]
            }],
            "inset-y": [{
                "inset-y": [f]
            }],
            start: [{
                start: [f]
            }],
            end: [{
                end: [f]
            }],
            top: [{
                top: [f]
            }],
            right: [{
                right: [f]
            }],
            bottom: [{
                bottom: [f]
            }],
            left: [{
                left: [f]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Pr, Q]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Q]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", Pr, Q]
            }],
            "grid-cols": [{
                "grid-cols": [kr]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Pr, Q]
                }, Q]
            }],
            "col-start": [{
                "col-start": j()
            }],
            "col-end": [{
                "col-end": j()
            }],
            "grid-rows": [{
                "grid-rows": [kr]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Pr, Q]
                }, Q]
            }],
            "row-start": [{
                "row-start": j()
            }],
            "row-end": [{
                "row-end": j()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Q]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Q]
            }],
            gap: [{
                gap: [u]
            }],
            "gap-x": [{
                "gap-x": [u]
            }],
            "gap-y": [{
                "gap-y": [u]
            }],
            "justify-content": [{
                justify: ["normal", ...T()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...T(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...T(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
            }],
            "min-w": [{
                "min-w": [Q, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [pn]
                }, pn]
            }],
            h: [{
                h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Q, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", pn, dn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", gl]
            }],
            "font-family": [{
                font: [kr]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Uo, gl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Kt, Q]
            }],
            "list-image": [{
                "list-image": ["none", Q]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Q]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...M(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Kt, dn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Kt, Q]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: O()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Q]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...V(), z1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", F1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, U1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [y]
            }],
            "gradient-via": [{
                via: [y]
            }],
            "gradient-to": [{
                to: [y]
            }],
            rounded: [{
                rounded: [a]
            }],
            "rounded-s": [{
                "rounded-s": [a]
            }],
            "rounded-e": [{
                "rounded-e": [a]
            }],
            "rounded-t": [{
                "rounded-t": [a]
            }],
            "rounded-r": [{
                "rounded-r": [a]
            }],
            "rounded-b": [{
                "rounded-b": [a]
            }],
            "rounded-l": [{
                "rounded-l": [a]
            }],
            "rounded-ss": [{
                "rounded-ss": [a]
            }],
            "rounded-se": [{
                "rounded-se": [a]
            }],
            "rounded-ee": [{
                "rounded-ee": [a]
            }],
            "rounded-es": [{
                "rounded-es": [a]
            }],
            "rounded-tl": [{
                "rounded-tl": [a]
            }],
            "rounded-tr": [{
                "rounded-tr": [a]
            }],
            "rounded-br": [{
                "rounded-br": [a]
            }],
            "rounded-bl": [{
                "rounded-bl": [a]
            }],
            "border-w": [{
                border: [i]
            }],
            "border-w-x": [{
                "border-x": [i]
            }],
            "border-w-y": [{
                "border-y": [i]
            }],
            "border-w-s": [{
                "border-s": [i]
            }],
            "border-w-e": [{
                "border-e": [i]
            }],
            "border-w-t": [{
                "border-t": [i]
            }],
            "border-w-r": [{
                "border-r": [i]
            }],
            "border-w-b": [{
                "border-b": [i]
            }],
            "border-w-l": [{
                "border-l": [i]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...M(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [i]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [i]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: M()
            }],
            "border-color": [{
                border: [r]
            }],
            "border-color-x": [{
                "border-x": [r]
            }],
            "border-color-y": [{
                "border-y": [r]
            }],
            "border-color-s": [{
                "border-s": [r]
            }],
            "border-color-e": [{
                "border-e": [r]
            }],
            "border-color-t": [{
                "border-t": [r]
            }],
            "border-color-r": [{
                "border-r": [r]
            }],
            "border-color-b": [{
                "border-b": [r]
            }],
            "border-color-l": [{
                "border-l": [r]
            }],
            "divide-color": [{
                divide: [r]
            }],
            "outline-style": [{
                outline: ["", ...M()]
            }],
            "outline-offset": [{
                "outline-offset": [Kt, Q]
            }],
            "outline-w": [{
                outline: [Kt, dn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [Kt, dn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", pn, W1]
            }],
            "shadow-color": [{
                shadow: [kr]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...H(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": H()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [o]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", pn, Q]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [o]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
            }],
            duration: [{
                duration: B()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Q]
            }],
            delay: [{
                delay: B()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Q]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [Pr, Q]
            }],
            "translate-x": [{
                "translate-x": [k]
            }],
            "translate-y": [{
                "translate-y": [k]
            }],
            "skew-x": [{
                "skew-x": [P]
            }],
            "skew-y": [{
                "skew-y": [P]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": O()
            }],
            "scroll-mx": [{
                "scroll-mx": O()
            }],
            "scroll-my": [{
                "scroll-my": O()
            }],
            "scroll-ms": [{
                "scroll-ms": O()
            }],
            "scroll-me": [{
                "scroll-me": O()
            }],
            "scroll-mt": [{
                "scroll-mt": O()
            }],
            "scroll-mr": [{
                "scroll-mr": O()
            }],
            "scroll-mb": [{
                "scroll-mb": O()
            }],
            "scroll-ml": [{
                "scroll-ml": O()
            }],
            "scroll-p": [{
                "scroll-p": O()
            }],
            "scroll-px": [{
                "scroll-px": O()
            }],
            "scroll-py": [{
                "scroll-py": O()
            }],
            "scroll-ps": [{
                "scroll-ps": O()
            }],
            "scroll-pe": [{
                "scroll-pe": O()
            }],
            "scroll-pt": [{
                "scroll-pt": O()
            }],
            "scroll-pr": [{
                "scroll-pr": O()
            }],
            "scroll-pb": [{
                "scroll-pb": O()
            }],
            "scroll-pl": [{
                "scroll-pl": O()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Q]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Kt, dn, gl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Q1 = R1(K1);
function ue(...e) {
    return Q1(pv(e))
}
const Y1 = i1
  , Sv = h.forwardRef( ({className: e, ...t}, n) => v.jsx(av, {
    "data-lov-id": "src/components/ui/toast.tsx:14:2",
    "data-lov-name": "ToastPrimitives.Viewport",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "14",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Viewport",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Sv.displayName = av.displayName;
const X1 = fv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Cv = h.forwardRef( ({className: e, variant: t, ...n}, o) => v.jsx(sv, {
    "data-lov-id": "src/components/ui/toast.tsx:47:4",
    "data-lov-name": "ToastPrimitives.Root",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "47",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Root",
    "data-component-content": "%7B%7D",
    ref: o,
    className: ue(X1({
        variant: t
    }), e),
    ...n
}));
Cv.displayName = sv.displayName;
const q1 = h.forwardRef( ({className: e, ...t}, n) => v.jsx(cv, {
    "data-lov-id": "src/components/ui/toast.tsx:60:2",
    "data-lov-name": "ToastPrimitives.Action",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "60",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Action",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
q1.displayName = cv.displayName;
const bv = h.forwardRef( ({className: e, ...t}, n) => v.jsx(uv, {
    "data-lov-id": "src/components/ui/toast.tsx:75:2",
    "data-lov-name": "ToastPrimitives.Close",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "75",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Close",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: v.jsx(h1, {
        "data-lov-id": "src/components/ui/toast.tsx:84:4",
        "data-lov-name": "X",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "84",
        "data-component-file": "toast.tsx",
        "data-component-name": "X",
        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
        className: "h-4 w-4"
    })
}));
bv.displayName = uv.displayName;
const Tv = h.forwardRef( ({className: e, ...t}, n) => v.jsx(iv, {
    "data-lov-id": "src/components/ui/toast.tsx:93:2",
    "data-lov-name": "ToastPrimitives.Title",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "93",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Title",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("text-sm font-semibold", e),
    ...t
}));
Tv.displayName = iv.displayName;
const Ev = h.forwardRef( ({className: e, ...t}, n) => v.jsx(lv, {
    "data-lov-id": "src/components/ui/toast.tsx:105:2",
    "data-lov-name": "ToastPrimitives.Description",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "105",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Description",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("text-sm opacity-90", e),
    ...t
}));
Ev.displayName = lv.displayName;
function Z1() {
    const {toasts: e} = yy();
    return v.jsxs(Y1, {
        "data-lov-id": "src/components/ui/toaster.tsx:15:4",
        "data-lov-name": "ToastProvider",
        "data-component-path": "src/components/ui/toaster.tsx",
        "data-component-line": "15",
        "data-component-file": "toaster.tsx",
        "data-component-name": "ToastProvider",
        "data-component-content": "%7B%7D",
        children: [e.map(function({id: t, title: n, description: o, action: r, ...a}) {
            return v.jsxs(Cv, {
                "data-lov-id": "src/components/ui/toaster.tsx:18:10",
                "data-lov-name": "Toast",
                "data-component-path": "src/components/ui/toaster.tsx",
                "data-component-line": "18",
                "data-component-file": "toaster.tsx",
                "data-component-name": "Toast",
                "data-component-content": "%7B%7D",
                ...a,
                children: [v.jsxs("div", {
                    "data-lov-id": "src/components/ui/toaster.tsx:19:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ui/toaster.tsx",
                    "data-component-line": "19",
                    "data-component-file": "toaster.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20gap-1%22%7D",
                    className: "grid gap-1",
                    children: [n && v.jsx(Tv, {
                        "data-lov-id": "src/components/ui/toaster.tsx:20:24",
                        "data-lov-name": "ToastTitle",
                        "data-component-path": "src/components/ui/toaster.tsx",
                        "data-component-line": "20",
                        "data-component-file": "toaster.tsx",
                        "data-component-name": "ToastTitle",
                        "data-component-content": "%7B%7D",
                        children: n
                    }), o && v.jsx(Ev, {
                        "data-lov-id": "src/components/ui/toaster.tsx:22:16",
                        "data-lov-name": "ToastDescription",
                        "data-component-path": "src/components/ui/toaster.tsx",
                        "data-component-line": "22",
                        "data-component-file": "toaster.tsx",
                        "data-component-name": "ToastDescription",
                        "data-component-content": "%7B%7D",
                        children: o
                    })]
                }), r, v.jsx(bv, {
                    "data-lov-id": "src/components/ui/toaster.tsx:26:12",
                    "data-lov-name": "ToastClose",
                    "data-component-path": "src/components/ui/toaster.tsx",
                    "data-component-line": "26",
                    "data-component-file": "toaster.tsx",
                    "data-component-name": "ToastClose",
                    "data-component-content": "%7B%7D"
                })]
            }, t)
        }), v.jsx(Sv, {
            "data-lov-id": "src/components/ui/toaster.tsx:30:6",
            "data-lov-name": "ToastViewport",
            "data-component-path": "src/components/ui/toaster.tsx",
            "data-component-line": "30",
            "data-component-file": "toaster.tsx",
            "data-component-name": "ToastViewport",
            "data-component-content": "%7B%7D"
        })]
    })
}
var Ip = ["light", "dark"]
  , J1 = "(prefers-color-scheme: dark)"
  , ew = h.createContext(void 0)
  , tw = {
    setTheme: e => {}
    ,
    themes: []
}
  , nw = () => {
    var e;
    return (e = h.useContext(ew)) != null ? e : tw
}
;
h.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: o, enableColorScheme: r, defaultTheme: a, value: s, attrs: i, nonce: l}) => {
    let c = a === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , p = r ? Ip.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , u = (S, f=!1, w=!0) => {
        let g = s ? s[S] : S
          , m = f ? S + "|| ''" : `'${g}'`
          , x = "";
        return r && w && !f && Ip.includes(S) && (x += `d.style.colorScheme = '${S}';`),
        n === "class" ? f || g ? x += `c.add(${m})` : x += "null" : g && (x += `d[s](n,${m})`),
        x
    }
      , y = e ? `!function(){${d}${u(e)}}()` : o ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${J1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${u(s ? "x[e]" : "e", !0)}}${c ? "" : "else{" + u(a, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${u(s ? "x[e]" : "e", !0)}}else{${u(a, !1, !1)};}${p}}catch(t){}}();`;
    return h.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: y
        }
    })
}
);
var ow = e => {
    switch (e) {
    case "success":
        return sw;
    case "info":
        return lw;
    case "warning":
        return iw;
    case "error":
        return cw;
    default:
        return null
    }
}
  , rw = Array(12).fill(0)
  , aw = ({visible: e}) => D.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, D.createElement("div", {
    className: "sonner-spinner"
}, rw.map( (t, n) => D.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , sw = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , iw = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , lw = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , cw = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , uw = () => {
    let[e,t] = D.useState(document.hidden);
    return D.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Nc = 1
  , dw = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...o} = e
              , r = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Nc++
              , a = this.toasts.find(i => i.id === r)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return a ? this.toasts = this.toasts.map(i => i.id === r ? (this.publish({
                ...i,
                ...e,
                id: r,
                title: n
            }),
            {
                ...i,
                ...e,
                id: r,
                dismissible: s,
                title: n
            }) : i) : this.addToast({
                title: n,
                ...o,
                dismissible: s,
                id: r
            }),
            r
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let o = e instanceof Promise ? e : e()
              , r = n !== void 0;
            return o.then(async a => {
                if (fw(a) && !a.ok) {
                    r = !1;
                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , i = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: i
                    })
                } else if (t.success !== void 0) {
                    r = !1;
                    let s = typeof t.success == "function" ? await t.success(a) : t.success
                      , i = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: s,
                        description: i
                    })
                }
            }
            ).catch(async a => {
                if (t.error !== void 0) {
                    r = !1;
                    let s = typeof t.error == "function" ? await t.error(a) : t.error
                      , i = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: i
                    })
                }
            }
            ).finally( () => {
                var a;
                r && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Nc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , rt = new dw
  , pw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Nc++;
    return rt.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , fw = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , mw = pw
  , hw = () => rt.toasts;
Object.assign(mw, {
    success: rt.success,
    info: rt.info,
    warning: rt.warning,
    error: rt.error,
    custom: rt.custom,
    message: rt.message,
    promise: rt.promise,
    dismiss: rt.dismiss,
    loading: rt.loading
}, {
    getHistory: hw
});
function vw(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , o = document.createElement("style");
    o.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o),
    o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
}
vw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function qa(e) {
    return e.label !== void 0
}
var gw = 3
  , xw = "32px"
  , yw = 4e3
  , ww = 356
  , Sw = 14
  , Cw = 20
  , bw = 200;
function Tw(...e) {
    return e.filter(Boolean).join(" ")
}
var Ew = e => {
    var t, n, o, r, a, s, i, l, c, d;
    let {invert: p, toast: u, unstyled: y, interacting: S, setHeights: f, visibleToasts: w, heights: g, index: m, toasts: x, expanded: C, removeToast: b, defaultRichColors: P, closeButton: E, style: k, cancelButtonStyle: _, actionButtonStyle: I, className: z="", descriptionClassName: O="", duration: W, position: j, gap: V, loadingIcon: M, expandByDefault: H, classNames: T, icons: A, closeButtonAriaLabel: F="Close toast", pauseWhenPageIsHidden: B, cn: $} = e
      , [X,re] = D.useState(!1)
      , [ke,Z] = D.useState(!1)
      , [U,oe] = D.useState(!1)
      , [we,te] = D.useState(!1)
      , [ae,ne] = D.useState(0)
      , [$e,nt] = D.useState(0)
      , ln = D.useRef(null)
      , ft = D.useRef(null)
      , Gn = m === 0
      , Li = m + 1 <= w
      , Ae = u.type
      , go = u.dismissible !== !1
      , M2 = u.className || ""
      , B2 = u.descriptionClassName || ""
      , Ra = D.useMemo( () => g.findIndex(K => K.toastId === u.id) || 0, [g, u.id])
      , L2 = D.useMemo( () => {
        var K;
        return (K = u.closeButton) != null ? K : E
    }
    , [u.closeButton, E])
      , ld = D.useMemo( () => u.duration || W || yw, [u.duration, W])
      , Fi = D.useRef(0)
      , xo = D.useRef(0)
      , cd = D.useRef(0)
      , yo = D.useRef(null)
      , [ud,F2] = j.split("-")
      , dd = D.useMemo( () => g.reduce( (K, de, le) => le >= Ra ? K : K + de.height, 0), [g, Ra])
      , pd = uw()
      , z2 = u.invert || p
      , zi = Ae === "loading";
    xo.current = D.useMemo( () => Ra * V + dd, [Ra, dd]),
    D.useEffect( () => {
        re(!0)
    }
    , []),
    D.useLayoutEffect( () => {
        if (!X)
            return;
        let K = ft.current
          , de = K.style.height;
        K.style.height = "auto";
        let le = K.getBoundingClientRect().height;
        K.style.height = de,
        nt(le),
        f(_t => _t.find(Ot => Ot.toastId === u.id) ? _t.map(Ot => Ot.toastId === u.id ? {
            ...Ot,
            height: le
        } : Ot) : [{
            toastId: u.id,
            height: le,
            position: u.position
        }, ..._t])
    }
    , [X, u.title, u.description, f, u.id]);
    let cn = D.useCallback( () => {
        Z(!0),
        ne(xo.current),
        f(K => K.filter(de => de.toastId !== u.id)),
        setTimeout( () => {
            b(u)
        }
        , bw)
    }
    , [u, b, f, xo]);
    D.useEffect( () => {
        if (u.promise && Ae === "loading" || u.duration === 1 / 0 || u.type === "loading")
            return;
        let K, de = ld;
        return C || S || B && pd ? ( () => {
            if (cd.current < Fi.current) {
                let le = new Date().getTime() - Fi.current;
                de = de - le
            }
            cd.current = new Date().getTime()
        }
        )() : de !== 1 / 0 && (Fi.current = new Date().getTime(),
        K = setTimeout( () => {
            var le;
            (le = u.onAutoClose) == null || le.call(u, u),
            cn()
        }
        , de)),
        () => clearTimeout(K)
    }
    , [C, S, H, u, ld, cn, u.promise, Ae, B, pd]),
    D.useEffect( () => {
        let K = ft.current;
        if (K) {
            let de = K.getBoundingClientRect().height;
            return nt(de),
            f(le => [{
                toastId: u.id,
                height: de,
                position: u.position
            }, ...le]),
            () => f(le => le.filter(_t => _t.toastId !== u.id))
        }
    }
    , [f, u.id]),
    D.useEffect( () => {
        u.delete && cn()
    }
    , [cn, u.delete]);
    function $2() {
        return A != null && A.loading ? D.createElement("div", {
            className: "sonner-loader",
            "data-visible": Ae === "loading"
        }, A.loading) : M ? D.createElement("div", {
            className: "sonner-loader",
            "data-visible": Ae === "loading"
        }, M) : D.createElement(aw, {
            visible: Ae === "loading"
        })
    }
    return D.createElement("li", {
        "aria-live": u.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: ft,
        className: $(z, M2, T == null ? void 0 : T.toast, (t = u == null ? void 0 : u.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[Ae], (n = u == null ? void 0 : u.classNames) == null ? void 0 : n[Ae]),
        "data-sonner-toast": "",
        "data-rich-colors": (o = u.richColors) != null ? o : P,
        "data-styled": !(u.jsx || u.unstyled || y),
        "data-mounted": X,
        "data-promise": !!u.promise,
        "data-removed": ke,
        "data-visible": Li,
        "data-y-position": ud,
        "data-x-position": F2,
        "data-index": m,
        "data-front": Gn,
        "data-swiping": U,
        "data-dismissible": go,
        "data-type": Ae,
        "data-invert": z2,
        "data-swipe-out": we,
        "data-expanded": !!(C || H && X),
        style: {
            "--index": m,
            "--toasts-before": m,
            "--z-index": x.length - m,
            "--offset": `${ke ? ae : xo.current}px`,
            "--initial-height": H ? "auto" : `${$e}px`,
            ...k,
            ...u.style
        },
        onPointerDown: K => {
            zi || !go || (ln.current = new Date,
            ne(xo.current),
            K.target.setPointerCapture(K.pointerId),
            K.target.tagName !== "BUTTON" && (oe(!0),
            yo.current = {
                x: K.clientX,
                y: K.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var K, de, le, _t;
            if (we || !go)
                return;
            yo.current = null;
            let Ot = Number(((K = ft.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , Aa = new Date().getTime() - ((de = ln.current) == null ? void 0 : de.getTime())
              , U2 = Math.abs(Ot) / Aa;
            if (Math.abs(Ot) >= Cw || U2 > .11) {
                ne(xo.current),
                (le = u.onDismiss) == null || le.call(u, u),
                cn(),
                te(!0);
                return
            }
            (_t = ft.current) == null || _t.style.setProperty("--swipe-amount", "0px"),
            oe(!1)
        }
        ,
        onPointerMove: K => {
            var de;
            if (!yo.current || !go)
                return;
            let le = K.clientY - yo.current.y
              , _t = K.clientX - yo.current.x
              , Ot = (ud === "top" ? Math.min : Math.max)(0, le)
              , Aa = K.pointerType === "touch" ? 10 : 2;
            Math.abs(Ot) > Aa ? (de = ft.current) == null || de.style.setProperty("--swipe-amount", `${le}px`) : Math.abs(_t) > Aa && (yo.current = null)
        }
    }, L2 && !u.jsx ? D.createElement("button", {
        "aria-label": F,
        "data-disabled": zi,
        "data-close-button": !0,
        onClick: zi || !go ? () => {}
        : () => {
            var K;
            cn(),
            (K = u.onDismiss) == null || K.call(u, u)
        }
        ,
        className: $(T == null ? void 0 : T.closeButton, (r = u == null ? void 0 : u.classNames) == null ? void 0 : r.closeButton)
    }, D.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, D.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), D.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, u.jsx || D.isValidElement(u.title) ? u.jsx || u.title : D.createElement(D.Fragment, null, Ae || u.icon || u.promise ? D.createElement("div", {
        "data-icon": "",
        className: $(T == null ? void 0 : T.icon, (a = u == null ? void 0 : u.classNames) == null ? void 0 : a.icon)
    }, u.promise || u.type === "loading" && !u.icon ? u.icon || $2() : null, u.type !== "loading" ? u.icon || (A == null ? void 0 : A[Ae]) || ow(Ae) : null) : null, D.createElement("div", {
        "data-content": "",
        className: $(T == null ? void 0 : T.content, (s = u == null ? void 0 : u.classNames) == null ? void 0 : s.content)
    }, D.createElement("div", {
        "data-title": "",
        className: $(T == null ? void 0 : T.title, (i = u == null ? void 0 : u.classNames) == null ? void 0 : i.title)
    }, u.title), u.description ? D.createElement("div", {
        "data-description": "",
        className: $(O, B2, T == null ? void 0 : T.description, (l = u == null ? void 0 : u.classNames) == null ? void 0 : l.description)
    }, u.description) : null), D.isValidElement(u.cancel) ? u.cancel : u.cancel && qa(u.cancel) ? D.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: u.cancelButtonStyle || _,
        onClick: K => {
            var de, le;
            qa(u.cancel) && go && ((le = (de = u.cancel).onClick) == null || le.call(de, K),
            cn())
        }
        ,
        className: $(T == null ? void 0 : T.cancelButton, (c = u == null ? void 0 : u.classNames) == null ? void 0 : c.cancelButton)
    }, u.cancel.label) : null, D.isValidElement(u.action) ? u.action : u.action && qa(u.action) ? D.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: u.actionButtonStyle || I,
        onClick: K => {
            var de, le;
            qa(u.action) && (K.defaultPrevented || ((le = (de = u.action).onClick) == null || le.call(de, K),
            cn()))
        }
        ,
        className: $(T == null ? void 0 : T.actionButton, (d = u == null ? void 0 : u.classNames) == null ? void 0 : d.actionButton)
    }, u.action.label) : null))
}
;
function jp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var Pw = e => {
    let {invert: t, position: n="bottom-right", hotkey: o=["altKey", "KeyT"], expand: r, closeButton: a, className: s, offset: i, theme: l="light", richColors: c, duration: d, style: p, visibleToasts: u=gw, toastOptions: y, dir: S=jp(), gap: f=Sw, loadingIcon: w, icons: g, containerAriaLabel: m="Notifications", pauseWhenPageIsHidden: x, cn: C=Tw} = e
      , [b,P] = D.useState([])
      , E = D.useMemo( () => Array.from(new Set([n].concat(b.filter(B => B.position).map(B => B.position)))), [b, n])
      , [k,_] = D.useState([])
      , [I,z] = D.useState(!1)
      , [O,W] = D.useState(!1)
      , [j,V] = D.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , M = D.useRef(null)
      , H = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = D.useRef(null)
      , A = D.useRef(!1)
      , F = D.useCallback(B => {
        var $;
        ($ = b.find(X => X.id === B.id)) != null && $.delete || rt.dismiss(B.id),
        P(X => X.filter( ({id: re}) => re !== B.id))
    }
    , [b]);
    return D.useEffect( () => rt.subscribe(B => {
        if (B.dismiss) {
            P($ => $.map(X => X.id === B.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            Lh.flushSync( () => {
                P($ => {
                    let X = $.findIndex(re => re.id === B.id);
                    return X !== -1 ? [...$.slice(0, X), {
                        ...$[X],
                        ...B
                    }, ...$.slice(X + 1)] : [B, ...$]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    D.useEffect( () => {
        if (l !== "system") {
            V(l);
            return
        }
        l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? V("dark") : V("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: B}) => {
            V(B ? "dark" : "light")
        }
        )
    }
    , [l]),
    D.useEffect( () => {
        b.length <= 1 && z(!1)
    }
    , [b]),
    D.useEffect( () => {
        let B = $ => {
            var X, re;
            o.every(ke => $[ke] || $.code === ke) && (z(!0),
            (X = M.current) == null || X.focus()),
            $.code === "Escape" && (document.activeElement === M.current || (re = M.current) != null && re.contains(document.activeElement)) && z(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [o]),
    D.useEffect( () => {
        if (M.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                A.current = !1)
            }
    }
    , [M.current]),
    b.length ? D.createElement("section", {
        "aria-label": `${m} ${H}`,
        tabIndex: -1
    }, E.map( (B, $) => {
        var X;
        let[re,ke] = B.split("-");
        return D.createElement("ol", {
            key: B,
            dir: S === "auto" ? jp() : S,
            tabIndex: -1,
            ref: M,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": j,
            "data-y-position": re,
            "data-x-position": ke,
            style: {
                "--front-toast-height": `${((X = k[0]) == null ? void 0 : X.height) || 0}px`,
                "--offset": typeof i == "number" ? `${i}px` : i || xw,
                "--width": `${ww}px`,
                "--gap": `${f}px`,
                ...p
            },
            onBlur: Z => {
                A.current && !Z.currentTarget.contains(Z.relatedTarget) && (A.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || A.current || (A.current = !0,
                T.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => z(!0),
            onMouseMove: () => z(!0),
            onMouseLeave: () => {
                O || z(!1)
            }
            ,
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || W(!0)
            }
            ,
            onPointerUp: () => W(!1)
        }, b.filter(Z => !Z.position && $ === 0 || Z.position === B).map( (Z, U) => {
            var oe, we;
            return D.createElement(Ew, {
                key: Z.id,
                icons: g,
                index: U,
                toast: Z,
                defaultRichColors: c,
                duration: (oe = y == null ? void 0 : y.duration) != null ? oe : d,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: t,
                visibleToasts: u,
                closeButton: (we = y == null ? void 0 : y.closeButton) != null ? we : a,
                interacting: O,
                position: B,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: F,
                toasts: b.filter(te => te.position == Z.position),
                heights: k.filter(te => te.position == Z.position),
                setHeights: _,
                expandByDefault: r,
                gap: f,
                loadingIcon: w,
                expanded: I,
                pauseWhenPageIsHidden: x,
                cn: C
            })
        }
        ))
    }
    )) : null
}
;
const kw = ({...e}) => {
    const {theme: t="system"} = nw();
    return v.jsx(Pw, {
        "data-lov-id": "src/components/ui/sonner.tsx:10:4",
        "data-lov-name": "Sonner",
        "data-component-path": "src/components/ui/sonner.tsx",
        "data-component-line": "10",
        "data-component-file": "sonner.tsx",
        "data-component-name": "Sonner",
        "data-component-content": "%7B%22className%22%3A%22toaster%20group%22%7D",
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var Nw = Of.useId || ( () => {}
)
  , Rw = 0;
function Ea(e) {
    const [t,n] = h.useState(Nw());
    return ze( () => {
        e || n(o => o ?? String(Rw++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const Aw = ["top", "right", "bottom", "left"]
  , Bn = Math.min
  , st = Math.max
  , Ks = Math.round
  , Za = Math.floor
  , Ln = e => ({
    x: e,
    y: e
})
  , Dw = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Iw = {
    start: "end",
    end: "start"
};
function Rc(e, t, n) {
    return st(e, Bn(t, n))
}
function rn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function an(e) {
    return e.split("-")[0]
}
function hr(e) {
    return e.split("-")[1]
}
function Gu(e) {
    return e === "x" ? "y" : "x"
}
function Ku(e) {
    return e === "y" ? "height" : "width"
}
function Fn(e) {
    return ["top", "bottom"].includes(an(e)) ? "y" : "x"
}
function Qu(e) {
    return Gu(Fn(e))
}
function jw(e, t, n) {
    n === void 0 && (n = !1);
    const o = hr(e)
      , r = Qu(e)
      , a = Ku(r);
    let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (s = Qs(s)),
    [s, Qs(s)]
}
function _w(e) {
    const t = Qs(e);
    return [Ac(e), t, Ac(t)]
}
function Ac(e) {
    return e.replace(/start|end/g, t => Iw[t])
}
function Ow(e, t, n) {
    const o = ["left", "right"]
      , r = ["right", "left"]
      , a = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
        return t ? a : s;
    default:
        return []
    }
}
function Mw(e, t, n, o) {
    const r = hr(e);
    let a = Ow(an(e), n === "start", o);
    return r && (a = a.map(s => s + "-" + r),
    t && (a = a.concat(a.map(Ac)))),
    a
}
function Qs(e) {
    return e.replace(/left|right|bottom|top/g, t => Dw[t])
}
function Bw(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Pv(e) {
    return typeof e != "number" ? Bw(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ys(e) {
    const {x: t, y: n, width: o, height: r} = e;
    return {
        width: o,
        height: r,
        top: n,
        left: t,
        right: t + o,
        bottom: n + r,
        x: t,
        y: n
    }
}
function _p(e, t, n) {
    let {reference: o, floating: r} = e;
    const a = Fn(t)
      , s = Qu(t)
      , i = Ku(s)
      , l = an(t)
      , c = a === "y"
      , d = o.x + o.width / 2 - r.width / 2
      , p = o.y + o.height / 2 - r.height / 2
      , u = o[i] / 2 - r[i] / 2;
    let y;
    switch (l) {
    case "top":
        y = {
            x: d,
            y: o.y - r.height
        };
        break;
    case "bottom":
        y = {
            x: d,
            y: o.y + o.height
        };
        break;
    case "right":
        y = {
            x: o.x + o.width,
            y: p
        };
        break;
    case "left":
        y = {
            x: o.x - r.width,
            y: p
        };
        break;
    default:
        y = {
            x: o.x,
            y: o.y
        }
    }
    switch (hr(t)) {
    case "start":
        y[s] -= u * (n && c ? -1 : 1);
        break;
    case "end":
        y[s] += u * (n && c ? -1 : 1);
        break
    }
    return y
}
const Lw = async (e, t, n) => {
    const {placement: o="bottom", strategy: r="absolute", middleware: a=[], platform: s} = n
      , i = a.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: r
    })
      , {x: d, y: p} = _p(c, o, l)
      , u = o
      , y = {}
      , S = 0;
    for (let f = 0; f < i.length; f++) {
        const {name: w, fn: g} = i[f]
          , {x: m, y: x, data: C, reset: b} = await g({
            x: d,
            y: p,
            initialPlacement: o,
            placement: u,
            strategy: r,
            middlewareData: y,
            rects: c,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = m ?? d,
        p = x ?? p,
        y = {
            ...y,
            [w]: {
                ...y[w],
                ...C
            }
        },
        b && S <= 50 && (S++,
        typeof b == "object" && (b.placement && (u = b.placement),
        b.rects && (c = b.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : b.rects),
        {x: d, y: p} = _p(c, u, l)),
        f = -1)
    }
    return {
        x: d,
        y: p,
        placement: u,
        strategy: r,
        middlewareData: y
    }
}
;
async function ua(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: o, y: r, platform: a, rects: s, elements: i, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: d="viewport", elementContext: p="floating", altBoundary: u=!1, padding: y=0} = rn(t, e)
      , S = Pv(y)
      , w = i[u ? p === "floating" ? "reference" : "floating" : p]
      , g = Ys(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
        boundary: c,
        rootBoundary: d,
        strategy: l
    }))
      , m = p === "floating" ? {
        x: o,
        y: r,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating))
      , C = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = Ys(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: m,
        offsetParent: x,
        strategy: l
    }) : m);
    return {
        top: (g.top - b.top + S.top) / C.y,
        bottom: (b.bottom - g.bottom + S.bottom) / C.y,
        left: (g.left - b.left + S.left) / C.x,
        right: (b.right - g.right + S.right) / C.x
    }
}
const Fw = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: o, placement: r, rects: a, platform: s, elements: i, middlewareData: l} = t
          , {element: c, padding: d=0} = rn(e, t) || {};
        if (c == null)
            return {};
        const p = Pv(d)
          , u = {
            x: n,
            y: o
        }
          , y = Qu(r)
          , S = Ku(y)
          , f = await s.getDimensions(c)
          , w = y === "y"
          , g = w ? "top" : "left"
          , m = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , C = a.reference[S] + a.reference[y] - u[y] - a.floating[S]
          , b = u[y] - a.reference[y]
          , P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
        let E = P ? P[x] : 0;
        (!E || !await (s.isElement == null ? void 0 : s.isElement(P))) && (E = i.floating[x] || a.floating[S]);
        const k = C / 2 - b / 2
          , _ = E / 2 - f[S] / 2 - 1
          , I = Bn(p[g], _)
          , z = Bn(p[m], _)
          , O = I
          , W = E - f[S] - z
          , j = E / 2 - f[S] / 2 + k
          , V = Rc(O, j, W)
          , M = !l.arrow && hr(r) != null && j !== V && a.reference[S] / 2 - (j < O ? I : z) - f[S] / 2 < 0
          , H = M ? j < O ? j - O : j - W : 0;
        return {
            [y]: u[y] + H,
            data: {
                [y]: V,
                centerOffset: j - V - H,
                ...M && {
                    alignmentOffset: H
                }
            },
            reset: M
        }
    }
})
  , zw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, o;
            const {placement: r, middlewareData: a, rects: s, initialPlacement: i, platform: l, elements: c} = t
              , {mainAxis: d=!0, crossAxis: p=!0, fallbackPlacements: u, fallbackStrategy: y="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: f=!0, ...w} = rn(e, t);
            if ((n = a.arrow) != null && n.alignmentOffset)
                return {};
            const g = an(r)
              , m = Fn(i)
              , x = an(i) === i
              , C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , b = u || (x || !f ? [Qs(i)] : _w(i))
              , P = S !== "none";
            !u && P && b.push(...Mw(i, f, S, C));
            const E = [i, ...b]
              , k = await ua(t, w)
              , _ = [];
            let I = ((o = a.flip) == null ? void 0 : o.overflows) || [];
            if (d && _.push(k[g]),
            p) {
                const j = jw(r, s, C);
                _.push(k[j[0]], k[j[1]])
            }
            if (I = [...I, {
                placement: r,
                overflows: _
            }],
            !_.every(j => j <= 0)) {
                var z, O;
                const j = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1
                  , V = E[j];
                if (V)
                    return {
                        data: {
                            index: j,
                            overflows: I
                        },
                        reset: {
                            placement: V
                        }
                    };
                let M = (O = I.filter(H => H.overflows[0] <= 0).sort( (H, T) => H.overflows[1] - T.overflows[1])[0]) == null ? void 0 : O.placement;
                if (!M)
                    switch (y) {
                    case "bestFit":
                        {
                            var W;
                            const H = (W = I.filter(T => {
                                if (P) {
                                    const A = Fn(T.placement);
                                    return A === m || A === "y"
                                }
                                return !0
                            }
                            ).map(T => [T.placement, T.overflows.filter(A => A > 0).reduce( (A, F) => A + F, 0)]).sort( (T, A) => T[1] - A[1])[0]) == null ? void 0 : W[0];
                            H && (M = H);
                            break
                        }
                    case "initialPlacement":
                        M = i;
                        break
                    }
                if (r !== M)
                    return {
                        reset: {
                            placement: M
                        }
                    }
            }
            return {}
        }
    }
};
function Op(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Mp(e) {
    return Aw.some(t => e[t] >= 0)
}
const $w = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: o="referenceHidden", ...r} = rn(e, t);
            switch (o) {
            case "referenceHidden":
                {
                    const a = await ua(t, {
                        ...r,
                        elementContext: "reference"
                    })
                      , s = Op(a, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Mp(s)
                        }
                    }
                }
            case "escaped":
                {
                    const a = await ua(t, {
                        ...r,
                        altBoundary: !0
                    })
                      , s = Op(a, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Mp(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function Uw(e, t) {
    const {placement: n, platform: o, elements: r} = e
      , a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating))
      , s = an(n)
      , i = hr(n)
      , l = Fn(n) === "y"
      , c = ["left", "top"].includes(s) ? -1 : 1
      , d = a && l ? -1 : 1
      , p = rn(t, e);
    let {mainAxis: u, crossAxis: y, alignmentAxis: S} = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return i && typeof S == "number" && (y = i === "end" ? S * -1 : S),
    l ? {
        x: y * d,
        y: u * c
    } : {
        x: u * c,
        y: y * d
    }
}
const Ww = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, o;
            const {x: r, y: a, placement: s, middlewareData: i} = t
              , l = await Uw(t, e);
            return s === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
                x: r + l.x,
                y: a + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , Vw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: o, placement: r} = t
              , {mainAxis: a=!0, crossAxis: s=!1, limiter: i={
                fn: w => {
                    let {x: g, y: m} = w;
                    return {
                        x: g,
                        y: m
                    }
                }
            }, ...l} = rn(e, t)
              , c = {
                x: n,
                y: o
            }
              , d = await ua(t, l)
              , p = Fn(an(r))
              , u = Gu(p);
            let y = c[u]
              , S = c[p];
            if (a) {
                const w = u === "y" ? "top" : "left"
                  , g = u === "y" ? "bottom" : "right"
                  , m = y + d[w]
                  , x = y - d[g];
                y = Rc(m, y, x)
            }
            if (s) {
                const w = p === "y" ? "top" : "left"
                  , g = p === "y" ? "bottom" : "right"
                  , m = S + d[w]
                  , x = S - d[g];
                S = Rc(m, S, x)
            }
            const f = i.fn({
                ...t,
                [u]: y,
                [p]: S
            });
            return {
                ...f,
                data: {
                    x: f.x - n,
                    y: f.y - o,
                    enabled: {
                        [u]: a,
                        [p]: s
                    }
                }
            }
        }
    }
}
  , Hw = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: o, placement: r, rects: a, middlewareData: s} = t
              , {offset: i=0, mainAxis: l=!0, crossAxis: c=!0} = rn(e, t)
              , d = {
                x: n,
                y: o
            }
              , p = Fn(r)
              , u = Gu(p);
            let y = d[u]
              , S = d[p];
            const f = rn(i, t)
              , w = typeof f == "number" ? {
                mainAxis: f,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...f
            };
            if (l) {
                const x = u === "y" ? "height" : "width"
                  , C = a.reference[u] - a.floating[x] + w.mainAxis
                  , b = a.reference[u] + a.reference[x] - w.mainAxis;
                y < C ? y = C : y > b && (y = b)
            }
            if (c) {
                var g, m;
                const x = u === "y" ? "width" : "height"
                  , C = ["top", "left"].includes(an(r))
                  , b = a.reference[p] - a.floating[x] + (C && ((g = s.offset) == null ? void 0 : g[p]) || 0) + (C ? 0 : w.crossAxis)
                  , P = a.reference[p] + a.reference[x] + (C ? 0 : ((m = s.offset) == null ? void 0 : m[p]) || 0) - (C ? w.crossAxis : 0);
                S < b ? S = b : S > P && (S = P)
            }
            return {
                [u]: y,
                [p]: S
            }
        }
    }
}
  , Gw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, o;
            const {placement: r, rects: a, platform: s, elements: i} = t
              , {apply: l= () => {}
            , ...c} = rn(e, t)
              , d = await ua(t, c)
              , p = an(r)
              , u = hr(r)
              , y = Fn(r) === "y"
              , {width: S, height: f} = a.floating;
            let w, g;
            p === "top" || p === "bottom" ? (w = p,
            g = u === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = p,
            w = u === "end" ? "top" : "bottom");
            const m = f - d.top - d.bottom
              , x = S - d.left - d.right
              , C = Bn(f - d[w], m)
              , b = Bn(S - d[g], x)
              , P = !t.middlewareData.shift;
            let E = C
              , k = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = x),
            (o = t.middlewareData.shift) != null && o.enabled.y && (E = m),
            P && !u) {
                const I = st(d.left, 0)
                  , z = st(d.right, 0)
                  , O = st(d.top, 0)
                  , W = st(d.bottom, 0);
                y ? k = S - 2 * (I !== 0 || z !== 0 ? I + z : st(d.left, d.right)) : E = f - 2 * (O !== 0 || W !== 0 ? O + W : st(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: k,
                availableHeight: E
            });
            const _ = await s.getDimensions(i.floating);
            return S !== _.width || f !== _.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Ci() {
    return typeof window < "u"
}
function vr(e) {
    return kv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function ct(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Gt(e) {
    var t;
    return (t = (kv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function kv(e) {
    return Ci() ? e instanceof Node || e instanceof ct(e).Node : !1
}
function It(e) {
    return Ci() ? e instanceof Element || e instanceof ct(e).Element : !1
}
function Ht(e) {
    return Ci() ? e instanceof HTMLElement || e instanceof ct(e).HTMLElement : !1
}
function Bp(e) {
    return !Ci() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot
}
function Pa(e) {
    const {overflow: t, overflowX: n, overflowY: o, display: r} = jt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r)
}
function Kw(e) {
    return ["table", "td", "th"].includes(vr(e))
}
function bi(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Yu(e) {
    const t = Xu()
      , n = It(e) ? jt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(o => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (n.contain || "").includes(o))
}
function Qw(e) {
    let t = zn(e);
    for (; Ht(t) && !cr(t); ) {
        if (Yu(t))
            return t;
        if (bi(t))
            return null;
        t = zn(t)
    }
    return null
}
function Xu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function cr(e) {
    return ["html", "body", "#document"].includes(vr(e))
}
function jt(e) {
    return ct(e).getComputedStyle(e)
}
function Ti(e) {
    return It(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function zn(e) {
    if (vr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Bp(e) && e.host || Gt(e);
    return Bp(t) ? t.host : t
}
function Nv(e) {
    const t = zn(e);
    return cr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ht(t) && Pa(t) ? t : Nv(t)
}
function da(e, t, n) {
    var o;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const r = Nv(e)
      , a = r === ((o = e.ownerDocument) == null ? void 0 : o.body)
      , s = ct(r);
    if (a) {
        const i = Dc(s);
        return t.concat(s, s.visualViewport || [], Pa(r) ? r : [], i && n ? da(i) : [])
    }
    return t.concat(r, da(r, [], n))
}
function Dc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Rv(e) {
    const t = jt(e);
    let n = parseFloat(t.width) || 0
      , o = parseFloat(t.height) || 0;
    const r = Ht(e)
      , a = r ? e.offsetWidth : n
      , s = r ? e.offsetHeight : o
      , i = Ks(n) !== a || Ks(o) !== s;
    return i && (n = a,
    o = s),
    {
        width: n,
        height: o,
        $: i
    }
}
function qu(e) {
    return It(e) ? e : e.contextElement
}
function Wo(e) {
    const t = qu(e);
    if (!Ht(t))
        return Ln(1);
    const n = t.getBoundingClientRect()
      , {width: o, height: r, $: a} = Rv(t);
    let s = (a ? Ks(n.width) : n.width) / o
      , i = (a ? Ks(n.height) : n.height) / r;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    {
        x: s,
        y: i
    }
}
const Yw = Ln(0);
function Av(e) {
    const t = ct(e);
    return !Xu() || !t.visualViewport ? Yw : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Xw(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== ct(e) ? !1 : t
}
function po(e, t, n, o) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , a = qu(e);
    let s = Ln(1);
    t && (o ? It(o) && (s = Wo(o)) : s = Wo(e));
    const i = Xw(a, n, o) ? Av(a) : Ln(0);
    let l = (r.left + i.x) / s.x
      , c = (r.top + i.y) / s.y
      , d = r.width / s.x
      , p = r.height / s.y;
    if (a) {
        const u = ct(a)
          , y = o && It(o) ? ct(o) : o;
        let S = u
          , f = Dc(S);
        for (; f && o && y !== S; ) {
            const w = Wo(f)
              , g = f.getBoundingClientRect()
              , m = jt(f)
              , x = g.left + (f.clientLeft + parseFloat(m.paddingLeft)) * w.x
              , C = g.top + (f.clientTop + parseFloat(m.paddingTop)) * w.y;
            l *= w.x,
            c *= w.y,
            d *= w.x,
            p *= w.y,
            l += x,
            c += C,
            S = ct(f),
            f = Dc(S)
        }
    }
    return Ys({
        width: d,
        height: p,
        x: l,
        y: c
    })
}
function qw(e) {
    let {elements: t, rect: n, offsetParent: o, strategy: r} = e;
    const a = r === "fixed"
      , s = Gt(o)
      , i = t ? bi(t.floating) : !1;
    if (o === s || i && a)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = Ln(1);
    const d = Ln(0)
      , p = Ht(o);
    if ((p || !p && !a) && ((vr(o) !== "body" || Pa(s)) && (l = Ti(o)),
    Ht(o))) {
        const u = po(o);
        c = Wo(o),
        d.x = u.x + o.clientLeft,
        d.y = u.y + o.clientTop
    }
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + d.x,
        y: n.y * c.y - l.scrollTop * c.y + d.y
    }
}
function Zw(e) {
    return Array.from(e.getClientRects())
}
function Ic(e, t) {
    const n = Ti(e).scrollLeft;
    return t ? t.left + n : po(Gt(e)).left + n
}
function Jw(e) {
    const t = Gt(e)
      , n = Ti(e)
      , o = e.ownerDocument.body
      , r = st(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth)
      , a = st(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let s = -n.scrollLeft + Ic(e);
    const i = -n.scrollTop;
    return jt(o).direction === "rtl" && (s += st(t.clientWidth, o.clientWidth) - r),
    {
        width: r,
        height: a,
        x: s,
        y: i
    }
}
function eS(e, t) {
    const n = ct(e)
      , o = Gt(e)
      , r = n.visualViewport;
    let a = o.clientWidth
      , s = o.clientHeight
      , i = 0
      , l = 0;
    if (r) {
        a = r.width,
        s = r.height;
        const c = Xu();
        (!c || c && t === "fixed") && (i = r.offsetLeft,
        l = r.offsetTop)
    }
    return {
        width: a,
        height: s,
        x: i,
        y: l
    }
}
function tS(e, t) {
    const n = po(e, !0, t === "fixed")
      , o = n.top + e.clientTop
      , r = n.left + e.clientLeft
      , a = Ht(e) ? Wo(e) : Ln(1)
      , s = e.clientWidth * a.x
      , i = e.clientHeight * a.y
      , l = r * a.x
      , c = o * a.y;
    return {
        width: s,
        height: i,
        x: l,
        y: c
    }
}
function Lp(e, t, n) {
    let o;
    if (t === "viewport")
        o = eS(e, n);
    else if (t === "document")
        o = Jw(Gt(e));
    else if (It(t))
        o = tS(t, n);
    else {
        const r = Av(e);
        o = {
            ...t,
            x: t.x - r.x,
            y: t.y - r.y
        }
    }
    return Ys(o)
}
function Dv(e, t) {
    const n = zn(e);
    return n === t || !It(n) || cr(n) ? !1 : jt(n).position === "fixed" || Dv(n, t)
}
function nS(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let o = da(e, [], !1).filter(i => It(i) && vr(i) !== "body")
      , r = null;
    const a = jt(e).position === "fixed";
    let s = a ? zn(e) : e;
    for (; It(s) && !cr(s); ) {
        const i = jt(s)
          , l = Yu(s);
        !l && i.position === "fixed" && (r = null),
        (a ? !l && !r : !l && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Pa(s) && !l && Dv(e, s)) ? o = o.filter(d => d !== s) : r = i,
        s = zn(s)
    }
    return t.set(e, o),
    o
}
function oS(e) {
    let {element: t, boundary: n, rootBoundary: o, strategy: r} = e;
    const s = [...n === "clippingAncestors" ? bi(t) ? [] : nS(t, this._c) : [].concat(n), o]
      , i = s[0]
      , l = s.reduce( (c, d) => {
        const p = Lp(t, d, r);
        return c.top = st(p.top, c.top),
        c.right = Bn(p.right, c.right),
        c.bottom = Bn(p.bottom, c.bottom),
        c.left = st(p.left, c.left),
        c
    }
    , Lp(t, i, r));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function rS(e) {
    const {width: t, height: n} = Rv(e);
    return {
        width: t,
        height: n
    }
}
function aS(e, t, n) {
    const o = Ht(t)
      , r = Gt(t)
      , a = n === "fixed"
      , s = po(e, !0, a, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Ln(0);
    if (o || !o && !a)
        if ((vr(t) !== "body" || Pa(r)) && (i = Ti(t)),
        o) {
            const y = po(t, !0, a, t);
            l.x = y.x + t.clientLeft,
            l.y = y.y + t.clientTop
        } else
            r && (l.x = Ic(r));
    let c = 0
      , d = 0;
    if (r && !o && !a) {
        const y = r.getBoundingClientRect();
        d = y.top + i.scrollTop,
        c = y.left + i.scrollLeft - Ic(r, y)
    }
    const p = s.left + i.scrollLeft - l.x - c
      , u = s.top + i.scrollTop - l.y - d;
    return {
        x: p,
        y: u,
        width: s.width,
        height: s.height
    }
}
function xl(e) {
    return jt(e).position === "static"
}
function Fp(e, t) {
    if (!Ht(e) || jt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Gt(e) === n && (n = n.ownerDocument.body),
    n
}
function Iv(e, t) {
    const n = ct(e);
    if (bi(e))
        return n;
    if (!Ht(e)) {
        let r = zn(e);
        for (; r && !cr(r); ) {
            if (It(r) && !xl(r))
                return r;
            r = zn(r)
        }
        return n
    }
    let o = Fp(e, t);
    for (; o && Kw(o) && xl(o); )
        o = Fp(o, t);
    return o && cr(o) && xl(o) && !Yu(o) ? n : o || Qw(e) || n
}
const sS = async function(e) {
    const t = this.getOffsetParent || Iv
      , n = this.getDimensions
      , o = await n(e.floating);
    return {
        reference: aS(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};
function iS(e) {
    return jt(e).direction === "rtl"
}
const lS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: qw,
    getDocumentElement: Gt,
    getClippingRect: oS,
    getOffsetParent: Iv,
    getElementRects: sS,
    getClientRects: Zw,
    getDimensions: rS,
    getScale: Wo,
    isElement: It,
    isRTL: iS
};
function cS(e, t) {
    let n = null, o;
    const r = Gt(e);
    function a() {
        var i;
        clearTimeout(o),
        (i = n) == null || i.disconnect(),
        n = null
    }
    function s(i, l) {
        i === void 0 && (i = !1),
        l === void 0 && (l = 1),
        a();
        const {left: c, top: d, width: p, height: u} = e.getBoundingClientRect();
        if (i || t(),
        !p || !u)
            return;
        const y = Za(d)
          , S = Za(r.clientWidth - (c + p))
          , f = Za(r.clientHeight - (d + u))
          , w = Za(c)
          , m = {
            rootMargin: -y + "px " + -S + "px " + -f + "px " + -w + "px",
            threshold: st(0, Bn(1, l)) || 1
        };
        let x = !0;
        function C(b) {
            const P = b[0].intersectionRatio;
            if (P !== l) {
                if (!x)
                    return s();
                P ? s(!1, P) : o = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            x = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...m,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,m)
        }
        n.observe(e)
    }
    return s(!0),
    a
}
function uS(e, t, n, o) {
    o === void 0 && (o = {});
    const {ancestorScroll: r=!0, ancestorResize: a=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: i=typeof IntersectionObserver == "function", animationFrame: l=!1} = o
      , c = qu(e)
      , d = r || a ? [...c ? da(c) : [], ...da(t)] : [];
    d.forEach(g => {
        r && g.addEventListener("scroll", n, {
            passive: !0
        }),
        a && g.addEventListener("resize", n)
    }
    );
    const p = c && i ? cS(c, n) : null;
    let u = -1
      , y = null;
    s && (y = new ResizeObserver(g => {
        let[m] = g;
        m && m.target === c && y && (y.unobserve(t),
        cancelAnimationFrame(u),
        u = requestAnimationFrame( () => {
            var x;
            (x = y) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    c && !l && y.observe(c),
    y.observe(t));
    let S, f = l ? po(e) : null;
    l && w();
    function w() {
        const g = po(e);
        f && (g.x !== f.x || g.y !== f.y || g.width !== f.width || g.height !== f.height) && n(),
        f = g,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var g;
        d.forEach(m => {
            r && m.removeEventListener("scroll", n),
            a && m.removeEventListener("resize", n)
        }
        ),
        p == null || p(),
        (g = y) == null || g.disconnect(),
        y = null,
        l && cancelAnimationFrame(S)
    }
}
const dS = Ww
  , pS = Vw
  , fS = zw
  , mS = Gw
  , hS = $w
  , zp = Fw
  , vS = Hw
  , gS = (e, t, n) => {
    const o = new Map
      , r = {
        platform: lS,
        ...n
    }
      , a = {
        ...r.platform,
        _c: o
    };
    return Lw(e, t, {
        ...r,
        platform: a
    })
}
;
var ys = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Xs(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (o = n; o-- !== 0; )
                if (!Xs(e[o], t[o]))
                    return !1;
            return !0
        }
        if (r = Object.keys(e),
        n = r.length,
        n !== Object.keys(t).length)
            return !1;
        for (o = n; o-- !== 0; )
            if (!{}.hasOwnProperty.call(t, r[o]))
                return !1;
        for (o = n; o-- !== 0; ) {
            const a = r[o];
            if (!(a === "_owner" && e.$$typeof) && !Xs(e[a], t[a]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function jv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function $p(e, t) {
    const n = jv(e);
    return Math.round(t * n) / n
}
function yl(e) {
    const t = h.useRef(e);
    return ys( () => {
        t.current = e
    }
    ),
    t
}
function xS(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: o=[], platform: r, elements: {reference: a, floating: s}={}, transform: i=!0, whileElementsMounted: l, open: c} = e
      , [d,p] = h.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [u,y] = h.useState(o);
    Xs(u, o) || y(o);
    const [S,f] = h.useState(null)
      , [w,g] = h.useState(null)
      , m = h.useCallback(T => {
        T !== P.current && (P.current = T,
        f(T))
    }
    , [])
      , x = h.useCallback(T => {
        T !== E.current && (E.current = T,
        g(T))
    }
    , [])
      , C = a || S
      , b = s || w
      , P = h.useRef(null)
      , E = h.useRef(null)
      , k = h.useRef(d)
      , _ = l != null
      , I = yl(l)
      , z = yl(r)
      , O = yl(c)
      , W = h.useCallback( () => {
        if (!P.current || !E.current)
            return;
        const T = {
            placement: t,
            strategy: n,
            middleware: u
        };
        z.current && (T.platform = z.current),
        gS(P.current, E.current, T).then(A => {
            const F = {
                ...A,
                isPositioned: O.current !== !1
            };
            j.current && !Xs(k.current, F) && (k.current = F,
            vo.flushSync( () => {
                p(F)
            }
            ))
        }
        )
    }
    , [u, t, n, z, O]);
    ys( () => {
        c === !1 && k.current.isPositioned && (k.current.isPositioned = !1,
        p(T => ({
            ...T,
            isPositioned: !1
        })))
    }
    , [c]);
    const j = h.useRef(!1);
    ys( () => (j.current = !0,
    () => {
        j.current = !1
    }
    ), []),
    ys( () => {
        if (C && (P.current = C),
        b && (E.current = b),
        C && b) {
            if (I.current)
                return I.current(C, b, W);
            W()
        }
    }
    , [C, b, W, I, _]);
    const V = h.useMemo( () => ({
        reference: P,
        floating: E,
        setReference: m,
        setFloating: x
    }), [m, x])
      , M = h.useMemo( () => ({
        reference: C,
        floating: b
    }), [C, b])
      , H = h.useMemo( () => {
        const T = {
            position: n,
            left: 0,
            top: 0
        };
        if (!M.floating)
            return T;
        const A = $p(M.floating, d.x)
          , F = $p(M.floating, d.y);
        return i ? {
            ...T,
            transform: "translate(" + A + "px, " + F + "px)",
            ...jv(M.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: A,
            top: F
        }
    }
    , [n, i, M.floating, d.x, d.y]);
    return h.useMemo( () => ({
        ...d,
        update: W,
        refs: V,
        elements: M,
        floatingStyles: H
    }), [d, W, V, M, H])
}
const yS = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: o, padding: r} = typeof e == "function" ? e(n) : e;
            return o && t(o) ? o.current != null ? zp({
                element: o.current,
                padding: r
            }).fn(n) : {} : o ? zp({
                element: o,
                padding: r
            }).fn(n) : {}
        }
    }
}
  , wS = (e, t) => ({
    ...dS(e),
    options: [e, t]
})
  , SS = (e, t) => ({
    ...pS(e),
    options: [e, t]
})
  , CS = (e, t) => ({
    ...vS(e),
    options: [e, t]
})
  , bS = (e, t) => ({
    ...fS(e),
    options: [e, t]
})
  , TS = (e, t) => ({
    ...mS(e),
    options: [e, t]
})
  , ES = (e, t) => ({
    ...hS(e),
    options: [e, t]
})
  , PS = (e, t) => ({
    ...yS(e),
    options: [e, t]
});
var kS = "Arrow"
  , _v = h.forwardRef( (e, t) => {
    const {children: n, width: o=10, height: r=5, ...a} = e;
    return v.jsx(ee.svg, {
        ...a,
        ref: t,
        width: o,
        height: r,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : v.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
_v.displayName = kS;
var NS = _v;
function RS(e, t=[]) {
    let n = [];
    function o(a, s) {
        const i = h.createContext(s)
          , l = n.length;
        n = [...n, s];
        function c(p) {
            const {scope: u, children: y, ...S} = p
              , f = (u == null ? void 0 : u[e][l]) || i
              , w = h.useMemo( () => S, Object.values(S));
            return v.jsx(f.Provider, {
                value: w,
                children: y
            })
        }
        function d(p, u) {
            const y = (u == null ? void 0 : u[e][l]) || i
              , S = h.useContext(y);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return c.displayName = a + "Provider",
        [c, d]
    }
    const r = () => {
        const a = n.map(s => h.createContext(s));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || a;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return r.scopeName = e,
    [o, AS(r, ...t)]
}
function AS(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const s = o.reduce( (i, {useScope: l, scopeName: c}) => {
                const p = l(a)[`__scope${c}`];
                return {
                    ...i,
                    ...p
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function DS(e) {
    const [t,n] = h.useState(void 0);
    return ze( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length)
                    return;
                const a = r[0];
                let s, i;
                if ("borderBoxSize"in a) {
                    const l = a.borderBoxSize
                      , c = Array.isArray(l) ? l[0] : l;
                    s = c.inlineSize,
                    i = c.blockSize
                } else
                    s = e.offsetWidth,
                    i = e.offsetHeight;
                n({
                    width: s,
                    height: i
                })
            }
            );
            return o.observe(e, {
                box: "border-box"
            }),
            () => o.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Zu = "Popper"
  , [Ov,Ei] = RS(Zu)
  , [IS,Mv] = Ov(Zu)
  , Bv = e => {
    const {__scopePopper: t, children: n} = e
      , [o,r] = h.useState(null);
    return v.jsx(IS, {
        scope: t,
        anchor: o,
        onAnchorChange: r,
        children: n
    })
}
;
Bv.displayName = Zu;
var Lv = "PopperAnchor"
  , Fv = h.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: o, ...r} = e
      , a = Mv(Lv, n)
      , s = h.useRef(null)
      , i = ye(t, s);
    return h.useEffect( () => {
        a.onAnchorChange((o == null ? void 0 : o.current) || s.current)
    }
    ),
    o ? null : v.jsx(ee.div, {
        ...r,
        ref: i
    })
}
);
Fv.displayName = Lv;
var Ju = "PopperContent"
  , [jS,_S] = Ov(Ju)
  , zv = h.forwardRef( (e, t) => {
    var U, oe, we, te, ae, ne;
    const {__scopePopper: n, side: o="bottom", sideOffset: r=0, align: a="center", alignOffset: s=0, arrowPadding: i=0, avoidCollisions: l=!0, collisionBoundary: c=[], collisionPadding: d=0, sticky: p="partial", hideWhenDetached: u=!1, updatePositionStrategy: y="optimized", onPlaced: S, ...f} = e
      , w = Mv(Ju, n)
      , [g,m] = h.useState(null)
      , x = ye(t, $e => m($e))
      , [C,b] = h.useState(null)
      , P = DS(C)
      , E = (P == null ? void 0 : P.width) ?? 0
      , k = (P == null ? void 0 : P.height) ?? 0
      , _ = o + (a !== "center" ? "-" + a : "")
      , I = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , z = Array.isArray(c) ? c : [c]
      , O = z.length > 0
      , W = {
        padding: I,
        boundary: z.filter(MS),
        altBoundary: O
    }
      , {refs: j, floatingStyles: V, placement: M, isPositioned: H, middlewareData: T} = xS({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...$e) => uS(...$e, {
            animationFrame: y === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [wS({
            mainAxis: r + k,
            alignmentAxis: s
        }), l && SS({
            mainAxis: !0,
            crossAxis: !1,
            limiter: p === "partial" ? CS() : void 0,
            ...W
        }), l && bS({
            ...W
        }), TS({
            ...W,
            apply: ({elements: $e, rects: nt, availableWidth: ln, availableHeight: ft}) => {
                const {width: Gn, height: Li} = nt.reference
                  , Ae = $e.floating.style;
                Ae.setProperty("--radix-popper-available-width", `${ln}px`),
                Ae.setProperty("--radix-popper-available-height", `${ft}px`),
                Ae.setProperty("--radix-popper-anchor-width", `${Gn}px`),
                Ae.setProperty("--radix-popper-anchor-height", `${Li}px`)
            }
        }), C && PS({
            element: C,
            padding: i
        }), BS({
            arrowWidth: E,
            arrowHeight: k
        }), u && ES({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [A,F] = Wv(M)
      , B = et(S);
    ze( () => {
        H && (B == null || B())
    }
    , [H, B]);
    const $ = (U = T.arrow) == null ? void 0 : U.x
      , X = (oe = T.arrow) == null ? void 0 : oe.y
      , re = ((we = T.arrow) == null ? void 0 : we.centerOffset) !== 0
      , [ke,Z] = h.useState();
    return ze( () => {
        g && Z(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    v.jsx("div", {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...V,
            transform: H ? V.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ke,
            "--radix-popper-transform-origin": [(te = T.transformOrigin) == null ? void 0 : te.x, (ae = T.transformOrigin) == null ? void 0 : ae.y].join(" "),
            ...((ne = T.hide) == null ? void 0 : ne.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: v.jsx(jS, {
            scope: n,
            placedSide: A,
            onArrowChange: b,
            arrowX: $,
            arrowY: X,
            shouldHideArrow: re,
            children: v.jsx(ee.div, {
                "data-side": A,
                "data-align": F,
                ...f,
                ref: x,
                style: {
                    ...f.style,
                    animation: H ? void 0 : "none"
                }
            })
        })
    })
}
);
zv.displayName = Ju;
var $v = "PopperArrow"
  , OS = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Uv = h.forwardRef(function(t, n) {
    const {__scopePopper: o, ...r} = t
      , a = _S($v, o)
      , s = OS[a.placedSide];
    return v.jsx("span", {
        ref: a.onArrowChange,
        style: {
            position: "absolute",
            left: a.arrowX,
            top: a.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[a.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[a.placedSide],
            visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: v.jsx(NS, {
            ...r,
            ref: n,
            style: {
                ...r.style,
                display: "block"
            }
        })
    })
});
Uv.displayName = $v;
function MS(e) {
    return e !== null
}
var BS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, m;
        const {placement: n, rects: o, middlewareData: r} = t
          , s = ((w = r.arrow) == null ? void 0 : w.centerOffset) !== 0
          , i = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [c,d] = Wv(n)
          , p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , u = (((g = r.arrow) == null ? void 0 : g.x) ?? 0) + i / 2
          , y = (((m = r.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let S = ""
          , f = "";
        return c === "bottom" ? (S = s ? p : `${u}px`,
        f = `${-l}px`) : c === "top" ? (S = s ? p : `${u}px`,
        f = `${o.floating.height + l}px`) : c === "right" ? (S = `${-l}px`,
        f = s ? p : `${y}px`) : c === "left" && (S = `${o.floating.width + l}px`,
        f = s ? p : `${y}px`),
        {
            data: {
                x: S,
                y: f
            }
        }
    }
});
function Wv(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var LS = Bv
  , Vv = Fv
  , Hv = zv
  , Gv = Uv
  , [Pi,xE] = gi("Tooltip", [Ei])
  , ed = Ei()
  , Kv = "TooltipProvider"
  , FS = 700
  , Up = "tooltip.open"
  , [zS,Qv] = Pi(Kv)
  , Yv = e => {
    const {__scopeTooltip: t, delayDuration: n=FS, skipDelayDuration: o=300, disableHoverableContent: r=!1, children: a} = e
      , [s,i] = h.useState(!0)
      , l = h.useRef(!1)
      , c = h.useRef(0);
    return h.useEffect( () => {
        const d = c.current;
        return () => window.clearTimeout(d)
    }
    , []),
    v.jsx(zS, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: h.useCallback( () => {
            window.clearTimeout(c.current),
            i(!1)
        }
        , []),
        onClose: h.useCallback( () => {
            window.clearTimeout(c.current),
            c.current = window.setTimeout( () => i(!0), o)
        }
        , [o]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: h.useCallback(d => {
            l.current = d
        }
        , []),
        disableHoverableContent: r,
        children: a
    })
}
;
Yv.displayName = Kv;
var Xv = "Tooltip"
  , [yE,ki] = Pi(Xv)
  , jc = "TooltipTrigger"
  , $S = h.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...o} = e
      , r = ki(jc, n)
      , a = Qv(jc, n)
      , s = ed(n)
      , i = h.useRef(null)
      , l = ye(t, i, r.onTriggerChange)
      , c = h.useRef(!1)
      , d = h.useRef(!1)
      , p = h.useCallback( () => c.current = !1, []);
    return h.useEffect( () => () => document.removeEventListener("pointerup", p), [p]),
    v.jsx(Vv, {
        asChild: !0,
        ...s,
        children: v.jsx(ee.button, {
            "aria-describedby": r.open ? r.contentId : void 0,
            "data-state": r.stateAttribute,
            ...o,
            ref: l,
            onPointerMove: G(e.onPointerMove, u => {
                u.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (r.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: G(e.onPointerLeave, () => {
                r.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: G(e.onPointerDown, () => {
                c.current = !0,
                document.addEventListener("pointerup", p, {
                    once: !0
                })
            }
            ),
            onFocus: G(e.onFocus, () => {
                c.current || r.onOpen()
            }
            ),
            onBlur: G(e.onBlur, r.onClose),
            onClick: G(e.onClick, r.onClose)
        })
    })
}
);
$S.displayName = jc;
var US = "TooltipPortal"
  , [wE,WS] = Pi(US, {
    forceMount: void 0
})
  , ur = "TooltipContent"
  , qv = h.forwardRef( (e, t) => {
    const n = WS(ur, e.__scopeTooltip)
      , {forceMount: o=n.forceMount, side: r="top", ...a} = e
      , s = ki(ur, e.__scopeTooltip);
    return v.jsx(yi, {
        present: o || s.open,
        children: s.disableHoverableContent ? v.jsx(Zv, {
            side: r,
            ...a,
            ref: t
        }) : v.jsx(VS, {
            side: r,
            ...a,
            ref: t
        })
    })
}
)
  , VS = h.forwardRef( (e, t) => {
    const n = ki(ur, e.__scopeTooltip)
      , o = Qv(ur, e.__scopeTooltip)
      , r = h.useRef(null)
      , a = ye(t, r)
      , [s,i] = h.useState(null)
      , {trigger: l, onClose: c} = n
      , d = r.current
      , {onPointerInTransitChange: p} = o
      , u = h.useCallback( () => {
        i(null),
        p(!1)
    }
    , [p])
      , y = h.useCallback( (S, f) => {
        const w = S.currentTarget
          , g = {
            x: S.clientX,
            y: S.clientY
        }
          , m = QS(g, w.getBoundingClientRect())
          , x = YS(g, m)
          , C = XS(f.getBoundingClientRect())
          , b = ZS([...x, ...C]);
        i(b),
        p(!0)
    }
    , [p]);
    return h.useEffect( () => () => u(), [u]),
    h.useEffect( () => {
        if (l && d) {
            const S = w => y(w, d)
              , f = w => y(w, l);
            return l.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", f),
            () => {
                l.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", f)
            }
        }
    }
    , [l, d, y, u]),
    h.useEffect( () => {
        if (s) {
            const S = f => {
                const w = f.target
                  , g = {
                    x: f.clientX,
                    y: f.clientY
                }
                  , m = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , x = !qS(g, s);
                m ? u() : x && (u(),
                c())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, d, s, c, u]),
    v.jsx(Zv, {
        ...e,
        ref: a
    })
}
)
  , [HS,GS] = Pi(Xv, {
    isInside: !1
})
  , Zv = h.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: o, "aria-label": r, onEscapeKeyDown: a, onPointerDownOutside: s, ...i} = e
      , l = ki(ur, n)
      , c = ed(n)
      , {onClose: d} = l;
    return h.useEffect( () => (document.addEventListener(Up, d),
    () => document.removeEventListener(Up, d)), [d]),
    h.useEffect( () => {
        if (l.trigger) {
            const p = u => {
                const y = u.target;
                y != null && y.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", p, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", p, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    v.jsx(xi, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: d,
        children: v.jsxs(Hv, {
            "data-state": l.stateAttribute,
            ...c,
            ...i,
            ref: t,
            style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [v.jsx($h, {
                children: o
            }), v.jsx(HS, {
                scope: n,
                isInside: !0,
                children: v.jsx(Wy, {
                    id: l.contentId,
                    role: "tooltip",
                    children: r || o
                })
            })]
        })
    })
}
);
qv.displayName = ur;
var Jv = "TooltipArrow"
  , KS = h.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...o} = e
      , r = ed(n);
    return GS(Jv, n).isInside ? null : v.jsx(Gv, {
        ...r,
        ...o,
        ref: t
    })
}
);
KS.displayName = Jv;
function QS(e, t) {
    const n = Math.abs(t.top - e.y)
      , o = Math.abs(t.bottom - e.y)
      , r = Math.abs(t.right - e.x)
      , a = Math.abs(t.left - e.x);
    switch (Math.min(n, o, r, a)) {
    case a:
        return "left";
    case r:
        return "right";
    case n:
        return "top";
    case o:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function YS(e, t, n=5) {
    const o = [];
    switch (t) {
    case "top":
        o.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        o.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        o.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        o.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return o
}
function XS(e) {
    const {top: t, right: n, bottom: o, left: r} = e;
    return [{
        x: r,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: o
    }, {
        x: r,
        y: o
    }]
}
function qS(e, t) {
    const {x: n, y: o} = e;
    let r = !1;
    for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
        const i = t[a].x
          , l = t[a].y
          , c = t[s].x
          , d = t[s].y;
        l > o != d > o && n < (c - i) * (o - l) / (d - l) + i && (r = !r)
    }
    return r
}
function ZS(e) {
    const t = e.slice();
    return t.sort( (n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0),
    JS(t)
}
function JS(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let o = 0; o < e.length; o++) {
        const r = e[o];
        for (; t.length >= 2; ) {
            const a = t[t.length - 1]
              , s = t[t.length - 2];
            if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x))
                t.pop();
            else
                break
        }
        t.push(r)
    }
    t.pop();
    const n = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const r = e[o];
        for (; n.length >= 2; ) {
            const a = n[n.length - 1]
              , s = n[n.length - 2];
            if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x))
                n.pop();
            else
                break
        }
        n.push(r)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var eC = Yv
  , eg = qv;
const tC = eC
  , nC = h.forwardRef( ({className: e, sideOffset: t=4, ...n}, o) => v.jsx(eg, {
    "data-lov-id": "src/components/ui/tooltip.tsx:16:2",
    "data-lov-name": "TooltipPrimitive.Content",
    "data-component-path": "src/components/ui/tooltip.tsx",
    "data-component-line": "16",
    "data-component-file": "tooltip.tsx",
    "data-component-name": "TooltipPrimitive.Content",
    "data-component-content": "%7B%7D",
    ref: o,
    sideOffset: t,
    className: ue("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
nC.displayName = eg.displayName;
var Ni = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ri = typeof window > "u" || "Deno"in globalThis;
function Et() {}
function oC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function rC(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function aC(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Wp(e, t) {
    return typeof e == "function" ? e(t) : e
}
function sC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Vp(e, t) {
    const {type: n="all", exact: o, fetchStatus: r, predicate: a, queryKey: s, stale: i} = e;
    if (s) {
        if (o) {
            if (t.queryHash !== td(s, t.options))
                return !1
        } else if (!fa(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof i == "boolean" && t.isStale() !== i || r && r !== t.state.fetchStatus || a && !a(t))
}
function Hp(e, t) {
    const {exact: n, status: o, predicate: r, mutationKey: a} = e;
    if (a) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (pa(t.options.mutationKey) !== pa(a))
                return !1
        } else if (!fa(t.options.mutationKey, a))
            return !1
    }
    return !(o && t.state.status !== o || r && !r(t))
}
function td(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || pa)(e)
}
function pa(e) {
    return JSON.stringify(e, (t, n) => _c(n) ? Object.keys(n).sort().reduce( (o, r) => (o[r] = n[r],
    o), {}) : n)
}
function fa(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !fa(e[n], t[n])) : !1
}
function tg(e, t) {
    if (e === t)
        return e;
    const n = Gp(e) && Gp(t);
    if (n || _c(e) && _c(t)) {
        const o = n ? e : Object.keys(e)
          , r = o.length
          , a = n ? t : Object.keys(t)
          , s = a.length
          , i = n ? [] : {};
        let l = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : a[c];
            (!n && o.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (i[d] = void 0,
            l++) : (i[d] = tg(e[d], t[d]),
            i[d] === e[d] && e[d] !== void 0 && l++)
        }
        return r === s && l === r ? e : i
    }
    return t
}
function Gp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function _c(e) {
    if (!Kp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Kp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Kp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function iC(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function lC(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? tg(e, t) : t
}
function cC(e, t, n=0) {
    const o = [...e, t];
    return n && o.length > n ? o.slice(1) : o
}
function uC(e, t, n=0) {
    const o = [t, ...e];
    return n && o.length > n ? o.slice(0, -1) : o
}
var nd = Symbol();
function ng(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === nd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Zn, yn, Go, vf, dC = (vf = class extends Ni {
    constructor() {
        super();
        se(this, Zn);
        se(this, yn);
        se(this, Go);
        Y(this, Go, t => {
            if (!Ri && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, yn) || this.setEventListener(N(this, Go))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, yn)) == null || t.call(this),
        Y(this, yn, void 0))
    }
    setEventListener(t) {
        var n;
        Y(this, Go, t),
        (n = N(this, yn)) == null || n.call(this),
        Y(this, yn, t(o => {
            typeof o == "boolean" ? this.setFocused(o) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Zn) !== t && (Y(this, Zn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Zn) == "boolean" ? N(this, Zn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Zn = new WeakMap,
yn = new WeakMap,
Go = new WeakMap,
vf), og = new dC, Ko, wn, Qo, gf, pC = (gf = class extends Ni {
    constructor() {
        super();
        se(this, Ko, !0);
        se(this, wn);
        se(this, Qo);
        Y(this, Qo, t => {
            if (!Ri && window.addEventListener) {
                const n = () => t(!0)
                  , o = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", o, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", o)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, wn) || this.setEventListener(N(this, Qo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, wn)) == null || t.call(this),
        Y(this, wn, void 0))
    }
    setEventListener(t) {
        var n;
        Y(this, Qo, t),
        (n = N(this, wn)) == null || n.call(this),
        Y(this, wn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, Ko) !== t && (Y(this, Ko, t),
        this.listeners.forEach(o => {
            o(t)
        }
        ))
    }
    isOnline() {
        return N(this, Ko)
    }
}
,
Ko = new WeakMap,
wn = new WeakMap,
Qo = new WeakMap,
gf), qs = new pC;
function fC() {
    let e, t;
    const n = new Promise( (r, a) => {
        e = r,
        t = a
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function o(r) {
        Object.assign(n, r),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = r => {
        o({
            status: "fulfilled",
            value: r
        }),
        e(r)
    }
    ,
    n.reject = r => {
        o({
            status: "rejected",
            reason: r
        }),
        t(r)
    }
    ,
    n
}
function mC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function rg(e) {
    return (e ?? "online") === "online" ? qs.isOnline() : !0
}
var ag = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function wl(e) {
    return e instanceof ag
}
function sg(e) {
    let t = !1, n = 0, o = !1, r;
    const a = fC()
      , s = f => {
        var w;
        o || (u(new ag(f)),
        (w = e.abort) == null || w.call(e))
    }
      , i = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , c = () => og.isFocused() && (e.networkMode === "always" || qs.isOnline()) && e.canRun()
      , d = () => rg(e.networkMode) && e.canRun()
      , p = f => {
        var w;
        o || (o = !0,
        (w = e.onSuccess) == null || w.call(e, f),
        r == null || r(),
        a.resolve(f))
    }
      , u = f => {
        var w;
        o || (o = !0,
        (w = e.onError) == null || w.call(e, f),
        r == null || r(),
        a.reject(f))
    }
      , y = () => new Promise(f => {
        var w;
        r = g => {
            (o || c()) && f(g)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var f;
        r = void 0,
        o || (f = e.onContinue) == null || f.call(e)
    }
    )
      , S = () => {
        if (o)
            return;
        let f;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            f = w ?? e.fn()
        } catch (g) {
            f = Promise.reject(g)
        }
        Promise.resolve(f).then(p).catch(g => {
            var P;
            if (o)
                return;
            const m = e.retry ?? (Ri ? 0 : 3)
              , x = e.retryDelay ?? mC
              , C = typeof x == "function" ? x(n, g) : x
              , b = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, g);
            if (t || !b) {
                u(g);
                return
            }
            n++,
            (P = e.onFail) == null || P.call(e, n, g),
            iC(C).then( () => c() ? void 0 : y()).then( () => {
                t ? u(g) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        cancel: s,
        continue: () => (r == null || r(),
        a),
        cancelRetry: i,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? S() : y().then(S),
        a)
    }
}
function hC() {
    let e = []
      , t = 0
      , n = i => {
        i()
    }
      , o = i => {
        i()
    }
      , r = i => setTimeout(i, 0);
    const a = i => {
        t ? e.push(i) : r( () => {
            n(i)
        }
        )
    }
      , s = () => {
        const i = e;
        e = [],
        i.length && r( () => {
            o( () => {
                i.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: i => {
            let l;
            t++;
            try {
                l = i()
            } finally {
                t--,
                t || s()
            }
            return l
        }
        ,
        batchCalls: i => (...l) => {
            a( () => {
                i(...l)
            }
            )
        }
        ,
        schedule: a,
        setNotifyFunction: i => {
            n = i
        }
        ,
        setBatchNotifyFunction: i => {
            o = i
        }
        ,
        setScheduler: i => {
            r = i
        }
    }
}
var Ve = hC(), Jn, xf, ig = (xf = class {
    constructor() {
        se(this, Jn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        rC(this.gcTime) && Y(this, Jn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ri ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, Jn) && (clearTimeout(N(this, Jn)),
        Y(this, Jn, void 0))
    }
}
,
Jn = new WeakMap,
xf), Yo, Xo, mt, Be, ga, eo, Pt, Qt, yf, vC = (yf = class extends ig {
    constructor(t) {
        super();
        se(this, Pt);
        se(this, Yo);
        se(this, Xo);
        se(this, mt);
        se(this, Be);
        se(this, ga);
        se(this, eo);
        Y(this, eo, !1),
        Y(this, ga, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        Y(this, mt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        Y(this, Yo, xC(this.options)),
        this.state = t.state ?? N(this, Yo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, Be)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, ga),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, mt).remove(this)
    }
    setData(t, n) {
        const o = lC(this.state.data, t, this.options);
        return _e(this, Pt, Qt).call(this, {
            data: o,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        o
    }
    setState(t, n) {
        _e(this, Pt, Qt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var o, r;
        const n = (o = N(this, Be)) == null ? void 0 : o.promise;
        return (r = N(this, Be)) == null || r.cancel(t),
        n ? n.then(Et).catch(Et) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, Yo))
    }
    isActive() {
        return this.observers.some(t => sC(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === nd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !aC(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(o => o.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Be)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(o => o.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Be)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, mt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, Be) && (N(this, eo) ? N(this, Be).cancel({
            revert: !0
        }) : N(this, Be).cancelRetry()),
        this.scheduleGc()),
        N(this, mt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || _e(this, Pt, Qt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var l, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, Be))
                return N(this, Be).continueRetry(),
                N(this, Be).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const p = this.observers.find(u => u.options.queryFn);
            p && this.setOptions(p.options)
        }
        const o = new AbortController
          , r = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (Y(this, eo, !0),
                o.signal)
            })
        }
          , a = () => {
            const p = ng(this.options, n)
              , u = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return r(u),
            Y(this, eo, !1),
            this.options.persister ? this.options.persister(p, u, this) : p(u)
        }
          , s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: a
        };
        r(s),
        (l = this.options.behavior) == null || l.onFetch(s, this),
        Y(this, Xo, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = s.fetchOptions) == null ? void 0 : c.meta)) && _e(this, Pt, Qt).call(this, {
            type: "fetch",
            meta: (d = s.fetchOptions) == null ? void 0 : d.meta
        });
        const i = p => {
            var u, y, S, f;
            wl(p) && p.silent || _e(this, Pt, Qt).call(this, {
                type: "error",
                error: p
            }),
            wl(p) || ((y = (u = N(this, mt).config).onError) == null || y.call(u, p, this),
            (f = (S = N(this, mt).config).onSettled) == null || f.call(S, this.state.data, p, this)),
            this.scheduleGc()
        }
        ;
        return Y(this, Be, sg({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: o.abort.bind(o),
            onSuccess: p => {
                var u, y, S, f;
                if (p === void 0) {
                    i(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(p)
                } catch (w) {
                    i(w);
                    return
                }
                (y = (u = N(this, mt).config).onSuccess) == null || y.call(u, p, this),
                (f = (S = N(this, mt).config).onSettled) == null || f.call(S, p, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: i,
            onFail: (p, u) => {
                _e(this, Pt, Qt).call(this, {
                    type: "failed",
                    failureCount: p,
                    error: u
                })
            }
            ,
            onPause: () => {
                _e(this, Pt, Qt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                _e(this, Pt, Qt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        N(this, Be).start()
    }
}
,
Yo = new WeakMap,
Xo = new WeakMap,
mt = new WeakMap,
Be = new WeakMap,
ga = new WeakMap,
eo = new WeakMap,
Pt = new WeakSet,
Qt = function(t) {
    const n = o => {
        switch (t.type) {
        case "failed":
            return {
                ...o,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...o,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...o,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...o,
                ...gC(o.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...o,
                data: t.data,
                dataUpdateCount: o.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const r = t.error;
            return wl(r) && r.revert && N(this, Xo) ? {
                ...N(this, Xo),
                fetchStatus: "idle"
            } : {
                ...o,
                error: r,
                errorUpdateCount: o.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: o.fetchFailureCount + 1,
                fetchFailureReason: r,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...o,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...o,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Ve.batch( () => {
        this.observers.forEach(o => {
            o.onQueryUpdate()
        }
        ),
        N(this, mt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
yf);
function gC(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: rg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function xC(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , o = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? o ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Lt, wf, yC = (wf = class extends Ni {
    constructor(t={}) {
        super();
        se(this, Lt);
        this.config = t,
        Y(this, Lt, new Map)
    }
    build(t, n, o) {
        const r = n.queryKey
          , a = n.queryHash ?? td(r, n);
        let s = this.get(a);
        return s || (s = new vC({
            cache: this,
            queryKey: r,
            queryHash: a,
            options: t.defaultQueryOptions(n),
            state: o,
            defaultOptions: t.getQueryDefaults(r)
        }),
        this.add(s)),
        s
    }
    add(t) {
        N(this, Lt).has(t.queryHash) || (N(this, Lt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Lt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Lt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ve.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Lt).get(t)
    }
    getAll() {
        return [...N(this, Lt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(o => Vp(n, o))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(o => Vp(t, o)) : n
    }
    notify(t) {
        Ve.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ve.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ve.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Lt = new WeakMap,
wf), Ft, Ue, to, zt, fn, Sf, wC = (Sf = class extends ig {
    constructor(t) {
        super();
        se(this, zt);
        se(this, Ft);
        se(this, Ue);
        se(this, to);
        this.mutationId = t.mutationId,
        Y(this, Ue, t.mutationCache),
        Y(this, Ft, []),
        this.state = t.state || SC(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, Ft).includes(t) || (N(this, Ft).push(t),
        this.clearGcTimeout(),
        N(this, Ue).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        Y(this, Ft, N(this, Ft).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, Ue).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, Ft).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, Ue).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, to)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var r, a, s, i, l, c, d, p, u, y, S, f, w, g, m, x, C, b, P, E;
        Y(this, to, sg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (k, _) => {
                _e(this, zt, fn).call(this, {
                    type: "failed",
                    failureCount: k,
                    error: _
                })
            }
            ,
            onPause: () => {
                _e(this, zt, fn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                _e(this, zt, fn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, Ue).canRun(this)
        }));
        const n = this.state.status === "pending"
          , o = !N(this, to).canStart();
        try {
            if (!n) {
                _e(this, zt, fn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((a = (r = N(this, Ue).config).onMutate) == null ? void 0 : a.call(r, t, this));
                const _ = await ((i = (s = this.options).onMutate) == null ? void 0 : i.call(s, t));
                _ !== this.state.context && _e(this, zt, fn).call(this, {
                    type: "pending",
                    context: _,
                    variables: t,
                    isPaused: o
                })
            }
            const k = await N(this, to).start();
            return await ((c = (l = N(this, Ue).config).onSuccess) == null ? void 0 : c.call(l, k, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null ? void 0 : p.call(d, k, t, this.state.context)),
            await ((y = (u = N(this, Ue).config).onSettled) == null ? void 0 : y.call(u, k, null, this.state.variables, this.state.context, this)),
            await ((f = (S = this.options).onSettled) == null ? void 0 : f.call(S, k, null, t, this.state.context)),
            _e(this, zt, fn).call(this, {
                type: "success",
                data: k
            }),
            k
        } catch (k) {
            try {
                throw await ((g = (w = N(this, Ue).config).onError) == null ? void 0 : g.call(w, k, t, this.state.context, this)),
                await ((x = (m = this.options).onError) == null ? void 0 : x.call(m, k, t, this.state.context)),
                await ((b = (C = N(this, Ue).config).onSettled) == null ? void 0 : b.call(C, void 0, k, this.state.variables, this.state.context, this)),
                await ((E = (P = this.options).onSettled) == null ? void 0 : E.call(P, void 0, k, t, this.state.context)),
                k
            } finally {
                _e(this, zt, fn).call(this, {
                    type: "error",
                    error: k
                })
            }
        } finally {
            N(this, Ue).runNext(this)
        }
    }
}
,
Ft = new WeakMap,
Ue = new WeakMap,
to = new WeakMap,
zt = new WeakSet,
fn = function(t) {
    const n = o => {
        switch (t.type) {
        case "failed":
            return {
                ...o,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...o,
                isPaused: !0
            };
        case "continue":
            return {
                ...o,
                isPaused: !1
            };
        case "pending":
            return {
                ...o,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...o,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...o,
                data: void 0,
                error: t.error,
                failureCount: o.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Ve.batch( () => {
        N(this, Ft).forEach(o => {
            o.onMutationUpdate(t)
        }
        ),
        N(this, Ue).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Sf);
function SC() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var ot, xa, Cf, CC = (Cf = class extends Ni {
    constructor(t={}) {
        super();
        se(this, ot);
        se(this, xa);
        this.config = t,
        Y(this, ot, new Map),
        Y(this, xa, Date.now())
    }
    build(t, n, o) {
        const r = new wC({
            mutationCache: this,
            mutationId: ++Da(this, xa)._,
            options: t.defaultMutationOptions(n),
            state: o
        });
        return this.add(r),
        r
    }
    add(t) {
        const n = Ja(t)
          , o = N(this, ot).get(n) ?? [];
        o.push(t),
        N(this, ot).set(n, o),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var o;
        const n = Ja(t);
        if (N(this, ot).has(n)) {
            const r = (o = N(this, ot).get(n)) == null ? void 0 : o.filter(a => a !== t);
            r && (r.length === 0 ? N(this, ot).delete(n) : N(this, ot).set(n, r))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var o;
        const n = (o = N(this, ot).get(Ja(t))) == null ? void 0 : o.find(r => r.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var o;
        const n = (o = N(this, ot).get(Ja(t))) == null ? void 0 : o.find(r => r !== t && r.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        Ve.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...N(this, ot).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(o => Hp(n, o))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Hp(t, n))
    }
    notify(t) {
        Ve.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ve.batch( () => Promise.all(t.map(n => n.continue().catch(Et))))
    }
}
,
ot = new WeakMap,
xa = new WeakMap,
Cf);
function Ja(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Qp(e) {
    return {
        onFetch: (t, n) => {
            var d, p, u, y, S;
            const o = t.options
              , r = (u = (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : u.direction
              , a = ((y = t.state.data) == null ? void 0 : y.pages) || []
              , s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let i = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const c = async () => {
                let f = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? f = !0 : t.signal.addEventListener("abort", () => {
                            f = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = ng(t.options, t.fetchOptions)
                  , m = async (x, C, b) => {
                    if (f)
                        return Promise.reject();
                    if (C == null && x.pages.length)
                        return Promise.resolve(x);
                    const P = {
                        queryKey: t.queryKey,
                        pageParam: C,
                        direction: b ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    w(P);
                    const E = await g(P)
                      , {maxPages: k} = t.options
                      , _ = b ? uC : cC;
                    return {
                        pages: _(x.pages, E, k),
                        pageParams: _(x.pageParams, C, k)
                    }
                }
                ;
                if (r && a.length) {
                    const x = r === "backward"
                      , C = x ? bC : Yp
                      , b = {
                        pages: a,
                        pageParams: s
                    }
                      , P = C(o, b);
                    i = await m(b, P, x)
                } else {
                    const x = e ?? a.length;
                    do {
                        const C = l === 0 ? s[0] ?? o.initialPageParam : Yp(o, i);
                        if (l > 0 && C == null)
                            break;
                        i = await m(i, C),
                        l++
                    } while (l < x)
                }
                return i
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var f, w;
                return (w = (f = t.options).persister) == null ? void 0 : w.call(f, c, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = c
        }
    }
}
function Yp(e, {pages: t, pageParams: n}) {
    const o = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[o], t, n[o], n) : void 0
}
function bC(e, {pages: t, pageParams: n}) {
    var o;
    return t.length > 0 ? (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, t[0], t, n[0], n) : void 0
}
var Se, Sn, Cn, qo, Zo, bn, Jo, er, bf, TC = (bf = class {
    constructor(e={}) {
        se(this, Se);
        se(this, Sn);
        se(this, Cn);
        se(this, qo);
        se(this, Zo);
        se(this, bn);
        se(this, Jo);
        se(this, er);
        Y(this, Se, e.queryCache || new yC),
        Y(this, Sn, e.mutationCache || new CC),
        Y(this, Cn, e.defaultOptions || {}),
        Y(this, qo, new Map),
        Y(this, Zo, new Map),
        Y(this, bn, 0)
    }
    mount() {
        Da(this, bn)._++,
        N(this, bn) === 1 && (Y(this, Jo, og.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, Se).onFocus())
        }
        )),
        Y(this, er, qs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, Se).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Da(this, bn)._--,
        N(this, bn) === 0 && ((e = N(this, Jo)) == null || e.call(this),
        Y(this, Jo, void 0),
        (t = N(this, er)) == null || t.call(this),
        Y(this, er, void 0))
    }
    isFetching(e) {
        return N(this, Se).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, Sn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, Se).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , o = N(this, Se).build(this, n);
            return e.revalidateIfStale && o.isStaleByTime(Wp(n.staleTime, o)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return N(this, Se).findAll(e).map( ({queryKey: t, state: n}) => {
            const o = n.data;
            return [t, o]
        }
        )
    }
    setQueryData(e, t, n) {
        const o = this.defaultQueryOptions({
            queryKey: e
        })
          , r = N(this, Se).get(o.queryHash)
          , a = r == null ? void 0 : r.state.data
          , s = oC(t, a);
        if (s !== void 0)
            return N(this, Se).build(this, o).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ve.batch( () => N(this, Se).findAll(e).map( ({queryKey: o}) => [o, this.setQueryData(o, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, Se).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, Se);
        Ve.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, Se)
          , o = {
            type: "active",
            ...e
        };
        return Ve.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries(o, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , o = Ve.batch( () => N(this, Se).findAll(e).map(r => r.cancel(n)));
        return Promise.all(o).then(Et).catch(Et)
    }
    invalidateQueries(e={}, t={}) {
        return Ve.batch( () => {
            if (N(this, Se).findAll(e).forEach(o => {
                o.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , o = Ve.batch( () => N(this, Se).findAll(e).filter(r => !r.isDisabled()).map(r => {
            let a = r.fetch(void 0, n);
            return n.throwOnError || (a = a.catch(Et)),
            r.state.fetchStatus === "paused" ? Promise.resolve() : a
        }
        ));
        return Promise.all(o).then(Et)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, Se).build(this, t);
        return n.isStaleByTime(Wp(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Et).catch(Et)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Qp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Et).catch(Et)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Qp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return qs.isOnline() ? N(this, Sn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, Se)
    }
    getMutationCache() {
        return N(this, Sn)
    }
    getDefaultOptions() {
        return N(this, Cn)
    }
    setDefaultOptions(e) {
        Y(this, Cn, e)
    }
    setQueryDefaults(e, t) {
        N(this, qo).set(pa(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, qo).values()];
        let n = {};
        return t.forEach(o => {
            fa(e, o.queryKey) && (n = {
                ...n,
                ...o.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, Zo).set(pa(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, Zo).values()];
        let n = {};
        return t.forEach(o => {
            fa(e, o.mutationKey) && (n = {
                ...n,
                ...o.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, Cn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = td(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === nd && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, Cn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, Se).clear(),
        N(this, Sn).clear()
    }
}
,
Se = new WeakMap,
Sn = new WeakMap,
Cn = new WeakMap,
qo = new WeakMap,
Zo = new WeakMap,
bn = new WeakMap,
Jo = new WeakMap,
er = new WeakMap,
bf), EC = h.createContext(void 0), PC = ({client: e, children: t}) => (h.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
v.jsx(EC.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zs() {
    return Zs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
    ,
    Zs.apply(this, arguments)
}
var Pn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Pn || (Pn = {}));
const Xp = "popstate";
function kC(e) {
    e === void 0 && (e = {});
    function t(o, r) {
        let {pathname: a, search: s, hash: i} = o.location;
        return Oc("", {
            pathname: a,
            search: s,
            hash: i
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }
    function n(o, r) {
        return typeof r == "string" ? r : cg(r)
    }
    return RC(t, n, null, e)
}
function tt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function lg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function NC() {
    return Math.random().toString(36).substr(2, 8)
}
function qp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Oc(e, t, n, o) {
    return n === void 0 && (n = null),
    Zs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ai(t) : t, {
        state: n,
        key: t && t.key || o || NC()
    })
}
function cg(e) {
    let {pathname: t="/", search: n="", hash: o=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
}
function Ai(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let o = e.indexOf("?");
        o >= 0 && (t.search = e.substr(o),
        e = e.substr(0, o)),
        e && (t.pathname = e)
    }
    return t
}
function RC(e, t, n, o) {
    o === void 0 && (o = {});
    let {window: r=document.defaultView, v5Compat: a=!1} = o
      , s = r.history
      , i = Pn.Pop
      , l = null
      , c = d();
    c == null && (c = 0,
    s.replaceState(Zs({}, s.state, {
        idx: c
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function p() {
        i = Pn.Pop;
        let w = d()
          , g = w == null ? null : w - c;
        c = w,
        l && l({
            action: i,
            location: f.location,
            delta: g
        })
    }
    function u(w, g) {
        i = Pn.Push;
        let m = Oc(f.location, w, g);
        c = d() + 1;
        let x = qp(m, c)
          , C = f.createHref(m);
        try {
            s.pushState(x, "", C)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            r.location.assign(C)
        }
        a && l && l({
            action: i,
            location: f.location,
            delta: 1
        })
    }
    function y(w, g) {
        i = Pn.Replace;
        let m = Oc(f.location, w, g);
        c = d();
        let x = qp(m, c)
          , C = f.createHref(m);
        s.replaceState(x, "", C),
        a && l && l({
            action: i,
            location: f.location,
            delta: 0
        })
    }
    function S(w) {
        let g = r.location.origin !== "null" ? r.location.origin : r.location.href
          , m = typeof w == "string" ? w : cg(w);
        return m = m.replace(/ $/, "%20"),
        tt(g, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,g)
    }
    let f = {
        get action() {
            return i
        },
        get location() {
            return e(r, s)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return r.addEventListener(Xp, p),
            l = w,
            () => {
                r.removeEventListener(Xp, p),
                l = null
            }
        },
        createHref(w) {
            return t(r, w)
        },
        createURL: S,
        encodeLocation(w) {
            let g = S(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: u,
        replace: y,
        go(w) {
            return s.go(w)
        }
    };
    return f
}
var Zp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Zp || (Zp = {}));
function AC(e, t, n) {
    return n === void 0 && (n = "/"),
    DC(e, t, n, !1)
}
function DC(e, t, n, o) {
    let r = typeof t == "string" ? Ai(t) : t
      , a = pg(r.pathname || "/", n);
    if (a == null)
        return null;
    let s = ug(e);
    IC(s);
    let i = null;
    for (let l = 0; i == null && l < s.length; ++l) {
        let c = WC(a);
        i = $C(s[l], c, o)
    }
    return i
}
function ug(e, t, n, o) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    o === void 0 && (o = "");
    let r = (a, s, i) => {
        let l = {
            relativePath: i === void 0 ? a.path || "" : i,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: s,
            route: a
        };
        l.relativePath.startsWith("/") && (tt(l.relativePath.startsWith(o), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(o.length));
        let c = Vo([o, l.relativePath])
          , d = n.concat(l);
        a.children && a.children.length > 0 && (tt(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        ug(a.children, t, d, c)),
        !(a.path == null && !a.index) && t.push({
            path: c,
            score: FC(c, a.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (a, s) => {
        var i;
        if (a.path === "" || !((i = a.path) != null && i.includes("?")))
            r(a, s);
        else
            for (let l of dg(a.path))
                r(a, s, l)
    }
    ),
    t
}
function dg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...o] = t
      , r = n.endsWith("?")
      , a = n.replace(/\?$/, "");
    if (o.length === 0)
        return r ? [a, ""] : [a];
    let s = dg(o.join("/"))
      , i = [];
    return i.push(...s.map(l => l === "" ? a : [a, l].join("/"))),
    r && i.push(...s),
    i.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function IC(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : zC(t.routesMeta.map(o => o.childrenIndex), n.routesMeta.map(o => o.childrenIndex)))
}
const jC = /^:[\w-]+$/
  , _C = 3
  , OC = 2
  , MC = 1
  , BC = 10
  , LC = -2
  , Jp = e => e === "*";
function FC(e, t) {
    let n = e.split("/")
      , o = n.length;
    return n.some(Jp) && (o += LC),
    t && (o += OC),
    n.filter(r => !Jp(r)).reduce( (r, a) => r + (jC.test(a) ? _C : a === "" ? MC : BC), o)
}
function zC(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (o, r) => o === t[r]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function $C(e, t, n) {
    let {routesMeta: o} = e
      , r = {}
      , a = "/"
      , s = [];
    for (let i = 0; i < o.length; ++i) {
        let l = o[i]
          , c = i === o.length - 1
          , d = a === "/" ? t : t.slice(a.length) || "/"
          , p = ef({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, d)
          , u = l.route;
        if (!p && c && n && !o[o.length - 1].route.index && (p = ef({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !p)
            return null;
        Object.assign(r, p.params),
        s.push({
            params: r,
            pathname: Vo([a, p.pathname]),
            pathnameBase: VC(Vo([a, p.pathnameBase])),
            route: u
        }),
        p.pathnameBase !== "/" && (a = Vo([a, p.pathnameBase]))
    }
    return s
}
function ef(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,o] = UC(e.path, e.caseSensitive, e.end)
      , r = t.match(n);
    if (!r)
        return null;
    let a = r[0]
      , s = a.replace(/(.)\/+$/, "$1")
      , i = r.slice(1);
    return {
        params: o.reduce( (c, d, p) => {
            let {paramName: u, isOptional: y} = d;
            if (u === "*") {
                let f = i[p] || "";
                s = a.slice(0, a.length - f.length).replace(/(.)\/+$/, "$1")
            }
            const S = i[p];
            return y && !S ? c[u] = void 0 : c[u] = (S || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: a,
        pathnameBase: s,
        pattern: e
    }
}
function UC(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    lg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let o = []
      , r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, i, l) => (o.push({
        paramName: i,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r,t ? void 0 : "i"), o]
}
function WC(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return lg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function pg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , o = e.charAt(n);
    return o && o !== "/" ? null : e.slice(n) || "/"
}
const Vo = e => e.join("/").replace(/\/\/+/g, "/")
  , VC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function HC(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const fg = ["post", "put", "patch", "delete"];
new Set(fg);
const GC = ["get", ...fg];
new Set(GC);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Js() {
    return Js = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
    ,
    Js.apply(this, arguments)
}
const KC = h.createContext(null)
  , QC = h.createContext(null)
  , mg = h.createContext(null)
  , Di = h.createContext(null)
  , Ii = h.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , hg = h.createContext(null);
function od() {
    return h.useContext(Di) != null
}
function vg() {
    return od() || tt(!1),
    h.useContext(Di).location
}
function YC(e, t) {
    return XC(e, t)
}
function XC(e, t, n, o) {
    od() || tt(!1);
    let {navigator: r} = h.useContext(mg)
      , {matches: a} = h.useContext(Ii)
      , s = a[a.length - 1]
      , i = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let c = vg(), d;
    if (t) {
        var p;
        let w = typeof t == "string" ? Ai(t) : t;
        l === "/" || (p = w.pathname) != null && p.startsWith(l) || tt(!1),
        d = w
    } else
        d = c;
    let u = d.pathname || "/"
      , y = u;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        y = "/" + u.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = AC(e, {
        pathname: y
    })
      , f = tb(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, i, w.params),
        pathname: Vo([l, r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Vo([l, r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), a, n, o);
    return t && f ? h.createElement(Di.Provider, {
        value: {
            location: Js({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Pn.Pop
        }
    }, f) : f
}
function qC() {
    let e = ab()
      , t = HC(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return h.createElement(h.Fragment, null, h.createElement("h2", null, "Unexpected Application Error!"), h.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? h.createElement("pre", {
        style: r
    }, n) : null, null)
}
const ZC = h.createElement(qC, null);
class JC extends h.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? h.createElement(Ii.Provider, {
            value: this.props.routeContext
        }, h.createElement(hg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function eb(e) {
    let {routeContext: t, match: n, children: o} = e
      , r = h.useContext(KC);
    return r && r.static && r.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    h.createElement(Ii.Provider, {
        value: t
    }, o)
}
function tb(e, t, n, o) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    o === void 0 && (o = null),
    e == null) {
        var a;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((a = o) != null && a.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , i = (r = n) == null ? void 0 : r.errors;
    if (i != null) {
        let d = s.findIndex(p => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0);
        d >= 0 || tt(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let l = !1
      , c = -1;
    if (n && o && o.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let p = s[d];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = d),
            p.route.id) {
                let {loaderData: u, errors: y} = n
                  , S = p.route.loader && u[p.route.id] === void 0 && (!y || y[p.route.id] === void 0);
                if (p.route.lazy || S) {
                    l = !0,
                    c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, p, u) => {
        let y, S = !1, f = null, w = null;
        n && (y = i && p.route.id ? i[p.route.id] : void 0,
        f = p.route.errorElement || ZC,
        l && (c < 0 && u === 0 ? (S = !0,
        w = null) : c === u && (S = !0,
        w = p.route.hydrateFallbackElement || null)));
        let g = t.concat(s.slice(0, u + 1))
          , m = () => {
            let x;
            return y ? x = f : S ? x = w : p.route.Component ? x = h.createElement(p.route.Component, null) : p.route.element ? x = p.route.element : x = d,
            h.createElement(eb, {
                match: p,
                routeContext: {
                    outlet: d,
                    matches: g,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || u === 0) ? h.createElement(JC, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: y,
            children: m(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var Mc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Mc || {});
function nb(e) {
    let t = h.useContext(QC);
    return t || tt(!1),
    t
}
function ob(e) {
    let t = h.useContext(Ii);
    return t || tt(!1),
    t
}
function rb(e) {
    let t = ob()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || tt(!1),
    n.route.id
}
function ab() {
    var e;
    let t = h.useContext(hg)
      , n = nb(Mc.UseRouteError)
      , o = rb(Mc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[o]
}
function Bc(e) {
    tt(!1)
}
function sb(e) {
    let {basename: t="/", children: n=null, location: o, navigationType: r=Pn.Pop, navigator: a, static: s=!1, future: i} = e;
    od() && tt(!1);
    let l = t.replace(/^\/*/, "/")
      , c = h.useMemo( () => ({
        basename: l,
        navigator: a,
        static: s,
        future: Js({
            v7_relativeSplatPath: !1
        }, i)
    }), [l, i, a, s]);
    typeof o == "string" && (o = Ai(o));
    let {pathname: d="/", search: p="", hash: u="", state: y=null, key: S="default"} = o
      , f = h.useMemo( () => {
        let w = pg(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: p,
                hash: u,
                state: y,
                key: S
            },
            navigationType: r
        }
    }
    , [l, d, p, u, y, S, r]);
    return f == null ? null : h.createElement(mg.Provider, {
        value: c
    }, h.createElement(Di.Provider, {
        children: n,
        value: f
    }))
}
function ib(e) {
    let {children: t, location: n} = e;
    return YC(Lc(t), n)
}
new Promise( () => {}
);
function Lc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return h.Children.forEach(e, (o, r) => {
        if (!h.isValidElement(o))
            return;
        let a = [...t, r];
        if (o.type === h.Fragment) {
            n.push.apply(n, Lc(o.props.children, a));
            return
        }
        o.type !== Bc && tt(!1),
        !o.props.index || !o.props.children || tt(!1);
        let s = {
            id: o.props.id || a.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            loader: o.props.loader,
            action: o.props.action,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (s.children = Lc(o.props.children, a)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const lb = "6";
try {
    window.__reactRouterVersion = lb
} catch {}
const cb = "startTransition"
  , tf = Of[cb];
function ub(e) {
    let {basename: t, children: n, future: o, window: r} = e
      , a = h.useRef();
    a.current == null && (a.current = kC({
        window: r,
        v5Compat: !0
    }));
    let s = a.current
      , [i,l] = h.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: c} = o || {}
      , d = h.useCallback(p => {
        c && tf ? tf( () => l(p)) : l(p)
    }
    , [l, c]);
    return h.useLayoutEffect( () => s.listen(d), [s, d]),
    h.createElement(sb, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: s,
        future: o
    })
}
var nf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(nf || (nf = {}));
var of;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(of || (of = {}));
function db(e, t=[]) {
    let n = [];
    function o(a, s) {
        const i = h.createContext(s)
          , l = n.length;
        n = [...n, s];
        function c(p) {
            const {scope: u, children: y, ...S} = p
              , f = (u == null ? void 0 : u[e][l]) || i
              , w = h.useMemo( () => S, Object.values(S));
            return v.jsx(f.Provider, {
                value: w,
                children: y
            })
        }
        function d(p, u) {
            const y = (u == null ? void 0 : u[e][l]) || i
              , S = h.useContext(y);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return c.displayName = a + "Provider",
        [c, d]
    }
    const r = () => {
        const a = n.map(s => h.createContext(s));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || a;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return r.scopeName = e,
    [o, pb(r, ...t)]
}
function pb(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const s = o.reduce( (i, {useScope: l, scopeName: c}) => {
                const p = l(a)[`__scope${c}`];
                return {
                    ...i,
                    ...p
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var fb = h.createContext(void 0);
function rd(e) {
    const t = h.useContext(fb);
    return e || t || "ltr"
}
var Sl = "rovingFocusGroup.onEntryFocus"
  , mb = {
    bubbles: !1,
    cancelable: !0
}
  , ji = "RovingFocusGroup"
  , [Fc,gg,hb] = zu(ji)
  , [vb,xg] = db(ji, [hb])
  , [gb,xb] = vb(ji)
  , yg = h.forwardRef( (e, t) => v.jsx(Fc.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: v.jsx(Fc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: v.jsx(yb, {
            ...e,
            ref: t
        })
    })
}));
yg.displayName = ji;
var yb = h.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: o, loop: r=!1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: l, onEntryFocus: c, preventScrollOnEntryFocus: d=!1, ...p} = e
      , u = h.useRef(null)
      , y = ye(t, u)
      , S = rd(a)
      , [f=null,w] = la({
        prop: s,
        defaultProp: i,
        onChange: l
    })
      , [g,m] = h.useState(!1)
      , x = et(c)
      , C = gg(n)
      , b = h.useRef(!1)
      , [P,E] = h.useState(0);
    return h.useEffect( () => {
        const k = u.current;
        if (k)
            return k.addEventListener(Sl, x),
            () => k.removeEventListener(Sl, x)
    }
    , [x]),
    v.jsx(gb, {
        scope: n,
        orientation: o,
        dir: S,
        loop: r,
        currentTabStopId: f,
        onItemFocus: h.useCallback(k => w(k), [w]),
        onItemShiftTab: h.useCallback( () => m(!0), []),
        onFocusableItemAdd: h.useCallback( () => E(k => k + 1), []),
        onFocusableItemRemove: h.useCallback( () => E(k => k - 1), []),
        children: v.jsx(ee.div, {
            tabIndex: g || P === 0 ? -1 : 0,
            "data-orientation": o,
            ...p,
            ref: y,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: G(e.onMouseDown, () => {
                b.current = !0
            }
            ),
            onFocus: G(e.onFocus, k => {
                const _ = !b.current;
                if (k.target === k.currentTarget && _ && !g) {
                    const I = new CustomEvent(Sl,mb);
                    if (k.currentTarget.dispatchEvent(I),
                    !I.defaultPrevented) {
                        const z = C().filter(M => M.focusable)
                          , O = z.find(M => M.active)
                          , W = z.find(M => M.id === f)
                          , V = [O, W, ...z].filter(Boolean).map(M => M.ref.current);
                        Cg(V, d)
                    }
                }
                b.current = !1
            }
            ),
            onBlur: G(e.onBlur, () => m(!1))
        })
    })
}
)
  , wg = "RovingFocusGroupItem"
  , Sg = h.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: o=!0, active: r=!1, tabStopId: a, ...s} = e
      , i = Ea()
      , l = a || i
      , c = xb(wg, n)
      , d = c.currentTabStopId === l
      , p = gg(n)
      , {onFocusableItemAdd: u, onFocusableItemRemove: y} = c;
    return h.useEffect( () => {
        if (o)
            return u(),
            () => y()
    }
    , [o, u, y]),
    v.jsx(Fc.ItemSlot, {
        scope: n,
        id: l,
        focusable: o,
        active: r,
        children: v.jsx(ee.span, {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...s,
            ref: t,
            onMouseDown: G(e.onMouseDown, S => {
                o ? c.onItemFocus(l) : S.preventDefault()
            }
            ),
            onFocus: G(e.onFocus, () => c.onItemFocus(l)),
            onKeyDown: G(e.onKeyDown, S => {
                if (S.key === "Tab" && S.shiftKey) {
                    c.onItemShiftTab();
                    return
                }
                if (S.target !== S.currentTarget)
                    return;
                const f = Cb(S, c.orientation, c.dir);
                if (f !== void 0) {
                    if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey)
                        return;
                    S.preventDefault();
                    let g = p().filter(m => m.focusable).map(m => m.ref.current);
                    if (f === "last")
                        g.reverse();
                    else if (f === "prev" || f === "next") {
                        f === "prev" && g.reverse();
                        const m = g.indexOf(S.currentTarget);
                        g = c.loop ? bb(g, m + 1) : g.slice(m + 1)
                    }
                    setTimeout( () => Cg(g))
                }
            }
            )
        })
    })
}
);
Sg.displayName = wg;
var wb = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function Sb(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function Cb(e, t, n) {
    const o = Sb(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
        return wb[o]
}
function Cg(e, t=!1) {
    const n = document.activeElement;
    for (const o of e)
        if (o === n || (o.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function bb(e, t) {
    return e.map( (n, o) => e[(t + o) % e.length])
}
var Tb = yg
  , Eb = Sg
  , ad = "Tabs"
  , [Pb,SE] = gi(ad, [xg])
  , bg = xg()
  , [kb,sd] = Pb(ad)
  , Tg = h.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: o, onValueChange: r, defaultValue: a, orientation: s="horizontal", dir: i, activationMode: l="automatic", ...c} = e
      , d = rd(i)
      , [p,u] = la({
        prop: o,
        onChange: r,
        defaultProp: a
    });
    return v.jsx(kb, {
        scope: n,
        baseId: Ea(),
        value: p,
        onValueChange: u,
        orientation: s,
        dir: d,
        activationMode: l,
        children: v.jsx(ee.div, {
            dir: d,
            "data-orientation": s,
            ...c,
            ref: t
        })
    })
}
);
Tg.displayName = ad;
var Eg = "TabsList"
  , Pg = h.forwardRef( (e, t) => {
    const {__scopeTabs: n, loop: o=!0, ...r} = e
      , a = sd(Eg, n)
      , s = bg(n);
    return v.jsx(Tb, {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: v.jsx(ee.div, {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...r,
            ref: t
        })
    })
}
);
Pg.displayName = Eg;
var kg = "TabsTrigger"
  , Ng = h.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: o, disabled: r=!1, ...a} = e
      , s = sd(kg, n)
      , i = bg(n)
      , l = Dg(s.baseId, o)
      , c = Ig(s.baseId, o)
      , d = o === s.value;
    return v.jsx(Eb, {
        asChild: !0,
        ...i,
        focusable: !r,
        active: d,
        children: v.jsx(ee.button, {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": c,
            "data-state": d ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: l,
            ...a,
            ref: t,
            onMouseDown: G(e.onMouseDown, p => {
                !r && p.button === 0 && p.ctrlKey === !1 ? s.onValueChange(o) : p.preventDefault()
            }
            ),
            onKeyDown: G(e.onKeyDown, p => {
                [" ", "Enter"].includes(p.key) && s.onValueChange(o)
            }
            ),
            onFocus: G(e.onFocus, () => {
                const p = s.activationMode !== "manual";
                !d && !r && p && s.onValueChange(o)
            }
            )
        })
    })
}
);
Ng.displayName = kg;
var Rg = "TabsContent"
  , Ag = h.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: o, forceMount: r, children: a, ...s} = e
      , i = sd(Rg, n)
      , l = Dg(i.baseId, o)
      , c = Ig(i.baseId, o)
      , d = o === i.value
      , p = h.useRef(d);
    return h.useEffect( () => {
        const u = requestAnimationFrame( () => p.current = !1);
        return () => cancelAnimationFrame(u)
    }
    , []),
    v.jsx(yi, {
        present: r || d,
        children: ({present: u}) => v.jsx(ee.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": i.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !u,
            id: c,
            tabIndex: 0,
            ...s,
            ref: t,
            style: {
                ...e.style,
                animationDuration: p.current ? "0s" : void 0
            },
            children: u && a
        })
    })
}
);
Ag.displayName = Rg;
function Dg(e, t) {
    return `${e}-trigger-${t}`
}
function Ig(e, t) {
    return `${e}-content-${t}`
}
var Nb = Tg
  , jg = Pg
  , _g = Ng
  , Og = Ag;
const Rb = Nb
  , Mg = h.forwardRef( ({className: e, ...t}, n) => v.jsx(jg, {
    "data-lov-id": "src/components/ui/tabs.tsx:12:2",
    "data-lov-name": "TabsPrimitive.List",
    "data-component-path": "src/components/ui/tabs.tsx",
    "data-component-line": "12",
    "data-component-file": "tabs.tsx",
    "data-component-name": "TabsPrimitive.List",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
    ...t
}));
Mg.displayName = jg.displayName;
const Ir = h.forwardRef( ({className: e, ...t}, n) => v.jsx(_g, {
    "data-lov-id": "src/components/ui/tabs.tsx:27:2",
    "data-lov-name": "TabsPrimitive.Trigger",
    "data-component-path": "src/components/ui/tabs.tsx",
    "data-component-line": "27",
    "data-component-file": "tabs.tsx",
    "data-component-name": "TabsPrimitive.Trigger",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
    ...t
}));
Ir.displayName = _g.displayName;
const jr = h.forwardRef( ({className: e, ...t}, n) => v.jsx(Og, {
    "data-lov-id": "src/components/ui/tabs.tsx:42:2",
    "data-lov-name": "TabsPrimitive.Content",
    "data-component-path": "src/components/ui/tabs.tsx",
    "data-component-line": "42",
    "data-component-file": "tabs.tsx",
    "data-component-name": "TabsPrimitive.Content",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
jr.displayName = Og.displayName;
const ro = h.forwardRef( ({className: e, ...t}, n) => v.jsx("div", {
    "data-lov-id": "src/components/ui/card.tsx:9:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.tsx",
    "data-component-line": "9",
    "data-component-file": "card.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
ro.displayName = "Card";
const ma = h.forwardRef( ({className: e, ...t}, n) => v.jsx("div", {
    "data-lov-id": "src/components/ui/card.tsx:24:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.tsx",
    "data-component-line": "24",
    "data-component-file": "card.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
ma.displayName = "CardHeader";
const ha = h.forwardRef( ({className: e, ...t}, n) => v.jsx("h3", {
    "data-lov-id": "src/components/ui/card.tsx:36:2",
    "data-lov-name": "h3",
    "data-component-path": "src/components/ui/card.tsx",
    "data-component-line": "36",
    "data-component-file": "card.tsx",
    "data-component-name": "h3",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
ha.displayName = "CardTitle";
const Ab = h.forwardRef( ({className: e, ...t}, n) => v.jsx("p", {
    "data-lov-id": "src/components/ui/card.tsx:51:2",
    "data-lov-name": "p",
    "data-component-path": "src/components/ui/card.tsx",
    "data-component-line": "51",
    "data-component-file": "card.tsx",
    "data-component-name": "p",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("text-sm text-muted-foreground", e),
    ...t
}));
Ab.displayName = "CardDescription";
const ao = h.forwardRef( ({className: e, ...t}, n) => v.jsx("div", {
    "data-lov-id": "src/components/ui/card.tsx:63:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.tsx",
    "data-component-line": "63",
    "data-component-file": "card.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("p-6 pt-0", e),
    ...t
}));
ao.displayName = "CardContent";
const Db = h.forwardRef( ({className: e, ...t}, n) => v.jsx("div", {
    "data-lov-id": "src/components/ui/card.tsx:71:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.tsx",
    "data-component-line": "71",
    "data-component-file": "card.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("flex items-center p-6 pt-0", e),
    ...t
}));
Db.displayName = "CardFooter";
const Ib = {
    money: 5e4,
    wins: 0,
    losses: 0,
    selectedCarId: null,
    cars: [{
        id: "1",
        name: "Civic Type R",
        brand: "Honda",
        price: 25e3,
        basePower: 300,
        baseWeight: 1400,
        image: "🏎️",
        owned: !1,
        upgrades: {
            engine: 0,
            turbo: 0,
            tires: 0,
            weight: 0
        }
    }, {
        id: "2",
        name: "Mustang GT",
        brand: "Ford",
        price: 35e3,
        basePower: 450,
        baseWeight: 1700,
        image: "🚗",
        owned: !1,
        upgrades: {
            engine: 0,
            turbo: 0,
            tires: 0,
            weight: 0
        }
    }, {
        id: "3",
        name: "Supra",
        brand: "Toyota",
        price: 55e3,
        basePower: 380,
        baseWeight: 1540,
        image: "🏁",
        owned: !1,
        upgrades: {
            engine: 0,
            turbo: 0,
            tires: 0,
            weight: 0
        }
    }, {
        id: "4",
        name: "Skyline GT-R",
        brand: "Nissan",
        price: 8e4,
        basePower: 600,
        baseWeight: 1600,
        image: "🚙",
        owned: !1,
        upgrades: {
            engine: 0,
            turbo: 0,
            tires: 0,
            weight: 0
        }
    }],
    parts: [{
        id: "engine1",
        name: "Stage 1 Engine",
        type: "engine",
        powerIncrease: 50,
        weightChange: 0,
        price: 5e3,
        level: 1
    }, {
        id: "engine2",
        name: "Stage 2 Engine",
        type: "engine",
        powerIncrease: 100,
        weightChange: 10,
        price: 12e3,
        level: 2
    }, {
        id: "engine3",
        name: "Stage 3 Engine",
        type: "engine",
        powerIncrease: 200,
        weightChange: 20,
        price: 25e3,
        level: 3
    }, {
        id: "turbo1",
        name: "Small Turbo",
        type: "turbo",
        powerIncrease: 75,
        weightChange: 15,
        price: 8e3,
        level: 1
    }, {
        id: "turbo2",
        name: "Big Turbo",
        type: "turbo",
        powerIncrease: 150,
        weightChange: 25,
        price: 18e3,
        level: 2
    }, {
        id: "turbo3",
        name: "Twin Turbo",
        type: "turbo",
        powerIncrease: 250,
        weightChange: 40,
        price: 35e3,
        level: 3
    }, {
        id: "tires1",
        name: "Sport Tires",
        type: "tires",
        powerIncrease: 20,
        weightChange: -5,
        price: 2e3,
        level: 1
    }, {
        id: "tires2",
        name: "Racing Slicks",
        type: "tires",
        powerIncrease: 40,
        weightChange: -10,
        price: 5e3,
        level: 2
    }, {
        id: "weight1",
        name: "Weight Reduction",
        type: "weight",
        powerIncrease: 0,
        weightChange: -100,
        price: 1e4,
        level: 1
    }, {
        id: "weight2",
        name: "Carbon Fiber",
        type: "weight",
        powerIncrease: 0,
        weightChange: -200,
        price: 25e3,
        level: 2
    }]
}
  , jb = (e, t) => {
    switch (t.type) {
    case "BUY_CAR":
        const n = e.cars.find(s => s.id === t.carId);
        return !n || n.owned || e.money < n.price ? e : {
            ...e,
            money: e.money - n.price,
            cars: e.cars.map(s => s.id === t.carId ? {
                ...s,
                owned: !0
            } : s),
            selectedCarId: t.carId
        };
    case "SELECT_CAR":
        return e.cars.find(s => s.id === t.carId && s.owned) ? {
            ...e,
            selectedCarId: t.carId
        } : e;
    case "BUY_PART":
        const r = e.parts.find(s => s.type === t.partType && s.level === t.level)
          , a = e.cars.find(s => s.id === t.carId);
        return !r || !a || !a.owned || e.money < r.price || a.upgrades[t.partType] >= t.level ? e : {
            ...e,
            money: e.money - r.price,
            cars: e.cars.map(s => s.id === t.carId ? {
                ...s,
                upgrades: {
                    ...s.upgrades,
                    [t.partType]: t.level
                }
            } : s)
        };
    case "WIN_RACE":
        return {
            ...e,
            money: e.money + t.prize,
            wins: e.wins + 1
        };
    case "LOSE_RACE":
        return {
            ...e,
            losses: e.losses + 1
        };
    case "PLACE_BET":
        return {
            ...e,
            money: t.won ? e.money + t.amount : e.money - t.amount
        };
    default:
        return e
    }
}
  , Bg = h.createContext(null)
  , _b = ({children: e}) => {
    const [t,n] = h.useReducer(jb, Ib);
    return v.jsx(Bg.Provider, {
        "data-lov-id": "src/contexts/GameContext.tsx:193:4",
        "data-lov-name": "GameContext.Provider",
        "data-component-path": "src/contexts/GameContext.tsx",
        "data-component-line": "193",
        "data-component-file": "GameContext.tsx",
        "data-component-name": "GameContext.Provider",
        "data-component-content": "%7B%7D",
        value: {
            gameState: t,
            dispatch: n
        },
        children: e
    })
}
  , ka = () => {
    const e = h.useContext(Bg);
    if (!e)
        throw new Error("useGame must be used within a GameProvider");
    return e
}
  , Ob = () => {
    const {gameState: e, dispatch: t} = ka()
      , n = e.cars.filter(i => i.owned)
      , o = e.cars.find(i => i.id === e.selectedCarId)
      , r = i => {
        const l = i.upgrades.engine * 50
          , c = i.upgrades.turbo * 75
          , d = i.upgrades.tires * 20;
        return i.basePower + l + c + d
    }
      , a = i => {
        const l = i.upgrades.engine * 10
          , c = i.upgrades.turbo * 15
          , d = i.upgrades.tires * -5
          , p = i.upgrades.weight * -100;
        return i.baseWeight + l + c + d + p
    }
      , s = i => (r(i) / a(i) * 1e3).toFixed(1);
    return n.length === 0 ? v.jsxs("div", {
        "data-lov-id": "src/components/Garage.tsx:33:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/Garage.tsx",
        "data-component-line": "33",
        "data-component-file": "Garage.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22text-center%20py-12%22%7D",
        className: "text-center py-12",
        children: [v.jsx(Gs, {
            "data-lov-id": "src/components/Garage.tsx:34:8",
            "data-lov-name": "CarIcon",
            "data-component-path": "src/components/Garage.tsx",
            "data-component-line": "34",
            "data-component-file": "Garage.tsx",
            "data-component-name": "CarIcon",
            "data-component-content": "%7B%22className%22%3A%22w-16%20h-16%20mx-auto%20mb-4%20text-gray-500%22%7D",
            className: "w-16 h-16 mx-auto mb-4 text-gray-500"
        }), v.jsx("h3", {
            "data-lov-id": "src/components/Garage.tsx:35:8",
            "data-lov-name": "h3",
            "data-component-path": "src/components/Garage.tsx",
            "data-component-line": "35",
            "data-component-file": "Garage.tsx",
            "data-component-name": "h3",
            "data-component-content": "%7B%22text%22%3A%22Your%20garage%20is%20empty%22%2C%22className%22%3A%22text-xl%20font-semibold%20mb-2%22%7D",
            className: "text-xl font-semibold mb-2",
            children: "Your garage is empty"
        }), v.jsx("p", {
            "data-lov-id": "src/components/Garage.tsx:36:8",
            "data-lov-name": "p",
            "data-component-path": "src/components/Garage.tsx",
            "data-component-line": "36",
            "data-component-file": "Garage.tsx",
            "data-component-name": "p",
            "data-component-content": "%7B%22text%22%3A%22Head%20to%20the%20Car%20Shop%20to%20buy%20your%20first%20vehicle!%22%2C%22className%22%3A%22text-gray-400%20mb-6%22%7D",
            className: "text-gray-400 mb-6",
            children: "Head to the Car Shop to buy your first vehicle!"
        })]
    }) : v.jsx("div", {
        "data-lov-id": "src/components/Garage.tsx:42:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/Garage.tsx",
        "data-component-line": "42",
        "data-component-file": "Garage.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: v.jsx("div", {
            "data-lov-id": "src/components/Garage.tsx:43:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/Garage.tsx",
            "data-component-line": "43",
            "data-component-file": "Garage.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: n.map(i => v.jsxs(ro, {
                "data-lov-id": "src/components/Garage.tsx:45:10",
                "data-lov-name": "Card",
                "data-component-path": "src/components/Garage.tsx",
                "data-component-line": "45",
                "data-component-file": "Garage.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%7D",
                className: `bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all cursor-pointer ${(o == null ? void 0 : o.id) === i.id ? "ring-2 ring-red-500 border-red-500" : ""}`,
                onClick: () => t({
                    type: "SELECT_CAR",
                    carId: i.id
                }),
                children: [v.jsxs(ma, {
                    "data-lov-id": "src/components/Garage.tsx:52:12",
                    "data-lov-name": "CardHeader",
                    "data-component-path": "src/components/Garage.tsx",
                    "data-component-line": "52",
                    "data-component-file": "Garage.tsx",
                    "data-component-name": "CardHeader",
                    "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                    className: "text-center",
                    children: [v.jsx("div", {
                        "data-lov-id": "src/components/Garage.tsx:53:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Garage.tsx",
                        "data-component-line": "53",
                        "data-component-file": "Garage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22text-4xl%20mb-2%22%7D",
                        className: "text-4xl mb-2",
                        children: i.image
                    }), v.jsx(ha, {
                        "data-lov-id": "src/components/Garage.tsx:54:14",
                        "data-lov-name": "CardTitle",
                        "data-component-path": "src/components/Garage.tsx",
                        "data-component-line": "54",
                        "data-component-file": "Garage.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content": "%7B%22className%22%3A%22text-lg%22%7D",
                        className: "text-lg",
                        children: i.name
                    }), v.jsx("p", {
                        "data-lov-id": "src/components/Garage.tsx:55:14",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/Garage.tsx",
                        "data-component-line": "55",
                        "data-component-file": "Garage.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22className%22%3A%22text-gray-400%22%7D",
                        className: "text-gray-400",
                        children: i.brand
                    })]
                }), v.jsxs(ao, {
                    "data-lov-id": "src/components/Garage.tsx:57:12",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src/components/Garage.tsx",
                    "data-component-line": "57",
                    "data-component-file": "Garage.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                    className: "space-y-3",
                    children: [v.jsxs("div", {
                        "data-lov-id": "src/components/Garage.tsx:58:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Garage.tsx",
                        "data-component-line": "58",
                        "data-component-file": "Garage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%20text-sm%22%7D",
                        className: "grid grid-cols-2 gap-4 text-sm",
                        children: [v.jsxs("div", {
                            "data-lov-id": "src/components/Garage.tsx:59:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Garage.tsx",
                            "data-component-line": "59",
                            "data-component-file": "Garage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [v.jsx("span", {
                                "data-lov-id": "src/components/Garage.tsx:60:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "60",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22Power%3A%22%2C%22className%22%3A%22text-gray-400%22%7D",
                                className: "text-gray-400",
                                children: "Power:"
                            }), v.jsxs("span", {
                                "data-lov-id": "src/components/Garage.tsx:61:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "61",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22HP%22%2C%22className%22%3A%22text-red-400%20font-mono%20ml-2%22%7D",
                                className: "text-red-400 font-mono ml-2",
                                children: [r(i), " HP"]
                            })]
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/Garage.tsx:63:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Garage.tsx",
                            "data-component-line": "63",
                            "data-component-file": "Garage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [v.jsx("span", {
                                "data-lov-id": "src/components/Garage.tsx:64:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "64",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22Weight%3A%22%2C%22className%22%3A%22text-gray-400%22%7D",
                                className: "text-gray-400",
                                children: "Weight:"
                            }), v.jsxs("span", {
                                "data-lov-id": "src/components/Garage.tsx:65:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "65",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22kg%22%2C%22className%22%3A%22text-blue-400%20font-mono%20ml-2%22%7D",
                                className: "text-blue-400 font-mono ml-2",
                                children: [a(i), " kg"]
                            })]
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/Garage.tsx:67:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Garage.tsx",
                            "data-component-line": "67",
                            "data-component-file": "Garage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22col-span-2%22%7D",
                            className: "col-span-2",
                            children: [v.jsx("span", {
                                "data-lov-id": "src/components/Garage.tsx:68:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "68",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22Power%2FWeight%3A%22%2C%22className%22%3A%22text-gray-400%22%7D",
                                className: "text-gray-400",
                                children: "Power/Weight:"
                            }), v.jsxs("span", {
                                "data-lov-id": "src/components/Garage.tsx:69:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "69",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22HP%2Ft%22%2C%22className%22%3A%22text-green-400%20font-mono%20ml-2%22%7D",
                                className: "text-green-400 font-mono ml-2",
                                children: [s(i), " HP/t"]
                            })]
                        })]
                    }), v.jsxs("div", {
                        "data-lov-id": "src/components/Garage.tsx:73:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Garage.tsx",
                        "data-component-line": "73",
                        "data-component-file": "Garage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22space-y-2%20pt-2%20border-t%20border-gray-700%22%7D",
                        className: "space-y-2 pt-2 border-t border-gray-700",
                        children: [v.jsx("div", {
                            "data-lov-id": "src/components/Garage.tsx:74:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Garage.tsx",
                            "data-component-line": "74",
                            "data-component-file": "Garage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22Upgrades%3A%22%2C%22className%22%3A%22text-xs%20text-gray-400%22%7D",
                            className: "text-xs text-gray-400",
                            children: "Upgrades:"
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/Garage.tsx:75:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Garage.tsx",
                            "data-component-line": "75",
                            "data-component-file": "Garage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-2%20text-xs%22%7D",
                            className: "grid grid-cols-2 gap-2 text-xs",
                            children: [v.jsxs("div", {
                                "data-lov-id": "src/components/Garage.tsx:76:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "76",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22text%22%3A%22Engine%3A%20Stage%22%7D",
                                children: ["Engine: Stage ", i.upgrades.engine]
                            }), v.jsxs("div", {
                                "data-lov-id": "src/components/Garage.tsx:77:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "77",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22text%22%3A%22Turbo%3A%20Stage%22%7D",
                                children: ["Turbo: Stage ", i.upgrades.turbo]
                            }), v.jsxs("div", {
                                "data-lov-id": "src/components/Garage.tsx:78:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "78",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22text%22%3A%22Tires%3A%20Stage%22%7D",
                                children: ["Tires: Stage ", i.upgrades.tires]
                            }), v.jsxs("div", {
                                "data-lov-id": "src/components/Garage.tsx:79:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/Garage.tsx",
                                "data-component-line": "79",
                                "data-component-file": "Garage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22text%22%3A%22Weight%3A%20Stage%22%7D",
                                children: ["Weight: Stage ", i.upgrades.weight]
                            })]
                        })]
                    }), (o == null ? void 0 : o.id) === i.id && v.jsx("div", {
                        "data-lov-id": "src/components/Garage.tsx:84:16",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Garage.tsx",
                        "data-component-line": "84",
                        "data-component-file": "Garage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22pt-2%22%7D",
                        className: "pt-2",
                        children: v.jsx("div", {
                            "data-lov-id": "src/components/Garage.tsx:85:18",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Garage.tsx",
                            "data-component-line": "85",
                            "data-component-file": "Garage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22%E2%9C%93%20Selected%20for%20Racing%22%2C%22className%22%3A%22bg-red-600%2F20%20text-red-400%20text-xs%20p-2%20rounded%20border%20border-red-500%2F30%20text-center%22%7D",
                            className: "bg-red-600/20 text-red-400 text-xs p-2 rounded border border-red-500/30 text-center",
                            children: "✓ Selected for Racing"
                        })
                    })]
                })]
            }, i.id))
        })
    })
}
  , Mb = fv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , va = h.forwardRef( ({className: e, variant: t, size: n, asChild: o=!1, ...r}, a) => {
    const s = o ? lr : "button";
    return v.jsx(s, {
        "data-lov-id": "src/components/ui/button.tsx:46:6",
        "data-lov-name": "Comp",
        "data-component-path": "src/components/ui/button.tsx",
        "data-component-line": "46",
        "data-component-file": "button.tsx",
        "data-component-name": "Comp",
        "data-component-content": "%7B%7D",
        className: ue(Mb({
            variant: t,
            size: n,
            className: e
        })),
        ref: a,
        ...r
    })
}
);
va.displayName = "Button";
const Bb = () => {
    const {gameState: e, dispatch: t} = ka()
      , n = o => {
        const r = e.cars.find(a => a.id === o);
        if (r) {
            if (r.owned) {
                Ye({
                    title: "Already Owned",
                    description: "You already own this car!",
                    variant: "destructive"
                });
                return
            }
            if (e.money < r.price) {
                Ye({
                    title: "Insufficient Funds",
                    description: `You need $${r.price.toLocaleString()} to buy this car.`,
                    variant: "destructive"
                });
                return
            }
            t({
                type: "BUY_CAR",
                carId: o
            }),
            Ye({
                title: "Car Purchased!",
                description: `You bought a ${r.brand} ${r.name}!`,
                className: "bg-green-600 text-white"
            })
        }
    }
    ;
    return v.jsxs("div", {
        "data-lov-id": "src/components/CarShop.tsx:42:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/CarShop.tsx",
        "data-component-line": "42",
        "data-component-file": "CarShop.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: [v.jsxs("div", {
            "data-lov-id": "src/components/CarShop.tsx:43:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/CarShop.tsx",
            "data-component-line": "43",
            "data-component-file": "CarShop.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
            className: "text-center",
            children: [v.jsx("h2", {
                "data-lov-id": "src/components/CarShop.tsx:44:8",
                "data-lov-name": "h2",
                "data-component-path": "src/components/CarShop.tsx",
                "data-component-line": "44",
                "data-component-file": "CarShop.tsx",
                "data-component-name": "h2",
                "data-component-content": "%7B%22text%22%3A%22Car%20Dealership%22%2C%22className%22%3A%22text-3xl%20font-bold%20mb-2%22%7D",
                className: "text-3xl font-bold mb-2",
                children: "Car Dealership"
            }), v.jsx("p", {
                "data-lov-id": "src/components/CarShop.tsx:45:8",
                "data-lov-name": "p",
                "data-component-path": "src/components/CarShop.tsx",
                "data-component-line": "45",
                "data-component-file": "CarShop.tsx",
                "data-component-name": "p",
                "data-component-content": "%7B%22text%22%3A%22Choose%20your%20next%20racing%20machine%22%2C%22className%22%3A%22text-gray-400%22%7D",
                className: "text-gray-400",
                children: "Choose your next racing machine"
            })]
        }), v.jsx("div", {
            "data-lov-id": "src/components/CarShop.tsx:48:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/CarShop.tsx",
            "data-component-line": "48",
            "data-component-file": "CarShop.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: e.cars.map(o => v.jsxs(ro, {
                "data-lov-id": "src/components/CarShop.tsx:50:10",
                "data-lov-name": "Card",
                "data-component-path": "src/components/CarShop.tsx",
                "data-component-line": "50",
                "data-component-file": "CarShop.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%22className%22%3A%22bg-gray-800%2F50%20border-gray-700%20hover%3Abg-gray-800%2F70%20transition-all%22%7D",
                className: "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all",
                children: [v.jsxs(ma, {
                    "data-lov-id": "src/components/CarShop.tsx:51:12",
                    "data-lov-name": "CardHeader",
                    "data-component-path": "src/components/CarShop.tsx",
                    "data-component-line": "51",
                    "data-component-file": "CarShop.tsx",
                    "data-component-name": "CardHeader",
                    "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                    className: "text-center",
                    children: [v.jsx("div", {
                        "data-lov-id": "src/components/CarShop.tsx:52:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/CarShop.tsx",
                        "data-component-line": "52",
                        "data-component-file": "CarShop.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22text-6xl%20mb-4%22%7D",
                        className: "text-6xl mb-4",
                        children: o.image
                    }), v.jsx(ha, {
                        "data-lov-id": "src/components/CarShop.tsx:53:14",
                        "data-lov-name": "CardTitle",
                        "data-component-path": "src/components/CarShop.tsx",
                        "data-component-line": "53",
                        "data-component-file": "CarShop.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content": "%7B%22className%22%3A%22text-xl%22%7D",
                        className: "text-xl",
                        children: o.name
                    }), v.jsx("p", {
                        "data-lov-id": "src/components/CarShop.tsx:54:14",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/CarShop.tsx",
                        "data-component-line": "54",
                        "data-component-file": "CarShop.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22className%22%3A%22text-gray-400%20text-lg%22%7D",
                        className: "text-gray-400 text-lg",
                        children: o.brand
                    })]
                }), v.jsxs(ao, {
                    "data-lov-id": "src/components/CarShop.tsx:56:12",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src/components/CarShop.tsx",
                    "data-component-line": "56",
                    "data-component-file": "CarShop.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                    className: "space-y-4",
                    children: [v.jsxs("div", {
                        "data-lov-id": "src/components/CarShop.tsx:57:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/CarShop.tsx",
                        "data-component-line": "57",
                        "data-component-file": "CarShop.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D",
                        className: "grid grid-cols-2 gap-4",
                        children: [v.jsxs("div", {
                            "data-lov-id": "src/components/CarShop.tsx:58:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/CarShop.tsx",
                            "data-component-line": "58",
                            "data-component-file": "CarShop.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                            className: "text-center",
                            children: [v.jsx("div", {
                                "data-lov-id": "src/components/CarShop.tsx:59:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/CarShop.tsx",
                                "data-component-line": "59",
                                "data-component-file": "CarShop.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-red-400%22%7D",
                                className: "text-2xl font-bold text-red-400",
                                children: o.basePower
                            }), v.jsx("div", {
                                "data-lov-id": "src/components/CarShop.tsx:60:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/CarShop.tsx",
                                "data-component-line": "60",
                                "data-component-file": "CarShop.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22text%22%3A%22HP%22%2C%22className%22%3A%22text-sm%20text-gray-400%22%7D",
                                className: "text-sm text-gray-400",
                                children: "HP"
                            })]
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/CarShop.tsx:62:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/CarShop.tsx",
                            "data-component-line": "62",
                            "data-component-file": "CarShop.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                            className: "text-center",
                            children: [v.jsx("div", {
                                "data-lov-id": "src/components/CarShop.tsx:63:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/CarShop.tsx",
                                "data-component-line": "63",
                                "data-component-file": "CarShop.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-blue-400%22%7D",
                                className: "text-2xl font-bold text-blue-400",
                                children: o.baseWeight
                            }), v.jsx("div", {
                                "data-lov-id": "src/components/CarShop.tsx:64:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/CarShop.tsx",
                                "data-component-line": "64",
                                "data-component-file": "CarShop.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22text%22%3A%22kg%22%2C%22className%22%3A%22text-sm%20text-gray-400%22%7D",
                                className: "text-sm text-gray-400",
                                children: "kg"
                            })]
                        })]
                    }), v.jsxs("div", {
                        "data-lov-id": "src/components/CarShop.tsx:68:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/CarShop.tsx",
                        "data-component-line": "68",
                        "data-component-file": "CarShop.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22bg-gray-900%2F50%20p-4%20rounded-lg%22%7D",
                        className: "bg-gray-900/50 p-4 rounded-lg",
                        children: [v.jsxs("div", {
                            "data-lov-id": "src/components/CarShop.tsx:69:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/CarShop.tsx",
                            "data-component-line": "69",
                            "data-component-file": "CarShop.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-2%22%7D",
                            className: "flex items-center justify-between mb-2",
                            children: [v.jsx("span", {
                                "data-lov-id": "src/components/CarShop.tsx:70:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/CarShop.tsx",
                                "data-component-line": "70",
                                "data-component-file": "CarShop.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22Price%3A%22%2C%22className%22%3A%22text-gray-400%22%7D",
                                className: "text-gray-400",
                                children: "Price:"
                            }), v.jsxs("span", {
                                "data-lov-id": "src/components/CarShop.tsx:71:18",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/CarShop.tsx",
                                "data-component-line": "71",
                                "data-component-file": "CarShop.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22%24%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-green-400%22%7D",
                                className: "text-2xl font-bold text-green-400",
                                children: ["$", o.price.toLocaleString()]
                            })]
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/CarShop.tsx:75:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/CarShop.tsx",
                            "data-component-line": "75",
                            "data-component-file": "CarShop.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22Power%2FWeight%3A%20HP%2Ft%22%2C%22className%22%3A%22text-xs%20text-gray-500%22%7D",
                            className: "text-xs text-gray-500",
                            children: ["Power/Weight: ", (o.basePower / o.baseWeight * 1e3).toFixed(1), " HP/t"]
                        })]
                    }), v.jsx(va, {
                        "data-lov-id": "src/components/CarShop.tsx:80:14",
                        "data-lov-name": "Button",
                        "data-component-path": "src/components/CarShop.tsx",
                        "data-component-line": "80",
                        "data-component-file": "CarShop.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        onClick: () => n(o.id),
                        disabled: o.owned || e.money < o.price,
                        className: `w-full ${o.owned ? "bg-gray-600 hover:bg-gray-600 cursor-not-allowed" : e.money < o.price ? "bg-red-900 hover:bg-red-900 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"}`,
                        children: o.owned ? "✓ Owned" : e.money < o.price ? "Insufficient Funds" : v.jsxs(v.Fragment, {
                            children: [v.jsx(ca, {
                                "data-lov-id": "src/components/CarShop.tsx:97:20",
                                "data-lov-name": "DollarSign",
                                "data-component-path": "src/components/CarShop.tsx",
                                "data-component-line": "97",
                                "data-component-file": "CarShop.tsx",
                                "data-component-name": "DollarSign",
                                "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2"
                            }), "Buy Now"]
                        })
                    })]
                })]
            }, o.id))
        })]
    })
}
;
function rf(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var Cl = 0;
function Lb() {
    h.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? af()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? af()),
        Cl++,
        () => {
            Cl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            Cl--
        }
    }
    , [])
}
function af() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var bl = "focusScope.autoFocusOnMount"
  , Tl = "focusScope.autoFocusOnUnmount"
  , sf = {
    bubbles: !1,
    cancelable: !0
}
  , Fb = "FocusScope"
  , Lg = h.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: o=!1, onMountAutoFocus: r, onUnmountAutoFocus: a, ...s} = e
      , [i,l] = h.useState(null)
      , c = et(r)
      , d = et(a)
      , p = h.useRef(null)
      , u = ye(t, f => l(f))
      , y = h.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    h.useEffect( () => {
        if (o) {
            let f = function(x) {
                if (y.paused || !i)
                    return;
                const C = x.target;
                i.contains(C) ? p.current = C : mn(p.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (y.paused || !i)
                    return;
                const C = x.relatedTarget;
                C !== null && (i.contains(C) || mn(p.current, {
                    select: !0
                }))
            }
              , g = function(x) {
                if (document.activeElement === document.body)
                    for (const b of x)
                        b.removedNodes.length > 0 && mn(i)
            };
            document.addEventListener("focusin", f),
            document.addEventListener("focusout", w);
            const m = new MutationObserver(g);
            return i && m.observe(i, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", f),
                document.removeEventListener("focusout", w),
                m.disconnect()
            }
        }
    }
    , [o, i, y.paused]),
    h.useEffect( () => {
        if (i) {
            cf.add(y);
            const f = document.activeElement;
            if (!i.contains(f)) {
                const g = new CustomEvent(bl,sf);
                i.addEventListener(bl, c),
                i.dispatchEvent(g),
                g.defaultPrevented || (zb(Hb(Fg(i)), {
                    select: !0
                }),
                document.activeElement === f && mn(i))
            }
            return () => {
                i.removeEventListener(bl, c),
                setTimeout( () => {
                    const g = new CustomEvent(Tl,sf);
                    i.addEventListener(Tl, d),
                    i.dispatchEvent(g),
                    g.defaultPrevented || mn(f ?? document.body, {
                        select: !0
                    }),
                    i.removeEventListener(Tl, d),
                    cf.remove(y)
                }
                , 0)
            }
        }
    }
    , [i, c, d, y]);
    const S = h.useCallback(f => {
        if (!n && !o || y.paused)
            return;
        const w = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey
          , g = document.activeElement;
        if (w && g) {
            const m = f.currentTarget
              , [x,C] = $b(m);
            x && C ? !f.shiftKey && g === C ? (f.preventDefault(),
            n && mn(x, {
                select: !0
            })) : f.shiftKey && g === x && (f.preventDefault(),
            n && mn(C, {
                select: !0
            })) : g === m && f.preventDefault()
        }
    }
    , [n, o, y.paused]);
    return v.jsx(ee.div, {
        tabIndex: -1,
        ...s,
        ref: u,
        onKeyDown: S
    })
}
);
Lg.displayName = Fb;
function zb(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const o of e)
        if (mn(o, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function $b(e) {
    const t = Fg(e)
      , n = lf(t, e)
      , o = lf(t.reverse(), e);
    return [n, o]
}
function Fg(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: o => {
            const r = o.tagName === "INPUT" && o.type === "hidden";
            return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function lf(e, t) {
    for (const n of e)
        if (!Ub(n, {
            upTo: t
        }))
            return n
}
function Ub(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function Wb(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function mn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && Wb(e) && t && e.select()
    }
}
var cf = Vb();
function Vb() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = uf(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = uf(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function uf(e, t) {
    const n = [...e]
      , o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1),
    n
}
function Hb(e) {
    return e.filter(t => t.tagName !== "A")
}
function Gb(e) {
    const t = h.useRef({
        value: e,
        previous: e
    });
    return h.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var Kb = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , So = new WeakMap
  , es = new WeakMap
  , ts = {}
  , El = 0
  , zg = function(e) {
    return e && (e.host || zg(e.parentNode))
}
  , Qb = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var o = zg(n);
        return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , Yb = function(e, t, n, o) {
    var r = Qb(t, Array.isArray(e) ? e : [e]);
    ts[n] || (ts[n] = new WeakMap);
    var a = ts[n]
      , s = []
      , i = new Set
      , l = new Set(r)
      , c = function(p) {
        !p || i.has(p) || (i.add(p),
        c(p.parentNode))
    };
    r.forEach(c);
    var d = function(p) {
        !p || l.has(p) || Array.prototype.forEach.call(p.children, function(u) {
            if (i.has(u))
                d(u);
            else
                try {
                    var y = u.getAttribute(o)
                      , S = y !== null && y !== "false"
                      , f = (So.get(u) || 0) + 1
                      , w = (a.get(u) || 0) + 1;
                    So.set(u, f),
                    a.set(u, w),
                    s.push(u),
                    f === 1 && S && es.set(u, !0),
                    w === 1 && u.setAttribute(n, "true"),
                    S || u.setAttribute(o, "true")
                } catch (g) {
                    console.error("aria-hidden: cannot operate on ", u, g)
                }
        })
    };
    return d(t),
    i.clear(),
    El++,
    function() {
        s.forEach(function(p) {
            var u = So.get(p) - 1
              , y = a.get(p) - 1;
            So.set(p, u),
            a.set(p, y),
            u || (es.has(p) || p.removeAttribute(o),
            es.delete(p)),
            y || p.removeAttribute(n)
        }),
        El--,
        El || (So = new WeakMap,
        So = new WeakMap,
        es = new WeakMap,
        ts = {})
    }
}
  , Xb = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e])
      , r = Kb(e);
    return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
    Yb(o, r, n, "aria-hidden")) : function() {
        return null
    }
}
  , Ut = function() {
    return Ut = Object.assign || function(t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
            n = arguments[o];
            for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
        }
        return t
    }
    ,
    Ut.apply(this, arguments)
};
function $g(e, t) {
    var n = {};
    for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
            t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
    return n
}
function qb(e, t, n) {
    if (n || arguments.length === 2)
        for (var o = 0, r = t.length, a; o < r; o++)
            (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)),
            a[o] = t[o]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var ws = "right-scroll-bar-position"
  , Ss = "width-before-scroll-bar"
  , Zb = "with-scroll-bars-hidden"
  , Jb = "--removed-body-scroll-bar-size";
function Pl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function eT(e, t) {
    var n = h.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(o) {
                    var r = n.value;
                    r !== o && (n.value = o,
                    n.callback(o, r))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var tT = typeof window < "u" ? h.useLayoutEffect : h.useEffect
  , df = new WeakMap;
function nT(e, t) {
    var n = eT(null, function(o) {
        return e.forEach(function(r) {
            return Pl(r, o)
        })
    });
    return tT(function() {
        var o = df.get(n);
        if (o) {
            var r = new Set(o)
              , a = new Set(e)
              , s = n.current;
            r.forEach(function(i) {
                a.has(i) || Pl(i, null)
            }),
            a.forEach(function(i) {
                r.has(i) || Pl(i, s)
            })
        }
        df.set(n, e)
    }, [e]),
    n
}
function oT(e) {
    return e
}
function rT(e, t) {
    t === void 0 && (t = oT);
    var n = []
      , o = !1
      , r = {
        read: function() {
            if (o)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(a) {
            var s = t(a, o);
            return n.push(s),
            function() {
                n = n.filter(function(i) {
                    return i !== s
                })
            }
        },
        assignSyncMedium: function(a) {
            for (o = !0; n.length; ) {
                var s = n;
                n = [],
                s.forEach(a)
            }
            n = {
                push: function(i) {
                    return a(i)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(a) {
            o = !0;
            var s = [];
            if (n.length) {
                var i = n;
                n = [],
                i.forEach(a),
                s = n
            }
            var l = function() {
                var d = s;
                s = [],
                d.forEach(a)
            }
              , c = function() {
                return Promise.resolve().then(l)
            };
            c(),
            n = {
                push: function(d) {
                    s.push(d),
                    c()
                },
                filter: function(d) {
                    return s = s.filter(d),
                    n
                }
            }
        }
    };
    return r
}
function aT(e) {
    e === void 0 && (e = {});
    var t = rT(null);
    return t.options = Ut({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Ug = function(e) {
    var t = e.sideCar
      , n = $g(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var o = t.read();
    if (!o)
        throw new Error("Sidecar medium not found");
    return h.createElement(o, Ut({}, n))
};
Ug.isSideCarExport = !0;
function sT(e, t) {
    return e.useMedium(t),
    Ug
}
var Wg = aT()
  , kl = function() {}
  , _i = h.forwardRef(function(e, t) {
    var n = h.useRef(null)
      , o = h.useState({
        onScrollCapture: kl,
        onWheelCapture: kl,
        onTouchMoveCapture: kl
    })
      , r = o[0]
      , a = o[1]
      , s = e.forwardProps
      , i = e.children
      , l = e.className
      , c = e.removeScrollBar
      , d = e.enabled
      , p = e.shards
      , u = e.sideCar
      , y = e.noIsolation
      , S = e.inert
      , f = e.allowPinchZoom
      , w = e.as
      , g = w === void 0 ? "div" : w
      , m = e.gapMode
      , x = $g(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , C = u
      , b = nT([n, t])
      , P = Ut(Ut({}, x), r);
    return h.createElement(h.Fragment, null, d && h.createElement(C, {
        sideCar: Wg,
        removeScrollBar: c,
        shards: p,
        noIsolation: y,
        inert: S,
        setCallbacks: a,
        allowPinchZoom: !!f,
        lockRef: n,
        gapMode: m
    }), s ? h.cloneElement(h.Children.only(i), Ut(Ut({}, P), {
        ref: b
    })) : h.createElement(g, Ut({}, P, {
        className: l,
        ref: b
    }), i))
});
_i.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
_i.classNames = {
    fullWidth: Ss,
    zeroRight: ws
};
var iT = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function lT() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = iT();
    return t && e.setAttribute("nonce", t),
    e
}
function cT(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function uT(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var dT = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = lT()) && (cT(t, n),
            uT(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , pT = function() {
    var e = dT();
    return function(t, n) {
        h.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , Vg = function() {
    var e = pT()
      , t = function(n) {
        var o = n.styles
          , r = n.dynamic;
        return e(o, r),
        null
    };
    return t
}
  , fT = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Nl = function(e) {
    return parseInt(e || "", 10) || 0
}
  , mT = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , o = t[e === "padding" ? "paddingTop" : "marginTop"]
      , r = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Nl(n), Nl(o), Nl(r)]
}
  , hT = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return fT;
    var t = mT(e)
      , n = document.documentElement.clientWidth
      , o = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, o - n + t[2] - t[0])
    }
}
  , vT = Vg()
  , Ho = "data-scroll-locked"
  , gT = function(e, t, n, o) {
    var r = e.left
      , a = e.top
      , s = e.right
      , i = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(Zb, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(i, "px ").concat(o, `;
  }
  body[`).concat(Ho, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(o, ";"), n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(o, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ws, ` {
    right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(Ss, ` {
    margin-right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(ws, " .").concat(ws, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ss, " .").concat(Ss, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Ho, `] {
    `).concat(Jb, ": ").concat(i, `px;
  }
`)
}
  , pf = function() {
    var e = parseInt(document.body.getAttribute(Ho) || "0", 10);
    return isFinite(e) ? e : 0
}
  , xT = function() {
    h.useEffect(function() {
        return document.body.setAttribute(Ho, (pf() + 1).toString()),
        function() {
            var e = pf() - 1;
            e <= 0 ? document.body.removeAttribute(Ho) : document.body.setAttribute(Ho, e.toString())
        }
    }, [])
}
  , yT = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , o = e.gapMode
      , r = o === void 0 ? "margin" : o;
    xT();
    var a = h.useMemo(function() {
        return hT(r)
    }, [r]);
    return h.createElement(vT, {
        styles: gT(a, !t, r, n ? "" : "!important")
    })
}
  , zc = !1;
if (typeof window < "u")
    try {
        var ns = Object.defineProperty({}, "passive", {
            get: function() {
                return zc = !0,
                !0
            }
        });
        window.addEventListener("test", ns, ns),
        window.removeEventListener("test", ns, ns)
    } catch {
        zc = !1
    }
var Co = zc ? {
    passive: !1
} : !1
  , wT = function(e) {
    return e.tagName === "TEXTAREA"
}
  , Hg = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !wT(e) && n[t] === "visible")
}
  , ST = function(e) {
    return Hg(e, "overflowY")
}
  , CT = function(e) {
    return Hg(e, "overflowX")
}
  , ff = function(e, t) {
    var n = t.ownerDocument
      , o = t;
    do {
        typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
        var r = Gg(e, o);
        if (r) {
            var a = Kg(e, o)
              , s = a[1]
              , i = a[2];
            if (s > i)
                return !0
        }
        o = o.parentNode
    } while (o && o !== n.body);
    return !1
}
  , bT = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , o = e.clientHeight;
    return [t, n, o]
}
  , TT = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , o = e.clientWidth;
    return [t, n, o]
}
  , Gg = function(e, t) {
    return e === "v" ? ST(t) : CT(t)
}
  , Kg = function(e, t) {
    return e === "v" ? bT(t) : TT(t)
}
  , ET = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , PT = function(e, t, n, o, r) {
    var a = ET(e, window.getComputedStyle(t).direction)
      , s = a * o
      , i = n.target
      , l = t.contains(i)
      , c = !1
      , d = s > 0
      , p = 0
      , u = 0;
    do {
        var y = Kg(e, i)
          , S = y[0]
          , f = y[1]
          , w = y[2]
          , g = f - w - a * S;
        (S || g) && Gg(e, i) && (p += g,
        u += S),
        i instanceof ShadowRoot ? i = i.host : i = i.parentNode
    } while (!l && i !== document.body || l && (t.contains(i) || t === i));
    return (d && (Math.abs(p) < 1 || !r) || !d && (Math.abs(u) < 1 || !r)) && (c = !0),
    c
}
  , os = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , mf = function(e) {
    return [e.deltaX, e.deltaY]
}
  , hf = function(e) {
    return e && "current"in e ? e.current : e
}
  , kT = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , NT = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , RT = 0
  , bo = [];
function AT(e) {
    var t = h.useRef([])
      , n = h.useRef([0, 0])
      , o = h.useRef()
      , r = h.useState(RT++)[0]
      , a = h.useState(Vg)[0]
      , s = h.useRef(e);
    h.useEffect(function() {
        s.current = e
    }, [e]),
    h.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var f = qb([e.lockRef.current], (e.shards || []).map(hf), !0).filter(Boolean);
            return f.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(r))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(r)),
                f.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(r))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = h.useCallback(function(f, w) {
        if ("touches"in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
            return !s.current.allowPinchZoom;
        var g = os(f), m = n.current, x = "deltaX"in f ? f.deltaX : m[0] - g[0], C = "deltaY"in f ? f.deltaY : m[1] - g[1], b, P = f.target, E = Math.abs(x) > Math.abs(C) ? "h" : "v";
        if ("touches"in f && E === "h" && P.type === "range")
            return !1;
        var k = ff(E, P);
        if (!k)
            return !0;
        if (k ? b = E : (b = E === "v" ? "h" : "v",
        k = ff(E, P)),
        !k)
            return !1;
        if (!o.current && "changedTouches"in f && (x || C) && (o.current = b),
        !b)
            return !0;
        var _ = o.current || b;
        return PT(_, w, f, _ === "h" ? x : C, !0)
    }, [])
      , l = h.useCallback(function(f) {
        var w = f;
        if (!(!bo.length || bo[bo.length - 1] !== a)) {
            var g = "deltaY"in w ? mf(w) : os(w)
              , m = t.current.filter(function(b) {
                return b.name === w.type && (b.target === w.target || w.target === b.shadowParent) && kT(b.delta, g)
            })[0];
            if (m && m.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!m) {
                var x = (s.current.shards || []).map(hf).filter(Boolean).filter(function(b) {
                    return b.contains(w.target)
                })
                  , C = x.length > 0 ? i(w, x[0]) : !s.current.noIsolation;
                C && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , c = h.useCallback(function(f, w, g, m) {
        var x = {
            name: f,
            delta: w,
            target: g,
            should: m,
            shadowParent: DT(g)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(C) {
                return C !== x
            })
        }, 1)
    }, [])
      , d = h.useCallback(function(f) {
        n.current = os(f),
        o.current = void 0
    }, [])
      , p = h.useCallback(function(f) {
        c(f.type, mf(f), f.target, i(f, e.lockRef.current))
    }, [])
      , u = h.useCallback(function(f) {
        c(f.type, os(f), f.target, i(f, e.lockRef.current))
    }, []);
    h.useEffect(function() {
        return bo.push(a),
        e.setCallbacks({
            onScrollCapture: p,
            onWheelCapture: p,
            onTouchMoveCapture: u
        }),
        document.addEventListener("wheel", l, Co),
        document.addEventListener("touchmove", l, Co),
        document.addEventListener("touchstart", d, Co),
        function() {
            bo = bo.filter(function(f) {
                return f !== a
            }),
            document.removeEventListener("wheel", l, Co),
            document.removeEventListener("touchmove", l, Co),
            document.removeEventListener("touchstart", d, Co)
        }
    }, []);
    var y = e.removeScrollBar
      , S = e.inert;
    return h.createElement(h.Fragment, null, S ? h.createElement(a, {
        styles: NT(r)
    }) : null, y ? h.createElement(yT, {
        gapMode: e.gapMode
    }) : null)
}
function DT(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const IT = sT(Wg, AT);
var Qg = h.forwardRef(function(e, t) {
    return h.createElement(_i, Ut({}, e, {
        ref: t,
        sideCar: IT
    }))
});
Qg.classNames = _i.classNames;
var jT = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , _T = [" ", "Enter"]
  , Na = "Select"
  , [Oi,Mi,OT] = zu(Na)
  , [gr,CE] = gi(Na, [OT, Ei])
  , Bi = Ei()
  , [MT,Vn] = gr(Na)
  , [BT,LT] = gr(Na)
  , Yg = e => {
    const {__scopeSelect: t, children: n, open: o, defaultOpen: r, onOpenChange: a, value: s, defaultValue: i, onValueChange: l, dir: c, name: d, autoComplete: p, disabled: u, required: y, form: S} = e
      , f = Bi(t)
      , [w,g] = h.useState(null)
      , [m,x] = h.useState(null)
      , [C,b] = h.useState(!1)
      , P = rd(c)
      , [E=!1,k] = la({
        prop: o,
        defaultProp: r,
        onChange: a
    })
      , [_,I] = la({
        prop: s,
        defaultProp: i,
        onChange: l
    })
      , z = h.useRef(null)
      , O = w ? S || !!w.closest("form") : !0
      , [W,j] = h.useState(new Set)
      , V = Array.from(W).map(M => M.props.value).join(";");
    return v.jsx(LS, {
        ...f,
        children: v.jsxs(MT, {
            required: y,
            scope: t,
            trigger: w,
            onTriggerChange: g,
            valueNode: m,
            onValueNodeChange: x,
            valueNodeHasChildren: C,
            onValueNodeHasChildrenChange: b,
            contentId: Ea(),
            value: _,
            onValueChange: I,
            open: E,
            onOpenChange: k,
            dir: P,
            triggerPointerDownPosRef: z,
            disabled: u,
            children: [v.jsx(Oi.Provider, {
                scope: t,
                children: v.jsx(BT, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: h.useCallback(M => {
                        j(H => new Set(H).add(M))
                    }
                    , []),
                    onNativeOptionRemove: h.useCallback(M => {
                        j(H => {
                            const T = new Set(H);
                            return T.delete(M),
                            T
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), O ? v.jsxs(w2, {
                "aria-hidden": !0,
                required: y,
                tabIndex: -1,
                name: d,
                autoComplete: p,
                value: _,
                onChange: M => I(M.target.value),
                disabled: u,
                form: S,
                children: [_ === void 0 ? v.jsx("option", {
                    value: ""
                }) : null, Array.from(W)]
            }, V) : null]
        })
    })
}
;
Yg.displayName = Na;
var Xg = "SelectTrigger"
  , qg = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: o=!1, ...r} = e
      , a = Bi(n)
      , s = Vn(Xg, n)
      , i = s.disabled || o
      , l = ye(t, s.onTriggerChange)
      , c = Mi(n)
      , d = h.useRef("touch")
      , [p,u,y] = S2(f => {
        const w = c().filter(x => !x.disabled)
          , g = w.find(x => x.value === s.value)
          , m = C2(w, f, g);
        m !== void 0 && s.onValueChange(m.value)
    }
    )
      , S = f => {
        i || (s.onOpenChange(!0),
        y()),
        f && (s.triggerPointerDownPosRef.current = {
            x: Math.round(f.pageX),
            y: Math.round(f.pageY)
        })
    }
    ;
    return v.jsx(Vv, {
        asChild: !0,
        ...a,
        children: v.jsx(ee.button, {
            type: "button",
            role: "combobox",
            "aria-controls": s.contentId,
            "aria-expanded": s.open,
            "aria-required": s.required,
            "aria-autocomplete": "none",
            dir: s.dir,
            "data-state": s.open ? "open" : "closed",
            disabled: i,
            "data-disabled": i ? "" : void 0,
            "data-placeholder": y2(s.value) ? "" : void 0,
            ...r,
            ref: l,
            onClick: G(r.onClick, f => {
                f.currentTarget.focus(),
                d.current !== "mouse" && S(f)
            }
            ),
            onPointerDown: G(r.onPointerDown, f => {
                d.current = f.pointerType;
                const w = f.target;
                w.hasPointerCapture(f.pointerId) && w.releasePointerCapture(f.pointerId),
                f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (S(f),
                f.preventDefault())
            }
            ),
            onKeyDown: G(r.onKeyDown, f => {
                const w = p.current !== "";
                !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && u(f.key),
                !(w && f.key === " ") && jT.includes(f.key) && (S(),
                f.preventDefault())
            }
            )
        })
    })
}
);
qg.displayName = Xg;
var Zg = "SelectValue"
  , Jg = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: o, style: r, children: a, placeholder: s="", ...i} = e
      , l = Vn(Zg, n)
      , {onValueNodeHasChildrenChange: c} = l
      , d = a !== void 0
      , p = ye(t, l.onValueNodeChange);
    return ze( () => {
        c(d)
    }
    , [c, d]),
    v.jsx(ee.span, {
        ...i,
        ref: p,
        style: {
            pointerEvents: "none"
        },
        children: y2(l.value) ? v.jsx(v.Fragment, {
            children: s
        }) : a
    })
}
);
Jg.displayName = Zg;
var FT = "SelectIcon"
  , e2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: o, ...r} = e;
    return v.jsx(ee.span, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        children: o || "▼"
    })
}
);
e2.displayName = FT;
var zT = "SelectPortal"
  , t2 = e => v.jsx($u, {
    asChild: !0,
    ...e
});
t2.displayName = zT;
var fo = "SelectContent"
  , n2 = h.forwardRef( (e, t) => {
    const n = Vn(fo, e.__scopeSelect)
      , [o,r] = h.useState();
    if (ze( () => {
        r(new DocumentFragment)
    }
    , []),
    !n.open) {
        const a = o;
        return a ? vo.createPortal(v.jsx(o2, {
            scope: e.__scopeSelect,
            children: v.jsx(Oi.Slot, {
                scope: e.__scopeSelect,
                children: v.jsx("div", {
                    children: e.children
                })
            })
        }), a) : null
    }
    return v.jsx(r2, {
        ...e,
        ref: t
    })
}
);
n2.displayName = fo;
var bt = 10
  , [o2,Hn] = gr(fo)
  , $T = "SelectContentImpl"
  , r2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: o="item-aligned", onCloseAutoFocus: r, onEscapeKeyDown: a, onPointerDownOutside: s, side: i, sideOffset: l, align: c, alignOffset: d, arrowPadding: p, collisionBoundary: u, collisionPadding: y, sticky: S, hideWhenDetached: f, avoidCollisions: w, ...g} = e
      , m = Vn(fo, n)
      , [x,C] = h.useState(null)
      , [b,P] = h.useState(null)
      , E = ye(t, U => C(U))
      , [k,_] = h.useState(null)
      , [I,z] = h.useState(null)
      , O = Mi(n)
      , [W,j] = h.useState(!1)
      , V = h.useRef(!1);
    h.useEffect( () => {
        if (x)
            return Xb(x)
    }
    , [x]),
    Lb();
    const M = h.useCallback(U => {
        const [oe,...we] = O().map(ne => ne.ref.current)
          , [te] = we.slice(-1)
          , ae = document.activeElement;
        for (const ne of U)
            if (ne === ae || (ne == null || ne.scrollIntoView({
                block: "nearest"
            }),
            ne === oe && b && (b.scrollTop = 0),
            ne === te && b && (b.scrollTop = b.scrollHeight),
            ne == null || ne.focus(),
            document.activeElement !== ae))
                return
    }
    , [O, b])
      , H = h.useCallback( () => M([k, x]), [M, k, x]);
    h.useEffect( () => {
        W && H()
    }
    , [W, H]);
    const {onOpenChange: T, triggerPointerDownPosRef: A} = m;
    h.useEffect( () => {
        if (x) {
            let U = {
                x: 0,
                y: 0
            };
            const oe = te => {
                var ae, ne;
                U = {
                    x: Math.abs(Math.round(te.pageX) - (((ae = A.current) == null ? void 0 : ae.x) ?? 0)),
                    y: Math.abs(Math.round(te.pageY) - (((ne = A.current) == null ? void 0 : ne.y) ?? 0))
                }
            }
              , we = te => {
                U.x <= 10 && U.y <= 10 ? te.preventDefault() : x.contains(te.target) || T(!1),
                document.removeEventListener("pointermove", oe),
                A.current = null
            }
            ;
            return A.current !== null && (document.addEventListener("pointermove", oe),
            document.addEventListener("pointerup", we, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", oe),
                document.removeEventListener("pointerup", we, {
                    capture: !0
                })
            }
        }
    }
    , [x, T, A]),
    h.useEffect( () => {
        const U = () => T(!1);
        return window.addEventListener("blur", U),
        window.addEventListener("resize", U),
        () => {
            window.removeEventListener("blur", U),
            window.removeEventListener("resize", U)
        }
    }
    , [T]);
    const [F,B] = S2(U => {
        const oe = O().filter(ae => !ae.disabled)
          , we = oe.find(ae => ae.ref.current === document.activeElement)
          , te = C2(oe, U, we);
        te && setTimeout( () => te.ref.current.focus())
    }
    )
      , $ = h.useCallback( (U, oe, we) => {
        const te = !V.current && !we;
        (m.value !== void 0 && m.value === oe || te) && (_(U),
        te && (V.current = !0))
    }
    , [m.value])
      , X = h.useCallback( () => x == null ? void 0 : x.focus(), [x])
      , re = h.useCallback( (U, oe, we) => {
        const te = !V.current && !we;
        (m.value !== void 0 && m.value === oe || te) && z(U)
    }
    , [m.value])
      , ke = o === "popper" ? $c : a2
      , Z = ke === $c ? {
        side: i,
        sideOffset: l,
        align: c,
        alignOffset: d,
        arrowPadding: p,
        collisionBoundary: u,
        collisionPadding: y,
        sticky: S,
        hideWhenDetached: f,
        avoidCollisions: w
    } : {};
    return v.jsx(o2, {
        scope: n,
        content: x,
        viewport: b,
        onViewportChange: P,
        itemRefCallback: $,
        selectedItem: k,
        onItemLeave: X,
        itemTextRefCallback: re,
        focusSelectedItem: H,
        selectedItemText: I,
        position: o,
        isPositioned: W,
        searchRef: F,
        children: v.jsx(Qg, {
            as: lr,
            allowPinchZoom: !0,
            children: v.jsx(Lg, {
                asChild: !0,
                trapped: m.open,
                onMountAutoFocus: U => {
                    U.preventDefault()
                }
                ,
                onUnmountAutoFocus: G(r, U => {
                    var oe;
                    (oe = m.trigger) == null || oe.focus({
                        preventScroll: !0
                    }),
                    U.preventDefault()
                }
                ),
                children: v.jsx(xi, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: s,
                    onFocusOutside: U => U.preventDefault(),
                    onDismiss: () => m.onOpenChange(!1),
                    children: v.jsx(ke, {
                        role: "listbox",
                        id: m.contentId,
                        "data-state": m.open ? "open" : "closed",
                        dir: m.dir,
                        onContextMenu: U => U.preventDefault(),
                        ...g,
                        ...Z,
                        onPlaced: () => j(!0),
                        ref: E,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...g.style
                        },
                        onKeyDown: G(g.onKeyDown, U => {
                            const oe = U.ctrlKey || U.altKey || U.metaKey;
                            if (U.key === "Tab" && U.preventDefault(),
                            !oe && U.key.length === 1 && B(U.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(U.key)) {
                                let te = O().filter(ae => !ae.disabled).map(ae => ae.ref.current);
                                if (["ArrowUp", "End"].includes(U.key) && (te = te.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(U.key)) {
                                    const ae = U.target
                                      , ne = te.indexOf(ae);
                                    te = te.slice(ne + 1)
                                }
                                setTimeout( () => M(te)),
                                U.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
r2.displayName = $T;
var UT = "SelectItemAlignedPosition"
  , a2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: o, ...r} = e
      , a = Vn(fo, n)
      , s = Hn(fo, n)
      , [i,l] = h.useState(null)
      , [c,d] = h.useState(null)
      , p = ye(t, E => d(E))
      , u = Mi(n)
      , y = h.useRef(!1)
      , S = h.useRef(!0)
      , {viewport: f, selectedItem: w, selectedItemText: g, focusSelectedItem: m} = s
      , x = h.useCallback( () => {
        if (a.trigger && a.valueNode && i && c && f && w && g) {
            const E = a.trigger.getBoundingClientRect()
              , k = c.getBoundingClientRect()
              , _ = a.valueNode.getBoundingClientRect()
              , I = g.getBoundingClientRect();
            if (a.dir !== "rtl") {
                const ae = I.left - k.left
                  , ne = _.left - ae
                  , $e = E.left - ne
                  , nt = E.width + $e
                  , ln = Math.max(nt, k.width)
                  , ft = window.innerWidth - bt
                  , Gn = rf(ne, [bt, Math.max(bt, ft - ln)]);
                i.style.minWidth = nt + "px",
                i.style.left = Gn + "px"
            } else {
                const ae = k.right - I.right
                  , ne = window.innerWidth - _.right - ae
                  , $e = window.innerWidth - E.right - ne
                  , nt = E.width + $e
                  , ln = Math.max(nt, k.width)
                  , ft = window.innerWidth - bt
                  , Gn = rf(ne, [bt, Math.max(bt, ft - ln)]);
                i.style.minWidth = nt + "px",
                i.style.right = Gn + "px"
            }
            const z = u()
              , O = window.innerHeight - bt * 2
              , W = f.scrollHeight
              , j = window.getComputedStyle(c)
              , V = parseInt(j.borderTopWidth, 10)
              , M = parseInt(j.paddingTop, 10)
              , H = parseInt(j.borderBottomWidth, 10)
              , T = parseInt(j.paddingBottom, 10)
              , A = V + M + W + T + H
              , F = Math.min(w.offsetHeight * 5, A)
              , B = window.getComputedStyle(f)
              , $ = parseInt(B.paddingTop, 10)
              , X = parseInt(B.paddingBottom, 10)
              , re = E.top + E.height / 2 - bt
              , ke = O - re
              , Z = w.offsetHeight / 2
              , U = w.offsetTop + Z
              , oe = V + M + U
              , we = A - oe;
            if (oe <= re) {
                const ae = z.length > 0 && w === z[z.length - 1].ref.current;
                i.style.bottom = "0px";
                const ne = c.clientHeight - f.offsetTop - f.offsetHeight
                  , $e = Math.max(ke, Z + (ae ? X : 0) + ne + H)
                  , nt = oe + $e;
                i.style.height = nt + "px"
            } else {
                const ae = z.length > 0 && w === z[0].ref.current;
                i.style.top = "0px";
                const $e = Math.max(re, V + f.offsetTop + (ae ? $ : 0) + Z) + we;
                i.style.height = $e + "px",
                f.scrollTop = oe - re + f.offsetTop
            }
            i.style.margin = `${bt}px 0`,
            i.style.minHeight = F + "px",
            i.style.maxHeight = O + "px",
            o == null || o(),
            requestAnimationFrame( () => y.current = !0)
        }
    }
    , [u, a.trigger, a.valueNode, i, c, f, w, g, a.dir, o]);
    ze( () => x(), [x]);
    const [C,b] = h.useState();
    ze( () => {
        c && b(window.getComputedStyle(c).zIndex)
    }
    , [c]);
    const P = h.useCallback(E => {
        E && S.current === !0 && (x(),
        m == null || m(),
        S.current = !1)
    }
    , [x, m]);
    return v.jsx(VT, {
        scope: n,
        contentWrapper: i,
        shouldExpandOnScrollRef: y,
        onScrollButtonChange: P,
        children: v.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: C
            },
            children: v.jsx(ee.div, {
                ...r,
                ref: p,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...r.style
                }
            })
        })
    })
}
);
a2.displayName = UT;
var WT = "SelectPopperPosition"
  , $c = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: o="start", collisionPadding: r=bt, ...a} = e
      , s = Bi(n);
    return v.jsx(Hv, {
        ...s,
        ...a,
        ref: t,
        align: o,
        collisionPadding: r,
        style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
$c.displayName = WT;
var [VT,id] = gr(fo, {})
  , Uc = "SelectViewport"
  , s2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: o, ...r} = e
      , a = Hn(Uc, n)
      , s = id(Uc, n)
      , i = ye(t, a.onViewportChange)
      , l = h.useRef(0);
    return v.jsxs(v.Fragment, {
        children: [v.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
        }), v.jsx(Oi.Slot, {
            scope: n,
            children: v.jsx(ee.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...r,
                ref: i,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...r.style
                },
                onScroll: G(r.onScroll, c => {
                    const d = c.currentTarget
                      , {contentWrapper: p, shouldExpandOnScrollRef: u} = s;
                    if (u != null && u.current && p) {
                        const y = Math.abs(l.current - d.scrollTop);
                        if (y > 0) {
                            const S = window.innerHeight - bt * 2
                              , f = parseFloat(p.style.minHeight)
                              , w = parseFloat(p.style.height)
                              , g = Math.max(f, w);
                            if (g < S) {
                                const m = g + y
                                  , x = Math.min(S, m)
                                  , C = m - x;
                                p.style.height = x + "px",
                                p.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0,
                                p.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = d.scrollTop
                }
                )
            })
        })]
    })
}
);
s2.displayName = Uc;
var i2 = "SelectGroup"
  , [HT,GT] = gr(i2)
  , KT = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...o} = e
      , r = Ea();
    return v.jsx(HT, {
        scope: n,
        id: r,
        children: v.jsx(ee.div, {
            role: "group",
            "aria-labelledby": r,
            ...o,
            ref: t
        })
    })
}
);
KT.displayName = i2;
var l2 = "SelectLabel"
  , c2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...o} = e
      , r = GT(l2, n);
    return v.jsx(ee.div, {
        id: r.id,
        ...o,
        ref: t
    })
}
);
c2.displayName = l2;
var ei = "SelectItem"
  , [QT,u2] = gr(ei)
  , d2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: o, disabled: r=!1, textValue: a, ...s} = e
      , i = Vn(ei, n)
      , l = Hn(ei, n)
      , c = i.value === o
      , [d,p] = h.useState(a ?? "")
      , [u,y] = h.useState(!1)
      , S = ye(t, m => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, m, o, r)
    }
    )
      , f = Ea()
      , w = h.useRef("touch")
      , g = () => {
        r || (i.onValueChange(o),
        i.onOpenChange(!1))
    }
    ;
    if (o === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return v.jsx(QT, {
        scope: n,
        value: o,
        disabled: r,
        textId: f,
        isSelected: c,
        onItemTextChange: h.useCallback(m => {
            p(x => x || ((m == null ? void 0 : m.textContent) ?? "").trim())
        }
        , []),
        children: v.jsx(Oi.ItemSlot, {
            scope: n,
            value: o,
            disabled: r,
            textValue: d,
            children: v.jsx(ee.div, {
                role: "option",
                "aria-labelledby": f,
                "data-highlighted": u ? "" : void 0,
                "aria-selected": c && u,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...s,
                ref: S,
                onFocus: G(s.onFocus, () => y(!0)),
                onBlur: G(s.onBlur, () => y(!1)),
                onClick: G(s.onClick, () => {
                    w.current !== "mouse" && g()
                }
                ),
                onPointerUp: G(s.onPointerUp, () => {
                    w.current === "mouse" && g()
                }
                ),
                onPointerDown: G(s.onPointerDown, m => {
                    w.current = m.pointerType
                }
                ),
                onPointerMove: G(s.onPointerMove, m => {
                    var x;
                    w.current = m.pointerType,
                    r ? (x = l.onItemLeave) == null || x.call(l) : w.current === "mouse" && m.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: G(s.onPointerLeave, m => {
                    var x;
                    m.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l))
                }
                ),
                onKeyDown: G(s.onKeyDown, m => {
                    var C;
                    ((C = l.searchRef) == null ? void 0 : C.current) !== "" && m.key === " " || (_T.includes(m.key) && g(),
                    m.key === " " && m.preventDefault())
                }
                )
            })
        })
    })
}
);
d2.displayName = ei;
var _r = "SelectItemText"
  , p2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: o, style: r, ...a} = e
      , s = Vn(_r, n)
      , i = Hn(_r, n)
      , l = u2(_r, n)
      , c = LT(_r, n)
      , [d,p] = h.useState(null)
      , u = ye(t, g => p(g), l.onItemTextChange, g => {
        var m;
        return (m = i.itemTextRefCallback) == null ? void 0 : m.call(i, g, l.value, l.disabled)
    }
    )
      , y = d == null ? void 0 : d.textContent
      , S = h.useMemo( () => v.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: y
    }, l.value), [l.disabled, l.value, y])
      , {onNativeOptionAdd: f, onNativeOptionRemove: w} = c;
    return ze( () => (f(S),
    () => w(S)), [f, w, S]),
    v.jsxs(v.Fragment, {
        children: [v.jsx(ee.span, {
            id: l.textId,
            ...a,
            ref: u
        }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? vo.createPortal(a.children, s.valueNode) : null]
    })
}
);
p2.displayName = _r;
var f2 = "SelectItemIndicator"
  , m2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...o} = e;
    return u2(f2, n).isSelected ? v.jsx(ee.span, {
        "aria-hidden": !0,
        ...o,
        ref: t
    }) : null
}
);
m2.displayName = f2;
var Wc = "SelectScrollUpButton"
  , h2 = h.forwardRef( (e, t) => {
    const n = Hn(Wc, e.__scopeSelect)
      , o = id(Wc, e.__scopeSelect)
      , [r,a] = h.useState(!1)
      , s = ye(t, o.onScrollButtonChange);
    return ze( () => {
        if (n.viewport && n.isPositioned) {
            let i = function() {
                const c = l.scrollTop > 0;
                a(c)
            };
            const l = n.viewport;
            return i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
        }
    }
    , [n.viewport, n.isPositioned]),
    r ? v.jsx(g2, {
        ...e,
        ref: s,
        onAutoScroll: () => {
            const {viewport: i, selectedItem: l} = n;
            i && l && (i.scrollTop = i.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
h2.displayName = Wc;
var Vc = "SelectScrollDownButton"
  , v2 = h.forwardRef( (e, t) => {
    const n = Hn(Vc, e.__scopeSelect)
      , o = id(Vc, e.__scopeSelect)
      , [r,a] = h.useState(!1)
      , s = ye(t, o.onScrollButtonChange);
    return ze( () => {
        if (n.viewport && n.isPositioned) {
            let i = function() {
                const c = l.scrollHeight - l.clientHeight
                  , d = Math.ceil(l.scrollTop) < c;
                a(d)
            };
            const l = n.viewport;
            return i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
        }
    }
    , [n.viewport, n.isPositioned]),
    r ? v.jsx(g2, {
        ...e,
        ref: s,
        onAutoScroll: () => {
            const {viewport: i, selectedItem: l} = n;
            i && l && (i.scrollTop = i.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
v2.displayName = Vc;
var g2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: o, ...r} = e
      , a = Hn("SelectScrollButton", n)
      , s = h.useRef(null)
      , i = Mi(n)
      , l = h.useCallback( () => {
        s.current !== null && (window.clearInterval(s.current),
        s.current = null)
    }
    , []);
    return h.useEffect( () => () => l(), [l]),
    ze( () => {
        var d;
        const c = i().find(p => p.ref.current === document.activeElement);
        (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({
            block: "nearest"
        })
    }
    , [i]),
    v.jsx(ee.div, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        style: {
            flexShrink: 0,
            ...r.style
        },
        onPointerDown: G(r.onPointerDown, () => {
            s.current === null && (s.current = window.setInterval(o, 50))
        }
        ),
        onPointerMove: G(r.onPointerMove, () => {
            var c;
            (c = a.onItemLeave) == null || c.call(a),
            s.current === null && (s.current = window.setInterval(o, 50))
        }
        ),
        onPointerLeave: G(r.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , YT = "SelectSeparator"
  , x2 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...o} = e;
    return v.jsx(ee.div, {
        "aria-hidden": !0,
        ...o,
        ref: t
    })
}
);
x2.displayName = YT;
var Hc = "SelectArrow"
  , XT = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...o} = e
      , r = Bi(n)
      , a = Vn(Hc, n)
      , s = Hn(Hc, n);
    return a.open && s.position === "popper" ? v.jsx(Gv, {
        ...r,
        ...o,
        ref: t
    }) : null
}
);
XT.displayName = Hc;
function y2(e) {
    return e === "" || e === void 0
}
var w2 = h.forwardRef( (e, t) => {
    const {value: n, ...o} = e
      , r = h.useRef(null)
      , a = ye(t, r)
      , s = Gb(n);
    return h.useEffect( () => {
        const i = r.current
          , l = window.HTMLSelectElement.prototype
          , d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (s !== n && d) {
            const p = new Event("change",{
                bubbles: !0
            });
            d.call(i, n),
            i.dispatchEvent(p)
        }
    }
    , [s, n]),
    v.jsx(Ta, {
        asChild: !0,
        children: v.jsx("select", {
            ...o,
            ref: a,
            defaultValue: n
        })
    })
}
);
w2.displayName = "BubbleSelect";
function S2(e) {
    const t = et(e)
      , n = h.useRef("")
      , o = h.useRef(0)
      , r = h.useCallback(s => {
        const i = n.current + s;
        t(i),
        function l(c) {
            n.current = c,
            window.clearTimeout(o.current),
            c !== "" && (o.current = window.setTimeout( () => l(""), 1e3))
        }(i)
    }
    , [t])
      , a = h.useCallback( () => {
        n.current = "",
        window.clearTimeout(o.current)
    }
    , []);
    return h.useEffect( () => () => window.clearTimeout(o.current), []),
    [n, r, a]
}
function C2(e, t, n) {
    const r = t.length > 1 && Array.from(t).every(c => c === t[0]) ? t[0] : t
      , a = n ? e.indexOf(n) : -1;
    let s = qT(e, Math.max(a, 0));
    r.length === 1 && (s = s.filter(c => c !== n));
    const l = s.find(c => c.textValue.toLowerCase().startsWith(r.toLowerCase()));
    return l !== n ? l : void 0
}
function qT(e, t) {
    return e.map( (n, o) => e[(t + o) % e.length])
}
var ZT = Yg
  , b2 = qg
  , JT = Jg
  , eE = e2
  , tE = t2
  , T2 = n2
  , nE = s2
  , E2 = c2
  , P2 = d2
  , oE = p2
  , rE = m2
  , k2 = h2
  , N2 = v2
  , R2 = x2;
const aE = ZT
  , sE = JT
  , A2 = h.forwardRef( ({className: e, children: t, ...n}, o) => v.jsxs(b2, {
    "data-lov-id": "src/components/ui/select.tsx:17:2",
    "data-lov-name": "SelectPrimitive.Trigger",
    "data-component-path": "src/components/ui/select.tsx",
    "data-component-line": "17",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Trigger",
    "data-component-content": "%7B%7D",
    ref: o,
    className: ue("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, v.jsx(eE, {
        "data-lov-id": "src/components/ui/select.tsx:26:4",
        "data-lov-name": "SelectPrimitive.Icon",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "26",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Icon",
        "data-component-content": "%7B%7D",
        asChild: !0,
        children: v.jsx(hv, {
            "data-lov-id": "src/components/ui/select.tsx:27:6",
            "data-lov-name": "ChevronDown",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "27",
            "data-component-file": "select.tsx",
            "data-component-name": "ChevronDown",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20opacity-50%22%7D",
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
A2.displayName = b2.displayName;
const D2 = h.forwardRef( ({className: e, ...t}, n) => v.jsx(k2, {
    "data-lov-id": "src/components/ui/select.tsx:37:2",
    "data-lov-name": "SelectPrimitive.ScrollUpButton",
    "data-component-path": "src/components/ui/select.tsx",
    "data-component-line": "37",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.ScrollUpButton",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: v.jsx(p1, {
        "data-lov-id": "src/components/ui/select.tsx:45:4",
        "data-lov-name": "ChevronUp",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "45",
        "data-component-file": "select.tsx",
        "data-component-name": "ChevronUp",
        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
        className: "h-4 w-4"
    })
}));
D2.displayName = k2.displayName;
const I2 = h.forwardRef( ({className: e, ...t}, n) => v.jsx(N2, {
    "data-lov-id": "src/components/ui/select.tsx:54:2",
    "data-lov-name": "SelectPrimitive.ScrollDownButton",
    "data-component-path": "src/components/ui/select.tsx",
    "data-component-line": "54",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.ScrollDownButton",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: v.jsx(hv, {
        "data-lov-id": "src/components/ui/select.tsx:62:4",
        "data-lov-name": "ChevronDown",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "62",
        "data-component-file": "select.tsx",
        "data-component-name": "ChevronDown",
        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
        className: "h-4 w-4"
    })
}));
I2.displayName = N2.displayName;
const j2 = h.forwardRef( ({className: e, children: t, position: n="popper", ...o}, r) => v.jsx(tE, {
    "data-lov-id": "src/components/ui/select.tsx:72:2",
    "data-lov-name": "SelectPrimitive.Portal",
    "data-component-path": "src/components/ui/select.tsx",
    "data-component-line": "72",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Portal",
    "data-component-content": "%7B%7D",
    children: v.jsxs(T2, {
        "data-lov-id": "src/components/ui/select.tsx:73:4",
        "data-lov-name": "SelectPrimitive.Content",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "73",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Content",
        "data-component-content": "%7B%7D",
        ref: r,
        className: ue("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...o,
        children: [v.jsx(D2, {
            "data-lov-id": "src/components/ui/select.tsx:84:6",
            "data-lov-name": "SelectScrollUpButton",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "84",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectScrollUpButton",
            "data-component-content": "%7B%7D"
        }), v.jsx(nE, {
            "data-lov-id": "src/components/ui/select.tsx:85:6",
            "data-lov-name": "SelectPrimitive.Viewport",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "85",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectPrimitive.Viewport",
            "data-component-content": "%7B%7D",
            className: ue("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), v.jsx(I2, {
            "data-lov-id": "src/components/ui/select.tsx:94:6",
            "data-lov-name": "SelectScrollDownButton",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "94",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectScrollDownButton",
            "data-component-content": "%7B%7D"
        })]
    })
}));
j2.displayName = T2.displayName;
const iE = h.forwardRef( ({className: e, ...t}, n) => v.jsx(E2, {
    "data-lov-id": "src/components/ui/select.tsx:104:2",
    "data-lov-name": "SelectPrimitive.Label",
    "data-component-path": "src/components/ui/select.tsx",
    "data-component-line": "104",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Label",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
iE.displayName = E2.displayName;
const _2 = h.forwardRef( ({className: e, children: t, ...n}, o) => v.jsxs(P2, {
    "data-lov-id": "src/components/ui/select.tsx:116:2",
    "data-lov-name": "SelectPrimitive.Item",
    "data-component-path": "src/components/ui/select.tsx",
    "data-component-line": "116",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Item",
    "data-component-content": "%7B%7D",
    ref: o,
    className: ue("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [v.jsx("span", {
        "data-lov-id": "src/components/ui/select.tsx:124:4",
        "data-lov-name": "span",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "124",
        "data-component-file": "select.tsx",
        "data-component-name": "span",
        "data-component-content": "%7B%22className%22%3A%22absolute%20left-2%20flex%20h-3.5%20w-3.5%20items-center%20justify-center%22%7D",
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: v.jsx(rE, {
            "data-lov-id": "src/components/ui/select.tsx:125:6",
            "data-lov-name": "SelectPrimitive.ItemIndicator",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "125",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectPrimitive.ItemIndicator",
            "data-component-content": "%7B%7D",
            children: v.jsx(d1, {
                "data-lov-id": "src/components/ui/select.tsx:126:8",
                "data-lov-name": "Check",
                "data-component-path": "src/components/ui/select.tsx",
                "data-component-line": "126",
                "data-component-file": "select.tsx",
                "data-component-name": "Check",
                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                className: "h-4 w-4"
            })
        })
    }), v.jsx(oE, {
        "data-lov-id": "src/components/ui/select.tsx:130:4",
        "data-lov-name": "SelectPrimitive.ItemText",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "130",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.ItemText",
        "data-component-content": "%7B%7D",
        children: t
    })]
}));
_2.displayName = P2.displayName;
const lE = h.forwardRef( ({className: e, ...t}, n) => v.jsx(R2, {
    "data-lov-id": "src/components/ui/select.tsx:139:2",
    "data-lov-name": "SelectPrimitive.Separator",
    "data-component-path": "src/components/ui/select.tsx",
    "data-component-line": "139",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Separator",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ue("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
lE.displayName = R2.displayName;
const cE = () => {
    const {gameState: e, dispatch: t} = ka()
      , [n,o] = h.useState(e.selectedCarId || "")
      , r = e.cars.filter(d => d.owned)
      , a = e.cars.find(d => d.id === n)
      , s = d => {
        switch (d) {
        case "engine":
            return v.jsx(v1, {
                "data-lov-id": "src/components/PartsShop.tsx:19:28",
                "data-lov-name": "Zap",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "19",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "Zap",
                "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                className: "w-5 h-5"
            });
        case "turbo":
            return v.jsx(xs, {
                "data-lov-id": "src/components/PartsShop.tsx:20:27",
                "data-lov-name": "Wrench",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "20",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "Wrench",
                "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                className: "w-5 h-5"
            });
        case "tires":
            return v.jsx(Gs, {
                "data-lov-id": "src/components/PartsShop.tsx:21:27",
                "data-lov-name": "Car",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "21",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "Car",
                "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                className: "w-5 h-5"
            });
        case "weight":
            return v.jsx(f1, {
                "data-lov-id": "src/components/PartsShop.tsx:22:28",
                "data-lov-name": "Scale",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "22",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "Scale",
                "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                className: "w-5 h-5"
            });
        default:
            return v.jsx(xs, {
                "data-lov-id": "src/components/PartsShop.tsx:23:22",
                "data-lov-name": "Wrench",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "23",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "Wrench",
                "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                className: "w-5 h-5"
            })
        }
    }
      , i = d => {
        switch (d) {
        case "engine":
            return "text-red-400 border-red-500/30 bg-red-600/20";
        case "turbo":
            return "text-blue-400 border-blue-500/30 bg-blue-600/20";
        case "tires":
            return "text-green-400 border-green-500/30 bg-green-600/20";
        case "weight":
            return "text-purple-400 border-purple-500/30 bg-purple-600/20";
        default:
            return "text-gray-400 border-gray-500/30 bg-gray-600/20"
        }
    }
      , l = (d, p) => {
        if (!a) {
            Ye({
                title: "No Car Selected",
                description: "Please select a car to upgrade first.",
                variant: "destructive"
            });
            return
        }
        const u = e.parts.find(y => y.type === d && y.level === p);
        if (u) {
            if (a.upgrades[d] >= p) {
                Ye({
                    title: "Already Upgraded",
                    description: `This car already has ${u.name} or better.`,
                    variant: "destructive"
                });
                return
            }
            if (e.money < u.price) {
                Ye({
                    title: "Insufficient Funds",
                    description: `You need $${u.price.toLocaleString()} to buy this part.`,
                    variant: "destructive"
                });
                return
            }
            t({
                type: "BUY_PART",
                carId: n,
                partType: d,
                level: p
            }),
            Ye({
                title: "Part Installed!",
                description: `${u.name} has been installed on your ${a.name}!`,
                className: "bg-green-600 text-white"
            })
        }
    }
      , c = e.parts.reduce( (d, p) => (d[p.type] || (d[p.type] = []),
    d[p.type].push(p),
    d), {});
    return r.length === 0 ? v.jsxs("div", {
        "data-lov-id": "src/components/PartsShop.tsx:84:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/PartsShop.tsx",
        "data-component-line": "84",
        "data-component-file": "PartsShop.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22text-center%20py-12%22%7D",
        className: "text-center py-12",
        children: [v.jsx(xs, {
            "data-lov-id": "src/components/PartsShop.tsx:85:8",
            "data-lov-name": "Wrench",
            "data-component-path": "src/components/PartsShop.tsx",
            "data-component-line": "85",
            "data-component-file": "PartsShop.tsx",
            "data-component-name": "Wrench",
            "data-component-content": "%7B%22className%22%3A%22w-16%20h-16%20mx-auto%20mb-4%20text-gray-500%22%7D",
            className: "w-16 h-16 mx-auto mb-4 text-gray-500"
        }), v.jsx("h3", {
            "data-lov-id": "src/components/PartsShop.tsx:86:8",
            "data-lov-name": "h3",
            "data-component-path": "src/components/PartsShop.tsx",
            "data-component-line": "86",
            "data-component-file": "PartsShop.tsx",
            "data-component-name": "h3",
            "data-component-content": "%7B%22text%22%3A%22No%20cars%20to%20upgrade%22%2C%22className%22%3A%22text-xl%20font-semibold%20mb-2%22%7D",
            className: "text-xl font-semibold mb-2",
            children: "No cars to upgrade"
        }), v.jsx("p", {
            "data-lov-id": "src/components/PartsShop.tsx:87:8",
            "data-lov-name": "p",
            "data-component-path": "src/components/PartsShop.tsx",
            "data-component-line": "87",
            "data-component-file": "PartsShop.tsx",
            "data-component-name": "p",
            "data-component-content": "%7B%22text%22%3A%22Buy%20a%20car%20first%20to%20access%20the%20parts%20shop!%22%2C%22className%22%3A%22text-gray-400%22%7D",
            className: "text-gray-400",
            children: "Buy a car first to access the parts shop!"
        })]
    }) : v.jsxs("div", {
        "data-lov-id": "src/components/PartsShop.tsx:93:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/PartsShop.tsx",
        "data-component-line": "93",
        "data-component-file": "PartsShop.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: [v.jsxs("div", {
            "data-lov-id": "src/components/PartsShop.tsx:94:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/PartsShop.tsx",
            "data-component-line": "94",
            "data-component-file": "PartsShop.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
            className: "text-center",
            children: [v.jsx("h2", {
                "data-lov-id": "src/components/PartsShop.tsx:95:8",
                "data-lov-name": "h2",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "95",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "h2",
                "data-component-content": "%7B%22text%22%3A%22Performance%20Parts%22%2C%22className%22%3A%22text-3xl%20font-bold%20mb-2%22%7D",
                className: "text-3xl font-bold mb-2",
                children: "Performance Parts"
            }), v.jsx("p", {
                "data-lov-id": "src/components/PartsShop.tsx:96:8",
                "data-lov-name": "p",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "96",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "p",
                "data-component-content": "%7B%22text%22%3A%22Upgrade%20your%20car%20to%20dominate%20the%20track%22%2C%22className%22%3A%22text-gray-400%22%7D",
                className: "text-gray-400",
                children: "Upgrade your car to dominate the track"
            })]
        }), v.jsx("div", {
            "data-lov-id": "src/components/PartsShop.tsx:99:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/PartsShop.tsx",
            "data-component-line": "99",
            "data-component-file": "PartsShop.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22max-w-md%20mx-auto%22%7D",
            className: "max-w-md mx-auto",
            children: v.jsxs(aE, {
                value: n,
                onValueChange: o,
                children: [v.jsx(A2, {
                    "data-lov-id": "src/components/PartsShop.tsx:101:10",
                    "data-lov-name": "SelectTrigger",
                    "data-component-path": "src/components/PartsShop.tsx",
                    "data-component-line": "101",
                    "data-component-file": "PartsShop.tsx",
                    "data-component-name": "SelectTrigger",
                    "data-component-content": "%7B%22className%22%3A%22bg-gray-800%20border-gray-700%22%7D",
                    className: "bg-gray-800 border-gray-700",
                    children: v.jsx(sE, {
                        "data-lov-id": "src/components/PartsShop.tsx:102:12",
                        "data-lov-name": "SelectValue",
                        "data-component-path": "src/components/PartsShop.tsx",
                        "data-component-line": "102",
                        "data-component-file": "PartsShop.tsx",
                        "data-component-name": "SelectValue",
                        "data-component-content": "%7B%22placeholder%22%3A%22Select%20a%20car%20to%20upgrade%22%7D",
                        placeholder: "Select a car to upgrade"
                    })
                }), v.jsx(j2, {
                    "data-lov-id": "src/components/PartsShop.tsx:104:10",
                    "data-lov-name": "SelectContent",
                    "data-component-path": "src/components/PartsShop.tsx",
                    "data-component-line": "104",
                    "data-component-file": "PartsShop.tsx",
                    "data-component-name": "SelectContent",
                    "data-component-content": "%7B%22className%22%3A%22bg-gray-800%20border-gray-700%22%7D",
                    className: "bg-gray-800 border-gray-700",
                    children: r.map(d => v.jsxs(_2, {
                        "data-lov-id": "src/components/PartsShop.tsx:106:14",
                        "data-lov-name": "SelectItem",
                        "data-component-path": "src/components/PartsShop.tsx",
                        "data-component-line": "106",
                        "data-component-file": "PartsShop.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%22className%22%3A%22text-white%22%7D",
                        value: d.id,
                        className: "text-white",
                        children: [d.image, " ", d.brand, " ", d.name]
                    }, d.id))
                })]
            })
        }), a && v.jsx("div", {
            "data-lov-id": "src/components/PartsShop.tsx:115:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/PartsShop.tsx",
            "data-component-line": "115",
            "data-component-file": "PartsShop.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: Object.entries(c).map( ([d,p]) => v.jsxs("div", {
                "data-lov-id": "src/components/PartsShop.tsx:117:12",
                "data-lov-name": "div",
                "data-component-path": "src/components/PartsShop.tsx",
                "data-component-line": "117",
                "data-component-file": "PartsShop.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                className: "space-y-4",
                children: [v.jsxs("h3", {
                    "data-lov-id": "src/components/PartsShop.tsx:118:14",
                    "data-lov-name": "h3",
                    "data-component-path": "src/components/PartsShop.tsx",
                    "data-component-line": "118",
                    "data-component-file": "PartsShop.tsx",
                    "data-component-name": "h3",
                    "data-component-content": "%7B%22text%22%3A%22Upgrades%22%2C%22className%22%3A%22text-xl%20font-semibold%20capitalize%20flex%20items-center%20gap-2%22%7D",
                    className: "text-xl font-semibold capitalize flex items-center gap-2",
                    children: [s(d), d, " Upgrades"]
                }), v.jsx("div", {
                    "data-lov-id": "src/components/PartsShop.tsx:122:14",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/PartsShop.tsx",
                    "data-component-line": "122",
                    "data-component-file": "PartsShop.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                    className: "space-y-3",
                    children: p.map(u => {
                        const S = a.upgrades[d] >= u.level
                          , f = e.money >= u.price;
                        return v.jsx(ro, {
                            "data-lov-id": "src/components/PartsShop.tsx:129:20",
                            "data-lov-name": "Card",
                            "data-component-path": "src/components/PartsShop.tsx",
                            "data-component-line": "129",
                            "data-component-file": "PartsShop.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%7D",
                            className: `${i(d)} border transition-all`,
                            children: v.jsxs(ao, {
                                "data-lov-id": "src/components/PartsShop.tsx:130:22",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/components/PartsShop.tsx",
                                "data-component-line": "130",
                                "data-component-file": "PartsShop.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
                                className: "p-4",
                                children: [v.jsxs("div", {
                                    "data-lov-id": "src/components/PartsShop.tsx:131:24",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/PartsShop.tsx",
                                    "data-component-line": "131",
                                    "data-component-file": "PartsShop.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%20items-start%20mb-3%22%7D",
                                    className: "flex justify-between items-start mb-3",
                                    children: [v.jsxs("div", {
                                        "data-lov-id": "src/components/PartsShop.tsx:132:26",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/PartsShop.tsx",
                                        "data-component-line": "132",
                                        "data-component-file": "PartsShop.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        children: [v.jsx("h4", {
                                            "data-lov-id": "src/components/PartsShop.tsx:133:28",
                                            "data-lov-name": "h4",
                                            "data-component-path": "src/components/PartsShop.tsx",
                                            "data-component-line": "133",
                                            "data-component-file": "PartsShop.tsx",
                                            "data-component-name": "h4",
                                            "data-component-content": "%7B%22className%22%3A%22font-semibold%22%7D",
                                            className: "font-semibold",
                                            children: u.name
                                        }), v.jsxs("p", {
                                            "data-lov-id": "src/components/PartsShop.tsx:134:28",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/PartsShop.tsx",
                                            "data-component-line": "134",
                                            "data-component-file": "PartsShop.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22text%22%3A%22Level%22%2C%22className%22%3A%22text-sm%20opacity-80%22%7D",
                                            className: "text-sm opacity-80",
                                            children: ["Level ", u.level]
                                        })]
                                    }), v.jsx("div", {
                                        "data-lov-id": "src/components/PartsShop.tsx:136:26",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/PartsShop.tsx",
                                        "data-component-line": "136",
                                        "data-component-file": "PartsShop.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-right%22%7D",
                                        className: "text-right",
                                        children: v.jsxs("div", {
                                            "data-lov-id": "src/components/PartsShop.tsx:137:28",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/PartsShop.tsx",
                                            "data-component-line": "137",
                                            "data-component-file": "PartsShop.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22text%22%3A%22%24%22%2C%22className%22%3A%22text-lg%20font-bold%22%7D",
                                            className: "text-lg font-bold",
                                            children: ["$", u.price.toLocaleString()]
                                        })
                                    })]
                                }), v.jsxs("div", {
                                    "data-lov-id": "src/components/PartsShop.tsx:141:24",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/PartsShop.tsx",
                                    "data-component-line": "141",
                                    "data-component-file": "PartsShop.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-2%20text-sm%20mb-3%22%7D",
                                    className: "grid grid-cols-2 gap-2 text-sm mb-3",
                                    children: [u.powerIncrease > 0 && v.jsxs("div", {
                                        "data-lov-id": "src/components/PartsShop.tsx:143:28",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/PartsShop.tsx",
                                        "data-component-line": "143",
                                        "data-component-file": "PartsShop.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22text%22%3A%22%2B%20HP%22%7D",
                                        children: ["+", u.powerIncrease, " HP"]
                                    }), u.weightChange !== 0 && v.jsxs("div", {
                                        "data-lov-id": "src/components/PartsShop.tsx:146:28",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/PartsShop.tsx",
                                        "data-component-line": "146",
                                        "data-component-file": "PartsShop.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22text%22%3A%22kg%22%7D",
                                        className: u.weightChange > 0 ? "text-red-300" : "text-green-300",
                                        children: [u.weightChange > 0 ? "+" : "", u.weightChange, " kg"]
                                    })]
                                }), v.jsx(va, {
                                    "data-lov-id": "src/components/PartsShop.tsx:152:24",
                                    "data-lov-name": "Button",
                                    "data-component-path": "src/components/PartsShop.tsx",
                                    "data-component-line": "152",
                                    "data-component-file": "PartsShop.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content": "%7B%7D",
                                    onClick: () => l(d, u.level),
                                    disabled: S || !f,
                                    className: `w-full ${S ? "bg-gray-600 hover:bg-gray-600 cursor-not-allowed" : f ? "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500" : "bg-red-900 hover:bg-red-900 cursor-not-allowed"}`,
                                    size: "sm",
                                    children: S ? "✓ Installed" : f ? "Install" : "Insufficient Funds"
                                })]
                            })
                        }, u.id)
                    }
                    )
                })]
            }, d))
        })]
    })
}
  , O2 = h.forwardRef( ({className: e, type: t, ...n}, o) => v.jsx("input", {
    "data-lov-id": "src/components/ui/input.tsx:8:6",
    "data-lov-name": "input",
    "data-component-path": "src/components/ui/input.tsx",
    "data-component-line": "8",
    "data-component-file": "input.tsx",
    "data-component-name": "input",
    "data-component-content": "%7B%7D",
    type: t,
    className: ue("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: o,
    ...n
}));
O2.displayName = "Input";
const uE = () => {
    const {gameState: e, dispatch: t} = ka()
      , [n,o] = h.useState(!1)
      , [r,a] = h.useState("1000")
      , [s,i] = h.useState(null)
      , l = e.cars.find(f => f.id === e.selectedCarId)
      , c = f => {
        const w = f.upgrades.engine * 50
          , g = f.upgrades.turbo * 75
          , m = f.upgrades.tires * 20;
        return f.basePower + w + g + m
    }
      , d = f => {
        const w = f.upgrades.engine * 10
          , g = f.upgrades.turbo * 15
          , m = f.upgrades.tires * -5
          , x = f.upgrades.weight * -100;
        return f.baseWeight + w + g + m + x
    }
      , p = (f, w) => {
        const g = f / w
          , m = 20
          , x = Math.min(g * 8, 15);
        return Math.max(m - x + (Math.random() * 2 - 1), 8)
    }
      , u = () => {
        const f = [{
            name: "Street Racer",
            power: 350,
            weight: 1400
        }, {
            name: "Track Veteran",
            power: 500,
            weight: 1600
        }, {
            name: "Pro Driver",
            power: 650,
            weight: 1500
        }, {
            name: "Racing Legend",
            power: 800,
            weight: 1700
        }];
        return f[Math.floor(Math.random() * f.length)]
    }
      , y = async () => {
        if (!l) {
            Ye({
                title: "No Car Selected",
                description: "Select a car from your garage first!",
                variant: "destructive"
            });
            return
        }
        o(!0),
        i(null),
        setTimeout( () => {
            const f = c(l)
              , w = d(l)
              , g = p(f, w)
              , m = u()
              , x = p(m.power, m.weight)
              , C = g < x
              , P = C ? 5e3 + Math.floor(Math.random() * 5e3) : 0;
            i({
                playerTime: g,
                opponentTime: x,
                won: C,
                prize: P
            }),
            C ? (t({
                type: "WIN_RACE",
                prize: P
            }),
            Ye({
                title: "Victory!",
                description: `You won $${P.toLocaleString()}!`,
                className: "bg-green-600 text-white"
            })) : (t({
                type: "LOSE_RACE"
            }),
            Ye({
                title: "Defeat",
                description: "Better luck next time!",
                variant: "destructive"
            })),
            o(!1)
        }
        , 3e3)
    }
      , S = () => {
        const f = parseInt(r);
        if (isNaN(f) || f <= 0) {
            Ye({
                title: "Invalid Bet",
                description: "Enter a valid bet amount.",
                variant: "destructive"
            });
            return
        }
        if (f > e.money) {
            Ye({
                title: "Insufficient Funds",
                description: "You don't have enough money for this bet.",
                variant: "destructive"
            });
            return
        }
        const w = Math.random() > .5;
        t({
            type: "PLACE_BET",
            amount: f,
            won: w
        }),
        Ye({
            title: w ? "Bet Won!" : "Bet Lost",
            description: w ? `You won $${f.toLocaleString()}!` : `You lost $${f.toLocaleString()}.`,
            className: w ? "bg-green-600 text-white" : "",
            variant: w ? "default" : "destructive"
        })
    }
    ;
    return l ? v.jsxs("div", {
        "data-lov-id": "src/components/RaceTrack.tsx:156:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/RaceTrack.tsx",
        "data-component-line": "156",
        "data-component-file": "RaceTrack.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: [v.jsxs("div", {
            "data-lov-id": "src/components/RaceTrack.tsx:157:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/RaceTrack.tsx",
            "data-component-line": "157",
            "data-component-file": "RaceTrack.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
            className: "text-center",
            children: [v.jsx("h2", {
                "data-lov-id": "src/components/RaceTrack.tsx:158:8",
                "data-lov-name": "h2",
                "data-component-path": "src/components/RaceTrack.tsx",
                "data-component-line": "158",
                "data-component-file": "RaceTrack.tsx",
                "data-component-name": "h2",
                "data-component-content": "%7B%22text%22%3A%22Drag%20Strip%22%2C%22className%22%3A%22text-3xl%20font-bold%20mb-2%22%7D",
                className: "text-3xl font-bold mb-2",
                children: "Drag Strip"
            }), v.jsx("p", {
                "data-lov-id": "src/components/RaceTrack.tsx:159:8",
                "data-lov-name": "p",
                "data-component-path": "src/components/RaceTrack.tsx",
                "data-component-line": "159",
                "data-component-file": "RaceTrack.tsx",
                "data-component-name": "p",
                "data-component-content": "%7B%22text%22%3A%22Quarter%20mile%20races%20-%20winner%20takes%20all%22%2C%22className%22%3A%22text-gray-400%22%7D",
                className: "text-gray-400",
                children: "Quarter mile races - winner takes all"
            })]
        }), v.jsxs("div", {
            "data-lov-id": "src/components/RaceTrack.tsx:162:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/RaceTrack.tsx",
            "data-component-line": "162",
            "data-component-file": "RaceTrack.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [v.jsxs(ro, {
                "data-lov-id": "src/components/RaceTrack.tsx:164:8",
                "data-lov-name": "Card",
                "data-component-path": "src/components/RaceTrack.tsx",
                "data-component-line": "164",
                "data-component-file": "RaceTrack.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%22className%22%3A%22bg-gray-800%2F50%20border-gray-700%22%7D",
                className: "bg-gray-800/50 border-gray-700",
                children: [v.jsx(ma, {
                    "data-lov-id": "src/components/RaceTrack.tsx:165:10",
                    "data-lov-name": "CardHeader",
                    "data-component-path": "src/components/RaceTrack.tsx",
                    "data-component-line": "165",
                    "data-component-file": "RaceTrack.tsx",
                    "data-component-name": "CardHeader",
                    "data-component-content": "%7B%7D",
                    children: v.jsxs(ha, {
                        "data-lov-id": "src/components/RaceTrack.tsx:166:12",
                        "data-lov-name": "CardTitle",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "166",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content": "%7B%22text%22%3A%22Quick%20Race%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [v.jsx(Pc, {
                            "data-lov-id": "src/components/RaceTrack.tsx:167:14",
                            "data-lov-name": "Trophy",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "167",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "Trophy",
                            "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%20text-yellow-400%22%7D",
                            className: "w-5 h-5 text-yellow-400"
                        }), "Quick Race"]
                    })
                }), v.jsxs(ao, {
                    "data-lov-id": "src/components/RaceTrack.tsx:171:10",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src/components/RaceTrack.tsx",
                    "data-component-line": "171",
                    "data-component-file": "RaceTrack.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                    className: "space-y-4",
                    children: [v.jsxs("div", {
                        "data-lov-id": "src/components/RaceTrack.tsx:172:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "172",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22bg-gray-900%2F50%20p-4%20rounded-lg%22%7D",
                        className: "bg-gray-900/50 p-4 rounded-lg",
                        children: [v.jsx("h4", {
                            "data-lov-id": "src/components/RaceTrack.tsx:173:14",
                            "data-lov-name": "h4",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "173",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "h4",
                            "data-component-content": "%7B%22text%22%3A%22Your%20Car%3A%22%2C%22className%22%3A%22font-semibold%20mb-2%22%7D",
                            className: "font-semibold mb-2",
                            children: "Your Car:"
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:174:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "174",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                            className: "flex items-center gap-3",
                            children: [v.jsx("span", {
                                "data-lov-id": "src/components/RaceTrack.tsx:175:16",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "175",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22className%22%3A%22text-2xl%22%7D",
                                className: "text-2xl",
                                children: l.image
                            }), v.jsxs("div", {
                                "data-lov-id": "src/components/RaceTrack.tsx:176:16",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "176",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [v.jsx("div", {
                                    "data-lov-id": "src/components/RaceTrack.tsx:177:18",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "177",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22font-semibold%22%7D",
                                    className: "font-semibold",
                                    children: l.name
                                }), v.jsxs("div", {
                                    "data-lov-id": "src/components/RaceTrack.tsx:178:18",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "178",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22text%22%3A%22HP%20%E2%80%A2%20kg%22%2C%22className%22%3A%22text-sm%20text-gray-400%22%7D",
                                    className: "text-sm text-gray-400",
                                    children: [c(l), " HP • ", d(l), " kg"]
                                })]
                            })]
                        })]
                    }), s && v.jsxs("div", {
                        "data-lov-id": "src/components/RaceTrack.tsx:186:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "186",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        className: `p-4 rounded-lg border ${s.won ? "bg-green-600/20 border-green-500/30" : "bg-red-600/20 border-red-500/30"}`,
                        children: [v.jsx("h4", {
                            "data-lov-id": "src/components/RaceTrack.tsx:191:16",
                            "data-lov-name": "h4",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "191",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "h4",
                            "data-component-content": "%7B%22text%22%3A%22Race%20Results%3A%22%2C%22className%22%3A%22font-semibold%20mb-2%22%7D",
                            className: "font-semibold mb-2",
                            children: "Race Results:"
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:192:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "192",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%20text-sm%22%7D",
                            className: "grid grid-cols-2 gap-4 text-sm",
                            children: [v.jsxs("div", {
                                "data-lov-id": "src/components/RaceTrack.tsx:193:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "193",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [v.jsx("div", {
                                    "data-lov-id": "src/components/RaceTrack.tsx:194:20",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "194",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22text%22%3A%22Your%20Time%3A%22%2C%22className%22%3A%22text-gray-400%22%7D",
                                    className: "text-gray-400",
                                    children: "Your Time:"
                                }), v.jsxs("div", {
                                    "data-lov-id": "src/components/RaceTrack.tsx:195:20",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "195",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22text%22%3A%22s%22%2C%22className%22%3A%22font-mono%20text-lg%22%7D",
                                    className: "font-mono text-lg",
                                    children: [s.playerTime.toFixed(2), "s"]
                                })]
                            }), v.jsxs("div", {
                                "data-lov-id": "src/components/RaceTrack.tsx:197:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "197",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [v.jsx("div", {
                                    "data-lov-id": "src/components/RaceTrack.tsx:198:20",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "198",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22text%22%3A%22Opponent%3A%22%2C%22className%22%3A%22text-gray-400%22%7D",
                                    className: "text-gray-400",
                                    children: "Opponent:"
                                }), v.jsxs("div", {
                                    "data-lov-id": "src/components/RaceTrack.tsx:199:20",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "199",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22text%22%3A%22s%22%2C%22className%22%3A%22font-mono%20text-lg%22%7D",
                                    className: "font-mono text-lg",
                                    children: [s.opponentTime.toFixed(2), "s"]
                                })]
                            })]
                        }), s.won && v.jsxs("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:203:18",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "203",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22Prize%3A%20%24%22%2C%22className%22%3A%22mt-2%20text-green-400%22%7D",
                            className: "mt-2 text-green-400",
                            children: ["Prize: $", s.prize.toLocaleString()]
                        })]
                    }), v.jsx(va, {
                        "data-lov-id": "src/components/RaceTrack.tsx:210:12",
                        "data-lov-name": "Button",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "210",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%22className%22%3A%22w-full%20bg-gradient-to-r%20from-red-600%20to-orange-600%20hover%3Afrom-red-700%20hover%3Ato-orange-700%22%7D",
                        onClick: y,
                        disabled: n,
                        className: "w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700",
                        size: "lg",
                        children: n ? v.jsxs(v.Fragment, {
                            children: [v.jsx(m1, {
                                "data-lov-id": "src/components/RaceTrack.tsx:218:18",
                                "data-lov-name": "Timer",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "218",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "Timer",
                                "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%20animate-spin%22%7D",
                                className: "w-4 h-4 mr-2 animate-spin"
                            }), "Racing..."]
                        }) : v.jsxs(v.Fragment, {
                            children: [v.jsx(Rp, {
                                "data-lov-id": "src/components/RaceTrack.tsx:223:18",
                                "data-lov-name": "Flag",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "223",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "Flag",
                                "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2"
                            }), "Start Race"]
                        })
                    })]
                })]
            }), v.jsxs(ro, {
                "data-lov-id": "src/components/RaceTrack.tsx:232:8",
                "data-lov-name": "Card",
                "data-component-path": "src/components/RaceTrack.tsx",
                "data-component-line": "232",
                "data-component-file": "RaceTrack.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%22className%22%3A%22bg-gray-800%2F50%20border-gray-700%22%7D",
                className: "bg-gray-800/50 border-gray-700",
                children: [v.jsx(ma, {
                    "data-lov-id": "src/components/RaceTrack.tsx:233:10",
                    "data-lov-name": "CardHeader",
                    "data-component-path": "src/components/RaceTrack.tsx",
                    "data-component-line": "233",
                    "data-component-file": "RaceTrack.tsx",
                    "data-component-name": "CardHeader",
                    "data-component-content": "%7B%7D",
                    children: v.jsxs(ha, {
                        "data-lov-id": "src/components/RaceTrack.tsx:234:12",
                        "data-lov-name": "CardTitle",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "234",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content": "%7B%22text%22%3A%22Side%20Bets%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [v.jsx(ca, {
                            "data-lov-id": "src/components/RaceTrack.tsx:235:14",
                            "data-lov-name": "DollarSign",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "235",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "DollarSign",
                            "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%20text-green-400%22%7D",
                            className: "w-5 h-5 text-green-400"
                        }), "Side Bets"]
                    })
                }), v.jsxs(ao, {
                    "data-lov-id": "src/components/RaceTrack.tsx:239:10",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src/components/RaceTrack.tsx",
                    "data-component-line": "239",
                    "data-component-file": "RaceTrack.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                    className: "space-y-4",
                    children: [v.jsxs("div", {
                        "data-lov-id": "src/components/RaceTrack.tsx:240:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "240",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22bg-gray-900%2F50%20p-4%20rounded-lg%22%7D",
                        className: "bg-gray-900/50 p-4 rounded-lg",
                        children: [v.jsx("h4", {
                            "data-lov-id": "src/components/RaceTrack.tsx:241:14",
                            "data-lov-name": "h4",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "241",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "h4",
                            "data-component-content": "%7B%22text%22%3A%22Place%20a%20Bet%22%2C%22className%22%3A%22font-semibold%20mb-2%22%7D",
                            className: "font-semibold mb-2",
                            children: "Place a Bet"
                        }), v.jsx("p", {
                            "data-lov-id": "src/components/RaceTrack.tsx:242:14",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "242",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Bet%20on%20random%20street%20races%20happening%20around%20the%20city.%2050%2F50%20odds.%22%2C%22className%22%3A%22text-sm%20text-gray-400%20mb-3%22%7D",
                            className: "text-sm text-gray-400 mb-3",
                            children: "Bet on random street races happening around the city. 50/50 odds."
                        }), v.jsxs("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:246:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "246",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                            className: "space-y-3",
                            children: [v.jsxs("div", {
                                "data-lov-id": "src/components/RaceTrack.tsx:247:16",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "247",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [v.jsx("label", {
                                    "data-lov-id": "src/components/RaceTrack.tsx:248:18",
                                    "data-lov-name": "label",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "248",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "label",
                                    "data-component-content": "%7B%22text%22%3A%22Bet%20Amount%22%2C%22className%22%3A%22text-sm%20text-gray-400%20block%20mb-1%22%7D",
                                    className: "text-sm text-gray-400 block mb-1",
                                    children: "Bet Amount"
                                }), v.jsx(O2, {
                                    "data-lov-id": "src/components/RaceTrack.tsx:249:18",
                                    "data-lov-name": "Input",
                                    "data-component-path": "src/components/RaceTrack.tsx",
                                    "data-component-line": "249",
                                    "data-component-file": "RaceTrack.tsx",
                                    "data-component-name": "Input",
                                    "data-component-content": "%7B%22placeholder%22%3A%22Enter%20amount%22%2C%22className%22%3A%22bg-gray-800%20border-gray-700%22%7D",
                                    type: "number",
                                    value: r,
                                    onChange: f => a(f.target.value),
                                    className: "bg-gray-800 border-gray-700",
                                    placeholder: "Enter amount",
                                    min: "100",
                                    max: e.money
                                })]
                            }), v.jsxs("div", {
                                "data-lov-id": "src/components/RaceTrack.tsx:260:16",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/RaceTrack.tsx",
                                "data-component-line": "260",
                                "data-component-file": "RaceTrack.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22text%22%3A%22Potential%20winnings%3A%20%24%22%2C%22className%22%3A%22text-xs%20text-gray-500%22%7D",
                                className: "text-xs text-gray-500",
                                children: ["Potential winnings: $", parseInt(r || "0").toLocaleString()]
                            })]
                        })]
                    }), v.jsxs(va, {
                        "data-lov-id": "src/components/RaceTrack.tsx:266:12",
                        "data-lov-name": "Button",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "266",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%22text%22%3A%22Place%20Bet%22%2C%22className%22%3A%22w-full%20bg-gradient-to-r%20from-green-600%20to-blue-600%20hover%3Afrom-green-700%20hover%3Ato-blue-700%22%7D",
                        onClick: S,
                        className: "w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700",
                        size: "lg",
                        children: [v.jsx(ca, {
                            "data-lov-id": "src/components/RaceTrack.tsx:271:14",
                            "data-lov-name": "DollarSign",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "271",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "DollarSign",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2"
                        }), "Place Bet"]
                    })]
                })]
            })]
        }), v.jsx(ro, {
            "data-lov-id": "src/components/RaceTrack.tsx:279:6",
            "data-lov-name": "Card",
            "data-component-path": "src/components/RaceTrack.tsx",
            "data-component-line": "279",
            "data-component-file": "RaceTrack.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%22className%22%3A%22bg-gray-800%2F50%20border-gray-700%22%7D",
            className: "bg-gray-800/50 border-gray-700",
            children: v.jsx(ao, {
                "data-lov-id": "src/components/RaceTrack.tsx:280:8",
                "data-lov-name": "CardContent",
                "data-component-path": "src/components/RaceTrack.tsx",
                "data-component-line": "280",
                "data-component-file": "RaceTrack.tsx",
                "data-component-name": "CardContent",
                "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                className: "p-6",
                children: v.jsxs("div", {
                    "data-lov-id": "src/components/RaceTrack.tsx:281:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/RaceTrack.tsx",
                    "data-component-line": "281",
                    "data-component-file": "RaceTrack.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-3%20gap-6%20text-center%22%7D",
                    className: "grid grid-cols-3 gap-6 text-center",
                    children: [v.jsxs("div", {
                        "data-lov-id": "src/components/RaceTrack.tsx:282:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "282",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [v.jsx("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:283:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "283",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-3xl%20font-bold%20text-green-400%22%7D",
                            className: "text-3xl font-bold text-green-400",
                            children: e.wins
                        }), v.jsx("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:284:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "284",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22Wins%22%2C%22className%22%3A%22text-gray-400%22%7D",
                            className: "text-gray-400",
                            children: "Wins"
                        })]
                    }), v.jsxs("div", {
                        "data-lov-id": "src/components/RaceTrack.tsx:286:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "286",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [v.jsx("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:287:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "287",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-3xl%20font-bold%20text-red-400%22%7D",
                            className: "text-3xl font-bold text-red-400",
                            children: e.losses
                        }), v.jsx("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:288:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "288",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22Losses%22%2C%22className%22%3A%22text-gray-400%22%7D",
                            className: "text-gray-400",
                            children: "Losses"
                        })]
                    }), v.jsxs("div", {
                        "data-lov-id": "src/components/RaceTrack.tsx:290:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/RaceTrack.tsx",
                        "data-component-line": "290",
                        "data-component-file": "RaceTrack.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [v.jsxs("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:291:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "291",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22%25%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-blue-400%22%7D",
                            className: "text-3xl font-bold text-blue-400",
                            children: [e.wins + e.losses > 0 ? (e.wins / (e.wins + e.losses) * 100).toFixed(0) : 0, "%"]
                        }), v.jsx("div", {
                            "data-lov-id": "src/components/RaceTrack.tsx:296:14",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/RaceTrack.tsx",
                            "data-component-line": "296",
                            "data-component-file": "RaceTrack.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22text%22%3A%22Win%20Rate%22%2C%22className%22%3A%22text-gray-400%22%7D",
                            className: "text-gray-400",
                            children: "Win Rate"
                        })]
                    })]
                })
            })
        })]
    }) : v.jsxs("div", {
        "data-lov-id": "src/components/RaceTrack.tsx:147:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/RaceTrack.tsx",
        "data-component-line": "147",
        "data-component-file": "RaceTrack.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22text-center%20py-12%22%7D",
        className: "text-center py-12",
        children: [v.jsx(Rp, {
            "data-lov-id": "src/components/RaceTrack.tsx:148:8",
            "data-lov-name": "Flag",
            "data-component-path": "src/components/RaceTrack.tsx",
            "data-component-line": "148",
            "data-component-file": "RaceTrack.tsx",
            "data-component-name": "Flag",
            "data-component-content": "%7B%22className%22%3A%22w-16%20h-16%20mx-auto%20mb-4%20text-gray-500%22%7D",
            className: "w-16 h-16 mx-auto mb-4 text-gray-500"
        }), v.jsx("h3", {
            "data-lov-id": "src/components/RaceTrack.tsx:149:8",
            "data-lov-name": "h3",
            "data-component-path": "src/components/RaceTrack.tsx",
            "data-component-line": "149",
            "data-component-file": "RaceTrack.tsx",
            "data-component-name": "h3",
            "data-component-content": "%7B%22text%22%3A%22No%20car%20selected%22%2C%22className%22%3A%22text-xl%20font-semibold%20mb-2%22%7D",
            className: "text-xl font-semibold mb-2",
            children: "No car selected"
        }), v.jsx("p", {
            "data-lov-id": "src/components/RaceTrack.tsx:150:8",
            "data-lov-name": "p",
            "data-component-path": "src/components/RaceTrack.tsx",
            "data-component-line": "150",
            "data-component-file": "RaceTrack.tsx",
            "data-component-name": "p",
            "data-component-content": "%7B%22text%22%3A%22Select%20a%20car%20from%20your%20garage%20to%20start%20racing!%22%2C%22className%22%3A%22text-gray-400%22%7D",
            className: "text-gray-400",
            children: "Select a car from your garage to start racing!"
        })]
    })
}
  , dE = () => {
    const {gameState: e} = ka();
    return v.jsxs("div", {
        "data-lov-id": "src/pages/Index.tsx:17:4",
        "data-lov-name": "div",
        "data-component-path": "src/pages/Index.tsx",
        "data-component-line": "17",
        "data-component-file": "Index.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-gradient-to-br%20from-gray-900%20via-gray-800%20to-black%20text-white%22%7D",
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white",
        children: [v.jsx("header", {
            "data-lov-id": "src/pages/Index.tsx:19:6",
            "data-lov-name": "header",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "19",
            "data-component-file": "Index.tsx",
            "data-component-name": "header",
            "data-component-content": "%7B%22className%22%3A%22bg-black%2F50%20backdrop-blur%20border-b%20border-red-600%2F30%20p-4%22%7D",
            className: "bg-black/50 backdrop-blur border-b border-red-600/30 p-4",
            children: v.jsxs("div", {
                "data-lov-id": "src/pages/Index.tsx:20:8",
                "data-lov-name": "div",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "20",
                "data-component-file": "Index.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22max-w-7xl%20mx-auto%20flex%20justify-between%20items-center%22%7D",
                className: "max-w-7xl mx-auto flex justify-between items-center",
                children: [v.jsxs("div", {
                    "data-lov-id": "src/pages/Index.tsx:21:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "21",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                    className: "flex items-center gap-3",
                    children: [v.jsx(Gs, {
                        "data-lov-id": "src/pages/Index.tsx:22:12",
                        "data-lov-name": "Car",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "22",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "Car",
                        "data-component-content": "%7B%22className%22%3A%22w-8%20h-8%20text-red-500%22%7D",
                        className: "w-8 h-8 text-red-500"
                    }), v.jsx("h1", {
                        "data-lov-id": "src/pages/Index.tsx:23:12",
                        "data-lov-name": "h1",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "23",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "h1",
                        "data-component-content": "%7B%22text%22%3A%22Drag%20Racing%20Pro%22%2C%22className%22%3A%22text-2xl%20font-bold%20bg-gradient-to-r%20from-red-500%20to-blue-500%20bg-clip-text%20text-transparent%22%7D",
                        className: "text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent",
                        children: "Drag Racing Pro"
                    })]
                }), v.jsxs("div", {
                    "data-lov-id": "src/pages/Index.tsx:27:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "27",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                    className: "flex items-center gap-4",
                    children: [v.jsxs("div", {
                        "data-lov-id": "src/pages/Index.tsx:28:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "28",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%20bg-green-600%2F20%20px-4%20py-2%20rounded-lg%20border%20border-green-500%2F30%22%7D",
                        className: "flex items-center gap-2 bg-green-600/20 px-4 py-2 rounded-lg border border-green-500/30",
                        children: [v.jsx(ca, {
                            "data-lov-id": "src/pages/Index.tsx:29:14",
                            "data-lov-name": "DollarSign",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "29",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "DollarSign",
                            "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%20text-green-400%22%7D",
                            className: "w-5 h-5 text-green-400"
                        }), v.jsxs("span", {
                            "data-lov-id": "src/pages/Index.tsx:30:14",
                            "data-lov-name": "span",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "30",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22%24%22%2C%22className%22%3A%22font-mono%20text-lg%20text-green-400%22%7D",
                            className: "font-mono text-lg text-green-400",
                            children: ["$", e.money.toLocaleString()]
                        })]
                    }), v.jsxs("div", {
                        "data-lov-id": "src/pages/Index.tsx:34:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "34",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%20bg-yellow-600%2F20%20px-4%20py-2%20rounded-lg%20border%20border-yellow-500%2F30%22%7D",
                        className: "flex items-center gap-2 bg-yellow-600/20 px-4 py-2 rounded-lg border border-yellow-500/30",
                        children: [v.jsx(Pc, {
                            "data-lov-id": "src/pages/Index.tsx:35:14",
                            "data-lov-name": "Trophy",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "35",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Trophy",
                            "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%20text-yellow-400%22%7D",
                            className: "w-5 h-5 text-yellow-400"
                        }), v.jsxs("span", {
                            "data-lov-id": "src/pages/Index.tsx:36:14",
                            "data-lov-name": "span",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "36",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Wins%22%2C%22className%22%3A%22font-mono%20text-lg%20text-yellow-400%22%7D",
                            className: "font-mono text-lg text-yellow-400",
                            children: [e.wins, " Wins"]
                        })]
                    })]
                })]
            })
        }), v.jsx("main", {
            "data-lov-id": "src/pages/Index.tsx:45:6",
            "data-lov-name": "main",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "45",
            "data-component-file": "Index.tsx",
            "data-component-name": "main",
            "data-component-content": "%7B%22className%22%3A%22max-w-7xl%20mx-auto%20p-6%22%7D",
            className: "max-w-7xl mx-auto p-6",
            children: v.jsxs(Rb, {
                "data-lov-id": "src/pages/Index.tsx:46:8",
                "data-lov-name": "Tabs",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "46",
                "data-component-file": "Index.tsx",
                "data-component-name": "Tabs",
                "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
                defaultValue: "garage",
                className: "space-y-6",
                children: [v.jsxs(Mg, {
                    "data-lov-id": "src/pages/Index.tsx:47:10",
                    "data-lov-name": "TabsList",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "47",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "TabsList",
                    "data-component-content": "%7B%22className%22%3A%22grid%20w-full%20grid-cols-4%20bg-gray-800%2F50%20border%20border-gray-700%22%7D",
                    className: "grid w-full grid-cols-4 bg-gray-800/50 border border-gray-700",
                    children: [v.jsxs(Ir, {
                        "data-lov-id": "src/pages/Index.tsx:48:12",
                        "data-lov-name": "TabsTrigger",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "48",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "TabsTrigger",
                        "data-component-content": "%7B%22text%22%3A%22Garage%22%2C%22className%22%3A%22data-%5Bstate%3Dactive%5D%3Abg-red-600%20data-%5Bstate%3Dactive%5D%3Atext-white%22%7D",
                        value: "garage",
                        className: "data-[state=active]:bg-red-600 data-[state=active]:text-white",
                        children: [v.jsx(Gs, {
                            "data-lov-id": "src/pages/Index.tsx:49:14",
                            "data-lov-name": "Car",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "49",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Car",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2"
                        }), "Garage"]
                    }), v.jsxs(Ir, {
                        "data-lov-id": "src/pages/Index.tsx:52:12",
                        "data-lov-name": "TabsTrigger",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "52",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "TabsTrigger",
                        "data-component-content": "%7B%22text%22%3A%22Car%20Shop%22%2C%22className%22%3A%22data-%5Bstate%3Dactive%5D%3Abg-blue-600%20data-%5Bstate%3Dactive%5D%3Atext-white%22%7D",
                        value: "shop",
                        className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                        children: [v.jsx(ca, {
                            "data-lov-id": "src/pages/Index.tsx:53:14",
                            "data-lov-name": "DollarSign",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "53",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "DollarSign",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2"
                        }), "Car Shop"]
                    }), v.jsxs(Ir, {
                        "data-lov-id": "src/pages/Index.tsx:56:12",
                        "data-lov-name": "TabsTrigger",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "56",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "TabsTrigger",
                        "data-component-content": "%7B%22text%22%3A%22Parts%20%26%20Upgrades%22%2C%22className%22%3A%22data-%5Bstate%3Dactive%5D%3Abg-purple-600%20data-%5Bstate%3Dactive%5D%3Atext-white%22%7D",
                        value: "parts",
                        className: "data-[state=active]:bg-purple-600 data-[state=active]:text-white",
                        children: [v.jsx(xs, {
                            "data-lov-id": "src/pages/Index.tsx:57:14",
                            "data-lov-name": "Wrench",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "57",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Wrench",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2"
                        }), "Parts & Upgrades"]
                    }), v.jsxs(Ir, {
                        "data-lov-id": "src/pages/Index.tsx:60:12",
                        "data-lov-name": "TabsTrigger",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "60",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "TabsTrigger",
                        "data-component-content": "%7B%22text%22%3A%22Race%20Track%22%2C%22className%22%3A%22data-%5Bstate%3Dactive%5D%3Abg-orange-600%20data-%5Bstate%3Dactive%5D%3Atext-white%22%7D",
                        value: "race",
                        className: "data-[state=active]:bg-orange-600 data-[state=active]:text-white",
                        children: [v.jsx(Pc, {
                            "data-lov-id": "src/pages/Index.tsx:61:14",
                            "data-lov-name": "Trophy",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "61",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Trophy",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2"
                        }), "Race Track"]
                    })]
                }), v.jsx(jr, {
                    "data-lov-id": "src/pages/Index.tsx:66:10",
                    "data-lov-name": "TabsContent",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "66",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "TabsContent",
                    "data-component-content": "%7B%7D",
                    value: "garage",
                    children: v.jsx(Ob, {
                        "data-lov-id": "src/pages/Index.tsx:67:12",
                        "data-lov-name": "Garage",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "67",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "Garage",
                        "data-component-content": "%7B%7D"
                    })
                }), v.jsx(jr, {
                    "data-lov-id": "src/pages/Index.tsx:70:10",
                    "data-lov-name": "TabsContent",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "70",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "TabsContent",
                    "data-component-content": "%7B%7D",
                    value: "shop",
                    children: v.jsx(Bb, {
                        "data-lov-id": "src/pages/Index.tsx:71:12",
                        "data-lov-name": "CarShop",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "71",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "CarShop",
                        "data-component-content": "%7B%7D"
                    })
                }), v.jsx(jr, {
                    "data-lov-id": "src/pages/Index.tsx:74:10",
                    "data-lov-name": "TabsContent",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "74",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "TabsContent",
                    "data-component-content": "%7B%7D",
                    value: "parts",
                    children: v.jsx(cE, {
                        "data-lov-id": "src/pages/Index.tsx:75:12",
                        "data-lov-name": "PartsShop",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "75",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "PartsShop",
                        "data-component-content": "%7B%7D"
                    })
                }), v.jsx(jr, {
                    "data-lov-id": "src/pages/Index.tsx:78:10",
                    "data-lov-name": "TabsContent",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "78",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "TabsContent",
                    "data-component-content": "%7B%7D",
                    value: "race",
                    children: v.jsx(uE, {
                        "data-lov-id": "src/pages/Index.tsx:79:12",
                        "data-lov-name": "RaceTrack",
                        "data-component-path": "src/pages/Index.tsx",
                        "data-component-line": "79",
                        "data-component-file": "Index.tsx",
                        "data-component-name": "RaceTrack",
                        "data-component-content": "%7B%7D"
                    })
                })]
            })
        })]
    })
}
  , pE = () => v.jsx(_b, {
    "data-lov-id": "src/pages/Index.tsx:89:4",
    "data-lov-name": "GameProvider",
    "data-component-path": "src/pages/Index.tsx",
    "data-component-line": "89",
    "data-component-file": "Index.tsx",
    "data-component-name": "GameProvider",
    "data-component-content": "%7B%7D",
    children: v.jsx(dE, {
        "data-lov-id": "src/pages/Index.tsx:90:6",
        "data-lov-name": "GameDashboard",
        "data-component-path": "src/pages/Index.tsx",
        "data-component-line": "90",
        "data-component-file": "Index.tsx",
        "data-component-name": "GameDashboard",
        "data-component-content": "%7B%7D"
    })
})
  , fE = () => {
    const e = vg();
    return h.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    v.jsx("div", {
        "data-lov-id": "src/pages/NotFound.tsx:15:4",
        "data-lov-name": "div",
        "data-component-path": "src/pages/NotFound.tsx",
        "data-component-line": "15",
        "data-component-file": "NotFound.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22min-h-screen%20flex%20items-center%20justify-center%20bg-gray-100%22%7D",
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: v.jsxs("div", {
            "data-lov-id": "src/pages/NotFound.tsx:16:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/NotFound.tsx",
            "data-component-line": "16",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
            className: "text-center",
            children: [v.jsx("h1", {
                "data-lov-id": "src/pages/NotFound.tsx:17:8",
                "data-lov-name": "h1",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "17",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "h1",
                "data-component-content": "%7B%22text%22%3A%22404%22%2C%22className%22%3A%22text-4xl%20font-bold%20mb-4%22%7D",
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), v.jsx("p", {
                "data-lov-id": "src/pages/NotFound.tsx:18:8",
                "data-lov-name": "p",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "18",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "p",
                "data-component-content": "%7B%22text%22%3A%22Oops!%20Page%20not%20found%22%2C%22className%22%3A%22text-xl%20text-gray-600%20mb-4%22%7D",
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), v.jsx("a", {
                "data-lov-id": "src/pages/NotFound.tsx:19:8",
                "data-lov-name": "a",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "19",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "a",
                "data-component-content": "%7B%22text%22%3A%22Return%20to%20Home%22%2C%22className%22%3A%22text-blue-500%20hover%3Atext-blue-700%20underline%22%7D",
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , mE = new TC
  , hE = () => v.jsx(PC, {
    "data-lov-id": "src/App.tsx:12:2",
    "data-lov-name": "QueryClientProvider",
    "data-component-path": "src/App.tsx",
    "data-component-line": "12",
    "data-component-file": "App.tsx",
    "data-component-name": "QueryClientProvider",
    "data-component-content": "%7B%7D",
    client: mE,
    children: v.jsxs(tC, {
        "data-lov-id": "src/App.tsx:13:4",
        "data-lov-name": "TooltipProvider",
        "data-component-path": "src/App.tsx",
        "data-component-line": "13",
        "data-component-file": "App.tsx",
        "data-component-name": "TooltipProvider",
        "data-component-content": "%7B%7D",
        children: [v.jsx(Z1, {
            "data-lov-id": "src/App.tsx:14:6",
            "data-lov-name": "Toaster",
            "data-component-path": "src/App.tsx",
            "data-component-line": "14",
            "data-component-file": "App.tsx",
            "data-component-name": "Toaster",
            "data-component-content": "%7B%7D"
        }), v.jsx(kw, {
            "data-lov-id": "src/App.tsx:15:6",
            "data-lov-name": "Sonner",
            "data-component-path": "src/App.tsx",
            "data-component-line": "15",
            "data-component-file": "App.tsx",
            "data-component-name": "Sonner",
            "data-component-content": "%7B%7D"
        }), v.jsx(ub, {
            "data-lov-id": "src/App.tsx:16:6",
            "data-lov-name": "BrowserRouter",
            "data-component-path": "src/App.tsx",
            "data-component-line": "16",
            "data-component-file": "App.tsx",
            "data-component-name": "BrowserRouter",
            "data-component-content": "%7B%7D",
            children: v.jsxs(ib, {
                "data-lov-id": "src/App.tsx:17:8",
                "data-lov-name": "Routes",
                "data-component-path": "src/App.tsx",
                "data-component-line": "17",
                "data-component-file": "App.tsx",
                "data-component-name": "Routes",
                "data-component-content": "%7B%7D",
                children: [v.jsx(Bc, {
                    "data-lov-id": "src/App.tsx:18:10",
                    "data-lov-name": "Route",
                    "data-component-path": "src/App.tsx",
                    "data-component-line": "18",
                    "data-component-file": "App.tsx",
                    "data-component-name": "Route",
                    "data-component-content": "%7B%7D",
                    path: "/",
                    element: v.jsx(pE, {
                        "data-lov-id": "src/App.tsx:18:35",
                        "data-lov-name": "Index",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "18",
                        "data-component-file": "App.tsx",
                        "data-component-name": "Index",
                        "data-component-content": "%7B%7D"
                    })
                }), v.jsx(Bc, {
                    "data-lov-id": "src/App.tsx:20:10",
                    "data-lov-name": "Route",
                    "data-component-path": "src/App.tsx",
                    "data-component-line": "20",
                    "data-component-file": "App.tsx",
                    "data-component-name": "Route",
                    "data-component-content": "%7B%7D",
                    path: "*",
                    element: v.jsx(fE, {
                        "data-lov-id": "src/App.tsx:20:35",
                        "data-lov-name": "NotFound",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "20",
                        "data-component-file": "App.tsx",
                        "data-component-name": "NotFound",
                        "data-component-content": "%7B%7D"
                    })
                })]
            })
        })]
    })
});
Fh(document.getElementById("root")).render(v.jsx(hE, {
    "data-lov-id": "src/main.tsx:5:52",
    "data-lov-name": "App",
    "data-component-path": "src/main.tsx",
    "data-component-line": "5",
    "data-component-file": "main.tsx",
    "data-component-name": "App",
    "data-component-content": "%7B%7D"
}));
