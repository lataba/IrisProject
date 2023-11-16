

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c9eb8b25.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js"];
export const stylesheets = ["_app/immutable/assets/0.46a0298c.css"];
export const fonts = [];
