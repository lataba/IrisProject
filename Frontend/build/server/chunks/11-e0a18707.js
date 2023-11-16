const load = async () => {
  try {
    const responseBusiness = await fetch("https://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({
        name_business,
        address,
        phone,
        business_type,
        id_user,
        opening_hours,
        closiing_hours
      })
    });
    const responseSocialMedia = await fetch("https://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({
        media_name,
        user_name,
        link
      })
    });
    const { data: responseBusinessData } = await responseBusiness.json();
    const { data: responseSocialMediaData } = await responseSocialMedia.json();
    return { ...responseBusinessData }, { ...responseSocialMediaData };
  } catch (e) {
    console.error("no funcó papá");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9c8c7540.js')).default;
const server_id = "src/routes/negocio/[slug]/miNegocio/+page.server.js";
const imports = ["_app/immutable/nodes/11.d2c9faee.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-e0a18707.js.map
