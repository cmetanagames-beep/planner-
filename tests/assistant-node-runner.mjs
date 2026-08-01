import fs from 'node:fs';
import vm from 'node:vm';

const storage = new Map();
const noop = () => {};
const element = new Proxy({
  style: { setProperty: noop, removeProperty: noop }, dataset: {}, classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
  addEventListener: noop, removeEventListener: noop, appendChild: noop, append: noop,
  querySelector: () => null, querySelectorAll: () => [], closest: () => null,
  setAttribute: noop, removeAttribute: noop, focus: noop, click: noop,
  getBoundingClientRect: () => ({ top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0 }),
  children: [], value: '', textContent: '', innerHTML: ''
}, { get(target, key) { return key in target ? target[key] : noop; } });

const document = {
  addEventListener: noop, removeEventListener: noop,
  getElementById: () => element, querySelector: () => null, querySelectorAll: () => [],
  createElement: () => Object.create(element), documentElement: element, body: element,
  visibilityState: 'visible'
};
const windowObject = {
  addEventListener: noop, removeEventListener: noop, document,
  matchMedia: () => ({ matches: false, addEventListener: noop }),
  getComputedStyle: () => ({ getPropertyValue: () => '', paddingBottom: '0', bottom: '0' }),
  location: { href: 'http://localhost/', pathname: '/', search: '', hash: '' },
  history: { replaceState: noop }, visualViewport: null
};
windowObject.window = windowObject;

const context = vm.createContext({
  console, window: windowObject, document,
  localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)), removeItem: key => storage.delete(key) },
  navigator: { userAgent: 'node-test', platform: 'node', language: 'ru-RU', onLine: true },
  location: windowObject.location, history: windowObject.history,
  getComputedStyle: windowObject.getComputedStyle,
  Notification: function Notification() {}, fetch: async () => ({ ok: true, json: async () => ({}) }),
  URL, URLSearchParams, TextEncoder, TextDecoder, Blob, FormData,
  setTimeout, clearTimeout, setInterval: () => 0, clearInterval: noop,
  requestAnimationFrame: fn => { if (typeof fn === 'function') fn(); return 0; },
  cancelAnimationFrame: noop, crypto: globalThis.crypto,
  structuredClone, performance, Intl, Date, Math, JSON, RegExp, String, Number, Boolean, Array, Object, Map, Set, Promise
});
context.globalThis = context;

const source = fs.readFileSync(new URL('../app/assets/js/app.js', import.meta.url), 'utf8');
vm.runInContext(source, context, { filename: 'app.js' });

export function parseLocalPlan(text) {
  context.__assistantInput = text;
  return vm.runInContext('parseLocalPlan(__assistantInput)', context);
}

export function splitLocalSpeech(text) {
  context.__assistantInput = text;
  return vm.runInContext('splitLocalSpeech(__assistantInput)', context);
}

if (process.argv.length > 2) {
  const splitOnly = process.argv[2] === '--split';
  const normalizeOnly = process.argv[2] === '--normalize';
  const text = process.argv.slice(splitOnly || normalizeOnly ? 3 : 2).join(' ');
  if (normalizeOnly) { context.__assistantInput = text; console.log(vm.runInContext('normalizeAssistantText(__assistantInput)', context)); }
  else console.log(JSON.stringify(splitOnly ? splitLocalSpeech(text) : parseLocalPlan(text), null, 2));
}
