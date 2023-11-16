

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a483b043.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/singletons.fd275494.js","_app/immutable/chunks/index.bf2be75b.js"];
export const stylesheets = [];
export const fonts = [];
