import { c as create_ssr_component, e as escape } from './index-ce9e3047-8c7cf7dc.js';

function load({ error, status }) {
  return { props: { error, status } };
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<h1>${escape(status)}</h1>

<pre>${escape(error.message)}</pre>



${error.frame ? `<pre>${escape(error.frame)}</pre>` : ``}
${error.stack ? `<pre>${escape(error.stack)}</pre>` : ``}`;
});

var error_svelte = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Error,
  load: load
});

const index = 1;
const file = '_app/immutable/error.svelte-f37212ab.js';
const imports = ["_app/immutable/error.svelte-f37212ab.js","_app/immutable/chunks/index-23b4510f.js"];
const stylesheets = [];

export { file, imports, index, error_svelte as module, stylesheets };
//# sourceMappingURL=1-56eebafc.js.map
