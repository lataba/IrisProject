import * as server from '../entries/pages/negocio/_slug_/colaboradores/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/negocio/_slug_/colaboradores/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/negocio/[slug]/colaboradores/+page.server.js";
export const imports = ["_app/immutable/nodes/9.19c5aacb.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/each.e88d62ce.js","_app/immutable/chunks/v4.cebd4112.js"];
export const stylesheets = [];
export const fonts = [];
