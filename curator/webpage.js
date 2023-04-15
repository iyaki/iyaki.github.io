import fs from 'fs'
import { parse } from 'node-html-parser'

// TODO: Agregar propagandas

const HTML_PATH = '../docs/curated.html'

const rootElement = parse(fs.readFileSync(HTML_PATH, { encoding: 'utf8' }))

const templateElement = rootElement.getElementById('article-template')

const templateHTML = templateElement.innerHTML

export function publishedArticles() {
	return rootElement
		.querySelectorAll('body > main > section > article')
		.map(article => article.getAttribute('id'))
}

export function addArticle(articleData) {
	templateElement.insertAdjacentHTML('afterend', hydrateTemplate(articleData))
}

function hydrateTemplate(articleData) {
	return templateHTML
		.replace('{{articleID}}', articleData.id)
		.replace('{{articleTitle}}', articleData.title)
		.replace('{{dateAdded}}', (new Date()).toISOString().slice(0,10))
		.replace('{{articleLink}}', articleData.url)
		.replace('{{articleComment}}', articleData.comment)
}

export function publishArticles() {
	fs.writeFileSync(HTML_PATH, rootElement.innerHTML);
}
