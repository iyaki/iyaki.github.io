import { parse } from 'node-html-parser'
import { read, write } from './utils/file.js'

const HTML_PATH = '../docs/posts/index.html'

const rootElement = parse(read(HTML_PATH), {comment: true})

const templateElement = rootElement.getElementById('article-template')

const templateHTML = templateElement.innerHTML


export function updateWithArticle(article) {
	templateElement.insertAdjacentHTML('afterend', hydrateTemplate(article))

	write(HTML_PATH, rootElement.innerHTML)
}

function hydrateTemplate(article) {
	return templateHTML
		.replaceAll('{{articleTitle}}', article.title)
		.replaceAll('{{dateAdded}}', article.datePublished.toISOString().slice(0,10))
		.replaceAll('{{articleLink}}', article.urlPath)
		.replaceAll('{{articleNote}}', article.isMd() ? '(Markdown version' : '')
}
