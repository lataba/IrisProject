const load = async () => {
  try {
    const response = await fetch("https://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({
        name,
        mail,
        phone,
        link
      })
    });
    const { data: responseData } = await response.json();
    return { ...responseData };
  } catch (e) {
    console.error("no funcó papá");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8c14142d.js')).default;
const server_id = "src/routes/negocio/[slug]/colaboradores/+page.server.js";
const imports = ["_app/immutable/nodes/9.19c5aacb.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/each.e88d62ce.js","_app/immutable/chunks/v4.cebd4112.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-326fabe6.js.map
