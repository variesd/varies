import {
  computed,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  provide,
  readonly,
  ref,
  shallowReactive,
  shallowRef,
  toRefs,
  unref,
  watch
} from "./chunk-N5TED7FU.js";
import {
  ACESFilmicToneMapping,
  BufferAttribute,
  Clock,
  Color,
  Fog,
  LinearEncoding,
  LoadingManager,
  MathUtils,
  Mesh,
  NoToneMapping,
  OrthographicCamera,
  PCFShadowMap,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
  sRGBEncoding,
  three_module_exports
} from "./chunk-XSUIV4LX.js";

// ../node_modules/.pnpm/@vueuse+shared@9.13.0_vue@3.2.47/node_modules/@vueuse/shared/index.mjs
var _a;
var isClient = typeof window !== "undefined";
var isString = (val) => typeof val === "string";
var noop = () => {
};
var isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

// ../node_modules/.pnpm/@vueuse+core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
var handlers = _global[globalKey];
function useDevicePixelRatio({
  window: window2 = defaultWindow
} = {}) {
  const pixelRatio = ref(1);
  if (window2) {
    let observe = function() {
      pixelRatio.value = window2.devicePixelRatio;
      cleanup();
      media = window2.matchMedia(`(resolution: ${pixelRatio.value}dppx)`);
      media.addEventListener("change", observe, { once: true });
    }, cleanup = function() {
      media == null ? void 0 : media.removeEventListener("change", observe);
    };
    let media;
    observe();
    tryOnScopeDispose(cleanup);
  }
  return { pixelRatio };
}
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window: window2 = defaultWindow
  } = options;
  const isActive = ref(false);
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp2) {
    if (!isActive.value || !window2)
      return;
    const delta = timestamp2 - previousFrameTimestamp;
    fn({ delta, timestamp: timestamp2 });
    previousFrameTimestamp = timestamp2;
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = unrefElement(target)) == null ? void 0 : _a2.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
    if (window2 && isSVG.value) {
      const $elem = unrefElement(target);
      if ($elem) {
        const styles = window2.getComputedStyle($elem);
        width.value = parseFloat(styles.width);
        height.value = parseFloat(styles.height);
      }
    } else {
      if (boxSize) {
        const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
        width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
        height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
      } else {
        width.value = entry.contentRect.width;
        height.value = entry.contentRect.height;
      }
    }
  }, options);
  watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width,
    height
  };
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var TransitionPresets = __spreadValues({
  linear: identity
}, _TransitionPresets);
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation)
    useEventListener("orientationchange", update, { passive: true });
  return { width, height };
}

