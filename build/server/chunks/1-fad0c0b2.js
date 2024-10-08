import { c as create_ssr_component, e as escape } from './index-0745a96c-9a7a8b68.js';

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
const file = '_app/immutable/error.svelte-11ec9cce.js';
const imports = ["_app/immutable/error.svelte-11ec9cce.js","_app/immutable/chunks/index-70a5fc52.js"];
const stylesheets = [];

export { file, imports, index, error_svelte as module, stylesheets };
//# sourceMappingURL=1-fad0c0b2.js.map
