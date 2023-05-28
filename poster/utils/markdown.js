import { Remarkable } from 'remarkable'
import { linkify } from 'remarkable/dist/cjs/linkify.js';

const md = new Remarkable({
	typographer: true,
	linkTarget: '_blank',
}).use(linkify)

md.core.ruler.enable([
	'abbr'
]);

export function htmlFrom(markdown) {
	return md.render(markdown)
}

export function firstTitleFrom(markdown) {
	const parsedPost = md.parse(markdown, {})

	const titleLines = parsedPost
		.find(e => e.type === 'heading_open' && e.hLevel === 1 )
		.lines

	return parsedPost
		.find(e => (
			e.type === 'inline' &&
			e.lines[0] === titleLines[0] &&
			e.lines[1] === titleLines[1]
		))
		.content
}
