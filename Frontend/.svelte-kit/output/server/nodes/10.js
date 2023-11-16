

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/negocio/_slug_/enlace/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.39eaac08.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js"];
export const stylesheets = [];
export const fonts = [];