// ../node_modules/.pnpm/@tresjs+core@1.7.0_three@0.149.0+vue@3.2.47/node_modules/@tresjs/core/dist/tres.js
var Ye = ((e) => (e.Perspective = "Perspective", e.Orthographic = "Orthographic", e))(Ye || {});
var B = {
  cameras: []
};
var qe = 45;
var P;
function ye() {
  const { state: e, setState: n } = T();
  function o(p = "Perspective", t) {
    var s;
    if (p === "Perspective") {
      const { near: c, far: a, fov: u } = t || {
        near: 0.1,
        far: 1e3,
        fov: qe
      };
      P = new PerspectiveCamera(u, ((s = e.aspectRatio) == null ? void 0 : s.value) || 1, c, a), B.cameras.push(P);
    } else {
      const { left: c, right: a, top: u, bottom: f, near: S, far: g } = t || {
        left: -100,
        right: 100,
        top: 100,
        bottom: -100,
        near: 0.1,
        far: 1e3
      };
      P = new OrthographicCamera(c, a, u, f, S, g), B.cameras.push(P);
    }
    return B.cameras.push(P), P;
  }
  const r = computed(() => B.cameras[0]);
  n("camera", r);
  function i() {
    r.value instanceof PerspectiveCamera && e.aspectRatio && (r.value.aspect = e.aspectRatio.value), r.value.updateProjectionMatrix();
  }
  function l(p) {
    B.cameras.push(p), p instanceof PerspectiveCamera && e.aspectRatio && (p.aspect = e.aspectRatio.value), p.updateProjectionMatrix();
  }
  return e.aspectRatio && watch(e.aspectRatio, i), {
    activeCamera: r,
    createCamera: o,
    updateCamera: i,
    pushCamera: l
  };
}
var fe = "[TresJS ▲ ■ ●] ";
function $() {
  function e(r, i) {
    console.error(`${fe} ${r}`, i || "");
  }
  function n(r) {
    console.warn(`${fe} ${r}`);
  }
  function o(r, i) {
  }
  return {
    logError: e,
    logWarning: n,
    logMessage: o
  };
}
var N = ref({ ...three_module_exports, uuid: MathUtils.generateUUID() });
delete N.value.Scene;
var O;
function Se(e, n = "Tres") {
  const { logError: o } = $();
  !O && e && (O = e);
  const { createComponentInstances: r } = Me(n);
  return {
    extend: (l) => {
      if (!l) {
        o("No objects provided to extend catalogue");
        return;
      }
      N.value = Object.assign(N.value, l);
      const p = r(ref(l));
      O && p.forEach(([t, s]) => {
        O._context.components[t] || O.component(t, s);
      });
    },
    catalogue: N
  };
}
var A = (e) => typeof e < "u";
var Qe = (e) => typeof e == "function";
var G = (e) => !!e && e.constructor === Array;
function Ze(e) {
  return typeof e == "number" ? [e, e, e] : e instanceof Vector3 ? [e.x, e.y, e.z] : e;
}
function et(e) {
  return e instanceof Color ? e : Array.isArray(e) ? new Color(...e) : new Color(e);
}
var tt = ["rotation", "scale", "position"];
function Me(e) {
  const {
    /* logMessage, */
    logError: n
  } = $();
  function o(t, s) {
    A(t) && A(s) && Object.entries(t).forEach(([c, a]) => {
      const u = c.replace(/(-\w)/g, (f) => f[1].toUpperCase());
      s.setAttribute(u, new BufferAttribute(...a));
    });
  }
  function r(t, s) {
    A(t) && A(s) && Object.entries(t).forEach(([c, a]) => {
      const u = c.replace(/(-\w)/g, (f) => f[1].toUpperCase());
      if (!(u === "args" || a === void 0)) {
        tt.includes(u) && a && (a = Ze(a)), t.ref && (t.ref = s);
        try {
          if (s[u] && A(s[u].set))
            s[u].set(...G(a) ? a : [a]);
          else {
            if (a === "" && (a = true), Qe(s[u])) {
              if (c === "center" && !a)
                return;
              s[u](...G(a) ? a : [a]);
              return;
            }
            s[u] = a;
          }
        } catch (f) {
          n(`There was an error setting ${u} property`, f);
        }
      }
    });
  }
  function i(t) {
    var a, u;
    const s = /^Symbol\(Fragment\)$/g, c = /^Symbol\(Text\)$/g;
    if (s.test(t.type.toString()))
      return t.children.map((f) => i(f));
    if (c.test(t.type.toString()))
      return;
    {
      const f = t.type.name.replace(e, ""), { catalogue: S } = Se(), g = inject("catalogue") || S;
      let w;
      if (g)
        if ((a = t.children) != null && a.default) {
          const C = t.children.default().map((b) => i(b));
          w = new g.value[f](...C.flat().filter(Boolean));
        } else
          (u = t == null ? void 0 : t.props) != null && u.args ? g != null && g.value[f] ? w = new g.value[f](...t.props.args) : n(`There is no ${f} in the catalogue`, g == null ? void 0 : g.value.uuid) : w = new g.value[f]();
      return t != null && t.props && (f === "BufferGeometry" ? o(t.props, w) : r(t.props, w)), w;
    }
  }
  function l(t, s, c) {
    if (c.default && (c != null && c.default())) {
      const a = c.default().map((u) => i(u));
      if (t.name === "Group") {
        const u = new t();
        return a.forEach((f) => {
          u.add(f);
        }), u;
      } else
        return new t(...a.flat().filter(Boolean));
    } else
      return s.args ? new t(...s.args) : new t();
  }
  function p(t) {
    return Object.entries(t.value).filter(([s, c]) => {
      var a, u;
      return (u = (a = c == null ? void 0 : c.prototype) == null ? void 0 : a.constructor) == null ? void 0 : u.toString().includes("class");
    }).map(([s, c]) => {
      const a = `${e}${s}`, u = defineComponent({
        name: a,
        setup(f, { slots: S, attrs: g, ...w }) {
          const { state: C } = T(), { onLoop: b } = re(), h2 = C.scene, j = C.raycaster, { pushCamera: E } = ye();
          let v = l(c, g, S);
          r(g, v), (v instanceof PerspectiveCamera || v instanceof OrthographicCamera) && E(v), v.isObject3D && (h2 == null || h2.add(v));
          let M = null, y = null;
          if (v instanceof Mesh) {
            b(() => {
              if (v && j && (h2 != null && h2.children)) {
                const z = j.intersectObjects(h2 == null ? void 0 : h2.children);
                z.length > 0 ? (y = z[0], (M === null || M.object.uuid !== (y == null ? void 0 : y.object.uuid)) && w.emit("pointer-enter", y), w.emit("pointer-move", y)) : (y = null, M !== null && w.emit("pointer-leave", M)), M = y;
              }
            });
            const k = useEventListener(window, "click", () => {
              w.emit("click", M);
            });
            onUnmounted(() => {
              k();
            });
          }
          return h2 && v instanceof Fog && (h2.fog = v), w.expose(v), () => {
          };
        }
      });
      return [a, u];
    });
  }
  return {
    createComponentInstances: p,
    processProps: r,
    createInstanceFromVNode: i
  };
}
var Ce = createEventHook();
var Ee = createEventHook();
var ne = createEventHook();
var F = new Clock();
var V = 0;
var W = 0;
var { pause: nt, resume: rt, isActive: ot } = useRafFn(
  () => {
    Ce.trigger({ delta: V, elapsed: W, clock: F }), Ee.trigger({ delta: V, elapsed: W, clock: F }), ne.trigger({ delta: V, elapsed: W, clock: F });
  },
  { immediate: false }
);
ne.on(() => {
  V = F.getDelta(), W = F.getElapsedTime();
});
function re() {
  return {
    onBeforeLoop: Ce.on,
    onLoop: Ee.on,
    onAfterLoop: ne.on,
    pause: nt,
    resume: rt,
    isActive: ot
  };
}
var at = shallowRef(new Scene());
function st() {
  return {
    scene: at
  };
}
function it(e) {
  const n = { nodes: {}, materials: {} };
  return e && e.traverse((o) => {
    o.name && (n.nodes[o.name] = o), o.material && !n.materials[o.material.name] && (n.materials[o.material.name] = o.material);
  }), n;
}
async function gt(e, n, o, r, i) {
  const { logError: l } = $(), p = new e();
  i && i(p), o && o(p);
  const s = (Array.isArray(n) ? n : [n]).map(
    (c) => new Promise((a, u) => {
      p.load(
        c,
        (f) => {
          f.scene && Object.assign(f, it(f.scene)), a(f);
        },
        r,
        (f) => u(l("[useLoader] - Failed to load resource", f))
      );
    })
  );
  return G(n) ? await Promise.all(s) : await s[0];
}
async function wt(e) {
  const n = new LoadingManager(), o = new TextureLoader(n), r = (i) => new Promise((l, p) => {
    o.load(
      i,
      (t) => l(t),
      () => null,
      () => {
        p(new Error("[useTextures] - Failed to load texture"));
      }
    );
  });
  if (G(e)) {
    const i = await Promise.all(e.map((l) => r(l)));
    return e.length > 1 ? i : i[0];
  } else {
    const { map: i, displacementMap: l, normalMap: p, roughnessMap: t, metalnessMap: s, aoMap: c } = e;
    return {
      map: i ? await r(i) : null,
      displacementMap: l ? await r(l) : null,
      normalMap: p ? await r(p) : null,
      roughnessMap: t ? await r(t) : null,
      metalnessMap: s ? await r(s) : null,
      aoMap: c ? await r(c) : null
    };
  }
}
var D = shallowReactive({});
function T() {
  function e(o) {
    return D[o];
  }
  function n(o, r) {
    D[o] = r;
  }
  return {
    state: D,
    ...toRefs(D),
    getState: e,
    setState: n
  };
}
var Y = shallowRef(new Raycaster());
var I = ref(new Vector2());
var pe = ref(null);
function ct() {
  const { setState: e } = T();
  e("raycaster", Y.value), e("pointer", I), e("currentInstance", pe), provide("raycaster", Y), provide("pointer", I), provide("currentInstance", pe);
  function n(o) {
    I.value.x = o.clientX / window.innerWidth * 2 - 1, I.value.y = -(o.clientY / window.innerHeight) * 2 + 1;
  }
  return window.addEventListener("pointermove", n), onUnmounted(() => {
    window.removeEventListener("pointermove", n);
  }), {
    raycaster: Y,
    pointer: I
  };
}
var q = {
  realistic: {
    physicallyCorrectLights: true,
    outputEncoding: sRGBEncoding,
    toneMapping: ACESFilmicToneMapping,
    toneMappingExposure: 3,
    shadowMap: {
      enabled: true,
      type: PCFSoftShadowMap
    }
  }
};
var Re = (e, n) => {
  for (const o of Object.keys(n))
    n[o] instanceof Object && Object.assign(n[o], Re(e[o], n[o]));
  return Object.assign(e || {}, n), e;
};
var d = shallowRef();
var Q = ref(false);
function ut(e, n, o) {
  const {
    alpha: r = true,
    antialias: i = true,
    depth: l,
    logarithmicDepthBuffer: p,
    failIfMajorPerformanceCaveat: t,
    precision: s,
    premultipliedAlpha: c,
    stencil: a,
    shadows: u = false,
    shadowMapType: f = PCFShadowMap,
    physicallyCorrectLights: S = false,
    outputEncoding: g = LinearEncoding,
    toneMapping: w = NoToneMapping,
    toneMappingExposure: C = 1,
    context: b = void 0,
    powerPreference: h2 = "default",
    preserveDrawingBuffer: j = false,
    clearColor: E,
    windowSize: v = false,
    preset: M = void 0
  } = toRefs(o), { width: y, height: k } = resolveUnref(v) ? useWindowSize() : useElementSize(n), { logError: z } = $(), { pixelRatio: oe } = useDevicePixelRatio(), { pause: xe, resume: Pe } = re(), H = computed(() => y.value / k.value), ae = () => {
    d.value && (d.value.setSize(y.value, k.value), d.value.setPixelRatio(Math.min(oe.value, 2)));
  }, se = () => {
    if (!d.value)
      return;
    const x = resolveUnref(M);
    if (x) {
      x in q || z("Renderer Preset must be one of these: " + Object.keys(q).join(", ")), Re(d.value, q[x]);
      return;
    }
    d.value.shadowMap.enabled = resolveUnref(u), d.value.shadowMap.type = resolveUnref(f), d.value.toneMapping = resolveUnref(w) || NoToneMapping, d.value.toneMappingExposure = resolveUnref(C), d.value.outputEncoding = resolveUnref(g) || LinearEncoding, E != null && E.value && d.value.setClearColor(et(resolveUnref(E))), d.value.physicallyCorrectLights = resolveUnref(S);
  }, Le = () => {
    const x = unrefElement(e);
    if (d.value || !x)
      return;
    d.value = new WebGLRenderer({
      canvas: x,
      alpha: resolveUnref(r),
      antialias: resolveUnref(i),
      context: resolveUnref(b),
      depth: resolveUnref(l),
      failIfMajorPerformanceCaveat: resolveUnref(t),
      logarithmicDepthBuffer: resolveUnref(p),
      powerPreference: resolveUnref(h2),
      precision: resolveUnref(s),
      stencil: resolveUnref(a),
      preserveDrawingBuffer: resolveUnref(j),
      premultipliedAlpha: resolveUnref(c)
    });
    const { setState: K } = T();
    K("renderer", d.value), K("clock", new Clock()), K("aspectRatio", H), se(), ae(), Pe(), Q.value = true;
  }, Te = () => {
    d.value && (d.value.dispose(), d.value = void 0, Q.value = false, xe());
  };
  return watch([H, oe], ae), watch(
    [u, f, g, S, w, C, E],
    se
  ), watch(
    () => [e, n],
    () => {
      unrefElement(e) && unrefElement(n) && Le();
    },
    { immediate: true, deep: true }
  ), {
    renderer: d,
    isReady: Q,
    dispose: Te,
    aspectRatio: H
  };
}
var lt = defineComponent({
  name: "TresCanvas",
  props: {
    shadows: Boolean,
    shadowMapType: Number,
    physicallyCorrectLights: Boolean,
    outputEncoding: Number,
    toneMapping: Number,
    toneMappingExposure: Number,
    context: Object,
    powerPreference: String,
    preserveDrawingBuffer: Boolean,
    clearColor: String,
    windowSize: { type: Boolean, default: false },
    preset: String
  },
  setup(e, { slots: n, attrs: o }) {
    const { logError: r } = $(), i = ref(), l = ref(), { renderer: p, dispose: t, aspectRatio: s } = ut(i, l, e);
    return provide("aspect-ratio", s), provide("renderer", p), n.default && !n.default().some((c) => c.type.name === "Scene") && r("TresCanvas must contain a Scene component."), n.default && !n.default().some((c) => {
      var a;
      return (a = c.type.name) == null ? void 0 : a.includes("Camera");
    }) && r("Scene must contain a Camera component."), onBeforeUnmount(() => t()), () => {
      if (n.default)
        return h(
          "div",
          {
            ref: l,
            style: {
              position: "relative",
              width: "100%",
              height: "100vh",
              ...o.style
            }
          },
          [
            h("canvas", {
              ref: i,
              style: {
                width: "100%",
                height: "100%",
                position: e.windowSize ? "fixed" : "absolute",
                top: 0,
                left: 0
              }
            }),
            n.default()
          ]
        );
    };
  }
});
var ft = defineComponent({
  name: "Scene",
  setup(e, { slots: n }) {
    const { setState: o } = T(), { scene: r } = st(), i = inject("renderer"), { activeCamera: l } = ye(), { raycaster: p, pointer: t } = ct(), { onLoop: s } = re();
    return provide("local-scene", r), o("scene", r.value), s(() => {
      p.value.setFromCamera(t.value, l.value), i != null && i.value && (l != null && l.value) && (r != null && r.value) && i.value.render(r == null ? void 0 : r.value, l.value);
    }), () => {
      if (n.default)
        return n.default();
    };
  }
});
var ht = Symbol("UseTresState");
var vt = {
  install(e, n) {
    const o = (n == null ? void 0 : n.prefix) || "Tres";
    e.component(`${o}Canvas`, lt), e.component(`${o}Scene`, ft);
    const { catalogue: r, extend: i } = Se(e, o);
    e.provide("catalogue", r), e.provide("extend", i), e.provide("useTres", T());
    const { createComponentInstances: l } = Me(o);
    l(r).forEach(([t, s]) => {
      e.component(t, s);
    });
  }
};

export {
  Ye,
  ye,
  Se,
  Me,
  re,
  st,
  it,
  gt,
  wt,
  T,
  ct,
  ut,
  ht,
  vt
};
//# sourceMappingURL=chunk-7SHJKIQY.js.map
