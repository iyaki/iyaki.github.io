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

export function addCommonAbbreviations(markdown) {
	const abbreviations = {
		'RSS': 'Really Simple Sindication',
		'HTML': 'Hyper Text Markup Language',
		'CSS': 'Cascading Style Sheets',
		'JS': 'Javascript',
		'UTN': 'Universidad Tecnológica Nacional',
		'PHP': 'PHP: Hypertext Preprocessor',
		'IT': 'Information Technology',
		'CMS': 'Content Management System',
		'TBD': 'To Be Defined',
	}

	let markdownWithAbbreviations = markdown
	for (const abbreviation in abbreviations) {
		if (! markdown.includes(abbreviation)) {
			continue
		}

		const abbreviationMark = '*[' + abbreviation + ']:'
		if (markdown.includes(abbreviationMark)) {
			continue
		}

		markdownWithAbbreviations += `\n${abbreviationMark} ${abbreviations[abbreviation]}`
	}

	if (markdown === markdownWithAbbreviations) {
		return markdown
	}

	return markdownWithAbbreviations + '\n'
}
