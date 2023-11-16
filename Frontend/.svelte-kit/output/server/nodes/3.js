

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7f2daf89.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/publicFooter.de71edf5.js","_app/immutable/chunks/publicHeader.ba5fbcc9.js"];
export const stylesheets = [];
export const fonts = [];
