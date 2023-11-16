const load = async () => {
  try {
    const response = await fetch("https://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({
        startTime,
        endTime,
        client,
        colaborator,
        service
      })
    });
    const { data: respondeData } = await response.json();
    return { ...respondeData };
  } catch (e) {
    console.error("no funcó papá");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-08726179.js')).default;
const server_id = "src/routes/negocio/[slug]/agenda/+page.server.js";
const imports = ["_app/immutable/nodes/7.7102b22b.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/index.bf2be75b.js","_app/immutable/chunks/each.e88d62ce.js"];
const stylesheets = ["_app/immutable/assets/7.eb89b748.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-a3f8ce1f.js.map
