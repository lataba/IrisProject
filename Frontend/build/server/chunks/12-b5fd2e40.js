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
        description,
        price,
        duration
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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a82cc41d.js')).default;
const server_id = "src/routes/negocio/[slug]/servicios/+page.server.js";
const imports = ["_app/immutable/nodes/12.e4a5efd3.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/each.e88d62ce.js","_app/immutable/chunks/v4.cebd4112.js","_app/immutable/chunks/index.bf2be75b.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-b5fd2e40.js.map
