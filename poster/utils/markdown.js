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
		'HTTPS': 'HyperText Transfer Protocol Secure',
		'SSH': 'Secure Shell Protocol',
		'SMTP': 'Simple Mail Transfer Protocol',
		'IMAP': 'Internet Message Access Protocol',
		'POP3': 'Post Office Protocol 3',
		'TCP': 'Transmission Control Protocol',
		'UDP': 'User Datagram Protocol',
		'TLS': 'Transport Layer Security',
		'SSL': 'Secure Sockets Layer',
		'IP': 'Internet Protocol',
		'IPv4': 'Internet Protocol version 4',
		'IPv6': 'Internet Protocol version 6',
		'XML': 'Extensible Markup Language',
		'HTML': 'Hyper Text Markup Language',
		'HTML5': 'Hyper Text Markup Language',
		'CSS': 'Cascading Style Sheets',
		'CSS3': 'Cascading Style Sheets',
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
		'OS': 'Operating System',
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
		'SOLID': 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
		'MVC': 'Model View Controller',
		'MVP': 'Model View Presenter',
		'MVVM': 'Model View ViewModel',
		'CRUD': 'Create, Read, Update, Delete',
		'ORM': 'Object Relational Mapping',
		'JIT': 'Just In Time',
		'CDN': 'Content Delivery Network',
		'SPA': 'Single Page Application',
		'MPA': 'Multi Page Application',
		'SSR': 'Server Side Rendering',
		'CSR': 'Client Side Rendering',
		'CSFR': 'Cross Site Request Forgery',
		'BFF': 'Backend For Frontend',
		'JWT': 'JSON Web Token',
		'RBAC': 'Role Based Access Control',
		'ABAC': 'Attribute Based Access Control',
		'FP': 'Functional Programming',
		'DRY': 'Don\'t Repeat Yourself (programming principal)',
		'KISS': 'Keep it Simple, Stupid',
		'YAGNI': 'You Aren\'t Gonna Need It',
		'XSS': 'Cross Site Scripting',
		'SQLi': 'SQL Injection',
		'SSO': 'Single Sign On',
		'2FA': 'Two Factor Authentication',
		'MFA': 'Multi Factor Authentication',
		'SEO': 'Search Engine Optimization',
		'GEO': 'Generative Engine Optimization',
		'UI': 'User Interface',
		'UX': 'User Experience',
		'API': 'Application Programming Interface',
		'JSON': 'JavaScript Object Notation',
		'RPC': 'Remote Procedure Call',
		'SDK': 'Software Development Kit',
		'REST': 'Representational State Transfer',
		'RESTful': 'Representational State Transfer',
		'URI': 'Uniform Resource Identifier',
		'URL': 'Uniform Resource Locator',
		'a.k.a.': 'also known as',
		'IDE': 'Integrated Development Environment',
		'IA': 'Inteligencia Artificial',
		'AI': 'Artificial Intelligence',
		'NLP': 'Natural Language Processing',
		'LLM': 'Large Language Model',
		'LLMs': 'Large Language Models',
		'CLI': 'Command Line Interface',
		'GUI': 'Graphical User Interface',
		'IC': 'Individual Contributor',
		'B2B': 'Business to Business',
		'B2C': 'Business to Consumer',
		'B2B2C': 'Business to Business to Consumer',
		'CI': 'Continuous Integration',
		'CD': 'Continuous Delivery',
		'CI/CD': 'Continuous Integration and Delivery',
		'PR': 'Pull Request',
		'MR': 'Merge Request',
		'QA': 'Quality Assurance',
		'R&D': 'Research and Development',
		'RFP': 'Request for Proposal',
		'RFC': 'Request for Comments',
		'KPI': 'Key Performance Indicator',
		'OKR': 'Objectives and Key Results',
		'OKRs': 'Objectives and Key Results',
		'ROI': 'Return on Investment',
		'I+D': 'Investigación y Desarrollo',
		'regex': 'Regular Expression',
		'RegEx': 'Regular Expression',
		'Regex': 'Regular Expression',
		'IoT': 'Internet of Things',
		'ML': 'Machine Learning',
		'DL': 'Deep Learning',
		'RL': 'Reinforcement Learning',
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
