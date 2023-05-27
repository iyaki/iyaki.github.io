import fs from 'fs'
import { Remarkable } from 'remarkable'
import { linkify } from 'remarkable/dist/cjs/linkify.js';

const POST_TEMPLATE_PATH = './templates/post.html'

const POST_TEMPLATE = fs.readFileSync(POST_TEMPLATE_PATH, { encoding: 'utf8' })

const md = new Remarkable('full', {
	typographer: true,
	linkTarget: '_blank',
}).use(linkify)

md.core.ruler.enable([
	'abbr'
]);

export function hydrateFrom(markdownPostPath) {

	const MARKDOWN_POST = fs
	.readFileSync(markdownPostPath, { encoding: 'utf8' })
	.replace(/^\uFEFF/, '') // Deletes the UTF8 BOM

	return POST_TEMPLATE
		.replaceAll('{{title}}', getTitle(MARKDOWN_POST))
		.replaceAll('{{article}}', md.render(MARKDOWN_POST))
}

function getTitle(markdown) {
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
