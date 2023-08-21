import { Remarkable } from 'remarkable'
import { linkify } from 'remarkable/dist/cjs/linkify.js';
import { replaceLinks } from '../wikilinker.js';

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
		'FTP': 'File Transfer Protocol',
		'RSS': 'Really Simple Sindication',
		'HTTP': 'HyperText Transfer Protocol',
		'HTML': 'Hyper Text Markup Language',
		'CSS': 'Cascading Style Sheets',
		'JS': 'Javascript',
		'UTN': 'Universidad Tecnológica Nacional',
		'PHP': 'PHP: Hypertext Preprocessor',
		'IT': 'Information Technology',
		'CMS': 'Content Management System',
		'CRM': 'Customer Relationship Management',
		'TBD': 'To Be Defined',
		'SaaS': 'Software as a Service',
		'PaaS': 'Platform as a Service',
		'IaaS': 'Infrastructure as a Service',
		'IaaC': 'Infrastructure as Code',
		'RR.HH.': 'Recursos Humanos',
		'O.S.': 'Operating System',
		'OO.SS.': 'Operating Systems',
		'DoS': 'Deniegal of Service',
		'DDoS': 'Distributed Deniegal of Service',
		'P2P': 'Peer To Peer',
		'SQL': 'Structured Query Language',
		'ISP': 'Internet Service Provider',
		'DNS': 'Domain Name System',
		'IRC': 'Internet Relay Chat',
		'DOM': 'Document Object Model',
		'OOP': 'Object Oriented Programming',
		'POO': 'Programación Orientada a Objetos',
		'FP': 'Functional Programming',
		'DRY': 'Don\'t Repeat Yourself (programming principal)',
		'KISS': 'Keep it Simple, Stupid',
		'XSS': 'Cross Site Scripting',
		'SEO': 'Search Engine Optimization',
		'UI': 'User Interface',
		'UX': 'User Experience',
		"API": "Application Programming Interface",
		"JSON": "JavaScript Object Notation",
		"RPC": "Remote Procedure Call",
		"SDK": "Software Development Kit",
		"REST": "Representational State Transfer",
		"RESTful": "Representational State Transfer",
		"URI": "Uniform Resource Identifier",
		"URL": "Uniform Resource Locator",
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

export function replaceWikiLinks(markdown) {
	return replaceLinks(markdown)
}
