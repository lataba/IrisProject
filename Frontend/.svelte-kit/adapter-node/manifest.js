export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Gmail_icon.png","favicon.png","github.png","github_icon.png","linkedin-icon.png","linkedin.png","mail.png","men.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.S1qcqEK4.js","app":"_app/immutable/entry/app.MR2rr5bn.js","imports":["_app/immutable/entry/start.S1qcqEK4.js","_app/immutable/chunks/scheduler.iMJG-OTB.js","_app/immutable/chunks/singletons.K0SlucjQ.js","_app/immutable/entry/app.MR2rr5bn.js","_app/immutable/chunks/scheduler.iMJG-OTB.js","_app/immutable/chunks/index.LLb-QJAj.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set([]);
