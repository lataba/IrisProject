const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.2d328612.js","app":"_app/immutable/entry/app.e736a46a.js","imports":["_app/immutable/entry/start.2d328612.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/singletons.fd275494.js","_app/immutable/chunks/index.bf2be75b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.e736a46a.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-7e2351fc.js')),
			__memo(() => import('./chunks/1-b5282ede.js')),
			__memo(() => import('./chunks/2-d7d9f9c2.js')),
			__memo(() => import('./chunks/3-6633656f.js')),
			__memo(() => import('./chunks/4-04d83ee5.js')),
			__memo(() => import('./chunks/5-23fa0586.js')),
			__memo(() => import('./chunks/6-d6cdf806.js')),
			__memo(() => import('./chunks/7-a3f8ce1f.js')),
			__memo(() => import('./chunks/8-745278fb.js')),
			__memo(() => import('./chunks/9-326fabe6.js')),
			__memo(() => import('./chunks/10-cda314cc.js')),
			__memo(() => import('./chunks/11-e0a18707.js')),
			__memo(() => import('./chunks/12-b5fd2e40.js')),
			__memo(() => import('./chunks/13-c985e761.js')),
			__memo(() => import('./chunks/14-0ed99e3a.js')),
			__memo(() => import('./chunks/15-bf978f47.js')),
			__memo(() => import('./chunks/16-30ef1033.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contacto",
				pattern: /^\/contacto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/negocio/[slug]",
				pattern: /^\/negocio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/negocio/[slug]/agenda",
				pattern: /^\/negocio\/([^/]+?)\/agenda\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/negocio/[slug]/clientes",
				pattern: /^\/negocio\/([^/]+?)\/clientes\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/negocio/[slug]/colaboradores",
				pattern: /^\/negocio\/([^/]+?)\/colaboradores\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/negocio/[slug]/enlace",
				pattern: /^\/negocio\/([^/]+?)\/enlace\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/negocio/[slug]/miNegocio",
				pattern: /^\/negocio\/([^/]+?)\/miNegocio\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/negocio/[slug]/servicios",
				pattern: /^\/negocio\/([^/]+?)\/servicios\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/nosotros",
				pattern: /^\/nosotros\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/registro",
				pattern: /^\/registro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/registro/registroEmpresa",
				pattern: /^\/registro\/registroEmpresa\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/reserva",
				pattern: /^\/reserva\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
