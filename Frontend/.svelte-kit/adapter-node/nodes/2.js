

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/negocio/_slug_/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e0ff87b7.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/publicFooter.de71edf5.js"];
export const stylesheets = [];
export const fonts = [];
