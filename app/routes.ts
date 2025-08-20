import { projects } from './projects/routes'

export type Group = {
	items: Route[]
	title: string | null
}

export type Route = {
	pathname: string
	title: string
}

export const routeGroups: Group[] = [{
	items: [{
		pathname: '/',
		title: 'tmcnab.dev',
	}, {
		pathname: '/curriculum-vitae',
		title: 'Curriculum Vitae',
	}],
	title: null,
}, projects, {
	items: [],
	title: 'Articles',
}, {
	items: [],
	title: 'Topics',
}]