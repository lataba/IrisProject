

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/nosotros/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.fb4cdf7e.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js"];
export const stylesheets = [];
export const fonts = [];
