const BASE_URL_PATH = '/posts/'
const BASE_PATH = '../docs' + BASE_URL_PATH

export function newMarkdownArticle({
	filename,
	title,
	content,
	datePublished,
	newPublication,
}) {
	return {
		get title() {
			return title
		},
		content,
		get datePublished() {
			return datePublished
		},
		get newPublication() {
			return newPublication
		},
		get path() {
			return getPostPath(filename)
		},
		get urlPath() {
			return getPostUrlPath(filename)
		},
	}
}

export function newHtmlArticleFrom({
	markDownArticle,
	filename,
	content,
}) {
	return {
		get title() {
			return markDownArticle.title
		},
		get content() {
			return content
		},
		get datePublished() {
			return markDownArticle.datePublished
		},
		get newPublication() {
			return markDownArticle.newPublication
		},
		get urlPathHtml() {
			return getPostUrlPath(filename)
		},
		get urlPathMd() {
			return markDownArticle.urlPath
		},
	}
}

function getPostPath(filename) {
	return BASE_PATH + filename
}

function getPostUrlPath(filename) {
	return BASE_URL_PATH + filename
}
