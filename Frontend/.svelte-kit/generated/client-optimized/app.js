export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/contacto": [4],
		"/login": [5],
		"/negocio/[slug]": [6,[2]],
		"/negocio/[slug]/agenda": [~7,[2]],
		"/negocio/[slug]/clientes": [8,[2]],
		"/negocio/[slug]/colaboradores": [~9,[2]],
		"/negocio/[slug]/enlace": [10,[2]],
		"/negocio/[slug]/miNegocio": [~11,[2]],
		"/negocio/[slug]/servicios": [~12,[2]],
		"/nosotros": [13],
		"/registro": [14],
		"/registro/registroEmpresa": [15],
		"/reserva": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';