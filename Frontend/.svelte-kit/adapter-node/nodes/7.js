import * as server from '../entries/pages/negocio/_slug_/agenda/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/negocio/_slug_/agenda/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/negocio/[slug]/agenda/+page.server.js";
export const imports = ["_app/immutable/nodes/7.7102b22b.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/index.bf2be75b.js","_app/immutable/chunks/each.e88d62ce.js"];
export const stylesheets = ["_app/immutable/assets/7.eb89b748.css"];
export const fonts = [];
