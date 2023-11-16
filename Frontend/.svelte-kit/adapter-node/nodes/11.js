import * as server from '../entries/pages/negocio/_slug_/miNegocio/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/negocio/_slug_/miNegocio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/negocio/[slug]/miNegocio/+page.server.js";
export const imports = ["_app/immutable/nodes/11.d2c9faee.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js"];
export const stylesheets = [];
export const fonts = [];
