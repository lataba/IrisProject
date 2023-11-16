

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reserva/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.dd4ef3cf.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/each.e88d62ce.js"];
export const stylesheets = ["_app/immutable/assets/16.1a0f827a.css"];
export const fonts = [];
