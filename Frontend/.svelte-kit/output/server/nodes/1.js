

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.MhZ63g4y.js","_app/immutable/chunks/scheduler.iMJG-OTB.js","_app/immutable/chunks/index.LLb-QJAj.js","_app/immutable/chunks/singletons.K0SlucjQ.js"];
export const stylesheets = [];
export const fonts = [];
