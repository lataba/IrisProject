import * as server from '../entries/pages/negocio/_slug_/servicios/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/negocio/_slug_/servicios/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/negocio/[slug]/servicios/+page.server.js";
export const imports = ["_app/immutable/nodes/12.e4a5efd3.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/each.e88d62ce.js","_app/immutable/chunks/v4.cebd4112.js","_app/immutable/chunks/index.bf2be75b.js"];
export const stylesheets = [];
export const fonts = [];
