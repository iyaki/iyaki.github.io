import { parse } from 'node-html-parser'
import { read, write } from './utils/file.js'

const HTML_PATH = '../docs/blog.html'

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
		.replaceAll('{{dateAdded}}', getHumanDate(article.datePublished))
		.replaceAll('{{articleLink}}', article.urlPath)
}

function getHumanDate(date) {
	const dd = String(date.getDate()).padStart(2, '0')
	const mm = String(date.getMonth() + 1).padStart(2, '0') //January is 0!
	const yyyy = date.getFullYear()
	return `${dd}/${mm}/${yyyy}`
}
