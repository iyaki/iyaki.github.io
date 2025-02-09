export function replaceLinks(markdown) {
	markdown = replaceCommonLinks(markdown)

	return markdown
}

function replaceCommonLinks(markdown) {
	const links = {
		'Github': 'https://github.com/',
		'Github Actions': 'https://github.com/features/actions',
		'git': 'https://git-scm.com/',
		'Feedly': 'https://feedly.com/',
		'Brave': 'https://brave.com/',
		'Markdown': 'https://es.wikipedia.org/wiki/Markdown',
		'Notion': 'https://www.notion.so/',
		'Google': 'https://www.google.com/',
		'ChatGPT': 'https://chatgpt.com/',
		'OpenAI': 'https://openai.com/',
		'Recopilador de contenidos curados': '/curated.html',
		'iyaki.ar': 'https://iyaki.ar/',
	}

	for (const keyword in links) {
		markdown = markdown.replaceAll(
			getWikilinkFor(keyword),
			'[' + keyword + '](' + links[keyword] + ')'
		)
	}

	return markdown
}

function getWikilinkFor(string) {
	return '[[' + string + ']]'
}
