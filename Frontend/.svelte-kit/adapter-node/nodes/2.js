

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Z98UmOFb.js","_app/immutable/chunks/scheduler.iMJG-OTB.js","_app/immutable/chunks/index.LLb-QJAj.js"];
export const stylesheets = ["_app/immutable/assets/nodes/2.EwNhJwA5.css"];
export const fonts = [];
