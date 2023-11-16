

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacto/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e808d220.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/publicHeader.ba5fbcc9.js","_app/immutable/chunks/publicFooter.de71edf5.js"];
export const stylesheets = [];
export const fonts = [];
